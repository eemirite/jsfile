						var Hs = oa((function(e, t) {
							return null == e ? {} : function(e, t) {
								return zr(e, t, (function(t, n) {
									return Is(e, n)
								}))
							}(e, t)
						}));

						function Ys(e, t) {
							if (null == e) return {};
							var n = Dt(ua(e), (function(e) {
								return [e]
							}));
							return t = da(t), zr(e, n, (function(e, n) {
								return t(e, n[0])
							}))
						}
						var Vs = Zi(Ns),
							zs = Zi(Rs);

						function Qs(e) {
							return null == e ? [] : tn(e, Ns(e))
						}
						var Gs = Ni((function(e, t, n) {
							return t = t.toLowerCase(), e + (n ? qs(t) : t)
						}));

						function qs(e) {
							return nu(Es(e).toLowerCase())
						}

						function Ws(e) {
							return (e = Es(e)) && e.replace(Se, sn).replace(tt, "")
						}
						var Ks = Ni((function(e, t, n) {
								return e + (n ? "-" : "") + t.toLowerCase()
							})),
							Xs = Ni((function(e, t, n) {
								return e + (n ? " " : "") + t.toLowerCase()
							})),
							Js = Bi("toLowerCase");
						var Zs = Ni((function(e, t, n) {
							return e + (n ? "_" : "") + t.toLowerCase()
						}));
						var eu = Ni((function(e, t, n) {
							return e + (n ? " " : "") + nu(t)
						}));
						var tu = Ni((function(e, t, n) {
								return e + (n ? " " : "") + t.toUpperCase()
							})),
							nu = Bi("toUpperCase");

						function ru(e, t, n) {
							return e = Es(e), (t = n ? a : t) === a ? fn(e) ? yn(e) : jt(e) : e.match(t) || []
						}
						var iu = Xr((function(e, t) {
								try {
									return $t(e, a, t)
								} catch (e) {
									return ns(e) ? e : new i(e)
								}
							})),
							au = oa((function(e, t) {
								return Ot(t, (function(t) {
									t = Ha(t), ar(e, t, Do(e[t], e))
								})), e
							}));

						function ou(e) {
							return function() {
								return e
							}
						}
						var su = ji(),
							uu = ji(!0);

						function cu(e) {
							return e
						}

						function lu(e) {
							return Dr("function" == typeof e ? e : ur(e, 1))
						}
						var fu = Xr((function(e, t) {
								return function(n) {
									return xr(n, e, t)
								}
							})),
							du = Xr((function(e, t) {
								return function(n) {
									return xr(e, n, t)
								}
							}));

						function hu(e, t, n) {
							var r = Ns(t),
								i = Sr(t, r);
							null != n || os(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = Sr(t, Ns(t)));
							var a = !(os(n) && "chain" in n && !n.chain),
								o = rs(e);
							return Ot(i, (function(n) {
								var r = t[n];
								e[n] = r, o && (e.prototype[n] = function() {
									var t = this.__chain__;
									if (a || t) {
										var n = e(this.__wrapped__),
											i = n.__actions__ = xi(this.__actions__);
										return i.push({
											func: r,
											args: arguments,
											thisArg: e
										}), n.__chain__ = t, n
									}
									return r.apply(e, Bt([this.value()], arguments))
								})
							})), e
						}

						function pu() {}
						var _u = zi(Dt),
							mu = zi(Pt),
							bu = zi(Ft);

						function gu(e) {
							return Ea(e) ? qt(Ha(e)) : function(e) {
								return function(t) {
									return wr(t, e)
								}
							}(e)
						}
						var vu = qi(),
							yu = qi(!0);

						function Au() {
							return []
						}

						function Su() {
							return !1
						}
						var wu = Vi((function(e, t) {
								return e + t
							}), 0),
							Eu = Xi("ceil"),
							Tu = Vi((function(e, t) {
								return e / t
							}), 1),
							Cu = Xi("floor");
						var $u = Vi((function(e, t) {
								return e * t
							}), 1),
							ku = Xi("round"),
							Ou = Vi((function(e, t) {
								return e - t
							}), 0);
						return Un.after = function(e, t) {
							if ("function" != typeof t) throw new ke(o);
							return e = ys(e),
								function() {
									if (--e < 1) return t.apply(this, arguments)
								}
						}, Un.ary = Io, Un.assign = Ts, Un.assignIn = Cs, Un.assignInWith = $s, Un.assignWith = ks, Un.at = Os, Un.before = Lo, Un.bind = Do, Un.bindAll = au, Un.bindKey = Bo, Un.castArray = function() {
							if (!arguments.length) return [];
							var e = arguments[0];
							return Ko(e) ? e : [e]
						}, Un.chain = go, Un.chunk = function(e, t, r) {
							t = (r ? wa(e, t, r) : t === a) ? 1 : vt(ys(t), 0);
							var i = null == e ? 0 : e.length;
							if (!i || t < 1) return [];
							for (var o = 0, s = 0, u = n(it(i / t)); o < i;) u[s++] = ii(e, o, o += t);
							return u
						}, Un.compact = function(e) {
							for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
								var a = e[t];
								a && (i[r++] = a)
							}
							return i
						}, Un.concat = function() {
							var e = arguments.length;
							if (!e) return [];
							for (var t = n(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
							return Bt(Ko(r) ? xi(r) : [r], br(t, 1))
						}, Un.cond = function(e) {
							var t = null == e ? 0 : e.length,
								n = da();
							return e = t ? Dt(e, (function(e) {
								if ("function" != typeof e[1]) throw new ke(o);
								return [n(e[0]), e[1]]
							})) : [], Xr((function(n) {
								for (var r = -1; ++r < t;) {
									var i = e[r];
									if ($t(i[0], this, n)) return $t(i[1], this, n)
								}
							}))
						}, Un.conforms = function(e) {
							return function(e) {
								var t = Ns(e);
								return function(n) {
									return cr(n, e, t)
								}
							}(ur(e, 1))
						}, Un.constant = ou, Un.countBy = Ao, Un.create = function(e, t) {
							var n = jn(e);
							return null == t ? n : ir(n, t)
						}, Un.curry = function e(t, n, r) {
							var i = ea(t, 8, a, a, a, a, a, n = r ? a : n);
							return i.placeholder = e.placeholder, i
						}, Un.curryRight = function e(t, n, r) {
							var i = ea(t, c, a, a, a, a, a, n = r ? a : n);
							return i.placeholder = e.placeholder, i
						}, Un.debounce = No, Un.defaults = xs, Un.defaultsDeep = Ps, Un.defer = Ro, Un.delay = Fo, Un.difference = za, Un.differenceBy = Qa, Un.differenceWith = Ga, Un.drop = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							return r ? ii(e, (t = n || t === a ? 1 : ys(t)) < 0 ? 0 : t, r) : []
						}, Un.dropRight = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							return r ? ii(e, 0, (t = r - (t = n || t === a ? 1 : ys(t))) < 0 ? 0 : t) : []
						}, Un.dropRightWhile = function(e, t) {
							return e && e.length ? pi(e, da(t, 3), !0, !0) : []
						}, Un.dropWhile = function(e, t) {
							return e && e.length ? pi(e, da(t, 3), !0) : []
						}, Un.fill = function(e, t, n, r) {
							var i = null == e ? 0 : e.length;
							return i ? (n && "number" != typeof n && wa(e, t, n) && (n = 0, r = i), function(e, t, n, r) {
								var i = e.length;
								for ((n = ys(n)) < 0 && (n = -n > i ? 0 : i + n), (r = r === a || r > i ? i : ys(r)) < 0 && (r += i), r = n > r ? 0 : As(r); n < r;) e[n++] = t;
								return e
							}(e, t, n, r)) : []
						}, Un.filter = function(e, t) {
							return (Ko(e) ? Mt : mr)(e, da(t, 3))
						}, Un.flatMap = function(e, t) {
							return br(Oo(e, t), 1)
						}, Un.flatMapDeep = function(e, t) {
							return br(Oo(e, t), p)
						}, Un.flatMapDepth = function(e, t, n) {
							return n = n === a ? 1 : ys(n), br(Oo(e, t), n)
						}, Un.flatten = Ka, Un.flattenDeep = function(e) {
							return (null == e ? 0 : e.length) ? br(e, p) : []
						}, Un.flattenDepth = function(e, t) {
							return (null == e ? 0 : e.length) ? br(e, t = t === a ? 1 : ys(t)) : []
						}, Un.flip = function(e) {
							return ea(e, 512)
						}, Un.flow = su, Un.flowRight = uu, Un.fromPairs = function(e) {
							for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
								var i = e[t];
								r[i[0]] = i[1]
							}
							return r
						}, Un.functions = function(e) {
							return null == e ? [] : Sr(e, Ns(e))
						}, Un.functionsIn = function(e) {
							return null == e ? [] : Sr(e, Rs(e))
						}, Un.groupBy = Co, Un.initial = function(e) {
							return (null == e ? 0 : e.length) ? ii(e, 0, -1) : []
						}, Un.intersection = Ja, Un.intersectionBy = Za, Un.intersectionWith = eo, Un.invert = Ls, Un.invertBy = Ds, Un.invokeMap = $o, Un.iteratee = lu, Un.keyBy = ko, Un.keys = Ns, Un.keysIn = Rs, Un.map = Oo, Un.mapKeys = function(e, t) {
							var n = {};
							return t = da(t, 3), yr(e, (function(e, r, i) {
								ar(n, t(e, r, i), e)
							})), n
						}, Un.mapValues = function(e, t) {
							var n = {};
							return t = da(t, 3), yr(e, (function(e, r, i) {
								ar(n, r, t(e, r, i))
							})), n
						}, Un.matches = function(e) {
							return Ur(ur(e, 1))
						}, Un.matchesProperty = function(e, t) {
							return jr(e, ur(t, 1))
						}, Un.memoize = Uo, Un.merge = Fs, Un.mergeWith = Us, Un.method = fu, Un.methodOf = du, Un.mixin = hu, Un.negate = jo, Un.nthArg = function(e) {
							return e = ys(e), Xr((function(t) {
								return Yr(t, e)
							}))
						}, Un.omit = js, Un.omitBy = function(e, t) {
							return Ys(e, jo(da(t)))
						}, Un.once = function(e) {
							return Lo(2, e)
						}, Un.orderBy = function(e, t, n, r) {
							return null == e ? [] : (Ko(t) || (t = null == t ? [] : [t]), Ko(n = r ? a : n) || (n = null == n ? [] : [n]), Vr(e, t, n))
						}, Un.over = _u, Un.overArgs = Ho, Un.overEvery = mu, Un.overSome = bu, Un.partial = Yo, Un.partialRight = Vo, Un.partition = xo, Un.pick = Hs, Un.pickBy = Ys, Un.property = gu, Un.propertyOf = function(e) {
							return function(t) {
								return null == e ? a : wr(e, t)
							}
						}, Un.pull = no, Un.pullAll = ro, Un.pullAllBy = function(e, t, n) {
							return e && e.length && t && t.length ? Qr(e, t, da(n, 2)) : e
						}, Un.pullAllWith = function(e, t, n) {
							return e && e.length && t && t.length ? Qr(e, t, a, n) : e
						}, Un.pullAt = io, Un.range = vu, Un.rangeRight = yu, Un.rearg = zo, Un.reject = function(e, t) {
							return (Ko(e) ? Mt : mr)(e, jo(da(t, 3)))
						}, Un.remove = function(e, t) {
							var n = [];
							if (!e || !e.length) return n;
							var r = -1,
								i = [],
								a = e.length;
							for (t = da(t, 3); ++r < a;) {
								var o = e[r];
								t(o, r, e) && (n.push(o), i.push(r))
							}
							return Gr(e, i), n
						}, Un.rest = function(e, t) {
							if ("function" != typeof e) throw new ke(o);
							return Xr(e, t = t === a ? t : ys(t))
						}, Un.reverse = ao, Un.sampleSize = function(e, t, n) {
							return t = (n ? wa(e, t, n) : t === a) ? 1 : ys(t), (Ko(e) ? Jn : Zr)(e, t)
						}, Un.set = function(e, t, n) {
							return null == e ? e : ei(e, t, n)
						}, Un.setWith = function(e, t, n, r) {
							return r = "function" == typeof r ? r : a, null == e ? e : ei(e, t, n, r)
						}, Un.shuffle = function(e) {
							return (Ko(e) ? Zn : ri)(e)
						}, Un.slice = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							return r ? (n && "number" != typeof n && wa(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : ys(t), n = n === a ? r : ys(n)), ii(e, t, n)) : []
						}, Un.sortBy = Po, Un.sortedUniq = function(e) {
							return e && e.length ? ui(e) : []
						}, Un.sortedUniqBy = function(e, t) {
							return e && e.length ? ui(e, da(t, 2)) : []
						}, Un.split = function(e, t, n) {
							return n && "number" != typeof n && wa(e, t, n) && (t = n = a), (n = n === a ? b : n >>> 0) ? (e = Es(e)) && ("string" == typeof t || null != t && !fs(t)) && (!(t = li(t)) && ln(e)) ? Si(bn(e), 0, n) : e.split(t, n) : []
						}, Un.spread = function(e, t) {
							if ("function" != typeof e) throw new ke(o);
							return t = null == t ? 0 : vt(ys(t), 0), Xr((function(n) {
								var r = n[t],
									i = Si(n, 0, t);
								return r && Bt(i, r), $t(e, this, i)
							}))
						}, Un.tail = function(e) {
							var t = null == e ? 0 : e.length;
							return t ? ii(e, 1, t) : []
						}, Un.take = function(e, t, n) {
							return e && e.length ? ii(e, 0, (t = n || t === a ? 1 : ys(t)) < 0 ? 0 : t) : []
						}, Un.takeRight = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							return r ? ii(e, (t = r - (t = n || t === a ? 1 : ys(t))) < 0 ? 0 : t, r) : []
						}, Un.takeRightWhile = function(e, t) {
							return e && e.length ? pi(e, da(t, 3), !1, !0) : []
						}, Un.takeWhile = function(e, t) {
							return e && e.length ? pi(e, da(t, 3)) : []
						}, Un.tap = function(e, t) {
							return t(e), e
						}, Un.throttle = function(e, t, n) {
							var r = !0,
								i = !0;
							if ("function" != typeof e) throw new ke(o);
							return os(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), No(e, t, {
								leading: r,
								maxWait: t,
								trailing: i
							})
						}, Un.thru = vo, Un.toArray = gs, Un.toPairs = Vs, Un.toPairsIn = zs, Un.toPath = function(e) {
							return Ko(e) ? Dt(e, Ha) : ps(e) ? [e] : xi(ja(Es(e)))
						}, Un.toPlainObject = ws, Un.transform = function(e, t, n) {
							var r = Ko(e),
								i = r || es(e) || _s(e);
							if (t = da(t, 4), null == n) {
								var a = e && e.constructor;
								n = i ? r ? new a : [] : os(e) && rs(a) ? jn(ze(e)) : {}
							}
							return (i ? Ot : yr)(e, (function(e, r, i) {
								return t(n, e, r, i)
							})), n
						}, Un.unary = function(e) {
							return Io(e, 1)
						}, Un.union = oo, Un.unionBy = so, Un.unionWith = uo, Un.uniq = function(e) {
							return e && e.length ? fi(e) : []
						}, Un.uniqBy = function(e, t) {
							return e && e.length ? fi(e, da(t, 2)) : []
						}, Un.uniqWith = function(e, t) {
							return t = "function" == typeof t ? t : a, e && e.length ? fi(e, a, t) : []
						}, Un.unset = function(e, t) {
							return null == e || di(e, t)
						}, Un.unzip = co, Un.unzipWith = lo, Un.update = function(e, t, n) {
							return null == e ? e : hi(e, t, vi(n))
						}, Un.updateWith = function(e, t, n, r) {
							return r = "function" == typeof r ? r : a, null == e ? e : hi(e, t, vi(n), r)
						}, Un.values = Qs, Un.valuesIn = function(e) {
							return null == e ? [] : tn(e, Rs(e))
						}, Un.without = fo, Un.words = ru, Un.wrap = function(e, t) {
							return Yo(vi(t), e)
						}, Un.xor = ho, Un.xorBy = po, Un.xorWith = _o, Un.zip = mo, Un.zipObject = function(e, t) {
							return bi(e || [], t || [], tr)
						}, Un.zipObjectDeep = function(e, t) {
							return bi(e || [], t || [], ei)
						}, Un.zipWith = bo, Un.entries = Vs, Un.entriesIn = zs, Un.extend = Cs, Un.extendWith = $s, hu(Un, Un), Un.add = wu, Un.attempt = iu, Un.camelCase = Gs, Un.capitalize = qs, Un.ceil = Eu, Un.clamp = function(e, t, n) {
							return n === a && (n = t, t = a), n !== a && (n = (n = Ss(n)) == n ? n : 0), t !== a && (t = (t = Ss(t)) == t ? t : 0), sr(Ss(e), t, n)
						}, Un.clone = function(e) {
							return ur(e, 4)
						}, Un.cloneDeep = function(e) {
							return ur(e, 5)
						}, Un.cloneDeepWith = function(e, t) {
							return ur(e, 5, t = "function" == typeof t ? t : a)
						}, Un.cloneWith = function(e, t) {
							return ur(e, 4, t = "function" == typeof t ? t : a)
						}, Un.conformsTo = function(e, t) {
							return null == t || cr(e, t, Ns(t))
						}, Un.deburr = Ws, Un.defaultTo = function(e, t) {
							return null == e || e != e ? t : e
						}, Un.divide = Tu, Un.endsWith = function(e, t, n) {
							e = Es(e), t = li(t);
							var r = e.length,
								i = n = n === a ? r : sr(ys(n), 0, r);
							return (n -= t.length) >= 0 && e.slice(n, i) == t
						}, Un.eq = Qo, Un.escape = function(e) {
							return (e = Es(e)) && J.test(e) ? e.replace(K, un) : e
						}, Un.escapeRegExp = function(e) {
							return (e = Es(e)) && oe.test(e) ? e.replace(ae, "\\$&") : e
						}, Un.every = function(e, t, n) {
							var r = Ko(e) ? Pt : pr;
							return n && wa(e, t, n) && (t = a), r(e, da(t, 3))
						}, Un.find = So, Un.findIndex = qa, Un.findKey = function(e, t) {
							return Ht(e, da(t, 3), yr)
						}, Un.findLast = wo, Un.findLastIndex = Wa, Un.findLastKey = function(e, t) {
							return Ht(e, da(t, 3), Ar)
						}, Un.floor = Cu, Un.forEach = Eo, Un.forEachRight = To, Un.forIn = function(e, t) {
							return null == e ? e : gr(e, da(t, 3), Rs)
						}, Un.forInRight = function(e, t) {
							return null == e ? e : vr(e, da(t, 3), Rs)
						}, Un.forOwn = function(e, t) {
							return e && yr(e, da(t, 3))
						}, Un.forOwnRight = function(e, t) {
							return e && Ar(e, da(t, 3))
						}, Un.get = Ms, Un.gt = Go, Un.gte = qo, Un.has = function(e, t) {
							return null != e && va(e, t, $r)
						}, Un.hasIn = Is, Un.head = Xa, Un.identity = cu, Un.includes = function(e, t, n, r) {
							e = Jo(e) ? e : Qs(e), n = n && !r ? ys(n) : 0;
							var i = e.length;
							return n < 0 && (n = vt(i + n, 0)), hs(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Vt(e, t, n) > -1
						}, Un.indexOf = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							if (!r) return -1;
							var i = null == n ? 0 : ys(n);
							return i < 0 && (i = vt(r + i, 0)), Vt(e, t, i)
						}, Un.inRange = function(e, t, n) {
							return t = vs(t), n === a ? (n = t, t = 0) : n = vs(n),
								function(e, t, n) {
									return e >= yt(t, n) && e < vt(t, n)
								}(e = Ss(e), t, n)
						}, Un.invoke = Bs, Un.isArguments = Wo, Un.isArray = Ko, Un.isArrayBuffer = Xo, Un.isArrayLike = Jo, Un.isArrayLikeObject = Zo, Un.isBoolean = function(e) {
							return !0 === e || !1 === e || ss(e) && Tr(e) == A
						}, Un.isBuffer = es, Un.isDate = ts, Un.isElement = function(e) {
							return ss(e) && 1 === e.nodeType && !ls(e)
						}, Un.isEmpty = function(e) {
							if (null == e) return !0;
							if (Jo(e) && (Ko(e) || "string" == typeof e || "function" == typeof e.splice || es(e) || _s(e) || Wo(e))) return !e.length;
							var t = ga(e);
							if (t == C || t == P) return !e.size;
							if ($a(e)) return !Br(e).length;
							for (var n in e)
								if (Le.call(e, n)) return !1;
							return !0
						}, Un.isEqual = function(e, t) {
							return Mr(e, t)
						}, Un.isEqualWith = function(e, t, n) {
							var r = (n = "function" == typeof n ? n : a) ? n(e, t) : a;
							return r === a ? Mr(e, t, a, n) : !!r
						}, Un.isError = ns, Un.isFinite = function(e) {
							return "number" == typeof e && pt(e)
						}, Un.isFunction = rs, Un.isInteger = is, Un.isLength = as, Un.isMap = us, Un.isMatch = function(e, t) {
							return e === t || Ir(e, t, pa(t))
						}, Un.isMatchWith = function(e, t, n) {
							return n = "function" == typeof n ? n : a, Ir(e, t, pa(t), n)
						}, Un.isNaN = function(e) {
							return cs(e) && e != +e
						}, Un.isNative = function(e) {
							if (Ca(e)) throw new i("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
							return Lr(e)
						}, Un.isNil = function(e) {
							return null == e
						}, Un.isNull = function(e) {
							return null === e
						}, Un.isNumber = cs, Un.isObject = os, Un.isObjectLike = ss, Un.isPlainObject = ls, Un.isRegExp = fs, Un.isSafeInteger = function(e) {
							return is(e) && e >= -_ && e <= _
						}, Un.isSet = ds, Un.isString = hs, Un.isSymbol = ps, Un.isTypedArray = _s, Un.isUndefined = function(e) {
							return e === a
						}, Un.isWeakMap = function(e) {
							return ss(e) && ga(e) == L
						}, Un.isWeakSet = function(e) {
							return ss(e) && "[object WeakSet]" == Tr(e)
						}, Un.join = function(e, t) {
							return null == e ? "" : mt.call(e, t)
						}, Un.kebabCase = Ks, Un.last = to, Un.lastIndexOf = function(e, t, n) {
							var r = null == e ? 0 : e.length;
							if (!r) return -1;
							var i = r;
							return n !== a && (i = (i = ys(n)) < 0 ? vt(r + i, 0) : yt(i, r - 1)), t == t ? function(e, t, n) {
								for (var r = n + 1; r--;)
									if (e[r] === t) return r;
								return r
							}(e, t, i) : Yt(e, Qt, i, !0)
						}, Un.lowerCase = Xs, Un.lowerFirst = Js, Un.lt = ms, Un.lte = bs, Un.max = function(e) {
							return e && e.length ? _r(e, cu, Cr) : a
						}, Un.maxBy = function(e, t) {
							return e && e.length ? _r(e, da(t, 2), Cr) : a
						}, Un.mean = function(e) {
							return Gt(e, cu)
						}, Un.meanBy = function(e, t) {
							return Gt(e, da(t, 2))
						}, Un.min = function(e) {
							return e && e.length ? _r(e, cu, Rr) : a
						}, Un.minBy = function(e, t) {
							return e && e.length ? _r(e, da(t, 2), Rr) : a
						}, Un.stubArray = Au, Un.stubFalse = Su, Un.stubObject = function() {
							return {}
						}, Un.stubString = function() {
							return ""
						}, Un.stubTrue = function() {
							return !0
						}, Un.multiply = $u, Un.nth = function(e, t) {
							return e && e.length ? Yr(e, ys(t)) : a
						}, Un.noConflict = function() {
							return _t._ === this && (_t._ = Fe), this
						}, Un.noop = pu, Un.now = Mo, Un.pad = function(e, t, n) {
							e = Es(e);
							var r = (t = ys(t)) ? mn(e) : 0;
							if (!t || r >= t) return e;
							var i = (t - r) / 2;
							return Qi(at(i), n) + e + Qi(it(i), n)
						}, Un.padEnd = function(e, t, n) {
							e = Es(e);
							var r = (t = ys(t)) ? mn(e) : 0;
							return t && r < t ? e + Qi(t - r, n) : e
						}, Un.padStart = function(e, t, n) {
							e = Es(e);
							var r = (t = ys(t)) ? mn(e) : 0;
							return t && r < t ? Qi(t - r, n) + e : e
						}, Un.parseInt = function(e, t, n) {
							return n || null == t ? t = 0 : t && (t = +t), Wt(Es(e).replace(se, ""), t || 0)
						}, Un.random = function(e, t, n) {
							if (n && "boolean" != typeof n && wa(e, t, n) && (t = n = a), n === a && ("boolean" == typeof t ? (n = t, t = a) : "boolean" == typeof e && (n = e, e = a)), e === a && t === a ? (e = 0, t = 1) : (e = vs(e), t === a ? (t = e, e = 0) : t = vs(t)), e > t) {
								var r = e;
								e = t, t = r
							}
							if (n || e % 1 || t % 1) {
								var i = Sn();
								return yt(e + i * (t - e + ft("1e-" + ((i + "").length - 1))), t)
							}
							return qr(e, t)
						}, Un.reduce = function(e, t, n) {
							var r = Ko(e) ? Nt : Kt,
								i = arguments.length < 3;
							return r(e, da(t, 4), n, i, dr)
						}, Un.reduceRight = function(e, t, n) {
							var r = Ko(e) ? Rt : Kt,
								i = arguments.length < 3;
							return r(e, da(t, 4), n, i, hr)
						}, Un.repeat = function(e, t, n) {
							return t = (n ? wa(e, t, n) : t === a) ? 1 : ys(t), Kr(Es(e), t)
						}, Un.replace = function() {
							var e = arguments,
								t = Es(e[0]);
							return e.length < 3 ? t : t.replace(e[1], e[2])
						}, Un.result = function(e, t, n) {
							var r = -1,
								i = (t = yi(t, e)).length;
							for (i || (i = 1, e = a); ++r < i;) {
								var o = null == e ? a : e[Ha(t[r])];
								o === a && (r = i, o = n), e = rs(o) ? o.call(e) : o
							}
							return e
						}, Un.round = ku, Un.runInContext = e, Un.sample = function(e) {
							return (Ko(e) ? Xn : Jr)(e)
						}, Un.size = function(e) {
							if (null == e) return 0;
							if (Jo(e)) return hs(e) ? mn(e) : e.length;
							var t = ga(e);
							return t == C || t == P ? e.size : Br(e).length
						}, Un.snakeCase = Zs, Un.some = function(e, t, n) {
							var r = Ko(e) ? Ft : ai;
							return n && wa(e, t, n) && (t = a), r(e, da(t, 3))
						}, Un.sortedIndex = function(e, t) {
							return oi(e, t)
						}, Un.sortedIndexBy = function(e, t, n) {
							return si(e, t, da(n, 2))
						}, Un.sortedIndexOf = function(e, t) {
							var n = null == e ? 0 : e.length;
							if (n) {
								var r = oi(e, t);
								if (r < n && Qo(e[r], t)) return r
							}
							return -1
						}, Un.sortedLastIndex = function(e, t) {
							return oi(e, t, !0)
						}, Un.sortedLastIndexBy = function(e, t, n) {
							return si(e, t, da(n, 2), !0)
						}, Un.sortedLastIndexOf = function(e, t) {
							if (null == e ? 0 : e.length) {
								var n = oi(e, t, !0) - 1;
								if (Qo(e[n], t)) return n
							}
							return -1
						}, Un.startCase = eu, Un.startsWith = function(e, t, n) {
							return e = Es(e), n = null == n ? 0 : sr(ys(n), 0, e.length), t = li(t), e.slice(n, n + t.length) == t
						}, Un.subtract = Ou, Un.sum = function(e) {
							return e && e.length ? Xt(e, cu) : 0
						}, Un.sumBy = function(e, t) {
							return e && e.length ? Xt(e, da(t, 2)) : 0
						}, Un.template = function(e, t, n) {
							var r = Un.templateSettings;
							n && wa(e, t, n) && (t = a), e = Es(e), t = $s({}, t, r, ta);
							var o, s, u = $s({}, t.imports, r.imports, ta),
								c = Ns(u),
								l = tn(u, c),
								f = 0,
								d = t.interpolate || we,
								h = "__p += '",
								p = Ce((t.escape || we).source + "|" + d.source + "|" + (d === te ? _e : we).source + "|" + (t.evaluate || we).source + "|$", "g"),
								_ = "//# sourceURL=" + (Le.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
							e.replace(p, (function(t, n, r, i, a, u) {
								return r || (r = i), h += e.slice(f, u).replace(Ee, cn), n && (o = !0, h += "' +\n__e(" + n + ") +\n'"), a && (s = !0, h += "';\n" + a + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = u + t.length, t
							})), h += "';\n";
							var m = Le.call(t, "variable") && t.variable;
							if (m) {
								if (he.test(m)) throw new i("Invalid `variable` option passed into `_.template`")
							} else h = "with (obj) {\n" + h + "\n}\n";
							h = (s ? h.replace(Q, "") : h).replace(G, "$1").replace(q, "$1;"), h = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
							var b = iu((function() {
								return ue(c, _ + "return " + h).apply(a, l)
							}));
							if (b.source = h, ns(b)) throw b;
							return b
						}, Un.times = function(e, t) {
							if ((e = ys(e)) < 1 || e > _) return [];
							var n = b,
								r = yt(e, b);
							t = da(t), e -= b;
							for (var i = Jt(r, t); ++n < e;) t(n);
							return i
						}, Un.toFinite = vs, Un.toInteger = ys, Un.toLength = As, Un.toLower = function(e) {
							return Es(e).toLowerCase()
						}, Un.toNumber = Ss, Un.toSafeInteger = function(e) {
							return e ? sr(ys(e), -_, _) : 0 === e ? e : 0
						}, Un.toString = Es, Un.toUpper = function(e) {
							return Es(e).toUpperCase()
						}, Un.trim = function(e, t, n) {
							if ((e = Es(e)) && (n || t === a)) return Zt(e);
							if (!e || !(t = li(t))) return e;
							var r = bn(e),
								i = bn(t);
							return Si(r, rn(r, i), an(r, i) + 1).join("")
						}, Un.trimEnd = function(e, t, n) {
							if ((e = Es(e)) && (n || t === a)) return e.slice(0, gn(e) + 1);
							if (!e || !(t = li(t))) return e;
							var r = bn(e);
							return Si(r, 0, an(r, bn(t)) + 1).join("")
						}, Un.trimStart = function(e, t, n) {
							if ((e = Es(e)) && (n || t === a)) return e.replace(se, "");
							if (!e || !(t = li(t))) return e;
							var r = bn(e);
							return Si(r, rn(r, bn(t))).join("")
						}, Un.truncate = function(e, t) {
							var n = 30,
								r = "...";
							if (os(t)) {
								var i = "separator" in t ? t.separator : i;
								n = "length" in t ? ys(t.length) : n, r = "omission" in t ? li(t.omission) : r
							}
							var o = (e = Es(e)).length;
							if (ln(e)) {
								var s = bn(e);
								o = s.length
							}
							if (n >= o) return e;
							var u = n - mn(r);
							if (u < 1) return r;
							var c = s ? Si(s, 0, u).join("") : e.slice(0, u);
							if (i === a) return c + r;
							if (s && (u += c.length - u), fs(i)) {
								if (e.slice(u).search(i)) {
									var l, f = c;
									for (i.global || (i = Ce(i.source, Es(me.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(f);) var d = l.index;
									c = c.slice(0, d === a ? u : d)
								}
							} else if (e.indexOf(li(i), u) != u) {
								var h = c.lastIndexOf(i);
								h > -1 && (c = c.slice(0, h))
							}
							return c + r
						}, Un.unescape = function(e) {
							return (e = Es(e)) && X.test(e) ? e.replace(W, vn) : e
						}, Un.uniqueId = function(e) {
							var t = ++De;
							return Es(e) + t
						}, Un.upperCase = tu, Un.upperFirst = nu, Un.each = Eo, Un.eachRight = To, Un.first = Xa, hu(Un, function() {
							var e = {};
							return yr(Un, (function(t, n) {
								Le.call(Un.prototype, n) || (e[n] = t)
							})), e
						}(), {
							chain: !1
						}), Un.VERSION = "4.17.21", Ot(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
							Un[e].placeholder = Un
						})), Ot(["drop", "take"], (function(e, t) {
							Vn.prototype[e] = function(n) {
								n = n === a ? 1 : vt(ys(n), 0);
								var r = this.__filtered__ && !t ? new Vn(this) : this.clone();
								return r.__filtered__ ? r.__takeCount__ = yt(n, r.__takeCount__) : r.__views__.push({
									size: yt(n, b),
									type: e + (r.__dir__ < 0 ? "Right" : "")
								}), r
							}, Vn.prototype[e + "Right"] = function(t) {
								return this.reverse()[e](t).reverse()
							}
						})), Ot(["filter", "map", "takeWhile"], (function(e, t) {
							var n = t + 1,
								r = 1 == n || 3 == n;
							Vn.prototype[e] = function(e) {
								var t = this.clone();
								return t.__iteratees__.push({
									iteratee: da(e, 3),
									type: n
								}), t.__filtered__ = t.__filtered__ || r, t
							}
						})), Ot(["head", "last"], (function(e, t) {
							var n = "take" + (t ? "Right" : "");
							Vn.prototype[e] = function() {
								return this[n](1).value()[0]
							}
						})), Ot(["initial", "tail"], (function(e, t) {
							var n = "drop" + (t ? "" : "Right");
							Vn.prototype[e] = function() {
								return this.__filtered__ ? new Vn(this) : this[n](1)
							}
						})), Vn.prototype.compact = function() {
							return this.filter(cu)
						}, Vn.prototype.find = function(e) {
							return this.filter(e).head()
						}, Vn.prototype.findLast = function(e) {
							return this.reverse().find(e)
						}, Vn.prototype.invokeMap = Xr((function(e, t) {
							return "function" == typeof e ? new Vn(this) : this.map((function(n) {
								return xr(n, e, t)
							}))
						})), Vn.prototype.reject = function(e) {
							return this.filter(jo(da(e)))
						}, Vn.prototype.slice = function(e, t) {
							e = ys(e);
							var n = this;
							return n.__filtered__ && (e > 0 || t < 0) ? new Vn(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== a && (n = (t = ys(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
						}, Vn.prototype.takeRightWhile = function(e) {
							return this.reverse().takeWhile(e).reverse()
						}, Vn.prototype.toArray = function() {
							return this.take(b)
						}, yr(Vn.prototype, (function(e, t) {
							var n = /^(?:filter|find|map|reject)|While$/.test(t),
								r = /^(?:head|last)$/.test(t),
								i = Un[r ? "take" + ("last" == t ? "Right" : "") : t],
								o = r || /^find/.test(t);
							i && (Un.prototype[t] = function() {
								var t = this.__wrapped__,
									s = r ? [1] : arguments,
									u = t instanceof Vn,
									c = s[0],
									l = u || Ko(t),
									f = function(e) {
										var t = i.apply(Un, Bt([e], s));
										return r && d ? t[0] : t
									};
								l && n && "function" == typeof c && 1 != c.length && (u = l = !1);
								var d = this.__chain__,
									h = !!this.__actions__.length,
									p = o && !d,
									_ = u && !h;
								if (!o && l) {
									t = _ ? t : new Vn(this);
									var m = e.apply(t, s);
									return m.__actions__.push({
										func: vo,
										args: [f],
										thisArg: a
									}), new Yn(m, d)
								}
								return p && _ ? e.apply(this, s) : (m = this.thru(f), p ? r ? m.value()[0] : m.value() : m)
							})
						})), Ot(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
							var t = Oe[e],
								n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
								r = /^(?:pop|shift)$/.test(e);
							Un.prototype[e] = function() {
								var e = arguments;
								if (r && !this.__chain__) {
									var i = this.value();
									return t.apply(Ko(i) ? i : [], e)
								}
								return this[n]((function(n) {
									return t.apply(Ko(n) ? n : [], e)
								}))
							}
						})), yr(Vn.prototype, (function(e, t) {
							var n = Un[t];
							if (n) {
								var r = n.name + "";
								Le.call(Pn, r) || (Pn[r] = []), Pn[r].push({
									name: t,
									func: n
								})
							}
						})), Pn[Hi(a, 2).name] = [{
							name: "wrapper",
							func: a
						}], Vn.prototype.clone = function() {
							var e = new Vn(this.__wrapped__);
							return e.__actions__ = xi(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = xi(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = xi(this.__views__), e
						}, Vn.prototype.reverse = function() {
							if (this.__filtered__) {
								var e = new Vn(this);
								e.__dir__ = -1, e.__filtered__ = !0
							} else(e = this.clone()).__dir__ *= -1;
							return e
						}, Vn.prototype.value = function() {
							var e = this.__wrapped__.value(),
								t = this.__dir__,
								n = Ko(e),
								r = t < 0,
								i = n ? e.length : 0,
								a = function(e, t, n) {
									var r = -1,
										i = n.length;
									for (; ++r < i;) {
										var a = n[r],
											o = a.size;
										switch (a.type) {
											case "drop":
												e += o;
												break;
											case "dropRight":
												t -= o;
												break;
											case "take":
												t = yt(t, e + o);
												break;
											case "takeRight":
												e = vt(e, t - o)
										}
									}
									return {
										start: e,
										end: t
									}
								}(0, i, this.__views__),
								o = a.start,
								s = a.end,
								u = s - o,
								c = r ? s : o - 1,
								l = this.__iteratees__,
								f = l.length,
								d = 0,
								h = yt(u, this.__takeCount__);
							if (!n || !r && i == u && h == u) return _i(e, this.__actions__);
							var p = [];
							e: for (; u-- && d < h;) {
								for (var _ = -1, m = e[c += t]; ++_ < f;) {
									var b = l[_],
										g = b.iteratee,
										v = b.type,
										y = g(m);
									if (2 == v) m = y;
									else if (!y) {
										if (1 == v) continue e;
										break e
									}
								}
								p[d++] = m
							}
							return p
						}, Un.prototype.at = yo, Un.prototype.chain = function() {
							return go(this)
						}, Un.prototype.commit = function() {
							return new Yn(this.value(), this.__chain__)
						}, Un.prototype.next = function() {
							this.__values__ === a && (this.__values__ = gs(this.value()));
							var e = this.__index__ >= this.__values__.length;
							return {
								done: e,
								value: e ? a : this.__values__[this.__index__++]
							}
						}, Un.prototype.plant = function(e) {
							for (var t, n = this; n instanceof Hn;) {
								var r = Va(n);
								r.__index__ = 0, r.__values__ = a, t ? i.__wrapped__ = r : t = r;
								var i = r;
								n = n.__wrapped__
							}
							return i.__wrapped__ = e, t
						}, Un.prototype.reverse = function() {
							var e = this.__wrapped__;
							if (e instanceof Vn) {
								var t = e;
								return this.__actions__.length && (t = new Vn(this)), (t = t.reverse()).__actions__.push({
									func: vo,
									args: [ao],
									thisArg: a
								}), new Yn(t, this.__chain__)
							}
							return this.thru(ao)
						}, Un.prototype.toJSON = Un.prototype.valueOf = Un.prototype.value = function() {
							return _i(this.__wrapped__, this.__actions__)
						}, Un.prototype.first = Un.prototype.head, Ke && (Un.prototype[Ke] = function() {
							return this
						}), Un
					}();
					_t._ = An, (i = function() {
						return An
					}.call(t, n, t, r)) === a || (r.exports = i)
				}).call(this)
			}).call(this, n("c8ba"), n("62e4")(e))
		},
		"2f62": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "b", (function() {
					return E
				})), n.d(t, "c", (function() {
					return w
				})), n.d(t, "d", (function() {
					return S
				})), n.d(t, "e", (function() {
					return A
				}));
				var r = ("undefined" != typeof window ? window : void 0 !== e ? e : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

				function i(e) {
					r && (e._devtoolHook = r, r.emit("vuex:init", e), r.on("vuex:travel-to-state", (function(t) {
						e.replaceState(t)
					})), e.subscribe((function(e, t) {
						r.emit("vuex:mutation", e, t)
					}), {
						prepend: !0
					}), e.subscribeAction((function(e, t) {
						r.emit("vuex:action", e, t)
					}), {
						prepend: !0
					}))
				}

				function a(e, t) {
					if (void 0 === t && (t = []), null === e || "object" != typeof e) return e;
					var n = function(e, t) {
						return e.filter(t)[0]
					}(t, (function(t) {
						return t.original === e
					}));
					if (n) return n.copy;
					var r = Array.isArray(e) ? [] : {};
					return t.push({
						original: e,
						copy: r
					}), Object.keys(e).forEach((function(n) {
						r[n] = a(e[n], t)
					})), r
				}

				function o(e, t) {
					Object.keys(e).forEach((function(n) {
						return t(e[n], n)
					}))
				}

				function s(e) {
					return null !== e && "object" == typeof e
				}
				var u = function(e, t) {
						this.runtime = t, this._children = Object.create(null), this._rawModule = e;
						var n = e.state;
						this.state = ("function" == typeof n ? n() : n) || {}
					},
					c = {
						namespaced: {
							configurable: !0
						}
					};
				c.namespaced.get = function() {
					return !!this._rawModule.namespaced
				}, u.prototype.addChild = function(e, t) {
					this._children[e] = t
				}, u.prototype.removeChild = function(e) {
					delete this._children[e]
				}, u.prototype.getChild = function(e) {
					return this._children[e]
				}, u.prototype.hasChild = function(e) {
					return e in this._children
				}, u.prototype.update = function(e) {
					this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters)
				}, u.prototype.forEachChild = function(e) {
					o(this._children, e)
				}, u.prototype.forEachGetter = function(e) {
					this._rawModule.getters && o(this._rawModule.getters, e)
				}, u.prototype.forEachAction = function(e) {
					this._rawModule.actions && o(this._rawModule.actions, e)
				}, u.prototype.forEachMutation = function(e) {
					this._rawModule.mutations && o(this._rawModule.mutations, e)
				}, Object.defineProperties(u.prototype, c);
				var l, f = function(e) {
					this.register([], e, !1)
				};
				f.prototype.get = function(e) {
					return e.reduce((function(e, t) {
						return e.getChild(t)
					}), this.root)
				}, f.prototype.getNamespace = function(e) {
					var t = this.root;
					return e.reduce((function(e, n) {
						return e + ((t = t.getChild(n)).namespaced ? n + "/" : "")
					}), "")
				}, f.prototype.update = function(e) {
					! function e(t, n, r) {
						if (n.update(r), r.modules)
							for (var i in r.modules) {
								if (!n.getChild(i)) return;
								e(t.concat(i), n.getChild(i), r.modules[i])
							}
					}([], this.root, e)
				}, f.prototype.register = function(e, t, n) {
					var r = this;
					void 0 === n && (n = !0);
					var i = new u(t, n);
					0 === e.length ? this.root = i : this.get(e.slice(0, -1)).addChild(e[e.length - 1], i);
					t.modules && o(t.modules, (function(t, i) {
						r.register(e.concat(i), t, n)
					}))
				}, f.prototype.unregister = function(e) {
					var t = this.get(e.slice(0, -1)),
						n = e[e.length - 1],
						r = t.getChild(n);
					r && r.runtime && t.removeChild(n)
				}, f.prototype.isRegistered = function(e) {
					var t = this.get(e.slice(0, -1)),
						n = e[e.length - 1];
					return !!t && t.hasChild(n)
				};
				var d = function(e) {
						var t = this;
						void 0 === e && (e = {}), !l && "undefined" != typeof window && window.Vue && y(window.Vue);
						var n = e.plugins;
						void 0 === n && (n = []);
						var r = e.strict;
						void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new f(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new l, this._makeLocalGettersCache = Object.create(null);
						var a = this,
							o = this.dispatch,
							s = this.commit;
						this.dispatch = function(e, t) {
							return o.call(a, e, t)
						}, this.commit = function(e, t, n) {
							return s.call(a, e, t, n)
						}, this.strict = r;
						var u = this._modules.root.state;
						b(this, u, [], this._modules.root), m(this, u), n.forEach((function(e) {
							return e(t)
						})), (void 0 !== e.devtools ? e.devtools : l.config.devtools) && i(this)
					},
					h = {
						state: {
							configurable: !0
						}
					};

				function p(e, t, n) {
					return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
						function() {
							var n = t.indexOf(e);
							n > -1 && t.splice(n, 1)
						}
				}

				function _(e, t) {
					e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null);
					var n = e.state;
					b(e, n, [], e._modules.root, !0), m(e, n, t)
				}

				function m(e, t, n) {
					var r = e._vm;
					e.getters = {}, e._makeLocalGettersCache = Object.create(null);
					var i = e._wrappedGetters,
						a = {};
					o(i, (function(t, n) {
						a[n] = function(e, t) {
							return function() {
								return e(t)
							}
						}(t, e), Object.defineProperty(e.getters, n, {
							get: function() {
								return e._vm[n]
							},
							enumerable: !0
						})
					}));
					var s = l.config.silent;
					l.config.silent = !0, e._vm = new l({
						data: {
							$$state: t
						},
						computed: a
					}), l.config.silent = s, e.strict && function(e) {
						e._vm.$watch((function() {
							return this._data.$$state
						}), (function() {}), {
							deep: !0,
							sync: !0
						})
					}(e), r && (n && e._withCommit((function() {
						r._data.$$state = null
					})), l.nextTick((function() {
						return r.$destroy()
					})))
				}

				function b(e, t, n, r, i) {
					var a = !n.length,
						o = e._modules.getNamespace(n);
					if (r.namespaced && (e._modulesNamespaceMap[o], e._modulesNamespaceMap[o] = r), !a && !i) {
						var s = g(t, n.slice(0, -1)),
							u = n[n.length - 1];
						e._withCommit((function() {
							l.set(s, u, r.state)
						}))
					}
					var c = r.context = function(e, t, n) {
						var r = "" === t,
							i = {
								dispatch: r ? e.dispatch : function(n, r, i) {
									var a = v(n, r, i),
										o = a.payload,
										s = a.options,
										u = a.type;
									return s && s.root || (u = t + u), e.dispatch(u, o)
								},
								commit: r ? e.commit : function(n, r, i) {
									var a = v(n, r, i),
										o = a.payload,
										s = a.options,
										u = a.type;
									s && s.root || (u = t + u), e.commit(u, o, s)
								}
							};
						return Object.defineProperties(i, {
							getters: {
								get: r ? function() {
									return e.getters
								} : function() {
									return function(e, t) {
										if (!e._makeLocalGettersCache[t]) {
											var n = {},
												r = t.length;
											Object.keys(e.getters).forEach((function(i) {
												if (i.slice(0, r) === t) {
													var a = i.slice(r);
													Object.defineProperty(n, a, {
														get: function() {
															return e.getters[i]
														},
														enumerable: !0
													})
												}
											})), e._makeLocalGettersCache[t] = n
										}
										return e._makeLocalGettersCache[t]
									}(e, t)
								}
							},
							state: {
								get: function() {
									return g(e.state, n)
								}
							}
						}), i
					}(e, o, n);
					r.forEachMutation((function(t, n) {
						! function(e, t, n, r) {
							(e._mutations[t] || (e._mutations[t] = [])).push((function(t) {
								n.call(e, r.state, t)
							}))
						}(e, o + n, t, c)
					})), r.forEachAction((function(t, n) {
						var r = t.root ? n : o + n,
							i = t.handler || t;
						! function(e, t, n, r) {
							(e._actions[t] || (e._actions[t] = [])).push((function(t) {
								var i = n.call(e, {
									dispatch: r.dispatch,
									commit: r.commit,
									getters: r.getters,
									state: r.state,
									rootGetters: e.getters,
									rootState: e.state
								}, t);
								return function(e) {
									return e && "function" == typeof e.then
								}(i) || (i = Promise.resolve(i)), e._devtoolHook ? i.catch((function(t) {
									throw e._devtoolHook.emit("vuex:error", t), t
								})) : i
							}))
						}(e, r, i, c)
					})), r.forEachGetter((function(t, n) {
						! function(e, t, n, r) {
							e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
								return n(r.state, r.getters, e.state, e.getters)
							})
						}(e, o + n, t, c)
					})), r.forEachChild((function(r, a) {
						b(e, t, n.concat(a), r, i)
					}))
				}

				function g(e, t) {
					return t.reduce((function(e, t) {
						return e[t]
					}), e)
				}

				function v(e, t, n) {
					return s(e) && e.type && (n = t, t = e, e = e.type), {
						type: e,
						payload: t,
						options: n
					}
				}

				function y(e) {
					l && e === l || function(e) {
						if (Number(e.version.split(".")[0]) >= 2) e.mixin({
							beforeCreate: n
						});
						else {
							var t = e.prototype._init;
							e.prototype._init = function(e) {
								void 0 === e && (e = {}), e.init = e.init ? [n].concat(e.init) : n, t.call(this, e)
							}
						}

						function n() {
							var e = this.$options;
							e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
						}
					}(l = e)
				}
				h.state.get = function() {
					return this._vm._data.$$state
				}, h.state.set = function(e) {}, d.prototype.commit = function(e, t, n) {
					var r = this,
						i = v(e, t, n),
						a = i.type,
						o = i.payload,
						s = (i.options, {
							type: a,
							payload: o
						}),
						u = this._mutations[a];
					u && (this._withCommit((function() {
						u.forEach((function(e) {
							e(o)
						}))
					})), this._subscribers.slice().forEach((function(e) {
						return e(s, r.state)
					})))
				}, d.prototype.dispatch = function(e, t) {
					var n = this,
						r = v(e, t),
						i = r.type,
						a = r.payload,
						o = {
							type: i,
							payload: a
						},
						s = this._actions[i];
					if (s) {
						try {
							this._actionSubscribers.slice().filter((function(e) {
								return e.before
							})).forEach((function(e) {
								return e.before(o, n.state)
							}))
						} catch (e) {}
						var u = s.length > 1 ? Promise.all(s.map((function(e) {
							return e(a)
						}))) : s[0](a);
						return new Promise((function(e, t) {
							u.then((function(t) {
								try {
									n._actionSubscribers.filter((function(e) {
										return e.after
									})).forEach((function(e) {
										return e.after(o, n.state)
									}))
								} catch (e) {}
								e(t)
							}), (function(e) {
								try {
									n._actionSubscribers.filter((function(e) {
										return e.error
									})).forEach((function(t) {
										return t.error(o, n.state, e)
									}))
								} catch (e) {}
								t(e)
							}))
						}))
					}
				}, d.prototype.subscribe = function(e, t) {
					return p(e, this._subscribers, t)
				}, d.prototype.subscribeAction = function(e, t) {
					return p("function" == typeof e ? {
						before: e
					} : e, this._actionSubscribers, t)
				}, d.prototype.watch = function(e, t, n) {
					var r = this;
					return this._watcherVM.$watch((function() {
						return e(r.state, r.getters)
					}), t, n)
				}, d.prototype.replaceState = function(e) {
					var t = this;
					this._withCommit((function() {
						t._vm._data.$$state = e
					}))
				}, d.prototype.registerModule = function(e, t, n) {
					void 0 === n && (n = {}), "string" == typeof e && (e = [e]), this._modules.register(e, t), b(this, this.state, e, this._modules.get(e), n.preserveState), m(this, this.state)
				}, d.prototype.unregisterModule = function(e) {
					var t = this;
					"string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit((function() {
						var n = g(t.state, e.slice(0, -1));
						l.delete(n, e[e.length - 1])
					})), _(this)
				}, d.prototype.hasModule = function(e) {
					return "string" == typeof e && (e = [e]), this._modules.isRegistered(e)
				}, d.prototype.hotUpdate = function(e) {
					this._modules.update(e), _(this, !0)
				}, d.prototype._withCommit = function(e) {
					var t = this._committing;
					this._committing = !0, e(), this._committing = t
				}, Object.defineProperties(d.prototype, h);
				var A = C((function(e, t) {
						var n = {};
						return T(t).forEach((function(t) {
							var r = t.key,
								i = t.val;
							n[r] = function() {
								var t = this.$store.state,
									n = this.$store.getters;
								if (e) {
									var r = $(this.$store, "mapState", e);
									if (!r) return;
									t = r.context.state, n = r.context.getters
								}
								return "function" == typeof i ? i.call(this, t, n) : t[i]
							}, n[r].vuex = !0
						})), n
					})),
					S = C((function(e, t) {
						var n = {};
						return T(t).forEach((function(t) {
							var r = t.key,
								i = t.val;
							n[r] = function() {
								for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
								var r = this.$store.commit;
								if (e) {
									var a = $(this.$store, "mapMutations", e);
									if (!a) return;
									r = a.context.commit
								}
								return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t))
							}
						})), n
					})),
					w = C((function(e, t) {
						var n = {};
						return T(t).forEach((function(t) {
							var r = t.key,
								i = t.val;
							i = e + i, n[r] = function() {
								if (!e || $(this.$store, "mapGetters", e)) return this.$store.getters[i]
							}, n[r].vuex = !0
						})), n
					})),
					E = C((function(e, t) {
						var n = {};
						return T(t).forEach((function(t) {
							var r = t.key,
								i = t.val;
							n[r] = function() {
								for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
								var r = this.$store.dispatch;
								if (e) {
									var a = $(this.$store, "mapActions", e);
									if (!a) return;
									r = a.context.dispatch
								}
								return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t))
							}
						})), n
					}));

				function T(e) {
					return function(e) {
						return Array.isArray(e) || s(e)
					}(e) ? Array.isArray(e) ? e.map((function(e) {
						return {
							key: e,
							val: e
						}
					})) : Object.keys(e).map((function(t) {
						return {
							key: t,
							val: e[t]
						}
					})) : []
				}

				function C(e) {
					return function(t, n) {
						return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), e(t, n)
					}
				}

				function $(e, t, n) {
					return e._modulesNamespaceMap[n]
				}

				function k(e, t, n) {
					var r = n ? e.groupCollapsed : e.group;
					try {
						r.call(e, t)
					} catch (n) {
						e.log(t)
					}
				}

				function O(e) {
					try {
						e.groupEnd()
					} catch (t) {
						e.log("â€”â€” log end â€”â€”")
					}
				}

				function x() {
					var e = new Date;
					return " @ " + P(e.getHours(), 2) + ":" + P(e.getMinutes(), 2) + ":" + P(e.getSeconds(), 2) + "." + P(e.getMilliseconds(), 3)
				}

				function P(e, t) {
					return function(e, t) {
						return new Array(t + 1).join(e)
					}("0", t - e.toString().length) + e
				}
				var M = {
					Store: d,
					install: y,
					version: "3.6.2",
					mapState: A,
					mapMutations: S,
					mapGetters: w,
					mapActions: E,
					createNamespacedHelpers: function(e) {
						return {
							mapState: A.bind(null, e),
							mapGetters: w.bind(null, e),
							mapMutations: S.bind(null, e),
							mapActions: E.bind(null, e)
						}
					},
					createLogger: function(e) {
						void 0 === e && (e = {});
						var t = e.collapsed;
						void 0 === t && (t = !0);
						var n = e.filter;
						void 0 === n && (n = function(e, t, n) {
							return !0
						});
						var r = e.transformer;
						void 0 === r && (r = function(e) {
							return e
						});
						var i = e.mutationTransformer;
						void 0 === i && (i = function(e) {
							return e
						});
						var o = e.actionFilter;
						void 0 === o && (o = function(e, t) {
							return !0
						});
						var s = e.actionTransformer;
						void 0 === s && (s = function(e) {
							return e
						});
						var u = e.logMutations;
						void 0 === u && (u = !0);
						var c = e.logActions;
						void 0 === c && (c = !0);
						var l = e.logger;
						return void 0 === l && (l = console),
							function(e) {
								var f = a(e.state);
								void 0 !== l && (u && e.subscribe((function(e, o) {
									var s = a(o);
									if (n(e, f, s)) {
										var u = x(),
											c = i(e),
											d = "mutation " + e.type + u;
										k(l, d, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(f)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", c), l.log("%c next state", "color: #4CAF50; font-weight: bold", r(s)), O(l)
									}
									f = s
								})), c && e.subscribeAction((function(e, n) {
									if (o(e, n)) {
										var r = x(),
											i = s(e),
											a = "action " + e.type + r;
										k(l, a, t), l.log("%c action", "color: #03A9F4; font-weight: bold", i), O(l)
									}
								})))
							}
					}
				};
				t.a = M
			}).call(this, n("c8ba"))
		},
		"2fcc": function(e, t, n) {
			e.exports = function(e) {
				function t(e) {
					let n, i = null;

					function a(...e) {
						if (!a.enabled) return;
						const r = a,
							i = Number(new Date),
							o = i - (n || i);
						r.diff = o, r.prev = n, r.curr = i, n = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
						let s = 0;
						e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
							if ("%%" === n) return "%";
							s++;
							const a = t.formatters[i];
							if ("function" == typeof a) {
								const t = e[s];
								n = a.call(r, t), e.splice(s, 1), s--
							}
							return n
						}), t.formatArgs.call(r, e);
						(r.log || t.log).apply(r, e)
					}
					return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
						enumerable: !0,
						configurable: !1,
						get: () => null === i ? t.enabled(e) : i,
						set: e => {
							i = e
						}
					}), "function" == typeof t.init && t.init(a), a
				}

				function r(e, n) {
					const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
					return r.log = this.log, r
				}

				function i(e) {
					return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
				}
				return t.debug = t, t.default = t, t.coerce = function(e) {
					return e instanceof Error ? e.stack || e.message : e
				}, t.disable = function() {
					const e = [...t.names.map(i), ...t.skips.map(i).map(e => "-" + e)].join(",");
					return t.enable(""), e
				}, t.enable = function(e) {
					let n;
					t.save(e), t.names = [], t.skips = [];
					const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
						i = r.length;
					for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
				}, t.enabled = function(e) {
					if ("*" === e[e.length - 1]) return !0;
					let n, r;
					for (n = 0, r = t.skips.length; n < r; n++)
						if (t.skips[n].test(e)) return !1;
					for (n = 0, r = t.names.length; n < r; n++)
						if (t.names[n].test(e)) return !0;
					return !1
				}, t.humanize = n("e4b1"), t.destroy = function() {
					console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
				}, Object.keys(e).forEach(n => {
					t[n] = e[n]
				}), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
					let n = 0;
					for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
					return t.colors[Math.abs(n) % t.colors.length]
				}, t.enable(t.load()), t
			}
		},
		"30b0": function(e, t, n) {
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
			}), t.ToggleButton = void 0;
			var i = n("48da"),
				a = n("09e6"),
				o = function(e) {
					function t(t) {
						var n = e.call(this, t) || this;
						n.toggleButtonEvents = {
							onToggle: new a.EventDispatcher,
							onToggleOn: new a.EventDispatcher,
							onToggleOff: new a.EventDispatcher
						};
						return t.onAriaLabel && (t.ariaLabel = t.onAriaLabel), n.config = n.mergeConfig(t, {
							cssClass: "ui-togglebutton",
							onClass: "on",
							offClass: "off"
						}, n.config), n
					}
					return r(t, e), t.prototype.configure = function(t, n) {
						e.prototype.configure.call(this, t, n);
						var r = this.getConfig();
						this.getDomElement().addClass(this.prefixCss(r.offClass))
					}, t.prototype.on = function() {
						if (this.isOff()) {
							var e = this.getConfig();
							this.onState = !0, this.getDomElement().removeClass(this.prefixCss(e.offClass)), this.getDomElement().addClass(this.prefixCss(e.onClass)), this.onToggleEvent(), this.onToggleOnEvent(), this.setAriaAttr("pressed", "true"), this.config.onAriaLabel && this.setAriaLabel(this.config.onAriaLabel)
						}
					}, t.prototype.off = function() {
						if (this.isOn()) {
							var e = this.getConfig();
							this.onState = !1, this.getDomElement().removeClass(this.prefixCss(e.onClass)), this.getDomElement().addClass(this.prefixCss(e.offClass)), this.onToggleEvent(), this.onToggleOffEvent(), this.setAriaAttr("pressed", "false"), this.config.offAriaLabel && this.setAriaLabel(this.config.offAriaLabel)
						}
					}, t.prototype.toggle = function() {
						this.isOn() ? this.off() : this.on()
					}, t.prototype.isOn = function() {
						return this.onState
					}, t.prototype.isOff = function() {
						return !this.isOn()
					}, t.prototype.onClickEvent = function() {
						e.prototype.onClickEvent.call(this), this.onToggleEvent()
					}, t.prototype.onToggleEvent = function() {
						this.toggleButtonEvents.onToggle.dispatch(this)
					}, t.prototype.onToggleOnEvent = function() {
						this.toggleButtonEvents.onToggleOn.dispatch(this)
					}, t.prototype.onToggleOffEvent = function() {
						this.toggleButtonEvents.onToggleOff.dispatch(this)
					}, Object.defineProperty(t.prototype, "onToggle", {
						get: function() {
							return this.toggleButtonEvents.onToggle.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "onToggleOn", {
						get: function() {
							return this.toggleButtonEvents.onToggleOn.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "onToggleOff", {
						get: function() {
							return this.toggleButtonEvents.onToggleOff.getEvent()
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(i.Button);
			t.ToggleButton = o
		},
		"30b5": function(e, t, n) {
			"use strict";
			var r = n("c532");

			function i(e) {
				return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
			}
			e.exports = function(e, t, n) {
				if (!t) return e;
				var a;
				if (n) a = n(t);
				else if (r.isURLSearchParams(t)) a = t.toString();
				else {
					var o = [];
					r.forEach(t, (function(e, t) {
						null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
							r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), o.push(i(t) + "=" + i(e))
						})))
					})), a = o.join("&")
				}
				if (a) {
					var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
				}
				return e
			}
		},
		"30ef": function(e, t, n) {
			e.exports = function(e) {
				"use strict";
				e = e && e.hasOwnProperty("default") ? e.default : e;
				var t = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					n = function(e, t) {
						return e(t = {
							exports: {}
						}, t.exports), t.exports
					}((function(e) {
						var n = {};
						for (var r in t) t.hasOwnProperty(r) && (n[t[r]] = r);
						var i = e.exports = {
							rgb: {
								channels: 3,
								labels: "rgb"
							},
							hsl: {
								channels: 3,
								labels: "hsl"
							},
							hsv: {
								channels: 3,
								labels: "hsv"
							},
							hwb: {
								channels: 3,
								labels: "hwb"
							},
							cmyk: {
								channels: 4,
								labels: "cmyk"
							},
							xyz: {
								channels: 3,
								labels: "xyz"
							},
							lab: {
								channels: 3,
								labels: "lab"
							},
							lch: {
								channels: 3,
								labels: "lch"
							},
							hex: {
								channels: 1,
								labels: ["hex"]
							},
							keyword: {
								channels: 1,
								labels: ["keyword"]
							},
							ansi16: {
								channels: 1,
								labels: ["ansi16"]
							},
							ansi256: {
								channels: 1,
								labels: ["ansi256"]
							},
							hcg: {
								channels: 3,
								labels: ["h", "c", "g"]
							},
							apple: {
								channels: 3,
								labels: ["r16", "g16", "b16"]
							},
							gray: {
								channels: 1,
								labels: ["gray"]
							}
						};
						for (var a in i)
							if (i.hasOwnProperty(a)) {
								if (!("channels" in i[a])) throw new Error("missing channels property: " + a);
								if (!("labels" in i[a])) throw new Error("missing channel labels property: " + a);
								if (i[a].labels.length !== i[a].channels) throw new Error("channel and label counts mismatch: " + a);
								var o = i[a].channels,
									s = i[a].labels;
								delete i[a].channels, delete i[a].labels, Object.defineProperty(i[a], "channels", {
									value: o
								}), Object.defineProperty(i[a], "labels", {
									value: s
								})
							}
						function u(e, t) {
							return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
						}
						i.rgb.hsl = function(e) {
							var t, n, r = e[0] / 255,
								i = e[1] / 255,
								a = e[2] / 255,
								o = Math.min(r, i, a),
								s = Math.max(r, i, a),
								u = s - o;
							return s === o ? t = 0 : r === s ? t = (i - a) / u : i === s ? t = 2 + (a - r) / u : a === s && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + s) / 2, [t, 100 * (s === o ? 0 : n <= .5 ? u / (s + o) : u / (2 - s - o)), 100 * n]
						}, i.rgb.hsv = function(e) {
							var t, n, r, i, a, o = e[0] / 255,
								s = e[1] / 255,
								u = e[2] / 255,
								c = Math.max(o, s, u),
								l = c - Math.min(o, s, u),
								f = function(e) {
									return (c - e) / 6 / l + .5
								};
							return 0 === l ? i = a = 0 : (a = l / c, t = f(o), n = f(s), r = f(u), o === c ? i = r - n : s === c ? i = 1 / 3 + t - r : u === c && (i = 2 / 3 + n - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * a, 100 * c]
						}, i.rgb.hwb = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return [i.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
						}, i.rgb.cmyk = function(e) {
							var t, n = e[0] / 255,
								r = e[1] / 255,
								i = e[2] / 255;
							return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
						}, i.rgb.keyword = function(e) {
							var r = n[e];
							if (r) return r;
							var i, a = 1 / 0;
							for (var o in t)
								if (t.hasOwnProperty(o)) {
									var s = u(e, t[o]);
									s < a && (a = s, i = o)
								} return i
						}, i.keyword.rgb = function(e) {
							return t[e]
						}, i.rgb.xyz = function(e) {
							var t = e[0] / 255,
								n = e[1] / 255,
								r = e[2] / 255;
							return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
						}, i.rgb.lab = function(e) {
							var t = i.rgb.xyz(e),
								n = t[0],
								r = t[1],
								a = t[2];
							return r /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
						}, i.hsl.rgb = function(e) {
							var t, n, r, i, a, o = e[0] / 360,
								s = e[1] / 100,
								u = e[2] / 100;
							if (0 === s) return [a = 255 * u, a, a];
							t = 2 * u - (n = u < .5 ? u * (1 + s) : u + s - u * s), i = [0, 0, 0];
							for (var c = 0; c < 3; c++)(r = o + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, a = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[c] = 255 * a;
							return i
						}, i.hsl.hsv = function(e) {
							var t = e[0],
								n = e[1] / 100,
								r = e[2] / 100,
								i = n,
								a = Math.max(r, .01);
							return n *= (r *= 2) <= 1 ? r : 2 - r, i *= a <= 1 ? a : 2 - a, [t, 100 * (0 === r ? 2 * i / (a + i) : 2 * n / (r + n)), (r + n) / 2 * 100]
						}, i.hsv.rgb = function(e) {
							var t = e[0] / 60,
								n = e[1] / 100,
								r = e[2] / 100,
								i = Math.floor(t) % 6,
								a = t - Math.floor(t),
								o = 255 * r * (1 - n),
								s = 255 * r * (1 - n * a),
								u = 255 * r * (1 - n * (1 - a));
							switch (r *= 255, i) {
								case 0:
									return [r, u, o];
								case 1:
									return [s, r, o];
								case 2:
									return [o, r, u];
								case 3:
									return [o, s, r];
								case 4:
									return [u, o, r];
								case 5:
									return [r, o, s]
							}
						}, i.hsv.hsl = function(e) {
							var t, n, r, i = e[0],
								a = e[1] / 100,
								o = e[2] / 100,
								s = Math.max(o, .01);
							return r = (2 - a) * o, n = a * s, [i, 100 * (n = (n /= (t = (2 - a) * s) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
						}, i.hwb.rgb = function(e) {
							var t, n, r, i, a, o, s, u = e[0] / 360,
								c = e[1] / 100,
								l = e[2] / 100,
								f = c + l;
							switch (f > 1 && (c /= f, l /= f), r = 6 * u - (t = Math.floor(6 * u)), 0 != (1 & t) && (r = 1 - r), i = c + r * ((n = 1 - l) - c), t) {
								default:
								case 6:
								case 0:
									a = n, o = i, s = c;
									break;
								case 1:
									a = i, o = n, s = c;
									break;
								case 2:
									a = c, o = n, s = i;
									break;
								case 3:
									a = c, o = i, s = n;
									break;
								case 4:
									a = i, o = c, s = n;
									break;
								case 5:
									a = n, o = c, s = i
							}
							return [255 * a, 255 * o, 255 * s]
						}, i.cmyk.rgb = function(e) {
							var t = e[0] / 100,
								n = e[1] / 100,
								r = e[2] / 100,
								i = e[3] / 100;
							return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
						}, i.xyz.rgb = function(e) {
							var t, n, r, i = e[0] / 100,
								a = e[1] / 100,
								o = e[2] / 100;
							return n = -.9689 * i + 1.8758 * a + .0415 * o, r = .0557 * i + -.204 * a + 1.057 * o, t = (t = 3.2406 * i + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
						}, i.xyz.lab = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
						}, i.lab.xyz = function(e) {
							var t, n, r, i = e[0];
							t = e[1] / 500 + (n = (i + 16) / 116), r = n - e[2] / 200;
							var a = Math.pow(n, 3),
								o = Math.pow(t, 3),
								s = Math.pow(r, 3);
							return n = a > .008856 ? a : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = s > .008856 ? s : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
						}, i.lab.lch = function(e) {
							var t, n = e[0],
								r = e[1],
								i = e[2];
							return (t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + i * i), t]
						}, i.lch.lab = function(e) {
							var t, n = e[0],
								r = e[1];
							return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
						}, i.rgb.ansi16 = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2],
								a = 1 in arguments ? arguments[1] : i.rgb.hsv(e)[2];
							if (0 === (a = Math.round(a / 50))) return 30;
							var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
							return 2 === a && (o += 60), o
						}, i.hsv.ansi16 = function(e) {
							return i.rgb.ansi16(i.hsv.rgb(e), e[2])
						}, i.rgb.ansi256 = function(e) {
							var t = e[0],
								n = e[1],
								r = e[2];
							return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
						}, i.ansi16.rgb = function(e) {
							var t = e % 10;
							if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
							var n = .5 * (1 + ~~(e > 50));
							return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
						}, i.ansi256.rgb = function(e) {
							if (e >= 232) {
								var t = 10 * (e - 232) + 8;
								return [t, t, t]
							}
							var n;
							return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
						}, i.rgb.hex = function(e) {
							var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
							return "000000".substring(t.length) + t
						}, i.hex.rgb = function(e) {
							var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
							if (!t) return [0, 0, 0];
							var n = t[0];
							3 === t[0].length && (n = n.split("").map((function(e) {
								return e + e
							})).join(""));
							var r = parseInt(n, 16);
							return [r >> 16 & 255, r >> 8 & 255, 255 & r]
						}, i.rgb.hcg = function(e) {
							var t, n = e[0] / 255,
								r = e[1] / 255,
								i = e[2] / 255,
								a = Math.max(Math.max(n, r), i),
								o = Math.min(Math.min(n, r), i),
								s = a - o;
							return t = s <= 0 ? 0 : a === n ? (r - i) / s % 6 : a === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4, t /= 6, [360 * (t %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
						}, i.hsl.hcg = function(e) {
							var t, n = e[1] / 100,
								r = e[2] / 100,
								i = 0;
							return (t = r < .5 ? 2 * n * r : 2 * n * (1 - r)) < 1 && (i = (r - .5 * t) / (1 - t)), [e[0], 100 * t, 100 * i]
						}, i.hsv.hcg = function(e) {
							var t = e[1] / 100,
								n = e[2] / 100,
								r = t * n,
								i = 0;
							return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
						}, i.hcg.rgb = function(e) {
							var t = e[0] / 360,
								n = e[1] / 100,
								r = e[2] / 100;
							if (0 === n) return [255 * r, 255 * r, 255 * r];
							var i, a = [0, 0, 0],
								o = t % 1 * 6,
								s = o % 1,
								u = 1 - s;
							switch (Math.floor(o)) {
								case 0:
									a[0] = 1, a[1] = s, a[2] = 0;
									break;
								case 1:
									a[0] = u, a[1] = 1, a[2] = 0;
									break;
								case 2:
									a[0] = 0, a[1] = 1, a[2] = s;
									break;
								case 3:
									a[0] = 0, a[1] = u, a[2] = 1;
									break;
								case 4:
									a[0] = s, a[1] = 0, a[2] = 1;
									break;
								default:
									a[0] = 1, a[1] = 0, a[2] = u
							}
							return i = (1 - n) * r, [255 * (n * a[0] + i), 255 * (n * a[1] + i), 255 * (n * a[2] + i)]
						}, i.hcg.hsv = function(e) {
							var t = e[1] / 100,
								n = t + e[2] / 100 * (1 - t),
								r = 0;
							return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
						}, i.hcg.hsl = function(e) {
							var t = e[1] / 100,
								n = e[2] / 100 * (1 - t) + .5 * t,
								r = 0;
							return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
						}, i.hcg.hwb = function(e) {
							var t = e[1] / 100,
								n = t + e[2] / 100 * (1 - t);
							return [e[0], 100 * (n - t), 100 * (1 - n)]
						}, i.hwb.hcg = function(e) {
							var t = e[1] / 100,
								n = 1 - e[2] / 100,
								r = n - t,
								i = 0;
							return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
						}, i.apple.rgb = function(e) {
							return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
						}, i.rgb.apple = function(e) {
							return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
						}, i.gray.rgb = function(e) {
							return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
						}, i.gray.hsl = i.gray.hsv = function(e) {
							return [0, 0, e[0]]
						}, i.gray.hwb = function(e) {
							return [0, 100, e[0]]
						}, i.gray.cmyk = function(e) {
							return [0, 0, 0, e[0]]
						}, i.gray.lab = function(e) {
							return [e[0], 0, 0]
						}, i.gray.hex = function(e) {
							var t = 255 & Math.round(e[0] / 100 * 255),
								n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
							return "000000".substring(n.length) + n
						}, i.rgb.gray = function(e) {
							return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
						}
					}));

				function r(e) {
					var t = function() {
							for (var e = {}, t = Object.keys(n), r = t.length, i = 0; i < r; i++) e[t[i]] = {
								distance: -1,
								parent: null
							};
							return e
						}(),
						r = [e];
					for (t[e].distance = 0; r.length;)
						for (var i = r.pop(), a = Object.keys(n[i]), o = a.length, s = 0; s < o; s++) {
							var u = a[s],
								c = t[u]; - 1 === c.distance && (c.distance = t[i].distance + 1, c.parent = i, r.unshift(u))
						}
					return t
				}

				function i(e, t) {
					return function(n) {
						return t(e(n))
					}
				}

				function a(e, t) {
					for (var r = [t[e].parent, e], a = n[t[e].parent][e], o = t[e].parent; t[o].parent;) r.unshift(t[o].parent), a = i(n[t[o].parent][o], a), o = t[o].parent;
					return a.conversion = r, a
				}
				n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
				var o = {};
				Object.keys(n).forEach((function(e) {
					o[e] = {}, Object.defineProperty(o[e], "channels", {
						value: n[e].channels
					}), Object.defineProperty(o[e], "labels", {
						value: n[e].labels
					});
					var t = function(e) {
						for (var t = r(e), n = {}, i = Object.keys(t), o = i.length, s = 0; s < o; s++) {
							var u = i[s];
							null !== t[u].parent && (n[u] = a(u, t))
						}
						return n
					}(e);
					Object.keys(t).forEach((function(n) {
						var r = t[n];
						o[e][n] = function(e) {
							var t = function(t) {
								if (null == t) return t;
								arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
								var n = e(t);
								if ("object" == typeof n)
									for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
								return n
							};
							return "conversion" in e && (t.conversion = e.conversion), t
						}(r), o[e][n].raw = function(e) {
							var t = function(t) {
								return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
							};
							return "conversion" in e && (t.conversion = e.conversion), t
						}(r)
					}))
				}));
				var s = o,
					u = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					c = {
						getRgba: l,
						getHsla: f,
						getRgb: function(e) {
							var t = l(e);
							return t && t.slice(0, 3)
						},
						getHsl: function(e) {
							var t = f(e);
							return t && t.slice(0, 3)
						},
						getHwb: d,
						getAlpha: function(e) {
							var t = l(e);
							return t || (t = f(e)) || (t = d(e)) ? t[3] : void 0
						},
						hexString: function(e, t) {
							return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + b(e[0]) + b(e[1]) + b(e[2]) + (t >= 0 && t < 1 ? b(Math.round(255 * t)) : "")
						},
						rgbString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? h(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
						},
						rgbaString: h,
						percentString: function(e, t) {
							if (t < 1 || e[3] && e[3] < 1) return p(e, t);
							var n = Math.round(e[0] / 255 * 100),
								r = Math.round(e[1] / 255 * 100),
								i = Math.round(e[2] / 255 * 100);
							return "rgb(" + n + "%, " + r + "%, " + i + "%)"
						},
						percentaString: p,
						hslString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? _(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
						},
						hslaString: _,
						hwbString: function(e, t) {
							return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
						},
						keyword: function(e) {
							return g[e.slice(0, 3)]
						}
					};

				function l(e) {
					if (e) {
						var t = [0, 0, 0],
							n = 1,
							r = e.match(/^#([a-fA-F0-9]{3,4})$/i),
							i = "";
						if (r) {
							i = (r = r[1])[3];
							for (var a = 0; a < t.length; a++) t[a] = parseInt(r[a] + r[a], 16);
							i && (n = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
						} else if (r = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
							for (i = r[2], r = r[1], a = 0; a < t.length; a++) t[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
							i && (n = Math.round(parseInt(i, 16) / 255 * 100) / 100)
						} else if (r = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < t.length; a++) t[a] = parseInt(r[a + 1]);
							n = parseFloat(r[4])
						} else if (r = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < t.length; a++) t[a] = Math.round(2.55 * parseFloat(r[a + 1]));
							n = parseFloat(r[4])
						} else if (r = e.match(/(\w+)/)) {
							if ("transparent" == r[1]) return [0, 0, 0, 0];
							if (!(t = u[r[1]])) return
						}
						for (a = 0; a < t.length; a++) t[a] = m(t[a], 0, 255);
						return n = n || 0 == n ? m(n, 0, 1) : 1, t[3] = n, t
					}
				}

				function f(e) {
					if (e) {
						var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function d(e) {
					if (e) {
						var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [m(parseInt(t[1]), 0, 360), m(parseFloat(t[2]), 0, 100), m(parseFloat(t[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function h(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
				}

				function p(e, t) {
					return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
				}

				function _(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
				}

				function m(e, t, n) {
					return Math.min(Math.max(t, e), n)
				}

				function b(e) {
					var t = e.toString(16).toUpperCase();
					return t.length < 2 ? "0" + t : t
				}
				var g = {};
				for (var v in u) g[u[v]] = v;
				var y = function(e) {
					return e instanceof y ? e : this instanceof y ? (this.valid = !1, this.values = {
						rgb: [0, 0, 0],
						hsl: [0, 0, 0],
						hsv: [0, 0, 0],
						hwb: [0, 0, 0],
						cmyk: [0, 0, 0, 0],
						alpha: 1
					}, void("string" == typeof e ? (t = c.getRgba(e), t ? this.setValues("rgb", t) : (t = c.getHsla(e)) ? this.setValues("hsl", t) : (t = c.getHwb(e)) && this.setValues("hwb", t)) : "object" == typeof e && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new y(e);
					var t
				};
				y.prototype = {
					isValid: function() {
						return this.valid
					},
					rgb: function() {
						return this.setSpace("rgb", arguments)
					},
					hsl: function() {
						return this.setSpace("hsl", arguments)
					},
					hsv: function() {
						return this.setSpace("hsv", arguments)
					},
					hwb: function() {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function() {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function() {
						return this.values.rgb
					},
					hslArray: function() {
						return this.values.hsl
					},
					hsvArray: function() {
						return this.values.hsv
					},
					hwbArray: function() {
						var e = this.values;
						return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
					},
					cmykArray: function() {
						return this.values.cmyk
					},
					rgbaArray: function() {
						var e = this.values;
						return e.rgb.concat([e.alpha])
					},
					hslaArray: function() {
						var e = this.values;
						return e.hsl.concat([e.alpha])
					},
					alpha: function(e) {
						return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
					},
					red: function(e) {
						return this.setChannel("rgb", 0, e)
					},
					green: function(e) {
						return this.setChannel("rgb", 1, e)
					},
					blue: function(e) {
						return this.setChannel("rgb", 2, e)
					},
					hue: function(e) {
						return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
					},
					saturation: function(e) {
						return this.setChannel("hsl", 1, e)
					},
					lightness: function(e) {
						return this.setChannel("hsl", 2, e)
					},
					saturationv: function(e) {
						return this.setChannel("hsv", 1, e)
					},
					whiteness: function(e) {
						return this.setChannel("hwb", 1, e)
					},
					blackness: function(e) {
						return this.setChannel("hwb", 2, e)
					},
					value: function(e) {
						return this.setChannel("hsv", 2, e)
					},
					cyan: function(e) {
						return this.setChannel("cmyk", 0, e)
					},
					magenta: function(e) {
						return this.setChannel("cmyk", 1, e)
					},
					yellow: function(e) {
						return this.setChannel("cmyk", 2, e)
					},
					black: function(e) {
						return this.setChannel("cmyk", 3, e)
					},
					hexString: function() {
						return c.hexString(this.values.rgb)
					},
					rgbString: function() {
						return c.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function() {
						return c.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function() {
						return c.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function() {
						return c.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function() {
						return c.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function() {
						return c.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function() {
						return c.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function() {
						var e = this.values.rgb;
						return e[0] << 16 | e[1] << 8 | e[2]
					},
					luminosity: function() {
						for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
							var r = e[n] / 255;
							t[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
						}
						return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
					},
					contrast: function(e) {
						var t = this.luminosity(),
							n = e.luminosity();
						return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
					},
					level: function(e) {
						var t = this.contrast(e);
						return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
					},
					dark: function() {
						var e = this.values.rgb;
						return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
					},
					light: function() {
						return !this.dark()
					},
					negate: function() {
						for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
						return this.setValues("rgb", e), this
					},
					lighten: function(e) {
						var t = this.values.hsl;
						return t[2] += t[2] * e, this.setValues("hsl", t), this
					},
					darken: function(e) {
						var t = this.values.hsl;
						return t[2] -= t[2] * e, this.setValues("hsl", t), this
					},
					saturate: function(e) {
						var t = this.values.hsl;
						return t[1] += t[1] * e, this.setValues("hsl", t), this
					},
					desaturate: function(e) {
						var t = this.values.hsl;
						return t[1] -= t[1] * e, this.setValues("hsl", t), this
					},
					whiten: function(e) {
						var t = this.values.hwb;
						return t[1] += t[1] * e, this.setValues("hwb", t), this
					},
					blacken: function(e) {
						var t = this.values.hwb;
						return t[2] += t[2] * e, this.setValues("hwb", t), this
					},
					greyscale: function() {
						var e = this.values.rgb,
							t = .3 * e[0] + .59 * e[1] + .11 * e[2];
						return this.setValues("rgb", [t, t, t]), this
					},
					clearer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t - t * e), this
					},
					opaquer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t + t * e), this
					},
					rotate: function(e) {
						var t = this.values.hsl,
							n = (t[0] + e) % 360;
						return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
					},
					mix: function(e, t) {
						var n = this,
							r = e,
							i = void 0 === t ? .5 : t,
							a = 2 * i - 1,
							o = n.alpha() - r.alpha(),
							s = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
							u = 1 - s;
						return this.rgb(s * n.red() + u * r.red(), s * n.green() + u * r.green(), s * n.blue() + u * r.blue()).alpha(n.alpha() * i + r.alpha() * (1 - i))
					},
					toJSON: function() {
						return this.rgb()
					},
					clone: function() {
						var e, t, n = new y,
							r = this.values,
							i = n.values;
						for (var a in r) r.hasOwnProperty(a) && (e = r[a], "[object Array]" === (t = {}.toString.call(e)) ? i[a] = e.slice(0) : "[object Number]" === t ? i[a] = e : console.error("unexpected color value:", e));
						return n
					}
				}, y.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, y.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, y.prototype.getValues = function(e) {
					for (var t = this.values, n = {}, r = 0; r < e.length; r++) n[e.charAt(r)] = t[e][r];
					return 1 !== t.alpha && (n.a = t.alpha), n
				}, y.prototype.setValues = function(e, t) {
					var n, r, i = this.values,
						a = this.spaces,
						o = this.maxes,
						u = 1;
					if (this.valid = !0, "alpha" === e) u = t;
					else if (t.length) i[e] = t.slice(0, e.length), u = t[e.length];
					else if (void 0 !== t[e.charAt(0)]) {
						for (n = 0; n < e.length; n++) i[e][n] = t[e.charAt(n)];
						u = t.a
					} else if (void 0 !== t[a[e][0]]) {
						var c = a[e];
						for (n = 0; n < e.length; n++) i[e][n] = t[c[n]];
						u = t.alpha
					}
					if (i.alpha = Math.max(0, Math.min(1, void 0 === u ? i.alpha : u)), "alpha" === e) return !1;
					for (n = 0; n < e.length; n++) r = Math.max(0, Math.min(o[e][n], i[e][n])), i[e][n] = Math.round(r);
					for (var l in a) l !== e && (i[l] = s[e][l](i[e]));
					return !0
				}, y.prototype.setSpace = function(e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
				}, y.prototype.setChannel = function(e, t, n) {
					var r = this.values[e];
					return void 0 === n ? r[t] : (n === r[t] || (r[t] = n, this.setValues(e, r)), this)
				}, "undefined" != typeof window && (window.Color = y);
				var A = y;

				function S(e) {
					return -1 === ["__proto__", "prototype", "constructor"].indexOf(e)
				}
				var w = {
						noop: function() {},
						uid: function() {
							var e = 0;
							return function() {
								return e++
							}
						}(),
						isNullOrUndef: function(e) {
							return null == e
						},
						isArray: function(e) {
							if (Array.isArray && Array.isArray(e)) return !0;
							var t = Object.prototype.toString.call(e);
							return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
						},
						isObject: function(e) {
							return null !== e && "[object Object]" === Object.prototype.toString.call(e)
						},
						isFinite: function(e) {
							return ("number" == typeof e || e instanceof Number) && isFinite(e)
						},
						valueOrDefault: function(e, t) {
							return void 0 === e ? t : e
						},
						valueAtIndexOrDefault: function(e, t, n) {
							return w.valueOrDefault(w.isArray(e) ? e[t] : e, n)
						},
						callback: function(e, t, n) {
							if (e && "function" == typeof e.call) return e.apply(n, t)
						},
						each: function(e, t, n, r) {
							var i, a, o;
							if (w.isArray(e))
								if (a = e.length, r)
									for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
								else
									for (i = 0; i < a; i++) t.call(n, e[i], i);
							else if (w.isObject(e))
								for (a = (o = Object.keys(e)).length, i = 0; i < a; i++) t.call(n, e[o[i]], o[i])
						},
						arrayEquals: function(e, t) {
							var n, r, i, a;
							if (!e || !t || e.length !== t.length) return !1;
							for (n = 0, r = e.length; n < r; ++n)
								if (i = e[n], a = t[n], i instanceof Array && a instanceof Array) {
									if (!w.arrayEquals(i, a)) return !1
								} else if (i !== a) return !1;
							return !0
						},
						clone: function(e) {
							if (w.isArray(e)) return e.map(w.clone);
							if (w.isObject(e)) {
								for (var t = Object.create(e), n = Object.keys(e), r = n.length, i = 0; i < r; ++i) t[n[i]] = w.clone(e[n[i]]);
								return t
							}
							return e
						},
						_merger: function(e, t, n, r) {
							if (S(e)) {
								var i = t[e],
									a = n[e];
								w.isObject(i) && w.isObject(a) ? w.merge(i, a, r) : t[e] = w.clone(a)
							}
						},
						_mergerIf: function(e, t, n) {
							if (S(e)) {
								var r = t[e],
									i = n[e];
								w.isObject(r) && w.isObject(i) ? w.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = w.clone(i))
							}
						},
						merge: function(e, t, n) {
							var r, i, a, o, s, u = w.isArray(t) ? t : [t],
								c = u.length;
							if (!w.isObject(e)) return e;
							for (r = (n = n || {}).merger || w._merger, i = 0; i < c; ++i)
								if (t = u[i], w.isObject(t))
									for (s = 0, o = (a = Object.keys(t)).length; s < o; ++s) r(a[s], e, t, n);
							return e
						},
						mergeIf: function(e, t) {
							return w.merge(e, t, {
								merger: w._mergerIf
							})
						},
						extend: Object.assign || function(e) {
							return w.merge(e, [].slice.call(arguments, 1), {
								merger: function(e, t, n) {
									t[e] = n[e]
								}
							})
						},
						inherits: function(e) {
							var t = this,
								n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
									return t.apply(this, arguments)
								},
								r = function() {
									this.constructor = n
								};
							return r.prototype = t.prototype, n.prototype = new r, n.extend = w.inherits, e && w.extend(n.prototype, e), n.__super__ = t.prototype, n
						},
						_deprecated: function(e, t, n, r) {
							void 0 !== t && console.warn(e + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
						}
					},
					E = w;
				w.callCallback = w.callback, w.indexOf = function(e, t, n) {
					return Array.prototype.indexOf.call(e, t, n)
				}, w.getValueOrDefault = w.valueOrDefault, w.getValueAtIndexOrDefault = w.valueAtIndexOrDefault;
				var T = {
						linear: function(e) {
							return e
						},
						easeInQuad: function(e) {
							return e * e
						},
						easeOutQuad: function(e) {
							return -e * (e - 2)
						},
						easeInOutQuad: function(e) {
							return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
						},
						easeInCubic: function(e) {
							return e * e * e
						},
						easeOutCubic: function(e) {
							return (e -= 1) * e * e + 1
						},
						easeInOutCubic: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
						},
						easeInQuart: function(e) {
							return e * e * e * e
						},
						easeOutQuart: function(e) {
							return -((e -= 1) * e * e * e - 1)
						},
						easeInOutQuart: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
						},
						easeInQuint: function(e) {
							return e * e * e * e * e
						},
						easeOutQuint: function(e) {
							return (e -= 1) * e * e * e * e + 1
						},
						easeInOutQuint: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
						},
						easeInSine: function(e) {
							return 1 - Math.cos(e * (Math.PI / 2))
						},
						easeOutSine: function(e) {
							return Math.sin(e * (Math.PI / 2))
						},
						easeInOutSine: function(e) {
							return -.5 * (Math.cos(Math.PI * e) - 1)
						},
						easeInExpo: function(e) {
							return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
						},
						easeOutExpo: function(e) {
							return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
						},
						easeInOutExpo: function(e) {
							return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
						},
						easeInCirc: function(e) {
							return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
						},
						easeOutCirc: function(e) {
							return Math.sqrt(1 - (e -= 1) * e)
						},
						easeInOutCirc: function(e) {
							return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						},
						easeInElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
						},
						easeOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
						},
						easeInOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								r = 1;
							return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
						},
						easeInBack: function(e) {
							var t = 1.70158;
							return e * e * ((t + 1) * e - t)
						},
						easeOutBack: function(e) {
							var t = 1.70158;
							return (e -= 1) * e * ((t + 1) * e + t) + 1
						},
						easeInOutBack: function(e) {
							var t = 1.70158;
							return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
						},
						easeInBounce: function(e) {
							return 1 - T.easeOutBounce(1 - e)
						},
						easeOutBounce: function(e) {
							return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						},
						easeInOutBounce: function(e) {
							return e < .5 ? .5 * T.easeInBounce(2 * e) : .5 * T.easeOutBounce(2 * e - 1) + .5
						}
					},
					C = {
						effects: T
					};
				E.easingEffects = T;
				var $ = Math.PI,
					k = $ / 180,
					O = 2 * $,
					x = $ / 2,
					P = $ / 4,
					M = 2 * $ / 3,
					I = {
						clear: function(e) {
							e.ctx.clearRect(0, 0, e.width, e.height)
						},
						roundedRect: function(e, t, n, r, i, a) {
							if (a) {
								var o = Math.min(a, i / 2, r / 2),
									s = t + o,
									u = n + o,
									c = t + r - o,
									l = n + i - o;
								e.moveTo(t, u), s < c && u < l ? (e.arc(s, u, o, -$, -x), e.arc(c, u, o, -x, 0), e.arc(c, l, o, 0, x), e.arc(s, l, o, x, $)) : s < c ? (e.moveTo(s, n), e.arc(c, u, o, -x, x), e.arc(s, u, o, x, $ + x)) : u < l ? (e.arc(s, u, o, -$, 0), e.arc(s, l, o, 0, $)) : e.arc(s, u, o, -$, $), e.closePath(), e.moveTo(t, n)
							} else e.rect(t, n, r, i)
						},
						drawPoint: function(e, t, n, r, i, a) {
							var o, s, u, c, l, f = (a || 0) * k;
							if (t && "object" == typeof t && ("[object HTMLImageElement]" === (o = t.toString()) || "[object HTMLCanvasElement]" === o)) return e.save(), e.translate(r, i), e.rotate(f), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();
							if (!(isNaN(n) || n <= 0)) {
								switch (e.beginPath(), t) {
									default:
										e.arc(r, i, n, 0, O), e.closePath();
										break;
									case "triangle":
										e.moveTo(r + Math.sin(f) * n, i - Math.cos(f) * n), f += M, e.lineTo(r + Math.sin(f) * n, i - Math.cos(f) * n), f += M, e.lineTo(r + Math.sin(f) * n, i - Math.cos(f) * n), e.closePath();
										break;
									case "rectRounded":
										c = n - (l = .516 * n), s = Math.cos(f + P) * c, u = Math.sin(f + P) * c, e.arc(r - s, i - u, l, f - $, f - x), e.arc(r + u, i - s, l, f - x, f), e.arc(r + s, i + u, l, f, f + x), e.arc(r - u, i + s, l, f + x, f + $), e.closePath();
										break;
									case "rect":
										if (!a) {
											c = Math.SQRT1_2 * n, e.rect(r - c, i - c, 2 * c, 2 * c);
											break
										}
										f += P;
									case "rectRot":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + u, i - s), e.lineTo(r + s, i + u), e.lineTo(r - u, i + s), e.closePath();
										break;
									case "crossRot":
										f += P;
									case "cross":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s);
										break;
									case "star":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s), f += P, s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u), e.moveTo(r + u, i - s), e.lineTo(r - u, i + s);
										break;
									case "line":
										s = Math.cos(f) * n, u = Math.sin(f) * n, e.moveTo(r - s, i - u), e.lineTo(r + s, i + u);
										break;
									case "dash":
										e.moveTo(r, i), e.lineTo(r + Math.cos(f) * n, i + Math.sin(f) * n)
								}
								e.fill(), e.stroke()
							}
						},
						_isPointInArea: function(e, t) {
							var n = 1e-6;
							return e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n
						},
						clipArea: function(e, t) {
							e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
						},
						unclipArea: function(e) {
							e.restore()
						},
						lineTo: function(e, t, n, r) {
							var i = n.steppedLine;
							if (i) {
								if ("middle" === i) {
									var a = (t.x + n.x) / 2;
									e.lineTo(a, r ? n.y : t.y), e.lineTo(a, r ? t.y : n.y)
								} else "after" === i && !r || "after" !== i && r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
								e.lineTo(n.x, n.y)
							} else n.tension ? e.bezierCurveTo(r ? t.controlPointPreviousX : t.controlPointNextX, r ? t.controlPointPreviousY : t.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
						}
					},
					L = I;
				E.clear = I.clear, E.drawRoundedRectangle = function(e) {
					e.beginPath(), I.roundedRect.apply(I, arguments)
				};
				var D = {
					_set: function(e, t) {
						return E.merge(this[e] || (this[e] = {}), t)
					}
				};
				D._set("global", {
					defaultColor: "rgba(0,0,0,0.1)",
					defaultFontColor: "#666",
					defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: "normal",
					defaultLineHeight: 1.2,
					showLines: !0
				});
				var B = D,
					N = E.valueOrDefault,
					R = {
						toLineHeight: function(e, t) {
							var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
							if (!n || "normal" === n[1]) return 1.2 * t;
							switch (e = +n[2], n[3]) {
								case "px":
									return e;
								case "%":
									e /= 100
							}
							return t * e
						},
						toPadding: function(e) {
							var t, n, r, i;
							return E.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, r = +e.bottom || 0, i = +e.left || 0) : t = n = r = i = +e || 0, {
								top: t,
								right: n,
								bottom: r,
								left: i,
								height: t + r,
								width: i + n
							}
						},
						_parseFont: function(e) {
							var t = B.global,
								n = N(e.fontSize, t.defaultFontSize),
								r = {
									family: N(e.fontFamily, t.defaultFontFamily),
									lineHeight: E.options.toLineHeight(N(e.lineHeight, t.defaultLineHeight), n),
									size: n,
									style: N(e.fontStyle, t.defaultFontStyle),
									weight: null,
									string: ""
								};
							return r.string = function(e) {
								return !e || E.isNullOrUndef(e.size) || E.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
							}(r), r
						},
						resolve: function(e, t, n, r) {
							var i, a, o, s = !0;
							for (i = 0, a = e.length; i < a; ++i)
								if (void 0 !== (o = e[i]) && (void 0 !== t && "function" == typeof o && (o = o(t), s = !1), void 0 !== n && E.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return r && !s && (r.cacheable = !1), o
						}
					},
					F = {
						_factorize: function(e) {
							var t, n = [],
								r = Math.sqrt(e);
							for (t = 1; t < r; t++) e % t == 0 && (n.push(t), n.push(e / t));
							return r === (0 | r) && n.push(r), n.sort((function(e, t) {
								return e - t
							})).pop(), n
						},
						log10: Math.log10 || function(e) {
							var t = Math.log(e) * Math.LOG10E,
								n = Math.round(t);
							return e === Math.pow(10, n) ? n : t
						}
					},
					U = F;
				E.log10 = F.log10;
				var j = E,
					H = C,
					Y = L,
					V = R,
					z = U,
					Q = {
						getRtlAdapter: function(e, t, n) {
							return e ? function(e, t) {
								return {
									x: function(n) {
										return e + e + t - n
									},
									setWidth: function(e) {
										t = e
									},
									textAlign: function(e) {
										return "center" === e ? e : "right" === e ? "left" : "right"
									},
									xPlus: function(e, t) {
										return e - t
									},
									leftForLtr: function(e, t) {
										return e - t
									}
								}
							}(t, n) : {
								x: function(e) {
									return e
								},
								setWidth: function(e) {},
								textAlign: function(e) {
									return e
								},
								xPlus: function(e, t) {
									return e + t
								},
								leftForLtr: function(e, t) {
									return e
								}
							}
						},
						overrideTextDirection: function(e, t) {
							var n, r;
							"ltr" !== t && "rtl" !== t || (r = [(n = e.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = r)
						},
						restoreTextDirection: function(e) {
							var t = e.prevTextDirection;
							void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
						}
					};
				j.easing = H, j.canvas = Y, j.options = V, j.math = z, j.rtl = Q;
				var G = function(e) {
					j.extend(this, e), this.initialize.apply(this, arguments)
				};
				j.extend(G.prototype, {
					_type: void 0,
					initialize: function() {
						this.hidden = !1
					},
					pivot: function() {
						var e = this;
						return e._view || (e._view = j.extend({}, e._model)), e._start = {}, e
					},
					transition: function(e) {
						var t = this,
							n = t._model,
							r = t._start,
							i = t._view;
						return n && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), function(e, t, n, r) {
							var i, a, o, s, u, c, l, f, d, h = Object.keys(n);
							for (i = 0, a = h.length; i < a; ++i)
								if (c = n[o = h[i]], t.hasOwnProperty(o) || (t[o] = c), (s = t[o]) !== c && "_" !== o[0]) {
									if (e.hasOwnProperty(o) || (e[o] = s), (l = typeof c) == typeof(u = e[o]))
										if ("string" === l) {
											if ((f = A(u)).valid && (d = A(c)).valid) {
												t[o] = d.mix(f, r).rgbString();
												continue
											}
										} else if (j.isFinite(u) && j.isFinite(c)) {
										t[o] = u + (c - u) * r;
										continue
									}
									t[o] = c
								}
						}(r, i, n, e), t) : (t._view = j.extend({}, n), t._start = null, t)
					},
					tooltipPosition: function() {
						return {
							x: this._model.x,
							y: this._model.y
						}
					},
					hasValue: function() {
						return j.isNumber(this._model.x) && j.isNumber(this._model.y)
					}
				}), G.extend = j.inherits;
				var q = G,
					W = q.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: "",
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null
					}),
					K = W;
				Object.defineProperty(W.prototype, "animationObject", {
					get: function() {
						return this
					}
				}), Object.defineProperty(W.prototype, "chartInstance", {
					get: function() {
						return this.chart
					},
					set: function(e) {
						this.chart = e
					}
				}), B._set("global", {
					animation: {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: j.noop,
						onComplete: j.noop
					}
				});
				var X = {
						animations: [],
						request: null,
						addAnimation: function(e, t, n, r) {
							var i, a, o = this.animations;
							for (t.chart = e, t.startTime = Date.now(), t.duration = n, r || (e.animating = !0), i = 0, a = o.length; i < a; ++i)
								if (o[i].chart === e) return void(o[i] = t);
							o.push(t), 1 === o.length && this.requestAnimationFrame()
						},
						cancelAnimation: function(e) {
							var t = j.findIndex(this.animations, (function(t) {
								return t.chart === e
							})); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
						},
						requestAnimationFrame: function() {
							var e = this;
							null === e.request && (e.request = j.requestAnimFrame.call(window, (function() {
								e.request = null, e.startDigest()
							})))
						},
						startDigest: function() {
							var e = this;
							e.advance(), e.animations.length > 0 && e.requestAnimationFrame()
						},
						advance: function() {
							for (var e, t, n, r, i = this.animations, a = 0; a < i.length;) t = (e = i[a]).chart, n = e.numSteps, r = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(r, n), j.callback(e.render, [t, e], t), j.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (j.callback(e.onAnimationComplete, [e], t), t.animating = !1, i.splice(a, 1)) : ++a
						}
					},
					J = j.options.resolve,
					Z = ["push", "pop", "shift", "splice", "unshift"];

				function ee(e, t) {
					var n = e._chartjs;
					if (n) {
						var r = n.listeners,
							i = r.indexOf(t); - 1 !== i && r.splice(i, 1), r.length > 0 || (Z.forEach((function(t) {
							delete e[t]
						})), delete e._chartjs)
					}
				}
				var te = function(e, t) {
					this.initialize(e, t)
				};
				j.extend(te.prototype, {
					datasetElementType: null,
					dataElementType: null,
					_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
					initialize: function(e, t) {
						var n = this;
						n.chart = e, n.index = t, n.linkScales(), n.addElements(), n._type = n.getMeta().type
					},
					updateIndex: function(e) {
						this.index = e
					},
					linkScales: function() {
						var e = this,
							t = e.getMeta(),
							n = e.chart,
							r = n.scales,
							i = e.getDataset(),
							a = n.options.scales;
						null !== t.xAxisID && t.xAxisID in r && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in r && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id)
					},
					getDataset: function() {
						return this.chart.data.datasets[this.index]
					},
					getMeta: function() {
						return this.chart.getDatasetMeta(this.index)
					},
					getScaleForId: function(e) {
						return this.chart.scales[e]
					},
					_getValueScaleId: function() {
						return this.getMeta().yAxisID
					},
					_getIndexScaleId: function() {
						return this.getMeta().xAxisID
					},
					_getValueScale: function() {
						return this.getScaleForId(this._getValueScaleId())
					},
					_getIndexScale: function() {
						return this.getScaleForId(this._getIndexScaleId())
					},
					reset: function() {
						this._update(!0)
					},
					destroy: function() {
						this._data && ee(this._data, this)
					},
					createMetaDataset: function() {
						var e = this,
							t = e.datasetElementType;
						return t && new t({
							_chart: e.chart,
							_datasetIndex: e.index
						})
					},
					createMetaData: function(e) {
						var t = this,
							n = t.dataElementType;
						return n && new n({
							_chart: t.chart,
							_datasetIndex: t.index,
							_index: e
						})
					},
					addElements: function() {
						var e, t, n = this,
							r = n.getMeta(),
							i = n.getDataset().data || [],
							a = r.data;
						for (e = 0, t = i.length; e < t; ++e) a[e] = a[e] || n.createMetaData(e);
						r.dataset = r.dataset || n.createMetaDataset()
					},
					addElementAndReset: function(e) {
						var t = this.createMetaData(e);
						this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
					},
					buildOrUpdateElements: function() {
						var e = this,
							t = e.getDataset(),
							n = t.data || (t.data = []);
						e._data !== n && (e._data && ee(e._data, e), n && Object.isExtensible(n) && function(e, t) {
							e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
								configurable: !0,
								enumerable: !1,
								value: {
									listeners: [t]
								}
							}), Z.forEach((function(t) {
								var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
									r = e[t];
								Object.defineProperty(e, t, {
									configurable: !0,
									enumerable: !1,
									value: function() {
										var t = Array.prototype.slice.call(arguments),
											i = r.apply(this, t);
										return j.each(e._chartjs.listeners, (function(e) {
											"function" == typeof e[n] && e[n].apply(e, t)
										})), i
									}
								})
							})))
						}(n, e), e._data = n), e.resyncElements()
					},
					_configure: function() {
						var e = this;
						e._config = j.merge(Object.create(null), [e.chart.options.datasets[e._type], e.getDataset()], {
							merger: function(e, t, n) {
								"_meta" !== e && "data" !== e && j._merger(e, t, n)
							}
						})
					},
					_update: function(e) {
						var t = this;
						t._configure(), t._cachedDataOpts = null, t.update(e)
					},
					update: j.noop,
					transition: function(e) {
						for (var t = this.getMeta(), n = t.data || [], r = n.length, i = 0; i < r; ++i) n[i].transition(e);
						t.dataset && t.dataset.transition(e)
					},
					draw: function() {
						var e = this.getMeta(),
							t = e.data || [],
							n = t.length,
							r = 0;
						for (e.dataset && e.dataset.draw(); r < n; ++r) t[r].draw()
					},
					getStyle: function(e) {
						var t, n = this,
							r = n.getMeta(),
							i = r.dataset;
						return n._configure(), i && void 0 === e ? t = n._resolveDatasetElementOptions(i || {}) : (e = e || 0, t = n._resolveDataElementOptions(r.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t
					},
					_resolveDatasetElementOptions: function(e, t) {
						var n, r, i, a, o = this,
							s = o.chart,
							u = o._config,
							c = e.custom || {},
							l = s.options.elements[o.datasetElementType.prototype._type] || {},
							f = o._datasetElementOptions,
							d = {},
							h = {
								chart: s,
								dataset: o.getDataset(),
								datasetIndex: o.index,
								hover: t
							};
						for (n = 0, r = f.length; n < r; ++n) i = f[n], a = t ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i, d[i] = J([c[a], u[a], l[a]], h);
						return d
					},
					_resolveDataElementOptions: function(e, t) {
						var n = this,
							r = e && e.custom,
							i = n._cachedDataOpts;
						if (i && !r) return i;
						var a, o, s, u, c = n.chart,
							l = n._config,
							f = c.options.elements[n.dataElementType.prototype._type] || {},
							d = n._dataElementOptions,
							h = {},
							p = {
								chart: c,
								dataIndex: t,
								dataset: n.getDataset(),
								datasetIndex: n.index
							},
							_ = {
								cacheable: !r
							};
						if (r = r || {}, j.isArray(d))
							for (o = 0, s = d.length; o < s; ++o) h[u = d[o]] = J([r[u], l[u], f[u]], p, t, _);
						else
							for (o = 0, s = (a = Object.keys(d)).length; o < s; ++o) h[u = a[o]] = J([r[u], l[d[u]], l[u], f[u]], p, t, _);
						return _.cacheable && (n._cachedDataOpts = Object.freeze(h)), h
					},
					removeHoverStyle: function(e) {
						j.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							n = e._index,
							r = e.custom || {},
							i = e._model,
							a = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: i.backgroundColor,
							borderColor: i.borderColor,
							borderWidth: i.borderWidth
						}, i.backgroundColor = J([r.hoverBackgroundColor, t.hoverBackgroundColor, a(i.backgroundColor)], void 0, n), i.borderColor = J([r.hoverBorderColor, t.hoverBorderColor, a(i.borderColor)], void 0, n), i.borderWidth = J([r.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth], void 0, n)
					},
					_removeDatasetHoverStyle: function() {
						var e = this.getMeta().dataset;
						e && this.removeHoverStyle(e)
					},
					_setDatasetHoverStyle: function() {
						var e, t, n, r, i, a, o = this.getMeta().dataset,
							s = {};
						if (o) {
							for (a = o._model, i = this._resolveDatasetElementOptions(o, !0), e = 0, t = (r = Object.keys(i)).length; e < t; ++e) s[n = r[e]] = a[n], a[n] = i[n];
							o.$previousStyle = s
						}
					},
					resyncElements: function() {
						var e = this,
							t = e.getMeta(),
							n = e.getDataset().data,
							r = t.data.length,
							i = n.length;
						i < r ? t.data.splice(i, r - i) : i > r && e.insertElements(r, i - r)
					},
					insertElements: function(e, t) {
						for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
					},
					onDataPush: function() {
						var e = arguments.length;
						this.insertElements(this.getDataset().data.length - e, e)
					},
					onDataPop: function() {
						this.getMeta().data.pop()
					},
					onDataShift: function() {
						this.getMeta().data.shift()
					},
					onDataSplice: function(e, t) {
						this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
					},
					onDataUnshift: function() {
						this.insertElements(0, arguments.length)
					}
				}), te.extend = j.inherits;
				var ne = te,
					re = 2 * Math.PI;

				function ie(e, t) {
					var n = t.startAngle,
						r = t.endAngle,
						i = t.pixelMargin,
						a = i / t.outerRadius,
						o = t.x,
						s = t.y;
					e.beginPath(), e.arc(o, s, t.outerRadius, n - a, r + a), t.innerRadius > i ? (a = i / t.innerRadius, e.arc(o, s, t.innerRadius - i, r + a, n - a, !0)) : e.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip()
				}

				function ae(e, t, n) {
					var r = "inner" === t.borderAlign;
					r ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), n.fullCircles && function(e, t, n, r) {
						var i, a = n.endAngle;
						for (r && (n.endAngle = n.startAngle + re, ie(e, n), n.endAngle = a, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += re, n.fullCircles--)), e.beginPath(), e.arc(n.x, n.y, n.innerRadius, n.startAngle + re, n.startAngle, !0), i = 0; i < n.fullCircles; ++i) e.stroke();
						for (e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.startAngle + re), i = 0; i < n.fullCircles; ++i) e.stroke()
					}(e, t, n, r), r && ie(e, n), e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle), e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), e.closePath(), e.stroke()
				}
				B._set("global", {
					elements: {
						arc: {
							backgroundColor: B.global.defaultColor,
							borderColor: "#fff",
							borderWidth: 2,
							borderAlign: "center"
						}
					}
				});
				var oe = q.extend({
						_type: "arc",
						inLabelRange: function(e) {
							var t = this._view;
							return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
						},
						inRange: function(e, t) {
							var n = this._view;
							if (n) {
								for (var r = j.getAngleFromPoint(n, {
										x: e,
										y: t
									}), i = r.angle, a = r.distance, o = n.startAngle, s = n.endAngle; s < o;) s += re;
								for (; i > s;) i -= re;
								for (; i < o;) i += re;
								var u = i >= o && i <= s,
									c = a >= n.innerRadius && a <= n.outerRadius;
								return u && c
							}
							return !1
						},
						getCenterPoint: function() {
							var e = this._view,
								t = (e.startAngle + e.endAngle) / 2,
								n = (e.innerRadius + e.outerRadius) / 2;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						getArea: function() {
							var e = this._view;
							return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
						},
						tooltipPosition: function() {
							var e = this._view,
								t = e.startAngle + (e.endAngle - e.startAngle) / 2,
								n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						draw: function() {
							var e, t = this._chart.ctx,
								n = this._view,
								r = "inner" === n.borderAlign ? .33 : 0,
								i = {
									x: n.x,
									y: n.y,
									innerRadius: n.innerRadius,
									outerRadius: Math.max(n.outerRadius - r, 0),
									pixelMargin: r,
									startAngle: n.startAngle,
									endAngle: n.endAngle,
									fullCircles: Math.floor(n.circumference / re)
								};
							if (t.save(), t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor, i.fullCircles) {
								for (i.endAngle = i.startAngle + re, t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), e = 0; e < i.fullCircles; ++e) t.fill();
								i.endAngle = i.startAngle + n.circumference % re
							}
							t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.fill(), n.borderWidth && ae(t, n, i), t.restore()
						}
					}),
					se = j.valueOrDefault,
					ue = B.global.defaultColor;
				B._set("global", {
					elements: {
						line: {
							tension: .4,
							backgroundColor: ue,
							borderWidth: 3,
							borderColor: ue,
							borderCapStyle: "butt",
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: "miter",
							capBezierPoints: !0,
							fill: !0
						}
					}
				});
				var ce = q.extend({
						_type: "line",
						draw: function() {
							var e, t, n, r = this,
								i = r._view,
								a = r._chart.ctx,
								o = i.spanGaps,
								s = r._children.slice(),
								u = B.global,
								c = u.elements.line,
								l = -1,
								f = r._loop;
							if (s.length) {
								if (r._loop) {
									for (e = 0; e < s.length; ++e)
										if (t = j.previousItem(s, e), !s[e]._view.skip && t._view.skip) {
											s = s.slice(e).concat(s.slice(0, e)), f = o;
											break
										} f && s.push(s[0])
								}
								for (a.save(), a.lineCap = i.borderCapStyle || c.borderCapStyle, a.setLineDash && a.setLineDash(i.borderDash || c.borderDash), a.lineDashOffset = se(i.borderDashOffset, c.borderDashOffset), a.lineJoin = i.borderJoinStyle || c.borderJoinStyle, a.lineWidth = se(i.borderWidth, c.borderWidth), a.strokeStyle = i.borderColor || u.defaultColor, a.beginPath(), (n = s[0]._view).skip || (a.moveTo(n.x, n.y), l = 0), e = 1; e < s.length; ++e) n = s[e]._view, t = -1 === l ? j.previousItem(s, e) : s[l], n.skip || (l !== e - 1 && !o || -1 === l ? a.moveTo(n.x, n.y) : j.canvas.lineTo(a, t._view, n), l = e);
								f && a.closePath(), a.stroke(), a.restore()
							}
						}
					}),
					le = j.valueOrDefault,
					fe = B.global.defaultColor;

				function de(e) {
					var t = this._view;
					return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
				}
				B._set("global", {
					elements: {
						point: {
							radius: 3,
							pointStyle: "circle",
							backgroundColor: fe,
							borderColor: fe,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1
						}
					}
				});
				var he = q.extend({
						_type: "point",
						inRange: function(e, t) {
							var n = this._view;
							return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
						},
						inLabelRange: de,
						inXRange: de,
						inYRange: function(e) {
							var t = this._view;
							return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
						},
						getCenterPoint: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						},
						getArea: function() {
							return Math.PI * Math.pow(this._view.radius, 2)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y,
								padding: e.radius + e.borderWidth
							}
						},
						draw: function(e) {
							var t = this._view,
								n = this._chart.ctx,
								r = t.pointStyle,
								i = t.rotation,
								a = t.radius,
								o = t.x,
								s = t.y,
								u = B.global,
								c = u.defaultColor;
							t.skip || (void 0 === e || j.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || c, n.lineWidth = le(t.borderWidth, u.elements.point.borderWidth), n.fillStyle = t.backgroundColor || c, j.canvas.drawPoint(n, r, a, o, s, i))
						}
					}),
					pe = B.global.defaultColor;

				function _e(e) {
					return e && void 0 !== e.width
				}

				function me(e) {
					var t, n, r, i, a;
					return _e(e) ? (a = e.width / 2, t = e.x - a, n = e.x + a, r = Math.min(e.y, e.base), i = Math.max(e.y, e.base)) : (a = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), r = e.y - a, i = e.y + a), {
						left: t,
						top: r,
						right: n,
						bottom: i
					}
				}

				function be(e, t, n) {
					return e === t ? n : e === n ? t : e
				}

				function ge(e, t, n) {
					var r, i, a, o, s = e.borderWidth,
						u = function(e) {
							var t = e.borderSkipped,
								n = {};
							return t ? (e.horizontal ? e.base > e.x && (t = be(t, "left", "right")) : e.base < e.y && (t = be(t, "bottom", "top")), n[t] = !0, n) : n
						}(e);
					return j.isObject(s) ? (r = +s.top || 0, i = +s.right || 0, a = +s.bottom || 0, o = +s.left || 0) : r = i = a = o = +s || 0, {
						t: u.top || r < 0 ? 0 : r > n ? n : r,
						r: u.right || i < 0 ? 0 : i > t ? t : i,
						b: u.bottom || a < 0 ? 0 : a > n ? n : a,
						l: u.left || o < 0 ? 0 : o > t ? t : o
					}
				}

				function ve(e, t, n) {
					var r = null === t,
						i = null === n,
						a = !(!e || r && i) && me(e);
					return a && (r || t >= a.left && t <= a.right) && (i || n >= a.top && n <= a.bottom)
				}
				B._set("global", {
					elements: {
						rectangle: {
							backgroundColor: pe,
							borderColor: pe,
							borderSkipped: "bottom",
							borderWidth: 0
						}
					}
				});
				var ye = q.extend({
						_type: "rectangle",
						draw: function() {
							var e = this._chart.ctx,
								t = this._view,
								n = function(e) {
									var t = me(e),
										n = t.right - t.left,
										r = t.bottom - t.top,
										i = ge(e, n / 2, r / 2);
									return {
										outer: {
											x: t.left,
											y: t.top,
											w: n,
											h: r
										},
										inner: {
											x: t.left + i.l,
											y: t.top + i.t,
											w: n - i.l - i.r,
											h: r - i.t - i.b
										}
									}
								}(t),
								r = n.outer,
								i = n.inner;
							e.fillStyle = t.backgroundColor, e.fillRect(r.x, r.y, r.w, r.h), r.w === i.w && r.h === i.h || (e.save(), e.beginPath(), e.rect(r.x, r.y, r.w, r.h), e.clip(), e.fillStyle = t.borderColor, e.rect(i.x, i.y, i.w, i.h), e.fill("evenodd"), e.restore())
						},
						height: function() {
							var e = this._view;
							return e.base - e.y
						},
						inRange: function(e, t) {
							return ve(this._view, e, t)
						},
						inLabelRange: function(e, t) {
							var n = this._view;
							return _e(n) ? ve(n, e, null) : ve(n, null, t)
						},
						inXRange: function(e) {
							return ve(this._view, e, null)
						},
						inYRange: function(e) {
							return ve(this._view, null, e)
						},
						getCenterPoint: function() {
							var e, t, n = this._view;
							return _e(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {
								x: e,
								y: t
							}
						},
						getArea: function() {
							var e = this._view;
							return _e(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						}
					}),
					Ae = {},
					Se = oe,
					we = ce,
					Ee = he,
					Te = ye;
				Ae.Arc = Se, Ae.Line = we, Ae.Point = Ee, Ae.Rectangle = Te;
				var Ce = j._deprecated,
					$e = j.valueOrDefault;

				function ke(e, t, n) {
					var r, i, a = n.barThickness,
						o = t.stackCount,
						s = t.pixels[e],
						u = j.isNullOrUndef(a) ? function(e, t) {
							var n, r, i, a, o = e._length;
							for (i = 1, a = t.length; i < a; ++i) o = Math.min(o, Math.abs(t[i] - t[i - 1]));
							for (i = 0, a = e.getTicks().length; i < a; ++i) r = e.getPixelForTick(i), o = i > 0 ? Math.min(o, Math.abs(r - n)) : o, n = r;
							return o
						}(t.scale, t.pixels) : -1;
					return j.isNullOrUndef(a) ? (r = u * n.categoryPercentage, i = n.barPercentage) : (r = a * o, i = 1), {
						chunk: r / o,
						ratio: i,
						start: s - r / 2
					}
				}
				B._set("bar", {
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}],
						yAxes: [{
							type: "linear"
						}]
					}
				}), B._set("global", {
					datasets: {
						bar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Oe = ne.extend({
						dataElementType: Ae.Rectangle,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
						initialize: function() {
							var e, t, n = this;
							ne.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0, t = n._getIndexScale().options, Ce("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Ce("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Ce("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Ce("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Ce("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
						},
						update: function(e) {
							var t, n, r = this,
								i = r.getMeta().data;
							for (r._ruler = r.getRuler(), t = 0, n = i.length; t < n; ++t) r.updateElement(i[t], t, e)
						},
						updateElement: function(e, t, n) {
							var r = this,
								i = r.getMeta(),
								a = r.getDataset(),
								o = r._resolveDataElementOptions(e, t);
							e._xScale = r.getScaleForId(i.xAxisID), e._yScale = r.getScaleForId(i.yAxisID), e._datasetIndex = r.index, e._index = t, e._model = {
								backgroundColor: o.backgroundColor,
								borderColor: o.borderColor,
								borderSkipped: o.borderSkipped,
								borderWidth: o.borderWidth,
								datasetLabel: a.label,
								label: r.chart.data.labels[t]
							}, j.isArray(a.data[t]) && (e._model.borderSkipped = null), r._updateElementGeometry(e, t, n, o), e.pivot()
						},
						_updateElementGeometry: function(e, t, n, r) {
							var i = this,
								a = e._model,
								o = i._getValueScale(),
								s = o.getBasePixel(),
								u = o.isHorizontal(),
								c = i._ruler || i.getRuler(),
								l = i.calculateBarValuePixels(i.index, t, r),
								f = i.calculateBarIndexPixels(i.index, t, c, r);
							a.horizontal = u, a.base = n ? s : l.base, a.x = u ? n ? s : l.head : f.center, a.y = u ? f.center : n ? s : l.head, a.height = u ? f.size : void 0, a.width = u ? void 0 : f.size
						},
						_getStacks: function(e) {
							var t, n, r = this._getIndexScale(),
								i = r._getMatchingVisibleMetas(this._type),
								a = r.options.stacked,
								o = i.length,
								s = [];
							for (t = 0; t < o && (n = i[t], (!1 === a || -1 === s.indexOf(n.stack) || void 0 === a && void 0 === n.stack) && s.push(n.stack), n.index !== e); ++t);
							return s
						},
						getStackCount: function() {
							return this._getStacks().length
						},
						getStackIndex: function(e, t) {
							var n = this._getStacks(e),
								r = void 0 !== t ? n.indexOf(t) : -1;
							return -1 === r ? n.length - 1 : r
						},
						getRuler: function() {
							var e, t, n = this,
								r = n._getIndexScale(),
								i = [];
							for (e = 0, t = n.getMeta().data.length; e < t; ++e) i.push(r.getPixelForValue(null, e, n.index));
							return {
								pixels: i,
								start: r._startPixel,
								end: r._endPixel,
								stackCount: n.getStackCount(),
								scale: r
							}
						},
						calculateBarValuePixels: function(e, t, n) {
							var r, i, a, o, s, u, c, l = this,
								f = l.chart,
								d = l._getValueScale(),
								h = d.isHorizontal(),
								p = f.data.datasets,
								_ = d._getMatchingVisibleMetas(l._type),
								m = d._parseValue(p[e].data[t]),
								b = n.minBarLength,
								g = d.options.stacked,
								v = l.getMeta().stack,
								y = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
								A = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max,
								S = _.length;
							if (g || void 0 === g && void 0 !== v)
								for (r = 0; r < S && (i = _[r]).index !== e; ++r) i.stack === v && (a = void 0 === (c = d._parseValue(p[i.index].data[t])).start ? c.end : c.min >= 0 && c.max >= 0 ? c.max : c.min, (m.min < 0 && a < 0 || m.max >= 0 && a > 0) && (y += a));
							return o = d.getPixelForValue(y), u = (s = d.getPixelForValue(y + A)) - o, void 0 !== b && Math.abs(u) < b && (u = b, s = A >= 0 && !h || A < 0 && h ? o - b : o + b), {
								size: u,
								base: o,
								head: s,
								center: s + u / 2
							}
						},
						calculateBarIndexPixels: function(e, t, n, r) {
							var i = "flex" === r.barThickness ? function(e, t, n) {
									var r, i = t.pixels,
										a = i[e],
										o = e > 0 ? i[e - 1] : null,
										s = e < i.length - 1 ? i[e + 1] : null,
										u = n.categoryPercentage;
									return null === o && (o = a - (null === s ? t.end - t.start : s - a)), null === s && (s = a + a - o), r = a - (a - Math.min(o, s)) / 2 * u, {
										chunk: Math.abs(s - o) / 2 * u / t.stackCount,
										ratio: n.barPercentage,
										start: r
									}
								}(t, n, r) : ke(t, n, r),
								a = this.getStackIndex(e, this.getMeta().stack),
								o = i.start + i.chunk * a + i.chunk / 2,
								s = Math.min($e(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
							return {
								base: o - s / 2,
								head: o + s / 2,
								center: o,
								size: s
							}
						},
						draw: function() {
							var e = this,
								t = e.chart,
								n = e._getValueScale(),
								r = e.getMeta().data,
								i = e.getDataset(),
								a = r.length,
								o = 0;
							for (j.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
								var s = n._parseValue(i.data[o]);
								isNaN(s.min) || isNaN(s.max) || r[o].draw()
							}
							j.canvas.unclipArea(t.ctx)
						},
						_resolveDataElementOptions: function() {
							var e = this,
								t = j.extend({}, ne.prototype._resolveDataElementOptions.apply(e, arguments)),
								n = e._getIndexScale().options,
								r = e._getValueScale().options;
							return t.barPercentage = $e(n.barPercentage, t.barPercentage), t.barThickness = $e(n.barThickness, t.barThickness), t.categoryPercentage = $e(n.categoryPercentage, t.categoryPercentage), t.maxBarThickness = $e(n.maxBarThickness, t.maxBarThickness), t.minBarLength = $e(r.minBarLength, t.minBarLength), t
						}
					}),
					xe = j.valueOrDefault,
					Pe = j.options.resolve;
				B._set("bubble", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							position: "left",
							id: "y-axis-0"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.datasets[e.datasetIndex].label || "",
									r = t.datasets[e.datasetIndex].data[e.index];
								return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + r.r + ")"
							}
						}
					}
				});
				var Me = ne.extend({
						dataElementType: Ae.Point,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
						update: function(e) {
							var t = this,
								n = t.getMeta().data;
							j.each(n, (function(n, r) {
								t.updateElement(n, r, e)
							}))
						},
						updateElement: function(e, t, n) {
							var r = this,
								i = r.getMeta(),
								a = e.custom || {},
								o = r.getScaleForId(i.xAxisID),
								s = r.getScaleForId(i.yAxisID),
								u = r._resolveDataElementOptions(e, t),
								c = r.getDataset().data[t],
								l = r.index,
								f = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof c ? c : NaN, t, l),
								d = n ? s.getBasePixel() : s.getPixelForValue(c, t, l);
							e._xScale = o, e._yScale = s, e._options = u, e._datasetIndex = l, e._index = t, e._model = {
								backgroundColor: u.backgroundColor,
								borderColor: u.borderColor,
								borderWidth: u.borderWidth,
								hitRadius: u.hitRadius,
								pointStyle: u.pointStyle,
								rotation: u.rotation,
								radius: n ? 0 : u.radius,
								skip: a.skip || isNaN(f) || isNaN(d),
								x: f,
								y: d
							}, e.pivot()
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								r = j.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = xe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = xe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = xe(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
						},
						_resolveDataElementOptions: function(e, t) {
							var n = this,
								r = n.chart,
								i = n.getDataset(),
								a = e.custom || {},
								o = i.data[t] || {},
								s = ne.prototype._resolveDataElementOptions.apply(n, arguments),
								u = {
									chart: r,
									dataIndex: t,
									dataset: i,
									datasetIndex: n.index
								};
							return n._cachedDataOpts === s && (s = j.extend({}, s)), s.radius = Pe([a.radius, o.r, n._config.radius, r.options.elements.point.radius], u, t), s
						}
					}),
					Ie = j.valueOrDefault,
					Le = Math.PI,
					De = 2 * Le,
					Be = Le / 2;
				B._set("doughnut", {
					animation: {
						animateRotate: !0,
						animateScale: !1
					},
					hover: {
						mode: "single"
					},
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data,
							o = a.datasets,
							s = a.labels;
						if (i.setAttribute("class", e.id + "-legend"), o.length)
							for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
						return i.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
									var i = e.getDatasetMeta(0),
										a = i.controller.getStyle(r);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
										index: r
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, r, i, a = t.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a] && (i.data[a].hidden = !i.data[a].hidden);
							o.update()
						}
					},
					cutoutPercentage: 50,
					rotation: -Be,
					circumference: De,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.labels[e.index],
									r = ": " + t.datasets[e.datasetIndex].data[e.index];
								return j.isArray(n) ? (n = n.slice())[0] += r : n += r, n
							}
						}
					}
				});
				var Ne = ne.extend({
					dataElementType: Ae.Arc,
					linkScales: j.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					getRingIndex: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
						return t
					},
					update: function(e) {
						var t, n, r, i, a = this,
							o = a.chart,
							s = o.chartArea,
							u = o.options,
							c = 1,
							l = 1,
							f = 0,
							d = 0,
							h = a.getMeta(),
							p = h.data,
							_ = u.cutoutPercentage / 100 || 0,
							m = u.circumference,
							b = a._getRingWeight(a.index);
						if (m < De) {
							var g = u.rotation % De,
								v = (g += g >= Le ? -De : g < -Le ? De : 0) + m,
								y = Math.cos(g),
								A = Math.sin(g),
								S = Math.cos(v),
								w = Math.sin(v),
								E = g <= 0 && v >= 0 || v >= De,
								T = g <= Be && v >= Be || v >= De + Be,
								C = g <= -Be && v >= -Be || v >= Le + Be,
								$ = g === -Le || v >= Le ? -1 : Math.min(y, y * _, S, S * _),
								k = C ? -1 : Math.min(A, A * _, w, w * _),
								O = E ? 1 : Math.max(y, y * _, S, S * _),
								x = T ? 1 : Math.max(A, A * _, w, w * _);
							c = (O - $) / 2, l = (x - k) / 2, f = -(O + $) / 2, d = -(x + k) / 2
						}
						for (r = 0, i = p.length; r < i; ++r) p[r]._options = a._resolveDataElementOptions(p[r], r);
						for (o.borderWidth = a.getMaxBorderWidth(), t = (s.right - s.left - o.borderWidth) / c, n = (s.bottom - s.top - o.borderWidth) / l, o.outerRadius = Math.max(Math.min(t, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * _, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), o.offsetX = f * o.outerRadius, o.offsetY = d * o.outerRadius, h.total = a.calculateTotal(), a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - o.radiusLength * b, 0), r = 0, i = p.length; r < i; ++r) a.updateElement(p[r], r, e)
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = r.chart,
							a = i.chartArea,
							o = i.options,
							s = o.animation,
							u = (a.left + a.right) / 2,
							c = (a.top + a.bottom) / 2,
							l = o.rotation,
							f = o.rotation,
							d = r.getDataset(),
							h = n && s.animateRotate || e.hidden ? 0 : r.calculateCircumference(d.data[t]) * (o.circumference / De),
							p = n && s.animateScale ? 0 : r.innerRadius,
							_ = n && s.animateScale ? 0 : r.outerRadius,
							m = e._options || {};
						j.extend(e, {
							_datasetIndex: r.index,
							_index: t,
							_model: {
								backgroundColor: m.backgroundColor,
								borderColor: m.borderColor,
								borderWidth: m.borderWidth,
								borderAlign: m.borderAlign,
								x: u + i.offsetX,
								y: c + i.offsetY,
								startAngle: l,
								endAngle: f,
								circumference: h,
								outerRadius: _,
								innerRadius: p,
								label: j.valueAtIndexOrDefault(d.label, t, i.data.labels[t])
							}
						});
						var b = e._model;
						n && s.animateRotate || (b.startAngle = 0 === t ? o.rotation : r.getMeta().data[t - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), e.pivot()
					},
					calculateTotal: function() {
						var e, t = this.getDataset(),
							n = this.getMeta(),
							r = 0;
						return j.each(n.data, (function(n, i) {
							e = t.data[i], isNaN(e) || n.hidden || (r += Math.abs(e))
						})), r
					},
					calculateCircumference: function(e) {
						var t = this.getMeta().total;
						return t > 0 && !isNaN(e) ? De * (Math.abs(e) / t) : 0
					},
					getMaxBorderWidth: function(e) {
						var t, n, r, i, a, o, s, u, c = 0,
							l = this.chart;
						if (!e)
							for (t = 0, n = l.data.datasets.length; t < n; ++t)
								if (l.isDatasetVisible(t)) {
									e = (r = l.getDatasetMeta(t)).data, t !== this.index && (a = r.controller);
									break
								} if (!e) return 0;
						for (t = 0, n = e.length; t < n; ++t) i = e[t], a ? (a._configure(), o = a._resolveDataElementOptions(i, t)) : o = i._options, "inner" !== o.borderAlign && (s = o.borderWidth, c = (u = o.hoverBorderWidth) > (c = s > c ? s : c) ? u : c);
						return c
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = Ie(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Ie(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Ie(n.hoverBorderWidth, n.borderWidth)
					},
					_getRingWeightOffset: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
						return t
					},
					_getRingWeight: function(e) {
						return Math.max(Ie(this.chart.data.datasets[e].weight, 1), 0)
					},
					_getVisibleDatasetWeightTotal: function() {
						return this._getRingWeightOffset(this.chart.data.datasets.length)
					}
				});
				B._set("horizontalBar", {
					hover: {
						mode: "index",
						axis: "y"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							type: "category",
							position: "left",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}]
					},
					elements: {
						rectangle: {
							borderSkipped: "left"
						}
					},
					tooltips: {
						mode: "index",
						axis: "y"
					}
				}), B._set("global", {
					datasets: {
						horizontalBar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Re = Oe.extend({
						_getValueScaleId: function() {
							return this.getMeta().xAxisID
						},
						_getIndexScaleId: function() {
							return this.getMeta().yAxisID
						}
					}),
					Fe = j.valueOrDefault,
					Ue = j.options.resolve,
					je = j.canvas._isPointInArea;

				function He(e, t) {
					var n = e && e.options.ticks || {},
						r = n.reverse,
						i = void 0 === n.min ? t : 0,
						a = void 0 === n.max ? t : 0;
					return {
						start: r ? a : i,
						end: r ? i : a
					}
				}

				function Ye(e, t, n) {
					var r = n / 2,
						i = He(e, r),
						a = He(t, r);
					return {
						top: a.end,
						right: i.end,
						bottom: a.start,
						left: i.start
					}
				}

				function Ve(e) {
					var t, n, r, i;
					return j.isObject(e) ? (t = e.top, n = e.right, r = e.bottom, i = e.left) : t = n = r = i = e, {
						top: t,
						right: n,
						bottom: r,
						left: i
					}
				}
				B._set("line", {
					showLines: !0,
					spanGaps: !1,
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							id: "y-axis-0"
						}]
					}
				});
				var ze = ne.extend({
						datasetElementType: Ae.Line,
						dataElementType: Ae.Point,
						_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
						_dataElementOptions: {
							backgroundColor: "pointBackgroundColor",
							borderColor: "pointBorderColor",
							borderWidth: "pointBorderWidth",
							hitRadius: "pointHitRadius",
							hoverBackgroundColor: "pointHoverBackgroundColor",
							hoverBorderColor: "pointHoverBorderColor",
							hoverBorderWidth: "pointHoverBorderWidth",
							hoverRadius: "pointHoverRadius",
							pointStyle: "pointStyle",
							radius: "pointRadius",
							rotation: "pointRotation"
						},
						update: function(e) {
							var t, n, r = this,
								i = r.getMeta(),
								a = i.dataset,
								o = i.data || [],
								s = r.chart.options,
								u = r._config,
								c = r._showLine = Fe(u.showLine, s.showLines);
							for (r._xScale = r.getScaleForId(i.xAxisID), r._yScale = r.getScaleForId(i.yAxisID), c && (void 0 !== u.tension && void 0 === u.lineTension && (u.lineTension = u.tension), a._scale = r._yScale, a._datasetIndex = r.index, a._children = o, a._model = r._resolveDatasetElementOptions(a), a.pivot()), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
							for (c && 0 !== a._model.tension && r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
						},
						updateElement: function(e, t, n) {
							var r, i, a = this,
								o = a.getMeta(),
								s = e.custom || {},
								u = a.getDataset(),
								c = a.index,
								l = u.data[t],
								f = a._xScale,
								d = a._yScale,
								h = o.dataset._model,
								p = a._resolveDataElementOptions(e, t);
							r = f.getPixelForValue("object" == typeof l ? l : NaN, t, c), i = n ? d.getBasePixel() : a.calculatePointY(l, t, c), e._xScale = f, e._yScale = d, e._options = p, e._datasetIndex = c, e._index = t, e._model = {
								x: r,
								y: i,
								skip: s.skip || isNaN(r) || isNaN(i),
								radius: p.radius,
								pointStyle: p.pointStyle,
								rotation: p.rotation,
								backgroundColor: p.backgroundColor,
								borderColor: p.borderColor,
								borderWidth: p.borderWidth,
								tension: Fe(s.tension, h ? h.tension : 0),
								steppedLine: !!h && h.steppedLine,
								hitRadius: p.hitRadius
							}
						},
						_resolveDatasetElementOptions: function(e) {
							var t = this,
								n = t._config,
								r = e.custom || {},
								i = t.chart.options,
								a = i.elements.line,
								o = ne.prototype._resolveDatasetElementOptions.apply(t, arguments);
							return o.spanGaps = Fe(n.spanGaps, i.spanGaps), o.tension = Fe(n.lineTension, a.tension), o.steppedLine = Ue([r.steppedLine, n.steppedLine, a.stepped]), o.clip = Ve(Fe(n.clip, Ye(t._xScale, t._yScale, o.borderWidth))), o
						},
						calculatePointY: function(e, t, n) {
							var r, i, a, o, s, u, c, l = this.chart,
								f = this._yScale,
								d = 0,
								h = 0;
							if (f.options.stacked) {
								for (s = +f.getRightValue(e), c = (u = l._getSortedVisibleDatasetMetas()).length, r = 0; r < c && (a = u[r]).index !== n; ++r) i = l.data.datasets[a.index], "line" === a.type && a.yAxisID === f.id && ((o = +f.getRightValue(i.data[t])) < 0 ? h += o || 0 : d += o || 0);
								return s < 0 ? f.getPixelForValue(h + s) : f.getPixelForValue(d + s)
							}
							return f.getPixelForValue(e)
						},
						updateBezierControlPoints: function() {
							var e, t, n, r, i = this.chart,
								a = this.getMeta(),
								o = a.dataset._model,
								s = i.chartArea,
								u = a.data || [];

							function c(e, t, n) {
								return Math.max(Math.min(e, n), t)
							}
							if (o.spanGaps && (u = u.filter((function(e) {
									return !e._model.skip
								}))), "monotone" === o.cubicInterpolationMode) j.splineCurveMonotone(u);
							else
								for (e = 0, t = u.length; e < t; ++e) n = u[e]._model, r = j.splineCurve(j.previousItem(u, e)._model, n, j.nextItem(u, e)._model, o.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
							if (i.options.elements.line.capBezierPoints)
								for (e = 0, t = u.length; e < t; ++e) n = u[e]._model, je(n, s) && (e > 0 && je(u[e - 1]._model, s) && (n.controlPointPreviousX = c(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = c(n.controlPointPreviousY, s.top, s.bottom)), e < u.length - 1 && je(u[e + 1]._model, s) && (n.controlPointNextX = c(n.controlPointNextX, s.left, s.right), n.controlPointNextY = c(n.controlPointNextY, s.top, s.bottom)))
						},
						draw: function() {
							var e, t = this,
								n = t.chart,
								r = t.getMeta(),
								i = r.data || [],
								a = n.chartArea,
								o = n.canvas,
								s = 0,
								u = i.length;
							for (t._showLine && (e = r.dataset._model.clip, j.canvas.clipArea(n.ctx, {
									left: !1 === e.left ? 0 : a.left - e.left,
									right: !1 === e.right ? o.width : a.right + e.right,
									top: !1 === e.top ? 0 : a.top - e.top,
									bottom: !1 === e.bottom ? o.height : a.bottom + e.bottom
								}), r.dataset.draw(), j.canvas.unclipArea(n.ctx)); s < u; ++s) i[s].draw(a)
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								r = j.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = Fe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Fe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Fe(n.hoverBorderWidth, n.borderWidth), t.radius = Fe(n.hoverRadius, n.radius)
						}
					}),
					Qe = j.options.resolve;
				B._set("polarArea", {
					scale: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						gridLines: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						ticks: {
							beginAtZero: !0
						}
					},
					animation: {
						animateRotate: !0,
						animateScale: !0
					},
					startAngle: -.5 * Math.PI,
					legendCallback: function(e) {
						var t, n, r, i = document.createElement("ul"),
							a = e.data,
							o = a.datasets,
							s = a.labels;
						if (i.setAttribute("class", e.id + "-legend"), o.length)
							for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
						return i.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
									var i = e.getDatasetMeta(0),
										a = i.controller.getStyle(r);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
										index: r
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, r, i, a = t.index,
								o = this.chart;
							for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
							o.update()
						}
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								return t.labels[e.index] + ": " + e.yLabel
							}
						}
					}
				});
				var Ge = ne.extend({
					dataElementType: Ae.Arc,
					linkScales: j.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(e) {
						var t, n, r, i = this,
							a = i.getDataset(),
							o = i.getMeta(),
							s = i.chart.options.startAngle || 0,
							u = i._starts = [],
							c = i._angles = [],
							l = o.data;
						for (i._updateRadius(), o.count = i.countVisibleElements(), t = 0, n = a.data.length; t < n; t++) u[t] = s, r = i._computeAngle(t), c[t] = r, s += r;
						for (t = 0, n = l.length; t < n; ++t) l[t]._options = i._resolveDataElementOptions(l[t], t), i.updateElement(l[t], t, e)
					},
					_updateRadius: function() {
						var e = this,
							t = e.chart,
							n = t.chartArea,
							r = t.options,
							i = Math.min(n.right - n.left, n.bottom - n.top);
						t.outerRadius = Math.max(i / 2, 0), t.innerRadius = Math.max(r.cutoutPercentage ? t.outerRadius / 100 * r.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = r.chart,
							a = r.getDataset(),
							o = i.options,
							s = o.animation,
							u = i.scale,
							c = i.data.labels,
							l = u.xCenter,
							f = u.yCenter,
							d = o.startAngle,
							h = e.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[t]),
							p = r._starts[t],
							_ = p + (e.hidden ? 0 : r._angles[t]),
							m = s.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[t]),
							b = e._options || {};
						j.extend(e, {
							_datasetIndex: r.index,
							_index: t,
							_scale: u,
							_model: {
								backgroundColor: b.backgroundColor,
								borderColor: b.borderColor,
								borderWidth: b.borderWidth,
								borderAlign: b.borderAlign,
								x: l,
								y: f,
								innerRadius: 0,
								outerRadius: n ? m : h,
								startAngle: n && s.animateRotate ? d : p,
								endAngle: n && s.animateRotate ? d : _,
								label: j.valueAtIndexOrDefault(c, t, c[t])
							}
						}), e.pivot()
					},
					countVisibleElements: function() {
						var e = this.getDataset(),
							t = this.getMeta(),
							n = 0;
						return j.each(t.data, (function(t, r) {
							isNaN(e.data[r]) || t.hidden || n++
						})), n
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor,
							i = j.valueOrDefault;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = i(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = i(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = i(n.hoverBorderWidth, n.borderWidth)
					},
					_computeAngle: function(e) {
						var t = this,
							n = this.getMeta().count,
							r = t.getDataset(),
							i = t.getMeta();
						if (isNaN(r.data[e]) || i.data[e].hidden) return 0;
						var a = {
							chart: t.chart,
							dataIndex: e,
							dataset: r,
							datasetIndex: t.index
						};
						return Qe([t.chart.options.elements.arc.angle, 2 * Math.PI / n], a, e)
					}
				});
				B._set("pie", j.clone(B.doughnut)), B._set("pie", {
					cutoutPercentage: 0
				});
				var qe = Ne,
					We = j.valueOrDefault;
				B._set("radar", {
					spanGaps: !1,
					scale: {
						type: "radialLinear"
					},
					elements: {
						line: {
							fill: "start",
							tension: 0
						}
					}
				});
				var Ke = ne.extend({
					datasetElementType: Ae.Line,
					dataElementType: Ae.Point,
					linkScales: j.noop,
					_datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
					_dataElementOptions: {
						backgroundColor: "pointBackgroundColor",
						borderColor: "pointBorderColor",
						borderWidth: "pointBorderWidth",
						hitRadius: "pointHitRadius",
						hoverBackgroundColor: "pointHoverBackgroundColor",
						hoverBorderColor: "pointHoverBorderColor",
						hoverBorderWidth: "pointHoverBorderWidth",
						hoverRadius: "pointHoverRadius",
						pointStyle: "pointStyle",
						radius: "pointRadius",
						rotation: "pointRotation"
					},
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(e) {
						var t, n, r = this,
							i = r.getMeta(),
							a = i.dataset,
							o = i.data || [],
							s = r.chart.scale,
							u = r._config;
						for (void 0 !== u.tension && void 0 === u.lineTension && (u.lineTension = u.tension), a._scale = s, a._datasetIndex = r.index, a._children = o, a._loop = !0, a._model = r._resolveDatasetElementOptions(a), a.pivot(), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
						for (r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
					},
					updateElement: function(e, t, n) {
						var r = this,
							i = e.custom || {},
							a = r.getDataset(),
							o = r.chart.scale,
							s = o.getPointPositionForValue(t, a.data[t]),
							u = r._resolveDataElementOptions(e, t),
							c = r.getMeta().dataset._model,
							l = n ? o.xCenter : s.x,
							f = n ? o.yCenter : s.y;
						e._scale = o, e._options = u, e._datasetIndex = r.index, e._index = t, e._model = {
							x: l,
							y: f,
							skip: i.skip || isNaN(l) || isNaN(f),
							radius: u.radius,
							pointStyle: u.pointStyle,
							rotation: u.rotation,
							backgroundColor: u.backgroundColor,
							borderColor: u.borderColor,
							borderWidth: u.borderWidth,
							tension: We(i.tension, c ? c.tension : 0),
							hitRadius: u.hitRadius
						}
					},
					_resolveDatasetElementOptions: function() {
						var e = this,
							t = e._config,
							n = e.chart.options,
							r = ne.prototype._resolveDatasetElementOptions.apply(e, arguments);
						return r.spanGaps = We(t.spanGaps, n.spanGaps), r.tension = We(t.lineTension, n.elements.line.tension), r
					},
					updateBezierControlPoints: function() {
						var e, t, n, r, i = this.getMeta(),
							a = this.chart.chartArea,
							o = i.data || [];

						function s(e, t, n) {
							return Math.max(Math.min(e, n), t)
						}
						for (i.dataset._model.spanGaps && (o = o.filter((function(e) {
								return !e._model.skip
							}))), e = 0, t = o.length; e < t; ++e) n = o[e]._model, r = j.splineCurve(j.previousItem(o, e, !0)._model, n, j.nextItem(o, e, !0)._model, n.tension), n.controlPointPreviousX = s(r.previous.x, a.left, a.right), n.controlPointPreviousY = s(r.previous.y, a.top, a.bottom), n.controlPointNextX = s(r.next.x, a.left, a.right), n.controlPointNextY = s(r.next.y, a.top, a.bottom)
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							r = j.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth,
							radius: t.radius
						}, t.backgroundColor = We(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = We(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = We(n.hoverBorderWidth, n.borderWidth), t.radius = We(n.hoverRadius, n.radius)
					}
				});
				B._set("scatter", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							id: "x-axis-1",
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							id: "y-axis-1",
							type: "linear",
							position: "left"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e) {
								return "(" + e.xLabel + ", " + e.yLabel + ")"
							}
						}
					}
				}), B._set("global", {
					datasets: {
						scatter: {
							showLine: !1
						}
					}
				});
				var Xe = {
					bar: Oe,
					bubble: Me,
					doughnut: Ne,
					horizontalBar: Re,
					line: ze,
					polarArea: Ge,
					pie: qe,
					radar: Ke,
					scatter: ze
				};

				function Je(e, t) {
					return e.native ? {
						x: e.x,
						y: e.y
					} : j.getRelativePosition(e, t)
				}

				function Ze(e, t) {
					var n, r, i, a, o, s, u = e._getSortedVisibleDatasetMetas();
					for (r = 0, a = u.length; r < a; ++r)
						for (i = 0, o = (n = u[r].data).length; i < o; ++i)(s = n[i])._view.skip || t(s)
				}

				function et(e, t) {
					var n = [];
					return Ze(e, (function(e) {
						e.inRange(t.x, t.y) && n.push(e)
					})), n
				}

				function tt(e, t, n, r) {
					var i = Number.POSITIVE_INFINITY,
						a = [];
					return Ze(e, (function(e) {
						if (!n || e.inRange(t.x, t.y)) {
							var o = e.getCenterPoint(),
								s = r(t, o);
							s < i ? (a = [e], i = s) : s === i && a.push(e)
						}
					})), a
				}

				function nt(e) {
					var t = -1 !== e.indexOf("x"),
						n = -1 !== e.indexOf("y");
					return function(e, r) {
						var i = t ? Math.abs(e.x - r.x) : 0,
							a = n ? Math.abs(e.y - r.y) : 0;
						return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
					}
				}

				function rt(e, t, n) {
					var r = Je(t, e);
					n.axis = n.axis || "x";
					var i = nt(n.axis),
						a = n.intersect ? et(e, r) : tt(e, r, !1, i),
						o = [];
					return a.length ? (e._getSortedVisibleDatasetMetas().forEach((function(e) {
						var t = e.data[a[0]._index];
						t && !t._view.skip && o.push(t)
					})), o) : []
				}
				var it = {
						modes: {
							single: function(e, t) {
								var n = Je(t, e),
									r = [];
								return Ze(e, (function(e) {
									if (e.inRange(n.x, n.y)) return r.push(e), r
								})), r.slice(0, 1)
							},
							label: rt,
							index: rt,
							dataset: function(e, t, n) {
								var r = Je(t, e);
								n.axis = n.axis || "xy";
								var i = nt(n.axis),
									a = n.intersect ? et(e, r) : tt(e, r, !1, i);
								return a.length > 0 && (a = e.getDatasetMeta(a[0]._datasetIndex).data), a
							},
							"x-axis": function(e, t) {
								return rt(e, t, {
									intersect: !1
								})
							},
							point: function(e, t) {
								return et(e, Je(t, e))
							},
							nearest: function(e, t, n) {
								var r = Je(t, e);
								n.axis = n.axis || "xy";
								var i = nt(n.axis);
								return tt(e, r, n.intersect, i)
							},
							x: function(e, t, n) {
								var r = Je(t, e),
									i = [],
									a = !1;
								return Ze(e, (function(e) {
									e.inXRange(r.x) && i.push(e), e.inRange(r.x, r.y) && (a = !0)
								})), n.intersect && !a && (i = []), i
							},

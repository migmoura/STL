import { Dt as e, Et as t, Ot as n, S as r, Tt as i, bt as a, dt as o, gt as s, pt as c, vt as l, wt as u, yt as d } from "./react-DLNUXPF9.js";
//#region ../../node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs
var f = Object.prototype.hasOwnProperty;
function p(e, t) {
	var n, r;
	if (e === t) return !0;
	if (e && t && (n = e.constructor) === t.constructor) {
		if (n === Date) return e.getTime() === t.getTime();
		if (n === RegExp) return e.toString() === t.toString();
		if (n === Array) {
			if ((r = e.length) === t.length) for (; r-- && p(e[r], t[r]););
			return r === -1;
		}
		if (!n || typeof e == "object") {
			for (n in r = 0, e) if (f.call(e, n) && ++r && !f.call(t, n) || !(n in t) || !p(e[n], t[n])) return !1;
			return Object.keys(t).length === r;
		}
	}
	return e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/swr@2.4.1_react@19.2.4/node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs
c();
var m = /* @__PURE__ */ new WeakMap(), h = () => {}, g = void 0, _ = Object, v = (e) => e === g, y = (e) => typeof e == "function", b = (e, t) => ({
	...e,
	...t
}), ee = (e) => y(e.then), x = {}, S = {}, C = "undefined", w = typeof window != C, T = typeof document != C, E = w && "Deno" in window, D = () => w && typeof window.requestAnimationFrame != C, te = (e, t) => {
	let n = m.get(e);
	return [
		() => !v(t) && e.get(t) || x,
		(r) => {
			if (!v(t)) {
				let i = e.get(t);
				t in S || (S[t] = i), n[5](t, b(i, r), i || x);
			}
		},
		n[6],
		() => !v(t) && t in S ? S[t] : !v(t) && e.get(t) || x
	];
}, O = !0, k = () => O, [A, j] = w && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [h, h], M = () => {
	let e = T && document.visibilityState;
	return v(e) || e !== "hidden";
}, N = (e) => (T && document.addEventListener("visibilitychange", e), A("focus", e), () => {
	T && document.removeEventListener("visibilitychange", e), j("focus", e);
}), P = (e) => {
	let t = () => {
		O = !0, e();
	}, n = () => {
		O = !1;
	};
	return A("online", t), A("offline", n), () => {
		j("online", t), j("offline", n);
	};
}, F = {
	isOnline: k,
	isVisible: M
}, I = {
	initFocus: N,
	initReconnect: P
}, ne = !o.useId, L = !w || E, re = (e) => D() ? window.requestAnimationFrame(e) : setTimeout(e, 1), R = L ? t : a, z = typeof navigator < "u" && navigator.connection, ie = !L && z && (["slow-2g", "2g"].includes(z.effectiveType) || z.saveData), B = /* @__PURE__ */ new WeakMap(), V = (e) => _.prototype.toString.call(e), H = (e, t) => e === `[object ${t}]`, ae = 0, U = (e) => {
	let t = typeof e, n = V(e), r = H(n, "Date"), i = H(n, "RegExp"), a = H(n, "Object"), o, s;
	if (_(e) === e && !r && !i) {
		if (o = B.get(e), o) return o;
		if (o = ++ae + "~", B.set(e, o), Array.isArray(e)) {
			for (o = "@", s = 0; s < e.length; s++) o += U(e[s]) + ",";
			B.set(e, o);
		}
		if (a) {
			o = "#";
			let t = _.keys(e).sort();
			for (; !v(s = t.pop());) v(e[s]) || (o += s + ":" + U(e[s]) + ",");
			B.set(e, o);
		}
	} else o = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
	return o;
}, oe = (e) => {
	if (y(e)) try {
		e = e();
	} catch {
		e = "";
	}
	let t = e;
	return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? U(e) : "", [e, t];
}, se = 0, ce = () => ++se;
async function le(...e) {
	let [t, n, r, i] = e, a = b({
		populateCache: !0,
		throwOnError: !0
	}, typeof i == "boolean" ? { revalidate: i } : i || {}), o = a.populateCache, s = a.rollbackOnError, c = a.optimisticData, l = (e) => typeof s == "function" ? s(e) : s !== !1, u = a.throwOnError;
	if (y(n)) {
		let e = n, r = [], i = t.keys();
		for (let n of i) !/^\$(inf|sub)\$/.test(n) && e(t.get(n)._k) && r.push(n);
		return Promise.all(r.map(d));
	}
	return d(n);
	async function d(n) {
		let [i] = oe(n);
		if (!i) return;
		let [s, d] = te(t, i), [f, p, h, _] = m.get(t), b = () => {
			let e = f[i];
			return (y(a.revalidate) ? a.revalidate(s().data, n) : a.revalidate !== !1) && (delete h[i], delete _[i], e && e[0]) ? e[0](2).then(() => s().data) : s().data;
		};
		if (e.length < 3) return b();
		let x = r, S, C = !1, w = ce();
		p[i] = [w, 0];
		let T = !v(c), E = s(), D = E.data, O = E._c, k = v(O) ? D : O;
		if (T && (c = y(c) ? c(k, D) : c, d({
			data: c,
			_c: k
		})), y(x)) try {
			x = x(k);
		} catch (e) {
			S = e, C = !0;
		}
		if (x && ee(x)) if (x = await x.catch((e) => {
			S = e, C = !0;
		}), w !== p[i][0]) {
			if (C) throw S;
			return x;
		} else C && T && l(S) && (o = !0, d({
			data: k,
			_c: g
		}));
		if (o && (C || (y(o) ? d({
			data: o(x, k),
			error: g,
			_c: g
		}) : d({
			data: x,
			error: g,
			_c: g
		}))), p[i][1] = ce(), Promise.resolve(b()).then(() => {
			d({ _c: g });
		}), C) {
			if (u) throw S;
			return;
		}
		return x;
	}
}
var W = (e, t) => {
	for (let n in e) e[n][0] && e[n][0](t);
}, ue = (e, t) => {
	if (!m.has(e)) {
		let n = b(I, t), r = Object.create(null), i = le.bind(g, e), a = h, o = Object.create(null), s = (e, t) => {
			let n = o[e] || [];
			return o[e] = n, n.push(t), () => n.splice(n.indexOf(t), 1);
		}, c = (t, n, r) => {
			e.set(t, n);
			let i = o[t];
			if (i) for (let e of i) e(n, r);
		}, l = () => {
			if (!m.has(e) && (m.set(e, [
				r,
				Object.create(null),
				Object.create(null),
				Object.create(null),
				i,
				c,
				s
			]), !L)) {
				let t = n.initFocus(setTimeout.bind(g, W.bind(g, r, 0))), i = n.initReconnect(setTimeout.bind(g, W.bind(g, r, 1)));
				a = () => {
					t && t(), i && i(), m.delete(e);
				};
			}
		};
		return l(), [
			e,
			i,
			l,
			a
		];
	}
	return [e, m.get(e)[4]];
}, G = (e, t, n, r, i) => {
	let a = n.errorRetryCount, o = i.retryCount, s = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
	!v(a) && o > a || setTimeout(r, s, i);
}, K = p, [q, J] = ue(/* @__PURE__ */ new Map()), Y = b({
	onLoadingSlow: h,
	onSuccess: h,
	onError: h,
	onErrorRetry: G,
	onDiscarded: h,
	revalidateOnFocus: !0,
	revalidateOnReconnect: !0,
	revalidateIfStale: !0,
	shouldRetryOnError: !0,
	errorRetryInterval: ie ? 1e4 : 5e3,
	focusThrottleInterval: 5 * 1e3,
	dedupingInterval: 2 * 1e3,
	loadingTimeout: ie ? 5e3 : 3e3,
	compare: K,
	isPaused: () => !1,
	cache: q,
	mutate: J,
	fallback: {}
}, F), X = (e, t) => {
	let n = b(e, t);
	if (t) {
		let { use: r, fallback: i } = e, { use: a, fallback: o } = t;
		r && a && (n.use = r.concat(a)), i && o && (n.fallback = b(i, o));
	}
	return n;
}, Z = e({}), de = (e) => {
	let { value: t } = e, r = i(Z), a = y(t), o = d(() => a ? t(r) : t, [
		a,
		r,
		t
	]), c = d(() => a ? o : X(r, o), [
		a,
		r,
		o
	]), l = o && o.provider, u = s(g);
	l && !u.current && (u.current = ue(l(c.cache || q), o));
	let f = u.current;
	return f && (c.cache = f[0], c.mutate = f[1]), R(() => {
		if (f) return f[2] && f[2](), f[3];
	}, []), n(Z.Provider, b(e, { value: c }));
};
//#endregion
//#region ../../node_modules/.pnpm/swr@2.4.1_react@19.2.4/node_modules/swr/dist/_internal/index.mjs
c();
var Q = w && window.__SWR_DEVTOOLS_USE__, fe = Q ? window.__SWR_DEVTOOLS_USE__ : [], pe = () => {
	Q && (window.__SWR_DEVTOOLS_REACT__ = o);
}, me = (e) => y(e[1]) ? [
	e[0],
	e[1],
	e[2] || {}
] : [
	e[0],
	null,
	(e[1] === null ? e[2] : e[1]) || {}
], $ = () => {
	let e = i(Z);
	return d(() => b(Y, e), [e]);
}, he = fe.concat((e) => (t, n, r) => e(t, n && ((...e) => {
	let [r] = oe(t), [, , , i] = m.get(q);
	if (r.startsWith("$inf$")) return n(...e);
	let a = i[r];
	return v(a) ? n(...e) : (delete i[r], a);
}), r)), ge = (e) => function(...t) {
	let n = $(), [r, i, a] = me(t), o = X(n, a), s = e, { use: c } = o, l = (c || []).concat(he);
	for (let e = l.length; e--;) s = l[e](s);
	return s(r, i || o.fetcher || null, o);
}, _e = (e, t, n) => {
	let r = t[e] || (t[e] = []);
	return r.push(n), () => {
		let e = r.indexOf(n);
		e >= 0 && (r[e] = r[r.length - 1], r.pop());
	};
};
//#endregion
//#region ../../node_modules/.pnpm/swr@2.4.1_react@19.2.4/node_modules/swr/dist/index/index.mjs
pe(), c();
var ve = r(), ye = o.use || ((e) => {
	switch (e.status) {
		case "pending": throw e;
		case "fulfilled": return e.value;
		case "rejected": throw e.reason;
		default: throw e.status = "pending", e.then((t) => {
			e.status = "fulfilled", e.value = t;
		}, (t) => {
			e.status = "rejected", e.reason = t;
		}), e;
	}
}), be = { dedupe: !0 }, xe = Promise.resolve(g), Se = () => h, Ce = (e, t, n) => {
	let { cache: r, compare: i, suspense: a, fallbackData: o, revalidateOnMount: c, revalidateIfStale: f, refreshInterval: p, refreshWhenHidden: h, refreshWhenOffline: _, keepPreviousData: x, strictServerPrefetchWarning: S } = n, [C, w, T, E] = m.get(r), [D, O] = oe(e), k = s(!1), A = s(!1), j = s(D), M = s(t), N = s(n), P = () => N.current, F = () => P().isVisible() && P().isOnline(), [I, z, ie, B] = te(r, D), V = s({}).current, H = v(o) ? v(n.fallback) ? g : n.fallback[D] : o, ae = (e, t) => {
		for (let n in V) {
			let r = n;
			if (r === "data") {
				if (!i(e[r], t[r]) && (!v(e[r]) || !i(Y, t[r]))) return !1;
			} else if (t[r] !== e[r]) return !1;
		}
		return !0;
	}, U = !k.current, se = d(() => {
		let e = I(), n = B(), r = (e) => {
			let n = b(e);
			return delete n._k, !(!D || !t || P().isPaused()) && (U && !v(c) ? c : v(v(H) ? n.data : H) || f) ? {
				isValidating: !0,
				isLoading: !0,
				...n
			} : n;
		}, i = r(e), a = e === n ? i : r(n), o = i;
		return [() => {
			let e = r(I());
			return ae(e, o) ? (o.data = e.data, o.isLoading = e.isLoading, o.isValidating = e.isValidating, o.error = e.error, o) : (o = e, e);
		}, () => a];
	}, [r, D]), W = (0, ve.useSyncExternalStore)(u((e) => ie(D, (t, n) => {
		ae(n, t) || e();
	}), [r, D]), se[0], se[1]), ue = C[D] && C[D].length > 0, G = W.data, K = v(G) ? H && ee(H) ? ye(H) : H : G, q = W.error, J = s(K), Y = x ? v(G) ? v(J.current) ? K : J.current : G : K, X = D && v(K), Z = s(null);
	!L && (0, ve.useSyncExternalStore)(Se, () => (Z.current = !1, Z), () => (Z.current = !0, Z));
	let de = Z.current;
	S && de && !a && X && console.warn(`Missing pre-initiated data for serialized key "${D}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
	let Q = !D || !t || P().isPaused() || ue && !v(q) ? !1 : U && !v(c) ? c : a ? v(K) ? !1 : f : v(K) || f, fe = U && Q, pe = v(W.isValidating) ? fe : W.isValidating, me = v(W.isLoading) ? fe : W.isLoading, $ = u(async (e) => {
		let t = M.current;
		if (!D || !t || A.current || P().isPaused()) return !1;
		let r, a, o = !0, s = e || {}, c = !T[D] || !s.dedupe, l = () => ne ? !A.current && D === j.current && k.current : D === j.current, u = {
			isValidating: !1,
			isLoading: !1
		}, d = () => {
			z(u);
		}, f = () => {
			let e = T[D];
			e && e[1] === a && delete T[D];
		}, p = { isValidating: !0 };
		v(I().data) && (p.isLoading = !0);
		try {
			if (c && (z(p), n.loadingTimeout && v(I().data) && setTimeout(() => {
				o && l() && P().onLoadingSlow(D, n);
			}, n.loadingTimeout), T[D] = [t(O), ce()]), [r, a] = T[D], r = await r, c && setTimeout(f, n.dedupingInterval), !T[D] || T[D][1] !== a) return c && l() && P().onDiscarded(D), !1;
			u.error = g;
			let e = w[D];
			if (!v(e) && (a <= e[0] || a <= e[1] || e[1] === 0)) return d(), c && l() && P().onDiscarded(D), !1;
			let s = I().data;
			u.data = i(s, r) ? s : r, c && l() && P().onSuccess(r, D, n);
		} catch (e) {
			f();
			let t = P(), { shouldRetryOnError: n } = t;
			t.isPaused() || (u.error = e, c && l() && (t.onError(e, D, t), (n === !0 || y(n) && n(e)) && (!P().revalidateOnFocus || !P().revalidateOnReconnect || F()) && t.onErrorRetry(e, D, t, (e) => {
				let t = C[D];
				t && t[0] && t[0](3, e);
			}, {
				retryCount: (s.retryCount || 0) + 1,
				dedupe: !0
			})));
		}
		return o = !1, d(), !0;
	}, [D, r]), he = u((...e) => le(r, j.current, ...e), []);
	if (R(() => {
		M.current = t, N.current = n, v(G) || (J.current = G);
	}), R(() => {
		if (!D) return;
		let e = $.bind(g, be), t = 0;
		P().revalidateOnFocus && (t = Date.now() + P().focusThrottleInterval);
		let n = _e(D, C, (n, r = {}) => {
			if (n == 0) {
				let n = Date.now();
				P().revalidateOnFocus && n > t && F() && (t = n + P().focusThrottleInterval, e());
			} else if (n == 1) P().revalidateOnReconnect && F() && e();
			else if (n == 2) return $();
			else if (n == 3) return $(r);
		});
		return A.current = !1, j.current = D, k.current = !0, z({ _k: O }), Q && (T[D] || (v(K) || L ? e() : re(e))), () => {
			A.current = !0, n();
		};
	}, [D]), R(() => {
		let e;
		function t() {
			let t = y(p) ? p(I().data) : p;
			t && e !== -1 && (e = setTimeout(n, t));
		}
		function n() {
			!I().error && (h || P().isVisible()) && (_ || P().isOnline()) ? $(be).then(t) : t();
		}
		return t(), () => {
			e &&= (clearTimeout(e), -1);
		};
	}, [
		p,
		h,
		_,
		D
	]), l(Y), a) {
		if (!ne && L && X) throw Error("Fallback data is required when using Suspense in SSR.");
		X && (M.current = t, N.current = n, A.current = !1);
		let e = E[D];
		if (ye(!v(e) && X ? he(e) : xe), !v(q) && X) throw q;
		let r = X ? $(be) : xe;
		!v(Y) && X && (r.status = "fulfilled", r.value = !0), ye(r);
	}
	return {
		mutate: he,
		get data() {
			return V.data = !0, Y;
		},
		get error() {
			return V.error = !0, q;
		},
		get isValidating() {
			return V.isValidating = !0, pe;
		},
		get isLoading() {
			return V.isLoading = !0, me;
		}
	};
};
_.defineProperty(de, "defaultValue", { value: Y });
var we = ge(Ce);
//#endregion
export { we as t };

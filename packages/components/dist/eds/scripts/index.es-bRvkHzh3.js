import { C as e, Ct as t, Dt as n, Et as r, Ot as i, T as a, Tt as o, at as s, bt as c, ct as l, dt as u, ft as d, gt as f, ht as p, kt as m, lt as h, nt as g, pt as _, rt as v, ut as y, vt as b, w as x, wt as S, yt as C } from "./react-w7ldCLEn.js";
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/index.cKLI89Eg.js
d();
var w, T;
function E() {
	if (T) return w;
	T = 1;
	var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, n) => {
		for (var r in n) t(e, r, {
			get: n[r],
			enumerable: !0
		});
	}, s = (e, i, o, s) => {
		if (i && typeof i == "object" || typeof i == "function") for (let c of r(i)) !a.call(e, c) && c !== o && t(e, c, {
			get: () => i[c],
			enumerable: !(s = n(i, c)) || s.enumerable
		});
		return e;
	}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(!n || !n.__esModule ? t(a, "default", {
		value: n,
		enumerable: !0
	}) : a, n)), l = (e) => s(t({}, "__esModule", { value: !0 }), e), u = {};
	o(u, {
		$dispatcherGuard: () => C,
		$makeReadOnly: () => D,
		$reset: () => E,
		$structuralCheck: () => P,
		c: () => _,
		clearRenderCounterRegistry: () => k,
		renderCounterRegistry: () => O,
		useRenderCounter: () => M
	}), w = l(u);
	var d = c(y), { useRef: f, useEffect: p, isValidElement: m } = d, h = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ?? d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _ = typeof d.__COMPILER_RUNTIME?.c == "function" ? d.__COMPILER_RUNTIME.c : function(e) {
		return d.useMemo(() => {
			let t = Array(e);
			for (let n = 0; n < e; n++) t[n] = g;
			return t[g] = !0, t;
		}, []);
	}, v = {};
	[
		"readContext",
		"useCallback",
		"useContext",
		"useEffect",
		"useImperativeHandle",
		"useInsertionEffect",
		"useLayoutEffect",
		"useMemo",
		"useReducer",
		"useRef",
		"useState",
		"useDebugValue",
		"useDeferredValue",
		"useTransition",
		"useMutableSource",
		"useSyncExternalStore",
		"useId",
		"unstable_isNewReconciler",
		"getCacheSignal",
		"getCacheForType",
		"useCacheRefresh"
	].forEach((e) => {
		v[e] = () => {
			throw Error(`[React] Unexpected React hook call (${e}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `);
		};
	});
	var b = null;
	v.useMemoCache = (e) => {
		if (b == null) throw Error("React Compiler internal invariant violation: unexpected null dispatcher");
		return b.useMemoCache(e);
	};
	function x(e) {
		return h.ReactCurrentDispatcher.current = e, h.ReactCurrentDispatcher.current;
	}
	var S = [];
	function C(e) {
		let t = h.ReactCurrentDispatcher.current;
		if (e === 0) {
			if (S.push(t), S.length === 1 && (b = t), t === v) throw Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");
			x(v);
		} else if (e === 1) {
			let e = S.pop();
			if (e == null) throw Error("React Compiler internal error: unexpected null in guard stack");
			S.length === 0 && (b = null), x(e);
		} else if (e === 2) S.push(t), x(b);
		else if (e === 3) {
			let e = S.pop();
			if (e == null) throw Error("React Compiler internal error: unexpected null in guard stack");
			x(e);
		} else throw Error("React Compiler internal error: unreachable block" + e);
	}
	function E(e) {
		for (let t = 0; t < e.length; t++) e[t] = g;
	}
	function D() {
		throw Error("TODO: implement $makeReadOnly in react-compiler-runtime");
	}
	var O = /* @__PURE__ */ new Map();
	function k() {
		for (let e of O.values()) e.forEach((e) => {
			e.count = 0;
		});
	}
	function A(e, t) {
		let n = O.get(e);
		n ?? (n = /* @__PURE__ */ new Set(), O.set(e, n)), n.add(t);
	}
	function j(e, t) {
		O.get(e)?.delete(t);
	}
	function M(e) {
		let t = f(null);
		t.current != null && (t.current.count += 1), p(() => {
			if (t.current == null) {
				let n = { count: 0 };
				A(e, n), t.current = n;
			}
			return () => {
				t.current !== null && j(e, t.current);
			};
		});
	}
	var N = /* @__PURE__ */ new Set();
	function P(e, t, n, r, i, a) {
		function o(e, t, o, s) {
			let c = `${r}:${a} [${i}] ${n}${o} changed from ${e} to ${t} at depth ${s}`;
			N.has(c) || (N.add(c), console.error(c));
		}
		function s(e, t, n, r) {
			if (!(r > 2)) {
				if (e === t) return;
				if (typeof e != typeof t) o(`type ${typeof e}`, `type ${typeof t}`, n, r);
				else if (typeof e == "object") {
					let i = Array.isArray(e), a = Array.isArray(t);
					if (e === null && t !== null) o("null", `type ${typeof t}`, n, r);
					else if (t === null) o(`type ${typeof e}`, "null", n, r);
					else if (e instanceof Map) if (!(t instanceof Map)) o("Map instance", "other value", n, r);
					else if (e.size !== t.size) o(`Map instance with size ${e.size}`, `Map instance with size ${t.size}`, n, r);
					else for (let [i, a] of e) t.has(i) ? s(a, t.get(i), `${n}.get(${i})`, r + 1) : o(`Map instance with key ${i}`, `Map instance without key ${i}`, n, r);
					else if (t instanceof Map) o("other value", "Map instance", n, r);
					else if (e instanceof Set) if (!(t instanceof Set)) o("Set instance", "other value", n, r);
					else if (e.size !== t.size) o(`Set instance with size ${e.size}`, `Set instance with size ${t.size}`, n, r);
					else for (let i of t) e.has(i) || o(`Set instance without element ${i}`, `Set instance with element ${i}`, n, r);
					else if (t instanceof Set) o("other value", "Set instance", n, r);
					else if (i || a) if (i !== a) o(`type ${i ? "array" : "object"}`, `type ${a ? "array" : "object"}`, n, r);
					else if (e.length !== t.length) o(`array with length ${e.length}`, `array with length ${t.length}`, n, r);
					else for (let i = 0; i < e.length; i++) s(e[i], t[i], `${n}[${i}]`, r + 1);
					else if (m(e) || m(t)) m(e) === m(t) ? e.type === t.type ? s(e.props, t.props, `[props of ${n}]`, r + 1) : o(`React element of type ${e.type}`, `React element of type ${t.type}`, n, r) : o(`type ${m(e) ? "React element" : "object"}`, `type ${m(t) ? "React element" : "object"}`, n, r);
					else {
						for (let i in t) i in e || o(`object without key ${i}`, `object with key ${i}`, n, r);
						for (let i in e) i in t ? s(e[i], t[i], `${n}.${i}`, r + 1) : o(`object with key ${i}`, `object without key ${i}`, n, r);
					}
				} else {
					if (typeof e == "function") return;
					isNaN(e) || isNaN(t) ? isNaN(e) !== isNaN(t) && o(`${isNaN(e) ? "NaN" : "non-NaN value"}`, `${isNaN(t) ? "NaN" : "non-NaN value"}`, n, r) : e !== t && o(e, t, n, r);
				}
			}
		}
		s(e, t, "", 0);
	}
	return w;
}
var D = E();
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/index.DQOqod3i.js
function O(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var k = { exports: {} }, A;
function j() {
	return A || (A = 1, (function(e) {
		(function() {
			var t = {}.hasOwnProperty;
			function n() {
				for (var e = "", t = 0; t < arguments.length; t++) {
					var n = arguments[t];
					n && (e = i(e, r(n)));
				}
				return e;
			}
			function r(e) {
				if (typeof e == "string" || typeof e == "number") return e;
				if (typeof e != "object") return "";
				if (Array.isArray(e)) return n.apply(null, e);
				if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
				var r = "";
				for (var a in e) t.call(e, a) && e[a] && (r = i(r, a));
				return r;
			}
			function i(e, t) {
				return t ? e ? e + " " + t : e + t : e;
			}
			e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
		})();
	})(k)), k.exports;
}
var M = /* @__PURE__ */ O(j()), N = {
	root: "ds-heading_root_6kuzl_1",
	rootXLarge: "ds-heading_root--x-large_6kuzl_4",
	rootXLargeUppercase: "ds-heading_root--x-large-uppercase_6kuzl_19",
	rootLarge: "ds-heading_root--large_6kuzl_35",
	rootLargeUppercase: "ds-heading_root--large-uppercase_6kuzl_50",
	rootMedium: "ds-heading_root--medium_6kuzl_66",
	rootMediumUppercase: "ds-heading_root--medium-uppercase_6kuzl_75",
	rootSmall: "ds-heading_root--small_6kuzl_85",
	rootSmallUppercase: "ds-heading_root--small-uppercase_6kuzl_94",
	rootThemeDark: "ds-heading_root--theme-dark_6kuzl_104"
}, P = (e) => {
	let t = D.c(23), n, r, i, a, o, s;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6]) : ({children: n, className: r, size: a, tag: o, theme: s, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s);
	let c = a === void 0 ? "medium" : a, l = o === void 0 ? "h2" : o, u = s === void 0 ? "light" : s, d = l, f = c === "x-large", p = c === "x-large-uppercase", m = c === "large", h = c === "large-uppercase", _ = c == "medium", v = c == "medium-uppercase", y = c == "small", b = c == "small-uppercase", x = u === "dark", S;
	t[7] !== r || t[8] !== y || t[9] !== b || t[10] !== x || t[11] !== f || t[12] !== p || t[13] !== m || t[14] !== h || t[15] !== _ || t[16] !== v ? (S = M(N.root, r, {
		[N.rootXLarge]: f,
		[N.rootXLargeUppercase]: p,
		[N.rootLarge]: m,
		[N.rootLargeUppercase]: h,
		[N.rootMedium]: _,
		[N.rootMediumUppercase]: v,
		[N.rootSmall]: y,
		[N.rootSmallUppercase]: b,
		[N.rootThemeDark]: x
	}), t[7] = r, t[8] = y, t[9] = b, t[10] = x, t[11] = f, t[12] = p, t[13] = m, t[14] = h, t[15] = _, t[16] = v, t[17] = S) : S = t[17];
	let C = S, w;
	return t[18] !== d || t[19] !== n || t[20] !== i || t[21] !== C ? (w = /* @__PURE__ */ g(d, {
		className: C,
		...i,
		children: n
	}), t[18] = d, t[19] = n, t[20] = i, t[21] = C, t[22] = w) : w = t[22], w;
}, F = typeof window < "u" && typeof window.document < "u";
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/helpers.CexwVao7.js
d();
var I = (e) => typeof e != "number" || isNaN(e) ? 0 : e / 16, L = (e, t) => `[STIHL Design System] - [${e}]: ${t}`, R = (e, t) => `The "${e}" prop is required. Please add the "${e}" prop to the ${t} component.`, z = (e, t) => e?.closest(t), B = (e, t, n) => {
	let r = !1, i = {
		fn: t,
		displayName: t.displayName || t.name
	};
	return y.Children.forEach(e, (e) => {
		if (r || !y.isValidElement(e)) return;
		if (e.type === i.fn) {
			r = !0;
			return;
		}
		let t = e.type, a = t.displayName || t.name;
		if (typeof a == "string" && a === i.displayName) {
			r = !0;
			return;
		}
		let o = e.props;
		if (n && o.children && B(o.children, i.fn, n)) {
			r = !0;
			return;
		}
	}), r;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Icon.DCdL1Vnp.js
d();
var V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new WeakMap(), U = 0, W;
function G(e) {
	return e ? (H.has(e) || (U += 1, H.set(e, U.toString())), H.get(e)) : "0";
}
function ee(e) {
	return Object.keys(e).sort().filter((t) => e[t] !== void 0).map((t) => `${t}_${t === "root" ? G(e.root) : e[t]}`).toString();
}
function K(e) {
	let t = ee(e), n = V.get(t);
	if (!n) {
		let r = /* @__PURE__ */ new Map(), i, a = new IntersectionObserver((t) => {
			t.forEach((t) => {
				var n;
				let a = t.isIntersecting && i.some((e) => t.intersectionRatio >= e);
				e.trackVisibility && typeof t.isVisible > "u" && (t.isVisible = a), (n = r.get(t.target)) == null || n.forEach((e) => {
					e(a, t);
				});
			});
		}, e);
		i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
			id: t,
			observer: a,
			elements: r
		}, V.set(t, n);
	}
	return n;
}
function te(e, t, n = {}, r = W) {
	if (typeof window.IntersectionObserver > "u" && r !== void 0) {
		let i = e.getBoundingClientRect();
		return t(r, {
			isIntersecting: r,
			target: e,
			intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
			time: 0,
			boundingClientRect: i,
			intersectionRect: i,
			rootBounds: i
		}), () => {};
	}
	let { id: i, observer: a, elements: o } = K(n), s = o.get(e) || [];
	return o.has(e) || o.set(e, s), s.push(t), a.observe(e), function() {
		s.splice(s.indexOf(t), 1), s.length === 0 && (o.delete(e), a.unobserve(e)), o.size === 0 && (a.disconnect(), V.delete(i));
	};
}
function ne({ threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: i, triggerOnce: a, skip: s, initialInView: l, fallbackInView: u, onChange: d } = {}) {
	let [f, m] = c(null), h = p(d), g = p(l), [_, v] = c({
		inView: !!l,
		entry: void 0
	});
	h.current = d, o(() => {
		if (g.current === void 0 && (g.current = l), s || !f) return;
		let o;
		return o = te(f, (e, t) => {
			let n = g.current;
			g.current = e, !(n === void 0 && !e) && (v({
				inView: e,
				entry: t
			}), h.current && h.current(e, t), t.isIntersecting && a && o && (o(), o = void 0));
		}, {
			root: i,
			rootMargin: r,
			threshold: e,
			trackVisibility: n,
			delay: t
		}, u), () => {
			o && o();
		};
	}, [
		Array.isArray(e) ? e.toString() : e,
		f,
		i,
		r,
		a,
		s,
		n,
		u,
		t
	]);
	let y = _.entry?.target, b = p(void 0);
	!f && y && !a && !s && b.current !== y && (b.current = y, v({
		inView: !!l,
		entry: void 0
	}), g.current = l);
	let x = [
		m,
		_.inView,
		_.entry
	];
	return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
var re = {
	image: "ds-icon_image_clh5i_1",
	imageThemeDark: "ds-icon_image--theme-dark_clh5i_10",
	imageSizeXLarge: "ds-icon_image--size-x-large_clh5i_13",
	imageSizeMedium: "ds-icon_image--size-medium_clh5i_19",
	imageSizeSmall: "ds-icon_image--size-small_clh5i_25",
	imageSizeXSmall: "ds-icon_image--size-x-small_clh5i_31"
}, ie = (e, t, n) => {
	let r = e[t];
	return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, ae = (e) => {
	let t = p(void 0), [n, r] = c(!1), [i, a] = c(!0);
	return o(() => {
		if (!F) return;
		let r = !0;
		return n && (a(!0), (async () => {
			try {
				t.current = await ie(/* @__PURE__ */ Object.assign({
					"../../../../icons/dist/assets/360.svg": () => import("./360.CfjUtgxq-B6rcG7cn.js"),
					"../../../../icons/dist/assets/academic-cap.svg": () => import("./academic-cap.OBigTQQS-BFw6bphE.js"),
					"../../../../icons/dist/assets/accessibility.svg": () => import("./accessibility.B57oX4yV-DDfADC46.js"),
					"../../../../icons/dist/assets/alarm-clock.svg": () => import("./alarm-clock.CpK-AEZG-Dbz7vE3D.js"),
					"../../../../icons/dist/assets/arrow-clockwise.svg": () => import("./arrow-clockwise.C4iOgjOc-V4C2za5G.js"),
					"../../../../icons/dist/assets/arrow-counterclockwise.svg": () => import("./arrow-counterclockwise.CgQAuBUe-D8-1D_Yy.js"),
					"../../../../icons/dist/assets/arrow-down-line.svg": () => import("./arrow-down-line.RDD2pRZY-ets3gq9T.js"),
					"../../../../icons/dist/assets/arrow-down.svg": () => import("./arrow-down.XpokLh98-DQ1ewBDp.js"),
					"../../../../icons/dist/assets/arrow-edge.svg": () => import("./arrow-edge.CPA93M81-C3-9aj6q.js"),
					"../../../../icons/dist/assets/arrow-left.svg": () => import("./arrow-left.C8NG5I2X-YJi1wdVl.js"),
					"../../../../icons/dist/assets/arrow-out.svg": () => import("./arrow-out.CsHHHYN9-DL0obVQ6.js"),
					"../../../../icons/dist/assets/arrow-outline-left.svg": () => import("./arrow-outline-left.Bhw_LzfV-2XtGTzyD.js"),
					"../../../../icons/dist/assets/arrow-right.svg": () => import("./arrow-right.HNwAz18h-Cxuz_dZ6.js"),
					"../../../../icons/dist/assets/arrow-up-arrow-down.svg": () => import("./arrow-up-arrow-down.BVyuVJP5-C6ZOFald.js"),
					"../../../../icons/dist/assets/arrow-up.svg": () => import("./arrow-up.Ca1GnLaY-LRelBF39.js"),
					"../../../../icons/dist/assets/at.svg": () => import("./at.BNfdp4M0-CgoD5pgi.js"),
					"../../../../icons/dist/assets/barcode-scanner.svg": () => import("./barcode-scanner.D0olxB_m-Ba95OVRS.js"),
					"../../../../icons/dist/assets/battery-charge-0.svg": () => import("./battery-charge-0.DxlgEAto-DsiFYUo6.js"),
					"../../../../icons/dist/assets/battery-charge-100.svg": () => import("./battery-charge-100.D0Cax7dU-DJyfGHVB.js"),
					"../../../../icons/dist/assets/battery-return.svg": () => import("./battery-return.tBu7C6Q7-Cfj7sjk0.js"),
					"../../../../icons/dist/assets/battery.svg": () => import("./battery.6Idoickg-B7MahzSF.js"),
					"../../../../icons/dist/assets/bell.svg": () => import("./bell.DbPxCAUM-BXpx2zj5.js"),
					"../../../../icons/dist/assets/bills.svg": () => import("./bills.qn1VUEaT-BieEqYZT.js"),
					"../../../../icons/dist/assets/bin-open.svg": () => import("./bin-open.DsjIBW00-ChsaGjCZ.js"),
					"../../../../icons/dist/assets/bin.svg": () => import("./bin.ktpYUJmK-CDHkUPdZ.js"),
					"../../../../icons/dist/assets/bluetooth-off.svg": () => import("./bluetooth-off.BzZCh4Q8-Bx76cXns.js"),
					"../../../../icons/dist/assets/bluetooth.svg": () => import("./bluetooth.dW5tTwby-gZ4gkpPP.js"),
					"../../../../icons/dist/assets/bookmark.svg": () => import("./bookmark.B7Mbr-d6-DsTcI1mo.js"),
					"../../../../icons/dist/assets/burger.svg": () => import("./burger.DLP81BXa-WVNDVY46.js"),
					"../../../../icons/dist/assets/calendar.svg": () => import("./calendar.Cig7yG7m-daUHpo7K.js"),
					"../../../../icons/dist/assets/camera.svg": () => import("./camera.BoCB0Emp-TcspGd0k.js"),
					"../../../../icons/dist/assets/caret-down.svg": () => import("./caret-down.CupuwAF6-Cc5YONj-.js"),
					"../../../../icons/dist/assets/caret-right.svg": () => import("./caret-right.DKtu4PQe-BmEpHsER.js"),
					"../../../../icons/dist/assets/cart-check.svg": () => import("./cart-check.CYH0vTB8-D0rjZ-Pu.js"),
					"../../../../icons/dist/assets/cart-plus.svg": () => import("./cart-plus.DzXXFMZj-BMfUtx77.js"),
					"../../../../icons/dist/assets/cart.svg": () => import("./cart.CoEwMABr-CWAflIGC.js"),
					"../../../../icons/dist/assets/catalog.svg": () => import("./catalog.CwV-J6Kb-CN8GJHg8.js"),
					"../../../../icons/dist/assets/certificate.svg": () => import("./certificate.Crs4RohK-DA1RkNRT.js"),
					"../../../../icons/dist/assets/chain-link.svg": () => import("./chain-link.BMV2WV6k-CJ7DTrBU.js"),
					"../../../../icons/dist/assets/chainsaw.svg": () => import("./chainsaw.CI1EYF7a-CyePasMT.js"),
					"../../../../icons/dist/assets/check.svg": () => import("./check.CuZKWgYj-BuSCwfAK.js"),
					"../../../../icons/dist/assets/chevron-down.svg": () => import("./chevron-down.5UkGOwK_-BIZucNhs.js"),
					"../../../../icons/dist/assets/chevron-left.svg": () => import("./chevron-left.DRFQ-efY-CXMQLbrA.js"),
					"../../../../icons/dist/assets/chevron-line-left.svg": () => import("./chevron-line-left.SQvDJQ1t-DAwN30cm.js"),
					"../../../../icons/dist/assets/chevron-line-right.svg": () => import("./chevron-line-right.CYQ3b2cQ-DQdidRpT.js"),
					"../../../../icons/dist/assets/chevron-right.svg": () => import("./chevron-right.B_Ew9QUt-C8W15tKU.js"),
					"../../../../icons/dist/assets/chevron-up.svg": () => import("./chevron-up.DqETUWqG-BsQssfVw.js"),
					"../../../../icons/dist/assets/circle-check-colored.svg": () => import("./circle-check-colored.qP2s3vjI-BIYCBQ_y.js"),
					"../../../../icons/dist/assets/circle-check-inverted.svg": () => import("./circle-check-inverted.Cc2cUmWT-DTsvNFoL.js"),
					"../../../../icons/dist/assets/circle-info-colored.svg": () => import("./circle-info-colored.D2pp54gf-BmwskipD.js"),
					"../../../../icons/dist/assets/circle-info-inverted.svg": () => import("./circle-info-inverted.D8Z0vTmu-DbjXsq-L.js"),
					"../../../../icons/dist/assets/circle-pause.svg": () => import("./circle-pause.DaRfXOff-BnSK8BoS.js"),
					"../../../../icons/dist/assets/circle-stroke.svg": () => import("./circle-stroke.CWu_o3Gx-BHKc3ni0.js"),
					"../../../../icons/dist/assets/circle.svg": () => import("./circle.471EUzv6-C7wdyLYa.js"),
					"../../../../icons/dist/assets/click-collect.svg": () => import("./click-collect.B77dWI72-BGfG5fKq.js"),
					"../../../../icons/dist/assets/clock.svg": () => import("./clock.Bw5ICIVH-D9jfC3Q5.js"),
					"../../../../icons/dist/assets/coffee-cup.svg": () => import("./coffee-cup.DIijzKx_-DEmshYY2.js"),
					"../../../../icons/dist/assets/collapse.svg": () => import("./collapse.Dvv3mgkv-C9D53mAC.js"),
					"../../../../icons/dist/assets/compare.svg": () => import("./compare.Dmb4yOj7-sOVC-PMC.js"),
					"../../../../icons/dist/assets/connected-box-mobile.svg": () => import("./connected-box-mobile.DboMCVxp-DOFFvCK1.js"),
					"../../../../icons/dist/assets/connected-box-stationary.svg": () => import("./connected-box-stationary.CAPCPQ1d-CSzxQ_m6.js"),
					"../../../../icons/dist/assets/connected-box.svg": () => import("./connected-box.DVqJw-ws-C2GxMCEJ.js"),
					"../../../../icons/dist/assets/cookie.svg": () => import("./cookie.U09gK6it-DSXy46m6.js"),
					"../../../../icons/dist/assets/credit-card.svg": () => import("./credit-card.BmIN7RQ3-CbNN4uA-.js"),
					"../../../../icons/dist/assets/cross.svg": () => import("./cross.rEw3TuHs-DY0PEl9h.js"),
					"../../../../icons/dist/assets/currency-dollar.svg": () => import("./currency-dollar.DgDMDMzW-BLjIhZvV.js"),
					"../../../../icons/dist/assets/currency-euro.svg": () => import("./currency-euro.B7cX0UJ0-BOIN5fQ5.js"),
					"../../../../icons/dist/assets/currency-pound.svg": () => import("./currency-pound.DLXGbEzS-CJYPzaaJ.js"),
					"../../../../icons/dist/assets/currency-yen.svg": () => import("./currency-yen.nzl1eMGq-p4ONrNCQ.js"),
					"../../../../icons/dist/assets/delivery.svg": () => import("./delivery.Cy1VuLLq-C64A0f1t.js"),
					"../../../../icons/dist/assets/diamond-exclamationmark-colored.svg": () => import("./diamond-exclamationmark-colored.CzYiaTZ0-CpUSfygB.js"),
					"../../../../icons/dist/assets/diamond-exclamationmark-inverted.svg": () => import("./diamond-exclamationmark-inverted.DzAIb8Nt-D08mxxRr.js"),
					"../../../../icons/dist/assets/diamond.svg": () => import("./diamond.CXZHFpPC-CTgoU8kX.js"),
					"../../../../icons/dist/assets/discount.svg": () => import("./discount.Cu30XoAp-DsBMJs16.js"),
					"../../../../icons/dist/assets/diskette.svg": () => import("./diskette._0C2VZ9v-DCDECM_X.js"),
					"../../../../icons/dist/assets/distance.svg": () => import("./distance.FA6pTjcW-C08Xme_T.js"),
					"../../../../icons/dist/assets/document-magnifying-glass.svg": () => import("./document-magnifying-glass.DkvpNz-D-aV_1kef-.js"),
					"../../../../icons/dist/assets/document-s.svg": () => import("./document-s.CoOp0kBK-Dxz-Npuh.js"),
					"../../../../icons/dist/assets/dots-connected.svg": () => import("./dots-connected.ZMYjHeNS-DQGgI984.js"),
					"../../../../icons/dist/assets/download-complete.svg": () => import("./download-complete.CZVpzrvY-Cpwjuwhj.js"),
					"../../../../icons/dist/assets/envelope-open.svg": () => import("./envelope-open.CA4cE5lk-bBZiwzxz.js"),
					"../../../../icons/dist/assets/envelope.svg": () => import("./envelope.re-RxZVw-DLerV99c.js"),
					"../../../../icons/dist/assets/exclamationmark.svg": () => import("./exclamationmark.DEbIGqGC-B0BTeHAg.js"),
					"../../../../icons/dist/assets/exit.svg": () => import("./exit.Cgb8AB-k-CjUOWQeH.js"),
					"../../../../icons/dist/assets/eye-closed.svg": () => import("./eye-closed.CvqozUwK-BVlpkxtO.js"),
					"../../../../icons/dist/assets/eye.svg": () => import("./eye.CRQMKZs4-BpcIDF39.js"),
					"../../../../icons/dist/assets/facebook.svg": () => import("./facebook.CVcxa0rV-D0Q4SBEL.js"),
					"../../../../icons/dist/assets/feather.svg": () => import("./feather.l1E4nFBx-DwuObFPT.js"),
					"../../../../icons/dist/assets/file-type-doc.svg": () => import("./file-type-doc.B_RSSYbu-DC2L1FoR.js"),
					"../../../../icons/dist/assets/file-type-image.svg": () => import("./file-type-image.Cg2NRd7y-CmqSN7ID.js"),
					"../../../../icons/dist/assets/file-type-pdf.svg": () => import("./file-type-pdf.Dm94xL2i-BRu2XKX3.js"),
					"../../../../icons/dist/assets/file-type-video.svg": () => import("./file-type-video.CFwfiP-D-CNWQMRsM.js"),
					"../../../../icons/dist/assets/file-type-zip.svg": () => import("./file-type-zip.SNixmKhQ-B8O3X55z.js"),
					"../../../../icons/dist/assets/file.svg": () => import("./file.DLgRXiem-COUJU_YJ.js"),
					"../../../../icons/dist/assets/filter.svg": () => import("./filter.DrPSKpaG-FfbHWQPm.js"),
					"../../../../icons/dist/assets/finger-double-arrow.svg": () => import("./finger-double-arrow.DDUZoPh8-BgYgXcZR.js"),
					"../../../../icons/dist/assets/flash.svg": () => import("./flash.CgJJ1bUx-7dvdM79T.js"),
					"../../../../icons/dist/assets/fullscreen.svg": () => import("./fullscreen.Be2rBj1i-DycS1cyQ.js"),
					"../../../../icons/dist/assets/gear.svg": () => import("./gear.DEltGVSA-65ffPQ4p.js"),
					"../../../../icons/dist/assets/globe.svg": () => import("./globe.DG6uw6fi-CaW3qQnH.js"),
					"../../../../icons/dist/assets/grid.svg": () => import("./grid.DH1impeF-COcFFVR0.js"),
					"../../../../icons/dist/assets/guidance.svg": () => import("./guidance.BBYB3JpW-DoU45mS8.js"),
					"../../../../icons/dist/assets/haircross.svg": () => import("./haircross.D-whkit9-CMXqWZBo.js"),
					"../../../../icons/dist/assets/hanger.svg": () => import("./hanger.Bo8qtNo5-Ci0bFvbr.js"),
					"../../../../icons/dist/assets/headphones.svg": () => import("./headphones.DjWXOuJJ-C_Az0IvE.js"),
					"../../../../icons/dist/assets/heart-filled.svg": () => import("./heart-filled.CmO7eae5-ChQnQ_AY.js"),
					"../../../../icons/dist/assets/heart.svg": () => import("./heart.D-BnHMb--BiCv8ddD.js"),
					"../../../../icons/dist/assets/hexagon-arrow-clockwise.svg": () => import("./hexagon-arrow-clockwise.D0eeDQQx-DR6gacbg.js"),
					"../../../../icons/dist/assets/horizontal-ellipsis.svg": () => import("./horizontal-ellipsis.ChdN6RnG-C2isWq7c.js"),
					"../../../../icons/dist/assets/house.svg": () => import("./house.BohpDQ3q-4liaRkrV.js"),
					"../../../../icons/dist/assets/imow.svg": () => import("./imow.Dh1oMqcW-BrCRPJXs.js"),
					"../../../../icons/dist/assets/info.svg": () => import("./info.BZVg9FLA-BWBYGwte.js"),
					"../../../../icons/dist/assets/instagram.svg": () => import("./instagram.CIlKb7xj-BYJYQ5UQ.js"),
					"../../../../icons/dist/assets/leave-fullscreen.svg": () => import("./leave-fullscreen.BC5iwDur-BZQ1nY4o.js"),
					"../../../../icons/dist/assets/legal-info.svg": () => import("./legal-info.-S9gzFzc-BCC5LTrQ.js"),
					"../../../../icons/dist/assets/legal.svg": () => import("./legal.CVCmbA3m-DApZIUB_.js"),
					"../../../../icons/dist/assets/lightbulb.svg": () => import("./lightbulb.DQ7TiRsr-Beq7H-W-.js"),
					"../../../../icons/dist/assets/linkedin.svg": () => import("./linkedin.br5zvxco-BvUxApil.js"),
					"../../../../icons/dist/assets/list-three-rows.svg": () => import("./list-three-rows.Cso4ybs8-Dc_yt-Mf.js"),
					"../../../../icons/dist/assets/list-two-rows.svg": () => import("./list-two-rows.DOsZEv0--D6JB1Q4k.js"),
					"../../../../icons/dist/assets/loading-spinner.svg": () => import("./loading-spinner.BukfMaU6-nzlZtHt1.js"),
					"../../../../icons/dist/assets/lock.svg": () => import("./lock.Dw_GOpTn-DmMVjoTt.js"),
					"../../../../icons/dist/assets/magnifying-glass-minus.svg": () => import("./magnifying-glass-minus.BYztw2P1-CzYXtrw2.js"),
					"../../../../icons/dist/assets/magnifying-glass-plus.svg": () => import("./magnifying-glass-plus.BTgviDVh-C7xMrmRr.js"),
					"../../../../icons/dist/assets/magnifying-glass.svg": () => import("./magnifying-glass.C8DfRaIO-BkNAAkwL.js"),
					"../../../../icons/dist/assets/manuals.svg": () => import("./manuals.D5j_4hEf-v5gocXmj.js"),
					"../../../../icons/dist/assets/map.svg": () => import("./map.DNl7PF61-D_hs-n9i.js"),
					"../../../../icons/dist/assets/minus.svg": () => import("./minus.BkhCuIH4-Dfqc08YT.js"),
					"../../../../icons/dist/assets/mobile.svg": () => import("./mobile.C1Kj9VnC-Bf-AjCfp.js"),
					"../../../../icons/dist/assets/moon.svg": () => import("./moon.5yILPYXs-BEUfNC5o.js"),
					"../../../../icons/dist/assets/muscle.svg": () => import("./muscle.DbNjWasV-CS0ICtCk.js"),
					"../../../../icons/dist/assets/nine-squares.svg": () => import("./nine-squares.DVsNAOzz-D-DkcXLi.js"),
					"../../../../icons/dist/assets/note-check.svg": () => import("./note-check.CM_kmt0M-pUxtfF7p.js"),
					"../../../../icons/dist/assets/note-plus.svg": () => import("./note-plus.Bkn78EyA-wXJ_nPzB.js"),
					"../../../../icons/dist/assets/note.svg": () => import("./note.CE0ACLn8-BpjGDXEB.js"),
					"../../../../icons/dist/assets/number-input.svg": () => import("./number-input.BLhoh5mh-z2_fZBYY.js"),
					"../../../../icons/dist/assets/package-return.svg": () => import("./package-return.Cw7Jb6Tw-BsotC94i.js"),
					"../../../../icons/dist/assets/paperclip.svg": () => import("./paperclip.BMerX4rj-Cp9wExKu.js"),
					"../../../../icons/dist/assets/parcel.svg": () => import("./parcel.Ve9GL_EG-DDxejeXN.js"),
					"../../../../icons/dist/assets/pause.svg": () => import("./pause.B91Ejn-O-BCnGWjAO.js"),
					"../../../../icons/dist/assets/payment.svg": () => import("./payment.CvfGpsgi-DplQ3_0k.js"),
					"../../../../icons/dist/assets/pen.svg": () => import("./pen.CvKw2PvE-CWukdg4b.js"),
					"../../../../icons/dist/assets/percent.svg": () => import("./percent.BlB6rG-B-Cq2HiDnw.js"),
					"../../../../icons/dist/assets/petrol.svg": () => import("./petrol.BGWwCsTw-0bXb4-uA.js"),
					"../../../../icons/dist/assets/phone.svg": () => import("./phone.DzdXfmNC-Qr2KFF_b.js"),
					"../../../../icons/dist/assets/pin-s.svg": () => import("./pin-s.DXgYuN9C-B55-RZxq.js"),
					"../../../../icons/dist/assets/pin.svg": () => import("./pin.DZfZr4El-CgmCE1LS.js"),
					"../../../../icons/dist/assets/pinterest.svg": () => import("./pinterest.sUPAub_q-PV3yHfhL.js"),
					"../../../../icons/dist/assets/placeholder.svg": () => import("./placeholder.Dbb0hT5R-CHvqxJo3.js"),
					"../../../../icons/dist/assets/play.svg": () => import("./play.BDiY2JrT-C2EqRJJA.js"),
					"../../../../icons/dist/assets/plug.svg": () => import("./plug.DZozve4C-DrrW9aQK.js"),
					"../../../../icons/dist/assets/plus.svg": () => import("./plus.zdu17kAe-BmxUYAwh.js"),
					"../../../../icons/dist/assets/present.svg": () => import("./present.B4ImIJxi-pKOv4Sft.js"),
					"../../../../icons/dist/assets/printer.svg": () => import("./printer.CaFaWfeS-B5JTHBru.js"),
					"../../../../icons/dist/assets/prohibition-sign.svg": () => import("./prohibition-sign.DUFn0QiV-UzaGW6Hg.js"),
					"../../../../icons/dist/assets/questionmark.svg": () => import("./questionmark.QyDxanQy-nR7cf2cI.js"),
					"../../../../icons/dist/assets/recycling.svg": () => import("./recycling.CRBYpi-q-CbwE1APF.js"),
					"../../../../icons/dist/assets/reward.svg": () => import("./reward.Bf4L-zQI-CIMYzoQE.js"),
					"../../../../icons/dist/assets/safety-regulations.svg": () => import("./safety-regulations.clEkWNfB-BaEE1tbZ.js"),
					"../../../../icons/dist/assets/security.svg": () => import("./security.DkLw5ym4-BaG341k0.js"),
					"../../../../icons/dist/assets/share.svg": () => import("./share.C3wwEl8n-Bu7bHOVa.js"),
					"../../../../icons/dist/assets/shirt.svg": () => import("./shirt.BC8W-yCI-Dg2OLi1C.js"),
					"../../../../icons/dist/assets/shop.svg": () => import("./shop.DdPV35mK-DQyf3dEm.js"),
					"../../../../icons/dist/assets/sound-off.svg": () => import("./sound-off.D4kGcehG-Db3IsV6q.js"),
					"../../../../icons/dist/assets/sound-on.svg": () => import("./sound-on.Cynkb0_t-B8Cyx7gJ.js"),
					"../../../../icons/dist/assets/speechbubble.svg": () => import("./speechbubble.87vuoKUp-C49A65qv.js"),
					"../../../../icons/dist/assets/speechbubbles.svg": () => import("./speechbubbles.CSFhpNJn-B_i--CJl.js"),
					"../../../../icons/dist/assets/square.svg": () => import("./square.D6PgEi_r-CZ7rUJHF.js"),
					"../../../../icons/dist/assets/star-half.svg": () => import("./star-half.DZTtM5Bw-CByJ9TSa.js"),
					"../../../../icons/dist/assets/star.svg": () => import("./star.BkjednvI-wsYG4Nx7.js"),
					"../../../../icons/dist/assets/sun.svg": () => import("./sun.CY6ttzTL-CiqrkXuH.js"),
					"../../../../icons/dist/assets/support.svg": () => import("./support.BCU2Kxw2-BahGSuiP.js"),
					"../../../../icons/dist/assets/tag.svg": () => import("./tag.yO7uMsHj-B3FN69Dc.js"),
					"../../../../icons/dist/assets/thumbs-down.svg": () => import("./thumbs-down.DeBD6wnK-BNTEZ0bt.js"),
					"../../../../icons/dist/assets/thumbs-up.svg": () => import("./thumbs-up.D-44gexH-XqUcUxnX.js"),
					"../../../../icons/dist/assets/tiktok.svg": () => import("./tiktok.BWJTDGYm-DzmtUBCr.js"),
					"../../../../icons/dist/assets/triangle-exclamationmark-colored.svg": () => import("./triangle-exclamationmark-colored.e93zvQ6Q-O7__pu0I.js"),
					"../../../../icons/dist/assets/triangle-exclamationmark-inverted.svg": () => import("./triangle-exclamationmark-inverted.BiGoK7TV-BL-syamP.js"),
					"../../../../icons/dist/assets/triangle.svg": () => import("./triangle.ibv6NDnt-npJ32gmU.js"),
					"../../../../icons/dist/assets/truck.svg": () => import("./truck.xIk5wW6T-aVnoDf4V.js"),
					"../../../../icons/dist/assets/twitch.svg": () => import("./twitch.C893cAK8-YDhycxS8.js"),
					"../../../../icons/dist/assets/two-people-screen.svg": () => import("./two-people-screen.BBLouaW4-BFYA39Dl.js"),
					"../../../../icons/dist/assets/two-sheets.svg": () => import("./two-sheets.DWFmuL7N-CbcEGJLg.js"),
					"../../../../icons/dist/assets/upload.svg": () => import("./upload.BogDfonx-ihIsz-HD.js"),
					"../../../../icons/dist/assets/user.svg": () => import("./user.BMARueuy-CifjqRrH.js"),
					"../../../../icons/dist/assets/variants.svg": () => import("./variants.-R3_RCW8-aY_w9qPx.js"),
					"../../../../icons/dist/assets/vertical-ellipsis.svg": () => import("./vertical-ellipsis.Bc9eBsDF-JOuedZX2.js"),
					"../../../../icons/dist/assets/wc.svg": () => import("./wc.gmKE1r5l-COqNBuLK.js"),
					"../../../../icons/dist/assets/weight.svg": () => import("./weight.DUPu2UT0-DltQFs7o.js"),
					"../../../../icons/dist/assets/whatsapp.svg": () => import("./whatsapp.CPpu-7Nn-CxR8WFUc.js"),
					"../../../../icons/dist/assets/wifi-1bar.svg": () => import("./wifi-1bar.BcEP-r8w-4kfm7RkJ.js"),
					"../../../../icons/dist/assets/wifi-2bars.svg": () => import("./wifi-2bars.jDOd4Q3q-CXylqxbC.js"),
					"../../../../icons/dist/assets/wifi-off.svg": () => import("./wifi-off.D9xPqVWn-Bx6ywRaC.js"),
					"../../../../icons/dist/assets/wifi.svg": () => import("./wifi.CuQykF6X-CyjAZPHM.js"),
					"../../../../icons/dist/assets/wind-rose.svg": () => import("./wind-rose.C-XcKdy--BWOXDbas.js"),
					"../../../../icons/dist/assets/wrench.svg": () => import("./wrench.DMFV2S9u-CMenqwmz.js"),
					"../../../../icons/dist/assets/x.svg": () => import("./x.BqbpXd7O-BURMEd6u.js"),
					"../../../../icons/dist/assets/xing.svg": () => import("./xing.CiKYLbPq-r3hFFecE.js"),
					"../../../../icons/dist/assets/youtube.svg": () => import("./youtube.DrImaRSP-BEM2tQ8X.js")
				}), `../../../../icons/dist/assets/${e}.svg`, 8);
			} catch (e) {
				console.error(L("DSIcon", e instanceof Error ? e.message : String(e)));
			} finally {
				r && a(!1);
			}
		})()), () => {
			r = !1;
		};
	}, [e, n]), {
		isLoading: i,
		SVGIcon: t.current?.default,
		setShouldLoad: r
	};
}, oe = (e) => {
	let t = D.c(42), n, r, i, a, s, l, u;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], s = t[5], l = t[6], u = t[7]) : ({aria: n, className: r, name: s, size: l, source: a, theme: u, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = s, t[6] = l, t[7] = u);
	let d = s === void 0 ? "placeholder" : s, f = l === void 0 ? "large" : l, p = u === void 0 ? "light" : u, { SVGIcon: m, isLoading: h, setShouldLoad: _ } = ae(d), [, v] = c(d), y;
	t[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = {
		"x-large": 24,
		large: 16,
		medium: 12,
		small: 10,
		"x-small": 8
	}, t[8] = y) : y = t[8];
	let b = y, x;
	t[9] !== d || t[10] !== v ? (x = () => {
		v(d);
	}, t[9] = d, t[10] = v, t[11] = x) : x = t[11];
	let S;
	t[12] === d ? S = t[13] : (S = [d], t[12] = d, t[13] = S), o(x, S);
	let C = !!a, w;
	t[14] === _ ? w = t[15] : (w = (e) => {
		_(e);
	}, t[14] = _, t[15] = w);
	let T;
	t[16] !== C || t[17] !== w ? (T = {
		rootMargin: "200px 0px",
		triggerOnce: !0,
		fallbackInView: !0,
		skip: C,
		onChange: w
	}, t[16] = C, t[17] = w, t[18] = T) : T = t[18];
	let { ref: E } = ne(T), O;
	t[19] === a ? O = t[20] : (O = (e) => (t) => {
		a && t && (t.src = e);
	}, t[19] = a, t[20] = O);
	let k = O, A;
	t[21] !== d || t[22] !== a || t[23] !== p ? (A = p === "dark" && !a && !d.includes("-colored"), t[21] = d, t[22] = a, t[23] = p, t[24] = A) : A = t[24];
	let j = f === "x-large", N = f === "medium", P = f === "small", F = f === "x-small", I;
	t[25] !== r || t[26] !== A || t[27] !== j || t[28] !== N || t[29] !== P || t[30] !== F ? (I = M(re.image, r, {
		[re.imageThemeDark]: A,
		[re.imageSizeXLarge]: j,
		[re.imageSizeMedium]: N,
		[re.imageSizeSmall]: P,
		[re.imageSizeXSmall]: F
	}), t[25] = r, t[26] = A, t[27] = j, t[28] = N, t[29] = P, t[30] = F, t[31] = I) : I = t[31];
	let L = I, R;
	return t[32] !== m || t[33] !== k || t[34] !== n || t[35] !== L || t[36] !== h || t[37] !== E || t[38] !== i || t[39] !== f || t[40] !== a ? (R = a ? /* @__PURE__ */ g("img", {
		className: L,
		ref: k(a),
		width: b[f],
		height: b[f],
		loading: "lazy",
		alt: n?.["aria-label"] || "",
		...i
	}) : !h && m ? /* @__PURE__ */ g(m, {
		className: L,
		title: n?.["aria-label"] || "",
		role: n?.["aria-label"] ? "img" : void 0,
		...i
	}) : /* @__PURE__ */ g("div", {
		className: L,
		ref: E
	}), t[32] = m, t[33] = k, t[34] = n, t[35] = L, t[36] = h, t[37] = E, t[38] = i, t[39] = f, t[40] = a, t[41] = R) : R = t[41], R;
}, se = {
	root: "ds-number-indicator_root_ueqlv_1",
	rootHasContent: "ds-number-indicator_root--has-content_ueqlv_24",
	rootHighlight: "ds-number-indicator_root--highlight_ueqlv_29"
}, ce = (e) => {
	let t = D.c(18), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({label: r, className: n, variant: a, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o = a === void 0 ? "default" : a, s;
	t[5] === r ? s = t[6] : (s = typeof r == "string" && r.trim().length > 0, t[5] = r, t[6] = s);
	let c = s, l;
	t[7] !== c || t[8] !== r ? (l = c ? r.trim().substring(0, 4) : null, t[7] = c, t[8] = r, t[9] = l) : l = t[9];
	let u = l, d = o === "highlight" || !c, f;
	t[10] !== n || t[11] !== c || t[12] !== d ? (f = M(se.root, n, {
		[se.rootHasContent]: c,
		[se.rootHighlight]: d
	}), t[10] = n, t[11] = c, t[12] = d, t[13] = f) : f = t[13];
	let p = f, m;
	return t[14] !== i || t[15] !== p || t[16] !== u ? (m = /* @__PURE__ */ g("span", {
		className: p,
		...i,
		children: u
	}), t[14] = i, t[15] = p, t[16] = u, t[17] = m) : m = t[17], m;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Accordion.Drq0YoeJ.js
d();
var q = {
	details: "ds-accordion_details_2g22m_1",
	summary: "ds-accordion_summary_2g22m_117",
	summaryUtilityM: "ds-accordion_summary--utility--m_2g22m_156",
	summaryFlush: "ds-accordion_summary--flush_2g22m_185",
	summarySmall: "ds-accordion_summary--small_2g22m_253",
	summaryXSmall: "ds-accordion_summary--x-small_2g22m_257",
	summaryContentWrapper: "ds-accordion_summary-content-wrapper_2g22m_262",
	summaryContentWrapperFlush: "ds-accordion_summary-content-wrapper--flush_2g22m_268",
	summaryContentWrapperChevronLeft: "ds-accordion_summary-content-wrapper--chevron-left_2g22m_272",
	summaryContentWrapperXSmall: "ds-accordion_summary-content-wrapper--x-small_2g22m_276",
	headingSummaryWrapper: "ds-accordion_heading-summary-wrapper_2g22m_280",
	headingSummary: "ds-accordion_heading-summary_2g22m_280",
	headingSummaryXSmall: "ds-accordion_heading-summary--x-small_2g22m_290",
	hint: "ds-accordion_hint_2g22m_294",
	icon: "ds-accordion_icon_2g22m_308",
	iconOpen: "ds-accordion_icon--open_2g22m_319",
	iconOpenCaret: "ds-accordion_icon--open-caret_2g22m_330",
	contentWrapper: "ds-accordion_content-wrapper_2g22m_342",
	contentWrapperFlush: "ds-accordion_content-wrapper--flush_2g22m_348",
	contentWrapperSmall: "ds-accordion_content-wrapper--small_2g22m_352",
	contentWrapperXSmall: "ds-accordion_content-wrapper--x-small_2g22m_356"
}, le = ({ children: e, hint: t, numberIndicatorValue: n, numberIndicatorAriaLabel: r, summary: i }) => {
	if (!e) throw Error(L("DSAccordion", "The component requires children to be set."));
	if (!i) throw Error(L("DSAccordion", "The summary prop is required. Please add the summary prop to the DSAccordion component."));
	if (t && (n || n === "")) throw Error(L("DSAccordion", "The hint and numberIndicator props cannot be used together. Please remove either the hint prop or the numberIndicatorValue prop."));
	(n || n === "") && !r && console.warn(L("DSAccordion", "Please provide a descriptive aria-label for the Number Indicator for better accessibility."));
}, ue = s((e, t) => {
	let n = D.c(77), r, i, a, s, l, u, d, m, h, _, v, y;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], s = n[4], l = n[5], u = n[6], d = n[7], m = n[8], h = n[9], _ = n[10], v = n[11], y = n[12]) : ({children: r, summary: m, chevronPosition: h, className: i, hint: a, isFlush: _, isOpen: v, numberIndicatorValue: l, numberIndicatorAriaLabel: s, size: y, onToggle: u, ...d} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = s, n[5] = l, n[6] = u, n[7] = d, n[8] = m, n[9] = h, n[10] = _, n[11] = v, n[12] = y);
	let b = h === void 0 ? "right" : h, x = _ === void 0 ? !1 : _, S = v === void 0 ? !1 : v, C = y === void 0 ? "medium" : y;
	process.env.NODE_ENV !== "production" && le({
		children: r,
		hint: a,
		numberIndicatorValue: l,
		numberIndicatorAriaLabel: s,
		summary: m
	});
	let w = b === "right" ? "chevron" : "caret", T = p(null), [E, O] = c(S), k;
	n[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = () => T.current, n[13] = k) : k = n[13], f(t, k);
	let A;
	n[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = () => {
		T.current && O(T.current.open);
	}, n[14] = A) : A = n[14];
	let j;
	n[15] === S ? j = n[16] : (j = [S], n[15] = S, n[16] = j), o(A, j);
	let N, F;
	n[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = () => {
		let e = () => {
			T.current && O(T.current.open);
		};
		return T.current?.addEventListener("toggle", e), () => {
			T.current?.removeEventListener("toggle", e);
		};
	}, F = [], n[17] = N, n[18] = F) : (N = n[17], F = n[18]), o(N, F);
	let I, L, R, z = typeof m == "object" && m !== void 0;
	z && ({headingSize: I, headingTag: L, headingText: R} = m);
	let B;
	n[19] === i ? B = n[20] : (B = M(q.details, i), n[19] = i, n[20] = B);
	let V = B, H = C === "small", U = C === "x-small", W = !z, G;
	n[21] !== x || n[22] !== H || n[23] !== U || n[24] !== W ? (G = M(q.summary, {
		[q.summaryFlush]: x,
		[q.summarySmall]: H,
		[q.summaryXSmall]: U,
		[q.summaryUtilityM]: W
	}), n[21] = x, n[22] = H, n[23] = U, n[24] = W, n[25] = G) : G = n[25];
	let ee = G, K = b === "left", te = C === "x-small", ne;
	n[26] !== x || n[27] !== K || n[28] !== te ? (ne = M(q.summaryContentWrapper, {
		[q.summaryContentWrapperFlush]: x,
		[q.summaryContentWrapperChevronLeft]: K,
		[q.summaryContentWrapperXSmall]: te
	}), n[26] = x, n[27] = K, n[28] = te, n[29] = ne) : ne = n[29];
	let re = ne, ie = C === "x-small", ae;
	n[30] === ie ? ae = n[31] : (ae = M(q.headingSummary, { [q.headingSummaryXSmall]: ie }), n[30] = ie, n[31] = ae);
	let se = ae, ue = w === "chevron" && E, de = w === "caret" && E, J;
	n[32] !== ue || n[33] !== de ? (J = M(q.icon, {
		[q.iconOpen]: ue,
		[q.iconOpenCaret]: de
	}), n[32] = ue, n[33] = de, n[34] = J) : J = n[34];
	let Y = J, X = C === "small", fe = C === "x-small", Z;
	n[35] !== x || n[36] !== X || n[37] !== fe ? (Z = M(q.contentWrapper, {
		[q.contentWrapperFlush]: x,
		[q.contentWrapperSmall]: X,
		[q.contentWrapperXSmall]: fe
	}), n[35] = x, n[36] = X, n[37] = fe, n[38] = Z) : Z = n[38];
	let Q = Z, pe;
	n[39] !== I || n[40] !== L || n[41] !== R || n[42] !== z || n[43] !== m ? (pe = z ? /* @__PURE__ */ g(P, {
		tag: L,
		size: I,
		children: R
	}) : m, n[39] = I, n[40] = L, n[41] = R, n[42] = z, n[43] = m, n[44] = pe) : pe = n[44];
	let me;
	n[45] !== s || n[46] !== l ? (me = (l || l?.trim() === "") && /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g(ce, {
		"aria-label": s,
		label: l
	}) }), n[45] = s, n[46] = l, n[47] = me) : me = n[47];
	let he;
	n[48] !== se || n[49] !== pe || n[50] !== me ? (he = /* @__PURE__ */ g("div", {
		className: se,
		children: [pe, me]
	}), n[48] = se, n[49] = pe, n[50] = me, n[51] = he) : he = n[51];
	let ge;
	n[52] === a ? ge = n[53] : (ge = a && /* @__PURE__ */ g("div", {
		className: q.hint,
		children: a
	}), n[52] = a, n[53] = ge);
	let _e;
	n[54] !== he || n[55] !== ge ? (_e = /* @__PURE__ */ g("div", {
		className: q.headingSummaryWrapper,
		children: [he, ge]
	}), n[54] = he, n[55] = ge, n[56] = _e) : _e = n[56];
	let ve = w === "chevron" ? "chevron-down" : "caret-right", ye;
	n[57] !== Y || n[58] !== ve ? (ye = /* @__PURE__ */ g(oe, {
		name: ve,
		"aria-hidden": "true",
		className: Y
	}), n[57] = Y, n[58] = ve, n[59] = ye) : ye = n[59];
	let be;
	n[60] !== re || n[61] !== _e || n[62] !== ye ? (be = /* @__PURE__ */ g("div", {
		className: re,
		children: [_e, ye]
	}), n[60] = re, n[61] = _e, n[62] = ye, n[63] = be) : be = n[63];
	let xe;
	n[64] !== ee || n[65] !== be ? (xe = /* @__PURE__ */ g("summary", {
		className: ee,
		children: be
	}), n[64] = ee, n[65] = be, n[66] = xe) : xe = n[66];
	let Se;
	n[67] !== r || n[68] !== Q ? (Se = /* @__PURE__ */ g("div", {
		className: Q,
		children: r
	}), n[67] = r, n[68] = Q, n[69] = Se) : Se = n[69];
	let Ce;
	return n[70] !== V || n[71] !== S || n[72] !== u || n[73] !== d || n[74] !== xe || n[75] !== Se ? (Ce = /* @__PURE__ */ g("details", {
		...d,
		ref: T,
		className: V,
		open: S,
		onToggle: u,
		children: [xe, Se]
	}), n[70] = V, n[71] = S, n[72] = u, n[73] = d, n[74] = xe, n[75] = Se, n[76] = Ce) : Ce = n[76], Ce;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/floating-ui.react.CP5A99-c.js
ue.displayName = "DSAccordion", d();
function de() {
	return typeof window < "u";
}
function J(e) {
	return fe(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
	return ((fe(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function fe(e) {
	return de() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function Z(e) {
	return de() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function Q(e) {
	return de() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function pe(e) {
	return !de() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
var me = /* @__PURE__ */ new Set(["inline", "contents"]);
function he(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Oe(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !me.has(i);
}
var ge = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function _e(e) {
	return ge.has(J(e));
}
var ve = [":popover-open", ":modal"];
function ye(e) {
	return ve.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var be = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], xe = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], Se = [
	"paint",
	"layout",
	"strict",
	"content"
];
function Ce(e) {
	let t = Te(), n = Z(e) ? Oe(e) : e;
	return be.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xe.some((e) => (n.willChange || "").includes(e)) || Se.some((e) => (n.contain || "").includes(e));
}
function we(e) {
	let t = Ae(e);
	for (; Q(t) && !De(t);) {
		if (Ce(t)) return t;
		if (ye(t)) return null;
		t = Ae(t);
	}
	return null;
}
function Te() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var Ee = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function De(e) {
	return Ee.has(J(e));
}
function Oe(e) {
	return Y(e).getComputedStyle(e);
}
function ke(e) {
	return Z(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ae(e) {
	if (J(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || pe(e) && e.host || X(e);
	return pe(t) ? t.host : t;
}
function je(e) {
	let t = Ae(e);
	return De(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Q(t) && he(t) ? t : je(t);
}
function Me(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = je(e), i = r === e.ownerDocument?.body, a = Y(r);
	if (i) {
		let e = Ne(a);
		return t.concat(a, a.visualViewport || [], he(r) ? r : [], e && n ? Me(e) : []);
	}
	return t.concat(r, Me(r, [], n));
}
function Ne(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
var Pe = Math.min, Fe = Math.max, Ie = Math.round, Le = Math.floor, Re = (e) => ({
	x: e,
	y: e
}), ze = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, Be = {
	start: "end",
	end: "start"
};
function Ve(e, t, n) {
	return Fe(e, Pe(t, n));
}
function He(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ue(e) {
	return e.split("-")[0];
}
function We(e) {
	return e.split("-")[1];
}
function Ge(e) {
	return e === "x" ? "y" : "x";
}
function Ke(e) {
	return e === "y" ? "height" : "width";
}
var qe = /* @__PURE__ */ new Set(["top", "bottom"]);
function Je(e) {
	return qe.has(Ue(e)) ? "y" : "x";
}
function Ye(e) {
	return Ge(Je(e));
}
function Xe(e, t, n) {
	n === void 0 && (n = !1);
	let r = We(e), i = Ye(e), a = Ke(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = at(o)), [o, at(o)];
}
function Ze(e) {
	let t = at(e);
	return [
		Qe(e),
		t,
		Qe(t)
	];
}
function Qe(e) {
	return e.replace(/start|end/g, (e) => Be[e]);
}
var $e = ["left", "right"], et = ["right", "left"], tt = ["top", "bottom"], nt = ["bottom", "top"];
function rt(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? et : $e : t ? $e : et;
		case "left":
		case "right": return t ? tt : nt;
		default: return [];
	}
}
function it(e, t, n, r) {
	let i = We(e), a = rt(Ue(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Qe)))), a;
}
function at(e) {
	return e.replace(/left|right|bottom|top/g, (e) => ze[e]);
}
function ot(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function st(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ot(e);
}
function ct(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
var lt = /* @__PURE__ */ [
	"input:not([inert])",
	"select:not([inert])",
	"textarea:not([inert])",
	"a[href]:not([inert])",
	"button:not([inert])",
	"[tabindex]:not(slot):not([inert])",
	"audio[controls]:not([inert])",
	"video[controls]:not([inert])",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert])",
	"details>summary:first-of-type:not([inert])",
	"details:not([inert])"
].join(","), ut = typeof Element > "u", dt = ut ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ft = !ut && Element.prototype.getRootNode ? function(e) {
	var t;
	return e == null || (t = e.getRootNode) == null ? void 0 : t.call(e);
} : function(e) {
	return e?.ownerDocument;
}, pt = function e(t, n) {
	var r;
	n === void 0 && (n = !0);
	var i = t == null || (r = t.getAttribute) == null ? void 0 : r.call(t, "inert");
	return i === "" || i === "true" || n && t && e(t.parentNode);
}, mt = function(e) {
	var t, n = e == null || (t = e.getAttribute) == null ? void 0 : t.call(e, "contenteditable");
	return n === "" || n === "true";
}, ht = function(e, t, n) {
	if (pt(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(lt));
	return t && dt.call(e, lt) && r.unshift(e), r = r.filter(n), r;
}, gt = function e(t, n, r) {
	for (var i = [], a = Array.from(t); a.length;) {
		var o = a.shift();
		if (!pt(o, !1)) if (o.tagName === "SLOT") {
			var s = o.assignedElements(), c = e(s.length ? s : o.children, !0, r);
			r.flatten ? i.push.apply(i, c) : i.push({
				scopeParent: o,
				candidates: c
			});
		} else {
			dt.call(o, lt) && r.filter(o) && (n || !t.includes(o)) && i.push(o);
			var l = o.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(o), u = !pt(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
			if (l && u) {
				var d = e(l === !0 ? o.children : l.children, !0, r);
				r.flatten ? i.push.apply(i, d) : i.push({
					scopeParent: o,
					candidates: d
				});
			} else a.unshift.apply(a, o.children);
		}
	}
	return i;
}, _t = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, vt = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || mt(e)) && !_t(e) ? 0 : e.tabIndex;
}, yt = function(e, t) {
	var n = vt(e);
	return n < 0 && t && !_t(e) ? 0 : n;
}, bt = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, xt = function(e) {
	return e.tagName === "INPUT";
}, St = function(e) {
	return xt(e) && e.type === "hidden";
}, Ct = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, wt = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, Tt = function(e) {
	if (!e.name) return !0;
	var t = e.form || ft(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = wt(r, e.form);
	return !i || i === e;
}, Et = function(e) {
	return xt(e) && e.type === "radio";
}, Dt = function(e) {
	return Et(e) && !Tt(e);
}, Ot = function(e) {
	var t = e && ft(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = ft(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, kt = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, At = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = dt.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (dt.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = ft(e);
				if (o && !o.shadowRoot && r(o) === !0) return kt(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (Ot(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return kt(e);
	return !1;
}, jt = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return dt.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Mt = function(e, t) {
	return !(t.disabled || pt(t) || St(t) || At(t, e) || Ct(t) || jt(t));
}, Nt = function(e, t) {
	return !(Dt(t) || vt(t) < 0 || !Mt(e, t));
}, Pt = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, Ft = function e(t) {
	var n = [], r = [];
	return t.forEach(function(t, i) {
		var a = !!t.scopeParent, o = a ? t.scopeParent : t, s = yt(o, a), c = a ? e(t.candidates) : o;
		s === 0 ? a ? n.push.apply(n, c) : n.push(o) : r.push({
			documentOrder: i,
			tabIndex: s,
			item: t,
			isScope: a,
			content: c
		});
	}), r.sort(bt).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(n);
}, It = function(e, t) {
	t ||= {};
	var n;
	return n = t.getShadowRoot ? gt([e], t.includeContainer, {
		filter: Nt.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Pt
	}) : ht(e, t.includeContainer, Nt.bind(null, t)), Ft(n);
}, Lt = function(e, t) {
	t ||= {};
	var n;
	return n = t.getShadowRoot ? gt([e], t.includeContainer, {
		filter: Mt.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : ht(e, t.includeContainer, Mt.bind(null, t)), n;
}, Rt = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return dt.call(e, lt) === !1 ? !1 : Nt(t, e);
};
function zt() {
	let e = navigator.userAgentData;
	return e != null && e.platform ? e.platform : navigator.platform;
}
function Bt() {
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map((e) => {
		let { brand: t, version: n } = e;
		return t + "/" + n;
	}).join(" ") : navigator.userAgent;
}
function Vt() {
	return /apple/i.test(navigator.vendor);
}
function Ht() {
	let e = /android/i;
	return e.test(zt()) || e.test(Bt());
}
function Ut() {
	return zt().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Wt() {
	return Bt().includes("jsdom/");
}
var Gt = "data-floating-ui-focusable", Kt = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function qt(e) {
	let t = e.activeElement;
	for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
		var n;
		t = t.shadowRoot.activeElement;
	}
	return t;
}
function Jt(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode == null ? void 0 : t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && pe(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Yt(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Xt(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Zt(e) {
	return e.matches("html,body");
}
function Qt(e) {
	return e?.ownerDocument || document;
}
function $t(e) {
	return Q(e) && e.matches(Kt);
}
function en(e) {
	return e ? e.getAttribute("role") === "combobox" && $t(e) : !1;
}
function tn(e) {
	if (!e || Wt()) return !0;
	try {
		return e.matches(":focus-visible");
	} catch {
		return !0;
	}
}
function nn(e) {
	return e ? e.hasAttribute(Gt) ? e : e.querySelector("[" + Gt + "]") || e : null;
}
function rn(e, t, n) {
	return n === void 0 && (n = !0), e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...rn(e, t.id, n)]);
}
function an(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
function on(e) {
	e.preventDefault(), e.stopPropagation();
}
function sn(e) {
	return "nativeEvent" in e;
}
function cn(e) {
	return e.mozInputSource === 0 && e.isTrusted ? !0 : Ht() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ln(e) {
	return Wt() ? !1 : !Ht() && e.width === 0 && e.height === 0 || Ht() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function un(e, t) {
	let n = ["mouse", "pen"];
	return t || n.push("", void 0), n.includes(e);
}
var dn = typeof document < "u" ? C : function() {}, fn = { ...h };
function pn(e) {
	let t = p(e);
	return dn(() => {
		t.current = e;
	}), t;
}
var mn = fn.useInsertionEffect || ((e) => e());
function hn(e) {
	let n = p(() => {
		if (process.env.NODE_ENV !== "production") throw Error("Cannot call an event handler while rendering.");
	});
	return mn(() => {
		n.current = e;
	}), t(function() {
		var e = [...arguments];
		return n.current == null ? void 0 : n.current(...e);
	}, []);
}
var gn = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function _n(e, t) {
	let n = It(e, gn()), r = n.length;
	if (r === 0) return;
	let i = qt(Qt(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function vn(e) {
	return _n(Qt(e).body, 1) || e;
}
function yn(e) {
	return _n(Qt(e).body, -1) || e;
}
function bn(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !Jt(n, r);
}
function xn(e) {
	It(e, gn()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function Sn(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
function Cn(e, t, n) {
	let { reference: r, floating: i } = e, a = Je(t), o = Ye(t), s = Ke(o), c = Ue(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (We(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
var wn = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Cn(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = Cn(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function Tn(e, t) {
	var n;
	t === void 0 && (t = {});
	let { x: r, y: i, platform: a, rects: o, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = He(t, e), m = st(p), h = s[f ? d === "floating" ? "reference" : "floating" : d], g = ct(await a.getClippingRect({
		element: (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null || n ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
		boundary: l,
		rootBoundary: u,
		strategy: c
	})), _ = d === "floating" ? {
		x: r,
		y: i,
		width: o.floating.width,
		height: o.floating.height
	} : o.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), y = await (a.isElement == null ? void 0 : a.isElement(v)) && await (a.getScale == null ? void 0 : a.getScale(v)) || {
		x: 1,
		y: 1
	}, b = ct(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: s,
		rect: _,
		offsetParent: v,
		strategy: c
	}) : _);
	return {
		top: (g.top - b.top + m.top) / y.y,
		bottom: (b.bottom - g.bottom + m.bottom) / y.y,
		left: (g.left - b.left + m.left) / y.x,
		right: (b.right - g.right + m.right) / y.x
	};
}
var En = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = He(e, t) || {};
		if (l == null) return {};
		let d = st(u), f = {
			x: n,
			y: r
		}, p = Ye(i), m = Ke(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Pe(d[_], T), D = Pe(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Ve(O, A, k), M = !c.arrow && We(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), Dn = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = He(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ue(r), _ = Je(o), v = Ue(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [at(o)] : Ze(o)), x = p !== "none";
			!d && x && b.push(...it(o, m, p, y));
			let S = [o, ...b], C = await Tn(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Xe(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Je(t)) || T.every((e) => Je(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Je(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, On = /* @__PURE__ */ new Set(["left", "top"]);
async function kn(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ue(n), s = We(n), c = Je(n) === "y", l = On.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = He(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var An = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await kn(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, jn = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = He(e, t), l = {
				x: n,
				y: r
			}, u = await Tn(t, c), d = Je(Ue(i)), f = Ge(d), p = l[f], m = l[d];
			if (a) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = p + u[e], r = p - u[t];
				p = Ve(n, p, r);
			}
			if (o) {
				let e = d === "y" ? "top" : "left", t = d === "y" ? "bottom" : "right", n = m + u[e], r = m - u[t];
				m = Ve(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
};
function Mn(e) {
	let t = Oe(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Q(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ie(n) !== a || Ie(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Nn(e) {
	return Z(e) ? e : e.contextElement;
}
function Pn(e) {
	let t = Nn(e);
	if (!Q(t)) return Re(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Mn(t), o = (a ? Ie(n.width) : n.width) / r, s = (a ? Ie(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Fn = /* @__PURE__ */ Re(0);
function In(e) {
	let t = Y(e);
	return !Te() || !t.visualViewport ? Fn : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ln(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function Rn(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Nn(e), o = Re(1);
	t && (r ? Z(r) && (o = Pn(r)) : o = Pn(e));
	let s = Ln(a, n, r) ? In(a) : Re(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Y(a), t = r && Z(r) ? Y(r) : r, n = e, i = Ne(n);
		for (; i && r && t !== n;) {
			let e = Pn(i), t = i.getBoundingClientRect(), r = Oe(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Y(i), i = Ne(n);
		}
	}
	return ct({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function zn(e, t) {
	let n = ke(e).scrollLeft;
	return t ? t.left + n : Rn(X(e)).left + n;
}
function Bn(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - zn(e, n),
		y: n.top + t.scrollTop
	};
}
function Vn(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = X(r), s = t ? ye(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Re(1), u = Re(0), d = Q(r);
	if ((d || !d && !a) && ((J(r) !== "body" || he(o)) && (c = ke(r)), Q(r))) {
		let e = Rn(r);
		l = Pn(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Bn(o, c) : Re(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Hn(e) {
	return Array.from(e.getClientRects());
}
function Un(e) {
	let t = X(e), n = ke(e), r = e.ownerDocument.body, i = Fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + zn(e), s = -n.scrollTop;
	return Oe(r).direction === "rtl" && (o += Fe(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Wn = 25;
function Gn(e, t) {
	let n = Y(e), r = X(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Te();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = zn(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Wn && (a -= o);
	} else l <= Wn && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var Kn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function qn(e, t) {
	let n = Rn(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Q(e) ? Pn(e) : Re(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Jn(e, t, n) {
	let r;
	if (t === "viewport") r = Gn(e, n);
	else if (t === "document") r = Un(X(e));
	else if (Z(t)) r = qn(t, n);
	else {
		let n = In(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ct(r);
}
function Yn(e, t) {
	let n = Ae(e);
	return n === t || !Z(n) || De(n) ? !1 : Oe(n).position === "fixed" || Yn(n, t);
}
function Xn(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Me(e, [], !1).filter((e) => Z(e) && J(e) !== "body"), i = null, a = Oe(e).position === "fixed", o = a ? Ae(e) : e;
	for (; Z(o) && !De(o);) {
		let t = Oe(o), n = Ce(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && Kn.has(i.position) || he(o) && !n && Yn(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Ae(o);
	}
	return t.set(e, r), r;
}
function Zn(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ye(t) ? [] : Xn(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = Jn(t, n, i);
		return e.top = Fe(r.top, e.top), e.right = Pe(r.right, e.right), e.bottom = Pe(r.bottom, e.bottom), e.left = Fe(r.left, e.left), e;
	}, Jn(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Qn(e) {
	let { width: t, height: n } = Mn(e);
	return {
		width: t,
		height: n
	};
}
function $n(e, t, n) {
	let r = Q(t), i = X(t), a = n === "fixed", o = Rn(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Re(0);
	function l() {
		c.x = zn(i);
	}
	if (r || !r && !a) if ((J(t) !== "body" || he(i)) && (s = ke(t)), r) {
		let e = Rn(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Bn(i, s) : Re(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function er(e) {
	return Oe(e).position === "static";
}
function tr(e, t) {
	if (!Q(e) || Oe(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return X(e) === n && (n = n.ownerDocument.body), n;
}
function nr(e, t) {
	let n = Y(e);
	if (ye(e)) return n;
	if (!Q(e)) {
		let t = Ae(e);
		for (; t && !De(t);) {
			if (Z(t) && !er(t)) return t;
			t = Ae(t);
		}
		return n;
	}
	let r = tr(e, t);
	for (; r && _e(r) && er(r);) r = tr(r, t);
	return r && De(r) && er(r) && !Ce(r) ? n : r || we(e) || n;
}
var rr = async function(e) {
	let t = this.getOffsetParent || nr, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: $n(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ir(e) {
	return Oe(e).direction === "rtl";
}
var ar = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Vn,
	getDocumentElement: X,
	getClippingRect: Zn,
	getOffsetParent: nr,
	getElementRects: rr,
	getClientRects: Hn,
	getDimensions: Qn,
	getScale: Pn,
	isElement: Z,
	isRTL: ir
};
function or(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sr(e, t) {
	let n = null, r, i = X(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Le(d), h = Le(i.clientWidth - (u + f)), g = Le(i.clientHeight - (d + p)), _ = Le(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Fe(0, Pe(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !or(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function cr(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Nn(e), u = i || a ? [...l ? Me(l) : [], ...Me(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? sr(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? Rn(e) : null;
	c && g();
	function g() {
		let t = Rn(e);
		h && !or(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var lr = An, ur = jn, dr = Dn, fr = En, pr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: ar,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return wn(e, t, {
		...i,
		platform: a
	});
}, mr = typeof document < "u" ? C : function() {};
function hr(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!hr(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !hr(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function gr(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _r(e, t) {
	let n = gr(e);
	return Math.round(t * n) / n;
}
function vr(e) {
	let t = p(e);
	return mr(() => {
		t.current = e;
	}), t;
}
function yr(e) {
	e === void 0 && (e = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: u = !0, whileElementsMounted: d, open: f } = e, [m, h] = c({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [g, _] = c(i);
	hr(g, i) || _(i);
	let [v, y] = c(null), [x, S] = c(null), C = t((e) => {
		e !== D.current && (D.current = e, y(e));
	}, []), w = t((e) => {
		e !== O.current && (O.current = e, S(e));
	}, []), T = o || v, E = s || x, D = p(null), O = p(null), k = p(m), A = d != null, j = vr(d), M = vr(a), N = vr(f), P = t(() => {
		if (!D.current || !O.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: g
		};
		M.current && (e.platform = M.current), pr(D.current, O.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: N.current !== !1
			};
			F.current && !hr(k.current, t) && (k.current = t, l(() => {
				h(t);
			}));
		});
	}, [
		g,
		n,
		r,
		M,
		N
	]);
	mr(() => {
		f === !1 && k.current.isPositioned && (k.current.isPositioned = !1, h((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [f]);
	let F = p(!1);
	mr(() => (F.current = !0, () => {
		F.current = !1;
	}), []), mr(() => {
		if (T && (D.current = T), E && (O.current = E), T && E) {
			if (j.current) return j.current(T, E, P);
			P();
		}
	}, [
		T,
		E,
		P,
		j,
		A
	]);
	let I = b(() => ({
		reference: D,
		floating: O,
		setReference: C,
		setFloating: w
	}), [C, w]), L = b(() => ({
		reference: T,
		floating: E
	}), [T, E]), R = b(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!L.floating) return e;
		let t = _r(L.floating, m.x), n = _r(L.floating, m.y);
		return u ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...gr(L.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		u,
		L.floating,
		m.x,
		m.y
	]);
	return b(() => ({
		...m,
		update: P,
		refs: I,
		elements: L,
		floatingStyles: R
	}), [
		m,
		P,
		I,
		L,
		R
	]);
}
var br = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : fr({
				element: r.current,
				padding: i
			}).fn(n) : r ? fr({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, xr = (e, t) => ({
	...lr(e),
	options: [e, t]
}), Sr = (e, t) => ({
	...ur(e),
	options: [e, t]
}), Cr = (e, t) => ({
	...dr(e),
	options: [e, t]
}), wr = (e, t) => ({
	...br(e),
	options: [e, t]
});
function Tr(e) {
	let n = p(void 0), r = t((t) => {
		let n = e.map((e) => {
			if (e != null) {
				if (typeof e == "function") {
					let n = e, r = n(t);
					return typeof r == "function" ? r : () => {
						n(null);
					};
				}
				return e.current = t, () => {
					e.current = null;
				};
			}
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, e);
	return b(() => e.every((e) => e == null) ? null : (e) => {
		n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
	}, e);
}
var Er = "data-floating-ui-focusable", Dr = "active", Or = "selected", kr = { ...h }, Ar = !1, jr = 0, Mr = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + jr++;
function Nr() {
	let [e, t] = c(() => Ar ? Mr() : void 0);
	return dn(() => {
		e ?? t(Mr());
	}, []), o(() => {
		Ar = !0;
	}, []), e;
}
var Pr = kr.useId || Nr, Fr;
process.env.NODE_ENV !== "production" && (Fr = /* @__PURE__ */ new Set());
function Ir() {
	for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
	let i = "Floating UI: " + n.join(" ");
	if (!((e = Fr) != null && e.has(i))) {
		var a;
		(a = Fr) == null || a.add(i), console.warn(i);
	}
}
function Lr() {
	for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
	let i = "Floating UI: " + n.join(" ");
	if (!((e = Fr) != null && e.has(i))) {
		var a;
		(a = Fr) == null || a.add(i), console.error(i);
	}
}
var Rr = /* @__PURE__ */ s(function(e, t) {
	let { context: { placement: n, elements: { floating: r }, middlewareData: { arrow: i, shift: a } }, width: o = 14, height: s = 7, tipRadius: l = 0, strokeWidth: u = 0, staticOffset: d, stroke: f, d: p, style: { transform: m, ...h } = {}, ..._ } = e;
	process.env.NODE_ENV !== "production" && (t || Ir("The `ref` prop is required for `FloatingArrow`."));
	let v = Pr(), [y, b] = c(!1);
	if (dn(() => {
		r && Oe(r).direction === "rtl" && b(!0);
	}, [r]), !r) return null;
	let [x, S] = n.split("-"), C = x === "top" || x === "bottom", w = d;
	(C && a != null && a.x || !C && a != null && a.y) && (w = null);
	let T = u * 2, E = T / 2, D = o / 2 * (l / -8 + 1), O = s / 2 * l / 4, k = !!p, A = w && S === "end" ? "bottom" : "top", j = w && S === "end" ? "right" : "left";
	w && y && (j = S === "end" ? "left" : "right");
	let M = i?.x == null ? "" : w || i.x, N = i?.y == null ? "" : w || i.y, P = p || "M0,0" + (" H" + o) + (" L" + (o - D) + "," + (s - O)) + (" Q" + o / 2 + "," + s + " " + D + "," + (s - O)) + " Z", F = {
		top: k ? "rotate(180deg)" : "",
		left: k ? "rotate(90deg)" : "rotate(-90deg)",
		bottom: k ? "" : "rotate(180deg)",
		right: k ? "rotate(-90deg)" : "rotate(90deg)"
	}[x];
	return /* @__PURE__ */ g("svg", {
		..._,
		"aria-hidden": !0,
		ref: t,
		width: k ? o : o + T,
		height: o,
		viewBox: "0 0 " + o + " " + (s > o ? s : o),
		style: {
			position: "absolute",
			pointerEvents: "none",
			[j]: M,
			[A]: N,
			[x]: C || k ? "100%" : "calc(100% - " + T / 2 + "px)",
			transform: [F, m].filter((e) => !!e).join(" "),
			...h
		},
		children: [
			T > 0 && /* @__PURE__ */ g("path", {
				clipPath: "url(#" + v + ")",
				fill: "none",
				stroke: f,
				strokeWidth: T + (p ? 0 : 1),
				d: P
			}),
			/* @__PURE__ */ g("path", {
				stroke: T && !p ? _.fill : "none",
				d: P
			}),
			/* @__PURE__ */ g("clipPath", {
				id: v,
				children: /* @__PURE__ */ g("rect", {
					x: -E,
					y: E * (k ? -1 : 1),
					width: o + T,
					height: o
				})
			})
		]
	});
});
function zr() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			var r;
			(r = e.get(t)) == null || r.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			var r;
			(r = e.get(t)) == null || r.delete(n);
		}
	};
}
var Br = /* @__PURE__ */ r(null), Vr = /* @__PURE__ */ r(null), Hr = () => S(Br)?.id || null, Ur = () => S(Vr);
function Wr(e) {
	return "data-floating-ui-" + e;
}
function Gr(e) {
	e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
var Kr = /* @__PURE__ */ Wr("safe-polygon");
function qr(e, t, n) {
	if (n && !un(n)) return 0;
	if (typeof e == "number") return e;
	if (typeof e == "function") {
		let n = e();
		return typeof n == "number" ? n : n?.[t];
	}
	return e?.[t];
}
function Jr(e) {
	return typeof e == "function" ? e() : e;
}
function Yr(e, n) {
	n === void 0 && (n = {});
	let { open: r, onOpenChange: i, dataRef: a, events: s, elements: c } = e, { enabled: l = !0, delay: u = 0, handleClose: d = null, mouseOnly: f = !1, restMs: m = 0, move: h = !0 } = n, g = Ur(), _ = Hr(), v = pn(d), y = pn(u), x = pn(r), S = pn(m), C = p(), w = p(-1), T = p(), E = p(-1), D = p(!0), O = p(!1), k = p(() => {}), A = p(!1), j = hn(() => {
		let e = a.current.openEvent?.type;
		return e?.includes("mouse") && e !== "mousedown";
	});
	o(() => {
		if (!l) return;
		function e(e) {
			let { open: t } = e;
			t || (Gr(w), Gr(E), D.current = !0, A.current = !1);
		}
		return s.on("openchange", e), () => {
			s.off("openchange", e);
		};
	}, [l, s]), o(() => {
		if (!l || !v.current || !r) return;
		function e(e) {
			j() && i(!1, e, "hover");
		}
		let t = Qt(c.floating).documentElement;
		return t.addEventListener("mouseleave", e), () => {
			t.removeEventListener("mouseleave", e);
		};
	}, [
		c.floating,
		r,
		i,
		l,
		v,
		j
	]);
	let M = t(function(e, t, n) {
		t === void 0 && (t = !0), n === void 0 && (n = "hover");
		let r = qr(y.current, "close", C.current);
		r && !T.current ? (Gr(w), w.current = window.setTimeout(() => i(!1, e, n), r)) : t && (Gr(w), i(!1, e, n));
	}, [y, i]), N = hn(() => {
		k.current(), T.current = void 0;
	}), P = hn(() => {
		if (O.current) {
			let e = Qt(c.floating).body;
			e.style.pointerEvents = "", e.removeAttribute(Kr), O.current = !1;
		}
	}), F = hn(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
	o(() => {
		if (!l) return;
		function e(e) {
			if (Gr(w), D.current = !1, f && !un(C.current) || Jr(S.current) > 0 && !qr(y.current, "open")) return;
			let t = qr(y.current, "open", C.current);
			t ? w.current = window.setTimeout(() => {
				x.current || i(!0, e, "hover");
			}, t) : r || i(!0, e, "hover");
		}
		function t(e) {
			if (F()) {
				P();
				return;
			}
			k.current();
			let t = Qt(c.floating);
			if (Gr(E), A.current = !1, v.current && a.current.floatingContext) {
				r || Gr(w), T.current = v.current({
					...a.current.floatingContext,
					tree: g,
					x: e.clientX,
					y: e.clientY,
					onClose() {
						P(), N(), F() || M(e, !0, "safe-polygon");
					}
				});
				let n = T.current;
				t.addEventListener("mousemove", n), k.current = () => {
					t.removeEventListener("mousemove", n);
				};
				return;
			}
			(C.current !== "touch" || !Jt(c.floating, e.relatedTarget)) && M(e);
		}
		function n(e) {
			F() || a.current.floatingContext && (v.current == null || v.current({
				...a.current.floatingContext,
				tree: g,
				x: e.clientX,
				y: e.clientY,
				onClose() {
					P(), N(), F() || M(e);
				}
			})(e));
		}
		function o() {
			Gr(w);
		}
		function s(e) {
			F() || M(e, !1);
		}
		if (Z(c.domReference)) {
			let i = c.domReference, a = c.floating;
			return r && i.addEventListener("mouseleave", n), h && i.addEventListener("mousemove", e, { once: !0 }), i.addEventListener("mouseenter", e), i.addEventListener("mouseleave", t), a && (a.addEventListener("mouseleave", n), a.addEventListener("mouseenter", o), a.addEventListener("mouseleave", s)), () => {
				r && i.removeEventListener("mouseleave", n), h && i.removeEventListener("mousemove", e), i.removeEventListener("mouseenter", e), i.removeEventListener("mouseleave", t), a && (a.removeEventListener("mouseleave", n), a.removeEventListener("mouseenter", o), a.removeEventListener("mouseleave", s));
			};
		}
	}, [
		c,
		l,
		e,
		f,
		h,
		M,
		N,
		P,
		i,
		r,
		x,
		g,
		y,
		v,
		a,
		F,
		S
	]), dn(() => {
		var e;
		if (l && r && (e = v.current) != null && (e = e.__options) != null && e.blockPointerEvents && j()) {
			O.current = !0;
			let e = c.floating;
			if (Z(c.domReference) && e) {
				var t;
				let n = Qt(c.floating).body;
				n.setAttribute(Kr, "");
				let r = c.domReference, i = g == null || (t = g.nodesRef.current.find((e) => e.id === _)) == null || (t = t.context) == null ? void 0 : t.elements.floating;
				return i && (i.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
					n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = "";
				};
			}
		}
	}, [
		l,
		r,
		_,
		c,
		g,
		v,
		j
	]), dn(() => {
		r || (C.current = void 0, A.current = !1, N(), P());
	}, [
		r,
		N,
		P
	]), o(() => () => {
		N(), Gr(w), Gr(E), P();
	}, [
		l,
		c.domReference,
		N,
		P
	]);
	let I = b(() => {
		function e(e) {
			C.current = e.pointerType;
		}
		return {
			onPointerDown: e,
			onPointerEnter: e,
			onMouseMove(e) {
				let { nativeEvent: t } = e;
				function n() {
					!D.current && !x.current && i(!0, t, "hover");
				}
				f && !un(C.current) || r || Jr(S.current) === 0 || A.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (Gr(E), C.current === "touch" ? n() : (A.current = !0, E.current = window.setTimeout(n, Jr(S.current))));
			}
		};
	}, [
		f,
		i,
		r,
		x,
		S
	]);
	return b(() => l ? { reference: I } : {}, [l, I]);
}
var Xr = 0;
function Zr(e, t) {
	t === void 0 && (t = {});
	let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
	r && cancelAnimationFrame(Xr);
	let a = () => e?.focus({ preventScroll: n });
	i ? a() : Xr = requestAnimationFrame(a);
}
function Qr(e) {
	return e?.ownerDocument || document;
}
var $r = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap(),
	none: /* @__PURE__ */ new WeakMap()
};
function ei(e) {
	return e === "inert" ? $r.inert : e === "aria-hidden" ? $r["aria-hidden"] : $r.none;
}
var ti = /* @__PURE__ */ new WeakSet(), ni = {}, ri = 0, ii = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, ai = (e) => e && (e.host || ai(e.parentNode)), oi = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = ai(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null);
function si(e, t, n, r) {
	let i = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, o = oi(t, e), s = /* @__PURE__ */ new Set(), c = new Set(o), l = [];
	ni[i] || (ni[i] = /* @__PURE__ */ new WeakMap());
	let u = ni[i];
	o.forEach(d), f(t), s.clear();
	function d(e) {
		!e || s.has(e) || (s.add(e), e.parentNode && d(e.parentNode));
	}
	function f(e) {
		!e || c.has(e) || [].forEach.call(e.children, (e) => {
			if (J(e) !== "script") if (s.has(e)) f(e);
			else {
				let t = a ? e.getAttribute(a) : null, n = t !== null && t !== "false", r = ei(a), o = (r.get(e) || 0) + 1, s = (u.get(e) || 0) + 1;
				r.set(e, o), u.set(e, s), l.push(e), o === 1 && n && ti.add(e), s === 1 && e.setAttribute(i, ""), !n && a && e.setAttribute(a, a === "inert" ? "" : "true");
			}
		});
	}
	return ri++, () => {
		l.forEach((e) => {
			let t = ei(a), n = (t.get(e) || 0) - 1, r = (u.get(e) || 0) - 1;
			t.set(e, n), u.set(e, r), n || (!ti.has(e) && a && e.removeAttribute(a), ti.delete(e)), r || e.removeAttribute(i);
		}), ri--, ri || ($r.inert = /* @__PURE__ */ new WeakMap(), $r["aria-hidden"] = /* @__PURE__ */ new WeakMap(), $r.none = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakSet(), ni = {});
	};
}
function ci(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let r = Qr(e[0]).body;
	return si(e.concat(Array.from(r.querySelectorAll("[aria-live],[role=\"status\"],output"))), r, t, n);
}
var li = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "fixed",
	whiteSpace: "nowrap",
	width: "1px",
	top: 0,
	left: 0
}, ui = /* @__PURE__ */ s(function(e, t) {
	let [n, r] = c();
	dn(() => {
		Vt() && r("button");
	}, []);
	let i = {
		ref: t,
		tabIndex: 0,
		role: n,
		"aria-hidden": n ? void 0 : !0,
		[Wr("focus-guard")]: "",
		style: li
	};
	return /* @__PURE__ */ g("span", {
		...e,
		...i
	});
}), di = /* @__PURE__ */ r(null), fi = /* @__PURE__ */ Wr("portal");
function pi(e) {
	e === void 0 && (e = {});
	let { id: t, root: n } = e, r = Pr(), i = hi(), [a, o] = c(null), s = p(null);
	return dn(() => () => {
		a?.remove(), queueMicrotask(() => {
			s.current = null;
		});
	}, [a]), dn(() => {
		if (!r || s.current) return;
		let e = t ? document.getElementById(t) : null;
		if (!e) return;
		let n = document.createElement("div");
		n.id = r, n.setAttribute(fi, ""), e.appendChild(n), s.current = n, o(n);
	}, [t, r]), dn(() => {
		if (n === null || !r || s.current) return;
		let e = n || i?.portalNode;
		e && !fe(e) && (e = e.current), e ||= document.body;
		let a = null;
		t && (a = document.createElement("div"), a.id = t, e.appendChild(a));
		let c = document.createElement("div");
		c.id = r, c.setAttribute(fi, ""), e = a || e, e.appendChild(c), s.current = c, o(c);
	}, [
		t,
		n,
		r,
		i
	]), a;
}
function mi(e) {
	let { children: t, id: n, root: r, preserveTabOrder: i = !0 } = e, a = pi({
		id: n,
		root: r
	}), [s, l] = c(null), u = p(null), d = p(null), f = p(null), m = p(null), h = s?.modal, _ = s?.open, y = !!s && !s.modal && s.open && i && !!(r || a);
	return o(() => {
		if (!a || !i || h) return;
		function e(e) {
			a && bn(e) && (e.type === "focusin" ? Sn : xn)(a);
		}
		return a.addEventListener("focusin", e, !0), a.addEventListener("focusout", e, !0), () => {
			a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0);
		};
	}, [
		a,
		i,
		h
	]), o(() => {
		a && (_ || Sn(a));
	}, [_, a]), /* @__PURE__ */ g(di.Provider, {
		value: b(() => ({
			preserveTabOrder: i,
			beforeOutsideRef: u,
			afterOutsideRef: d,
			beforeInsideRef: f,
			afterInsideRef: m,
			portalNode: a,
			setFocusManagerState: l
		}), [i, a]),
		children: [
			y && a && /* @__PURE__ */ g(ui, {
				"data-type": "outside",
				ref: u,
				onFocus: (e) => {
					if (bn(e, a)) {
						var t;
						(t = f.current) == null || t.focus();
					} else yn(s ? s.domReference : null)?.focus();
				}
			}),
			y && a && /* @__PURE__ */ g("span", {
				"aria-owns": a.id,
				style: li
			}),
			a && /* @__PURE__ */ v(t, a),
			y && a && /* @__PURE__ */ g(ui, {
				"data-type": "outside",
				ref: d,
				onFocus: (e) => {
					if (bn(e, a)) {
						var t;
						(t = m.current) == null || t.focus();
					} else vn(s ? s.domReference : null)?.focus(), s?.closeOnFocusOut && s?.onOpenChange(!1, e.nativeEvent, "focus-out");
				}
			})
		]
	});
}
var hi = () => S(di);
function gi(e) {
	return b(() => (t) => {
		e.forEach((e) => {
			e && (e.current = t);
		});
	}, e);
}
var _i = 20, vi = [];
function yi() {
	vi = vi.filter((e) => e.isConnected);
}
function bi(e) {
	yi(), e && J(e) !== "body" && (vi.push(e), vi.length > _i && (vi = vi.slice(-20)));
}
function xi() {
	return yi(), vi[vi.length - 1];
}
function Si(e) {
	let t = gn();
	return Rt(e, t) ? e : It(e, t)[0] || e;
}
function Ci(e, t) {
	var n;
	if (!t.current.includes("floating") && !((n = e.getAttribute("role")) != null && n.includes("dialog"))) return;
	let r = gn(), i = Lt(e, r).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return Rt(e, r) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), a = e.getAttribute("tabindex");
	t.current.includes("floating") || i.length === 0 ? a !== "0" && e.setAttribute("tabindex", "0") : (a !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
var wi = /* @__PURE__ */ s(function(e, t) {
	return /* @__PURE__ */ g("button", {
		...e,
		type: "button",
		ref: t,
		tabIndex: -1,
		style: li
	});
});
function Ti(e) {
	let { context: t, children: n, disabled: r = !1, order: a = ["content"], guards: s = !0, initialFocus: c = 0, returnFocus: l = !0, restoreFocus: u = !1, modal: d = !0, visuallyHiddenDismiss: f = !1, closeOnFocusOut: m = !0, outsideElementsInert: h = !1, getInsideElements: _ = () => [] } = e, { open: v, onOpenChange: y, events: b, dataRef: x, elements: { domReference: S, floating: C } } = t, w = hn(() => x.current.floatingContext?.nodeId), T = hn(_), E = typeof c == "number" && c < 0, D = en(S) && E, O = ii(), k = O ? s : !0, A = !k || O && h, j = pn(a), M = pn(c), N = pn(l), P = Ur(), F = hi(), I = p(null), L = p(null), R = p(!1), z = p(!1), B = p(-1), V = p(-1), H = F != null, U = nn(C), W = hn(function(e) {
		return e === void 0 && (e = U), e ? It(e, gn()) : [];
	}), G = hn((e) => {
		let t = W(e);
		return j.current.map((e) => S && e === "reference" ? S : U && e === "floating" ? U : t).filter(Boolean).flat();
	});
	o(() => {
		if (r || !d) return;
		function e(e) {
			if (e.key === "Tab") {
				Jt(U, qt(Qt(U))) && W().length === 0 && !D && on(e);
				let t = G(), n = Yt(e);
				j.current[0] === "reference" && n === S && (on(e), e.shiftKey ? Zr(t[t.length - 1]) : Zr(t[1])), j.current[1] === "floating" && n === U && e.shiftKey && (on(e), Zr(t[0]));
			}
		}
		let t = Qt(U);
		return t.addEventListener("keydown", e), () => {
			t.removeEventListener("keydown", e);
		};
	}, [
		r,
		S,
		U,
		d,
		j,
		D,
		W,
		G
	]), o(() => {
		if (r || !C) return;
		function e(e) {
			let t = Yt(e), n = W().indexOf(t);
			n !== -1 && (B.current = n);
		}
		return C.addEventListener("focusin", e), () => {
			C.removeEventListener("focusin", e);
		};
	}, [
		r,
		C,
		W
	]), o(() => {
		if (r || !m) return;
		function e() {
			z.current = !0, setTimeout(() => {
				z.current = !1;
			});
		}
		function t(e) {
			let t = e.relatedTarget, n = e.currentTarget, r = Yt(e);
			queueMicrotask(() => {
				let i = w(), a = !(Jt(S, t) || Jt(C, t) || Jt(t, C) || Jt(F?.portalNode, t) || t != null && t.hasAttribute(Wr("focus-guard")) || P && (rn(P.nodesRef.current, i).find((e) => Jt(e.context?.elements.floating, t) || Jt(e.context?.elements.domReference, t)) || an(P.nodesRef.current, i).find((e) => [e.context?.elements.floating, nn(e.context?.elements.floating)].includes(t) || e.context?.elements.domReference === t)));
				if (n === S && U && Ci(U, j), u && n !== S && !(r != null && r.isConnected) && qt(Qt(U)) === Qt(U).body) {
					Q(U) && U.focus();
					let e = B.current, t = W(), n = t[e] || t[t.length - 1] || U;
					Q(n) && n.focus();
				}
				if (x.current.insideReactTree) {
					x.current.insideReactTree = !1;
					return;
				}
				(D || !d) && t && a && !z.current && t !== xi() && (R.current = !0, y(!1, e, "focus-out"));
			});
		}
		let n = !!(!P && F);
		function i() {
			Gr(V), x.current.insideReactTree = !0, V.current = window.setTimeout(() => {
				x.current.insideReactTree = !1;
			});
		}
		if (C && Q(S)) return S.addEventListener("focusout", t), S.addEventListener("pointerdown", e), C.addEventListener("focusout", t), n && C.addEventListener("focusout", i, !0), () => {
			S.removeEventListener("focusout", t), S.removeEventListener("pointerdown", e), C.removeEventListener("focusout", t), n && C.removeEventListener("focusout", i, !0);
		};
	}, [
		r,
		S,
		C,
		U,
		d,
		P,
		F,
		y,
		m,
		u,
		W,
		D,
		w,
		j,
		x
	]);
	let ee = p(null), K = p(null), te = gi([ee, F?.beforeInsideRef]), ne = gi([K, F?.afterInsideRef]);
	o(() => {
		var e, t;
		if (r || !C) return;
		let n = Array.from((F == null || (e = F.portalNode) == null ? void 0 : e.querySelectorAll("[" + Wr("portal") + "]")) || []), i = [
			C,
			(t = (P ? an(P.nodesRef.current, w()) : []).find((e) => en(e.context?.elements.domReference || null))) == null || (t = t.context) == null ? void 0 : t.elements.domReference,
			...n,
			...T(),
			I.current,
			L.current,
			ee.current,
			K.current,
			F?.beforeOutsideRef.current,
			F?.afterOutsideRef.current,
			j.current.includes("reference") || D ? S : null
		].filter((e) => e != null), a = d || D ? ci(i, !A, A) : ci(i);
		return () => {
			a();
		};
	}, [
		r,
		S,
		C,
		d,
		j,
		F,
		D,
		k,
		A,
		P,
		w,
		T
	]), dn(() => {
		if (r || !Q(U)) return;
		let e = qt(Qt(U));
		queueMicrotask(() => {
			let t = G(U), n = M.current, r = (typeof n == "number" ? t[n] : n.current) || U, i = Jt(U, e);
			!E && !i && v && Zr(r, { preventScroll: r === U });
		});
	}, [
		r,
		v,
		U,
		E,
		G,
		M
	]), dn(() => {
		if (r || !U) return;
		let e = Qt(U);
		bi(qt(e));
		function t(e) {
			let { reason: t, event: n, nested: r } = e;
			if (["hover", "safe-polygon"].includes(t) && n.type === "mouseleave" && (R.current = !0), t === "outside-press") if (r) R.current = !1;
			else if (cn(n) || ln(n)) R.current = !1;
			else {
				let e = !1;
				document.createElement("div").focus({ get preventScroll() {
					return e = !0, !1;
				} }), e ? R.current = !1 : R.current = !0;
			}
		}
		b.on("openchange", t);
		let n = e.createElement("span");
		n.setAttribute("tabindex", "-1"), n.setAttribute("aria-hidden", "true"), Object.assign(n.style, li), H && S && S.insertAdjacentElement("afterend", n);
		function i() {
			if (typeof N.current == "boolean") {
				let e = S || xi();
				return e && e.isConnected ? e : n;
			}
			return N.current.current || n;
		}
		return () => {
			b.off("openchange", t);
			let r = qt(e), a = Jt(C, r) || P && rn(P.nodesRef.current, w(), !1).some((e) => Jt(e.context?.elements.floating, r)), o = i();
			queueMicrotask(() => {
				let t = Si(o);
				N.current && !R.current && Q(t) && (!(t !== r && r !== e.body) || a) && t.focus({ preventScroll: !0 }), n.remove();
			});
		};
	}, [
		r,
		C,
		U,
		N,
		x,
		b,
		P,
		H,
		S,
		w
	]), o(() => (queueMicrotask(() => {
		R.current = !1;
	}), () => {
		queueMicrotask(yi);
	}), [r]), dn(() => {
		if (!r && F) return F.setFocusManagerState({
			modal: d,
			closeOnFocusOut: m,
			open: v,
			onOpenChange: y,
			domReference: S
		}), () => {
			F.setFocusManagerState(null);
		};
	}, [
		r,
		F,
		d,
		v,
		y,
		m,
		S
	]), dn(() => {
		r || U && Ci(U, j);
	}, [
		r,
		U,
		j
	]);
	function re(e) {
		return r || !f || !d ? null : /* @__PURE__ */ g(wi, {
			ref: e === "start" ? I : L,
			onClick: (e) => y(!1, e.nativeEvent),
			children: typeof f == "string" ? f : "Dismiss"
		});
	}
	let ie = !r && k && (d ? !D : !0) && (H || d);
	return /* @__PURE__ */ g(i, { children: [
		ie && /* @__PURE__ */ g(ui, {
			"data-type": "inside",
			ref: te,
			onFocus: (e) => {
				if (d) {
					let e = G();
					Zr(a[0] === "reference" ? e[0] : e[e.length - 1]);
				} else if (F != null && F.preserveTabOrder && F.portalNode) if (R.current = !1, bn(e, F.portalNode)) vn(S)?.focus();
				else {
					var t;
					(t = F.beforeOutsideRef.current) == null || t.focus();
				}
			}
		}),
		!D && re("start"),
		n,
		re("end"),
		ie && /* @__PURE__ */ g(ui, {
			"data-type": "inside",
			ref: ne,
			onFocus: (e) => {
				if (d) Zr(G()[0]);
				else if (F != null && F.preserveTabOrder && F.portalNode) if (m && (R.current = !0), bn(e, F.portalNode)) yn(S)?.focus();
				else {
					var t;
					(t = F.afterOutsideRef.current) == null || t.focus();
				}
			}
		})
	] });
}
var Ei = 0, Di = "--floating-ui-scrollbar-width";
function Oi() {
	let e = zt(), t = /iP(hone|ad|od)|iOS/.test(e) || e === "MacIntel" && navigator.maxTouchPoints > 1, n = document.body.style, r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", i = window.innerWidth - document.documentElement.clientWidth, a = n.left ? parseFloat(n.left) : window.scrollX, o = n.top ? parseFloat(n.top) : window.scrollY;
	if (n.overflow = "hidden", n.setProperty(Di, i + "px"), i && (n[r] = i + "px"), t) {
		let e = window.visualViewport?.offsetLeft || 0, t = window.visualViewport?.offsetTop || 0;
		Object.assign(n, {
			position: "fixed",
			top: -(o - Math.floor(t)) + "px",
			left: -(a - Math.floor(e)) + "px",
			right: "0"
		});
	}
	return () => {
		Object.assign(n, {
			overflow: "",
			[r]: ""
		}), n.removeProperty(Di), t && (Object.assign(n, {
			position: "",
			top: "",
			left: "",
			right: ""
		}), window.scrollTo(a, o));
	};
}
var ki = () => {}, Ai = /* @__PURE__ */ s(function(e, t) {
	let { lockScroll: n = !1, ...r } = e;
	return dn(() => {
		if (n) return Ei++, Ei === 1 && (ki = Oi()), () => {
			Ei--, Ei === 0 && ki();
		};
	}, [n]), /* @__PURE__ */ g("div", {
		ref: t,
		...r,
		style: {
			position: "fixed",
			overflow: "auto",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...r.style
		}
	});
});
function ji(e) {
	return Q(e.target) && e.target.tagName === "BUTTON";
}
function Mi(e) {
	return Q(e.target) && e.target.tagName === "A";
}
function Ni(e) {
	return $t(e);
}
function Pi(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, dataRef: i, elements: { domReference: a } } = e, { enabled: o = !0, event: s = "click", toggle: c = !0, ignoreMouse: l = !1, keyboardHandlers: u = !0, stickIfOpen: d = !0 } = t, f = p(), m = p(!1), h = b(() => ({
		onPointerDown(e) {
			f.current = e.pointerType;
		},
		onMouseDown(e) {
			let t = f.current;
			e.button === 0 && s !== "click" && (un(t, !0) && l || (n && c && (!(i.current.openEvent && d) || i.current.openEvent.type === "mousedown") ? r(!1, e.nativeEvent, "click") : (e.preventDefault(), r(!0, e.nativeEvent, "click"))));
		},
		onClick(e) {
			let t = f.current;
			if (s === "mousedown" && f.current) {
				f.current = void 0;
				return;
			}
			un(t, !0) && l || (n && c && (!(i.current.openEvent && d) || i.current.openEvent.type === "click") ? r(!1, e.nativeEvent, "click") : r(!0, e.nativeEvent, "click"));
		},
		onKeyDown(e) {
			f.current = void 0, !(e.defaultPrevented || !u || ji(e)) && (e.key === " " && !Ni(a) && (e.preventDefault(), m.current = !0), !Mi(e) && e.key === "Enter" && r(!(n && c), e.nativeEvent, "click"));
		},
		onKeyUp(e) {
			e.defaultPrevented || !u || ji(e) || Ni(a) || e.key === " " && m.current && (m.current = !1, r(!(n && c), e.nativeEvent, "click"));
		}
	}), [
		i,
		a,
		s,
		l,
		u,
		r,
		n,
		d,
		c
	]);
	return b(() => o ? { reference: h } : {}, [o, h]);
}
var Fi = {
	pointerdown: "onPointerDown",
	mousedown: "onMouseDown",
	click: "onClick"
}, Ii = {
	pointerdown: "onPointerDownCapture",
	mousedown: "onMouseDownCapture",
	click: "onClickCapture"
}, Li = (e) => ({
	escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
	outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
});
function Ri(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, elements: i, dataRef: a } = e, { enabled: s = !0, escapeKey: c = !0, outsidePress: l = !0, outsidePressEvent: u = "pointerdown", referencePress: d = !1, referencePressEvent: f = "pointerdown", ancestorScroll: m = !1, bubbles: h, capture: g } = t, _ = Ur(), v = hn(typeof l == "function" ? l : () => !1), y = typeof l == "function" ? v : l, x = p(!1), { escapeKey: S, outsidePress: C } = Li(h), { escapeKey: w, outsidePress: T } = Li(g), E = p(!1), D = hn((e) => {
		if (!n || !s || !c || e.key !== "Escape" || E.current) return;
		let t = a.current.floatingContext?.nodeId, i = _ ? rn(_.nodesRef.current, t) : [];
		if (!S && (e.stopPropagation(), i.length > 0)) {
			let e = !0;
			if (i.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, sn(e) ? e.nativeEvent : e, "escape-key");
	}), O = hn((e) => {
		var t;
		let n = () => {
			var t;
			D(e), (t = Yt(e)) == null || t.removeEventListener("keydown", n);
		};
		(t = Yt(e)) == null || t.addEventListener("keydown", n);
	}), k = hn((e) => {
		let t = a.current.insideReactTree;
		a.current.insideReactTree = !1;
		let n = x.current;
		if (x.current = !1, u === "click" && n || t || typeof y == "function" && !y(e)) return;
		let o = Yt(e), s = "[" + Wr("inert") + "]", c = Qt(i.floating).querySelectorAll(s), l = Z(o) ? o : null;
		for (; l && !De(l);) {
			let e = Ae(l);
			if (De(e) || !Z(e)) break;
			l = e;
		}
		if (c.length && Z(o) && !Zt(o) && !Jt(o, i.floating) && Array.from(c).every((e) => !Jt(l, e))) return;
		if (Q(o) && M) {
			let t = De(o), n = Oe(o), r = /auto|scroll/, i = t || r.test(n.overflowX), a = t || r.test(n.overflowY), s = i && o.clientWidth > 0 && o.scrollWidth > o.clientWidth, c = a && o.clientHeight > 0 && o.scrollHeight > o.clientHeight, l = n.direction === "rtl", u = c && (l ? e.offsetX <= o.offsetWidth - o.clientWidth : e.offsetX > o.clientWidth), d = s && e.offsetY > o.clientHeight;
			if (u || d) return;
		}
		let d = a.current.floatingContext?.nodeId, f = _ && rn(_.nodesRef.current, d).some((t) => Xt(e, t.context?.elements.floating));
		if (Xt(e, i.floating) || Xt(e, i.domReference) || f) return;
		let p = _ ? rn(_.nodesRef.current, d) : [];
		if (p.length > 0) {
			let e = !0;
			if (p.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, e, "outside-press");
	}), A = hn((e) => {
		var t;
		let n = () => {
			var t;
			k(e), (t = Yt(e)) == null || t.removeEventListener(u, n);
		};
		(t = Yt(e)) == null || t.addEventListener(u, n);
	});
	o(() => {
		if (!n || !s) return;
		a.current.__escapeKeyBubbles = S, a.current.__outsidePressBubbles = C;
		let e = -1;
		function t(e) {
			r(!1, e, "ancestor-scroll");
		}
		function o() {
			window.clearTimeout(e), E.current = !0;
		}
		function l() {
			e = window.setTimeout(() => {
				E.current = !1;
			}, Te() ? 5 : 0);
		}
		let d = Qt(i.floating);
		c && (d.addEventListener("keydown", w ? O : D, w), d.addEventListener("compositionstart", o), d.addEventListener("compositionend", l)), y && d.addEventListener(u, T ? A : k, T);
		let f = [];
		return m && (Z(i.domReference) && (f = Me(i.domReference)), Z(i.floating) && (f = f.concat(Me(i.floating))), !Z(i.reference) && i.reference && i.reference.contextElement && (f = f.concat(Me(i.reference.contextElement)))), f = f.filter((e) => e !== d.defaultView?.visualViewport), f.forEach((e) => {
			e.addEventListener("scroll", t, { passive: !0 });
		}), () => {
			c && (d.removeEventListener("keydown", w ? O : D, w), d.removeEventListener("compositionstart", o), d.removeEventListener("compositionend", l)), y && d.removeEventListener(u, T ? A : k, T), f.forEach((e) => {
				e.removeEventListener("scroll", t);
			}), window.clearTimeout(e);
		};
	}, [
		a,
		i,
		c,
		y,
		u,
		n,
		r,
		m,
		s,
		S,
		C,
		D,
		w,
		O,
		k,
		T,
		A
	]), o(() => {
		a.current.insideReactTree = !1;
	}, [
		a,
		y,
		u
	]);
	let j = b(() => ({
		onKeyDown: D,
		...d && {
			[Fi[f]]: (e) => {
				r(!1, e.nativeEvent, "reference-press");
			},
			...f !== "click" && { onClick(e) {
				r(!1, e.nativeEvent, "reference-press");
			} }
		}
	}), [
		D,
		r,
		d,
		f
	]), M = b(() => ({
		onKeyDown: D,
		onMouseDown() {
			x.current = !0;
		},
		onMouseUp() {
			x.current = !0;
		},
		[Ii[u]]: () => {
			a.current.insideReactTree = !0;
		}
	}), [
		D,
		u,
		a
	]);
	return b(() => s ? {
		reference: j,
		floating: M
	} : {}, [
		s,
		j,
		M
	]);
}
function zi(e) {
	let { open: t = !1, onOpenChange: n, elements: r } = e, i = Pr(), a = p({}), [o] = c(() => zr()), s = Hr() != null;
	if (process.env.NODE_ENV !== "production") {
		let e = r.reference;
		e && !Z(e) && Lr("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
	}
	let [l, u] = c(r.reference), d = hn((e, t, r) => {
		a.current.openEvent = e ? t : void 0, o.emit("openchange", {
			open: e,
			event: t,
			reason: r,
			nested: s
		}), n?.(e, t, r);
	}), f = b(() => ({ setPositionReference: u }), []), m = b(() => ({
		reference: l || r.reference || null,
		floating: r.floating || null,
		domReference: r.reference
	}), [
		l,
		r.reference,
		r.floating
	]);
	return b(() => ({
		dataRef: a,
		open: t,
		onOpenChange: d,
		elements: m,
		events: o,
		floatingId: i,
		refs: f
	}), [
		t,
		d,
		m,
		o,
		i,
		f
	]);
}
function Bi(e) {
	e === void 0 && (e = {});
	let { nodeId: n } = e, r = zi({
		...e,
		elements: {
			reference: null,
			floating: null,
			...e.elements
		}
	}), i = e.rootContext || r, a = i.elements, [o, s] = c(null), [l, u] = c(null), d = a?.domReference || o, f = p(null), m = Ur();
	dn(() => {
		d && (f.current = d);
	}, [d]);
	let h = yr({
		...e,
		elements: {
			...a,
			...l && { reference: l }
		}
	}), g = t((e) => {
		let t = Z(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		u(t), h.refs.setReference(t);
	}, [h.refs]), _ = t((e) => {
		(Z(e) || e === null) && (f.current = e, s(e)), (Z(h.refs.reference.current) || h.refs.reference.current === null || e !== null && !Z(e)) && h.refs.setReference(e);
	}, [h.refs]), v = b(() => ({
		...h.refs,
		setReference: _,
		setPositionReference: g,
		domReference: f
	}), [
		h.refs,
		_,
		g
	]), y = b(() => ({
		...h.elements,
		domReference: d
	}), [h.elements, d]), x = b(() => ({
		...h,
		...i,
		refs: v,
		elements: y,
		nodeId: n
	}), [
		h,
		v,
		y,
		n,
		i
	]);
	return dn(() => {
		i.dataRef.current.floatingContext = x;
		let e = m?.nodesRef.current.find((e) => e.id === n);
		e && (e.context = x);
	}), b(() => ({
		...h,
		context: x,
		refs: v,
		elements: y
	}), [
		h,
		v,
		y,
		x
	]);
}
function Vi() {
	return Ut() && Vt();
}
function Hi(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, events: i, dataRef: a, elements: s } = e, { enabled: c = !0, visibleOnly: l = !0 } = t, u = p(!1), d = p(-1), f = p(!0);
	o(() => {
		if (!c) return;
		let e = Y(s.domReference);
		function t() {
			!n && Q(s.domReference) && s.domReference === qt(Qt(s.domReference)) && (u.current = !0);
		}
		function r() {
			f.current = !0;
		}
		function i() {
			f.current = !1;
		}
		return e.addEventListener("blur", t), Vi() && (e.addEventListener("keydown", r, !0), e.addEventListener("pointerdown", i, !0)), () => {
			e.removeEventListener("blur", t), Vi() && (e.removeEventListener("keydown", r, !0), e.removeEventListener("pointerdown", i, !0));
		};
	}, [
		s.domReference,
		n,
		c
	]), o(() => {
		if (!c) return;
		function e(e) {
			let { reason: t } = e;
			(t === "reference-press" || t === "escape-key") && (u.current = !0);
		}
		return i.on("openchange", e), () => {
			i.off("openchange", e);
		};
	}, [i, c]), o(() => () => {
		Gr(d);
	}, []);
	let m = b(() => ({
		onMouseLeave() {
			u.current = !1;
		},
		onFocus(e) {
			if (u.current) return;
			let t = Yt(e.nativeEvent);
			if (l && Z(t)) {
				if (Vi() && !e.relatedTarget) {
					if (!f.current && !$t(t)) return;
				} else if (!tn(t)) return;
			}
			r(!0, e.nativeEvent, "focus");
		},
		onBlur(e) {
			u.current = !1;
			let t = e.relatedTarget, n = e.nativeEvent, i = Z(t) && t.hasAttribute(Wr("focus-guard")) && t.getAttribute("data-type") === "outside";
			d.current = window.setTimeout(() => {
				let e = qt(s.domReference ? s.domReference.ownerDocument : document);
				!t && e === s.domReference || Jt(a.current.floatingContext?.refs.floating.current, e) || Jt(s.domReference, e) || i || r(!1, n, "focus");
			});
		}
	}), [
		a,
		s.domReference,
		r,
		l
	]);
	return b(() => c ? { reference: m } : {}, [c, m]);
}
function Ui(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = e;
	if (i && e) {
		let { [Dr]: t, [Or]: n, ...r } = e;
		a = r;
	}
	return {
		...n === "floating" && {
			tabIndex: -1,
			[Er]: ""
		},
		...a,
		...t.map((t) => {
			let r = t ? t[n] : null;
			return typeof r == "function" ? e ? r(e) : null : r;
		}).concat(e).reduce((e, t) => (t && Object.entries(t).forEach((t) => {
			let [n, a] = t;
			if (!(i && [Dr, Or].includes(n))) if (n.indexOf("on") === 0) {
				if (r.has(n) || r.set(n, []), typeof a == "function") {
					var o;
					(o = r.get(n)) == null || o.push(a), e[n] = function() {
						var e = [...arguments];
						return r.get(n)?.map((t) => t(...e)).find((e) => e !== void 0);
					};
				}
			} else e[n] = a;
		}), e), {})
	};
}
function Wi(e) {
	e === void 0 && (e = []);
	let n = e.map((e) => e?.reference), r = e.map((e) => e?.floating), i = e.map((e) => e?.item), a = t((t) => Ui(t, e, "reference"), n), o = t((t) => Ui(t, e, "floating"), r), s = t((t) => Ui(t, e, "item"), i);
	return b(() => ({
		getReferenceProps: a,
		getFloatingProps: o,
		getItemProps: s
	}), [
		a,
		o,
		s
	]);
}
var Gi = /* @__PURE__ */ new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1]
]);
function Ki(e, n) {
	n === void 0 && (n = {});
	let { open: r, elements: i, floatingId: a } = e, { enabled: o = !0, role: s = "dialog" } = n, c = Pr(), l = i.domReference?.id || c, u = b(() => nn(i.floating)?.id || a, [i.floating, a]), d = Gi.get(s) ?? s, f = Hr() != null, p = b(() => d === "tooltip" || s === "label" ? { ["aria-" + (s === "label" ? "labelledby" : "describedby")]: r ? u : void 0 } : {
		"aria-expanded": r ? "true" : "false",
		"aria-haspopup": d === "alertdialog" ? "dialog" : d,
		"aria-controls": r ? u : void 0,
		...d === "listbox" && { role: "combobox" },
		...d === "menu" && { id: l },
		...d === "menu" && f && { role: "menuitem" },
		...s === "select" && { "aria-autocomplete": "none" },
		...s === "combobox" && { "aria-autocomplete": "list" }
	}, [
		d,
		u,
		f,
		r,
		l,
		s
	]), m = b(() => {
		let e = {
			id: u,
			...d && { role: d }
		};
		return d === "tooltip" || s === "label" ? e : {
			...e,
			...d === "menu" && { "aria-labelledby": l }
		};
	}, [
		d,
		u,
		l,
		s
	]), h = t((e) => {
		let { active: t, selected: n } = e, r = {
			role: "option",
			...t && { id: u + "-fui-option" }
		};
		switch (s) {
			case "select":
			case "combobox": return {
				...r,
				"aria-selected": n
			};
		}
		return {};
	}, [u, s]);
	return b(() => o ? {
		reference: p,
		floating: m,
		item: h
	} : {}, [
		o,
		p,
		m,
		h
	]);
}
function qi(e, t) {
	let [n, r] = c(e);
	return e && !n && r(!0), o(() => {
		if (!e && n) {
			let e = setTimeout(() => r(!1), t);
			return () => clearTimeout(e);
		}
	}, [
		e,
		n,
		t
	]), n;
}
function Ji(e, t) {
	t === void 0 && (t = {});
	let { open: n, elements: { floating: r } } = e, { duration: i = 250 } = t, a = (typeof i == "number" ? i : i.close) || 0, [o, s] = c("unmounted"), u = qi(n, a);
	return !u && o === "close" && s("unmounted"), dn(() => {
		if (r) {
			if (n) {
				s("initial");
				let e = requestAnimationFrame(() => {
					l(() => {
						s("open");
					});
				});
				return () => {
					cancelAnimationFrame(e);
				};
			}
			s("close");
		}
	}, [n, r]), {
		isMounted: u,
		status: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/useIsomorphicLayoutEffect.CnJ9AMFS.js
d();
var Yi = F ? C : o;
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/tooltip.C6HKano9.js
d();
var Xi = { tooltip: "ds-tooltip_tooltip_503ch_5" };
function Zi(e) {
	let t = D.c(24), { initialOpen: n, placement: r, isOpen: i, tooltipOffset: a, onOpenChange: o } = e === void 0 ? {} : e, s = n === void 0 ? !1 : n, l = r === void 0 ? "top" : r, u = a === void 0 ? 6 : a, [d, f] = c(s), p = i ?? d, m = o ?? f, h = cr, g = xr(u), _ = Cr({
		crossAxis: l.includes("-"),
		fallbackAxisSideDirection: "start",
		padding: u
	}), v = Sr({ padding: u }), y;
	t[0] !== g || t[1] !== _ || t[2] !== v ? (y = [
		g,
		_,
		v
	], t[0] = g, t[1] = _, t[2] = v, t[3] = y) : y = t[3];
	let b;
	t[4] !== p || t[5] !== l || t[6] !== m || t[7] !== h || t[8] !== y ? (b = {
		placement: l,
		open: p,
		strategy: "fixed",
		onOpenChange: m,
		whileElementsMounted: h,
		middleware: y
	}, t[4] = p, t[5] = l, t[6] = m, t[7] = h, t[8] = y, t[9] = b) : b = t[9];
	let x = Bi(b), S = x.context, C;
	t[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = {
		move: !1,
		enabled: !0,
		mouseOnly: !0,
		delay: {
			open: 400,
			close: 0
		}
	}, t[10] = C) : C = t[10];
	let w = Yr(S, C), T;
	t[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = { enabled: !0 }, t[11] = T) : T = t[11];
	let E = Hi(S, T), O = Ri(S), k;
	t[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = { role: "tooltip" }, t[12] = k) : k = t[12];
	let A = Ki(S, k), j;
	t[13] !== O || t[14] !== E || t[15] !== w || t[16] !== A ? (j = [
		w,
		E,
		O,
		A
	], t[13] = O, t[14] = E, t[15] = w, t[16] = A, t[17] = j) : j = t[17];
	let M = Wi(j), N;
	return t[18] !== x || t[19] !== M || t[20] !== p || t[21] !== m || t[22] !== u ? (N = {
		open: p,
		tooltipOffset: u,
		setOpen: m,
		...M,
		...x
	}, t[18] = x, t[19] = M, t[20] = p, t[21] = m, t[22] = u, t[23] = N) : N = t[23], N;
}
var Qi = (e) => {
	if (!u(e)) throw Error(L("Tooltip", "Tooltip.Anchor child must be a valid React element."));
}, $i = ({ children: e, hasContent: t, hasAnchor: n }) => {
	if (!e) throw Error(L("Tooltip", "A Tooltip must have children."));
	if (!t) throw Error(L("Tooltip", "A Tooltip must have a <Tooltip.Content> component as a child. Please add it to the children of Tooltip."));
	if (!n) throw Error(L("Tooltip", "A Tooltip must have a <Tooltip.Anchor> component as a child. Please add it to the children of Tooltip."));
}, ea = r(null), ta = () => {
	let e = S(ea);
	if (e == null) throw Error(L("Tooltip", "Components like Tooltip.Anchor or Tooltip.Content must be wrapped in <Tooltip />."));
	return e;
}, na = (e) => {
	let t = D.c(9), n, r;
	t[0] === e ? (n = t[1], r = t[2]) : ({children: n, ...r} = e, t[0] = e, t[1] = n, t[2] = r);
	let i;
	t[3] === r ? i = t[4] : (i = { ...r }, t[3] = r, t[4] = i);
	let a = Zi(i), o = B(n, na.Content), s = B(n, ra);
	process.env.NODE_ENV !== "production" && $i({
		children: n,
		hasContent: o,
		hasAnchor: s
	});
	let c;
	return t[5] !== n || t[6] !== r || t[7] !== a ? (c = /* @__PURE__ */ g(ea.Provider, {
		value: a,
		...r,
		children: n
	}), t[5] = n, t[6] = r, t[7] = a, t[8] = c) : c = t[8], c;
}, ra = s((e, t) => {
	let n = D.c(4), { children: r, ...i } = e;
	process.env.NODE_ENV !== "production" && Qi(r);
	let a = ta(), o = u(r) ? r.ref : null, s;
	n[0] !== o || n[1] !== a.refs.setReference || n[2] !== t ? (s = [
		a.refs.setReference,
		t,
		o
	], n[0] = o, n[1] = a.refs.setReference, n[2] = t, n[3] = s) : s = n[3];
	let c = Tr(s);
	if (u(r)) return _(r, a.getReferenceProps({
		...r.props,
		...i,
		ref: c,
		"data-state": a.open ? "open" : "closed"
	}));
});
ra.displayName = "Tooltip.Anchor";
var ia = s((e, t) => {
	let n = D.c(30), { style: r, className: i, children: a, ...o } = e, s = ta(), l, u, d, f;
	n[0] === s ? (l = n[1], u = n[2], d = n[3], f = n[4]) : ({context: l, floatingStyles: u, getFloatingProps: d, ...f} = s, n[0] = s, n[1] = l, n[2] = u, n[3] = d, n[4] = f);
	let p;
	n[5] !== t || n[6] !== f.refs.setFloating ? (p = [f.refs.setFloating, t], n[5] = t, n[6] = f.refs.setFloating, n[7] = p) : p = n[7];
	let m = Tr(p), h;
	n[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { duration: {
		open: 400,
		close: 100
	} }, n[8] = h) : h = n[8];
	let { isMounted: _, status: v } = Ji(l, h), [y, b] = c(null), x;
	n[9] === f.refs.reference.current ? x = n[10] : (x = () => {
		let e = f.refs.reference.current?.closest("dialog");
		b(e instanceof HTMLDialogElement ? e : null);
	}, n[9] = f.refs.reference.current, n[10] = x);
	let S;
	if (n[11] !== l.open || n[12] !== f.refs.reference ? (S = [f.refs.reference, l.open], n[11] = l.open, n[12] = f.refs.reference, n[13] = S) : S = n[13], Yi(x, S), !_) return null;
	let C = mi, w = y ?? void 0, T;
	n[14] !== u || n[15] !== r ? (T = {
		...u,
		...r
	}, n[14] = u, n[15] = r, n[16] = T) : T = n[16];
	let E;
	n[17] === i ? E = n[18] : (E = M(Xi.tooltip, i), n[17] = i, n[18] = E);
	let O = d(o), k;
	n[19] !== a || n[20] !== m || n[21] !== v || n[22] !== T || n[23] !== E || n[24] !== O ? (k = /* @__PURE__ */ g("div", {
		ref: m,
		style: T,
		className: E,
		...O,
		"data-status": v,
		children: a
	}), n[19] = a, n[20] = m, n[21] = v, n[22] = T, n[23] = E, n[24] = O, n[25] = k) : k = n[25];
	let A;
	return n[26] !== C || n[27] !== k || n[28] !== w ? (A = /* @__PURE__ */ g(C, {
		root: w,
		children: k
	}), n[26] = C, n[27] = k, n[28] = w, n[29] = A) : A = n[29], A;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/ActionButton.CCI5IUFy.js
ia.displayName = "Tooltip.Content", na.Anchor = ra, na.Content = ia, na.displayName = "Tooltip", d();
var aa = {
	root: "ds-action-button_root_19zdv_1",
	rootIndentLevel1: "ds-action-button_root--indent-level-1_19zdv_75",
	rootActive: "ds-action-button_root--active_19zdv_78",
	rootActiveWithMarker: "ds-action-button_root--active--with-marker_19zdv_81",
	rootIconTop: "ds-action-button_root--icon--top_19zdv_84",
	rootStretched: "ds-action-button_root--stretched_19zdv_110",
	activeMarker: "ds-action-button_active-marker_19zdv_115",
	activeMarkerWithIndent: "ds-action-button_active-marker--with-indent_19zdv_127",
	iconWrapper: "ds-action-button_icon-wrapper_19zdv_131",
	iconWrapperXLarge: "ds-action-button_icon-wrapper--x-large_19zdv_134",
	iconWrapperWithNumberIndicator: "ds-action-button_icon-wrapper--with-number-indicator_19zdv_137",
	iconWrapperWithNumberIndicatorWithValue: "ds-action-button_icon-wrapper--with-number-indicator--with-value_19zdv_145",
	label: "ds-action-button_label_19zdv_149",
	labelBold: "ds-action-button_label--bold_19zdv_160",
	labelActive: "ds-action-button_label--active_19zdv_171",
	labelIconTop: "ds-action-button_label--icon-top_19zdv_182",
	numberIndicator: "ds-action-button_number-indicator_19zdv_205",
	labelWrapper: "ds-action-button_label-wrapper_19zdv_209",
	labelWrapperIconTop: "ds-action-button_label-wrapper--icon-top_19zdv_214",
	chevron: "ds-action-button_chevron_19zdv_218",
	chevronIconPositionTop: "ds-action-button_chevron--icon-position-top_19zdv_233",
	chevronUp: "ds-action-button_chevron--up_19zdv_239",
	chevronRight: "ds-action-button_chevron--right_19zdv_250",
	chevronLeft: "ds-action-button_chevron--left_19zdv_261"
}, oa = ({ iconName: e, iconSize: t, iconSource: n, iconPosition: r, indentLevel: i, stretched: a, weight: o, numberIndicatorValue: s, numberIndicatorAriaLabel: c }) => {
	if (e && !n && t === "x-large" && console.warn(L("DSActionButton", "An \"iconSize\" prop set to \"x-large\" has no effect when \"iconName\" is set. Please remove the \"iconSize\" prop or provide a custom icon via the \"iconSource\" prop.")), r === "top") {
		if (!e && !n) throw Error(L("DSActionButton", "The \"iconPosition\" prop should not be set to \"top\", when no \"iconName\" or \"iconSource\" prop was provided. Please either remove the \"iconPosition\" prop or set a valid icon via the \"iconName\" or \"iconSource\" prop."));
		t === "x-large" && console.warn(L("DSActionButton", "An \"iconSize\" prop set to \"x-large\" has no effect when \"iconPosition\" is set to \"top\". Please remove the \"iconSize\" prop.")), o === "bold" && console.warn(L("DSActionButton", "A \"weight\" prop set to \"bold\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"weight\" prop.")), i === 1 && console.warn(L("DSActionButton", "An \"indentLevel\" prop set to \"1\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"indentLevel\" prop.")), a && console.warn(L("DSActionButton", "A \"stretched\" prop set to \"true\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"stretched\" prop."));
	}
	(s || s === "") && !c && console.warn(L("DSActionButton", "Please provide a descriptive aria-label for the Number Indicator for better accessibility."));
}, sa = s((e, t) => {
	let n = D.c(96), r, a, o, s, c, l, u, d, f, p, m, h, _, v, y, b, x, S;
	n[0] === e ? (r = n[1], a = n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = n[7], d = n[8], f = n[9], p = n[10], m = n[11], h = n[12], _ = n[13], v = n[14], y = n[15], b = n[16], x = n[17], S = n[18]) : ({children: o, aria: r, chevronDirection: a, className: s, disabled: m, iconName: c, iconPosition: h, iconSize: _, iconSource: l, indentLevel: v, isActive: y, numberIndicatorValue: d, numberIndicatorAriaLabel: u, stretched: b, weight: x, tooltip: S, onClick: f, ...p} = e, n[0] = e, n[1] = r, n[2] = a, n[3] = o, n[4] = s, n[5] = c, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = p, n[11] = m, n[12] = h, n[13] = _, n[14] = v, n[15] = y, n[16] = b, n[17] = x, n[18] = S);
	let C = m === void 0 ? !1 : m, w = h === void 0 ? "left" : h, T = _ === void 0 ? "large" : _, E = v === void 0 ? 0 : v, O = y === void 0 ? !1 : y, k = b === void 0 ? !1 : b, A = x === void 0 ? "normal" : x;
	process.env.NODE_ENV !== "production" && oa({
		iconName: c,
		iconSize: T,
		iconSource: l,
		iconPosition: w,
		indentLevel: E,
		numberIndicatorValue: d,
		numberIndicatorAriaLabel: u,
		stretched: k,
		weight: A
	});
	let j;
	n[19] === d ? j = n[20] : (j = d?.trim(), n[19] = d, n[20] = j);
	let N = j === "", P = w === "top", F = E === 1, I = O && !C, L = O && !C && w === "left", R = k === !0 && w === "left", z;
	n[21] !== s || n[22] !== F || n[23] !== I || n[24] !== L || n[25] !== R || n[26] !== P ? (z = M(aa.root, s, {
		[aa.rootIconTop]: P,
		[aa.rootIndentLevel1]: F,
		[aa.rootActive]: I,
		[aa.rootActiveWithMarker]: L,
		[aa.rootStretched]: R
	}), n[21] = s, n[22] = F, n[23] = I, n[24] = L, n[25] = R, n[26] = P, n[27] = z) : z = n[27];
	let B = z, V = E === 1, H;
	n[28] === V ? H = n[29] : (H = M(aa.activeMarker, { [aa.activeMarkerWithIndent]: V }), n[28] = V, n[29] = H);
	let U = H, W = O && !C, G = A === "bold", ee = w === "top", K;
	n[30] !== W || n[31] !== G || n[32] !== ee ? (K = M(aa.label, {
		[aa.labelActive]: W,
		[aa.labelBold]: G,
		[aa.labelIconTop]: ee
	}), n[30] = W, n[31] = G, n[32] = ee, n[33] = K) : K = n[33];
	let te = K, ne = w === "top", re;
	n[34] === ne ? re = n[35] : (re = M(aa.labelWrapper, { [aa.labelWrapperIconTop]: ne }), n[34] = ne, n[35] = re);
	let ie = re, ae = w === "top", se = a === "up", q = a === "right", le = a === "left", ue;
	n[36] !== ae || n[37] !== se || n[38] !== q || n[39] !== le ? (ue = M(aa.chevron, {
		[aa.chevronIconPositionTop]: ae,
		[aa.chevronUp]: se,
		[aa.chevronRight]: q,
		[aa.chevronLeft]: le
	}), n[36] = ae, n[37] = se, n[38] = q, n[39] = le, n[40] = ue) : ue = n[40];
	let de = ue, J = T === "x-large", Y = (c || l) && (d || N), X = (c || l) && !N, fe;
	n[41] !== J || n[42] !== Y || n[43] !== X ? (fe = M(aa.iconWrapper, {
		[aa.iconWrapperXLarge]: J,
		[aa.iconWrapperWithNumberIndicator]: Y,
		[aa.iconWrapperWithNumberIndicatorWithValue]: X
	}), n[41] = J, n[42] = Y, n[43] = X, n[44] = fe) : fe = n[44];
	let Z = fe, Q;
	n[45] !== C || n[46] !== f ? (Q = (e) => {
		if (C) {
			e.preventDefault();
			return;
		}
		f && f(e);
	}, n[45] = C, n[46] = f, n[47] = Q) : Q = n[47];
	let pe = Q, me;
	n[48] !== U || n[49] !== w || n[50] !== O ? (me = O && w === "left" && /* @__PURE__ */ g("div", { className: U }), n[48] = U, n[49] = w, n[50] = O, n[51] = me) : me = n[51];
	let he;
	n[52] !== C || n[53] !== c || n[54] !== w || n[55] !== T || n[56] !== l || n[57] !== Z || n[58] !== N || n[59] !== u || n[60] !== d ? (he = (c || l) && /* @__PURE__ */ g(i, { children: /* @__PURE__ */ g("span", {
		className: Z,
		children: [/* @__PURE__ */ g(oe, {
			name: c,
			theme: "light",
			source: l,
			"aria-hidden": "true",
			size: c || w === "top" ? "large" : T
		}), !C && (w === "left" && N || w === "top" && (d || N)) && /* @__PURE__ */ g(ce, {
			variant: "highlight",
			"aria-label": u,
			label: d
		})]
	}) }), n[52] = C, n[53] = c, n[54] = w, n[55] = T, n[56] = l, n[57] = Z, n[58] = N, n[59] = u, n[60] = d, n[61] = he) : he = n[61];
	let ge;
	n[62] !== o || n[63] !== te ? (ge = /* @__PURE__ */ g("span", {
		className: te,
		children: o
	}), n[62] = o, n[63] = te, n[64] = ge) : ge = n[64];
	let _e;
	n[65] !== de || n[66] !== a ? (_e = a && /* @__PURE__ */ g(oe, {
		name: "chevron-down",
		theme: "light",
		"aria-hidden": "true",
		className: de
	}), n[65] = de, n[66] = a, n[67] = _e) : _e = n[67];
	let ve;
	n[68] !== ie || n[69] !== ge || n[70] !== _e ? (ve = /* @__PURE__ */ g("div", {
		className: ie,
		children: [ge, _e]
	}), n[68] = ie, n[69] = ge, n[70] = _e, n[71] = ve) : ve = n[71];
	let ye;
	n[72] !== C || n[73] !== w || n[74] !== N || n[75] !== u || n[76] !== d ? (ye = w === "left" && !C && d && !N && /* @__PURE__ */ g(ce, {
		variant: "default",
		"aria-label": u,
		label: d,
		className: aa.numberIndicator
	}), n[72] = C, n[73] = w, n[74] = N, n[75] = u, n[76] = d, n[77] = ye) : ye = n[77];
	let be;
	n[78] !== r || n[79] !== C || n[80] !== pe || n[81] !== t || n[82] !== p || n[83] !== B || n[84] !== me || n[85] !== he || n[86] !== ve || n[87] !== ye ? (be = /* @__PURE__ */ g("button", {
		className: B,
		type: "button",
		onClick: pe,
		...r,
		...p,
		"aria-disabled": C,
		ref: t,
		children: [
			me,
			he,
			ve,
			ye
		]
	}), n[78] = r, n[79] = C, n[80] = pe, n[81] = t, n[82] = p, n[83] = B, n[84] = me, n[85] = he, n[86] = ve, n[87] = ye, n[88] = be) : be = n[88];
	let xe = be;
	if (S) {
		let e;
		n[89] === xe ? e = n[90] : (e = /* @__PURE__ */ g(na.Anchor, { children: xe }), n[89] = xe, n[90] = e);
		let t;
		n[91] === S ? t = n[92] : (t = /* @__PURE__ */ g(na.Content, { children: S }), n[91] = S, n[92] = t);
		let r;
		return n[93] !== e || n[94] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[93] = e, n[94] = t, n[95] = r) : r = n[95], r;
	}
	return xe;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/ActionCard.DJSGkwVG.js
sa.displayName = "DSActionButton", d();
var ca = {
	root: "ds-action-card_root_19077_1",
	rootElevated: "ds-action-card_root--elevated_19077_24",
	rootClickable: "ds-action-card_root--clickable_19077_27",
	primaryAction: "ds-action-card_primary-action_19077_36",
	mediaWrapper: "ds-action-card_media-wrapper_19077_50",
	header: "ds-action-card_header_19077_50",
	footer: "ds-action-card_footer_19077_50",
	supplementary: "ds-action-card_supplementary_19077_50",
	rootHorizontal: "ds-action-card_root--horizontal_19077_59",
	content: "ds-action-card_content_19077_78",
	contentPaddingSmall: "ds-action-card_content--padding-small_19077_83",
	rootHorizontalHasSupplementary: "ds-action-card_root--horizontal-has-supplementary_19077_91",
	rootPaddingSmall: "ds-action-card_root--padding-small_19077_94",
	primaryActionLabel: "ds-action-card_primary-action-label_19077_174"
}, la = ({ aria: e, cardElement: t }) => {
	let n = e?.["aria-labelledby"], r = e?.["aria-label"];
	if (t) {
		if (!n && !r) throw Error(L("DSActionCard", "The 'aria' prop is required and must include either 'aria-labelledby' or 'aria-label'."));
		if (n && !t.querySelector("#" + n)) throw Error(L("DSActionCard", `The provided 'aria-labelledby' value '${n}' does not match any element ID within the card.`));
	}
}, ua = (e, t) => {
	let n = [];
	return y.Children.forEach(e, (e) => {
		if (!u(e)) return;
		let r = e.type, i = t, a = i.displayName || i.name, o = r.displayName || r.name;
		(e.type === t || o === a) && n.push(e);
	}), n;
}, da = (e) => {
	let t = D.c(47), n, r, i, a, s, c, l, u;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], s = t[5], c = t[6], l = t[7], u = t[8]) : ({aria: n, className: i, classNameContentWrapper: a, children: r, orientation: c, padding: l, variant: u, ...s} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = s, t[6] = c, t[7] = l, t[8] = u);
	let d = c === void 0 ? "vertical" : c, f = l === void 0 ? "medium" : l, m = u === void 0 ? "outlined" : u, h = p(null), _;
	t[9] === r ? _ = t[10] : (_ = ua(r, fa), t[9] = r, t[10] = _);
	let v = _, y;
	t[11] === r ? y = t[12] : (y = ua(r, pa), t[11] = r, t[12] = y);
	let b = y, x;
	t[13] === r ? x = t[14] : (x = ua(r, ha), t[13] = r, t[14] = x);
	let S = x, C;
	t[15] === r ? C = t[16] : (C = ua(r, ma), t[15] = r, t[16] = C);
	let w = C, T;
	t[17] === r ? T = t[18] : (T = ua(r, ga), t[17] = r, t[18] = T);
	let E = T, O = E.length > 0, k = d === "horizontal", A = f === "small", j = d === "horizontal" && S.length > 0, N = m === "elevated", P;
	t[19] !== i || t[20] !== O || t[21] !== A || t[22] !== j || t[23] !== N || t[24] !== k ? (P = M(ca.root, i, {
		[ca.rootHorizontal]: k,
		[ca.rootPaddingSmall]: A,
		[ca.rootHorizontalHasSupplementary]: j,
		[ca.rootClickable]: O,
		[ca.rootElevated]: N
	}), t[19] = i, t[20] = O, t[21] = A, t[22] = j, t[23] = N, t[24] = k, t[25] = P) : P = t[25];
	let F = P, I = f === "small", L;
	t[26] !== a || t[27] !== I ? (L = M(ca.content, a, { [ca.contentPaddingSmall]: I }), t[26] = a, t[27] = I, t[28] = L) : L = t[28];
	let R = L, z;
	t[29] === n ? z = t[30] : (z = () => {
		let e = h.current;
		process.env.NODE_ENV !== "production" && la({
			aria: n,
			cardElement: e
		});
	}, t[29] = n, t[30] = z);
	let B = n?.["aria-labelledby"], V = n?.["aria-label"], H;
	t[31] !== B || t[32] !== V ? (H = [B, V], t[31] = B, t[32] = V, t[33] = H) : H = t[33], o(z, H);
	let U = n?.["aria-labelledby"], W = n?.["aria-label"], G;
	t[34] !== R || t[35] !== b || t[36] !== v ? (G = /* @__PURE__ */ g("div", {
		className: R,
		children: [v, b]
	}), t[34] = R, t[35] = b, t[36] = v, t[37] = G) : G = t[37];
	let ee;
	return t[38] !== w || t[39] !== E || t[40] !== s || t[41] !== F || t[42] !== S || t[43] !== U || t[44] !== W || t[45] !== G ? (ee = /* @__PURE__ */ g("article", {
		...s,
		"aria-labelledby": U,
		"aria-label": W,
		ref: h,
		className: F,
		children: [
			E,
			G,
			S,
			w
		]
	}), t[38] = w, t[39] = E, t[40] = s, t[41] = F, t[42] = S, t[43] = U, t[44] = W, t[45] = G, t[46] = ee) : ee = t[46], ee;
}, fa = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(ca.header, r) || void 0, t[0] = r, t[1] = i);
	let a = i, o;
	return t[2] !== n || t[3] !== a ? (o = /* @__PURE__ */ g("header", {
		className: a,
		children: n
	}), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o;
};
fa.displayName = "DSActionCard.Header";
var pa = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(ca.footer, r) || void 0, t[0] = r, t[1] = i);
	let a = i, o;
	return t[2] !== n || t[3] !== a ? (o = /* @__PURE__ */ g("footer", {
		className: a,
		children: n
	}), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o;
};
pa.displayName = "DSActionCard.Footer";
var ma = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(ca.mediaWrapper, r) || void 0, t[0] = r, t[1] = i);
	let a = i, o;
	return t[2] !== n || t[3] !== a ? (o = /* @__PURE__ */ g("div", {
		className: a,
		children: n
	}), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o;
};
ma.displayName = "DSActionCard.Media";
var ha = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(ca.supplementary, r) || void 0, t[0] = r, t[1] = i);
	let a = i, o;
	return t[2] !== n || t[3] !== a ? (o = /* @__PURE__ */ g("div", {
		className: a,
		children: n
	}), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o;
};
ha.displayName = "DSActionCard.Supplementary";
var ga = (e) => {
	let t = D.c(56), n, r, a, o, s, c;
	t[0] === e ? (n = t[1], r = t[2], a = t[3], o = t[4], s = t[5], c = t[6]) : ({children: n, className: r, href: a, linkComponent: o, onClick: s, ...c} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c);
	let l, d, f, p, m, h, v, y, b, x;
	if (t[7] !== n || t[8] !== r || t[9] !== o || t[10] !== c) {
		y = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
		e: {
			p = M(ca.primaryAction, r) || void 0;
			let e = c;
			if (t[21] === e ? (l = t[22], d = t[23], f = t[24], m = t[25], h = t[26], v = t[27], b = t[28], x = t[29]) : ({download: d, hrefLang: f, ping: m, referrerPolicy: h, rel: v, target: b, type: x, ...l} = e, t[21] = e, t[22] = l, t[23] = d, t[24] = f, t[25] = m, t[26] = h, t[27] = v, t[28] = b, t[29] = x), o && u(o)) {
				let e;
				t[30] === n ? e = t[31] : (e = /* @__PURE__ */ g("span", {
					className: ca.primaryActionLabel,
					children: n
				}), t[30] = n, t[31] = e);
				let r;
				t[32] !== o.props.children || t[33] !== e ? (r = /* @__PURE__ */ g(i, { children: [e, o.props.children] }), t[32] = o.props.children, t[33] = e, t[34] = r) : r = t[34], y = _(o, {
					...o.props,
					className: M(p, o.props.className),
					children: r
				});
				break e;
			}
		}
		t[7] = n, t[8] = r, t[9] = o, t[10] = c, t[11] = l, t[12] = d, t[13] = f, t[14] = p, t[15] = m, t[16] = h, t[17] = v, t[18] = y, t[19] = b, t[20] = x;
	} else l = t[11], d = t[12], f = t[13], p = t[14], m = t[15], h = t[16], v = t[17], y = t[18], b = t[19], x = t[20];
	if (y !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return y;
	if (a) {
		let e;
		t[35] === n ? e = t[36] : (e = /* @__PURE__ */ g("span", {
			className: ca.primaryActionLabel,
			children: n
		}), t[35] = n, t[36] = e);
		let r;
		return t[37] !== l || t[38] !== d || t[39] !== a || t[40] !== f || t[41] !== p || t[42] !== m || t[43] !== h || t[44] !== v || t[45] !== e || t[46] !== b || t[47] !== x ? (r = /* @__PURE__ */ g("a", {
			href: a,
			className: p,
			download: d,
			hrefLang: f,
			ping: m,
			referrerPolicy: h,
			rel: v,
			target: b,
			type: x,
			...l,
			children: e
		}), t[37] = l, t[38] = d, t[39] = a, t[40] = f, t[41] = p, t[42] = m, t[43] = h, t[44] = v, t[45] = e, t[46] = b, t[47] = x, t[48] = r) : r = t[48], r;
	}
	if (s) {
		let e;
		t[49] === n ? e = t[50] : (e = /* @__PURE__ */ g("span", {
			className: ca.primaryActionLabel,
			children: n
		}), t[49] = n, t[50] = e);
		let r;
		return t[51] !== l || t[52] !== p || t[53] !== s || t[54] !== e ? (r = /* @__PURE__ */ g("button", {
			type: "button",
			className: p,
			onClick: s,
			...l,
			children: e
		}), t[51] = l, t[52] = p, t[53] = s, t[54] = e, t[55] = r) : r = t[55], r;
	}
	return null;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/ActionLink.BrJB7T0A.js
ga.displayName = "DSActionCard.PrimaryAction", da.Header = fa, da.Footer = pa, da.Media = ma, da.PrimaryAction = ga, da.Supplementary = ha, da.displayName = "DSActionCard", d();
var _a = {
	root: "ds-action-link_root_o08fb_1",
	rootIndentLevel1: "ds-action-link_root--indent-level-1_o08fb_75",
	rootActive: "ds-action-link_root--active_o08fb_78",
	rootActiveWithMarker: "ds-action-link_root--active--with-marker_o08fb_81",
	rootIconTop: "ds-action-link_root--icon--top_o08fb_84",
	rootStretched: "ds-action-link_root--stretched_o08fb_110",
	activeMarker: "ds-action-link_active-marker_o08fb_115",
	activeMarkerWithIndent: "ds-action-link_active-marker--with-indent_o08fb_127",
	iconWrapper: "ds-action-link_icon-wrapper_o08fb_131",
	iconWrapperXLarge: "ds-action-link_icon-wrapper--x-large_o08fb_134",
	iconWrapperWithNumberIndicator: "ds-action-link_icon-wrapper--with-number-indicator_o08fb_137",
	iconWrapperWithNumberIndicatorWithValue: "ds-action-link_icon-wrapper--with-number-indicator--with-value_o08fb_145",
	label: "ds-action-link_label_o08fb_149",
	labelBold: "ds-action-link_label--bold_o08fb_160",
	labelActive: "ds-action-link_label--active_o08fb_171",
	labelIconTop: "ds-action-link_label--icon-top_o08fb_182",
	numberIndicator: "ds-action-link_number-indicator_o08fb_205"
}, va = ({ iconName: e, iconSize: t, iconSource: n, iconPosition: r, indentLevel: i, stretched: a, weight: o, numberIndicatorValue: s, numberIndicatorAriaLabel: c }) => {
	if (e && !n && t === "x-large" && console.warn(L("DSActionLink", "An \"iconSize\" prop set to \"x-large\" has no effect when \"iconName\" is set. Please remove the \"iconSize\" prop or provide a custom icon via the \"iconSource\" prop.")), r === "top") {
		if (!e && !n) throw Error(L("DSActionLink", "The \"iconPosition\" prop should not be set to \"top\", when no \"iconName\" or \"iconSource\" prop was provided. Please either remove the \"iconPosition\" prop or set a valid icon via the \"iconName\" or \"iconSource\" prop."));
		t === "x-large" && console.warn(L("DSActionLink", "An \"iconSize\" prop set to \"x-large\" has no effect when \"iconPosition\" is set to \"top\". Please remove the \"iconSize\" prop.")), o === "bold" && console.warn(L("DSActionLink", "A \"weight\" prop set to \"bold\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"weight\" prop.")), i === 1 && console.warn(L("DSActionLink", "An \"indentLevel\" prop set to \"1\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"indentLevel\" prop.")), a && console.warn(L("DSActionLink", "A \"stretched\" prop set to \"true\" with \"iconPosition\" set to \"top\" has no effect. Please remove the \"stretched\" prop."));
	}
	(s || s === "") && !c && console.warn(L("DSActionLink", "Please provide a descriptive aria-label for the Number Indicator for better accessibility."));
}, ya = s((e, t) => {
	let n = D.c(86), r, a, o, s, c, l, u, d, f, p, m, h, _, v, y, b, x, S, C, w;
	n[0] === e ? (r = n[1], a = n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = n[7], d = n[8], f = n[9], p = n[10], m = n[11], h = n[12], _ = n[13], v = n[14], y = n[15], b = n[16], x = n[17], S = n[18], C = n[19], w = n[20]) : ({children: a, aria: r, className: o, download: s, href: c, iconName: l, iconPosition: _, iconSize: v, iconSource: u, indentLevel: y, isActive: b, numberIndicatorValue: f, numberIndicatorAriaLabel: d, referrerPolicy: p, rel: m, stretched: x, target: S, tooltip: w, weight: C, ...h} = e, n[0] = e, n[1] = r, n[2] = a, n[3] = o, n[4] = s, n[5] = c, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = p, n[11] = m, n[12] = h, n[13] = _, n[14] = v, n[15] = y, n[16] = b, n[17] = x, n[18] = S, n[19] = C, n[20] = w);
	let T = _ === void 0 ? "left" : _, E = v === void 0 ? "large" : v, O = y === void 0 ? 0 : y, k = b === void 0 ? !1 : b, A = x === void 0 ? !1 : x, j = S === void 0 ? "_self" : S, N = C === void 0 ? "normal" : C;
	process.env.NODE_ENV !== "production" && va({
		iconName: l,
		iconSize: E,
		iconSource: u,
		iconPosition: T,
		indentLevel: O,
		numberIndicatorValue: f,
		numberIndicatorAriaLabel: d,
		stretched: A,
		weight: N
	});
	let P;
	n[21] === f ? P = n[22] : (P = f?.trim(), n[21] = f, n[22] = P);
	let F = P === "", I = T === "top", L = O === 1, R = k && T === "left", z = A === !0 && T === "left", B;
	n[23] !== o || n[24] !== k || n[25] !== L || n[26] !== R || n[27] !== z || n[28] !== I ? (B = M(_a.root, o, {
		[_a.rootIconTop]: I,
		[_a.rootIndentLevel1]: L,
		[_a.rootActive]: k,
		[_a.rootActiveWithMarker]: R,
		[_a.rootStretched]: z
	}), n[23] = o, n[24] = k, n[25] = L, n[26] = R, n[27] = z, n[28] = I, n[29] = B) : B = n[29];
	let V = B, H = O === 1, U;
	n[30] === H ? U = n[31] : (U = M(_a.activeMarker, { [_a.activeMarkerWithIndent]: H }), n[30] = H, n[31] = U);
	let W = U, G = k && T === "left", ee = N === "bold", K = T === "top", te;
	n[32] !== G || n[33] !== ee || n[34] !== K ? (te = M(_a.label, {
		[_a.labelActive]: G,
		[_a.labelBold]: ee,
		[_a.labelIconTop]: K
	}), n[32] = G, n[33] = ee, n[34] = K, n[35] = te) : te = n[35];
	let ne = te, re = E === "x-large", ie = (l || u) && (f || F), ae = (l || u) && !F, se;
	n[36] !== re || n[37] !== ie || n[38] !== ae ? (se = M(_a.iconWrapper, {
		[_a.iconWrapperXLarge]: re,
		[_a.iconWrapperWithNumberIndicator]: ie,
		[_a.iconWrapperWithNumberIndicatorWithValue]: ae
	}), n[36] = re, n[37] = ie, n[38] = ae, n[39] = se) : se = n[39];
	let q = se, le = c === void 0 ? "span" : "a", ue;
	n[40] !== le || n[41] !== s || n[42] !== c || n[43] !== p || n[44] !== m || n[45] !== j ? (ue = le === "a" && {
		href: c,
		target: j,
		rel: m,
		referrerPolicy: p,
		download: s
	}, n[40] = le, n[41] = s, n[42] = c, n[43] = p, n[44] = m, n[45] = j, n[46] = ue) : ue = n[46];
	let de;
	n[47] !== W || n[48] !== T || n[49] !== k ? (de = k && T === "left" && /* @__PURE__ */ g("div", { className: W }), n[47] = W, n[48] = T, n[49] = k, n[50] = de) : de = n[50];
	let J;
	n[51] !== l || n[52] !== T || n[53] !== E || n[54] !== u || n[55] !== q || n[56] !== F || n[57] !== d || n[58] !== f ? (J = (l || u) && /* @__PURE__ */ g(i, { children: /* @__PURE__ */ g("span", {
		className: q,
		children: [/* @__PURE__ */ g(oe, {
			name: l,
			theme: "light",
			source: u,
			"aria-hidden": "true",
			size: l || T === "top" ? "large" : E
		}), (T === "left" && F || T === "top" && (f || F)) && /* @__PURE__ */ g(ce, {
			variant: "highlight",
			"aria-label": d,
			label: f
		})]
	}) }), n[51] = l, n[52] = T, n[53] = E, n[54] = u, n[55] = q, n[56] = F, n[57] = d, n[58] = f, n[59] = J) : J = n[59];
	let Y;
	n[60] !== a || n[61] !== ne ? (Y = /* @__PURE__ */ g("span", {
		className: ne,
		children: a
	}), n[60] = a, n[61] = ne, n[62] = Y) : Y = n[62];
	let X;
	n[63] !== T || n[64] !== F || n[65] !== d || n[66] !== f ? (X = T === "left" && f && !F && /* @__PURE__ */ g(ce, {
		variant: "default",
		"aria-label": d,
		label: f,
		className: _a.numberIndicator
	}), n[63] = T, n[64] = F, n[65] = d, n[66] = f, n[67] = X) : X = n[67];
	let fe;
	n[68] !== le || n[69] !== r || n[70] !== t || n[71] !== h || n[72] !== V || n[73] !== ue || n[74] !== de || n[75] !== J || n[76] !== Y || n[77] !== X ? (fe = /* @__PURE__ */ g(le, {
		className: V,
		...ue,
		...r,
		...h,
		ref: t,
		children: [
			de,
			J,
			Y,
			X
		]
	}), n[68] = le, n[69] = r, n[70] = t, n[71] = h, n[72] = V, n[73] = ue, n[74] = de, n[75] = J, n[76] = Y, n[77] = X, n[78] = fe) : fe = n[78];
	let Z = fe;
	if (w) {
		let e;
		n[79] === Z ? e = n[80] : (e = /* @__PURE__ */ g(na.Anchor, { children: Z }), n[79] = Z, n[80] = e);
		let t;
		n[81] === w ? t = n[82] : (t = /* @__PURE__ */ g(na.Content, { children: w }), n[81] = w, n[82] = t);
		let r;
		return n[83] !== e || n[84] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[83] = e, n[84] = t, n[85] = r) : r = n[85], r;
	}
	return Z;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/AriaLiveRegions.utils.8ofDlHnN.js
ya.displayName = "DSActionLink", d();
var ba = "ds-status-live-region", xa = () => {
	if (F) return document.getElementById(ba);
}, Sa = (e) => {
	let t = xa();
	if (t) return t;
	throw Error(L(e, "The DSAriaLiveRegions component has to be placed at the root of your application, as close to the \"body\" as possible, e.g. in your \"App.tsx\" or \"layout.tsx\". See the DSAriaLiveRegions documentation for setup options."));
}, Ca = 350, wa = (e, t) => {
	let n = Sa(t);
	n.innerText = e, setTimeout(() => {
		n.innerText = "";
	}, Ca);
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/useBreakpoint.1txsny17.js
d(), d();
var Ta = {
	base: 0,
	s: 320,
	m: 768,
	l: 1024,
	xl: 1536
}, Ea = [
	"base",
	"s",
	"m",
	"l",
	"xl"
], Da = (e) => {
	let t = "base";
	for (let n of Ea) if (e >= Ta[n]) t = n;
	else break;
	return t;
}, Oa = (e) => e && typeof e == "object" && "base" in e, ka = () => {
	let [e, t] = c(void 0);
	Yi(() => (n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), []);
	let n = () => {
		let e = window.innerWidth;
		t(Da(e));
	};
	return e;
}, Aa = (e) => {
	let t = ka();
	if (!t) return !1;
	if (e && typeof e != "object" || !Oa(e)) return e;
	let n = [...Ea].reverse(), r = e.base;
	for (let i of n) {
		let n = e[i];
		if (n !== void 0 && Ta[t] >= Ta[i]) {
			r = n;
			break;
		}
	}
	return r;
}, ja = {
	root: "ds-spinner_root_awbzc_1",
	rootSizeSmall: "ds-spinner_root-size-small_awbzc_10",
	rootSizeMedium: "ds-spinner_root-size-medium_awbzc_14",
	rootSizeLarge: "ds-spinner_root-size-large_awbzc_18",
	rootSizeXLarge: "ds-spinner_root-size-x-large_awbzc_22",
	rootSizeInherit: "ds-spinner_root-size-inherit_awbzc_26",
	screenReaderOnly: "ds-spinner_screenReaderOnly_awbzc_51"
}, Ma = (e) => {
	let t = D.c(21), n, r, i, a, o;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({aria: n, className: r, size: a, theme: o, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
	let s = a === void 0 ? "small" : a, c = o === void 0 ? "light" : o, l = s === "small", u = s === "medium", d = s === "large", f = s === "x-large", p = s === "inherit", m;
	t[6] !== r || t[7] !== l || t[8] !== u || t[9] !== d || t[10] !== f || t[11] !== p ? (m = M(ja.root, r, {
		[ja.rootSizeSmall]: l,
		[ja.rootSizeMedium]: u,
		[ja.rootSizeLarge]: d,
		[ja.rootSizeXLarge]: f,
		[ja.rootSizeInherit]: p
	}), t[6] = r, t[7] = l, t[8] = u, t[9] = d, t[10] = f, t[11] = p, t[12] = m) : m = t[12];
	let h = m, _ = n?.["aria-label"] || void 0, v;
	t[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (v = /* @__PURE__ */ g("span", {
		className: ja.screenReaderOnly,
		children: "\xA0"
	}), t[13] = v) : v = t[13];
	let y;
	t[14] === c ? y = t[15] : (y = /* @__PURE__ */ g(oe, {
		name: "loading-spinner",
		theme: c,
		focusable: "false",
		"aria-hidden": "true"
	}), t[14] = c, t[15] = y);
	let b;
	return t[16] !== i || t[17] !== h || t[18] !== y || t[19] !== _ ? (b = /* @__PURE__ */ g("span", {
		className: h,
		role: "alert",
		"aria-live": "assertive",
		"aria-label": _,
		...i,
		children: [v, y]
	}), t[16] = i, t[17] = h, t[18] = y, t[19] = _, t[20] = b) : b = t[20], b;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Button.D8U6Bs7T.js
d();
var Na = {
	root: "ds-button_root_146u3_1",
	rootHighlight: "ds-button_root--highlight_146u3_75",
	rootDarkHighlight: "ds-button_root--dark-highlight_146u3_75",
	rootFilled: "ds-button_root--filled_146u3_151",
	rootOutline: "ds-button_root--outline_146u3_179",
	rootGhost: "ds-button_root--ghost_146u3_206",
	rootGhostFlush: "ds-button_root--ghost-flush_146u3_231",
	rootSmall: "ds-button_root--small_146u3_237",
	rootNavigation: "ds-button_root--navigation_146u3_317",
	rootNavigationStretched: "ds-button_root--navigation--stretched_146u3_393",
	rootNavigationStretchedIconLeft: "ds-button_root--navigation--stretched--icon-left_146u3_396",
	rootDarkFilled: "ds-button_root--dark-filled_146u3_399",
	rootDarkOutline: "ds-button_root--dark-outline_146u3_456",
	rootDarkGhost: "ds-button_root--dark-ghost_146u3_512",
	rootDarkGhostFlush: "ds-button_root--dark-ghost-flush_146u3_566",
	rootStretched: "ds-button_root--stretched_146u3_641",
	rootIconLeft: "ds-button_root--icon-left_146u3_644",
	rootIconOnly: "ds-button_root--icon-only_146u3_647",
	rootIconOnlySmall: "ds-button_root--icon-only-small_146u3_656",
	iconNavigation: "ds-button_icon--navigation_146u3_672",
	iconHidden: "ds-button_icon--hidden_146u3_679",
	labelHidden: "ds-button_label--hidden_146u3_683",
	labelLoading: "ds-button_label--loading_146u3_695",
	loader: "ds-button_loader_146u3_699"
}, Pa = ({ hideLabel: e, iconName: t, iconSource: n, isFlush: r, size: i, stretched: a, theme: o, variant: s }) => {
	if (s === "navigation" && (i === "small" && console.warn(L("DSButton", "A \"size\" prop should not be used in combination with variant=\"navigation\". Please remove the \"size\" prop.")), o === "dark")) throw Error(L("DSButton", "A DSButton with variant=\"navigation\" does not support theme=\"dark\". Please remove the \"theme\" prop."));
	s !== "ghost" && r ? console.warn(L("DSButton", "The \"isFlush\" prop only has an effect when used with variant=\"ghost\". Please remove the \"isFlush\" prop or set variant=\"ghost\".")) : s === "ghost" && r && a && console.warn(L("DSButton", "The \"stretched\" and \"isFlush\" props do not have an effect when used together. Please remove one of them.")), e && (!t && !n && console.warn(L("DSButton", "The \"hideLabel\" prop is set to true but no icon is provided via \"iconName\" or \"iconSource\". Please provide an icon to ensure the button is not empty when the label is hidden.")), a && console.warn(L("DSButton", "The \"stretched\" and \"hideLabel\" props do not have an effect when used together. Please remove one of them.")));
}, Fa = s((e, t) => {
	let n = D.c(77), r, i, a, o, s, c, l, u, d, f, p, m, h, _, v, y, b;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13], _ = n[14], v = n[15], y = n[16], b = n[17]) : ({children: i, aria: r, className: a, disabled: u, hideLabel: d, iconName: o, iconPosition: f, iconSource: s, isFlush: p, loading: m, size: h, stretched: _, theme: v, tooltip: b, variant: y, onClick: c, ...l} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h, n[14] = _, n[15] = v, n[16] = y, n[17] = b);
	let x = u === void 0 ? !1 : u, S = d === void 0 ? !1 : d, C = f === void 0 ? "left" : f, w = p === void 0 ? !1 : p, T = m === void 0 ? !1 : m, E = h === void 0 ? "medium" : h, O = _ === void 0 ? !1 : _, k = v === void 0 ? "light" : v, A = y === void 0 ? "filled" : y, j = Aa(S), N = Aa(O);
	process.env.NODE_ENV !== "production" && Pa({
		hideLabel: j,
		iconName: o,
		iconSource: s,
		isFlush: w,
		size: E,
		stretched: O,
		theme: k,
		variant: A
	});
	let P = A === "filled", F = A === "highlight", I = A === "outline", L = A === "ghost" && w !== !0, R = A === "navigation", z = A === "navigation" && N && C === "right", B = A === "navigation" && N && C === "left", V = A === "ghost" && w === !0, H = k === "dark" && A === "filled", U = k === "dark" && A === "highlight", W = k === "dark" && A === "outline", G = k === "dark" && A === "ghost" && w !== !0, ee = k === "dark" && A === "ghost" && w === !0, K = E === "small" || A === "navigation", te = C === "left", ne = j && E === "medium" && A !== "navigation", re = j && E === "small" && A !== "navigation", ie;
	n[18] !== a || n[19] !== N || n[20] !== P || n[21] !== F || n[22] !== I || n[23] !== L || n[24] !== R || n[25] !== z || n[26] !== B || n[27] !== V || n[28] !== H || n[29] !== U || n[30] !== W || n[31] !== G || n[32] !== ee || n[33] !== K || n[34] !== te || n[35] !== ne || n[36] !== re ? (ie = M(Na.root, a, {
		[Na.rootFilled]: P,
		[Na.rootHighlight]: F,
		[Na.rootOutline]: I,
		[Na.rootGhost]: L,
		[Na.rootNavigation]: R,
		[Na.rootNavigationStretched]: z,
		[Na.rootNavigationStretchedIconLeft]: B,
		[Na.rootGhostFlush]: V,
		[Na.rootDarkFilled]: H,
		[Na.rootDarkHighlight]: U,
		[Na.rootDarkOutline]: W,
		[Na.rootDarkGhost]: G,
		[Na.rootDarkGhostFlush]: ee,
		[Na.rootSmall]: K,
		[Na.rootStretched]: N,
		[Na.rootIconLeft]: te,
		[Na.rootIconOnly]: ne,
		[Na.rootIconOnlySmall]: re
	}), n[18] = a, n[19] = N, n[20] = P, n[21] = F, n[22] = I, n[23] = L, n[24] = R, n[25] = z, n[26] = B, n[27] = V, n[28] = H, n[29] = U, n[30] = W, n[31] = G, n[32] = ee, n[33] = K, n[34] = te, n[35] = ne, n[36] = re, n[37] = ie) : ie = n[37];
	let ae = ie, se;
	n[38] !== T || n[39] !== j || n[40] !== A ? (se = M({
		[Na.labelHidden]: j && A !== "navigation",
		[Na.labelLoading]: T
	}) || void 0, n[38] = T, n[39] = j, n[40] = A, n[41] = se) : se = n[41];
	let ce = se, q = A === "navigation", le;
	n[42] !== T || n[43] !== q ? (le = M({
		[Na.iconNavigation]: q,
		[Na.iconHidden]: T
	}), n[42] = T, n[43] = q, n[44] = le) : le = n[44];
	let ue = le, de = k === "light" && A === "filled" || k === "dark" && A === "outline" || k === "dark" && A === "ghost" ? "dark" : "light", J;
	n[45] !== x || n[46] !== T || n[47] !== c ? (J = (e) => {
		if (x || T) {
			e.preventDefault();
			return;
		}
		c && c(e);
	}, n[45] = x, n[46] = T, n[47] = c, n[48] = J) : J = n[48];
	let Y = J, X = x || T, fe;
	n[49] === T ? fe = n[50] : (fe = T && /* @__PURE__ */ g(Ma, {
		className: Na.loader,
		aria: { "aria-label": "Loading state" }
	}), n[49] = T, n[50] = fe);
	let Z;
	n[51] !== i || n[52] !== ce ? (Z = /* @__PURE__ */ g("span", {
		className: ce,
		children: i
	}), n[51] = i, n[52] = ce, n[53] = Z) : Z = n[53];
	let Q;
	n[54] !== ue || n[55] !== o || n[56] !== s || n[57] !== de ? (Q = (o || s) && /* @__PURE__ */ g(oe, {
		name: o,
		theme: de,
		source: s,
		className: ue,
		"aria-hidden": "true"
	}), n[54] = ue, n[55] = o, n[56] = s, n[57] = de, n[58] = Q) : Q = n[58];
	let pe;
	n[59] !== r || n[60] !== Y || n[61] !== T || n[62] !== t || n[63] !== l || n[64] !== ae || n[65] !== X || n[66] !== fe || n[67] !== Z || n[68] !== Q ? (pe = /* @__PURE__ */ g("button", {
		className: ae,
		type: "submit",
		onClick: Y,
		...r,
		...l,
		"aria-disabled": X,
		"aria-busy": T,
		ref: t,
		children: [
			fe,
			Z,
			Q
		]
	}), n[59] = r, n[60] = Y, n[61] = T, n[62] = t, n[63] = l, n[64] = ae, n[65] = X, n[66] = fe, n[67] = Z, n[68] = Q, n[69] = pe) : pe = n[69];
	let me = pe;
	if (b) {
		let e;
		n[70] === me ? e = n[71] : (e = /* @__PURE__ */ g(na.Anchor, { children: me }), n[70] = me, n[71] = e);
		let t;
		n[72] === b ? t = n[73] : (t = /* @__PURE__ */ g(na.Content, { children: b }), n[72] = b, n[73] = t);
		let r;
		return n[74] !== e || n[75] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[74] = e, n[75] = t, n[76] = r) : r = n[76], r;
	}
	return me;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/LinkButton.CNLxmfVF.js
Fa.displayName = "DSButton", d();
var Ia = {
	root: "ds-link-button_root_1h9ri_1",
	rootHighlight: "ds-link-button_root--highlight_1h9ri_75",
	rootDarkHighlight: "ds-link-button_root--dark-highlight_1h9ri_75",
	rootFilled: "ds-link-button_root--filled_1h9ri_151",
	rootOutline: "ds-link-button_root--outline_1h9ri_179",
	rootGhost: "ds-link-button_root--ghost_1h9ri_206",
	rootGhostFlush: "ds-link-button_root--ghost-flush_1h9ri_231",
	rootSmall: "ds-link-button_root--small_1h9ri_237",
	rootNavigation: "ds-link-button_root--navigation_1h9ri_317",
	rootNavigationStretched: "ds-link-button_root--navigation--stretched_1h9ri_393",
	rootNavigationStretchedIconLeft: "ds-link-button_root--navigation--stretched--icon-left_1h9ri_396",
	rootDarkFilled: "ds-link-button_root--dark-filled_1h9ri_399",
	rootDarkOutline: "ds-link-button_root--dark-outline_1h9ri_456",
	rootDarkGhost: "ds-link-button_root--dark-ghost_1h9ri_512",
	rootDarkGhostFlush: "ds-link-button_root--dark-ghost-flush_1h9ri_566",
	rootStretched: "ds-link-button_root--stretched_1h9ri_641",
	rootIconLeft: "ds-link-button_root--icon-left_1h9ri_644",
	rootIconOnly: "ds-link-button_root--icon-only_1h9ri_647",
	rootIconOnlySmall: "ds-link-button_root--icon-only-small_1h9ri_656",
	iconNavigation: "ds-link-button_icon--navigation_1h9ri_668",
	labelHidden: "ds-link-button_label--hidden_1h9ri_676"
}, La = ({ hideLabel: e, iconName: t, iconSource: n, isFlush: r, size: i, stretched: a, theme: o, variant: s }) => {
	if (s === "navigation" && (i === "small" && console.warn(L("DSLinkButton", "A \"size\" prop should not be used in combination with variant=\"navigation\". Please remove the \"size\" prop.")), o === "dark")) throw Error(L("DSLinkButton", "A DSLinkButton with variant=\"navigation\" does not support theme=\"dark\". Please remove the \"theme\" prop."));
	s !== "ghost" && r ? console.warn(L("DSLinkButton", "The \"isFlush\" prop only has an effect when used with variant=\"ghost\". Please remove the \"isFlush\" prop or set variant=\"ghost\".")) : s === "ghost" && r && a && console.warn(L("DSLinkButton", "The \"stretched\" and \"isFlush\" props do not have an effect when used together. Please remove one of them.")), e && (!t && !n && console.warn(L("DSLinkButton", "The \"hideLabel\" prop is set to true but no icon is provided via \"iconName\" or \"iconSource\". Please provide an icon to ensure the link is not empty when the label is hidden.")), a && console.warn(L("DSLinkButton", "The \"stretched\" and \"hideLabel\" props do not have an effect when used together. Please remove one of them.")));
}, Ra = s((e, t) => {
	let n = D.c(76), r, i, a, o, s, c, l, u, d, f, p, m, h, _, v, y, b, x, S;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13], _ = n[14], v = n[15], y = n[16], b = n[17], x = n[18], S = n[19]) : ({children: i, aria: r, className: a, download: o, hideLabel: p, href: s, iconName: c, iconPosition: m, iconSource: l, isFlush: h, referrerPolicy: u, rel: d, size: _, stretched: v, target: y, theme: b, variant: x, tooltip: S, ...f} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h, n[14] = _, n[15] = v, n[16] = y, n[17] = b, n[18] = x, n[19] = S);
	let C = p === void 0 ? !1 : p, w = m === void 0 ? "left" : m, T = h === void 0 ? !1 : h, E = _ === void 0 ? "medium" : _, O = v === void 0 ? !1 : v, k = y === void 0 ? "_self" : y, A = b === void 0 ? "light" : b, j = x === void 0 ? "filled" : x, N = Aa(C), P = Aa(O);
	process.env.NODE_ENV !== "production" && La({
		hideLabel: N,
		iconName: c,
		iconSource: l,
		isFlush: T,
		size: E,
		stretched: O,
		theme: A,
		variant: j
	});
	let F = j === "filled", I = j === "highlight", L = j === "outline", R = j === "ghost" && T !== !0, z = j === "navigation", B = j === "navigation" && P && w === "right", V = j === "navigation" && P && w === "left", H = j === "ghost" && T === !0, U = A === "dark" && j === "filled", W = A === "dark" && j === "highlight", G = A === "dark" && j === "outline", ee = A === "dark" && j === "ghost" && T !== !0, K = A === "dark" && j === "ghost" && T === !0, te = E === "small" || j === "navigation", ne = w === "left", re = N && E === "medium" && j !== "navigation", ie = N && E === "small" && j !== "navigation", ae;
	n[20] !== a || n[21] !== P || n[22] !== I || n[23] !== L || n[24] !== R || n[25] !== z || n[26] !== B || n[27] !== V || n[28] !== H || n[29] !== U || n[30] !== W || n[31] !== G || n[32] !== ee || n[33] !== K || n[34] !== te || n[35] !== ne || n[36] !== re || n[37] !== ie || n[38] !== F ? (ae = M(Ia.root, a, {
		[Ia.rootFilled]: F,
		[Ia.rootHighlight]: I,
		[Ia.rootOutline]: L,
		[Ia.rootGhost]: R,
		[Ia.rootNavigation]: z,
		[Ia.rootNavigationStretched]: B,
		[Ia.rootNavigationStretchedIconLeft]: V,
		[Ia.rootGhostFlush]: H,
		[Ia.rootDarkFilled]: U,
		[Ia.rootDarkHighlight]: W,
		[Ia.rootDarkOutline]: G,
		[Ia.rootDarkGhost]: ee,
		[Ia.rootDarkGhostFlush]: K,
		[Ia.rootSmall]: te,
		[Ia.rootStretched]: P,
		[Ia.rootIconLeft]: ne,
		[Ia.rootIconOnly]: re,
		[Ia.rootIconOnlySmall]: ie
	}), n[20] = a, n[21] = P, n[22] = I, n[23] = L, n[24] = R, n[25] = z, n[26] = B, n[27] = V, n[28] = H, n[29] = U, n[30] = W, n[31] = G, n[32] = ee, n[33] = K, n[34] = te, n[35] = ne, n[36] = re, n[37] = ie, n[38] = F, n[39] = ae) : ae = n[39];
	let se = ae, ce;
	n[40] !== N || n[41] !== j ? (ce = M({ [Ia.labelHidden]: N && j !== "navigation" }) || void 0, n[40] = N, n[41] = j, n[42] = ce) : ce = n[42];
	let q = ce, le = j === "navigation", ue;
	n[43] === le ? ue = n[44] : (ue = M({ [Ia.iconNavigation]: le }), n[43] = le, n[44] = ue);
	let de = ue, J = A === "light" && j === "filled" || A === "dark" && j === "outline" || A === "dark" && j === "ghost" ? "dark" : "light", Y = s === void 0 ? "span" : "a", X;
	n[45] !== Y || n[46] !== o || n[47] !== s || n[48] !== u || n[49] !== d || n[50] !== k ? (X = Y === "a" && {
		href: s,
		target: k,
		rel: d,
		referrerPolicy: u,
		download: o
	}, n[45] = Y, n[46] = o, n[47] = s, n[48] = u, n[49] = d, n[50] = k, n[51] = X) : X = n[51];
	let fe;
	n[52] !== i || n[53] !== q ? (fe = /* @__PURE__ */ g("span", {
		className: q,
		children: i
	}), n[52] = i, n[53] = q, n[54] = fe) : fe = n[54];
	let Z;
	n[55] !== de || n[56] !== c || n[57] !== l || n[58] !== J ? (Z = (c || l) && /* @__PURE__ */ g(oe, {
		name: c,
		theme: J,
		source: l,
		className: de,
		"aria-hidden": "true"
	}), n[55] = de, n[56] = c, n[57] = l, n[58] = J, n[59] = Z) : Z = n[59];
	let Q;
	n[60] !== Y || n[61] !== r || n[62] !== t || n[63] !== f || n[64] !== se || n[65] !== X || n[66] !== fe || n[67] !== Z ? (Q = /* @__PURE__ */ g(Y, {
		className: se,
		...X,
		...r,
		...f,
		ref: t,
		children: [fe, Z]
	}), n[60] = Y, n[61] = r, n[62] = t, n[63] = f, n[64] = se, n[65] = X, n[66] = fe, n[67] = Z, n[68] = Q) : Q = n[68];
	let pe = Q;
	if (S) {
		let e;
		n[69] === pe ? e = n[70] : (e = /* @__PURE__ */ g(na.Anchor, { children: pe }), n[69] = pe, n[70] = e);
		let t;
		n[71] === S ? t = n[72] : (t = /* @__PURE__ */ g(na.Content, { children: S }), n[71] = S, n[72] = t);
		let r;
		return n[73] !== e || n[74] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[73] = e, n[74] = t, n[75] = r) : r = n[75], r;
	}
	return pe;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/link.DFt6ae6h.js
Ra.displayName = "DSLinkButton", d();
var za = {
	root: "ds-link_root_1nkr1_1",
	rootHighlight: "ds-link_root--highlight_1nkr1_68",
	rootNeutralDark: "ds-link_root--neutral-dark_1nkr1_82",
	rootHighlightDark: "ds-link_root--highlight-dark_1nkr1_131",
	rootActive: "ds-link_root--active_1nkr1_180",
	rootIconLeft: "ds-link_root--icon-left_1nkr1_187"
}, Ba = s((e, t) => {
	let n = D.c(53), r, i, a, o, s, c, l, u, d, f, p, m, h, _, v, y;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13], _ = n[14], v = n[15], y = n[16]) : ({children: a, aria: i, active: r, className: o, download: s, href: c, iconName: l, iconPosition: m, iconSource: u, referrerPolicy: d, rel: f, target: h, theme: _, tooltip: y, variant: v, ...p} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h, n[14] = _, n[15] = v, n[16] = y);
	let b = m === void 0 ? "left" : m, x = h === void 0 ? "_self" : h, S = _ === void 0 ? "light" : _, C = v === void 0 ? "neutral" : v, w = C === "highlight", T = S === "dark" && C === "neutral", E = S === "dark" && C === "highlight", O = b === "left", k;
	n[17] !== r || n[18] !== o || n[19] !== w || n[20] !== T || n[21] !== E || n[22] !== O ? (k = M(za.root, o, {
		[za.rootHighlight]: w,
		[za.rootNeutralDark]: T,
		[za.rootHighlightDark]: E,
		[za.rootActive]: r,
		[za.rootIconLeft]: O
	}), n[17] = r, n[18] = o, n[19] = w, n[20] = T, n[21] = E, n[22] = O, n[23] = k) : k = n[23];
	let A = k, j = c === void 0 ? "span" : "a", N;
	n[24] !== j || n[25] !== s || n[26] !== c || n[27] !== d || n[28] !== f || n[29] !== x ? (N = j === "a" && {
		href: c,
		target: x,
		rel: f,
		referrerPolicy: d,
		download: s
	}, n[24] = j, n[25] = s, n[26] = c, n[27] = d, n[28] = f, n[29] = x, n[30] = N) : N = n[30];
	let P;
	n[31] === a ? P = n[32] : (P = /* @__PURE__ */ g("span", {
		className: za.label,
		children: a
	}), n[31] = a, n[32] = P);
	let F;
	n[33] !== l || n[34] !== u || n[35] !== S ? (F = (l || u) && /* @__PURE__ */ g(oe, {
		name: l,
		theme: S,
		source: u,
		size: "medium",
		"aria-hidden": "true"
	}), n[33] = l, n[34] = u, n[35] = S, n[36] = F) : F = n[36];
	let I;
	n[37] !== j || n[38] !== i || n[39] !== t || n[40] !== p || n[41] !== A || n[42] !== N || n[43] !== P || n[44] !== F ? (I = /* @__PURE__ */ g(j, {
		className: A,
		...N,
		...i,
		...p,
		ref: t,
		children: [P, F]
	}), n[37] = j, n[38] = i, n[39] = t, n[40] = p, n[41] = A, n[42] = N, n[43] = P, n[44] = F, n[45] = I) : I = n[45];
	let L = I;
	if (y) {
		let e;
		n[46] === L ? e = n[47] : (e = /* @__PURE__ */ g(na.Anchor, { children: L }), n[46] = L, n[47] = e);
		let t;
		n[48] === y ? t = n[49] : (t = /* @__PURE__ */ g(na.Content, { children: y }), n[48] = y, n[49] = t);
		let r;
		return n[50] !== e || n[51] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[50] = e, n[51] = t, n[52] = r) : r = n[52], r;
	}
	return L;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Breadcrumb.CNABp45n.js
Ba.displayName = "DSLink", d();
var Va = {
	root: "ds-breadcrumb_root_1e9hu_1",
	showAllButton: "ds-breadcrumb_show-all-button_1e9hu_30"
}, Ha = ({ aria: e, links: t }) => {
	if (!e || typeof e != "object" || Object.keys(e).length === 0 || !e["aria-label"] && !e["aria-labelledby"] || e["aria-label"]?.trim() === "" && e["aria-labelledby"]?.trim() === "") throw Error(L("DSBreadcrumb", "A valid \"aria-label\" or \"aria-labelledby\" property is required. Ensure the \"aria\" prop is a non-empty object and includes either \"aria-label\" or \"aria-labelledby\" with a non-empty string value."));
	if (Array.isArray(t)) {
		if (t.length === 0) throw Error(L("DSBreadcrumb", "The links array must not be empty."));
		if (t.length < 2) throw Error(L("DSBreadcrumb", "The links array must have at least two elements."));
	} else throw Error(L("DSBreadcrumb", R("links", "DSBreadcrumb")));
	t.forEach(({ href: e, label: t, wrapper: n }) => {
		if (n && !u(n)) throw Error(L("DSBreadcrumb", `The link with label "${t}" provided an invalid ReactElement as wrapper property.`));
		n && e && console.warn(L("DSBreadcrumb", `The link with label "${t}" has both a wrapper and an href property. Please use only one.`)), n && u(n) && n.props?.children && console.warn(L("DSBreadcrumb", `The link with label "${t}" contains a wrapper with children. Please remove the children, as they will be replaced. For example: <Link href="#" />`));
	});
}, Ua = (e) => {
	let t = D.c(40), n, r, i, a, s;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], s = t[5]) : ({aria: n, className: r, links: i, showAllButtonProps: s, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = s), process.env.NODE_ENV !== "production" && Ha({
		aria: n,
		links: i
	});
	let l;
	t[6] === s ? l = t[7] : (l = s || {}, t[6] = s, t[7] = l);
	let u, d;
	t[8] === l ? (u = t[9], d = t[10]) : ({label: d, ...u} = l, t[8] = l, t[9] = u, t[10] = d);
	let f = d === void 0 ? "Show all links" : d, [p, m] = c(i.length <= 4), h;
	t[11] === i.length ? h = t[12] : (h = () => {
		m(i.length <= 4);
	}, t[11] = i.length, t[12] = h);
	let _;
	t[13] === i ? _ = t[14] : (_ = [i], t[13] = i, t[14] = _), o(h, _);
	let v;
	t[15] === r ? v = t[16] : (v = M(Va.root, r), t[15] = r, t[16] = v);
	let y = v, b;
	t[17] !== f || t[18] !== u || t[19] !== p ? (b = () => p ? null : /* @__PURE__ */ g("li", { children: /* @__PURE__ */ g(Fa, {
		...u,
		className: Va.showAllButton,
		type: "button",
		title: f,
		variant: "ghost",
		onClick: () => m(!0),
		children: /* @__PURE__ */ g("span", {
			"aria-hidden": "true",
			children: "..."
		})
	}) }), t[17] = f, t[18] = u, t[19] = p, t[20] = b) : b = t[20];
	let x = b, S = Wa, C;
	t[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = (e) => e.map((t, n) => /* @__PURE__ */ g("li", { children: S(t, e.length - 1, n) }, n)), t[21] = C) : C = t[21];
	let w = C, T;
	t[22] === p ? T = t[23] : (T = (e) => w(p ? e : e.slice(-2)), t[22] = p, t[23] = T);
	let E = T, O;
	t[24] === i[0] ? O = t[25] : (O = w([i[0]]), t[24] = i[0], t[25] = O);
	let k;
	t[26] === x ? k = t[27] : (k = x(), t[26] = x, t[27] = k);
	let A;
	t[28] !== E || t[29] !== i ? (A = E(i.slice(1)), t[28] = E, t[29] = i, t[30] = A) : A = t[30];
	let j;
	t[31] !== k || t[32] !== A || t[33] !== O ? (j = /* @__PURE__ */ g("ol", { children: [
		O,
		k,
		A
	] }), t[31] = k, t[32] = A, t[33] = O, t[34] = j) : j = t[34];
	let N;
	return t[35] !== n || t[36] !== a || t[37] !== y || t[38] !== j ? (N = /* @__PURE__ */ g("nav", {
		className: y,
		...a,
		...n,
		children: j
	}), t[35] = n, t[36] = a, t[37] = y, t[38] = j, t[39] = N) : N = t[39], N;
};
function Wa(e, t, n) {
	let { label: r, href: i, wrapper: a, iconName: o } = e, s = t === 0, c = n === t, l = c && !s ? "page" : void 0, u = /* @__PURE__ */ g(Ba, {
		href: a ? void 0 : i,
		iconName: o,
		"aria-current": a ? void 0 : l,
		active: c && !s,
		children: r
	});
	return a ? _(a, {
		"aria-current": l,
		children: u
	}) : u;
}
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/buttonround.BX_81KOF.js
d();
var Ga = {
	root: "ds-button-round_root_11opr_1",
	rootHighlight: "ds-button-round_root--highlight_11opr_75",
	rootDarkHighlight: "ds-button-round_root--dark-highlight_11opr_75",
	rootFilled: "ds-button-round_root--filled_11opr_151",
	rootDarkFilled: "ds-button-round_root--dark-filled_11opr_399",
	rootSizeSmall: "ds-button-round_root--size-small_11opr_672",
	rootSizeMedium: "ds-button-round_root--size-medium_11opr_678",
	iconHidden: "ds-button-round_icon--hidden_11opr_685",
	labelHidden: "ds-button-round_label--hidden_11opr_689",
	labelLoading: "ds-button-round_label--loading_11opr_701",
	loader: "ds-button-round_loader_11opr_705"
}, Ka = s((e, t) => {
	let n = D.c(55), r, i, a, o, s, c, l, u, d, f, p, m, h;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13]) : ({children: i, aria: r, className: a, disabled: l, iconName: u, iconSource: o, loading: d, size: f, theme: p, tooltip: h, variant: m, onClick: s, ...c} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h);
	let _ = l === void 0 ? !1 : l, v = u === void 0 ? "placeholder" : u, y = d === void 0 ? !1 : d, b = f === void 0 ? "small" : f, x = p === void 0 ? "light" : p, S = m === void 0 ? "filled" : m, C;
	n[14] !== a || n[15] !== b || n[16] !== x || n[17] !== S ? (C = M(Ga.root, {
		[Ga.rootSizeMedium]: b === "medium",
		[Ga.rootSizeSmall]: b === "small"
	}, a, {
		[Ga.rootFilled]: S === "filled",
		[Ga.rootHighlight]: S === "highlight",
		[Ga.rootDarkFilled]: x === "dark" && S === "filled",
		[Ga.rootDarkHighlight]: x === "dark" && S === "highlight"
	}), n[14] = a, n[15] = b, n[16] = x, n[17] = S, n[18] = C) : C = n[18];
	let w = C, T;
	n[19] === y ? T = n[20] : (T = M(Ga.label, Ga.labelHidden, { [Ga.labelLoading]: y }), n[19] = y, n[20] = T);
	let E = T, O;
	n[21] === y ? O = n[22] : (O = M(Ga.icon, { [Ga.iconHidden]: y }), n[21] = y, n[22] = O);
	let k = O, A = x === "light" && S === "filled" ? "dark" : "light", j;
	n[23] !== _ || n[24] !== y || n[25] !== s ? (j = (e) => {
		if (_ || y) {
			e.preventDefault();
			return;
		}
		s && s(e);
	}, n[23] = _, n[24] = y, n[25] = s, n[26] = j) : j = n[26];
	let N = j, P = _ || y, F;
	n[27] === y ? F = n[28] : (F = y && /* @__PURE__ */ g(Ma, {
		className: Ga.loader,
		aria: { "aria-label": "Loading state" }
	}), n[27] = y, n[28] = F);
	let I;
	n[29] !== i || n[30] !== E ? (I = /* @__PURE__ */ g("span", {
		className: E,
		children: i
	}), n[29] = i, n[30] = E, n[31] = I) : I = n[31];
	let L;
	n[32] !== k || n[33] !== v || n[34] !== o || n[35] !== A ? (L = (v || o) && /* @__PURE__ */ g(oe, {
		name: v,
		theme: A,
		source: o,
		className: k,
		"aria-hidden": "true"
	}), n[32] = k, n[33] = v, n[34] = o, n[35] = A, n[36] = L) : L = n[36];
	let R;
	n[37] !== r || n[38] !== N || n[39] !== y || n[40] !== t || n[41] !== c || n[42] !== w || n[43] !== P || n[44] !== F || n[45] !== I || n[46] !== L ? (R = /* @__PURE__ */ g("button", {
		className: w,
		type: "button",
		onClick: N,
		...r,
		...c,
		"aria-disabled": P,
		"aria-busy": y,
		ref: t,
		children: [
			F,
			I,
			L
		]
	}), n[37] = r, n[38] = N, n[39] = y, n[40] = t, n[41] = c, n[42] = w, n[43] = P, n[44] = F, n[45] = I, n[46] = L, n[47] = R) : R = n[47];
	let z = R;
	if (h) {
		let e;
		n[48] === z ? e = n[49] : (e = /* @__PURE__ */ g(na.Anchor, { children: z }), n[48] = z, n[49] = e);
		let t;
		n[50] === h ? t = n[51] : (t = /* @__PURE__ */ g(na.Content, { children: h }), n[50] = h, n[51] = t);
		let r;
		return n[52] !== e || n[53] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[52] = e, n[53] = t, n[54] = r) : r = n[54], r;
	}
	return z;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/SystemFeedback.CZhoSxrC.js
Ka.displayName = "DSButtonRound", d();
var qa = { root: "ds-system-feedback_root_1dkn4_1" }, Ja = {
	success: "circle-check-colored",
	error: "diamond-exclamationmark-colored",
	warning: "triangle-exclamationmark-colored"
}, Ya = (e) => {
	let t = D.c(16), n, r, i, a, o;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({id: r, message: i, variant: o, className: n, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
	let s;
	t[6] === n ? s = t[7] : (s = M(qa.root, n), t[6] = n, t[7] = s);
	let c = s, l = Ja[o], u;
	t[8] === l ? u = t[9] : (u = /* @__PURE__ */ g(oe, {
		name: l,
		"aria-hidden": "true"
	}), t[8] = l, t[9] = u);
	let d;
	return t[10] !== r || t[11] !== i || t[12] !== a || t[13] !== c || t[14] !== u ? (d = /* @__PURE__ */ g("div", {
		id: r,
		className: c,
		...a,
		children: [u, i]
	}), t[10] = r, t[11] = i, t[12] = a, t[13] = c, t[14] = u, t[15] = d) : d = t[15], d;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Checkbox.91fwuJ-0.js
d();
var Xa = {
	root: "ds-checkbox_root_xklfa_1",
	rootDisabled: "ds-checkbox_root--disabled_xklfa_21",
	checkbox: "ds-checkbox_checkbox_xklfa_25",
	iconCheck: "ds-checkbox_icon-check_xklfa_41",
	iconMinus: "ds-checkbox_icon-minus_xklfa_42",
	checkboxInvalid: "ds-checkbox_checkbox--invalid_xklfa_66",
	labelHidden: "ds-checkbox_label--hidden_xklfa_71",
	input: "ds-checkbox_input_xklfa_84",
	label: "ds-checkbox_label_xklfa_71",
	feedback: "ds-checkbox_feedback_xklfa_198"
}, Za = ({ label: e, id: t, invalid: n, systemFeedback: r }) => {
	if (!e) throw Error(L("DSCheckbox", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSCheckbox component. If you don't want to display a label, set hideLabel={true}."));
	if (r && n && !t) throw Error(L("DSCheckbox", `A unique "id" prop is required when passing in the systemFeedback prop and setting invalid to true. Please add a unique "id" prop to the DSCheckbox component with label: "${e}".`));
}, Qa = s(({ label: e, checkboxGroupId: n, checked: r, className: i, defaultChecked: a = !1, disabled: s = !1, hideLabel: l = !1, id: u, indeterminate: d = !1, invalid: f = !1, systemFeedback: m, onChange: h, ..._ }, v) => {
	process.env.NODE_ENV !== "production" && Za({
		label: e,
		id: u,
		invalid: f,
		systemFeedback: m
	});
	let y = p(null), [b, x] = c(a), S = Aa(l);
	o(() => {
		y && y.current && (y.current.indeterminate = d);
	}, [d]);
	let C = r !== void 0, w = C ? r : b, T = `${u}-feedback`, E = [f && m && T, f && n && `${n}-feedback`].filter(Boolean).join(" ") || void 0, D = M(Xa.root, { [Xa.rootDisabled]: s }), O = M(Xa.label, { [Xa.labelHidden]: S }), k = M(Xa.checkbox, { [Xa.checkboxInvalid]: f }), A = t((e) => {
		if (s) {
			e.preventDefault();
			return;
		}
		C || x(e.target.checked), h && h(e);
	}, [
		s,
		C,
		h
	]);
	return /* @__PURE__ */ g("div", {
		className: i,
		children: [/* @__PURE__ */ g("label", {
			className: D,
			children: [
				/* @__PURE__ */ g("input", {
					id: u,
					type: "checkbox",
					className: Xa.input,
					ref: (e) => {
						typeof v == "function" ? v(e) : v !== null && (v.current = e), y.current = e;
					},
					..._,
					checked: w,
					disabled: s,
					"aria-label": e,
					"aria-describedby": E,
					"aria-invalid": f,
					onChange: A
				}),
				/* @__PURE__ */ g("div", {
					className: k,
					children: [/* @__PURE__ */ g(oe, {
						name: "check",
						className: Xa.iconCheck,
						"aria-hidden": "true"
					}), /* @__PURE__ */ g(oe, {
						name: "minus",
						className: Xa.iconMinus,
						"aria-hidden": "true"
					})]
				}),
				/* @__PURE__ */ g("span", {
					className: O,
					children: e
				})
			]
		}), f && m && /* @__PURE__ */ g(Ya, {
			id: T,
			variant: "error",
			className: Xa.feedback,
			message: m
		})]
	});
});
Qa.displayName = "DSCheckbox";
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/asterisk.Dwtdwpkq.js
var $a = { root: "ds-asterisk_root_1nm42_1" }, eo = () => {
	let e = D.c(1), t;
	return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ g("span", {
		className: $a.root,
		"aria-hidden": "true",
		children: "*"
	}), e[0] = t) : t = e[0], t;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Popover.BBT_kVGM.js
d();
var to = {
	popover: "ds-popover_popover_xg81f_5",
	popoverNoArrow: "ds-popover_popover--no-arrow_xg81f_64",
	popoverVariantGrey: "ds-popover_popover--variant-grey_xg81f_67",
	arrow: "ds-popover_arrow_xg81f_71",
	arrowVariantGrey: "ds-popover_arrow--variant-grey_xg81f_90",
	defaultAnchor: "ds-popover_default-anchor_xg81f_107"
}, no = ({ initialOpen: e = !1, placement: t = "bottom", isOpen: n, popoverOffset: r = 6, showArrow: i = !0, variant: a = "default", defaultAnchorButtonProps: o, onOpenChange: s } = {}) => {
	let [l, u] = c(e), d = n ?? l, f = s ?? u, m = p(null), h = Bi({
		placement: t,
		open: d,
		strategy: "fixed",
		onOpenChange: f,
		whileElementsMounted: cr,
		middleware: [
			xr(r + (i ? 7 : 0)),
			Cr({
				crossAxis: t.includes("-"),
				fallbackAxisSideDirection: "end",
				padding: r
			}),
			Sr({ padding: r }),
			...i ? [wr({ element: m })] : []
		]
	}), g = h.context, _ = Wi([
		Pi(g, { enabled: !0 }),
		Ri(g),
		Ki(g)
	]);
	return b(() => ({
		open: d,
		popoverOffset: r,
		setOpen: f,
		arrowRef: m,
		showArrow: i,
		defaultAnchorButtonProps: o,
		variant: a,
		..._,
		...h
	}), [
		d,
		r,
		f,
		m,
		i,
		o,
		a,
		_,
		h
	]);
}, ro = ({ children: e, hasContent: t, hasAnchor: n }) => {
	if (!e) throw Error(L("DSPopover", "A DSPopover must have children."));
	if (!t && n) throw Error(L("DSPopover", "A DSPopover must either have no child components for its most basic usage or have both a <DSPopover.Content> and <DSPopover.Anchor> component as a child. <DSPopover.Content> is missing! Please add it to the children of DSPopover."));
	if (!n && t) throw Error(L("DSPopover", "A DSPopover must either have no child components for its most basic usage or have both a <DSPopover.Content> and <DSPopover.Anchor> component as a child. <DSPopover.Anchor> is missing! Please add it to the children of DSPopover."));
}, io = ({ showArrow: e, variant: t }) => {
	t === "grey" && e === !1 && console.warn(L("DSPopover", "The 'grey' variant is only available when 'showArrow' is true. To use the 'grey' variant, please ensure that 'showArrow' is set to true."));
}, ao = r(null), oo = () => {
	let e = S(ao);
	if (e == null) throw Error(L("DSPopover", "Components like DSPopover.Anchor or DSPopover.Content must be wrapped in <DSPopover />."));
	return e;
}, so = (e) => {
	let t = D.c(11), { children: n, ...r } = e, a = no({ ...r }), o = B(n, so.Content), s = B(n, so.Anchor);
	process.env.NODE_ENV !== "production" && (ro({
		children: n,
		hasContent: o,
		hasAnchor: s
	}), io({
		showArrow: r.showArrow,
		variant: r.variant
	}));
	let c = !o && !s && n !== null, l;
	t[0] !== n || t[1] !== c ? (l = c ? /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g(so.Anchor, {}), /* @__PURE__ */ g(so.Content, { children: n })] }) : n, t[0] = n, t[1] = c, t[2] = l) : l = t[2];
	let u = l, d = o || c, f = s || c, p;
	t[3] !== a || t[4] !== d || t[5] !== f ? (p = {
		...a,
		hasContent: d,
		hasAnchor: f
	}, t[3] = a, t[4] = d, t[5] = f, t[6] = p) : p = t[6];
	let m = p, h;
	return t[7] !== u || t[8] !== m || t[9] !== r ? (h = /* @__PURE__ */ g(ao.Provider, {
		value: m,
		...r,
		children: u
	}), t[7] = u, t[8] = m, t[9] = r, t[10] = h) : h = t[10], h;
}, co = s(({ children: e, ...t }, n) => {
	let { context: r, defaultAnchorButtonProps: i, refs: a, hasAnchor: o, getReferenceProps: s } = oo(), { label: c = "Toggle popover", ...l } = i || {}, d = e ? e?.ref : null, f = Tr([
		a.setReference,
		n,
		d
	]);
	return o && e && u(e) ? _(e, s({
		ref: f,
		...t,
		...e.props,
		"data-state": r.open ? "open" : "closed"
	})) : /* @__PURE__ */ g(Fa, {
		...l,
		ref: f,
		type: "button",
		"data-state": r.open ? "open" : "closed",
		...s(t),
		size: "small",
		hideLabel: !0,
		iconName: "circle-info-inverted",
		variant: "ghost",
		className: to.defaultAnchor,
		children: e ?? c
	});
});
co.displayName = "DSPopover.Anchor";
var lo = s((e, t) => {
	let n = D.c(39), { style: r, className: i, classNameArrow: a, children: o, ...s } = e, { context: l, refs: u, floatingStyles: d, showArrow: f, variant: p, getFloatingProps: m, arrowRef: h } = oo(), _;
	n[0] !== t || n[1] !== u.setFloating ? (_ = [u.setFloating, t], n[0] = t, n[1] = u.setFloating, n[2] = _) : _ = n[2];
	let v = Tr(_), y;
	n[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = { duration: {
		open: 250,
		close: 250
	} }, n[3] = y) : y = n[3];
	let { isMounted: b, status: x } = Ji(l, y), [S, C] = c(null), w;
	n[4] === u.reference.current ? w = n[5] : (w = () => {
		let e = u.reference.current?.closest("dialog");
		C(e instanceof HTMLDialogElement ? e : null);
	}, n[4] = u.reference.current, n[5] = w);
	let T;
	if (n[6] !== l.open || n[7] !== u.reference ? (T = [u.reference, l.open], n[6] = l.open, n[7] = u.reference, n[8] = T) : T = n[8], Yi(w, T), !b) return null;
	let E = mi, O = S ?? void 0, k = Ti, A;
	n[9] !== d || n[10] !== r ? (A = {
		...d,
		...r
	}, n[9] = d, n[10] = r, n[11] = A) : A = n[11];
	let j = !f, N = p === "grey" && f, P;
	n[12] !== i || n[13] !== j || n[14] !== N ? (P = M(to.popover, i, {
		[to.popoverNoArrow]: j,
		[to.popoverVariantGrey]: N
	}), n[12] = i, n[13] = j, n[14] = N, n[15] = P) : P = n[15];
	let F = l.placement, I = m(s), L;
	n[16] !== h || n[17] !== a || n[18] !== l || n[19] !== f || n[20] !== p ? (L = f && /* @__PURE__ */ g(Rr, {
		ref: h,
		context: l,
		className: M(to.arrow, a, { [to.arrowVariantGrey]: p === "grey" && f }),
		strokeWidth: 1,
		tipRadius: 1,
		width: 16,
		height: 7
	}), n[16] = h, n[17] = a, n[18] = l, n[19] = f, n[20] = p, n[21] = L) : L = n[21];
	let R;
	n[22] !== o || n[23] !== l.placement || n[24] !== v || n[25] !== x || n[26] !== P || n[27] !== I || n[28] !== L || n[29] !== A ? (R = /* @__PURE__ */ g("div", {
		ref: v,
		style: A,
		className: P,
		"data-placement": F,
		"data-status": x,
		...I,
		children: [L, o]
	}), n[22] = o, n[23] = l.placement, n[24] = v, n[25] = x, n[26] = P, n[27] = I, n[28] = L, n[29] = A, n[30] = R) : R = n[30];
	let z;
	n[31] !== k || n[32] !== l || n[33] !== R ? (z = /* @__PURE__ */ g(k, {
		context: l,
		modal: !1,
		children: R
	}), n[31] = k, n[32] = l, n[33] = R, n[34] = z) : z = n[34];
	let B;
	return n[35] !== E || n[36] !== z || n[37] !== O ? (B = /* @__PURE__ */ g(E, {
		root: O,
		children: z
	}), n[35] = E, n[36] = z, n[37] = O, n[38] = B) : B = n[38], B;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Fieldset.BB4NftRU.js
lo.displayName = "DSPopover.Content", so.Anchor = co, so.Content = lo, so.displayName = "DSPopover", d();
var uo = {
	root: "ds-fieldset_root_1rlhb_1",
	childWrapper: "ds-fieldset_child-wrapper_1rlhb_98",
	legendWrapper: "ds-fieldset_legend-wrapper_1rlhb_105",
	legend: "ds-fieldset_legend_1rlhb_105",
	legendUtilityM: "ds-fieldset_legend--utility--m_1rlhb_116",
	description: "ds-fieldset_description_1rlhb_128",
	descriptionSmall: "ds-fieldset_description--small_1rlhb_142",
	systemFeedback: "ds-fieldset_system-feedback_1rlhb_146"
}, fo = ({ description: e, id: t, legend: n, systemFeedback: r }) => {
	if (!t && (e || r)) throw Error(L("DSFieldset", "A unique \"id\" prop is required when providing the description or systemFeedback property. Please add a unique \"id\" prop to the DSFieldset component."));
	if (!n) throw Error(L("DSFieldset", "The legend prop is required. Please add the legend prop to the DSFieldset component."));
}, po = ({ children: e, legend: t, className: n, description: r, disabled: a = !1, id: o, invalid: s = !1, popoverContent: c, popoverInfoButtonProps: l, required: u = !1, systemFeedback: d, ...f }) => {
	process.env.NODE_ENV !== "production" && fo({
		description: r,
		id: o,
		legend: t,
		systemFeedback: d
	});
	let p, m, h, _ = typeof t == "object" && t !== void 0;
	_ && ({headingSize: p, headingTag: m, headingText: h} = t);
	let v = `${o}-feedback`, y = `${o}-description`, b = [s && d && v, r && y].filter(Boolean).join(" ") || void 0, x = !_ || p === "small" || p === "small-uppercase", S = M(uo.root, n), C = M(uo.legend, { [uo.legendUtilityM]: !_ }), w = M(uo.description, { [uo.descriptionSmall]: x });
	return /* @__PURE__ */ g("fieldset", {
		className: S,
		disabled: a,
		...f,
		"aria-invalid": s,
		"aria-describedby": b,
		children: [
			/* @__PURE__ */ g("legend", {
				className: C,
				children: [/* @__PURE__ */ g("span", {
					className: uo.legendWrapper,
					children: _ ? /* @__PURE__ */ g(P, {
						tag: m,
						size: p,
						children: [h, u && /* @__PURE__ */ g(eo, {})]
					}) : /* @__PURE__ */ g(i, { children: [t, u && /* @__PURE__ */ g(eo, {})] })
				}), c && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: l,
					children: c
				})]
			}),
			r && /* @__PURE__ */ g("span", {
				id: y,
				className: w,
				children: r
			}),
			s && d && /* @__PURE__ */ g(Ya, {
				id: v,
				variant: "error",
				message: d,
				className: uo.systemFeedback
			}),
			/* @__PURE__ */ g("div", {
				className: uo.childWrapper,
				children: e
			})
		]
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/CheckboxGroup.DlZcoyo_.js
d();
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/translate.nuU7uChI.js
var mo = (e, t, n = []) => {
	let r = t[e];
	return r = r.replace(/\{(\d+)\}/g, (e, t) => t < n.length ? n[t] : ""), r;
}, ho = (e) => (t, n) => mo(t, e, n);
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Chip.wHEr-saO.js
d();
var go = {
	chip: "ds-chip-group_chip_aidwn_1",
	chipSmall: "ds-chip-group_chip--small_aidwn_30"
}, _o = {
	en: {
		disabled: "disabled",
		selected: "selected",
		notSelected: "not selected",
		removed: "removed",
		remaining: "remaining",
		selectChip: "press space to {0}",
		unselectAction: "unselect",
		selectAction: "select",
		addToSelection: "add this option to selection",
		removeFromSelection: "remove this option from selection",
		removeChip: "press Backspace to remove the currently focused value",
		tooltipDisabled: "Disabled",
		tooltipRemovable: "Remove filter",
		tooltipDeactivate: "Deactivate property",
		tooltipActivate: "Activate property",
		item_one: "item",
		item_other: "items",
		countSelected: "{0} {1} {2}",
		countRemaining: "{0} {1} {2}"
	},
	de: {
		disabled: "deaktiviert",
		selected: "ausgewählt",
		notSelected: "nicht ausgewählt",
		removed: "entfernt",
		remaining: "verbleibend",
		selectChip: "drücke Leertaste, um {0}",
		unselectAction: "abzuwählen",
		selectAction: "auszuwählen",
		addToSelection: "diese Option zur Auswahl hinzuzufügen",
		removeFromSelection: "diese Option aus der Auswahl zu entfernen",
		removeChip: "drücke Backspace, um den aktuell fokussierten Wert zu entfernen",
		tooltipDisabled: "Deaktiviert",
		tooltipRemovable: "Filter entfernen",
		tooltipDeactivate: "Eigenschaft deaktivieren",
		tooltipActivate: "Eigenschaft aktivieren",
		item_one: "Element",
		item_other: "Elemente",
		countSelected: "{0} {1} {2}",
		countRemaining: "{0} {1} {2}"
	}
}, vo = (e, t, n, r, i, a) => n ? `${t}, ${e("disabled")}` : a ? `${t}, ${e("removeChip")}` : `${t}, ${r ? `${e("selected")}, ` : ""}${e("selectChip", [e(i === "single" ? r ? "unselectAction" : "selectAction" : r ? "removeFromSelection" : "addToSelection")])}`, yo = (e, t, n, r) => e(r ? "tooltipRemovable" : t ? "tooltipDisabled" : n ? "tooltipDeactivate" : "tooltipActivate"), bo = s((e, t) => {
	let n = D.c(49), r, i, a, o, s, c, l, u, d, f, p, m, h, _, v;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13], _ = n[14], v = n[15]) : ({id: o, label: l, disableTooltips: r, groupId: i, isRemovable: s, selectionMode: f, disabled: m, iconName: a, isSelected: c, lang: h, size: p, tabIndex: _, translations: v, onClick: u, ...d} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h, n[14] = _, n[15] = v);
	let y = m === void 0 ? !1 : m, b = h === void 0 ? "en" : h, x, S;
	if (n[16] !== r || n[17] !== y || n[18] !== i || n[19] !== a || n[20] !== o || n[21] !== s || n[22] !== c || n[23] !== l || n[24] !== b || n[25] !== u || n[26] !== t || n[27] !== d || n[28] !== f || n[29] !== p || n[30] !== _ || n[31] !== v) {
		S = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
		e: {
			let e = ho(v || _o[b]), m = p === "small", h;
			n[34] === m ? h = n[35] : (h = M(go.chip, { [go.chipSmall]: m }), n[34] = m, n[35] = h);
			let C = h, w;
			n[36] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (w = { display: "contents" }, n[36] = w) : w = n[36];
			let T;
			n[37] === a ? T = n[38] : (T = a && /* @__PURE__ */ g(oe, {
				name: a,
				"aria-hidden": "true"
			}), n[37] = a, n[38] = T);
			let E;
			n[39] !== l || n[40] !== T ? (E = /* @__PURE__ */ g("div", {
				role: "gridcell",
				"aria-colindex": 1,
				style: w,
				children: [T, l]
			}), n[39] = l, n[40] = T, n[41] = E) : E = n[41];
			let D;
			if (n[42] === s ? D = n[43] : (D = s && /* @__PURE__ */ g(oe, { name: "cross" }), n[42] = s, n[43] = D), x = /* @__PURE__ */ g("div", {
				role: "row",
				"aria-label": vo(e, l, y, c, f, s),
				"aria-selected": c && !s,
				"aria-disabled": y && !s,
				id: `${i}-chip-${o}`,
				className: C,
				tabIndex: _,
				onClick: u,
				ref: t,
				...d,
				children: [E, D]
			}), !r) {
				let t;
				n[44] === x ? t = n[45] : (t = /* @__PURE__ */ g(na.Anchor, { children: x }), n[44] = x, n[45] = t);
				let r = /* @__PURE__ */ g(na.Content, { children: yo(e, y, c, s) }), i;
				n[46] !== t || n[47] !== r ? (i = /* @__PURE__ */ g(na, {
					placement: "top",
					tooltipOffset: 6,
					children: [t, r]
				}), n[46] = t, n[47] = r, n[48] = i) : i = n[48], S = i;
				break e;
			}
		}
		n[16] = r, n[17] = y, n[18] = i, n[19] = a, n[20] = o, n[21] = s, n[22] = c, n[23] = l, n[24] = b, n[25] = u, n[26] = t, n[27] = d, n[28] = f, n[29] = p, n[30] = _, n[31] = v, n[32] = x, n[33] = S;
	} else x = n[32], S = n[33];
	return S === /* @__PURE__ */ Symbol.for("react.early_return_sentinel") ? x : S;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chipgroup.Ckvmby1Q.js
bo.displayName = "DSChip", d();
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/optioncheckbox.BO9lhnF3.js
var xo = {
	root: "ds-combobox_root_q88mt_1",
	rootDisabled: "ds-combobox_root--disabled_q88mt_21",
	checkbox: "ds-combobox_checkbox_q88mt_25",
	iconCheck: "ds-combobox_icon-check_q88mt_41",
	checkboxChecked: "ds-combobox_checkbox--checked_q88mt_62",
	checkboxDisabled: "ds-combobox_checkbox--disabled_q88mt_65",
	label: "ds-combobox_label_q88mt_82"
}, So = (e) => {
	let t = D.c(17), { label: n, checked: r, className: i, disabled: a } = e, o;
	t[0] === a ? o = t[1] : (o = M(xo.root, { [xo.rootDisabled]: a }), t[0] = a, t[1] = o);
	let s = o, c;
	t[2] !== r || t[3] !== a ? (c = M(xo.checkbox, {
		[xo.checkboxDisabled]: a,
		[xo.checkboxChecked]: r
	}), t[2] = r, t[3] = a, t[4] = c) : c = t[4];
	let l = c, u;
	t[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = /* @__PURE__ */ g(oe, {
		name: "check",
		className: xo.iconCheck,
		"aria-hidden": "true"
	}), t[5] = u) : u = t[5];
	let d;
	t[6] === l ? d = t[7] : (d = /* @__PURE__ */ g("span", {
		className: l,
		children: u
	}), t[6] = l, t[7] = d);
	let f;
	t[8] === n ? f = t[9] : (f = /* @__PURE__ */ g("span", {
		className: xo.label,
		children: n
	}), t[8] = n, t[9] = f);
	let p;
	t[10] !== s || t[11] !== d || t[12] !== f ? (p = /* @__PURE__ */ g("div", {
		className: s,
		children: [d, f]
	}), t[10] = s, t[11] = d, t[12] = f, t[13] = p) : p = t[13];
	let m;
	return t[14] !== i || t[15] !== p ? (m = /* @__PURE__ */ g("div", {
		className: i,
		children: p
	}), t[14] = i, t[15] = p, t[16] = m) : m = t[16], m;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/CustomReactSelect.DHwRSrva.js
d();
var Co = ({ id: e, label: t, options: n, hideLabel: r, popoverContent: i }) => {
	if (!e) throw Error(L("DSCombobox", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSCombobox component."));
	if (!t) throw Error(L("DSCombobox", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSCombobox component. If you don't want to display a label, set hideLabel={true}."));
	if (Array.isArray(n)) {
		if (n.length === 0) throw Error(L("DSCombobox", "The options array must not be empty."));
	} else throw Error(L("DSCombobox", R("options", "DSCombobox")));
	r && i && console.warn(L("DSCombobox", "Using a popover when hideLabel is set to true is not supported."));
}, wo = {
	en: {
		placeholder: "",
		navigationGuidance: "Use Up and Down to choose options",
		selectGuidance: "press Enter to select the currently focused option",
		exitGuidance: "press Escape to exit the menu",
		tabGuidance: "press Tab to select the option and exit the menu",
		searchGuidance: "type to refine list",
		inputGuidance: "{0} is focused{1}, press Down to open the menu",
		selectOptionDisabled: "{0} {1} is disabled. Select another option.",
		focusValue: "value {0}, focused",
		of: "of",
		disabled: "disabled",
		selected: "selected",
		deselected: "deselected",
		focusSelectedMultiGuidance: "press left to focus selected values",
		valueGuidance: "Use left and right to toggle between focused values",
		deleteGuidance: "press Backspace to remove the currently focused value",
		clearAllOptions: "All selected options have been cleared",
		filterTermHint: "for search term",
		filterNoOptions: "No options found",
		option_one: "option",
		option_other: "options",
		result_one: "result",
		result_other: "results",
		resultsAvailable: "{0} available",
		togglePopover: "Toggle popover"
	},
	de: {
		placeholder: "",
		navigationGuidance: "Wähle mit Auf und Ab Pfeiltasten die Optionen aus",
		selectGuidance: "drücke die Eingabetaste, um die aktuell fokussierte Option auszuwählen",
		exitGuidance: "drücke Escape, um das Menü zu verlassen",
		tabGuidance: "drücke Tab, um die Option auszuwählen und das Menü zu verlassen",
		searchGuidance: "tippe, um Liste zu verfeinern",
		inputGuidance: "{0} ist fokussiert{1}, drücke nach unten, um das Menü zu öffnen",
		selectOptionDisabled: "{0} {1} ist deaktiviert. Wähle eine andere Option.",
		focusValue: "Wert {0}, fokussiert",
		of: "von",
		disabled: "deaktiviert",
		selected: "ausgewählt",
		deselected: "abgewählt",
		focusSelectedMultiGuidance: "nach links drücken, um ausgewählte Werte zu fokussieren",
		valueGuidance: "Benutze die linke und rechte Pfeiltaste, um zwischen den fokussierten Werten zu wechseln",
		deleteGuidance: "drücke die Rücktaste, um den aktuell fokussierten Wert zu entfernen",
		clearAllOptions: "Alle ausgewählten Optionen wurden gelöscht",
		filterTermHint: "für den Suchbegriff",
		filterNoOptions: "Keine Optionen gefunden",
		option_one: "Option",
		option_other: "Optionen",
		result_one: "Ergebnis",
		result_other: "Ergebnisse",
		resultsAvailable: "{0} verfügbar",
		togglePopover: "Popover öffnen/schließen"
	}
};
function To(e) {
	"@babel/helpers - typeof";
	return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, To(e);
}
function Eo(e, t) {
	if (To(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (To(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Do(e) {
	var t = Eo(e, "string");
	return To(t) == "symbol" ? t : t + "";
}
function Oo(e, t, n) {
	return (t = Do(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ko(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ko(Object(n), !0).forEach(function(t) {
			Oo(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ao(e) {
	if (Array.isArray(e)) return e;
}
function jo(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Mo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function No(e, t) {
	if (e) {
		if (typeof e == "string") return Mo(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mo(e, t) : void 0;
	}
}
function Po() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Fo(e, t) {
	return Ao(e) || jo(e, t) || No(e, t) || Po();
}
function Io(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Lo(e, t) {
	if (e == null) return {};
	var n, r, i = Io(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var Ro = [
	"defaultInputValue",
	"defaultMenuIsOpen",
	"defaultValue",
	"inputValue",
	"menuIsOpen",
	"onChange",
	"onInputChange",
	"onMenuClose",
	"onMenuOpen",
	"value"
];
function zo(e) {
	var n = e.defaultInputValue, r = n === void 0 ? "" : n, i = e.defaultMenuIsOpen, a = i === void 0 ? !1 : i, o = e.defaultValue, s = o === void 0 ? null : o, l = e.inputValue, u = e.menuIsOpen, d = e.onChange, f = e.onInputChange, p = e.onMenuClose, m = e.onMenuOpen, h = e.value, g = Lo(e, Ro), _ = Fo(c(l === void 0 ? r : l), 2), v = _[0], y = _[1], b = Fo(c(u === void 0 ? a : u), 2), x = b[0], S = b[1], C = Fo(c(h === void 0 ? s : h), 2), w = C[0], T = C[1], E = t(function(e, t) {
		typeof d == "function" && d(e, t), T(e);
	}, [d]), D = t(function(e, t) {
		var n;
		typeof f == "function" && (n = f(e, t)), y(n === void 0 ? e : n);
	}, [f]), O = t(function() {
		typeof m == "function" && m(), S(!0);
	}, [m]), k = t(function() {
		typeof p == "function" && p(), S(!1);
	}, [p]), A = l === void 0 ? v : l, j = u === void 0 ? x : u, M = h === void 0 ? w : h;
	return $($({}, g), {}, {
		inputValue: A,
		menuIsOpen: j,
		onChange: E,
		onInputChange: D,
		onMenuClose: k,
		onMenuOpen: O,
		value: M
	});
}
function Bo() {
	return Bo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Bo.apply(null, arguments);
}
function Vo(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Ho(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Do(r.key), r);
	}
}
function Uo(e, t, n) {
	return t && Ho(e.prototype, t), n && Ho(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wo(e, t) {
	return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Wo(e, t);
}
function Go(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wo(e, t);
}
function Ko(e) {
	return Ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, Ko(e);
}
function qo() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (qo = function() {
		return !!e;
	})();
}
function Jo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Yo(e, t) {
	if (t && (To(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return Jo(e);
}
function Xo(e) {
	var t = qo();
	return function() {
		var n, r = Ko(e);
		if (t) {
			var i = Ko(this).constructor;
			n = Reflect.construct(r, arguments, i);
		} else n = r.apply(this, arguments);
		return Yo(this, n);
	};
}
function Zo(e) {
	if (Array.isArray(e)) return Mo(e);
}
function Qo(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $o() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function es(e) {
	return Zo(e) || Qo(e) || No(e) || $o();
}
function ts(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var ns = C, rs = [
	"className",
	"clearValue",
	"cx",
	"getStyles",
	"getClassNames",
	"getValue",
	"hasValue",
	"isMulti",
	"isRtl",
	"options",
	"selectOption",
	"selectProps",
	"setValue",
	"theme"
], is = function() {};
function as(e, t) {
	return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function os(e, t) {
	var n = [...arguments].slice(2), r = [].concat(n);
	if (t && e) for (var i in t) t.hasOwnProperty(i) && t[i] && r.push(`${as(e, i)}`);
	return r.filter(function(e) {
		return e;
	}).map(function(e) {
		return String(e).trim();
	}).join(" ");
}
var ss = function(e) {
	return Es(e) ? e.filter(Boolean) : To(e) === "object" && e !== null ? [e] : [];
}, cs = function(e) {
	return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, $({}, Lo(e, rs));
}, ls = function(e, t, n) {
	var r = e.cx, i = e.getStyles, a = e.getClassNames, o = e.className;
	return {
		css: i(t, e),
		className: r(n ?? {}, a(t, e), o)
	};
};
function us(e) {
	return [
		document.documentElement,
		document.body,
		window
	].indexOf(e) > -1;
}
function ds(e) {
	return us(e) ? window.innerHeight : e.clientHeight;
}
function fs(e) {
	return us(e) ? window.pageYOffset : e.scrollTop;
}
function ps(e, t) {
	if (us(e)) {
		window.scrollTo(0, t);
		return;
	}
	e.scrollTop = t;
}
function ms(e) {
	var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
	if (t.position === "fixed") return document.documentElement;
	for (var i = e; i = i.parentElement;) if (t = getComputedStyle(i), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX)) return i;
	return document.documentElement;
}
function hs(e, t, n, r) {
	return n * ((e = e / r - 1) * e * e + 1) + t;
}
function gs(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : is, i = fs(e), a = t - i, o = 10, s = 0;
	function c() {
		s += o, ps(e, hs(s, i, a, n)), s < n ? window.requestAnimationFrame(c) : r(e);
	}
	c();
}
function _s(e, t) {
	var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
	r.bottom + i > n.bottom ? ps(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && ps(e, Math.max(t.offsetTop - i, 0));
}
function vs(e) {
	var t = e.getBoundingClientRect();
	return {
		bottom: t.bottom,
		height: t.height,
		left: t.left,
		right: t.right,
		top: t.top,
		width: t.width
	};
}
function ys() {
	try {
		return document.createEvent("TouchEvent"), !0;
	} catch {
		return !1;
	}
}
function bs() {
	try {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	} catch {
		return !1;
	}
}
var xs = !1, Ss = { get passive() {
	return xs = !0;
} }, Cs = typeof window < "u" ? window : {};
Cs.addEventListener && Cs.removeEventListener && (Cs.addEventListener("p", is, Ss), Cs.removeEventListener("p", is, !1));
var ws = xs;
function Ts(e) {
	return e != null;
}
function Es(e) {
	return Array.isArray(e);
}
function Ds(e, t, n) {
	return e ? t : n;
}
var Os = function(e) {
	var t = [...arguments].slice(1);
	return Object.entries(e).filter(function(e) {
		var n = Fo(e, 1)[0];
		return !t.includes(n);
	}).reduce(function(e, t) {
		var n = Fo(t, 2), r = n[0];
		return e[r] = n[1], e;
	}, {});
}, ks = ["children", "innerProps"], As = ["children", "innerProps"];
function js(e) {
	var t = e.maxHeight, n = e.menuEl, r = e.minHeight, i = e.placement, a = e.shouldScroll, o = e.isFixedPosition, s = e.controlHeight, c = ms(n), l = {
		placement: "bottom",
		maxHeight: t
	};
	if (!n || !n.offsetParent) return l;
	var u = c.getBoundingClientRect().height, d = n.getBoundingClientRect(), f = d.bottom, p = d.height, m = d.top, h = n.offsetParent.getBoundingClientRect().top, g = o ? window.innerHeight : ds(c), _ = fs(c), v = parseInt(getComputedStyle(n).marginBottom, 10), y = parseInt(getComputedStyle(n).marginTop, 10), b = h - y, x = g - m, S = b + _, C = u - _ - m, w = f - g + _ + v, T = _ + m - y, E = 160;
	switch (i) {
		case "auto":
		case "bottom":
			if (x >= p) return {
				placement: "bottom",
				maxHeight: t
			};
			if (C >= p && !o) return a && gs(c, w, E), {
				placement: "bottom",
				maxHeight: t
			};
			if (!o && C >= r || o && x >= r) return a && gs(c, w, E), {
				placement: "bottom",
				maxHeight: o ? x - v : C - v
			};
			if (i === "auto" || o) {
				var D = t, O = o ? b : S;
				return O >= r && (D = Math.min(O - v - s, t)), {
					placement: "top",
					maxHeight: D
				};
			}
			if (i === "bottom") return a && ps(c, w), {
				placement: "bottom",
				maxHeight: t
			};
			break;
		case "top":
			if (b >= p) return {
				placement: "top",
				maxHeight: t
			};
			if (S >= p && !o) return a && gs(c, T, E), {
				placement: "top",
				maxHeight: t
			};
			if (!o && S >= r || o && b >= r) {
				var k = t;
				return (!o && S >= r || o && b >= r) && (k = o ? b - y : S - y), a && gs(c, T, E), {
					placement: "top",
					maxHeight: k
				};
			}
			return {
				placement: "bottom",
				maxHeight: t
			};
		default: throw Error(`Invalid placement provided "${i}".`);
	}
	return l;
}
function Ms(e) {
	return e ? {
		bottom: "top",
		top: "bottom"
	}[e] : "bottom";
}
var Ns = function(e) {
	return e === "auto" ? "bottom" : e;
}, Ps = function(e, t) {
	var n, r = e.placement, i = e.theme, a = i.borderRadius, o = i.spacing, s = i.colors;
	return $((n = { label: "menu" }, Oo(n, Ms(r), "100%"), Oo(n, "position", "absolute"), Oo(n, "width", "100%"), Oo(n, "zIndex", 1), n), t ? {} : {
		backgroundColor: s.neutral0,
		borderRadius: a,
		boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
		marginBottom: o.menuGutter,
		marginTop: o.menuGutter
	});
}, Fs = /* @__PURE__ */ r(null), Is = function(e) {
	var t = e.children, n = e.minMenuHeight, r = e.maxMenuHeight, i = e.menuPlacement, a = e.menuPosition, o = e.menuShouldScrollIntoView, s = e.theme, l = (S(Fs) || {}).setPortalPlacement, u = p(null), d = Fo(c(r), 2), f = d[0], m = d[1], h = Fo(c(null), 2), g = h[0], _ = h[1], v = s.spacing.controlHeight;
	return ns(function() {
		var e = u.current;
		if (e) {
			var t = a === "fixed", s = js({
				maxHeight: r,
				menuEl: e,
				minHeight: n,
				placement: i,
				shouldScroll: o && !t,
				isFixedPosition: t,
				controlHeight: v
			});
			m(s.maxHeight), _(s.placement), l?.(s.placement);
		}
	}, [
		r,
		i,
		a,
		o,
		n,
		l,
		v
	]), t({
		ref: u,
		placerProps: $($({}, e), {}, {
			placement: g || Ns(i),
			maxHeight: f
		})
	});
}, Ls = function(e) {
	var t = e.children, n = e.innerRef, r = e.innerProps;
	return x("div", Bo({}, ls(e, "menu", { menu: !0 }), { ref: n }, r), t);
}, Rs = function(e, t) {
	var n = e.maxHeight, r = e.theme.spacing.baseUnit;
	return $({
		maxHeight: n,
		overflowY: "auto",
		position: "relative",
		WebkitOverflowScrolling: "touch"
	}, t ? {} : {
		paddingBottom: r,
		paddingTop: r
	});
}, zs = function(e) {
	var t = e.children, n = e.innerProps, r = e.innerRef, i = e.isMulti;
	return x("div", Bo({}, ls(e, "menuList", {
		"menu-list": !0,
		"menu-list--is-multi": i
	}), { ref: r }, n), t);
}, Bs = function(e, t) {
	var n = e.theme, r = n.spacing.baseUnit, i = n.colors;
	return $({ textAlign: "center" }, t ? {} : {
		color: i.neutral40,
		padding: `${r * 2}px ${r * 3}px`
	});
}, Vs = Bs, Hs = Bs, Us = function(e) {
	var t = e.children, n = t === void 0 ? "No options" : t, r = e.innerProps, i = Lo(e, ks);
	return x("div", Bo({}, ls($($({}, i), {}, {
		children: n,
		innerProps: r
	}), "noOptionsMessage", {
		"menu-notice": !0,
		"menu-notice--no-options": !0
	}), r), n);
}, Ws = function(e) {
	var t = e.children, n = t === void 0 ? "Loading..." : t, r = e.innerProps, i = Lo(e, As);
	return x("div", Bo({}, ls($($({}, i), {}, {
		children: n,
		innerProps: r
	}), "loadingMessage", {
		"menu-notice": !0,
		"menu-notice--loading": !0
	}), r), n);
}, Gs = function(e) {
	var t = e.rect, n = e.offset, r = e.position;
	return {
		left: t.left,
		position: r,
		top: n,
		width: t.width,
		zIndex: 1
	};
}, Ks = function(e) {
	var n = e.appendTo, r = e.children, i = e.controlElement, a = e.innerProps, o = e.menuPlacement, s = e.menuPosition, l = p(null), u = p(null), d = Fo(c(Ns(o)), 2), f = d[0], m = d[1], h = b(function() {
		return { setPortalPlacement: m };
	}, []), g = Fo(c(null), 2), _ = g[0], y = g[1], S = t(function() {
		if (i) {
			var e = vs(i), t = s === "fixed" ? 0 : window.pageYOffset, n = e[f] + t;
			(n !== _?.offset || e.left !== _?.rect.left || e.width !== _?.rect.width) && y({
				offset: n,
				rect: e
			});
		}
	}, [
		i,
		s,
		f,
		_?.offset,
		_?.rect.left,
		_?.rect.width
	]);
	ns(function() {
		S();
	}, [S]);
	var C = t(function() {
		typeof u.current == "function" && (u.current(), u.current = null), i && l.current && (u.current = cr(i, l.current, S, { elementResize: "ResizeObserver" in window }));
	}, [i, S]);
	ns(function() {
		C();
	}, [C]);
	var w = t(function(e) {
		l.current = e, C();
	}, [C]);
	if (!n && s !== "fixed" || !_) return null;
	var T = x("div", Bo({ ref: w }, ls($($({}, e), {}, {
		offset: _.offset,
		position: s,
		rect: _.rect
	}), "menuPortal", { "menu-portal": !0 }), a), r);
	return x(Fs.Provider, { value: h }, n ? /* @__PURE__ */ v(T, n) : T);
}, qs = function(e) {
	var t = e.isDisabled;
	return {
		label: "container",
		direction: e.isRtl ? "rtl" : void 0,
		pointerEvents: t ? "none" : void 0,
		position: "relative"
	};
}, Js = function(e) {
	var t = e.children, n = e.innerProps, r = e.isDisabled, i = e.isRtl;
	return x("div", Bo({}, ls(e, "container", {
		"--is-disabled": r,
		"--is-rtl": i
	}), n), t);
}, Ys = function(e, t) {
	var n = e.theme.spacing, r = e.isMulti, i = e.hasValue, a = e.selectProps.controlShouldRenderValue;
	return $({
		alignItems: "center",
		display: r && i && a ? "flex" : "grid",
		flex: 1,
		flexWrap: "wrap",
		WebkitOverflowScrolling: "touch",
		position: "relative",
		overflow: "hidden"
	}, t ? {} : { padding: `${n.baseUnit / 2}px ${n.baseUnit * 2}px` });
}, Xs = function(e) {
	var t = e.children, n = e.innerProps, r = e.isMulti, i = e.hasValue;
	return x("div", Bo({}, ls(e, "valueContainer", {
		"value-container": !0,
		"value-container--is-multi": r,
		"value-container--has-value": i
	}), n), t);
}, Zs = function() {
	return {
		alignItems: "center",
		alignSelf: "stretch",
		display: "flex",
		flexShrink: 0
	};
}, Qs = function(e) {
	var t = e.children, n = e.innerProps;
	return x("div", Bo({}, ls(e, "indicatorsContainer", { indicators: !0 }), n), t);
}, $s, ec = ["size"], tc = [
	"innerProps",
	"isRtl",
	"size"
];
function nc() {
	return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var rc = process.env.NODE_ENV === "production" ? {
	name: "8mmkcg",
	styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
	name: "tj5bde-Svg",
	styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
	map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
	toString: nc
}, ic = function(e) {
	var t = e.size, n = Lo(e, ec);
	return x("svg", Bo({
		height: t,
		width: t,
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		focusable: "false",
		css: rc
	}, n));
}, ac = function(e) {
	return x(ic, Bo({ size: 20 }, e), x("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" }));
}, oc = function(e) {
	return x(ic, Bo({ size: 20 }, e), x("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }));
}, sc = function(e, t) {
	var n = e.isFocused, r = e.theme, i = r.spacing.baseUnit, a = r.colors;
	return $({
		label: "indicatorContainer",
		display: "flex",
		transition: "color 150ms"
	}, t ? {} : {
		color: n ? a.neutral60 : a.neutral20,
		padding: i * 2,
		":hover": { color: n ? a.neutral80 : a.neutral40 }
	});
}, cc = sc, lc = function(e) {
	var t = e.children, n = e.innerProps;
	return x("div", Bo({}, ls(e, "dropdownIndicator", {
		indicator: !0,
		"dropdown-indicator": !0
	}), n), t || x(oc, null));
}, uc = sc, dc = function(e) {
	var t = e.children, n = e.innerProps;
	return x("div", Bo({}, ls(e, "clearIndicator", {
		indicator: !0,
		"clear-indicator": !0
	}), n), t || x(ac, null));
}, fc = function(e, t) {
	var n = e.isDisabled, r = e.theme, i = r.spacing.baseUnit, a = r.colors;
	return $({
		label: "indicatorSeparator",
		alignSelf: "stretch",
		width: 1
	}, t ? {} : {
		backgroundColor: n ? a.neutral10 : a.neutral20,
		marginBottom: i * 2,
		marginTop: i * 2
	});
}, pc = function(e) {
	var t = e.innerProps;
	return x("span", Bo({}, t, ls(e, "indicatorSeparator", { "indicator-separator": !0 })));
}, mc = a($s ||= ts(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])), hc = function(e, t) {
	var n = e.isFocused, r = e.size, i = e.theme, a = i.colors, o = i.spacing.baseUnit;
	return $({
		label: "loadingIndicator",
		display: "flex",
		transition: "color 150ms",
		alignSelf: "center",
		fontSize: r,
		lineHeight: 1,
		marginRight: r,
		textAlign: "center",
		verticalAlign: "middle"
	}, t ? {} : {
		color: n ? a.neutral60 : a.neutral20,
		padding: o * 2
	});
}, gc = function(t) {
	var n = t.delay, r = t.offset;
	return x("span", { css: /* @__PURE__ */ e({
		animation: `${mc} 1s ease-in-out ${n}ms infinite;`,
		backgroundColor: "currentColor",
		borderRadius: "1em",
		display: "inline-block",
		marginLeft: r ? "1em" : void 0,
		height: "1em",
		verticalAlign: "top",
		width: "1em"
	}, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */") });
}, _c = function(e) {
	var t = e.innerProps, n = e.isRtl, r = e.size, i = r === void 0 ? 4 : r, a = Lo(e, tc);
	return x("div", Bo({}, ls($($({}, a), {}, {
		innerProps: t,
		isRtl: n,
		size: i
	}), "loadingIndicator", {
		indicator: !0,
		"loading-indicator": !0
	}), t), x(gc, {
		delay: 0,
		offset: n
	}), x(gc, {
		delay: 160,
		offset: !0
	}), x(gc, {
		delay: 320,
		offset: !n
	}));
}, vc = function(e, t) {
	var n = e.isDisabled, r = e.isFocused, i = e.theme, a = i.colors, o = i.borderRadius, s = i.spacing;
	return $({
		label: "control",
		alignItems: "center",
		cursor: "default",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		minHeight: s.controlHeight,
		outline: "0 !important",
		position: "relative",
		transition: "all 100ms"
	}, t ? {} : {
		backgroundColor: n ? a.neutral5 : a.neutral0,
		borderColor: n ? a.neutral10 : r ? a.primary : a.neutral20,
		borderRadius: o,
		borderStyle: "solid",
		borderWidth: 1,
		boxShadow: r ? `0 0 0 1px ${a.primary}` : void 0,
		"&:hover": { borderColor: r ? a.primary : a.neutral30 }
	});
}, yc = function(e) {
	var t = e.children, n = e.isDisabled, r = e.isFocused, i = e.innerRef, a = e.innerProps, o = e.menuIsOpen;
	return x("div", Bo({ ref: i }, ls(e, "control", {
		control: !0,
		"control--is-disabled": n,
		"control--is-focused": r,
		"control--menu-is-open": o
	}), a, { "aria-disabled": n || void 0 }), t);
}, bc = ["data"], xc = function(e, t) {
	var n = e.theme.spacing;
	return t ? {} : {
		paddingBottom: n.baseUnit * 2,
		paddingTop: n.baseUnit * 2
	};
}, Sc = function(e) {
	var t = e.children, n = e.cx, r = e.getStyles, i = e.getClassNames, a = e.Heading, o = e.headingProps, s = e.innerProps, c = e.label, l = e.theme, u = e.selectProps;
	return x("div", Bo({}, ls(e, "group", { group: !0 }), s), x(a, Bo({}, o, {
		selectProps: u,
		theme: l,
		getStyles: r,
		getClassNames: i,
		cx: n
	}), c), x("div", null, t));
}, Cc = function(e, t) {
	var n = e.theme, r = n.colors, i = n.spacing;
	return $({
		label: "group",
		cursor: "default",
		display: "block"
	}, t ? {} : {
		color: r.neutral40,
		fontSize: "75%",
		fontWeight: 500,
		marginBottom: "0.25em",
		paddingLeft: i.baseUnit * 3,
		paddingRight: i.baseUnit * 3,
		textTransform: "uppercase"
	});
}, wc = function(e) {
	var t = cs(e);
	t.data;
	var n = Lo(t, bc);
	return x("div", Bo({}, ls(e, "groupHeading", { "group-heading": !0 }), n));
}, Tc = Sc, Ec = [
	"innerRef",
	"isDisabled",
	"isHidden",
	"inputClassName"
], Dc = function(e, t) {
	var n = e.isDisabled, r = e.value, i = e.theme, a = i.spacing, o = i.colors;
	return $($({
		visibility: n ? "hidden" : "visible",
		transform: r ? "translateZ(0)" : ""
	}, kc), t ? {} : {
		margin: a.baseUnit / 2,
		paddingBottom: a.baseUnit / 2,
		paddingTop: a.baseUnit / 2,
		color: o.neutral80
	});
}, Oc = {
	gridArea: "1 / 2",
	font: "inherit",
	minWidth: "2px",
	border: 0,
	margin: 0,
	outline: 0,
	padding: 0
}, kc = {
	flex: "1 1 auto",
	display: "inline-grid",
	gridArea: "1 / 1 / 2 / 3",
	gridTemplateColumns: "0 min-content",
	"&:after": $({
		content: "attr(data-value) \" \"",
		visibility: "hidden",
		whiteSpace: "pre"
	}, Oc)
}, Ac = function(e) {
	return $({
		label: "input",
		color: "inherit",
		background: 0,
		opacity: e ? 0 : 1,
		width: "100%"
	}, Oc);
}, jc = function(e) {
	var t = e.cx, n = e.value, r = cs(e), i = r.innerRef, a = r.isDisabled, o = r.isHidden, s = r.inputClassName, c = Lo(r, Ec);
	return x("div", Bo({}, ls(e, "input", { "input-container": !0 }), { "data-value": n || "" }), x("input", Bo({
		className: t({ input: !0 }, s),
		ref: i,
		style: Ac(o),
		disabled: a
	}, c)));
}, Mc = function(e, t) {
	var n = e.theme, r = n.spacing, i = n.borderRadius, a = n.colors;
	return $({
		label: "multiValue",
		display: "flex",
		minWidth: 0
	}, t ? {} : {
		backgroundColor: a.neutral10,
		borderRadius: i / 2,
		margin: r.baseUnit / 2
	});
}, Nc = function(e, t) {
	var n = e.theme, r = n.borderRadius, i = n.colors, a = e.cropWithEllipsis;
	return $({
		overflow: "hidden",
		textOverflow: a || a === void 0 ? "ellipsis" : void 0,
		whiteSpace: "nowrap"
	}, t ? {} : {
		borderRadius: r / 2,
		color: i.neutral80,
		fontSize: "85%",
		padding: 3,
		paddingLeft: 6
	});
}, Pc = function(e, t) {
	var n = e.theme, r = n.spacing, i = n.borderRadius, a = n.colors, o = e.isFocused;
	return $({
		alignItems: "center",
		display: "flex"
	}, t ? {} : {
		borderRadius: i / 2,
		backgroundColor: o ? a.dangerLight : void 0,
		paddingLeft: r.baseUnit,
		paddingRight: r.baseUnit,
		":hover": {
			backgroundColor: a.dangerLight,
			color: a.danger
		}
	});
}, Fc = function(e) {
	var t = e.children, n = e.innerProps;
	return x("div", n, t);
}, Ic = Fc, Lc = Fc;
function Rc(e) {
	var t = e.children, n = e.innerProps;
	return x("div", Bo({ role: "button" }, n), t || x(ac, { size: 14 }));
}
var zc = function(e) {
	var t = e.children, n = e.components, r = e.data, i = e.innerProps, a = e.isDisabled, o = e.removeProps, s = e.selectProps, c = n.Container, l = n.Label, u = n.Remove;
	return x(c, {
		data: r,
		innerProps: $($({}, ls(e, "multiValue", {
			"multi-value": !0,
			"multi-value--is-disabled": a
		})), i),
		selectProps: s
	}, x(l, {
		data: r,
		innerProps: $({}, ls(e, "multiValueLabel", { "multi-value__label": !0 })),
		selectProps: s
	}, t), x(u, {
		data: r,
		innerProps: $($({}, ls(e, "multiValueRemove", { "multi-value__remove": !0 })), {}, { "aria-label": `Remove ${t || "option"}` }, o),
		selectProps: s
	}));
}, Bc = function(e, t) {
	var n = e.isDisabled, r = e.isFocused, i = e.isSelected, a = e.theme, o = a.spacing, s = a.colors;
	return $({
		label: "option",
		cursor: "default",
		display: "block",
		fontSize: "inherit",
		width: "100%",
		userSelect: "none",
		WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
	}, t ? {} : {
		backgroundColor: i ? s.primary : r ? s.primary25 : "transparent",
		color: n ? s.neutral20 : i ? s.neutral0 : "inherit",
		padding: `${o.baseUnit * 2}px ${o.baseUnit * 3}px`,
		":active": { backgroundColor: n ? void 0 : i ? s.primary : s.primary50 }
	});
}, Vc = function(e) {
	var t = e.children, n = e.isDisabled, r = e.isFocused, i = e.isSelected, a = e.innerRef, o = e.innerProps;
	return x("div", Bo({}, ls(e, "option", {
		option: !0,
		"option--is-disabled": n,
		"option--is-focused": r,
		"option--is-selected": i
	}), {
		ref: a,
		"aria-disabled": n
	}, o), t);
}, Hc = function(e, t) {
	var n = e.theme, r = n.spacing, i = n.colors;
	return $({
		label: "placeholder",
		gridArea: "1 / 1 / 2 / 3"
	}, t ? {} : {
		color: i.neutral50,
		marginLeft: r.baseUnit / 2,
		marginRight: r.baseUnit / 2
	});
}, Uc = function(e) {
	var t = e.children, n = e.innerProps;
	return x("div", Bo({}, ls(e, "placeholder", { placeholder: !0 }), n), t);
}, Wc = function(e, t) {
	var n = e.isDisabled, r = e.theme, i = r.spacing, a = r.colors;
	return $({
		label: "singleValue",
		gridArea: "1 / 1 / 2 / 3",
		maxWidth: "100%",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	}, t ? {} : {
		color: n ? a.neutral40 : a.neutral80,
		marginLeft: i.baseUnit / 2,
		marginRight: i.baseUnit / 2
	});
}, Gc = {
	ClearIndicator: dc,
	Control: yc,
	DropdownIndicator: lc,
	DownChevron: oc,
	CrossIcon: ac,
	Group: Tc,
	GroupHeading: wc,
	IndicatorsContainer: Qs,
	IndicatorSeparator: pc,
	Input: jc,
	LoadingIndicator: _c,
	Menu: Ls,
	MenuList: zs,
	MenuPortal: Ks,
	LoadingMessage: Ws,
	NoOptionsMessage: Us,
	MultiValue: zc,
	MultiValueContainer: Ic,
	MultiValueLabel: Lc,
	MultiValueRemove: Rc,
	Option: Vc,
	Placeholder: Uc,
	SelectContainer: Js,
	SingleValue: function(e) {
		var t = e.children, n = e.isDisabled, r = e.innerProps;
		return x("div", Bo({}, ls(e, "singleValue", {
			"single-value": !0,
			"single-value--is-disabled": n
		}), r), t);
	},
	ValueContainer: Xs
}, Kc = function(e) {
	return $($({}, Gc), e.components);
}, qc = Number.isNaN || function(e) {
	return typeof e == "number" && e !== e;
};
function Jc(e, t) {
	return !!(e === t || qc(e) && qc(t));
}
function Yc(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (!Jc(e[n], t[n])) return !1;
	return !0;
}
function Xc(e, t) {
	t === void 0 && (t = Yc);
	var n = null;
	function r() {
		var r = [...arguments];
		if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
		var i = e.apply(this, r);
		return n = {
			lastResult: i,
			lastArgs: r,
			lastThis: this
		}, i;
	}
	return r.clear = function() {
		n = null;
	}, r;
}
function Zc() {
	return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
for (var Qc = process.env.NODE_ENV === "production" ? {
	name: "7pg0cj-a11yText",
	styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
	name: "1f43avz-a11yText-A11yText",
	styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
	map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
	toString: Zc
}, $c = function(e) {
	return x("span", Bo({ css: Qc }, e));
}, el = {
	guidance: function(e) {
		var t = e.isSearchable, n = e.isMulti, r = e.tabSelectsValue, i = e.context, a = e.isInitialFocus;
		switch (i) {
			case "menu": return `Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu${r ? ", press Tab to select the option and exit the menu" : ""}.`;
			case "input": return a ? `${e["aria-label"] || "Select"} is focused ${t ? ",type to refine list" : ""}, press Down to open the menu, ${n ? " press left to focus selected values" : ""}` : "";
			case "value": return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
			default: return "";
		}
	},
	onChange: function(e) {
		var t = e.action, n = e.label, r = n === void 0 ? "" : n, i = e.labels, a = e.isDisabled;
		switch (t) {
			case "deselect-option":
			case "pop-value":
			case "remove-value": return `option ${r}, deselected.`;
			case "clear": return "All selected options have been cleared.";
			case "initial-input-focus": return `option${i.length > 1 ? "s" : ""} ${i.join(",")}, selected.`;
			case "select-option": return a ? `option ${r} is disabled. Select another option.` : `option ${r}, selected.`;
			default: return "";
		}
	},
	onFocus: function(e) {
		var t = e.context, n = e.focused, r = e.options, i = e.label, a = i === void 0 ? "" : i, o = e.selectValue, s = e.isDisabled, c = e.isSelected, l = e.isAppleDevice, u = function(e, t) {
			return e && e.length ? `${e.indexOf(t) + 1} of ${e.length}` : "";
		};
		return t === "value" && o ? `value ${a} focused, ${u(o, n)}.` : t === "menu" && l ? `${a}${`${c ? " selected" : ""}${s ? " disabled" : ""}`}, ${u(r, n)}.` : "";
	},
	onFilter: function(e) {
		var t = e.inputValue;
		return `${e.resultsMessage}${t ? " for search term " + t : ""}.`;
	}
}, tl = function(e) {
	var t = e.ariaSelection, n = e.focusedOption, r = e.focusedValue, a = e.focusableOptions, o = e.isFocused, s = e.selectValue, c = e.selectProps, l = e.id, u = e.isAppleDevice, d = c.ariaLiveMessages, f = c.getOptionLabel, p = c.inputValue, m = c.isMulti, h = c.isOptionDisabled, g = c.isSearchable, _ = c.menuIsOpen, v = c.options, y = c.screenReaderStatus, S = c.tabSelectsValue, C = c.isLoading, w = c["aria-label"], T = c["aria-live"], E = b(function() {
		return $($({}, el), d || {});
	}, [d]), D = b(function() {
		var e = "";
		if (t && E.onChange) {
			var n = t.option, r = t.options, i = t.removedValue, a = t.removedValues, o = t.value, c = i || n || function(e) {
				return Array.isArray(e) ? null : e;
			}(o), l = c ? f(c) : "", u = r || a || void 0, d = u ? u.map(f) : [], p = $({
				isDisabled: c && h(c, s),
				label: l,
				labels: d
			}, t);
			e = E.onChange(p);
		}
		return e;
	}, [
		t,
		E,
		h,
		s,
		f
	]), O = b(function() {
		var e = "", t = n || r, i = !!(n && s && s.includes(n));
		if (t && E.onFocus) {
			var o = {
				focused: t,
				label: f(t),
				isDisabled: h(t, s),
				isSelected: i,
				options: a,
				context: t === n ? "menu" : "value",
				selectValue: s,
				isAppleDevice: u
			};
			e = E.onFocus(o);
		}
		return e;
	}, [
		n,
		r,
		f,
		h,
		E,
		a,
		s,
		u
	]), k = b(function() {
		var e = "";
		if (_ && v.length && !C && E.onFilter) {
			var t = y({ count: a.length });
			e = E.onFilter({
				inputValue: p,
				resultsMessage: t
			});
		}
		return e;
	}, [
		a,
		p,
		_,
		E,
		v,
		y,
		C
	]), A = t?.action === "initial-input-focus", j = b(function() {
		var e = "";
		if (E.guidance) {
			var t = r ? "value" : _ ? "menu" : "input";
			e = E.guidance({
				"aria-label": w,
				context: t,
				isDisabled: n && h(n, s),
				isMulti: m,
				isSearchable: g,
				tabSelectsValue: S,
				isInitialFocus: A
			});
		}
		return e;
	}, [
		w,
		n,
		r,
		m,
		h,
		g,
		_,
		E,
		s,
		S,
		A
	]), M = x(i, null, x("span", { id: "aria-selection" }, D), x("span", { id: "aria-focused" }, O), x("span", { id: "aria-results" }, k), x("span", { id: "aria-guidance" }, j));
	return x(i, null, x($c, { id: l }, A && M), x($c, {
		"aria-live": T,
		"aria-atomic": "false",
		"aria-relevant": "additions text",
		role: "log"
	}, o && !A && M));
}, nl = [
	{
		base: "A",
		letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
	},
	{
		base: "AA",
		letters: "Ꜳ"
	},
	{
		base: "AE",
		letters: "ÆǼǢ"
	},
	{
		base: "AO",
		letters: "Ꜵ"
	},
	{
		base: "AU",
		letters: "Ꜷ"
	},
	{
		base: "AV",
		letters: "ꜸꜺ"
	},
	{
		base: "AY",
		letters: "Ꜽ"
	},
	{
		base: "B",
		letters: "BⒷＢḂḄḆɃƂƁ"
	},
	{
		base: "C",
		letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
	},
	{
		base: "D",
		letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
	},
	{
		base: "DZ",
		letters: "ǱǄ"
	},
	{
		base: "Dz",
		letters: "ǲǅ"
	},
	{
		base: "E",
		letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
	},
	{
		base: "F",
		letters: "FⒻＦḞƑꝻ"
	},
	{
		base: "G",
		letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
	},
	{
		base: "H",
		letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
	},
	{
		base: "I",
		letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
	},
	{
		base: "J",
		letters: "JⒿＪĴɈ"
	},
	{
		base: "K",
		letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
	},
	{
		base: "L",
		letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
	},
	{
		base: "LJ",
		letters: "Ǉ"
	},
	{
		base: "Lj",
		letters: "ǈ"
	},
	{
		base: "M",
		letters: "MⓂＭḾṀṂⱮƜ"
	},
	{
		base: "N",
		letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
	},
	{
		base: "NJ",
		letters: "Ǌ"
	},
	{
		base: "Nj",
		letters: "ǋ"
	},
	{
		base: "O",
		letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
	},
	{
		base: "OI",
		letters: "Ƣ"
	},
	{
		base: "OO",
		letters: "Ꝏ"
	},
	{
		base: "OU",
		letters: "Ȣ"
	},
	{
		base: "P",
		letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
	},
	{
		base: "Q",
		letters: "QⓆＱꝖꝘɊ"
	},
	{
		base: "R",
		letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
	},
	{
		base: "S",
		letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
	},
	{
		base: "T",
		letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
	},
	{
		base: "TZ",
		letters: "Ꜩ"
	},
	{
		base: "U",
		letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
	},
	{
		base: "V",
		letters: "VⓋＶṼṾƲꝞɅ"
	},
	{
		base: "VY",
		letters: "Ꝡ"
	},
	{
		base: "W",
		letters: "WⓌＷẀẂŴẆẄẈⱲ"
	},
	{
		base: "X",
		letters: "XⓍＸẊẌ"
	},
	{
		base: "Y",
		letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
	},
	{
		base: "Z",
		letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
	},
	{
		base: "a",
		letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
	},
	{
		base: "aa",
		letters: "ꜳ"
	},
	{
		base: "ae",
		letters: "æǽǣ"
	},
	{
		base: "ao",
		letters: "ꜵ"
	},
	{
		base: "au",
		letters: "ꜷ"
	},
	{
		base: "av",
		letters: "ꜹꜻ"
	},
	{
		base: "ay",
		letters: "ꜽ"
	},
	{
		base: "b",
		letters: "bⓑｂḃḅḇƀƃɓ"
	},
	{
		base: "c",
		letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
	},
	{
		base: "d",
		letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
	},
	{
		base: "dz",
		letters: "ǳǆ"
	},
	{
		base: "e",
		letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
	},
	{
		base: "f",
		letters: "fⓕｆḟƒꝼ"
	},
	{
		base: "g",
		letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
	},
	{
		base: "h",
		letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
	},
	{
		base: "hv",
		letters: "ƕ"
	},
	{
		base: "i",
		letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
	},
	{
		base: "j",
		letters: "jⓙｊĵǰɉ"
	},
	{
		base: "k",
		letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
	},
	{
		base: "l",
		letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
	},
	{
		base: "lj",
		letters: "ǉ"
	},
	{
		base: "m",
		letters: "mⓜｍḿṁṃɱɯ"
	},
	{
		base: "n",
		letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
	},
	{
		base: "nj",
		letters: "ǌ"
	},
	{
		base: "o",
		letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
	},
	{
		base: "oi",
		letters: "ƣ"
	},
	{
		base: "ou",
		letters: "ȣ"
	},
	{
		base: "oo",
		letters: "ꝏ"
	},
	{
		base: "p",
		letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
	},
	{
		base: "q",
		letters: "qⓠｑɋꝗꝙ"
	},
	{
		base: "r",
		letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
	},
	{
		base: "s",
		letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
	},
	{
		base: "t",
		letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
	},
	{
		base: "tz",
		letters: "ꜩ"
	},
	{
		base: "u",
		letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
	},
	{
		base: "v",
		letters: "vⓥｖṽṿʋꝟʌ"
	},
	{
		base: "vy",
		letters: "ꝡ"
	},
	{
		base: "w",
		letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
	},
	{
		base: "x",
		letters: "xⓧｘẋẍ"
	},
	{
		base: "y",
		letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
	},
	{
		base: "z",
		letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
	}
], rl = RegExp("[" + nl.map(function(e) {
	return e.letters;
}).join("") + "]", "g"), il = {}, al = 0; al < nl.length; al++) for (var ol = nl[al], sl = 0; sl < ol.letters.length; sl++) il[ol.letters[sl]] = ol.base;
var cl = function(e) {
	return e.replace(rl, function(e) {
		return il[e];
	});
}, ll = Xc(cl), ul = function(e) {
	return e.replace(/^\s+|\s+$/g, "");
}, dl = function(e) {
	return `${e.label} ${e.value}`;
}, fl = function(e) {
	return function(t, n) {
		if (t.data.__isNew__) return !0;
		var r = $({
			ignoreCase: !0,
			ignoreAccents: !0,
			stringify: dl,
			trim: !0,
			matchFrom: "any"
		}, e), i = r.ignoreCase, a = r.ignoreAccents, o = r.stringify, s = r.trim, c = r.matchFrom, l = s ? ul(n) : n, u = s ? ul(o(t)) : o(t);
		return i && (l = l.toLowerCase(), u = u.toLowerCase()), a && (l = ll(l), u = cl(u)), c === "start" ? u.substr(0, l.length) === l : u.indexOf(l) > -1;
	};
}, pl = ["innerRef"];
function ml(t) {
	var n = t.innerRef, r = Os(Lo(t, pl), "onExited", "in", "enter", "exit", "appear");
	return x("input", Bo({ ref: n }, r, { css: /* @__PURE__ */ e({
		label: "dummyInput",
		background: 0,
		border: 0,
		caretColor: "transparent",
		fontSize: "inherit",
		gridArea: "1 / 1 / 2 / 3",
		outline: 0,
		padding: 0,
		width: 1,
		color: "transparent",
		left: -100,
		opacity: 0,
		position: "relative",
		transform: "scale(.01)"
	}, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */") }));
}
var hl = function(e) {
	e.cancelable && e.preventDefault(), e.stopPropagation();
};
function gl(e) {
	var n = e.isEnabled, r = e.onBottomArrive, i = e.onBottomLeave, a = e.onTopArrive, s = e.onTopLeave, c = p(!1), l = p(!1), u = p(0), d = p(null), f = t(function(e, t) {
		if (d.current !== null) {
			var n = d.current, o = n.scrollTop, u = n.scrollHeight, f = n.clientHeight, p = d.current, m = t > 0, h = u - f - o, g = !1;
			h > t && c.current && (i && i(e), c.current = !1), m && l.current && (s && s(e), l.current = !1), m && t > h ? (r && !c.current && r(e), p.scrollTop = u, g = !0, c.current = !0) : !m && -t > o && (a && !l.current && a(e), p.scrollTop = 0, g = !0, l.current = !0), g && hl(e);
		}
	}, [
		r,
		i,
		a,
		s
	]), m = t(function(e) {
		f(e, e.deltaY);
	}, [f]), h = t(function(e) {
		u.current = e.changedTouches[0].clientY;
	}, []), g = t(function(e) {
		f(e, u.current - e.changedTouches[0].clientY);
	}, [f]), _ = t(function(e) {
		if (e) {
			var t = ws ? { passive: !1 } : !1;
			e.addEventListener("wheel", m, t), e.addEventListener("touchstart", h, t), e.addEventListener("touchmove", g, t);
		}
	}, [
		g,
		h,
		m
	]), v = t(function(e) {
		e && (e.removeEventListener("wheel", m, !1), e.removeEventListener("touchstart", h, !1), e.removeEventListener("touchmove", g, !1));
	}, [
		g,
		h,
		m
	]);
	return o(function() {
		if (n) {
			var e = d.current;
			return _(e), function() {
				v(e);
			};
		}
	}, [
		n,
		_,
		v
	]), function(e) {
		d.current = e;
	};
}
var _l = [
	"boxSizing",
	"height",
	"overflow",
	"paddingRight",
	"position"
], vl = {
	boxSizing: "border-box",
	overflow: "hidden",
	position: "relative",
	height: "100%"
};
function yl(e) {
	e.cancelable && e.preventDefault();
}
function bl(e) {
	e.stopPropagation();
}
function xl() {
	var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
	e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function Sl() {
	return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Cl = !!(typeof window < "u" && window.document && window.document.createElement), wl = 0, Tl = {
	capture: !1,
	passive: !1
};
function El(e) {
	var n = e.isEnabled, r = e.accountForScrollbars, i = r === void 0 ? !0 : r, a = p({}), s = p(null), c = t(function(e) {
		if (Cl) {
			var t = document.body, n = t && t.style;
			if (i && _l.forEach(function(e) {
				var t = n && n[e];
				a.current[e] = t;
			}), i && wl < 1) {
				var r = parseInt(a.current.paddingRight, 10) || 0, o = document.body ? document.body.clientWidth : 0, s = window.innerWidth - o + r || 0;
				Object.keys(vl).forEach(function(e) {
					var t = vl[e];
					n && (n[e] = t);
				}), n && (n.paddingRight = `${s}px`);
			}
			t && Sl() && (t.addEventListener("touchmove", yl, Tl), e && (e.addEventListener("touchstart", xl, Tl), e.addEventListener("touchmove", bl, Tl))), wl += 1;
		}
	}, [i]), l = t(function(e) {
		if (Cl) {
			var t = document.body, n = t && t.style;
			wl = Math.max(wl - 1, 0), i && wl < 1 && _l.forEach(function(e) {
				var t = a.current[e];
				n && (n[e] = t);
			}), t && Sl() && (t.removeEventListener("touchmove", yl, Tl), e && (e.removeEventListener("touchstart", xl, Tl), e.removeEventListener("touchmove", bl, Tl)));
		}
	}, [i]);
	return o(function() {
		if (n) {
			var e = s.current;
			return c(e), function() {
				l(e);
			};
		}
	}, [
		n,
		c,
		l
	]), function(e) {
		s.current = e;
	};
}
function Dl() {
	return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ol = function(e) {
	var t = e.target;
	return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur();
}, kl = process.env.NODE_ENV === "production" ? {
	name: "1kfdb0e",
	styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
	name: "bp8cua-ScrollManager",
	styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
	map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
	toString: Dl
};
function Al(e) {
	var t = e.children, n = e.lockEnabled, r = e.captureEnabled, a = r === void 0 ? !0 : r, o = e.onBottomArrive, s = e.onBottomLeave, c = e.onTopArrive, l = e.onTopLeave, u = gl({
		isEnabled: a,
		onBottomArrive: o,
		onBottomLeave: s,
		onTopArrive: c,
		onTopLeave: l
	}), d = El({ isEnabled: n });
	return x(i, null, n && x("div", {
		onClick: Ol,
		css: kl
	}), t(function(e) {
		u(e), d(e);
	}));
}
function jl() {
	return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ml = process.env.NODE_ENV === "production" ? {
	name: "1a0ro4n-requiredInput",
	styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
	name: "5kkxb2-requiredInput-RequiredInput",
	styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
	map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
	toString: jl
}, Nl = function(e) {
	var t = e.name, n = e.onFocus;
	return x("input", {
		required: !0,
		name: t,
		tabIndex: -1,
		"aria-hidden": "true",
		onFocus: n,
		css: Ml,
		value: "",
		onChange: function() {}
	});
};
function Pl(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function Fl() {
	return Pl(/^iPhone/i);
}
function Il() {
	return Pl(/^Mac/i);
}
function Ll() {
	return Pl(/^iPad/i) || Il() && navigator.maxTouchPoints > 1;
}
function Rl() {
	return Fl() || Ll();
}
function zl() {
	return Il() || Rl();
}
var Bl = function(e) {
	return e.label;
}, Vl = function(e) {
	return e.label;
}, Hl = function(e) {
	return e.value;
}, Ul = function(e) {
	return !!e.isDisabled;
}, Wl = {
	clearIndicator: uc,
	container: qs,
	control: vc,
	dropdownIndicator: cc,
	group: xc,
	groupHeading: Cc,
	indicatorsContainer: Zs,
	indicatorSeparator: fc,
	input: Dc,
	loadingIndicator: hc,
	loadingMessage: Hs,
	menu: Ps,
	menuList: Rs,
	menuPortal: Gs,
	multiValue: Mc,
	multiValueLabel: Nc,
	multiValueRemove: Pc,
	noOptionsMessage: Vs,
	option: Bc,
	placeholder: Hc,
	singleValue: Wc,
	valueContainer: Ys
}, Gl = {
	primary: "#2684FF",
	primary75: "#4C9AFF",
	primary50: "#B2D4FF",
	primary25: "#DEEBFF",
	danger: "#DE350B",
	dangerLight: "#FFBDAD",
	neutral0: "hsl(0, 0%, 100%)",
	neutral5: "hsl(0, 0%, 95%)",
	neutral10: "hsl(0, 0%, 90%)",
	neutral20: "hsl(0, 0%, 80%)",
	neutral30: "hsl(0, 0%, 70%)",
	neutral40: "hsl(0, 0%, 60%)",
	neutral50: "hsl(0, 0%, 50%)",
	neutral60: "hsl(0, 0%, 40%)",
	neutral70: "hsl(0, 0%, 30%)",
	neutral80: "hsl(0, 0%, 20%)",
	neutral90: "hsl(0, 0%, 10%)"
}, Kl = 4, ql = 4, Jl = {
	borderRadius: Kl,
	colors: Gl,
	spacing: {
		baseUnit: ql,
		controlHeight: 38,
		menuGutter: ql * 2
	}
}, Yl = {
	"aria-live": "polite",
	backspaceRemovesValue: !0,
	blurInputOnSelect: ys(),
	captureMenuScroll: !ys(),
	classNames: {},
	closeMenuOnSelect: !0,
	closeMenuOnScroll: !1,
	components: {},
	controlShouldRenderValue: !0,
	escapeClearsValue: !1,
	filterOption: fl(),
	formatGroupLabel: Bl,
	getOptionLabel: Vl,
	getOptionValue: Hl,
	isDisabled: !1,
	isLoading: !1,
	isMulti: !1,
	isRtl: !1,
	isSearchable: !0,
	isOptionDisabled: Ul,
	loadingMessage: function() {
		return "Loading...";
	},
	maxMenuHeight: 300,
	minMenuHeight: 140,
	menuIsOpen: !1,
	menuPlacement: "bottom",
	menuPosition: "absolute",
	menuShouldBlockScroll: !1,
	menuShouldScrollIntoView: !bs(),
	noOptionsMessage: function() {
		return "No options";
	},
	openMenuOnFocus: !1,
	openMenuOnClick: !0,
	options: [],
	pageSize: 5,
	placeholder: "Select...",
	screenReaderStatus: function(e) {
		var t = e.count;
		return `${t} result${t === 1 ? "" : "s"} available`;
	},
	styles: {},
	tabIndex: 0,
	tabSelectsValue: !0,
	unstyled: !1
};
function Xl(e, t, n, r) {
	return {
		type: "option",
		data: t,
		isDisabled: su(e, t, n),
		isSelected: cu(e, t, n),
		label: au(e, t),
		value: ou(e, t),
		index: r
	};
}
function Zl(e, t) {
	return e.options.map(function(n, r) {
		if ("options" in n) {
			var i = n.options.map(function(n, r) {
				return Xl(e, n, t, r);
			}).filter(function(t) {
				return tu(e, t);
			});
			return i.length > 0 ? {
				type: "group",
				data: n,
				options: i,
				index: r
			} : void 0;
		}
		var a = Xl(e, n, t, r);
		return tu(e, a) ? a : void 0;
	}).filter(Ts);
}
function Ql(e) {
	return e.reduce(function(e, t) {
		return t.type === "group" ? e.push.apply(e, es(t.options.map(function(e) {
			return e.data;
		}))) : e.push(t.data), e;
	}, []);
}
function $l(e, t) {
	return e.reduce(function(e, n) {
		return n.type === "group" ? e.push.apply(e, es(n.options.map(function(e) {
			return {
				data: e.data,
				id: `${t}-${n.index}-${e.index}`
			};
		}))) : e.push({
			data: n.data,
			id: `${t}-${n.index}`
		}), e;
	}, []);
}
function eu(e, t) {
	return Ql(Zl(e, t));
}
function tu(e, t) {
	var n = e.inputValue, r = n === void 0 ? "" : n, i = t.data, a = t.isSelected, o = t.label, s = t.value;
	return (!uu(e) || !a) && lu(e, {
		label: o,
		value: s,
		data: i
	}, r);
}
function nu(e, t) {
	var n = e.focusedValue, r = e.selectValue.indexOf(n);
	if (r > -1) {
		if (t.indexOf(n) > -1) return n;
		if (r < t.length) return t[r];
	}
	return null;
}
function ru(e, t) {
	var n = e.focusedOption;
	return n && t.indexOf(n) > -1 ? n : t[0];
}
var iu = function(e, t) {
	return e.find(function(e) {
		return e.data === t;
	})?.id || null;
}, au = function(e, t) {
	return e.getOptionLabel(t);
}, ou = function(e, t) {
	return e.getOptionValue(t);
};
function su(e, t, n) {
	return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function cu(e, t, n) {
	if (n.indexOf(t) > -1) return !0;
	if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, n);
	var r = ou(e, t);
	return n.some(function(t) {
		return ou(e, t) === r;
	});
}
function lu(e, t, n) {
	return e.filterOption ? e.filterOption(t, n) : !0;
}
var uu = function(e) {
	var t = e.hideSelectedOptions, n = e.isMulti;
	return t === void 0 ? n : t;
}, du = 1, fu = /* @__PURE__ */ (function(e) {
	Go(r, e);
	var t = Xo(r);
	function r(e) {
		var n;
		if (Vo(this, r), n = t.call(this, e), n.state = {
			ariaSelection: null,
			focusedOption: null,
			focusedOptionId: null,
			focusableOptionsWithIds: [],
			focusedValue: null,
			inputIsHidden: !1,
			isFocused: !1,
			selectValue: [],
			clearFocusValueOnUpdate: !1,
			prevWasFocused: !1,
			inputIsHiddenAfterUpdate: void 0,
			prevProps: void 0,
			instancePrefix: "",
			isAppleDevice: !1
		}, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.controlRef = null, n.getControlRef = function(e) {
			n.controlRef = e;
		}, n.focusedOptionRef = null, n.getFocusedOptionRef = function(e) {
			n.focusedOptionRef = e;
		}, n.menuListRef = null, n.getMenuListRef = function(e) {
			n.menuListRef = e;
		}, n.inputRef = null, n.getInputRef = function(e) {
			n.inputRef = e;
		}, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(e, t) {
			var r = n.props, i = r.onChange;
			t.name = r.name, n.ariaOnChange(e, t), i(e, t);
		}, n.setValue = function(e, t, r) {
			var i = n.props, a = i.closeMenuOnSelect, o = i.isMulti, s = i.inputValue;
			n.onInputChange("", {
				action: "set-value",
				prevInputValue: s
			}), a && (n.setState({ inputIsHiddenAfterUpdate: !o }), n.onMenuClose()), n.setState({ clearFocusValueOnUpdate: !0 }), n.onChange(e, {
				action: t,
				option: r
			});
		}, n.selectOption = function(e) {
			var t = n.props, r = t.blurInputOnSelect, i = t.isMulti, a = t.name, o = n.state.selectValue, s = i && n.isOptionSelected(e, o), c = n.isOptionDisabled(e, o);
			if (s) {
				var l = n.getOptionValue(e);
				n.setValue(o.filter(function(e) {
					return n.getOptionValue(e) !== l;
				}), "deselect-option", e);
			} else if (!c) i ? n.setValue([].concat(es(o), [e]), "select-option", e) : n.setValue(e, "select-option");
			else {
				n.ariaOnChange(e, {
					action: "select-option",
					option: e,
					name: a
				});
				return;
			}
			r && n.blurInput();
		}, n.removeValue = function(e) {
			var t = n.props.isMulti, r = n.state.selectValue, i = n.getOptionValue(e), a = r.filter(function(e) {
				return n.getOptionValue(e) !== i;
			}), o = Ds(t, a, a[0] || null);
			n.onChange(o, {
				action: "remove-value",
				removedValue: e
			}), n.focusInput();
		}, n.clearValue = function() {
			var e = n.state.selectValue;
			n.onChange(Ds(n.props.isMulti, [], null), {
				action: "clear",
				removedValues: e
			});
		}, n.popValue = function() {
			var e = n.props.isMulti, t = n.state.selectValue, r = t[t.length - 1], i = t.slice(0, t.length - 1), a = Ds(e, i, i[0] || null);
			r && n.onChange(a, {
				action: "pop-value",
				removedValue: r
			});
		}, n.getFocusedOptionId = function(e) {
			return iu(n.state.focusableOptionsWithIds, e);
		}, n.getFocusableOptionsWithIds = function() {
			return $l(Zl(n.props, n.state.selectValue), n.getElementId("option"));
		}, n.getValue = function() {
			return n.state.selectValue;
		}, n.cx = function() {
			var e = [...arguments];
			return os.apply(void 0, [n.props.classNamePrefix].concat(e));
		}, n.getOptionLabel = function(e) {
			return au(n.props, e);
		}, n.getOptionValue = function(e) {
			return ou(n.props, e);
		}, n.getStyles = function(e, t) {
			var r = n.props.unstyled, i = Wl[e](t, r);
			i.boxSizing = "border-box";
			var a = n.props.styles[e];
			return a ? a(i, t) : i;
		}, n.getClassNames = function(e, t) {
			var r;
			return (r = n.props.classNames)[e]?.call(r, t);
		}, n.getElementId = function(e) {
			return `${n.state.instancePrefix}-${e}`;
		}, n.getComponents = function() {
			return Kc(n.props);
		}, n.buildCategorizedOptions = function() {
			return Zl(n.props, n.state.selectValue);
		}, n.getCategorizedOptions = function() {
			return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
		}, n.buildFocusableOptions = function() {
			return Ql(n.buildCategorizedOptions());
		}, n.getFocusableOptions = function() {
			return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
		}, n.ariaOnChange = function(e, t) {
			n.setState({ ariaSelection: $({ value: e }, t) });
		}, n.onMenuMouseDown = function(e) {
			e.button === 0 && (e.stopPropagation(), e.preventDefault(), n.focusInput());
		}, n.onMenuMouseMove = function(e) {
			n.blockOptionHover = !1;
		}, n.onControlMouseDown = function(e) {
			if (!e.defaultPrevented) {
				var t = n.props.openMenuOnClick;
				n.state.isFocused ? n.props.menuIsOpen ? e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && n.onMenuClose() : t && n.openMenu("first") : (t && (n.openAfterFocus = !0), n.focusInput()), e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && e.preventDefault();
			}
		}, n.onDropdownIndicatorMouseDown = function(e) {
			if (!(e && e.type === "mousedown" && e.button !== 0) && !n.props.isDisabled) {
				var t = n.props, r = t.isMulti, i = t.menuIsOpen;
				n.focusInput(), i ? (n.setState({ inputIsHiddenAfterUpdate: !r }), n.onMenuClose()) : n.openMenu("first"), e.preventDefault();
			}
		}, n.onClearIndicatorMouseDown = function(e) {
			e && e.type === "mousedown" && e.button !== 0 || (n.clearValue(), e.preventDefault(), n.openAfterFocus = !1, e.type === "touchend" ? n.focusInput() : setTimeout(function() {
				return n.focusInput();
			}));
		}, n.onScroll = function(e) {
			typeof n.props.closeMenuOnScroll == "boolean" ? e.target instanceof HTMLElement && us(e.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(e) && n.props.onMenuClose();
		}, n.onCompositionStart = function() {
			n.isComposing = !0;
		}, n.onCompositionEnd = function() {
			n.isComposing = !1;
		}, n.onTouchStart = function(e) {
			var t = e.touches, r = t && t.item(0);
			r && (n.initialTouchX = r.clientX, n.initialTouchY = r.clientY, n.userIsDragging = !1);
		}, n.onTouchMove = function(e) {
			var t = e.touches, r = t && t.item(0);
			if (r) {
				var i = Math.abs(r.clientX - n.initialTouchX), a = Math.abs(r.clientY - n.initialTouchY), o = 5;
				n.userIsDragging = i > o || a > o;
			}
		}, n.onTouchEnd = function(e) {
			n.userIsDragging || (n.controlRef && !n.controlRef.contains(e.target) && n.menuListRef && !n.menuListRef.contains(e.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
		}, n.onControlTouchEnd = function(e) {
			n.userIsDragging || n.onControlMouseDown(e);
		}, n.onClearIndicatorTouchEnd = function(e) {
			n.userIsDragging || n.onClearIndicatorMouseDown(e);
		}, n.onDropdownIndicatorTouchEnd = function(e) {
			n.userIsDragging || n.onDropdownIndicatorMouseDown(e);
		}, n.handleInputChange = function(e) {
			var t = n.props.inputValue, r = e.currentTarget.value;
			n.setState({ inputIsHiddenAfterUpdate: !1 }), n.onInputChange(r, {
				action: "input-change",
				prevInputValue: t
			}), n.props.menuIsOpen || n.onMenuOpen();
		}, n.onInputFocus = function(e) {
			n.props.onFocus && n.props.onFocus(e), n.setState({
				inputIsHiddenAfterUpdate: !1,
				isFocused: !0
			}), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
		}, n.onInputBlur = function(e) {
			var t = n.props.inputValue;
			if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
				n.inputRef.focus();
				return;
			}
			n.props.onBlur && n.props.onBlur(e), n.onInputChange("", {
				action: "input-blur",
				prevInputValue: t
			}), n.onMenuClose(), n.setState({
				focusedValue: null,
				isFocused: !1
			});
		}, n.onOptionHover = function(e) {
			if (!(n.blockOptionHover || n.state.focusedOption === e)) {
				var t = n.getFocusableOptions().indexOf(e);
				n.setState({
					focusedOption: e,
					focusedOptionId: t > -1 ? n.getFocusedOptionId(e) : null
				});
			}
		}, n.shouldHideSelectedOptions = function() {
			return uu(n.props);
		}, n.onValueInputFocus = function(e) {
			e.preventDefault(), e.stopPropagation(), n.focus();
		}, n.onKeyDown = function(e) {
			var t = n.props, r = t.isMulti, i = t.backspaceRemovesValue, a = t.escapeClearsValue, o = t.inputValue, s = t.isClearable, c = t.isDisabled, l = t.menuIsOpen, u = t.onKeyDown, d = t.tabSelectsValue, f = t.openMenuOnFocus, p = n.state, m = p.focusedOption, h = p.focusedValue, g = p.selectValue;
			if (!c && !(typeof u == "function" && (u(e), e.defaultPrevented))) {
				switch (n.blockOptionHover = !0, e.key) {
					case "ArrowLeft":
						if (!r || o) return;
						n.focusValue("previous");
						break;
					case "ArrowRight":
						if (!r || o) return;
						n.focusValue("next");
						break;
					case "Delete":
					case "Backspace":
						if (o) return;
						if (h) n.removeValue(h);
						else {
							if (!i) return;
							r ? n.popValue() : s && n.clearValue();
						}
						break;
					case "Tab":
						if (n.isComposing || e.shiftKey || !l || !d || !m || f && n.isOptionSelected(m, g)) return;
						n.selectOption(m);
						break;
					case "Enter":
						if (e.keyCode === 229) break;
						if (l) {
							if (!m || n.isComposing) return;
							n.selectOption(m);
							break;
						}
						return;
					case "Escape":
						l ? (n.setState({ inputIsHiddenAfterUpdate: !1 }), n.onInputChange("", {
							action: "menu-close",
							prevInputValue: o
						}), n.onMenuClose()) : s && a && n.clearValue();
						break;
					case " ":
						if (o) return;
						if (!l) {
							n.openMenu("first");
							break;
						}
						if (!m) return;
						n.selectOption(m);
						break;
					case "ArrowUp":
						l ? n.focusOption("up") : n.openMenu("last");
						break;
					case "ArrowDown":
						l ? n.focusOption("down") : n.openMenu("first");
						break;
					case "PageUp":
						if (!l) return;
						n.focusOption("pageup");
						break;
					case "PageDown":
						if (!l) return;
						n.focusOption("pagedown");
						break;
					case "Home":
						if (!l) return;
						n.focusOption("first");
						break;
					case "End":
						if (!l) return;
						n.focusOption("last");
						break;
					default: return;
				}
				e.preventDefault();
			}
		}, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++du), n.state.selectValue = ss(e.value), e.menuIsOpen && n.state.selectValue.length) {
			var i = n.getFocusableOptionsWithIds(), a = n.buildFocusableOptions(), o = a.indexOf(n.state.selectValue[0]);
			n.state.focusableOptionsWithIds = i, n.state.focusedOption = a[o], n.state.focusedOptionId = iu(i, a[o]);
		}
		return n;
	}
	return Uo(r, [
		{
			key: "componentDidMount",
			value: function() {
				this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && _s(this.menuListRef, this.focusedOptionRef), zl() && this.setState({ isAppleDevice: !0 });
			}
		},
		{
			key: "componentDidUpdate",
			value: function(e) {
				var t = this.props, n = t.isDisabled, r = t.menuIsOpen, i = this.state.isFocused;
				(i && !n && e.isDisabled || i && r && !e.menuIsOpen) && this.focusInput(), i && n && !e.isDisabled ? this.setState({ isFocused: !1 }, this.onMenuClose) : !i && !n && e.isDisabled && this.inputRef === document.activeElement && this.setState({ isFocused: !0 }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (_s(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
			}
		},
		{
			key: "componentWillUnmount",
			value: function() {
				this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
			}
		},
		{
			key: "onMenuOpen",
			value: function() {
				this.props.onMenuOpen();
			}
		},
		{
			key: "onMenuClose",
			value: function() {
				this.onInputChange("", {
					action: "menu-close",
					prevInputValue: this.props.inputValue
				}), this.props.onMenuClose();
			}
		},
		{
			key: "onInputChange",
			value: function(e, t) {
				this.props.onInputChange(e, t);
			}
		},
		{
			key: "focusInput",
			value: function() {
				this.inputRef && this.inputRef.focus();
			}
		},
		{
			key: "blurInput",
			value: function() {
				this.inputRef && this.inputRef.blur();
			}
		},
		{
			key: "openMenu",
			value: function(e) {
				var t = this, n = this.state, r = n.selectValue, i = n.isFocused, a = this.buildFocusableOptions(), o = e === "first" ? 0 : a.length - 1;
				if (!this.props.isMulti) {
					var s = a.indexOf(r[0]);
					s > -1 && (o = s);
				}
				this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
					inputIsHiddenAfterUpdate: !1,
					focusedValue: null,
					focusedOption: a[o],
					focusedOptionId: this.getFocusedOptionId(a[o])
				}, function() {
					return t.onMenuOpen();
				});
			}
		},
		{
			key: "focusValue",
			value: function(e) {
				var t = this.state, n = t.selectValue, r = t.focusedValue;
				if (this.props.isMulti) {
					this.setState({ focusedOption: null });
					var i = n.indexOf(r);
					r || (i = -1);
					var a = n.length - 1, o = -1;
					if (n.length) {
						switch (e) {
							case "previous":
								o = i === 0 ? 0 : i === -1 ? a : i - 1;
								break;
							case "next":
								i > -1 && i < a && (o = i + 1);
								break;
						}
						this.setState({
							inputIsHidden: o !== -1,
							focusedValue: n[o]
						});
					}
				}
			}
		},
		{
			key: "focusOption",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", t = this.props.pageSize, n = this.state.focusedOption, r = this.getFocusableOptions();
				if (r.length) {
					var i = 0, a = r.indexOf(n);
					n || (a = -1), e === "up" ? i = a > 0 ? a - 1 : r.length - 1 : e === "down" ? i = (a + 1) % r.length : e === "pageup" ? (i = a - t, i < 0 && (i = 0)) : e === "pagedown" ? (i = a + t, i > r.length - 1 && (i = r.length - 1)) : e === "last" && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
						focusedOption: r[i],
						focusedValue: null,
						focusedOptionId: this.getFocusedOptionId(r[i])
					});
				}
			}
		},
		{
			key: "getTheme",
			value: (function() {
				return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Jl) : $($({}, Jl), this.props.theme) : Jl;
			})
		},
		{
			key: "getCommonProps",
			value: function() {
				var e = this.clearValue, t = this.cx, n = this.getStyles, r = this.getClassNames, i = this.getValue, a = this.selectOption, o = this.setValue, s = this.props, c = s.isMulti, l = s.isRtl, u = s.options;
				return {
					clearValue: e,
					cx: t,
					getStyles: n,
					getClassNames: r,
					getValue: i,
					hasValue: this.hasValue(),
					isMulti: c,
					isRtl: l,
					options: u,
					selectOption: a,
					selectProps: s,
					setValue: o,
					theme: this.getTheme()
				};
			}
		},
		{
			key: "hasValue",
			value: function() {
				return this.state.selectValue.length > 0;
			}
		},
		{
			key: "hasOptions",
			value: function() {
				return !!this.getFocusableOptions().length;
			}
		},
		{
			key: "isClearable",
			value: function() {
				var e = this.props, t = e.isClearable, n = e.isMulti;
				return t === void 0 ? n : t;
			}
		},
		{
			key: "isOptionDisabled",
			value: function(e, t) {
				return su(this.props, e, t);
			}
		},
		{
			key: "isOptionSelected",
			value: function(e, t) {
				return cu(this.props, e, t);
			}
		},
		{
			key: "filterOption",
			value: function(e, t) {
				return lu(this.props, e, t);
			}
		},
		{
			key: "formatOptionLabel",
			value: function(e, t) {
				if (typeof this.props.formatOptionLabel == "function") {
					var n = this.props.inputValue, r = this.state.selectValue;
					return this.props.formatOptionLabel(e, {
						context: t,
						inputValue: n,
						selectValue: r
					});
				} else return this.getOptionLabel(e);
			}
		},
		{
			key: "formatGroupLabel",
			value: function(e) {
				return this.props.formatGroupLabel(e);
			}
		},
		{
			key: "startListeningComposition",
			value: (function() {
				document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
			})
		},
		{
			key: "stopListeningComposition",
			value: function() {
				document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
			}
		},
		{
			key: "startListeningToTouch",
			value: (function() {
				document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
			})
		},
		{
			key: "stopListeningToTouch",
			value: function() {
				document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
			}
		},
		{
			key: "renderInput",
			value: (function() {
				var e = this.props, t = e.isDisabled, r = e.isSearchable, i = e.inputId, a = e.inputValue, o = e.tabIndex, s = e.form, c = e.menuIsOpen, l = e.required, u = this.getComponents().Input, d = this.state, f = d.inputIsHidden, p = d.ariaSelection, m = this.commonProps, h = i || this.getElementId("input"), g = $($($({
					"aria-autocomplete": "list",
					"aria-expanded": c,
					"aria-haspopup": !0,
					"aria-errormessage": this.props["aria-errormessage"],
					"aria-invalid": this.props["aria-invalid"],
					"aria-label": this.props["aria-label"],
					"aria-labelledby": this.props["aria-labelledby"],
					"aria-required": l,
					role: "combobox",
					"aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
				}, c && { "aria-controls": this.getElementId("listbox") }), !r && { "aria-readonly": !0 }), this.hasValue() ? p?.action === "initial-input-focus" && { "aria-describedby": this.getElementId("live-region") } : { "aria-describedby": this.getElementId("placeholder") });
				return r ? /* @__PURE__ */ n(u, Bo({}, m, {
					autoCapitalize: "none",
					autoComplete: "off",
					autoCorrect: "off",
					id: h,
					innerRef: this.getInputRef,
					isDisabled: t,
					isHidden: f,
					onBlur: this.onInputBlur,
					onChange: this.handleInputChange,
					onFocus: this.onInputFocus,
					spellCheck: "false",
					tabIndex: o,
					form: s,
					type: "text",
					value: a
				}, g)) : /* @__PURE__ */ n(ml, Bo({
					id: h,
					innerRef: this.getInputRef,
					onBlur: this.onInputBlur,
					onChange: is,
					onFocus: this.onInputFocus,
					disabled: t,
					tabIndex: o,
					inputMode: "none",
					form: s,
					value: ""
				}, g));
			})
		},
		{
			key: "renderPlaceholderOrValue",
			value: function() {
				var e = this, t = this.getComponents(), r = t.MultiValue, i = t.MultiValueContainer, a = t.MultiValueLabel, o = t.MultiValueRemove, s = t.SingleValue, c = t.Placeholder, l = this.commonProps, u = this.props, d = u.controlShouldRenderValue, f = u.isDisabled, p = u.isMulti, m = u.inputValue, h = u.placeholder, g = this.state, _ = g.selectValue, v = g.focusedValue, y = g.isFocused;
				if (!this.hasValue() || !d) return m ? null : /* @__PURE__ */ n(c, Bo({}, l, {
					key: "placeholder",
					isDisabled: f,
					isFocused: y,
					innerProps: { id: this.getElementId("placeholder") }
				}), h);
				if (p) return _.map(function(t, s) {
					var c = t === v, u = `${e.getOptionLabel(t)}-${e.getOptionValue(t)}`;
					return /* @__PURE__ */ n(r, Bo({}, l, {
						components: {
							Container: i,
							Label: a,
							Remove: o
						},
						isFocused: c,
						isDisabled: f,
						key: u,
						index: s,
						removeProps: {
							onClick: function() {
								return e.removeValue(t);
							},
							onTouchEnd: function() {
								return e.removeValue(t);
							},
							onMouseDown: function(e) {
								e.preventDefault();
							}
						},
						data: t
					}), e.formatOptionLabel(t, "value"));
				});
				if (m) return null;
				var b = _[0];
				return /* @__PURE__ */ n(s, Bo({}, l, {
					data: b,
					isDisabled: f
				}), this.formatOptionLabel(b, "value"));
			}
		},
		{
			key: "renderClearIndicator",
			value: function() {
				var e = this.getComponents().ClearIndicator, t = this.commonProps, r = this.props, i = r.isDisabled, a = r.isLoading, o = this.state.isFocused;
				if (!this.isClearable() || !e || i || !this.hasValue() || a) return null;
				var s = {
					onMouseDown: this.onClearIndicatorMouseDown,
					onTouchEnd: this.onClearIndicatorTouchEnd,
					"aria-hidden": "true"
				};
				return /* @__PURE__ */ n(e, Bo({}, t, {
					innerProps: s,
					isFocused: o
				}));
			}
		},
		{
			key: "renderLoadingIndicator",
			value: function() {
				var e = this.getComponents().LoadingIndicator, t = this.commonProps, r = this.props, i = r.isDisabled, a = r.isLoading, o = this.state.isFocused;
				return !e || !a ? null : /* @__PURE__ */ n(e, Bo({}, t, {
					innerProps: { "aria-hidden": "true" },
					isDisabled: i,
					isFocused: o
				}));
			}
		},
		{
			key: "renderIndicatorSeparator",
			value: function() {
				var e = this.getComponents(), t = e.DropdownIndicator, r = e.IndicatorSeparator;
				if (!t || !r) return null;
				var i = this.commonProps, a = this.props.isDisabled, o = this.state.isFocused;
				return /* @__PURE__ */ n(r, Bo({}, i, {
					isDisabled: a,
					isFocused: o
				}));
			}
		},
		{
			key: "renderDropdownIndicator",
			value: function() {
				var e = this.getComponents().DropdownIndicator;
				if (!e) return null;
				var t = this.commonProps, r = this.props.isDisabled, i = this.state.isFocused, a = {
					onMouseDown: this.onDropdownIndicatorMouseDown,
					onTouchEnd: this.onDropdownIndicatorTouchEnd,
					"aria-hidden": "true"
				};
				return /* @__PURE__ */ n(e, Bo({}, t, {
					innerProps: a,
					isDisabled: r,
					isFocused: i
				}));
			}
		},
		{
			key: "renderMenu",
			value: function() {
				var e = this, t = this.getComponents(), r = t.Group, i = t.GroupHeading, a = t.Menu, o = t.MenuList, s = t.MenuPortal, c = t.LoadingMessage, l = t.NoOptionsMessage, u = t.Option, d = this.commonProps, f = this.state.focusedOption, p = this.props, m = p.captureMenuScroll, h = p.inputValue, g = p.isLoading, _ = p.loadingMessage, v = p.minMenuHeight, y = p.maxMenuHeight, b = p.menuIsOpen, x = p.menuPlacement, S = p.menuPosition, C = p.menuPortalTarget, w = p.menuShouldBlockScroll, T = p.menuShouldScrollIntoView, E = p.noOptionsMessage, D = p.onMenuScrollToTop, O = p.onMenuScrollToBottom;
				if (!b) return null;
				var k = function(t, r) {
					var i = t.type, a = t.data, o = t.isDisabled, s = t.isSelected, c = t.label, l = t.value, p = f === a, m = o ? void 0 : function() {
						return e.onOptionHover(a);
					}, h = o ? void 0 : function() {
						return e.selectOption(a);
					}, g = `${e.getElementId("option")}-${r}`, _ = {
						id: g,
						onClick: h,
						onMouseMove: m,
						onMouseOver: m,
						tabIndex: -1,
						role: "option",
						"aria-selected": e.state.isAppleDevice ? void 0 : s
					};
					return /* @__PURE__ */ n(u, Bo({}, d, {
						innerProps: _,
						data: a,
						isDisabled: o,
						isSelected: s,
						key: g,
						label: c,
						type: i,
						value: l,
						isFocused: p,
						innerRef: p ? e.getFocusedOptionRef : void 0
					}), e.formatOptionLabel(t.data, "menu"));
				}, A;
				if (this.hasOptions()) A = this.getCategorizedOptions().map(function(t) {
					if (t.type === "group") {
						var a = t.data, o = t.options, s = t.index, c = `${e.getElementId("group")}-${s}`, l = `${c}-heading`;
						return /* @__PURE__ */ n(r, Bo({}, d, {
							key: c,
							data: a,
							options: o,
							Heading: i,
							headingProps: {
								id: l,
								data: t.data
							},
							label: e.formatGroupLabel(t.data)
						}), t.options.map(function(e) {
							return k(e, `${s}-${e.index}`);
						}));
					} else if (t.type === "option") return k(t, `${t.index}`);
				});
				else if (g) {
					var j = _({ inputValue: h });
					if (j === null) return null;
					A = /* @__PURE__ */ n(c, d, j);
				} else {
					var M = E({ inputValue: h });
					if (M === null) return null;
					A = /* @__PURE__ */ n(l, d, M);
				}
				var N = {
					minMenuHeight: v,
					maxMenuHeight: y,
					menuPlacement: x,
					menuPosition: S,
					menuShouldScrollIntoView: T
				}, P = /* @__PURE__ */ n(Is, Bo({}, d, N), function(t) {
					var r = t.ref, i = t.placerProps, s = i.placement, c = i.maxHeight;
					return /* @__PURE__ */ n(a, Bo({}, d, N, {
						innerRef: r,
						innerProps: {
							onMouseDown: e.onMenuMouseDown,
							onMouseMove: e.onMenuMouseMove
						},
						isLoading: g,
						placement: s
					}), /* @__PURE__ */ n(Al, {
						captureEnabled: m,
						onTopArrive: D,
						onBottomArrive: O,
						lockEnabled: w
					}, function(t) {
						return /* @__PURE__ */ n(o, Bo({}, d, {
							innerRef: function(n) {
								e.getMenuListRef(n), t(n);
							},
							innerProps: {
								role: "listbox",
								"aria-multiselectable": d.isMulti,
								id: e.getElementId("listbox")
							},
							isLoading: g,
							maxHeight: c,
							focusedOption: f
						}), A);
					}));
				});
				return C || S === "fixed" ? /* @__PURE__ */ n(s, Bo({}, d, {
					appendTo: C,
					controlElement: this.controlRef,
					menuPlacement: x,
					menuPosition: S
				}), P) : P;
			}
		},
		{
			key: "renderFormField",
			value: function() {
				var e = this, t = this.props, r = t.delimiter, i = t.isDisabled, a = t.isMulti, o = t.name, s = t.required, c = this.state.selectValue;
				if (s && !this.hasValue() && !i) return /* @__PURE__ */ n(Nl, {
					name: o,
					onFocus: this.onValueInputFocus
				});
				if (!(!o || i)) return a ? r ? /* @__PURE__ */ n("input", {
					name: o,
					type: "hidden",
					value: c.map(function(t) {
						return e.getOptionValue(t);
					}).join(r)
				}) : /* @__PURE__ */ n("div", null, c.length > 0 ? c.map(function(t, r) {
					return /* @__PURE__ */ n("input", {
						key: `i-${r}`,
						name: o,
						type: "hidden",
						value: e.getOptionValue(t)
					});
				}) : /* @__PURE__ */ n("input", {
					name: o,
					type: "hidden",
					value: ""
				})) : /* @__PURE__ */ n("input", {
					name: o,
					type: "hidden",
					value: c[0] ? this.getOptionValue(c[0]) : ""
				});
			}
		},
		{
			key: "renderLiveRegion",
			value: function() {
				var e = this.commonProps, t = this.state, r = t.ariaSelection, i = t.focusedOption, a = t.focusedValue, o = t.isFocused, s = t.selectValue, c = this.getFocusableOptions();
				return /* @__PURE__ */ n(tl, Bo({}, e, {
					id: this.getElementId("live-region"),
					ariaSelection: r,
					focusedOption: i,
					focusedValue: a,
					isFocused: o,
					selectValue: s,
					focusableOptions: c,
					isAppleDevice: this.state.isAppleDevice
				}));
			}
		},
		{
			key: "render",
			value: function() {
				var e = this.getComponents(), t = e.Control, r = e.IndicatorsContainer, i = e.SelectContainer, a = e.ValueContainer, o = this.props, s = o.className, c = o.id, l = o.isDisabled, u = o.menuIsOpen, d = this.state.isFocused, f = this.commonProps = this.getCommonProps();
				return /* @__PURE__ */ n(i, Bo({}, f, {
					className: s,
					innerProps: {
						id: c,
						onKeyDown: this.onKeyDown
					},
					isDisabled: l,
					isFocused: d
				}), this.renderLiveRegion(), /* @__PURE__ */ n(t, Bo({}, f, {
					innerRef: this.getControlRef,
					innerProps: {
						onMouseDown: this.onControlMouseDown,
						onTouchEnd: this.onControlTouchEnd
					},
					isDisabled: l,
					isFocused: d,
					menuIsOpen: u
				}), /* @__PURE__ */ n(a, Bo({}, f, { isDisabled: l }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ n(r, Bo({}, f, { isDisabled: l }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
			}
		}
	], [{
		key: "getDerivedStateFromProps",
		value: function(e, t) {
			var n = t.prevProps, r = t.clearFocusValueOnUpdate, i = t.inputIsHiddenAfterUpdate, a = t.ariaSelection, o = t.isFocused, s = t.prevWasFocused, c = t.instancePrefix, l = e.options, u = e.value, d = e.menuIsOpen, f = e.inputValue, p = e.isMulti, m = ss(u), h = {};
			if (n && (u !== n.value || l !== n.options || d !== n.menuIsOpen || f !== n.inputValue)) {
				var g = d ? eu(e, m) : [], _ = d ? $l(Zl(e, m), `${c}-option`) : [], v = r ? nu(t, m) : null, y = ru(t, g);
				h = {
					selectValue: m,
					focusedOption: y,
					focusedOptionId: iu(_, y),
					focusableOptionsWithIds: _,
					focusedValue: v,
					clearFocusValueOnUpdate: !1
				};
			}
			var b = i != null && e !== n ? {
				inputIsHidden: i,
				inputIsHiddenAfterUpdate: void 0
			} : {}, x = a, S = o && s;
			return o && !S && (x = {
				value: Ds(p, m, m[0] || null),
				options: m,
				action: "initial-input-focus"
			}, S = !s), a?.action === "initial-input-focus" && (x = null), $($($({}, h), b), {}, {
				prevProps: e,
				ariaSelection: x,
				prevWasFocused: S
			});
		}
	}]), r;
})(m);
fu.defaultProps = Yl;
var pu = /* @__PURE__ */ s(function(e, t) {
	var r = zo(e);
	return /* @__PURE__ */ n(fu, Bo({ ref: t }, r));
}), mu = (e) => {
	let t = ho(e);
	return {
		guidance: (e) => {
			let { isSearchable: n, isMulti: r, tabSelectsValue: i, context: a, isInitialFocus: o } = e, s = i ? `, ${t("tabGuidance")}` : "", c = n ? `, ${t("searchGuidance")}` : "", l = r ? `, ${t("focusSelectedMultiGuidance")}` : "";
			switch (a) {
				case "menu": return ` ${t("navigationGuidance")}, ${t("selectGuidance")}${i ? `${s}` : ""}, ${t("exitGuidance")}.`;
				case "input": return o ? `${t("inputGuidance", [e["aria-label"], c])}${l}` : "";
				case "value": return r ? `${t("valueGuidance")}, ${t("deleteGuidance")}` : t("valueGuidance");
				default: return "";
			}
		},
		onChange: (e) => {
			let { action: n, label: r = "", labels: i, isDisabled: a } = e;
			switch (n) {
				case "deselect-option":
				case "pop-value":
				case "remove-value": return `${r}, ${t("deselected")}.`;
				case "clear": return `${t("clearAllOptions")}.`;
				case "initial-input-focus": return i.length > 0 ? `${i.length > 1 ? t("option_other") : t("option_one")} ${i.join(", ")} ${t("selected")}.` : "";
				case "select-option": return a ? t("selectOptionDisabled", [t("option_one"), r]) : `${t("option_one")} ${r}, ${t("selected")}.`;
				default: return "";
			}
		},
		onFocus: (e) => {
			let { context: n, focused: r, options: i, label: a = "", selectValue: o, isDisabled: s, isSelected: c, isAppleDevice: l } = e, u = (e, n) => e?.length ? `${e.indexOf(n) + 1} ${t("of")} ${e.length}.` : "";
			if (n === "value" && o) return `${t("focusValue", [a])}, ${u(o, r)}`;
			if (n === "menu" && l) {
				let e = s ? ` ${t("disabled")}` : "";
				return `${a}${`${c ? `, ${t("selected")}` : ""}${e}`}, ${u(i, r)}`;
			}
			return "";
		},
		onFilter: (e) => {
			let { inputValue: n, resultsMessage: r } = e, i = /(\d+) result/.exec(r), a = 0;
			i && i[1] && (a = parseInt(i[1], 10));
			let o = t("resultsAvailable", [t(a === 1 ? "result_one" : "result_other")]), s = n ? ` ${t("filterTermHint")} ${n}` : "";
			return `${a} ${o},${s}`;
		}
	};
}, hu = {
	root: "ds-combobox_root_1wh7q_1",
	hint: "ds-combobox_hint_1wh7q_1",
	labelWrapper: "ds-combobox_label-wrapper_1wh7q_1",
	label: "ds-combobox_label_1wh7q_1",
	labelDisabled: "ds-combobox_label--disabled_1wh7q_30",
	labelWrapperHidden: "ds-combobox_label-wrapper--hidden_1wh7q_42",
	feedback: "ds-combobox_feedback_1wh7q_70",
	select: "ds-combobox_select_1wh7q_74",
	selectSmall: "ds-combobox_select--small_1wh7q_82",
	selectInvalid: "ds-combobox_select--invalid_1wh7q_194",
	selectDisabled: "ds-combobox_select--disabled_1wh7q_294",
	selectFocused: "ds-combobox_select--focused_1wh7q_305",
	selectHovered: "ds-combobox_select--hovered_1wh7q_322",
	placeholder: "ds-combobox_placeholder_1wh7q_332",
	menuList: "ds-combobox_menu-list_1wh7q_341",
	groupHeading: "ds-combobox_group-heading_1wh7q_351",
	option: "ds-combobox_option_1wh7q_373",
	optionSmall: "ds-combobox_option--small_1wh7q_389",
	optionGrouped: "ds-combobox_option--grouped_1wh7q_404",
	optionSingle: "ds-combobox_option--single_1wh7q_407",
	optionDisabled: "ds-combobox_option--disabled_1wh7q_410",
	optionFocusHover: "ds-combobox_option--focus-hover_1wh7q_418",
	optionText: "ds-combobox_option--text_1wh7q_430",
	optionCheckIcon: "ds-combobox_option--check-icon_1wh7q_433",
	optionCheckIconDisabled: "ds-combobox_option--check-icon--disabled_1wh7q_443",
	singleOption: "ds-combobox_single-option_1wh7q_452",
	multiOption: "ds-combobox_multi-option_1wh7q_458",
	singleValue: "ds-combobox_single-value_1wh7q_462",
	singleValueText: "ds-combobox_single-value--text_1wh7q_466",
	leadingIcon: "ds-combobox_leading-icon_1wh7q_473",
	leadingIconSmall: "ds-combobox_leading-icon--small_1wh7q_484",
	leadingIconSelected: "ds-combobox_leading-icon--selected_1wh7q_484",
	leadingIconDisabled: "ds-combobox_leading-icon--disabled_1wh7q_487",
	indicator: "ds-combobox_indicator_1wh7q_496",
	clear: "ds-combobox_clear_1wh7q_497",
	indicatorSmall: "ds-combobox_indicator--small_1wh7q_503",
	clearSmall: "ds-combobox_clear--small_1wh7q_504",
	indicatorIcon: "ds-combobox_indicator--icon_1wh7q_508",
	clearIcon: "ds-combobox_clear--icon_1wh7q_509",
	indicatorIconSmall: "ds-combobox_indicator--icon--small_1wh7q_516",
	clearIconSmall: "ds-combobox_clear--icon--small_1wh7q_517"
}, gu = s(({ id: e, label: t, options: n, className: r, disabled: i = !1, filterOption: a, hint: o, hideLabel: s = !1, invalid: l = !1, isMulti: u = !1, lang: d = "en", popoverContent: f, popoverInfoButtonProps: m, required: h = !1, size: _ = "medium", systemFeedback: v, translations: y, value: x, onValueChange: S, onInputChange: C, ...w }, T) => {
	let [E, D] = c(!1), O = b(() => n, [JSON.stringify(n)]), k = p(null), A = (e) => {
		e && (k.current = e, typeof T == "function" ? T(e.inputRef) : T && (T.current = e.inputRef));
	}, j = {
		...m,
		label: y && y.togglePopover || m?.label || wo[d].togglePopover
	}, N = y ? y.placeholder : wo[d].placeholder, P = Aa(s), F = `${e}-label`, I = `${e}-feedback`, L = `${e}-hint`, R = o ? ` ${L}` : "", z = () => y ? y.filterNoOptions : wo[d].filterNoOptions, B = M(hu.root, r), V = M(hu.label, { [hu.labelDisabled]: i }), H = M(hu.labelWrapper, { [hu.labelWrapperHidden]: P }), U = (e) => M(hu.select, {
		[hu.selectSmall]: _ === "small",
		[hu.selectFocused]: e.isFocused,
		[hu.selectHovered]: E,
		[hu.selectDisabled]: i,
		[hu.selectInvalid]: l
	}), W = (e) => M({ [hu.placeholder]: !e.isDisabled });
	return /* @__PURE__ */ g("div", {
		className: B,
		children: [
			/* @__PURE__ */ g("div", {
				className: H,
				children: [/* @__PURE__ */ g("label", {
					className: V,
					id: F,
					htmlFor: e,
					onMouseEnter: () => !i && D(!0),
					onMouseLeave: () => !i && D(!1),
					children: [t, h && /* @__PURE__ */ g(eo, {})]
				}), f && !P && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: j,
					children: f
				})]
			}),
			o && /* @__PURE__ */ g("div", {
				className: hu.hint,
				id: L,
				children: o
			}),
			/* @__PURE__ */ g(pu, {
				...w,
				"aria-errormessage": l && v ? I : void 0,
				"aria-label": t,
				"aria-labelledby": `${F}${R}`,
				"aria-invalid": l,
				ariaLiveMessages: mu(y || wo[d]),
				inputId: e,
				classNames: {
					control: U,
					placeholder: W
				},
				closeMenuOnSelect: !u,
				filterOption: a,
				hideSelectedOptions: !1,
				instanceId: e,
				isDisabled: i,
				isMulti: u,
				isSearchable: !0,
				noOptionsMessage: z,
				options: O,
				placeholder: N,
				required: h,
				unstyled: !0,
				ref: A,
				styles: {
					container: (e) => ({
						...e,
						pointerEvents: "initial"
					}),
					control: (e) => ({
						...e,
						outline: "initial",
						paddingInlineEnd: 0,
						transitionProperty: "none",
						minHeight: "2rem",
						cursor: "text"
					}),
					menu: (e) => ({
						...e,
						zIndex: 99
					}),
					multiValue: (e) => ({
						...e,
						minWidth: "max-content"
					}),
					noOptionsMessage: (e) => ({
						...e,
						textAlign: void 0
					}),
					option: (e) => ({
						...e,
						display: "flex",
						fontSize: void 0
					}),
					valueContainer: (e) => ({
						...e,
						flexWrap: "nowrap",
						paddingInlineEnd: _ === "small" ? "7px" : "15px"
					})
				},
				components: {
					ClearIndicator: _u,
					DropdownIndicator: vu,
					GroupHeading: yu,
					IndicatorSeparator: () => null,
					Input: bu,
					MenuList: xu,
					MultiValueContainer: Su,
					MultiValueRemove: () => null,
					NoOptionsMessage: Cu,
					Option: wu,
					SingleValue: Tu
				},
				invalid: l,
				systemFeedback: v,
				systemFeedbackId: I,
				isSmall: _ === "small",
				value: x,
				onChange: (e, { action: t }) => {
					t === "clear" && !w.openMenuOnClick && !w.openMenuOnFocus && !u && (k.current?.blur(), k.current?.focus()), S && S(e);
				},
				onInputChange: (e) => {
					C && C(e);
				}
			}),
			l && v && /* @__PURE__ */ g(Ya, {
				className: hu.feedback,
				message: v,
				variant: "error",
				id: I
			})
		]
	});
});
gu.displayName = "CustomReactSelect";
var _u = (e) => {
	let t = D.c(10), n, r, i;
	if (t[0] !== e) {
		({...r} = e);
		let { isSmall: a } = r.selectProps;
		n = M(hu.clear, { [hu.clearSmall]: a }), i = M(hu.clearIcon, { [hu.clearIconSmall]: a }), t[0] = e, t[1] = n, t[2] = r, t[3] = i;
	} else n = t[1], r = t[2], i = t[3];
	let a = i, o;
	t[4] === a ? o = t[5] : (o = /* @__PURE__ */ g(oe, {
		name: "cross",
		className: a,
		"aria-hidden": "true"
	}), t[4] = a, t[5] = o);
	let s;
	return t[6] !== n || t[7] !== r || t[8] !== o ? (s = /* @__PURE__ */ g(Gc.ClearIndicator, {
		...r,
		className: n,
		children: o
	}), t[6] = n, t[7] = r, t[8] = o, t[9] = s) : s = t[9], s;
}, vu = (e) => {
	let t = D.c(11), n, r, i, a;
	if (t[0] !== e) {
		a = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
		e: {
			({...r} = e);
			let { isSmall: t, openMenuOnClick: o, openMenuOnFocus: s, isDisabled: c } = r.selectProps;
			if (!o || !s || c) {
				a = null;
				break e;
			}
			n = M(hu.indicator, { [hu.indicatorSmall]: t }), i = M(hu.indicatorIcon, { [hu.indicatorIconSmall]: t });
		}
		t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a;
	} else n = t[1], r = t[2], i = t[3], a = t[4];
	if (a !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return a;
	let o = i, s;
	t[5] === o ? s = t[6] : (s = /* @__PURE__ */ g(oe, {
		name: "chevron-down",
		className: o,
		"aria-hidden": "true"
	}), t[5] = o, t[6] = s);
	let c;
	return t[7] !== n || t[8] !== r || t[9] !== s ? (c = /* @__PURE__ */ g(Gc.DropdownIndicator, {
		...r,
		className: n,
		children: s
	}), t[7] = n, t[8] = r, t[9] = s, t[10] = c) : c = t[10], c;
}, yu = (e) => {
	let t = D.c(2), n;
	return t[0] === e ? n = t[1] : (n = /* @__PURE__ */ g(Gc.GroupHeading, {
		...e,
		className: hu.groupHeading,
		children: e.children
	}), t[0] = e, t[1] = n), n;
}, bu = (e) => {
	let t = D.c(3), { invalid: n, systemFeedback: r, systemFeedbackId: i } = e.selectProps, a = n && r ? i : e["aria-describedby"], o;
	return t[0] !== e || t[1] !== a ? (o = /* @__PURE__ */ g(Gc.Input, {
		...e,
		"aria-describedby": a,
		autoComplete: e.selectProps.autoComplete
	}), t[0] = e, t[1] = a, t[2] = o) : o = t[2], o;
}, xu = (e) => {
	let t = D.c(2), n;
	return t[0] === e ? n = t[1] : (n = /* @__PURE__ */ g(Gc.MenuList, {
		...e,
		className: hu.menuList,
		children: e.children
	}), t[0] = e, t[1] = n), n;
}, Su = (e) => {
	let t = D.c(3), n = !1;
	if (e.selectProps.value && Array.isArray(e.selectProps.value)) {
		let t = e.selectProps.value.length - 1;
		n = e.selectProps.value.indexOf(e.data) === t;
	}
	let r = e.selectProps.menuIsOpen || !n ? ",\xA0" : "", i;
	return t[0] !== e || t[1] !== r ? (i = /* @__PURE__ */ g(Gc.MultiValueContainer, {
		...e,
		children: [e.children, r]
	}), t[0] = e, t[1] = r, t[2] = i) : i = t[2], i;
}, Cu = (e) => {
	let t = D.c(9), n, r;
	if (t[0] !== e) {
		({...n} = e);
		let { isSmall: i } = n.selectProps;
		r = M(hu.option, { [hu.optionSmall]: i }), t[0] = e, t[1] = n, t[2] = r;
	} else n = t[1], r = t[2];
	let i = r, a;
	t[3] === n.children ? a = t[4] : (a = /* @__PURE__ */ g("span", {
		role: "option",
		children: n.children
	}), t[3] = n.children, t[4] = a);
	let o;
	return t[5] !== i || t[6] !== n || t[7] !== a ? (o = /* @__PURE__ */ g(Gc.NoOptionsMessage, {
		...n,
		className: i,
		children: a
	}), t[5] = i, t[6] = n, t[7] = a, t[8] = o) : o = t[8], o;
}, wu = (e) => {
	let t = D.c(27), n, r, i, a, o, s, c, l, u, d;
	if (t[0] !== e) {
		({...u} = e);
		let { isMulti: f, isSmall: p } = u.selectProps;
		a = f, {leadingIconName: c} = u.data;
		let { children: m, isDisabled: h, isFocused: g, isSelected: _ } = u;
		r = m, i = h, o = _;
		let v = u.selectProps.options.some((e) => "options" in e && e.options.includes(u.data));
		l = M(hu.option, {
			[hu.optionSmall]: p,
			[hu.optionSingle]: !a && o,
			[hu.optionDisabled]: i,
			[hu.optionFocusHover]: g,
			[hu.optionGrouped]: v
		}), s = M(hu.leadingIcon, {
			[hu.leadingIconSmall]: p,
			[hu.leadingIconDisabled]: i
		}), n = M(hu.optionCheckIcon, { [hu.optionCheckIconDisabled]: i }), d = Object.keys(u.data).filter(Eu).reduce((e, t) => (e[t] = u.data[t], e), {}), t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10];
	let f = d, p;
	t[11] !== f || t[12] !== u.innerProps ? (p = {
		...u.innerProps,
		...f
	}, t[11] = f, t[12] = u.innerProps, t[13] = p) : p = t[13];
	let m;
	t[14] !== n || t[15] !== r || t[16] !== i || t[17] !== a || t[18] !== o || t[19] !== s || t[20] !== c ? (m = a ? /* @__PURE__ */ g(So, {
		label: r,
		checked: o,
		disabled: i,
		className: hu.multiOption
	}) : /* @__PURE__ */ g("div", {
		className: hu.singleOption,
		children: [
			c && /* @__PURE__ */ g(oe, {
				name: c,
				className: s,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ g("span", {
				className: hu.optionText,
				children: r
			}),
			o && /* @__PURE__ */ g(oe, {
				name: "check",
				className: n,
				"aria-hidden": "true"
			})
		]
	}), t[14] = n, t[15] = r, t[16] = i, t[17] = a, t[18] = o, t[19] = s, t[20] = c, t[21] = m) : m = t[21];
	let h;
	return t[22] !== l || t[23] !== u || t[24] !== p || t[25] !== m ? (h = /* @__PURE__ */ g(Gc.Option, {
		...u,
		className: l,
		innerProps: p,
		children: m
	}), t[22] = l, t[23] = u, t[24] = p, t[25] = m, t[26] = h) : h = t[26], h;
}, Tu = (e) => {
	let t = D.c(11), { children: n, isDisabled: r } = e, { leadingIconName: i } = e.data, a;
	t[0] === r ? a = t[1] : (a = M(hu.leadingIcon, hu.leadingIconSelected, { [hu.leadingIconDisabled]: r }), t[0] = r, t[1] = a);
	let o = a, s;
	t[2] !== o || t[3] !== i ? (s = i && /* @__PURE__ */ g(oe, {
		name: i,
		className: o,
		"aria-hidden": "true"
	}), t[2] = o, t[3] = i, t[4] = s) : s = t[4];
	let c;
	t[5] === n ? c = t[6] : (c = /* @__PURE__ */ g("span", {
		className: hu.singleValueText,
		children: n
	}), t[5] = n, t[6] = c);
	let l;
	return t[7] !== e || t[8] !== s || t[9] !== c ? (l = /* @__PURE__ */ g(Gc.SingleValue, {
		...e,
		className: hu.singleValue,
		children: [s, c]
	}), t[7] = e, t[8] = s, t[9] = c, t[10] = l) : l = t[10], l;
};
function Eu(e) {
	return e.startsWith("data-");
}
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/combobox.C2DBgO0t.js
d();
var Du = s((e, t) => {
	let n = D.c(38), r, i, a, o, s, c, l, u, d, f, p, m, h, _, v, y;
	if (n[0] !== e) {
		let { id: t, label: g, className: b, disabled: x, dropdownOnFocus: S, filterOption: C, hideLabel: w, invalid: T, lang: E, menuIsOpen: D, popoverContent: O, popoverInfoButtonProps: k, required: A, tabSelectsValue: j, variant: M, ...N } = e ?? {};
		c = t, u = g, r = b, o = C, f = D, p = O, m = k, _ = N, i = x === void 0 ? !1 : x, a = S === void 0 ? !1 : S, s = w === void 0 ? !1 : w, l = T === void 0 ? !1 : T, d = E === void 0 ? "en" : E, h = A === void 0 ? !1 : A, v = j === void 0 ? !0 : j, y = M === void 0 ? "single" : M;
		let P = Array.isArray(_.options) ? _.options : [];
		process.env.NODE_ENV !== "production" && Co({
			id: c,
			label: u,
			options: P,
			hideLabel: s,
			popoverContent: p
		}), n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m, n[13] = h, n[14] = _, n[15] = v, n[16] = y;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12], h = n[13], _ = n[14], v = n[15], y = n[16];
	let b = y === "multi", x = !a || b, S;
	n[17] !== r || n[18] !== i || n[19] !== a || n[20] !== o || n[21] !== s || n[22] !== c || n[23] !== l || n[24] !== b || n[25] !== u || n[26] !== d || n[27] !== f || n[28] !== p || n[29] !== m || n[30] !== t || n[31] !== h || n[32] !== _ || n[33] !== x || n[34] !== v ? (S = {
		id: c,
		label: u,
		className: r,
		disabled: i,
		filterOption: o,
		hideLabel: s,
		isMulti: b,
		invalid: l,
		lang: d,
		menuIsOpen: f,
		openMenuOnClick: a,
		openMenuOnFocus: a,
		isClearable: x,
		required: h,
		ref: t,
		tabSelectsValue: v,
		popoverContent: p,
		popoverInfoButtonProps: m,
		..._
	}, n[17] = r, n[18] = i, n[19] = a, n[20] = o, n[21] = s, n[22] = c, n[23] = l, n[24] = b, n[25] = u, n[26] = d, n[27] = f, n[28] = p, n[29] = m, n[30] = t, n[31] = h, n[32] = _, n[33] = x, n[34] = v, n[35] = S) : S = n[35];
	let C = S, w;
	return n[36] === C ? w = n[37] : (w = /* @__PURE__ */ g(gu, { ...C }), n[36] = C, n[37] = w), w;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Drawer.DaiiAoa8.js
Du.displayName = "DSCombobox", d(), d();
var Ou = {
	root: "ds-drawer_root_1fyfp_10",
	rootEnd: "ds-drawer_root--end_1fyfp_68",
	contentWrapper: "ds-drawer_content-wrapper_1fyfp_169",
	contentWrapperNoFooter: "ds-drawer_content-wrapper--no-footer_1fyfp_175",
	closeButton: "ds-drawer_close-button_1fyfp_178",
	header: "ds-drawer_header_1fyfp_191",
	content: "ds-drawer_content_1fyfp_169",
	footer: "ds-drawer_footer_1fyfp_193",
	headerScrollable: "ds-drawer_header--scrollable_1fyfp_214",
	headerCloseButton: "ds-drawer_header--close-button_1fyfp_223",
	contentNoFooter: "ds-drawer_content--no-footer_1fyfp_265",
	footerScrollable: "ds-drawer_footer--scrollable_1fyfp_272"
}, ku = ({ tabIndex: e }) => {
	if (e || e === 0) throw Error(L("DSDrawer", "Do not pass the tabindex property to the DSDrawer component as it is not interactive and does not receive focus. The DSDrawers contents, including the close button contained in the DSDrawer, can receive focus and be interactive."));
}, Au = ({ children: e, className: t, closeButtonProps: n, disableBackdropClose: r = !1, footer: i, header: a, hideCloseButton: s = !1, position: l = "start", isOpen: u = !1, onClose: d, ...f }) => {
	if (process.env.NODE_ENV !== "production") {
		let { tabIndex: e } = f;
		ku({ tabIndex: e });
	}
	let { label: m = "Close modal", ...h } = n || {}, _ = p(null), v = p(null), [y, b] = c(!1);
	o(() => {
		let e = v.current;
		if (e) {
			let t = () => {
				b(e.scrollHeight > e.clientHeight);
			};
			t();
			let n = new ResizeObserver(t);
			return n.observe(e), () => {
				n.disconnect();
			};
		}
	}, []), o(() => {
		let e = _.current;
		if (e) return e.addEventListener("close", x), u ? e.showModal() : e.close(), () => {
			e.removeEventListener("close", x);
		};
	}, [u, d]);
	let x = () => {
		d && d();
	}, S = (e) => {
		r || _.current && e.target === _.current && _.current.close();
	}, C = () => {
		_.current && _.current.close();
	};
	return /* @__PURE__ */ g("dialog", {
		...f,
		ref: _,
		className: M(Ou.root, { [Ou.rootEnd]: l === "end" }),
		onMouseDown: (e) => S(e),
		"aria-modal": "true",
		children: /* @__PURE__ */ g("div", {
			className: M(Ou.contentWrapper, t, { [Ou.contentWrapperNoFooter]: !i }),
			children: [
				!s && /* @__PURE__ */ g(Fa, {
					...h,
					className: Ou.closeButton,
					hideLabel: !0,
					iconName: "cross",
					size: "small",
					type: "button",
					variant: "ghost",
					onClick: () => C(),
					children: m
				}),
				/* @__PURE__ */ g("header", {
					className: M(Ou.header, {
						[Ou.headerCloseButton]: !s,
						[Ou.headerScrollable]: y
					}),
					children: a
				}),
				/* @__PURE__ */ g("div", {
					ref: v,
					className: M(Ou.content, { [Ou.contentNoFooter]: !i }),
					tabIndex: 0,
					children: e
				}),
				i && /* @__PURE__ */ g("footer", {
					className: M(Ou.footer, { [Ou.footerScrollable]: y }),
					children: i
				})
			]
		})
	});
}, ju = "ds-flag_root_14d3h_1", Mu = "ds-flag_root--color-grey-light_14d3h_28", Nu = "ds-flag_root--color-yellow-light_14d3h_31", Pu = "ds-flag_root--color-red-light_14d3h_34", Fu = "ds-flag_root--color-green-light_14d3h_37", Iu = "ds-flag_root--color-orange-base_14d3h_40", Lu = {
	root: ju,
	"root--color-grey-light": "ds-flag_root--color-grey-light_14d3h_28",
	rootColorGreyLight: Mu,
	"root--color-yellow-light": "ds-flag_root--color-yellow-light_14d3h_31",
	rootColorYellowLight: Nu,
	"root--color-red-light": "ds-flag_root--color-red-light_14d3h_34",
	rootColorRedLight: Pu,
	"root--color-green-light": "ds-flag_root--color-green-light_14d3h_37",
	rootColorGreenLight: Fu,
	"root--color-orange-base": "ds-flag_root--color-orange-base_14d3h_40",
	rootColorOrangeBase: Iu
}, Ru = (e) => {
	let t = D.c(23), n, r, i, a, o, s;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6]) : ({children: n, className: r, color: i, iconName: a, iconSource: o, ...s} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s);
	let c = typeof i == "string" && Lu[`root--color-${i}`], l;
	t[7] !== i || t[8] !== c ? (l = c ? {} : { backgroundColor: i }, t[7] = i, t[8] = c, t[9] = l) : l = t[9];
	let u = l, d = Lu[`root--color-${i}`], f;
	t[10] !== r || t[11] !== c || t[12] !== d ? (f = M(Lu.root, r, { [d]: c }), t[10] = r, t[11] = c, t[12] = d, t[13] = f) : f = t[13];
	let p = f, m;
	t[14] !== a || t[15] !== o ? (m = (a || o) && /* @__PURE__ */ g(oe, {
		name: a,
		theme: "light",
		source: o,
		"aria-hidden": "true"
	}), t[14] = a, t[15] = o, t[16] = m) : m = t[16];
	let h;
	return t[17] !== n || t[18] !== u || t[19] !== s || t[20] !== p || t[21] !== m ? (h = /* @__PURE__ */ g("span", {
		className: p,
		style: u,
		...s,
		children: [m, n]
	}), t[17] = n, t[18] = u, t[19] = s, t[20] = p, t[21] = m, t[22] = h) : h = t[22], h;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/floatingactionbutton.C-V33tkz.js
d();
var zu = {
	root: "ds-floating-action-button_root_1any0_1",
	rootDark: "ds-floating-action-button_root--dark_1any0_70",
	rootSmall: "ds-floating-action-button_root--small_1any0_108",
	loader: "ds-floating-action-button_loader_1any0_129",
	iconHidden: "ds-floating-action-button_icon--hidden_1any0_141",
	labelHidden: "ds-floating-action-button_label--hidden_1any0_145"
}, Bu = s((e, t) => {
	let n = D.c(51), r, i, a, o, s, c, l, u, d, f, p, m;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10], p = n[11], m = n[12]) : ({aria: r, children: i, className: a, disabled: l, iconName: u, iconSource: o, loading: d, size: f, theme: p, tooltip: m, onClick: s, ...c} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f, n[11] = p, n[12] = m);
	let h = l === void 0 ? !1 : l, _ = u === void 0 ? "placeholder" : u, v = d === void 0 ? !1 : d, y = f === void 0 ? "medium" : f, b = p === void 0 ? "light" : p, x = b === "dark", S = y === "small", C;
	n[13] !== a || n[14] !== x || n[15] !== S ? (C = M(zu.root, zu.rootIconOnlySmall, a, {
		[zu.rootDark]: x,
		[zu.rootSmall]: S
	}), n[13] = a, n[14] = x, n[15] = S, n[16] = C) : C = n[16];
	let w = C, T;
	n[17] === v ? T = n[18] : (T = M(zu.icon, { [zu.iconHidden]: v }), n[17] = v, n[18] = T);
	let E = T, O;
	n[19] !== h || n[20] !== v || n[21] !== s ? (O = (e) => {
		if (h || v) {
			e.preventDefault();
			return;
		}
		s && s(e);
	}, n[19] = h, n[20] = v, n[21] = s, n[22] = O) : O = n[22];
	let k = O, A = h || v, j;
	n[23] === v ? j = n[24] : (j = v && /* @__PURE__ */ g(Ma, {
		className: zu.loader,
		aria: { "aria-label": "Loading state" }
	}), n[23] = v, n[24] = j);
	let N;
	n[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = M(zu.label, zu.labelHidden), n[25] = N) : N = n[25];
	let P;
	n[26] === i ? P = n[27] : (P = /* @__PURE__ */ g("span", {
		className: N,
		children: i
	}), n[26] = i, n[27] = P);
	let F;
	n[28] !== E || n[29] !== _ || n[30] !== o || n[31] !== b ? (F = (_ || o) && /* @__PURE__ */ g(oe, {
		name: _,
		theme: b,
		source: o,
		className: E,
		"aria-hidden": "true"
	}), n[28] = E, n[29] = _, n[30] = o, n[31] = b, n[32] = F) : F = n[32];
	let I;
	n[33] !== r || n[34] !== k || n[35] !== v || n[36] !== t || n[37] !== c || n[38] !== w || n[39] !== A || n[40] !== j || n[41] !== P || n[42] !== F ? (I = /* @__PURE__ */ g("button", {
		className: w,
		type: "button",
		onClick: k,
		...r,
		...c,
		"aria-disabled": A,
		"aria-busy": v,
		ref: t,
		children: [
			j,
			P,
			F
		]
	}), n[33] = r, n[34] = k, n[35] = v, n[36] = t, n[37] = c, n[38] = w, n[39] = A, n[40] = j, n[41] = P, n[42] = F, n[43] = I) : I = n[43];
	let L = I;
	if (m) {
		let e;
		n[44] === L ? e = n[45] : (e = /* @__PURE__ */ g(na.Anchor, { children: L }), n[44] = L, n[45] = e);
		let t;
		n[46] === m ? t = n[47] : (t = /* @__PURE__ */ g(na.Content, { children: m }), n[46] = m, n[47] = t);
		let r;
		return n[48] !== e || n[49] !== t ? (r = /* @__PURE__ */ g(na, {
			placement: "top",
			tooltipOffset: 6,
			children: [e, t]
		}), n[48] = e, n[49] = t, n[50] = r) : r = n[50], r;
	}
	return L;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/logo.D7LnRA1E.js
Bu.displayName = "DSFloatingActionButton", d();
var Vu = {
	anchor: "ds-logo_anchor_m1yba_2",
	anchorMain: "ds-logo_anchor--main_m1yba_6",
	anchorReduced: "ds-logo_anchor--reduced_m1yba_13",
	anchorDark: "ds-logo_anchor--dark_m1yba_51",
	svg: "ds-logo_svg_m1yba_81",
	svgText: "ds-logo_svg-text_m1yba_87",
	placeholderReduced: "ds-logo_placeholder-reduced_m1yba_91"
}, Hu = s(({ aria: e, className: t, logo: n = "main", href: r, target: i = "_self", theme: a = "light", ...s }, l) => {
	let u = ({ className: e, logo: t }) => {
		let n = M(Vu.svg, !r && e), [i, a] = c(null);
		return o(() => {
			let e = !0;
			return t === "main" ? a(null) : (async () => {
				try {
					let n;
					switch (t) {
						case "reduced-main":
							n = await import("./default-icon.D_-oBHyT-vO1lhrOA.js");
							break;
						case "reduced-connected":
							n = await import("./connected-icon.BEijTRDG-CtFnFM8f.js");
							break;
						case "reduced-mystihl":
							n = await import("./mystihl-icon.xHpCyYJf-DuE1hzdr.js");
							break;
						case "reduced-imow":
							n = await import("./imow-icon.CyH72ySI-CAygDf5Y.js");
							break;
						default: return;
					}
					e && a(() => n.default);
				} catch (t) {
					e && (a(null), console.error(L("DSLogo", t instanceof Error ? t.message : String(t))));
				}
			})(), () => {
				e = !1;
			};
		}, [t]), t === "main" ? /* @__PURE__ */ g("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			className: n,
			viewBox: "0 0 408 179",
			children: [
				/* @__PURE__ */ g("title", { children: "STIHL" }),
				/* @__PURE__ */ g("path", {
					className: Vu.svgBackground,
					d: "M408 0H0v179h408V0Z"
				}),
				/* @__PURE__ */ g("path", {
					className: Vu.svgText,
					d: "M195.459 56.314h-61.656l-4.936 16.193h20.668l-15.304 50.179h20.106l15.293-50.18h20.893l4.936-16.192ZM62.286 66.62l-5.353 17.558c-2.384 7.814 1.957 13.531 9.637 13.531h25.065a1.626 1.626 0 0 1 1.288.7 1.638 1.638 0 0 1 .207 1.454l-1.349 4.42a3.37 3.37 0 0 1-2.8 2.154H49.624l-4.993 16.249h50.816c5.622 0 10.39-2.605 12.842-10.645l5.094-16.677c2.406-7.894-2.081-13.532-9.086-13.532H79.108c-1.394 0-1.945-1.015-1.563-2.255l1.35-4.42a3.385 3.385 0 0 1 1.185-1.872 3.368 3.368 0 0 1 2.087-.733h36.253l4.937-16.193H75.251c-6.87-.045-11.155 4.364-12.965 10.261ZM320.571 106.493l15.304-50.18h-20.218l-20.23 66.373h63.017l4.936-16.193h-42.809ZM282.653 56.314l-7.771 25.484H250.83l7.77-25.484h-19.319l-20.23 66.372h19.308l7.736-25.372h24.053l-7.725 25.372h19.836l20.23-66.372h-19.836ZM205.917 56.314l-20.229 66.372h20.218l20.23-66.372h-20.219Z"
				})
			]
		}) : i === null ? /* @__PURE__ */ g("div", { className: M(Vu.placeholderReduced) }) : /* @__PURE__ */ g(i, {
			className: n,
			title: {
				main: "STIHL",
				"reduced-main": "STIHL",
				"reduced-connected": "STIHL Connected",
				"reduced-imow": "STIHL iMOW",
				"reduced-mystihl": "MY STIHL"
			}[t]
		});
	};
	return r ? /* @__PURE__ */ g("a", {
		className: M(Vu.anchor, {
			[Vu.anchorDark]: a === "dark",
			[Vu.anchorMain]: n === "main",
			[Vu.anchorReduced]: n !== "main"
		}, t),
		href: r,
		target: i,
		...e,
		...s,
		ref: l,
		children: /* @__PURE__ */ g(u, { logo: n })
	}) : /* @__PURE__ */ g(u, {
		logo: n,
		className: t
	});
});
Hu.displayName = "DSLogo";
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/logo100years.C0IojOp9.js
var Uu = { wrapper: "ds-logo100-years_wrapper_1pwju_1" }, Wu = () => {
	let e = D.c(1), t;
	return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ g("div", {
		className: Uu.wrapper,
		children: /* @__PURE__ */ g("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "80",
			height: "46",
			fill: "none",
			children: [
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					d: "M71.705 37.734c1.36 0 2.163.484 2.611 1.012l-1.172 1.228c-.316-.328-.72-.552-1.328-.552-.496 0-.743.224-.743.528s.168.44.54.564l1.012.34c1.531.508 2.051 1.24 2.051 2.32 0 1.408-.88 2.424-2.908 2.424-1.723 0-2.703-.788-3.175-1.42h.004l1.488-1.116c.371.46.832.832 1.6.832.607 0 .967-.18.967-.608 0-.328-.248-.484-.755-.652l-.9-.304c-1.116-.372-1.904-1.048-1.904-2.308 0-1.508 1.252-2.288 2.612-2.288"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M56.553 37.826c1.948 0 3.032 1.148 3.032 2.716 0 1.012-.484 1.812-1.396 2.232l1.588 2.716h-2.22l-1.352-2.4h-.7v2.396h-2.052v-7.66zm-1.052 3.696h.948c.7 0 1.072-.348 1.072-.98s-.372-.98-1.072-.98h-.948z",
					clipRule: "evenodd"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					d: "m9.08 40.63 1.507-2.804h2.152l-2.668 4.64v3.02H8.02v-2.964l-2.704-4.696h2.256z"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M40.334 37.69c.032-.08.1-.08.136 0l3.716 7.796h-2.12l-.404-.924h-2.668l-.384.924h-2.004zm-.716 5.384h1.388l-.7-1.624z",
					clipRule: "evenodd"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					d: "M21.975 37.826h5.372v1.724h-3.324v1.26h2.772v1.632h-2.772v1.316h3.48v1.724H21.97v-7.66zM42.566 28.459c-.712.48-1.476.9-2.288 1.268q-.094.013-.188.032c-.712.128-1.6.288-1.816.46-.236.187-.736.4-1.396.64-.824.188-1.672.332-2.552.42.112-.028.209-.06.28-.088.228-.092.593-.216 1.017-.36.863-.296 2.047-.696 2.371-.956.288-.228.952-.36 2.016-.548.732-.132 1.56-.28 1.844-.456.264-.164.496-.296.712-.412M22.927 29.343c.86.316 1.548.551 1.716.56v.004c.496.024.816.256 1.104.588a17 17 0 0 1-2.82-1.152"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M31.407 5.556c.488.024 1.287.304 1.655.528l.393.24c1.251.772 1.672 1.036 3.035 1.372.5.124 1.34.876 2.08 1.54.38.34.772.691.92.767.416.208.912.636 1.24.916l.136.116c.304.256 1.316 1.44 1.584 2.3.136.44.208.884.268 1.236.048.288.092.564.152.68l.024.048c.18.352.552 1.08.184 2.236-.408 1.284-1.368 2.756-1.764 3.332-.568.828-1.5 1.664-2.556 2.292a6 6 0 0 0-.544.368c-.216.16-.388.288-.684.376-.164.048-.364.068-.576.092q-.072.005-.156.016.293-.245.556-.52l.052-.012c.224-.064.345-.156.548-.308.14-.108.32-.24.58-.396 1.004-.596 1.884-1.384 2.42-2.164.384-.56 1.316-1.988 1.708-3.216.312-.983.008-1.583-.156-1.904l-.028-.051c-.088-.176-.132-.457-.192-.805a9 9 0 0 0-.256-1.175c-.24-.764-1.18-1.869-1.448-2.093l-.14-.12c-.296-.251-.784-.671-1.152-.855-.192-.096-.512-.38-1.016-.832-.632-.568-1.496-1.344-1.892-1.44a12 12 0 0 1-.536-.144c-.488-.28-1.02-.5-1.587-.66a31 31 0 0 1-1.036-.624l-.389-.24c-.312-.192-1.04-.444-1.443-.464a11 11 0 0 0-1.516.136c-1.692.556-2.753 1.304-3.604 1.904l-.32.224c-.756.528-1.612 1.428-1.992 2.095-.728 1.236-1.316 2.688-1.536 3.232l-.076.188c-.12.288-.32 1.22-.268 1.976.02.32-.008.916-.036 1.544-.036.82-.084 1.84-.004 2.14.1.364.336.768.612 1.24.124.216.26.448.396.7.376.692 1.952 1.724 2.408 1.94l.324.152c.508.236 1.204.56 1.892.956q.168.095.37.183c-1.138-.687-2.049-1.702-2.692-2.998q.2.409.442.783c-.96-.412-2.164-2.06-2.448-2.964-.58-1.204-.544-3.38-.372-3.944a14 14 0 0 0 .376-1.612c.092-.4.308-.772.5-1.1.116-.191.22-.371.292-.54.02-.043.04-.1.068-.163.264-.652.884-2.172 2.268-3.2h.004c.99-.686 1.787-1.051 2.64-1.331.865-.33 1.832-.501 2.887-.501 3.114 0 5.46 1.507 6.719 4.138l.03.026c1.08 1.008 2.239 2.14 2.33 2.76.12.843.237 1.507.3 1.727.089.3.141 1.464-.23 2.568l-.005-.004c-.424 1.248-.96 2.176-1.644 2.836-.348.34-.66.552-.94.7-.707 1.34-1.711 2.367-2.965 3.023-.34.261-.846.539-1.599.78-.94.3-1.8.457-2.484.457-.392 0-.72-.048-.971-.152-.244-.1-.612-.208-1.004-.32-.72-.208-1.536-.448-2.096-.768a24 24 0 0 0-1.856-.936q-.185-.085-.328-.152c-.452-.216-2.156-1.304-2.604-2.128a28 28 0 0 0-.392-.688c-.292-.496-.54-.928-.656-1.348-.096-.34-.064-1.12-.012-2.276.028-.612.056-1.196.036-1.492-.056-.776.14-1.792.3-2.176l-.004.008.076-.184c.224-.551.82-2.023 1.564-3.287.408-.716 1.32-1.68 2.124-2.236l.316-.224c.876-.62 1.968-1.392 3.732-1.968l.027-.008c.524-.1 1.465-.156 1.637-.148m.6 2.731c-4.068 0-6.496 2.996-6.496 8.02s2.428 8.064 6.495 8.064 6.496-3.016 6.496-8.064-2.428-8.02-6.496-8.02m7.122 3.872q.278.805.435 1.72c.279.383.434.854.454 1.396v.004c.024.644.016 1.452-.204 2.548a3.2 3.2 0 0 1-.204.636q.045-.3.076-.61c-.152 1.483-.528 2.79-1.1 3.889q.186-.353.34-.735.132-.107.276-.244c.632-.608 1.132-1.48 1.532-2.66.36-1.064.28-2.116.228-2.304-.1-.356-.264-1.456-.312-1.784-.056-.371-.857-1.209-1.52-1.856M26.18 9.705c-.901.902-1.352 2.005-1.564 2.522l-.072.172a6 6 0 0 1-.316.588c-.184.316-.372.644-.448.964a14 14 0 0 1-.388 1.656c-.136.449-.18 2.54.356 3.636l.012.032c.2.656.892 1.648 1.552 2.248l.03.06c-.71-1.437-1.09-3.217-1.09-5.276 0-2.762.685-5.01 1.927-6.602m13.583 6.602",
					clipRule: "evenodd"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M30.223 4.144c.125-.024 1.292-.22 2.072.268.207.092.392.2.551.296.236.144.445.268.665.296.471.064 1.34.224 1.831.588.184.136.653.348 1.148.568.828.368 1.768.788 2.136 1.184.148.16.3.34.456.52.38.44.768.892 1.1 1.068.524.276 1.184.856 1.444 1.268.072.107.384.352.688.587.624.484 1.4 1.089 1.628 1.656.16.392.272.868.384 1.328.112.468.228.952.356 1.148.336.508.256 1.784-.196 3.172-.488 1.5-1.212 2.704-2.14 3.572-.152.148-.34.324-.544.52-1.436 1.372-2.676 2.52-3.276 2.664-.244.056-.536.084-.844.116-.484.048-1.148.116-1.252.32-.276.544-1.812 1.412-3.044 1.72-.544.136-1.372.296-2.236.296-.611 0-1.235-.08-1.795-.308a9 9 0 0 1-1.376-.696c-.224-.136-.384-.232-.52-.264-.392-.092-2.736-1.028-3.364-1.456-.78-.532-2.648-1.88-3.148-2.884l-.088-.176c-.46-.924-.86-1.724-.804-2.5.016-.232.06-.52.112-.852.12-.764.268-1.712.136-2.46-.168-.952-.148-2.228.408-2.956.16-.208.6-1.091.952-1.803l-.004-.004c.152-.312.3-.608.416-.832.404-.784 2.032-2.656 2.716-3.128.204-.14.492-.332.812-.544.66-.436 1.475-.98 1.9-1.304.683-.52 2.276-.936 2.72-.988m.72.384c-.352 0-.629.054-.636.056h-.016c-.464.052-1.928.46-2.512.904-.436.332-1.26.88-1.924 1.32-.316.208-.604.4-.808.54h-.004c-.616.424-2.204 2.256-2.572 2.968-.116.22-.26.512-.416.824-.476.955-.824 1.651-.996 1.875-.392.512-.516 1.516-.324 2.612.144.82-.008 1.808-.132 2.604-.048.324-.092.6-.108.816-.048.656.328 1.404.76 2.272l.088.176c.372.748 1.796 1.892 3.004 2.716.564.384 2.86 1.304 3.22 1.392.2.048.388.16.644.312.292.176.696.416 1.316.668 1.28.52 3.055.168 3.76-.008 1.243-.312 2.58-1.136 2.76-1.492.215-.42.887-.484 1.603-.556a6 6 0 0 0 .784-.108c.532-.128 2.124-1.644 3.072-2.552.204-.196.392-.372.548-.52.876-.82 1.556-1.96 2.024-3.388.452-1.372.464-2.464.248-2.792-.172-.26-.288-.736-.42-1.288-.108-.444-.22-.903-.364-1.267-.184-.457-.94-1.044-1.492-1.472-.432-.332-.68-.532-.788-.7-.216-.344-.824-.876-1.276-1.116-.408-.216-.824-.705-1.228-1.172-.148-.176-.3-.348-.444-.504-.304-.328-1.24-.748-1.992-1.084-.54-.244-1.008-.452-1.232-.616-.3-.22-.908-.412-1.632-.508-.311-.04-.563-.192-.831-.352-.164-.096-.329-.196-.517-.276l-.032-.016c-.331-.216-.78-.268-1.135-.268",
					clipRule: "evenodd"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M27.255 3.408c.185-.096 2.776-1.444 4.02-1.02.748.256 1.192.5 1.488.66.18.096.307.168.42.196.303.076.824.072 1.327.064.644-.008 1.196-.016 1.476.132.084.044.233.112.42.2.78.36 2.232 1.036 3.016 1.776.444.42.94 1.048 1.416 1.652.516.655 1.048 1.331 1.36 1.52q.164.094.412.22c.844.436 2.256 1.172 2.948 2.588.82 1.527.96 2.4 1.044 2.92.024.155.044.28.076.36.192.504.388 2.268-.292 4.231l-.024.048c-.448.68-.784 1.372-1.08 1.984-.376.772-.648 1.332-.988 1.556-.38.248-.644.536-.896.816-.276.304-.54.592-.912.78-.72.364-2.228 1.424-2.436 1.828-.204.4-.928.488-1.692.58-.38.048-.816.1-.968.188l-.136.076c-1.404.8-3.328 1.892-5.011 1.996q-.438.029-.865.027c-1.423 0-2.687-.22-3.36-.603-.255-.144-.467-.296-.675-.444-.4-.288-.748-.532-1.284-.644-.832-.172-6.075-3.1-6.384-3.956-.112-.312-.144-.584-.176-.82-.044-.32-.068-.532-.256-.708l-.124-.112c-.488-.436-1.395-1.244-1.196-2.892.204-1.68.256-2.4.232-3.083-.028-.724.452-2.932.924-3.684.184-.296.392-.545.616-.805.316-.376.648-.764.956-1.351.296-.564.832-1.336 1.228-1.884a7 7 0 0 1 1.532-1.54c1.308-.952 2.136-1.612 2.34-1.848h.016c.448-.528 1.388-.96 1.488-1.004m3.431-.668c-1.012 0-2.623.732-3.243 1.06l-.016.008c-.014.005-.945.42-1.34.888l.012-.004c-.229.272-1.044.916-2.416 1.92-.552.4-1.036.888-1.436 1.44-.56.771-.972 1.404-1.196 1.832-.332.631-.692 1.056-1.012 1.431a6.4 6.4 0 0 0-.58.752c-.42.664-.884 2.788-.86 3.432.028.712-.028 1.449-.236 3.156-.172 1.42.592 2.1 1.052 2.508l.132.12c.304.284.348.616.392.972.028.228.056.46.152.728.205.58 5.192 3.496 6.056 3.672.628.128 1.028.412 1.452.715.196.14.4.285.636.42.724.413 2.324.625 3.976.52 1.58-.1 3.451-1.163 4.82-1.94l.135-.075c.228-.128.648-.18 1.132-.24.472-.056 1.256-.152 1.356-.344.3-.576 1.996-1.7 2.632-2.02.3-.148.524-.396.784-.68s.552-.608.98-.888c.24-.16.512-.724.832-1.38.284-.588.636-1.312 1.092-2.012.644-1.876.436-3.515.288-3.904a2 2 0 0 1-.1-.448c-.08-.492-.216-1.316-1.004-2.787-.632-1.292-1.964-1.984-2.76-2.396-.176-.092-.324-.168-.436-.236-.38-.228-.892-.876-1.48-1.624-.468-.596-.948-1.208-1.372-1.608-.732-.692-2.14-1.344-2.9-1.696-.196-.092-.352-.164-.44-.212-.18-.092-.78-.088-1.264-.08-.531.008-1.084.016-1.444-.076-.167-.04-.323-.128-.523-.236-.296-.16-.705-.384-1.42-.628a1.4 1.4 0 0 0-.433-.06",
					clipRule: "evenodd"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					d: "M65.089 1.456c.2.024.396.048.592.08.832 1.184 1.68 2.344 1.932 2.532.176.132.556.372.992.648 1.471.932 2.148 1.396 2.284 1.672.224.456.276 1.948.108 2.96-.16.963-.148 1.176.024 2.792.164 1.536.236 6.42-.068 8.227-.3 1.776-1.377 4.604-1.785 5.112-.147.184-.284.828-.4 1.396l-.007.004c-.156.752-.316 1.532-.6 1.971a37 37 0 0 1-1.472 2.057q-.329.072-.664.132c.744-.944 1.476-1.976 1.764-2.428.24-.372.4-1.145.54-1.824.148-.704.272-1.312.488-1.58.344-.428 1.396-3.144 1.692-4.908.3-1.776.224-6.587.064-8.107-.168-1.572-.196-1.857-.02-2.912.176-1.028.083-2.388-.069-2.692-.12-.225-1.423-1.052-2.123-1.496-.444-.284-.828-.528-1.016-.668-.328-.248-1.344-1.652-2.256-2.968M15.291 7.396c-.44.516-.9.991-1.256 1.275-.544.432-.896.873-1.304 1.377-.212.264-.435.54-.707.844-.584.656-.977 3.123-1.237 4.755-.076.464-.14.876-.2 1.192-.268 1.404.533 4.276.812 4.956.092.22.237.468.393.728h-.005c.296.496.628 1.06.796 1.768.229.968 1.356 2.892 2.704 4.643v.716c-1.532-1.903-2.871-4.151-3.131-5.255-.148-.644-.465-1.176-.744-1.644-.16-.276-.316-.536-.42-.788-.304-.732-1.128-3.688-.84-5.204.06-.312.124-.72.196-1.18.284-1.784.672-4.228 1.344-4.98.268-.295.483-.568.695-.828.424-.524.793-.98 1.372-1.443.444-.36 1.032-.996 1.532-1.62zM55.113 21.003c.072.176.152.348.232.516-.496.984-1.24 2.592-1.404 3.064-.144.416-.416.636-.68.848-.148.12-.287.232-.407.38l-.005-.004c-.62.768-1.315 1.575-1.795 1.78-.148.064-.288.124-.457.224-.12-.096-.243-.192-.36-.292.233-.152.433-.244.645-.336.44-.188 1.332-1.292 1.624-1.652.152-.184.315-.32.475-.448.236-.188.437-.352.54-.648.185-.536 1.1-2.5 1.592-3.432M48.77 6.492c.691.476 1.335 1.032 1.795 1.672 1.028 1.435 1.293 1.92 1.549 2.387l.155.284.125.212c.224.388.24.428.312.904.08.54.351 3.748.103 4.848-.111.504-.392 1.18-.683 1.896-.344.836-.7 1.704-.788 2.296v.004c-.176 1.188-2.02 3.387-2.432 3.724-.148.12-.416.368-.712.648-.088-.116-.176-.24-.26-.36.292-.276.544-.504.692-.628.332-.272 2.115-2.388 2.275-3.448.096-.644.464-1.536.816-2.4.284-.7.556-1.36.66-1.824.232-1.027-.032-4.18-.108-4.688q-.06-.404-.26-.752l-.124-.216-.16-.287c-.251-.46-.507-.933-1.52-2.344-.435-.604-1.055-1.136-1.72-1.588q.142-.173.285-.34M6.748 26.295c.156.316.296 1.436.46 2.868h.004c.064.576.124 1.072.16 1.244.048.224.344.616.66.976h-.576c-.252-.316-.464-.64-.516-.884-.044-.197-.096-.676-.168-1.288-.056-.468-.12-1.048-.192-1.556v-1.676c.064.116.12.224.168.316"
				}),
				/* @__PURE__ */ g("path", {
					fill: "#F37A1F",
					fillRule: "evenodd",
					d: "M62.045 0c4.984 0 9.472 1.46 12.644 4.112C78.164 7.016 80 11.22 80 16.263c0 9.808-7.216 16.396-17.951 16.396l-.004-.005c-6.48 0-11.895-2.444-15.02-6.74-3.123 4.296-8.54 6.74-15.019 6.74-6.831 0-12.423-2.707-15.451-7.36v7.353H5.315V13.495H0V6.624L16.555.064v7.2C19.575 2.672 25.163 0 32.006 0c6.844 0 11.908 2.408 15.02 6.648C50.138 2.408 55.549 0 62.045 0M32.006 1.26c-1.786 0-3.48.193-5.055.562a9 9 0 0 0-.296.162l-.016.008c-.01.005-1.065.489-1.516 1.032-.232.276-.992.904-2.264 1.868a8.5 8.5 0 0 0-2.232 2.536c-.496.86-.86 1.52-1.084 1.956-.364.711-.828 1.076-1.24 1.396-.3.236-.564.444-.756.755-.472.764-1.184 3.22-1.156 3.98.004.124.008.248.016.38.036.708.08 1.592-.116 3.252-.183 1.548.792 2.352 1.372 2.832.104.088.196.164.268.232.324.312.32.688.316 1.052-.004.28-.008.564.108.896.261.744 5.856 4.252 6.776 4.252h.18c1.188 0 1.648.471 2.056.891.18.184.352.36.584.497.835.488 2.244.675 4.076.535 1.94-.148 4.515-1.567 5.363-2.035.268-.148.784-.176 1.38-.208.628-.036 1.58-.088 1.756-.344.38-.556 2.44-2.152 3.22-2.556.68-.352 1.632-1.112 2.076-2.104.192-.432.468-.82.764-1.232.436-.612.932-1.304 1.32-2.36.648-1.764.42-4.575.26-5-.064-.164-.036-.384 0-.692.088-.736.224-1.856-.724-2.884-.1-.108-.212-.2-.328-.295-.144-.12-.296-.245-.424-.405-.852-1.043-2.18-1.86-2.616-2.127-.524-.32-1.92-1.584-4.268-3.86-1.092-1.06-2.628-2.02-3.58-2.424-.172-.072-.648.004-1.112.076-.692.108-1.48.232-2.123.068-.348-.088-.597-.276-.857-.472-.096-.068-.192-.144-.3-.216h.168c.2 0 .396.012.596.016.16.112.312.2.5.248.54.136 1.248.032 1.888-.068q1.255.162 2.42.456c.888.504 1.912 1.224 2.712 2C42.41 6.14 43.822 7.42 44.31 7.72c.784.48 1.92 1.236 2.728 2.224.104.123.228.228.364.34.124.103.252.208.372.34 1.084 1.18.928 2.468.836 3.236-.024.187-.052.42-.028.483.176.473.436 3.416-.26 5.308-.408 1.112-.924 1.832-1.376 2.464-.292.408-.544.764-.72 1.156-.488 1.096-1.496 1.916-2.276 2.32-.708.368-2.72 1.92-3.06 2.416-.3.432-1.212.484-2.096.532-.476.024-1.016.056-1.192.152-.868.48-3.508 1.936-5.543 2.088q-.602.043-1.144.044c-1.376 0-2.468-.22-3.188-.64-.284-.168-.484-.372-.68-.572-.416-.428-.776-.8-1.892-.756h-.016c-1.136 0-6.88-3.624-7.204-4.548-.14-.404-.132-.76-.132-1.044.004-.36 0-.556-.18-.728q-.098-.094-.244-.212c-.608-.504-1.74-1.44-1.528-3.224.192-1.624.148-2.484.112-3.176-.004-.132-.012-.26-.016-.388-.032-.848.7-3.375 1.22-4.227.236-.38.54-.62.864-.873.392-.308.8-.628 1.12-1.251.228-.444.596-1.108 1.092-1.972a8.8 8.8 0 0 1 2.348-2.668c1.208-.912 1.984-1.552 2.188-1.796l.004-.004a3 3 0 0 1 .477-.443c-2.207.742-4.128 1.862-5.673 3.314q.69-.645 1.476-1.203c-.216.276-.652.708-1.296 1.292a2 2 0 0 0-.372.444c-.596.948-1 1.687-1.084 1.972-.096.32-.488.864-.988 1.551-.468.644-.996 1.377-1.308 1.977-1.16 2.243-1.495 3.187-1.66 3.98-.167.803-.164 4.267.056 4.89h-.003c.132.377.475 1.081.775 1.7q.052.11.104.217v1.036a45 45 0 0 0-.504-1.06c-.324-.664-.656-1.348-.796-1.748-.26-.752-.236-4.316-.068-5.128.16-.764.448-1.604 1.368-3.436v.772l.008-.02V9.357c-.304.304-.692.668-1.076 1.024-.448.42-.871.812-.992.964-.252.308-.923 2.943-.951 3.707-.004.136-.017.336-.029.588-.064 1.137-.18 3.248.024 4.252.268 1.312.488 1.928.816 2.276v.004c.436.468.884 1.816 1.028 2.432.092.39.586 1.244 1.176 2.094v-7.042l1.212 2.868c2.348 5.555 8.14 8.875 15.5 8.875 6.423 0 11.703-2.527 14.487-6.939l.532-.844.004-.004.004.007c.292-.488.556-.903.712-1.095.112-.144.212-.228.304-.312.276-.24.556-.492 1.416-2.492.708-1.656.988-3.78.78-5.984l-.036-.32c-.028-.256-.045-.38.011-.744q.024-.137.052-.256c.068-.307.108-.491-.187-.891-.124-.164-.24-.3-.352-.432-.3-.352-.58-.684-.96-1.468-.184-.372-.716-.848-1.348-1.312l-.396.624-.532-.836c-1.052-1.653-2.468-3.037-4.172-4.119.753.82 1.92 2.056 2.524 2.29.104.045.244.105.404.185.26.296.508.596.74.912-.552-.324-1.04-.576-1.304-.68-.768-.297-2.108-1.764-2.912-2.64l.004-.008c-.112-.12-.208-.228-.292-.316a5.6 5.6 0 0 0-.711-.603c-2.502-1.212-5.484-1.86-8.769-1.86m30.039 0c-1.18 0-2.323.084-3.417.248.155-.024.314-.04.473-.06.532.908 2.372 3.924 2.74 4.196 1.044.78 1.596 1.252 1.888 1.54a8 8 0 0 0-.792-.116A30 30 0 0 0 61.577 6v-.004c-.512-.38-2.62-3.915-2.952-4.488-2.161.323-4.138.958-5.866 1.873l.218-.109c.412.3.817.684 1.145 1.192.684 1.064 1.803 2.512 2.471 3.38.18.24.328.424.412.54.06.08.148.16.252.247a6.6 6.6 0 0 1 1.171-.776c-.772-.861-2.766-3.647-2.974-4.035-.12-.228-.54-.672-1.096-1.176.156-.064.312-.116.467-.172.476.448.876.872 1.02 1.14.2.372 2.22 3.187 2.936 3.976q.03.033.067.067.621-.271 1.314-.427c-.876-1.033-2.277-3.101-2.673-3.812-.272-.496-.744-.984-1.216-1.408q.253-.067.512-.128c.424.4.832.852 1.092 1.32.496.89 2.04 3.107 2.786 3.933q.663-.105 1.382-.105c1.72 0 3.206.46 4.403 1.314-.02-.427-.071-.774-.135-.902-.116-.2-1.264-.928-1.88-1.32-.396-.252-.74-.472-.908-.596h.004c-.44-.328-2.252-2.976-3.072-4.204q.25-.019.5-.032c.86 1.292 2.504 3.635 2.836 3.884.156.116.492.328.88.576 1.308.836 1.912 1.248 2.036 1.496.12.244.188.828.188 1.448a7.06 7.06 0 0 1 1.432 1.679c.016-.239.048-.49.104-.815.16-.948.1-2.224-.06-2.524-.124-.204-1.34-.984-1.996-1.404a24 24 0 0 1-.968-.64l.004.008c-.392-.292-1.804-2.304-2.76-3.716q.271.005.536.016c.944 1.372 2.196 3.124 2.488 3.344.164.124.524.356.94.62 1.372.876 2.008 1.312 2.144 1.564.244.452.26 1.904.108 2.804-.109.643-.132.932-.08 1.588l-.06-.122c.697 1.424 1.072 3.182 1.072 5.213 0 4.52-1.853 7.714-4.988 8.859q.037-.014.076-.027a9 9 0 0 0-.068.324c-.14.672-.284 1.368-.536 1.76-.804 1.248-2.272 3.42-3.06 3.911-.132.08-.24.156-.344.232a24 24 0 0 0 2.907-.037c-.196.014-.396.022-.591.034.624-.652 1.556-1.92 2.628-3.588.224-.348.376-1.076.508-1.716.136-.668.256-1.24.46-1.496.104-.132.276-.48.472-.952.316-.312.6-.656.86-1.032-.368 1.064-.772 1.996-.984 2.26-.136.172-.26.776-.372 1.308l-.004.004c-.148.712-.3 1.448-.568 1.864-.604.94-1.568 2.375-2.372 3.31 2.006-.155 3.9-.573 5.617-1.233l.387-.593c.256-.396.428-1.216.576-1.94.156-.748.288-1.392.516-1.672.368-.457 1.484-3.34 1.8-5.216.316-1.884.24-6.995.068-8.607-.176-1.664-.209-1.964-.02-3.084.175-1.056.056-2.556-.08-2.876-.125-.24-1.52-1.12-2.268-1.592-.468-.296-.872-.548-1.068-.696-.228-.168-.8-.908-1.448-1.804q.354.101.696.208c.471.636.856 1.124 1.016 1.244.18.14.576.388 1.036.676 1.58.992 2.308 1.488 2.436 1.792.192.456.283 2.084.107 3.124-.171 1.024-.16 1.248.025 2.963.172 1.636.251 6.812-.073 8.728-.316 1.888-1.455 4.88-1.887 5.42-.16.196-.296.852-.428 1.484h.004c-.168.8-.337 1.624-.636 2.088-.012.02-.028.039-.04.058q.863-.376 1.655-.837l-.223.127c.08-.324.155-.676.223-1.008.16-.772.3-1.44.532-1.732.38-.476 1.54-3.472 1.868-5.42.332-1.96.249-7.264.073-8.94l-.045-.411c-.152-1.42-.188-1.756.024-2.8.212-1.036.092-2.528-.088-2.992-.12-.256-1.575-1.168-2.36-1.66-.48-.304-.895-.564-1.1-.716-.111-.084-.308-.304-.552-.608 1.724.744 3.229 1.74 4.469 2.964.176.62.283 2.024.063 3.096-.196.976-.168 1.268-.016 2.664l.044.411c.18 1.696.265 7.068-.072 9.06-.328 1.96-1.512 5.067-1.96 5.624l-.004.004c-.167.204-.308.888-.444 1.544-.04.203-.083.41-.127.61q.865-.53 1.629-1.162l-.05.04c.092-.352.197-.636.328-.8.396-.492 1.608-3.616 1.948-5.648.34-2.044.256-7.571.072-9.315-.192-1.8-.228-2.124-.024-3.332.056-.34.072-.722.064-1.105-2.817-3.916-7.735-6.195-14.043-6.195m-46.75 3.37c-.261.43-.432.863-.48.994-.108.292-.508.716-.968 1.208-.391.42-.795.852-.971 1.156-.192.331-.617.736-1.112 1.204-.548.52-1.168 1.108-1.4 1.564-.424.84-.84 2.883-.829 3.543.004.316-.116.8-.264 1.412-.2.8-.443 1.8-.463 2.712-.036 1.488 1.52 4.616 1.752 4.94.196.268.344 1.092.503 2.056l.08.456v.004c.1.524 2.137 3.972 3.752 5.416.036.031.077.06.113.091h.283v-3.933c-.742-.998-1.472-2.183-1.604-2.75-.16-.692-.588-1.872-.92-2.228-.444-.476-.683-1.304-.923-2.488-.216-1.06-.096-3.208-.032-4.363.011-.248.024-.449.028-.58.028-.753.687-3.52 1.047-3.973.105-.132.364-.383.688-.69l.726-.679c.386-.365.772-.737.994-.986zM3.744 12.236c.152-.527.252-1.003.264-1.395.008-.348.112-.816.18-1.124.028-.116.048-.208.056-.26.116-.764.848-2.94 1.672-3.504.191-.132.507-.372.87-.66l-4.438 1.76c-.16.684-.264 1.368-.316 1.724l-.016.108c-.016.104-.024.244-.04.42l.004-.008a13.342 13.342 0 0 1-.54 2.932h-.176V11.15a12 12 0 0 0 .272-1.887c.016-.184.028-.336.044-.448l.016-.104c.068-.476.152-.98.255-1.463l-.59.235v4.751h1.144c.167-.654.279-1.325.307-2.032v-.032c.088-.471.156-.855.188-1.063.068-.44.4-1.648.864-2.616l.632-.248c-.512.872-.964 2.323-1.056 2.927l-.004.005c-.032.208-.1.592-.188 1.06-.024.69-.135 1.353-.29 2zm60.66 13.066a8 8 0 0 1-2 .322c-.1.358-.216.677-.355.896-.084.128-.192.308-.32.524-.576.956-1.444 2.404-2.116 2.823h-.004a8.5 8.5 0 0 0-1.48 1.189 19 19 0 0 1-.504-.092c.316-.408 1.064-1.048 1.748-1.472.584-.364 1.488-1.868 1.972-2.676.132-.22.244-.408.328-.536.1-.152.187-.383.267-.65a8.5 8.5 0 0 1-1.651-.174c-.048.1-.092.2-.136.308-.4.956-1.008 1.896-1.592 2.452l-.052.052c-.464.44-1.7 1.615-1.828 1.951v.005c-.052.131-.167.27-.341.433 1.414.39 2.93.63 4.525.71-.214-.013-.421-.032-.632-.048.192-.176.436-.36.756-.56.516-.32 1.608-1.732 2.924-3.775.208-.324.352-1.008.476-1.612q.01-.036.015-.07M52.536 3.5c-.927.512-1.78 1.106-2.547 1.777 1.07.728 2.17 1.71 2.633 2.698.324.692.743 1.128 1.08 1.48.243.252.451.468.58.724.323.643.447 1.28.447 2.267v.316c-.292 1.056-.448 2.244-.448 3.54q.002 1.086.14 2.064c-.147.912-.424 1.532-.624 1.976a5 5 0 0 0-.16.388c-.12.356-1.312 3.268-2.436 4.248l-.011.004c-.332.292-.82.68-1.34 1.092-.203.159-.413.329-.627.5 1.811 1.876 4.193 3.25 6.973 4.04q-.179-.053-.358-.108c.223-.18.391-.344.431-.444.136-.356.872-1.1 1.936-2.112l.052-.052c.54-.516 1.112-1.396 1.488-2.304.036-.088.072-.164.108-.244a7 7 0 0 1-1.586-.644c-.011.05-.026.101-.034.148-.208 1.12-.696 1.928-1.732 2.884a45 45 0 0 0-1.972 1.916l-.116.12q-.076.079-.16.164c-.147-.064-.288-.128-.431-.192q.145-.146.271-.28l.116-.12a52 52 0 0 1 1.992-1.932c.96-.88 1.408-1.624 1.596-2.64q.03-.152.083-.302a6.7 6.7 0 0 1-1.276-1.084c-.412.771-.779 1.506-.863 1.87-.196.844-.384 1.3-.972 1.744-.524.392-1.192 1.048-1.356 1.324h.004c-.108.18-.46.504-.852.8-.14-.076-.271-.164-.407-.244.4-.292.796-.636.88-.78.208-.353.948-1.06 1.468-1.452.475-.36.627-.704.807-1.492.1-.435.519-1.262.982-2.13-1.291-1.607-2.006-3.903-2.006-6.722 0-2.292.472-4.23 1.343-5.734l-.01-.022c-.193-.396-1.064-1.91-1.284-2.155-.092-.1-.312-.396-.697-.912-.66-.888-1.655-2.228-1.995-2.5a8 8 0 0 0-.7-.464c.128-.092.264-.18.396-.272.264.164.472.304.58.392.356.28 1.184 1.38 2.075 2.58.316.42.588.788.668.876.247.27.941 1.48 1.24 2.04a7 7 0 0 1 1.018-1.21 1.6 1.6 0 0 1-.27-.278c-.084-.112-.228-.296-.408-.532-.672-.872-1.795-2.328-2.491-3.408l-.005-.004a4.2 4.2 0 0 0-1.213-1.202m23.98 4.587a6 6 0 0 1-.06.548c-.188 1.111-.172 1.352.024 3.212l.008.003c.188 1.764.272 7.36-.076 9.432-.319 1.886-1.398 4.802-1.927 5.68a13.1 13.1 0 0 0 2.342-2.992c.267-.866.502-1.775.633-2.552.356-2.1.268-7.795.076-9.595l-.036-.348c-.096-.864-.148-1.368-.14-1.836q.289.631.524 1.304l.052.487.036.352c.192 1.816.28 7.58-.08 9.716l.004-.004c-.008.061-.023.13-.035.196.578-1.654.875-3.474.875-5.432 0-3.287-.853-6.154-2.419-8.477q.102.152.2.306M49.762 5.479c-.838.767-1.569 1.63-2.18 2.582q.044-.06.084-.121c.688.5 1.28 1.036 1.5 1.492.356.732.62 1.044.9 1.376.12.14.24.284.367.456.42.56.34.911.264 1.251a3 3 0 0 0-.043.225c-.048.303-.036.392-.008.623.008.08.02.177.032.3.216 2.304-.072 4.508-.812 6.228-.9 2.088-1.22 2.372-1.528 2.648l.004.004c-.084.076-.164.148-.256.26-.16.196-.464.687-.791 1.234l.263.418q.606.959 1.364 1.796c.218-.179.441-.353.656-.524.516-.408 1-.792 1.323-1.076.968-.848 2.144-3.564 2.308-4.056.04-.128.104-.268.176-.428.252-.552.629-1.392.689-2.772.012-.236.028-.6.052-1.036.064-1.252.16-3.14.16-3.908 0-1.056-.153-1.575-.4-2.071-.1-.196-.289-.388-.505-.616-.356-.376-.803-.84-1.16-1.6-.435-.94-1.523-1.888-2.567-2.58zm12.283 2.808c-4.068 0-6.496 2.996-6.496 8.02s2.428 8.064 6.496 8.064 6.496-3.016 6.496-8.064-2.428-8.02-6.496-8.02M18.52 6.74a12.9 12.9 0 0 0-2.013 3.28l-.034.079c.163-.232.332-.463.49-.683.42-.576.852-1.172.924-1.42.083-.274.351-.776.633-1.256M5.916 12.235c.216-1.088.808-3.143 1.508-3.867.344-.356.956-.884 1.547-1.392.74-.64 1.509-1.3 1.737-1.608.148-.204.372-.436.604-.684.468-.492 1-1.052 1.155-1.556q.018-.047.035-.101l-.93.368c-.603.826-1.534 1.478-2.32 1.965-.729.452-2.216 2.096-2.216 2.096-.121.133-1.092 1.604-1.408 2.624-.02.063-.032.147-.044.24a2.7 2.7 0 0 1-.084.428c-.052.184-.116.692-.164 1.064v-.004c-.02.152-.036.288-.052.384l-.008.035h-.448q.008-.046.016-.1l.048-.376c.052-.407.12-.911.18-1.127.036-.132.056-.252.072-.368.016-.104.028-.209.06-.305.328-1.063 1.308-2.575 1.504-2.791.068-.072 1.532-1.688 2.311-2.172.54-.336 1.146-.747 1.657-1.237L7.444 5.032l.76-.3q-.048.038-.096.076c-.768.616-1.564 1.252-1.94 1.508-.668.456-1.376 2.5-1.484 3.208-.008.06-.032.16-.06.288H4.62c-.064.296-.164.736-.172 1.04-.008.403-.1.867-.244 1.383zm.66 10.95q.014.015.024.03c.484.668.896 1.244 1.024 1.56.308.768.58 2.024.976 4.072.288 1.483.824 1.828 1.216 2.076l-.004-.005c.104.068.2.129.284.205.048.044.124.132.236.26h-.62a1 1 0 0 0-.136-.092c-.432-.276-1.088-.692-1.412-2.364-.392-2.02-.656-3.256-.952-3.992-.08-.195-.33-.565-.636-.994v7.445h7.78c-1.624-1.591-3.524-4.783-3.644-5.427-.024-.12-.048-.28-.08-.464-.088-.54-.277-1.664-.429-1.872-.2-.28-1.871-3.516-1.835-5.208.024-.96.272-1.984.476-2.808.14-.56.256-1.04.252-1.3-.016-.735.403-2.823.875-3.751.268-.524.889-1.117 1.489-1.685.451-.423.875-.827 1.035-1.103.205-.352.625-.8 1.033-1.236.375-.4.8-.852.875-1.06.1-.28.407-1.028.892-1.591V2.65a5 5 0 0 1-.396.317c-.4.284-.712 1.068-.916 1.588-.148.372-.232.572-.332.68-.196.184-.428.384-.672.592-.52.452-1.111.96-1.371 1.32-.412.568-1.52 1.724-2.048 2.176-.46.392-1.468 3.176-1.4 3.867.044.453-.252 1.273-.596 2.22-.288.8-.616 1.708-.744 2.424-.268 1.524.687 3.323.884 3.668.064.12.14.224.228.344.336.468.796 1.108 1.452 3.424.18.648.267 1.088.335 1.444l.005-.016c.188.964.244 1.252 1.743 3.344.364.508.724.943 1.08 1.327h-.591c-.28-.324-.564-.675-.848-1.072-1.556-2.171-1.625-2.507-1.82-3.515-.069-.348-.152-.78-.328-1.408-.632-2.244-1.068-2.844-1.384-3.284a4 4 0 0 1-.256-.384 8.7 8.7 0 0 1-.74-1.76V16.94c.16-.555.372-1.144.568-1.688.296-.824.607-1.675.572-2.024-.08-.831.991-3.767 1.551-4.243.5-.428 1.588-1.564 1.976-2.1.293-.404.877-.908 1.445-1.396.24-.204.467-.4.652-.572.04-.044.148-.312.232-.528.236-.6.563-1.424 1.071-1.784.252-.176.44-.352.648-.56V1.92l-2.245.89q-.092.233-.158.45c-.188.6-.757 1.2-1.257 1.728a9 9 0 0 0-.572.644c-.26.352-1.007.996-1.803 1.68-.584.5-1.188 1.02-1.52 1.364-.58.6-1.152 2.475-1.376 3.56h.212z",
					clipRule: "evenodd"
				})
			]
		})
	}), e[0] = t) : t = e[0], t;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Header.DyqOlV8L.js
d();
var Gu = (e) => {
	let t = D.c(7), n;
	t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (n = {
		width: 0,
		height: 0
	}, t[0] = n) : n = t[0];
	let [r, i] = c(n), a, s;
	t[1] === e ? (a = t[2], s = t[3]) : (a = () => {
		let t = e.current;
		t && i({
			width: t.offsetWidth,
			height: t.offsetHeight
		});
	}, s = [e], t[1] = e, t[2] = a, t[3] = s), Yi(a, s);
	let l, u;
	return t[4] === e ? (l = t[5], u = t[6]) : (l = () => {
		let t = e.current;
		if (!t) return;
		let n = new ResizeObserver((e) => {
			let t = e[0];
			if (!t) return;
			let n = {
				width: t.contentRect.width,
				height: t.contentRect.height
			};
			i((e) => e.width === n.width && e.height === n.height ? e : n);
		});
		return n.observe(t), () => n.disconnect();
	}, u = [e], t[4] = e, t[5] = l, t[6] = u), o(l, u), r;
}, Ku = (e) => {
	let t = D.c(3), n = e, [r, i] = c("down"), a, s;
	return t[0] === n ? (a = t[1], s = t[2]) : (a = () => {
		let e = window.scrollY, t = () => {
			let t = window.scrollY, r = t > e ? "down" : "up";
			Math.abs(t - e) > n && (i(r), e = t);
		};
		return window.addEventListener("scroll", t, { passive: !0 }), () => window.removeEventListener("scroll", t);
	}, s = [n], t[0] = n, t[1] = a, t[2] = s), o(a, s), r;
}, qu = ({ hasBrandArea: e, hasPrimaryArea: t, hasSecondaryArea: n }) => {
	if (e) throw Error(L("DSHeader", "A <DSTopBar.BrandArea> component was detected as a direct child of DSHeader. Please move it into the DSTopBar component."));
	if (t) throw Error(L("DSHeader", "A <DSTopBar.PrimaryArea> component was detected as a direct child of DSHeader. Please move it into the DSTopBar component."));
	if (n) throw Error(L("DSHeader", "A <DSTopBar.SecondaryArea> component was detected as a direct child of DSHeader. Please move it into the DSTopBar component."));
}, Ju = {
	root: "ds-top-bar_root_q6oxc_1",
	rootSticky: "ds-top-bar_root--sticky_q6oxc_49",
	rootFixed: "ds-top-bar_root--fixed_q6oxc_53",
	content: "ds-top-bar_content_q6oxc_62",
	contentVariantFull: "ds-top-bar_content--variant-full_q6oxc_81",
	contentHasPrimaryAreaAndSecondaryArea: "ds-top-bar_content--has-primary-area-and-secondary-area_q6oxc_85",
	primary: "ds-top-bar_primary_q6oxc_90",
	contentHasBrandAddOnWithPrimaryAreaAndSecondaryArea: "ds-top-bar_content--has-brand-add-on-with-primary-area-and-secondary-area_q6oxc_105",
	brand: "ds-top-bar_brand_q6oxc_110",
	contentHasPrimaryArea: "ds-top-bar_content--has-primary-area_q6oxc_85",
	contentHasPrimaryAreaWithBrandAddOn: "ds-top-bar_content--has-primary-area--with-brand-add-on_q6oxc_149",
	brandAddOn: "ds-top-bar_brand-add-on_q6oxc_213",
	brandAddOnDouble: "ds-top-bar_brand-add-on--double_q6oxc_234",
	subTitle: "ds-top-bar_sub-title_q6oxc_248",
	secondary: "ds-top-bar_secondary_q6oxc_274",
	logo: "ds-top-bar_logo_q6oxc_283",
	logoReduced: "ds-top-bar_logo--reduced_q6oxc_293"
}, Yu = ({ hasBrandArea: e, hasPrimaryArea: t, hasSecondaryArea: n }) => {
	if (!e) throw Error(L("DSTopBar", "A <DSTopBar.BrandArea> component is required. Please include it as a child of DSTopBar."));
	if (!t && n) throw Error(L("DSTopBar", "A <DSTopBar.PrimaryArea> is required when using <DSTopBar.SecondaryArea>. Please include <DSTopBar.PrimaryArea> as a child of DSTopBar, or move the content from <DSTopBar.SecondaryArea> into <DSTopBar.PrimaryArea>."));
}, Xu = (e) => e == null || typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).length === 0, Zu = (e) => {
	let t = D.c(28), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({children: n, className: r, rootClassName: a, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let { variant: o, isHeaderSticky: s, isMobile: c, topBarAreaRef: l, isStickyMainNavigationVisible: u, hasBrandAddOn: d } = S(rd), f, p;
	if (t[5] !== n || t[6] !== r || t[7] !== d || t[8] !== s || t[9] !== c || t[10] !== u || t[11] !== a || t[12] !== o) {
		let e = B(n, Qu), i = B(n, ed), l = B(n, td);
		process.env.NODE_ENV !== "production" && Yu({
			hasBrandArea: e,
			hasPrimaryArea: i,
			hasSecondaryArea: l
		});
		let m;
		t[15] !== s || t[16] !== c || t[17] !== u || t[18] !== a ? (m = M(Ju.root, a, s ? {
			[Ju.rootSticky]: !c && u,
			[Ju.rootFixed]: !c && !u
		} : {}), t[15] = s, t[16] = c, t[17] = u, t[18] = a, t[19] = m) : m = t[19], f = m, p = M(Ju.content, r, {
			[Ju.contentHasPrimaryArea]: i && !d && !l,
			[Ju.contentHasPrimaryAreaWithBrandAddOn]: i && d && !l,
			[Ju.contentHasBrandAddOnWithPrimaryAreaAndSecondaryArea]: d && i && l,
			[Ju.contentHasPrimaryAreaAndSecondaryArea]: i && l && !d,
			[Ju.contentVariantFull]: o === "full"
		}), t[5] = n, t[6] = r, t[7] = d, t[8] = s, t[9] = c, t[10] = u, t[11] = a, t[12] = o, t[13] = f, t[14] = p;
	} else f = t[13], p = t[14];
	let m = p, h;
	t[20] !== n || t[21] !== m || t[22] !== i ? (h = /* @__PURE__ */ g("section", {
		className: m,
		...i,
		children: n
	}), t[20] = n, t[21] = m, t[22] = i, t[23] = h) : h = t[23];
	let _;
	return t[24] !== f || t[25] !== h || t[26] !== l ? (_ = /* @__PURE__ */ g("div", {
		className: f,
		ref: l,
		children: h
	}), t[24] = f, t[25] = h, t[26] = l, t[27] = _) : _ = t[27], _;
}, Qu = (e) => {
	let t = D.c(22), { children: n, className: r } = e, { logoProps: i, brandAddOnProps: a, setHasBrandAddOn: s } = S(rd), { aria: c, logo: l, href: u, target: d } = i || {}, f = l === void 0 ? "main" : l, p = u === void 0 ? "/" : u, m = d === void 0 ? "_self" : d, h;
	t[0] !== a || t[1] !== n || t[2] !== s ? (h = () => {
		n || !Xu(a) ? s?.(!0) : s?.(!1);
	}, t[0] = a, t[1] = n, t[2] = s, t[3] = h) : h = t[3];
	let _;
	t[4] !== a || t[5] !== n ? (_ = [n, a], t[4] = a, t[5] = n, t[6] = _) : _ = t[6], o(h, _);
	let v = M(Ju.logo, { [Ju.logoReduced]: f.includes("reduced") }), y;
	t[7] === r ? y = t[8] : (y = M(Ju.brand, r), t[7] = r, t[8] = y);
	let b;
	t[9] !== c || t[10] !== p || t[11] !== f || t[12] !== v || t[13] !== m ? (b = /* @__PURE__ */ g(Hu, {
		className: v,
		aria: c,
		logo: f,
		href: p,
		target: m
	}), t[9] = c, t[10] = p, t[11] = f, t[12] = v, t[13] = m, t[14] = b) : b = t[14];
	let x;
	t[15] === a ? x = t[16] : (x = Xu(a) ? void 0 : /* @__PURE__ */ g($u, { ...a }), t[15] = a, t[16] = x);
	let C;
	return t[17] !== n || t[18] !== y || t[19] !== b || t[20] !== x ? (C = /* @__PURE__ */ g("div", {
		className: y,
		children: [
			b,
			x,
			n
		]
	}), t[17] = n, t[18] = y, t[19] = b, t[20] = x, t[21] = C) : C = t[21], C;
};
Qu.displayName = "DSTopBar.BrandArea";
var $u = (e) => {
	let t = D.c(15), { children: n, className: r, subTitle: i, variant: a } = e, o;
	t[0] !== r || t[1] !== i ? (o = M(Ju.brandAddOn, r, { [Ju.brandAddOnDouble]: i }), t[0] = r, t[1] = i, t[2] = o) : o = t[2];
	let s = o;
	if (i) {
		let e;
		t[3] === n ? e = t[4] : (e = /* @__PURE__ */ g("span", { children: n }), t[3] = n, t[4] = e);
		let r;
		t[5] === i ? r = t[6] : (r = i && /* @__PURE__ */ g("span", {
			className: Ju.subTitle,
			children: i
		}), t[5] = i, t[6] = r);
		let a;
		return t[7] !== s || t[8] !== e || t[9] !== r ? (a = /* @__PURE__ */ g("div", {
			className: s,
			children: [e, r]
		}), t[7] = s, t[8] = e, t[9] = r, t[10] = a) : a = t[10], a;
	}
	if (a === "100years") {
		let e;
		return t[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ g(Wu, {}), t[11] = e) : e = t[11], e;
	}
	let c;
	return t[12] !== s || t[13] !== n ? (c = /* @__PURE__ */ g("div", {
		className: s,
		children: n
	}), t[12] = s, t[13] = n, t[14] = c) : c = t[14], c;
};
$u.displayName = "DSTopBar.BrandAddOn";
var ed = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(Ju.primary, r), t[0] = r, t[1] = i);
	let a;
	return t[2] !== n || t[3] !== i ? (a = /* @__PURE__ */ g("div", {
		className: i,
		children: n
	}), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a;
};
ed.displayName = "DSTopBar.PrimaryArea";
var td = (e) => {
	let t = D.c(5), { children: n, className: r } = e, i;
	t[0] === r ? i = t[1] : (i = M(Ju.secondary, r), t[0] = r, t[1] = i);
	let a;
	return t[2] !== n || t[3] !== i ? (a = /* @__PURE__ */ g("div", {
		className: i,
		children: n
	}), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a;
};
td.displayName = "DSTopBar.SecondaryArea", Zu.BrandArea = Qu, Zu.PrimaryArea = ed, Zu.SecondaryArea = td;
var nd = {
	root: "ds-header_root_c5fh4_1",
	rootSticky: "ds-header_root--sticky_c5fh4_4",
	rootHidden: "ds-header_root--hidden_c5fh4_9",
	rootFixed: "ds-header_root--fixed_c5fh4_20",
	mainNavigationArea: "ds-header_main-navigation-area_c5fh4_37",
	mainNavigationAreaFixed: "ds-header_main-navigation-area--fixed_c5fh4_90",
	mainNavigationAreaFixedVisible: "ds-header_main-navigation-area--fixed--visible_c5fh4_105",
	mainNavigationContent: "ds-header_main-navigation-content_c5fh4_111",
	mainNavigationContentVariantFull: "ds-header_main-navigation-content--variant-full_c5fh4_115",
	headerPlaceholder: "ds-header_header-placeholder_c5fh4_120",
	headerPlaceholderWithBanner: "ds-header_header-placeholder--with-banner_c5fh4_123"
}, rd = r({ variant: "main" }), id = (e) => {
	let t = D.c(61), n, r, a, s, l, u, d;
	t[0] === e ? (n = t[1], r = t[2], a = t[3], s = t[4], l = t[5], u = t[6], d = t[7]) : ({children: r, brandAddOnProps: n, className: a, isHeaderSticky: u, variant: d, logoProps: s, ...l} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = s, t[5] = l, t[6] = u, t[7] = d);
	let f = u === void 0 ? !1 : u, m = d === void 0 ? "main" : d, [h, _] = c(!1), v;
	t[8] === r ? v = t[9] : (v = B(r, id.BannerArea, !0), t[8] = r, t[9] = v);
	let y = v, b = B(r, Zu.BrandArea), x = B(r, Zu.PrimaryArea), S = B(r, Zu.SecondaryArea);
	process.env.NODE_ENV !== "production" && qu({
		hasBrandArea: b,
		hasPrimaryArea: x,
		hasSecondaryArea: S
	});
	let C = Ku(2), [w, T] = c(!1), E = p(null), O = p(null), k = p(null), A = p(null), [j, N] = c(!1), [P, F] = c(!1), [L, R] = c(!0), [z, V] = c(!1), H = p(w), U = Gu(E), W = Gu(k), G = Gu(O), ee = W.height + U.height + G.height, K, te;
	t[10] === f ? (K = t[11], te = t[12]) : (K = () => {
		if (f) {
			let e = () => {
				T((e) => (H.current = e, window.innerWidth < 1024));
			};
			return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
		}
	}, te = [f], t[10] = f, t[11] = K, t[12] = te), o(K, te);
	let ne;
	t[13] !== U.height || t[14] !== G.height || t[15] !== W.height ? (ne = () => {
		let e = document.documentElement, t = U.height || 0, n = W.height || 0, r;
		if (!A.current) r = t + n;
		else {
			let n = G.height || 0;
			r = !n || n === t ? parseInt(e.style.getPropertyValue("--ds-header-height").replace("rem", "")) * 16 || 0 : n;
		}
		e.style.setProperty("--ds-banner-height", `${I(t)}rem`), e.style.setProperty("--ds-header-height", `${I(r)}rem`), e.style.setProperty("--ds-top-bar-height", `${I(n)}rem`);
	}, t[13] = U.height, t[14] = G.height, t[15] = W.height, t[16] = ne) : ne = t[16];
	let re;
	t[17] === ee ? re = t[18] : (re = [ee], t[17] = ee, t[18] = re), Yi(ne, re);
	let ie;
	t[19] !== f || t[20] !== w || t[21] !== L || t[22] !== C ? (ie = () => {
		if (f) {
			let e = () => {
				let e = O.current, t = !!e && window.scrollY <= e.offsetHeight;
				N(t);
				let n = A.current, r = k.current;
				if (!w && H.current && !L) {
					R(t && !!e && window.scrollY <= e.offsetHeight);
					return;
				}
				let i = !!r && !!n && n.getBoundingClientRect().bottom > r.getBoundingClientRect().bottom, a = !n && !!r && !!E.current && (window.scrollY >= E.current.offsetHeight || 0) || !n && !E.current && !!r && window.scrollY >= 1;
				R(n ? i && !!e && window.scrollY <= e.offsetHeight : !a);
			};
			window.addEventListener("scroll", e, { passive: !0 }), e();
			let t = O.current, n = !!t && t.getBoundingClientRect().bottom > 0;
			return w && F(C === "up" && !n), w || V(C === "up" && !L), () => {
				window.removeEventListener("scroll", e);
			};
		}
	}, t[19] = f, t[20] = w, t[21] = L, t[22] = C, t[23] = ie) : ie = t[23];
	let ae;
	t[24] !== f || t[25] !== w || t[26] !== C ? (ae = [
		f,
		w,
		H,
		C
	], t[24] = f, t[25] = w, t[26] = C, t[27] = ae) : ae = t[27], o(ie, ae);
	let oe;
	t[28] !== a || t[29] !== P || t[30] !== f || t[31] !== j || t[32] !== w ? (oe = M(nd.root, a, f ? {
		[nd.rootSticky]: w,
		[nd.rootHidden]: w && !j,
		[nd.rootFixed]: w && P
	} : {}), t[28] = a, t[29] = P, t[30] = f, t[31] = j, t[32] = w, t[33] = oe) : oe = t[33];
	let se = oe, ce;
	t[34] !== n || t[35] !== h || t[36] !== z || t[37] !== f || t[38] !== w || t[39] !== L || t[40] !== s || t[41] !== m ? (ce = {
		variant: m,
		bannerAreaRef: E,
		brandAddOnProps: n,
		hasBrandAddOn: h,
		setHasBrandAddOn: _,
		isFixedMainNavigation: z,
		isHeaderSticky: f,
		isMobile: w,
		isStickyMainNavigationVisible: L,
		mainNavigationAreaRef: A,
		topBarAreaRef: k,
		logoProps: s
	}, t[34] = n, t[35] = h, t[36] = z, t[37] = f, t[38] = w, t[39] = L, t[40] = s, t[41] = m, t[42] = ce) : ce = t[42];
	let q;
	t[43] !== r || t[44] !== ce ? (q = /* @__PURE__ */ g(rd.Provider, {
		value: ce,
		children: r
	}), t[43] = r, t[44] = ce, t[45] = q) : q = t[45];
	let le;
	t[46] !== l || t[47] !== se || t[48] !== q ? (le = /* @__PURE__ */ g("header", {
		className: se,
		...l,
		ref: O,
		children: q
	}), t[46] = l, t[47] = se, t[48] = q, t[49] = le) : le = t[49];
	let ue;
	t[50] !== P || t[51] !== w ? (ue = w && P && /* @__PURE__ */ g("div", { className: nd.headerPlaceholder }), t[50] = P, t[51] = w, t[52] = ue) : ue = t[52];
	let de;
	t[53] !== y || t[54] !== w || t[55] !== L ? (de = !w && !L && /* @__PURE__ */ g("div", { className: y ? nd.headerPlaceholderWithBanner : nd.headerPlaceholder }), t[53] = y, t[54] = w, t[55] = L, t[56] = de) : de = t[56];
	let J;
	return t[57] !== le || t[58] !== ue || t[59] !== de ? (J = /* @__PURE__ */ g(i, { children: [
		le,
		ue,
		de
	] }), t[57] = le, t[58] = ue, t[59] = de, t[60] = J) : J = t[60], J;
}, ad = (e) => {
	let t = D.c(4), { children: n, className: r } = e, { bannerAreaRef: i } = S(rd), a;
	return t[0] !== i || t[1] !== n || t[2] !== r ? (a = /* @__PURE__ */ g("div", {
		ref: i,
		className: r,
		children: n
	}), t[0] = i, t[1] = n, t[2] = r, t[3] = a) : a = t[3], a;
};
ad.displayName = "DSHeader.BannerArea";
var od = (e) => {
	let t = D.c(15), { children: n, className: r } = e, { variant: i, isFixedMainNavigation: a, isHeaderSticky: o, isMobile: s, isStickyMainNavigationVisible: c, mainNavigationAreaRef: l } = S(rd), u;
	t[0] !== r || t[1] !== a || t[2] !== o || t[3] !== s || t[4] !== c ? (u = M(nd.mainNavigationArea, r, o ? {
		[nd.mainNavigationAreaFixed]: !s && !c,
		[nd.mainNavigationAreaFixedVisible]: !s && a
	} : {}), t[0] = r, t[1] = a, t[2] = o, t[3] = s, t[4] = c, t[5] = u) : u = t[5];
	let d = u, f = i === "full", p;
	t[6] === f ? p = t[7] : (p = M(nd.mainNavigationContent, { [nd.mainNavigationContentVariantFull]: f }), t[6] = f, t[7] = p);
	let m = p, h;
	t[8] !== n || t[9] !== m ? (h = /* @__PURE__ */ g("div", {
		className: m,
		children: n
	}), t[8] = n, t[9] = m, t[10] = h) : h = t[10];
	let _;
	return t[11] !== l || t[12] !== d || t[13] !== h ? (_ = /* @__PURE__ */ g("div", {
		className: d,
		ref: l,
		children: h
	}), t[11] = l, t[12] = d, t[13] = h, t[14] = _) : _ = t[14], _;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Input.utils.D78E4MGO.js
od.displayName = "DSHeader.MainNavigationArea", id.BannerArea = ad, id.MainNavigationArea = od, id.displayName = "DSHeader", d();
var sd = [
	"color",
	"date",
	"datetime-local",
	"email",
	"month",
	"number",
	"range",
	"tel",
	"text",
	"time",
	"url"
], cd = [
	"week",
	"file",
	"hidden",
	"button",
	"checkbox",
	"password",
	"radio",
	"search",
	"reset",
	"submit",
	"image",
	"datetime"
], ld = ({ hideLabel: e, id: t, label: n, prefix: r, popoverContent: i, suffix: a, leadingIconName: o, leadingIconSource: s, actionButtonProps: c }) => {
	if (!t) throw Error(L("DSInput", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSInput component."));
	if (!n) throw Error(L("DSInput", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSInput component. If you don't want to display a label, set hideLabel={true}."));
	if (c && !c.label) throw Error(L("DSInput", "The action button needs to have a label for a11y reasons. Please add a label to the actionButtonProps."));
	if (c && !c?.iconName && !c?.iconSource) throw Error(L("DSInput", "The action button needs to have an iconName or iconSource. Please add an iconName or iconSource to the actionButtonProps."));
	r && r.length > 8 && console.warn(L("DSInput", "Prefix length must not exceed 8 characters.")), a && a.length > 5 && console.warn(L("DSInput", "Suffix length must not exceed 5 characters.")), r && (o || s) && console.warn(L("DSInput", "Prefix and a leading Icon cannot be used at the same time.")), a && (c?.iconName || c?.iconSource) && console.warn(L("DSInput", "Suffix and an action button cannot be used at the same time.")), e && i && console.warn(L("DSInput", "Using a popover when hideLabel is set to true is not supported."));
}, ud = (e, t) => {
	if (!sd.includes(e) && !cd.includes(e)) throw Error(L("DSInput", `The type "${e}" is not supported by the DSInput component.`));
	if (t === "off" && e === "number") return;
	let n = {
		number: "Type number is not recommended. Use type text with inputmode numeric/decimal or DSInputNumber component instead.",
		button: "Type button is not recommended. Use DSButton component instead.",
		file: "Type file is not recommended. Use DSInputFile component instead.",
		checkbox: "Type checkbox is not recommended. Use DSCheckbox component instead.",
		password: "Type password is not recommended. Use DSInputPassword component instead.",
		radio: "Type radio is not recommended. Use DSRadioGroup component instead.",
		search: "Type search is not recommended. Use DSInputSearch component instead.",
		reset: "Type reset is not recommended. Use DSButton component with type reset instead.",
		submit: "Type submit is not recommended. Use DSButton component with type submit instead.",
		image: "Type image is not recommended. Use DSButton component instead.",
		datetime: "Type datetime is not recommended. Use type datetime-local instead.",
		week: "Type week is not recommended. Mobile safari does not support type week.",
		hidden: "Type hidden is not supported by DSInput component. Use a default <input type=\"hidden\" /> element instead."
	};
	n[e] && console.warn(L("DSInput", n[e]));
}, dd = () => "showPicker" in HTMLInputElement.prototype && !!window.navigator.userAgent.match(/chrome|chromium|crios|edg/i), fd = (e, t) => dd() && (e || t), pd = (e) => e === "date" || e === "datetime-local" || e === "month", md = (e) => e === "time";
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/input.CNC3QIQR.js
d();
var hd = {
	input: "ds-input_input_1v89g_1",
	inputSmall: "ds-input_input--small_1v89g_9",
	inputInvalid: "ds-input_input--invalid_1v89g_121",
	inputHasLeadingIcon: "ds-input_input--has-leading-icon_1v89g_179",
	inputHasActionButton: "ds-input_input--has-action-button_1v89g_182",
	inputHasAffix: "ds-input_input--has-affix_1v89g_197",
	inputIsReady: "ds-input_input--is-ready_1v89g_211",
	root: "ds-input_root_1v89g_218",
	hint: "ds-input_hint_1v89g_218",
	labelWrapper: "ds-input_label-wrapper_1v89g_218",
	wrapper: "ds-input_wrapper_1v89g_222",
	affix: "ds-input_affix_1v89g_228",
	affixSmall: "ds-input_affix--small_1v89g_249",
	prefix: "ds-input_prefix_1v89g_262",
	suffix: "ds-input_suffix_1v89g_268",
	affixDisabled: "ds-input_affix--disabled_1v89g_274",
	affixReadonly: "ds-input_affix--readonly_1v89g_285",
	leadingIcon: "ds-input_leading-icon_1v89g_321",
	leadingIconSmall: "ds-input_leading-icon--small_1v89g_333",
	leadingIconDisabled: "ds-input_leading-icon--disabled_1v89g_336",
	actionButton: "ds-input_action-button_1v89g_345",
	label: "ds-input_label_1v89g_218",
	labelDisabled: "ds-input_label--disabled_1v89g_364",
	labelWrapperHidden: "ds-input_label-wrapper--hidden_1v89g_376",
	feedback: "ds-input_feedback_1v89g_404"
}, gd = s(({ id: e, label: t, actionButtonProps: n, className: r, disabled: i = !1, hint: a, hideLabel: s = !1, invalid: l = !1, leadingIconName: u, leadingIconSource: d, prefix: f, popoverContent: m, popoverInfoButtonProps: h, readonly: _ = !1, required: v = !1, size: y = "medium", suffix: b, systemFeedback: x, type: S = "text", ...C }, w) => {
	process.env.NODE_ENV !== "production" && (ld({
		hideLabel: Aa(s),
		id: e,
		label: t,
		prefix: f,
		popoverContent: m,
		suffix: b,
		leadingIconName: u,
		leadingIconSource: d,
		actionButtonProps: n
	}), ud(S, C.autoComplete));
	let { iconName: T, iconSource: E, label: D, onClick: O, ...k } = n || {}, [A, j] = c(!1), [N, P] = c(!1), [F, I] = c(!1), [L, R] = c({}), z = p(null), B = (e) => {
		z.current = e, typeof w == "function" ? w(e) : w && (w.current = e);
	}, V = f?.substring(0, 8), H = p(null), U = b?.substring(0, 5), W = p(null), G = Aa(s);
	Yi(() => {
		let e = y === "medium" ? 16 : 8, t = {};
		H.current && (t.paddingInlineStart = e + H.current.offsetWidth + "px"), W.current && (t.paddingInlineEnd = e + W.current.offsetWidth + "px"), R(t), j(!0);
	}, [
		f,
		b,
		y,
		N
	]), Yi(() => {
		(async () => "fonts" in document && (await document.fonts.load("1em \"STIHL Contraface Digital Text Regular\""), P(!0)))();
	}, []), o(() => {
		I(fd(pd(S), md(S)));
	}, [S]);
	let ee = M(hd.affix, {
		[hd.affixSmall]: y === "small",
		[hd.affixDisabled]: i,
		[hd.affixReadonly]: _
	}), K = `${e}-label`, te = `${e}-feedback`, ne = `${e}-hint`, re = a ? ` ${ne}` : "", ie = [l && x && te].filter(Boolean).join(" ") || void 0, ae = M(hd.root, r), se = M(hd.input, {
		[hd.inputSmall]: y === "small",
		[hd.inputInvalid]: l,
		[hd.inputHasLeadingIcon]: u || d,
		[hd.inputHasAffix]: f || b,
		[hd.inputHasActionButton]: T || E || F,
		[hd.inputIsReady]: A
	}), ce = M(hd.label, { [hd.labelDisabled]: i }), q = M(hd.labelWrapper, { [hd.labelWrapperHidden]: G }), le = M(hd.leadingIcon, {
		[hd.leadingIconSmall]: y === "small",
		[hd.leadingIconDisabled]: i
	}), ue = M(hd.actionButton, { [hd.actionButtonSmall]: y === "small" }), de = (e) => {
		z.current && !i && !_ && z.current.showPicker(), e.preventDefault();
	};
	return /* @__PURE__ */ g("div", {
		className: ae,
		children: [
			/* @__PURE__ */ g("div", {
				className: q,
				children: [/* @__PURE__ */ g("label", {
					className: ce,
					id: K,
					htmlFor: e,
					children: [t, v && /* @__PURE__ */ g(eo, {})]
				}), m && !G && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: h,
					children: m
				})]
			}),
			a && /* @__PURE__ */ g("div", {
				className: hd.hint,
				id: ne,
				children: a
			}),
			/* @__PURE__ */ g("div", {
				className: hd.wrapper,
				children: [
					f && /* @__PURE__ */ g("span", {
						className: M(ee, hd.prefix),
						ref: H,
						"aria-disabled": i,
						children: V
					}),
					!f && (u || d) && /* @__PURE__ */ g(oe, {
						name: u,
						theme: "light",
						source: d,
						className: le,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ g("input", {
						type: S,
						className: se,
						id: e,
						...C,
						ref: B,
						style: L,
						"aria-labelledby": `${K}${re}`,
						"aria-describedby": ie,
						"aria-invalid": l,
						"aria-disabled": _,
						readOnly: _,
						required: v,
						disabled: i
					}),
					b && /* @__PURE__ */ g("span", {
						className: M(ee, hd.suffix),
						ref: W,
						"aria-disabled": i,
						children: U
					}),
					!b && !F && (T || E) && /* @__PURE__ */ g(Fa, {
						...k,
						hideLabel: !0,
						theme: "light",
						iconName: T,
						iconSource: E,
						variant: "ghost",
						className: ue,
						size: y,
						onClick: O,
						type: "button",
						disabled: i || _,
						children: D
					}),
					!b && F && !_ && !i && /* @__PURE__ */ g(Fa, {
						hideLabel: !0,
						theme: "light",
						iconName: pd(S) ? "calendar" : "clock",
						variant: "ghost",
						className: ue,
						size: y,
						onClick: de,
						type: "button",
						children: [
							"Open ",
							pd(S) ? "date" : "time",
							" picker"
						]
					})
				]
			}),
			l && x && /* @__PURE__ */ g(Ya, {
				className: hd.feedback,
				message: x,
				variant: "error",
				id: te
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/filepreview.DfYhhi7K.js
gd.displayName = "DSInput", d();
var _d = {
	preview: "ds-input-file_preview_15s1u_1",
	root: "ds-input-file_root_15s1u_7",
	fileIcon: "ds-input-file_file-icon_15s1u_7"
}, vd = {
	nonDisplayableImages: [
		"heic",
		"heif",
		"raw",
		"cr2",
		"cr3",
		"nef",
		"arw",
		"orf",
		"rw2",
		"dng",
		"svgz",
		"jp2",
		"jxl",
		"dds",
		"exr",
		"psd",
		"ai",
		"indd"
	],
	documents: /* @__PURE__ */ "doc.docx.odt.fodt.gdoc.rtf.dot.dotx.pages.wpd.abw.tmd.lwp.wps.wks.xls.xlsx.xlsm.xlsb.xlt.xltx.ods.fods.csv.tsv.gsheet".split("."),
	videos: [
		"mp4",
		"m4v",
		"mov",
		"webm",
		"ogv",
		"avi",
		"wmv",
		"flv",
		"f4v",
		"mkv",
		"3gp",
		"3g2",
		"ts",
		"vob",
		"rm",
		"rmvb",
		"mpeg",
		"mpg"
	],
	archives: [
		"zip",
		"rar",
		"7z",
		"tar",
		"gz",
		"tar.gz",
		"tgz",
		"xz",
		"tar.xz",
		"bz2",
		"tar.bz2",
		"lzma",
		"cab",
		"iso"
	]
}, yd = (e, t) => {
	let { documents: n, videos: r, archives: i } = vd;
	return e.type.startsWith("image/") ? "file-type-image" : n.includes(t) ? "file-type-doc" : e.type === "application/pdf" ? "file-type-pdf" : e.type.startsWith("video/") && r.includes(t) ? "file-type-video" : i.includes(t) ? "file-type-zip" : "file";
}, bd = (e) => {
	let t = D.c(25), { file: n, t: r } = e, [i, a] = c(!1), o, s, l, u, d;
	if (t[0] !== n || t[1] !== i || t[2] !== r) {
		d = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
		e: {
			let e = n.name.split(".").pop()?.toLowerCase() || "", { nonDisplayableImages: c } = vd, f = n.type.startsWith("image/") && !c.includes(e);
			if (f && i) {
				let e;
				t[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ g("span", {
					className: _d.root,
					children: /* @__PURE__ */ g(oe, {
						"aria-hidden": "true",
						name: "file-type-image",
						className: _d.fileIcon
					})
				}), t[8] = e) : e = t[8], d = e;
				break e;
			}
			if (f) {
				let e;
				t[9] === n ? e = t[10] : (e = URL.createObjectURL(n), t[9] = n, t[10] = e);
				let i;
				t[11] !== n.name || t[12] !== r ? (i = r("fileListPreviewAltText", [n.name]), t[11] = n.name, t[12] = r, t[13] = i) : i = t[13];
				let o;
				t[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = () => {
					a(!0);
				}, t[14] = o) : o = t[14];
				let s;
				t[15] !== e || t[16] !== i ? (s = /* @__PURE__ */ g("img", {
					src: e,
					alt: i,
					className: _d.preview,
					onError: o
				}), t[15] = e, t[16] = i, t[17] = s) : s = t[17], d = s;
				break e;
			}
			u = _d.root, o = oe, s = "true", l = yd(n, e);
		}
		t[0] = n, t[1] = i, t[2] = r, t[3] = o, t[4] = s, t[5] = l, t[6] = u, t[7] = d;
	} else o = t[3], s = t[4], l = t[5], u = t[6], d = t[7];
	if (d !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return d;
	let f;
	t[18] !== o || t[19] !== s || t[20] !== l ? (f = /* @__PURE__ */ g(o, {
		"aria-hidden": s,
		name: l,
		className: _d.fileIcon
	}), t[18] = o, t[19] = s, t[20] = l, t[21] = f) : f = t[21];
	let p;
	return t[22] !== u || t[23] !== f ? (p = /* @__PURE__ */ g("span", {
		className: u,
		children: f
	}), t[22] = u, t[23] = f, t[24] = p) : p = t[24], p;
}, xd = {
	root: "ds-input-file_root_csqwh_1",
	barBackground: "ds-input-file_bar-background_csqwh_7",
	barFill: "ds-input-file_bar-fill_csqwh_24",
	barFillError: "ds-input-file_bar-fill--error_csqwh_29",
	barFillIndeterminate: "ds-input-file_bar-fill-indeterminate_csqwh_40",
	percentLabel: "ds-input-file_percent-label_csqwh_61",
	progressText: "ds-input-file_progress-text_csqwh_75",
	progressBar: "ds-input-file_progress-bar_csqwh_91"
}, Sd = (e) => {
	let t = D.c(16), { className: n, fileName: r, id: a, percent: o, progressStatus: s, variant: c, t: l } = e, u = o === "indeterminate", d;
	t[0] === l ? d = t[1] : (d = l("uploadStatus"), t[0] = l, t[1] = d);
	let f;
	t[2] !== r || t[3] !== u || t[4] !== l ? (f = u ? `, ${l("fileListIndeterminate", [r])}` : "", t[2] = r, t[3] = u, t[4] = l, t[5] = f) : f = t[5];
	let p = `${d}${f}`, m = u ? void 0 : o, h;
	return t[6] !== m || t[7] !== n || t[8] !== a || t[9] !== u || t[10] !== o || t[11] !== s || t[12] !== p || t[13] !== l || t[14] !== c ? (h = c === "text" ? /* @__PURE__ */ g(i, { children: /* @__PURE__ */ g("span", {
		id: a,
		className: M(xd.root, xd.progressText, n),
		role: "progressbar",
		"aria-label": p,
		"aria-valuenow": m,
		children: u ? /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g(Ma, { aria: { "aria-label": l("uploading") } }), /* @__PURE__ */ g("span", { children: l("uploading") })] }) : `${p} ${o}%`
	}) }) : c === "bar" ? /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g("div", {
		id: a,
		className: M(xd.root, xd.progressBar, n),
		role: "progressbar",
		"aria-label": p,
		"aria-valuenow": m,
		children: u ? /* @__PURE__ */ g(i, { children: /* @__PURE__ */ g("div", {
			className: xd.barBackground,
			"aria-hidden": "true",
			children: /* @__PURE__ */ g("div", { className: xd.barFillIndeterminate })
		}) }) : /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g("div", {
			className: xd.barBackground,
			"aria-hidden": "true",
			children: /* @__PURE__ */ g("div", {
				className: M(xd.barFill, { [xd.barFillError]: s === "error" }),
				style: { width: `${o}%` }
			})
		}), /* @__PURE__ */ g("span", {
			className: xd.percentLabel,
			"aria-hidden": "true",
			children: [o, "%"]
		})] })
	}), u && /* @__PURE__ */ g("div", {
		className: xd.progressText,
		children: l("uploading")
	})] }) : null, t[6] = m, t[7] = n, t[8] = a, t[9] = u, t[10] = o, t[11] = s, t[12] = p, t[13] = l, t[14] = c, t[15] = h) : h = t[15], h;
}, Cd = /* @__PURE__ */ RegExp("([\\p{Ll}\\d])(\\p{Lu})", "gu"), wd = /* @__PURE__ */ RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])", "gu"), Td = /* @__PURE__ */ RegExp("(\\d)\\p{Ll}|(\\p{L})\\d", "u"), Ed = /[^\p{L}\d]+/giu, Dd = "$1\0$2", Od = "";
function kd(e) {
	let t = e.trim();
	t = t.replace(Cd, Dd).replace(wd, Dd), t = t.replace(Ed, "\0");
	let n = 0, r = t.length;
	for (; t.charAt(n) === "\0";) n++;
	if (n === r) return [];
	for (; t.charAt(r - 1) === "\0";) r--;
	return t.slice(n, r).split(/\0/g);
}
function Ad(e) {
	let t = kd(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e], r = Td.exec(n);
		if (r) {
			let i = r.index + (r[1] ?? r[2]).length;
			t.splice(e, 1, n.slice(0, i), n.slice(i));
		}
	}
	return t;
}
function jd(e, t) {
	let [n, r, i] = Pd(e, t);
	return n + r.map(Nd(t?.locale)).join(t?.delimiter ?? " ") + i;
}
function Md(e, t) {
	return jd(e, {
		delimiter: "-",
		...t
	});
}
function Nd(e) {
	return e === !1 ? (e) => e.toLowerCase() : (t) => t.toLocaleLowerCase(e);
}
function Pd(e, t = {}) {
	let n = t.split ?? (t.separateNumbers ? Ad : kd), r = t.prefixCharacters ?? Od, i = t.suffixCharacters ?? Od, a = 0, o = e.length;
	for (; a < e.length;) {
		let t = e.charAt(a);
		if (!r.includes(t)) break;
		a++;
	}
	for (; o > a;) {
		let t = o - 1, n = e.charAt(t);
		if (!i.includes(n)) break;
		o = t;
	}
	return [
		e.slice(0, a),
		n(e.slice(a, o)),
		e.slice(o)
	];
}
var Fd = {
	root: "ds-input-file_root_xvo5t_1",
	fileWrapper: "ds-input-file_file-wrapper_xvo5t_7",
	fileWrapperInvalid: "ds-input-file_file-wrapper--invalid_xvo5t_16",
	fileDetails: "ds-input-file_file-details_xvo5t_20",
	fileName: "ds-input-file_file-name_xvo5t_34",
	fileSize: "ds-input-file_file-size_xvo5t_38",
	progressBar: "ds-input-file_progress-bar_xvo5t_54",
	feedback: "ds-input-file_feedback_xvo5t_59"
}, Id = (e) => e >= 1024 * 1024 ? (e / (1024 * 1024)).toFixed(1) + " MB" : e >= 1024 ? (e / 1024).toFixed(0) + " KB" : e + " B", Ld = (e) => {
	let t = D.c(11), { files: n, onRemoveFile: r, t: i, showProgress: a } = e, o = Rd, s = zd, c;
	if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i) {
		let e;
		t[5] !== r || t[6] !== a || t[7] !== i ? (e = (e, t) => {
			let n = e.uploadStatus === "error", c = e.uploadStatus === "success", l = e.uploadStatus === "uploading", u = "indeterminate";
			if (e.uploadPercent !== void 0 && e.uploadPercent !== "indeterminate") {
				let t = c ? 100 : 0, n = e.uploadPercent === void 0 ? t : e.uploadPercent;
				u = Math.min(Math.max(n, 0), 100);
			}
			let d = i(l ? "fileListCancelUploadButtonLabel" : c ? "fileListDeleteFileButtonLabel" : "fileListRemoveSelectionButtonLabel", [e.name]);
			return /* @__PURE__ */ g("div", {
				className: M(Fd.fileWrapper, { [Fd.fileWrapperInvalid]: n }),
				"aria-busy": l ? "true" : "false",
				"aria-describedby": l ? s(e.name) : o(e.name),
				"aria-invalid": n ? !0 : void 0,
				children: [
					/* @__PURE__ */ g(bd, {
						file: e,
						t: i
					}),
					/* @__PURE__ */ g("div", {
						className: Fd.fileDetails,
						children: [/* @__PURE__ */ g("span", {
							className: Fd.fileName,
							children: e.name
						}), /* @__PURE__ */ g("span", {
							className: Fd.fileSize,
							children: Id(e.size)
						})]
					}),
					/* @__PURE__ */ g("div", { children: [n && e.retryButtonProps && /* @__PURE__ */ g(Fa, {
						...e.retryButtonProps,
						onClick: e.retryButtonProps.onClick,
						hideLabel: !0,
						iconName: "arrow-counterclockwise",
						size: "small",
						variant: "ghost",
						type: "button",
						"aria-describedby": e.feedback ? o(e.name) : void 0,
						tooltip: i("retry"),
						children: [i("retry"), "."]
					}), (l || c) && !e.removeButtonProps?.onClick ? null : /* @__PURE__ */ g(Fa, {
						...e.removeButtonProps,
						onClick: () => {
							e.uploadStatus !== void 0 && e.removeButtonProps?.onClick ? e.removeButtonProps?.onClick() : r(t);
						},
						hideLabel: !0,
						iconName: "cross",
						size: "small",
						variant: "ghost",
						type: "button",
						"aria-describedby": e.feedback && n ? o(e.name) : void 0,
						tooltip: d,
						children: [d, "."]
					})] }),
					(l || n) && a && /* @__PURE__ */ g(Sd, {
						id: s(e.name),
						fileName: e.name,
						percent: u,
						progressStatus: n ? "error" : "uploading",
						className: Fd.progressBar,
						variant: a,
						t: i
					}),
					(e.feedback && (n || c) || e.feedback === void 0 && c) && /* @__PURE__ */ g(Ya, {
						variant: n ? "error" : "success",
						id: o(e.name),
						message: e.feedback || i("success"),
						className: Fd.feedback
					})
				]
			}, t + e.name);
		}, t[5] = r, t[6] = a, t[7] = i, t[8] = e) : e = t[8], c = n.map(e), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = c;
	} else c = t[4];
	let l;
	return t[9] === c ? l = t[10] : (l = /* @__PURE__ */ g("div", {
		className: Fd.root,
		children: c
	}), t[9] = c, t[10] = l), l;
};
function Rd(e) {
	return `file-feedback-${Md(e)}`;
}
function zd(e) {
	return `progress-${Md(e)}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/InputFile.C-m2Hp0n.js
d();
var Bd = {
	root: "ds-input-file_root_ad2pg_1",
	browseButtonIsDraggingFilled: "ds-input-file_browse-button--is-dragging-filled_ad2pg_1",
	browseButtonIsDragging: "ds-input-file_browse-button--is-dragging_ad2pg_1",
	hint: "ds-input-file_hint_ad2pg_14",
	labelWrapper: "ds-input-file_label-wrapper_ad2pg_14",
	label: "ds-input-file_label_ad2pg_14",
	labelDisabled: "ds-input-file_label--disabled_ad2pg_33",
	labelWrapperHidden: "ds-input-file_label-wrapper--hidden_ad2pg_45",
	feedback: "ds-input-file_feedback_ad2pg_73",
	dropzone: "ds-input-file_dropzone_ad2pg_77",
	dropzoneDisabled: "ds-input-file_dropzone--disabled_ad2pg_83",
	dropzoneInvalid: "ds-input-file_dropzone--invalid_ad2pg_97",
	dropzoneIsDragging: "ds-input-file_dropzone--is-dragging_ad2pg_100",
	hintDropZone: "ds-input-file_hint-drop-zone_ad2pg_103",
	uploadIcon: "ds-input-file_upload-icon_ad2pg_106",
	browseButtonDropzoneIsDragging: "ds-input-file_browse-button-dropzone--is-dragging_ad2pg_109",
	instructions: "ds-input-file_instructions_ad2pg_112",
	input: "ds-input-file_input_ad2pg_149",
	requiredSrInfo: "ds-input-file_required-sr-info_ad2pg_153"
}, Vd = {
	en: {
		dragAndDropInstructions: "Drag and drop files here or",
		feedbackFileSize: "File too large. Maximum file size is",
		feedbackFileType: "File type not allowed",
		fileListRemoveSelectionButtonLabel: "Remove {0} from selected files",
		fileListCancelUploadButtonLabel: "Cancel upload of {0}",
		fileListDeleteFileButtonLabel: "Delete file {0}",
		fileListIndeterminate: "{0} is uploading",
		fileListPreviewAltText: "Preview of {0}",
		filesSelectedHint: "The following files are selected",
		required: "required",
		uploadStatus: "Upload status",
		uploading: "Uploading...",
		success: "Upload complete",
		retry: "Retry upload",
		togglePopover: "Toggle popover"
	},
	de: {
		dragAndDropInstructions: "Dateien hier hin ziehen oder",
		feedbackFileSize: "Datei zu groß. Maximale Dateigröße ist",
		feedbackFileType: "Dateityp nicht zugelassen",
		fileListRemoveSelectionButtonLabel: "Datei {0} aus der Auswahl entfernen",
		fileListCancelUploadButtonLabel: "Upload von {0} abbrechen",
		fileListDeleteFileButtonLabel: "Datei {0} löschen",
		fileListIndeterminate: "{0} wird hochgeladen",
		fileListPreviewAltText: "Vorschau von {0}",
		filesSelectedHint: "Die folgenden Dateien sind ausgewählt",
		required: "erforderlich",
		uploadStatus: "Upload-Status",
		uploading: "Wird hochgeladen...",
		success: "Upload abgeschlossen",
		retry: "Upload erneut versuchen",
		togglePopover: "Popover öffnen/schließen"
	}
}, Hd = (e, t) => {
	let n = t.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean), r = e.name.toLowerCase(), i = e.type.toLowerCase();
	return n.some((e) => {
		if (e.startsWith(".")) return r.endsWith(e);
		if (e.endsWith("/*")) {
			let [t] = i.split("/");
			return t === e.slice(0, -2);
		}
		return i === e;
	});
}, Ud = ({ id: e, label: t, inputFileButtonProps: n, hideLabel: r, popoverContent: i }) => {
	if (!e) throw Error(L("DSInputFile", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSInputFile component."));
	if (!t) throw Error(L("DSInputFile", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSInputFile component. If you don't want to display a label, set hideLabel={true}."));
	if (n && n.label?.trim() === "") throw Error(L("DSInputFile", "The input file button needs to have a label for a11y reasons. Please add a label to the inputFileButtonProps."));
	if (n && n.variant && n.variant !== "outline" && n.variant !== "filled") throw Error(L("DSInputFile", "The inputFileButtonProps variant value can only be 'outline' for DSInputFile components inside forms or 'filled' for standalone DSInputFile components."));
	r && i && console.warn(L("DSInputFile", "Using a popover when hideLabel is set to true is not supported."));
}, Wd = s(({ id: e, label: n, accept: r, className: a, disabled: o = !1, files: s, hideLabel: l = !1, hint: u, inputFileButtonProps: d, invalid: f = !1, isHintOutsideDropzone: m = {
	base: !0,
	m: !1
}, lang: h = "en", maxSizeInMb: _ = 7, multiple: v = !1, popoverContent: y, popoverInfoButtonProps: b, required: x = !1, showFileList: S = !0, showDropzone: C = !1, systemFeedback: w, translations: T, onFilesSelect: E, showProgress: D, ...O }, k) => {
	let A = ho(T || Vd[h]);
	process.env.NODE_ENV !== "production" && Ud({
		id: e,
		label: n,
		inputFileButtonProps: d,
		hideLabel: Aa(l),
		popoverContent: y
	});
	let { label: j = h === "en" ? `Choose File${v ? "s" : ""}` : `Datei${v ? "en" : ""} auswählen`, variant: N = "outline", ...P } = d || {}, [F, I] = c([]), L = {
		...b,
		label: T && T.togglePopover || b?.label || Vd[h].togglePopover
	}, R = p(null), [z, B] = c(!1), V = _ * 1024 * 1024, H = `${e}-label`, U = `${e}-feedback`, W = `${e}-hint`, G = u ? ` ${W}` : "", ee = Aa(l), K = Aa(m), te = M(Bd.root, a), ne = M(Bd.dropzone, {
		[Bd.dropzoneDisabled]: o,
		[Bd.dropzoneInvalid]: f,
		[Bd.dropzoneIsDragging]: z
	}), re = M(Bd.label, { [Bd.labelDisabled]: o }), ie = M(Bd.labelWrapper, { [Bd.labelWrapperHidden]: ee }), ae = M(Bd.browseButton, {
		[Bd.browseButtonIsDragging]: z && N === "outline",
		[Bd.browseButtonIsDraggingFilled]: z && N === "filled"
	}), se = M(Bd.browseButtonDropzone, { [Bd.browseButtonDropzoneIsDragging]: z }), ce = [f && w && U].filter(Boolean).join(" ") || void 0, q = (e) => {
		R.current = e, typeof k == "function" ? k(e) : k && (k.current = e);
	}, le = (e) => {
		if (!e) return;
		let t = [];
		for (let n of e) if (r && !Hd(n, r) && (n.feedback = `${A("feedbackFileType")}: ${n.type}.`, n.uploadStatus = "error"), n.size > V && (n.feedback = `${A("feedbackFileSize")} ${_} MB.`, n.uploadStatus = "error"), n.uploadPercent = "indeterminate", t.push(n), !v && t.length > 0) break;
		t.length > 0 && !s && I(() => {
			let e = [...t], n = e.map(({ name: e, feedback: t = "" }) => `${e} ${t}`).join(", ");
			return setTimeout(() => {
				Z(`${A("filesSelectedHint")}: ${n}.`);
			}, 1e3), e;
		}), E?.(t);
	}, ue = (e) => {
		o || (R.current?.click(), e.stopPropagation());
	}, de = (e) => {
		e.preventDefault(), z || B(!0);
	}, J = (e) => {
		e.preventDefault(), z && B(!1);
	}, Y = t((e) => {
		e.preventDefault(), !o && (B(!1), le(e.dataTransfer.files));
	}, [
		v,
		r,
		_,
		o
	]), X = (e) => {
		le(e.target.files), R?.current && (R.current.value = "");
	}, fe = (e) => {
		if (s) {
			let t = s.filter((t, n) => n !== e);
			E?.(t);
		} else I((t) => {
			let n = t.filter((t, n) => n !== e);
			return E?.(n), n;
		});
	}, Z = (e) => {
		wa(e, "DSInputFile");
	}, Q = () => /* @__PURE__ */ g(Fa, {
		...P,
		className: C ? se : ae,
		type: "button",
		variant: N,
		size: C ? "small" : "medium",
		disabled: o,
		iconName: C ? void 0 : "upload",
		onClick: ue,
		"aria-describedby": ce,
		"aria-invalid": f,
		children: j
	});
	return /* @__PURE__ */ g("div", {
		className: te,
		children: [
			/* @__PURE__ */ g("div", {
				className: ie,
				children: [/* @__PURE__ */ g("label", {
					className: re,
					id: H,
					htmlFor: e,
					children: [n, x && /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g(eo, {}), /* @__PURE__ */ g("span", {
						className: Bd.requiredSrInfo,
						children: A("required")
					})] })]
				}), y && !ee && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: L,
					children: y
				})]
			}),
			u && (K || !C) && /* @__PURE__ */ g("div", {
				className: Bd.hint,
				id: W,
				children: u
			}),
			!C && /* @__PURE__ */ g("div", {
				onDragOver: de,
				onDragLeave: J,
				onDrop: Y,
				"aria-labelledby": `${H}${G}`,
				"aria-disabled": o,
				children: Q()
			}),
			C && /* @__PURE__ */ g("div", {
				className: ne,
				onClick: (e) => ue(e),
				onDragOver: de,
				onDragLeave: J,
				onDrop: Y,
				"aria-labelledby": `${H}${G}`,
				"aria-disabled": o,
				children: [
					/* @__PURE__ */ g(oe, {
						name: "upload",
						className: Bd.uploadIcon,
						size: "x-large"
					}),
					/* @__PURE__ */ g("p", {
						id: "file-upload-instructions",
						className: Bd.instructions,
						children: A("dragAndDropInstructions")
					}),
					Q(),
					u && !K && /* @__PURE__ */ g("div", {
						className: Bd.hintDropZone,
						id: W,
						children: u
					})
				]
			}),
			/* @__PURE__ */ g("input", {
				...O,
				type: "file",
				className: Bd.input,
				id: e,
				ref: q,
				accept: r,
				multiple: v,
				"aria-hidden": "true",
				required: x,
				disabled: o,
				onChange: X
			}),
			f && w && /* @__PURE__ */ g(Ya, {
				className: Bd.feedback,
				message: w,
				variant: "error",
				id: U
			}),
			(s ? s.length > 0 : F.length > 0) && S && /* @__PURE__ */ g(Ld, {
				files: s || F,
				onRemoveFile: fe,
				t: A,
				showProgress: D
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/InputNumber.DOrbq0Hf.js
Wd.displayName = "DSInputFile", d();
var Gd = {
	input: "ds-input-number_input_1nvt0_1",
	inputSmall: "ds-input-number_input--small_1nvt0_9",
	inputInvalid: "ds-input-number_input--invalid_1nvt0_121",
	inputHasAffix: "ds-input-number_input--has-affix_1nvt0_197",
	inputIsReady: "ds-input-number_input--is-ready_1nvt0_211",
	root: "ds-input-number_root_1nvt0_222",
	hint: "ds-input-number_hint_1nvt0_222",
	labelWrapper: "ds-input-number_label-wrapper_1nvt0_222",
	wrapper: "ds-input-number_wrapper_1nvt0_226",
	affix: "ds-input-number_affix_1nvt0_232",
	affixSmall: "ds-input-number_affix--small_1nvt0_253",
	prefix: "ds-input-number_prefix_1nvt0_266",
	suffix: "ds-input-number_suffix_1nvt0_272",
	affixDisabled: "ds-input-number_affix--disabled_1nvt0_278",
	affixReadonly: "ds-input-number_affix--readonly_1nvt0_289",
	actionButton: "ds-input-number_action-button_1nvt0_325",
	label: "ds-input-number_label_1nvt0_222",
	labelDisabled: "ds-input-number_label--disabled_1nvt0_344",
	labelWrapperHidden: "ds-input-number_label-wrapper--hidden_1nvt0_356",
	feedback: "ds-input-number_feedback_1nvt0_384",
	secondActionButton: "ds-input-number_second-action-button_1nvt0_397",
	valueAnnouncer: "ds-input-number_value-announcer_1nvt0_401"
}, Kd = (e) => e != null && e !== "", qd = ({ id: e, label: t, prefix: n, suffix: r, hideLabel: i, popoverContent: a }) => {
	if (!e) throw Error(L("DSInputNumber", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSInputNumber component."));
	if (!t) throw Error(L("DSInputNumber", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSInputNumber component. If you don't want to display a label, set hideLabel={true}."));
	n && n.length > 8 && console.warn(L("DSInputNumber", "Prefix length must not exceed 8 characters.")), r && r.length > 5 && console.warn(L("DSInputNumber", "Suffix length must not exceed 5 characters.")), i && a && console.warn(L("DSInputNumber", "Using a popover when hideLabel is set to true is not supported."));
}, Jd = s(({ id: e, label: t, announcementText: n = "Value changed to", className: r, disabled: i = !1, decreaseAmountButtonProps: a, hint: s, hideLabel: l = !1, invalid: u = !1, increaseAmountButtonProps: d, prefix: f, max: m = 100, min: h = 0, popoverContent: _, popoverInfoButtonProps: v, readonly: y = !1, required: b = !1, size: x = "medium", step: S = 1, suffix: C, systemFeedback: w, value: T, onChange: E, ...D }, O) => {
	process.env.NODE_ENV !== "production" && qd({
		id: e,
		label: t,
		prefix: f,
		suffix: C,
		hideLabel: Aa(l),
		popoverContent: _
	});
	let { label: k = "Decrease", tooltip: A, ...j } = a || {}, { label: N = "Increase", tooltip: P, ...I } = d || {}, [L, R] = c(!1), [z, B] = c(T), [V, H] = c(""), [U, W] = c(!1), [G, ee] = c({}), K = p(null), te = (e) => {
		K.current = e, typeof O == "function" ? O(e) : O && (O.current = e);
	}, ne = f?.substring(0, 8), re = p(null), ie = C?.substring(0, 5), ae = p(null), oe = Aa(l);
	o(() => {
		B(T);
	}, [T]), o(() => {
		if (V) {
			let e = setTimeout(() => {
				H("");
			}, 3e3);
			return () => clearTimeout(e);
		}
	}, [V]), o(() => {
		let e = (e) => {
			e.preventDefault();
		};
		return K.current?.addEventListener("wheel", e, { passive: !1 }), () => {
			K.current?.removeEventListener("wheel", e);
		};
	}, []), Yi(() => {
		let e = x === "medium" ? 16 : 8, t = {};
		re.current && (t.paddingInlineStart = e + re.current.offsetWidth + "px"), ae.current && (t.paddingInlineEnd = e + ae.current.offsetWidth + "px"), ee(t), R(!0);
	}, [
		f,
		C,
		x,
		U
	]), Yi(() => {
		F && (async () => "fonts" in document && (await document.fonts.load("1em \"STIHL Contraface Digital Text Regular\""), W(!0)))();
	}, []);
	let se = M(Gd.affix, {
		[Gd.affixSmall]: x === "small",
		[Gd.affixDisabled]: i,
		[Gd.affixReadonly]: y
	}), ce = `${e}-label`, q = `${e}-feedback`, le = `${e}-hint`, ue = `${e}-value-announcer`, de = s ? ` ${le}` : "", J = M(Gd.root, r), Y = M(Gd.input, {
		[Gd.inputSmall]: x === "small",
		[Gd.inputInvalid]: u,
		[Gd.inputHasAffix]: f || C,
		[Gd.inputIsReady]: L
	}), X = M(Gd.label, { [Gd.labelDisabled]: i }), fe = M(Gd.labelWrapper, { [Gd.labelWrapperHidden]: oe }), Z = M(Gd.secondActionButton, { [Gd.secondActionButtonSmall]: x === "small" }), Q = M(Gd.actionButton, { [Gd.actionButtonSmall]: x === "small" }), pe = () => {
		let e = [ue];
		return u && w && e.push(q), e.join(" ");
	}, me = () => {
		if (K.current) {
			B(K.current.value);
			let e = new Event("change", { bubbles: !0 });
			K.current?.dispatchEvent(e), H(`${n} ${K.current.value}`);
		}
	}, he = () => {
		K.current?.stepDown(), me();
	}, ge = () => {
		K.current?.stepUp(), me();
	}, _e = (e) => {
		B(e.target.value), E && E(e);
	};
	return /* @__PURE__ */ g("div", {
		className: J,
		children: [
			/* @__PURE__ */ g("div", {
				className: fe,
				children: [/* @__PURE__ */ g("label", {
					className: X,
					id: ce,
					htmlFor: e,
					children: [t, b && /* @__PURE__ */ g(eo, {})]
				}), _ && !oe && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: v,
					children: _
				})]
			}),
			s && /* @__PURE__ */ g("div", {
				className: Gd.hint,
				id: le,
				children: s
			}),
			/* @__PURE__ */ g("div", {
				"aria-live": "polite",
				"aria-atomic": "true",
				className: Gd.valueAnnouncer,
				id: ue,
				children: V
			}),
			/* @__PURE__ */ g("div", {
				className: Gd.wrapper,
				children: [
					f && /* @__PURE__ */ g("span", {
						className: M(se, Gd.prefix),
						ref: re,
						"aria-disabled": i,
						children: ne
					}),
					/* @__PURE__ */ g("input", {
						className: Y,
						id: e,
						...D,
						style: G,
						ref: te,
						"aria-labelledby": `${ce}${de}`,
						"aria-describedby": pe(),
						"aria-invalid": u,
						"aria-disabled": y,
						disabled: i,
						min: h,
						max: m,
						readOnly: y,
						required: b,
						step: S,
						type: "number",
						value: z,
						onChange: _e
					}),
					C && /* @__PURE__ */ g("span", {
						className: M(se, Gd.suffix),
						ref: ae,
						"aria-disabled": i,
						children: ie
					}),
					/* @__PURE__ */ g(Fa, {
						...j,
						hideLabel: !0,
						theme: "light",
						iconName: "minus",
						variant: "filled",
						className: Z,
						size: x,
						onClick: he,
						tooltip: A,
						disabled: i || y || Kd(z) && Number(z) <= Number(h),
						type: "button",
						children: k
					}),
					/* @__PURE__ */ g(Fa, {
						...I,
						hideLabel: !0,
						theme: "light",
						iconName: "plus",
						variant: "filled",
						tooltip: P,
						className: Q,
						size: x,
						onClick: ge,
						disabled: i || y || Kd(z) && Number(z) >= Number(m),
						type: "button",
						children: N
					})
				]
			}),
			u && w && /* @__PURE__ */ g(Ya, {
				className: Gd.feedback,
				message: w,
				variant: "error",
				id: q
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/InputPassword.BrQLXv_R.js
Jd.displayName = "DSInputNumber", d();
var Yd = {
	input: "ds-input-password_input_l2ovg_1",
	inputSmall: "ds-input-password_input--small_l2ovg_9",
	inputInvalid: "ds-input-password_input--invalid_l2ovg_121",
	inputHasActionButton: "ds-input-password_input--has-action-button_l2ovg_182",
	root: "ds-input-password_root_l2ovg_218",
	hint: "ds-input-password_hint_l2ovg_218",
	labelWrapper: "ds-input-password_label-wrapper_l2ovg_218",
	wrapper: "ds-input-password_wrapper_l2ovg_222",
	actionButton: "ds-input-password_action-button_l2ovg_228",
	label: "ds-input-password_label_l2ovg_218",
	labelDisabled: "ds-input-password_label--disabled_l2ovg_247",
	labelWrapperHidden: "ds-input-password_label-wrapper--hidden_l2ovg_259",
	feedback: "ds-input-password_feedback_l2ovg_287"
}, Xd = ({ id: e, label: t, hideLabel: n, popoverContent: r }) => {
	if (!e) throw Error(L("DSInputPassword", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSInputPassword component."));
	if (!t) throw Error(L("DSInputPassword", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSInputPassword component. If you don't want to display a label, set hideLabel={true}."));
	n && r && console.warn(L("DSInputPassword", "Using a popover when hideLabel is set to true is not supported."));
}, Zd = s(({ id: e, label: t, autoComplete: n = "new-password", className: r, disabled: i = !1, hint: a, hideLabel: o = !1, invalid: s = !1, popoverContent: l, popoverInfoButtonProps: u, readonly: d = !1, required: f = !1, togglePasswordVisibilityButtonProps: m, size: h = "medium", systemFeedback: _, ...v }, y) => {
	process.env.NODE_ENV !== "production" && Xd({
		id: e,
		label: t,
		hideLabel: Aa(o),
		popoverContent: l
	});
	let { hidePasswordText: b = "Hide password", showPasswordText: x = "Show password", ...S } = m || {}, [C, w] = c(!1), T = `${e}-label`, E = `${e}-feedback`, D = `${e}-hint`, O = a ? ` ${D}` : "", k = [s && _ && E].filter(Boolean).join(" ") || void 0, A = Aa(o), j = M(Yd.root, r), N = M(Yd.input, {
		[Yd.inputSmall]: h === "small",
		[Yd.inputInvalid]: s,
		[Yd.inputHasActionButton]: !0
	}), P = M(Yd.label, { [Yd.labelDisabled]: i }), F = M(Yd.labelWrapper, { [Yd.labelWrapperHidden]: A }), I = M(Yd.actionButton, { [Yd.actionButtonSmall]: h === "small" }), L = p(null), R = (e) => {
		L.current = e, typeof y == "function" ? y(e) : y && (y.current = e);
	}, z = () => {
		w((e) => !e);
	};
	return /* @__PURE__ */ g("div", {
		className: j,
		children: [
			/* @__PURE__ */ g("div", {
				className: F,
				children: [/* @__PURE__ */ g("label", {
					className: P,
					id: T,
					htmlFor: e,
					children: [t, f && /* @__PURE__ */ g(eo, {})]
				}), l && !A && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: u,
					children: l
				})]
			}),
			a && /* @__PURE__ */ g("div", {
				className: Yd.hint,
				id: D,
				children: a
			}),
			/* @__PURE__ */ g("div", {
				className: Yd.wrapper,
				children: [/* @__PURE__ */ g("input", {
					className: N,
					id: e,
					...v,
					ref: R,
					"aria-labelledby": `${T}${O}`,
					"aria-describedby": k,
					"aria-invalid": s,
					"aria-disabled": d,
					readOnly: d,
					required: f,
					disabled: i,
					autoComplete: n,
					type: C ? "text" : "password"
				}), /* @__PURE__ */ g(Fa, {
					...S,
					hideLabel: !0,
					theme: "light",
					iconName: C ? "eye-closed" : "eye",
					variant: "ghost",
					className: I,
					size: h,
					onClick: z,
					type: "button",
					disabled: i,
					children: C ? b : x
				})]
			}),
			s && _ && /* @__PURE__ */ g(Ya, {
				className: Yd.feedback,
				message: _,
				variant: "error",
				id: E
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/InputSearch.DsT4ESbN.js
Zd.displayName = "DSInputPassword", d();
var Qd = {
	input: "ds-input-search_input_37dw5_1",
	inputSmall: "ds-input-search_input--small_37dw5_9",
	inputInvalid: "ds-input-search_input--invalid_37dw5_121",
	inputHasActionButton: "ds-input-search_input--has-action-button_37dw5_182",
	inputHasSecondActionButton: "ds-input-search_input--has-second-action-button_37dw5_185",
	root: "ds-input-search_root_37dw5_218",
	hint: "ds-input-search_hint_37dw5_218",
	labelWrapper: "ds-input-search_label-wrapper_37dw5_218",
	wrapper: "ds-input-search_wrapper_37dw5_222",
	actionButton: "ds-input-search_action-button_37dw5_228",
	secondActionButton: "ds-input-search_second-action-button_37dw5_232",
	label: "ds-input-search_label_37dw5_218",
	labelDisabled: "ds-input-search_label--disabled_37dw5_251",
	labelWrapperHidden: "ds-input-search_label-wrapper--hidden_37dw5_263",
	feedback: "ds-input-search_feedback_37dw5_291"
}, $d = ({ id: e, label: t, hideLabel: n, popoverContent: r }) => {
	if (!e) throw Error(L("DSInputSearch", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSInputSearch component."));
	if (!t) throw Error(L("DSInputSearch", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSInputSearch component. If you don't want to display a label, set hideLabel={true}."));
	n && r && console.warn(L("DSInputSearch", "Using a popover when hideLabel is set to true is not supported."));
}, ef = (e) => !!z(e, "form"), tf = s(({ id: e, label: t, className: n, clearButtonLabel: r = "Clear search field", disabled: i = !1, hint: a, hideLabel: s = !1, invalid: l = !1, popoverContent: u, popoverInfoButtonProps: d, readonly: f = !1, required: m = !1, size: h = "medium", systemFeedback: _, value: v, submitButtonProps: y, onChange: b, ...x }, S) => {
	process.env.NODE_ENV !== "production" && $d({
		id: e,
		label: t,
		hideLabel: Aa(s),
		popoverContent: u
	});
	let { label: C = "Search", onClick: w, ...T } = y || {}, [E, D] = c(v), O = p(null), k = p(null), A = (e) => {
		k.current = e, typeof S == "function" ? S(e) : S && (S.current = e);
	}, j = Aa(s);
	o(() => {
		D(v);
	}, [v]), o(() => {
		O.current && !ef(O.current) && process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && console.warn(L("DSInputSearch", `The DSInputSearch component with the id "${e}" is not within a form element. This may cause issues with form submission. Please ensure the DSInputSearch component is within a form element.`));
	}, []);
	let N = `${e}-label`, P = `${e}-feedback`, F = `${e}-hint`, I = a ? ` ${F}` : "", R = [l && _ && P].filter(Boolean).join(" ") || void 0, z = E !== "" && E != null, B = M(Qd.root, n), V = M(Qd.input, {
		[Qd.inputSmall]: h === "small",
		[Qd.inputInvalid]: l,
		[Qd.inputHasActionButton]: !0,
		[Qd.inputHasSecondActionButton]: z && !f && !i
	}), H = M(Qd.label, { [Qd.labelDisabled]: i }), U = M(Qd.labelWrapper, { [Qd.labelWrapperHidden]: j }), W = M(Qd.actionButton, { [Qd.actionButtonSmall]: h === "small" }), G = M(Qd.secondActionButton, { [Qd.secondActionButtonSmall]: h === "small" }), ee = (e, t) => {
		let n = Object.getPrototypeOf(e), r = Object.getOwnPropertyDescriptor(n, "value");
		r?.set ? r.set.call(e, t) : e.value = t;
	}, K = () => {
		if (!k.current) return;
		ee(k.current, "");
		let e = new Event("change", { bubbles: !0 });
		k.current?.dispatchEvent(e);
	}, te = (e) => {
		D(e.target.value), b && b(e);
	};
	return /* @__PURE__ */ g("div", {
		className: B,
		ref: O,
		children: [
			/* @__PURE__ */ g("div", {
				className: U,
				children: [/* @__PURE__ */ g("label", {
					className: H,
					id: N,
					htmlFor: e,
					children: [t, m && /* @__PURE__ */ g(eo, {})]
				}), u && !j && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: d,
					children: u
				})]
			}),
			a && /* @__PURE__ */ g("div", {
				className: Qd.hint,
				id: F,
				children: a
			}),
			/* @__PURE__ */ g("div", {
				className: Qd.wrapper,
				children: [
					/* @__PURE__ */ g("input", {
						className: V,
						id: e,
						...x,
						ref: A,
						"aria-labelledby": `${N}${I}`,
						"aria-describedby": R,
						"aria-invalid": l,
						"aria-disabled": f,
						readOnly: f,
						required: m,
						disabled: i,
						type: "search",
						value: E,
						onChange: te
					}),
					z && !f && !i && /* @__PURE__ */ g(Fa, {
						hideLabel: !0,
						theme: "light",
						iconName: "cross",
						className: G,
						variant: "ghost",
						size: h,
						onClick: K,
						type: "button",
						tabIndex: -1,
						children: r
					}),
					/* @__PURE__ */ g(Fa, {
						...T,
						hideLabel: !0,
						theme: "light",
						iconName: "magnifying-glass",
						className: W,
						variant: "ghost",
						size: h,
						onClick: w,
						type: "submit",
						disabled: i || f,
						children: C
					})
				]
			}),
			l && _ && /* @__PURE__ */ g(Ya, {
				className: Qd.feedback,
				message: _,
				variant: "error",
				id: P
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/LinkCard.CsK31XXo.js
tf.displayName = "DSInputSearch", d();
var nf = {
	root: "ds-link-card_root_76yi7_1",
	rootElevated: "ds-link-card_root--elevated_76yi7_26",
	rootHorizontal: "ds-link-card_root--horizontal_76yi7_66",
	mediaWrapper: "ds-link-card_media-wrapper_76yi7_71",
	content: "ds-link-card_content_76yi7_81",
	contentPaddingSmall: "ds-link-card_content--padding-small_76yi7_86",
	header: "ds-link-card_header_76yi7_117",
	footer: "ds-link-card_footer_76yi7_118",
	heading: "ds-link-card_heading_76yi7_133",
	headingWithIcon: "ds-link-card_heading--with-icon_76yi7_136",
	link: "ds-link-card_link_76yi7_146",
	description: "ds-link-card_description_76yi7_151",
	metaData: "ds-link-card_meta-data_76yi7_168",
	decorativeLink: "ds-link-card_decorative-link_76yi7_185",
	flags: "ds-link-card_flags_76yi7_189",
	brandFlag: "ds-link-card_brand-flag_76yi7_198",
	graphicArea: "ds-link-card_graphic-area_76yi7_204"
}, rf = ({ href: e, linkComponent: t, flags: n, flagListAriaLabel: r, heading: i, img: a, brandFlag: o, decorativeLinkButtonProps: s }) => {
	if (!e && !t) throw Error(L("DSLinkCard", "Please provide either the 'href' prop or a custom 'linkComponent'."));
	if (e && t) throw Error(L("DSLinkCard", "Please provide either the 'href' prop or a custom 'linkComponent', but not both."));
	if (!i) throw Error(L("DSLinkCard", "The 'heading' prop is required and must be provided."));
	n && n.length > 6 && console.warn(L("DSLinkCard", "It is recommended to provide a maximum of 6 flags for optimal display.")), n && n.length > 0 && !r && console.warn(L("DSLinkCard", "When providing flags, please also ensure to add the 'flagListAriaLabel' to describe the list of flags for non sighted screen reader users.")), o && a === void 0 && console.warn(L("DSLinkCard", "The 'brandFlag' prop is set to true, but no 'img' prop is provided. The 'brandFlag' will have no effect without an image.")), typeof i == "object" && i && i.headingIconName && s?.label && console.warn(L("DSLinkCard", "The 'heading.headingIconName' option should not be used when a decorative link label is provided."));
}, af = (e) => {
	let t = D.c(86), n, r, a, o, s, c, l, d, f, p, m, h, v, y, b, x, S;
	t[0] === e ? (n = t[1], r = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], v = t[13], y = t[14], b = t[15], x = t[16], S = t[17]) : ({heading: d, brandFlag: n, className: a, cardClassNames: r, decorativeLinkButtonProps: o, description: s, flagListAriaLabel: c, flags: y, href: f, img: p, linkComponent: m, metaData: h, orientation: b, padding: x, graphicArea: l, variant: S, ...v} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c, t[7] = l, t[8] = d, t[9] = f, t[10] = p, t[11] = m, t[12] = h, t[13] = v, t[14] = y, t[15] = b, t[16] = x, t[17] = S);
	let C, w, T, E;
	t[18] !== n || t[19] !== o || t[20] !== c || t[21] !== d || t[22] !== f || t[23] !== p || t[24] !== m || t[25] !== y || t[26] !== b || t[27] !== x || t[28] !== S ? (C = y === void 0 ? [] : y, w = b === void 0 ? "vertical" : b, T = x === void 0 ? "medium" : x, E = S === void 0 ? "outlined" : S, process.env.NODE_ENV !== "production" && rf({
		href: f,
		linkComponent: m,
		heading: d,
		flags: C,
		flagListAriaLabel: c,
		img: p,
		brandFlag: n,
		decorativeLinkButtonProps: o
	}), t[18] = n, t[19] = o, t[20] = c, t[21] = d, t[22] = f, t[23] = p, t[24] = m, t[25] = y, t[26] = b, t[27] = x, t[28] = S, t[29] = C, t[30] = w, t[31] = T, t[32] = E) : (C = t[29], w = t[30], T = t[31], E = t[32]);
	let O;
	t[33] === o ? O = t[34] : (O = o || {}, t[33] = o, t[34] = O);
	let { label: k, iconName: A, iconPosition: j, variant: N, hideLabel: F, size: I } = O, L = j === void 0 ? "right" : j, R = I === void 0 ? "small" : I, z = N === "ghost" ? "ghost" : "filled", B = h || C.length > 0 || k, V = typeof d == "object" && !!d && !!d.headingIconName, H;
	if (t[35] !== z || t[36] !== n || t[37] !== r || t[38] !== a || t[39] !== F || t[40] !== A || t[41] !== L || t[42] !== k || t[43] !== R || t[44] !== s || t[45] !== c || t[46] !== C || t[47] !== l || t[48] !== B || t[49] !== d || t[50] !== V || t[51] !== f || t[52] !== p || t[53] !== m || t[54] !== h || t[55] !== w || t[56] !== T || t[57] !== v || t[58] !== E) {
		let { brandFlag: e, contentWrapper: o, descriptionWrapper: y, decorativeLink: b, flagsWrapper: x, footerWrapper: S, headerWrapper: D, heading: O, mediaWrapper: j, imageWrapper: N, metaDataWrapper: I, graphicAreaWrapper: U } = r || {}, W = w === "horizontal", G = E === "elevated", ee;
		t[60] !== a || t[61] !== G || t[62] !== W ? (ee = M(nf.root, a, {
			[nf.rootHorizontal]: W,
			[nf.rootElevated]: G
		}), t[60] = a, t[61] = G, t[62] = W, t[63] = ee) : ee = t[63];
		let K = ee, te = M(nf.brandFlag, e), ne = M(nf.content, o, { [nf.contentPaddingSmall]: T === "small" }), re = M(nf.description, y), ie = M(nf.decorativeLink, b), ae = M(nf.flags, x), se = M(nf.footer, S), ce = M(nf.header, D), q = M(nf.heading, O, { [nf.headingWithIcon]: V }), le = j || N, ue = M(nf.mediaWrapper, le), de = M(nf.metaData, I), J = M(nf.graphicArea, U), Y, X, fe, Z, Q, pe, me, he;
		t[64] === v ? (Y = t[65], X = t[66], fe = t[67], Z = t[68], Q = t[69], pe = t[70], me = t[71], he = t[72]) : ({download: X, hrefLang: fe, ping: Z, referrerPolicy: Q, rel: pe, target: me, type: he, ...Y} = v, t[64] = v, t[65] = Y, t[66] = X, t[67] = fe, t[68] = Z, t[69] = Q, t[70] = pe, t[71] = me, t[72] = he);
		let ge;
		t[73] !== X || t[74] !== f || t[75] !== fe || t[76] !== m || t[77] !== Z || t[78] !== Q || t[79] !== pe || t[80] !== me || t[81] !== he ? (ge = (e) => m && u(m) ? _(m, {
			...m.props,
			className: M(nf.link, m.props.className),
			children: /* @__PURE__ */ g(i, { children: [
				e,
				" ",
				m.props.children
			] })
		}) : /* @__PURE__ */ g("a", {
			href: f,
			className: nf.link,
			download: X,
			hrefLang: fe,
			ping: Z,
			referrerPolicy: Q,
			rel: pe,
			target: me,
			type: he,
			children: e
		}), t[73] = X, t[74] = f, t[75] = fe, t[76] = m, t[77] = Z, t[78] = Q, t[79] = pe, t[80] = me, t[81] = he, t[82] = ge) : ge = t[82];
		let _e = ge, ve = (e) => {
			let { headingText: t, headingIconName: n, headingSize: r, headingTag: i } = typeof e == "object" && e !== void 0 ? e : { headingText: e };
			return /* @__PURE__ */ g(P, {
				tag: i === void 0 ? "h3" : i,
				size: r === void 0 ? "medium" : r,
				className: q,
				children: [_e(t), n && /* @__PURE__ */ g(oe, {
					name: n,
					"aria-hidden": "true"
				})]
			});
		}, ye = (e) => {
			if (typeof e == "string") return /* @__PURE__ */ g(Ru, {
				color: "orange-base",
				className: te,
				children: e
			});
			let { children: t, color: n, className: r, ...i } = e;
			return /* @__PURE__ */ g(Ru, {
				color: n === void 0 ? "orange-base" : n,
				className: M(te, r),
				...i,
				children: t
			});
		}, be;
		t[83] !== ve || t[84] !== d ? (be = ve(d), t[83] = ve, t[84] = d, t[85] = be) : be = t[85], H = /* @__PURE__ */ g("div", {
			...Y,
			className: K,
			children: [/* @__PURE__ */ g("div", {
				className: ne,
				children: [/* @__PURE__ */ g("div", {
					className: ce,
					children: [
						l && /* @__PURE__ */ g("div", {
							className: J,
							children: l
						}),
						be,
						s && /* @__PURE__ */ g("div", {
							className: re,
							children: s
						})
					]
				}), B && /* @__PURE__ */ g("div", {
					className: se,
					children: [
						h && /* @__PURE__ */ g("div", {
							className: de,
							children: h
						}),
						C.length > 0 && /* @__PURE__ */ g("ul", {
							className: ae,
							"aria-label": c,
							children: C.map(of)
						}),
						k && /* @__PURE__ */ g(Ra, {
							iconName: A,
							iconPosition: L,
							variant: z,
							hideLabel: F,
							size: R,
							isFlush: z === "ghost",
							"aria-hidden": !0,
							className: ie,
							children: k
						})
					]
				})]
			}), p && /* @__PURE__ */ g("div", {
				className: ue,
				children: [n && ye(n), p]
			})]
		}), t[35] = z, t[36] = n, t[37] = r, t[38] = a, t[39] = F, t[40] = A, t[41] = L, t[42] = k, t[43] = R, t[44] = s, t[45] = c, t[46] = C, t[47] = l, t[48] = B, t[49] = d, t[50] = V, t[51] = f, t[52] = p, t[53] = m, t[54] = h, t[55] = w, t[56] = T, t[57] = v, t[58] = E, t[59] = H;
	} else H = t[59];
	return H;
};
af.displayName = "DSLinkCard";
function of(e, t) {
	if (typeof e == "string") return /* @__PURE__ */ g("li", { children: /* @__PURE__ */ g(Ru, {
		color: "grey-light",
		children: e
	}) }, t);
	let { children: n, color: r, ...i } = e;
	return /* @__PURE__ */ g("li", { children: /* @__PURE__ */ g(Ru, {
		color: r === void 0 ? "grey-light" : r,
		...i,
		children: n
	}) }, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/MegaMenu.CiSiMlE3.js
d();
var sf = {
	root: "ds-mega-menu_root_11fw1_1",
	content: "ds-mega-menu_content_11fw1_109",
	contentVariantFull: "ds-mega-menu_content--variant-full_11fw1_134",
	backdrop: "ds-mega-menu_backdrop_11fw1_139"
}, cf = 9, lf = (e) => {
	let t = D.c(17), n;
	t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
	let { initialOpen: r, isOpen: i, onOpenChange: a } = n, [o, s] = c(r === void 0 ? !1 : r), l = i ?? o, u = a ?? s, d;
	t[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = [xr(cf)], t[2] = d) : d = t[2];
	let f;
	t[3] !== l || t[4] !== u ? (f = {
		placement: "bottom-start",
		open: l,
		onOpenChange: u,
		whileElementsMounted: cr,
		strategy: "absolute",
		transform: !1,
		middleware: d
	}, t[3] = l, t[4] = u, t[5] = f) : f = t[5];
	let p = Bi(f), m = p.context, h;
	t[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { enabled: !0 }, t[6] = h) : h = t[6];
	let g = Pi(m, h), _ = Ri(m), v;
	t[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (v = { role: "menu" }, t[7] = v) : v = t[7];
	let y = Ki(m, v), b;
	t[8] !== g || t[9] !== _ || t[10] !== y ? (b = [
		g,
		_,
		y
	], t[8] = g, t[9] = _, t[10] = y, t[11] = b) : b = t[11];
	let x = Wi(b), S;
	return t[12] !== p || t[13] !== x || t[14] !== l || t[15] !== u ? (S = {
		open: l,
		setOpen: u,
		...x,
		...p
	}, t[12] = p, t[13] = x, t[14] = l, t[15] = u, t[16] = S) : S = t[16], S;
}, uf = (e) => {
	if (!u(e)) throw Error(L("DSMegaMenu", "DSMegaMenu.Anchor child must be a valid React element."));
}, df = ({ hasContent: e, hasAnchor: t }) => {
	if (!e) throw Error(L("DSMegaMenu", "A DSMegaMenu must have a <DSMegaMenu.Content> component as a child. Please add it to the children of DSMegaMenu."));
	if (!t) throw Error(L("DSMegaMenu", "A DSMegaMenu must have a <DSMegaMenu.Anchor> component as a child. Please add it to the children of DSMegaMenu."));
}, ff = r(null), pf = () => {
	let e = S(ff);
	if (e == null) throw Error(L("DSMegaMenu", "Components like DSMegaMenu.Anchor or DSMegaMenu.Content must be wrapped in <DSMegaMenu />."));
	return e;
}, mf = (e) => {
	let t = D.c(9), n, r;
	t[0] === e ? (n = t[1], r = t[2]) : ({children: n, ...r} = e, t[0] = e, t[1] = n, t[2] = r);
	let i;
	t[3] === r ? i = t[4] : (i = { ...r }, t[3] = r, t[4] = i);
	let a = lf(i), o = B(n, mf.Content), s = B(n, hf);
	process.env.NODE_ENV !== "production" && df({
		hasContent: o,
		hasAnchor: s
	});
	let c;
	return t[5] !== n || t[6] !== a || t[7] !== r ? (c = /* @__PURE__ */ g(ff.Provider, {
		value: a,
		...r,
		children: n
	}), t[5] = n, t[6] = a, t[7] = r, t[8] = c) : c = t[8], c;
}, hf = s((e, t) => {
	let n = D.c(4), { children: r, ...i } = e;
	process.env.NODE_ENV !== "production" && uf(r);
	let a = pf(), o = r.ref, s;
	n[0] !== o || n[1] !== a.refs.setReference || n[2] !== t ? (s = [
		a.refs.setReference,
		t,
		o
	], n[0] = o, n[1] = a.refs.setReference, n[2] = t, n[3] = s) : s = n[3];
	let c = Tr(s);
	if (u(r)) return _(r, a.getReferenceProps({
		ref: c,
		...i,
		...r.props,
		"data-state": a.open ? "open" : "closed"
	}));
});
hf.displayName = "DSMegaMenu.Anchor";
var gf = s((e, t) => {
	let n = D.c(45), { style: r, className: i, children: a, ...o } = e, s = pf(), c, l, u, d;
	n[0] === s ? (c = n[1], l = n[2], u = n[3], d = n[4]) : ({context: c, floatingStyles: l, getFloatingProps: u, ...d} = s, n[0] = s, n[1] = c, n[2] = l, n[3] = u, n[4] = d);
	let { variant: f, bannerAreaRef: p, topBarAreaRef: m, mainNavigationAreaRef: h } = S(rd), _;
	n[5] !== t || n[6] !== d.refs.setFloating ? (_ = [d.refs.setFloating, t], n[5] = t, n[6] = d.refs.setFloating, n[7] = _) : _ = n[7];
	let v = Tr(_), y;
	n[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = { duration: {
		open: 400,
		close: 400
	} }, n[8] = y) : y = n[8];
	let { isMounted: b, status: x } = Ji(c, y), C;
	n[9] === i ? C = n[10] : (C = M(sf.root, i), n[9] = i, n[10] = C);
	let w = C, T = f === "full", E;
	n[11] === T ? E = n[12] : (E = M(sf.content, { [sf.contentVariantFull]: T }), n[11] = T, n[12] = E);
	let O = E;
	if (!b) return null;
	let k = mi, A = Ai, j;
	n[13] === x ? j = n[14] : (j = /* @__PURE__ */ g("div", {
		className: sf.backdrop,
		"data-status": x
	}), n[13] = x, n[14] = j);
	let N = Ti, P;
	n[15] !== p || n[16] !== h || n[17] !== m ? (P = () => [
		h?.current,
		m?.current,
		p?.current
	].filter(Boolean), n[15] = p, n[16] = h, n[17] = m, n[18] = P) : P = n[18];
	let F;
	n[19] !== l || n[20] !== r ? (F = {
		...l,
		...r
	}, n[19] = l, n[20] = r, n[21] = F) : F = n[21];
	let I = u(o), L;
	n[22] !== a || n[23] !== O || n[24] !== x ? (L = /* @__PURE__ */ g("div", {
		className: O,
		"data-status": x,
		children: a
	}), n[22] = a, n[23] = O, n[24] = x, n[25] = L) : L = n[25];
	let R;
	n[26] !== w || n[27] !== v || n[28] !== x || n[29] !== F || n[30] !== I || n[31] !== L ? (R = /* @__PURE__ */ g("div", {
		ref: v,
		style: F,
		className: w,
		"data-status": x,
		...I,
		children: L
	}), n[26] = w, n[27] = v, n[28] = x, n[29] = F, n[30] = I, n[31] = L, n[32] = R) : R = n[32];
	let z;
	n[33] !== N || n[34] !== c || n[35] !== P || n[36] !== R ? (z = /* @__PURE__ */ g(N, {
		context: c,
		modal: !1,
		outsideElementsInert: !0,
		getInsideElements: P,
		children: R
	}), n[33] = N, n[34] = c, n[35] = P, n[36] = R, n[37] = z) : z = n[37];
	let B;
	n[38] !== A || n[39] !== z || n[40] !== j ? (B = /* @__PURE__ */ g(A, {
		lockScroll: !0,
		children: [j, z]
	}), n[38] = A, n[39] = z, n[40] = j, n[41] = B) : B = n[41];
	let V;
	return n[42] !== k || n[43] !== B ? (V = /* @__PURE__ */ g(k, { children: B }), n[42] = k, n[43] = B, n[44] = V) : V = n[44], V;
});
gf.displayName = "DSMegaMenu.Content", mf.Anchor = hf, mf.Content = gf, mf.displayName = "DSMegaMenu";
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/is-animation-disabled.B-V_68K-.js
var _f = (e) => F && e?.getBoundingClientRect() || DOMRect.fromRect({
	x: 0,
	y: 0,
	width: 0,
	height: 0
}), vf = () => {
	if (F) {
		let { matches: e } = window.matchMedia("(prefers-reduced-motion: reduce)"), t = getComputedStyle(document.documentElement).getPropertyValue("--ds-animation-duration").trim();
		return t === "0s" || t === "0ms" || e;
	} else return !0;
};
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/radio.DxdVKoxe.js
d(), d(), d(), d(), d();
var yf = (e) => e.replace(/\s+/g, ""), bf = {
	root: "ds-radio_root_14ige_1",
	rootDisabled: "ds-radio_root--disabled_14ige_24",
	rootWithCustomArea: "ds-radio_root--with-custom-area_14ige_27",
	rootWithCustomAreaAbove: "ds-radio_root--with-custom-area--above_14ige_30",
	radio: "ds-radio_radio_14ige_38",
	dot: "ds-radio_dot_14ige_56",
	radioInvalid: "ds-radio_radio--invalid_14ige_80",
	label: "ds-radio_label_14ige_85",
	labelBold: "ds-radio_label--bold_14ige_102",
	labelWithCustomArea: "ds-radio_label--with-custom-area_14ige_113",
	customArea: "ds-radio_custom-area_14ige_117",
	customAreaDisabled: "ds-radio_custom-area--disabled_14ige_125",
	customAreaAbove: "ds-radio_custom-area--above_14ige_128",
	hint: "ds-radio_hint_14ige_135",
	hintVisible: "ds-radio_hint--visible_14ige_159",
	hintUncheckedHidden: "ds-radio_hint--unchecked-hidden_14ige_163",
	input: "ds-radio_input_14ige_169"
}, xf = s((e, t) => {
	let n = D.c(92), r, i, a, s, l, u, d, f, m, h, _, v, y, b, x, S;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], s = n[4], l = n[5], u = n[6], d = n[7], f = n[8], m = n[9], h = n[10], _ = n[11], v = n[12], y = n[13], b = n[14], x = n[15], S = n[16]) : ({label: u, name: d, value: S, checked: r, className: i, customArea: a, isCustomAreaAbove: h, defaultChecked: _, disabled: v, fieldsetId: s, hint: l, invalid: y, isBold: b, hideUncheckedHint: x, onChange: f, ...m} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = s, n[5] = l, n[6] = u, n[7] = d, n[8] = f, n[9] = m, n[10] = h, n[11] = _, n[12] = v, n[13] = y, n[14] = b, n[15] = x, n[16] = S);
	let C = h === void 0 ? !1 : h, w = _ === void 0 ? !1 : _, T = v === void 0 ? !1 : v, E = y === void 0 ? !1 : y, O = b === void 0 ? !1 : b, k = x === void 0 ? !1 : x, A = p(null), j = p(null), [N, P] = c(w), F = r !== void 0, I = F ? r : N, L, R;
	n[17] !== I || n[18] !== k ? (L = () => {
		j.current && (k ? (j.current.style.height === "0px" || j.current.style.height === "") && I ? (j.current.style.height = `${j.current.scrollHeight}px`, j.current.style.opacity = "1") : I || (j.current.style.opacity = "0", j.current.style.height = "0px", j.current.style.pointerEvents = "none") : (j.current.style.height === "0px" || j.current.style.height === "") && (j.current.style.height = "auto", j.current.style.opacity = "1"));
	}, R = [
		j,
		I,
		k
	], n[17] = I, n[18] = k, n[19] = L, n[20] = R) : (L = n[19], R = n[20]), o(L, R);
	let z = !!a, B = !!a && C, V;
	n[21] !== i || n[22] !== T || n[23] !== B || n[24] !== z ? (V = M(bf.root, {
		[bf.rootDisabled]: T,
		[bf.rootWithCustomArea]: z,
		[bf.rootWithCustomAreaAbove]: B
	}, i), n[21] = i, n[22] = T, n[23] = B, n[24] = z, n[25] = V) : V = n[25];
	let H = V, U = !!a, W;
	n[26] !== O || n[27] !== U ? (W = M(bf.label, {
		[bf.labelBold]: O,
		[bf.labelWithCustomArea]: U
	}), n[26] = O, n[27] = U, n[28] = W) : W = n[28];
	let G = W, ee;
	n[29] !== I || n[30] !== k || n[31] !== l ? (ee = () => !k && l ? !0 : !!(k && l && I), n[29] = I, n[30] = k, n[31] = l, n[32] = ee) : ee = n[32];
	let K = ee, te = k && !K(), ne;
	n[33] !== K || n[34] !== te ? (ne = M(bf.hint, {
		[bf.hintUncheckedHidden]: te,
		[bf.hintVisible]: K()
	}), n[33] = K, n[34] = te, n[35] = ne) : ne = n[35];
	let re = ne, ie;
	n[36] === E ? ie = n[37] : (ie = M(bf.radio, { [bf.radioInvalid]: E }), n[36] = E, n[37] = ie);
	let ae = ie, oe;
	n[38] === T ? oe = n[39] : (oe = M(bf.customArea, { [bf.customAreaDisabled]: T }), n[38] = T, n[39] = oe);
	let se = oe, ce;
	n[40] === T ? ce = n[41] : (ce = M(bf.customArea, bf.customAreaAbove, { [bf.customAreaDisabled]: T }), n[40] = T, n[41] = ce);
	let q = ce, le;
	n[42] !== T || n[43] !== F || n[44] !== f ? (le = (e) => {
		if (T) {
			e.preventDefault();
			return;
		}
		F || P(e.target.checked), f && f(e);
	}, n[42] = T, n[43] = F, n[44] = f, n[45] = le) : le = n[45];
	let ue = le, de;
	n[46] !== l || n[47] !== d || n[48] !== S ? (de = l ? `${yf(d)}-${yf(S)}-description` : void 0, n[46] = l, n[47] = d, n[48] = S, n[49] = de) : de = n[49];
	let J = de, Y;
	n[50] !== J || n[51] !== s || n[52] !== E ? (Y = [E && s && `${s}-feedback`, J].filter(Boolean).join(" ") || void 0, n[50] = J, n[51] = s, n[52] = E, n[53] = Y) : Y = n[53];
	let X = Y, fe;
	n[54] === t ? fe = n[55] : (fe = (e) => {
		typeof t == "function" ? t(e) : t !== null && (t.current = e), A.current = e;
	}, n[54] = t, n[55] = fe);
	let Z = typeof u == "string" ? u : void 0, Q;
	n[56] !== X || n[57] !== I || n[58] !== T || n[59] !== ue || n[60] !== d || n[61] !== m || n[62] !== fe || n[63] !== Z || n[64] !== S ? (Q = /* @__PURE__ */ g("input", {
		type: "radio",
		value: S,
		name: d,
		className: bf.input,
		ref: fe,
		onChange: ue,
		...m,
		disabled: T,
		checked: I,
		"aria-label": Z,
		"aria-describedby": X
	}), n[56] = X, n[57] = I, n[58] = T, n[59] = ue, n[60] = d, n[61] = m, n[62] = fe, n[63] = Z, n[64] = S, n[65] = Q) : Q = n[65];
	let pe;
	n[66] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (pe = /* @__PURE__ */ g("div", { className: bf.dot }), n[66] = pe) : pe = n[66];
	let me;
	n[67] === ae ? me = n[68] : (me = /* @__PURE__ */ g("span", {
		className: ae,
		children: pe
	}), n[67] = ae, n[68] = me);
	let he;
	n[69] !== a || n[70] !== q || n[71] !== C ? (he = a && C && /* @__PURE__ */ g("div", {
		className: q,
		children: a
	}), n[69] = a, n[70] = q, n[71] = C, n[72] = he) : he = n[72];
	let ge;
	n[73] !== a || n[74] !== se || n[75] !== C ? (ge = a && !C && /* @__PURE__ */ g("div", {
		className: se,
		children: a
	}), n[73] = a, n[74] = se, n[75] = C, n[76] = ge) : ge = n[76];
	let _e;
	n[77] !== J || n[78] !== l || n[79] !== re ? (_e = /* @__PURE__ */ g("span", {
		id: J,
		className: re,
		ref: j,
		children: l
	}), n[77] = J, n[78] = l, n[79] = re, n[80] = _e) : _e = n[80];
	let ve;
	n[81] !== u || n[82] !== G || n[83] !== ge || n[84] !== _e ? (ve = /* @__PURE__ */ g("span", {
		className: G,
		children: [
			u,
			ge,
			_e
		]
	}), n[81] = u, n[82] = G, n[83] = ge, n[84] = _e, n[85] = ve) : ve = n[85];
	let ye;
	return n[86] !== H || n[87] !== Q || n[88] !== me || n[89] !== he || n[90] !== ve ? (ye = /* @__PURE__ */ g("label", {
		className: H,
		children: [
			Q,
			me,
			he,
			ve
		]
	}), n[86] = H, n[87] = Q, n[88] = me, n[89] = he, n[90] = ve, n[91] = ye) : ye = n[91], ye;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/RadioGroup.BWe0nG6N.js
xf.displayName = "DSRadio", d();
var Sf = {
	fieldsetCustomAreaAbove: "ds-radio-group_fieldset--custom-area-above_1r3gv_1",
	root: "ds-radio-group_root_1r3gv_5",
	rootHorizontal: "ds-radio-group_root--horizontal_1r3gv_13",
	rootInvalid: "ds-radio-group_root--invalid_1r3gv_16",
	rootCustomAreaAbove: "ds-radio-group_root--custom-area-above_1r3gv_19",
	rootCustomAreaAboveHorizontal: "ds-radio-group_root--custom-area-above--horizontal_1r3gv_26"
}, Cf = (e) => e.some(({ hint: e }) => !!e), wf = (e) => e.some(({ customArea: e, isCustomAreaAbove: t }) => !!e && !t), Tf = (e) => e.some(({ customArea: e, isCustomAreaAbove: t }) => !!e && t), Ef = ({ legend: e, name: t, options: n, description: r, direction: i, hideUncheckedHints: a, id: o, systemFeedback: s }) => {
	if (!o && (r || s)) throw Error(L("DSRadioGroup", "A unique \"id\" prop is required when providing the description or systemFeedback property. Please add a unique \"id\" prop to the DSRadioGroup component."));
	if (!e) throw Error(L("DSRadioGroup", R("legend", "DSRadioGroup")));
	if (!t) throw Error(L("DSRadioGroup", R("name", "DSRadioGroup")));
	if (Array.isArray(n)) {
		if (n.length === 0) throw Error(L("DSRadioGroup", "The options array must not be empty."));
	} else throw Error(L("DSRadioGroup", R("options", "DSRadioGroup")));
	if (i === "horizontal" && wf(n)) throw Error(L("DSRadioGroup", "Horizontal direction is not possible when options contain a custom area without isCustomAreaAbove set to true. Please remove custom areas, change direction property to 'vertical' or set isCustomAreaAbove to true."));
	i === "horizontal" && a && console.warn(L("DSRadioGroup", "Setting 'hideUncheckedHints' to 'true' is not possible when direction is 'horizontal'. Please remove 'hideUncheckedHints' or change direction property to 'vertical'."));
}, Df = s((e, t) => {
	let n = D.c(66), r, i, a, o, s, l, u, d, f, p, m, h, _, v, y, b, x, S;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], l = n[6], u = n[7], d = n[8], f = n[9], p = n[10], m = n[11], h = n[12], _ = n[13], v = n[14], y = n[15], b = n[16], x = n[17], S = n[18]) : ({legend: s, name: l, options: d, className: r, defaultValue: i, description: a, direction: _, disabled: v, hideUncheckedHints: y, id: o, invalid: b, popoverContent: f, popoverInfoButtonProps: p, required: x, systemFeedback: h, value: S, onChange: u, ...m} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = p, n[11] = m, n[12] = h, n[13] = _, n[14] = v, n[15] = y, n[16] = b, n[17] = x, n[18] = S);
	let C = _ === void 0 ? "vertical" : _, w = v === void 0 ? !1 : v, T = y === void 0 ? !1 : y, E = b === void 0 ? !1 : b, O = x === void 0 ? !1 : x;
	process.env.NODE_ENV !== "production" && Ef({
		legend: s,
		name: l,
		options: d,
		description: a,
		direction: C,
		hideUncheckedHints: T,
		id: o,
		systemFeedback: h
	});
	let [k, A] = c(i), j = S !== void 0, N = j ? S : k, P;
	n[19] !== r || n[20] !== d ? (P = M({ [Sf.fieldsetCustomAreaAbove]: Tf(d) }, r), n[19] = r, n[20] = d, n[21] = P) : P = n[21];
	let F = P, I = C === "horizontal", L = E && !!h, R;
	n[22] !== C || n[23] !== d || n[24] !== I || n[25] !== L ? (R = M(Sf.root, {
		[Sf.rootHorizontal]: I,
		[Sf.rootInvalid]: L,
		[Sf.rootCustomAreaAbove]: Tf(d),
		[Sf.rootCustomAreaAboveHorizontal]: Tf(d) && C === "horizontal"
	}), n[22] = C, n[23] = d, n[24] = I, n[25] = L, n[26] = R) : R = n[26];
	let z = R, B;
	n[27] !== w || n[28] !== j || n[29] !== u ? (B = (e) => {
		if (w) {
			e.preventDefault();
			return;
		}
		j || A(e.target.value), u && u(e);
	}, n[27] = w, n[28] = j, n[29] = u, n[30] = B) : B = n[30];
	let V = B, H;
	n[31] !== T || n[32] !== d ? (H = Cf(d) && !T, n[31] = T, n[32] = d, n[33] = H) : H = n[33];
	let U = H, W;
	n[34] !== C || n[35] !== d ? (W = Tf(d) && C === "horizontal" ? { maxWidth: `calc(${d.length * 400}px + var(--ds-spacing-dynamic-xs))` } : void 0, n[34] = C, n[35] = d, n[36] = W) : W = n[36];
	let G;
	n[37] !== U || n[38] !== N || n[39] !== w || n[40] !== T || n[41] !== o || n[42] !== E || n[43] !== l || n[44] !== d || n[45] !== t || n[46] !== O ? (G = d.map((e) => /* @__PURE__ */ g(xf, {
		name: l,
		checked: e.value === N,
		disabled: w,
		fieldsetId: o,
		hideUncheckedHint: T,
		hint: e.hint,
		invalid: E,
		isBold: U,
		required: O,
		ref: e.value === N ? t : null,
		...e
	}, o + e.label + e.value + e.hint)), n[37] = U, n[38] = N, n[39] = w, n[40] = T, n[41] = o, n[42] = E, n[43] = l, n[44] = d, n[45] = t, n[46] = O, n[47] = G) : G = n[47];
	let ee;
	n[48] !== z || n[49] !== W || n[50] !== G ? (ee = /* @__PURE__ */ g("div", {
		className: z,
		style: W,
		children: G
	}), n[48] = z, n[49] = W, n[50] = G, n[51] = ee) : ee = n[51];
	let K;
	return n[52] !== a || n[53] !== w || n[54] !== F || n[55] !== V || n[56] !== o || n[57] !== E || n[58] !== s || n[59] !== f || n[60] !== p || n[61] !== O || n[62] !== m || n[63] !== h || n[64] !== ee ? (K = /* @__PURE__ */ g(po, {
		id: o,
		legend: s,
		className: F,
		description: a,
		disabled: w,
		required: O,
		invalid: E,
		systemFeedback: h,
		popoverContent: f,
		popoverInfoButtonProps: p,
		...m,
		role: "radiogroup",
		onChange: V,
		children: ee
	}), n[52] = a, n[53] = w, n[54] = F, n[55] = V, n[56] = o, n[57] = E, n[58] = s, n[59] = f, n[60] = p, n[61] = O, n[62] = m, n[63] = h, n[64] = ee, n[65] = K) : K = n[65], K;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/scroller.BZy0pXNL.js
Df.displayName = "DSRadioGroup", d();
function Of(...e) {
	return (t) => {
		for (let n of e) n && (typeof n == "function" ? n(t) : n.current = t);
	};
}
var kf = {
	root: "ds-scroller_root_3ktti_1",
	scrollWrapper: "ds-scroller_scroll-wrapper_3ktti_6",
	scroller: "ds-scroller_scroller_3ktti_45",
	scrollButton: "ds-scroller_scroll-button_3ktti_60",
	scrollButtonHidden: "ds-scroller_scroll-button--hidden_3ktti_65",
	scrollButtonRight: "ds-scroller_scroll-button--right_3ktti_69"
}, Af = s(({ children: e, className: t, scrollerClassName: n, scrollerButtonClassName: r, scrollToPosition: i, ...a }, o) => {
	let [s, l] = c(!1), [u, d] = c(!1), f = p(null), m = p(null), h = p(!1), _ = () => {
		y();
	};
	Yi(() => {
		let e = new ResizeObserver(_);
		return m.current && e.observe(m.current), () => {
			e.disconnect();
		};
	}, []), Yi(() => (Promise.all(["18px 'STIHL Contraface Digital Text Bold'"].map((e) => document.fonts.load(e))).then(() => {
		h.current = !0, y(), v();
	}).catch((e) => {
		throw Error(L("DSScroller", `The component requires the fonts to be loaded: ${e}`));
	}), m.current?.addEventListener("scroll", _), () => {
		m.current?.removeEventListener("scroll", _);
	}), [i]);
	let v = () => {
		m.current && i?.scrollPosition && m.current.scrollTo({
			left: i.scrollPosition,
			behavior: vf() || !i.isSmooth ? "instant" : "smooth"
		});
	}, y = () => {
		if (m.current && f.current) {
			let e = _f(m.current), t = _f(f.current);
			l(t.left < e.left), d(t.right > e.right + 4);
		}
	}, b = (e) => {
		let t = x(e);
		m.current?.scrollTo({
			left: t,
			behavior: vf() ? "instant" : "smooth"
		});
	}, x = (e) => {
		if (!f.current || !m.current) return 0;
		let { scrollLeft: t, offsetWidth: n } = m.current, r = Math.round(n * .2);
		return e === "next" ? t + r : t - r;
	}, S = M(kf.scroller, n);
	return /* @__PURE__ */ g("div", {
		className: M(kf.root, t),
		...a,
		children: [
			/* @__PURE__ */ g("div", {
				className: kf.scrollWrapper,
				ref: Of(m, o),
				tabIndex: s || u ? 0 : -1,
				children: /* @__PURE__ */ g("div", {
					className: S,
					ref: f,
					children: e
				})
			}),
			/* @__PURE__ */ g(Fa, {
				variant: "filled",
				className: M(kf.scrollButton, r, { [kf.scrollButtonHidden]: !s }),
				hideLabel: !0,
				iconName: "chevron-left",
				tabIndex: -1,
				size: "small",
				type: "button",
				onClick: () => b("prev"),
				children: "Left"
			}),
			/* @__PURE__ */ g(Fa, {
				variant: "filled",
				className: M(kf.scrollButton, kf.scrollButtonRight, r, { [kf.scrollButtonHidden]: !u }),
				hideLabel: !0,
				iconName: "chevron-right",
				tabIndex: -1,
				size: "small",
				type: "button",
				onClick: () => b("next"),
				children: "Right"
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Select.fgSB8mUs.js
Af.displayName = "DSScroller", d(), d(), d();
var jf = {
	root: "ds-select_root_1p3qq_1",
	hint: "ds-select_hint_1p3qq_1",
	labelWrapper: "ds-select_label-wrapper_1p3qq_1",
	label: "ds-select_label_1p3qq_1",
	labelDisabled: "ds-select_label--disabled_1p3qq_123",
	labelWrapperHidden: "ds-select_label-wrapper--hidden_1p3qq_135",
	feedback: "ds-select_feedback_1p3qq_163",
	selectWrapper: "ds-select_select-wrapper_1p3qq_167",
	select: "ds-select_select_1p3qq_167",
	selectSmall: "ds-select_select--small_1p3qq_181",
	selectInvalid: "ds-select_select--invalid_1p3qq_293",
	selectPlaceholder: "ds-select_select--placeholder_1p3qq_401",
	chevron: "ds-select_chevron_1p3qq_451",
	chevronSmall: "ds-select_chevron--small_1p3qq_455",
	chevronDisabled: "ds-select_chevron--disabled_1p3qq_458"
}, Mf = ({ id: e, label: t, options: n, hideLabel: r, popoverContent: i }) => {
	if (!e) throw Error(L("DSSelect", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSSelect component."));
	if (!t) throw Error(L("DSSelect", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSSelect component. If you don't want to display a label, set hideLabel={true}."));
	if (Array.isArray(n)) {
		if (n.length === 0) throw Error(L("DSSelect", "The options array must not be empty."));
	} else throw Error(L("DSSelect", R("options", "DSSelect")));
	r && i && console.warn(L("DSSelect", "Using a popover when hideLabel is set to true is not supported."));
}, Nf = (e, t, n) => e === "" || t !== void 0 && t !== "" ? !1 : !(n !== void 0 && n !== ""), Pf = s(({ id: e, label: t, options: n, className: r, defaultValue: i, disabled: a = !1, hideLabel: s = !1, hint: l, invalid: u = !1, popoverContent: d, popoverInfoButtonProps: f, placeholder: m = "Select", required: h = !1, size: _ = "medium", systemFeedback: v, value: y, onChange: b, ...x }, S) => {
	process.env.NODE_ENV !== "production" && Mf({
		id: e,
		label: t,
		options: n,
		hideLabel: Aa(s),
		popoverContent: d
	});
	let C = p(null), [w, T] = c(y), [E, D] = c(Nf(m, i, y));
	o(() => {
		T(y);
	}, [y]);
	let O = (e) => {
		C.current = e, typeof S == "function" ? S(e) : S && (S.current = e);
	}, k = Aa(s), A = `${e}-label`, j = `${e}-feedback`, N = `${e}-hint`, P = l ? ` ${N}` : "", F = [u && v && j].filter(Boolean).join(" ") || void 0, I = (t) => [m && /* @__PURE__ */ g("option", {
		value: "",
		children: m
	}, `${e}-hidden-option-disabled-placeholder`), ...t.map((e) => {
		if ("options" in e) {
			let { label: t, options: n } = e;
			return /* @__PURE__ */ g("optgroup", {
				label: t,
				children: n.map(L)
			}, t);
		} else return L(e);
	})], L = ({ label: e, value: t, isDisabled: n }) => /* @__PURE__ */ g("option", {
		value: t,
		disabled: n,
		children: e
	}, t), R = M(jf.root, r), z = M(jf.select, {
		[jf.selectSmall]: _ === "small",
		[jf.selectInvalid]: u,
		[jf.selectPlaceholder]: E
	}), B = M(jf.label, { [jf.labelDisabled]: a }), V = M(jf.labelWrapper, { [jf.labelWrapperHidden]: k }), H = M(jf.chevron, {
		[jf.chevronSmall]: _ === "small",
		[jf.chevronDisabled]: a
	}), U = (e) => {
		let { value: t } = e.target;
		D(t === ""), T(t), b && b(e);
	};
	return /* @__PURE__ */ g("div", {
		className: R,
		children: [
			/* @__PURE__ */ g("div", {
				className: V,
				children: [/* @__PURE__ */ g("label", {
					className: B,
					id: A,
					htmlFor: e,
					children: [t, h && /* @__PURE__ */ g(eo, {})]
				}), d && !k && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: f,
					children: d
				})]
			}),
			l && /* @__PURE__ */ g("div", {
				className: jf.hint,
				id: N,
				children: l
			}),
			/* @__PURE__ */ g("div", {
				className: jf.selectWrapper,
				children: [/* @__PURE__ */ g("select", {
					...x,
					id: e,
					ref: O,
					className: z,
					"aria-labelledby": `${A}${P}`,
					"aria-describedby": F,
					"aria-invalid": u,
					defaultValue: i,
					value: w,
					disabled: a,
					required: h,
					onChange: U,
					children: I(n)
				}), /* @__PURE__ */ g(oe, {
					name: "chevron-down",
					className: H,
					"aria-hidden": "true"
				})]
			}),
			u && v && /* @__PURE__ */ g(Ya, {
				className: jf.feedback,
				message: v,
				variant: "error",
				id: j
			})
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/skiptocontent.D-qA8MV6.js
Pf.displayName = "DSSelect", d();
var Ff = {
	root: "ds-skip-to-content_root_uqkjt_1",
	rootDark: "ds-skip-to-content_root--dark_uqkjt_8"
}, If = s((e, t) => {
	let n = D.c(16), r, i, a, o, s;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5]) : ({children: a, className: r, targetElementId: o, theme: s, ...i} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s);
	let c = a === void 0 ? "Skip to main content" : a, l = o === void 0 ? "main" : o, u = s === void 0 ? "light" : s;
	l.startsWith("#") && console.warn(L("DSSkipToContent", "The targetElementId should not start with a \"#\" character. Please provide the id of the element you want to skip to.")), (l.startsWith("http") || l.startsWith(".")) && console.warn(L("DSSkipToContent", "The targetElementId should not start with \"http\" or \".\". Please provide the id of the element you want to skip to."));
	let d = u === "dark", f;
	n[6] !== r || n[7] !== d ? (f = M(Ff.root, r, { [Ff.rootDark]: d }), n[6] = r, n[7] = d, n[8] = f) : f = n[8];
	let p = f, m = `#${l}`, h;
	return n[9] !== c || n[10] !== t || n[11] !== i || n[12] !== p || n[13] !== m || n[14] !== u ? (h = /* @__PURE__ */ g(Ra, {
		...i,
		className: p,
		href: m,
		theme: u,
		ref: t,
		children: c
	}), n[9] = c, n[10] = t, n[11] = i, n[12] = p, n[13] = m, n[14] = u, n[15] = h) : h = n[15], h;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Slider.8H5oki70.js
If.displayName = "DSSkipToContent", d();
var Lf = {
	root: "ds-slider_root_3zq13_1",
	hint: "ds-slider_hint_3zq13_4",
	labelWrapper: "ds-slider_label-wrapper_3zq13_4",
	labelHintInputWrapper: "ds-slider_label-hint-input-wrapper_3zq13_7",
	numberInput: "ds-slider_number-input_3zq13_10",
	labelWrapperHidden: "ds-slider_label-wrapper--hidden_3zq13_20",
	label: "ds-slider_label_3zq13_4",
	labelDisabled: "ds-slider_label--disabled_3zq13_55",
	numberInputSmall: "ds-slider_number-input--small_3zq13_84",
	minMaxLabelWrapper: "ds-slider_min-max-label-wrapper_3zq13_89",
	minMaxLabelWrapperDisabled: "ds-slider_min-max-label-wrapper--disabled_3zq13_103",
	minLabel: "ds-slider_min-label_3zq13_108",
	maxLabel: "ds-slider_max-label_3zq13_112",
	sliderWrapper: "ds-slider_slider-wrapper_3zq13_116",
	slider: "ds-slider_slider_3zq13_116",
	valueTooltip: "ds-slider_value-tooltip_3zq13_135",
	proxyThumb: "ds-slider_proxy-thumb_3zq13_139",
	proxyThumbDisabled: "ds-slider_proxy-thumb--disabled_3zq13_217",
	customTrack: "ds-slider_custom-track_3zq13_246",
	customTrackProgress: "ds-slider_custom-track--progress_3zq13_251",
	customTrackRunnable: "ds-slider_custom-track--runnable_3zq13_263",
	customTrackDisabled: "ds-slider_custom-track--disabled_3zq13_277",
	tickWrapper: "ds-slider_tick-wrapper_3zq13_297",
	tick: "ds-slider_tick_3zq13_297",
	valueTooltipVisible: "ds-slider_value-tooltip--visible_3zq13_356",
	valueTooltipDisabled: "ds-slider_value-tooltip--disabled_3zq13_359"
}, Rf = (e) => e.toString().length, zf = (e, t, n) => {
	if (t === 0) return !0;
	let r = (e - n) / t;
	return Math.abs(Math.round(r) - r) < 1e-10;
}, Bf = (e, t, n, r) => {
	let i = parseFloat(t), a = n, o = a + Math.round((e - a) / i) * i;
	o = Math.min(Math.max(o, n), r);
	let s = i.toString().split(".")[1]?.length || 0;
	return parseFloat(o.toFixed(s));
}, Vf = (e, t, n) => {
	let r = (e - t) / (n - t) * 100;
	return `calc(${r}% + ${`calc(-0.24 * ${r}px + 10px)`})`;
}, Hf = ({ id: e, label: t }) => {
	if (!e) throw Error(L("DSSlider", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSSlider component."));
	if (!t) throw Error(L("DSSlider", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSSlider component. If you don't want to display a label, set hideLabel={true}."));
}, Uf = s((e, t) => {
	let n = D.c(165), r, i, a, o, s, l, u, d, f, m, h, _, v, y, b, x, S, C;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], l = n[6], u = n[7], d = n[8], f = n[9], m = n[10], h = n[11], _ = n[12], v = n[13], y = n[14], b = n[15], x = n[16], S = n[17], C = n[18]) : ({id: o, label: s, className: r, defaultValue: i, disabled: h, hideLabel: _, hideNumberInput: v, hint: a, isTooltipAlwaysVisible: y, max: b, min: x, numberInputProps: l, popoverContent: d, popoverInfoButtonProps: f, step: S, value: C, onChange: u, ...m} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = m, n[11] = h, n[12] = _, n[13] = v, n[14] = y, n[15] = b, n[16] = x, n[17] = S, n[18] = C);
	let w = h === void 0 ? !1 : h, T = _ === void 0 ? !1 : _, E = v === void 0 ? !1 : v, O = y === void 0 ? !1 : y, k = b === void 0 ? 100 : b, A = x === void 0 ? 0 : x, j = S === void 0 ? 1 : S;
	process.env.NODE_ENV !== "production" && Hf({
		id: o,
		label: s
	});
	let N = Number(k), P = Number(A), F = Number(j), I = Aa(T), L = `${o}-label`, R = `${o}-number-input`, z = `${o}-hint`, B = a ? ` ${z}` : "", V;
	n[19] !== i || n[20] !== P || n[21] !== C ? (V = C || i || P.toString() || "0", n[19] = i, n[20] = P, n[21] = C, n[22] = V) : V = n[22];
	let [H, U] = c(V), [W, G] = c(C || i || P || 0), ee = p(null), K;
	n[23] === t ? K = n[24] : (K = (e) => {
		ee.current = e, typeof t == "function" ? t(e) : t && (t.current = e);
	}, n[23] = t, n[24] = K);
	let te = K, ne;
	n[25] === l ? ne = n[26] : (ne = l || {}, n[25] = l, n[26] = ne);
	let { size: re, suffix: ie } = ne, ae = re === void 0 ? "medium" : re, oe;
	n[27] === u ? oe = n[28] : (oe = (e) => {
		G(parseFloat(e.target.value)), U(e.target.value), u && u(e);
	}, n[27] = u, n[28] = oe);
	let se = oe, ce;
	n[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ce = (e) => {
		let t = e.target.value;
		if (U(t), /^-?\d+(\.\d+)?$/.test(t)) {
			let e = parseFloat(t);
			Number.isNaN(e) || G(e);
		}
	}, n[29] = ce) : ce = n[29];
	let q = ce, le;
	if (n[30] !== H || n[31] !== u || n[32] !== N || n[33] !== P || n[34] !== j) {
		le = (t) => {
			let n = parseFloat(H);
			if (Number.isNaN(n)) {
				e(t);
				return;
			}
			let r = Math.min(Math.max(n, P), N);
			zf(r, parseFloat(j), P) || (r = Bf(r, j, P, N)), U(r.toString()), G(r), u && u(t);
		};
		let e = (e) => {
			U(P.toString()), G(P), u && u(e);
		};
		n[30] = H, n[31] = u, n[32] = N, n[33] = P, n[34] = j, n[35] = le;
	} else le = n[35];
	let ue = (F === 0 ? !1 : (N - P) / F <= 11) && (N - P) / F || 0, de;
	if (n[36] !== N || n[37] !== P || n[38] !== F || n[39] !== ue) {
		let e;
		n[41] !== N || n[42] !== P || n[43] !== F ? (e = (e, t) => {
			let n = P + t * F, r = Vf(n, P, N);
			return /* @__PURE__ */ g("span", {
				className: Lf.tick,
				style: { left: r }
			}, n);
		}, n[41] = N, n[42] = P, n[43] = F, n[44] = e) : e = n[44], de = Array.from({ length: ue + 1 }, e), n[36] = N, n[37] = P, n[38] = F, n[39] = ue, n[40] = de;
	} else de = n[40];
	let J = de, Y;
	n[45] !== N || n[46] !== P || n[47] !== W ? (Y = () => {
		if (P === N) throw Error("Min and max values cannot be the same.");
		let e = (W - P) / (N - P) * 100;
		return Math.max(0, Math.min(e, 100));
	}, n[45] = N, n[46] = P, n[47] = W, n[48] = Y) : Y = n[48];
	let X = Y, fe;
	n[49] === X ? fe = n[50] : (fe = () => {
		let e = X();
		return e < 50 ? `calc(${e}% + 4px)` : `calc(${e}% - 4px)`;
	}, n[49] = X, n[50] = fe);
	let Z = fe, Q;
	n[51] === X ? Q = n[52] : (Q = () => {
		let e = 100 - X();
		return e < 50 ? `calc(${e}% + 4px)` : `calc(${e}% - 4px)`;
	}, n[51] = X, n[52] = Q);
	let pe = Q, me;
	n[53] === r ? me = n[54] : (me = M(Lf.slider, r), n[53] = r, n[54] = me);
	let he = me, ge;
	n[55] === w ? ge = n[56] : (ge = M(Lf.label, { [Lf.labelDisabled]: w }), n[55] = w, n[56] = ge);
	let _e = ge, ve;
	n[57] === I ? ve = n[58] : (ve = M(Lf.labelWrapper, { [Lf.labelWrapperHidden]: I }), n[57] = I, n[58] = ve);
	let ye = ve, be = ae === "small", xe;
	n[59] === be ? xe = n[60] : (xe = M(Lf.numberInput, { [Lf.numberInputSmall]: be }), n[59] = be, n[60] = xe);
	let Se = xe, Ce;
	n[61] === w ? Ce = n[62] : (Ce = M(Lf.minMaxLabelWrapper, { [Lf.minMaxLabelWrapperDisabled]: w }), n[61] = w, n[62] = Ce);
	let we = Ce, Te;
	n[63] === w ? Te = n[64] : (Te = M(Lf.customTrack, Lf.customTrackProgress, { [Lf.customTrackDisabled]: w }), n[63] = w, n[64] = Te);
	let Ee = Te, De;
	n[65] === w ? De = n[66] : (De = M(Lf.customTrack, Lf.customTrackRunnable, { [Lf.customTrackDisabled]: w }), n[65] = w, n[66] = De);
	let Oe = De, ke;
	n[67] === w ? ke = n[68] : (ke = M(Lf.proxyThumb, { [Lf.proxyThumbDisabled]: w }), n[67] = w, n[68] = ke);
	let Ae = ke, je;
	n[69] !== w || n[70] !== O ? (je = M(Lf.valueTooltip, {
		[Lf.valueTooltipVisible]: O,
		[Lf.valueTooltipDisabled]: w
	}), n[69] = w, n[70] = O, n[71] = je) : je = n[71];
	let Me = je, Ne;
	n[72] !== o || n[73] !== s || n[74] !== _e || n[75] !== L ? (Ne = /* @__PURE__ */ g("label", {
		className: _e,
		htmlFor: o,
		id: L,
		children: s
	}), n[72] = o, n[73] = s, n[74] = _e, n[75] = L, n[76] = Ne) : Ne = n[76];
	let Pe;
	n[77] !== I || n[78] !== d || n[79] !== f ? (Pe = d && !I && /* @__PURE__ */ g(so, {
		placement: "top",
		defaultAnchorButtonProps: f,
		children: d
	}), n[77] = I, n[78] = d, n[79] = f, n[80] = Pe) : Pe = n[80];
	let Fe;
	n[81] !== ye || n[82] !== Ne || n[83] !== Pe ? (Fe = /* @__PURE__ */ g("div", {
		className: ye,
		children: [Ne, Pe]
	}), n[81] = ye, n[82] = Ne, n[83] = Pe, n[84] = Fe) : Fe = n[84];
	let Ie;
	n[85] !== a || n[86] !== z ? (Ie = a && /* @__PURE__ */ g("div", {
		className: Lf.hint,
		id: z,
		children: a
	}), n[85] = a, n[86] = z, n[87] = Ie) : Ie = n[87];
	let Le;
	n[88] !== w || n[89] !== le || n[90] !== E || n[91] !== R || n[92] !== H || n[93] !== s || n[94] !== Se || n[95] !== ae || n[96] !== ie || n[97] !== N || n[98] !== P || n[99] !== F ? (Le = !E && /* @__PURE__ */ g(gd, {
		id: R,
		className: Se,
		type: "number",
		min: P,
		max: N,
		step: F,
		inputMode: "decimal",
		autoComplete: "off",
		disabled: w,
		hideLabel: !0,
		value: H,
		onChange: q,
		onBlur: le,
		onKeyDown: (e) => {
			e.key === "Enter" && (e.preventDefault(), le(e));
		},
		label: s,
		size: ae,
		suffix: ie
	}), n[88] = w, n[89] = le, n[90] = E, n[91] = R, n[92] = H, n[93] = s, n[94] = Se, n[95] = ae, n[96] = ie, n[97] = N, n[98] = P, n[99] = F, n[100] = Le) : Le = n[100];
	let Re;
	n[101] !== Fe || n[102] !== Ie || n[103] !== Le ? (Re = /* @__PURE__ */ g("div", {
		className: Lf.labelHintInputWrapper,
		children: [
			Fe,
			Ie,
			Le
		]
	}), n[101] = Fe, n[102] = Ie, n[103] = Le, n[104] = Re) : Re = n[104];
	let ze = Rf(P) < 4, Be;
	n[105] === ze ? Be = n[106] : (Be = M({ [Lf.minLabel]: ze }), n[105] = ze, n[106] = Be);
	let Ve;
	n[107] !== P || n[108] !== Be ? (Ve = /* @__PURE__ */ g("div", {
		className: Be,
		children: P
	}), n[107] = P, n[108] = Be, n[109] = Ve) : Ve = n[109];
	let He = Rf(N) < 4, Ue;
	n[110] === He ? Ue = n[111] : (Ue = M({ [Lf.maxLabel]: He }), n[110] = He, n[111] = Ue);
	let We;
	n[112] !== N || n[113] !== Ue ? (We = /* @__PURE__ */ g("div", {
		className: Ue,
		children: N
	}), n[112] = N, n[113] = Ue, n[114] = We) : We = n[114];
	let Ge;
	n[115] !== we || n[116] !== Ve || n[117] !== We ? (Ge = /* @__PURE__ */ g("div", {
		className: we,
		children: [Ve, We]
	}), n[115] = we, n[116] = Ve, n[117] = We, n[118] = Ge) : Ge = n[118];
	let Ke = `${X()}`, qe;
	n[119] === Ke ? qe = n[120] : (qe = { "--ds-input-slider-thumb-position": Ke }, n[119] = Ke, n[120] = qe);
	let Je = qe, Ye = Z(), Xe;
	n[121] === Ye ? Xe = n[122] : (Xe = { width: Ye }, n[121] = Ye, n[122] = Xe);
	let Ze;
	n[123] !== Ee || n[124] !== Xe ? (Ze = /* @__PURE__ */ g("div", {
		className: Ee,
		style: Xe
	}), n[123] = Ee, n[124] = Xe, n[125] = Ze) : Ze = n[125];
	let Qe = pe(), $e;
	n[126] === Qe ? $e = n[127] : ($e = { width: Qe }, n[126] = Qe, n[127] = $e);
	let et;
	n[128] !== Oe || n[129] !== $e ? (et = /* @__PURE__ */ g("div", {
		className: Oe,
		style: $e
	}), n[128] = Oe, n[129] = $e, n[130] = et) : et = n[130];
	let tt = `${L}${B}`, nt;
	n[131] !== w || n[132] !== te || n[133] !== se || n[134] !== o || n[135] !== N || n[136] !== P || n[137] !== F || n[138] !== m || n[139] !== he || n[140] !== W || n[141] !== tt ? (nt = /* @__PURE__ */ g("input", {
		...m,
		id: o,
		type: "range",
		ref: te,
		className: he,
		min: P,
		max: N,
		step: F,
		value: W,
		disabled: w,
		"aria-labelledby": tt,
		onChange: se
	}), n[131] = w, n[132] = te, n[133] = se, n[134] = o, n[135] = N, n[136] = P, n[137] = F, n[138] = m, n[139] = he, n[140] = W, n[141] = tt, n[142] = nt) : nt = n[142];
	let rt;
	n[143] !== ue || n[144] !== J ? (rt = ue > 0 && /* @__PURE__ */ g("div", {
		className: Lf.tickWrapper,
		children: J
	}), n[143] = ue, n[144] = J, n[145] = rt) : rt = n[145];
	let it;
	n[146] === Ae ? it = n[147] : (it = /* @__PURE__ */ g("div", { className: Ae }), n[146] = Ae, n[147] = it);
	let at;
	n[148] !== w || n[149] !== E || n[150] !== W || n[151] !== Me ? (at = E && /* @__PURE__ */ g("div", {
		className: Me,
		"aria-disabled": w,
		children: W
	}), n[148] = w, n[149] = E, n[150] = W, n[151] = Me, n[152] = at) : at = n[152];
	let ot;
	n[153] !== Je || n[154] !== Ze || n[155] !== et || n[156] !== nt || n[157] !== rt || n[158] !== it || n[159] !== at ? (ot = /* @__PURE__ */ g("div", {
		className: Lf.sliderWrapper,
		style: Je,
		children: [
			Ze,
			et,
			nt,
			rt,
			it,
			at
		]
	}), n[153] = Je, n[154] = Ze, n[155] = et, n[156] = nt, n[157] = rt, n[158] = it, n[159] = at, n[160] = ot) : ot = n[160];
	let st;
	return n[161] !== Re || n[162] !== Ge || n[163] !== ot ? (st = /* @__PURE__ */ g("div", {
		className: Lf.root,
		children: [
			Re,
			Ge,
			ot
		]
	}), n[161] = Re, n[162] = Ge, n[163] = ot, n[164] = st) : st = n[164], st;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/switch.BWByas7M.js
Uf.displayName = "DSSlider", d();
var Wf = {
	root: "ds-switch_root_gdcld_1",
	rootLabelRight: "ds-switch_root--label-right_gdcld_40",
	rootStretched: "ds-switch_root--stretched_gdcld_43",
	switch: "ds-switch_switch_gdcld_48",
	loader: "ds-switch_loader_gdcld_53",
	thumb: "ds-switch_thumb_gdcld_111",
	rootChecked: "ds-switch_root--checked_gdcld_126"
}, Gf = s((e, t) => {
	let n = D.c(38), r, i, a, o, s, c, l, u, d, f;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], f = n[10]) : ({children: i, aria: r, alignLabel: c, checked: l, className: a, disabled: u, loading: d, stretched: f, onClick: o, ...s} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = f);
	let p = c === void 0 ? "left" : c, m = l === void 0 ? !1 : l, h = u === void 0 ? !1 : u, _ = d === void 0 ? !1 : d, v = f === void 0 ? !1 : f, y = m === !0, b = v === !0, x = p === "right", S;
	n[11] !== a || n[12] !== y || n[13] !== b || n[14] !== x ? (S = M(Wf.root, a, {
		[Wf.rootChecked]: y,
		[Wf.rootStretched]: b,
		[Wf.rootLabelRight]: x
	}), n[11] = a, n[12] = y, n[13] = b, n[14] = x, n[15] = S) : S = n[15];
	let C = S, w;
	n[16] !== h || n[17] !== _ || n[18] !== o ? (w = (e) => {
		if (h || _) {
			e.preventDefault();
			return;
		}
		o && o(e);
	}, n[16] = h, n[17] = _, n[18] = o, n[19] = w) : w = n[19];
	let T = w, E = h || _, O;
	n[20] === i ? O = n[21] : (O = /* @__PURE__ */ g("span", { children: i }), n[20] = i, n[21] = O);
	let k;
	n[22] === _ ? k = n[23] : (k = !_ && /* @__PURE__ */ g("span", {
		className: Wf.switch,
		children: /* @__PURE__ */ g("span", {
			className: Wf.thumb,
			children: /* @__PURE__ */ g(oe, {
				name: "check",
				"aria-hidden": "true"
			})
		})
	}), n[22] = _, n[23] = k);
	let A;
	n[24] === _ ? A = n[25] : (A = _ && /* @__PURE__ */ g("span", {
		className: Wf.loader,
		children: /* @__PURE__ */ g(Ma, { aria: { "aria-label": "Loading state" } })
	}), n[24] = _, n[25] = A);
	let j;
	return n[26] !== r || n[27] !== m || n[28] !== T || n[29] !== _ || n[30] !== t || n[31] !== s || n[32] !== C || n[33] !== E || n[34] !== O || n[35] !== k || n[36] !== A ? (j = /* @__PURE__ */ g("button", {
		className: C,
		onClick: T,
		...r,
		...s,
		type: "button",
		role: "switch",
		"aria-checked": m,
		"aria-disabled": E,
		"aria-busy": _,
		ref: t,
		children: [
			O,
			k,
			A
		]
	}), n[26] = r, n[27] = m, n[28] = T, n[29] = _, n[30] = t, n[31] = s, n[32] = C, n[33] = E, n[34] = O, n[35] = k, n[36] = A, n[37] = j) : j = n[37], j;
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Textarea.B-Ii-p0C.js
Gf.displayName = "DSSwitch", d(), d(), d(), d(), d();
var Kf = {
	textarea: "ds-textarea_textarea_19e2t_1",
	textareaSmall: "ds-textarea_textarea--small_19e2t_9",
	textareaInvalid: "ds-textarea_textarea--invalid_19e2t_121",
	textareaResizeAuto: "ds-textarea_textarea--resize-auto_19e2t_145",
	root: "ds-textarea_root_19e2t_155",
	hint: "ds-textarea_hint_19e2t_155",
	labelWrapper: "ds-textarea_label-wrapper_19e2t_155",
	label: "ds-textarea_label_19e2t_155",
	labelDisabled: "ds-textarea_label--disabled_19e2t_295",
	labelWrapperHidden: "ds-textarea_label-wrapper--hidden_19e2t_307",
	feedback: "ds-textarea_feedback_19e2t_335",
	footer: "ds-textarea_footer_19e2t_339",
	footerHasSystemFeedback: "ds-textarea_footer--has-system-feedback_19e2t_344",
	charCount: "ds-textarea_char-count_19e2t_353",
	charCountAnnouncer: "ds-textarea_char-count-announcer_19e2t_366"
}, qf = ({ id: e, label: t, hideLabel: n, popoverContent: r }) => {
	if (!e) throw Error(L("DSTextarea", "A unique \"id\" prop is required. Please add a unique \"id\" prop to the DSTextarea component."));
	if (!t) throw Error(L("DSTextarea", "A label is always required for a11y reasons. Please add a descriptive \"label\" prop to the DSTextarea component. If you don't want to display a label, set hideLabel={true}."));
	n && r && console.warn(L("DSTextarea", "Using a popover when hideLabel is set to true is not supported."));
}, Jf = s(({ id: e, label: t, charsLimitText: n = "Character limit reached", charsRemainingText: r = "Characters remaining:", className: a, defaultValue: s, disabled: l = !1, hint: u, hideLabel: d = !1, invalid: f = !1, maxLength: m, popoverContent: h, popoverInfoButtonProps: _, readonly: v = !1, required: y = !1, resize: b = "vertical", size: x = "medium", systemFeedback: S, value: C, wrapperClassName: w, onChange: T, onInput: E, ...D }, O) => {
	process.env.NODE_ENV !== "production" && qf({
		id: e,
		label: t,
		hideLabel: Aa(d),
		popoverContent: h
	});
	let [k, A] = c(s || ""), [j, N] = c(0), [P, F] = c(0), [L, R] = c("off"), [z, B] = c(S), [V, H] = c(f), U = C !== void 0, W = U ? C : k, G = p(null), ee = m !== void 0 && m > 0, K = V && z, te = (e) => {
		G.current = e, typeof O == "function" ? O(e) : O && (O.current = e);
	}, ne = Aa(d);
	o(() => {
		if (!m || m <= 0) return;
		j >= m * .8 ? R("polite") : R("off");
		let e = setTimeout(() => {
			F(m - j || 0);
		}, 1e3);
		return () => clearTimeout(e);
	}, [j]), o(() => {
		A(W || ""), J(), m && m > 0 && (N(W.toString().length || 0), F(m - W.toString().length || 0));
	}, [C]), o(() => {
		f && S ? (B(S), H(f)) : !f && m && m >= 0 && j >= m ? (H(!0), B(n)) : (B(S), H(f));
	}, [
		f,
		V,
		S,
		j
	]), o(() => {
		if (b === "auto") return J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
	}, [b, G.current]);
	let re = M(Kf.root, w), ie = M(Kf.textarea, a, {
		[Kf.textareaSmall]: x === "small",
		[Kf.textareaInvalid]: V,
		[Kf.textareaResizeAuto]: b === "auto"
	}), ae = M(Kf.label, { [Kf.labelDisabled]: l }), oe = M(Kf.labelWrapper, { [Kf.labelWrapperHidden]: ne }), se = M(Kf.footer, { [Kf.footerHasSystemFeedback]: K }), ce = `${e}-label`, q = `${e}-feedback`, le = `${e}-hint`, ue = `${e}-char-count-announcer`, de = u ? ` ${le}` : "", J = () => {
		if (G.current && b === "auto") {
			G.current.style.height = "auto";
			let e = I(G.current.scrollHeight), t = I(2);
			G.current.style.height = `${e + t}rem`;
		}
	}, Y = () => {
		let e = [];
		return m && m > 0 && e.push(ue), f && S && e.push(q), e.length > 0 ? e.join(" ") : void 0;
	}, X = (e) => {
		E && E(e), m && m > 0 && N(G.current?.value.length || 0), J();
	}, fe = (e) => {
		T && T(e), U || A(e.target.value);
	};
	return /* @__PURE__ */ g("div", {
		className: re,
		children: [
			/* @__PURE__ */ g("div", {
				className: oe,
				children: [/* @__PURE__ */ g("label", {
					className: ae,
					id: ce,
					htmlFor: e,
					children: [t, y && /* @__PURE__ */ g(eo, {})]
				}), h && !ne && /* @__PURE__ */ g(so, {
					placement: "top",
					defaultAnchorButtonProps: _,
					children: h
				})]
			}),
			u && /* @__PURE__ */ g("div", {
				className: Kf.hint,
				id: le,
				children: u
			}),
			/* @__PURE__ */ g("textarea", {
				className: ie,
				id: e,
				...D,
				ref: te,
				"aria-labelledby": `${ce}${de}`,
				"aria-describedby": Y(),
				"aria-invalid": f,
				"aria-disabled": v,
				maxLength: m,
				readOnly: v,
				required: y,
				disabled: l,
				value: W,
				defaultValue: void 0,
				rows: void 0,
				cols: void 0,
				onChange: fe,
				onInput: X
			}),
			ee || K ? /* @__PURE__ */ g("div", {
				className: se,
				children: [K && /* @__PURE__ */ g(Ya, {
					className: Kf.feedback,
					message: z,
					variant: "error",
					id: q
				}), ee && /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ g("div", {
					className: Kf.charCount,
					"aria-hidden": "true",
					children: [
						j,
						"/",
						m
					]
				}), /* @__PURE__ */ g("div", {
					className: Kf.charCountAnnouncer,
					id: ue,
					"aria-live": L,
					"aria-atomic": "true",
					children: [
						r,
						" ",
						P
					]
				})] })]
			}) : null
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@stihl-design-system+components@1.0.0-RC.45_@floating-ui+react@0.27.19_react-dom@19.2.4_7a48f485f0cdec9f79451836d4f4d087/node_modules/@stihl-design-system/components/chunks/Toast.B7_VJE8V.js
Jf.displayName = "DSTextarea", d(), d();
var Yf = {
	root: "ds-toast_root_1k9pu_5",
	rootClosing: "ds-toast_root--closing_1k9pu_15",
	rootSuccess: "ds-toast_root--success_1k9pu_66",
	rootInfo: "ds-toast_root--info_1k9pu_70",
	rootWarning: "ds-toast_root--warning_1k9pu_74",
	content: "ds-toast_content_1k9pu_79",
	contentHideIcon: "ds-toast_content--hide-icon_1k9pu_86",
	icon: "ds-toast_icon_1k9pu_90",
	message: "ds-toast_message_1k9pu_94"
}, Xf = {
	success: "circle-check-colored",
	warning: "triangle-exclamationmark-colored",
	info: "circle-info-colored"
}, Zf = s((e, t) => {
	let n = D.c(44), r, i, a, o, s, c, l, u, d;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9]) : ({message: a, className: r, closeButtonProps: i, hideIcon: u, variant: d, onClick: o, onMouseEnter: s, onMouseLeave: c, ...l} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d);
	let f = u === void 0 ? !1 : u, p = d === void 0 ? "info" : d, m;
	n[10] === i ? m = n[11] : (m = i || {}, n[10] = i, n[11] = m);
	let h, _;
	n[12] === m ? (h = n[13], _ = n[14]) : ({label: _, ...h} = m, n[12] = m, n[13] = h, n[14] = _);
	let v = _ === void 0 ? "Close toast" : _, y = p === "success", b = p === "warning", x = p === "info", S;
	n[15] !== r || n[16] !== y || n[17] !== b || n[18] !== x ? (S = M(Yf.root, r, {
		[Yf.rootSuccess]: y,
		[Yf.rootWarning]: b,
		[Yf.rootInfo]: x
	}), n[15] = r, n[16] = y, n[17] = b, n[18] = x, n[19] = S) : S = n[19];
	let C = S, w;
	n[20] === f ? w = n[21] : (w = M(Yf.content, { [Yf.contentHideIcon]: f }), n[20] = f, n[21] = w);
	let T = w, E;
	n[22] !== f || n[23] !== p ? (E = !f && /* @__PURE__ */ g(oe, {
		name: Xf[p],
		className: Yf.icon,
		"aria-hidden": "true"
	}), n[22] = f, n[23] = p, n[24] = E) : E = n[24];
	let O;
	n[25] === a ? O = n[26] : (O = /* @__PURE__ */ g("div", {
		className: Yf.message,
		children: a
	}), n[25] = a, n[26] = O);
	let k;
	n[27] !== v || n[28] !== o || n[29] !== h ? (k = /* @__PURE__ */ g(Fa, {
		...h,
		hideLabel: !0,
		iconName: "cross",
		size: "small",
		variant: "ghost",
		onClick: o,
		type: "button",
		children: v
	}), n[27] = v, n[28] = o, n[29] = h, n[30] = k) : k = n[30];
	let A;
	n[31] !== T || n[32] !== E || n[33] !== O || n[34] !== k ? (A = /* @__PURE__ */ g("div", {
		className: T,
		children: [
			E,
			O,
			k
		]
	}), n[31] = T, n[32] = E, n[33] = O, n[34] = k, n[35] = A) : A = n[35];
	let j;
	return n[36] !== a || n[37] !== s || n[38] !== c || n[39] !== t || n[40] !== l || n[41] !== C || n[42] !== A ? (j = /* @__PURE__ */ g("aside", {
		className: C,
		ref: t,
		popover: "manual",
		"data-ds-toast": !0,
		onMouseEnter: s,
		onMouseLeave: c,
		"aria-label": a,
		...l,
		children: A
	}), n[36] = a, n[37] = s, n[38] = c, n[39] = t, n[40] = l, n[41] = C, n[42] = A, n[43] = j) : j = n[43], j;
});
Zf.displayName = "DSToast", d(), r(void 0);
//#endregion
export { id as a, ya as c, Zu as i, ue as l, mf as n, Au as o, af as r, Ua as s, Af as t };

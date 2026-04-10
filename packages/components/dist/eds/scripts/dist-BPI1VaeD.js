import { o as e, t } from "./rolldown-runtime-Ctdjzu3q.js";
import { Ct as n, Tt as r, bt as i, ft as a, ht as o, vt as s, yt as c } from "./react-w7ldCLEn.js";
//#region ../../node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js
var l = /* @__PURE__ */ t(((e, t) => {
	var n = "Expected a function", r = NaN, i = "[object Symbol]", a = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt, u = typeof global == "object" && global && global.Object === Object && global, d = typeof self == "object" && self && self.Object === Object && self, f = u || d || Function("return this")(), p = Object.prototype.toString, m = Math.max, h = Math.min, g = function() {
		return f.Date.now();
	};
	function _(e, t, r) {
		var i, a, o, s, c, l, u = 0, d = !1, f = !1, p = !0;
		if (typeof e != "function") throw TypeError(n);
		t = x(t) || 0, v(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? m(x(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
		function _(t) {
			var n = i, r = a;
			return i = a = void 0, u = t, s = e.apply(r, n), s;
		}
		function y(e) {
			return u = e, c = setTimeout(C, t), d ? _(e) : s;
		}
		function b(e) {
			var n = e - l, r = e - u, i = t - n;
			return f ? h(i, o - r) : i;
		}
		function S(e) {
			var n = e - l, r = e - u;
			return l === void 0 || n >= t || n < 0 || f && r >= o;
		}
		function C() {
			var e = g();
			if (S(e)) return w(e);
			c = setTimeout(C, b(e));
		}
		function w(e) {
			return c = void 0, p && i ? _(e) : (i = a = void 0, s);
		}
		function T() {
			c !== void 0 && clearTimeout(c), u = 0, i = l = a = c = void 0;
		}
		function E() {
			return c === void 0 ? s : w(g());
		}
		function D() {
			var e = g(), n = S(e);
			if (i = arguments, a = this, l = e, n) {
				if (c === void 0) return y(l);
				if (f) return c = setTimeout(C, t), _(l);
			}
			return c === void 0 && (c = setTimeout(C, t)), s;
		}
		return D.cancel = T, D.flush = E, D;
	}
	function v(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function y(e) {
		return !!e && typeof e == "object";
	}
	function b(e) {
		return typeof e == "symbol" || y(e) && p.call(e) == i;
	}
	function x(e) {
		if (typeof e == "number") return e;
		if (b(e)) return r;
		if (v(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = v(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(a, "");
		var n = s.test(e);
		return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? r : +e;
	}
	t.exports = _;
}));
//#endregion
//#region ../../node_modules/.pnpm/usehooks-ts@3.1.1_react@19.2.4/node_modules/usehooks-ts/dist/index.js
a();
var u = /* @__PURE__ */ e(l(), 1), d = typeof window < "u" ? c : r;
function f(e, t, n, i) {
	let a = o(t);
	d(() => {
		a.current = t;
	}, [t]), r(() => {
		let t = n?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let r = (e) => {
			a.current(e);
		};
		return t.addEventListener(e, r, i), () => {
			t.removeEventListener(e, r, i);
		};
	}, [
		e,
		n,
		i
	]);
}
function p(e) {
	let t = o(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return d(() => {
		t.current = e;
	}, [e]), n((...e) => t.current?.call(t, ...e), [t]);
}
var m = typeof window > "u";
function h(e, t, a = {}) {
	let { initializeWithValue: o = !0 } = a, s = n((e) => a.serializer ? a.serializer(e) : JSON.stringify(e), [a]), c = n((e) => {
		if (a.deserializer) return a.deserializer(e);
		if (e === "undefined") return;
		let n = t instanceof Function ? t() : t, r;
		try {
			r = JSON.parse(e);
		} catch (e) {
			return console.error("Error parsing JSON:", e), n;
		}
		return r;
	}, [a, t]), l = n(() => {
		let n = t instanceof Function ? t() : t;
		if (m) return n;
		try {
			let t = window.localStorage.getItem(e);
			return t ? c(t) : n;
		} catch (t) {
			return console.warn(`Error reading localStorage key \u201C${e}\u201D:`, t), n;
		}
	}, [
		t,
		e,
		c
	]), [u, d] = i(() => o ? l() : t instanceof Function ? t() : t), h = p((t) => {
		m && console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);
		try {
			let n = t instanceof Function ? t(l()) : t;
			window.localStorage.setItem(e, s(n)), d(n), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
		} catch (t) {
			console.warn(`Error setting localStorage key \u201C${e}\u201D:`, t);
		}
	}), g = p(() => {
		m && console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);
		let n = t instanceof Function ? t() : t;
		window.localStorage.removeItem(e), d(n), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
	});
	r(() => {
		d(l());
	}, [e]);
	let _ = n((t) => {
		t.key && t.key !== e || d(l());
	}, [e, l]);
	return f("storage", _), f("local-storage", _), [
		u,
		h,
		g
	];
}
var g = typeof window > "u";
function _(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
	let r = (e) => g ? t : window.matchMedia(e).matches, [a, o] = i(() => n ? r(e) : t);
	function s() {
		o(r(e));
	}
	return d(() => {
		let t = window.matchMedia(e);
		return s(), t.addListener ? t.addListener(s) : t.addEventListener("change", s), () => {
			t.removeListener ? t.removeListener(s) : t.removeEventListener("change", s);
		};
	}, [e]), a;
}
function v(e) {
	let t = o(e);
	t.current = e, r(() => () => {
		t.current();
	}, []);
}
function y(e, t = 500, n) {
	let i = o();
	v(() => {
		i.current && i.current.cancel();
	});
	let a = s(() => {
		let r = (0, u.default)(e, t, n), a = (...e) => r(...e);
		return a.cancel = () => {
			r.cancel();
		}, a.isPending = () => !!i.current, a.flush = () => r.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return r(() => {
		i.current = (0, u.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), a;
}
function b(e, t, n) {
	let r = n?.equalityFn ?? ((e, t) => e === t), a = e instanceof Function ? e() : e, [s, c] = i(a), l = o(a), u = y(c, t, n);
	return r(l.current, a) || (u(a), l.current = a), [s, u];
}
function x({ threshold: e = 0, root: t = null, rootMargin: n = "0%", freezeOnceVisible: a = !1, initialIsIntersecting: s = !1, onChange: c } = {}) {
	let [l, u] = i(null), [d, f] = i(() => ({
		isIntersecting: s,
		entry: void 0
	})), p = o();
	p.current = c;
	let m = d.entry?.isIntersecting && a;
	r(() => {
		if (!l || !("IntersectionObserver" in window) || m) return;
		let r, i = new IntersectionObserver((e) => {
			let t = Array.isArray(i.thresholds) ? i.thresholds : [i.thresholds];
			e.forEach((e) => {
				let n = e.isIntersecting && t.some((t) => e.intersectionRatio >= t);
				f({
					isIntersecting: n,
					entry: e
				}), p.current && p.current(n, e), n && a && r && (r(), r = void 0);
			});
		}, {
			threshold: e,
			root: t,
			rootMargin: n
		});
		return i.observe(l), () => {
			i.disconnect();
		};
	}, [
		l,
		JSON.stringify(e),
		t,
		n,
		m,
		a
	]);
	let h = o(null);
	r(() => {
		!l && d.entry?.target && !a && !m && h.current !== d.entry.target && (h.current = d.entry.target, f({
			isIntersecting: s,
			entry: void 0
		}));
	}, [
		l,
		d.entry,
		a,
		m,
		s
	]);
	let g = [
		u,
		!!d.isIntersecting,
		d.entry
	];
	return g.ref = g[0], g.isIntersecting = g[1], g.entry = g[2], g;
}
function S() {
	let e = o(!1);
	return r(() => (e.current = !0, () => {
		e.current = !1;
	}), []), n(() => e.current, []);
}
var C = {
	width: void 0,
	height: void 0
};
function w(e) {
	let { ref: t, box: n = "content-box" } = e, [{ width: a, height: s }, c] = i(C), l = S(), u = o({ ...C }), d = o(void 0);
	return d.current = e.onResize, r(() => {
		if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
		let e = new ResizeObserver(([e]) => {
			let t = n === "border-box" ? "borderBoxSize" : n === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", r = T(e, t, "inlineSize"), i = T(e, t, "blockSize");
			if (u.current.width !== r || u.current.height !== i) {
				let e = {
					width: r,
					height: i
				};
				u.current.width = r, u.current.height = i, d.current ? d.current(e) : l() && c(e);
			}
		});
		return e.observe(t.current, { box: n }), () => {
			e.disconnect();
		};
	}, [
		n,
		t,
		l
	]), {
		width: a,
		height: s
	};
}
function T(e, t, n) {
	return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : t === "contentBoxSize" ? e.contentRect[n === "inlineSize" ? "width" : "height"] : void 0;
}
var E = typeof window > "u";
function D(e, t, a = {}) {
	let { initializeWithValue: o = !0 } = a, s = n((e) => a.serializer ? a.serializer(e) : JSON.stringify(e), [a]), c = n((e) => {
		if (a.deserializer) return a.deserializer(e);
		if (e === "undefined") return;
		let n = t instanceof Function ? t() : t, r;
		try {
			r = JSON.parse(e);
		} catch (e) {
			return console.error("Error parsing JSON:", e), n;
		}
		return r;
	}, [a, t]), l = n(() => {
		let n = t instanceof Function ? t() : t;
		if (E) return n;
		try {
			let t = window.sessionStorage.getItem(e);
			return t ? c(t) : n;
		} catch (t) {
			return console.warn(`Error reading sessionStorage key \u201C${e}\u201D:`, t), n;
		}
	}, [
		t,
		e,
		c
	]), [u, d] = i(() => o ? l() : t instanceof Function ? t() : t), m = p((t) => {
		E && console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);
		try {
			let n = t instanceof Function ? t(l()) : t;
			window.sessionStorage.setItem(e, s(n)), d(n), window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
		} catch (t) {
			console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`, t);
		}
	}), h = p(() => {
		E && console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);
		let n = t instanceof Function ? t() : t;
		window.sessionStorage.removeItem(e), d(n), window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
	});
	r(() => {
		d(l());
	}, [e]);
	let g = n((t) => {
		t.key && t.key !== e || d(l());
	}, [e, l]);
	return f("storage", g), f("session-storage", g), [
		u,
		m,
		h
	];
}
//#endregion
export { _ as a, h as i, b as n, w as o, x as r, D as s, y as t };

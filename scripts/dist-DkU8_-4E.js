import { o as e, t } from "./rolldown-runtime-Ctdjzu3q.js";
import { Et as n, bt as r, gt as i, pt as a, wt as o, xt as s, yt as c } from "./react-DLNUXPF9.js";
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
var u = /* @__PURE__ */ e(l(), 1), d = typeof window < "u" ? r : n;
function f(e, t, r, a) {
	let o = i(t);
	d(() => {
		o.current = t;
	}, [t]), n(() => {
		let t = r?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let n = (e) => {
			o.current(e);
		};
		return t.addEventListener(e, n, a), () => {
			t.removeEventListener(e, n, a);
		};
	}, [
		e,
		r,
		a
	]);
}
function p(e) {
	let t = i(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return d(() => {
		t.current = e;
	}, [e]), o((...e) => t.current?.call(t, ...e), [t]);
}
var m = typeof window > "u";
function h(e, t, r = {}) {
	let { initializeWithValue: i = !0 } = r, a = o((e) => r.serializer ? r.serializer(e) : JSON.stringify(e), [r]), c = o((e) => {
		if (r.deserializer) return r.deserializer(e);
		if (e === "undefined") return;
		let n = t instanceof Function ? t() : t, i;
		try {
			i = JSON.parse(e);
		} catch (e) {
			return console.error("Error parsing JSON:", e), n;
		}
		return i;
	}, [r, t]), l = o(() => {
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
	]), [u, d] = s(() => i ? l() : t instanceof Function ? t() : t), h = p((t) => {
		m && console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);
		try {
			let n = t instanceof Function ? t(l()) : t;
			window.localStorage.setItem(e, a(n)), d(n), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
		} catch (t) {
			console.warn(`Error setting localStorage key \u201C${e}\u201D:`, t);
		}
	}), g = p(() => {
		m && console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);
		let n = t instanceof Function ? t() : t;
		window.localStorage.removeItem(e), d(n), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
	});
	n(() => {
		d(l());
	}, [e]);
	let _ = o((t) => {
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
	let r = (e) => g ? t : window.matchMedia(e).matches, [i, a] = s(() => n ? r(e) : t);
	function o() {
		a(r(e));
	}
	return d(() => {
		let t = window.matchMedia(e);
		return o(), t.addListener ? t.addListener(o) : t.addEventListener("change", o), () => {
			t.removeListener ? t.removeListener(o) : t.removeEventListener("change", o);
		};
	}, [e]), i;
}
function v(e) {
	let t = i(e);
	t.current = e, n(() => () => {
		t.current();
	}, []);
}
function y(e, t = 500, r) {
	let a = i();
	v(() => {
		a.current && a.current.cancel();
	});
	let o = c(() => {
		let n = (0, u.default)(e, t, r), i = (...e) => n(...e);
		return i.cancel = () => {
			n.cancel();
		}, i.isPending = () => !!a.current, i.flush = () => n.flush(), i;
	}, [
		e,
		t,
		r
	]);
	return n(() => {
		a.current = (0, u.default)(e, t, r);
	}, [
		e,
		t,
		r
	]), o;
}
function b(e, t, n) {
	let r = n?.equalityFn ?? ((e, t) => e === t), a = e instanceof Function ? e() : e, [o, c] = s(a), l = i(a), u = y(c, t, n);
	return r(l.current, a) || (u(a), l.current = a), [o, u];
}
function x({ threshold: e = 0, root: t = null, rootMargin: r = "0%", freezeOnceVisible: a = !1, initialIsIntersecting: o = !1, onChange: c } = {}) {
	let [l, u] = s(null), [d, f] = s(() => ({
		isIntersecting: o,
		entry: void 0
	})), p = i();
	p.current = c;
	let m = d.entry?.isIntersecting && a;
	n(() => {
		if (!l || !("IntersectionObserver" in window) || m) return;
		let n, i = new IntersectionObserver((e) => {
			let t = Array.isArray(i.thresholds) ? i.thresholds : [i.thresholds];
			e.forEach((e) => {
				let r = e.isIntersecting && t.some((t) => e.intersectionRatio >= t);
				f({
					isIntersecting: r,
					entry: e
				}), p.current && p.current(r, e), r && a && n && (n(), n = void 0);
			});
		}, {
			threshold: e,
			root: t,
			rootMargin: r
		});
		return i.observe(l), () => {
			i.disconnect();
		};
	}, [
		l,
		JSON.stringify(e),
		t,
		r,
		m,
		a
	]);
	let h = i(null);
	n(() => {
		!l && d.entry?.target && !a && !m && h.current !== d.entry.target && (h.current = d.entry.target, f({
			isIntersecting: o,
			entry: void 0
		}));
	}, [
		l,
		d.entry,
		a,
		m,
		o
	]);
	let g = [
		u,
		!!d.isIntersecting,
		d.entry
	];
	return g.ref = g[0], g.isIntersecting = g[1], g.entry = g[2], g;
}
function S() {
	let e = i(!1);
	return n(() => (e.current = !0, () => {
		e.current = !1;
	}), []), o(() => e.current, []);
}
var C = {
	width: void 0,
	height: void 0
};
function w(e) {
	let { ref: t, box: r = "content-box" } = e, [{ width: a, height: o }, c] = s(C), l = S(), u = i({ ...C }), d = i(void 0);
	return d.current = e.onResize, n(() => {
		if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
		let e = new ResizeObserver(([e]) => {
			let t = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", n = T(e, t, "inlineSize"), i = T(e, t, "blockSize");
			if (u.current.width !== n || u.current.height !== i) {
				let e = {
					width: n,
					height: i
				};
				u.current.width = n, u.current.height = i, d.current ? d.current(e) : l() && c(e);
			}
		});
		return e.observe(t.current, { box: r }), () => {
			e.disconnect();
		};
	}, [
		r,
		t,
		l
	]), {
		width: a,
		height: o
	};
}
function T(e, t, n) {
	return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : t === "contentBoxSize" ? e.contentRect[n === "inlineSize" ? "width" : "height"] : void 0;
}
var E = typeof window > "u";
function D(e = {}) {
	let { autoLock: t = !0, lockTarget: n, widthReflow: r = !0 } = e, [a, o] = s(!1), c = i(null), l = i(null), u = () => {
		if (c.current) {
			let { overflow: e, paddingRight: t } = c.current.style;
			if (l.current = {
				overflow: e,
				paddingRight: t
			}, r) {
				let e = c.current === document.body ? window.innerWidth : c.current.offsetWidth, t = parseInt(window.getComputedStyle(c.current).paddingRight, 10) || 0, n = e - c.current.scrollWidth;
				c.current.style.paddingRight = `${n + t}px`;
			}
			c.current.style.overflow = "hidden", o(!0);
		}
	}, f = () => {
		c.current && l.current && (c.current.style.overflow = l.current.overflow, r && (c.current.style.paddingRight = l.current.paddingRight)), o(!1);
	};
	return d(() => {
		if (!E) return n && (c.current = typeof n == "string" ? document.querySelector(n) : n), c.current ||= document.body, t && u(), () => {
			f();
		};
	}, [
		t,
		n,
		r
	]), {
		isLocked: a,
		lock: u,
		unlock: f
	};
}
var O = typeof window > "u";
function k(e, t, r = {}) {
	let { initializeWithValue: i = !0 } = r, a = o((e) => r.serializer ? r.serializer(e) : JSON.stringify(e), [r]), c = o((e) => {
		if (r.deserializer) return r.deserializer(e);
		if (e === "undefined") return;
		let n = t instanceof Function ? t() : t, i;
		try {
			i = JSON.parse(e);
		} catch (e) {
			return console.error("Error parsing JSON:", e), n;
		}
		return i;
	}, [r, t]), l = o(() => {
		let n = t instanceof Function ? t() : t;
		if (O) return n;
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
	]), [u, d] = s(() => i ? l() : t instanceof Function ? t() : t), m = p((t) => {
		O && console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);
		try {
			let n = t instanceof Function ? t(l()) : t;
			window.sessionStorage.setItem(e, a(n)), d(n), window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
		} catch (t) {
			console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`, t);
		}
	}), h = p(() => {
		O && console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);
		let n = t instanceof Function ? t() : t;
		window.sessionStorage.removeItem(e), d(n), window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
	});
	n(() => {
		d(l());
	}, [e]);
	let g = o((t) => {
		t.key && t.key !== e || d(l());
	}, [e, l]);
	return f("storage", g), f("session-storage", g), [
		u,
		m,
		h
	];
}
//#endregion
export { _ as a, k as c, h as i, b as n, w as o, x as r, D as s, y as t };

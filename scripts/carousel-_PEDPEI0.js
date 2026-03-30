import { r as e, v as t } from "./utils-kL9Kd3j1.js";
import { Dt as n, Et as r, M as i, Tt as a, gt as o, j as s, pt as c, rt as l, wt as u, xt as d } from "./react-DLNUXPF9.js";
import { t as f } from "./useTranslation-Cl_kknJx.js";
//#region ../../node_modules/.pnpm/embla-carousel-reactive-utils@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function p(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function m(e) {
	return p(e) || Array.isArray(e);
}
function h() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function g(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !m(r) || !m(i) ? r === i : g(r, i);
	});
}
function _(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function v(e, t) {
	if (e.length !== t.length) return !1;
	let n = _(e), r = _(t);
	return n.every((e, t) => {
		let n = r[t];
		return g(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function y(e) {
	return typeof e == "number";
}
function b(e) {
	return typeof e == "string";
}
function x(e) {
	return typeof e == "boolean";
}
function S(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function C(e) {
	return Math.abs(e);
}
function w(e) {
	return Math.sign(e);
}
function T(e, t) {
	return C(e - t);
}
function E(e, t) {
	return e === 0 || t === 0 || C(e) <= C(t) ? 0 : C(T(C(e), C(t)) / e);
}
function D(e) {
	return Math.round(e * 100) / 100;
}
function O(e) {
	return N(e).map(Number);
}
function k(e) {
	return e[A(e)];
}
function A(e) {
	return Math.max(0, e.length - 1);
}
function j(e, t) {
	return t === A(e);
}
function M(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function N(e) {
	return Object.keys(e);
}
function P(e, t) {
	return [e, t].reduce((e, t) => (N(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = S(r) && S(i) ? P(r, i) : i;
	}), e), {});
}
function F(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function ee(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return b(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function I() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function te(e, t, n, r) {
	let i = I(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function L(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function R(e = 0, t = 0) {
	let n = C(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function z(e, t, n) {
	let { constrain: r } = R(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? C((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return z(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function B(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, S = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], D = { passive: !1 }, O = I(), k = I(), A = R(50, 225).constrain(p.measure(20)), j = {
		mouse: 300,
		touch: 400
	}, M = {
		mouse: 500,
		touch: 600
	}, N = m ? 43 : 25, P = !1, ee = 0, te = 0, L = !1, z = !1, B = !1, V = !1;
	function ne(e) {
		if (!v) return;
		function n(t) {
			(x(v) || v(e, t)) && se(t);
		}
		let r = t;
		O.add(r, "dragstart", (e) => e.preventDefault(), D).add(r, "touchmove", () => void 0, D).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", U).add(r, "contextmenu", U).add(r, "click", le, !0);
	}
	function re() {
		O.clear(), k.clear();
	}
	function ie() {
		let e = V ? n : t;
		k.add(e, "touchmove", ce, D).add(e, "touchend", U).add(e, "mousemove", ce, D).add(e, "mouseup", U);
	}
	function ae(e) {
		let t = e.nodeName || "";
		return S.includes(t);
	}
	function H() {
		return (m ? M : j)[V ? "mouse" : "touch"];
	}
	function oe(e, t) {
		let n = d.add(w(e) * -1), r = u.byDistance(e, !m).distance;
		return m || C(e) < A ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function se(e) {
		let t = F(e, r);
		V = t, B = m && t && !e.buttons && P, P = T(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (ae(e.target) || (L = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), ie(), ee = a.readPoint(e), te = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function ce(e) {
		if (!F(e, r) && e.touches.length >= 2) return U(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = T(t, ee), c = T(n, te);
		if (!z && !V && (!e.cancelable || (z = o > c, !z))) return U(e);
		let u = a.pointerMove(e);
		o > h && (B = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function U(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * H(), r = oe(b(n), t), i = E(n, r), o = N - 10 * i, s = _ + i / 50;
		z = !1, L = !1, k.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), V = !1, f.emit("pointerUp");
	}
	function le(e) {
		B &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function ue() {
		return L;
	}
	return {
		init: ne,
		destroy: re,
		pointerDown: ue
	};
}
function V(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (F(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && C(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function ne() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function re(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function ie(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (C(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(x(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function ae(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = w(a), d = u, x;
	}
	function p() {
		return C(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function H(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = R(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = C(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && C(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function oe(e, t, n, r, i) {
	let a = R(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return T(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = k(o);
		return R(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = j(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function se(e, t, n) {
	let r = t[0];
	return { limit: R(n ? r - e : k(t), r) };
}
function ce(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = R(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 ? a(n.get()) : !1;
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function U(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function le(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => k(e)[o] - e[0][a]).map(C);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -C(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function ue(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = j(n, t);
			return r ? M(k(n[0]) + 1) : i ? M(A(a) - k(n)[0] + 1, k(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function de(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => C(e) - C(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => C(e.diff) - C(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => w(e) === r);
		return a.length ? c(a) : k(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function fe(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function pe(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			y(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(x(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function W(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return y(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function me(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = D(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function he(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = O(i), d = O(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: W(-1),
				translate: me(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		return g(m(u, t - o[0] - 1), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function ge(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (x(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function _e(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return N(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function ve(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return C(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(k(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = j(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(C);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function ye(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = y(n);
	function p(e, t) {
		return O(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? O(e).reduce((n, f, p) => {
			let m = k(n) || 0, h = m === 0, g = f === A(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = C(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function be(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = ne(), w = C.measure(t), T = n.map(C.measure), E = L(c, l), D = E.measureSize(w), j = re(D), M = ee(s, D), N = !d && !!v, { slideSizes: P, slideSizesWithGaps: F, startGap: R, endGap: be } = ve(E, w, T, n, d || !!v, i), xe = ye(E, D, g, d, w, T, R, be, 2), { snaps: Se, snapsAligned: Ce } = le(E, M, w, T, xe), G = -k(Se) + k(F), { snapsContained: K, scrollContainLimit: we } = oe(D, G, Ce, v, 2), q = N ? K : Ce, { limit: J } = se(G, q, d), Y = z(A(q), u, d), Te = Y.clone(), Ee = O(n), De = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, Oe = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, ke = te(r, i, () => De(Be), (e) => Oe(Be, e)), Ae = .68, X = q[Y.get()], je = W(X), Me = W(X), Z = W(X), Q = W(X), $ = ae(je, Z, Me, Q, f, Ae), Ne = de(d, q, G, J, Q), Pe = fe(ke, Y, Te, $, Ne, Q, o), Fe = U(J), Ie = I(), Le = _e(t, n, o, h), { slideRegistry: Re } = ue(N, v, q, we, xe, Ee), ze = pe(e, n, Re, Pe, $, Ie, o, S), Be = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: ke,
		axis: E,
		dragHandler: B(E, e, r, i, Q, V(E, i), je, ke, Pe, $, Ne, Y, o, j, p, m, _, Ae, x),
		eventStore: Ie,
		percentOfView: j,
		index: Y,
		indexPrevious: Te,
		limit: J,
		location: je,
		offsetLocation: Z,
		previousLocation: Me,
		options: a,
		resizeHandler: ie(t, o, i, n, E, y, C),
		scrollBody: $,
		scrollBounds: H(J, Z, Q, $, j),
		scrollLooper: ce(G, J, Z, [
			je,
			Z,
			Me,
			Q
		]),
		scrollProgress: Fe,
		scrollSnapList: q.map(Fe.get),
		scrollSnaps: q,
		scrollTarget: Ne,
		scrollTo: Pe,
		slideLooper: he(E, D, G, P, F, Se, q, Z, n),
		slideFocus: ze,
		slidesHandler: ge(t, o, b),
		slidesInView: Le,
		slideIndexes: Ee,
		slideRegistry: Re,
		slidesToScroll: xe,
		target: Q,
		translate: me(E, t)
	};
	return Be;
}
function xe() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var Se = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
	watchFocus: !0
};
function Ce(e) {
	function t(e, t) {
		return P(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, N(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => N(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function G(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function K(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = Ce(i), o = G(a), s = I(), c = xe(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = O, g = !1, _, v = l(Se, K.globalOptions), y = l(v), x = [], S, C, w;
	function T() {
		let { container: t, slides: n } = y;
		C = (b(t) ? e.querySelector(t) : t) || e.children[0];
		let r = b(n) ? C.querySelectorAll(n) : n;
		w = [].slice.call(r || C.children);
	}
	function E(t) {
		let n = be(e, C, w, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? E(Object.assign({}, t, { loop: !1 })) : n;
	}
	function D(e, t) {
		g || (v = l(v, e), y = u(v), x = t || x, T(), _ = E(y), d([v, ...x.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", O)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(H), _.eventHandler.init(H), _.resizeHandler.init(H), _.slidesHandler.init(H), _.options.loop && _.slideLooper.loop(), C.offsetParent && w.length && _.dragHandler.init(H), S = o.init(H, x)));
	}
	function O(e, t) {
		let n = L();
		k(), D(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function k() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function A() {
		g || (g = !0, s.clear(), k(), c.emit("destroy"), c.clear());
	}
	function j(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function M(e) {
		j(_.index.add(1).get(), e, -1);
	}
	function N(e) {
		j(_.index.add(-1).get(), e, 1);
	}
	function P() {
		return _.index.add(1).get() !== L();
	}
	function F() {
		return _.index.add(-1).get() !== L();
	}
	function ee() {
		return _.scrollSnapList;
	}
	function te() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function L() {
		return _.index.get();
	}
	function R() {
		return _.indexPrevious.get();
	}
	function z() {
		return _.slidesInView.get();
	}
	function B() {
		return _.slidesInView.get(!1);
	}
	function V() {
		return S;
	}
	function ne() {
		return _;
	}
	function re() {
		return e;
	}
	function ie() {
		return C;
	}
	function ae() {
		return w;
	}
	let H = {
		canScrollNext: P,
		canScrollPrev: F,
		containerNode: ie,
		internalEngine: ne,
		destroy: A,
		off: p,
		on: f,
		emit: m,
		plugins: V,
		previousScrollSnap: R,
		reInit: h,
		rootNode: re,
		scrollNext: M,
		scrollPrev: N,
		scrollProgress: te,
		scrollSnapList: ee,
		scrollTo: j,
		selectedScrollSnap: L,
		slideNodes: ae,
		slidesInView: z,
		slidesNotInView: B
	};
	return D(t, n), setTimeout(() => c.emit("init"), 0), H;
}
//#endregion
//#region ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.2.4/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
K.globalOptions = void 0, c();
function we(e = {}, t = []) {
	let n = o(e), i = o(t), [a, s] = d(), [c, l] = d(), f = u(() => {
		a && a.reInit(n.current, i.current);
	}, [a]);
	return r(() => {
		g(n.current, e) || (n.current = e, f());
	}, [e, f]), r(() => {
		v(i.current, t) || (i.current = t, f());
	}, [t, f]), r(() => {
		if (h() && c) {
			K.globalOptions = we.globalOptions;
			let e = K(c, n.current, i.current);
			return s(e), () => e.destroy();
		} else s(void 0);
	}, [c, s]), [l, a];
}
//#endregion
//#region src/components/ui/carousel.tsx
we.globalOptions = void 0, c();
var q = n(null);
function J() {
	let e = a(q);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
function Y({ orientation: t = "horizontal", opts: n, setApi: i, plugins: a, className: o, children: s, ...c }) {
	let [p, m] = we({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, a), [h, g] = d(!1), [_, v] = d(!1), { t: y } = f(), b = u((e) => {
		e && (g(e.canScrollPrev()), v(e.canScrollNext()));
	}, []), x = u(() => {
		m?.scrollPrev();
	}, [m]), S = u(() => {
		m?.scrollNext();
	}, [m]), C = u((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), x()) : e.key === "ArrowRight" && (e.preventDefault(), S());
	}, [x, S]);
	return r(() => {
		!m || !i || i(m);
	}, [m, i]), r(() => {
		if (m) return b(m), m.on("reInit", b), m.on("select", b), () => {
			m?.off("select", b);
		};
	}, [m, b]), /* @__PURE__ */ l(q.Provider, {
		value: {
			carouselRef: p,
			api: m,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: x,
			scrollNext: S,
			canScrollPrev: h,
			canScrollNext: _
		},
		children: /* @__PURE__ */ l("div", {
			onKeyDownCapture: C,
			className: e("relative", o),
			role: "region",
			"aria-roledescription": y("Carousel"),
			"data-slot": "carousel",
			...c,
			children: s
		})
	});
}
function Te({ className: t, ...n }) {
	let { carouselRef: r, orientation: i } = J();
	return /* @__PURE__ */ l("div", {
		ref: r,
		className: "overflow-visible",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ l("div", {
			className: e("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
			...n
		})
	});
}
function Ee({ className: t, fullWidth: n = !0, ...r }) {
	let { orientation: i } = J(), { t: a } = f();
	return /* @__PURE__ */ l("div", {
		role: "group",
		"aria-roledescription": a("Slide"),
		"data-slot": "carousel-item",
		className: e("min-w-0 shrink-0 grow-0", n && "w-full", i === "horizontal" ? "pl-4" : "pt-4", t),
		...r
	});
}
function De({ className: n, variant: r = "tertiary", disabledVariant: a = "tertiary", size: o = "icon", ...s }) {
	let { scrollPrev: c, canScrollPrev: u } = J(), { t: d } = f();
	return /* @__PURE__ */ l(t, {
		"data-slot": "carousel-previous",
		variant: u ? r : a,
		size: o,
		className: e(n),
		disabled: !u,
		onClick: c,
		...s,
		children: [/* @__PURE__ */ l(i, {}), /* @__PURE__ */ l("span", {
			className: "sr-only",
			children: d("Previous slide")
		})]
	});
}
function Oe({ className: n, variant: r = "tertiary", disabledVariant: i = "tertiary", size: a = "icon", ...o }) {
	let { scrollNext: c, canScrollNext: u } = J(), { t: d } = f();
	return /* @__PURE__ */ l(t, {
		"data-slot": "carousel-next",
		variant: u ? r : i,
		size: a,
		className: e(n),
		disabled: !u,
		onClick: c,
		...o,
		children: [/* @__PURE__ */ l(s, {}), /* @__PURE__ */ l("span", {
			className: "sr-only",
			children: d("Next slide")
		})]
	});
}
//#endregion
export { De as a, Oe as i, Te as n, Ee as r, Y as t };

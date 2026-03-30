import { i as e, r as t, v as n } from "./utils-kL9Kd3j1.js";
import { $ as r, Et as i, T as a, pt as o, q as s, rt as c, xt as l } from "./react-DLNUXPF9.js";
import { t as u } from "./tag-NlcpsyaD.js";
import { t as d } from "./useTranslation-Cl_kknJx.js";
import { a as f, n as p, t as m } from "./sheet-DHtRCcio.js";
import { n as h, r as g, s as _, t as v } from "./dropdown-menu-Cc3lBEdl.js";
import { t as y } from "./checkbox-BhLy_CYP.js";
//#region ../../node_modules/.pnpm/fast-equals@5.4.0/node_modules/fast-equals/dist/es/index.mjs
var { getOwnPropertyNames: b, getOwnPropertySymbols: x } = Object, { hasOwnProperty: S } = Object.prototype;
function C(e, t) {
	return function(n, r, i) {
		return e(n, r, i) && t(n, r, i);
	};
}
function w(e) {
	return function(t, n, r) {
		if (!t || !n || typeof t != "object" || typeof n != "object") return e(t, n, r);
		let { cache: i } = r, a = i.get(t), o = i.get(n);
		if (a && o) return a === n && o === t;
		i.set(t, n), i.set(n, t);
		let s = e(t, n, r);
		return i.delete(t), i.delete(n), s;
	};
}
function T(e) {
	return e?.[Symbol.toStringTag];
}
function E(e) {
	return b(e).concat(x(e));
}
var D = Object.hasOwn || ((e, t) => S.call(e, t));
function O(e, t) {
	return e === t || !e && !t && e !== e && t !== t;
}
var ee = "__v", te = "__o", k = "_owner", { getOwnPropertyDescriptor: A, keys: j } = Object;
function M(e, t) {
	return e.byteLength === t.byteLength && H(new Uint8Array(e), new Uint8Array(t));
}
function N(e, t, n) {
	let r = e.length;
	if (t.length !== r) return !1;
	for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
	return !0;
}
function P(e, t) {
	return e.byteLength === t.byteLength && H(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function ne(e, t) {
	return O(e.getTime(), t.getTime());
}
function re(e, t) {
	return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function ie(e, t) {
	return e === t;
}
function F(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.entries(), o, s, c = 0;
	for (; (o = a.next()) && !o.done;) {
		let r = t.entries(), a = !1, l = 0;
		for (; (s = r.next()) && !s.done;) {
			if (i[l]) {
				l++;
				continue;
			}
			let r = o.value, u = s.value;
			if (n.equals(r[0], u[0], c, l, e, t, n) && n.equals(r[1], u[1], r[0], u[0], e, t, n)) {
				a = i[l] = !0;
				break;
			}
			l++;
		}
		if (!a) return !1;
		c++;
	}
	return !0;
}
var I = O;
function L(e, t, n) {
	let r = j(e), i = r.length;
	if (j(t).length !== i) return !1;
	for (; i-- > 0;) if (!W(e, t, n, r[i])) return !1;
	return !0;
}
function R(e, t, n) {
	let r = E(e), i = r.length;
	if (E(t).length !== i) return !1;
	let a, o, s;
	for (; i-- > 0;) if (a = r[i], !W(e, t, n, a) || (o = A(e, a), s = A(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return !1;
	return !0;
}
function z(e, t) {
	return O(e.valueOf(), t.valueOf());
}
function B(e, t) {
	return e.source === t.source && e.flags === t.flags;
}
function V(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.values(), o, s;
	for (; (o = a.next()) && !o.done;) {
		let r = t.values(), a = !1, c = 0;
		for (; (s = r.next()) && !s.done;) {
			if (!i[c] && n.equals(o.value, s.value, o.value, s.value, e, t, n)) {
				a = i[c] = !0;
				break;
			}
			c++;
		}
		if (!a) return !1;
	}
	return !0;
}
function H(e, t) {
	let n = e.byteLength;
	if (t.byteLength !== n || e.byteOffset !== t.byteOffset) return !1;
	for (; n-- > 0;) if (e[n] !== t[n]) return !1;
	return !0;
}
function U(e, t) {
	return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function W(e, t, n, r) {
	return (r === k || r === te || r === ee) && (e.$$typeof || t.$$typeof) ? !0 : D(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var G = "[object ArrayBuffer]", K = "[object Arguments]", q = "[object Boolean]", J = "[object DataView]", Y = "[object Date]", ae = "[object Error]", oe = "[object Map]", se = "[object Number]", ce = "[object Object]", le = "[object RegExp]", ue = "[object Set]", de = "[object String]", fe = {
	"[object Int8Array]": !0,
	"[object Uint8Array]": !0,
	"[object Uint8ClampedArray]": !0,
	"[object Int16Array]": !0,
	"[object Uint16Array]": !0,
	"[object Int32Array]": !0,
	"[object Uint32Array]": !0,
	"[object Float16Array]": !0,
	"[object Float32Array]": !0,
	"[object Float64Array]": !0,
	"[object BigInt64Array]": !0,
	"[object BigUint64Array]": !0
}, pe = "[object URL]", X = Object.prototype.toString;
function me({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: l, areRegExpsEqual: u, areSetsEqual: d, areTypedArraysEqual: f, areUrlsEqual: p, unknownTagComparators: m }) {
	return function(h, g, _) {
		if (h === g) return !0;
		if (h == null || g == null) return !1;
		let v = typeof h;
		if (v !== typeof g) return !1;
		if (v !== "object") return v === "number" ? s(h, g, _) : v === "function" ? a(h, g, _) : !1;
		let y = h.constructor;
		if (y !== g.constructor) return !1;
		if (y === Object) return c(h, g, _);
		if (Array.isArray(h)) return t(h, g, _);
		if (y === Date) return r(h, g, _);
		if (y === RegExp) return u(h, g, _);
		if (y === Map) return o(h, g, _);
		if (y === Set) return d(h, g, _);
		let b = X.call(h);
		if (b === Y) return r(h, g, _);
		if (b === le) return u(h, g, _);
		if (b === oe) return o(h, g, _);
		if (b === ue) return d(h, g, _);
		if (b === ce) return typeof h.then != "function" && typeof g.then != "function" && c(h, g, _);
		if (b === pe) return p(h, g, _);
		if (b === ae) return i(h, g, _);
		if (b === K) return c(h, g, _);
		if (fe[b]) return f(h, g, _);
		if (b === G) return e(h, g, _);
		if (b === J) return n(h, g, _);
		if (b === q || b === se || b === de) return l(h, g, _);
		if (m) {
			let e = m[b];
			if (!e) {
				let t = T(h);
				t && (e = m[t]);
			}
			if (e) return e(h, g, _);
		}
		return !1;
	};
}
function he({ circular: e, createCustomConfig: t, strict: n }) {
	let r = {
		areArrayBuffersEqual: M,
		areArraysEqual: n ? R : N,
		areDataViewsEqual: P,
		areDatesEqual: ne,
		areErrorsEqual: re,
		areFunctionsEqual: ie,
		areMapsEqual: n ? C(F, R) : F,
		areNumbersEqual: I,
		areObjectsEqual: n ? R : L,
		arePrimitiveWrappersEqual: z,
		areRegExpsEqual: B,
		areSetsEqual: n ? C(V, R) : V,
		areTypedArraysEqual: n ? C(H, R) : H,
		areUrlsEqual: U,
		unknownTagComparators: void 0
	};
	if (t && (r = Object.assign({}, r, t(r))), e) {
		let e = w(r.areArraysEqual), t = w(r.areMapsEqual), n = w(r.areObjectsEqual), i = w(r.areSetsEqual);
		r = Object.assign({}, r, {
			areArraysEqual: e,
			areMapsEqual: t,
			areObjectsEqual: n,
			areSetsEqual: i
		});
	}
	return r;
}
function ge(e) {
	return function(t, n, r, i, a, o, s) {
		return e(t, n, s);
	};
}
function _e({ circular: e, comparator: t, createState: n, equals: r, strict: i }) {
	if (n) return function(a, o) {
		let { cache: s = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: c } = n();
		return t(a, o, {
			cache: s,
			equals: r,
			meta: c,
			strict: i
		});
	};
	if (e) return function(e, n) {
		return t(e, n, {
			cache: /* @__PURE__ */ new WeakMap(),
			equals: r,
			meta: void 0,
			strict: i
		});
	};
	let a = {
		cache: void 0,
		equals: r,
		meta: void 0,
		strict: i
	};
	return function(e, n) {
		return t(e, n, a);
	};
}
var ve = Z();
Z({ strict: !0 }), Z({ circular: !0 }), Z({
	circular: !0,
	strict: !0
}), Z({ createInternalComparator: () => O }), Z({
	strict: !0,
	createInternalComparator: () => O
}), Z({
	circular: !0,
	createInternalComparator: () => O
}), Z({
	circular: !0,
	createInternalComparator: () => O,
	strict: !0
});
function Z(e = {}) {
	let { circular: t = !1, createInternalComparator: n, createState: r, strict: i = !1 } = e, a = me(he(e));
	return _e({
		circular: t,
		comparator: a,
		createState: r,
		equals: n ? n(a) : ge(a),
		strict: i
	});
}
//#endregion
//#region src/features/search/components/dropdown-filter-menu.tsx
o();
function Q({ label: t, options: a, selected: o, onSelectionChange: s }) {
	let [f, p] = l(!1), [m, y] = l({}), { t: b } = d();
	i(() => {
		if (f) {
			let e = {};
			Object.keys(a).forEach((t) => {
				let n = t;
				e[n] = o.includes(n);
			}), y(e);
		}
	}, [
		f,
		a,
		o
	]);
	let x = (e, t) => {
		y((n) => ({
			...n,
			[e]: t
		}));
	};
	return /* @__PURE__ */ c(v, {
		open: f,
		onOpenChange: p,
		children: [/* @__PURE__ */ c(_, {
			className: "hidden md:block outline-none",
			children: /* @__PURE__ */ c(u, { children: [
				t,
				" ",
				/* @__PURE__ */ c(r, { className: "size-4" })
			] })
		}), /* @__PURE__ */ c(g, {
			className: "relative w-78 pb-14 z-50",
			children: [e(a).map(([e, t]) => /* @__PURE__ */ c(h, {
				onSelect: (e) => e.preventDefault(),
				checked: m[e] || !1,
				onCheckedChange: (t) => x(e, t),
				children: /* @__PURE__ */ c("label", {
					htmlFor: e,
					className: "w-full flex justify-between",
					children: [t.label, /* @__PURE__ */ c("span", { children: t.count ? `(${t.count})` : "" })]
				})
			}, e)), /* @__PURE__ */ c("div", {
				className: "fixed bottom-0 right-0 left-0 grid grid-cols-2 min-w-0",
				children: [/* @__PURE__ */ c(n, {
					variant: "secondary",
					onClick: () => {
						y({}), s([]);
					},
					disabled: Object.keys(m).length === 0,
					children: b("Reset")
				}), /* @__PURE__ */ c(n, {
					type: "submit",
					onClick: () => {
						s(e(m).filter(([e, t]) => t).map(([e]) => e)), p(!1);
					},
					children: b("Save")
				})]
			})]
		})]
	});
}
//#endregion
//#region src/features/search/components/sheet-filter-menu.tsx
o();
function $({ label: t, options: r, selected: a, onSelectionChange: o }) {
	let [s, h] = l(!1), [g, _] = l({}), { t: v } = d();
	i(() => {
		if (s) {
			let e = {};
			Object.keys(r).forEach((t) => {
				let n = t;
				e[n] = a.includes(n);
			}), _(e);
		}
	}, [
		s,
		r,
		a
	]);
	let b = (e, t) => {
		_((n) => ({
			...n,
			[e]: t
		}));
	};
	return /* @__PURE__ */ c(m, {
		open: s,
		onOpenChange: h,
		children: [/* @__PURE__ */ c(f, {
			className: "md:hidden outline-none",
			children: /* @__PURE__ */ c(u, { children: [
				t,
				" (",
				a.length,
				")"
			] })
		}), /* @__PURE__ */ c(p, {
			className: "w-screen overflow-y-auto",
			children: [/* @__PURE__ */ c("div", {
				className: "h-full mt-25 px-6 flex flex-col gap-8",
				children: [/* @__PURE__ */ c("p", {
					className: "text-h3",
					children: t
				}), e(r).map(([e, t]) => /* @__PURE__ */ c("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ c(y, {
						id: e,
						onSelect: (e) => e.preventDefault(),
						checked: g[e] || !1,
						onCheckedChange: (t) => b(e, t)
					}), /* @__PURE__ */ c("label", {
						htmlFor: e,
						className: "w-full text-gray-1 flex justify-between",
						children: [t.label, /* @__PURE__ */ c("span", { children: t.count ? `(${t.count})` : "" })]
					})]
				}, e))]
			}), /* @__PURE__ */ c("div", {
				className: "fixed bottom-0 p-6 w-full flex justify-center",
				children: /* @__PURE__ */ c(f, {
					asChild: !0,
					children: /* @__PURE__ */ c(n, {
						className: "w-full",
						onClick: () => {
							o(e(g).filter(([e, t]) => t).map(([e]) => e)), h(!1);
						},
						children: v("Apply")
					})
				})
			})]
		})]
	});
}
//#endregion
//#region src/features/search/components/dropdown-filters.tsx
o();
function ye({ filters: n, years: i, selected: o, selectedYears: f, onSelectionChange: p, onYearsChange: m, className: y, sortOptions: b, currentSort: x, onSortChange: S }) {
	let [C, w] = l(x), { t: T } = d();
	return /* @__PURE__ */ c("div", {
		className: t("flex flex-wrap items-center gap-2", y),
		children: [
			n.hidden ? null : /* @__PURE__ */ c(Q, {
				label: n.label,
				options: n.records,
				selected: o,
				onSelectionChange: p
			}),
			i && f && m && !i.hidden ? /* @__PURE__ */ c(Q, {
				label: i.label,
				options: i.records,
				selected: f,
				onSelectionChange: m
			}) : null,
			/* @__PURE__ */ c("div", {
				className: "hidden md:flex items-center gap-2",
				children: [
					o.map((e) => /* @__PURE__ */ c(u, {
						variant: "secondary",
						onClick: () => {
							p(o.filter((t) => t !== e));
						},
						children: [n.records[e]?.label, /* @__PURE__ */ c(s, { className: "size-3 m-0.5" })]
					}, e)),
					f && m && i ? f.map((e) => /* @__PURE__ */ c(u, {
						variant: "secondary",
						onClick: () => {
							m(f.filter((t) => t !== e));
						},
						children: [i.records[e]?.label, /* @__PURE__ */ c(s, { className: "size-3 m-0.5" })]
					}, e)) : null,
					o.length > 0 ? /* @__PURE__ */ c(u, {
						variant: "tertiary",
						className: "mr-2",
						onClick: () => {
							p([]);
						},
						children: ["Delete all", /* @__PURE__ */ c(a, { className: "size-4" })]
					}) : null
				]
			}),
			/* @__PURE__ */ c($, {
				label: n.label,
				options: n.records,
				selected: o,
				onSelectionChange: p
			}),
			i && f && m ? /* @__PURE__ */ c($, {
				label: i.label,
				options: i.records,
				selected: f,
				onSelectionChange: m
			}) : null,
			b && C ? /* @__PURE__ */ c(v, { children: [/* @__PURE__ */ c(_, {
				className: "ml-auto flex items-center gap-2 font-semibold text-sm outline-none",
				children: [
					/* @__PURE__ */ c("span", {
						className: "text-gray-1 leading-label",
						children: T("Sort by:")
					}),
					/* @__PURE__ */ c("span", {
						className: "md:hidden",
						children: b[C]?.label.short
					}),
					/* @__PURE__ */ c("span", {
						className: "hidden md:inline",
						children: b[C]?.label.long
					}),
					/* @__PURE__ */ c(r, {})
				]
			}), /* @__PURE__ */ c(g, {
				className: "w-full",
				children: e(b).map(([e, t], n) => /* @__PURE__ */ c(h, {
					variant: "outline",
					checked: ve(C, t),
					onCheckedChange: () => {
						w(e), S?.(e);
					},
					children: [/* @__PURE__ */ c("span", {
						className: "md:hidden",
						children: t?.label.short
					}), /* @__PURE__ */ c("span", {
						className: "hidden md:inline",
						children: t?.label.long
					})]
				}, n))
			})] }) : null
		]
	});
}
//#endregion
export { ye as t };

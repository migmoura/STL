import { r as e, v as t } from "./utils-Cw5qLqcS.js";
import { Ct as n, D as r, Et as i, St as a, Tt as o, _t as s, c, d as l, f as u, ft as d, l as f, nt as p, o as m, s as h, u as g, ut as _, wt as v } from "./react-w7ldCLEn.js";
import { n as y, r as b } from "./vanilla-BpCtWsxj.js";
//#region ../../node_modules/.pnpm/jotai@2.18.1_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.2.14_react@19.2.4/node_modules/jotai/esm/react.mjs
d();
var x = i(void 0);
function S(e) {
	let t = v(x);
	return e?.store || t || y();
}
var C = (e) => typeof e?.then == "function", w = (e) => {
	e.status || (e.status = "pending", e.then((t) => {
		e.status = "fulfilled", e.value = t;
	}, (t) => {
		e.status = "rejected", e.reason = t;
	}));
}, T = _.use || ((e) => {
	if (e.status === "pending") throw e;
	if (e.status === "fulfilled") return e.value;
	throw e.status === "rejected" ? e.reason : (w(e), e);
}), E = /* @__PURE__ */ new WeakMap(), D = (e, t, n) => {
	let r = b(e)[26], i = E.get(t);
	return i || (i = new Promise((a, o) => {
		let s = t, c = (e) => (t) => {
			s === e && a(t);
		}, l = (e) => (t) => {
			s === e && o(t);
		}, u = () => {
			try {
				let t = n();
				C(t) ? (E.set(t, i), s = t, t.then(c(t), l(t)), r(e, t, u)) : a(t);
			} catch (e) {
				o(e);
			}
		};
		t.then(c(t), l(t)), r(e, t, u);
	}), E.set(t, i)), i;
};
function O(e, t) {
	let { delay: n, unstable_promiseStatus: r = !_.use } = t || {}, i = S(t), [[c, l, u], d] = a((t) => {
		let n = i.get(e);
		return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [
			n,
			i,
			e
		];
	}, void 0, () => [
		i.get(e),
		i,
		e
	]), f = c;
	if ((l !== i || u !== e) && (d(), f = i.get(e)), o(() => {
		let t = i.sub(e, () => {
			if (r) try {
				let t = i.get(e);
				C(t) && w(D(i, t, () => i.get(e)));
			} catch {}
			if (typeof n == "number") {
				setTimeout(d, n);
				return;
			}
			d();
		});
		return d(), t;
	}, [
		i,
		e,
		n,
		r
	]), s(f), C(f)) {
		let t = D(i, f, () => i.get(e));
		return r && w(t), T(t);
	}
	return f;
}
function k(e, t) {
	let r = S(t);
	return n((...t) => r.set(e, ...t), [r, e]);
}
function A(e, t) {
	return [O(e, t), k(e, t)];
}
//#endregion
//#region src/components/ui/dialog.tsx
d();
function j({ ...e }) {
	return /* @__PURE__ */ p(h, {
		"data-slot": "dialog",
		...e
	});
}
function M({ ...e }) {
	return /* @__PURE__ */ p(c, {
		"data-slot": "dialog-portal",
		...e
	});
}
function N({ className: t, ...n }) {
	return /* @__PURE__ */ p(u, {
		"data-slot": "dialog-overlay",
		className: e("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t),
		...n
	});
}
function P({ className: t, children: n, showCloseButton: i = !0, ...a }) {
	return /* @__PURE__ */ p(M, { children: [/* @__PURE__ */ p(N, {}), /* @__PURE__ */ p(f, {
		"data-slot": "dialog-content",
		className: e("w-full pb-20 md:max-w-[790px] xl:max-w-2/3 bg-white data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 duration-100 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none", t),
		...a,
		children: [n, i && /* @__PURE__ */ p(l, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ p("button", {
				className: "absolute top-5 right-5",
				children: [/* @__PURE__ */ p(r, {}), /* @__PURE__ */ p("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function F({ className: t, ...n }) {
	return /* @__PURE__ */ p("div", {
		"data-slot": "dialog-header",
		className: e("flex flex-col gap-2 px-6 md:px-15 py-6", t),
		...n
	});
}
function I({ className: n, showCloseButton: r = !1, children: i, ...a }) {
	return /* @__PURE__ */ p("div", {
		"data-slot": "dialog-footer",
		className: e("h-20 fixed bottom-0 left-0 right-0 bg-black px-6 md:px-15 py-3", n),
		...a,
		children: [i, r && /* @__PURE__ */ p(l, { render: /* @__PURE__ */ p(t, {
			variant: "secondary",
			children: "Close"
		}) })]
	});
}
function L({ className: e, ...t }) {
	return /* @__PURE__ */ p(m, {
		"data-slot": "dialog-title",
		className: e,
		...t
	});
}
function R({ className: t, ...n }) {
	return /* @__PURE__ */ p(g, {
		"data-slot": "dialog-description",
		className: e("leading-label text-sm text-muted-foreground *:[a]:hover:text-foreground *:[a]:underline", t),
		...n
	});
}
//#endregion
export { F as a, O as c, I as i, k as l, P as n, L as o, R as r, A as s, j as t };

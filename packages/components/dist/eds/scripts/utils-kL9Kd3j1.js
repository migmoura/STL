import { K as e, U as t, ft as n, kt as r, mt as i, ot as a, pt as o, rt as s, st as c, ut as l, wt as u } from "./react-DLNUXPF9.js";
//#region ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function d(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = d(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function f() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = d(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
o();
function p(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function m(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = p(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : p(e[t], null);
			}
		};
	};
}
function h(...e) {
	return u(m(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
o();
var g = Symbol.for("react.lazy"), _ = l.use;
function v(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function y(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === g && "_payload" in e && v(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function b(e) {
	let t = /* @__PURE__ */ S(e), r = a((e, r) => {
		let { children: a, ...o } = e;
		y(a) && typeof _ == "function" && (a = _(a._payload));
		let l = c.toArray(a), u = l.find(w);
		if (u) {
			let e = u.props.children, a = l.map((t) => t === u ? c.count(e) > 1 ? c.only(null) : n(e) ? e.props.children : null : t);
			return /* @__PURE__ */ s(t, {
				...o,
				ref: r,
				children: n(e) ? i(e, void 0, a) : null
			});
		}
		return /* @__PURE__ */ s(t, {
			...o,
			ref: r,
			children: a
		});
	});
	return r.displayName = `${e}.Slot`, r;
}
var x = /* @__PURE__ */ b("Slot");
/* @__NO_SIDE_EFFECTS__ */
function S(e) {
	let t = a((e, t) => {
		let { children: a, ...o } = e;
		if (y(a) && typeof _ == "function" && (a = _(a._payload)), n(a)) {
			let e = E(a), n = T(o, a.props);
			return a.type !== r && (n.ref = t ? m(t, e) : e), i(a, n);
		}
		return c.count(a) > 1 ? c.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var C = Symbol("radix.slottable");
function w(e) {
	return n(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === C;
}
function T(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function E(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var D = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, O = f, k = (e, t) => (n) => {
	if (t?.variants == null) return O(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = D(t) || D(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return O(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
};
//#endregion
//#region src/components/ui/button.tsx
o();
var A = k("leading-label inline-flex items-center justify-center gap-2 text-md font-semibold outline-none ring-pressed focus-visible:ring-offset-3 focus-visible:ring-2 disabled:pointer-events-none aria-disabled:pointer-events-none [&_svg]:pointer-events-none", {
	variants: {
		variant: {
			primary: "bg-yellow hover:bg-hovered active:bg-pressed disabled:bg-gray-3 disabled:text-gray-2 aria-disabled:bg-gray-3 aria-disabled:text-gray-2",
			link: "shadow-[inset_0_-2px_0_0] shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow disabled:text-gray-3 disabled:shadow-gray-3 aria-disabled:text-gray-3 aria-disabled:shadow-gray-3 no-underline",
			secondary: null,
			tertiary: null
		},
		size: {
			icon: "size-14 shrink-0 [&_svg]:size-6",
			slim: null,
			default: null
		},
		dark: {
			true: "text-white disabled:[&_svg]:text-gray-2 aria-disabled:[&_svg]:text-gray-2",
			false: "text-black disabled:[&_svg]:text-gray-2 aria-disabled:[&_svg]:text-gray-2"
		}
	},
	compoundVariants: [
		{
			variant: "primary",
			dark: !1,
			className: "outline-solid outline-1 not-disabled:not-aria-disabled:outline-yellow disabled:bg-gray-3 disabled:outline-gray-3 aria-disabled:bg-gray-3 aria-disabled:outline-gray-3"
		},
		{
			variant: "secondary",
			dark: !1,
			className: "bg-white outline-solid outline-1 outline-gray-3 hover:outline-2 hover:outline-yellow active:outline-pressed disabled:bg-gray-4 disabled:outline-gray-3 disabled:text-gray-3 aria-disabled:bg-gray-4 aria-disabled:outline-gray-3 aria-disabled:text-gray-3"
		},
		{
			variant: "tertiary",
			dark: !1,
			className: "bg-transparent hover:bg-gray-4 active:bg-gray-3 disabled:text-gray-3 aria-disabled:text-gray-3"
		},
		{
			variant: ["tertiary", "secondary"],
			dark: !0,
			className: "hover:bg-black/10 active:bg-black/20"
		},
		{
			variant: "secondary",
			dark: !0,
			className: "border border-gray-15 disabled:border-gray-15 aria-disabled:border-gray-15"
		},
		{
			variant: [
				"primary",
				"secondary",
				"tertiary"
			],
			size: "default",
			className: "px-8 py-4 whitespace-nowrap"
		},
		{
			variant: "link",
			size: "default",
			className: "py-1 2xl:py-2"
		},
		{
			variant: "link",
			size: "slim",
			className: null
		}
	],
	defaultVariants: {
		variant: "primary",
		size: "default",
		dark: !1
	}
});
function j({ className: e, variant: t, size: n, dark: r, asChild: i = !1, ...a }) {
	return /* @__PURE__ */ s(i ? x : "button", {
		"data-slot": "button",
		className: N(A({
			variant: t,
			size: n,
			dark: r,
			className: e
		})),
		...a
	});
}
//#endregion
//#region src/components/ui/link.tsx
o();
function M({ children: n, variant: r = "link", size: i = "default", title: a, ...o }) {
	let c = I(o.href), l = L(o.href);
	return /* @__PURE__ */ s(j, {
		variant: r,
		size: i,
		asChild: !0,
		children: /* @__PURE__ */ s("a", {
			...o,
			title: a === n ? void 0 : a,
			"aria-label": a === n ? void 0 : a,
			target: c || l ? "_blank" : void 0,
			children: [
				n,
				l ? /* @__PURE__ */ s(e, { className: "size-5" }) : null,
				!l && c ? /* @__PURE__ */ s(t, { className: "size-5" }) : null
			]
		})
	});
}
//#endregion
//#region src/lib/utils.tsx
function N(...e) {
	return f(e);
}
function P(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
function F(e) {
	let t = window.location.pathname.split("/").slice(1, 3).join("/");
	return e && t !== "global/en" ? e.replace("global/en", t) : e;
}
function I(e) {
	if (!e) return !1;
	try {
		let t = new URL(e);
		return ["http:", "https:"].includes(t.protocol) && t.origin !== window.location.origin;
	} catch {
		return !1;
	}
}
function L(e) {
	return e ? RegExp(`\\.(${[
		"pdf",
		"doc",
		"docx",
		"xls",
		"xlsx",
		"ppt",
		"pptx",
		"jpg",
		"jpeg",
		"png",
		"gif",
		"svg",
		"mp4",
		"zip",
		"rar",
		"txt"
	].join("|")})$`, "i").test(e) : !1;
}
function R(e, t = () => !0) {
	let n = new URLSearchParams(e);
	return Object.fromEntries(Array.from(n.entries()).filter(t).map(([e, t]) => isNaN(Number(t)) ? t === "true" ? [e, !0] : t === "false" ? [e, !1] : [e, t] : [e, Number(t)]));
}
function z(e) {
	return typeof e == "string" ? e : e?.value ?? "";
}
function B(e) {
	return typeof e == "string" ? e : e?.highlight ?? "";
}
function V(e) {
	return e ? Object.entries(e).map(([e, t]) => {
		let n = Number(e);
		return [String(n) === e ? n : e, t];
	}) : [];
}
function H(e) {
	return e ? Object.values(e).map((e) => e) : [];
}
function U(e, t) {
	if (e.tagName === "A") return /* @__PURE__ */ s(M, {
		href: e.getAttribute("href") ?? "#",
		children: t
	});
}
function W(e, t) {
	if (e.tagName === "A") return /* @__PURE__ */ s(M, {
		size: "slim",
		href: e.getAttribute("href") ?? "#",
		children: t
	});
}
function G(e) {
	return /^https?:\/\//i.test(e) ? e : `https://${e}`;
}
function K(e) {
	return typeof e == "object" && "icon" in e && "link" in e;
}
var q = new Set([
	"click here",
	"click this",
	"go",
	"here",
	"information",
	"learn more",
	"more",
	"more info",
	"more information",
	"right here",
	"read more",
	"see more",
	"start",
	"this"
]);
function J(e, t) {
	return e?.reduce((e, n) => {
		let r = typeof t == "function" ? t(n) : n[t];
		return e[r] || (e[r] = []), e[r].push(n), e;
	}, {});
}
function Y(e, t) {
	return e.localeCompare(t, void 0, { sensitivity: "accent" }) === 0;
}
//#endregion
export { h as C, m as S, M as _, Y as a, x as b, J as c, F as d, q as f, H as g, W as h, V as i, I as l, U as m, P as n, B as o, R as p, N as r, z as s, G as t, K as u, j as v, f as w, b as x, k as y };

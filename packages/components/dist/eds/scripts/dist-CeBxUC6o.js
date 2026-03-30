import { C as e, S as t } from "./utils-kL9Kd3j1.js";
import { Ct as n, Dt as r, Et as i, Tt as a, bt as o, ft as s, gt as c, kt as l, lt as u, mt as d, ot as f, pt as p, rt as m, st as h, ut as g, wt as _, xt as v, yt as y } from "./react-DLNUXPF9.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-context/dist/index.mjs
p();
function b(e, t) {
	let n = r(t), i = (e) => {
		let { children: t, ...r } = e, i = y(() => r, Object.values(r));
		return /* @__PURE__ */ m(n.Provider, {
			value: i,
			children: t
		});
	};
	i.displayName = e + "Provider";
	function o(r) {
		let i = a(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [i, o];
}
function x(e, t = []) {
	let n = [];
	function i(t, i) {
		let o = r(i), s = n.length;
		n = [...n, i];
		let c = (t) => {
			let { scope: n, children: r, ...i } = t, a = n?.[e]?.[s] || o, c = y(() => i, Object.values(i));
			return /* @__PURE__ */ m(a.Provider, {
				value: c,
				children: r
			});
		};
		c.displayName = t + "Provider";
		function l(n, r) {
			let c = a(r?.[e]?.[s] || o);
			if (c) return c;
			if (i !== void 0) return i;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [c, l];
	}
	let o = () => {
		let t = n.map((e) => r(e));
		return function(n) {
			let r = n?.[e] || t;
			return y(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return o.scopeName = e, [i, S(o, ...t)];
}
function S(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return y(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
p();
/* @__NO_SIDE_EFFECTS__ */
function C(e) {
	let t = /* @__PURE__ */ w(e), n = f((e, n) => {
		let { children: r, ...i } = e, a = h.toArray(r), o = a.find(E);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? h.count(e) > 1 ? h.only(null) : s(e) ? e.props.children : null : t);
			return /* @__PURE__ */ m(t, {
				...i,
				ref: n,
				children: s(e) ? d(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ m(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function w(e) {
	let n = f((e, n) => {
		let { children: r, ...i } = e;
		if (s(r)) {
			let e = O(r), a = D(i, r.props);
			return r.type !== l && (a.ref = n ? t(n, e) : e), d(r, a);
		}
		return h.count(r) > 1 ? h.only(null) : null;
	});
	return n.displayName = `${e}.SlotClone`, n;
}
var T = Symbol("radix.slottable");
function E(e) {
	return s(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === T;
}
function D(e, t) {
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
function O(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
typeof window < "u" && window.document && window.document.createElement;
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
p();
var A = globalThis?.document ? o : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
p();
var j = g.useInsertionEffect || A;
function M({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [a, o, s] = N({
		defaultProp: t,
		onChange: n
	}), l = e !== void 0, u = l ? e : a;
	{
		let t = c(e !== void 0);
		i(() => {
			let e = t.current;
			if (e !== l) {
				let t = e ? "controlled" : "uncontrolled", n = l ? "controlled" : "uncontrolled";
				console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			t.current = l;
		}, [l, r]);
	}
	return [u, _((t) => {
		if (l) {
			let n = P(t) ? t(e) : t;
			n !== e && s.current?.(n);
		} else o(t);
	}, [
		l,
		e,
		o,
		s
	])];
}
function N({ defaultProp: e, onChange: t }) {
	let [n, r] = v(e), a = c(n), o = c(t);
	return j(() => {
		o.current = t;
	}, [t]), i(() => {
		a.current !== n && (o.current?.(n), a.current = n);
	}, [n, a]), [
		n,
		r,
		o
	];
}
function P(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs
p();
var F = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ C(`Primitive.${t}`), r = f((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function I(e, t) {
	e && u(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs
p();
function L(e, t) {
	return n((e, n) => t[e][n] ?? e, e);
}
var R = (t) => {
	let { present: n, children: r } = t, i = z(n), a = typeof r == "function" ? r({ present: i.isPresent }) : h.only(r), o = e(i.ref, V(a));
	return typeof r == "function" || i.isPresent ? d(a, { ref: o }) : null;
};
R.displayName = "Presence";
function z(e) {
	let [t, n] = v(), r = c(null), a = c(e), o = c("none"), [s, l] = L(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return i(() => {
		let e = B(r.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), A(() => {
		let t = r.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = B(t);
			e ? l("MOUNT") : i === "none" || t?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, l]), A(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, i = (i) => {
				let o = B(r.current).includes(CSS.escape(i.animationName));
				if (i.target === t && o && (l("ANIMATION_END"), !a.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === t && (o.current = B(r.current));
			};
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", i), t.addEventListener("animationend", i), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", i), t.removeEventListener("animationend", i);
			};
		} else l("ANIMATION_END");
	}, [t, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: _((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function B(e) {
	return e?.animationName || "none";
}
function V(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-id/dist/index.mjs
p();
var H = g.useId || (() => void 0), U = 0;
function W(e) {
	let [t, n] = v(H());
	return A(() => {
		e || n((e) => e ?? String(U++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
export { M as a, C as c, I as i, b as l, R as n, A as o, F as r, k as s, W as t, x as u };

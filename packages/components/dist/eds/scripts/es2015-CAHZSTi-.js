import { C as e, S as t } from "./utils-Cw5qLqcS.js";
import { Ct as n, Dt as r, Et as i, Ot as a, St as o, Tt as s, at as c, bt as l, ct as u, dt as d, ft as f, ht as p, lt as m, nt as h, ot as g, pt as _, ut as v, vt as y, wt as b, yt as x } from "./react-w7ldCLEn.js";
typeof window < "u" && window.document && window.document.createElement;
function S(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-context/dist/index.mjs
f();
function C(e, t) {
	let n = i(t), r = (e) => {
		let { children: t, ...r } = e, i = y(() => r, Object.values(r));
		return /* @__PURE__ */ h(n.Provider, {
			value: i,
			children: t
		});
	};
	r.displayName = e + "Provider";
	function a(r) {
		let i = b(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [r, a];
}
function w(e, t = []) {
	let n = [];
	function r(t, r) {
		let a = i(r), o = n.length;
		n = [...n, r];
		let s = (t) => {
			let { scope: n, children: r, ...i } = t, s = n?.[e]?.[o] || a, c = y(() => i, Object.values(i));
			return /* @__PURE__ */ h(s.Provider, {
				value: c,
				children: r
			});
		};
		s.displayName = t + "Provider";
		function c(n, i) {
			let s = b(i?.[e]?.[o] || a);
			if (s) return s;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [s, c];
	}
	let a = () => {
		let t = n.map((e) => i(e));
		return function(n) {
			let r = n?.[e] || t;
			return y(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return a.scopeName = e, [r, T(a, ...t)];
}
function T(...e) {
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
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
f();
var E = globalThis?.document ? x : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-id/dist/index.mjs
f();
var D = m.useId || (() => void 0), O = 0;
function k(e) {
	let [t, n] = l(D());
	return E(() => {
		e || n((e) => e ?? String(O++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
f();
var ee = m.useInsertionEffect || E;
function te({ prop: e, defaultProp: t, onChange: r = () => {}, caller: i }) {
	let [a, o, c] = ne({
		defaultProp: t,
		onChange: r
	}), l = e !== void 0, u = l ? e : a;
	{
		let t = p(e !== void 0);
		s(() => {
			let e = t.current;
			if (e !== l) {
				let t = e ? "controlled" : "uncontrolled", n = l ? "controlled" : "uncontrolled";
				console.warn(`${i} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			t.current = l;
		}, [l, i]);
	}
	return [u, n((t) => {
		if (l) {
			let n = re(t) ? t(e) : t;
			n !== e && c.current?.(n);
		} else o(t);
	}, [
		l,
		e,
		o,
		c
	])];
}
function ne({ defaultProp: e, onChange: t }) {
	let [n, r] = l(e), i = p(n), a = p(t);
	return ee(() => {
		a.current = t;
	}, [t]), s(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function re(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
f();
/* @__NO_SIDE_EFFECTS__ */
function ie(e) {
	let t = /* @__PURE__ */ ae(e), n = c((e, n) => {
		let { children: r, ...i } = e, a = g.toArray(r), o = a.find(se);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? g.count(e) > 1 ? g.only(null) : d(e) ? e.props.children : null : t);
			return /* @__PURE__ */ h(t, {
				...i,
				ref: n,
				children: d(e) ? _(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ h(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function ae(e) {
	let n = c((e, n) => {
		let { children: r, ...i } = e;
		if (d(r)) {
			let e = le(r), o = ce(i, r.props);
			return r.type !== a && (o.ref = n ? t(n, e) : e), _(r, o);
		}
		return g.count(r) > 1 ? g.only(null) : null;
	});
	return n.displayName = `${e}.SlotClone`, n;
}
var oe = Symbol("radix.slottable");
function se(e) {
	return d(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oe;
}
function ce(e, t) {
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
function le(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs
f();
var A = [
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
	let n = /* @__PURE__ */ ie(`Primitive.${t}`), r = c((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function ue(e, t) {
	e && u(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
f();
function j(e) {
	let t = p(e);
	return s(() => {
		t.current = e;
	}), y(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
f();
function de(e, t = globalThis?.document) {
	let n = j(e);
	s(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14___3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
f();
var fe = "DismissableLayer", M = "dismissableLayer.update", pe = "dismissableLayer.pointerDownOutside", me = "dismissableLayer.focusOutside", he, ge = i({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), _e = c((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: c, onDismiss: u, ...d } = t, f = b(ge), [p, m] = l(null), g = p?.ownerDocument ?? globalThis?.document, [, _] = l({}), v = e(n, (e) => m(e)), y = Array.from(f.layers), [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), C = y.indexOf(x), w = p ? y.indexOf(p) : -1, T = f.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= C, D = be((e) => {
		let t = e.target, n = [...f.branches].some((e) => e.contains(t));
		!E || n || (a?.(e), c?.(e), e.defaultPrevented || u?.());
	}, g), O = xe((e) => {
		let t = e.target;
		[...f.branches].some((e) => e.contains(t)) || (o?.(e), c?.(e), e.defaultPrevented || u?.());
	}, g);
	return de((e) => {
		w === f.layers.size - 1 && (i?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	}, g), s(() => {
		if (p) return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (he = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), Se(), () => {
			r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = he);
		};
	}, [
		p,
		g,
		r,
		f
	]), s(() => () => {
		p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), Se());
	}, [p, f]), s(() => {
		let e = () => _({});
		return document.addEventListener(M, e), () => document.removeEventListener(M, e);
	}, []), /* @__PURE__ */ h(A.div, {
		...d,
		ref: v,
		style: {
			pointerEvents: T ? E ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: S(t.onFocusCapture, O.onFocusCapture),
		onBlurCapture: S(t.onBlurCapture, O.onBlurCapture),
		onPointerDownCapture: S(t.onPointerDownCapture, D.onPointerDownCapture)
	});
});
_e.displayName = fe;
var ve = "DismissableLayerBranch", ye = c((t, n) => {
	let r = b(ge), i = p(null), a = e(n, i);
	return s(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ h(A.div, {
		...t,
		ref: a
	});
});
ye.displayName = ve;
function be(e, t = globalThis?.document) {
	let n = j(e), r = p(!1), i = p(() => {});
	return s(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					Ce(pe, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function xe(e, t = globalThis?.document) {
	let n = j(e), r = p(!1);
	return s(() => {
		let e = (e) => {
			e.target && !r.current && Ce(me, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function Se() {
	let e = new CustomEvent(M);
	document.dispatchEvent(e);
}
function Ce(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ue(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
f();
var N = "focusScope.autoFocusOnMount", P = "focusScope.autoFocusOnUnmount", we = {
	bubbles: !1,
	cancelable: !0
}, Te = "FocusScope", Ee = c((t, r) => {
	let { loop: i = !1, trapped: a = !1, onMountAutoFocus: o, onUnmountAutoFocus: c, ...u } = t, [d, f] = l(null), m = j(o), g = j(c), _ = p(null), v = e(r, (e) => f(e)), y = p({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	s(() => {
		if (a) {
			let e = function(e) {
				if (y.paused || !d) return;
				let t = e.target;
				d.contains(t) ? _.current = t : F(_.current, { select: !0 });
			}, t = function(e) {
				if (y.paused || !d) return;
				let t = e.relatedTarget;
				t !== null && (d.contains(t) || F(_.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && F(d);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return d && r.observe(d, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		a,
		d,
		y.paused
	]), s(() => {
		if (d) {
			Ne.add(y);
			let e = document.activeElement;
			if (!d.contains(e)) {
				let t = new CustomEvent(N, we);
				d.addEventListener(N, m), d.dispatchEvent(t), t.defaultPrevented || (De(Ie(ke(d)), { select: !0 }), document.activeElement === e && F(d));
			}
			return () => {
				d.removeEventListener(N, m), setTimeout(() => {
					let t = new CustomEvent(P, we);
					d.addEventListener(P, g), d.dispatchEvent(t), t.defaultPrevented || F(e ?? document.body, { select: !0 }), d.removeEventListener(P, g), Ne.remove(y);
				}, 0);
			};
		}
	}, [
		d,
		m,
		g,
		y
	]);
	let b = n((e) => {
		if (!i && !a || y.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [r, a] = Oe(t);
			r && a ? !e.shiftKey && n === a ? (e.preventDefault(), i && F(r, { select: !0 })) : e.shiftKey && n === r && (e.preventDefault(), i && F(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		i,
		a,
		y.paused
	]);
	return /* @__PURE__ */ h(A.div, {
		tabIndex: -1,
		...u,
		ref: v,
		onKeyDown: b
	});
});
Ee.displayName = Te;
function De(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (F(r, { select: t }), document.activeElement !== n) return;
}
function Oe(e) {
	let t = ke(e);
	return [Ae(t, e), Ae(t.reverse(), e)];
}
function ke(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Ae(e, t) {
	for (let n of e) if (!je(n, { upTo: t })) return n;
}
function je(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Me(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function F(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Me(e) && t && e.select();
	}
}
var Ne = Pe();
function Pe() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Fe(e, t), e.unshift(t);
		},
		remove(t) {
			e = Fe(e, t), e[0]?.resume();
		}
	};
}
function Fe(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Ie(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_7668895bec2444446faa4e0f4eb5244b/node_modules/@radix-ui/react-portal/dist/index.mjs
f();
var Le = "Portal", Re = c((e, t) => {
	let { container: n, ...r } = e, [i, a] = l(!1);
	E(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? v.createPortal(/* @__PURE__ */ h(A.div, {
		...r,
		ref: t
	}), o) : null;
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs
Re.displayName = Le, f();
function ze(e, t) {
	return o((e, n) => t[e][n] ?? e, e);
}
var Be = (t) => {
	let { present: n, children: r } = t, i = Ve(n), a = typeof r == "function" ? r({ present: i.isPresent }) : g.only(r), o = e(i.ref, He(a));
	return typeof r == "function" || i.isPresent ? _(a, { ref: o }) : null;
};
Be.displayName = "Presence";
function Ve(e) {
	let [t, r] = l(), i = p(null), a = p(e), o = p("none"), [c, u] = ze(e ? "mounted" : "unmounted", {
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
	return s(() => {
		let e = I(i.current);
		o.current = c === "mounted" ? e : "none";
	}, [c]), E(() => {
		let t = i.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = I(t);
			e ? u("MOUNT") : i === "none" || t?.display === "none" ? u("UNMOUNT") : u(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, u]), E(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, r = (r) => {
				let o = I(i.current).includes(CSS.escape(r.animationName));
				if (r.target === t && o && (u("ANIMATION_END"), !a.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === t && (o.current = I(i.current));
			};
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
			};
		} else u("ANIMATION_END");
	}, [t, u]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: n((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function I(e) {
	return e?.animationName || "none";
}
function He(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
f();
var L = 0;
function Ue() {
	s(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? We()), document.body.insertAdjacentElement("beforeend", e[1] ?? We()), L++, () => {
			L === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), L--;
		};
	}, []);
}
function We() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var R = function() {
	return R = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, R.apply(this, arguments);
};
function Ge(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ke(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var z = "right-scroll-bar-position", B = "width-before-scroll-bar", qe = "with-scroll-bars-hidden", Je = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function V(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
f();
function Ye(e, t) {
	var n = l(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
f();
var Xe = typeof window < "u" ? x : s, Ze = /* @__PURE__ */ new WeakMap();
function Qe(e, t) {
	var n = Ye(t || null, function(t) {
		return e.forEach(function(e) {
			return V(e, t);
		});
	});
	return Xe(function() {
		var t = Ze.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || V(e, null);
			}), i.forEach(function(e) {
				r.has(e) || V(e, a);
			});
		}
		Ze.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function $e(e) {
	return e;
}
function et(e, t) {
	t === void 0 && (t = $e);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function tt(e) {
	e === void 0 && (e = {});
	var t = et(null);
	return t.options = R({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
f();
var nt = function(e) {
	var t = e.sideCar, n = Ge(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return r(i, R({}, n));
};
nt.isSideCarExport = !0;
function rt(e, t) {
	return e.useMedium(t), nt;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var it = tt();
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/UI.js
f();
var H = function() {}, U = c(function(e, t) {
	var n = p(null), i = l({
		onScrollCapture: H,
		onWheelCapture: H,
		onTouchMoveCapture: H
	}), o = i[0], s = i[1], c = e.forwardProps, u = e.children, d = e.className, f = e.removeScrollBar, m = e.enabled, h = e.shards, v = e.sideCar, y = e.noRelative, b = e.noIsolation, x = e.inert, S = e.allowPinchZoom, C = e.as, w = C === void 0 ? "div" : C, T = e.gapMode, E = Ge(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), D = v, O = Qe([n, t]), k = R(R({}, E), o);
	return r(a, null, m && r(D, {
		sideCar: it,
		removeScrollBar: f,
		shards: h,
		noRelative: y,
		noIsolation: b,
		inert: x,
		setCallbacks: s,
		allowPinchZoom: !!S,
		lockRef: n,
		gapMode: T
	}), c ? _(g.only(u), R(R({}, k), { ref: O })) : r(w, R({}, k, {
		className: d,
		ref: O
	}), u));
});
U.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, U.classNames = {
	fullWidth: B,
	zeroRight: z
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var at, ot = function() {
	if (at) return at;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/singleton.js
function st() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ot();
	return t && e.setAttribute("nonce", t), e;
}
function ct(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function lt(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var ut = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = st()) && (ct(t, n), lt(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/hook.js
f();
var dt = function() {
	var e = ut();
	return function(t, n) {
		s(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ft = function() {
	var e = dt();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, pt = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, W = function(e) {
	return parseInt(e || "", 10) || 0;
}, mt = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		W(n),
		W(r),
		W(i)
	];
}, ht = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return pt;
	var t = mt(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/component.js
f();
var gt = ft(), G = "data-scroll-locked", _t = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${qe} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${G}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${z} {
    right: ${s}px ${r};
  }
  
  .${B} {
    margin-right: ${s}px ${r};
  }
  
  .${z} .${z} {
    right: 0 ${r};
  }
  
  .${B} .${B} {
    margin-right: 0 ${r};
  }
  
  body[${G}] {
    ${Je}: ${s}px;
  }
`;
}, vt = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, yt = function() {
	s(function() {
		return document.body.setAttribute(G, (vt() + 1).toString()), function() {
			var e = vt() - 1;
			e <= 0 ? document.body.removeAttribute(G) : document.body.setAttribute(G, e.toString());
		};
	}, []);
}, bt = function(e) {
	var t = e.noRelative, n = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
	return yt(), r(gt, { styles: _t(y(function() {
		return ht(a);
	}, [a]), !t, a, n ? "" : "!important") });
}, K = !1;
if (typeof window < "u") try {
	var q = Object.defineProperty({}, "passive", { get: function() {
		return K = !0, !0;
	} });
	window.addEventListener("test", q, q), window.removeEventListener("test", q, q);
} catch {
	K = !1;
}
var J = K ? { passive: !1 } : !1, xt = function(e) {
	return e.tagName === "TEXTAREA";
}, St = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !xt(e) && n[t] === "visible");
}, Ct = function(e) {
	return St(e, "overflowY");
}, wt = function(e) {
	return St(e, "overflowX");
}, Tt = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ot(e, r)) {
			var i = kt(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Et = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Dt = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Ot = function(e, t) {
	return e === "v" ? Ct(t) : wt(t);
}, kt = function(e, t) {
	return e === "v" ? Et(t) : Dt(t);
}, At = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, jt = function(e, t, n, r, i) {
	var a = At(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = kt(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Ot(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
f();
var Y = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Mt = function(e) {
	return [e.deltaX, e.deltaY];
}, Nt = function(e) {
	return e && "current" in e ? e.current : e;
}, Pt = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Ft = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, It = 0, X = [];
function Lt(e) {
	var t = p([]), i = p([0, 0]), o = p(), c = l(It++)[0], u = l(ft)[0], d = p(e);
	s(function() {
		d.current = e;
	}, [e]), s(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${c}`);
			var t = Ke([e.lockRef.current], (e.shards || []).map(Nt), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${c}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${c}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${c}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var f = n(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !d.current.allowPinchZoom;
		var n = Y(e), r = i.current, a = "deltaX" in e ? e.deltaX : r[0] - n[0], s = "deltaY" in e ? e.deltaY : r[1] - n[1], c, l = e.target, u = Math.abs(a) > Math.abs(s) ? "h" : "v";
		if ("touches" in e && u === "h" && l.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === l || p.contains(l))) return !1;
		var m = Tt(u, l);
		if (!m) return !0;
		if (m ? c = u : (c = u === "v" ? "h" : "v", m = Tt(u, l)), !m) return !1;
		if (!o.current && "changedTouches" in e && (a || s) && (o.current = c), !c) return !0;
		var h = o.current || c;
		return jt(h, t, e, h === "h" ? a : s, !0);
	}, []), m = n(function(e) {
		var n = e;
		if (!(!X.length || X[X.length - 1] !== u)) {
			var r = "deltaY" in n ? Mt(n) : Y(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Pt(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (d.current.shards || []).map(Nt).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? f(n, a[0]) : !d.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), h = n(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Rt(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), g = n(function(e) {
		i.current = Y(e), o.current = void 0;
	}, []), _ = n(function(t) {
		h(t.type, Mt(t), t.target, f(t, e.lockRef.current));
	}, []), v = n(function(t) {
		h(t.type, Y(t), t.target, f(t, e.lockRef.current));
	}, []);
	s(function() {
		return X.push(u), e.setCallbacks({
			onScrollCapture: _,
			onWheelCapture: _,
			onTouchMoveCapture: v
		}), document.addEventListener("wheel", m, J), document.addEventListener("touchmove", m, J), document.addEventListener("touchstart", g, J), function() {
			X = X.filter(function(e) {
				return e !== u;
			}), document.removeEventListener("wheel", m, J), document.removeEventListener("touchmove", m, J), document.removeEventListener("touchstart", g, J);
		};
	}, []);
	var y = e.removeScrollBar, b = e.inert;
	return r(a, null, b ? r(u, { styles: Ft(c) }) : null, y ? r(bt, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Rt(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var zt = rt(it, Lt);
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/Combination.js
f();
var Bt = c(function(e, t) {
	return r(U, R({}, e, {
		ref: t,
		sideCar: zt
	}));
});
Bt.classNames = U.classNames;
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Vt = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Z = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), $ = {}, Ht = 0, Ut = function(e) {
	return e && (e.host || Ut(e.parentNode));
}, Wt = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ut(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Gt = function(e, t, n, r) {
	var i = Wt(t, Array.isArray(e) ? e : [e]);
	$[n] || ($[n] = /* @__PURE__ */ new WeakMap());
	var a = $[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Z.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Z.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Q.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Ht++, function() {
		o.forEach(function(e) {
			var t = Z.get(e) - 1, i = a.get(e) - 1;
			Z.set(e, t), a.set(e, i), t || (Q.has(e) || e.removeAttribute(r), Q.delete(e)), i || e.removeAttribute(n);
		}), Ht--, Ht || (Z = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), $ = {});
	};
}, Kt = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Vt(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Gt(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
export { S as _, Re as a, j as c, ie as d, te as f, w as g, C as h, Be as i, A as l, E as m, Bt as n, Ee as o, k as p, Ue as r, _e as s, Kt as t, ue as u };

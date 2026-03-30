import { h as e, s as t, u as n } from "../../scripts/parser-YLn5-Se2.js";
import { C as r, m as i, r as a } from "../../scripts/utils-kL9Kd3j1.js";
import { C as o, Et as s, N as c, dt as l, gt as u, k as d, ot as f, pt as p, rt as m, wt as h, xt as g } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as _ } from "../../scripts/headline-1Uwx5fu-.js";
import { a as v, n as y, o as ee, r as b, s as x, t as S, u as C } from "../../scripts/dist-CeBxUC6o.js";
import { n as te, t as ne } from "../../scripts/dist-eWzfRhmO.js";
import { t as w } from "../../scripts/esm-BB_C1aMS.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collapsible@1.1.12_@types+react-dom@19.2.3_@types+react@19.2.14__@types_10a2c6d0ac3bcc7422bd3020fe61e076/node_modules/@radix-ui/react-collapsible/dist/index.mjs
p();
var T = "Collapsible", [re, E] = C(T), [ie, D] = re(T), O = f((e, t) => {
	let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e, [c, l] = v({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: T
	});
	return /* @__PURE__ */ m(ie, {
		scope: n,
		disabled: a,
		contentId: S(),
		open: c,
		onOpenToggle: h(() => l((e) => !e), [l]),
		children: /* @__PURE__ */ m(b.div, {
			"data-state": N(c),
			"data-disabled": a ? "" : void 0,
			...s,
			ref: t
		})
	});
});
O.displayName = T;
var k = "CollapsibleTrigger", A = f((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = D(k, n);
	return /* @__PURE__ */ m(b.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": N(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: x(e.onClick, i.onOpenToggle)
	});
});
A.displayName = k;
var j = "CollapsibleContent", M = f((e, t) => {
	let { forceMount: n, ...r } = e, i = D(j, e.__scopeCollapsible);
	return /* @__PURE__ */ m(y, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ m(ae, {
			...r,
			ref: t,
			present: e
		})
	});
});
M.displayName = j;
var ae = f((e, t) => {
	let { __scopeCollapsible: n, present: i, children: a, ...o } = e, c = D(j, n), [l, d] = g(i), f = u(null), p = r(t, f), h = u(0), _ = h.current, v = u(0), y = v.current, x = c.open || l, S = u(x), C = u(void 0);
	return s(() => {
		let e = requestAnimationFrame(() => S.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), ee(() => {
		let e = f.current;
		if (e) {
			C.current = C.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			h.current = t.height, v.current = t.width, S.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), d(i);
		}
	}, [c.open, i]), /* @__PURE__ */ m(b.div, {
		"data-state": N(c.open),
		"data-disabled": c.disabled ? "" : void 0,
		id: c.contentId,
		hidden: !x,
		...o,
		ref: p,
		style: {
			"--radix-collapsible-content-height": _ ? `${_}px` : void 0,
			"--radix-collapsible-content-width": y ? `${y}px` : void 0,
			...e.style
		},
		children: x && a
	});
});
function N(e) {
	return e ? "open" : "closed";
}
var oe = O, se = A, ce = M;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-accordion@1.2.12_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_8b3df72274e0fa0cff1629993ef7cc33/node_modules/@radix-ui/react-accordion/dist/index.mjs
p();
var P = "Accordion", le = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [F, ue, de] = te(P), [I, fe] = C(P, [de, E]), L = E(), R = l.forwardRef((e, t) => {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ m(F.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ m(ge, {
			...a,
			ref: t
		}) : /* @__PURE__ */ m(he, {
			...i,
			ref: t
		})
	});
});
R.displayName = P;
var [z, pe] = I(P), [B, me] = I(P, { collapsible: !1 }), he = l.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, collapsible: a = !1, ...o } = e, [s, c] = v({
		prop: n,
		defaultProp: r ?? "",
		onChange: i,
		caller: P
	});
	return /* @__PURE__ */ m(z, {
		scope: e.__scopeAccordion,
		value: l.useMemo(() => s ? [s] : [], [s]),
		onItemOpen: c,
		onItemClose: l.useCallback(() => a && c(""), [a, c]),
		children: /* @__PURE__ */ m(B, {
			scope: e.__scopeAccordion,
			collapsible: a,
			children: /* @__PURE__ */ m(H, {
				...o,
				ref: t
			})
		})
	});
}), ge = l.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e, [o, s] = v({
		prop: n,
		defaultProp: r ?? [],
		onChange: i,
		caller: P
	}), c = l.useCallback((e) => s((t = []) => [...t, e]), [s]), u = l.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
	return /* @__PURE__ */ m(z, {
		scope: e.__scopeAccordion,
		value: o,
		onItemOpen: c,
		onItemClose: u,
		children: /* @__PURE__ */ m(B, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ m(H, {
				...a,
				ref: t
			})
		})
	});
}), [_e, V] = I(P), H = l.forwardRef((e, t) => {
	let { __scopeAccordion: n, disabled: i, dir: a, orientation: o = "vertical", ...s } = e, c = r(l.useRef(null), t), u = ue(n), d = ne(a) === "ltr", f = x(e.onKeyDown, (e) => {
		if (!le.includes(e.key)) return;
		let t = e.target, n = u().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let a = r, s = i - 1, c = () => {
			a = r + 1, a > s && (a = 0);
		}, l = () => {
			a = r - 1, a < 0 && (a = s);
		};
		switch (e.key) {
			case "Home":
				a = 0;
				break;
			case "End":
				a = s;
				break;
			case "ArrowRight":
				o === "horizontal" && (d ? c() : l());
				break;
			case "ArrowDown":
				o === "vertical" && c();
				break;
			case "ArrowLeft":
				o === "horizontal" && (d ? l() : c());
				break;
			case "ArrowUp":
				o === "vertical" && l();
				break;
		}
		n[a % i].ref.current?.focus();
	});
	return /* @__PURE__ */ m(_e, {
		scope: n,
		disabled: i,
		direction: a,
		orientation: o,
		children: /* @__PURE__ */ m(F.Slot, {
			scope: n,
			children: /* @__PURE__ */ m(b.div, {
				...s,
				"data-orientation": o,
				ref: c,
				onKeyDown: i ? void 0 : f
			})
		})
	});
}), U = "AccordionItem", [ve, W] = I(U), G = l.forwardRef((e, t) => {
	let { __scopeAccordion: n, value: r, ...i } = e, a = V(U, n), o = pe(U, n), s = L(n), c = S(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ m(ve, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ m(oe, {
			"data-orientation": a.orientation,
			"data-state": Q(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
});
G.displayName = U;
var K = "AccordionHeader", q = l.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = V(P, n), a = W(K, n);
	return /* @__PURE__ */ m(b.h3, {
		"data-orientation": i.orientation,
		"data-state": Q(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
q.displayName = K;
var J = "AccordionTrigger", Y = l.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = V(P, n), a = W(J, n), o = me(J, n), s = L(n);
	return /* @__PURE__ */ m(F.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ m(se, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
});
Y.displayName = J;
var X = "AccordionContent", Z = l.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = V(P, n), a = W(X, n), o = L(n);
	return /* @__PURE__ */ m(ce, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
});
Z.displayName = X;
function Q(e) {
	return e ? "open" : "closed";
}
var ye = R, be = G, xe = q, Se = Y, Ce = Z;
//#endregion
//#region src/components/ui/accordion.tsx
p();
function we({ ...e }) {
	return /* @__PURE__ */ m(ye, {
		"data-slot": "accordion",
		...e
	});
}
function Te({ className: e, ...t }) {
	return /* @__PURE__ */ m(be, {
		"data-slot": "accordion-item",
		className: a("bg-white border-b first:border-t border-gray-15 has-focus-visible:border-transparent hover:bg-gray-4 has-disabled:border-gray-3 has-focus-visible:shadow-[inset_0_0_0_2px] has-focus-visible:shadow-pressed has-focus-visible:z-10", e),
		...t
	});
}
function Ee({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ m(xe, {
		className: "flex",
		children: /* @__PURE__ */ m(Se, {
			"data-slot": "accordion-trigger",
			className: a("group flex flex-1 items-start justify-between gap-4 p-6 text-left text-h5 transition-all outline-none disabled:pointer-events-none disabled:text-gray-3", e),
			...n,
			children: [
				t,
				/* @__PURE__ */ m(d, { className: "size-6 group-data-[state=open]:hidden" }),
				/* @__PURE__ */ m(c, { className: "size-6 group-data-[state=closed]:hidden" })
			]
		})
	});
}
function $({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ m(Ce, {
		"data-slot": "accordion-content",
		className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-gray-1 px-6",
		...n,
		children: /* @__PURE__ */ m("div", {
			className: a("pt-0 pb-6", e),
			children: t
		})
	});
}
//#endregion
//#region src/components/accordion/accordion.tsx
p();
function De({ headline: e, subHeadline: t, link: n, type: r, items: a }) {
	let [o, c] = g(a.find((e) => e.open)?.id || void 0), [l, u] = g(a.filter((e) => e.open).map((e) => e.id) || void 0);
	return s(() => {
		let e = window.location.hash.replace("#", "");
		e && (c(e), u([e]));
	}, []), s(() => {
		let e = () => {
			let e = window.location.hash.replace("#", "");
			e && (c(e), u([e]));
		};
		return window.addEventListener("hashchange", e), () => window.removeEventListener("hashchange", e);
	}, []), /* @__PURE__ */ m("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ m(_, {
			headline: e,
			subHeadline: t,
			link: n
		}), r === "single" ? /* @__PURE__ */ m(we, {
			type: "single",
			collapsible: !0,
			className: "w-full max-w-[860px] mx-auto",
			value: o,
			onValueChange: c,
			children: a.map((e) => /* @__PURE__ */ m(Te, {
				value: e.id,
				children: [/* @__PURE__ */ m(Ee, {
					id: e.id,
					children: e.label
				}), /* @__PURE__ */ m($, { children: /* @__PURE__ */ m(w, {
					className: "prose",
					content: e.value,
					transform: i
				}) })]
			}, e.id))
		}) : /* @__PURE__ */ m(we, {
			type: "multiple",
			className: "w-full max-w-[860px] mx-auto",
			value: l,
			onValueChange: u,
			children: a.map((e) => /* @__PURE__ */ m(Te, {
				value: e.id,
				children: [/* @__PURE__ */ m(Ee, {
					id: e.id,
					children: e.label
				}), /* @__PURE__ */ m($, { children: /* @__PURE__ */ m(w, {
					className: "prose",
					content: e.value,
					transform: i
				}) })]
			}, e.id))
		})]
	});
}
//#endregion
//#region src/blocks/accordion/accordion.tsx
async function Oe(r) {
	let [i, a, o, ...s] = Array.from(r.children);
	return {
		...t(i.querySelector("h1, h2, h3, h4, h5, h6"), a.textContent, o.querySelector("a")),
		type: r.classList.contains("multiple") ? "multiple" : "single",
		items: s.map((t, r) => {
			let [i, a, o, s] = Array.from(t.children);
			return {
				id: e(i.textContent) ?? `item-${r}`,
				label: e(a.textContent),
				value: o.innerHTML,
				open: n(s?.textContent) === "open"
			};
		})
	};
}
async function ke(e) {
	let t = await Oe(e);
	o(e).render(/* @__PURE__ */ m(De, { ...t }));
}
//#endregion
export { ke as default };

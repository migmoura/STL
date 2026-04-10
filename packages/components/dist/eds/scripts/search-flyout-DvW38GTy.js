import { C as e, r as t } from "./utils-Cw5qLqcS.js";
import { Ct as n, Tt as r, at as i, bt as a, ft as o, ht as s, nt as c } from "./react-w7ldCLEn.js";
import "./esm-Ccs46AP5.js";
import { t as l } from "./useTranslation-D2-izOQw.js";
import "./picture-DtJCwEBx.js";
import { t as u } from "./dist-BPI1VaeD.js";
import { _ as d, a as f, d as p, f as m, g as h, i as g, l as _, n as v, o as y, p as b, r as ee, s as x, t as S } from "./es2015-CAHZSTi-.js";
import { a as C, i as w, n as T, r as te, t as E } from "./dist-BeZMvV7F.js";
import { n as D } from "./input-D5kPLzUd.js";
import "./use-search-7ykMqwIw.js";
import { n as ne } from "./search-results-gUoVBg-M.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_8b5332f8e883134e9d9ab2856fc4395d/node_modules/@radix-ui/react-popover/dist/index.mjs
o();
var O = "Popover", [k, re] = h(O, [C]), A = C(), [j, M] = k(O), N = (e) => {
	let { __scopePopover: t, children: r, open: i, defaultOpen: o, onOpenChange: l, modal: u = !1 } = e, d = A(t), f = s(null), [p, h] = a(!1), [g, _] = m({
		prop: i,
		defaultProp: o ?? !1,
		onChange: l,
		caller: O
	});
	return /* @__PURE__ */ c(w, {
		...d,
		children: /* @__PURE__ */ c(j, {
			scope: t,
			contentId: b(),
			triggerRef: f,
			open: g,
			onOpenChange: _,
			onOpenToggle: n(() => _((e) => !e), [_]),
			hasCustomAnchor: p,
			onCustomAnchorAdd: n(() => h(!0), []),
			onCustomAnchorRemove: n(() => h(!1), []),
			modal: u,
			children: r
		})
	});
};
N.displayName = O;
var P = "PopoverAnchor", F = i((e, t) => {
	let { __scopePopover: n, ...i } = e, a = M(P, n), o = A(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: l } = a;
	return r(() => (s(), () => l()), [s, l]), /* @__PURE__ */ c(E, {
		...o,
		...i,
		ref: t
	});
});
F.displayName = P;
var I = "PopoverTrigger", L = i((t, n) => {
	let { __scopePopover: r, ...i } = t, a = M(I, r), o = A(r), s = e(n, a.triggerRef), l = /* @__PURE__ */ c(_.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.contentId,
		"data-state": Z(a.open),
		...i,
		ref: s,
		onClick: d(t.onClick, a.onOpenToggle)
	});
	return a.hasCustomAnchor ? l : /* @__PURE__ */ c(E, {
		asChild: !0,
		...o,
		children: l
	});
});
L.displayName = I;
var R = "PopoverPortal", [z, B] = k(R, { forceMount: void 0 }), V = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = M(R, t);
	return /* @__PURE__ */ c(z, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ c(g, {
			present: n || a.open,
			children: /* @__PURE__ */ c(f, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
V.displayName = R;
var H = "PopoverContent", U = i((e, t) => {
	let n = B(H, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = M(H, e.__scopePopover);
	return /* @__PURE__ */ c(g, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ c(G, {
			...i,
			ref: t
		}) : /* @__PURE__ */ c(K, {
			...i,
			ref: t
		})
	});
});
U.displayName = H;
var W = p("PopoverContent.RemoveScroll"), G = i((t, n) => {
	let i = M(H, t.__scopePopover), a = s(null), o = e(n, a), l = s(!1);
	return r(() => {
		let e = a.current;
		if (e) return S(e);
	}, []), /* @__PURE__ */ c(v, {
		as: W,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ c(q, {
			...t,
			ref: o,
			trapFocus: i.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: d(t.onCloseAutoFocus, (e) => {
				e.preventDefault(), l.current || i.triggerRef.current?.focus();
			}),
			onPointerDownOutside: d(t.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				l.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: d(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), K = i((e, t) => {
	let n = M(H, e.__scopePopover), r = s(!1), i = s(!1);
	return /* @__PURE__ */ c(q, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), q = i((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d, ...f } = e, p = M(H, n), m = A(n);
	return ee(), /* @__PURE__ */ c(y, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ c(x, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: d,
			onEscapeKeyDown: s,
			onPointerDownOutside: l,
			onFocusOutside: u,
			onDismiss: () => p.onOpenChange(!1),
			children: /* @__PURE__ */ c(te, {
				"data-state": Z(p.open),
				role: "dialog",
				id: p.contentId,
				...m,
				...f,
				ref: t,
				style: {
					...f.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), J = "PopoverClose", Y = i((e, t) => {
	let { __scopePopover: n, ...r } = e, i = M(J, n);
	return /* @__PURE__ */ c(_.button, {
		type: "button",
		...r,
		ref: t,
		onClick: d(e.onClick, () => i.onOpenChange(!1))
	});
});
Y.displayName = J;
var X = "PopoverArrow", ie = i((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ c(T, {
		...A(n),
		...r,
		ref: t
	});
});
ie.displayName = X;
function Z(e) {
	return e ? "open" : "closed";
}
var ae = N, oe = F, Q = V, se = U;
//#endregion
//#region src/components/ui/popover.tsx
o();
function ce({ ...e }) {
	return /* @__PURE__ */ c(ae, {
		"data-slot": "popover",
		...e
	});
}
function le({ className: e, align: n = "center", sideOffset: r = 24, container: i, forceMount: a, ...o }) {
	return /* @__PURE__ */ c(Q, {
		container: i,
		forceMount: a,
		children: /* @__PURE__ */ c(se, {
			"data-slot": "popover-content",
			align: n,
			sideOffset: r,
			className: t("relative w-full overflow-hidden bg-white shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] origin-(--radix-popover-content-transform-origin) outline-none", e),
			...o
		})
	});
}
function ue({ ...e }) {
	return /* @__PURE__ */ c(oe, {
		"data-slot": "popover-anchor",
		...e
	});
}
//#endregion
//#region src/features/navigation/components/search-flyout.tsx
o();
function $({ indexes: e, link: t }) {
	let n = s(null), i = s(null), [o, d] = a(""), [f, p] = a(!1), m = u(d, 300), { t: h } = l(), g = new URL(t?.href || "", window.location.origin);
	g.searchParams.set("q", o);
	let _ = t ? {
		...t,
		href: g.href
	} : void 0;
	r(() => {
		let e = o.trim();
		e.length > 2 && p(!0), e.length === 0 && p(!1);
	}, [o]);
	let [v, y] = a(null);
	return r(() => {
		let e = document.querySelector("#top");
		e && y(e);
	}, []), /* @__PURE__ */ c(ce, {
		open: f,
		onOpenChange: p,
		children: [/* @__PURE__ */ c(ue, {
			className: "w-full",
			children: /* @__PURE__ */ c(D, {
				ref: n,
				"aria-expanded": f,
				"aria-controls": "search-flyout",
				role: "combobox",
				className: "text-white text-sm ml-auto w-fit xl:w-[400px]",
				"data-slot": "popover-trigger",
				placeholder: h("Search..."),
				onChange: (e) => m(e.target.value),
				onKeyDown: (e) => {
					if (i.current && e.key === "ArrowDown") e.preventDefault(), i.current.querySelector("a")?.focus();
					else if (e.key === "Enter") if (e.preventDefault(), !i.current) p(!0);
					else {
						if (!_) return;
						window.location.href = _.href;
					}
					else i.current && e.key === "Escape" && (e.preventDefault(), p(!1));
				}
			})
		}), /* @__PURE__ */ c(le, {
			asChild: !0,
			id: "search-flyout",
			container: v,
			onOpenAutoFocus: (e) => e.preventDefault(),
			onCloseAutoFocus: (e) => {
				e.preventDefault(), n.current && n.current.focus();
			},
			children: /* @__PURE__ */ c("div", {
				ref: i,
				children: /* @__PURE__ */ c(ne, {
					indexes: e,
					link: _,
					query: o
				})
			})
		})]
	});
}
//#endregion
export { $ as SearchFlyout, $ as default };

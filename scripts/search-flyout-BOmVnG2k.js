import { C as e, r as t } from "./utils-kL9Kd3j1.js";
import { Et as n, gt as r, ot as i, pt as a, rt as o, wt as s, xt as c } from "./react-DLNUXPF9.js";
import { a as l, c as u, n as d, r as f, s as p, t as m, u as h } from "./dist-CeBxUC6o.js";
import "./esm-BB_C1aMS.js";
import { t as g } from "./useTranslation-Cl_kknJx.js";
import "./picture-DXSbVeQF.js";
import { t as _ } from "./dist-DkU8_-4E.js";
import { a as v, i as y, n as b, o as ee, r as x, t as S } from "./es2015-Lwokp0LN.js";
import { a as C, i as w, n as T, r as te, t as E } from "./dist-CUiAlu8h.js";
import { n as D } from "./input-B3cTQm8l.js";
import "./use-search-C-A3LLIr.js";
import "./scroll-CqZfFQXp.js";
import { n as ne } from "./search-results-BB4NeJ1x.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_8b5332f8e883134e9d9ab2856fc4395d/node_modules/@radix-ui/react-popover/dist/index.mjs
a();
var O = "Popover", [k, re] = h(O, [C]), A = C(), [j, M] = k(O), N = (e) => {
	let { __scopePopover: t, children: n, open: i, defaultOpen: a, onOpenChange: u, modal: d = !1 } = e, f = A(t), p = r(null), [h, g] = c(!1), [_, v] = l({
		prop: i,
		defaultProp: a ?? !1,
		onChange: u,
		caller: O
	});
	return /* @__PURE__ */ o(w, {
		...f,
		children: /* @__PURE__ */ o(j, {
			scope: t,
			contentId: m(),
			triggerRef: p,
			open: _,
			onOpenChange: v,
			onOpenToggle: s(() => v((e) => !e), [v]),
			hasCustomAnchor: h,
			onCustomAnchorAdd: s(() => g(!0), []),
			onCustomAnchorRemove: s(() => g(!1), []),
			modal: d,
			children: n
		})
	});
};
N.displayName = O;
var P = "PopoverAnchor", F = i((e, t) => {
	let { __scopePopover: r, ...i } = e, a = M(P, r), s = A(r), { onCustomAnchorAdd: c, onCustomAnchorRemove: l } = a;
	return n(() => (c(), () => l()), [c, l]), /* @__PURE__ */ o(E, {
		...s,
		...i,
		ref: t
	});
});
F.displayName = P;
var I = "PopoverTrigger", L = i((t, n) => {
	let { __scopePopover: r, ...i } = t, a = M(I, r), s = A(r), c = e(n, a.triggerRef), l = /* @__PURE__ */ o(f.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.contentId,
		"data-state": Z(a.open),
		...i,
		ref: c,
		onClick: p(t.onClick, a.onOpenToggle)
	});
	return a.hasCustomAnchor ? l : /* @__PURE__ */ o(E, {
		asChild: !0,
		...s,
		children: l
	});
});
L.displayName = I;
var R = "PopoverPortal", [z, B] = k(R, { forceMount: void 0 }), V = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = M(R, t);
	return /* @__PURE__ */ o(z, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ o(d, {
			present: n || a.open,
			children: /* @__PURE__ */ o(y, {
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
	return /* @__PURE__ */ o(d, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ o(G, {
			...i,
			ref: t
		}) : /* @__PURE__ */ o(K, {
			...i,
			ref: t
		})
	});
});
U.displayName = H;
var W = u("PopoverContent.RemoveScroll"), G = i((t, i) => {
	let a = M(H, t.__scopePopover), s = r(null), c = e(i, s), l = r(!1);
	return n(() => {
		let e = s.current;
		if (e) return S(e);
	}, []), /* @__PURE__ */ o(b, {
		as: W,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ o(q, {
			...t,
			ref: c,
			trapFocus: a.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: p(t.onCloseAutoFocus, (e) => {
				e.preventDefault(), l.current || a.triggerRef.current?.focus();
			}),
			onPointerDownOutside: p(t.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				l.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: p(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), K = i((e, t) => {
	let n = M(H, e.__scopePopover), i = r(!1), a = r(!1);
	return /* @__PURE__ */ o(q, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (i.current || n.triggerRef.current?.focus(), t.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (i.current = !0, t.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let r = t.target;
			n.triggerRef.current?.contains(r) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && a.current && t.preventDefault();
		}
	});
}), q = i((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d, ...f } = e, p = M(H, n), m = A(n);
	return x(), /* @__PURE__ */ o(v, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ o(ee, {
			asChild: !0,
			disableOutsidePointerEvents: s,
			onInteractOutside: d,
			onEscapeKeyDown: c,
			onPointerDownOutside: l,
			onFocusOutside: u,
			onDismiss: () => p.onOpenChange(!1),
			children: /* @__PURE__ */ o(te, {
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
	return /* @__PURE__ */ o(f.button, {
		type: "button",
		...r,
		ref: t,
		onClick: p(e.onClick, () => i.onOpenChange(!1))
	});
});
Y.displayName = J;
var X = "PopoverArrow", ie = i((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ o(T, {
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
a();
function ce({ ...e }) {
	return /* @__PURE__ */ o(ae, {
		"data-slot": "popover",
		...e
	});
}
function le({ className: e, align: n = "center", sideOffset: r = 24, container: i, forceMount: a, ...s }) {
	return /* @__PURE__ */ o(Q, {
		container: i,
		forceMount: a,
		children: /* @__PURE__ */ o(se, {
			"data-slot": "popover-content",
			align: n,
			sideOffset: r,
			className: t("relative w-full overflow-hidden bg-white shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] origin-(--radix-popover-content-transform-origin) outline-none", e),
			...s
		})
	});
}
function ue({ ...e }) {
	return /* @__PURE__ */ o(oe, {
		"data-slot": "popover-anchor",
		...e
	});
}
//#endregion
//#region src/features/navigation/components/search-flyout.tsx
a();
function $({ indexes: e, link: t }) {
	let i = r(null), a = r(null), [s, l] = c(""), [u, d] = c(!1), f = _(l, 300), { t: p } = g(), m = new URL(t?.href || "", window.location.origin);
	m.searchParams.set("q", s);
	let h = t ? {
		...t,
		href: m.href
	} : void 0;
	n(() => {
		let e = s.trim();
		e.length > 2 && d(!0), e.length === 0 && d(!1);
	}, [s]);
	let [v, y] = c(null);
	return n(() => {
		let e = document.querySelector("#top");
		e && y(e);
	}, []), /* @__PURE__ */ o(ce, {
		open: u,
		onOpenChange: d,
		children: [/* @__PURE__ */ o(ue, {
			className: "w-full",
			children: /* @__PURE__ */ o(D, {
				ref: i,
				"aria-expanded": u,
				"aria-controls": "search-flyout",
				role: "combobox",
				className: "text-white text-sm ml-auto w-fit xl:w-[400px]",
				"data-slot": "popover-trigger",
				placeholder: p("Search..."),
				onChange: (e) => f(e.target.value),
				onKeyDown: (e) => {
					if (a.current && e.key === "ArrowDown") e.preventDefault(), a.current.querySelector("a")?.focus();
					else if (e.key === "Enter") if (e.preventDefault(), !a.current) d(!0);
					else {
						if (!h) return;
						window.location.href = h.href;
					}
					else a.current && e.key === "Escape" && (e.preventDefault(), d(!1));
				}
			})
		}), /* @__PURE__ */ o(le, {
			asChild: !0,
			id: "search-flyout",
			container: v,
			onOpenAutoFocus: (e) => e.preventDefault(),
			onCloseAutoFocus: (e) => {
				e.preventDefault(), i.current && i.current.focus();
			},
			children: /* @__PURE__ */ o("div", {
				ref: a,
				children: /* @__PURE__ */ o(ne, {
					indexes: e,
					link: h,
					query: s
				})
			})
		})]
	});
}
//#endregion
export { $ as SearchFlyout, $ as default };

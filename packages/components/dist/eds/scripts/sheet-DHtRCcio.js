import { C as e, r as t, v as n, y as r } from "./utils-kL9Kd3j1.js";
import { Et as i, gt as a, kt as o, ot as s, pt as c, rt as l, st as u, w as d, wt as f } from "./react-DLNUXPF9.js";
import { a as p, c as m, l as ee, n as h, r as g, s as _, t as v, u as te } from "./dist-CeBxUC6o.js";
import { t as ne } from "./useTranslation-Cl_kknJx.js";
import { a as re, i as ie, n as ae, o as oe, r as se, t as ce } from "./es2015-Lwokp0LN.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+reac_779045218dc2799d336e7197abef9d38/node_modules/@radix-ui/react-dialog/dist/index.mjs
c();
var y = "Dialog", [b, le] = te(y), [ue, x] = b(y), S = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: o, modal: s = !0 } = e, c = a(null), u = a(null), [d, m] = p({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: y
	});
	return /* @__PURE__ */ l(ue, {
		scope: t,
		triggerRef: c,
		contentRef: u,
		contentId: v(),
		titleId: v(),
		descriptionId: v(),
		open: d,
		onOpenChange: m,
		onOpenToggle: f(() => m((e) => !e), [m]),
		modal: s,
		children: n
	});
};
S.displayName = y;
var C = "DialogTrigger", w = s((t, n) => {
	let { __scopeDialog: r, ...i } = t, a = x(C, r), o = e(n, a.triggerRef);
	return /* @__PURE__ */ l(g.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.contentId,
		"data-state": z(a.open),
		...i,
		ref: o,
		onClick: _(t.onClick, a.onOpenToggle)
	});
});
w.displayName = C;
var T = "DialogPortal", [de, E] = b(T, { forceMount: void 0 }), D = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = x(T, t);
	return /* @__PURE__ */ l(de, {
		scope: t,
		forceMount: n,
		children: u.map(r, (e) => /* @__PURE__ */ l(h, {
			present: n || a.open,
			children: /* @__PURE__ */ l(ie, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
D.displayName = T;
var O = "DialogOverlay", k = s((e, t) => {
	let n = E(O, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = x(O, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ l(h, {
		present: r || a.open,
		children: /* @__PURE__ */ l(pe, {
			...i,
			ref: t
		})
	}) : null;
});
k.displayName = O;
var fe = m("DialogOverlay.RemoveScroll"), pe = s((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = x(O, n);
	return /* @__PURE__ */ l(ae, {
		as: fe,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ l(g.div, {
			"data-state": z(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), A = "DialogContent", j = s((e, t) => {
	let n = E(A, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = x(A, e.__scopeDialog);
	return /* @__PURE__ */ l(h, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ l(me, {
			...i,
			ref: t
		}) : /* @__PURE__ */ l(he, {
			...i,
			ref: t
		})
	});
});
j.displayName = A;
var me = s((t, n) => {
	let r = x(A, t.__scopeDialog), o = a(null), s = e(n, r.contentRef, o);
	return i(() => {
		let e = o.current;
		if (e) return ce(e);
	}, []), /* @__PURE__ */ l(M, {
		...t,
		ref: s,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: _(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: _(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: _(t.onFocusOutside, (e) => e.preventDefault())
	});
}), he = s((e, t) => {
	let n = x(A, e.__scopeDialog), r = a(!1), i = a(!1);
	return /* @__PURE__ */ l(M, {
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
}), M = s((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: c, ...u } = t, d = x(A, r), f = a(null), p = e(n, f);
	return se(), /* @__PURE__ */ l(o, { children: [/* @__PURE__ */ l(re, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: s,
		onUnmountAutoFocus: c,
		children: /* @__PURE__ */ l(oe, {
			role: "dialog",
			id: d.contentId,
			"aria-describedby": d.descriptionId,
			"aria-labelledby": d.titleId,
			"data-state": z(d.open),
			...u,
			ref: p,
			onDismiss: () => d.onOpenChange(!1)
		})
	}), /* @__PURE__ */ l(o, { children: [/* @__PURE__ */ l(_e, { titleId: d.titleId }), /* @__PURE__ */ l(ye, {
		contentRef: f,
		descriptionId: d.descriptionId
	})] })] });
}), N = "DialogTitle", P = s((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = x(N, n);
	return /* @__PURE__ */ l(g.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
P.displayName = N;
var F = "DialogDescription", I = s((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = x(F, n);
	return /* @__PURE__ */ l(g.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
I.displayName = F;
var L = "DialogClose", R = s((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = x(L, n);
	return /* @__PURE__ */ l(g.button, {
		type: "button",
		...r,
		ref: t,
		onClick: _(e.onClick, () => i.onOpenChange(!1))
	});
});
R.displayName = L;
function z(e) {
	return e ? "open" : "closed";
}
var B = "DialogTitleWarning", [ge, V] = ee(B, {
	contentName: A,
	titleName: N,
	docsSlug: "dialog"
}), _e = ({ titleId: e }) => {
	let t = V(B), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return i(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, ve = "DialogDescriptionWarning", ye = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V(ve).contentName}}.`;
	return i(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, H = S, U = w, W = D, G = k, K = j, q = P, J = I, Y = R;
//#endregion
//#region src/components/ui/sheet.tsx
c();
var be = H, xe = U, X = Y, Se = W, Z = s(({ className: e, ...n }, r) => /* @__PURE__ */ l(G, {
	className: t("fixed inset-0 z-30 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...n,
	ref: r
}));
Z.displayName = G.displayName;
var Ce = r("fixed z-50 gap-4 bg-white shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-neutral-950", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 md:w-1/2 lg:w-1/3 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
		right: "inset-y-0 right-0 h-full w-3/4 md:w-1/2 lg:w-1/3 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
	} },
	defaultVariants: { side: "right" }
}), Q = s(({ side: e = "right", className: r, children: i, ...a }, o) => {
	let { t: s } = ne();
	return /* @__PURE__ */ l(Se, { children: [/* @__PURE__ */ l(Z, {}), /* @__PURE__ */ l(K, {
		ref: o,
		className: t(Ce({ side: e }), r),
		...a,
		children: [
			/* @__PURE__ */ l(n, {
				size: "icon",
				variant: "secondary",
				asChild: !0,
				children: /* @__PURE__ */ l(X, {
					className: "absolute md:hidden top-6 right-6 z-100 data-[state=open]:bg-gray-4",
					children: [/* @__PURE__ */ l(d, { className: "h-4 w-4" }), /* @__PURE__ */ l("span", {
						className: "sr-only",
						children: s("Close")
					})]
				})
			}),
			/* @__PURE__ */ l(X, {
				className: "hidden md:block absolute md:right-10 md:top-10 z-100 data-[state=open]:bg-gray-4",
				children: [/* @__PURE__ */ l(d, { className: "size-10" }), /* @__PURE__ */ l("span", {
					className: "sr-only",
					children: s("Close")
				})]
			}),
			i
		]
	})] });
});
Q.displayName = K.displayName;
var $ = ({ className: e, ...n }) => /* @__PURE__ */ l("div", {
	className: t("flex space-y-2 text-center sm:text-left", e),
	...n
});
$.displayName = "SheetHeader";
var we = ({ className: e, ...n }) => /* @__PURE__ */ l("div", {
	className: t("flex flex-col sm:flex-row", e),
	...n
});
we.displayName = "SheetFooter";
var Te = s(({ className: e, ...n }, r) => /* @__PURE__ */ l(q, {
	ref: r,
	className: t("text-h4 md:text-h4", e),
	...n
}));
Te.displayName = q.displayName;
var Ee = s(({ className: e, ...n }, r) => /* @__PURE__ */ l(J, {
	ref: r,
	className: t("text-sm text-neutral-500 dark:text-neutral-400", e),
	...n
}));
Ee.displayName = J.displayName;
//#endregion
export { xe as a, G as c, U as d, Te as i, W as l, Q as n, Y as o, $ as r, K as s, be as t, H as u };

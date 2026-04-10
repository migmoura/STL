import { C as e, r as t, v as n, y as r } from "./utils-Cw5qLqcS.js";
import { Ct as i, D as a, Ot as o, Tt as s, at as c, ft as l, ht as u, nt as d, ot as f } from "./react-w7ldCLEn.js";
import { t as p } from "./useTranslation-D2-izOQw.js";
import { _ as m, a as ee, d as te, f as ne, g as re, h as ie, i as h, l as g, n as ae, o as oe, p as _, r as se, s as ce, t as le } from "./es2015-CAHZSTi-.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+reac_779045218dc2799d336e7197abef9d38/node_modules/@radix-ui/react-dialog/dist/index.mjs
l();
var v = "Dialog", [y, ue] = re(v), [de, b] = y(v), x = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = u(null), l = u(null), [f, p] = ne({
		prop: r,
		defaultProp: a ?? !1,
		onChange: o,
		caller: v
	});
	return /* @__PURE__ */ d(de, {
		scope: t,
		triggerRef: c,
		contentRef: l,
		contentId: _(),
		titleId: _(),
		descriptionId: _(),
		open: f,
		onOpenChange: p,
		onOpenToggle: i(() => p((e) => !e), [p]),
		modal: s,
		children: n
	});
};
x.displayName = v;
var S = "DialogTrigger", C = c((t, n) => {
	let { __scopeDialog: r, ...i } = t, a = b(S, r), o = e(n, a.triggerRef);
	return /* @__PURE__ */ d(g.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.contentId,
		"data-state": R(a.open),
		...i,
		ref: o,
		onClick: m(t.onClick, a.onOpenToggle)
	});
});
C.displayName = S;
var w = "DialogPortal", [fe, T] = y(w, { forceMount: void 0 }), E = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = b(w, t);
	return /* @__PURE__ */ d(fe, {
		scope: t,
		forceMount: n,
		children: f.map(r, (e) => /* @__PURE__ */ d(h, {
			present: n || a.open,
			children: /* @__PURE__ */ d(ee, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
E.displayName = w;
var D = "DialogOverlay", O = c((e, t) => {
	let n = T(D, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = b(D, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ d(h, {
		present: r || a.open,
		children: /* @__PURE__ */ d(me, {
			...i,
			ref: t
		})
	}) : null;
});
O.displayName = D;
var pe = te("DialogOverlay.RemoveScroll"), me = c((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = b(D, n);
	return /* @__PURE__ */ d(ae, {
		as: pe,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ d(g.div, {
			"data-state": R(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), k = "DialogContent", A = c((e, t) => {
	let n = T(k, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = b(k, e.__scopeDialog);
	return /* @__PURE__ */ d(h, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ d(he, {
			...i,
			ref: t
		}) : /* @__PURE__ */ d(ge, {
			...i,
			ref: t
		})
	});
});
A.displayName = k;
var he = c((t, n) => {
	let r = b(k, t.__scopeDialog), i = u(null), a = e(n, r.contentRef, i);
	return s(() => {
		let e = i.current;
		if (e) return le(e);
	}, []), /* @__PURE__ */ d(j, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: m(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: m(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: m(t.onFocusOutside, (e) => e.preventDefault())
	});
}), ge = c((e, t) => {
	let n = b(k, e.__scopeDialog), r = u(!1), i = u(!1);
	return /* @__PURE__ */ d(j, {
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
}), j = c((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: s, ...c } = t, l = b(k, r), f = u(null), p = e(n, f);
	return se(), /* @__PURE__ */ d(o, { children: [/* @__PURE__ */ d(oe, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: a,
		onUnmountAutoFocus: s,
		children: /* @__PURE__ */ d(ce, {
			role: "dialog",
			id: l.contentId,
			"aria-describedby": l.descriptionId,
			"aria-labelledby": l.titleId,
			"data-state": R(l.open),
			...c,
			ref: p,
			onDismiss: () => l.onOpenChange(!1)
		})
	}), /* @__PURE__ */ d(o, { children: [/* @__PURE__ */ d(ve, { titleId: l.titleId }), /* @__PURE__ */ d(be, {
		contentRef: f,
		descriptionId: l.descriptionId
	})] })] });
}), M = "DialogTitle", N = c((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = b(M, n);
	return /* @__PURE__ */ d(g.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
N.displayName = M;
var P = "DialogDescription", F = c((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = b(P, n);
	return /* @__PURE__ */ d(g.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
F.displayName = P;
var I = "DialogClose", L = c((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = b(I, n);
	return /* @__PURE__ */ d(g.button, {
		type: "button",
		...r,
		ref: t,
		onClick: m(e.onClick, () => i.onOpenChange(!1))
	});
});
L.displayName = I;
function R(e) {
	return e ? "open" : "closed";
}
var z = "DialogTitleWarning", [_e, B] = ie(z, {
	contentName: k,
	titleName: M,
	docsSlug: "dialog"
}), ve = ({ titleId: e }) => {
	let t = B(z), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return s(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, ye = "DialogDescriptionWarning", be = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${B(ye).contentName}}.`;
	return s(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, V = x, H = C, U = E, W = O, G = A, K = N, q = F, J = L;
//#endregion
//#region src/components/ui/sheet.tsx
l();
var xe = V, Se = H, Y = J, Ce = U, X = c(({ className: e, ...n }, r) => /* @__PURE__ */ d(W, {
	className: t("fixed inset-0 z-30 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...n,
	ref: r
}));
X.displayName = W.displayName;
var we = r("fixed z-50 gap-4 bg-white shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-neutral-950", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 md:w-1/2 lg:w-1/3 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
		right: "inset-y-0 right-0 h-full w-3/4 md:w-1/2 lg:w-1/3 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
	} },
	defaultVariants: { side: "right" }
}), Z = c(({ side: e = "right", className: r, children: i, ...o }, s) => {
	let { t: c } = p();
	return /* @__PURE__ */ d(Ce, { children: [/* @__PURE__ */ d(X, {}), /* @__PURE__ */ d(G, {
		ref: s,
		className: t(we({ side: e }), r),
		...o,
		children: [
			/* @__PURE__ */ d(n, {
				size: "icon",
				variant: "secondary",
				asChild: !0,
				children: /* @__PURE__ */ d(Y, {
					className: "absolute md:hidden top-6 right-6 z-100 data-[state=open]:bg-gray-4",
					children: [/* @__PURE__ */ d(a, { className: "h-4 w-4" }), /* @__PURE__ */ d("span", {
						className: "sr-only",
						children: c("Close")
					})]
				})
			}),
			/* @__PURE__ */ d(Y, {
				className: "hidden md:block absolute md:right-10 md:top-10 z-100 data-[state=open]:bg-gray-4",
				children: [/* @__PURE__ */ d(a, { className: "size-10" }), /* @__PURE__ */ d("span", {
					className: "sr-only",
					children: c("Close")
				})]
			}),
			i
		]
	})] });
});
Z.displayName = G.displayName;
var Q = ({ className: e, ...n }) => /* @__PURE__ */ d("div", {
	className: t("flex space-y-2 text-center sm:text-left", e),
	...n
});
Q.displayName = "SheetHeader";
var Te = ({ className: e, ...n }) => /* @__PURE__ */ d("div", {
	className: t("flex flex-col sm:flex-row", e),
	...n
});
Te.displayName = "SheetFooter";
var $ = c(({ className: e, ...n }, r) => /* @__PURE__ */ d(K, {
	ref: r,
	className: t("text-h4 md:text-h4", e),
	...n
}));
$.displayName = K.displayName;
var Ee = c(({ className: e, ...n }, r) => /* @__PURE__ */ d(q, {
	ref: r,
	className: t("text-sm text-neutral-500 dark:text-neutral-400", e),
	...n
}));
Ee.displayName = q.displayName;
//#endregion
export { Se as a, W as c, H as d, $ as i, U as l, Z as n, J as o, Q as r, G as s, xe as t, V as u };

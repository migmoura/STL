import { r as e } from "./utils-Cw5qLqcS.js";
import { $ as t, Q as n, Y as r, ft as i, nt as a } from "./react-w7ldCLEn.js";
import { a as o, c as s, d as c, f as l, i as u, l as d, n as f, o as p, r as m, s as h, t as g, u as _ } from "./dist-6W7P9DyX.js";
//#region src/components/ui/select.tsx
i();
function v({ ...e }) {
	return /* @__PURE__ */ a(h, {
		"data-slot": "select",
		...e
	});
}
function y({ ...e }) {
	return /* @__PURE__ */ a(c, {
		"data-slot": "select-value",
		className: "peer",
		...e
	});
}
function b({ className: t, size: r = "default", children: i, action: o, ...s }) {
	return /* @__PURE__ */ a("span", {
		className: "relative block",
		children: [/* @__PURE__ */ a(_, {
			"data-slot": "select-trigger",
			"data-size": r,
			className: e("group leading-label flex items-center pl-6 pr-1 relative h-16 gap-4 bg-white ring-1 ring-gray-15 outline-none focus-visible:ring-pressed not-disabled:hover:ring-2 hover:ring-gray-15 disabled:text-gray-25 disabled:ring-gray-3 aria-invalid:ring-light-red aria-invalid:ring-2", t),
			...s,
			children: [/* @__PURE__ */ a("span", {
				className: "pt-8 pb-2 w-full",
				children: i
			}), /* @__PURE__ */ a(f, {
				asChild: !0,
				children: /* @__PURE__ */ a(n, { className: e("size-6 shrink-0", { "mr-20": !!o }) })
			})]
		}), /* @__PURE__ */ a("span", {
			className: "absolute right-1 top-1",
			children: o
		})]
	});
}
function x({ className: t, children: n, position: r = "popper", ...i }) {
	return /* @__PURE__ */ a(p, { children: /* @__PURE__ */ a(g, {
		"data-slot": "select-content",
		className: e("bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 z-30 max-h-106 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto py-2 shadow-lg", r === "popper" && "translate-y-2 -translate-x-[1px]", t),
		position: r,
		...i,
		children: [
			/* @__PURE__ */ a(C, {}),
			/* @__PURE__ */ a(l, {
				className: e(r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width)+2px)] scroll-my-1"),
				children: n
			}),
			/* @__PURE__ */ a(w, {})
		]
	}) });
}
function S({ className: n, children: r, ...i }) {
	return /* @__PURE__ */ a(m, {
		"data-slot": "select-item",
		className: e("active:bg-gray-35 focus-visible:bg-gray-4 w-full relative flex cursor-default items-center gap-2 px-6 py-5 leading-label outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-25", n),
		...i,
		children: [/* @__PURE__ */ a("span", {
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u, { children: /* @__PURE__ */ a(t, { className: "size-4" }) })
		}), /* @__PURE__ */ a(o, { children: r })]
	});
}
function C({ className: t, ...n }) {
	return /* @__PURE__ */ a(d, {
		"data-slot": "select-scroll-up-button",
		className: e("flex cursor-default items-center justify-center py-1", t),
		...n,
		children: /* @__PURE__ */ a(r, { className: "size-4" })
	});
}
function w({ className: t, ...r }) {
	return /* @__PURE__ */ a(s, {
		"data-slot": "select-scroll-down-button",
		className: e("flex cursor-default items-center justify-center py-1", t),
		...r,
		children: /* @__PURE__ */ a(n, { className: "size-4" })
	});
}
//#endregion
export { y as a, b as i, x as n, S as r, v as t };

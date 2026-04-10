import { r as e, y as t } from "./utils-Cw5qLqcS.js";
import { A as n, K as r, at as i, ft as a, ht as o, nt as s } from "./react-w7ldCLEn.js";
import { t as c } from "./useTranslation-D2-izOQw.js";
//#region src/components/ui/input.tsx
a();
var l = t("flex", { variants: { hidden: {
	true: "hidden",
	false: "flex items-center justify-between pl-6 pr-1 bg-white ring-1 ring-gray-15 outline-none has-focus-visible:ring-pressed has-focus-visible:ring-2 hover:not-has-disabled:ring-2 has-disabled:text-gray-25 has-disabled:ring-gray-3 has-aria-invalid:ring-light-red has-aria-invalid:ring-2"
} } }), u = i(({ className: e, type: t, children: n, hidden: r, ...i }, a) => /* @__PURE__ */ s("span", {
	className: l({
		hidden: !!r,
		className: e
	}),
	children: [/* @__PURE__ */ s("input", {
		type: t,
		className: "peer outline-none pt-9 2xl:pt-8 pb-2 leading-tight w-full",
		hidden: r,
		"aria-hidden": r,
		ref: a,
		...i
	}), n]
}));
u.displayName = "Input";
var d = i(({ className: t, type: i = "search", role: a = "searchbox", children: l, hidden: u, placeholder: d = "Search...", ...f }, p) => {
	let { t: m } = c(), h = o(null), g = p || h, _ = () => {
		typeof g == "object" && g.current && (g.current.value = "", g?.current.dispatchEvent(new Event("input", { bubbles: !0 })));
	};
	return /* @__PURE__ */ s("span", {
		className: e("flex items-center gap-2 px-4 py-3 bg-blur-xs ring-1 ring-gray-15 hover:ring-2 hover:ring-gray-25 has-focus-visible:ring-2 has-focus-visible:ring-yellow", t),
		children: [
			/* @__PURE__ */ s(n, { className: "size-6" }),
			/* @__PURE__ */ s("input", {
				type: i,
				role: a,
				placeholder: d,
				className: "peer grow-1 focus-visible:outline-none placeholder:font-light placeholder:text-gray-1 disabled:text-gray-1",
				hidden: u,
				"aria-hidden": u,
				ref: g,
				...f
			}),
			l,
			/* @__PURE__ */ s("button", {
				"aria-label": m("Clear search input"),
				className: "peer-placeholder-shown:invisible outline-pressed",
				onClick: _,
				children: /* @__PURE__ */ s(r, { className: "size-4.5" })
			})
		]
	});
});
d.displayName = "SearchInput";
//#endregion
export { d as n, u as t };

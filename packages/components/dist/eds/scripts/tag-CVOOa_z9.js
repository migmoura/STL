import { b as e, r as t, y as n } from "./utils-Cw5qLqcS.js";
import { ft as r, nt as i } from "./react-w7ldCLEn.js";
//#region src/components/ui/tag.tsx
r();
var a = n("text-sm leading-label inline-flex items-center rounded-full px-3 py-1 w-fit whitespace-nowrap shrink-0 border-box gap-2 focus-visible:outline-none focus-visible:ring-pressed focus-visible:ring-[2px] focus-visible:ring-offset-2 transition-[color,box-shadow] overflow-hidden disabled:pointer-events-none disabled:opacity-50 disabled:pointer-not-allowed", {
	variants: { variant: {
		primary: "bg-yellow hover:bg-hovered active:bg-pressed disabled:bg-gray-3 disabled:text-gray-2",
		secondary: "outline-solid -outline-offset-1 outline-1 outline-gray-3 hover:outline-2 hover:-outline-offset-2 hover:outline-yellow active:outline-pressed disabled:bg-gray-4 disabled:text-gray-3",
		tertiary: "hover:bg-gray-4 active:bg-gray-3 disabled:text-gray-3"
	} },
	defaultVariants: { variant: "primary" }
});
function o({ className: n, variant: r, asChild: o = !1, ...s }) {
	return /* @__PURE__ */ i(o ? e : "span", {
		"data-slot": "tag",
		className: t(a({ variant: r }), n),
		...s
	});
}
//#endregion
export { o as t };

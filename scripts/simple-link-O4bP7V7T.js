import { l as e, r as t } from "./utils-Cw5qLqcS.js";
import { H as n, ft as r, nt as i } from "./react-w7ldCLEn.js";
//#region src/components/ui/simple-link.tsx
r();
function a({ children: r, className: a, ...o }) {
	let s = e(o.href);
	return /* @__PURE__ */ i("a", {
		className: "group no-underline flex items-center gap-2",
		...o,
		target: s ? "_blank" : void 0,
		children: [/* @__PURE__ */ i("span", {
			className: t("hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow ", a),
			children: r
		}), s ? /* @__PURE__ */ i(n, { className: "size-5" }) : null]
	});
}
//#endregion
export { a as t };

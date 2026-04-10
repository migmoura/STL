import { r as e } from "../../scripts/utils-Cw5qLqcS.js";
import { E as t, nt as n } from "../../scripts/react-w7ldCLEn.js";
//#region src/components/social-media/social-media.tsx
function r({ ...t }) {
	return /* @__PURE__ */ n("div", {
		ref: t.ref,
		className: e("grid gap-10 items-center md:px-20", t.gridTemplate, t.isVisible ? "animate-fade-y" : "opacity-0")
	});
}
//#endregion
//#region src/blocks/social-media/social-media.tsx
function i(e) {
	t(e).render(/* @__PURE__ */ n(r, {}));
}
//#endregion
export { i as default };

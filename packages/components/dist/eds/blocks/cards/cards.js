import { h as e } from "../../scripts/parser-Bc1VLsF3.js";
import "../../scripts/utils-Cw5qLqcS.js";
import { E as t, nt as n } from "../../scripts/react-w7ldCLEn.js";
import { r } from "../../scripts/index.es-bRvkHzh3.js";
//#region src/blocks/cards/cards.tsx
function i(i) {
	let [a, o, s] = i.children, c = e(a?.textContent), l = e(o?.textContent), u = s?.querySelector("a"), d = e(u?.textContent), f = u?.href;
	t(i).render(/* @__PURE__ */ n(r, {
		heading: c ?? "",
		description: l,
		href: f,
		decorativeLinkButtonProps: d ? { label: d } : void 0
	}));
}
//#endregion
export { i as default };

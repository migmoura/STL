import { f as e, h as t, s as n } from "../../scripts/parser-Bc1VLsF3.js";
import "../../scripts/utils-Cw5qLqcS.js";
import { E as r, nt as i } from "../../scripts/react-w7ldCLEn.js";
import { t as a } from "../../scripts/index.es-bRvkHzh3.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as o } from "../../scripts/headline-CM_nM-LL.js";
import { t as s } from "../../scripts/picture-DtJCwEBx.js";
//#region src/blocks/logo-slider/logo-slider.tsx
var c = (r) => {
	let [i, a, o, ...s] = Array.from(r.children);
	return {
		...n(i.querySelector("h1, h2, h3, h4, h5, h6"), a.textContent, o.querySelector("a")),
		logos: s.map((n) => ({
			logo: e(n.querySelector("picture")),
			alt: t(n.querySelector("p")?.textContent)
		}))
	};
};
function l({ logos: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ i(o, { ...t }), /* @__PURE__ */ i(a, { children: e.map((e, t) => e.logo ? /* @__PURE__ */ i("div", {
			className: "flex h-12 items-center px-10 shrink-0",
			children: /* @__PURE__ */ i(s, {
				...e.logo,
				imageClassName: "h-12 w-auto object-contain"
			})
		}, t) : null) })]
	});
}
async function u(e) {
	let t = c(e);
	r(e).render(/* @__PURE__ */ i(l, { ...t }));
}
//#endregion
export { u as default, c as parseHtml };

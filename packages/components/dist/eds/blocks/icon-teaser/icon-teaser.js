import { c as e, s as t } from "../../scripts/parser-Bc1VLsF3.js";
import { m as n } from "../../scripts/utils-Cw5qLqcS.js";
import { E as r, nt as i } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as a } from "../../scripts/headline-CM_nM-LL.js";
import { t as o } from "../../scripts/esm-Ccs46AP5.js";
//#region src/components/icon-teaser/icon-teaser-item.tsx
function s({ item: e }) {
	return /* @__PURE__ */ i("div", {
		className: "max-w-xs",
		...e.universalEditor,
		children: [
			/* @__PURE__ */ i("div", {
				className: "mb-10 w-max-16 h-max-16",
				children: /* @__PURE__ */ i("picture", {
					className: "area-stack",
					children: [e.icon.sources?.map((e) => /* @__PURE__ */ i("source", {
						type: e.type ?? "",
						srcSet: e.srcset ?? "",
						media: e.media ?? ""
					}, `icon-${e.srcset}`)), /* @__PURE__ */ i("img", {
						loading: "lazy",
						alt: "alt",
						src: e.icon.image.src ?? ""
					})]
				})
			}),
			/* @__PURE__ */ i("h3", {
				className: "font-bold mb-4",
				children: e.title
			}),
			/* @__PURE__ */ i(o, {
				className: "text-sm",
				content: e.description,
				transform: n,
				tagName: "p"
			})
		]
	});
}
//#endregion
//#region src/components/icon-teaser/icon-teaser.tsx
function c({ items: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ i(a, { ...t }), /* @__PURE__ */ i("div", {
			className: "flex flex-col md:flex-row md:grid md:grid-cols-3 gap-x-10 gap-y-8 lg:mx-[150px]",
			children: e.map((e) => /* @__PURE__ */ i(s, { item: e }, e.title))
		})]
	});
}
//#endregion
//#region src/blocks/icon-teaser/icon-teaser.tsx
function l(n) {
	let [r, i, a, ...o] = Array.from(n.children), s = e(Array.from(o));
	return {
		...t(r.querySelector("h1, h2, h3, h4, h5, h6"), i.textContent, a.querySelector("a")),
		items: s
	};
}
async function u(e) {
	let t = l(e);
	r(e).render(/* @__PURE__ */ i(c, { ...t }));
}
//#endregion
export { u as default };

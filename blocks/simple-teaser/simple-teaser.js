import { m as e, s as t } from "../../scripts/parser-YLn5-Se2.js";
import "../../scripts/utils-kL9Kd3j1.js";
import { C as n, rt as r } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as i } from "../../scripts/headline-1Uwx5fu-.js";
import "../../scripts/esm-BB_C1aMS.js";
import "../../scripts/tag-NlcpsyaD.js";
import { n as a, r as o, t as s } from "../../scripts/carousel-_PEDPEI0.js";
import "../../scripts/picture-DXSbVeQF.js";
import "../../scripts/skeleton-B-n3kDr5.js";
import { n as c } from "../../scripts/teaser-C41I5SfI.js";
import { t as l } from "../../scripts/embla-carousel-wheel-gestures.esm-C-pp_2FN.js";
//#region src/features/content/blocks/simple-teaser.tsx
function u({ aspectRatio: e = "aspect-2/1", items: t, ...n }) {
	return /* @__PURE__ */ r("div", {
		className: "space-y-20 relative flex flex-col justify-center",
		children: [
			/* @__PURE__ */ r(i, { ...n }),
			/* @__PURE__ */ r("div", {
				className: "hidden lg:inline-grid grid-cols-3 px-14 -mx-14 xl:px-0 xl:mx-auto gap-10 justify-center scrollbar-none",
				children: t.map((t) => /* @__PURE__ */ r("div", {
					className: "flex-shrink-0 max-w-[300px] md:max-w-[416px]",
					children: /* @__PURE__ */ r(c, {
						...t,
						aspectRatio: e
					})
				}, t.title))
			}),
			/* @__PURE__ */ r(s, {
				plugins: [l({ forceWheelAxis: "x" })],
				children: /* @__PURE__ */ r(a, {
					className: "lg:hidden gap-4",
					children: t.map((t) => /* @__PURE__ */ r(o, {
						fullWidth: !1,
						className: "max-w-[300px] md:max-w-[416px]",
						children: /* @__PURE__ */ r(c, {
							...t,
							aspectRatio: e
						})
					}, t.link?.href))
				})
			})
		]
	});
}
//#endregion
//#region src/blocks/simple-teaser/simple-teaser.tsx
async function d(i) {
	let [a, o, s, ...c] = Array.from(i.children), l = t(a.querySelector("h1, h2, h3, h4, h5"), o.textContent, s.querySelector("a")), d = Array.from(i.classList).find((e) => e.startsWith("ratio-"))?.replace("ratio-", "aspect-").replace(/^(aspect-\d+)-(\d+)$/, "$1/$2") || "aspect-2/1", f = e(Array.from(c));
	n(i).render(/* @__PURE__ */ r(u, {
		aspectRatio: d,
		...l,
		items: f
	}));
}
//#endregion
export { d as default };

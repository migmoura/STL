import { m as e, s as t } from "../../scripts/parser-Bc1VLsF3.js";
import "../../scripts/utils-Cw5qLqcS.js";
import { E as n, nt as r } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as i } from "../../scripts/headline-CM_nM-LL.js";
import "../../scripts/esm-Ccs46AP5.js";
import "../../scripts/tag-CVOOa_z9.js";
import { n as a, r as o, t as s } from "../../scripts/carousel-B0Q74k9z.js";
import "../../scripts/picture-DtJCwEBx.js";
import "../../scripts/skeleton-amY4T5vv.js";
import { n as c } from "../../scripts/teaser-BSOk0Trv.js";
import { t as l } from "../../scripts/embla-carousel-wheel-gestures.esm-BsjAoK7B.js";
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

import { h as e, u as t } from "../../scripts/parser-YLn5-Se2.js";
import { v as n } from "../../scripts/utils-kL9Kd3j1.js";
import { C as r, pt as i, rt as a, xt as o } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/esm-BB_C1aMS.js";
import "../../scripts/tag-NlcpsyaD.js";
import "../../scripts/i18next-BMrk8wO1.js";
import { t as s } from "../../scripts/Trans-DV_2jHcY.js";
import { t as c } from "../../scripts/useTranslation-Cl_kknJx.js";
import "../../scripts/picture-DXSbVeQF.js";
import "../../scripts/skeleton-B-n3kDr5.js";
import "../../scripts/es2015-Lwokp0LN.js";
import "../../scripts/sheet-DHtRCcio.js";
import "../../scripts/dropdown-menu-Cc3lBEdl.js";
import { t as l } from "../../scripts/dropdown-filters-DdBnDeke.js";
import "../../scripts/checkbox-BhLy_CYP.js";
import { t as u } from "../../scripts/constants-Cb0x61ES.js";
import { t as d } from "../../scripts/use-search-C-A3LLIr.js";
import { n as f } from "../../scripts/teaser-C41I5SfI.js";
import { r as p, t as m } from "../../scripts/index-page-to-teaser-BO7AmanK.js";
//#region src/features/search/blocks/search-results.tsx
i();
var h = 12;
function g({ url: e, labels: t, config: r }) {
	let i = new URLSearchParams(window.location.search).get("q") ?? void 0, [g, _] = o([]), [v, y] = o("relevance"), { t: b } = c(), { hits: x, count: S, facets: C, hasMore: w, next: T, isLoadingMore: E } = d(i, e, {
		limit: h,
		tags: g.length > 0 ? g : void 0,
		sort: u[v],
		facets: { tags: { limit: 20 } }
	}), D = p(r.filter, C?.tags.values), O = x.map(m(t.link));
	return /* @__PURE__ */ a("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ a("div", {
				className: "flex flex-wrap justify-between items-start align-bottom lg:mx-[150px]",
				children: /* @__PURE__ */ a("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ a(s, {
						default: "Search result for <highlight>{{query}}</highlight>",
						values: { query: i },
						components: { highlight: /* @__PURE__ */ a("span", { className: "text-black" }) },
						parent: "p",
						className: "text-h3 text-gray-1"
					}), S ? /* @__PURE__ */ a("p", {
						className: "text-gray-1",
						children: [
							S,
							" ",
							b("Results")
						]
					}) : null]
				})
			}),
			/* @__PURE__ */ a(l, {
				className: "lg:mx-[150px]",
				filters: D,
				selected: g,
				onSelectionChange: _,
				currentSort: v,
				onSortChange: y,
				sortOptions: u
			}),
			/* @__PURE__ */ a("div", {
				className: "flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4",
				children: O.map((e) => /* @__PURE__ */ a("div", {
					className: "w-full",
					children: /* @__PURE__ */ a(f, {
						...e,
						showDescription: !1,
						aspectRatio: "aspect-2/1"
					})
				}, e.title))
			}),
			w ? /* @__PURE__ */ a("div", {
				className: "w-full flex justify-center",
				children: /* @__PURE__ */ a(n, {
					variant: "secondary",
					onClick: T,
					disabled: E,
					children: b("See more")
				})
			}) : null
		]
	});
}
//#endregion
//#region src/blocks/search-results/search-results.tsx
function _(n) {
	let [r, i, a] = Array.from(n.children), [, o, s] = Array.from(a?.children || []), c = window.location.pathname.split("/").slice(1, 3).join("/");
	return {
		labels: {
			filter: t(o?.textContent) || "Add filter",
			link: t(r?.textContent) || "Read More"
		},
		config: { filter: {
			hidden: t(s?.textContent) === "hidden",
			label: t(o?.textContent) || "Add filter"
		} },
		url: e(i.textContent).split(",").map((e) => e.trim().replace("global/en", c)) || []
	};
}
async function v(e) {
	let t = _(e);
	r(e).render(/* @__PURE__ */ a(g, { ...t }));
}
//#endregion
export { v as default };

import { h as e, u as t } from "../../scripts/parser-Bc1VLsF3.js";
import { v as n } from "../../scripts/utils-Cw5qLqcS.js";
import { E as r, bt as i, ft as a, nt as o } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/esm-Ccs46AP5.js";
import "../../scripts/tag-CVOOa_z9.js";
import "../../scripts/i18next-Bnts7JEk.js";
import { t as s } from "../../scripts/Trans-C9DSLhZ7.js";
import { t as c } from "../../scripts/useTranslation-D2-izOQw.js";
import "../../scripts/picture-DtJCwEBx.js";
import "../../scripts/skeleton-amY4T5vv.js";
import "../../scripts/es2015-CAHZSTi-.js";
import "../../scripts/sheet-DONXsLqL.js";
import "../../scripts/dropdown-menu-C-G7Ntkq.js";
import { t as l } from "../../scripts/dropdown-filters-IlGGP1Rd.js";
import "../../scripts/checkbox-D7WFlB1v.js";
import { t as u } from "../../scripts/constants-W6IuTVo3.js";
import { t as d } from "../../scripts/use-search-7ykMqwIw.js";
import { n as f } from "../../scripts/teaser-BSOk0Trv.js";
import { r as p, t as m } from "../../scripts/index-page-to-teaser-DzWqL8eQ.js";
//#region src/features/search/blocks/search-results.tsx
a();
var h = 12;
function g({ url: e, labels: t, config: r }) {
	let a = new URLSearchParams(window.location.search).get("q") ?? void 0, [g, _] = i([]), [v, y] = i("relevance"), { t: b } = c(), { hits: x, count: S, facets: C, hasMore: w, next: T, isLoadingMore: E } = d(a, e, {
		limit: h,
		tags: g.length > 0 ? g : void 0,
		sort: u[v],
		facets: { tags: { limit: 20 } }
	}), D = p(r.filter, C?.tags.values), O = x.map(m(t.link));
	return /* @__PURE__ */ o("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex flex-wrap justify-between items-start align-bottom lg:mx-[150px]",
				children: /* @__PURE__ */ o("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ o(s, {
						default: "Search result for <highlight>{{query}}</highlight>",
						values: { query: a },
						components: { highlight: /* @__PURE__ */ o("span", { className: "text-black" }) },
						parent: "p",
						className: "text-h3 text-gray-1"
					}), S ? /* @__PURE__ */ o("p", {
						className: "text-gray-1",
						children: [
							S,
							" ",
							b("Results")
						]
					}) : null]
				})
			}),
			/* @__PURE__ */ o(l, {
				className: "lg:mx-[150px]",
				filters: D,
				selected: g,
				onSelectionChange: _,
				currentSort: v,
				onSortChange: y,
				sortOptions: u
			}),
			/* @__PURE__ */ o("div", {
				className: "flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4",
				children: O.map((e) => /* @__PURE__ */ o("div", {
					className: "w-full",
					children: /* @__PURE__ */ o(f, {
						...e,
						showDescription: !1,
						aspectRatio: "aspect-2/1"
					})
				}, e.title))
			}),
			w ? /* @__PURE__ */ o("div", {
				className: "w-full flex justify-center",
				children: /* @__PURE__ */ o(n, {
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
	r(e).render(/* @__PURE__ */ o(g, { ...t }));
}
//#endregion
export { v as default };

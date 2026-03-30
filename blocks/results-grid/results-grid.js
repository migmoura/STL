import { h as e, s as t, u as n } from "../../scripts/parser-YLn5-Se2.js";
import { r } from "../../scripts/utils-kL9Kd3j1.js";
import { C as i, Q as a, W as o, Z as s, pt as c, rt as l, wt as u, xt as d, yt as f } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as p } from "../../scripts/headline-1Uwx5fu-.js";
import "../../scripts/esm-BB_C1aMS.js";
import "../../scripts/tag-NlcpsyaD.js";
import { t as m } from "../../scripts/useTranslation-Cl_kknJx.js";
import "../../scripts/picture-DXSbVeQF.js";
import { t as h } from "../../scripts/dist-DkU8_-4E.js";
import "../../scripts/skeleton-B-n3kDr5.js";
import "../../scripts/es2015-Lwokp0LN.js";
import "../../scripts/sheet-DHtRCcio.js";
import "../../scripts/dropdown-menu-Cc3lBEdl.js";
import { n as g } from "../../scripts/input-B3cTQm8l.js";
import { t as _ } from "../../scripts/dropdown-filters-DdBnDeke.js";
import "../../scripts/checkbox-BhLy_CYP.js";
import { n as v } from "../../scripts/constants-Cb0x61ES.js";
import { t as y } from "../../scripts/use-search-C-A3LLIr.js";
import { n as b } from "../../scripts/teaser-C41I5SfI.js";
import { t as x } from "../../scripts/simple-link-B-rNfzjO.js";
import { n as S, r as C } from "../../scripts/index-page-to-teaser-BO7AmanK.js";
//#region src/components/ui/pagination.tsx
c();
function w({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ l("nav", {
		"aria-label": n("Pagination"),
		"data-slot": "pagination",
		className: r("mx-auto flex w-full justify-center gap-6", e),
		...t
	});
}
function T({ className: e, ...t }) {
	return /* @__PURE__ */ l("ul", {
		"data-slot": "pagination-content",
		className: r("flex flex-row items-center gap-4", e),
		...t
	});
}
function E({ ...e }) {
	return /* @__PURE__ */ l("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function D({ isActive: e, ...t }) {
	return /* @__PURE__ */ l(x, {
		"aria-current": e ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": e,
		...t
	});
}
function O({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ l(D, {
		"aria-label": n("Go to previous page"),
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ l(a, {}), /* @__PURE__ */ l("span", {
			className: "hidden sm:block",
			children: n("Previous")
		})]
	});
}
function k({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ l(D, {
		"aria-label": n("Go to next page"),
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ l("span", {
			className: "hidden sm:block",
			children: n("Next")
		}), /* @__PURE__ */ l(s, {})]
	});
}
function A({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ l("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ l(o, { className: "size-4" }), /* @__PURE__ */ l("span", {
			className: "sr-only",
			children: n("More pages")
		})]
	});
}
//#endregion
//#region src/features/search/components/results-pagination.tsx
c();
function j() {
	let e = new URLSearchParams(window.location.search), t = parseInt(e.get("page") || "1", 10), n = e.getAll("tags"), r = e.getAll("year").map(String);
	return {
		page: t,
		tags: n,
		sort: e.get("sort") ?? "newest",
		years: r
	};
}
function M({ page: e, tags: t, sort: n, years: r }) {
	let i = new URLSearchParams();
	i.set("page", e.toString()), t.forEach((e) => i.append("tags", e)), r.forEach((e) => i.append("year", e)), n && i.set("sort", n);
	let a = `${window.location.pathname}?${i.toString()}`;
	window.history.pushState({}, "", a);
}
function N({ currentPage: e, totalPages: t, buildHref: n }) {
	let r = f(() => {
		let n = [], r = Math.max(2, e - 1), i = Math.min(t - 1, e + 1);
		n.push(1), r > 2 && n.push(-1);
		for (let e = r; e <= i; e++) n.push(e);
		return i < t - 1 && n.push(-1), t > 1 && n.push(t), n;
	}, [e, t]);
	return t <= 1 ? null : /* @__PURE__ */ l(w, { children: [
		/* @__PURE__ */ l(O, {
			href: n(e - 1),
			isActive: e === 1
		}),
		/* @__PURE__ */ l(T, { children: r.map((t) => t === -1 ? /* @__PURE__ */ l(E, { children: /* @__PURE__ */ l(A, {}) }, `ellipsis-${t}`) : /* @__PURE__ */ l(E, { children: /* @__PURE__ */ l(D, {
			className: "group-data-[active=true]:shadow-[inset_0_-2px_0_0] group-data-[active=true]:shadow-pressed",
			href: n(t),
			isActive: t === e,
			children: t
		}) }, t)) }),
		/* @__PURE__ */ l(k, {
			href: n(e + 1),
			isActive: e === t
		})
	] });
}
//#endregion
//#region src/features/search/blocks/results-grid.tsx
c();
var P = 12;
function F({ url: e, labels: t, config: n, showDescription: r = !0, ...i }) {
	let [{ page: a, tags: o, sort: s, years: c }, f] = d(j), [m, x] = d(o), [w, T] = d(c), [E, D] = d(s), [O, k] = d(), A = h(k, 300), { hits: F, facets: I, count: L } = y(O, e, {
		offset: (a - 1) * P,
		tags: m.length > 0 ? m : void 0,
		year: w.length > 0 ? w : void 0,
		sort: v[E],
		limit: P,
		facets: {
			tags: { limit: 20 },
			year: { limit: 20 }
		}
	}), R = C(n.filter, I?.tags.values), z = C(n.year, I?.year.values), B = F.map(S(t.link)), V = Math.ceil((L ?? 0) / P), H = u((e) => {
		if (e < 1 || e > V) return "";
		let t = new URLSearchParams();
		return t.set("page", e.toString()), m.forEach((e) => t.append("tags", e)), E && t.set("sort", E), w.length > 0 && w.forEach((e) => t.append("year", e)), `${window.location.pathname}?${t.toString()}`;
	}, [
		V,
		m,
		E
	]), U = u((e) => {
		x(e);
		let t = {
			page: 1,
			tags: e,
			years: c,
			sort: E
		};
		M(t), f(t);
	}, [E]), W = u((e) => {
		T(e.map(String));
		let t = {
			page: 1,
			tags: o,
			sort: E,
			years: e
		};
		M(t), f(t);
	}, [E]), G = u((e) => {
		D(e);
		let t = {
			page: 1,
			years: c,
			tags: m,
			sort: e
		};
		M(t), f(t);
	}, [m]);
	return /* @__PURE__ */ l("div", {
		className: "space-y-20",
		children: [
			/* @__PURE__ */ l(p, { ...i }),
			/* @__PURE__ */ l("div", {
				className: "flex flex-wrap gap-6 lg:mx-[150px]",
				children: [n?.search?.hidden ? null : /* @__PURE__ */ l(g, {
					placeholder: n.search.label,
					className: "w-full md:w-fit",
					onChange: (e) => A(e.target.value)
				}), /* @__PURE__ */ l(_, {
					className: "flex-1",
					filters: R,
					years: z,
					selected: m,
					selectedYears: w.map(String),
					onSelectionChange: U,
					onYearsChange: W,
					onSortChange: G,
					currentSort: E,
					sortOptions: v
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4",
				children: B.map((e) => /* @__PURE__ */ l("article", {
					className: "w-full",
					children: /* @__PURE__ */ l(b, {
						...e,
						showDescription: r,
						aspectRatio: "aspect-2/1"
					})
				}, e.title))
			}),
			/* @__PURE__ */ l(N, {
				currentPage: a > V ? V : a,
				totalPages: V,
				buildHref: H
			})
		]
	});
}
//#endregion
//#region src/blocks/results-grid/results-grid.tsx
function I(e, t) {
	return e.find((e) => e?.firstElementChild?.textContent?.trim() === t);
}
function L(r) {
	let [i, a, o, s, c, ...l] = Array.from(r.children), u = I(l, "filter"), [, d, f] = Array.from(u?.children || []), p = I(l, "year"), [, m, h] = Array.from(p?.children || []), g = I(l, "search"), [, _, v] = Array.from(g?.children || []), y = window.location.pathname.split("/").slice(1, 3).join("/");
	return {
		...t(i.querySelector("h1, h2, h3, h4, h5"), a.textContent, o.querySelector("a")),
		labels: { link: n(s?.textContent) || "Read More" },
		config: {
			search: {
				hidden: n(v?.textContent) === "hidden",
				label: n(_?.textContent) || "Search..."
			},
			filter: {
				hidden: n(f?.textContent) === "hidden",
				label: n(d?.textContent) || "Add filter"
			},
			year: {
				hidden: n(h?.textContent) === "hidden",
				label: n(m?.textContent) || "Add year"
			}
		},
		url: e(c.textContent).replace("global/en", y) || "",
		showDescription: !r.className.includes("no-description")
	};
}
async function R(e) {
	let t = L(e);
	i(e).render(/* @__PURE__ */ l(F, { ...t }));
}
//#endregion
export { R as default };

import { h as e, s as t, u as n } from "../../scripts/parser-Bc1VLsF3.js";
import { r } from "../../scripts/utils-Cw5qLqcS.js";
import { Ct as i, E as a, U as o, X as s, Z as c, bt as l, ft as u, nt as d, vt as f } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as p } from "../../scripts/headline-CM_nM-LL.js";
import "../../scripts/esm-Ccs46AP5.js";
import "../../scripts/tag-CVOOa_z9.js";
import { t as m } from "../../scripts/useTranslation-D2-izOQw.js";
import "../../scripts/picture-DtJCwEBx.js";
import { t as h } from "../../scripts/dist-BPI1VaeD.js";
import "../../scripts/skeleton-amY4T5vv.js";
import "../../scripts/es2015-CAHZSTi-.js";
import "../../scripts/sheet-DONXsLqL.js";
import "../../scripts/dropdown-menu-C-G7Ntkq.js";
import { n as g } from "../../scripts/input-D5kPLzUd.js";
import { t as _ } from "../../scripts/dropdown-filters-IlGGP1Rd.js";
import "../../scripts/checkbox-D7WFlB1v.js";
import { n as v } from "../../scripts/constants-W6IuTVo3.js";
import { t as y } from "../../scripts/use-search-7ykMqwIw.js";
import { n as b } from "../../scripts/teaser-BSOk0Trv.js";
import { t as x } from "../../scripts/simple-link-O4bP7V7T.js";
import { n as S, r as C } from "../../scripts/index-page-to-teaser-DzWqL8eQ.js";
//#region src/components/ui/pagination.tsx
u();
function w({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ d("nav", {
		"aria-label": n("Pagination"),
		"data-slot": "pagination",
		className: r("mx-auto flex w-full justify-center gap-6", e),
		...t
	});
}
function T({ className: e, ...t }) {
	return /* @__PURE__ */ d("ul", {
		"data-slot": "pagination-content",
		className: r("flex flex-row items-center gap-4", e),
		...t
	});
}
function E({ ...e }) {
	return /* @__PURE__ */ d("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function D({ isActive: e, ...t }) {
	return /* @__PURE__ */ d(x, {
		"aria-current": e ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": e,
		...t
	});
}
function O({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ d(D, {
		"aria-label": n("Go to previous page"),
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ d(c, {}), /* @__PURE__ */ d("span", {
			className: "hidden sm:block",
			children: n("Previous")
		})]
	});
}
function k({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ d(D, {
		"aria-label": n("Go to next page"),
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ d("span", {
			className: "hidden sm:block",
			children: n("Next")
		}), /* @__PURE__ */ d(s, {})]
	});
}
function A({ className: e, ...t }) {
	let { t: n } = m();
	return /* @__PURE__ */ d("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: r("flex items-center gap-1", e),
		...t,
		children: [/* @__PURE__ */ d(o, { className: "size-4" }), /* @__PURE__ */ d("span", {
			className: "sr-only",
			children: n("More pages")
		})]
	});
}
//#endregion
//#region src/features/search/components/results-pagination.tsx
u();
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
	return t <= 1 ? null : /* @__PURE__ */ d(w, { children: [
		/* @__PURE__ */ d(O, {
			href: n(e - 1),
			isActive: e === 1
		}),
		/* @__PURE__ */ d(T, { children: r.map((t) => t === -1 ? /* @__PURE__ */ d(E, { children: /* @__PURE__ */ d(A, {}) }, `ellipsis-${t}`) : /* @__PURE__ */ d(E, { children: /* @__PURE__ */ d(D, {
			className: "group-data-[active=true]:shadow-[inset_0_-2px_0_0] group-data-[active=true]:shadow-pressed",
			href: n(t),
			isActive: t === e,
			children: t
		}) }, t)) }),
		/* @__PURE__ */ d(k, {
			href: n(e + 1),
			isActive: e === t
		})
	] });
}
//#endregion
//#region src/features/search/blocks/results-grid.tsx
u();
var P = 12;
function F({ url: e, labels: t, config: n, showDescription: r = !0, ...a }) {
	let [{ page: o, tags: s, sort: c, years: u }, f] = l(j), [m, x] = l(s), [w, T] = l(u), [E, D] = l(c), [O, k] = l(), A = h(k, 300), { hits: F, facets: I, count: L } = y(O, e, {
		offset: (o - 1) * P,
		tags: m.length > 0 ? m : void 0,
		year: w.length > 0 ? w : void 0,
		sort: v[E],
		limit: P,
		facets: {
			tags: { limit: 20 },
			year: { limit: 20 }
		}
	}), R = C(n.filter, I?.tags.values), z = C(n.year, I?.year.values), B = F.map(S(t.link)), V = Math.ceil((L ?? 0) / P), H = i((e) => {
		if (e < 1 || e > V) return "";
		let t = new URLSearchParams();
		return t.set("page", e.toString()), m.forEach((e) => t.append("tags", e)), E && t.set("sort", E), w.length > 0 && w.forEach((e) => t.append("year", e)), `${window.location.pathname}?${t.toString()}`;
	}, [
		V,
		m,
		E
	]), U = i((e) => {
		x(e);
		let t = {
			page: 1,
			tags: e,
			years: u,
			sort: E
		};
		M(t), f(t);
	}, [E]), W = i((e) => {
		T(e.map(String));
		let t = {
			page: 1,
			tags: s,
			sort: E,
			years: e
		};
		M(t), f(t);
	}, [E]), G = i((e) => {
		D(e);
		let t = {
			page: 1,
			years: u,
			tags: m,
			sort: e
		};
		M(t), f(t);
	}, [m]);
	return /* @__PURE__ */ d("div", {
		className: "space-y-20",
		children: [
			/* @__PURE__ */ d(p, { ...a }),
			/* @__PURE__ */ d("div", {
				className: "flex flex-wrap gap-6 lg:mx-[150px]",
				children: [n?.search?.hidden ? null : /* @__PURE__ */ d(g, {
					placeholder: n.search.label,
					className: "w-full md:w-fit",
					onChange: (e) => A(e.target.value)
				}), /* @__PURE__ */ d(_, {
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
			/* @__PURE__ */ d("div", {
				className: "flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4",
				children: B.map((e) => /* @__PURE__ */ d("article", {
					className: "w-full",
					children: /* @__PURE__ */ d(b, {
						...e,
						showDescription: r,
						aspectRatio: "aspect-2/1"
					})
				}, e.title))
			}),
			/* @__PURE__ */ d(N, {
				currentPage: o > V ? V : o,
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
	a(e).render(/* @__PURE__ */ d(F, { ...t }));
}
//#endregion
export { R as default };

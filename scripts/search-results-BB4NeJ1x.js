import { _ as e, r as t } from "./utils-kL9Kd3j1.js";
import { rt as n } from "./react-DLNUXPF9.js";
import { t as r } from "./esm-BB_C1aMS.js";
import { t as i } from "./useTranslation-Cl_kknJx.js";
import { t as a } from "./picture-DXSbVeQF.js";
import { t as o } from "./constants-Cb0x61ES.js";
import { t as s } from "./use-search-C-A3LLIr.js";
import { t as c } from "./scroll-CqZfFQXp.js";
//#region src/features/search/components/search-results.tsx
function l({ query: l, url: u, label: d }) {
	let { hits: f, count: p } = s(l, u, { sort: o.relevance }), { t: m } = i();
	return /* @__PURE__ */ n("div", {
		className: t("space-y-6", { "hidden md:block": f.length === 0 }),
		children: [/* @__PURE__ */ n("span", {
			className: "flex flex-col md:flex-row items-baseline gap-x-6 gap-y-2",
			children: [/* @__PURE__ */ n("p", {
				className: "text-h4",
				children: d
			}), /* @__PURE__ */ n("p", {
				className: "text-sm text-gray-1",
				children: m("{{count}} hits", { count: p })
			})]
		}), /* @__PURE__ */ n("ul", {
			className: "relative h-full space-y-4",
			children: /* @__PURE__ */ n(c, {
				className: "mb-6 md:mb-0 md:h-[calc(100dvh-484px)] md:max-h-[586px]",
				listClassName: "flex flex-col gap-4",
				children: f.map((t) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("a", {
					href: t.path,
					className: "group w-full flex items-start md:gap-6",
					children: [t.image === "" ? null : /* @__PURE__ */ n(a, {
						className: "shrink-0",
						imageClassName: "hidden md:block w-30 h-20 object-cover duration-300 ease-in-out group-hover:scale-110",
						image: {
							src: t.image,
							alt: t.imageAlt || typeof t.title == "string" ? t.title : t.title.value
						}
					}), /* @__PURE__ */ n("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ n("p", {
							className: "md:font-semibold",
							children: typeof t.title == "object" ? /* @__PURE__ */ n(r, { content: t.title.highlight }) : t.title
						}), /* @__PURE__ */ n("p", {
							className: "text-gray-1",
							children: [/* @__PURE__ */ n(r, {
								content: t.highlight,
								noWrap: !0
							}), /* @__PURE__ */ n(e, {
								className: "ml-2",
								href: t.path,
								children: "Read more"
							})]
						})]
					})]
				}) }, t.path))
			})
		})]
	});
}
function u({ indexes: t, query: r, link: i }) {
	return /* @__PURE__ */ n("div", {
		className: "w-screen h-[calc(100dvh-178px)] max-h-[901px]",
		children: /* @__PURE__ */ n("div", {
			className: "relative fluid py-20 flex flex-col justify-between h-full gap-10",
			children: [/* @__PURE__ */ n("div", {
				className: "mr-65 grid grid-cols-2 gap-x-20",
				children: t.map((e) => /* @__PURE__ */ n(l, {
					...e,
					query: r
				}, e.label))
			}), i ? /* @__PURE__ */ n("div", {
				className: "fixed bottom-0 left-0 pb-20 pt-6 w-full flex justify-center bg-white z-10 border-b border-gray-3",
				children: /* @__PURE__ */ n(e, {
					...i,
					variant: "secondary",
					children: i.value
				})
			}) : null]
		})
	});
}
//#endregion
export { u as n, l as t };

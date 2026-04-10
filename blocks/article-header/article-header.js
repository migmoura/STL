import { t as e } from "../../scripts/parser-Bc1VLsF3.js";
import "../../scripts/utils-Cw5qLqcS.js";
import { E as t, G as n, nt as r } from "../../scripts/react-w7ldCLEn.js";
import { t as i } from "../../scripts/esm-Ccs46AP5.js";
import { t as a } from "../../scripts/tag-CVOOa_z9.js";
//#region src/components/article-header/article-header.tsx
function o({ articleContent: e, dateTitle: t, date: o, tagsTitle: s, tags: c, downloadsTitle: l, downloads: u }) {
	return /* @__PURE__ */ r("div", {
		className: "grid md:grid-cols-3 md:gap-30 items-start m-8",
		children: [/* @__PURE__ */ r("section", {
			className: "md:col-start-3 md:col-span-1 text-justify p-8 bg-gray-4",
			children: [
				/* @__PURE__ */ r("p", {
					className: "text-h3 font-normal",
					children: t
				}),
				/* @__PURE__ */ r("p", {
					className: "mt-2",
					children: o
				}),
				/* @__PURE__ */ r("p", {
					className: "text-h3 font-normal mt-6",
					children: s
				}),
				/* @__PURE__ */ r("ul", {
					className: "mt-1",
					children: c?.map((e) => /* @__PURE__ */ r(a, {
						className: "mr-4 my-2",
						variant: "secondary",
						children: e
					}, e))
				}),
				/* @__PURE__ */ r("p", {
					className: "text-h3 font-normal mt-4",
					children: l
				}),
				/* @__PURE__ */ r("ul", {
					className: "mt-2 flex flex-col gap-4 list-disc list-outside pl-5",
					children: u.map((e) => /* @__PURE__ */ r("li", {
						className: "space-x-2",
						children: /* @__PURE__ */ r("a", {
							title: e.title,
							href: e.href,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ r("span", {
								className: "leading-label break-words hyphens-auto shadow-[inset_0_-2px_0_0] shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow",
								children: e.title
							}), /* @__PURE__ */ r(n, { className: "ml-2 inline" })]
						})
					}, e.href))
				})
			]
		}), /* @__PURE__ */ r("section", {
			className: "md:row-start-1 md:col-start-1 md:col-span-2 p-8",
			children: /* @__PURE__ */ r(i, {
				className: "prose",
				content: e
			})
		})]
	});
}
//#endregion
//#region src/blocks/article-header/article-header.tsx
function s(t) {
	let n = document.getElementsByTagName("head")[0].querySelectorAll("[property=\"article:tag\"]"), [r, i, a, o] = Array.from(t.children), [s, c] = Array.from(r.children[0].children), [l, ...u] = Array.from(a.children[0].children), [d] = Array.from(i.children);
	return {
		dateTitle: s.textContent,
		date: c.textContent,
		tagsTitle: d.textContent,
		tags: Array.from(n).map((e) => e.content) || [],
		downloadsTitle: l.textContent,
		downloads: u.map((t) => e(t.querySelector("a"))),
		articleContent: o.children[0].innerHTML
	};
}
function c(e) {
	let n = s(e);
	t(e).render(/* @__PURE__ */ r(o, { ...n }));
}
//#endregion
export { c as default };

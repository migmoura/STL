import { _ as e, r as t } from "./utils-Cw5qLqcS.js";
import { Q as n, Tt as r, Y as i, bt as a, ft as o, ht as s, nt as c } from "./react-w7ldCLEn.js";
import { t as l } from "./esm-Ccs46AP5.js";
import { t as u } from "./useTranslation-D2-izOQw.js";
import { t as d } from "./picture-DtJCwEBx.js";
import { t as f } from "./constants-W6IuTVo3.js";
import { t as p } from "./use-search-7ykMqwIw.js";
//#region src/components/ui/scroll.tsx
o();
function m({ children: e, className: o, listClassName: l }) {
	let u = s(null), [d, f] = a(!1), [p, m] = a(!0);
	r(() => {
		let e = u.current;
		if (!e) return;
		let t = () => {
			let { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
			f(t > 5), m(t + r < n - 5);
		};
		return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
	}, [e]);
	let h = (e) => {
		let t = u.current;
		if (!t) return;
		let n = e === "up" ? -80 : 80;
		t.scrollBy({
			top: n,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ c("div", {
		className: t("relative w-full overflow-y-clip", o),
		children: [
			d && /* @__PURE__ */ c("div", {
				className: "absolute top-0 left-0 right-0 z-10 flex bg-white",
				children: /* @__PURE__ */ c("button", {
					className: "flex w-full cursor-default items-center justify-center text-gray-1",
					onClick: () => h("up"),
					children: /* @__PURE__ */ c(i, { className: "size-6" })
				})
			}),
			/* @__PURE__ */ c("div", {
				ref: u,
				className: t("h-full overflow-y-auto scroll-smooth scrollbar-none", l),
				children: e
			}),
			p && /* @__PURE__ */ c("div", {
				className: "absolute bottom-0 left-0 right-0 z-10 flex bg-white",
				children: /* @__PURE__ */ c("button", {
					className: "w-full flex cursor-default items-center justify-center text-gray-1",
					onClick: () => h("down"),
					children: /* @__PURE__ */ c(n, { className: "size-6" })
				})
			})
		]
	});
}
//#endregion
//#region src/features/search/components/search-results.tsx
function h({ query: n, url: r, label: i }) {
	let { hits: a, count: o } = p(n, r, { sort: f.relevance }), { t: s } = u();
	return /* @__PURE__ */ c("div", {
		className: t("space-y-6", { "hidden md:block": a.length === 0 }),
		children: [/* @__PURE__ */ c("span", {
			className: "flex flex-col md:flex-row items-baseline gap-x-6 gap-y-2",
			children: [/* @__PURE__ */ c("p", {
				className: "text-h4",
				children: i
			}), /* @__PURE__ */ c("p", {
				className: "text-sm text-gray-1",
				children: s("{{count}} hits", { count: o })
			})]
		}), /* @__PURE__ */ c("ul", {
			className: "relative h-full space-y-4",
			children: /* @__PURE__ */ c(m, {
				className: "mb-6 md:mb-0 md:h-[calc(100dvh-484px)] md:max-h-[586px]",
				listClassName: "flex flex-col gap-4",
				children: a.map((t) => /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c("a", {
					href: t.path,
					className: "group w-full flex items-start md:gap-6",
					children: [t.image === "" ? null : /* @__PURE__ */ c(d, {
						className: "shrink-0",
						imageClassName: "hidden md:block w-30 h-20 object-cover duration-300 ease-in-out group-hover:scale-110",
						image: {
							src: t.image,
							alt: t.imageAlt || typeof t.title == "string" ? t.title : t.title.value
						}
					}), /* @__PURE__ */ c("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ c("p", {
							className: "md:font-semibold",
							children: typeof t.title == "object" ? /* @__PURE__ */ c(l, { content: t.title.highlight }) : t.title
						}), /* @__PURE__ */ c("p", {
							className: "text-gray-1",
							children: [/* @__PURE__ */ c(l, {
								content: t.highlight,
								noWrap: !0
							}), /* @__PURE__ */ c(e, {
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
function g({ indexes: t, query: n, link: r }) {
	return /* @__PURE__ */ c("div", {
		className: "w-screen h-[calc(100dvh-178px)] max-h-[901px]",
		children: /* @__PURE__ */ c("div", {
			className: "relative fluid py-20 flex flex-col justify-between h-full gap-10",
			children: [/* @__PURE__ */ c("div", {
				className: "mr-65 grid grid-cols-2 gap-x-20",
				children: t.map((e) => /* @__PURE__ */ c(h, {
					...e,
					query: n
				}, e.label))
			}), r ? /* @__PURE__ */ c("div", {
				className: "fixed bottom-0 left-0 pb-20 pt-6 w-full flex justify-center bg-white z-10 border-b border-gray-3",
				children: /* @__PURE__ */ c(e, {
					...r,
					variant: "secondary",
					children: r.value
				})
			}) : null]
		})
	});
}
//#endregion
export { g as n, h as t };

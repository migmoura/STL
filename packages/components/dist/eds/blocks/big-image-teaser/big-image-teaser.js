import { r as e, s as t } from "../../scripts/parser-Bc1VLsF3.js";
import { r as n, v as r } from "../../scripts/utils-Cw5qLqcS.js";
import { E as i, Tt as a, bt as o, ft as s, nt as c } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as l } from "../../scripts/headline-CM_nM-LL.js";
import { a as u, i as d, n as f, r as p, t as m } from "../../scripts/carousel-B0Q74k9z.js";
import { t as h } from "../../scripts/picture-DtJCwEBx.js";
//#region src/features/content/components/big-image-teaser-item.tsx
s();
function g({ heading: e, copy: t, picture: n, link: i, universalEditor: a }) {
	return /* @__PURE__ */ c("div", {
		className: "h-[500px] rounded-3xl overflow-hidden grid grid-areas-stack items-end drop-shadow-sm",
		...a,
		children: [
			n ? /* @__PURE__ */ c(h, {
				className: "area-stack h-full",
				imageClassName: "h-[500px] w-full object-cover object-center",
				...n
			}) : null,
			/* @__PURE__ */ c("div", { className: "area-stack size-full bg-gradient-to-tr from-black to-70% to-transparent" }),
			/* @__PURE__ */ c("div", {
				className: "area-stack px-6 py-14 md:p-14 md:max-w-[484px] text-white",
				children: [
					/* @__PURE__ */ c("p", {
						className: "mb-2 font-bold text-lg",
						children: e
					}),
					/* @__PURE__ */ c("p", {
						className: "mb-8",
						children: t
					}),
					i ? /* @__PURE__ */ c(r, {
						asChild: !0,
						variant: "secondary",
						className: "text-white bg-white/10",
						children: /* @__PURE__ */ c("a", {
							...i,
							children: i.value
						})
					}) : null
				]
			})
		]
	});
}
//#endregion
//#region src/features/content/blocks/big-image-teaser.tsx
function _({ items: e, ...t }) {
	let [r, i] = o(), [s, h] = o(0);
	return a(() => {
		r && (h(r.selectedScrollSnap() + 1), r.on("select", () => {
			h(r.selectedScrollSnap() + 1);
		}));
	}, [r]), /* @__PURE__ */ c("div", {
		className: "relative space-y-20",
		children: [/* @__PURE__ */ c("div", {
			className: "fluid",
			children: /* @__PURE__ */ c(l, { ...t })
		}), /* @__PURE__ */ c("div", {
			className: "px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20",
			children: /* @__PURE__ */ c(m, {
				opts: { align: () => 1 },
				"aria-label": `${t.headline?.value} - Slider`,
				setApi: i,
				children: [/* @__PURE__ */ c(f, { children: e.map((e) => /* @__PURE__ */ c(p, {
					fullWidth: !1,
					className: "w-full md:w-fit",
					children: /* @__PURE__ */ c(g, { ...e })
				}, e.link?.href)) }), e.length > 1 ? /* @__PURE__ */ c("div", {
					className: "w-full flex justify-center -translate-y-9",
					children: /* @__PURE__ */ c("div", {
						className: "p-2 flex gap-8 rounded-[4px] items-center bg-white drop-shadow-sm",
						children: [
							/* @__PURE__ */ c(u, { className: "disabled:bg-white disabled:text-gray-4" }),
							/* @__PURE__ */ c("div", {
								className: "flex gap-4 items-center",
								children: e.map((e, t) => /* @__PURE__ */ c("button", {
									onClick: () => r?.scrollTo(t),
									className: n("rounded-full transition-colors", s === t + 1 ? "bg-yellow size-3" : "bg-gray-4/50 size-2")
								}, e.universalEditor["data-aue-resource"]))
							}),
							/* @__PURE__ */ c(d, { className: "disabled:bg-white disabled:text-gray-4" })
						]
					})
				}) : null]
			})
		})]
	});
}
//#endregion
//#region src/blocks/big-image-teaser/big-image-teaser.tsx
function v(n) {
	let [r, i, a, ...o] = Array.from(n.children);
	return {
		...t(r.querySelector("h1, h2, h3, h4, h5, h6"), i.textContent, a.querySelector("a")),
		items: e(o)
	};
}
async function y(e) {
	let t = v(e);
	i(e).render(/* @__PURE__ */ c(_, { ...t }));
}
//#endregion
export { y as default };

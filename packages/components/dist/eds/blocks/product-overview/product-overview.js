import { i as e, l as t, o as n, u as r } from "../../scripts/parser-YLn5-Se2.js";
import { _ as i, w as a } from "../../scripts/utils-kL9Kd3j1.js";
import { C as o, pt as s, rt as c, xt as l } from "../../scripts/react-DLNUXPF9.js";
import { t as u } from "../../scripts/heading-CpqtBlxR.js";
//#region src/features/product/blocks/product-overview.tsx
s();
function d({ heading: e, content: t, technicalLabel: n, technicalText: r, pictures: o, ctaLink: s, secondaryCtaLink: d }) {
	let [f, p] = l(0), m = () => {
		let e = o?.[f];
		if (e?.type === "video") {
			let { poster: t, sources: n } = e;
			return /* @__PURE__ */ c("video", {
				poster: t,
				controls: !0,
				className: "object-cover object-center w-full aspect-3/2 max-h-[440px]",
				children: [/* @__PURE__ */ c("track", { kind: "captions" }), n.map((e, t) => /* @__PURE__ */ c("source", {
					src: e.src,
					type: e.type
				}, t))]
			});
		}
		return /* @__PURE__ */ c("picture", { children: [e?.sources?.map((e) => /* @__PURE__ */ c("source", {
			type: e.type ?? "",
			srcSet: e.srcset ?? "",
			media: e.media ?? ""
		}, `icon-${e.srcset}`)), /* @__PURE__ */ c("img", {
			loading: "lazy",
			className: "object-cover object-center w-full aspect-3/2 max-h-[440px]",
			alt: e?.image?.alt,
			src: e?.image?.src ?? ""
		})] });
	}, h = (e, t, n) => {
		let r = /* @__PURE__ */ c("img", {
			loading: "lazy",
			className: "w-full h-full object-contain",
			alt: e?.image?.alt,
			src: e?.image?.src ?? ""
		});
		if (e?.type === "video") {
			let { poster: t } = e;
			r = /* @__PURE__ */ c("img", {
				loading: "lazy",
				className: "h-full w-full object-contain",
				alt: e?.image?.alt,
				src: t ?? ""
			});
		}
		return /* @__PURE__ */ c("picture", {
			className: a("flex flex-col w-12 md:w-24 h-12 md:h-24", { "border-b-yellow border-b-2": t === n }),
			children: r
		});
	};
	return /* @__PURE__ */ c("div", {
		className: "grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-20",
		children: [/* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("div", {
			className: "flex flex-col space-y-2",
			children: [/* @__PURE__ */ c("div", {
				className: "w-full h-full",
				children: m()
			}), /* @__PURE__ */ c("div", {
				className: "flex gap-2 mx-auto",
				children: o?.map((e, t) => /* @__PURE__ */ c("button", {
					onClick: () => p(t),
					children: h(e, t, f)
				}, t))
			})]
		}) }), /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("div", {
			className: "flex flex-col space-y-10",
			children: [
				/* @__PURE__ */ c(u, {
					...e,
					children: e?.value
				}),
				/* @__PURE__ */ c("div", {
					className: "prose text-justify text-gray-1",
					dangerouslySetInnerHTML: { __html: t ?? "" }
				}),
				/* @__PURE__ */ c("h5", {
					className: "text-h5 font-bold leading-7 text-gray-1",
					children: n
				}),
				/* @__PURE__ */ c("div", {
					dangerouslySetInnerHTML: { __html: r ?? "" },
					className: "[&>ul]:list-disc [&>ul]:list-inside [&>ul]:columns-2 [&>ul]:space-y-2 text-start text-gray-1 "
				}),
				/* @__PURE__ */ c("div", {
					className: "flex flex-row gap-4",
					children: [s?.link && /* @__PURE__ */ c(i, {
						href: s.link.href,
						title: s.link.title,
						className: "w-full",
						variant: "primary",
						children: s.link.title
					}), d?.link && /* @__PURE__ */ c(i, {
						href: d.link.href,
						title: d.link.title,
						className: "w-full",
						variant: "secondary",
						children: d.link.title
					})]
				})
			]
		}) })]
	});
}
//#endregion
//#region src/blocks/product-overview/product-overview.tsx
function f(i) {
	let [a, o, s, c, l, u, ...d] = Array.from(i.children);
	return {
		heading: n(a.querySelector("h1, h2, h3, h4, h5, h6")),
		content: o?.innerHTML,
		technicalLabel: r(s.innerHTML),
		technicalText: c.querySelector("ul")?.outerHTML,
		ctaLink: e(l),
		secondaryCtaLink: e(u),
		pictures: d.map((e) => t(e)).filter(Boolean)
	};
}
function p(e) {
	let t = f(e);
	o(e).render(/* @__PURE__ */ c(d, { ...t }));
}
//#endregion
export { p as default };

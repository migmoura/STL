import { i as e, l as t, o as n, u as r } from "../../scripts/parser-Bc1VLsF3.js";
import { _ as i, w as a } from "../../scripts/utils-Cw5qLqcS.js";
import { E as o, bt as s, ft as c, nt as l } from "../../scripts/react-w7ldCLEn.js";
import { t as u } from "../../scripts/heading-DSowWvXd.js";
//#region src/features/product/blocks/product-overview.tsx
c();
function d({ heading: e, content: t, technicalLabel: n, technicalText: r, pictures: o, ctaLink: c, secondaryCtaLink: d }) {
	let [f, p] = s(0), m = () => {
		let e = o?.[f];
		if (e?.type === "video") {
			let { poster: t, sources: n } = e;
			return /* @__PURE__ */ l("video", {
				poster: t,
				controls: !0,
				className: "object-cover object-center w-full aspect-3/2 max-h-[440px]",
				children: [/* @__PURE__ */ l("track", { kind: "captions" }), n.map((e, t) => /* @__PURE__ */ l("source", {
					src: e.src,
					type: e.type
				}, t))]
			});
		}
		return /* @__PURE__ */ l("picture", { children: [e?.sources?.map((e) => /* @__PURE__ */ l("source", {
			type: e.type ?? "",
			srcSet: e.srcset ?? "",
			media: e.media ?? ""
		}, `icon-${e.srcset}`)), /* @__PURE__ */ l("img", {
			loading: "lazy",
			className: "object-cover object-center w-full aspect-3/2 max-h-[440px]",
			alt: e?.image?.alt,
			src: e?.image?.src ?? ""
		})] });
	}, h = (e, t, n) => {
		let r = /* @__PURE__ */ l("img", {
			loading: "lazy",
			className: "w-full h-full object-contain",
			alt: e?.image?.alt,
			src: e?.image?.src ?? ""
		});
		if (e?.type === "video") {
			let { poster: t } = e;
			r = /* @__PURE__ */ l("img", {
				loading: "lazy",
				className: "h-full w-full object-contain",
				alt: e?.image?.alt,
				src: t ?? ""
			});
		}
		return /* @__PURE__ */ l("picture", {
			className: a("flex flex-col w-12 md:w-24 h-12 md:h-24", { "border-b-yellow border-b-2": t === n }),
			children: r
		});
	};
	return /* @__PURE__ */ l("div", {
		className: "grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-20",
		children: [/* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", {
			className: "flex flex-col space-y-2",
			children: [/* @__PURE__ */ l("div", {
				className: "w-full h-full",
				children: m()
			}), /* @__PURE__ */ l("div", {
				className: "flex gap-2 mx-auto",
				children: o?.map((e, t) => /* @__PURE__ */ l("button", {
					onClick: () => p(t),
					children: h(e, t, f)
				}, t))
			})]
		}) }), /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", {
			className: "flex flex-col space-y-10",
			children: [
				/* @__PURE__ */ l(u, {
					...e,
					children: e?.value
				}),
				/* @__PURE__ */ l("div", {
					className: "prose text-justify text-gray-1",
					dangerouslySetInnerHTML: { __html: t ?? "" }
				}),
				/* @__PURE__ */ l("h5", {
					className: "text-h5 font-bold leading-7 text-gray-1",
					children: n
				}),
				/* @__PURE__ */ l("div", {
					dangerouslySetInnerHTML: { __html: r ?? "" },
					className: "[&>ul]:list-disc [&>ul]:list-inside [&>ul]:columns-2 [&>ul]:space-y-2 text-start text-gray-1 "
				}),
				/* @__PURE__ */ l("div", {
					className: "flex flex-row gap-4",
					children: [c?.link && /* @__PURE__ */ l(i, {
						href: c.link.href,
						title: c.link.title,
						className: "w-full",
						variant: "primary",
						children: c.link.title
					}), d?.link && /* @__PURE__ */ l(i, {
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
	o(e).render(/* @__PURE__ */ l(d, { ...t }));
}
//#endregion
export { p as default };

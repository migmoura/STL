import { a as e, h as t, l as n, o as r } from "../../scripts/parser-Bc1VLsF3.js";
import { _ as i, m as a, r as o } from "../../scripts/utils-Cw5qLqcS.js";
import { E as s, nt as c } from "../../scripts/react-w7ldCLEn.js";
import { t as l } from "../../scripts/heading-DSowWvXd.js";
import { t as u } from "../../scripts/esm-Ccs46AP5.js";
import { t as d } from "../../scripts/picture-DtJCwEBx.js";
import { r as f } from "../../scripts/dist-BPI1VaeD.js";
//#region src/features/content/blocks/text-image.tsx
var p = "right", m = "left", h = "text-black", g = "text-white";
function _({ position: e = p, heading: t, subHeading: n, content: r, media: s, items: d, ratio: m = "aspect-square", textColor: g = h }) {
	let { isIntersecting: _, ref: y } = f({
		freezeOnceVisible: !0,
		threshold: .3
	});
	return /* @__PURE__ */ c("div", {
		ref: y,
		className: o("grid md:grid-cols-2 gap-10 items-center", _ ? "animate-fade-y" : "opacity-0"),
		children: [/* @__PURE__ */ c("div", {
			className: o("space-y-8", g),
			children: [
				/* @__PURE__ */ c("div", {
					className: "space-y-4",
					children: [n ? /* @__PURE__ */ c("p", { children: n }) : null, t && /* @__PURE__ */ c(l, {
						...t,
						children: t.value
					})]
				}),
				/* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(u, {
					className: "prose",
					content: r,
					transform: a
				}) }),
				/* @__PURE__ */ c("div", {
					className: "flex gap-8",
					children: d.filter((e) => e.link?.href && e.link?.value).map((e) => /* @__PURE__ */ c(i, {
						...e.link,
						variant: e.variant,
						children: e.link?.value
					}, e.link?.href))
				})
			]
		}), s ? v(s, m, e) : null]
	});
}
function v(e, t, n) {
	let { type: r, sources: i, poster: a } = e;
	return /* @__PURE__ */ c("div", {
		className: o("md:size-auto md:flex order-first", n === "right" ? "md:order-last" : ""),
		children: r === "image" ? /* @__PURE__ */ c(d, {
			...e,
			className: "w-full",
			imageClassName: o("w-full object-cover object-center", t)
		}) : r === "video" ? /* @__PURE__ */ c("div", {
			className: "relative w-full",
			children: /* @__PURE__ */ c("video", {
				poster: a,
				controls: !0,
				className: "w-full",
				children: [/* @__PURE__ */ c("track", { kind: "captions" }), i.map((e, t) => /* @__PURE__ */ c("source", {
					src: e.src,
					type: e.type
				}, t))]
			})
		}) : null
	});
}
//#endregion
//#region src/blocks/text-image/text-image.tsx
function y(i) {
	let [a, o, s, c, l, ...u] = Array.from(i.children);
	return {
		ratio: (Array.from(i.classList).find((e) => e.startsWith("ratio-")) || "ratio-3/2").replaceAll("-", "/").replace("ratio/", "aspect-"),
		media: a ? n(a, o?.textContent?.trim()) : void 0,
		subHeading: s?.textContent ? t(s?.textContent) : void 0,
		heading: r(c.querySelector("h1, h2, h3, h4, h5, h6")),
		copy: l.innerHTML,
		position: i.classList.contains("left") ? m : p,
		items: e(u),
		textColor: i.classList.contains("text-white") ? g : h
	};
}
function b(e) {
	let { position: t, subHeading: n, heading: r, copy: i, media: a, items: o, ratio: l, textColor: u } = y(e);
	s(e).render(/* @__PURE__ */ c(_, {
		position: t,
		subHeading: n,
		heading: r,
		content: i,
		media: a,
		items: o,
		ratio: l,
		textColor: u
	}));
}
//#endregion
export { b as default };

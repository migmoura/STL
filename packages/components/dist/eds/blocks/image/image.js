import { f as e, t, u as n } from "../../scripts/parser-Bc1VLsF3.js";
import { r } from "../../scripts/utils-Cw5qLqcS.js";
import { E as i, nt as a } from "../../scripts/react-w7ldCLEn.js";
import { t as o } from "../../scripts/picture-DtJCwEBx.js";
//#region src/features/content/simple-blocks/simple-image.tsx
function s({ watermark: e, children: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		...n,
		className: r("grid grid-areas-stack w-full h-full", n.className),
		children: [t, e && /* @__PURE__ */ a("p", {
			className: "p-2 area-stack text-xs flex items-end justify-end",
			children: e
		})]
	});
}
function c({ picture: e, watermark: t, caption: n, link: i }) {
	if (!e) return null;
	let c = /* @__PURE__ */ a(s, {
		watermark: t,
		children: /* @__PURE__ */ a(o, {
			...e,
			className: "area-stack overflow-hidden block w-full h-full object-cover",
			imageClassName: "w-full h-full object-cover object-top"
		})
	});
	return /* @__PURE__ */ a("div", {
		className: r("image-full:w-full image-lg:w-3/4 image-md:w-1/2 image-sm:w-1/4", "image-center:mx-auto image-right:ml-auto"),
		children: [/* @__PURE__ */ a("div", {
			className: r("ratio-1-1:aspect-square ratio-1-2:aspect-1/2 ratio-2-1:aspect-2/1", "ratio-4-3:aspect-4/3 ratio-3-4:aspect-3/4", "ratio-16-9:aspect-16/9 ratio-9-16:aspect-9/16", "overflow-hidden"),
			children: i ? /* @__PURE__ */ a("a", {
				href: i.href,
				title: i.title,
				className: "block w-full h-full",
				children: c
			}) : c
		}), n && /* @__PURE__ */ a("p", {
			className: "mt-2 text-left text-gray-1 text-sm",
			children: n
		})]
	});
}
//#endregion
//#region src/blocks/image/image.tsx
function l(r) {
	let [o, s, l] = Array.from(r.children), [u, d] = Array.from(o.querySelectorAll("p")), f = l.querySelector("a"), p = {
		picture: e(u.querySelector("picture")),
		watermark: n(d?.textContent),
		caption: n(s?.textContent),
		link: f ? t(f) : void 0
	};
	i(r).render(/* @__PURE__ */ a(c, { ...p }));
}
//#endregion
export { l as default };

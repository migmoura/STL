import { f as e, h as t, s as n } from "../../scripts/parser-YLn5-Se2.js";
import "../../scripts/utils-kL9Kd3j1.js";
import { C as r, Et as i, gt as a, pt as o, rt as s, xt as c } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as l } from "../../scripts/headline-1Uwx5fu-.js";
import { n as u, r as d, t as f } from "../../scripts/carousel-_PEDPEI0.js";
import { t as p } from "../../scripts/picture-DXSbVeQF.js";
import { t as m } from "../../scripts/carousel-pagination-D15HvGIf.js";
//#region src/components/logo-slider/logo-slider-item.tsx
o();
function h(e) {
	return /* @__PURE__ */ s("div", {
		className: "h-12 flex items-center",
		children: /* @__PURE__ */ s(p, { ...e })
	});
}
//#endregion
//#region src/components/logo-slider/logo-slider.tsx
function g({ logos: e, ...t }) {
	let [n, r] = c(), [o, p] = c(0), [g, _] = c(0), v = a(null), [y, b] = c(!1);
	return i(() => {
		let e = new IntersectionObserver(([t]) => {
			t.isIntersecting && (b(!0), e.disconnect());
		}, { threshold: .1 });
		return v.current && e.observe(v.current), () => e.disconnect();
	}, []), i(() => {
		if (!n || !y) return;
		let e = () => {
			p(n.selectedScrollSnap());
		};
		return n.on("select", e), _(n.scrollSnapList().length), p(n.selectedScrollSnap()), () => {
			n.off("select", e);
		};
	}, [n, y]), /* @__PURE__ */ s("div", {
		className: "space-y-20",
		ref: v,
		children: [/* @__PURE__ */ s(l, { ...t }), /* @__PURE__ */ s("div", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ s(f, {
					"aria-label": `${t.headline?.value} - Slider`,
					setApi: r,
					className: "space-y-14",
					children: [/* @__PURE__ */ s(u, { children: e?.map((e, t) => /* @__PURE__ */ s(d, {
						fullWidth: !1,
						className: "px-10",
						children: /* @__PURE__ */ s(h, { ...e.logo }, `feature-${e.logo?.image?.src}`)
					}, `carousel-item-${t}`)) }), g > 0 && /* @__PURE__ */ s("div", {
						className: "hidden md:flex justify-center",
						children: /* @__PURE__ */ s(m, {
							inverted: !1,
							current: o,
							total: g,
							scrollTo: n?.scrollTo
						})
					})]
				}),
				/* @__PURE__ */ s("div", { className: "pointer-events-none absolute left-0 top-0 bg-gradient-to-r from-white to-transparent z-10 xs:w-12 md:w-36 md:h-12" }),
				/* @__PURE__ */ s("div", { className: "pointer-events-none absolute right-0 top-0 h-full bg-gradient-to-l from-white to-transparent z-10 xs:w-12 md:w-36 md:h-12" })
			]
		})]
	});
}
//#endregion
//#region src/blocks/logo-slider/logo-slider.tsx
var _ = (r) => {
	let [i, a, o, ...s] = Array.from(r.children), c = s?.map((n) => {
		let r = n.querySelector("picture"), i = n.querySelector("p");
		return {
			logo: e(r),
			alt: t(i?.textContent)
		};
	});
	return {
		...n(i.querySelector("h1, h2, h3, h4, h5, h6"), a.textContent, o.querySelector("a")),
		logos: c || []
	};
};
async function v(e) {
	let t = _(e);
	r(e).render(/* @__PURE__ */ s(g, { ...t }));
}
//#endregion
export { v as default, _ as parseHtml };

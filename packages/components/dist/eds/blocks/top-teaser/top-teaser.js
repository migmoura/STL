import { f as e, g as t, o as n, t as r, u as i } from "../../scripts/parser-YLn5-Se2.js";
import { _ as a, w as o } from "../../scripts/utils-kL9Kd3j1.js";
import { C as s, Et as c, pt as l, rt as u, xt as d } from "../../scripts/react-DLNUXPF9.js";
import { t as f } from "../../scripts/heading-CpqtBlxR.js";
import { n as p, r as m, t as h } from "../../scripts/carousel-_PEDPEI0.js";
import { t as g } from "../../scripts/picture-DXSbVeQF.js";
import { t as _ } from "../../scripts/carousel-pagination-D15HvGIf.js";
//#region src/features/content/components/top-teaser-item.tsx
l();
function v({ heading: e, eyebrow: t, ctaButton: n, secondaryCtaButton: r, opacity: i = !0, children: s }) {
	return /* @__PURE__ */ u("div", {
		className: "grid grid-areas-stack items-end",
		children: [
			s,
			/* @__PURE__ */ u("div", { className: o("area-stack size-full", i ? "bg-linear-to-t from-transparent to-black/90" : "") }),
			/* @__PURE__ */ u("div", {
				className: "fluid py-14 area-stack size-full grid 2xl:grid-cols-2",
				children: /* @__PURE__ */ u("div", {
					className: "flex flex-col md:justify-center gap-5 md:gap-8 text-white md:col-span-2 2xl:col-span-1",
					children: [
						t ? /* @__PURE__ */ u("p", { children: t }) : null,
						/* @__PURE__ */ u(f, {
							...e,
							display: !0,
							className: "line-clamp-4 md:line-clamp-2",
							children: e.value
						}),
						/* @__PURE__ */ u("div", {
							className: "flex gap-4",
							children: [n && /* @__PURE__ */ u(a, {
								...n.link,
								variant: "primary",
								children: n.link?.value
							}, n.link?.href), r && /* @__PURE__ */ u(a, {
								...r.link,
								variant: "secondary",
								children: r.link?.value
							}, r.link?.href)]
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/features/content/blocks/top-teaser.tsx
var y = /* @__PURE__ */ function(e) {
	return e.PRIMARY = "primary", e.SECONDARY = "secondary", e;
}({}), b = "gradient";
function x({ items: e, variant: t = y.PRIMARY, opacity: n }) {
	let [r, i] = d(), [a, s] = d(0);
	return c(() => {
		if (!r) return;
		let e = () => {
			s(r.selectedScrollSnap());
		};
		return r.on("select", e), s(r.selectedScrollSnap()), () => {
			r.off("select", e);
		};
	}, [r]), /* @__PURE__ */ u(h, {
		opts: {
			loop: !0,
			watchDrag: (e, t) => !t.target.closest("h1, h2, p"),
			active: e.length !== 1
		},
		"aria-label": "Top Teaser - Slider",
		setApi: i,
		className: o("grid align-bottom grid-areas-stack", { "min-h-96": t === y.SECONDARY }),
		children: [/* @__PURE__ */ u("div", {
			className: "area-stack overflow-hidden",
			children: /* @__PURE__ */ u(p, {
				className: "ml-0!",
				children: e.map((e) => /* @__PURE__ */ u(m, {
					className: "pl-0!",
					children: /* @__PURE__ */ u(v, {
						...e,
						eyebrow: t === y.SECONDARY ? void 0 : e.eyebrow,
						opacity: n,
						children: e.image ? /* @__PURE__ */ u(g, {
							className: "area-stack",
							imageClassName: o("w-lvw object-cover", { "h-[calc(100dvh-179px)] md:max-h-[486px] lg:max-h-[912px]": t === y.PRIMARY }, { "h-[calc(100dvh-179px)] max-h-[424px]": t === y.SECONDARY }),
							...e.image
						}) : null
					}, e.heading.value)
				}, e.heading.value))
			})
		}), e.length > 1 ? /* @__PURE__ */ u("div", {
			className: "area-stack h-fit z-10 md:px-8 py-8 md:py-16 flex self-end justify-center md:justify-end lg:justify-center",
			children: /* @__PURE__ */ u(_, {
				inverted: !0,
				current: a,
				total: e.length,
				scrollTo: r?.scrollTo
			})
		}) : null]
	});
}
//#endregion
//#region src/blocks/top-teaser/top-teaser.tsx
var S = (a) => {
	let [o, s, c, l, u] = Array.from(a.children);
	return {
		image: e(o.querySelector("picture")) ?? void 0,
		eyebrow: i(s.textContent),
		heading: n(c.querySelector("h1, h2, h3, h4, h5, h6")),
		ctaButton: l?.children?.length ? { link: r(l.querySelector("a")) } : void 0,
		secondaryCtaButton: u?.children?.length ? { link: r(u.querySelector("a")) } : void 0,
		universalEditor: t(a)
	};
};
function C(e) {
	let [t, ...n] = Array.from(e.children), r = e.classList.contains(y.SECONDARY) ? y.SECONDARY : y.PRIMARY, i = e.classList.contains(b);
	return n ? {
		variant: r,
		opacity: i,
		items: Array.from([t, ...n])?.map(S)
	} : {
		variant: r,
		opacity: i,
		items: [S(t)]
	};
}
function w(e) {
	let { items: t, variant: n, opacity: r } = C(e);
	s(e).render(/* @__PURE__ */ u(x, {
		items: t,
		variant: n,
		opacity: r
	}));
}
//#endregion
export { w as default };

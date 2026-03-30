import { f as e, h as t, s as n, t as r } from "../../scripts/parser-YLn5-Se2.js";
import { n as i, r as a } from "../../scripts/utils-kL9Kd3j1.js";
import { C as o, Et as s, pt as c, rt as l, xt as u } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as d } from "../../scripts/headline-1Uwx5fu-.js";
import "../../scripts/esm-BB_C1aMS.js";
import "../../scripts/tag-NlcpsyaD.js";
import { n as f, r as p, t as m } from "../../scripts/carousel-_PEDPEI0.js";
import "../../scripts/picture-DXSbVeQF.js";
import { a as h } from "../../scripts/dist-DkU8_-4E.js";
import "../../scripts/skeleton-B-n3kDr5.js";
import { n as g } from "../../scripts/teaser-C41I5SfI.js";
import { t as _ } from "../../scripts/carousel-pagination-D15HvGIf.js";
import { t as v } from "../../scripts/embla-carousel-wheel-gestures.esm-C-pp_2FN.js";
//#region src/features/content/components/gallery-carousel-wrapper.tsx
c();
var y = [
	"aspect-16/9",
	"aspect-9/16",
	"aspect-1/1"
];
function b({ items: e, title: t }) {
	let [n, r] = u(), [o, c] = u(0), d = i(e, 3);
	return s(() => {
		n && (c(n.selectedScrollSnap() + 1), n.on("select", () => {
			c(n.selectedScrollSnap() + 1);
		}));
	}, [n]), /* @__PURE__ */ l(m, {
		opts: { align: "center" },
		"aria-label": `${t} - Slider`,
		setApi: r,
		children: [/* @__PURE__ */ l(f, {
			className: "-ml-30 w-full md:pl-10 lg:pl-14 xl:pl-18 2xl:pl-20",
			children: d.map((e) => /* @__PURE__ */ l(p, {
				fullWidth: !1,
				className: "hidden md:grid w-[calc((100vh-179px)*(3/2))] max-w-[1200px] gap-x-10 gap-y-2 grid-cols-[26%_37%_37%] grid-rows-2 pl-30",
				children: e.map((e, t) => /* @__PURE__ */ l(g, {
					...e,
					aspectRatio: y[t % 3],
					className: a({
						"col-span-2 row-span-1 md:mt-10 2xl:mt-20": t % 3 == 0,
						"col-span-1 row-span-2": t % 3 == 1,
						"col-start-2 col-span-1 row-span-1": t % 3 == 2
					})
				}, e.title))
			}, `${e[0].title}-slide`))
		}), /* @__PURE__ */ l("div", {
			className: "sticky flex justify-center bottom-0 pb-6",
			children: /* @__PURE__ */ l(_, {
				inverted: !1,
				current: o - 1,
				total: d.length,
				scrollTo: n?.scrollTo
			})
		})]
	});
}
function x({ items: e, title: t }) {
	return /* @__PURE__ */ l(m, {
		plugins: [v({ forceWheelAxis: "x" })],
		"aria-label": `${t} - Slider`,
		className: "mt-6 px-6 sm:px-8",
		children: /* @__PURE__ */ l(f, {
			className: "-ml-4",
			children: e.map((e) => /* @__PURE__ */ l(p, {
				fullWidth: !1,
				className: "w-[316px] pl-4",
				children: /* @__PURE__ */ l(g, {
					...e,
					aspectRatio: "aspect-2/1"
				})
			}, e.title))
		})
	});
}
//#endregion
//#region src/features/content/blocks/gallery-teaser.tsx
function S({ items: e, ...t }) {
	let n = h("(width >= 80rem)");
	return console.log(n), console.log(window.matchMedia("(width >= 80rem)")), /* @__PURE__ */ l("div", { children: [/* @__PURE__ */ l("div", {
		className: "fluid",
		children: /* @__PURE__ */ l(d, { ...t })
	}), l(n ? b : x, { items: e })] });
}
//#endregion
//#region src/blocks/gallery-teaser/gallery-teaser.tsx
function C(i) {
	let [a, o, s, ...c] = Array.from(i.children);
	return {
		...n(a.querySelector("h1, h2, h3, h4, h5, h6"), o.textContent, s.querySelector("a")),
		items: c.map((n) => {
			let [i, a, o, s] = Array.from(n.children);
			return {
				image: e(i.querySelector("picture")),
				link: r(s.querySelector("a")),
				title: t(a.textContent),
				description: t(o.textContent)
			};
		})
	};
}
async function w(e) {
	let t = C(e);
	o(e).render(/* @__PURE__ */ l(S, { ...t }));
}
//#endregion
export { w as default };

import { _ as e, f as t, m as n, r } from "./utils-Cw5qLqcS.js";
import { Ot as i, ft as a, nt as o, vt as s, xt as c } from "./react-w7ldCLEn.js";
import { t as l } from "./esm-Ccs46AP5.js";
import { t as u } from "./tag-CVOOa_z9.js";
import { t as d } from "./picture-DtJCwEBx.js";
import { t as f } from "./skeleton-amY4T5vv.js";
//#region src/components/ui/teaser.tsx
a();
function p({ image: i, defaultSrc: a, link: f, aspectRatio: p, title: m, description: h, hint: g, tags: _, className: v, TitleElement: y = "h3", showDescription: b = !0 }) {
	let x = c(), S = `${m?.replaceAll(" ", "-").toLowerCase()}-${x}`, C = s(() => t.has(f?.value.toLowerCase() ?? ""), [f?.value]);
	return /* @__PURE__ */ o("div", {
		className: r("flex flex-col h-full", v),
		children: [
			i ? /* @__PURE__ */ o("a", {
				"aria-labelledby": i.image.alt ? void 0 : S,
				"aria-label": i.image.alt,
				...f,
				className: "overflow-hidden",
				children: /* @__PURE__ */ o(d, {
					imageClassName: r("object-cover w-full object-top duration-300 ease-in-out hover:scale-110", p),
					defaultSrc: a,
					...i
				})
			}) : null,
			g || _?.length && _?.length > 0 ? /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1 px-6 pt-4",
				children: [g ? /* @__PURE__ */ o("p", {
					className: "text-sm leading-label mr-auto",
					children: g
				}) : null, _?.length && _?.length > 0 ? _.map((e) => /* @__PURE__ */ o(u, {
					variant: "secondary",
					className: "pointer-events-none",
					children: e
				}, e)) : null]
			}) : null,
			/* @__PURE__ */ o("div", {
				className: "flex flex-col px-6 pt-6 space-y-4",
				children: [
					m ? /* @__PURE__ */ o(y, {
						id: S,
						className: "text-h5",
						children: /* @__PURE__ */ o(l, { content: m })
					}) : null,
					h && b ? /* @__PURE__ */ o(l, {
						className: "text-base text-gray-1 prose",
						content: h,
						transform: n
					}) : null,
					f ? /* @__PURE__ */ o("div", {
						className: "flex flex-row items-center",
						children: /* @__PURE__ */ o(e, {
							"aria-labelledby": f.title === f.value ? S : void 0,
							...f,
							children: [C ? /* @__PURE__ */ o("span", {
								className: "sr-only",
								children: m
							}) : null, /* @__PURE__ */ o("span", {
								"aria-hidden": C,
								children: f.value
							})]
						})
					}) : null
				]
			})
		]
	});
}
function m({ image: i, defaultSrc: a, link: f, aspectRatio: p, title: m, description: h, hint: g, tags: _, className: v, TitleElement: y = "h3", type: b }) {
	let x = c(), S = `${m?.replaceAll(" ", "-").toLowerCase()}-${x}`, C = s(() => t.has(f?.value.toLowerCase() ?? ""), [f?.value]);
	return /* @__PURE__ */ o("div", {
		className: r("flex flex-col h-full", v),
		children: [
			i ? /* @__PURE__ */ o("a", {
				"aria-labelledby": i.image.alt ? void 0 : S,
				"aria-label": i.image.alt,
				target: "_blank",
				download: "filename",
				...f,
				className: "overflow-hidden",
				children: /* @__PURE__ */ o(d, {
					imageClassName: r("object-cover w-full object-top duration-300 ease-in-out hover:scale-110", p),
					defaultSrc: a,
					...i
				})
			}) : /* @__PURE__ */ o("a", {
				"aria-labelledby": S,
				download: "filename",
				target: "_blank",
				...f,
				className: r("flex items-center justify-center bg-gray-200 text-black text-h4 bg-gray-4", p),
				children: /* @__PURE__ */ o("p", {
					className: "text-lg font-bold",
					children: b
				})
			}),
			g || _?.length && _?.length > 0 ? /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1 px-6 pt-4",
				children: [_?.length && _?.length > 0 ? _.map((e) => /* @__PURE__ */ o(u, {
					variant: "secondary",
					className: "pointer-events-none",
					children: e
				}, e)) : null, g ? /* @__PURE__ */ o("p", {
					className: "text-sm leading-label ml-auto",
					children: g
				}) : null]
			}) : null,
			/* @__PURE__ */ o("div", {
				className: "flex flex-col px-6 pt-6 space-y-4",
				children: [
					m ? /* @__PURE__ */ o(y, {
						id: S,
						className: "text-h5",
						children: /* @__PURE__ */ o(l, { content: m.replaceAll("_", " ").replaceAll("-", " ") })
					}) : null,
					h ? /* @__PURE__ */ o(l, {
						className: "text-base text-gray-1 prose",
						content: h,
						transform: n
					}) : null,
					f ? /* @__PURE__ */ o("div", {
						className: "flex flex-row items-center",
						children: /* @__PURE__ */ o(e, {
							download: "filename",
							"aria-labelledby": f.title === f.value ? S : void 0,
							...f,
							children: [C ? /* @__PURE__ */ o("span", {
								className: "sr-only",
								children: m
							}) : null, /* @__PURE__ */ o("span", {
								"aria-hidden": C,
								children: f.value
							})]
						})
					}) : null
				]
			})
		]
	});
}
function h({ className: e, showDescription: t = !0, showTags: n = !0, showHint: a = !0 }) {
	return /* @__PURE__ */ o("div", {
		className: r("flex flex-col h-full animate-in fade-in", e),
		children: [
			/* @__PURE__ */ o("div", {
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ o(f, { className: "w-full aspect-[16/9] rounded-none" })
			}),
			(n || a) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-2 px-6 pt-4",
				children: [n && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(f, { className: "h-6 w-20 rounded-full" }), /* @__PURE__ */ o(f, { className: "h-6 w-24 rounded-full" })] }), a && /* @__PURE__ */ o(f, { className: "h-4 w-12 ml-auto" })]
			}),
			/* @__PURE__ */ o("div", {
				className: "flex flex-col px-6 pt-6 space-y-4",
				children: [
					/* @__PURE__ */ o(f, { className: "h-6 w-3/4" }),
					t && /* @__PURE__ */ o("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ o(f, { className: "h-4 w-full" }),
							/* @__PURE__ */ o(f, { className: "h-4 w-5/6" }),
							/* @__PURE__ */ o(f, { className: "h-4 w-2/3" })
						]
					}),
					/* @__PURE__ */ o("div", {
						className: "pt-2",
						children: /* @__PURE__ */ o(f, { className: "h-4 w-24" })
					})
				]
			})
		]
	});
}
//#endregion
export { p as n, h as r, m as t };

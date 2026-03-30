import { _ as e, v as t } from "./utils-kL9Kd3j1.js";
import { D as n, pt as r, rt as i, xt as a } from "./react-DLNUXPF9.js";
import "./esm-BB_C1aMS.js";
import { t as o } from "./useTranslation-Cl_kknJx.js";
import "./picture-DXSbVeQF.js";
import { t as s } from "./dist-DkU8_-4E.js";
import "./es2015-Lwokp0LN.js";
import { a as c, n as l, t as u } from "./sheet-DHtRCcio.js";
import { n as d } from "./input-B3cTQm8l.js";
import "./use-search-C-A3LLIr.js";
import "./scroll-CqZfFQXp.js";
import { t as f } from "./search-results-BB4NeJ1x.js";
//#region src/features/navigation/components/search-sheet.tsx
r();
function p({ indexes: r, link: p }) {
	let [m, h] = a(""), g = s(h, 300), { t: _ } = o();
	return /* @__PURE__ */ i(u, { children: [/* @__PURE__ */ i(c, {
		asChild: !0,
		children: /* @__PURE__ */ i(t, {
			"aria-label": _("Open search panel"),
			className: "block lg:hidden bg-blur-lg",
			size: "icon",
			variant: "tertiary",
			dark: !0,
			children: /* @__PURE__ */ i(n, {})
		})
	}), /* @__PURE__ */ i(l, {
		className: "w-screen overflow-y-auto",
		children: [/* @__PURE__ */ i("div", {
			className: "h-full mt-25 px-6 flex flex-col gap-8",
			children: [/* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(d, {
				className: "h-16",
				placeholder: _("Search..."),
				onChange: (e) => g(e.target.value)
			}) }), m.length > 2 ? r.map((e) => /* @__PURE__ */ i(f, {
				...e,
				query: m
			}, e.label)) : null]
		}), p ? /* @__PURE__ */ i("div", {
			className: "fixed bottom-0 py-6 w-full flex justify-center bg-white",
			children: /* @__PURE__ */ i(e, {
				...p,
				variant: "secondary",
				children: p.value
			})
		}) : null]
	})] });
}
//#endregion
export { p as SearchSheet, p as default };

import { _ as e, v as t } from "./utils-Cw5qLqcS.js";
import { A as n, bt as r, ft as i, nt as a } from "./react-w7ldCLEn.js";
import "./esm-Ccs46AP5.js";
import { t as o } from "./useTranslation-D2-izOQw.js";
import "./picture-DtJCwEBx.js";
import { t as s } from "./dist-BPI1VaeD.js";
import "./es2015-CAHZSTi-.js";
import { a as c, n as l, t as u } from "./sheet-DONXsLqL.js";
import { n as d } from "./input-D5kPLzUd.js";
import "./use-search-7ykMqwIw.js";
import { t as f } from "./search-results-gUoVBg-M.js";
//#region src/features/navigation/components/search-sheet.tsx
i();
function p({ indexes: i, link: p }) {
	let [m, h] = r(""), g = s(h, 300), { t: _ } = o();
	return /* @__PURE__ */ a(u, { children: [/* @__PURE__ */ a(c, {
		asChild: !0,
		children: /* @__PURE__ */ a(t, {
			"aria-label": _("Open search panel"),
			className: "block lg:hidden bg-blur-lg",
			size: "icon",
			variant: "tertiary",
			dark: !0,
			children: /* @__PURE__ */ a(n, {})
		})
	}), /* @__PURE__ */ a(l, {
		className: "w-screen overflow-y-auto",
		children: [/* @__PURE__ */ a("div", {
			className: "h-full mt-25 px-6 flex flex-col gap-8",
			children: [/* @__PURE__ */ a("div", { children: /* @__PURE__ */ a(d, {
				className: "h-16",
				placeholder: _("Search..."),
				onChange: (e) => g(e.target.value)
			}) }), m.length > 2 ? i.map((e) => /* @__PURE__ */ a(f, {
				...e,
				query: m
			}, e.label)) : null]
		}), p ? /* @__PURE__ */ a("div", {
			className: "fixed bottom-0 py-6 w-full flex justify-center bg-white",
			children: /* @__PURE__ */ a(e, {
				...p,
				variant: "secondary",
				children: p.value
			})
		}) : null]
	})] });
}
//#endregion
export { p as SearchSheet, p as default };

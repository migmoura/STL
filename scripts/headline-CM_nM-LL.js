import { r as e, v as t } from "./utils-Cw5qLqcS.js";
import { nt as n } from "./react-w7ldCLEn.js";
import { t as r } from "./heading-DSowWvXd.js";
//#region src/components/ui/headline.tsx
function i({ headline: i, subHeadline: a, link: o, className: s, block: c = !0 }) {
	return !i || !i.value ? null : /* @__PURE__ */ n("div", {
		className: e("flex flex-col lg:flex-row flex-wrap justify-between items-start align-bottom", { "lg:mx-[150px]": c }, s),
		children: [/* @__PURE__ */ n("div", {
			className: "space-y-5",
			children: [a ? /* @__PURE__ */ n("p", { children: a }) : null, /* @__PURE__ */ n(r, {
				...i,
				children: i.value
			})]
		}), o ? /* @__PURE__ */ n(t, {
			asChild: !0,
			className: "ml-auto",
			variant: "link",
			children: /* @__PURE__ */ n("a", {
				href: o.href,
				title: o.title,
				children: o.value
			})
		}) : null]
	});
}
//#endregion
export { i as t };

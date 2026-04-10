import { _ as e, h as t, t as n } from "../../scripts/parser-Bc1VLsF3.js";
import { v as r } from "../../scripts/utils-Cw5qLqcS.js";
import { E as i, nt as a } from "../../scripts/react-w7ldCLEn.js";
//#region src/features/content/blocks/text-block.tsx
function o({ heading: e = "", text: t = "", variant: n, primaryCta: i, secondaryCta: o }) {
	let s = n === "horizontal";
	return /* @__PURE__ */ a("section", {
		className: `w-full text-justify ${s ? "md:flex md:space-x-20" : ""}`,
		children: [/* @__PURE__ */ a("div", {
			className: `${s ? "md:w-1/2" : ""} mb-6`,
			children: /* @__PURE__ */ a("div", {
				className: "prose text-md",
				dangerouslySetInnerHTML: { __html: e }
			})
		}), /* @__PURE__ */ a("div", {
			className: `${s ? "md:w-1/2" : ""}`,
			children: /* @__PURE__ */ a("div", {
				className: "flex flex-col gap-y-6",
				children: [/* @__PURE__ */ a("div", {
					className: "prose text-md",
					dangerouslySetInnerHTML: { __html: t }
				}), /* @__PURE__ */ a("div", {
					className: "flex flex-col md:flex-row gap-4",
					children: [i && /* @__PURE__ */ a(r, {
						className: "size-fit",
						asChild: !0,
						variant: "primary",
						children: /* @__PURE__ */ a("a", {
							href: i.href,
							title: i.title,
							children: i.value
						})
					}), o && /* @__PURE__ */ a(r, {
						asChild: !0,
						className: "size-fit",
						variant: "secondary",
						children: /* @__PURE__ */ a("a", {
							href: o.href,
							title: o.title,
							children: o.value
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/blocks/text-block/text-block.tsx
async function s(e) {
	let t = c(e);
	i(e).render(/* @__PURE__ */ a(o, { ...t }));
}
var c = (r) => {
	let [i, a, o, s, c] = Array.from(r.children);
	return {
		heading: i?.innerHTML ? e.sanitize(i?.innerHTML) : void 0,
		text: a?.innerHTML ? e.sanitize(a?.innerHTML) : void 0,
		primaryCta: o?.querySelector("a") ? n(o?.querySelector("a")) : void 0,
		secondaryCta: s?.querySelector("a") ? n(s?.querySelector("a")) : void 0,
		variant: t(c.textContent) ?? "horizontal"
	};
};
//#endregion
export { s as default };

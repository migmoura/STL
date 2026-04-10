import { h as e, s as t, u as n } from "../../scripts/parser-Bc1VLsF3.js";
import { m as r } from "../../scripts/utils-Cw5qLqcS.js";
import { E as i, bt as a, ft as o, nt as s } from "../../scripts/react-w7ldCLEn.js";
import { l as c } from "../../scripts/index.es-bRvkHzh3.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as l } from "../../scripts/headline-CM_nM-LL.js";
import { t as u } from "../../scripts/esm-Ccs46AP5.js";
//#region src/blocks/accordion/accordion.tsx
o();
function d({ headline: e, subHeadline: t, link: n, type: i, items: o }) {
	let [d, f] = a(o.find((e) => e.open)?.id), [p, m] = a(new Set(o.filter((e) => e.open).map((e) => e.id)));
	return /* @__PURE__ */ s("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ s(l, {
			headline: e,
			subHeadline: t,
			link: n
		}), /* @__PURE__ */ s("div", {
			className: "w-full max-w-[860px] mx-auto",
			children: o.map((e) => /* @__PURE__ */ s(c, {
				id: e.id,
				summary: e.label ?? "",
				isOpen: i === "single" ? d === e.id : p.has(e.id),
				onToggle: (t) => {
					i === "single" ? f(t.currentTarget.open ? e.id : void 0) : m((n) => {
						let r = new Set(n);
						return t.currentTarget.open ? r.add(e.id) : r.delete(e.id), r;
					});
				},
				children: /* @__PURE__ */ s(u, {
					content: e.value,
					transform: r
				})
			}, e.id))
		})]
	});
}
async function f(r) {
	let [i, a, o, ...s] = Array.from(r.children);
	return {
		...t(i.querySelector("h1, h2, h3, h4, h5, h6"), a.textContent, o.querySelector("a")),
		type: r.classList.contains("multiple") ? "multiple" : "single",
		items: s.map((t, r) => {
			let [i, a, o, s] = Array.from(t.children);
			return {
				id: e(i.textContent) ?? `item-${r}`,
				label: e(a.textContent),
				value: o.innerHTML,
				open: n(s?.textContent) === "open"
			};
		})
	};
}
async function p(e) {
	let t = await f(e);
	i(e).render(/* @__PURE__ */ s(d, { ...t }));
}
//#endregion
export { p as default };

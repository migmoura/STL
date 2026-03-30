import { C as e, Et as t, Q as n, V as r, Z as i, kt as a, pt as o, rt as s, xt as c } from "../../scripts/react-DLNUXPF9.js";
import { t as l } from "../../scripts/useTranslation-Cl_kknJx.js";
//#region src/features/navigation/blocks/breadcrumb.tsx
o();
function u() {
	let [e, o] = c([]), { t: u } = l();
	if (t(() => {
		typeof window < "u" && o(window.location.pathname.split("/").filter(Boolean));
	}, []), e.length === 0) return null;
	let d = (t) => "/" + e.slice(0, t + 2).join("/"), f = (e) => e ? decodeURIComponent(e).replace(/\.html$/, "").replace(/-/g, " ") : null, p = () => e.length <= 3 ? "Home" : f(e[e.length - 2]);
	return /* @__PURE__ */ s("nav", {
		"aria-label": u("Breadcrumb"),
		className: "fluid py-6 md:pt-8 md:pb-28 text-gray-1",
		children: [/* @__PURE__ */ s("div", {
			className: "md:hidden",
			children: /* @__PURE__ */ s("a", {
				href: d(e.length - 3),
				className: "flex items-center",
				children: [/* @__PURE__ */ s(n, { className: "size-6 text-black" }), /* @__PURE__ */ s("span", {
					className: "shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow",
					children: [u("Back to"), /* @__PURE__ */ s("span", {
						className: "capitalize",
						children: ` ${p()}`
					})]
				})]
			})
		}), /* @__PURE__ */ s("div", {
			className: "hidden md:flex gap-2 flex-wrap items-center leading-label text-sm",
			children: [
				/* @__PURE__ */ s("a", {
					href: d(0),
					className: "hover:underline",
					children: /* @__PURE__ */ s(r, {})
				}),
				/* @__PURE__ */ s(i, { className: "size-4" }),
				e.slice(2, -1).map((e, t) => {
					let n = d(t + 1);
					return /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ s("a", {
						href: n,
						className: "capitalize font-semibold shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow",
						children: f(e)
					}), /* @__PURE__ */ s(i, { className: "size-4" })] }, n);
				}),
				/* @__PURE__ */ s("span", {
					className: "capitalize font-light",
					children: f(e.at(-1))
				})
			]
		})]
	});
}
//#endregion
//#region src/blocks/breadcrumb/breadcrumb.tsx
async function d(t) {
	e(t).render(/* @__PURE__ */ s(u, {}));
}
//#endregion
export { d as default };

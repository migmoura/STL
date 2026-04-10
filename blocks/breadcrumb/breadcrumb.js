import { E as e, Tt as t, bt as n, ft as r, nt as i } from "../../scripts/react-w7ldCLEn.js";
import { s as a } from "../../scripts/index.es-bRvkHzh3.js";
//#region src/blocks/breadcrumb/breadcrumb.tsx
r();
function o() {
	let [e, r] = n([]);
	return t(() => {
		let e = window.location.pathname.split("/").filter(Boolean), t = (e) => decodeURIComponent(e).replace(/\.html$/, "").replace(/-/g, " ");
		r([{
			label: "Home",
			href: "/"
		}, ...e.map((n, r) => ({
			label: t(n),
			href: "/" + e.slice(0, r + 1).join("/")
		}))]);
	}, []), e.length === 0 ? null : /* @__PURE__ */ i(a, {
		aria: { "aria-label": "Breadcrumb" },
		links: e
	});
}
async function s(t) {
	e(t).render(/* @__PURE__ */ i(o, {}));
}
//#endregion
export { s as default };

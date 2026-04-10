import { decorateMain as e } from "/Users/miguelmoura/Desktop/AEM EDS/STL/scripts/scripts.js";
import { loadSections as t } from "/Users/miguelmoura/Desktop/AEM EDS/STL/scripts/aem.js";
//#region src/blocks/fragment/fragment.tsx
async function n(n) {
	if (!n || !n.startsWith("/") || n.startsWith("//")) return null;
	let r = await fetch(`${n}.plain.html`);
	if (!r.ok) return null;
	let i = document.createElement("main");
	i.innerHTML = await r.text();
	let a = (e, t) => {
		i.querySelectorAll(`${e}[${t}^="./media_"]`).forEach((e) => {
			e[t] = new URL(e.getAttribute(t), new URL(n, window.location.href)).href;
		});
	};
	return a("img", "src"), a("source", "srcset"), e(i), await t(i), i;
}
async function r(e) {
	let t = e.querySelector("a"), r = t ? t.getAttribute("href") : e.textContent?.trim();
	if (!r) return;
	let i = await n(r);
	i && e.replaceChildren(...i.childNodes);
}
//#endregion
export { r as default, n as loadFragment };

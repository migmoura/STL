import { f as e, h as t, t as n } from "../../scripts/parser-Bc1VLsF3.js";
import { _ as r, l as i, u as a } from "../../scripts/utils-Cw5qLqcS.js";
import { E as o, H as s, Ot as c, W as l, ft as u, nt as d, st as f } from "../../scripts/react-w7ldCLEn.js";
import { t as p } from "../../scripts/esm-Ccs46AP5.js";
import { t as m } from "../../scripts/index-x5LGNNyK.js";
import { t as h } from "../../scripts/simple-link-O4bP7V7T.js";
import { t as g } from "../../scripts/lazy-country-selection-sheet-De7-bgOX.js";
//#region src/components/footer/footer.tsx
u();
var _ = async ([r, i, a]) => fetch(`/${r}/${i}/${a}`).then((e) => e.text()).then((r) => {
	let i = new DOMParser().parseFromString(r, "text/html"), [a, o] = Array.from(i.body.children);
	return {
		columns: Array.from(a.querySelectorAll("& > ul > li")).map((e) => {
			if (e.innerHTML.includes("footer-teaser")) {
				let [r, i, a] = e.querySelectorAll("p, h2, h3, h4, h5");
				return {
					teaser: !0,
					title: t(r?.textContent),
					content: i.innerHTML,
					link: n(a.querySelector("a"), !0)
				};
			}
			return {
				teaser: !1,
				title: t(e.querySelector("p")?.textContent),
				link: Array.from(e.querySelectorAll("a")).map((e) => n(e, !0))
			};
		}),
		links: Array.from(o.querySelectorAll("li")).map((r) => r.querySelector("img") ? {
			link: n(r.querySelector("a"), !0),
			icon: e(r.querySelector("picture"))
		} : r.querySelector("a") ? n(r.querySelector("a")) : t(r.textContent))
	};
});
function v(e) {
	let t = e.links.filter((e) => !a(e)), n = e.links.filter((e) => a(e));
	return /* @__PURE__ */ d("div", {
		className: "bg-white border-b-4 border-yellow py-6",
		children: /* @__PURE__ */ d("div", {
			className: "fluid flex flex-col md:items-center md:flex-row justify-between gap-6",
			children: [
				/* @__PURE__ */ d(f, {
					fallback: /* @__PURE__ */ d("div", {
						className: "flex text-nowrap gap-3 items-center order-1 mb-2 md:mb-0",
						children: [/* @__PURE__ */ d(l, {}), "Global (EN)"]
					}),
					children: /* @__PURE__ */ d(g, { renderTrigger: (e, t) => /* @__PURE__ */ d("div", {
						className: "flex text-nowrap gap-3 items-center order-1 mb-2 md:mb-0",
						children: [
							/* @__PURE__ */ d(l, {}),
							e,
							" (",
							t.toUpperCase(),
							")"
						]
					}) })
				}),
				/* @__PURE__ */ d("div", {
					className: "order-2 md:order-3 flex md:items-center gap-6",
					children: n?.map((e) => /* @__PURE__ */ d("a", {
						href: e.link?.href ?? "#",
						"aria-label": e.link?.title,
						target: "_blank",
						children: /* @__PURE__ */ d("img", {
							src: e.icon?.image.src,
							alt: e.icon?.image.alt ?? e.link?.title,
							className: "w-10 h-10"
						})
					}, e.link?.value))
				}),
				/* @__PURE__ */ d("div", {
					className: "order-3 md:order-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-x-10 flex-wrap text-sm",
					children: t.map((e) => typeof e == "string" ? /* @__PURE__ */ d("p", { children: e }, e) : /* @__PURE__ */ d(h, {
						...e,
						children: e.value
					}, e.value))
				})
			]
		})
	});
}
function y({ columns: e }) {
	return /* @__PURE__ */ d("div", {
		className: "fluid md:columns-4 gap-10 *:mb-10",
		children: e.map((e) => e.teaser ? /* @__PURE__ */ d("div", {
			className: "space-y-6 break-inside-avoid",
			children: [
				/* @__PURE__ */ d("p", {
					className: "text-h5",
					children: e.title
				}),
				/* @__PURE__ */ d(p, {
					className: "text-justify",
					tagName: "p",
					content: e.content
				}),
				/* @__PURE__ */ d(r, {
					className: "w-full",
					href: e.link.href,
					title: e.link.title,
					variant: "primary",
					children: e.link.value
				})
			]
		}, e.title) : /* @__PURE__ */ d("div", {
			className: "space-y-6 break-inside-avoid",
			children: [/* @__PURE__ */ d("p", {
				className: "text-h5",
				children: e.title
			}), /* @__PURE__ */ d("ul", {
				className: "space-y-4 text-sm text-black",
				children: e.link.map((e) => /* @__PURE__ */ d("li", { children: /* @__PURE__ */ d(h, {
					...e,
					children: [e.value, i(e.href) ? /* @__PURE__ */ d(s, { className: "size-3" }) : null]
				}, e.value) }, e.href))
			})]
		}, e.title))
	});
}
function b() {
	let e = new URL(location.href).pathname.split("/")[1], t = new URL(location.href).pathname.split("/")[2], { data: n } = m([
		e,
		t,
		"footer.plain.html"
	], _);
	if (!n) return null;
	let { columns: r, links: i } = n;
	return /* @__PURE__ */ d(c, { children: [/* @__PURE__ */ d("div", {
		className: "bg-gray-4 py-10 md:py-24",
		children: /* @__PURE__ */ d(y, { columns: r })
	}), /* @__PURE__ */ d(v, { links: i })] });
}
//#endregion
//#region src/blocks/footer/footer.tsx
async function x(e) {
	o(e).render(/* @__PURE__ */ d(b, {}));
}
//#endregion
export { x as default };

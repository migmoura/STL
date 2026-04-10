import { d as e, h as t, n, p as r, t as i } from "../../scripts/parser-Bc1VLsF3.js";
import { a, c as o, r as s, v as c, y as l } from "../../scripts/utils-Cw5qLqcS.js";
import { D as u, E as d, Ot as f, Tt as p, bt as m, ft as h, mt as g, nt as _, st as v, vt as y, xt as b } from "../../scripts/react-w7ldCLEn.js";
import { a as x, c as S, i as C, n as w, o as T } from "../../scripts/index.es-bRvkHzh3.js";
import "../../scripts/i18next-Bnts7JEk.js";
import { t as E } from "../../scripts/Trans-C9DSLhZ7.js";
import { t as D } from "../../scripts/useTranslation-D2-izOQw.js";
import { i as O, s as k } from "../../scripts/dist-BPI1VaeD.js";
import "../../scripts/es2015-CAHZSTi-.js";
import { a as A, c as j, i as M, o as N, r as P, t as F } from "../../scripts/dropdown-menu-C-G7Ntkq.js";
import { t as I } from "../../scripts/index-x5LGNNyK.js";
import "../../scripts/i18next-CiaISZrJ.js";
import { t as L } from "../../scripts/lazy-country-selection-sheet-De7-bgOX.js";
import { t as R } from "../../scripts/service-BfGEvnoS.js";
//#region src/components/ui/notice-banner.tsx
h();
var z = l("z-50 overflow-hidden transition-all duration-300 linear", {
	variants: {
		variant: {
			primary: "bg-yellow text-black",
			error: "bg-light-red text-white"
		},
		closing: {
			true: "h-0 py-0",
			false: "py-4"
		}
	},
	defaultVariants: {
		variant: "primary",
		closing: !1
	}
});
function B({ open: e, message: t, primaryAction: n, secondaryAction: r, ariaLabel: i = "Site context notice", variant: a }) {
	let [o, c] = m(e), [l, d] = m(!1), [f, h] = k("__conti-notice-banner-dismissed", !1);
	p(() => {
		e || v();
	}, [e]);
	let g = b(), v = () => {
		d(!0), setTimeout(() => {
			c(!1);
		}, 300);
	}, y = () => {
		setTimeout(() => {
			h(!0);
		}, 300), v();
	};
	return !o || f ? null : /* @__PURE__ */ _("section", {
		role: "region",
		"aria-labelledby": g,
		className: s(z({
			variant: a,
			closing: l
		})),
		children: [/* @__PURE__ */ _("p", {
			id: g,
			className: "sr-only",
			children: i
		}), /* @__PURE__ */ _("div", {
			className: "fluid relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: y,
					"aria-label": "Dismiss notice",
					className: "absolute right-3 top-0 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
					children: /* @__PURE__ */ _(u, {})
				}),
				/* @__PURE__ */ _("div", {
					className: "text-sm leading-label pr-6 md:pr-0",
					children: t
				}),
				/* @__PURE__ */ _("div", {
					className: "w-full md:w-fit flex justify-end shrink-0 items-center gap-6",
					children: [
						n,
						r,
						/* @__PURE__ */ _("button", {
							type: "button",
							onClick: y,
							"aria-label": "Dismiss notice",
							className: "hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
							children: /* @__PURE__ */ _(u, {})
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/features/navigation/utils.ts
function V(e) {
	if (!e || e.length === 0) return;
	let t = navigator.languages || [navigator.language];
	for (let n of t) {
		let [t, r] = n.toLowerCase().split("-");
		if (r) {
			let n = e.find((e) => a(e.localeCode, t) && a(e.countryCode, r));
			if (n) return `${n.countryCode}/${n.localeCode}`.toLowerCase();
			let i = e.find((e) => a(e.countryCode, r));
			if (i) return `${i.countryCode}/${i.localeCode}`.toLowerCase();
		}
		let i = e.find((e) => a(e.localeCode, t) && a(e.countryCode, t));
		if (i) return `${i.countryCode}/${i.localeCode}`.toLowerCase();
		let o = e.find((e) => a(e.countryCode, t));
		if (o) return `${o.countryCode}/${o.localeCode}`.toLowerCase();
	}
}
function H(e, t) {
	for (let n of e) if (n) {
		let [e, r] = n.split("/"), i = t?.find((t) => a(t.countryCode, e) && a(t.localeCode, r));
		if (i) return i;
	}
}
//#endregion
//#region src/features/navigation/components/country-notice.tsx
h();
function U() {
	let { t: e } = D(), [, t, n] = new URL(location.href).pathname.split("/"), { data: r } = I("/config/locales.json", R), i = o(r, "group"), s = `${t}/${n}`.toLowerCase(), [l, u] = m(null), [d, f] = O("__conti-preferred-locale", null), p = y(() => V(r), [r]), h = r?.find((e) => a(e.countryCode, t) && a(e.localeCode, n)), g = H([
		l,
		d,
		p
	], r) ?? h;
	if (!i) return null;
	let v = d !== s, b = () => {
		l ? (f(l), window.location.href = `/${l}`) : f(s);
	}, x = (e, t) => {
		u(`${e}/${t}`.toLowerCase());
	};
	return /* @__PURE__ */ _(B, {
		open: v,
		message: /* @__PURE__ */ _(E, {
			defaults: "You are currently on our <bold>{{locale}}</bold> website. To access your local information, please select your country/language.",
			values: { locale: `${h?.country} (${h?.locale})` },
			components: { bold: /* @__PURE__ */ _("strong", { className: "font-bold" }) }
		}),
		ariaLabel: "Country and language notice",
		primaryAction: /* @__PURE__ */ _(F, { children: [/* @__PURE__ */ _(j, {
			className: "w-fit md:w-[435px] bg-opacity-40",
			children: [
				g?.country,
				" (",
				g?.locale,
				")"
			]
		}), /* @__PURE__ */ _(P, {
			align: "end",
			className: "max-h-[400px] w-(--radix-dropdown-menu-trigger-width) z-50 overflow-y-auto",
			children: Object.entries(i).map(([e, t]) => /* @__PURE__ */ _(M, { children: [/* @__PURE__ */ _(N, { children: e }), t.map((e) => /* @__PURE__ */ _(A, {
				onClick: () => x(e.countryCode, e.localeCode),
				children: [
					e.country,
					" (",
					e.locale,
					")"
				]
			}, `${e.countryCode}-${e.localeCode}`))] }, e))
		})] }),
		secondaryAction: /* @__PURE__ */ _(c, {
			variant: "secondary",
			onClick: b,
			children: e("Continue")
		})
	});
}
//#endregion
//#region src/blocks/header/header.tsx
h();
var W = g(() => import("../../scripts/search-flyout-DvW38GTy.js")), G = g(() => import("../../scripts/search-sheet-BmKTbndb.js")), K = (t) => {
	let a = t.length === 5 || t.length === 4 && !t.at(-2)?.querySelector(".navigation-teaser"), o = t[0], s = a ? t[1] : null, c = a ? t[2] : t[1], l = a ? t[3] : t[2], u = Array.from(c.querySelector("ul")?.children ?? []).map((t) => (t.querySelector("table")?.deleteRow(0), {
		title: e(t.querySelector("p")),
		teaser: r(t.querySelector("tbody")),
		children: n(Array.from(t.querySelectorAll(":scope > ul > li")), !0)
	})), d = l.querySelector("div")?.className === "navigation-teaser" ? r(l.querySelector("div")) : void 0;
	return {
		meta: Array.from(o.querySelector("ul")?.children ?? []).map((e) => ({
			link: i(e.querySelector("a"), !0),
			children: Array.from(e.querySelectorAll("li")).map((e) => i(e.querySelector("a"), !0))
		})),
		menu: u,
		login: s && i(s.querySelector("a")),
		teaser: d
	};
}, q = (e) => {
	if (!e) return { indexes: [] };
	let [n, ...r] = Array.from(e.children), a = window.location.pathname.split("/").slice(1, 3).join("/");
	return {
		link: i(n.querySelector("a"), !0),
		indexes: r.map((e) => {
			let [n, r] = Array.from(e.children);
			return {
				label: t(n.textContent),
				url: t(r.textContent).replace("global/en", a)
			};
		})
	};
}, J = async ([e, t, n]) => fetch(`/${e}/${t}/${n}`).then((e) => e.text()).then((e) => {
	let t = new DOMParser().parseFromString(e, "text/html");
	return {
		...K(Array.from(t.body.children)),
		...q(t.body.querySelector(".search"))
	};
});
function Y({ items: e }) {
	return e?.length ? /* @__PURE__ */ _(f, { children: e.map((e) => /* @__PURE__ */ _("div", { children: [/* @__PURE__ */ _(S, {
		href: e.link?.href,
		iconPosition: "left",
		stretched: !0,
		children: e.link?.value
	}), e.children?.length ? /* @__PURE__ */ _("div", {
		className: "ml-6",
		children: /* @__PURE__ */ _(Y, { items: e.children })
	}) : null] }, e.link?.title ?? e.link?.value)) }) : null;
}
function X() {
	let e = window.location.pathname.split("/")[1], t = window.location.pathname.split("/")[2], n = `/${e}/${t}`, { data: r } = I([
		e,
		t,
		"nav.plain.html"
	], J), [i, a] = m(!1), { t: o } = D(), s = {
		indexes: r?.indexes ?? [],
		link: r?.link
	};
	return /* @__PURE__ */ _(f, { children: [/* @__PURE__ */ _(U, {}), /* @__PURE__ */ _(x, {
		isHeaderSticky: !0,
		logoProps: {
			aria: { "aria-label": o("STIHL Home") },
			href: n
		},
		children: [/* @__PURE__ */ _(C, { children: [
			/* @__PURE__ */ _(C.BrandArea, {}),
			/* @__PURE__ */ _(C.PrimaryArea, { children: r?.menu.map((e) => e.children?.length ? /* @__PURE__ */ _(w, { children: [/* @__PURE__ */ _(w.Anchor, { children: /* @__PURE__ */ _("button", {
				type: "button",
				children: e.title?.value
			}) }), /* @__PURE__ */ _(w.Content, { children: e.children.map((e) => /* @__PURE__ */ _(S, {
				href: e.link?.href,
				iconPosition: "left",
				stretched: !0,
				children: e.link?.value
			}, e.link?.title ?? e.link?.value)) })] }, e.title?.value) : /* @__PURE__ */ _(S, { children: e.title?.value }, e.title?.value)) }),
			/* @__PURE__ */ _(C.SecondaryArea, { children: [
				/* @__PURE__ */ _(v, {
					fallback: null,
					children: /* @__PURE__ */ _(W, { ...s })
				}),
				/* @__PURE__ */ _(v, {
					fallback: null,
					children: /* @__PURE__ */ _(L, { renderTrigger: (e, t) => /* @__PURE__ */ _("span", {
						className: "hidden lg:flex items-center gap-2 cursor-pointer",
						children: [
							e,
							" (",
							t.toUpperCase(),
							")"
						]
					}) })
				}),
				r?.login && /* @__PURE__ */ _(S, {
					href: r.login.href,
					className: "hidden lg:flex",
					children: r.login.value
				}),
				/* @__PURE__ */ _(v, {
					fallback: null,
					children: /* @__PURE__ */ _(G, { ...s })
				}),
				/* @__PURE__ */ _("button", {
					className: "flex lg:hidden items-center justify-center p-2",
					"aria-label": o("Open navigation menu"),
					"aria-expanded": i,
					onClick: () => a(!0),
					children: /* @__PURE__ */ _("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						"aria-hidden": "true",
						fill: "currentColor",
						children: /* @__PURE__ */ _("path", { d: "M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" })
					})
				})
			] })
		] }), /* @__PURE__ */ _(T, {
			isOpen: i,
			onClose: () => a(!1),
			position: "start",
			header: /* @__PURE__ */ _("strong", { children: o("Menu") }),
			children: /* @__PURE__ */ _("nav", {
				"aria-label": o("Mobile navigation"),
				children: /* @__PURE__ */ _("div", {
					className: "flex flex-col gap-2",
					children: [r?.menu.map((e) => /* @__PURE__ */ _("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ _("span", {
							className: "font-bold py-2 block",
							children: e.title?.value
						}), e.children?.length ? /* @__PURE__ */ _(Y, { items: e.children }) : null]
					}, e.title?.value)), /* @__PURE__ */ _("div", {
						className: "border-t mt-4 pt-4 flex flex-col gap-2",
						children: [
							r?.meta.map(({ link: e }) => /* @__PURE__ */ _(S, {
								href: e?.href,
								iconPosition: "left",
								stretched: !0,
								children: e?.value
							}, e?.title)),
							/* @__PURE__ */ _(v, {
								fallback: null,
								children: /* @__PURE__ */ _(L, { renderTrigger: (e, t) => /* @__PURE__ */ _("button", {
									className: "flex items-center gap-2 w-fit",
									children: [
										e,
										" (",
										t.toUpperCase(),
										")"
									]
								}) })
							}),
							r?.login && /* @__PURE__ */ _(S, {
								href: r.login.href,
								iconPosition: "left",
								stretched: !0,
								children: r.login.value
							})
						]
					})]
				})
			})
		})]
	})] });
}
async function Z(e) {
	d(e).render(/* @__PURE__ */ _(X, {}));
}
//#endregion
export { Z as default };

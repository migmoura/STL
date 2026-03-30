import { h as e, s as t } from "../../scripts/parser-YLn5-Se2.js";
import { v as n } from "../../scripts/utils-kL9Kd3j1.js";
import { C as r, Et as i, St as a, ct as o, gt as s, j as c, pt as l, rt as u } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as d } from "../../scripts/headline-1Uwx5fu-.js";
import { t as f } from "../../scripts/useTranslation-Cl_kknJx.js";
import { c as p, d as m, f as h, l as g, n as _, s as v, t as y, u as b } from "../../scripts/consent-gate-CWa6M7SO.js";
import { C as x, D as S, g as C, h as w, v as T, y as E } from "../../scripts/schemas-IQyODXna.js";
import { o as D } from "../../scripts/dist-DkU8_-4E.js";
import "../../scripts/es2015-Lwokp0LN.js";
import "../../scripts/checkbox-BhLy_CYP.js";
import { t as O } from "../../scripts/index-DQhmSjJh.js";
import { a as k, i as A, n as j, r as M, t as N } from "../../scripts/select-BRi3UsYv.js";
//#region src/features/maps/components/locator-map.tsx
l();
function P({ setLocation: e, locations: t, currentLocation: n, currentCoordinates: r, mapID: a }) {
	let o = m(), c = s(null), { width: l = 0 } = D({
		ref: c,
		box: "content-box"
	});
	return i(() => {
		!o || l === 0 || r && (o.setCenter({
			lat: r.lat,
			lng: r.lng - (l >= 1024 ? 25 : 0)
		}), o.setZoom(4.5));
	}, [
		o,
		t,
		l,
		r
	]), /* @__PURE__ */ u("div", {
		ref: c,
		className: "w-full",
		children: /* @__PURE__ */ u(b, {
			renderingType: typeof window < "u" && document.createElement("canvas").getContext("webgl2") ? "VECTOR" : "RASTER",
			mapId: a,
			mapTypeId: "roadmap",
			className: "w-full h-[682px] md:h-[800px]",
			gestureHandling: "cooperative",
			disableDefaultUI: !0,
			defaultCenter: r,
			defaultZoom: 6,
			children: t.map((t) => /* @__PURE__ */ u(g, {
				title: `Country marker for ${t.label}`,
				onClick: () => e(t.label),
				position: {
					lat: Number(t.lat),
					lng: Number(t.lng)
				},
				children: /* @__PURE__ */ u(v, { state: t.label === n ? "open" : "closed" })
			}, t.value))
		})
	});
}
//#endregion
//#region src/features/maps/blocks/location-map.tsx
l();
function F({ description: e, locationsUrl: t, mapID: r, ...o }) {
	let s = a(), l = h("geocoding"), { t: p } = f(), { data: m = [] } = O([t], _, {
		suspense: !0,
		keepPreviousData: !0
	}), g = new URL(location.href).pathname.split("/")[1], v = m.find((e) => e.value === g) ?? m[0], y = S({ defaultValues: {
		location: v.label,
		coordinates: {
			lat: Number(m[0].lat),
			lng: Number(m[0].lng)
		}
	} }), { watch: b, setValue: D, handleSubmit: F } = y, I = async (e) => {
		if (l) try {
			let t = (await new l.Geocoder().geocode({ address: e })).results[0].geometry.location;
			D("coordinates", {
				lat: t.lat(),
				lng: t.lng()
			});
		} catch {
			return null;
		}
	}, L = async (e) => {
		await I(e.location);
	};
	function R(e) {
		D("location", e), F(L)();
	}
	return i(() => {
		F(L)();
	}, [v, l]), /* @__PURE__ */ u("div", {
		className: "relative",
		children: [/* @__PURE__ */ u("div", {
			className: "fluid lg:absolute top-0 left-0 right-0 bottom-0",
			children: /* @__PURE__ */ u("div", {
				className: "bg-white lg:h-[576px] lg:absolute lg:shadow-lg lg:w-1/2 xl:w-2/5 lg:top-1/2 lg:-translate-y-1/2 lg:z-10 px-6 py-14 lg:p-20",
				children: /* @__PURE__ */ u("div", {
					className: "relative size-full",
					children: [
						/* @__PURE__ */ u(d, {
							...o,
							block: !1,
							className: "mb-8"
						}),
						/* @__PURE__ */ u("p", {
							className: "text-gray-1 lg:mb-8",
							children: e
						}),
						/* @__PURE__ */ u(w, {
							...y,
							children: /* @__PURE__ */ u("form", {
								className: "absolute w-full min-w-[316px] md:w-1/3 lg:w-full -bottom-36 lg:bottom-0 lg:flex flex-col gap-10 z-10",
								onSubmit: F(L),
								children: /* @__PURE__ */ u(T, {
									control: y.control,
									name: "location",
									render: ({ field: e }) => /* @__PURE__ */ u(E, { children: /* @__PURE__ */ u(N, {
										value: e.value,
										onValueChange: R,
										children: [/* @__PURE__ */ u(C, { children: /* @__PURE__ */ u(A, {
											id: s,
											className: "w-full",
											action: /* @__PURE__ */ u(n, {
												"aria-label": p("Open location page"),
												size: "icon",
												type: "submit",
												asChild: !0,
												children: /* @__PURE__ */ u("a", {
													href: m.find((t) => t.label === e.value)?.url || "#",
													children: /* @__PURE__ */ u(c, {})
												})
											}),
											children: [/* @__PURE__ */ u("span", {
												className: "peer flex",
												"data-placeholder": !e.value,
												children: /* @__PURE__ */ u(k, {})
											}), /* @__PURE__ */ u(x, {
												htmlFor: s,
												children: p("Choose a location")
											})]
										}) }), /* @__PURE__ */ u(j, { children: m.map((e) => /* @__PURE__ */ u(M, {
											value: e.label,
											children: e.label
										}, e.value)) })]
									}) })
								}, "location")
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ u(P, {
			setLocation: R,
			locations: m,
			currentLocation: b("location"),
			currentCoordinates: b("coordinates"),
			mapID: r
		})]
	});
}
function I({ apiKey: e, ...t }) {
	return e ? /* @__PURE__ */ u(y, {
		vendorId: "s1104",
		vendorName: "Google Maps",
		children: /* @__PURE__ */ u(p, {
			libraries: ["geocoding"],
			apiKey: e,
			children: /* @__PURE__ */ u(o, {
				fallback: null,
				children: /* @__PURE__ */ u(F, { ...t })
			})
		})
	}) : null;
}
//#endregion
//#region src/blocks/location-map/location-map.tsx
function L(n) {
	let [r, i, a, o, s, c] = Array.from(n.children);
	return {
		...t(r.querySelector("h1, h2, h3, h4, h5, h6"), i.textContent, void 0),
		description: e(a.textContent),
		apiKey: e(o.textContent),
		mapID: e(s.textContent),
		locationsUrl: e(c.textContent)
	};
}
function R(e) {
	let t = L(e);
	r(e).render(/* @__PURE__ */ u(I, { ...t }));
}
//#endregion
export { R as default };

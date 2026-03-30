import { h as e, s as t } from "../../scripts/parser-YLn5-Se2.js";
import { S as n, _ as r, i, p as a, r as o, t as s, v as c, y as l } from "../../scripts/utils-kL9Kd3j1.js";
import { $ as u, A as d, C as f, Dt as p, E as m, Et as h, I as g, O as _, Ot as v, P as y, R as ee, Tt as b, V as x, Z as S, at as C, bt as w, ft as te, gt as T, j as E, mt as D, ot as O, pt as k, rt as A, w as j, xt as M, yt as ne, z as N } from "../../scripts/react-DLNUXPF9.js";
import "../../scripts/heading-CpqtBlxR.js";
import { t as re } from "../../scripts/headline-1Uwx5fu-.js";
import { t as P } from "../../scripts/dist-CeBxUC6o.js";
import { t as F } from "../../scripts/tag-NlcpsyaD.js";
import { t as I } from "../../scripts/useTranslation-Cl_kknJx.js";
import { a as ie, c as ae, d as oe, f as L, i as se, l as ce, o as le, r as ue, s as de, t as fe, u as pe } from "../../scripts/consent-gate-CWa6M7SO.js";
import { D as me, b as he, f as ge, g as R, h as _e, m as ve, p as ye, v as be, w as xe, x as Se, y as z } from "../../scripts/schemas-IQyODXna.js";
import { n as B } from "../../scripts/dist-DlxyKVcb.js";
import { n as Ce, t as we } from "../../scripts/resolvers-DwnWJLj9.js";
import { s as Te } from "../../scripts/dialog-s3Hh3x-u.js";
import { o as Ee } from "../../scripts/dist-DkU8_-4E.js";
import { t as De } from "../../scripts/skeleton-B-n3kDr5.js";
import "../../scripts/es2015-Lwokp0LN.js";
import { c as Oe, d as ke, l as Ae, o as je, s as V, u as Me } from "../../scripts/sheet-DHtRCcio.js";
import { l as Ne, n as Pe, r as Fe, s as Ie, t as Le } from "../../scripts/dropdown-menu-Cc3lBEdl.js";
import { t as Re } from "../../scripts/input-B3cTQm8l.js";
import { t as ze } from "../../scripts/dropdown-filters-DdBnDeke.js";
import "../../scripts/checkbox-BhLy_CYP.js";
import { t as Be } from "../../scripts/index-DQhmSjJh.js";
//#region ../../node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.71.2_react@19.2.4_/node_modules/@hookform/resolvers/zod/dist/zod.mjs
function Ve(e, t) {
	try {
		var n = e();
	} catch (e) {
		return t(e);
	}
	return n && n.then ? n.then(void 0, t) : n;
}
function He(e, t) {
	for (var n = {}; e.length;) {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) if ("unionErrors" in r) {
			var s = r.unionErrors[0].errors[0];
			n[o] = {
				message: s.message,
				type: s.code
			};
		} else n[o] = {
			message: a,
			type: i
		};
		if ("unionErrors" in r && r.unionErrors.forEach(function(t) {
			return t.errors.forEach(function(t) {
				return e.push(t);
			});
		}), t) {
			var c = n[o].types, l = c && c[r.code];
			n[o] = xe(o, t, n, i, l ? [].concat(l, r.message) : r.message);
		}
		e.shift();
	}
	return n;
}
function Ue(e, t) {
	for (var n = {}; e.length;) {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) if (r.code === "invalid_union" && r.errors.length > 0) {
			var s = r.errors[0][0];
			n[o] = {
				message: s.message,
				type: s.code
			};
		} else n[o] = {
			message: a,
			type: i
		};
		if (r.code === "invalid_union" && r.errors.forEach(function(t) {
			return t.forEach(function(t) {
				return e.push(t);
			});
		}), t) {
			var c = n[o].types, l = c && c[r.code];
			n[o] = xe(o, t, n, i, l ? [].concat(l, r.message) : r.message);
		}
		e.shift();
	}
	return n;
}
function We(e, t, n) {
	if (n === void 0 && (n = {}), function(e) {
		return "_def" in e && typeof e._def == "object" && "typeName" in e._def;
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Ve(function() {
				return Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(e) {
					return a.shouldUseNativeValidation && we({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return Array.isArray(e?.issues);
				}(e)) return {
					values: {},
					errors: Ce(He(e.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	if (function(e) {
		return "_zod" in e && typeof e._zod == "object";
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Ve(function() {
				return Promise.resolve((n.mode === "sync" ? ge : ye)(e, r, t)).then(function(e) {
					return a.shouldUseNativeValidation && we({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return e instanceof ve;
				}(e)) return {
					values: {},
					errors: Ce(Ue(e.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	throw Error("Invalid input: not a Zod schema");
}
//#endregion
//#region src/features/maps/utils.ts
k();
function Ge(e, t, n) {
	if (!e) return;
	let r = e.getProjection();
	if (!r) return;
	let i = e.getDiv().offsetWidth * -.25, a = r.fromLatLngToPoint(new google.maps.LatLng(t, n)), o = 2 ** (e.getZoom() ?? 0), s = new google.maps.Point(i / o, 0);
	if (!a) return;
	let c = new google.maps.Point(a.x + s.x, a.y), l = r.fromPointToLatLng(c);
	l && e.panTo(l);
}
//#endregion
//#region src/features/maps/components/distributor-map.tsx
function Ke({ dealer: e }) {
	let t = oe(), [n, r] = Te(le);
	return /* @__PURE__ */ A(ce, {
		title: `Dealer marker for ${e.Name}`,
		onClick: () => {
			Ge(t, parseFloat(e.BillingLatitude), parseFloat(e.BillingLongitude)), r((t) => e.Id === t ? null : e.Id);
		},
		position: {
			lat: parseFloat(e.BillingLatitude),
			lng: parseFloat(e.BillingLongitude)
		},
		children: /* @__PURE__ */ A(de, { state: e.Id === n ? "open" : "closed" })
	}, e.Id);
}
function qe({ dealers: e, defaultCoordinates: t, currentCoordinates: n, mapID: r }) {
	let i = oe(), a = T(null), { width: o = 0 } = Ee({
		ref: a,
		box: "content-box"
	});
	return h(() => {
		if (!(!i || o === 0)) if (e.length > 0) {
			let t = new google.maps.LatLngBounds();
			e.forEach((e) => {
				let n = new google.maps.LatLng(parseFloat(e.BillingLatitude), parseFloat(e.BillingLongitude));
				t.extend(n);
			}), i.fitBounds(t, {
				top: 80,
				bottom: 40,
				right: 40,
				left: o > 1024 ? o * .5 + 40 : 40
			});
		} else n ? (i.setCenter(n), i.setZoom(6)) : (i.setCenter(t), i.setZoom(6));
	}, [
		i,
		e,
		o,
		n,
		t
	]), /* @__PURE__ */ A("div", {
		ref: a,
		className: "w-full",
		children: /* @__PURE__ */ A(pe, {
			renderingType: typeof window < "u" && document.createElement("canvas").getContext("webgl2") ? "VECTOR" : "RASTER",
			mapId: r,
			mapTypeId: "roadmap",
			className: "w-full h-[682px] md:h-[800px]",
			gestureHandling: "cooperative",
			disableDefaultUI: !0,
			defaultCenter: t,
			defaultZoom: 6,
			children: e.map((e) => /* @__PURE__ */ A(Ke, { dealer: e }, e.Id))
		})
	});
}
//#endregion
//#region src/components/ui/dealer.tsx
function Je({ title: e, description: t, hint: n, tags: r, isLoading: i }) {
	return /* @__PURE__ */ A("div", {
		className: "flex flex-col h-full",
		children: /* @__PURE__ */ A("div", {
			className: "flex flex-col p-6 space-y-4",
			children: [
				/* @__PURE__ */ A("div", {
					className: "flex items-center justify-between",
					children: [
						e ? /* @__PURE__ */ A("p", {
							className: "text-h5 flex items-center gap-2",
							children: [
								e,
								" ",
								/* @__PURE__ */ A(S, { className: "size-10" })
							]
						}) : null,
						i ? /* @__PURE__ */ A(De, { className: "h-6 w-24" }) : null,
						n && !i ? /* @__PURE__ */ A("p", {
							className: "text-sm leading-label ml-auto shrink-0",
							children: n
						}) : null
					]
				}),
				t ? /* @__PURE__ */ A("p", {
					className: "text-sm text-gray-1",
					children: t
				}) : null,
				/* @__PURE__ */ A("div", {
					className: "flex gap-2 overflow-x-auto",
					children: r?.length && r?.length > 0 ? r.map((e) => /* @__PURE__ */ A(F, {
						variant: "secondary",
						children: e
					}, e)) : null
				})
			]
		})
	});
}
function Ye({ link: e, email: t, phone: n, title: i, address: a, hint: o, tags: s, isLoading: c }) {
	let { t: l } = I();
	return /* @__PURE__ */ A("div", {
		className: "flex flex-col size-full gap-6",
		children: [
			i ? /* @__PURE__ */ A("h5", {
				className: "text-h5 flex items-center gap-2",
				children: [
					i,
					" ",
					/* @__PURE__ */ A(S, { className: "size-10" })
				]
			}) : null,
			/* @__PURE__ */ A("div", {
				className: "grid grid-cols-2 gap-12",
				children: [/* @__PURE__ */ A("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ A("span", {
							className: "flex gap-4 items-center",
							children: [/* @__PURE__ */ A(x, { className: "size-5 shrink-0" }), a]
						}),
						n ? /* @__PURE__ */ A("span", {
							className: "flex gap-2 items-center",
							children: [/* @__PURE__ */ A(d, { className: "size-5 shrink-0" }), /* @__PURE__ */ A(r, {
								...n,
								children: n.value
							})]
						}) : null,
						t ? /* @__PURE__ */ A("span", {
							className: "flex gap-2 items-center",
							children: [/* @__PURE__ */ A(g, { className: "size-5 shrink-0" }), /* @__PURE__ */ A(r, {
								...t,
								children: t.value
							})]
						}) : null
					]
				}), /* @__PURE__ */ A("div", {
					className: "space-y-6",
					children: [c ? /* @__PURE__ */ A(De, { className: "h-6 w-24" }) : null, o && !c ? /* @__PURE__ */ A("span", {
						className: "flex gap-2 items-center",
						children: [/* @__PURE__ */ A(y, {}), o]
					}) : null]
				})]
			}),
			e ? /* @__PURE__ */ A(r, {
				variant: "primary",
				...e,
				children: e.value
			}) : null,
			s?.length && s?.length > 0 ? /* @__PURE__ */ A("div", {
				className: "mt-auto flex flex-col gap-6",
				children: [/* @__PURE__ */ A("h5", {
					className: "text-h5 flex items-center gap-2",
					children: l("Products")
				}), /* @__PURE__ */ A("div", {
					className: "flex gap-2",
					children: s.map((e) => /* @__PURE__ */ A(F, {
						variant: "secondary",
						children: e
					}, e))
				})]
			}) : null
		]
	});
}
//#endregion
//#region src/components/ui/drawer.tsx
k();
var Xe = Me, Ze = ke, Qe = l("absolute transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
		right: "inset-y-0 right-0 h-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
	} },
	defaultVariants: { side: "right" }
}), $e = O(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { t: a } = I();
	return /* @__PURE__ */ A(V, {
		ref: i,
		className: o(Qe({ side: e }), t),
		...r,
		children: [/* @__PURE__ */ A(c, {
			size: "icon",
			variant: "tertiary",
			asChild: !0,
			children: /* @__PURE__ */ A(je, {
				className: "absolute top-2 right-2",
				children: [/* @__PURE__ */ A(j, { className: "h-4 w-4" }), /* @__PURE__ */ A("span", {
					className: "sr-only",
					children: a("Close")
				})]
			})
		}), n]
	});
});
$e.displayName = V.displayName;
//#endregion
//#region src/features/maps/components/dealers.tsx
function et({ dealers: e, location: t, isLoading: n }) {
	let r = L("geometry"), i = oe(), { t: a } = I();
	return e.length > 0 ? /* @__PURE__ */ A("ul", {
		className: "h-full overflow-y-auto md:p-6",
		children: e.map((e) => /* @__PURE__ */ A(tt, {
			map: i,
			isLoading: n,
			geometry: r,
			dealer: e,
			location: t
		}, e.Id))
	}) : /* @__PURE__ */ A("div", {
		className: "h-full flex flex-col gap-10 p-6 md:p-20",
		children: [
			/* @__PURE__ */ A(m, { className: "size-20" }),
			/* @__PURE__ */ A("p", {
				className: "text-h3",
				children: a("No dealers found in this area.")
			}),
			/* @__PURE__ */ A("p", {
				className: "text-gray-1",
				children: a("Please update your location and look for in another area.")
			})
		]
	});
}
function tt({ dealer: e, geometry: t, map: n, location: r, isLoading: i }) {
	let [a, o] = Te(le), c = `${((t?.spherical.computeDistanceBetween({
		lat: parseFloat(e.BillingLatitude),
		lng: parseFloat(e.BillingLongitude)
	}, r) ?? 0) / 1e3)?.toFixed(1) ?? "0"} km away`, l = e.Website ? {
		href: s(e.Website),
		title: e.Name,
		value: "Dealer Website"
	} : void 0, u = e.Phone ? {
		href: `tel:${e.Phone}`,
		title: e.Phone,
		value: e.Phone
	} : void 0, d = e.Email ? {
		href: `mailto:${e.Email}`,
		title: e.Email,
		value: e.Email
	} : void 0;
	return /* @__PURE__ */ A(Xe, {
		open: a === e.Id,
		onOpenChange: (t) => {
			Ge(n, parseFloat(e.BillingLatitude), parseFloat(e.BillingLongitude)), o(t ? e.Id : null);
		},
		children: [/* @__PURE__ */ A(Ze, {
			asChild: !0,
			children: /* @__PURE__ */ A("li", {
				className: "hover:bg-gray-4 active:bg-gray-35 focus-visible:bg-gray-4",
				children: /* @__PURE__ */ A(Je, {
					isLoading: i,
					title: e.Name,
					description: `${e.BillingStreet}, ${e.BillingCity}, ${e.BillingState} ${e.BillingPostalCode}`,
					hint: c,
					link: l,
					phone: u,
					email: d
				})
			}, e.Id)
		}), /* @__PURE__ */ A($e, {
			onPointerDownOutside: (e) => {
				e.target?.dataset.map === "true" && e.preventDefault();
			},
			className: "w-full h-full bg-white px-6 py-20 md:px-20",
			children: /* @__PURE__ */ A(Ye, {
				isLoading: i,
				title: e.Name,
				address: `${e.BillingStreet}, ${e.BillingCity}, ${e.BillingState} ${e.BillingPostalCode}`,
				hint: c,
				link: l,
				phone: u,
				email: d,
				tags: []
			})
		})]
	});
}
//#endregion
//#region src/features/maps/hooks/use-autocomplete-suggestions.ts
k();
function nt(e, t = {}) {
	let n = L("places"), r = T(null), [i, a] = M([]), [o, s] = M(!1);
	return h(() => {
		if (!n) return;
		let { AutocompleteSessionToken: o, AutocompleteSuggestion: c } = n;
		r.current ||= new o();
		let l = {
			...t,
			input: e,
			sessionToken: r.current
		};
		if (e === "") {
			i.length > 0 && a([]);
			return;
		}
		s(!0), c.fetchAutocompleteSuggestions(l).then((e) => {
			a(e.suggestions), s(!1);
		});
	}, [n, e]), {
		suggestions: i,
		isLoading: o,
		resetSession: () => {
			r.current = null, a([]);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@19.2.14_react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var rt = 1, it = .9, at = .8, ot = .17, H = .1, U = .999, st = .9999, ct = .99, lt = /[\\\/_+.#"@\[\(\{&]/, ut = /[\\\/_+.#"@\[\(\{&]/g, dt = /[\s-]/, ft = /[\s-]/g;
function W(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? rt : ct;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = W(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= rt : lt.test(e.charAt(l - 1)) ? (d *= at, p = e.slice(i, l - 1).match(ut), p && i > 0 && (d *= U ** +p.length)) : dt.test(e.charAt(l - 1)) ? (d *= it, m = e.slice(i, l - 1).match(ft), m && i > 0 && (d *= U ** +m.length)) : (d *= ot, i > 0 && (d *= U ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= st)), (d < H && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = W(e, t, n, r, l + 1, a + 2, o), f * H > d && (d = f * H)), d > u && (u = d), l = n.indexOf(c, l + 1);
	return o[s] = u, u;
}
function pt(e) {
	return e.toLowerCase().replace(ft, " ");
}
function mt(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, W(e, t, pt(e), pt(t), 0, 0, {});
}
//#endregion
//#region ../../node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@19.2.14_react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/index.mjs
k();
var G = "[cmdk-group=\"\"]", K = "[cmdk-group-items=\"\"]", ht = "[cmdk-group-heading=\"\"]", gt = "[cmdk-item=\"\"]", _t = `${gt}:not([aria-disabled="true"])`, vt = "cmdk-item-select", q = "data-value", yt = (e, t, n) => mt(e, t, n), bt = p(void 0), J = () => b(bt), xt = p(void 0), St = () => b(xt), Ct = p(void 0), wt = O((e, t) => {
	let n = Z(() => ({
		search: "",
		value: e.value ?? e.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), r = Z(() => /* @__PURE__ */ new Set()), i = Z(() => /* @__PURE__ */ new Map()), a = Z(() => /* @__PURE__ */ new Map()), o = Z(() => /* @__PURE__ */ new Set()), s = Ft(e), { label: c, children: l, value: u, onValueChange: d, filter: f, shouldFilter: p, loop: m, disablePointerSelection: h = !1, vimBindings: g = !0, ..._ } = e, y = P(), ee = P(), b = P(), x = T(null), S = Lt();
	X(() => {
		if (u !== void 0) {
			let e = u.trim();
			n.current.value = e, C.emit();
		}
	}, [u]), X(() => {
		S(6, k);
	}, []);
	let C = ne(() => ({
		subscribe: (e) => (o.current.add(e), () => o.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, t, r) => {
			var i, a, o;
			if (!Object.is(n.current[e], t)) {
				if (n.current[e] = t, e === "search") O(), E(), S(1, D);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(b);
						e ? e.focus() : (i = document.getElementById(y)) == null || i.focus();
					}
					if (S(7, () => {
						n.current.selectedItemId = A()?.id, C.emit();
					}), r || S(5, k), s.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = s.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				C.emit();
			}
		},
		emit: () => {
			o.current.forEach((e) => e());
		}
	}), []), w = ne(() => ({
		value: (e, t, r) => {
			t !== a.current.get(e)?.value && (a.current.set(e, {
				value: t,
				keywords: r
			}), n.current.filtered.items.set(e, te(t, r)), S(2, () => {
				E(), C.emit();
			}));
		},
		item: (e, t) => (r.current.add(e), t && (i.current.has(t) ? i.current.get(t).add(e) : i.current.set(t, new Set([e]))), S(3, () => {
			O(), E(), n.current.value || D(), C.emit();
		}), () => {
			a.current.delete(e), r.current.delete(e), n.current.filtered.items.delete(e);
			let t = A();
			S(4, () => {
				O(), t?.getAttribute("id") === e && D(), C.emit();
			});
		}),
		group: (e) => (i.current.has(e) || i.current.set(e, /* @__PURE__ */ new Set()), () => {
			a.current.delete(e), i.current.delete(e);
		}),
		filter: () => s.current.shouldFilter,
		label: c || e["aria-label"],
		getDisablePointerSelection: () => s.current.disablePointerSelection,
		listId: y,
		inputId: b,
		labelId: ee,
		listInnerRef: x
	}), []);
	function te(e, t) {
		let r = s.current?.filter ?? yt;
		return e ? r(e, n.current.search, t) : 0;
	}
	function E() {
		if (!n.current.search || s.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, t = [];
		n.current.filtered.groups.forEach((n) => {
			let r = i.current.get(n), a = 0;
			r.forEach((t) => {
				let n = e.get(t);
				a = Math.max(n, a);
			}), t.push([n, a]);
		});
		let r = x.current;
		j().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(K);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${K} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${K} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = x.current?.querySelector(`${G}[${q}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function D() {
		let e = j().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(q);
		C.setState("value", e || void 0);
	}
	function O() {
		if (!n.current.search || s.current.shouldFilter === !1) {
			n.current.filtered.count = r.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of r.current) {
			let r = te(a.current.get(t)?.value ?? "", a.current.get(t)?.keywords ?? []);
			n.current.filtered.items.set(t, r), r > 0 && e++;
		}
		for (let [e, t] of i.current) for (let r of t) if (n.current.filtered.items.get(r) > 0) {
			n.current.filtered.groups.add(e);
			break;
		}
		n.current.filtered.count = e;
	}
	function k() {
		var e;
		let t = A();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(G)?.querySelector(ht)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function A() {
		return x.current?.querySelector(`${gt}[aria-selected="true"]`);
	}
	function j() {
		return Array.from(x.current?.querySelectorAll(_t) || []);
	}
	function M(e) {
		let t = j()[e];
		t && C.setState("value", t.getAttribute(q));
	}
	function N(e) {
		var t;
		let n = A(), r = j(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = s.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && C.setState("value", a.getAttribute(q));
	}
	function re(e) {
		let t = A()?.closest(G), n;
		for (; t && !n;) t = e > 0 ? Nt(t, G) : Pt(t, G), n = t?.querySelector(_t);
		n ? C.setState("value", n.getAttribute(q)) : N(e);
	}
	let F = () => M(j().length - 1), I = (e) => {
		e.preventDefault(), e.metaKey ? F() : e.altKey ? re(1) : N(1);
	}, ie = (e) => {
		e.preventDefault(), e.metaKey ? M(0) : e.altKey ? re(-1) : N(-1);
	};
	return v(B.div, {
		ref: t,
		tabIndex: -1,
		..._,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = _.onKeyDown) == null || t.call(_, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					g && e.ctrlKey && I(e);
					break;
				case "ArrowDown":
					I(e);
					break;
				case "p":
				case "k":
					g && e.ctrlKey && ie(e);
					break;
				case "ArrowUp":
					ie(e);
					break;
				case "Home":
					e.preventDefault(), M(0);
					break;
				case "End":
					e.preventDefault(), F();
					break;
				case "Enter": {
					e.preventDefault();
					let t = A();
					if (t) {
						let e = new Event(vt);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, v("label", {
		"cmdk-label": "",
		htmlFor: w.inputId,
		id: w.labelId,
		style: zt
	}, c), $(e, (e) => v(xt.Provider, { value: C }, v(bt.Provider, { value: w }, e))));
}), Tt = O((e, t) => {
	let r = P(), i = T(null), a = b(Ct), o = J(), s = Ft(e), c = s.current?.forceMount ?? a?.forceMount;
	X(() => {
		if (!c) return o.item(r, a?.id);
	}, [c]);
	let l = It(r, i, [
		e.value,
		e.children,
		i
	], e.keywords), u = St(), d = Q((e) => e.value && e.value === l.current), f = Q((e) => c || o.filter() === !1 ? !0 : e.search ? e.filtered.items.get(r) > 0 : !0);
	h(() => {
		let t = i.current;
		if (!(!t || e.disabled)) return t.addEventListener(vt, p), () => t.removeEventListener(vt, p);
	}, [
		f,
		e.onSelect,
		e.disabled
	]);
	function p() {
		var e, t;
		m(), (t = (e = s.current).onSelect) == null || t.call(e, l.current);
	}
	function m() {
		u.setState("value", l.current, !0);
	}
	if (!f) return null;
	let { disabled: g, value: _, onSelect: y, forceMount: ee, keywords: x, ...S } = e;
	return v(B.div, {
		ref: n(i, t),
		...S,
		id: r,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!g,
		"aria-selected": !!d,
		"data-disabled": !!g,
		"data-selected": !!d,
		onPointerMove: g || o.getDisablePointerSelection() ? void 0 : m,
		onClick: g ? void 0 : p
	}, e.children);
}), Et = O((e, t) => {
	let { heading: r, children: i, forceMount: a, ...o } = e, s = P(), c = T(null), l = T(null), u = P(), d = J(), f = Q((e) => a || d.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(s) : !0);
	X(() => d.group(s), []), It(s, c, [
		e.value,
		e.heading,
		l
	]);
	let p = ne(() => ({
		id: s,
		forceMount: a
	}), [a]);
	return v(B.div, {
		ref: n(c, t),
		...o,
		"cmdk-group": "",
		role: "presentation",
		hidden: f ? void 0 : !0
	}, r && v("div", {
		ref: l,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: u
	}, r), $(e, (e) => v("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": r ? u : void 0
	}, v(Ct.Provider, { value: p }, e))));
}), Dt = O((e, t) => {
	let { alwaysRender: r, ...i } = e, a = T(null), o = Q((e) => !e.search);
	return !r && !o ? null : v(B.div, {
		ref: n(a, t),
		...i,
		"cmdk-separator": "",
		role: "separator"
	});
}), Ot = O((e, t) => {
	let { onValueChange: n, ...r } = e, i = e.value != null, a = St(), o = Q((e) => e.search), s = Q((e) => e.selectedItemId), c = J();
	return h(() => {
		e.value != null && a.setState("search", e.value);
	}, [e.value]), v(B.input, {
		ref: t,
		...r,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": c.listId,
		"aria-labelledby": c.labelId,
		"aria-activedescendant": s,
		id: c.inputId,
		type: "text",
		value: i ? e.value : o,
		onChange: (e) => {
			i || a.setState("search", e.target.value), n?.(e.target.value);
		}
	});
}), kt = O((e, t) => {
	let { children: r, label: i = "Suggestions", ...a } = e, o = T(null), s = T(null), c = Q((e) => e.selectedItemId), l = J();
	return h(() => {
		if (s.current && o.current) {
			let e = s.current, t = o.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), v(B.div, {
		ref: n(o, t),
		...a,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": c,
		"aria-label": i,
		id: l.listId
	}, $(e, (e) => v("div", {
		ref: n(s, l.listInnerRef),
		"cmdk-list-sizer": ""
	}, e)));
}), At = O((e, t) => {
	let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e;
	return v(Me, {
		open: n,
		onOpenChange: r
	}, v(Ae, { container: o }, v(Oe, {
		"cmdk-overlay": "",
		className: i
	}), v(V, {
		"aria-label": e.label,
		"cmdk-dialog": "",
		className: a
	}, v(wt, {
		ref: t,
		...s
	}))));
}), jt = O((e, t) => Q((e) => e.filtered.count === 0) ? v(B.div, {
	ref: t,
	...e,
	"cmdk-empty": "",
	role: "presentation"
}) : null), Mt = O((e, t) => {
	let { progress: n, children: r, label: i = "Loading...", ...a } = e;
	return v(B.div, {
		ref: t,
		...a,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i
	}, $(e, (e) => v("div", { "aria-hidden": !0 }, e)));
}), Y = Object.assign(wt, {
	List: kt,
	Item: Tt,
	Input: Ot,
	Group: Et,
	Separator: Dt,
	Dialog: At,
	Empty: jt,
	Loading: Mt
});
function Nt(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function Pt(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function Ft(e) {
	let t = T(e);
	return X(() => {
		t.current = e;
	}), t;
}
var X = typeof window > "u" ? h : w;
function Z(e) {
	let t = T();
	return t.current === void 0 && (t.current = e()), t;
}
function Q(e) {
	let t = St(), n = () => e(t.snapshot());
	return C(t.subscribe, n, n);
}
function It(e, t, n, r = []) {
	let i = T(), a = J();
	return X(() => {
		var o;
		let s = (() => {
			for (let e of n) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : i.current;
			}
		})(), c = r.map((e) => e.trim());
		a.value(e, s, c), (o = t.current) == null || o.setAttribute(q, s), i.current = s;
	}), i;
}
var Lt = () => {
	let [e, t] = M(), n = Z(() => /* @__PURE__ */ new Map());
	return X(() => {
		n.current.forEach((e) => e()), n.current = /* @__PURE__ */ new Map();
	}, [e]), (e, r) => {
		n.current.set(e, r), t({});
	};
};
function Rt(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function $({ asChild: e, children: t }, n) {
	return e && te(t) ? D(Rt(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var zt = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
};
//#endregion
//#region src/components/ui/command.tsx
k();
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ A(Y, {
		"data-slot": "command",
		className: o(e),
		...t
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ A(Y.List, {
		"data-slot": "command-list",
		className: o("scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function Ht({ ...e }) {
	return /* @__PURE__ */ A(Y.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ A(Y.Item, {
		"data-slot": "command-item",
		className: o(e),
		...t
	});
}
//#endregion
//#region src/features/maps/components/filter.tsx
k();
function Wt({ form: e, units: t, locatorType: n = "gad" }) {
	let [r, a] = M(!1), s = L("geocoding"), { suggestions: l, resetSession: d } = nt(e.watch("location")), { t: f } = I(), { setValue: p, watch: m } = e, h = se[n], g = i(m().filters).filter(([, e]) => e).map(([e]) => e), v = () => {
		navigator.geolocation.getCurrentPosition(async (e) => {
			if (p("geolocation", !0), s) try {
				let t = await new s.Geocoder().geocode({ location: {
					lat: e.coords.latitude,
					lng: e.coords.longitude
				} });
				p("coordinates", {
					lat: e.coords.latitude,
					lng: e.coords.longitude
				}), p("location", t?.results?.[0]?.address_components?.[4].long_name);
			} catch {
				return null;
			}
		});
	};
	function y(e) {
		return (t) => {
			let n = t.reduce((e, t) => (e[t] = !0, e), {});
			e.onChange(n);
		};
	}
	return /* @__PURE__ */ A("div", {
		className: "w-full flex flex-col gap-18",
		children: [/* @__PURE__ */ A("div", {
			className: "flex flex-col md:flex-row md:items-center gap-10",
			children: [/* @__PURE__ */ A(be, {
				control: e.control,
				name: "location",
				render: ({ field: e }) => /* @__PURE__ */ A(z, {
					className: "w-full md:w-1/2 xl:w-1/3",
					children: [/* @__PURE__ */ A(R, { children: /* @__PURE__ */ A(Bt, {
						className: "relative",
						children: [/* @__PURE__ */ A(Re, {
							placeholder: " ",
							"aria-labelledby": "location-label",
							...e,
							onFocus: () => {
								a(!0);
							},
							disabled: m("geolocation"),
							className: "gap-2",
							children: [
								/* @__PURE__ */ A(he, {
									id: "location-label",
									children: "Location"
								}),
								m("geolocation") ? /* @__PURE__ */ A(N, {
									className: "text-black",
									onClick: () => p("geolocation", !1)
								}) : /* @__PURE__ */ A(ee, { onClick: v }),
								/* @__PURE__ */ A(c, {
									size: "icon",
									type: "submit",
									children: [/* @__PURE__ */ A(E, {}), /* @__PURE__ */ A("span", {
										className: "sr-only",
										children: f("Search in location")
									})]
								})
							]
						}), m("geolocation") ? null : /* @__PURE__ */ A(Vt, {
							className: o("absolute top-[calc(100%+2px)] left-0 py-2 w-full shadow-lg bg-white z-10", { hidden: !r || e.value.length === 0 }),
							children: [/* @__PURE__ */ A(Ht, { children: "No results found." }), l.map((e) => /* @__PURE__ */ A(Ut, {
								className: Ne(),
								onSelect: () => {
									p("location", e.placePrediction?.text.text || ""), a(!1), d();
								},
								children: e.placePrediction?.text.text
							}))]
						})]
					}) }), /* @__PURE__ */ A(Se, {})]
				})
			}), /* @__PURE__ */ A(be, {
				control: e.control,
				name: "radius",
				render: ({ field: e }) => /* @__PURE__ */ A(z, { children: /* @__PURE__ */ A(R, { children: /* @__PURE__ */ A(Le, { children: [/* @__PURE__ */ A("div", {
					className: "flex items-center gap-2 font-semibold shrink-0",
					children: /* @__PURE__ */ A(Ie, {
						className: "flex items-center gap-2 shrink-0 outline-none pb-1 hover:shadow-inherit hover:shadow-[inset_0_-1px_0_0]",
						children: [
							/* @__PURE__ */ A(_, { className: "size-5" }),
							m("radius"),
							" ",
							t,
							" Radius",
							/* @__PURE__ */ A(u, { className: "size-5" })
						]
					})
				}), /* @__PURE__ */ A(Fe, {
					className: "w-42",
					children: [
						10,
						20,
						50,
						100
					].map((t) => /* @__PURE__ */ A(Pe, {
						variant: "outline",
						checked: e.value === t,
						onCheckedChange: () => p("radius", t),
						children: t
					}, t))
				})] }) }) })
			})]
		}), /* @__PURE__ */ A("div", {
			className: "col-span-full xl:col-start-2 w-full flex justify-between items-center",
			children: /* @__PURE__ */ A("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ A(be, {
					control: e.control,
					name: "filters",
					render: ({ field: e }) => /* @__PURE__ */ A(z, { children: /* @__PURE__ */ A(R, { children: /* @__PURE__ */ A(ze, {
						filters: {
							label: "Add filter",
							records: h
						},
						selected: g,
						onSelectionChange: y(e)
					}) }) })
				})
			})
		})]
	});
}
//#endregion
//#region src/features/maps/blocks/distributor-locator.tsx
k();
var Gt = async ([e, t, n, r, i, a, o]) => {
	if (!e || !t) return [];
	let s = new URL(e, window.location.origin);
	return s.searchParams.set("locatorType", a), s.searchParams.set("radius", String(r)), s.searchParams.set("distanceUnit", i), s.searchParams.set("latitude", String(n.lat)), s.searchParams.set("longitude", String(n.lng)), Object.values(t).forEach((e, t) => {
		e && s.searchParams.set(o[t], String(e));
	}), fetch(s).then((e) => e.json());
};
function Kt({ headline: e, subHeadline: t, description: n, defaultCoordinates: r = {
	lat: 40.73061,
	lng: -73.935242
}, units: i = "mi", mapID: o, locatorType: s = "gad" }) {
	let c = new URL(location.href).pathname.split("/")[1], l = ue(s), u = a(window.location.search, ([e]) => l.includes(e)), d = L("geocoding"), f = me({
		resolver: We(ie),
		defaultValues: {
			location: "",
			geolocation: !1,
			coordinates: r,
			distanceUnit: i,
			radius: 20,
			filters: u
		}
	}), { watch: p, setValue: m } = f, { data: g = [], isLoading: _ } = Be([
		"apis/v1/distributors",
		p(l.map((e) => `filters.${e}`)),
		p("coordinates"),
		p("radius"),
		i,
		s,
		l
	], Gt, { keepPreviousData: !0 }), v = async (e) => {
		if (d) try {
			let t = (await new d.Geocoder().geocode({ address: e })).results[0].geometry.location;
			m("coordinates", {
				lat: t.lat(),
				lng: t.lng()
			});
		} catch {
			return null;
		}
	}, y = async (e) => {
		await v(e.location);
	};
	return h(() => {
		!d || c === "global" || (async () => {
			try {
				let e = {
					address: "",
					componentRestrictions: { country: c.toUpperCase() }
				}, t = (await new d.Geocoder().geocode(e)).results[0].geometry.location;
				m("coordinates", {
					lat: t.lat(),
					lng: t.lng()
				});
			} catch {
				return null;
			}
		})();
	}, [c, d]), /* @__PURE__ */ A(_e, {
		...f,
		children: /* @__PURE__ */ A("form", {
			id: "distributor-locator",
			className: "flex flex-col gap-10",
			onSubmit: f.handleSubmit(y),
			children: [/* @__PURE__ */ A("div", {
				className: "fluid flex flex-col gap-10",
				children: [/* @__PURE__ */ A(re, {
					headline: e,
					subHeadline: t
				}), /* @__PURE__ */ A("div", {
					className: "flex flex-col gap-10",
					children: [n ? /* @__PURE__ */ A("p", {
						className: "text-gray-1",
						children: n
					}) : null, /* @__PURE__ */ A(Wt, {
						units: i,
						form: f,
						locatorType: s
					})]
				})]
			}), /* @__PURE__ */ A("div", {
				className: "relative col-span-12 z-0",
				children: [/* @__PURE__ */ A(qe, {
					dealers: g,
					currentCoordinates: p("coordinates"),
					defaultCoordinates: r,
					mapID: o
				}), /* @__PURE__ */ A("div", {
					className: "fluid md:absolute top-0 left-0 right-0 bottom-0 pointer-events-none",
					children: /* @__PURE__ */ A("div", {
						className: "bg-white h-[576px] md:absolute md:shadow-lg md:w-1/2 xl:w-2/5 md:top-1/2 md:-translate-y-1/2 md:z-10 pointer-events-auto",
						children: /* @__PURE__ */ A("div", {
							className: "relative size-full overflow-x-hidden",
							children: /* @__PURE__ */ A(et, {
								dealers: g,
								isLoading: _,
								location: p("coordinates")
							})
						})
					})
				})]
			})]
		})
	});
}
function qt({ apiKey: e, ...t }) {
	return e ? /* @__PURE__ */ A(fe, {
		vendorId: "s1104",
		vendorName: "Google Maps",
		children: /* @__PURE__ */ A(ae, {
			libraries: ["geocoding"],
			apiKey: e,
			children: /* @__PURE__ */ A(Kt, { ...t })
		})
	}) : null;
}
//#endregion
//#region src/blocks/distributor-locator/distributor-locator.tsx
function Jt(n) {
	let [r, i, a, o, s, c, l] = Array.from(n.children);
	return {
		...t(r.querySelector("h1, h2, h3, h4, h5, h6"), i.textContent, void 0),
		description: e(a.textContent),
		apiKey: e(o.textContent),
		mapID: e(s.textContent),
		units: e(l.children.item(1)?.textContent),
		defaultCoordinates: JSON.parse(c.textContent || "{}"),
		locatorType: n.classList.contains("aftermarket") ? "aftermarket" : "gad"
	};
}
function Yt(e) {
	let t = Jt(e);
	f(e).render(/* @__PURE__ */ A(qt, { ...t }));
}
//#endregion
export { Yt as default };

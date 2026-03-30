import { o as e, t } from "./rolldown-runtime-Ctdjzu3q.js";
import { v as n } from "./utils-kL9Kd3j1.js";
import { Ct as r, Et as i, Tt as a, _t as o, bt as s, dt as c, gt as l, it as u, kt as d, ot as f, pt as p, rt as m, st as h, wt as g, xt as _, yt as v } from "./react-DLNUXPF9.js";
import { t as y } from "./useTranslation-Cl_kknJx.js";
import { a as b, c as x, l as S, n as C, o as w, r as T, s as E } from "./schemas-IQyODXna.js";
import { t as D } from "./vanilla-D2rZDUKG.js";
import { t as ee } from "./checkbox-BhLy_CYP.js";
//#region ../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var te = /* @__PURE__ */ t(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vis.gl+react-google-maps@1.7.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs
p();
var ne = /* @__PURE__ */ e(te(), 1), re = "1.7.1";
function O(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function k(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
var A = {
	NOT_LOADED: "NOT_LOADED",
	LOADING: "LOADING",
	LOADED: "LOADED",
	FAILED: "FAILED",
	AUTH_FAILURE: "AUTH_FAILURE"
}, j = class {
	static load(e, t) {
		return k(this, void 0, void 0, function* () {
			let n = e.libraries ? e.libraries.split(",") : [], r = this.serializeParams(e);
			this.listeners.push(t), window.google?.maps?.importLibrary ? (this.serializedApiParams || (this.loadingStatus = A.LOADED), this.notifyLoadingStatusListeners()) : (this.serializedApiParams = r, this.initImportLibrary(e)), this.serializedApiParams && this.serializedApiParams !== r && console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");
			let i = ["maps", ...n];
			yield Promise.all(i.map((e) => google.maps.importLibrary(e)));
		});
	}
	static serializeParams(e) {
		return [
			e.v,
			e.key,
			e.language,
			e.region,
			e.authReferrerPolicy,
			e.solutionChannel
		].join("/");
	}
	static initImportLibrary(e) {
		if (window.google || (window.google = {}), window.google.maps || (window.google.maps = {}), window.google.maps.importLibrary) {
			console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");
			return;
		}
		let t = null, n = () => t || (t = new Promise((t, n) => {
			let r = document.createElement("script"), i = new URLSearchParams();
			for (let [t, n] of Object.entries(e)) {
				let e = t.replace(/[A-Z]/g, (e) => "_" + e[0].toLowerCase());
				i.set(e, String(n));
			}
			i.set("loading", "async"), i.set("callback", "__googleMapsCallback__"), r.async = !0, r.src = "https://maps.googleapis.com/maps/api/js?" + i.toString(), r.nonce = document.querySelector("script[nonce]")?.nonce || "", r.onerror = () => {
				this.loadingStatus = A.FAILED, this.notifyLoadingStatusListeners(), n(/* @__PURE__ */ Error("The Google Maps JavaScript API could not load."));
			}, window.__googleMapsCallback__ = () => {
				this.loadingStatus = A.LOADED, this.notifyLoadingStatusListeners(), t();
			}, window.gm_authFailure = () => {
				this.loadingStatus = A.AUTH_FAILURE, this.notifyLoadingStatusListeners();
			}, this.loadingStatus = A.LOADING, this.notifyLoadingStatusListeners(), document.head.append(r);
		}), t);
		google.maps.importLibrary = (e) => n().then(() => google.maps.importLibrary(e));
	}
	static notifyLoadingStatusListeners() {
		for (let e of this.listeners) e(this.loadingStatus);
	}
};
j.loadingStatus = A.NOT_LOADED, j.listeners = [];
var ie = "GMP_visgl_rgmlibrary_v1_default", ae = [`gmp_visgl_reactgooglemaps_v${re}`], M = c.createContext(null);
function oe() {
	let [e, t] = _({});
	return {
		mapInstances: e,
		addMapInstance: (e, n = "default") => {
			t((t) => Object.assign(Object.assign({}, t), { [n]: e }));
		},
		removeMapInstance: (e = "default") => {
			t((t) => {
				var n = e;
				return t[n], O(t, [typeof n == "symbol" ? n : n + ""]);
			});
		},
		clearMapInstances: () => {
			t({});
		}
	};
}
function se(e) {
	let { onLoad: t, onError: n, apiKey: a, version: o, libraries: s = [] } = e, c = O(e, [
		"onLoad",
		"onError",
		"apiKey",
		"version",
		"libraries"
	]), [l, u] = _(j.loadingStatus), [d, f] = r((e, t) => e[t.name] ? e : Object.assign(Object.assign({}, e), { [t.name]: t.value }), {}), p = v(() => s?.join(","), [s]), m = v(() => JSON.stringify(Object.assign({
		apiKey: a,
		version: o
	}, c)), [
		a,
		o,
		c
	]), h = g((e) => k(this, void 0, void 0, function* () {
		if (d[e]) return d[e];
		if (!(google == null ? void 0 : google.maps)?.importLibrary) throw Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");
		let t = yield window.google.maps.importLibrary(e);
		return f({
			name: e,
			value: t
		}), t;
	}), [d]);
	return i(() => {
		k(this, void 0, void 0, function* () {
			try {
				let e = Object.assign({ key: a }, c);
				o && (e.v = o), p?.length > 0 && (e.libraries = p), (e.channel === void 0 || e.channel < 0 || e.channel > 999) && delete e.channel, e.solutionChannel === void 0 ? e.solutionChannel = ie : e.solutionChannel === "" && delete e.solutionChannel, yield j.load(e, (e) => u(e));
				for (let e of [
					"core",
					"maps",
					...s
				]) yield h(e);
				t && t();
			} catch (e) {
				n ? n(e) : console.error("<ApiProvider> failed to load the Google Maps JavaScript API", e);
			}
		});
	}, [
		a,
		p,
		m
	]), {
		status: l,
		loadedLibraries: d,
		importLibrary: h
	};
}
function ce(e) {
	return v(() => e.disableUsageAttribution ? null : ae, [e.disableUsageAttribution]);
}
var le = (e) => {
	let { children: t } = e, n = O(e, ["children"]), { mapInstances: r, addMapInstance: i, removeMapInstance: a, clearMapInstances: o } = oe(), { status: s, loadedLibraries: l, importLibrary: u } = se(n), d = ce(n), f = v(() => ({
		mapInstances: r,
		addMapInstance: i,
		removeMapInstance: a,
		clearMapInstances: o,
		status: s,
		loadedLibraries: l,
		importLibrary: u,
		internalUsageAttributionIds: d
	}), [
		r,
		i,
		a,
		o,
		s,
		l,
		u,
		d
	]);
	return c.createElement(M.Provider, { value: f }, t);
};
function ue(e, t) {
	for (let n of me) {
		let r = t[n], a = N[n];
		i(() => {
			if (!e || !r) return;
			let t = google.maps.event.addListener(e, a, (t) => {
				r(de(a, e, t));
			});
			return () => t.remove();
		}, [
			e,
			a,
			r
		]);
	}
}
function de(e, t, n) {
	let r = {
		type: e,
		map: t,
		detail: {},
		stoppable: !1,
		stop: () => {}
	};
	if (fe.includes(e)) {
		let e = r, n = t.getCenter(), i = t.getZoom(), a = t.getHeading() || 0, o = t.getTilt() || 0, s = t.getBounds();
		return (!n || !s || !Number.isFinite(i)) && console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"), e.detail = {
			center: n?.toJSON() || {
				lat: 0,
				lng: 0
			},
			zoom: i || 0,
			heading: a,
			tilt: o,
			bounds: s?.toJSON() || {
				north: 90,
				east: 180,
				south: -90,
				west: -180
			}
		}, e;
	} else if (pe.includes(e)) {
		if (!n) throw Error("[createEvent] mouse events must provide a srcEvent");
		let e = r;
		return e.domEvent = n.domEvent, e.stoppable = !0, e.stop = () => n.stop(), e.detail = {
			latLng: n.latLng?.toJSON() || null,
			placeId: n.placeId
		}, e;
	}
	return r;
}
var N = {
	onBoundsChanged: "bounds_changed",
	onCenterChanged: "center_changed",
	onClick: "click",
	onContextmenu: "contextmenu",
	onDblclick: "dblclick",
	onDrag: "drag",
	onDragend: "dragend",
	onDragstart: "dragstart",
	onHeadingChanged: "heading_changed",
	onIdle: "idle",
	onIsFractionalZoomEnabledChanged: "isfractionalzoomenabled_changed",
	onMapCapabilitiesChanged: "mapcapabilities_changed",
	onMapTypeIdChanged: "maptypeid_changed",
	onMousemove: "mousemove",
	onMouseout: "mouseout",
	onMouseover: "mouseover",
	onProjectionChanged: "projection_changed",
	onRenderingTypeChanged: "renderingtype_changed",
	onTilesLoaded: "tilesloaded",
	onTiltChanged: "tilt_changed",
	onZoomChanged: "zoom_changed",
	onCameraChanged: "bounds_changed"
}, fe = [
	"bounds_changed",
	"center_changed",
	"heading_changed",
	"tilt_changed",
	"zoom_changed"
], pe = [
	"click",
	"contextmenu",
	"dblclick",
	"mousemove",
	"mouseout",
	"mouseover"
], me = Object.keys(N);
function he(e) {
	let t = l(void 0);
	return i(() => {
		t.current = e;
	}), t.current;
}
function ge(e, t) {
	let n = he(e);
	return v(() => n && t(n, e) ? n : e, [
		e,
		n,
		t
	]);
}
function P(e, t, n) {
	i(e, [ge(t, n)]);
}
function F(e, t) {
	P(e, t, ne.default);
}
var I = new Set(/* @__PURE__ */ "backgroundColor.clickableIcons.controlSize.disableDefaultUI.disableDoubleClickZoom.draggable.draggableCursor.draggingCursor.fullscreenControl.fullscreenControlOptions.gestureHandling.headingInteractionEnabled.isFractionalZoomEnabled.keyboardShortcuts.mapTypeControl.mapTypeControlOptions.mapTypeId.maxZoom.minZoom.noClear.panControl.panControlOptions.restriction.rotateControl.rotateControlOptions.scaleControl.scaleControlOptions.scrollwheel.streetView.streetViewControl.streetViewControlOptions.styles.tiltInteractionEnabled.zoomControl.zoomControlOptions".split("."));
function L(e, t) {
	let n = {}, r = Object.keys(t);
	for (let e of r) I.has(e) && (n[e] = t[e]);
	F(() => {
		e && e.setOptions(n);
	}, [n]);
}
function R() {
	return a(M)?.status || A.NOT_LOADED;
}
function _e(e, t) {
	let { viewport: n, viewState: r } = t, i = !!n;
	return s(() => {
		if (!e || !r) return;
		let { latitude: t, longitude: n, bearing: i, pitch: a, zoom: o } = r;
		e.moveCamera({
			center: {
				lat: t,
				lng: n
			},
			heading: i,
			tilt: a,
			zoom: o + 1
		});
	}, [e, r]), i;
}
function ve(e) {
	return !e || typeof e != "object" || !("lat" in e && "lng" in e) ? !1 : Number.isFinite(e.lat) && Number.isFinite(e.lng);
}
function z(e) {
	return ve(e) ? e : e.toJSON();
}
function ye(e, t, n) {
	let r = n.center ? z(n.center) : null, i = null, a = null;
	r && Number.isFinite(r.lat) && Number.isFinite(r.lng) && (i = r.lat, a = r.lng);
	let o = Number.isFinite(n.zoom) ? n.zoom : null, c = Number.isFinite(n.heading) ? n.heading : null, l = Number.isFinite(n.tilt) ? n.tilt : null;
	s(() => {
		if (!e) return;
		let n = {}, r = !1;
		i !== null && a !== null && (t.current.center.lat !== i || t.current.center.lng !== a) && (n.center = {
			lat: i,
			lng: a
		}, r = !0), o !== null && t.current.zoom !== o && (n.zoom = o, r = !0), c !== null && t.current.heading !== c && (n.heading = c, r = !0), l !== null && t.current.tilt !== l && (n.tilt = l, r = !0), r && e.moveCamera(n);
	});
}
var be = () => c.createElement("div", { style: {
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	zIndex: 999,
	display: "flex",
	flexFlow: "column nowrap",
	textAlign: "center",
	justifyContent: "center",
	fontSize: ".8rem",
	color: "rgba(0,0,0,0.6)",
	background: "#dddddd",
	padding: "1rem 1.5rem"
} }, c.createElement("h2", null, "Error: AuthFailure"), c.createElement("p", null, "A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ", c.createElement("code", null, "APIProvider.apiKey"), " prop is correct. Check the error-message in the console for further details."));
function xe() {
	let [e, t] = _(null);
	return [e, g((e) => t(e), [t])];
}
function B() {
	return R() === A.LOADED;
}
function Se() {
	let [, e] = r((e) => e + 1, 0);
	return e;
}
function Ce(e, t) {
	let n = e.getCenter(), r = e.getZoom(), i = e.getHeading() || 0, a = e.getTilt() || 0, o = e.getBounds();
	(!n || !o || !Number.isFinite(r)) && console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"), Object.assign(t.current, {
		center: n?.toJSON() || {
			lat: 0,
			lng: 0
		},
		zoom: r || 0,
		heading: i,
		tilt: a
	});
}
function we(e) {
	let t = Se(), n = l({
		center: {
			lat: 0,
			lng: 0
		},
		heading: 0,
		tilt: 0,
		zoom: 0
	});
	return i(() => {
		if (!e) return;
		let r = google.maps.event.addListener(e, "bounds_changed", () => {
			Ce(e, n), t();
		});
		return () => r.remove();
	}, [e, t]), n;
}
var V = class {
	static has(e) {
		return this.entries[e] && this.entries[e].length > 0;
	}
	static pop(e) {
		return this.entries[e] && this.entries[e].pop() || null;
	}
	static push(e, t) {
		this.entries[e] || (this.entries[e] = []), this.entries[e].push(t);
	}
};
V.entries = {};
function Te(e, t) {
	let n = B(), [r, a] = _(null), [o, s] = xe(), c = we(r), { id: u, defaultBounds: d, defaultCenter: f, defaultZoom: p, defaultHeading: m, defaultTilt: h, reuseMaps: g, renderingType: v, colorScheme: y } = e, b = O(e, [
		"id",
		"defaultBounds",
		"defaultCenter",
		"defaultZoom",
		"defaultHeading",
		"defaultTilt",
		"reuseMaps",
		"renderingType",
		"colorScheme"
	]), x = e.zoom !== void 0 || e.defaultZoom !== void 0, S = e.center !== void 0 || e.defaultCenter !== void 0;
	!d && (!x || !S) && console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"), !b.center && f && (b.center = f), !b.zoom && Number.isFinite(p) && (b.zoom = p), !b.heading && Number.isFinite(m) && (b.heading = m), !b.tilt && Number.isFinite(h) && (b.tilt = h);
	let C = b.internalUsageAttributionIds;
	C == null ? b.internalUsageAttributionIds = t.internalUsageAttributionIds : b.internalUsageAttributionIds = [...t.internalUsageAttributionIds || [], ...C];
	for (let e of Object.keys(b)) b[e] === void 0 && delete b[e];
	let w = l(void 0);
	return i(() => {
		if (!o || !n) return;
		let { addMapInstance: r, removeMapInstance: i } = t, { mapId: s } = e, l = `${s || "default"}:${v || "default"}:${y || "LIGHT"}`, f, p;
		if (g && V.has(l) ? (p = V.pop(l), f = p.getDiv(), o.appendChild(f), p.setOptions(b), setTimeout(() => p.setCenter(p.getCenter()), 0)) : (f = document.createElement("div"), f.style.height = "100%", o.appendChild(f), p = new google.maps.Map(f, Object.assign(Object.assign(Object.assign({}, b), v ? { renderingType: v } : {}), y ? { colorScheme: y } : {}))), a(p), r(p, u), d) {
			let { padding: e } = d, t = O(d, ["padding"]);
			p.fitBounds(t, e);
		} else (!x || !S) && p.fitBounds({
			east: 180,
			west: -180,
			south: -90,
			north: 90
		});
		if (w.current) {
			let { mapId: e, cameraState: t } = w.current;
			e !== s && p.setOptions(t);
		}
		return () => {
			w.current = {
				mapId: s,
				cameraState: c.current
			}, f.remove(), g ? V.push(l, p) : google.maps.event.clearInstanceListeners(p), a(null), i(u);
		};
	}, [
		o,
		n,
		u,
		e.mapId,
		e.renderingType,
		e.colorScheme
	]), [
		r,
		s,
		c
	];
}
var H = c.createContext(null), U = (e) => {
	let { children: t, id: n, className: r, style: o } = e, l = a(M), u = R();
	if (!l) throw Error("<Map> can only be used inside an <ApiProvider> component.");
	let [d, f, p] = Te(e, l);
	ye(d, p, e), ue(d, e), L(d, e);
	let m = _e(d, e), h = !!e.controlled;
	i(() => {
		if (d) return m && d.setOptions({ disableDefaultUI: !0 }), (m || h) && d.setOptions({
			gestureHandling: "none",
			keyboardShortcuts: !1
		}), () => {
			d.setOptions({
				gestureHandling: e.gestureHandling,
				keyboardShortcuts: e.keyboardShortcuts
			});
		};
	}, [
		d,
		m,
		h,
		e.gestureHandling,
		e.keyboardShortcuts
	]);
	let g = e.center ? z(e.center) : null, _ = null, y = null;
	g && Number.isFinite(g.lat) && Number.isFinite(g.lng) && (_ = g.lat, y = g.lng);
	let b = v(() => ({
		center: {
			lat: _ ?? 0,
			lng: y ?? 0
		},
		zoom: e.zoom ?? 0,
		heading: e.heading ?? 0,
		tilt: e.tilt ?? 0
	}), [
		_,
		y,
		e.zoom,
		e.heading,
		e.tilt
	]);
	s(() => {
		if (!d || !h) return;
		d.moveCamera(b);
		let e = d.addListener("bounds_changed", () => {
			d.moveCamera(b);
		});
		return () => e.remove();
	}, [
		d,
		h,
		b
	]);
	let x = v(() => Object.assign({
		width: "100%",
		height: "100%",
		position: "relative",
		zIndex: m ? -1 : 0
	}, o), [o, m]), S = v(() => ({ map: d }), [d]);
	return u === A.AUTH_FAILURE ? c.createElement("div", {
		style: Object.assign({ position: "relative" }, r ? {} : x),
		className: r
	}, c.createElement(be, null)) : c.createElement("div", Object.assign({
		ref: f,
		"data-testid": "map",
		style: r ? void 0 : x,
		className: r
	}, n ? { id: n } : {}), d ? c.createElement(H.Provider, { value: S }, t) : null);
};
U.deckGLViewProps = !0;
var W = /* @__PURE__ */ new Set();
function Ee(...e) {
	let t = JSON.stringify(e);
	W.has(t) || (W.add(t), console.error(...e));
}
var G = (e = null) => {
	let t = a(M), { map: n } = a(H) || {};
	if (t === null) return Ee("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."), null;
	let { mapInstances: r } = t;
	return e === null ? n || r.default || null : r[e] || null;
};
function K(e) {
	let t = B(), n = a(M);
	return i(() => {
		!t || !n || n.importLibrary(e);
	}, [
		t,
		n,
		e
	]), n?.loadedLibraries[e] || null;
}
function q(e, t, n) {
	i(() => {
		if (!e || !t || !n) return;
		let r = google.maps.event.addListener(e, t, n);
		return () => r.remove();
	}, [
		e,
		t,
		n
	]);
}
function J(e, t, n) {
	i(() => {
		e && (e[t] = n);
	}, [
		e,
		t,
		n
	]);
}
function Y(e, t, n) {
	i(() => {
		if (!(!e || !t || !n)) return e.addEventListener(t, n), () => e.removeEventListener(t, n);
	}, [
		e,
		t,
		n
	]);
}
var De = new class {
	constructor() {
		this.renderedStyles = /* @__PURE__ */ new Set(), this.styleElement = null;
	}
	getStyleElement() {
		return this.styleElement || (this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-rgm-anchor-styles", ""), document.head.appendChild(this.styleElement)), this.styleElement;
	}
	addAdvancedMarkerPointerEventsOverwrite() {
		if (this.renderedStyles.has("marker-pointer-events")) return;
		let e = this.getStyleElement();
		e.textContent += "\n      gmp-advanced-marker[data-origin='rgm'] {\n        pointer-events: none !important;\n      }\n    ", this.renderedStyles.add("marker-pointer-events");
	}
	cleanup() {
		this.styleElement && (this.styleElement.remove(), this.styleElement = null, this.renderedStyles.clear());
	}
}();
function Oe(e, t) {
	if (!(google == null ? void 0 : google.maps)?.version) return;
	let n = google.maps.version.split("."), r = parseInt(n[0], 10), i = parseInt(n[1], 10);
	return r > e || r === e && i >= t;
}
var ke = c.createContext(null), Ae = {
	TOP_LEFT: ["0%", "0%"],
	TOP_CENTER: ["50%", "0%"],
	TOP: ["50%", "0%"],
	TOP_RIGHT: ["100%", "0%"],
	LEFT_CENTER: ["0%", "50%"],
	LEFT_TOP: ["0%", "0%"],
	LEFT: ["0%", "50%"],
	LEFT_BOTTOM: ["0%", "100%"],
	RIGHT_TOP: ["100%", "0%"],
	RIGHT: ["100%", "50%"],
	RIGHT_CENTER: ["100%", "50%"],
	RIGHT_BOTTOM: ["100%", "100%"],
	BOTTOM_LEFT: ["0%", "100%"],
	BOTTOM_CENTER: ["50%", "100%"],
	BOTTOM: ["50%", "100%"],
	BOTTOM_RIGHT: ["100%", "100%"],
	CENTER: ["50%", "50%"]
}, X = f((e, t) => {
	let { children: n, style: r, className: i, anchorPoint: a } = e, [s, l] = Me(e), d = v(() => s ? { marker: s } : null, [s]);
	return o(t, () => s, [s]), l ? c.createElement(ke.Provider, { value: d }, u(c.createElement(je, {
		anchorPoint: a,
		styles: r,
		className: i
	}, n), l)) : null;
});
X.displayName = "AdvancedMarker";
function Z(e) {
	return e.nodeType === Node.ELEMENT_NODE;
}
var je = ({ children: e, styles: t, className: n }) => c.createElement("div", {
	className: n,
	style: t
}, e);
function Me(e) {
	let [t, n] = _(null), [r, a] = _(null), o = G(), s = K("marker"), { children: c, onClick: l, className: u, onMouseEnter: d, onMouseLeave: f, onDrag: p, onDragStart: m, onDragEnd: g, collisionBehavior: v, clickable: y, draggable: b, position: x, title: S, zIndex: C, anchorPoint: w, anchorLeft: T, anchorTop: E } = e, D = h.count(c);
	return i(() => {
		if (!o || !s) return;
		let e = new s.AdvancedMarkerElement();
		e.map = o, n(e);
		let t = null;
		return D > 0 && (t = document.createElement("div"), e.content = t, a(t)), () => {
			e.map = null, t?.remove(), n(null), a(null);
		};
	}, [
		o,
		s,
		D
	]), i(() => {
		!t?.content || !Z(t.content) || D > 0 || (t.content.className = u ?? "");
	}, [
		t,
		u,
		D
	]), Ne(t, w, T, E, D > 0), J(t, "position", x), J(t, "title", S ?? ""), J(t, "zIndex", C), J(t, "collisionBehavior", v), i(() => {
		t && (b === void 0 ? p || m || g ? t.gmpDraggable = !0 : t.gmpDraggable = !1 : t.gmpDraggable = b);
	}, [
		t,
		b,
		p,
		g,
		m
	]), i(() => {
		if (!t) return;
		let e = y !== void 0 || !!l || !!d || !!f;
		t.gmpClickable = e, e && t?.content && Z(t.content) && (t.content.style.pointerEvents = "all", l && (t.content.style.cursor = "pointer"));
	}, [
		t,
		y,
		l,
		d,
		f
	]), q(t, "click", l), q(t, "drag", p), q(t, "dragstart", m), q(t, "dragend", g), Y(t?.element, "mouseenter", d), Y(t?.element, "mouseleave", f), [t, r];
}
function Ne(e, t, n, r, a) {
	i(() => {
		if (!e || !a) return;
		let i = Oe(3, 62), o = e.content;
		if (!(!o || !Z(o))) {
			if (n !== void 0 || r !== void 0) {
				i || console.warn(`AdvancedMarker: The anchorLeft and anchorTop props are only supported in Google Maps API version 3.62 and above. The current version is ${google.maps.version}.`), e.anchorLeft = n, e.anchorTop = r, t !== void 0 && console.warn("AdvancedMarker: the anchorPoint prop is ignored when anchorLeft and/or anchorTop are set.");
				return;
			}
			if (t !== void 0) {
				let [n, r] = t ?? Ae.BOTTOM, a = `calc(-1 * ${n})`, s = `calc(-1 * ${r})`;
				i ? (e.anchorLeft = a, e.anchorTop = s, o.style.transform = "") : (o.style.transform = `translate(50%, 100%) translate(${a}, ${s})`, e.dataset.origin = "rgm", De.addAdvancedMarkerPointerEventsOverwrite());
			}
		}
	}, [
		e,
		t,
		n,
		r,
		a
	]);
}
function Pe(e) {
	let [t, n] = _(null), r = G(), { onClick: a, onDrag: o, onDragStart: s, onDragEnd: c, onMouseOver: l, onMouseOut: u } = e, d = O(e, [
		"onClick",
		"onDrag",
		"onDragStart",
		"onDragEnd",
		"onMouseOver",
		"onMouseOut"
	]), { position: f, draggable: p } = d;
	return i(() => {
		if (!r) {
			r === void 0 && console.error("<Marker> has to be inside a Map component.");
			return;
		}
		let e = new google.maps.Marker(d);
		return e.setMap(r), n(e), () => {
			e.setMap(null), n(null);
		};
	}, [r]), i(() => {
		if (!t) return;
		let e = t, n = google.maps.event;
		return a && n.addListener(e, "click", a), o && n.addListener(e, "drag", o), s && n.addListener(e, "dragstart", s), c && n.addListener(e, "dragend", c), l && n.addListener(e, "mouseover", l), u && n.addListener(e, "mouseout", u), t.setDraggable(!!p), () => {
			n.clearInstanceListeners(e);
		};
	}, [
		t,
		p,
		a,
		o,
		s,
		c,
		l,
		u
	]), i(() => {
		t && d && t.setOptions(d);
	}, [t, d]), i(() => {
		p || !f || !t || t.setPosition(f);
	}, [
		p,
		f,
		t
	]), t;
}
var Fe = f((e, t) => {
	let n = Pe(e);
	return o(t, () => n, [n]), c.createElement(c.Fragment, null);
});
Fe.displayName = "Marker";
//#endregion
//#region src/components/ui/map.tsx
function Q({ state: e }) {
	return /* @__PURE__ */ m("div", {
		"data-map": !0,
		"data-state": e,
		className: "bg-yellow hover:bg-hovered active:bg-black data-[state=open]:bg-black active:text-yellow data-[state=open]:text-yellow w-12 h-16",
		style: { clipPath: "polygon( 50.003% 0.997%,50.003% 0.997%,42.111% 1.452%,34.627% 2.771%,27.651% 4.88%,21.282% 7.711%,15.619% 11.19%,10.763% 15.247%,6.812% 19.81%,3.867% 24.808%,2.027% 30.169%,1.392% 35.823%,1.392% 35.823%,2.382% 42.708%,5.115% 49.943%,9.235% 57.342%,14.386% 64.717%,20.211% 71.882%,26.354% 78.651%,32.46% 84.835%,38.172% 90.249%,43.133% 94.705%,46.988% 98.017%,46.988% 98.017%,47.503% 98.381%,48.076% 98.664%,48.694% 98.865%,49.341% 98.987%,50.003% 99.027%,50.665% 98.987%,51.312% 98.865%,51.929% 98.664%,52.503% 98.381%,53.017% 98.017%,53.017% 98.017%,56.872% 94.705%,61.834% 90.249%,67.546% 84.835%,73.651% 78.651%,79.795% 71.882%,85.62% 64.717%,90.77% 57.342%,94.89% 49.943%,97.624% 42.708%,98.614% 35.823%,98.614% 35.823%,97.978% 30.169%,96.138% 24.808%,93.193% 19.81%,89.243% 15.247%,84.386% 11.19%,78.724% 7.711%,72.355% 4.88%,65.378% 2.771%,57.894% 1.452%,50.003% 0.997%)" },
		children: /* @__PURE__ */ m("div", {
			className: "mx-2 pt-2.5",
			"data-map": !0,
			children: /* @__PURE__ */ m("svg", {
				width: "29",
				height: "32",
				viewBox: "0 0 29 32",
				fill: "currentColor",
				xmlns: "http://www.w3.org/2000/svg",
				"data-map": !0,
				children: /* @__PURE__ */ m("path", {
					"data-map": !0,
					d: "M15.8681 27.1871L18.8521 24.3019L20.0896 25.5503L16.8719 28.3106C16.6107 28.6435 16.4182 29.1706 16.2532 29.4897H13.8742C13.998 28.6019 15.2356 27.4923 15.8544 27.1871H15.8681ZM5.885 8.75258C5.78874 8.78032 3.40984 9.44613 3.40984 9.44613C3.40984 9.44613 2.30978 9.87613 1.81475 10.1952C1.33347 10.5281 0.769689 11.0829 0.742188 11.3742L2.85981 11.8597C3.18983 11.499 3.54735 11.1106 3.86362 10.8471L4.34491 10.6113L6.10501 8.80807C6.10501 8.80807 6.03626 8.71097 5.87125 8.73871L5.885 8.75258ZM20.2546 14.62C18.8933 13.1081 17.752 11.7071 16.6519 10.0287C17.367 8.65548 17.8895 5.00742 17.5595 3.60645C17.4357 3.17645 16.2532 1.60903 16.0606 1.37323C15.7719 1.08194 14.8231 0 14.3693 0C14.273 0 14.1768 0.0277409 14.1355 0.0693538L14.2593 1.29C12.9942 2.10839 11.3303 3.21806 9.84525 4.34161C9.84525 4.77161 9.87276 5.42355 9.91401 5.65935C10.1478 5.85355 10.3953 6.02 10.6978 6.1171C11.2891 6.02 13.1042 5.56226 13.5855 5.63161L11.7979 8.35032L9.74898 9.82065L7.17758 9.00226C7.01257 8.97451 6.84756 9.00226 6.75131 9.14097L4.86745 11.2077C4.77119 11.3048 4.70242 11.4019 4.70242 11.6377L4.63368 13.9681C4.63368 13.9681 4.60618 14.3287 4.60618 14.7171C4.60618 16.3955 5.34871 17.1723 5.34871 17.1723L6.5863 15.369C6.42129 15.1055 6.13252 14.3842 6.06376 14.0513C6.06376 13.9819 6.09127 12.0539 6.09127 12.0539L7.28759 11.1661L10.4778 13.4271C10.4778 13.4271 11.3579 15.0639 12.1967 16.0487C12.7467 16.7423 15.5106 18.601 16.8444 19.3916C16.9682 20.1129 17.2707 21.2919 17.4907 21.9161L21.396 25.9526L19.0858 28.8655C18.2745 29.3926 17.4907 30.3358 17.5595 31.2235H20.2272L20.5159 29.6839L23.7061 26.1052C23.8711 25.911 23.8711 25.8139 23.7749 25.5087L22.8673 22.4294C23.3211 21.9023 24.2974 20.5984 24.2974 19.0171C24.2974 16.1597 21.2035 15.4384 20.2409 14.62H20.2546ZM25.26 19.3777C25.0675 18.6287 24.7787 17.7687 24.5449 17.3526C24.5449 17.3526 24.6687 17.2139 24.9299 17.3803C25.1912 17.5468 26.8413 18.6981 26.8413 18.6981C27.6801 19.9464 28.2027 25.0648 28.2439 26.8958C27.4601 26.5352 26.36 25.911 25.645 25.2174L25.26 19.3777Z"
				})
			})
		})
	});
}
//#endregion
//#region src/features/maps/schema.ts
var Ie = w({
	distanceUnit: S(),
	location: S(),
	radius: b(),
	geolocation: T(),
	coordinates: w({
		lng: b(),
		lat: b()
	}),
	filters: x(S(), S())
}), $ = {
	gad: {
		cbh: {
			label: "Conveyor Belts, Heavyweight",
			locator: ""
		},
		hydraulics: {
			label: "Hydraulics",
			locator: "Locator_Hydraulics__c"
		},
		ptp: { label: "Power Transmission Products" },
		ihose: { label: "Industrial Hose" },
		ihoseStarDist: { label: "Industrial Hose - STAR Distributor" },
		pde: { label: "Petroleum Dispensing Equipment" }
	},
	aftermarket: {
		achosefittings: { label: "AC Hose Fittings" },
		atvbelts: { label: "ATV Belts" },
		gardenhose: { label: "Garden Hose" },
		hdairsprings: { label: "HD Airsprings" },
		hdbeltshose: { label: "HD Belts & Hose" },
		hydraulics: { label: "Hydraulics" },
		installer: { label: "Installer" },
		lawnmoverbelts: { label: "Lawn Mower Belts" },
		partsstore: { label: "Parts Store" },
		snowmobilebelts: { label: "Snowmobile Belts" }
	}
}, Le = (e = "gad") => Object.keys($[e]), Re = D(null), ze = w({
	value: S(),
	label: S(),
	lat: S(),
	lng: S(),
	url: E(S())
}), Be = async ([e]) => fetch(e).then(async (e) => {
	let t = await e.json();
	return await C(ze).parseAsync(t.data);
});
//#endregion
//#region src/features/consent/components/consent-gate.tsx
p();
function Ve({ vendorId: e, vendorName: t, children: r }) {
	let [i, a] = _(!1), [o, s] = _(null), [c, l] = _(0), { t: u } = y(), f = () => {
		let t = window.__cmp?.("getCMPData");
		t && "vendorConsents" in t && (a(!0), s(!!t.vendorConsents[e]));
	};
	window.__cmp && (f(), window.__cmp("addEventListener", [
		"consent",
		f,
		!1
	], null));
	let p = () => {
		window.__cmp?.("setVendorConsent", [e, c ? 1 : 3]), s(!0);
	};
	return i ? o ? /* @__PURE__ */ m(d, { children: r }) : /* @__PURE__ */ m("div", {
		className: "relative w-full h-[600px] bg-gray-1 inline-block",
		id: `cmp_${e}`,
		"data-cmp-vendor": e,
		children: /* @__PURE__ */ m("div", {
			className: "absolute top-1/2 -translate-y-1/2 bg-white w-full p-6",
			children: /* @__PURE__ */ m("div", {
				className: "max-w-[640px] mx-auto space-y-6",
				children: [
					/* @__PURE__ */ m("div", {
						className: "text-h4",
						children: u("We need your consent")
					}),
					/* @__PURE__ */ m("div", {
						className: "leading-label",
						children: u("This content is provided by {{vendorName}}. By enabling this content, your personal data may be processed by the provider and cookies may be set.", { vendorName: t })
					}),
					/* @__PURE__ */ m(n, {
						onClick: p,
						children: u("Accept")
					}),
					/* @__PURE__ */ m("label", {
						className: "flex gap-4 md:w-2/3",
						children: [/* @__PURE__ */ m(ee, {
							value: c,
							onCheckedChange: (e) => l(e ? 1 : 0)
						}), /* @__PURE__ */ m("span", {
							className: "text-gray-1 leading-label text-sm",
							children: u("Always accept {{vendorName}}", { vendorName: t })
						})]
					})
				]
			})
		})
	}) : null;
}
//#endregion
export { Ie as a, le as c, G as d, K as f, $ as i, X as l, Be as n, Re as o, Le as r, Q as s, Ve as t, U as u };

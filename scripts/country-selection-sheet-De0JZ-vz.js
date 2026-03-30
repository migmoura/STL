import { a as e, c as t, i as n, r } from "./utils-kL9Kd3j1.js";
import { Ct as i, Dt as a, Et as o, H as s, Ot as c, St as l, Tt as u, dt as d, et as f, ft as ee, gt as p, mt as te, pt as m, rt as h, wt as g, xt as _, yt as v } from "./react-DLNUXPF9.js";
import { t as y } from "./useTranslation-Cl_kknJx.js";
import { i as b } from "./dist-DkU8_-4E.js";
import "./es2015-Lwokp0LN.js";
import { a as x, i as S, n as C, r as w, t as T } from "./sheet-DHtRCcio.js";
import { n as E } from "./input-B3cTQm8l.js";
import { t as D } from "./index-DQhmSjJh.js";
import { t as O } from "./service-CNRTTfnr.js";
//#region ../../node_modules/.pnpm/react-from-dom@0.7.5_react@19.2.4/node_modules/react-from-dom/dist/index.mjs
m();
var k = (e) => typeof e == "string" ? e.split(/ ?; ?/).reduce((e, t) => {
	let [n, r] = t.split(/ ?: ?/).map((e, t) => t === 0 ? e.replace(/\s+/g, "") : e.trim());
	if (n && r) {
		let t = n.replace(/(\w)-(\w)/g, (e, t, n) => `${t}${n.toUpperCase()}`), i = r.trim();
		Number.isNaN(Number(r)) || (i = Number(r)), e[n.startsWith("-") ? n : t] = i;
	}
	return e;
}, {}) : {};
function A(e = 6) {
	let t = "";
	for (let n = e; n > 0; --n) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(Math.random() * 61)];
	return t;
}
var j = [
	"br",
	"col",
	"colgroup",
	"dl",
	"hr",
	"iframe",
	"img",
	"input",
	"link",
	"menuitem",
	"meta",
	"ol",
	"param",
	"select",
	"table",
	"tbody",
	"tfoot",
	"thead",
	"tr",
	"ul",
	"wbr"
], M = {
	"accept-charset": "acceptCharset",
	acceptcharset: "acceptCharset",
	accesskey: "accessKey",
	allowfullscreen: "allowFullScreen",
	autocapitalize: "autoCapitalize",
	autocomplete: "autoComplete",
	autocorrect: "autoCorrect",
	autofocus: "autoFocus",
	autoplay: "autoPlay",
	autosave: "autoSave",
	cellpadding: "cellPadding",
	cellspacing: "cellSpacing",
	charset: "charSet",
	class: "className",
	classid: "classID",
	classname: "className",
	colspan: "colSpan",
	contenteditable: "contentEditable",
	contextmenu: "contextMenu",
	controlslist: "controlsList",
	crossorigin: "crossOrigin",
	dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
	datetime: "dateTime",
	defaultchecked: "defaultChecked",
	defaultvalue: "defaultValue",
	enctype: "encType",
	for: "htmlFor",
	formmethod: "formMethod",
	formaction: "formAction",
	formenctype: "formEncType",
	formnovalidate: "formNoValidate",
	formtarget: "formTarget",
	frameborder: "frameBorder",
	hreflang: "hrefLang",
	htmlfor: "htmlFor",
	httpequiv: "httpEquiv",
	"http-equiv": "httpEquiv",
	icon: "icon",
	innerhtml: "innerHTML",
	inputmode: "inputMode",
	itemid: "itemID",
	itemprop: "itemProp",
	itemref: "itemRef",
	itemscope: "itemScope",
	itemtype: "itemType",
	keyparams: "keyParams",
	keytype: "keyType",
	marginwidth: "marginWidth",
	marginheight: "marginHeight",
	maxlength: "maxLength",
	mediagroup: "mediaGroup",
	minlength: "minLength",
	nomodule: "noModule",
	novalidate: "noValidate",
	playsinline: "playsInline",
	radiogroup: "radioGroup",
	readonly: "readOnly",
	referrerpolicy: "referrerPolicy",
	rowspan: "rowSpan",
	spellcheck: "spellCheck",
	srcdoc: "srcDoc",
	srclang: "srcLang",
	srcset: "srcSet",
	tabindex: "tabIndex",
	typemustmatch: "typeMustMatch",
	usemap: "useMap",
	accentheight: "accentHeight",
	"accent-height": "accentHeight",
	alignmentbaseline: "alignmentBaseline",
	"alignment-baseline": "alignmentBaseline",
	allowreorder: "allowReorder",
	arabicform: "arabicForm",
	"arabic-form": "arabicForm",
	attributename: "attributeName",
	attributetype: "attributeType",
	autoreverse: "autoReverse",
	basefrequency: "baseFrequency",
	baselineshift: "baselineShift",
	"baseline-shift": "baselineShift",
	baseprofile: "baseProfile",
	calcmode: "calcMode",
	capheight: "capHeight",
	"cap-height": "capHeight",
	clippath: "clipPath",
	"clip-path": "clipPath",
	clippathunits: "clipPathUnits",
	cliprule: "clipRule",
	"clip-rule": "clipRule",
	colorinterpolation: "colorInterpolation",
	"color-interpolation": "colorInterpolation",
	colorinterpolationfilters: "colorInterpolationFilters",
	"color-interpolation-filters": "colorInterpolationFilters",
	colorprofile: "colorProfile",
	"color-profile": "colorProfile",
	colorrendering: "colorRendering",
	"color-rendering": "colorRendering",
	contentscripttype: "contentScriptType",
	contentstyletype: "contentStyleType",
	diffuseconstant: "diffuseConstant",
	dominantbaseline: "dominantBaseline",
	"dominant-baseline": "dominantBaseline",
	edgemode: "edgeMode",
	enablebackground: "enableBackground",
	"enable-background": "enableBackground",
	externalresourcesrequired: "externalResourcesRequired",
	fillopacity: "fillOpacity",
	"fill-opacity": "fillOpacity",
	fillrule: "fillRule",
	"fill-rule": "fillRule",
	filterres: "filterRes",
	filterunits: "filterUnits",
	floodopacity: "floodOpacity",
	"flood-opacity": "floodOpacity",
	floodcolor: "floodColor",
	"flood-color": "floodColor",
	fontfamily: "fontFamily",
	"font-family": "fontFamily",
	fontsize: "fontSize",
	"font-size": "fontSize",
	fontsizeadjust: "fontSizeAdjust",
	"font-size-adjust": "fontSizeAdjust",
	fontstretch: "fontStretch",
	"font-stretch": "fontStretch",
	fontstyle: "fontStyle",
	"font-style": "fontStyle",
	fontvariant: "fontVariant",
	"font-variant": "fontVariant",
	fontweight: "fontWeight",
	"font-weight": "fontWeight",
	glyphname: "glyphName",
	"glyph-name": "glyphName",
	glyphorientationhorizontal: "glyphOrientationHorizontal",
	"glyph-orientation-horizontal": "glyphOrientationHorizontal",
	glyphorientationvertical: "glyphOrientationVertical",
	"glyph-orientation-vertical": "glyphOrientationVertical",
	glyphref: "glyphRef",
	gradienttransform: "gradientTransform",
	gradientunits: "gradientUnits",
	horizadvx: "horizAdvX",
	"horiz-adv-x": "horizAdvX",
	horizoriginx: "horizOriginX",
	"horiz-origin-x": "horizOriginX",
	imagerendering: "imageRendering",
	"image-rendering": "imageRendering",
	kernelmatrix: "kernelMatrix",
	kernelunitlength: "kernelUnitLength",
	keypoints: "keyPoints",
	keysplines: "keySplines",
	keytimes: "keyTimes",
	lengthadjust: "lengthAdjust",
	letterspacing: "letterSpacing",
	"letter-spacing": "letterSpacing",
	lightingcolor: "lightingColor",
	"lighting-color": "lightingColor",
	limitingconeangle: "limitingConeAngle",
	markerend: "markerEnd",
	"marker-end": "markerEnd",
	markerheight: "markerHeight",
	markermid: "markerMid",
	"marker-mid": "markerMid",
	markerstart: "markerStart",
	"marker-start": "markerStart",
	markerunits: "markerUnits",
	markerwidth: "markerWidth",
	maskcontentunits: "maskContentUnits",
	maskunits: "maskUnits",
	numoctaves: "numOctaves",
	overlineposition: "overlinePosition",
	"overline-position": "overlinePosition",
	overlinethickness: "overlineThickness",
	"overline-thickness": "overlineThickness",
	paintorder: "paintOrder",
	"paint-order": "paintOrder",
	"panose-1": "panose1",
	pathlength: "pathLength",
	patterncontentunits: "patternContentUnits",
	patterntransform: "patternTransform",
	patternunits: "patternUnits",
	pointerevents: "pointerEvents",
	"pointer-events": "pointerEvents",
	pointsatx: "pointsAtX",
	pointsaty: "pointsAtY",
	pointsatz: "pointsAtZ",
	preservealpha: "preserveAlpha",
	preserveaspectratio: "preserveAspectRatio",
	primitiveunits: "primitiveUnits",
	refx: "refX",
	refy: "refY",
	renderingintent: "renderingIntent",
	"rendering-intent": "renderingIntent",
	repeatcount: "repeatCount",
	repeatdur: "repeatDur",
	requiredextensions: "requiredExtensions",
	requiredfeatures: "requiredFeatures",
	shaperendering: "shapeRendering",
	"shape-rendering": "shapeRendering",
	specularconstant: "specularConstant",
	specularexponent: "specularExponent",
	spreadmethod: "spreadMethod",
	startoffset: "startOffset",
	stddeviation: "stdDeviation",
	stitchtiles: "stitchTiles",
	stopcolor: "stopColor",
	"stop-color": "stopColor",
	stopopacity: "stopOpacity",
	"stop-opacity": "stopOpacity",
	strikethroughposition: "strikethroughPosition",
	"strikethrough-position": "strikethroughPosition",
	strikethroughthickness: "strikethroughThickness",
	"strikethrough-thickness": "strikethroughThickness",
	strokedasharray: "strokeDasharray",
	"stroke-dasharray": "strokeDasharray",
	strokedashoffset: "strokeDashoffset",
	"stroke-dashoffset": "strokeDashoffset",
	strokelinecap: "strokeLinecap",
	"stroke-linecap": "strokeLinecap",
	strokelinejoin: "strokeLinejoin",
	"stroke-linejoin": "strokeLinejoin",
	strokemiterlimit: "strokeMiterlimit",
	"stroke-miterlimit": "strokeMiterlimit",
	strokewidth: "strokeWidth",
	"stroke-width": "strokeWidth",
	strokeopacity: "strokeOpacity",
	"stroke-opacity": "strokeOpacity",
	suppresscontenteditablewarning: "suppressContentEditableWarning",
	suppresshydrationwarning: "suppressHydrationWarning",
	surfacescale: "surfaceScale",
	systemlanguage: "systemLanguage",
	tablevalues: "tableValues",
	targetx: "targetX",
	targety: "targetY",
	textanchor: "textAnchor",
	"text-anchor": "textAnchor",
	textdecoration: "textDecoration",
	"text-decoration": "textDecoration",
	textlength: "textLength",
	textrendering: "textRendering",
	"text-rendering": "textRendering",
	underlineposition: "underlinePosition",
	"underline-position": "underlinePosition",
	underlinethickness: "underlineThickness",
	"underline-thickness": "underlineThickness",
	unicodebidi: "unicodeBidi",
	"unicode-bidi": "unicodeBidi",
	unicoderange: "unicodeRange",
	"unicode-range": "unicodeRange",
	unitsperem: "unitsPerEm",
	"units-per-em": "unitsPerEm",
	unselectable: "unselectable",
	valphabetic: "vAlphabetic",
	"v-alphabetic": "vAlphabetic",
	vectoreffect: "vectorEffect",
	"vector-effect": "vectorEffect",
	vertadvy: "vertAdvY",
	"vert-adv-y": "vertAdvY",
	vertoriginx: "vertOriginX",
	"vert-origin-x": "vertOriginX",
	vertoriginy: "vertOriginY",
	"vert-origin-y": "vertOriginY",
	vhanging: "vHanging",
	"v-hanging": "vHanging",
	videographic: "vIdeographic",
	"v-ideographic": "vIdeographic",
	viewbox: "viewBox",
	viewtarget: "viewTarget",
	vmathematical: "vMathematical",
	"v-mathematical": "vMathematical",
	wordspacing: "wordSpacing",
	"word-spacing": "wordSpacing",
	writingmode: "writingMode",
	"writing-mode": "writingMode",
	xchannelselector: "xChannelSelector",
	xheight: "xHeight",
	"x-height": "xHeight",
	xlinkactuate: "xlinkActuate",
	"xlink:actuate": "xlinkActuate",
	xlinkarcrole: "xlinkArcrole",
	"xlink:arcrole": "xlinkArcrole",
	xlinkhref: "xlinkHref",
	"xlink:href": "xlinkHref",
	xlinkrole: "xlinkRole",
	"xlink:role": "xlinkRole",
	xlinkshow: "xlinkShow",
	"xlink:show": "xlinkShow",
	xlinktitle: "xlinkTitle",
	"xlink:title": "xlinkTitle",
	xlinktype: "xlinkType",
	"xlink:type": "xlinkType",
	xmlbase: "xmlBase",
	"xml:base": "xmlBase",
	xmllang: "xmlLang",
	"xml:lang": "xmlLang",
	"xml:space": "xmlSpace",
	xmlnsxlink: "xmlnsXlink",
	"xmlns:xlink": "xmlnsXlink",
	xmlspace: "xmlSpace",
	ychannelselector: "yChannelSelector",
	zoomandpan: "zoomAndPan",
	onblur: "onBlur",
	onchange: "onChange",
	onclick: "onClick",
	oncontextmenu: "onContextMenu",
	ondoubleclick: "onDoubleClick",
	ondrag: "onDrag",
	ondragend: "onDragEnd",
	ondragenter: "onDragEnter",
	ondragexit: "onDragExit",
	ondragleave: "onDragLeave",
	ondragover: "onDragOver",
	ondragstart: "onDragStart",
	ondrop: "onDrop",
	onerror: "onError",
	onfocus: "onFocus",
	oninput: "onInput",
	oninvalid: "onInvalid",
	onkeydown: "onKeyDown",
	onkeypress: "onKeyPress",
	onkeyup: "onKeyUp",
	onload: "onLoad",
	onmousedown: "onMouseDown",
	onmouseenter: "onMouseEnter",
	onmouseleave: "onMouseLeave",
	onmousemove: "onMouseMove",
	onmouseout: "onMouseOut",
	onmouseover: "onMouseOver",
	onmouseup: "onMouseUp",
	onscroll: "onScroll",
	onsubmit: "onSubmit",
	ontouchcancel: "onTouchCancel",
	ontouchend: "onTouchEnd",
	ontouchmove: "onTouchMove",
	ontouchstart: "onTouchStart",
	onwheel: "onWheel"
};
function N(e, t) {
	let { key: n, level: r, ...i } = t;
	switch (e.nodeType) {
		case 1: return c(re(e.nodeName), ne(e, n), P(e.childNodes, r, i));
		case 3: {
			let t = e.nodeValue?.toString() ?? "";
			if (!i.allowWhiteSpaces && /^\s+$/.test(t) && !/[\u00A0\u202F]/.test(t)) return null;
			if (!e.parentNode) return t;
			let n = e.parentNode.nodeName.toLowerCase();
			return j.includes(n) ? (/\S/.test(t) && console.warn(`A textNode is not allowed inside '${n}'. Your text "${t}" will be ignored`), null) : t;
		}
		case 8: return null;
		case 11: return P(e.childNodes, r, t);
		default: return null;
	}
}
function ne(e, t) {
	let n = { key: t };
	if (e instanceof Element) {
		let t = e.getAttribute("class");
		t && (n.className = t), [...e.attributes].forEach((e) => {
			switch (e.name) {
				case "class": break;
				case "style":
					n[e.name] = k(e.value);
					break;
				case "allowfullscreen":
				case "allowpaymentrequest":
				case "async":
				case "autofocus":
				case "autoplay":
				case "checked":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "formnovalidate":
				case "hidden":
				case "ismap":
				case "itemscope":
				case "loop":
				case "multiple":
				case "muted":
				case "nomodule":
				case "novalidate":
				case "open":
				case "readonly":
				case "required":
				case "reversed":
				case "selected":
				case "typemustmatch":
					n[M[e.name] || e.name] = !0;
					break;
				default: n[M[e.name] || e.name] = e.value;
			}
		});
	}
	return n;
}
function P(e, t, n) {
	let r = [...e].map((e, r) => I(e, {
		...n,
		index: r,
		level: t + 1
	})).filter(Boolean);
	return r.length ? r : null;
}
function re(e) {
	return /[a-z]+[A-Z]+[a-z]+/.test(e) ? e : e.toLowerCase();
}
function F(e, t = {}) {
	return typeof e == "string" ? L(e, t) : e instanceof Node ? I(e, t) : null;
}
function I(e, t = {}) {
	if (!e || !(e instanceof Node)) return null;
	let { actions: n = [], index: r = 0, level: i = 0, randomKey: a } = t, o = e, s = `${i}-${r}`, c = [];
	return a && i === 0 && (s = `${A()}-${s}`), Array.isArray(n) && n.forEach((t) => {
		t.condition(o, s, i) && (typeof t.pre == "function" && (o = t.pre(o, s, i), o instanceof Node || (o = e, process.env.NODE_ENV !== "production" && console.warn("The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)"))), typeof t.post == "function" && c.push(t.post(o, s, i)));
	}), c.length ? c : N(o, {
		key: s,
		level: i,
		...t
	});
}
function L(e, t = {}) {
	if (!e || typeof e != "string") return null;
	let { includeAllNodes: n = !1, nodeOnly: r = !1, selector: i = "body > *", type: a = "text/html" } = t;
	try {
		let o = new DOMParser().parseFromString(e, a);
		if (n) {
			let { childNodes: e } = o.body;
			return r ? e : [...e].map((e) => I(e, t));
		}
		let s = o.querySelector(i) || o.body.childNodes[0];
		if (!(s instanceof Node)) throw TypeError("Error parsing input");
		return r ? s : I(s, t);
	} catch (e) {
		process.env.NODE_ENV !== "production" && console.error(e);
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/react-inlinesvg@4.2.0_react@19.2.4/node_modules/react-inlinesvg/dist/index.mjs
m();
var ie = Object.defineProperty, ae = (e, t, n) => t in e ? ie(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, R = (e, t, n) => ae(e, typeof t == "symbol" ? t : t + "", n), z = "react-inlinesvg", oe = 10, B = {
	IDLE: "idle",
	LOADING: "loading",
	LOADED: "loaded",
	FAILED: "failed",
	READY: "ready",
	UNSUPPORTED: "unsupported"
};
function se(e) {
	return e[Math.floor(Math.random() * e.length)];
}
function V() {
	return !!(typeof window < "u" && window.document?.createElement);
}
function H() {
	return le() && typeof window < "u" && window !== null;
}
function U(e, ...t) {
	let n = {};
	for (let r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
	return n;
}
function W(e) {
	let t = "";
	for (let n = 0; n < e; n++) t += se("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
	return t;
}
async function G(e, t) {
	let n = await fetch(e, t), [r] = (n.headers.get("content-type") ?? "").split(/ ?; ?/);
	if (n.status > 299) throw Error("Not found");
	if (!["image/svg+xml", "text/plain"].some((e) => r.includes(e))) throw Error(`Content type isn't valid: ${r}`);
	return n.text();
}
function ce(e = 1) {
	return new Promise((t) => {
		setTimeout(t, e * 1e3);
	});
}
function le() {
	if (!document) return !1;
	let e = document.createElement("div");
	e.innerHTML = "<svg />";
	let t = e.firstChild;
	return !!t && t.namespaceURI === "http://www.w3.org/2000/svg";
}
var ue = class {
	constructor() {
		R(this, "cacheApi"), R(this, "cacheStore"), R(this, "subscribers", []), R(this, "isReady", !1), this.cacheStore = /* @__PURE__ */ new Map();
		let e = z, t = !1;
		V() && (e = window.REACT_INLINESVG_CACHE_NAME ?? z, t = !!window.REACT_INLINESVG_PERSISTENT_CACHE && "caches" in window), t ? caches.open(e).then((e) => {
			this.cacheApi = e;
		}).catch((e) => {
			console.error(`Failed to open cache: ${e.message}`), this.cacheApi = void 0;
		}).finally(() => {
			this.isReady = !0;
			let e = [...this.subscribers];
			this.subscribers.length = 0, e.forEach((e) => {
				try {
					e();
				} catch (e) {
					console.error(`Error in CacheStore subscriber callback: ${e.message}`);
				}
			});
		}) : this.isReady = !0;
	}
	onReady(e) {
		this.isReady ? e() : this.subscribers.push(e);
	}
	async get(e, t) {
		return await (this.cacheApi ? this.fetchAndAddToPersistentCache(e, t) : this.fetchAndAddToInternalCache(e, t)), this.cacheStore.get(e)?.content ?? "";
	}
	set(e, t) {
		this.cacheStore.set(e, t);
	}
	isCached(e) {
		return this.cacheStore.get(e)?.status === B.LOADED;
	}
	async fetchAndAddToInternalCache(e, t) {
		let n = this.cacheStore.get(e);
		if (n?.status === B.LOADING) {
			await this.handleLoading(e, async () => {
				this.cacheStore.set(e, {
					content: "",
					status: B.IDLE
				}), await this.fetchAndAddToInternalCache(e, t);
			});
			return;
		}
		if (!n?.content) {
			this.cacheStore.set(e, {
				content: "",
				status: B.LOADING
			});
			try {
				let n = await G(e, t);
				this.cacheStore.set(e, {
					content: n,
					status: B.LOADED
				});
			} catch (t) {
				throw this.cacheStore.set(e, {
					content: "",
					status: B.FAILED
				}), t;
			}
		}
	}
	async fetchAndAddToPersistentCache(e, t) {
		let n = this.cacheStore.get(e);
		if (n?.status === B.LOADED) return;
		if (n?.status === B.LOADING) {
			await this.handleLoading(e, async () => {
				this.cacheStore.set(e, {
					content: "",
					status: B.IDLE
				}), await this.fetchAndAddToPersistentCache(e, t);
			});
			return;
		}
		this.cacheStore.set(e, {
			content: "",
			status: B.LOADING
		});
		let r = await this.cacheApi?.match(e);
		if (r) {
			let t = await r.text();
			this.cacheStore.set(e, {
				content: t,
				status: B.LOADED
			});
			return;
		}
		try {
			await this.cacheApi?.add(new Request(e, t));
			let n = await (await this.cacheApi?.match(e))?.text() ?? "";
			this.cacheStore.set(e, {
				content: n,
				status: B.LOADED
			});
		} catch (t) {
			throw this.cacheStore.set(e, {
				content: "",
				status: B.FAILED
			}), t;
		}
	}
	async handleLoading(e, t) {
		for (let t = 0; t < oe; t++) {
			if (this.cacheStore.get(e)?.status !== B.LOADING) return;
			await ce(.1);
		}
		await t();
	}
	keys() {
		return [...this.cacheStore.keys()];
	}
	data() {
		return [...this.cacheStore.entries()].map(([e, t]) => ({ [e]: t }));
	}
	async delete(e) {
		this.cacheApi && await this.cacheApi.delete(e), this.cacheStore.delete(e);
	}
	async clear() {
		if (this.cacheApi) {
			let e = await this.cacheApi.keys();
			await Promise.allSettled(e.map((e) => this.cacheApi.delete(e)));
		}
		this.cacheStore.clear();
	}
};
function K(e) {
	let t = p(void 0);
	return o(() => {
		t.current = e;
	}), t.current;
}
function de(e) {
	let { baseURL: t, content: n, description: r, handleError: i, hash: a, preProcessor: o, title: s, uniquifyIDs: c = !1 } = e;
	try {
		let e = F(fe(n, o), { nodeOnly: !0 });
		if (!e || !(e instanceof SVGSVGElement)) throw Error("Could not convert the src to a DOM Node");
		let i = q(e, {
			baseURL: t,
			hash: a,
			uniquifyIDs: c
		});
		if (r) {
			let e = i.querySelector("desc");
			e?.parentNode && e.parentNode.removeChild(e);
			let t = document.createElementNS("http://www.w3.org/2000/svg", "desc");
			t.innerHTML = r, i.prepend(t);
		}
		if (s !== void 0) {
			let e = i.querySelector("title");
			if (e?.parentNode && e.parentNode.removeChild(e), s) {
				let e = document.createElementNS("http://www.w3.org/2000/svg", "title");
				e.innerHTML = s, i.prepend(e);
			}
		}
		return i;
	} catch (e) {
		return i(e);
	}
}
function fe(e, t) {
	return t ? t(e) : e;
}
function q(e, t) {
	let { baseURL: n = "", hash: r, uniquifyIDs: i } = t, a = [
		"id",
		"href",
		"xlink:href",
		"xlink:role",
		"xlink:arcrole"
	], o = ["href", "xlink:href"], s = (e, t) => o.includes(e) && (t ? !t.includes("#") : !1);
	return i && [...e.children].forEach((e) => {
		if (e.attributes?.length) {
			let t = Object.values(e.attributes).map((e) => {
				let t = e, i = /url\((.*?)\)/.exec(e.value);
				return i?.[1] && (t.value = e.value.replace(i[0], `url(${n}${i[1]}__${r})`)), t;
			});
			a.forEach((e) => {
				let n = t.find((t) => t.name === e);
				n && !s(e, n.value) && (n.value = `${n.value}__${r}`);
			});
		}
		return e.children.length ? q(e, t) : e;
	}), e;
}
var J;
function pe(e) {
	let { cacheRequests: t = !0, children: n = null, description: r, fetchOptions: a, innerRef: s, loader: c = null, onError: l, onLoad: u, src: d, title: f, uniqueHash: m } = e, [h, _] = i((e, t) => ({
		...e,
		...t
	}), {
		content: "",
		element: null,
		isCached: t && J.isCached(e.src),
		status: B.IDLE
	}), { content: v, element: y, isCached: b, status: x } = h, S = K(e), C = K(h), w = p(m ?? W(8)), T = p(!1), E = p(!1), D = g((e) => {
		T.current && (_({ status: e.message === "Browser does not support SVG" ? B.UNSUPPORTED : B.FAILED }), l?.(e));
	}, [l]), O = g((e, t = !1) => {
		T.current && _({
			content: e,
			isCached: t,
			status: B.LOADED
		});
	}, []), k = g(async () => {
		O(await G(d, a));
	}, [
		a,
		O,
		d
	]), A = g(() => {
		try {
			let t = F(de({
				...e,
				handleError: D,
				hash: w.current,
				content: v
			}));
			if (!t || !ee(t)) throw Error("Could not convert the src to a React element");
			_({
				element: t,
				status: B.READY
			});
		} catch (e) {
			D(e);
		}
	}, [
		v,
		D,
		e
	]), j = g(async () => {
		let e = /^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(d), n;
		if (e ? n = e[1] ? window.atob(e[2]) : decodeURIComponent(e[2]) : d.includes("<svg") && (n = d), n) {
			O(n);
			return;
		}
		try {
			t ? O(await J.get(d, a), !0) : await k();
		} catch (e) {
			D(e);
		}
	}, [
		t,
		k,
		a,
		D,
		O,
		d
	]), M = g(async () => {
		T.current && _({
			content: "",
			element: null,
			isCached: !1,
			status: B.LOADING
		});
	}, []);
	o(() => {
		if (T.current = !0, !(!V() || E.current)) {
			try {
				if (x === B.IDLE) {
					if (!H()) throw Error("Browser does not support SVG");
					if (!d) throw Error("Missing src");
					M();
				}
			} catch (e) {
				D(e);
			}
			return E.current = !0, () => {
				T.current = !1;
			};
		}
	}, []), o(() => {
		if (!(!V() || !S) && S.src !== d) {
			if (!d) {
				D(/* @__PURE__ */ Error("Missing src"));
				return;
			}
			M();
		}
	}, [
		D,
		M,
		S,
		d
	]), o(() => {
		x === B.LOADED && A();
	}, [x, A]), o(() => {
		!V() || !S || S.src !== d || (S.title !== f || S.description !== r) && A();
	}, [
		r,
		A,
		S,
		d,
		f
	]), o(() => {
		if (C) switch (x) {
			case B.LOADING:
				C.status !== B.LOADING && j();
				break;
			case B.LOADED:
				C.status !== B.LOADED && A();
				break;
			case B.READY:
				C.status !== B.READY && u?.(d, b);
				break;
		}
	}, [
		j,
		A,
		b,
		u,
		C,
		d,
		x
	]);
	let N = U(e, "baseURL", "cacheRequests", "children", "description", "fetchOptions", "innerRef", "loader", "onError", "onLoad", "preProcessor", "src", "title", "uniqueHash", "uniquifyIDs");
	return V() ? y ? te(y, {
		ref: s,
		...N
	}) : [B.UNSUPPORTED, B.FAILED].includes(x) ? n : c : c;
}
function me(e) {
	J ||= new ue();
	let { loader: t } = e, [n, r] = _(J.isReady);
	return o(() => {
		n || J.onReady(() => {
			r(!0);
		});
	}, [n]), n ? /* @__PURE__ */ d.createElement(pe, { ...e }) : t;
}
//#endregion
//#region src/components/ui/country-select.tsx
m();
var Y = a(null);
function he({ children: e }) {
	let [t, n] = _(""), [r, i] = _([]), a = (e) => i((t) => t.find((t) => t.id === e.id) ? t : [...t, e]), o = (e) => i((t) => t.filter((t) => t.id !== e)), s = v(() => t ? new Set(r.filter((e) => e.value.toLowerCase().includes(t.toLowerCase())).map((e) => e.id)) : new Set(r.map((e) => e.id)), [r, t]), c = (e) => s.has(e), l = s.size;
	return /* @__PURE__ */ h(Y.Provider, {
		value: {
			query: t,
			setQuery: n,
			total: l,
			registerItem: a,
			unregisterItem: o,
			isVisible: c
		},
		children: /* @__PURE__ */ h("div", {
			className: "space-y-4 h-full",
			children: e
		})
	});
}
function X({ headline: e, children: t }) {
	let n = u(Y);
	if (!n) throw Error("Must be used inside CountrySelectRoot");
	return n.query ? t : /* @__PURE__ */ h("div", {
		className: "w-full space-y-6",
		children: [/* @__PURE__ */ h("p", {
			className: "text-h5",
			children: e
		}), t]
	});
}
function Z(e) {
	let t = l(), n = u(Y);
	if (!n) throw Error("Must be used inside CountrySelectRoot");
	return o(() => (n.registerItem({
		id: t,
		value: e.country + e.language
	}), () => n.unregisterItem(t)), [e.id, e.country]), n.isVisible(t) ? /* @__PURE__ */ h("li", { children: /* @__PURE__ */ h(Q, { ...e }) }, t) : null;
}
function ge({ children: e }) {
	let t = u(Y);
	if (!t) throw Error("Must be used inside CountrySelectRoot");
	let { t: n } = y();
	return /* @__PURE__ */ h("ul", {
		className: "flex h-full flex-col gap-6",
		children: [t.query && t.total === 0 ? /* @__PURE__ */ h("div", {
			className: "flex flex-col gap-6 items-center justify-center size-full text-gray-1",
			children: [/* @__PURE__ */ h(s, { className: "size-55 text-gray-15" }), /* @__PURE__ */ h("div", { children: [/* @__PURE__ */ h("p", { children: n("No results for '{{query}}'.", { query: t.query }) }), /* @__PURE__ */ h("p", { children: n("Try another spelling.") })] })]
		}) : null, e]
	});
}
function _e() {
	let e = u(Y);
	if (!e) throw Error("Must be used inside CountrySelectRoot");
	let { t } = y();
	return /* @__PURE__ */ h("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ h(E, {
			placeholder: t("Search..."),
			value: e.query,
			onChange: (t) => e.setQuery(t.target.value)
		}), e.query && e.total !== 0 ? /* @__PURE__ */ h("span", { children: t("{{count}} results", { count: e.total }) }) : null]
	});
}
function Q({ className: e, selected: t, country: n, countryCode: i, language: a, thumbnail: o, ...s }) {
	return /* @__PURE__ */ h("a", {
		"data-slot": "country-select-item",
		className: r("w-full relative flex gap-3 pl-1 pr-4 cursor-default outline-hidden select-none hover:bg-gray-4 active:bg-gray-35 focus-visible:bg-gray-4", e),
		...s,
		children: [
			/* @__PURE__ */ h(me, {
				src: o.toLowerCase(),
				width: 40,
				height: 40,
				title: "React"
			}),
			/* @__PURE__ */ h("div", {
				className: "flex items-start flex-col pt-2 w-full",
				children: [/* @__PURE__ */ h("p", {
					className: "leading-label",
					children: n
				}), /* @__PURE__ */ h("p", {
					className: "text-sm leading-label",
					children: a
				})]
			}),
			t ? /* @__PURE__ */ h("div", {
				className: "flex items-center",
				children: /* @__PURE__ */ h(f, { className: "size-6" })
			}) : null
		]
	});
}
//#endregion
//#region src/features/navigation/components/country-selection-sheet.tsx
function $({ renderTrigger: r }) {
	let [, i] = b("__conti-preferred-locale", null), a = new URL(location.href), o = a.pathname.split("/")[1], s = a.pathname.split("/")[2], c = a.pathname.split("/").slice(3).join("/"), { t: l } = y(), { data: u } = D("/config/locales.json", O), d = t(u, "group"), f = u?.find((t) => e(t.countryCode, o) && e(t.localeCode, s));
	return d ? /* @__PURE__ */ h(T, { children: [/* @__PURE__ */ h(x, {
		className: "contents",
		children: r ? r(f?.country || "Global", s) : null
	}), /* @__PURE__ */ h(C, {
		className: "w-screen md:w-1/3 flex flex-col gap-6 p-6 md:p-10 overflow-y-auto",
		children: [/* @__PURE__ */ h(w, { children: /* @__PURE__ */ h(S, {
			className: "text-left mt-25 md:mr-30 md:mt-0",
			children: l("In which Country and Language do you want to navigate?")
		}) }), /* @__PURE__ */ h(he, { children: [/* @__PURE__ */ h(_e, {}), /* @__PURE__ */ h(ge, { children: [/* @__PURE__ */ h(X, {
			headline: l("Your current selection:"),
			children: /* @__PURE__ */ h(Z, {
				countryCode: o.toUpperCase(),
				country: f?.country || "Global",
				language: f?.locale || "English",
				selected: !0,
				thumbnail: f?.thumbnail || "",
				href: `/${o}/${s}${c}`
			})
		}), n(d).map(([t, n]) => /* @__PURE__ */ h(X, {
			headline: t + ":",
			children: n.map((t) => /* @__PURE__ */ h(Z, {
				onClick: () => i(`${t.countryCode}/${t.localeCode}`.toLowerCase()),
				selected: e(t.countryCode, o) && e(t.localeCode, s),
				href: `/${t.countryCode.toLowerCase()}/${t.localeCode}${c ? `/${c}` : ""}`,
				id: t.countryCode + "-" + t.localeCode,
				country: t.country,
				countryCode: t.countryCode,
				language: t.locale,
				thumbnail: t.thumbnail
			}))
		}, t))] })] })]
	})] }) : null;
}
//#endregion
export { $ as CountrySelectionSheet, $ as default };

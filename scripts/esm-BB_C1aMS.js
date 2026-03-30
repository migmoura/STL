import { o as e, t } from "./rolldown-runtime-Ctdjzu3q.js";
import { dt as n, pt as r } from "./react-DLNUXPF9.js";
//#region ../../node_modules/.pnpm/interweave@13.1.1_react@19.2.4/node_modules/interweave/esm/bundle-7aab7250.js
r();
var i = {
	a: {
		content: 9,
		self: !1,
		type: 105
	},
	address: {
		invalid: [
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"address",
			"article",
			"aside",
			"section",
			"div",
			"header",
			"footer"
		],
		self: !1
	},
	audio: { children: ["track", "source"] },
	br: {
		type: 9,
		void: !0
	},
	body: { content: 127 },
	button: {
		content: 8,
		type: 105
	},
	caption: {
		content: 1,
		parent: ["table"]
	},
	col: {
		parent: ["colgroup"],
		void: !0
	},
	colgroup: {
		children: ["col"],
		parent: ["table"]
	},
	details: {
		children: ["summary"],
		type: 97
	},
	dd: {
		content: 1,
		parent: ["dl"]
	},
	dl: {
		children: ["dt", "dd"],
		type: 1
	},
	dt: {
		content: 1,
		invalid: ["footer", "header"],
		parent: ["dl"]
	},
	figcaption: {
		content: 1,
		parent: ["figure"]
	},
	footer: { invalid: ["footer", "header"] },
	header: { invalid: ["footer", "header"] },
	hr: {
		type: 1,
		void: !0
	},
	img: { void: !0 },
	li: {
		content: 1,
		parent: [
			"ul",
			"ol",
			"menu"
		]
	},
	main: { self: !1 },
	ol: {
		children: ["li"],
		type: 1
	},
	picture: {
		children: ["source", "img"],
		type: 25
	},
	rb: { parent: ["ruby", "rtc"] },
	rp: { parent: ["ruby", "rtc"] },
	rt: {
		content: 8,
		parent: ["ruby", "rtc"]
	},
	rtc: {
		content: 8,
		parent: ["ruby"]
	},
	ruby: { children: [
		"rb",
		"rp",
		"rt",
		"rtc"
	] },
	source: {
		parent: [
			"audio",
			"video",
			"picture"
		],
		void: !0
	},
	summary: {
		content: 8,
		parent: ["details"]
	},
	table: {
		children: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		],
		type: 1
	},
	tbody: {
		parent: ["table"],
		children: ["tr"]
	},
	td: {
		content: 1,
		parent: ["tr"]
	},
	tfoot: {
		parent: ["table"],
		children: ["tr"]
	},
	th: {
		content: 1,
		parent: ["tr"]
	},
	thead: {
		parent: ["table"],
		children: ["tr"]
	},
	tr: {
		parent: [
			"table",
			"tbody",
			"thead",
			"tfoot"
		],
		children: ["th", "td"]
	},
	track: {
		parent: ["audio", "video"],
		void: !0
	},
	ul: {
		children: ["li"],
		type: 1
	},
	video: { children: ["track", "source"] },
	wbr: {
		type: 9,
		void: !0
	}
};
function a(e) {
	return (t) => {
		i[t] = {
			...e,
			...i[t]
		};
	};
}
[
	"address",
	"main",
	"div",
	"figure",
	"p",
	"pre"
].forEach(a({
	content: 1,
	type: 65
})), [
	"abbr",
	"b",
	"bdi",
	"bdo",
	"cite",
	"code",
	"data",
	"dfn",
	"em",
	"i",
	"kbd",
	"mark",
	"q",
	"ruby",
	"samp",
	"strong",
	"sub",
	"sup",
	"time",
	"u",
	"var"
].forEach(a({
	content: 8,
	type: 73
})), ["p", "pre"].forEach(a({
	content: 8,
	type: 65
})), [
	"s",
	"small",
	"span",
	"del",
	"ins"
].forEach(a({
	content: 8,
	type: 9
})), [
	"article",
	"aside",
	"footer",
	"header",
	"nav",
	"section",
	"blockquote"
].forEach(a({
	content: 1,
	type: 67
})), [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
].forEach(a({
	content: 8,
	type: 69
})), [
	"audio",
	"canvas",
	"iframe",
	"img",
	"video"
].forEach(a({ type: 89 }));
var o = Object.freeze(i), s = [
	"applet",
	"base",
	"body",
	"command",
	"embed",
	"frame",
	"frameset",
	"head",
	"html",
	"link",
	"meta",
	"noscript",
	"object",
	"script",
	"style",
	"title"
], c = Object.keys(o).filter((e) => e !== "canvas" && e !== "iframe"), l = Object.freeze({
	alt: 1,
	cite: 1,
	class: 1,
	colspan: 3,
	controls: 4,
	datetime: 1,
	default: 4,
	disabled: 4,
	dir: 1,
	height: 1,
	href: 1,
	id: 1,
	kind: 1,
	label: 1,
	lang: 1,
	loading: 1,
	loop: 4,
	media: 1,
	muted: 4,
	poster: 1,
	rel: 1,
	role: 1,
	rowspan: 3,
	scope: 1,
	sizes: 1,
	span: 3,
	start: 3,
	style: 5,
	src: 1,
	srclang: 1,
	srcset: 1,
	tabindex: 1,
	target: 1,
	title: 1,
	type: 1,
	width: 1
}), u = Object.freeze({
	class: "className",
	colspan: "colSpan",
	datetime: "dateTime",
	rowspan: "rowSpan",
	srclang: "srcLang",
	srcset: "srcSet",
	tabindex: "tabIndex"
});
function d() {
	return d = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, d.apply(this, arguments);
}
function f({ attributes: e = {}, className: t, children: r = null, selfClose: i = !1, tagName: a }) {
	let o = a;
	return i ? /* @__PURE__ */ n.createElement(o, d({ className: t }, e)) : /* @__PURE__ */ n.createElement(o, d({ className: t }, e), r);
}
var p = class {
	attribute(e, t) {
		return t;
	}
	node(e, t) {
		return t;
	}
}, m = /* @__PURE__ */ t(((e, t) => {
	var n = /["'&<>]/;
	t.exports = r;
	function r(e) {
		var t = "" + e, r = n.exec(t);
		if (!r) return t;
		var i, a = "", o = 0, s = 0;
		for (o = r.index; o < t.length; o++) {
			switch (t.charCodeAt(o)) {
				case 34:
					i = "&quot;";
					break;
				case 38:
					i = "&amp;";
					break;
				case 39:
					i = "&#39;";
					break;
				case 60:
					i = "&lt;";
					break;
				case 62:
					i = "&gt;";
					break;
				default: continue;
			}
			s !== o && (a += t.substring(s, o)), s = o + 1, a += i;
		}
		return s === o ? a : a + t.substring(s, o);
	}
}));
//#endregion
//#region ../../node_modules/.pnpm/interweave@13.1.1_react@19.2.4/node_modules/interweave/esm/index.js
r();
var h = /* @__PURE__ */ e(m());
function g(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var _ = /(url|image|image-set)\(/i, v = class extends p {
	attribute(e, t) {
		return e === "style" && Object.keys(t).forEach((e) => {
			String(t[e]).match(_) && delete t[e];
		}), t;
	}
}, y = 1, b = 3, x = /^<(!doctype|(html|head|body)(\s|>))/i, S = /^(aria-|data-|\w+:)/iu, C = /{{{(\w+)\/?}}}/;
function w() {
	if (!(typeof window > "u" || typeof document > "u")) return document.implementation.createHTMLDocument("Interweave");
}
var T = class {
	constructor(e, t = {}, n = [], r = []) {
		if (g(this, "allowed", void 0), g(this, "banned", void 0), g(this, "blocked", void 0), g(this, "container", void 0), g(this, "content", []), g(this, "props", void 0), g(this, "matchers", void 0), g(this, "filters", void 0), g(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string") throw TypeError("Interweave parser requires a valid string.");
		this.props = t, this.matchers = n, this.filters = [...r, new v()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set(t.allowList ?? c), this.banned = new Set(s), this.blocked = new Set(t.blockList);
	}
	applyAttributeFilters(e, t) {
		return this.filters.reduce((t, n) => t !== null && typeof n.attribute == "function" ? n.attribute(e, t) : t, t);
	}
	applyNodeFilters(e, t) {
		return this.filters.reduce((t, n) => t !== null && typeof n.node == "function" ? n.node(e, t) : t, t);
	}
	applyMatchers(e, t) {
		let n = {}, { props: r } = this, i = e, a = 0, o = null;
		return this.matchers.forEach((e) => {
			let s = e.asTag().toLowerCase(), c = this.getTagConfig(s);
			if (r[e.inverseName] || !this.isTagAllowed(s) || !this.canRenderChild(t, c)) return;
			let l = "";
			for (; i && (o = e.match(i));) {
				let { index: t, length: s, match: c, valid: u, void: d, ...f } = o, p = e.propName + String(a);
				t > 0 && (l += i.slice(0, t)), u ? (l += d ? `{{{${p}/}}}` : `{{{${p}}}}${c}{{{/${p}}}}`, this.keyIndex += 1, a += 1, n[p] = {
					children: c,
					matcher: e,
					props: {
						...r,
						...f,
						key: this.keyIndex
					}
				}) : l += c, e.greedy ? (i = l + i.slice(t + s), l = "") : i = i.slice(t + (s || c.length));
			}
			e.greedy || (i = l + i);
		}), a === 0 ? e : this.replaceTokens(i, n);
	}
	canRenderChild(e, t) {
		return !e.tagName || !t.tagName || e.void ? !1 : e.children.length > 0 ? e.children.includes(t.tagName) : e.invalid.length > 0 && e.invalid.includes(t.tagName) ? !1 : t.parent.length > 0 ? t.parent.includes(e.tagName) : !e.self && e.tagName === t.tagName ? !1 : !!(e && e.content & t.type);
	}
	convertLineBreaks(e) {
		let { noHtml: t, disableLineBreaks: n } = this.props;
		if (t || n || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi)) return e;
		let r = e.replace(/\r\n/g, "\n");
		return r = r.replace(/\n{3,}/g, "\n\n\n"), r = r.replace(/\n/g, "<br/>"), r;
	}
	createContainer(e) {
		let t = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || w)();
		if (!t) return;
		let n = this.props.containerTagName ?? "body", r = n === "body" || n === "fragment" ? t.body : t.createElement(n);
		if (e.match(x)) {
			if (process.env.NODE_ENV !== "production") throw Error("HTML documents as Interweave content are not supported.");
		} else r.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? (0, h.default)(e) : e);
		return r;
	}
	extractAttributes(e) {
		let { allowAttributes: t } = this.props, n = {}, r = 0;
		return e.nodeType !== y || !e.attributes || ([...e.attributes].forEach((i) => {
			let { name: a, value: o } = i, s = a.toLowerCase(), c = l[s] || l[a];
			if (!this.isSafe(e) || !s.match(S) && (!t && (!c || c === 2) || s.startsWith("on") || o.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i))) return;
			let d = s === "style" ? this.extractStyleAttribute(e) : o;
			c === 4 ? d = !0 : c === 3 ? d = Number.parseFloat(String(d)) : c !== 5 && (d = String(d)), n[u[s] || s] = this.applyAttributeFilters(s, d), r += 1;
		}), r === 0) ? null : n;
	}
	extractStyleAttribute(e) {
		let t = {};
		return Array.from(e.style).forEach((n) => {
			let r = e.style[n];
			(typeof r == "string" || typeof r == "number") && (t[n.replace(/-([a-z])/g, (e, t) => String(t).toUpperCase())] = r);
		}), t;
	}
	getTagConfig(e) {
		let t = {
			children: [],
			content: 0,
			invalid: [],
			parent: [],
			self: !0,
			tagName: "",
			type: 0,
			void: !1
		};
		return o[e] ? {
			...t,
			...o[e],
			tagName: e
		} : t;
	}
	isSafe(e) {
		if (typeof HTMLAnchorElement < "u" && e instanceof HTMLAnchorElement) {
			let t = e.getAttribute("href");
			if (t != null && t.startsWith("#")) return !0;
			let n = e.protocol.toLowerCase();
			return n === ":" || n === "http:" || n === "https:" || n === "mailto:" || n === "tel:";
		}
		return !0;
	}
	isTagAllowed(e) {
		return this.banned.has(e) || this.blocked.has(e) ? !1 : this.props.allowElements || this.allowed.has(e);
	}
	parse() {
		return this.container ? this.parseNode(this.container, this.getTagConfig(this.container.nodeName.toLowerCase())) : [];
	}
	parseNode(e, t) {
		let { noHtml: r, noHtmlExceptMatchers: i, allowElements: a, transform: o, transformOnlyAllowList: s } = this.props, c = [], l = "";
		return [...e.childNodes].forEach((e) => {
			if (e.nodeType === y) {
				let u = e.nodeName.toLowerCase(), d = this.getTagConfig(u);
				l &&= (c.push(l), "");
				let p = this.applyNodeFilters(u, e);
				if (!p) return;
				let m;
				if (o && !(s && !this.isTagAllowed(u))) {
					this.keyIndex += 1;
					let e = this.keyIndex;
					m = this.parseNode(p, d);
					let t = o(p, m, d);
					if (t === null) return;
					if (t !== void 0) {
						c.push(/* @__PURE__ */ n.cloneElement(t, { key: e }));
						return;
					}
					this.keyIndex = e - 1;
				}
				if (this.banned.has(u)) return;
				if (!(r || i && u !== "br") && this.isTagAllowed(u) && (a || this.canRenderChild(t, d))) {
					this.keyIndex += 1;
					let e = this.extractAttributes(p), t = { tagName: u };
					e && (t.attributes = e), d.void && (t.selfClose = d.void), c.push(/* @__PURE__ */ n.createElement(f, {
						...t,
						key: this.keyIndex
					}, m ?? this.parseNode(p, d)));
				} else c = [...c, ...this.parseNode(p, d.tagName ? d : t)];
			} else if (e.nodeType === b) {
				let n = r && !i ? e.textContent : this.applyMatchers(e.textContent || "", t);
				Array.isArray(n) ? c = [...c, ...n] : l += n;
			}
		}), l && c.push(l), c;
	}
	replaceTokens(e, t) {
		if (!e.includes("{{{")) return e;
		let n = [], r = e, i = null;
		for (; i = r.match(C);) {
			let [e, a] = i, o = i.index, s = e.includes("/");
			if (process.env.NODE_ENV !== "production" && !t[a]) throw Error(`Token "${a}" found but no matching element to replace with.`);
			o > 0 && (n.push(r.slice(0, o)), r = r.slice(o));
			let { children: c, matcher: l, props: u } = t[a], d;
			if (s) d = e.length, n.push(l.createElement(c, u));
			else {
				let i = r.match(RegExp(`{{{/${a}}}}`));
				if (process.env.NODE_ENV !== "production" && !i) throw Error(`Closing token missing for interpolated element "${a}".`);
				d = i.index + i[0].length, n.push(l.createElement(this.replaceTokens(r.slice(e.length, i.index), t), u));
			}
			r = r.slice(d);
		}
		return r.length > 0 && n.push(r), n.length === 0 ? "" : n.length === 1 && typeof n[0] == "string" ? n[0] : n;
	}
};
function E(e) {
	let { attributes: t, className: r, containerTagName: i, content: a, emptyContent: o, parsedContent: s, tagName: c, noWrap: l } = e, u = i ?? c ?? "span", d = u === "fragment" ? !0 : l, p;
	if (s) p = s;
	else {
		let t = new T(a ?? "", e).parse();
		t.length > 0 && (p = t);
	}
	return p ||= o, d ? /* @__PURE__ */ n.createElement(n.Fragment, null, p) : /* @__PURE__ */ n.createElement(f, {
		attributes: t,
		className: r,
		tagName: u
	}, p);
}
function D(e) {
	let { attributes: t, className: r, content: i = "", disableFilters: a = !1, disableMatchers: o = !1, emptyContent: s = null, filters: c = [], matchers: l = [], onAfterParse: u = null, onBeforeParse: d = null, tagName: f = "span", noWrap: p = !1, ...m } = e, h = o ? [] : l, g = a ? [] : c, _ = d ? [d] : [], v = u ? [u] : [];
	h.forEach((e) => {
		e.onBeforeParse && _.push(e.onBeforeParse.bind(e)), e.onAfterParse && v.push(e.onAfterParse.bind(e));
	});
	let y = new T(_.reduce((t, n) => {
		let r = n(t, e);
		if (process.env.NODE_ENV !== "production" && typeof r != "string") throw TypeError("Interweave `onBeforeParse` must return a valid HTML string.");
		return r;
	}, i ?? ""), m, h, g), b = v.reduce((t, n) => {
		let r = n(t, e);
		if (process.env.NODE_ENV !== "production" && !Array.isArray(r)) throw TypeError("Interweave `onAfterParse` must return an array of strings and React elements.");
		return r;
	}, y.parse());
	return /* @__PURE__ */ n.createElement(E, {
		attributes: t,
		className: r,
		containerTagName: e.containerTagName,
		emptyContent: s,
		noWrap: p,
		parsedContent: b.length === 0 ? void 0 : b,
		tagName: f
	});
}
//#endregion
export { D as t };

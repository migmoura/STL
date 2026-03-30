import { Dt as e, Et as t, S as n, Tt as r, gt as i, pt as a, wt as o, xt as s, yt as c } from "./react-DLNUXPF9.js";
//#region ../../node_modules/.pnpm/react-i18next@16.5.8_i18next@25.8.18_typescript@5.8.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.8.3/node_modules/react-i18next/dist/es/utils.js
var l = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	g(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, u = {}, d = (e, t, n, r) => {
	g(n) && u[n] || (g(n) && (u[n] = /* @__PURE__ */ new Date()), l(e, t, n, r));
}, f = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, p = (e, t, n) => {
	e.loadNamespaces(t, f(e, n));
}, m = (e, t, n, r) => {
	if (g(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return p(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, f(e, r));
}, h = (e, t, n = {}) => !t.languages || !t.languages.length ? (d(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), g = (e) => typeof e == "string", _ = (e) => typeof e == "object" && !!e, v = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, y = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, b = (e) => y[e], x = (e) => e.replace(v, b), S = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: x,
	transDefaultProps: void 0
}, C = (e = {}) => {
	S = {
		...S,
		...e
	};
}, w = () => S, T, E = (e) => {
	T = e;
}, D = () => T, O = {
	type: "3rdParty",
	init(e) {
		C(e.options.react), E(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-i18next@16.5.8_i18next@25.8.18_typescript@5.8.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.8.3/node_modules/react-i18next/dist/es/context.js
a();
var k = e(), A = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(e) {
		e.forEach((e) => {
			this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-i18next@16.5.8_i18next@25.8.18_typescript@5.8.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.8.3/node_modules/react-i18next/dist/es/useTranslation.js
a();
var j = n(), M = {
	t: (e, t) => {
		if (g(t)) return t;
		if (_(t) && g(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, N = () => () => {}, P = (e, n = {}) => {
	let { i18n: a } = n, { i18n: l, defaultNS: u } = r(k) || {}, f = a || l || D();
	f && !f.reportNamespaces && (f.reportNamespaces = new A()), f || d(f, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let _ = c(() => ({
		...w(),
		...f?.options?.react,
		...n
	}), [f, n]), { useSuspense: v, keyPrefix: y } = _, b = e || u || f?.options?.defaultNS, x = g(b) ? [b] : b || ["translation"], S = c(() => x, x);
	f?.reportNamespaces?.addUsedNamespaces?.(S);
	let C = i(0), T = o((e) => {
		if (!f) return N;
		let { bindI18n: t, bindI18nStore: n } = _, r = () => {
			C.current += 1, e();
		};
		return t && f.on(t, r), n && f.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => f.off(e, r)), n && n.split(" ").forEach((e) => f.store.off(e, r));
		};
	}, [f, _]), E = i(), O = o(() => {
		if (!f) return M;
		let e = !!(f.isInitialized || f.initializedStoreOnce) && S.every((e) => h(e, f, _)), t = n.lng || f.language, r = C.current, i = E.current;
		if (i && i.ready === e && i.lng === t && i.keyPrefix === y && i.revision === r) return i;
		let a = {
			t: f.getFixedT(t, _.nsMode === "fallback" ? S : S[0], y),
			ready: e,
			lng: t,
			keyPrefix: y,
			revision: r
		};
		return E.current = a, a;
	}, [
		f,
		S,
		y,
		_,
		n.lng
	]), [P, F] = s(0), { t: I, ready: L } = (0, j.useSyncExternalStore)(T, O, O);
	t(() => {
		if (f && !L && !v) {
			let e = () => F((e) => e + 1);
			n.lng ? m(f, n.lng, S, e) : p(f, S, e);
		}
	}, [
		f,
		n.lng,
		S,
		L,
		v,
		P
	]);
	let R = f || {}, z = i(null), B = i(), V = (e) => {
		let t = Object.getOwnPropertyDescriptors(e);
		t.__original && delete t.__original;
		let n = Object.create(Object.getPrototypeOf(e), t);
		if (!Object.prototype.hasOwnProperty.call(n, "__original")) try {
			Object.defineProperty(n, "__original", {
				value: e,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
		} catch {}
		return n;
	}, H = c(() => {
		let e = R, t = e?.language, n = e;
		e && (z.current && z.current.__original === e && B.current === t ? n = z.current : (n = V(e), z.current = n, B.current = t));
		let r = [
			I,
			n,
			L
		];
		return r.t = I, r.i18n = n, r.ready = L, r;
	}, [
		I,
		R,
		L,
		R.resolvedLanguage,
		R.language,
		R.languages
	]);
	if (f && v && !L) throw new Promise((e) => {
		let t = () => e();
		n.lng ? m(f, n.lng, S, t) : p(f, S, t);
	});
	return H;
};
//#endregion
export { w as a, g as c, D as i, l, k as n, x as o, O as r, _ as s, P as t, d as u };

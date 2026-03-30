import { o as e } from "./rolldown-runtime-Ctdjzu3q.js";
import { t } from "./i18next-BMrk8wO1.js";
import { r as n } from "./useTranslation-Cl_kknJx.js";
//#region ../../node_modules/.pnpm/i18next-http-backend@3.0.2/node_modules/i18next-http-backend/esm/utils.js
function r(e) {
	"@babel/helpers - typeof";
	return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, r(e);
}
var i = [];
i.forEach, i.slice;
function a() {
	return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : r(XMLHttpRequest)) === "object";
}
function o(e) {
	return !!e && typeof e.then == "function";
}
function s(e) {
	return o(e) ? e : Promise.resolve(e);
}
//#endregion
//#region ../../node_modules/.pnpm/i18next-http-backend@3.0.2/node_modules/i18next-http-backend/esm/request.js
function c(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function l(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? c(Object(n), !0).forEach(function(t) {
			u(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function u(e, t, n) {
	return (t = ee(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ee(e) {
	var t = d(e, "string");
	return f(t) == "symbol" ? t : t + "";
}
function d(e, t) {
	if (f(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (f(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function f(e) {
	"@babel/helpers - typeof";
	return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, f(e);
}
var p = typeof fetch == "function" ? fetch : void 0;
typeof global < "u" && global.fetch ? p = global.fetch : typeof window < "u" && window.fetch && (p = window.fetch);
var m;
a() && (typeof global < "u" && global.XMLHttpRequest ? m = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (m = window.XMLHttpRequest));
var h;
if (typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? h = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (h = window.ActiveXObject)), typeof p != "function" && (p = void 0), !p && !m && !h) try {
	import("./browser-ponyfill-CKwSmmAp.js").then((t) => /* @__PURE__ */ e(t.default, 1)).then(function(e) {
		p = e.default;
	}).catch(function() {});
} catch {}
var g = function(e, t) {
	if (t && f(t) === "object") {
		var n = "";
		for (var r in t) n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
		if (!n) return e;
		e = e + (e.indexOf("?") === -1 ? "?" : "&") + n.slice(1);
	}
	return e;
}, _ = function(e, t, n, r) {
	var i = function(e) {
		if (!e.ok) return n(e.statusText || "Error", { status: e.status });
		e.text().then(function(t) {
			n(null, {
				status: e.status,
				data: t
			});
		}).catch(n);
	};
	if (r) {
		var a = r(e, t);
		if (a instanceof Promise) {
			a.then(i).catch(n);
			return;
		}
	}
	typeof fetch == "function" ? fetch(e, t).then(i).catch(n) : p(e, t).then(i).catch(n);
}, v = !1, y = function(e, t, n, r) {
	e.queryStringParams && (t = g(t, e.queryStringParams));
	var i = l({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
	typeof window > "u" && typeof global < "u" && global.process !== void 0 && global.process.versions && global.process.versions.node && (i["User-Agent"] = `i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`), n && (i["Content-Type"] = "application/json");
	var a = typeof e.requestOptions == "function" ? e.requestOptions(n) : e.requestOptions, o = l({
		method: n ? "POST" : "GET",
		body: n ? e.stringify(n) : void 0,
		headers: i
	}, v ? {} : a), s = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
	try {
		_(t, o, r, s);
	} catch (e) {
		if (!a || Object.keys(a).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) return r(e);
		try {
			Object.keys(a).forEach(function(e) {
				delete o[e];
			}), _(t, o, r, s), v = !0;
		} catch (e) {
			r(e);
		}
	}
}, b = function(e, t, n, r) {
	n && f(n) === "object" && (n = g("", n).slice(1)), e.queryStringParams && (t = g(t, e.queryStringParams));
	try {
		var i = m ? new m() : new h("MSXML2.XMLHTTP.3.0");
		i.open(n ? "POST" : "GET", t, 1), e.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!e.withCredentials, n && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
		var a = e.customHeaders;
		if (a = typeof a == "function" ? a() : a, a) for (var o in a) i.setRequestHeader(o, a[o]);
		i.onreadystatechange = function() {
			i.readyState > 3 && r(i.status >= 400 ? i.statusText : null, {
				status: i.status,
				data: i.responseText
			});
		}, i.send(n);
	} catch (e) {
		console && console.log(e);
	}
}, x = function(e, t, n, r) {
	if (typeof n == "function" && (r = n, n = void 0), r ||= function() {}, p && t.indexOf("file:") !== 0) return y(e, t, n, r);
	if (a() || typeof ActiveXObject == "function") return b(e, t, n, r);
	r(/* @__PURE__ */ Error("No fetch and no xhr implementation found!"));
};
//#endregion
//#region ../../node_modules/.pnpm/i18next-http-backend@3.0.2/node_modules/i18next-http-backend/esm/index.js
function S(e) {
	"@babel/helpers - typeof";
	return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, S(e);
}
function C(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function w(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? C(Object(n), !0).forEach(function(t) {
			O(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function T(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function E(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, k(r.key), r);
	}
}
function D(e, t, n) {
	return t && E(e.prototype, t), n && E(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O(e, t, n) {
	return (t = k(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function k(e) {
	var t = A(e, "string");
	return S(t) == "symbol" ? t : t + "";
}
function A(e, t) {
	if (S(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (S(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var te = function() {
	return {
		loadPath: "/locales/{{lng}}/{{ns}}.json",
		addPath: "/locales/add/{{lng}}/{{ns}}",
		parse: function(e) {
			return JSON.parse(e);
		},
		stringify: JSON.stringify,
		parsePayload: function(e, t, n) {
			return O({}, t, n || "");
		},
		parseLoadPayload: function(e, t) {},
		request: x,
		reloadInterval: typeof window < "u" ? !1 : 3600 * 1e3,
		customHeaders: {},
		queryStringParams: {},
		crossDomain: !1,
		withCredentials: !1,
		overrideMimeType: !1,
		requestOptions: {
			mode: "cors",
			credentials: "same-origin",
			cache: "default"
		}
	};
}, j = function() {
	function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		T(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
	}
	return D(e, [
		{
			key: "init",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
				if (this.services = e, this.options = w(w(w({}, te()), this.options || {}), n), this.allOptions = r, this.services && this.options.reloadInterval) {
					var i = setInterval(function() {
						return t.reload();
					}, this.options.reloadInterval);
					S(i) === "object" && typeof i.unref == "function" && i.unref();
				}
			}
		},
		{
			key: "readMulti",
			value: function(e, t, n) {
				this._readAny(e, e, t, t, n);
			}
		},
		{
			key: "read",
			value: function(e, t, n) {
				this._readAny([e], e, [t], t, n);
			}
		},
		{
			key: "_readAny",
			value: function(e, t, n, r, i) {
				var a = this, o = this.options.loadPath;
				typeof this.options.loadPath == "function" && (o = this.options.loadPath(e, n)), o = s(o), o.then(function(o) {
					if (!o) return i(null, {});
					var s = a.services.interpolator.interpolate(o, {
						lng: e.join("+"),
						ns: n.join("+")
					});
					a.loadUrl(s, i, t, r);
				});
			}
		},
		{
			key: "loadUrl",
			value: function(e, t, n, r) {
				var i = this, a = typeof n == "string" ? [n] : n, o = typeof r == "string" ? [r] : r, s = this.options.parseLoadPayload(a, o);
				this.options.request(this.options, e, s, function(a, o) {
					if (o && (o.status >= 500 && o.status < 600 || !o.status)) return t("failed loading " + e + "; status code: " + o.status, !0);
					if (o && o.status >= 400 && o.status < 500) return t("failed loading " + e + "; status code: " + o.status, !1);
					if (!o && a && a.message) {
						var s = a.message.toLowerCase();
						if ([
							"failed",
							"fetch",
							"network",
							"load"
						].find(function(e) {
							return s.indexOf(e) > -1;
						})) return t("failed loading " + e + ": " + a.message, !0);
					}
					if (a) return t(a, !1);
					var c, l;
					try {
						c = typeof o.data == "string" ? i.options.parse(o.data, n, r) : o.data;
					} catch {
						l = "failed parsing " + e + " to json";
					}
					if (l) return t(l, !1);
					t(null, c);
				});
			}
		},
		{
			key: "create",
			value: function(e, t, n, r, i) {
				var a = this;
				if (this.options.addPath) {
					typeof e == "string" && (e = [e]);
					var o = this.options.parsePayload(t, n, r), s = 0, c = [], l = [];
					e.forEach(function(n) {
						var r = a.options.addPath;
						typeof a.options.addPath == "function" && (r = a.options.addPath(n, t));
						var u = a.services.interpolator.interpolate(r, {
							lng: n,
							ns: t
						});
						a.options.request(a.options, u, o, function(t, n) {
							s += 1, c.push(t), l.push(n), s === e.length && typeof i == "function" && i(c, l);
						});
					});
				}
			}
		},
		{
			key: "reload",
			value: function() {
				var e = this, t = this.services, n = t.backendConnector, r = t.languageUtils, i = t.logger, a = n.language;
				if (!(a && a.toLowerCase() === "cimode")) {
					var o = [], s = function(e) {
						r.toResolveHierarchy(e).forEach(function(e) {
							o.indexOf(e) < 0 && o.push(e);
						});
					};
					s(a), this.allOptions.preload && this.allOptions.preload.forEach(function(e) {
						return s(e);
					}), o.forEach(function(t) {
						e.allOptions.ns.forEach(function(e) {
							n.read(t, e, "read", null, null, function(r, a) {
								r && i.warn(`loading namespace ${e} for language ${t} failed`, r), !r && a && i.log(`loaded namespace ${e} for language ${t}`, a), n.loaded(`${t}|${e}`, r, a);
							});
						});
					});
				}
			}
		}
	]);
}();
j.type = "backend";
//#endregion
//#region ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.1/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var { slice: ne, forEach: M } = [];
function N(e) {
	return M.call(ne.call(arguments, 1), (t) => {
		if (t) for (let n in t) e[n] === void 0 && (e[n] = t[n]);
	}), e;
}
function P(e) {
	return typeof e == "string" ? [
		/<\s*script.*?>/i,
		/<\s*\/\s*script\s*>/i,
		/<\s*img.*?on\w+\s*=/i,
		/<\s*\w+\s*on\w+\s*=.*?>/i,
		/javascript\s*:/i,
		/vbscript\s*:/i,
		/expression\s*\(/i,
		/eval\s*\(/i,
		/alert\s*\(/i,
		/document\.cookie/i,
		/document\.write\s*\(/i,
		/window\.location/i,
		/innerHTML/i
	].some((t) => t.test(e)) : !1;
}
var F = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, I = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { path: "/" }, r = `${e}=${encodeURIComponent(t)}`;
	if (n.maxAge > 0) {
		let e = n.maxAge - 0;
		if (Number.isNaN(e)) throw Error("maxAge should be a Number");
		r += `; Max-Age=${Math.floor(e)}`;
	}
	if (n.domain) {
		if (!F.test(n.domain)) throw TypeError("option domain is invalid");
		r += `; Domain=${n.domain}`;
	}
	if (n.path) {
		if (!F.test(n.path)) throw TypeError("option path is invalid");
		r += `; Path=${n.path}`;
	}
	if (n.expires) {
		if (typeof n.expires.toUTCString != "function") throw TypeError("option expires is invalid");
		r += `; Expires=${n.expires.toUTCString()}`;
	}
	if (n.httpOnly && (r += "; HttpOnly"), n.secure && (r += "; Secure"), n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
		case !0:
			r += "; SameSite=Strict";
			break;
		case "lax":
			r += "; SameSite=Lax";
			break;
		case "strict":
			r += "; SameSite=Strict";
			break;
		case "none":
			r += "; SameSite=None";
			break;
		default: throw TypeError("option sameSite is invalid");
	}
	return n.partitioned && (r += "; Partitioned"), r;
}, L = {
	create(e, t, n, r) {
		let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
			path: "/",
			sameSite: "strict"
		};
		n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = I(e, t, i);
	},
	read(e) {
		let t = `${e}=`, n = document.cookie.split(";");
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			for (; r.charAt(0) === " ";) r = r.substring(1, r.length);
			if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
		}
		return null;
	},
	remove(e, t) {
		this.create(e, "", -1, t);
	}
}, R = {
	name: "cookie",
	lookup(e) {
		let { lookupCookie: t } = e;
		if (t && typeof document < "u") return L.read(t) || void 0;
	},
	cacheUserLanguage(e, t) {
		let { lookupCookie: n, cookieMinutes: r, cookieDomain: i, cookieOptions: a } = t;
		n && typeof document < "u" && L.create(n, e, r, i, a);
	}
}, z = {
	name: "querystring",
	lookup(e) {
		let { lookupQuerystring: t } = e, n;
		if (typeof window < "u") {
			let { search: e } = window.location;
			!window.location.search && window.location.hash?.indexOf("?") > -1 && (e = window.location.hash.substring(window.location.hash.indexOf("?")));
			let r = e.substring(1).split("&");
			for (let e = 0; e < r.length; e++) {
				let i = r[e].indexOf("=");
				i > 0 && r[e].substring(0, i) === t && (n = r[e].substring(i + 1));
			}
		}
		return n;
	}
}, B = {
	name: "hash",
	lookup(e) {
		let { lookupHash: t, lookupFromHashIndex: n } = e, r;
		if (typeof window < "u") {
			let { hash: e } = window.location;
			if (e && e.length > 2) {
				let i = e.substring(1);
				if (t) {
					let e = i.split("&");
					for (let n = 0; n < e.length; n++) {
						let i = e[n].indexOf("=");
						i > 0 && e[n].substring(0, i) === t && (r = e[n].substring(i + 1));
					}
				}
				if (r) return r;
				if (!r && n > -1) {
					let t = e.match(/\/([a-zA-Z-]*)/g);
					return Array.isArray(t) ? t[typeof n == "number" ? n : 0]?.replace("/", "") : void 0;
				}
			}
		}
		return r;
	}
}, V = null, H = () => {
	if (V !== null) return V;
	try {
		if (V = typeof window < "u" && window.localStorage !== null, !V) return !1;
		let e = "i18next.translate.boo";
		window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
	} catch {
		V = !1;
	}
	return V;
}, U = {
	name: "localStorage",
	lookup(e) {
		let { lookupLocalStorage: t } = e;
		if (t && H()) return window.localStorage.getItem(t) || void 0;
	},
	cacheUserLanguage(e, t) {
		let { lookupLocalStorage: n } = t;
		n && H() && window.localStorage.setItem(n, e);
	}
}, W = null, G = () => {
	if (W !== null) return W;
	try {
		if (W = typeof window < "u" && window.sessionStorage !== null, !W) return !1;
		let e = "i18next.translate.boo";
		window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
	} catch {
		W = !1;
	}
	return W;
}, K = {
	name: "sessionStorage",
	lookup(e) {
		let { lookupSessionStorage: t } = e;
		if (t && G()) return window.sessionStorage.getItem(t) || void 0;
	},
	cacheUserLanguage(e, t) {
		let { lookupSessionStorage: n } = t;
		n && G() && window.sessionStorage.setItem(n, e);
	}
}, q = {
	name: "navigator",
	lookup(e) {
		let t = [];
		if (typeof navigator < "u") {
			let { languages: e, userLanguage: n, language: r } = navigator;
			if (e) for (let n = 0; n < e.length; n++) t.push(e[n]);
			n && t.push(n), r && t.push(r);
		}
		return t.length > 0 ? t : void 0;
	}
}, J = {
	name: "htmlTag",
	lookup(e) {
		let { htmlTag: t } = e, n, r = t || (typeof document < "u" ? document.documentElement : null);
		return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
	}
}, Y = {
	name: "path",
	lookup(e) {
		let { lookupFromPathIndex: t } = e;
		if (typeof window > "u") return;
		let n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
		if (Array.isArray(n)) return n[typeof t == "number" ? t : 0]?.replace("/", "");
	}
}, X = {
	name: "subdomain",
	lookup(e) {
		let { lookupFromSubdomainIndex: t } = e, n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
		if (r) return r[n];
	}
}, Z = !1;
try {
	document.cookie, Z = !0;
} catch {}
var Q = [
	"querystring",
	"cookie",
	"localStorage",
	"sessionStorage",
	"navigator",
	"htmlTag"
];
Z || Q.splice(1, 1);
var re = () => ({
	order: Q,
	lookupQuerystring: "lng",
	lookupCookie: "i18next",
	lookupLocalStorage: "i18nextLng",
	lookupSessionStorage: "i18nextLng",
	caches: ["localStorage"],
	excludeCacheFor: ["cimode"],
	convertDetectedLanguage: (e) => e
}), $ = class {
	constructor(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.type = "languageDetector", this.detectors = {}, this.init(e, t);
	}
	init() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { languageUtils: {} }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.services = e, this.options = N(t, this.options || {}, re()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (e) => e.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(R), this.addDetector(z), this.addDetector(U), this.addDetector(K), this.addDetector(q), this.addDetector(J), this.addDetector(Y), this.addDetector(X), this.addDetector(B);
	}
	addDetector(e) {
		return this.detectors[e.name] = e, this;
	}
	detect() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
		return e.forEach((e) => {
			if (this.detectors[e]) {
				let n = this.detectors[e].lookup(this.options);
				n && typeof n == "string" && (n = [n]), n && (t = t.concat(n));
			}
		}), t = t.filter((e) => e != null && !P(e)).map((e) => this.options.convertDetectedLanguage(e)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
	}
	cacheUserLanguage(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
		t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((t) => {
			this.detectors[t] && this.detectors[t].cacheUserLanguage(e, this.options);
		}));
	}
};
//#endregion
//#region src/lib/i18next.ts
$.type = "languageDetector", t.use(j).use($).use(n).init({
	react: { useSuspense: !1 },
	detection: {
		order: ["path", "cookie"],
		lookupFromPathIndex: 1
	},
	interpolation: { escapeValue: !1 },
	backend: {
		loadPath: "/config/locales/{{lng}}/{{ns}}.json",
		parse: function(e) {
			return JSON.parse(e).data.reduce((e, t) => (e[t.Key] = t.Text, e), {});
		}
	}
});
//#endregion

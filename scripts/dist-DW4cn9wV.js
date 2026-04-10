var e = "Content-Type", t = Symbol(), n = Symbol();
//#endregion
//#region ../../node_modules/.pnpm/wretch@2.11.1/node_modules/wretch/dist/utils.js
function r(e = {}) {
	let t = e instanceof Array ? Object.fromEntries(e) : e;
	return Object.entries(t).find(([e]) => e.toLowerCase() === "content-type")?.[1];
}
function i(e) {
	return /^application\/.*json.*/.test(e);
}
var a = function(e, t, n = !1) {
	return Object.entries(t).reduce((t, [r, i]) => {
		let o = e[r];
		return Array.isArray(o) && Array.isArray(i) ? t[r] = n ? [...o, ...i] : i : typeof o == "object" && typeof i == "object" ? t[r] = a(o, i, n) : t[r] = i, t;
	}, { ...e });
}, o = {
	options: {},
	errorType: "text",
	polyfills: {},
	polyfill(e, t = !0, n = !1, ...r) {
		let i = this.polyfills[e] || (typeof self < "u" ? self[e] : null) || (typeof global < "u" ? global[e] : null);
		if (t && !i) throw Error(e + " is not defined");
		return n && i ? new i(...r) : i;
	}
};
function s(e, t = !1) {
	o.options = t ? e : a(o.options, e);
}
function c(e, t = !1) {
	o.polyfills = t ? e : a(o.polyfills, e);
}
function l(e) {
	o.errorType = e;
}
//#endregion
//#region ../../node_modules/.pnpm/wretch@2.11.1/node_modules/wretch/dist/middleware.js
var u = (e) => (t) => e.reduceRight((e, t) => t(e), t) || t, d = class extends Error {}, f = (e) => {
	let r = Object.create(null);
	e = e._addons.reduce((t, n) => n.beforeRequest && n.beforeRequest(t, e._options, r) || t, e);
	let { _url: i, _options: o, _config: s, _catchers: c, _resolvers: l, _middlewares: f, _addons: p } = e, m = new Map(c), h = a(s.options, o), g = i, _ = u(f)((e, t) => (g = e, s.polyfill("fetch")(e, t)))(i, h), v = /* @__PURE__ */ Error(), y = _.catch((e) => {
		throw { [t]: e };
	}).then((e) => {
		if (!e.ok) {
			let t = new d();
			if (t.cause = v, t.stack = t.stack + "\nCAUSE: " + v.stack, t.response = e, t.status = e.status, t.url = g, e.type === "opaque") throw t;
			let n = s.errorType === "json" || e.headers.get("Content-Type")?.split(";")[0] === "application/json";
			return (s.errorType ? n ? e.text() : e[s.errorType]() : Promise.resolve(e.body)).then((r) => {
				if (t.message = typeof r == "string" ? r : e.statusText, r) if (n && typeof r == "string") {
					t.text = r;
					try {
						t.json = JSON.parse(r);
					} catch {}
				} else t[s.errorType] = r;
				throw t;
			});
		}
		return e;
	}), b = (r) => r.catch((r) => {
		let i = Object.prototype.hasOwnProperty.call(r, t), a = i ? r[t] : r, o = a?.status && m.get(a.status) || m.get(a?.name) || i && m.has(t) && m.get(t);
		if (o) return o(a, e);
		let s = m.get(n);
		if (s) return s(a, e);
		throw a;
	}), x = (e) => (t) => b(e ? y.then((t) => t && t[e]()).then((e) => t ? t(e) : e) : y.then((e) => t ? t(e) : e)), S = {
		_wretchReq: e,
		_fetchReq: _,
		_sharedState: r,
		res: x(null),
		json: x("json"),
		blob: x("blob"),
		formData: x("formData"),
		arrayBuffer: x("arrayBuffer"),
		text: x("text"),
		error(e, t) {
			return m.set(e, t), this;
		},
		badRequest(e) {
			return this.error(400, e);
		},
		unauthorized(e) {
			return this.error(401, e);
		},
		forbidden(e) {
			return this.error(403, e);
		},
		notFound(e) {
			return this.error(404, e);
		},
		timeout(e) {
			return this.error(408, e);
		},
		internalError(e) {
			return this.error(500, e);
		},
		fetchError(e) {
			return this.error(t, e);
		}
	}, C = p.reduce((e, t) => ({
		...e,
		...typeof t.resolver == "function" ? t.resolver(e) : t.resolver
	}), S);
	return l.reduce((t, n) => n(t, e), C);
}, p = {
	_url: "",
	_options: {},
	_config: o,
	_catchers: /* @__PURE__ */ new Map(),
	_resolvers: [],
	_deferred: [],
	_middlewares: [],
	_addons: [],
	addon(e) {
		return {
			...this,
			_addons: [...this._addons, e],
			...e.wretch
		};
	},
	errorType(e) {
		return {
			...this,
			_config: {
				...this._config,
				errorType: e
			}
		};
	},
	polyfills(e, t = !1) {
		return {
			...this,
			_config: {
				...this._config,
				polyfills: t ? e : a(this._config.polyfills, e)
			}
		};
	},
	url(e, t = !1) {
		if (t) return {
			...this,
			_url: e
		};
		let n = this._url.split("?");
		return {
			...this,
			_url: n.length > 1 ? n[0] + e + "?" + n[1] : this._url + e
		};
	},
	options(e, t = !1) {
		return {
			...this,
			_options: t ? e : a(this._options, e)
		};
	},
	headers(e) {
		let t = e ? Array.isArray(e) ? Object.fromEntries(e) : "entries" in e ? Object.fromEntries(e.entries()) : e : {};
		return {
			...this,
			_options: a(this._options, { headers: t })
		};
	},
	accept(e) {
		return this.headers({ Accept: e });
	},
	content(t) {
		return this.headers({ [e]: t });
	},
	auth(e) {
		return this.headers({ Authorization: e });
	},
	catcher(e, t) {
		let n = new Map(this._catchers);
		return n.set(e, t), {
			...this,
			_catchers: n
		};
	},
	catcherFallback(e) {
		return this.catcher(n, e);
	},
	resolve(e, t = !1) {
		return {
			...this,
			_resolvers: t ? [e] : [...this._resolvers, e]
		};
	},
	defer(e, t = !1) {
		return {
			...this,
			_deferred: t ? [e] : [...this._deferred, e]
		};
	},
	middlewares(e, t = !1) {
		return {
			...this,
			_middlewares: t ? e : [...this._middlewares, ...e]
		};
	},
	fetch(e = this._options.method, t = "", n = null) {
		let a = this.url(t).options({ method: e }), o = r(a._options.headers), s = this._config.polyfill("FormData", !1), c = typeof n == "object" && !(s && n instanceof s) && (!a._options.headers || !o || i(o));
		return a = n ? c ? a.json(n, o) : a.body(n) : a, f(a._deferred.reduce((e, t) => t(e, e._url, e._options), a));
	},
	get(e = "") {
		return this.fetch("GET", e);
	},
	delete(e = "") {
		return this.fetch("DELETE", e);
	},
	put(e, t = "") {
		return this.fetch("PUT", t, e);
	},
	post(e, t = "") {
		return this.fetch("POST", t, e);
	},
	patch(e, t = "") {
		return this.fetch("PATCH", t, e);
	},
	head(e = "") {
		return this.fetch("HEAD", e);
	},
	opts(e = "") {
		return this.fetch("OPTIONS", e);
	},
	body(e) {
		return {
			...this,
			_options: {
				...this._options,
				body: e
			}
		};
	},
	json(e, t) {
		let n = r(this._options.headers);
		return this.content(t || i(n) && n || "application/json").body(JSON.stringify(e));
	}
};
//#endregion
//#region ../../node_modules/.pnpm/wretch@2.11.1/node_modules/wretch/dist/index.js
function m(e = "", t = {}) {
	return {
		...p,
		_url: e,
		_options: t
	};
}
m.default = m, m.options = s, m.errorType = l, m.polyfills = c, m.WretchError = d;
//#endregion
export { m as t };

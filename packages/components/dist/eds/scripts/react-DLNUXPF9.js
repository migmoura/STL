import { a as e, n as t, r as n, t as r } from "./rolldown-runtime-Ctdjzu3q.js";
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/dist/preact.module.js
function i(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function a(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function o(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? ee.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return s(e, o, r, i, null);
}
function s(e, t, n, r, i) {
	var a = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: i ?? ++te,
		__i: -1,
		__u: 0
	};
	return i == null && I.vnode != null && I.vnode(a), a;
}
function c() {
	return { current: null };
}
function l(e) {
	return e.children;
}
function u(e, t) {
	this.props = e, this.context = t;
}
function d(e, t) {
	if (t == null) return e.__ ? d(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? d(e) : null;
}
function f(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], a = [], o = i({}, t);
		o.__v = t.__v + 1, I.vnode && I.vnode(o), w(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? d(t), !!(32 & t.__u), a), o.__v = t.__v, o.__.__k[o.__i] = o, E(r, o, a), t.__e = t.__ = null, o.__e != n && p(o);
	}
}
function p(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), p(e);
}
function m(e) {
	(!e.__d && (e.__d = !0) && ne.push(e) && !h.__r++ || L != I.debounceRendering) && ((L = I.debounceRendering) || re)(h);
}
function h() {
	try {
		for (var e, t = 1; ne.length;) ne.length > t && ne.sort(R), e = ne.shift(), t = ne.length, f(e);
	} finally {
		ne.length = h.__r = 0;
	}
}
function g(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, y, b = r && r.__k || ce, x = t.length;
	for (c = _(n, t, b, c, x), d = 0; d < x; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && b[p.__i] || se, p.__i = d, g = w(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && k(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), (y = !!(4 & p.__u)) || f.__k === p.__k ? c = v(p, c, e, y) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function _(e, t, n, r, i) {
	var a, o, c, u, f, p = n.length, m = p, h = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = s(null, o, null, null, null) : ue(o) ? o = e.__k[a] = s(l, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = s(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, u = a + h, o.__ = e, o.__b = e.__b + 1, c = null, (f = o.__i = b(o, n, u, m)) != -1 && (m--, (c = n[f]) && (c.__u |= 2)), c == null || c.__v == null ? (f == -1 && (i > p ? h-- : i < p && h++), typeof o.type != "function" && (o.__u |= 4)) : f != u && (f == u - 1 ? h-- : f == u + 1 ? h++ : (f > u ? h-- : h++, o.__u |= 4))) : e.__k[a] = null;
	if (m) for (a = 0; a < p; a++) (c = n[a]) != null && !(2 & c.__u) && (c.__e == r && (r = d(c)), A(c, c));
	return r;
}
function v(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = v(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = d(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function y(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (ue(e) ? e.some(function(e) {
		y(e, t);
	}) : t.push(e)), t;
}
function b(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > (u ? 1 : 0)) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function x(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || le.test(t) ? n : n + "px";
}
function S(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || x(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || x(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(ie, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n.u = r.u : (n.u = ae, e.addEventListener(t, a ? B : z, a)) : e.removeEventListener(t, a ? B : z, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function C(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t.t == null) t.t = ae++;
			else if (t.t < n.u) return;
			return n(I.event ? I.event(t) : t);
		}
	};
}
function w(e, t, n, r, o, s, c, d, f, p) {
	var m, h, _, v, y, b, x, S, C, w, E, k, A, M, N, P = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (f = !!(32 & n.__u), s = [d = t.__e = n.__e]), (m = I.__b) && m(t);
	n: if (typeof P == "function") try {
		if (S = t.props, C = P.prototype && P.prototype.render, w = (m = P.contextType) && r[m.__c], E = m ? w ? w.props.value : m.__ : r, n.__c ? x = (h = t.__c = n.__c).__ = h.__E : (C ? t.__c = h = new P(S, E) : (t.__c = h = new u(S, E), h.constructor = P, h.render = j), w && w.sub(h), h.state ||= {}, h.__n = r, _ = h.__d = !0, h.__h = [], h._sb = []), C && h.__s == null && (h.__s = h.state), C && P.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = i({}, h.__s)), i(h.__s, P.getDerivedStateFromProps(S, h.__s))), v = h.props, y = h.state, h.__v = t, _) C && P.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), C && h.componentDidMount != null && h.__h.push(h.componentDidMount);
		else {
			if (C && P.getDerivedStateFromProps == null && S !== v && h.componentWillReceiveProps != null && h.componentWillReceiveProps(S, E), t.__v == n.__v || !h.__e && h.shouldComponentUpdate != null && !1 === h.shouldComponentUpdate(S, h.__s, E)) {
				t.__v != n.__v && (h.props = S, h.state = h.__s, h.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
					e && (e.__ = t);
				}), ce.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && c.push(h);
				break n;
			}
			h.componentWillUpdate != null && h.componentWillUpdate(S, h.__s, E), C && h.componentDidUpdate != null && h.__h.push(function() {
				h.componentDidUpdate(v, y, b);
			});
		}
		if (h.context = E, h.props = S, h.__P = e, h.__e = !1, k = I.__r, A = 0, C) h.state = h.__s, h.__d = !1, k && k(t), m = h.render(h.props, h.state, h.context), ce.push.apply(h.__h, h._sb), h._sb = [];
		else do
			h.__d = !1, k && k(t), m = h.render(h.props, h.state, h.context), h.state = h.__s;
		while (h.__d && ++A < 25);
		h.state = h.__s, h.getChildContext != null && (r = i(i({}, r), h.getChildContext())), C && !_ && h.getSnapshotBeforeUpdate != null && (b = h.getSnapshotBeforeUpdate(v, y)), M = m != null && m.type === l && m.key == null ? D(m.props.children) : m, d = g(e, ue(M) ? M : [M], t, n, r, o, s, c, d, f, p), h.base = t.__e, t.__u &= -161, h.__h.length && c.push(h), x && (h.__E = h.__ = null);
	} catch (e) {
		if (t.__v = null, f || s != null) if (e.then) {
			for (t.__u |= f ? 160 : 128; d && d.nodeType == 8 && d.nextSibling;) d = d.nextSibling;
			s[s.indexOf(d)] = null, t.__e = d;
		} else {
			for (N = s.length; N--;) a(s[N]);
			T(t);
		}
		else t.__e = n.__e, t.__k = n.__k, e.then || T(t);
		I.__e(e, t, n);
	}
	else s == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : d = t.__e = O(n.__e, t, n, r, o, s, c, f, p);
	return (m = I.diffed) && m(t), 128 & t.__u ? void 0 : d;
}
function T(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(T));
}
function E(e, t, n) {
	for (var r = 0; r < n.length; r++) k(n[r], n[++r], n[++r]);
	I.__c && I.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			I.__e(e, t.__v);
		}
	});
}
function D(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : ue(e) ? e.map(D) : i({}, e);
}
function O(e, t, n, r, i, o, s, c, l) {
	var u, f, p, m, h, _, v, y = n.props || se, b = t.props, x = t.type;
	if (x == "svg" ? i = "http://www.w3.org/2000/svg" : x == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i ||= "http://www.w3.org/1999/xhtml", o != null) {
		for (u = 0; u < o.length; u++) if ((h = o[u]) && "setAttribute" in h == !!x && (x ? h.localName == x : h.nodeType == 3)) {
			e = h, o[u] = null;
			break;
		}
	}
	if (e == null) {
		if (x == null) return document.createTextNode(b);
		e = document.createElementNS(i, x, b.is && b), c &&= (I.__m && I.__m(t, o), !1), o = null;
	}
	if (x == null) y === b || c && e.data == b || (e.data = b);
	else {
		if (o &&= ee.call(e.childNodes), !c && o != null) for (y = {}, u = 0; u < e.attributes.length; u++) y[(h = e.attributes[u]).name] = h.value;
		for (u in y) h = y[u], u == "dangerouslySetInnerHTML" ? p = h : u == "children" || u in b || u == "value" && "defaultValue" in b || u == "checked" && "defaultChecked" in b || S(e, u, null, h, i);
		for (u in b) h = b[u], u == "children" ? m = h : u == "dangerouslySetInnerHTML" ? f = h : u == "value" ? _ = h : u == "checked" ? v = h : c && typeof h != "function" || y[u] === h || S(e, u, h, y[u], i);
		if (f) c || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), g(t.type == "template" ? e.content : e, ue(m) ? m : [m], t, n, r, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, s, o ? o[0] : n.__k && d(n, 0), c, l), o != null) for (u = o.length; u--;) a(o[u]);
		c || (u = "value", x == "progress" && _ == null ? e.removeAttribute("value") : _ != null && (_ !== e[u] || x == "progress" && !_ || x == "option" && _ != y[u]) && S(e, u, _, y[u], i), u = "checked", v != null && v != e[u] && S(e, u, v, y[u], i));
	}
	return e;
}
function k(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		I.__e(e, n);
	}
}
function A(e, t, n) {
	var r, i;
	if (I.unmount && I.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || k(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			I.__e(e, t);
		}
		r.base = r.__P = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && A(r[i], t, n || typeof e.type != "function");
	n || a(e.__e), e.__c = e.__ = e.__e = void 0;
}
function j(e, t, n) {
	return this.constructor(e, n);
}
function M(e, t, n) {
	var r, i, a, s;
	t == document && (t = document.documentElement), I.__ && I.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], s = [], w(t, e = (!r && n || t).__k = o(l, null, [e]), i || se, se, t.namespaceURI, !r && n ? [n] : i ? null : t.firstChild ? ee.call(t.childNodes) : null, a, !r && n ? n : i ? i.__e : t.firstChild, r, s), E(a, e, s);
}
function N(e, t) {
	M(e, t, N);
}
function P(e, t, n) {
	var r, a, o, c, l = i({}, e.props);
	for (o in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) o == "key" ? r = t[o] : o == "ref" ? a = t[o] : l[o] = t[o] === void 0 && c != null ? c[o] : t[o];
	return arguments.length > 2 && (l.children = arguments.length > 3 ? ee.call(arguments, 2) : n), s(e.type, l, r || e.key, a || e.ref, null);
}
function F(e) {
	function t(e) {
		var n, r;
		return this.getChildContext || (n = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
			return r;
		}, this.componentWillUnmount = function() {
			n = null;
		}, this.shouldComponentUpdate = function(e) {
			this.props.value != e.value && n.forEach(function(e) {
				e.__e = !0, m(e);
			});
		}, this.sub = function(e) {
			n.add(e);
			var t = e.componentWillUnmount;
			e.componentWillUnmount = function() {
				n && n.delete(e), t && t.call(e);
			};
		}), e.children;
	}
	return t.__c = "__cC" + oe++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
		return e.children(t);
	}).contextType = t, t;
}
var ee, I, te, ne, L, re, R, ie, ae, z, B, oe, se, ce, le, ue, de = t((() => {
	se = {}, ce = [], le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ue = Array.isArray, ee = ce.slice, I = { __e: function(e, t, n, r) {
		for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
			if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
		} catch (t) {
			e = t;
		}
		throw e;
	} }, te = 0, u.prototype.setState = function(e, t) {
		var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = i({}, this.state);
		typeof e == "function" && (e = e(i({}, n), this.props)), e && i(n, e), e != null && this.__v && (t && this._sb.push(t), m(this));
	}, u.prototype.forceUpdate = function(e) {
		this.__v && (this.__e = !0, e && this.__h.push(e), m(this));
	}, u.prototype.render = l, ne = [], re = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R = function(e, t) {
		return e.__v.__b - t.__v.__b;
	}, h.__r = 0, ie = /(PointerCapture)$|Capture$/i, ae = 0, z = C(!1), B = C(!0), oe = 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/hooks/dist/hooks.module.js
function fe(e, t) {
	q.__h && q.__h(K, e, ke || t), ke = 0;
	var n = K.__H ||= {
		__: [],
		__h: []
	};
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function V(e) {
	return ke = 1, pe(Te, e);
}
function pe(e, t, n) {
	var r = fe(Ee++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Te(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = K, !K.__f)) {
		var i = function(e, t, n) {
			if (!r.__c.__H) return !0;
			var i = r.__c.__H.__.filter(function(e) {
				return e.__c;
			});
			if (i.every(function(e) {
				return !e.__N;
			})) return !a || a.call(this, e, t, n);
			var o = r.__c.props !== e;
			return i.some(function(e) {
				if (e.__N) {
					var t = e.__[0];
					e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0);
				}
			}), a && a.call(this, e, t, n) || o;
		};
		K.__f = !0;
		var a = K.shouldComponentUpdate, o = K.componentWillUpdate;
		K.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, K.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function H(e, t) {
	var n = fe(Ee++, 3);
	!q.__s && we(n.__H, t) && (n.__ = e, n.u = t, K.__H.__h.push(n));
}
function me(e, t) {
	var n = fe(Ee++, 4);
	!q.__s && we(n.__H, t) && (n.__ = e, n.u = t, K.__h.push(n));
}
function U(e) {
	return ke = 5, W(function() {
		return { current: e };
	}, []);
}
function he(e, t, n) {
	ke = 6, me(function() {
		if (typeof e == "function") {
			var n = e(t());
			return function() {
				e(null), n && typeof n == "function" && n();
			};
		}
		if (e) return e.current = t(), function() {
			return e.current = null;
		};
	}, n == null ? n : n.concat(e));
}
function W(e, t) {
	var n = fe(Ee++, 7);
	return we(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function G(e, t) {
	return ke = 8, W(function() {
		return e;
	}, t);
}
function ge(e) {
	var t = K.context[e.__c], n = fe(Ee++, 9);
	return n.c = e, t ? (n.__ ?? (n.__ = !0, t.sub(K)), t.props.value) : e.__;
}
function _e(e, t) {
	q.useDebugValue && q.useDebugValue(t ? t(e) : e);
}
function ve(e) {
	var t = fe(Ee++, 10), n = V();
	return t.__ = e, K.componentDidCatch ||= function(e, r) {
		t.__ && t.__(e, r), n[1](e);
	}, [n[0], function() {
		n[1](void 0);
	}];
}
function ye() {
	var e = fe(Ee++, 11);
	if (!e.__) {
		for (var t = K.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
		var n = t.__m ||= [0, 0];
		e.__ = "P" + n[0] + "-" + n[1]++;
	}
	return e.__;
}
function be() {
	for (var e; e = Ae.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(Se), t.__h.some(Ce), t.__h = [];
		} catch (n) {
			t.__h = [], q.__e(n, e.__v);
		}
	}
}
function xe(e) {
	var t, n = function() {
		clearTimeout(r), Le && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Le && (t = requestAnimationFrame(n));
}
function Se(e) {
	var t = K, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), K = t;
}
function Ce(e) {
	var t = K;
	e.__c = e.__(), K = t;
}
function we(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function Te(e, t) {
	return typeof t == "function" ? t(e) : t;
}
var Ee, K, De, Oe, ke, Ae, q, je, Me, Ne, Pe, Fe, Ie, Le, Re = t((() => {
	de(), ke = 0, Ae = [], q = I, je = q.__b, Me = q.__r, Ne = q.diffed, Pe = q.__c, Fe = q.unmount, Ie = q.__, q.__b = function(e) {
		K = null, je && je(e);
	}, q.__ = function(e, t) {
		e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ie && Ie(e, t);
	}, q.__r = function(e) {
		Me && Me(e), Ee = 0;
		var t = (K = e.__c).__H;
		t && (De === K ? (t.__h = [], K.__h = [], t.__.some(function(e) {
			e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
		})) : (t.__h.some(Se), t.__h.some(Ce), t.__h = [], Ee = 0)), De = K;
	}, q.diffed = function(e) {
		Ne && Ne(e);
		var t = e.__c;
		t && t.__H && (t.__H.__h.length && (Ae.push(t) !== 1 && Oe === q.requestAnimationFrame || ((Oe = q.requestAnimationFrame) || xe)(be)), t.__H.__.some(function(e) {
			e.u && (e.__H = e.u), e.u = void 0;
		})), De = K = null;
	}, q.__c = function(e, t) {
		t.some(function(e) {
			try {
				e.__h.some(Se), e.__h = e.__h.filter(function(e) {
					return !e.__ || Ce(e);
				});
			} catch (n) {
				t.some(function(e) {
					e.__h &&= [];
				}), t = [], q.__e(n, e.__v);
			}
		}), Pe && Pe(e, t);
	}, q.unmount = function(e) {
		Fe && Fe(e);
		var t, n = e.__c;
		n && n.__H && (n.__H.__.some(function(e) {
			try {
				Se(e);
			} catch (e) {
				t = e;
			}
		}), n.__H = void 0, t && q.__e(t, n.__v));
	}, Le = typeof requestAnimationFrame == "function";
})), ze = /* @__PURE__ */ n({
	Children: () => vt,
	Component: () => u,
	Fragment: () => l,
	PureComponent: () => qe,
	StrictMode: () => l,
	Suspense: () => Qe,
	SuspenseList: () => tt,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Pt,
	cloneElement: () => dt,
	createContext: () => F,
	createElement: () => o,
	createFactory: () => st,
	createPortal: () => it,
	createRef: () => c,
	default: () => zt,
	findDOMNode: () => pt,
	flushSync: () => Lt,
	forwardRef: () => Ye,
	hydrate: () => ot,
	isElement: () => Rt,
	isFragment: () => lt,
	isMemo: () => ut,
	isValidElement: () => ct,
	lazy: () => et,
	memo: () => Je,
	render: () => at,
	startTransition: () => We,
	unmountComponentAtNode: () => ft,
	unstable_batchedUpdates: () => It,
	useCallback: () => G,
	useContext: () => ge,
	useDebugValue: () => _e,
	useDeferredValue: () => Ge,
	useEffect: () => H,
	useErrorBoundary: () => ve,
	useId: () => ye,
	useImperativeHandle: () => he,
	useInsertionEffect: () => mt,
	useLayoutEffect: () => me,
	useMemo: () => W,
	useReducer: () => pe,
	useRef: () => U,
	useState: () => V,
	useSyncExternalStore: () => He,
	useTransition: () => Ke,
	version: () => Ft
});
function Be(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Ve(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function He(e, t) {
	var n = t(), r = V({ t: {
		__: n,
		u: t
	} }), i = r[0].t, a = r[1];
	return me(function() {
		i.__ = n, i.u = t, Ue(i) && a({ t: i });
	}, [
		e,
		n,
		t
	]), H(function() {
		return Ue(i) && a({ t: i }), e(function() {
			Ue(i) && a({ t: i });
		});
	}, [e]), n;
}
function Ue(e) {
	try {
		return !((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
	} catch {
		return !0;
	}
	var t, n;
}
function We(e) {
	e();
}
function Ge(e) {
	return e;
}
function Ke() {
	return [!1, We];
}
function qe(e, t) {
	this.props = e, this.context = t;
}
function Je(e, t) {
	function n(e) {
		var n = this.props.ref;
		return n != e.ref && n && (typeof n == "function" ? n(null) : n.current = null), t ? !t(this.props, e) || n != e.ref : Ve(this.props, e);
	}
	function r(t) {
		return this.shouldComponentUpdate = n, o(e, t);
	}
	return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = e, r;
}
function Ye(e) {
	function t(t) {
		var n = Be({}, t);
		return delete n.ref, e(n, t.ref || null);
	}
	return t.$$typeof = gt, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
function Xe(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = Be({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return Xe(e, t, n);
	})), e;
}
function Ze(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return Ze(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Qe() {
	this.__u = 0, this.o = null, this.__b = null;
}
function $e(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function et(e) {
	var t, n, r, i = null;
	function a(a) {
		if (t || (t = e()).then(function(e) {
			e && (i = e.default || e), r = !0;
		}, function(e) {
			n = e, r = !0;
		}), n) throw n;
		if (!r) throw t;
		return i ? o(i, a) : null;
	}
	return a.displayName = "Lazy", a.__f = !0, a;
}
function tt() {
	this.i = null, this.l = null;
}
function nt(e) {
	return this.getChildContext = function() {
		return e.context;
	}, e.children;
}
function rt(e) {
	var t = this, n = e.h;
	if (t.componentWillUnmount = function() {
		M(null, t.v), t.v = null, t.h = null;
	}, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
		for (var r = t.__v; r !== null && !r.__m && r.__ !== null;) r = r.__;
		t.h = n, t.v = {
			nodeType: 1,
			parentNode: n,
			childNodes: [],
			__k: { __m: r.__m },
			contains: function() {
				return !0;
			},
			namespaceURI: n.namespaceURI,
			insertBefore: function(e, n) {
				this.childNodes.push(e), t.h.insertBefore(e, n);
			},
			removeChild: function(e) {
				this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.h.removeChild(e);
			}
		};
	}
	M(o(nt, { context: t.context }, e.__v), t.v);
}
function it(e, t) {
	var n = o(rt, {
		__v: e,
		h: t
	});
	return n.containerInfo = t, n;
}
function at(e, t, n) {
	return t.__k ?? (t.textContent = ""), M(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ot(e, t, n) {
	return N(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function st(e) {
	return o.bind(null, e);
}
function ct(e) {
	return !!e && e.$$typeof === St;
}
function lt(e) {
	return ct(e) && e.type === l;
}
function ut(e) {
	return !!e && typeof e.displayName == "string" && e.displayName.indexOf("Memo(") == 0;
}
function dt(e) {
	return ct(e) ? P.apply(null, arguments) : e;
}
function ft(e) {
	return !!e.__k && (M(null, e), !0);
}
function pt(e) {
	return e && (e.base || e.nodeType === 1 && e) || null;
}
var mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, J = t((() => {
	de(), Re(), Re(), mt = me, (qe.prototype = new u()).isPureReactComponent = !0, qe.prototype.shouldComponentUpdate = function(e, t) {
		return Ve(this.props, e) || Ve(this.state, t);
	}, ht = I.__b, I.__b = function(e) {
		e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ht && ht(e);
	}, gt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, _t = function(e, t) {
		return e == null ? null : y(y(e).map(t));
	}, vt = {
		map: _t,
		forEach: _t,
		count: function(e) {
			return e ? y(e).length : 0;
		},
		only: function(e) {
			var t = y(e);
			if (t.length !== 1) throw "Children.only";
			return t[0];
		},
		toArray: y
	}, yt = I.__e, I.__e = function(e, t, n, r) {
		if (e.then) {
			for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
		}
		yt(e, t, n, r);
	}, bt = I.unmount, I.unmount = function(e) {
		var t = e.__c;
		t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), bt && bt(e);
	}, (Qe.prototype = new u()).__c = function(e, t) {
		var n = t.__c, r = this;
		r.o ??= [], r.o.push(n);
		var i = $e(r.__v), a = !1, o = function() {
			a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
		};
		n.__R = o;
		var s = n.__P;
		n.__P = null;
		var c = function() {
			if (!--r.__u) {
				if (r.state.__a) {
					var e = r.state.__a;
					r.__v.__k[0] = Ze(e, e.__c.__P, e.__c.__O);
				}
				var t;
				for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
	}, Qe.prototype.componentWillUnmount = function() {
		this.o = [];
	}, Qe.prototype.render = function(e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement("div"), r = this.__v.__k[0].__c;
				this.__v.__k[0] = Xe(this.__b, n, r.__O = r.__P);
			}
			this.__b = null;
		}
		var i = t.__a && o(l, null, e.fallback);
		return i && (i.__u &= -33), [o(l, null, t.__a ? null : e.children), i];
	}, xt = function(e, t, n) {
		if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
			for (; n.length > 3;) n.pop()();
			if (n[1] < n[0]) break;
			e.i = n = n[2];
		}
	}, (tt.prototype = new u()).__a = function(e) {
		var t = this, n = $e(t.__v), r = t.l.get(e);
		return r[0]++, function(i) {
			var a = function() {
				t.props.revealOrder ? (r.push(i), xt(t, e, r)) : i();
			};
			n ? n(a) : a();
		};
	}, tt.prototype.render = function(e) {
		this.i = null, this.l = /* @__PURE__ */ new Map();
		var t = y(e.children);
		e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
		for (var n = t.length; n--;) this.l.set(t[n], this.i = [
			1,
			0,
			this.i
		]);
		return e.children;
	}, tt.prototype.componentDidUpdate = tt.prototype.componentDidMount = function() {
		var e = this;
		this.l.forEach(function(t, n) {
			xt(e, n, t);
		});
	}, St = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ct = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, wt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Tt = /[A-Z0-9]/g, Et = typeof document < "u", Dt = function(e) {
		return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
	}, u.prototype.isReactComponent = !0, [
		"componentWillMount",
		"componentWillReceiveProps",
		"componentWillUpdate"
	].forEach(function(e) {
		Object.defineProperty(u.prototype, e, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + e];
			},
			set: function(t) {
				Object.defineProperty(this, e, {
					configurable: !0,
					writable: !0,
					value: t
				});
			}
		});
	}), Ot = I.event, I.event = function(e) {
		return Ot && (e = Ot(e)), e.persist = function() {}, e.isPropagationStopped = function() {
			return this.cancelBubble;
		}, e.isDefaultPrevented = function() {
			return this.defaultPrevented;
		}, e.nativeEvent = e;
	}, At = {
		configurable: !0,
		get: function() {
			return this.class;
		}
	}, jt = I.vnode, I.vnode = function(e) {
		typeof e.type == "string" && function(e) {
			var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
			for (var a in t) {
				var o = t[a];
				if (!(a === "value" && "defaultValue" in t && o == null || Et && a === "children" && n === "noscript" || a === "class" || a === "className")) {
					var s = a.toLowerCase();
					a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Dt(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : wt.test(a) && (a = s) : s = a = "oninput" : i && Ct.test(a) ? a = a.replace(Tt, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
				}
			}
			n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = y(t.children).forEach(function(e) {
				e.props.selected = r.value.indexOf(e.props.value) != -1;
			})), r.defaultValue != null && (r.value = y(t.children).forEach(function(e) {
				e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
			}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", At)) : t.className && (r.class = r.className = t.className), e.props = r;
		}(e), e.$$typeof = St, jt && jt(e);
	}, Mt = I.__r, I.__r = function(e) {
		Mt && Mt(e), kt = e.__c;
	}, Nt = I.diffed, I.diffed = function(e) {
		Nt && Nt(e);
		var t = e.props, n = e.__e;
		n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), kt = null;
	}, Pt = { ReactCurrentDispatcher: { current: {
		readContext: function(e) {
			return kt.__n[e.__c].props.value;
		},
		useCallback: G,
		useContext: ge,
		useDebugValue: _e,
		useDeferredValue: Ge,
		useEffect: H,
		useId: ye,
		useImperativeHandle: he,
		useInsertionEffect: mt,
		useLayoutEffect: me,
		useMemo: W,
		useReducer: pe,
		useRef: U,
		useState: V,
		useSyncExternalStore: He,
		useTransition: Ke
	} } }, Ft = "18.3.1", It = function(e, t) {
		return e(t);
	}, Lt = function(e, t) {
		var n = I.debounceRendering;
		I.debounceRendering = function(e) {
			return e();
		};
		var r = e(t);
		return I.debounceRendering = n, r;
	}, Rt = ct, zt = {
		useState: V,
		useId: ye,
		useReducer: pe,
		useEffect: H,
		useLayoutEffect: me,
		useInsertionEffect: mt,
		useTransition: Ke,
		useDeferredValue: Ge,
		useSyncExternalStore: He,
		startTransition: We,
		useRef: U,
		useImperativeHandle: he,
		useMemo: W,
		useCallback: G,
		useContext: ge,
		useDebugValue: _e,
		version: "18.3.1",
		Children: vt,
		render: at,
		hydrate: ot,
		unmountComponentAtNode: ft,
		createPortal: it,
		createElement: o,
		createContext: F,
		createFactory: st,
		cloneElement: dt,
		createRef: c,
		Fragment: l,
		isValidElement: ct,
		isElement: Rt,
		isFragment: lt,
		isMemo: ut,
		findDOMNode: pt,
		Component: u,
		PureComponent: qe,
		memo: Je,
		forwardRef: Ye,
		flushSync: Lt,
		unstable_batchedUpdates: It,
		StrictMode: l,
		Suspense: Qe,
		SuspenseList: tt,
		lazy: et,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pt
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
de();
var Bt = 0;
Array.isArray;
function Vt(e, t, n, r, i, a) {
	t ||= {};
	var o, s, c = t;
	if ("ref" in c) for (s in c = {}, t) s == "ref" ? o = t[s] : c[s] = t[s];
	var l = {
		type: e,
		props: c,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Bt,
		__i: -1,
		__u: 0,
		__source: i,
		__self: a
	};
	if (typeof e == "function" && (o = e.defaultProps)) for (s in o) c[s] === void 0 && (c[s] = o[s]);
	return I.vnode && I.vnode(l), l;
}
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.546.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils.js
var Ht = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ut = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Wt = (e) => {
	let t = Ut(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Kt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, qt = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.546.0_react@19.2.4/node_modules/lucide-react/dist/esm/Icon.js
J();
var Jt = Ye(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: s, ...c }, l) => o("svg", {
	ref: l,
	...qt,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Gt("lucide", i),
	...!a && !Kt(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => o(e, t)), ...Array.isArray(a) ? a : [a]]));
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.546.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js
J();
var Y = (e, t) => {
	let n = Ye(({ className: n, ...r }, i) => o(Jt, {
		ref: i,
		iconNode: t,
		className: Gt(`lucide-${Ht(Wt(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Wt(e), n;
}, Yt = Y("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Xt = Y("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), Zt = Y("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Qt = Y("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), $t = Y("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), en = Y("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), tn = Y("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), nn = Y("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), rn = Y("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), an = Y("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), on = Y("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), sn = Y("earth", [
	["path", {
		d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
		key: "1djwo0"
	}],
	["path", {
		d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
		key: "1tzkfa"
	}],
	["path", {
		d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
		key: "14pb5j"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), cn = Y("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), ln = Y("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), un = Y("file-search", [
	["path", {
		d: "M14 2v4a2 2 0 0 0 2 2h4",
		key: "tnqrlb"
	}],
	["path", {
		d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
		key: "ms7g94"
	}],
	["path", {
		d: "m9 18-1.5-1.5",
		key: "1j6qii"
	}],
	["circle", {
		cx: "5",
		cy: "14",
		r: "3",
		key: "ufru5t"
	}]
]), dn = Y("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), fn = Y("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), pn = Y("locate-fixed", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}]
]), mn = Y("locate", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}]
]), hn = Y("log-in", [
	["path", {
		d: "m10 17 5-5-5-5",
		key: "1bsop3"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
		key: "u53s6r"
	}]
]), gn = Y("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), _n = Y("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), vn = Y("milestone", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M12 3v3",
		key: "1n5kay"
	}],
	["path", {
		d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",
		key: "1btarq"
	}]
]), yn = Y("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), bn = Y("move-left", [["path", {
	d: "M6 8L2 12L6 16",
	key: "kyvwex"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), xn = Y("move-right", [["path", {
	d: "M18 8L22 12L18 16",
	key: "1r0oui"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), Sn = Y("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), Cn = Y("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), wn = Y("radius", [
	["path", {
		d: "M20.34 17.52a10 10 0 1 0-2.82 2.82",
		key: "fydyku"
	}],
	["circle", {
		cx: "19",
		cy: "19",
		r: "2",
		key: "17f5cg"
	}],
	["path", {
		d: "m13.41 13.41 4.18 4.18",
		key: "1gqbwc"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), Tn = Y("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), En = Y("search-x", [
	["path", {
		d: "m13.5 8.5-5 5",
		key: "1cs55j"
	}],
	["path", {
		d: "m8.5 8.5 5 5",
		key: "a8mexj"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), Dn = Y("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), On = Y("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/compat/client.mjs
J();
function kn(e) {
	return {
		render: function(t) {
			at(t, e);
		},
		unmount: function() {
			ft(e);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var An = /* @__PURE__ */ r(((t) => {
	var n = (J(), e(ze));
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useState, o = n.useEffect, s = n.useLayoutEffect, c = n.useDebugValue;
	function l(e, t) {
		var n = t(), r = a({ inst: {
			value: n,
			getSnapshot: t
		} }), i = r[0].inst, l = r[1];
		return s(function() {
			i.value = n, i.getSnapshot = t, u(i) && l({ inst: i });
		}, [
			e,
			n,
			t
		]), o(function() {
			return u(i) && l({ inst: i }), e(function() {
				u(i) && l({ inst: i });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	t.useSyncExternalStore = n.useSyncExternalStore === void 0 ? f : n.useSyncExternalStore;
})), jn = /* @__PURE__ */ r(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function r(e, t) {
			f || o.startTransition === void 0 || (f = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!p) {
				var r = t();
				s(n, r) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
			}
			r = c({ inst: {
				value: n,
				getSnapshot: t
			} });
			var a = r[0].inst, m = r[1];
			return u(function() {
				a.value = n, a.getSnapshot = t, i(a) && m({ inst: a });
			}, [
				e,
				n,
				t
			]), l(function() {
				return i(a) && m({ inst: a }), e(function() {
					i(a) && m({ inst: a });
				});
			}, [e]), d(n), n;
		}
		function i(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !s(e, n);
			} catch {
				return !0;
			}
		}
		function a(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var o = (J(), e(ze)), s = typeof Object.is == "function" ? Object.is : n, c = o.useState, l = o.useEffect, u = o.useLayoutEffect, d = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? a : r;
		t.useSyncExternalStore = o.useSyncExternalStore === void 0 ? m : o.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Mn = /* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = An() : t.exports = jn();
})), Nn = [
	"top",
	"right",
	"bottom",
	"left"
], Pn = Math.min, Fn = Math.max, In = Math.round, Ln = Math.floor, Rn = (e) => ({
	x: e,
	y: e
}), zn = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Bn(e, t, n) {
	return Fn(e, Pn(t, n));
}
function Vn(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Hn(e) {
	return e.split("-")[0];
}
function Un(e) {
	return e.split("-")[1];
}
function Wn(e) {
	return e === "x" ? "y" : "x";
}
function Gn(e) {
	return e === "y" ? "height" : "width";
}
function Kn(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function qn(e) {
	return Wn(Kn(e));
}
function Jn(e, t, n) {
	n === void 0 && (n = !1);
	let r = Un(e), i = qn(e), a = Gn(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = rr(o)), [o, rr(o)];
}
function Yn(e) {
	let t = rr(e);
	return [
		Xn(e),
		t,
		Xn(t)
	];
}
function Xn(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Zn = ["left", "right"], Qn = ["right", "left"], $n = ["top", "bottom"], er = ["bottom", "top"];
function tr(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Qn : Zn : t ? Zn : Qn;
		case "left":
		case "right": return t ? $n : er;
		default: return [];
	}
}
function nr(e, t, n, r) {
	let i = Un(e), a = tr(Hn(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Xn)))), a;
}
function rr(e) {
	let t = Hn(e);
	return zn[t] + e.slice(t.length);
}
function ir(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function ar(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ir(e);
}
function or(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function sr(e, t, n) {
	let { reference: r, floating: i } = e, a = Kn(t), o = qn(t), s = Gn(o), c = Hn(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Un(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function cr(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Vn(t, e), p = ar(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = or(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = or(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var lr = 50, ur = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: cr
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = sr(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < lr && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = sr(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, dr = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Vn(e, t) || {};
		if (l == null) return {};
		let d = ar(u), f = {
			x: n,
			y: r
		}, p = qn(i), m = Gn(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Pn(d[_], T), D = Pn(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Bn(O, A, k), M = !c.arrow && Un(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), fr = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Vn(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Hn(r), _ = Kn(o), v = Hn(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [rr(o)] : Yn(o)), x = p !== "none";
			!d && x && b.push(...nr(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Jn(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Kn(t)) || T.every((e) => Kn(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Kn(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function pr(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function mr(e) {
	return Nn.some((t) => e[t] >= 0);
}
var hr = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Vn(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = pr(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: mr(e)
					} };
				}
				case "escaped": {
					let e = pr(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: mr(e)
					} };
				}
				default: return {};
			}
		}
	};
}, gr = /* @__PURE__ */ new Set(["left", "top"]);
async function _r(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Hn(n), s = Un(n), c = Kn(n) === "y", l = gr.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Vn(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var vr = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await _r(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, yr = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Vn(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Kn(Hn(i)), p = Wn(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Bn(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Bn(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, br = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Vn(e, t), u = {
				x: n,
				y: r
			}, d = Kn(i), f = Wn(d), p = u[f], m = u[d], h = Vn(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = gr.has(Hn(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, xr = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Vn(e, t), u = await o.detectOverflow(t, l), d = Hn(i), f = Un(i), p = Kn(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Pn(h - u[g], v), x = Pn(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Fn(u.left, 0), t = Fn(u.right, 0), n = Fn(u.top, 0), r = Fn(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Fn(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Fn(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Sr() {
	return typeof window < "u";
}
function Cr(e) {
	return Er(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wr(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tr(e) {
	return ((Er(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Er(e) {
	return Sr() ? e instanceof Node || e instanceof wr(e).Node : !1;
}
function Dr(e) {
	return Sr() ? e instanceof Element || e instanceof wr(e).Element : !1;
}
function Or(e) {
	return Sr() ? e instanceof HTMLElement || e instanceof wr(e).HTMLElement : !1;
}
function kr(e) {
	return !Sr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wr(e).ShadowRoot;
}
function Ar(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Vr(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function jr(e) {
	return /^(table|td|th)$/.test(Cr(e));
}
function Mr(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Nr = /transform|translate|scale|rotate|perspective|filter/, Pr = /paint|layout|strict|content/, Fr = (e) => !!e && e !== "none", Ir;
function Lr(e) {
	let t = Dr(e) ? Vr(e) : e;
	return Fr(t.transform) || Fr(t.translate) || Fr(t.scale) || Fr(t.rotate) || Fr(t.perspective) || !zr() && (Fr(t.backdropFilter) || Fr(t.filter)) || Nr.test(t.willChange || "") || Pr.test(t.contain || "");
}
function Rr(e) {
	let t = Ur(e);
	for (; Or(t) && !Br(t);) {
		if (Lr(t)) return t;
		if (Mr(t)) return null;
		t = Ur(t);
	}
	return null;
}
function zr() {
	return Ir ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ir;
}
function Br(e) {
	return /^(html|body|#document)$/.test(Cr(e));
}
function Vr(e) {
	return wr(e).getComputedStyle(e);
}
function Hr(e) {
	return Dr(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ur(e) {
	if (Cr(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || kr(e) && e.host || Tr(e);
	return kr(t) ? t.host : t;
}
function Wr(e) {
	let t = Ur(e);
	return Br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Or(t) && Ar(t) ? t : Wr(t);
}
function Gr(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Wr(e), i = r === e.ownerDocument?.body, a = wr(r);
	if (i) {
		let e = Kr(a);
		return t.concat(a, a.visualViewport || [], Ar(r) ? r : [], e && n ? Gr(e) : []);
	} else return t.concat(r, Gr(r, [], n));
}
function Kr(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function qr(e) {
	let t = Vr(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Or(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = In(n) !== a || In(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Jr(e) {
	return Dr(e) ? e : e.contextElement;
}
function Yr(e) {
	let t = Jr(e);
	if (!Or(t)) return Rn(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = qr(t), o = (a ? In(n.width) : n.width) / r, s = (a ? In(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Xr = /* @__PURE__ */ Rn(0);
function Zr(e) {
	let t = wr(e);
	return !zr() || !t.visualViewport ? Xr : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Qr(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== wr(e) ? !1 : t;
}
function $r(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Jr(e), o = Rn(1);
	t && (r ? Dr(r) && (o = Yr(r)) : o = Yr(e));
	let s = Qr(a, n, r) ? Zr(a) : Rn(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = wr(a), t = r && Dr(r) ? wr(r) : r, n = e, i = Kr(n);
		for (; i && r && t !== n;) {
			let e = Yr(i), t = i.getBoundingClientRect(), r = Vr(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = wr(i), i = Kr(n);
		}
	}
	return or({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ei(e, t) {
	let n = Hr(e).scrollLeft;
	return t ? t.left + n : $r(Tr(e)).left + n;
}
function ti(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ei(e, n),
		y: n.top + t.scrollTop
	};
}
function ni(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Tr(r), s = t ? Mr(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Rn(1), u = Rn(0), d = Or(r);
	if ((d || !d && !a) && ((Cr(r) !== "body" || Ar(o)) && (c = Hr(r)), d)) {
		let e = $r(r);
		l = Yr(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? ti(o, c) : Rn(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ri(e) {
	return Array.from(e.getClientRects());
}
function ii(e) {
	let t = Tr(e), n = Hr(e), r = e.ownerDocument.body, i = Fn(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Fn(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + ei(e), s = -n.scrollTop;
	return Vr(r).direction === "rtl" && (o += Fn(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var ai = 25;
function oi(e, t) {
	let n = wr(e), r = Tr(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = zr();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = ei(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= ai && (a -= o);
	} else l <= ai && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function si(e, t) {
	let n = $r(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Or(e) ? Yr(e) : Rn(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ci(e, t, n) {
	let r;
	if (t === "viewport") r = oi(e, n);
	else if (t === "document") r = ii(Tr(e));
	else if (Dr(t)) r = si(t, n);
	else {
		let n = Zr(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return or(r);
}
function li(e, t) {
	let n = Ur(e);
	return n === t || !Dr(n) || Br(n) ? !1 : Vr(n).position === "fixed" || li(n, t);
}
function ui(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Gr(e, [], !1).filter((e) => Dr(e) && Cr(e) !== "body"), i = null, a = Vr(e).position === "fixed", o = a ? Ur(e) : e;
	for (; Dr(o) && !Br(o);) {
		let t = Vr(o), n = Lr(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Ar(o) && !n && li(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Ur(o);
	}
	return t.set(e, r), r;
}
function di(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Mr(t) ? [] : ui(t, this._c) : [].concat(n), r], o = ci(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ci(t, a[e], i);
		s = Fn(n.top, s), c = Pn(n.right, c), l = Pn(n.bottom, l), u = Fn(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function fi(e) {
	let { width: t, height: n } = qr(e);
	return {
		width: t,
		height: n
	};
}
function pi(e, t, n) {
	let r = Or(t), i = Tr(t), a = n === "fixed", o = $r(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Rn(0);
	function l() {
		c.x = ei(i);
	}
	if (r || !r && !a) if ((Cr(t) !== "body" || Ar(i)) && (s = Hr(t)), r) {
		let e = $r(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? ti(i, s) : Rn(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function mi(e) {
	return Vr(e).position === "static";
}
function hi(e, t) {
	if (!Or(e) || Vr(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Tr(e) === n && (n = n.ownerDocument.body), n;
}
function gi(e, t) {
	let n = wr(e);
	if (Mr(e)) return n;
	if (!Or(e)) {
		let t = Ur(e);
		for (; t && !Br(t);) {
			if (Dr(t) && !mi(t)) return t;
			t = Ur(t);
		}
		return n;
	}
	let r = hi(e, t);
	for (; r && jr(r) && mi(r);) r = hi(r, t);
	return r && Br(r) && mi(r) && !Lr(r) ? n : r || Rr(e) || n;
}
var _i = async function(e) {
	let t = this.getOffsetParent || gi, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: pi(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function vi(e) {
	return Vr(e).direction === "rtl";
}
var yi = {
	convertOffsetParentRelativeRectToViewportRelativeRect: ni,
	getDocumentElement: Tr,
	getClippingRect: di,
	getOffsetParent: gi,
	getElementRects: _i,
	getClientRects: ri,
	getDimensions: fi,
	getScale: Yr,
	isElement: Dr,
	isRTL: vi
};
function bi(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xi(e, t) {
	let n = null, r, i = Tr(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Ln(d), h = Ln(i.clientWidth - (u + f)), g = Ln(i.clientHeight - (d + p)), _ = Ln(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Fn(0, Pn(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !bi(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Si(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Jr(e), u = i || a ? [...l ? Gr(l) : [], ...t ? Gr(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? xi(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? $r(e) : null;
	c && g();
	function g() {
		let t = $r(e);
		h && !bi(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Ci = vr, wi = yr, Ti = fr, Ei = xr, Di = hr, Oi = dr, ki = br, Ai = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: yi,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return ur(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react-dom@2.1.8_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
J();
var ji = typeof document < "u" ? me : function() {};
function Mi(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Mi(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Mi(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ni(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pi(e, t) {
	let n = Ni(e);
	return Math.round(t * n) / n;
}
function Fi(e) {
	let t = U(e);
	return ji(() => {
		t.current = e;
	}), t;
}
function Ii(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = V({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = V(r);
	Mi(f, r) || p(r);
	let [m, h] = V(null), [g, _] = V(null), v = G((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = G((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = U(null), C = U(null), w = U(u), T = c != null, E = Fi(c), D = Fi(i), O = Fi(l), k = G(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Ai(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Mi(w.current, t) && (w.current = t, Lt(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	ji(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = U(!1);
	ji(() => (A.current = !0, () => {
		A.current = !1;
	}), []), ji(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let j = W(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = W(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = W(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = Pi(M.floating, u.x), r = Pi(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Ni(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return W(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var Li = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Oi({
				element: r.current,
				padding: i
			}).fn(n) : r ? Oi({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Ri = (e, t) => {
	let n = Ci(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, zi = (e, t) => {
	let n = wi(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Bi = (e, t) => ({
	fn: ki(e).fn,
	options: [e, t]
}), Vi = (e, t) => {
	let n = Ti(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Hi = (e, t) => {
	let n = Ei(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ui = (e, t) => {
	let n = Di(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Wi = (e, t) => {
	let n = Li(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/formatErrorMessage.js
function Gi(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var Ki = Gi("https://base-ui.com/production-error", "Base UI");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js
J();
var qi = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (qi.displayName = "DialogRootContext");
function Ji(e) {
	let t = ge(qi);
	if (e === !1 && t === void 0) throw Error(process.env.NODE_ENV === "production" ? Ki(27) : "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useRefWithInit.js
J();
var Yi = {};
function Xi(e, t) {
	let n = U(Yi);
	return n.current === Yi && (n.current = e(t)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useMergedRefs.js
function Zi(e, t, n, r) {
	let i = Xi($i).current;
	return ea(i, e, t, n, r) && na(i, [
		e,
		t,
		n,
		r
	]), i.callback;
}
function Qi(e) {
	let t = Xi($i).current;
	return ta(t, e) && na(t, e), t.callback;
}
function $i() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function ea(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function ta(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function na(e, t) {
	if (e.refs = t, t.every((e) => e == null)) {
		e.callback = null;
		return;
	}
	e.callback = (n) => {
		if (e.cleanup &&= (e.cleanup(), null), n != null) {
			let r = Array(t.length).fill(null);
			for (let e = 0; e < t.length; e += 1) {
				let i = t[e];
				if (i != null) switch (typeof i) {
					case "function": {
						let t = i(n);
						typeof t == "function" && (r[e] = t);
						break;
					}
					case "object":
						i.current = n;
						break;
					default:
				}
			}
			e.cleanup = () => {
				for (let e = 0; e < t.length; e += 1) {
					let n = t[e];
					if (n != null) switch (typeof n) {
						case "function": {
							let t = r[e];
							typeof t == "function" ? t() : n(null);
							break;
						}
						case "object":
							n.current = null;
							break;
						default:
					}
				}
			};
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/reactVersion.js
J();
var ra = parseInt(Ft, 10);
function ia(e) {
	return ra >= e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/getReactElementRef.js
J();
function aa(e) {
	if (!/* @__PURE__ */ ct(e)) return null;
	let t = e, n = t.props;
	return (ia(19) ? n?.ref : t.ref) ?? null;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/mergeObjects.js
function oa(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/warn.js
var sa;
process.env.NODE_ENV !== "production" && (sa = /* @__PURE__ */ new Set());
function ca(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		sa.has(t) || (sa.add(t), console.warn(`Base UI: ${t}`));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/getStateAttributesProps.js
function la(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (t?.hasOwnProperty(r)) {
			let e = t[r](i);
			e != null && Object.assign(n, e);
			continue;
		}
		i === !0 ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString());
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveClassName.js
function ua(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function da(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var fa = {};
function pa(e, t, n, r, i) {
	let a = { ...ya(e, fa) };
	return t && (a = ha(a, t)), n && (a = ha(a, n)), r && (a = ha(a, r)), i && (a = ha(a, i)), a;
}
function ma(e) {
	if (e.length === 0) return fa;
	if (e.length === 1) return ya(e[0], fa);
	let t = { ...ya(e[0], fa) };
	for (let n = 1; n < e.length; n += 1) t = ha(t, e[n]);
	return t;
}
function ha(e, t) {
	return va(t) ? t(e) : ga(e, t);
}
function ga(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = oa(e.style, r);
				break;
			case "className":
				e[n] = Sa(e.className, r);
				break;
			default: _a(n, r) ? e[n] = ba(e[n], r) : e[n] = r;
		}
	}
	return e;
}
function _a(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function va(e) {
	return typeof e == "function";
}
function ya(e, t) {
	return va(e) ? e(t) : e ?? fa;
}
function ba(e, t) {
	return t ? e ? (n) => {
		if (Ca(n)) {
			let r = n;
			xa(r);
			let i = t(r);
			return r.baseUIHandlerPrevented || e?.(r), i;
		}
		let r = t(n);
		return e?.(n), r;
	} : t : e;
}
function xa(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function Sa(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function Ca(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/empty.js
function wa() {}
Object.freeze([]);
var Ta = Object.freeze({}), Ea = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useRenderElement.js
J();
function Da(e, t, n = {}) {
	let r = t.render, i = Oa(t, n);
	return n.enabled === !1 ? null : Aa(e, r, i, n.state ?? Ta);
}
function Oa(e, t = {}) {
	let { className: n, style: r, render: i } = e, { state: a = Ta, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? ua(n, a) : void 0, d = l ? da(r, a) : void 0, f = l ? la(a, c) : Ta, p = l ? oa(f, Array.isArray(s) ? ma(s) : s) ?? Ta : Ta;
	return typeof document < "u" && (l ? Array.isArray(o) ? p.ref = Qi([
		p.ref,
		aa(i),
		...o
	]) : p.ref = Zi(p.ref, aa(i), o) : Zi(null, null)), l ? (u !== void 0 && (p.className = Sa(p.className, u)), d !== void 0 && (p.style = oa(p.style, d)), p) : Ta;
}
var ka = Symbol.for("react.lazy");
function Aa(e, t, n, r) {
	if (t) {
		if (typeof t == "function") return process.env.NODE_ENV !== "production" && ja(t), t(n, r);
		let e = pa(n, t.props);
		e.ref = n.ref;
		let i = t;
		if (i?.$$typeof === ka && (i = vt.toArray(t)[0]), process.env.NODE_ENV !== "production" && !/* @__PURE__ */ ct(i)) throw Error([
			"Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
			"A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
			"https://base-ui.com/r/invalid-render-prop"
		].join("\n"));
		return /* @__PURE__ */ dt(i, e);
	}
	if (e && typeof e == "string") return Ma(e, n);
	throw Error(process.env.NODE_ENV === "production" ? Ki(8) : "Base UI: Render element or function are not defined.");
}
function ja(e) {
	let t = e.name;
	if (t.length === 0) return;
	let n = t.charCodeAt(0);
	n < 65 || n > 90 || ca(`The \`render\` prop received a function named \`${t}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function Ma(e, t) {
	return e === "button" ? /* @__PURE__ */ o("button", {
		type: "button",
		...t,
		key: t.key
	}) : e === "img" ? /* @__PURE__ */ o("img", {
		alt: "",
		...t,
		key: t.key
	}) : /* @__PURE__ */ o(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js
var Na = /* @__PURE__ */ function(e) {
	return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e;
}({}), Pa = { [Na.startingStyle]: "" }, Fa = { [Na.endingStyle]: "" }, Ia = { transitionStatus(e) {
	return e === "starting" ? Pa : e === "ending" ? Fa : null;
} }, La = function(e) {
	return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = Na.startingStyle] = "startingStyle", e[e.endingStyle = Na.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e.side = "data-side", e.align = "data-align", e;
}({}), Ra = /* @__PURE__ */ function(e) {
	return e.popupOpen = "data-popup-open", e.pressed = "data-pressed", e;
}({});
Ra.popupOpen, Ra.popupOpen, Ra.pressed;
var za = { [La.open]: "" }, Ba = { [La.closed]: "" }, Va = { [La.anchorHidden]: "" }, Ha = {
	open(e) {
		return e ? za : Ba;
	},
	anchorHidden(e) {
		return e ? Va : null;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js
J();
var Ua = {
	...Ha,
	...Ia
}, Wa = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, forceRender: i = !1, ...a } = e, { store: o } = Ji(), s = o.useState("open"), c = o.useState("nested"), l = o.useState("mounted");
	return Da("div", e, {
		state: {
			open: s,
			transitionStatus: o.useState("transitionStatus")
		},
		ref: [o.context.backdropRef, t],
		stateAttributesMapping: Ua,
		props: [{
			role: "presentation",
			hidden: !l,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, a],
		enabled: i || !c
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useStableCallback.js
process.env.NODE_ENV !== "production" && (Wa.displayName = "DialogBackdrop"), J();
var Ga = ze[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)], Ka = Ga && Ga !== me ? Ga : (e) => e();
function X(e) {
	let t = Xi(qa).current;
	return t.next = e, Ka(t.effect), t.trampoline;
}
function qa() {
	let e = {
		next: void 0,
		callback: Ja,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function Ja() {
	if (process.env.NODE_ENV !== "production") throw Error("Base UI: Cannot call an event handler while rendering.");
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/error.js
var Ya;
process.env.NODE_ENV !== "production" && (Ya = /* @__PURE__ */ new Set());
function Xa(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		Ya.has(t) || (Ya.add(t), console.error(`Base UI: ${t}`));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/safeReact.js
J();
var Za = { ...ze };
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js
J();
var Z = typeof document < "u" ? me : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js
J();
var Qa = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (Qa.displayName = "CompositeRootContext");
function $a(e = !1) {
	let t = ge(Qa);
	if (t === void 0 && !e) throw Error(process.env.NODE_ENV === "production" ? Ki(16) : "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
J();
function eo(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: r = !1, tabIndex: i = 0, isNativeButton: a } = e, o = r && t !== !1, s = r && t === !1;
	return { props: W(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return r || (e.tabIndex = i, !a && n && (e.tabIndex = t ? i : -1)), (a && (t || o) || !a && n) && (e["aria-disabled"] = n), a && (!t || s) && (e.disabled = n), e;
	}, [
		r,
		n,
		t,
		o,
		s,
		a,
		i
	]) };
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/use-button/useButton.js
J();
function to(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: r = 0, native: i = !0, composite: a } = e, o = U(null), s = $a(!0), c = a ?? s !== void 0, { props: l } = eo({
		focusableWhenDisabled: n,
		disabled: t,
		composite: c,
		tabIndex: r,
		isNativeButton: i
	});
	process.env.NODE_ENV !== "production" && H(() => {
		if (!o.current) return;
		let e = no(o.current);
		i ? e || Xa(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${Za.captureOwnerStack?.() || ""}`) : e && Xa(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${Za.captureOwnerStack?.() || ""}`);
	}, [i]);
	let u = G(() => {
		let e = o.current;
		no(e) && c && t && l.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		l.disabled,
		c
	]);
	return Z(u, [u]), {
		getButtonProps: G((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: o, onPointerDown: s, ...u } = e;
			return pa({
				type: i ? "button" : void 0,
				onClick(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					n?.(e);
				},
				onMouseDown(e) {
					t || r?.(e);
				},
				onKeyDown(e) {
					if (t || (xa(e), o?.(e), e.baseUIHandlerPrevented)) return;
					let r = e.target === e.currentTarget, a = e.currentTarget, s = no(a), l = !i && ro(a), u = r && (i ? s : !l), d = e.key === "Enter", f = e.key === " ", p = a.getAttribute("role"), m = p?.startsWith("menuitem") || p === "option" || p === "gridcell";
					if (r && c && f) {
						if (e.defaultPrevented && m) return;
						e.preventDefault(), l || i && s ? (a.click(), e.preventBaseUIHandler()) : u && (n?.(e), e.preventBaseUIHandler());
						return;
					}
					u && (!i && (f || d) && e.preventDefault(), !i && d && n?.(e));
				},
				onKeyUp(e) {
					if (!t) {
						if (xa(e), a?.(e), e.target === e.currentTarget && i && c && no(e.currentTarget) && e.key === " ") {
							e.preventDefault();
							return;
						}
						e.baseUIHandlerPrevented || e.target === e.currentTarget && !i && !c && e.key === " " && n?.(e);
					}
				},
				onPointerDown(e) {
					if (t) {
						e.preventDefault();
						return;
					}
					s?.(e);
				}
			}, i ? void 0 : { role: "button" }, l, u);
		}, [
			t,
			l,
			c,
			i
		]),
		buttonRef: X((e) => {
			o.current = e, u();
		})
	};
}
function no(e) {
	return Or(e) && e.tagName === "BUTTON";
}
function ro(e) {
	return !!(e?.tagName === "A" && e?.href);
}
var io = "trigger-press", ao = "outside-press", oo = "close-press", so = "track-press", co = "input-change", lo = "focus-out", uo = "escape-key", fo = "keyboard", po = "drag", mo = "imperative-action";
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js
function ho(e, t, n, r) {
	let i = !1, a = !1, o = r ?? Ta;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		cancel() {
			i = !0;
		},
		allowPropagation() {
			a = !0;
		},
		get isCanceled() {
			return i;
		},
		get isPropagationAllowed() {
			return a;
		},
		trigger: n,
		...o
	};
}
function go(e, t, n) {
	let r = n ?? Ta;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		...r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js
J();
var _o = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, disabled: i = !1, nativeButton: a = !0, ...o } = e, { store: s } = Ji(), c = s.useState("open");
	function l(e) {
		c && s.setOpen(!1, ho(oo, e.nativeEvent));
	}
	let { getButtonProps: u, buttonRef: d } = to({
		disabled: i,
		native: a
	});
	return Da("button", e, {
		state: { disabled: i },
		ref: [t, d],
		props: [
			{ onClick: l },
			o,
			u
		]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useId.js
process.env.NODE_ENV !== "production" && (_o.displayName = "DialogClose"), J();
var vo = 0;
function yo(e, t = "mui") {
	let [n, r] = V(e), i = e || n;
	return H(() => {
		n ?? (vo += 1, r(`${t}-${vo}`));
	}, [n, t]), i;
}
var bo = Za.useId;
function xo(e, t) {
	if (bo !== void 0) {
		let n = bo();
		return e ?? (t ? `${t}-${n}` : n);
	}
	return yo(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useBaseUiId.js
function So(e) {
	return xo(e, "base-ui");
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js
J();
var Co = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, id: i, ...a } = e, { store: o } = Ji(), s = So(i);
	return o.useSyncedValueWithCleanup("descriptionElementId", s), Da("p", e, {
		ref: t,
		props: [{ id: s }, a]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useOnMount.js
process.env.NODE_ENV !== "production" && (Co.displayName = "DialogDescription"), J();
var wo = [];
function To(e) {
	H(e, wo);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useTimeout.js
var Eo = 0, Do = class e {
	static create() {
		return new e();
	}
	currentId = Eo;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = Eo, t();
		}, e);
	}
	isStarted() {
		return this.currentId !== Eo;
	}
	clear = () => {
		this.currentId !== Eo && (clearTimeout(this.currentId), this.currentId = Eo);
	};
	disposeEffect = () => this.clear;
};
function Oo() {
	let e = Xi(Do.create).current;
	return To(e.disposeEffect), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/detectBrowser.js
var ko = typeof navigator < "u", Ao = Ro(), jo = Bo(), Mo = zo(), No = typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter:none"), Po = Ao.platform === "MacIntel" && Ao.maxTouchPoints > 1 ? !0 : /iP(hone|ad|od)|iOS/.test(Ao.platform);
ko && /firefox/i.test(Mo);
var Fo = ko && /apple/i.test(navigator.vendor);
ko && /Edg/i.test(Mo);
var Io = ko && /android/i.test(jo) || /android/i.test(Mo);
ko && jo.toLowerCase().startsWith("mac") && navigator.maxTouchPoints;
var Lo = Mo.includes("jsdom/");
function Ro() {
	if (!ko) return {
		platform: "",
		maxTouchPoints: -1
	};
	let e = navigator.userAgentData;
	return e?.platform ? {
		platform: e.platform,
		maxTouchPoints: navigator.maxTouchPoints
	} : {
		platform: navigator.platform ?? "",
		maxTouchPoints: navigator.maxTouchPoints ?? -1
	};
}
function zo() {
	if (!ko) return "";
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map(({ brand: e, version: t }) => `${e}/${t}`).join(" ") : navigator.userAgent;
}
function Bo() {
	if (!ko) return "";
	let e = navigator.userAgentData;
	return e?.platform ? e.platform : navigator.platform ?? "";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var Vo = "data-base-ui-focusable";
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js
function Ho(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
function Q(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode?.();
	if (e.contains(t)) return !0;
	if (n && kr(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Uo(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Wo(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Go(e) {
	return e.matches("html,body");
}
function Ko(e) {
	return Or(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function qo(e) {
	return e ? e.getAttribute("role") === "combobox" && Ko(e) : !1;
}
function Jo(e) {
	return e ? e.hasAttribute("data-base-ui-focusable") ? e : e.querySelector("[data-base-ui-focusable]") || e : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/nodes.js
function Yo(e, t, n = !0) {
	return e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Yo(e, t.id, n)]);
}
function Xo(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function Zo(e) {
	e.preventDefault(), e.stopPropagation();
}
function Qo(e) {
	return "nativeEvent" in e;
}
function $o(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : Io && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function es(e) {
	return Lo ? !1 : !Io && e.width === 0 && e.height === 0 || Io && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function ts(e) {
	let t = e.type;
	return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js
function ns(e) {
	return Vr(e).display !== "none";
}
var rs = /* @__PURE__ */ [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
].join(","), is = typeof Element > "u", as = is ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, os = !is && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, ss = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : ss(e.parentNode));
}, cs = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, ls = function(e, t, n) {
	if (ss(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(rs));
	return t && as.call(e, rs) && r.unshift(e), r = r.filter(n), r;
}, us = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!ss(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = us(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			as.call(a, rs) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !ss(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = us(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, ds = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, fs = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || cs(e)) && !ds(e) ? 0 : e.tabIndex;
}, ps = function(e, t) {
	var n = fs(e);
	return n < 0 && t && !ds(e) ? 0 : n;
}, ms = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, hs = function(e) {
	return e.tagName === "INPUT";
}, gs = function(e) {
	return hs(e) && e.type === "hidden";
}, _s = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, vs = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, ys = function(e) {
	if (!e.name) return !0;
	var t = e.form || os(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = vs(r, e.form);
	return !i || i === e;
}, bs = function(e) {
	return hs(e) && e.type === "radio";
}, xs = function(e) {
	return bs(e) && !ys(e);
}, Ss = function(e) {
	var t = e && os(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = os(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Cs = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, ws = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = as.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (as.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = os(e);
				if (o && !o.shadowRoot && r(o) === !0) return Cs(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (Ss(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Cs(e);
	return !1;
}, Ts = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return as.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Es = function(e, t) {
	return !(t.disabled || gs(t) || ws(t, e) || _s(t) || Ts(t));
}, Ds = function(e, t) {
	return !(xs(t) || fs(t) < 0 || !Es(e, t));
}, Os = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, ks = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = ps(a, i), s = i ? ks(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(ms).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, As = function(e, t) {
	return t ||= {}, ks(t.getShadowRoot ? us([e], t.includeContainer, {
		filter: Ds.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Os
	}) : ls(e, t.includeContainer, Ds.bind(null, t)));
}, js = function(e, t) {
	return t ||= {}, t.getShadowRoot ? us([e], t.includeContainer, {
		filter: Es.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : ls(e, t.includeContainer, Es.bind(null, t));
}, Ms = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return as.call(e, rs) === !1 ? !1 : Ds(t, e);
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/owner.js
function Ns(e) {
	return e?.ownerDocument || document;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js
var Ps = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function Fs(e, t) {
	let n = As(e, Ps()), r = n.length;
	if (r === 0) return;
	let i = Ho(Ns(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function Is(e) {
	return Fs(Ns(e).body, 1) || e;
}
function Ls(e) {
	return Fs(Ns(e).body, -1) || e;
}
function Rs(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !Q(n, r);
}
function zs(e) {
	As(e, Ps()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function Bs(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useValueAsRef.js
function Vs(e) {
	let t = Xi(Hs, e).current;
	return t.next = e, Z(t.effect), t;
}
function Hs(e) {
	let t = {
		current: e,
		next: e,
		effect: () => {
			t.current = t.next;
		}
	};
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useAnimationFrame.js
var Us = null, Ws = globalThis.requestAnimationFrame, Gs = new class {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = !1;
	tick = (e) => {
		this.isScheduled = !1;
		let t = this.callbacks, n = this.callbacksCount;
		if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for (let n = 0; n < t.length; n += 1) t[n]?.(e);
	};
	request(e) {
		let t = this.nextId;
		this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1;
		let n = process.env.NODE_ENV !== "production" && Ws !== requestAnimationFrame && (Ws = requestAnimationFrame, !0);
		return (!this.isScheduled || n) && (requestAnimationFrame(this.tick), this.isScheduled = !0), t;
	}
	cancel(e) {
		let t = e - this.startId;
		t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, --this.callbacksCount);
	}
}(), Ks = class e {
	static create() {
		return new e();
	}
	static request(e) {
		return Gs.request(e);
	}
	static cancel(e) {
		return Gs.cancel(e);
	}
	currentId = Us;
	request(e) {
		this.cancel(), this.currentId = Gs.request(() => {
			this.currentId = Us, e();
		});
	}
	cancel = () => {
		this.currentId !== Us && (Gs.cancel(this.currentId), this.currentId = Us);
	};
	disposeEffect = () => this.cancel;
};
function qs() {
	let e = Xi(Ks.create).current;
	return To(e.disposeEffect), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/visuallyHidden.js
var Js = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
}, Ys = {
	...Js,
	position: "fixed",
	top: 0,
	left: 0
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/FocusGuard.js
({ ...Js }), J();
var Xs = /* @__PURE__ */ Ye(function(e, t) {
	let [n, r] = V();
	Z(() => {
		Fo && r("button");
	}, []);
	let i = {
		tabIndex: 0,
		role: n
	};
	return /* @__PURE__ */ Vt("span", {
		...e,
		ref: t,
		style: Ys,
		"aria-hidden": n ? void 0 : !0,
		...i,
		"data-base-ui-focus-guard": ""
	});
});
process.env.NODE_ENV !== "production" && (Xs.displayName = "FocusGuard");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js
function Zs(e) {
	return `data-base-ui-${e}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/enqueueFocus.js
var Qs = 0;
function $s(e, t = {}) {
	let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
	r && cancelAnimationFrame(Qs);
	let a = () => e?.focus({ preventScroll: n });
	i ? a() : Qs = requestAnimationFrame(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/markOthers.js
var ec = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap()
}, tc = "data-base-ui-inert", nc = {
	inert: /* @__PURE__ */ new WeakSet(),
	"aria-hidden": /* @__PURE__ */ new WeakSet()
}, rc = /* @__PURE__ */ new WeakMap(), ic = 0;
function ac(e) {
	return nc[e];
}
function oc(e) {
	return e ? kr(e) ? e.host : oc(e.parentNode) : null;
}
var sc = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = oc(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null), cc = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		let n = e;
		for (; n && !t.has(n);) t.add(n), n = n.parentNode;
	}), t;
}, lc = (e, t, n) => {
	let r = [], i = (e) => {
		!e || n.has(e) || Array.from(e.children).forEach((e) => {
			Cr(e) !== "script" && (t.has(e) ? i(e) : r.push(e));
		});
	};
	return i(e), r;
};
function uc(e, t, n, r, { mark: i = !0, markerIgnoreElements: a = [] }) {
	let o = r ? "inert" : n ? "aria-hidden" : null, s = null, c = null, l = sc(t, e), u = i ? sc(t, a) : [], d = new Set(u), f = i ? lc(t, cc(l), new Set(l)).filter((e) => !d.has(e)) : [], p = [], m = [];
	if (o) {
		let e = ec[o], n = ac(o);
		c = n, s = e;
		let r = sc(t, Array.from(t.querySelectorAll("[aria-live]"))), i = l.concat(r);
		lc(t, cc(i), new Set(i)).forEach((t) => {
			let r = t.getAttribute(o), i = r !== null && r !== "false", a = (e.get(t) || 0) + 1;
			e.set(t, a), p.push(t), a === 1 && i && n.add(t), i || t.setAttribute(o, o === "inert" ? "" : "true");
		});
	}
	return i && f.forEach((e) => {
		let t = (rc.get(e) || 0) + 1;
		rc.set(e, t), m.push(e), t === 1 && e.setAttribute(tc, "");
	}), ic += 1, () => {
		s && p.forEach((e) => {
			let t = (s.get(e) || 0) - 1;
			s.set(e, t), t || (!c?.has(e) && o && e.removeAttribute(o), c?.delete(e));
		}), i && m.forEach((e) => {
			let t = (rc.get(e) || 0) - 1;
			rc.set(e, t), t || e.removeAttribute(tc);
		}), --ic, ic || (ec.inert = /* @__PURE__ */ new WeakMap(), ec["aria-hidden"] = /* @__PURE__ */ new WeakMap(), nc.inert = /* @__PURE__ */ new WeakSet(), nc["aria-hidden"] = /* @__PURE__ */ new WeakSet(), rc = /* @__PURE__ */ new WeakMap());
	};
}
function dc(e, t = {}) {
	let { ariaHidden: n = !1, inert: r = !1, mark: i = !0, markerIgnoreElements: a = [] } = t, o = Ns(e[0]).body;
	return uc(e, o, n, r, {
		mark: i,
		markerIgnoreElements: a
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
J();
var fc = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (fc.displayName = "PortalContext");
var pc = () => ge(fc), mc = Zs("portal");
function hc(e = {}) {
	let { ref: t, container: n, componentProps: r = Ta, elementProps: i } = e, a = xo(), o = pc()?.portalNode, [s, c] = V(null), [l, u] = V(null), d = X((e) => {
		e !== null && u(e);
	}), f = U(null);
	Z(() => {
		if (n === null) {
			f.current && (f.current = null, u(null), c(null));
			return;
		}
		if (a == null) return;
		let e = (n && (Er(n) ? n : n.current)) ?? o ?? document.body;
		if (e == null) {
			f.current && (f.current = null, u(null), c(null));
			return;
		}
		f.current !== e && (f.current = e, u(null), c(e));
	}, [
		n,
		o,
		a
	]);
	let p = Da("div", r, {
		ref: [t, d],
		props: [{
			id: a,
			[mc]: ""
		}, i]
	});
	return {
		portalNode: l,
		portalSubtree: s && p ? /* @__PURE__ */ it(p, s) : null
	};
}
var gc = /* @__PURE__ */ Ye(function(e, t) {
	let { children: n, container: r, className: i, render: a, renderGuards: o, ...s } = e, { portalNode: c, portalSubtree: u } = hc({
		container: r,
		ref: t,
		componentProps: e,
		elementProps: s
	}), d = U(null), f = U(null), p = U(null), m = U(null), [h, g] = V(null), _ = h?.modal, v = h?.open, y = typeof o == "boolean" ? o : !!h && !h.modal && h.open && !!c;
	H(() => {
		if (!c || _) return;
		function e(e) {
			c && e.relatedTarget && Rs(e) && (e.type === "focusin" ? Bs : zs)(c);
		}
		return c.addEventListener("focusin", e, !0), c.addEventListener("focusout", e, !0), () => {
			c.removeEventListener("focusin", e, !0), c.removeEventListener("focusout", e, !0);
		};
	}, [c, _]), H(() => {
		!c || v || Bs(c);
	}, [v, c]);
	let b = W(() => ({
		beforeOutsideRef: d,
		afterOutsideRef: f,
		beforeInsideRef: p,
		afterInsideRef: m,
		portalNode: c,
		setFocusManagerState: g
	}), [c]);
	return /* @__PURE__ */ Vt(l, { children: [u, /* @__PURE__ */ Vt(fc.Provider, {
		value: b,
		children: [
			y && c && /* @__PURE__ */ Vt(Xs, {
				"data-type": "outside",
				ref: d,
				onFocus: (e) => {
					Rs(e, c) ? p.current?.focus() : Ls(h ? h.domReference : null)?.focus();
				}
			}),
			y && c && /* @__PURE__ */ Vt("span", {
				"aria-owns": c.id,
				style: Ea
			}),
			c && /* @__PURE__ */ it(n, c),
			y && c && /* @__PURE__ */ Vt(Xs, {
				"data-type": "outside",
				ref: f,
				onFocus: (e) => {
					Rs(e, c) ? m.current?.focus() : (Is(h ? h.domReference : null)?.focus(), h?.closeOnFocusOut && h?.onOpenChange(!1, ho("focus-out", e.nativeEvent)));
				}
			})
		]
	})] });
});
process.env.NODE_ENV !== "production" && (gc.displayName = "FloatingPortal");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js
function _c() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			e.get(t)?.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			e.get(t)?.delete(n);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js
J();
var vc = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (vc.displayName = "FloatingNodeContext");
var yc = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (yc.displayName = "FloatingTreeContext");
var bc = () => ge(vc)?.id || null, xc = (e) => {
	let t = ge(yc);
	return e ?? t;
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveRef.js
function Sc(e) {
	return e == null ? e : "current" in e ? e.current : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js
J();
function Cc(e, t) {
	let n = wr(e.target);
	return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || "keyboard" : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : "";
}
var wc = 20, Tc = [];
function Ec() {
	Tc = Tc.filter((e) => e.deref()?.isConnected);
}
function Dc(e) {
	Ec(), e && Cr(e) !== "body" && (Tc.push(new WeakRef(e)), Tc.length > wc && (Tc = Tc.slice(-wc)));
}
function Oc() {
	return Ec(), Tc[Tc.length - 1]?.deref();
}
function kc(e) {
	if (!e) return null;
	let t = Ps();
	return Ms(e, t) ? e : As(e, t)[0] || e;
}
function Ac(e) {
	return !e || !e.isConnected ? !1 : typeof e.checkVisibility == "function" ? e.checkVisibility() : ns(e);
}
function jc(e, t) {
	if (!t.current.includes("floating") && !e.getAttribute("role")?.includes("dialog")) return;
	let n = Ps(), r = js(e, n).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return Ms(e, n) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), i = e.getAttribute("tabindex");
	t.current.includes("floating") || r.length === 0 ? i !== "0" && e.setAttribute("tabindex", "0") : (i !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function Mc(e) {
	let { context: t, children: n, disabled: r = !1, initialFocus: i = !0, returnFocus: a = !0, restoreFocus: o = !1, modal: s = !0, closeOnFocusOut: c = !0, openInteractionType: u = "", nextFocusableElement: d, previousFocusableElement: f, beforeContentFocusGuardRef: p, externalTree: m, getInsideElements: h } = e, g = "rootStore" in t ? t.rootStore : t, _ = g.useState("open"), v = g.useState("domReferenceElement"), y = g.useState("floatingElement"), { events: b, dataRef: x } = g.context, S = X(() => x.current.floatingContext?.nodeId), C = i === !1, w = qo(v) && C, T = U(["content"]), E = Vs(i), D = Vs(a), O = Vs(u), k = xc(m), A = pc(), j = U(!1), M = U(!1), N = U(!1), P = U(-1), F = U(""), ee = U(""), I = U(null), te = U(null), ne = Zi(I, p, A?.beforeInsideRef), L = Zi(te, A?.afterInsideRef), re = Oo(), R = Oo(), ie = qs(), ae = A != null, z = Jo(y), B = X((e = z) => e ? As(e, Ps()) : []), oe = X(() => h?.().filter((e) => e != null) ?? []), se = X((e) => {
		let t = B(e);
		return T.current.map(() => t).filter(Boolean).flat();
	});
	H(() => {
		if (r || !s) return;
		function e(e) {
			e.key === "Tab" && Q(z, Ho(Ns(z))) && B().length === 0 && !w && Zo(e);
		}
		let t = Ns(z);
		return t.addEventListener("keydown", e), () => {
			t.removeEventListener("keydown", e);
		};
	}, [
		r,
		v,
		z,
		s,
		T,
		w,
		B,
		se
	]), H(() => {
		if (r || !_) return;
		let e = Ns(z);
		function t() {
			N.current = !1;
		}
		function n(e) {
			let t = Uo(e), n = oe();
			N.current = !(Q(y, t) || Q(v, t) || Q(A?.portalNode, t) || n.some((e) => e === t || Q(e, t))), ee.current = e.pointerType || "keyboard", t?.closest("[data-base-ui-click-trigger]") && (M.current = !0);
		}
		function i() {
			ee.current = "keyboard";
		}
		return e.addEventListener("pointerdown", n, !0), e.addEventListener("pointerup", t, !0), e.addEventListener("pointercancel", t, !0), e.addEventListener("keydown", i, !0), () => {
			e.removeEventListener("pointerdown", n, !0), e.removeEventListener("pointerup", t, !0), e.removeEventListener("pointercancel", t, !0), e.removeEventListener("keydown", i, !0);
		};
	}, [
		r,
		y,
		v,
		z,
		_,
		A,
		oe
	]), H(() => {
		if (r || !c) return;
		let e = Ns(z);
		function t() {
			M.current = !0, R.start(0, () => {
				M.current = !1;
			});
		}
		function n(e) {
			let t = Uo(e), n = B().indexOf(t);
			n !== -1 && (P.current = n);
		}
		function i(t) {
			let n = t.relatedTarget, r = t.currentTarget, i = Uo(t);
			queueMicrotask(() => {
				let a = S(), c = g.context.triggerElements, l = oe(), u = n?.hasAttribute(Zs("focus-guard")) && [
					I.current,
					te.current,
					A?.beforeInsideRef.current,
					A?.afterInsideRef.current,
					A?.beforeOutsideRef.current,
					A?.afterOutsideRef.current,
					Sc(f),
					Sc(d)
				].includes(n), p = !(Q(v, n) || Q(y, n) || Q(n, y) || Q(A?.portalNode, n) || l.some((e) => e === n || Q(e, n)) || n != null && c.hasElement(n) || c.hasMatchingElement((e) => Q(e, n)) || u || k && (Yo(k.nodesRef.current, a).find((e) => Q(e.context?.elements.floating, n) || Q(e.context?.elements.domReference, n)) || Xo(k.nodesRef.current, a).find((e) => [e.context?.elements.floating, Jo(e.context?.elements.floating)].includes(n) || e.context?.elements.domReference === n)));
				if (r === v && z && jc(z, T), o && r !== v && !Ac(i) && Ho(e) === e.body) {
					if (Or(z) && (z.focus(), o === "popup")) {
						ie.request(() => {
							z.focus();
						});
						return;
					}
					let e = P.current, t = B(), n = t[e] || t[t.length - 1] || z;
					Or(n) && n.focus();
				}
				if (x.current.insideReactTree) {
					x.current.insideReactTree = !1;
					return;
				}
				(w || !s) && n && p && !M.current && (w || n !== Oc()) && (j.current = !0, g.setOpen(!1, ho(lo, t)));
			});
		}
		function a() {
			N.current || (x.current.insideReactTree = !0, re.start(0, () => {
				x.current.insideReactTree = !1;
			}));
		}
		let l = Or(v) ? v : null, u = [];
		if (!(!y && !l)) return l && (l.addEventListener("focusout", i), l.addEventListener("pointerdown", t), u.push(() => {
			l.removeEventListener("focusout", i), l.removeEventListener("pointerdown", t);
		})), y && (y.addEventListener("focusin", n), y.addEventListener("focusout", i), A && (y.addEventListener("focusout", a, !0), u.push(() => {
			y.removeEventListener("focusout", a, !0);
		})), u.push(() => {
			y.removeEventListener("focusin", n), y.removeEventListener("focusout", i);
		})), () => {
			u.forEach((e) => {
				e();
			});
		};
	}, [
		r,
		v,
		y,
		z,
		s,
		k,
		A,
		g,
		c,
		o,
		B,
		w,
		S,
		T,
		x,
		re,
		R,
		ie,
		d,
		f,
		oe
	]), H(() => {
		if (r || !y || !_) return;
		let e = Array.from(A?.portalNode?.querySelectorAll(`[${Zs("portal")}]`) || []), t = (k ? Xo(k.nodesRef.current, S()) : []).find((e) => qo(e.context?.elements.domReference || null))?.context?.elements.domReference, n = dc([
			...[
				y,
				...e,
				I.current,
				te.current,
				A?.beforeOutsideRef.current,
				A?.afterOutsideRef.current,
				...oe()
			],
			t,
			Sc(f),
			Sc(d),
			w ? v : null
		].filter((e) => e != null), {
			ariaHidden: s || w,
			mark: !1
		}), i = dc([y, ...e].filter((e) => e != null));
		return () => {
			i(), n();
		};
	}, [
		_,
		r,
		v,
		y,
		s,
		T,
		A,
		w,
		k,
		S,
		d,
		f,
		oe
	]), Z(() => {
		if (!_ || r || !Or(z)) return;
		let e = Ho(Ns(z));
		queueMicrotask(() => {
			let t = se(z), n = E.current, r = typeof n == "function" ? n(O.current || "") : n;
			if (r === void 0 || r === !1) return;
			let i;
			i = r === !0 || r === null ? t[0] || z : Sc(r), i = i || t[0] || z, !Q(z, e) && $s(i, { preventScroll: i === z });
		});
	}, [
		r,
		_,
		z,
		C,
		se,
		E,
		O
	]), Z(() => {
		if (r || !z) return;
		let e = Ns(z);
		Dc(Ho(e));
		function t(e) {
			if (e.open || (F.current = Cc(e.nativeEvent, ee.current)), e.reason === "trigger-hover" && e.nativeEvent.type === "mouseleave" && (j.current = !0), e.reason === "outside-press") if (e.nested) j.current = !1;
			else if ($o(e.nativeEvent) || es(e.nativeEvent)) j.current = !1;
			else {
				let e = !1;
				document.createElement("div").focus({ get preventScroll() {
					return e = !0, !1;
				} }), e ? j.current = !1 : j.current = !0;
			}
		}
		b.on("openchange", t);
		function n() {
			let e = D.current, t = typeof e == "function" ? e(F.current) : e;
			if (t === void 0 || t === !1) return null;
			if (t === null && (t = !0), typeof t == "boolean") {
				let e = v || Oc();
				return e && e.isConnected ? e : null;
			}
			let n = v || Oc();
			return Sc(t) || n || null;
		}
		return () => {
			b.off("openchange", t);
			let r = Ho(e), i = oe(), a = Q(y, r) || i.some((e) => e === r || Q(e, r)) || k && Yo(k.nodesRef.current, S(), !1).some((e) => Q(e.context?.elements.floating, r)), o = n();
			queueMicrotask(() => {
				let t = kc(o), n = typeof D.current != "boolean";
				D.current && !j.current && Or(t) && (!(!n && t !== r && r !== e.body) || a) && t.focus({ preventScroll: !0 }), j.current = !1;
			});
		};
	}, [
		r,
		y,
		z,
		D,
		x,
		b,
		k,
		v,
		S,
		oe
	]), Z(() => {
		if (!No || _ || !y) return;
		let e = Ho(Ns(y));
		!Or(e) || !Ko(e) || Q(y, e) && e.blur();
	}, [_, y]), Z(() => {
		if (!(r || !A)) return A.setFocusManagerState({
			modal: s,
			closeOnFocusOut: c,
			open: _,
			onOpenChange: g.setOpen,
			domReference: v
		}), () => {
			A.setFocusManagerState(null);
		};
	}, [
		r,
		A,
		s,
		_,
		g,
		c,
		v
	]), Z(() => {
		if (!(r || !z)) return jc(z, T), () => {
			queueMicrotask(Ec);
		};
	}, [
		r,
		z,
		T
	]);
	let ce = !r && (s ? !w : !0) && (ae || s);
	return /* @__PURE__ */ Vt(l, { children: [
		ce && /* @__PURE__ */ Vt(Xs, {
			"data-type": "inside",
			ref: ne,
			onFocus: (e) => {
				if (s) {
					let e = se();
					$s(e[e.length - 1]);
				} else A?.portalNode && (j.current = !1, Rs(e, A.portalNode) ? Is(v)?.focus() : Sc(f ?? A.beforeOutsideRef)?.focus());
			}
		}),
		n,
		ce && /* @__PURE__ */ Vt(Xs, {
			"data-type": "inside",
			ref: L,
			onFocus: (e) => {
				s ? $s(se()[0]) : A?.portalNode && (c && (j.current = !0), Rs(e, A.portalNode) ? Ls(v)?.focus() : Sc(d ?? A.afterOutsideRef)?.focus());
			}
		})
	] });
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js
J();
var Nc = {
	intentional: "onClick",
	sloppy: "onPointerDown"
};
function Pc() {
	return !1;
}
function Fc(e) {
	return {
		escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
		outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
	};
}
function Ic(e, t = {}) {
	let n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), i = n.useState("floatingElement"), { dataRef: a } = n.context, { enabled: o = !0, escapeKey: s = !0, outsidePress: c = !0, outsidePressEvent: l = "sloppy", referencePress: u = Pc, referencePressEvent: d = "sloppy", bubbles: f, externalTree: p } = t, m = xc(p), h = X(typeof c == "function" ? c : () => !1), g = typeof c == "function" ? h : c, _ = g !== !1, v = X(() => l), y = U(!1), b = U(!1), x = U(!1), { escapeKey: S, outsidePress: C } = Fc(f), w = U(null), T = Oo(), E = Oo(), D = X(() => {
		E.clear(), a.current.insideReactTree = !1;
	}), O = U(!1), k = U(""), A = X(u), j = X((e) => {
		if (!r || !o || !s || e.key !== "Escape" || O.current) return;
		let t = a.current.floatingContext?.nodeId, i = m ? Yo(m.nodesRef.current, t) : [];
		if (!S && i.length > 0) {
			let e = !0;
			if (i.forEach((t) => {
				t.context?.open && !t.context.dataRef.current.__escapeKeyBubbles && (e = !1);
			}), !e) return;
		}
		let c = ho(uo, Qo(e) ? e.nativeEvent : e);
		n.setOpen(!1, c), !S && !c.isPropagationAllowed && e.stopPropagation();
	}), M = X(() => {
		a.current.insideReactTree = !0, E.start(0, D);
	});
	H(() => {
		if (!r || !o) return;
		a.current.__escapeKeyBubbles = S, a.current.__outsidePressBubbles = C;
		let e = new Do(), t = new Do();
		function c() {
			e.clear(), O.current = !0;
		}
		function l() {
			e.start(zr() ? 5 : 0, () => {
				O.current = !1;
			});
		}
		function u() {
			x.current = !0, t.start(0, () => {
				x.current = !1;
			});
		}
		function d() {
			y.current = !1, b.current = !1;
		}
		function f() {
			let e = k.current, t = e === "pen" || !e ? "mouse" : e, n = v(), r = typeof n == "function" ? n() : n;
			return typeof r == "string" ? r : r[t];
		}
		function p(e) {
			let t = f();
			return t === "intentional" && e.type !== "click" || t === "sloppy" && e.type === "click";
		}
		function h(e) {
			let t = a.current.floatingContext?.nodeId, r = m && Yo(m.nodesRef.current, t).some((t) => Wo(e, t.context?.elements.floating));
			return Wo(e, n.select("floatingElement")) || Wo(e, n.select("domReferenceElement")) || r;
		}
		function E(e) {
			if (p(e)) {
				D();
				return;
			}
			if (a.current.insideReactTree) {
				D();
				return;
			}
			let r = Uo(e), i = `[${Zs("inert")}]`, o = Array.from(Ns(n.select("floatingElement")).querySelectorAll(i)), s = Dr(r) ? r.getRootNode() : null;
			kr(s) && (o = o.concat(Array.from(s.querySelectorAll(i))));
			let c = n.context.triggerElements;
			if (r && (c.hasElement(r) || c.hasMatchingElement((e) => Q(e, r)))) return;
			let l = Dr(r) ? r : null;
			for (; l && !Br(l);) {
				let e = Ur(l);
				if (Br(e) || !Dr(e)) break;
				l = e;
			}
			if (o.length && Dr(r) && !Go(r) && !Q(r, n.select("floatingElement")) && o.every((e) => !Q(l, e))) return;
			if (Or(r) && !("touches" in e)) {
				let t = Br(r), n = Vr(r), i = /auto|scroll/, a = t || i.test(n.overflowX), o = t || i.test(n.overflowY), s = a && r.clientWidth > 0 && r.scrollWidth > r.clientWidth, c = o && r.clientHeight > 0 && r.scrollHeight > r.clientHeight, l = n.direction === "rtl", u = c && (l ? e.offsetX <= r.offsetWidth - r.clientWidth : e.offsetX > r.clientWidth), d = s && e.offsetY > r.clientHeight;
				if (u || d) return;
			}
			if (h(e)) return;
			if (f() === "intentional" && x.current) {
				t.clear(), x.current = !1;
				return;
			}
			if (typeof g == "function" && !g(e)) return;
			let u = a.current.floatingContext?.nodeId, d = m ? Yo(m.nodesRef.current, u) : [];
			if (d.length > 0) {
				let e = !0;
				if (d.forEach((t) => {
					t.context?.open && !t.context.dataRef.current.__outsidePressBubbles && (e = !1);
				}), !e) return;
			}
			n.setOpen(!1, ho(ao, e)), D();
		}
		function A(e) {
			f() !== "sloppy" || e.pointerType === "touch" || !n.select("open") || !o || Wo(e, n.select("floatingElement")) || Wo(e, n.select("domReferenceElement")) || E(e);
		}
		function M(e) {
			if (f() !== "sloppy" || !n.select("open") || !o || Wo(e, n.select("floatingElement")) || Wo(e, n.select("domReferenceElement"))) return;
			let t = e.touches[0];
			t && (w.current = {
				startTime: Date.now(),
				startX: t.clientX,
				startY: t.clientY,
				dismissOnTouchEnd: !1,
				dismissOnMouseDown: !0
			}, T.start(1e3, () => {
				w.current && (w.current.dismissOnTouchEnd = !1, w.current.dismissOnMouseDown = !1);
			}));
		}
		function N(e) {
			k.current = "touch";
			let t = Uo(e);
			function n() {
				M(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		function P(e) {
			if (T.clear(), e.type === "pointerdown" && (k.current = e.pointerType), e.type === "mousedown" && w.current && !w.current.dismissOnMouseDown) return;
			let t = Uo(e);
			function n() {
				e.type === "pointerdown" ? A(e) : E(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		function F(e) {
			if (!y.current) return;
			let n = b.current;
			if (d(), f() === "intentional") {
				if (e.type === "pointercancel") {
					n && u();
					return;
				}
				if (!h(e)) {
					if (n) {
						u();
						return;
					}
					typeof g == "function" && !g(e) || (t.clear(), x.current = !0, D());
				}
			}
		}
		function ee(e) {
			if (f() !== "sloppy" || !w.current || Wo(e, n.select("floatingElement")) || Wo(e, n.select("domReferenceElement"))) return;
			let t = e.touches[0];
			if (!t) return;
			let r = Math.abs(t.clientX - w.current.startX), i = Math.abs(t.clientY - w.current.startY), a = Math.sqrt(r * r + i * i);
			a > 5 && (w.current.dismissOnTouchEnd = !0), a > 10 && (E(e), T.clear(), w.current = null);
		}
		function I(e) {
			let t = Uo(e);
			function n() {
				ee(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		function te(e) {
			f() !== "sloppy" || !w.current || Wo(e, n.select("floatingElement")) || Wo(e, n.select("domReferenceElement")) || (w.current.dismissOnTouchEnd && E(e), T.clear(), w.current = null);
		}
		function ne(e) {
			let t = Uo(e);
			function n() {
				te(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		let L = Ns(i);
		return s && (L.addEventListener("keydown", j), L.addEventListener("compositionstart", c), L.addEventListener("compositionend", l)), _ && (L.addEventListener("click", P, !0), L.addEventListener("pointerdown", P, !0), L.addEventListener("pointerup", F, !0), L.addEventListener("pointercancel", F, !0), L.addEventListener("mousedown", P, !0), L.addEventListener("mouseup", F, !0), L.addEventListener("touchstart", N, !0), L.addEventListener("touchmove", I, !0), L.addEventListener("touchend", ne, !0)), () => {
			s && (L.removeEventListener("keydown", j), L.removeEventListener("compositionstart", c), L.removeEventListener("compositionend", l)), _ && (L.removeEventListener("click", P, !0), L.removeEventListener("pointerdown", P, !0), L.removeEventListener("pointerup", F, !0), L.removeEventListener("pointercancel", F, !0), L.removeEventListener("mousedown", P, !0), L.removeEventListener("mouseup", F, !0), L.removeEventListener("touchstart", N, !0), L.removeEventListener("touchmove", I, !0), L.removeEventListener("touchend", ne, !0)), e.clear(), t.clear(), d(), x.current = !1;
		};
	}, [
		a,
		i,
		s,
		_,
		g,
		r,
		o,
		S,
		C,
		j,
		D,
		v,
		m,
		n,
		T
	]), H(D, [g, D]);
	let N = W(() => ({
		onKeyDown: j,
		[Nc[d]]: (e) => {
			A() && n.setOpen(!1, ho(io, e.nativeEvent));
		},
		...d !== "intentional" && { onClick(e) {
			A() && n.setOpen(!1, ho("trigger-press", e.nativeEvent));
		} }
	}), [
		j,
		n,
		d,
		A
	]), P = X((e) => {
		if (!r || !o || e.button !== 0) return;
		let t = Uo(e.nativeEvent);
		Q(n.select("floatingElement"), t) && (y.current || (y.current = !0, b.current = !1));
	}), F = X((e) => {
		!r || !o || (e.defaultPrevented || e.nativeEvent.defaultPrevented) && y.current && (b.current = !0);
	}), ee = W(() => ({
		onKeyDown: j,
		onPointerDown: F,
		onMouseDown: F,
		onClickCapture: M,
		onMouseDownCapture(e) {
			M(), P(e);
		},
		onPointerDownCapture(e) {
			M(), P(e);
		},
		onMouseUpCapture: M,
		onTouchEndCapture: M,
		onTouchMoveCapture: M
	}), [
		j,
		M,
		P,
		F
	]);
	return W(() => o ? {
		reference: N,
		floating: ee,
		trigger: N
	} : {}, [
		o,
		N,
		ee
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs
var Lc = (e, t, n) => {
	if (t.length === 1 && t[0] === n) {
		let t = !1;
		try {
			let n = {};
			e(n) === n && (t = !0);
		} catch {}
		if (t) {
			let e;
			try {
				throw Error();
			} catch (t) {
				({stack: e} = t);
			}
			console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", { stack: e });
		}
	}
}, Rc = (e, t, n) => {
	let { memoize: r, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, s = r(() => ({}), ...i);
	if (s.apply(null, a) !== s.apply(null, o)) {
		let e;
		try {
			throw Error();
		} catch (t) {
			({stack: e} = t);
		}
		console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
			arguments: n,
			firstInputs: a,
			secondInputs: o,
			stack: e
		});
	}
}, zc = {
	inputStabilityCheck: "once",
	identityFunctionCheck: "once"
}, Bc = /* @__PURE__ */ Symbol("NOT_FOUND");
function Vc(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Hc(e, t = `expected an object, instead received ${typeof e}`) {
	if (typeof e != "object") throw TypeError(t);
}
function Uc(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Wc = (e) => Array.isArray(e) ? e : [e];
function Gc(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return Uc(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Kc(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var qc = (e, t) => {
	let { identityFunctionCheck: n, inputStabilityCheck: r } = {
		...zc,
		...t
	};
	return {
		identityFunctionCheck: {
			shouldRun: n === "always" || n === "once" && e,
			run: Lc
		},
		inputStabilityCheck: {
			shouldRun: r === "always" || r === "once" && e,
			run: Rc
		}
	};
};
function Jc(e) {
	let t;
	return {
		get(n) {
			return t && e(t.key, n) ? t.value : Bc;
		},
		put(e, n) {
			t = {
				key: e,
				value: n
			};
		},
		getEntries() {
			return t ? [t] : [];
		},
		clear() {
			t = void 0;
		}
	};
}
function Yc(e, t) {
	let n = [];
	function r(e) {
		let r = n.findIndex((n) => t(e, n.key));
		if (r > -1) {
			let e = n[r];
			return r > 0 && (n.splice(r, 1), n.unshift(e)), e.value;
		}
		return Bc;
	}
	function i(t, i) {
		r(t) === Bc && (n.unshift({
			key: t,
			value: i
		}), n.length > e && n.pop());
	}
	function a() {
		return n;
	}
	function o() {
		n = [];
	}
	return {
		get: r,
		put: i,
		getEntries: a,
		clear: o
	};
}
var Xc = (e, t) => e === t;
function Zc(e) {
	return function(t, n) {
		if (t === null || n === null || t.length !== n.length) return !1;
		let { length: r } = t;
		for (let i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
		return !0;
	};
}
function Qc(e, t) {
	let { equalityCheck: n = Xc, maxSize: r = 1, resultEqualityCheck: i } = typeof t == "object" ? t : { equalityCheck: t }, a = Zc(n), o = 0, s = r <= 1 ? Jc(a) : Yc(r, a);
	function c() {
		let t = s.get(arguments);
		if (t === Bc) {
			if (t = e.apply(null, arguments), o++, i) {
				let e = s.getEntries().find((e) => i(e.value, t));
				e && (t = e.value, o !== 0 && o--);
			}
			s.put(arguments, t);
		}
		return t;
	}
	return c.clearCache = () => {
		s.clear(), c.resetResultsCount();
	}, c.resultsCount = () => o, c.resetResultsCount = () => {
		o = 0;
	}, c;
}
var $c = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, el = typeof WeakRef < "u" ? WeakRef : $c, tl = 0, nl = 1;
function rl() {
	return {
		s: tl,
		v: void 0,
		o: null,
		p: null
	};
}
function il(e, t = {}) {
	let n = rl(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = rl(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = rl(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === nl) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = i?.deref?.() ?? i;
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? new el(c) : c;
		}
		return s.s = nl, s.v = c, c;
	}
	return o.clearCache = () => {
		n = rl(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function al(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Vc(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = il, argsMemoizeOptions: u = [], devModeChecks: d = {} } = {
			...n,
			...a
		}, f = Wc(c), p = Wc(u), m = Gc(e), h = s(function() {
			return t++, o.apply(null, arguments);
		}, ...f), g = !0, _ = l(function() {
			r++;
			let e = Kc(m, arguments);
			if (i = h.apply(null, e), process.env.NODE_ENV !== "production") {
				let { identityFunctionCheck: t, inputStabilityCheck: n } = qc(g, d);
				if (t.shouldRun && t.run(o, e, i), n.shouldRun) {
					let t = Kc(m, arguments);
					n.run({
						inputSelectorResults: e,
						inputSelectorResultsCopy: t
					}, {
						memoize: s,
						memoizeOptions: f
					}, arguments);
				}
				g &&= !1;
			}
			return i;
		}, ...p);
		return Object.assign(_, {
			resultFunc: o,
			memoizedResultFunc: h,
			dependencies: m,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var ol = /* @__PURE__ */ al(il), sl = Object.assign((e, t = ol) => {
	Hc(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
	let n = Object.keys(e);
	return t(n.map((t) => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}));
}, { withTypes: () => sl });
al({
	memoize: Qc,
	memoizeOptions: {
		maxSize: 1,
		equalityCheck: Object.is
	}
});
var $ = (e, t, n, r, i, a, ...o) => {
	if (o.length > 0) throw Error(process.env.NODE_ENV === "production" ? Ki(1) : "Unsupported number of selectors");
	let s;
	if (e && t && n && r && i && a) s = (o, s, c, l) => a(e(o, s, c, l), t(o, s, c, l), n(o, s, c, l), r(o, s, c, l), i(o, s, c, l), s, c, l);
	else if (e && t && n && r && i) s = (a, o, s, c) => i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
	else if (e && t && n && r) s = (i, a, o, s) => r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
	else if (e && t && n) s = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
	else if (e && t) s = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
	else if (e) s = e;
	else throw Error("Missing arguments");
	return s;
}, cl = /* @__PURE__ */ r(((t) => {
	var n = (J(), e(ze)), r = Mn();
	function i(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var a = typeof Object.is == "function" ? Object.is : i, o = r.useSyncExternalStore, s = n.useRef, c = n.useEffect, l = n.useMemo, u = n.useDebugValue;
	t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!o) {
					if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
						var t = f.value;
						if (i(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, a(s, e)) return t;
				var n = r(e);
				return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var o = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			i
		]);
		var p = o(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), ll = /* @__PURE__ */ r(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var r = (J(), e(ze)), i = Mn(), a = typeof Object.is == "function" ? Object.is : n, o = i.useSyncExternalStore, s = r.useRef, c = r.useEffect, l = r.useMemo, u = r.useDebugValue;
		t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
			var d = s(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = l(function() {
				function e(e) {
					if (!o) {
						if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
							var t = f.value;
							if (i(t, e)) return c = t;
						}
						return c = e;
					}
					if (t = c, a(s, e)) return t;
					var n = r(e);
					return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
				}
				var o = !1, s, c, l = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, l === null ? void 0 : function() {
					return e(l());
				}];
			}, [
				t,
				n,
				r,
				i
			]);
			var p = o(e, d[0], d[1]);
			return c(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), u(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), ul = /* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = cl() : t.exports = ll();
}));
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/fastHooks.js
J();
var dl = [], fl = void 0;
function pl() {
	return fl;
}
function ml(e) {
	dl.push(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/useStore.js
J();
var hl = Mn(), gl = ul(), _l = ia(19) ? bl : xl;
function vl(e, t, n, r, i) {
	return _l(e, t, n, r, i);
}
function yl(e, t, n, r, i) {
	let a = G(() => t(e.getSnapshot(), n, r, i), [
		e,
		t,
		n,
		r,
		i
	]);
	return (0, hl.useSyncExternalStore)(e.subscribe, a, a);
}
ml({
	before(e) {
		e.syncIndex = 0, e.didInitialize || (e.syncTick = 1, e.syncHooks = [], e.didChangeStore = !0, e.getSnapshot = () => {
			let t = !1;
			for (let n = 0; n < e.syncHooks.length; n += 1) {
				let r = e.syncHooks[n], i = r.selector(r.store.state, r.a1, r.a2, r.a3);
				(r.didChange || !Object.is(r.value, i)) && (t = !0, r.value = i, r.didChange = !1);
			}
			return t && (e.syncTick += 1), e.syncTick;
		});
	},
	after(e) {
		e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1, e.subscribe = (t) => {
			let n = /* @__PURE__ */ new Set();
			for (let t of e.syncHooks) n.add(t.store);
			let r = [];
			for (let e of n) r.push(e.subscribe(t));
			return () => {
				for (let e of r) e();
			};
		}), (0, hl.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
	}
});
function bl(e, t, n, r, i) {
	let a = pl();
	if (!a) return yl(e, t, n, r, i);
	let o = a.syncIndex;
	a.syncIndex += 1;
	let s;
	return a.didInitialize ? (s = a.syncHooks[o], (s.store !== e || s.selector !== t || !Object.is(s.a1, n) || !Object.is(s.a2, r) || !Object.is(s.a3, i)) && (s.store !== e && (a.didChangeStore = !0), s.store = e, s.selector = t, s.a1 = n, s.a2 = r, s.a3 = i, s.didChange = !0)) : (s = {
		store: e,
		selector: t,
		a1: n,
		a2: r,
		a3: i,
		value: t(e.getSnapshot(), n, r, i),
		didChange: !1
	}, a.syncHooks.push(s)), s.value;
}
function xl(e, t, n, r, i) {
	return (0, gl.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, (e) => t(e, n, r, i));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/Store.js
var Sl = class {
	constructor(e) {
		this.state = e, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	getSnapshot = () => this.state;
	setState(e) {
		if (this.state === e) return;
		this.state = e, this.updateTick += 1;
		let t = this.updateTick;
		for (let n of this.listeners) {
			if (t !== this.updateTick) return;
			n(e);
		}
	}
	update(e) {
		for (let t in e) if (!Object.is(this.state[t], e[t])) {
			this.setState({
				...this.state,
				...e
			});
			return;
		}
	}
	set(e, t) {
		Object.is(this.state[e], t) || this.setState({
			...this.state,
			[e]: t
		});
	}
	notifyAll() {
		let e = { ...this.state };
		this.setState(e);
	}
	use(e, t, n, r) {
		return vl(this, e, t, n, r);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/ReactStore.js
J();
var Cl = class extends Sl {
	constructor(e, t = {}, n) {
		super(e), this.context = t, this.selectors = n;
	}
	useSyncedValue(e, t) {
		_e(e), Z(() => {
			this.state[e] !== t && this.set(e, t);
		}, [e, t]);
	}
	useSyncedValueWithCleanup(e, t) {
		let n = this;
		Z(() => (n.state[e] !== t && n.set(e, t), () => {
			n.set(e, void 0);
		}), [
			n,
			e,
			t
		]);
	}
	useSyncedValues(e) {
		let t = this;
		if (process.env.NODE_ENV !== "production") {
			_e(e, (e) => Object.keys(e));
			let t = U(Object.keys(e)).current, n = Object.keys(e);
			(t.length !== n.length || t.some((e, t) => e !== n[t])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
		}
		Z(() => {
			t.update(e);
		}, [t, ...Object.values(e)]);
	}
	useControlledProp(e, t) {
		_e(e);
		let n = t !== void 0;
		if (Z(() => {
			n && !Object.is(this.state[e], t) && super.setState({
				...this.state,
				[e]: t
			});
		}, [
			e,
			t,
			n
		]), process.env.NODE_ENV !== "production") {
			let t = this.controlledValues ??= /* @__PURE__ */ new Map();
			t.has(e) || t.set(e, n);
			let r = t.get(e);
			r !== void 0 && r !== n && console.error(`A component is changing the ${n ? "" : "un"}controlled state of ${e.toString()} to be ${n ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
		}
	}
	select(e, t, n, r) {
		let i = this.selectors[e];
		return i(this.state, t, n, r);
	}
	useState(e, t, n, r) {
		return _e(e), vl(this, this.selectors[e], t, n, r);
	}
	useContextCallback(e, t) {
		_e(e);
		let n = X(t ?? wa);
		this.context[e] = n;
	}
	useStateSetter(e) {
		let t = U(void 0);
		return t.current === void 0 && (t.current = (t) => {
			this.set(e, t);
		}), t.current;
	}
	observe(e, t) {
		let n;
		n = typeof e == "function" ? e : this.selectors[e];
		let r = n(this.state);
		return t(r, r, this), this.subscribe((e) => {
			let i = n(e);
			if (!Object.is(r, i)) {
				let e = r;
				r = i, t(i, e, this);
			}
		});
	}
}, wl = {
	open: $((e) => e.open),
	domReferenceElement: $((e) => e.domReferenceElement),
	referenceElement: $((e) => e.positionReference ?? e.referenceElement),
	floatingElement: $((e) => e.floatingElement),
	floatingId: $((e) => e.floatingId)
}, Tl = class extends Cl {
	constructor(e) {
		let { nested: t, noEmit: n, onOpenChange: r, triggerElements: i, ...a } = e;
		super({
			...a,
			positionReference: a.referenceElement,
			domReferenceElement: a.referenceElement
		}, {
			onOpenChange: r,
			dataRef: { current: {} },
			events: _c(),
			nested: t,
			noEmit: n,
			triggerElements: i
		}, wl);
	}
	setOpen = (e, t) => {
		if ((!e || !this.state.open || ts(t.event)) && (this.context.dataRef.current.openEvent = e ? t.event : void 0), !this.context.noEmit) {
			let n = {
				open: e,
				reason: t.reason,
				nativeEvent: t.event,
				nested: this.context.nested,
				triggerElement: t.trigger
			};
			this.context.events.emit("openchange", n);
		}
		this.context.onOpenChange?.(e, t);
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js
J();
function El(e, t = !1, n = !1) {
	let [r, i] = V(e && t ? "idle" : void 0), [a, o] = V(e);
	return e && !a && (o(!0), i("starting")), !e && a && r !== "ending" && !n && i("ending"), !e && !a && r === "ending" && i(void 0), Z(() => {
		if (!e && a && r !== "ending" && n) {
			let e = Ks.request(() => {
				i("ending");
			});
			return () => {
				Ks.cancel(e);
			};
		}
	}, [
		e,
		a,
		r,
		n
	]), Z(() => {
		if (!e || t) return;
		let n = Ks.request(() => {
			i(void 0);
		});
		return () => {
			Ks.cancel(n);
		};
	}, [t, e]), Z(() => {
		if (!e || !t) return;
		e && a && r !== "idle" && i("starting");
		let n = Ks.request(() => {
			i("idle");
		});
		return () => {
			Ks.cancel(n);
		};
	}, [
		t,
		e,
		a,
		i,
		r
	]), W(() => ({
		mounted: a,
		setMounted: o,
		transitionStatus: r
	}), [a, r]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useAnimationsFinished.js
J();
function Dl(e, t = !1, n = !0) {
	let r = qs();
	return X((i, a = null) => {
		r.cancel();
		function o() {
			Lt(i);
		}
		let s = Sc(e);
		if (s == null) return;
		let c = s;
		if (typeof c.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) i();
		else {
			function e() {
				let e = Na.startingStyle;
				if (!c.hasAttribute(e)) {
					r.request(i);
					return;
				}
				let t = new MutationObserver(() => {
					c.hasAttribute(e) || (t.disconnect(), i());
				});
				t.observe(c, {
					attributes: !0,
					attributeFilter: [e]
				}), a?.addEventListener("abort", () => t.disconnect(), { once: !0 });
			}
			function i() {
				Promise.all(c.getAnimations().map((e) => e.finished)).then(() => {
					a?.aborted || o();
				}).catch(() => {
					let e = c.getAnimations();
					if (n) {
						if (a?.aborted) return;
						o();
					} else e.length > 0 && e.some((e) => e.pending || e.playState !== "finished") && i();
				});
			}
			if (t) {
				e();
				return;
			}
			r.request(i);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js
J();
function Ol(e) {
	let { enabled: t = !0, open: n, ref: r, onComplete: i } = e, a = X(i), o = Dl(r, n, !1);
	H(() => {
		if (!t) return;
		let e = new AbortController();
		return o(a, e.signal), () => {
			e.abort();
		};
	}, [
		t,
		n,
		a,
		o
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js
J();
function kl(e) {
	let t = e.useState("open");
	Z(() => {
		if (t && !e.select("activeTriggerId") && e.context.triggerElements.size === 1) {
			let t = e.context.triggerElements.entries().next();
			if (!t.done) {
				let [n, r] = t.value;
				e.update({
					activeTriggerId: n,
					activeTriggerElement: r
				});
			}
		}
	}, [t, e]);
}
function Al(e, t, n) {
	let { mounted: r, setMounted: i, transitionStatus: a } = El(e);
	t.useSyncedValues({
		mounted: r,
		transitionStatus: a
	});
	let o = X(() => {
		i(!1), t.update({
			activeTriggerId: null,
			activeTriggerElement: null,
			mounted: !1
		}), n?.(), t.context.onOpenChangeComplete?.(!1);
	});
	return Ol({
		enabled: !t.useState("preventUnmountingOnClose"),
		open: e,
		ref: t.context.popupRef,
		onComplete() {
			e || o();
		}
	}), {
		forceUnmount: o,
		transitionStatus: a
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js
var jl = class {
	constructor() {
		this.elementsSet = /* @__PURE__ */ new Set(), this.idMap = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		let n = this.idMap.get(e);
		if (n !== t && (n !== void 0 && this.elementsSet.delete(n), this.elementsSet.add(t), this.idMap.set(e, t), process.env.NODE_ENV !== "production" && this.elementsSet.size !== this.idMap.size)) throw Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
	}
	delete(e) {
		let t = this.idMap.get(e);
		t && (this.elementsSet.delete(t), this.idMap.delete(e));
	}
	hasElement(e) {
		return this.elementsSet.has(e);
	}
	hasMatchingElement(e) {
		for (let t of this.elementsSet) if (e(t)) return !0;
		return !1;
	}
	getById(e) {
		return this.idMap.get(e);
	}
	entries() {
		return this.idMap.entries();
	}
	elements() {
		return this.elementsSet.values();
	}
	get size() {
		return this.idMap.size;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/getEmptyRootContext.js
function Ml() {
	return new Tl({
		open: !1,
		floatingElement: null,
		referenceElement: null,
		triggerElements: new jl(),
		floatingId: "",
		nested: !1,
		noEmit: !1,
		onOpenChange: void 0
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/popups/store.js
function Nl() {
	return {
		open: !1,
		openProp: void 0,
		mounted: !1,
		transitionStatus: "idle",
		floatingRootContext: Ml(),
		preventUnmountingOnClose: !1,
		payload: void 0,
		activeTriggerId: null,
		activeTriggerElement: null,
		triggerIdProp: void 0,
		popupElement: null,
		positionerElement: null,
		activeTriggerProps: Ta,
		inactiveTriggerProps: Ta,
		popupProps: Ta
	};
}
var Pl = $((e) => e.triggerIdProp ?? e.activeTriggerId), Fl = {
	open: $((e) => e.openProp ?? e.open),
	mounted: $((e) => e.mounted),
	transitionStatus: $((e) => e.transitionStatus),
	floatingRootContext: $((e) => e.floatingRootContext),
	preventUnmountingOnClose: $((e) => e.preventUnmountingOnClose),
	payload: $((e) => e.payload),
	activeTriggerId: Pl,
	activeTriggerElement: $((e) => e.mounted ? e.activeTriggerElement : null),
	isTriggerActive: $((e, t) => t !== void 0 && Pl(e) === t),
	isOpenedByTrigger: $((e, t) => t !== void 0 && Pl(e) === t && e.open),
	isMountedByTrigger: $((e, t) => t !== void 0 && Pl(e) === t && e.mounted),
	triggerProps: $((e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps),
	popupProps: $((e) => e.popupProps),
	popupElement: $((e) => e.popupElement),
	positionerElement: $((e) => e.positionerElement)
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js
function Il(e) {
	let { popupStore: t, noEmit: n = !1, treatPopupAsFloatingElement: r = !1, onOpenChange: i } = e, a = xo(), o = bc() != null, s = t.useState("open"), c = t.useState("activeTriggerElement"), l = t.useState(r ? "popupElement" : "positionerElement"), u = t.context.triggerElements, d = Xi(() => new Tl({
		open: s,
		referenceElement: c,
		floatingElement: l,
		triggerElements: u,
		onOpenChange: i,
		floatingId: a,
		nested: o,
		noEmit: n
	})).current;
	return Z(() => {
		let e = {
			open: s,
			floatingId: a,
			referenceElement: c,
			floatingElement: l
		};
		Dr(c) && (e.domReferenceElement = c), d.state.positionReference === d.state.referenceElement && (e.positionReference = c), d.update(e);
	}, [
		s,
		a,
		c,
		l,
		d
	]), d.context.onOpenChange = i, d.context.nested = o, d.context.noEmit = n, d;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js
J();
function Ll(e = []) {
	let t = e.map((e) => e?.reference), n = e.map((e) => e?.floating), r = e.map((e) => e?.item), i = e.map((e) => e?.trigger), a = G((t) => Rl(t, e, "reference"), t), o = G((t) => Rl(t, e, "floating"), n), s = G((t) => Rl(t, e, "item"), r), c = G((t) => Rl(t, e, "trigger"), i);
	return W(() => ({
		getReferenceProps: a,
		getFloatingProps: o,
		getItemProps: s,
		getTriggerProps: c
	}), [
		a,
		o,
		s,
		c
	]);
}
function Rl(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = {};
	n === "floating" && (a.tabIndex = -1, a[Vo] = "");
	for (let t in e) i && e && (t === "active" || t === "selected") || (a[t] = e[t]);
	for (let o = 0; o < t.length; o += 1) {
		let s, c = t[o]?.[n];
		s = typeof c == "function" ? e ? c(e) : null : c, s && zl(a, s, i, r);
	}
	return zl(a, e, i, r), a;
}
function zl(e, t, n, r) {
	for (let i in t) {
		let a = t[i];
		n && (i === "active" || i === "selected") || (i.startsWith("on") ? (r.has(i) || r.set(i, []), typeof a == "function" && (r.get(i)?.push(a), e[i] = (...e) => r.get(i)?.map((t) => t(...e)).find((e) => e !== void 0))) : e[i] = a);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js
J();
var Bl = new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1]
]);
function Vl(e, t = {}) {
	let n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), i = n.useState("floatingId"), a = n.useState("domReferenceElement"), o = n.useState("floatingElement"), { role: s = "dialog" } = t, c = xo(), l = a?.id || c, u = W(() => Jo(o)?.id || i, [o, i]), d = Bl.get(s) ?? s, f = bc() != null, p = W(() => d === "tooltip" || s === "label" ? Ta : {
		"aria-haspopup": d === "alertdialog" ? "dialog" : d,
		"aria-expanded": "false",
		...d === "listbox" && { role: "combobox" },
		...d === "menu" && f && { role: "menuitem" },
		...s === "select" && { "aria-autocomplete": "none" },
		...s === "combobox" && { "aria-autocomplete": "list" }
	}, [
		d,
		f,
		s
	]), m = W(() => d === "tooltip" || s === "label" ? { [`aria-${s === "label" ? "labelledby" : "describedby"}`]: r ? u : void 0 } : {
		...p,
		"aria-expanded": r ? "true" : "false",
		"aria-controls": r ? u : void 0,
		...d === "menu" && { id: l }
	}, [
		d,
		u,
		r,
		l,
		s,
		p
	]), h = W(() => {
		let e = {
			id: u,
			...d && { role: d }
		};
		return d === "tooltip" || s === "label" ? e : {
			...e,
			...d === "menu" && { "aria-labelledby": l }
		};
	}, [
		d,
		u,
		l,
		s
	]), g = G(({ active: e, selected: t }) => {
		let n = {
			role: "option",
			...e && { id: `${u}-fui-option` }
		};
		switch (s) {
			case "select":
			case "combobox": return {
				...n,
				"aria-selected": t
			};
			default:
		}
		return {};
	}, [u, s]);
	return W(() => ({
		reference: m,
		floating: h,
		item: g,
		trigger: p
	}), [
		m,
		h,
		p,
		g
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js
var Hl = /* @__PURE__ */ function(e) {
	return e.nestedDialogs = "--nested-dialogs", e;
}({}), Ul = function(e) {
	return e[e.open = La.open] = "open", e[e.closed = La.closed] = "closed", e[e.startingStyle = La.startingStyle] = "startingStyle", e[e.endingStyle = La.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
}({});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js
J();
var Wl = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (Wl.displayName = "DialogPortalContext");
function Gl() {
	let e = ge(Wl);
	if (e === void 0) throw Error(process.env.NODE_ENV === "production" ? Ki(26) : "Base UI: <Dialog.Portal> is missing.");
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/composite.js
var Kl = "ArrowUp", ql = "ArrowDown", Jl = "ArrowLeft", Yl = "ArrowRight", Xl = "Home", Zl = new Set([Jl, Yl]), Ql = new Set([Kl, ql]), $l = new Set([...Zl, ...Ql]);
new Set([
	...$l,
	Xl,
	"End"
]);
var eu = new Set([
	Kl,
	ql,
	Jl,
	Yl,
	Xl,
	"End"
]);
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js
J();
var tu = {
	...Ha,
	...Ia,
	nestedDialogOpen(e) {
		return e ? { [Ul.nestedDialogOpen]: "" } : null;
	}
}, nu = /* @__PURE__ */ Ye(function(e, t) {
	let { className: n, finalFocus: r, initialFocus: i, render: a, ...o } = e, { store: s } = Ji(), c = s.useState("descriptionElementId"), l = s.useState("disablePointerDismissal"), u = s.useState("floatingRootContext"), d = s.useState("popupProps"), f = s.useState("modal"), p = s.useState("mounted"), m = s.useState("nested"), h = s.useState("nestedOpenDialogCount"), g = s.useState("open"), _ = s.useState("openMethod"), v = s.useState("titleElementId"), y = s.useState("transitionStatus"), b = s.useState("role");
	Gl(), Ol({
		open: g,
		ref: s.context.popupRef,
		onComplete() {
			g && s.context.onOpenChangeComplete?.(!0);
		}
	});
	function x(e) {
		return e === "touch" ? s.context.popupRef.current : !0;
	}
	let S = i === void 0 ? x : i, C = Da("div", e, {
		state: {
			open: g,
			nested: m,
			transitionStatus: y,
			nestedDialogOpen: h > 0
		},
		props: [
			d,
			{
				"aria-labelledby": v ?? void 0,
				"aria-describedby": c ?? void 0,
				role: b,
				tabIndex: -1,
				hidden: !p,
				onKeyDown(e) {
					eu.has(e.key) && e.stopPropagation();
				},
				style: { [Hl.nestedDialogs]: h }
			},
			o
		],
		ref: [
			t,
			s.context.popupRef,
			s.useStateSetter("popupElement")
		],
		stateAttributesMapping: tu
	});
	return /* @__PURE__ */ Vt(Mc, {
		context: u,
		openInteractionType: _,
		disabled: !p,
		closeOnFocusOut: !l,
		initialFocus: S,
		returnFocus: r,
		modal: f !== !1,
		restoreFocus: "popup",
		children: C
	});
});
process.env.NODE_ENV !== "production" && (nu.displayName = "DialogPopup");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/inertValue.js
function ru(e) {
	return ia(19) ? e : e ? "true" : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js
J();
var iu = /* @__PURE__ */ Ye(function(e, t) {
	let { cutout: n, ...r } = e, i;
	if (n) {
		let e = n?.getBoundingClientRect();
		i = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${e.left}px ${e.top}px,
      ${e.left}px ${e.bottom}px,
      ${e.right}px ${e.bottom}px,
      ${e.right}px ${e.top}px,
      ${e.left}px ${e.top}px
    )`;
	}
	return /* @__PURE__ */ Vt("div", {
		ref: t,
		role: "presentation",
		"data-base-ui-inert": "",
		...r,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath: i
		}
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js
process.env.NODE_ENV !== "production" && (iu.displayName = "InternalBackdrop"), J();
var au = /* @__PURE__ */ Ye(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { store: i } = Ji(), a = i.useState("mounted"), o = i.useState("modal"), s = i.useState("open");
	return a || n ? /* @__PURE__ */ Vt(Wl.Provider, {
		value: n,
		children: /* @__PURE__ */ Vt(gc, {
			ref: t,
			...r,
			children: [a && o === !0 && /* @__PURE__ */ Vt(iu, {
				ref: i.context.internalBackdropRef,
				inert: ru(!s)
			}), e.children]
		})
	}) : null;
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useOnFirstRender.js
process.env.NODE_ENV !== "production" && (au.displayName = "DialogPortal"), J();
function ou(e) {
	let t = U(!0);
	t.current && (t.current = !1, e());
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useScrollLock.js
var su = {}, cu = {}, lu = "";
function uu(e) {
	if (typeof document > "u") return !1;
	let t = Ns(e);
	return wr(t).innerWidth - t.documentElement.clientWidth > 0;
}
function du(e) {
	if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return !1;
	let t = Ns(e), n = t.documentElement, r = t.body, i = Ar(n) ? n : r, a = i.style.overflowY, o = n.style.scrollbarGutter;
	n.style.scrollbarGutter = "stable", i.style.overflowY = "scroll";
	let s = i.offsetWidth;
	i.style.overflowY = "hidden";
	let c = i.offsetWidth;
	return i.style.overflowY = a, n.style.scrollbarGutter = o, s === c;
}
function fu(e) {
	let t = Ns(e), n = t.documentElement, r = t.body, i = Ar(n) ? n : r, a = {
		overflowY: i.style.overflowY,
		overflowX: i.style.overflowX
	};
	return Object.assign(i.style, {
		overflowY: "hidden",
		overflowX: "hidden"
	}), () => {
		Object.assign(i.style, a);
	};
}
function pu(e) {
	let t = Ns(e), n = t.documentElement, r = t.body, i = wr(n), a = 0, o = 0, s = !1, c = Ks.create();
	if (No && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
	function l() {
		let t = i.getComputedStyle(n), c = i.getComputedStyle(r), l = (t.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		a = n.scrollTop, o = n.scrollLeft, su = {
			scrollbarGutter: n.style.scrollbarGutter,
			overflowY: n.style.overflowY,
			overflowX: n.style.overflowX
		}, lu = n.style.scrollBehavior, cu = {
			position: r.style.position,
			height: r.style.height,
			width: r.style.width,
			boxSizing: r.style.boxSizing,
			overflowY: r.style.overflowY,
			overflowX: r.style.overflowX,
			scrollBehavior: r.style.scrollBehavior
		};
		let u = n.scrollHeight > n.clientHeight, d = n.scrollWidth > n.clientWidth, f = t.overflowY === "scroll" || c.overflowY === "scroll", p = t.overflowX === "scroll" || c.overflowX === "scroll", m = Math.max(0, i.innerWidth - r.clientWidth), h = Math.max(0, i.innerHeight - r.clientHeight), g = parseFloat(c.marginTop) + parseFloat(c.marginBottom), _ = parseFloat(c.marginLeft) + parseFloat(c.marginRight), v = Ar(n) ? n : r;
		if (s = du(e), s) {
			n.style.scrollbarGutter = l, v.style.overflowY = "hidden", v.style.overflowX = "hidden";
			return;
		}
		Object.assign(n.style, {
			scrollbarGutter: l,
			overflowY: "hidden",
			overflowX: "hidden"
		}), (u || f) && (n.style.overflowY = "scroll"), (d || p) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
			position: "relative",
			height: g || h ? `calc(100dvh - ${g + h}px)` : "100dvh",
			width: _ || m ? `calc(100vw - ${_ + m}px)` : "100vw",
			boxSizing: "border-box",
			overflow: "hidden",
			scrollBehavior: "unset"
		}), r.scrollTop = a, r.scrollLeft = o, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset";
	}
	function u() {
		Object.assign(n.style, su), Object.assign(r.style, cu), s || (n.scrollTop = a, n.scrollLeft = o, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = lu);
	}
	function d() {
		u(), c.request(l);
	}
	return l(), i.addEventListener("resize", d), () => {
		c.cancel(), u(), typeof i.removeEventListener == "function" && i.removeEventListener("resize", d);
	};
}
var mu = new class {
	lockCount = 0;
	restore = null;
	timeoutLock = Do.create();
	timeoutUnlock = Do.create();
	acquire(e) {
		return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)), this.release;
	}
	release = () => {
		--this.lockCount, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
	};
	unlock = () => {
		this.lockCount === 0 && this.restore && (this.restore?.(), this.restore = null);
	};
	lock(e) {
		if (this.lockCount === 0 || this.restore !== null) return;
		let t = Ns(e).documentElement, n = wr(t).getComputedStyle(t).overflowY;
		if (n === "hidden" || n === "clip") {
			this.restore = wa;
			return;
		}
		this.restore = Po || !uu(e) ? fu(e) : pu(e);
	}
}();
function hu(e = !0, t = null) {
	Z(() => {
		if (e) return mu.acquire(t);
	}, [e, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useEnhancedClickHandler.js
J();
function gu(e) {
	let t = U(""), n = G((n) => {
		n.defaultPrevented || (t.current = n.pointerType, e(n, n.pointerType));
	}, [e]);
	return {
		onClick: G((n) => {
			if (n.detail === 0) {
				e(n, "keyboard");
				return;
			}
			"pointerType" in n ? e(n, n.pointerType) : e(n, t.current), t.current = "";
		}, [e]),
		onPointerDown: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useValueChanged.js
J();
function _u(e, t) {
	let n = U(e), r = X(t);
	Z(() => {
		n.current !== e && r(n.current);
	}, [e, r]), Z(() => {
		n.current = e;
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js
J();
function vu(e) {
	let [t, n] = V(null), r = X((t, r) => {
		e || n(r || (Po ? "touch" : ""));
	});
	_u(e, (t) => {
		t && !e && n(null);
	});
	let { onClick: i, onPointerDown: a } = gu(r);
	return W(() => ({
		openMethod: t,
		triggerProps: {
			onClick: i,
			onPointerDown: a
		}
	}), [
		t,
		i,
		a
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js
J();
function yu(e) {
	let { store: t, parentContext: n, actionsRef: r } = e, i = t.useState("open"), a = t.useState("disablePointerDismissal"), o = t.useState("modal"), s = t.useState("popupElement"), { openMethod: c, triggerProps: l } = vu(i);
	kl(t);
	let { forceUnmount: u } = Al(i, t), d = X((e) => {
		let n = ho(e);
		return n.preventUnmountOnClose = () => {
			t.set("preventUnmountingOnClose", !0);
		}, n;
	}), f = G(() => {
		t.setOpen(!1, d(mo));
	}, [t, d]);
	he(r, () => ({
		unmount: u,
		close: f
	}), [u, f]);
	let p = Il({
		popupStore: t,
		onOpenChange: t.setOpen,
		treatPopupAsFloatingElement: !0,
		noEmit: !0
	}), [m, h] = V(0), g = m === 0, _ = Vl(p), v = Ic(p, {
		outsidePressEvent() {
			return t.context.internalBackdropRef.current || t.context.backdropRef.current ? "intentional" : {
				mouse: o === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(e) {
			if (!t.context.outsidePressEnabledRef.current || "button" in e && e.button !== 0 || "touches" in e && e.touches.length !== 1) return !1;
			let n = Uo(e);
			if (g && !a) {
				let e = n;
				return o && (t.context.internalBackdropRef.current || t.context.backdropRef.current) ? t.context.internalBackdropRef.current === e || t.context.backdropRef.current === e || Q(e, s) && !e?.hasAttribute("data-base-ui-portal") : !0;
			}
			return !1;
		},
		escapeKey: g
	});
	hu(i && o === !0, s);
	let { getReferenceProps: y, getFloatingProps: b, getTriggerProps: x } = Ll([_, v]);
	t.useContextCallback("onNestedDialogOpen", (e) => {
		h(e + 1);
	}), t.useContextCallback("onNestedDialogClose", () => {
		h(0);
	}), H(() => (n?.onNestedDialogOpen && i && n.onNestedDialogOpen(m), n?.onNestedDialogClose && !i && n.onNestedDialogClose(), () => {
		n?.onNestedDialogClose && i && n.onNestedDialogClose();
	}), [
		i,
		n,
		m
	]);
	let S = W(() => y(l), [y, l]), C = W(() => x(l), [x, l]), w = W(() => b(), [b]);
	t.useSyncedValues({
		openMethod: c,
		activeTriggerProps: S,
		inactiveTriggerProps: C,
		popupProps: w,
		floatingRootContext: p,
		nestedOpenDialogCount: m
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js
J();
var bu = {
	...Fl,
	modal: $((e) => e.modal),
	nested: $((e) => e.nested),
	nestedOpenDialogCount: $((e) => e.nestedOpenDialogCount),
	disablePointerDismissal: $((e) => e.disablePointerDismissal),
	openMethod: $((e) => e.openMethod),
	descriptionElementId: $((e) => e.descriptionElementId),
	titleElementId: $((e) => e.titleElementId),
	viewportElement: $((e) => e.viewportElement),
	role: $((e) => e.role)
}, xu = class extends Cl {
	constructor(e) {
		super(Su(e), {
			popupRef: /* @__PURE__ */ c(),
			backdropRef: /* @__PURE__ */ c(),
			internalBackdropRef: /* @__PURE__ */ c(),
			outsidePressEnabledRef: { current: !0 },
			triggerElements: new jl(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0
		}, bu);
	}
	setOpen = (e, t) => {
		if (t.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", !0);
		}, !e && t.trigger == null && this.state.activeTriggerId != null && (t.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e, t), t.isCanceled) return;
		let n = {
			open: e,
			nativeEvent: t.event,
			reason: t.reason,
			nested: this.state.nested
		};
		this.state.floatingRootContext.context.events?.emit("openchange", n);
		let r = { open: e }, i = t.trigger?.id ?? null;
		(i || e) && (r.activeTriggerId = i, r.activeTriggerElement = t.trigger ?? null), this.update(r);
	};
};
function Su(e = {}) {
	return {
		...Nl(),
		modal: !0,
		disablePointerDismissal: !1,
		popupElement: null,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: !1,
		nestedOpenDialogCount: 0,
		role: "dialog",
		...e
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js
J();
function Cu(e) {
	let { children: t, open: n, defaultOpen: r = !1, onOpenChange: i, onOpenChangeComplete: a, disablePointerDismissal: o = !1, modal: s = !0, actionsRef: c, handle: l, triggerId: u, defaultTriggerId: d = null } = e, f = Ji(!0), p = !!f, m = Xi(() => l?.store ?? new xu({
		open: r,
		openProp: n,
		activeTriggerId: d,
		triggerIdProp: u,
		modal: s,
		disablePointerDismissal: o,
		nested: p
	})).current;
	ou(() => {
		n === void 0 && m.state.open === !1 && r === !0 && m.update({
			open: !0,
			activeTriggerId: d
		});
	}), m.useControlledProp("openProp", n), m.useControlledProp("triggerIdProp", u), m.useSyncedValues({
		disablePointerDismissal: o,
		nested: p,
		modal: s
	}), m.useContextCallback("onOpenChange", i), m.useContextCallback("onOpenChangeComplete", a);
	let h = m.useState("payload");
	yu({
		store: m,
		actionsRef: c,
		parentContext: f?.store.context,
		onOpenChange: i,
		triggerIdProp: u
	});
	let g = W(() => ({ store: m }), [m]);
	return /* @__PURE__ */ Vt(qi.Provider, {
		value: g,
		children: typeof t == "function" ? t({ payload: h }) : t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js
J();
var wu = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, id: i, ...a } = e, { store: o } = Ji(), s = So(i);
	return o.useSyncedValueWithCleanup("titleElementId", s), Da("h2", e, {
		ref: t,
		props: [{ id: s }, a]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useControlled.js
process.env.NODE_ENV !== "production" && (wu.displayName = "DialogTitle"), J();
function Tu({ controlled: e, default: t, name: n, state: r = "value" }) {
	let { current: i } = U(e !== void 0), [a, o] = V(t), s = i ? e : a;
	if (process.env.NODE_ENV !== "production") {
		H(() => {
			i !== (e !== void 0) && console.error([
				`Base UI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`,
				"Elements should not switch from uncontrolled to controlled (or vice versa).",
				`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,
				"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
				"More info: https://fb.me/react-controlled-components"
			].join("\n"));
		}, [
			r,
			n,
			e
		]);
		let { current: a } = U(t);
		H(() => {
			!i && JSON.stringify(a) !== JSON.stringify(t) && console.error([`Base UI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join("\n"));
		}, [JSON.stringify(t)]);
	}
	return [s, G((e) => {
		i || o(e);
	}, [])];
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/clamp.js
function Eu(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/areArraysEqual.js
function Du(e, t, n = (e, t) => e === t) {
	return e.length === t.length && e.every((e, r) => n(e, t[r]));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js
J();
var Ou = /* @__PURE__ */ F({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => () => {},
	elementsRef: { current: [] },
	nextIndexRef: { current: 0 }
});
process.env.NODE_ENV !== "production" && (Ou.displayName = "CompositeListContext");
function ku() {
	return ge(Ou);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/CompositeList.js
J();
function Au(e) {
	let { children: t, elementsRef: n, labelsRef: r, onMapChange: i } = e, a = X(i), o = U(0), s = Xi(Mu).current, c = Xi(ju).current, [l, u] = V(0), d = U(l), f = X((e, t) => {
		c.set(e, t ?? null), d.current += 1, u(d.current);
	}), p = X((e) => {
		c.delete(e), d.current += 1, u(d.current);
	}), m = W(() => {
		let e = /* @__PURE__ */ new Map();
		return Array.from(c.keys()).filter((e) => e.isConnected).sort(Nu).forEach((t, n) => {
			let r = c.get(t) ?? {};
			e.set(t, {
				...r,
				index: n
			});
		}), e;
	}, [c, l]);
	Z(() => {
		if (typeof MutationObserver != "function" || m.size === 0) return;
		let e = new MutationObserver((e) => {
			let t = /* @__PURE__ */ new Set(), n = (e) => t.has(e) ? t.delete(e) : t.add(e);
			e.forEach((e) => {
				e.removedNodes.forEach(n), e.addedNodes.forEach(n);
			}), t.size === 0 && (d.current += 1, u(d.current));
		});
		return m.forEach((t, n) => {
			n.parentElement && e.observe(n.parentElement, { childList: !0 });
		}), () => {
			e.disconnect();
		};
	}, [m]), Z(() => {
		d.current === l && (n.current.length !== m.size && (n.current.length = m.size), r && r.current.length !== m.size && (r.current.length = m.size), o.current = m.size), a(m);
	}, [
		a,
		m,
		n,
		r,
		l
	]), Z(() => () => {
		n.current = [];
	}, [n]), Z(() => () => {
		r && (r.current = []);
	}, [r]);
	let h = X((e) => (s.add(e), () => {
		s.delete(e);
	}));
	Z(() => {
		s.forEach((e) => e(m));
	}, [s, m]);
	let g = W(() => ({
		register: f,
		unregister: p,
		subscribeMapChange: h,
		elementsRef: n,
		labelsRef: r,
		nextIndexRef: o
	}), [
		f,
		p,
		h,
		n,
		r,
		o
	]);
	return /* @__PURE__ */ Vt(Ou.Provider, {
		value: g,
		children: t
	});
}
function ju() {
	return /* @__PURE__ */ new Map();
}
function Mu() {
	return /* @__PURE__ */ new Set();
}
function Nu(e, t) {
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js
function Pu(e, t) {
	return {
		...e,
		state: {
			...e.state,
			valid: !t && e.state.valid
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/form/FormContext.js
J();
var Fu = /* @__PURE__ */ F({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: wa,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: !1 }
});
process.env.NODE_ENV !== "production" && (Fu.displayName = "FormContext");
function Iu() {
	return ge(Fu);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js
var Lu = /* @__PURE__ */ function(e) {
	return e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), Ru = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valid: null,
	valueMissing: !1
}, zu = {
	valid: null,
	touched: !1,
	dirty: !1,
	filled: !1,
	focused: !1
}, Bu = {
	disabled: !1,
	...zu
}, Vu = { valid(e) {
	return e === null ? null : e ? { [Lu.valid]: "" } : { [Lu.invalid]: "" };
} };
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js
J();
var Hu = /* @__PURE__ */ F({
	invalid: void 0,
	name: void 0,
	validityData: {
		state: Ru,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: wa,
	disabled: void 0,
	touched: zu.touched,
	setTouched: wa,
	dirty: zu.dirty,
	setDirty: wa,
	filled: zu.filled,
	setFilled: wa,
	focused: zu.focused,
	setFocused: wa,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => !1,
	state: Bu,
	markedDirtyRef: { current: !1 },
	validation: {
		getValidationProps: (e = Ta) => e,
		getInputValidationProps: (e = Ta) => e,
		inputRef: { current: null },
		commit: async () => {}
	}
});
process.env.NODE_ENV !== "production" && (Hu.displayName = "FieldRootContext");
function Uu(e = !0) {
	let t = ge(Hu);
	if (t.setValidityData === wa && !e) throw Error(process.env.NODE_ENV === "production" ? Ki(28) : "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/useField.js
J();
function Wu(e) {
	let { enabled: t = !0, value: n, id: r, name: i, controlRef: a, commit: o } = e, { formRef: s } = Iu(), { invalid: c, markedDirtyRef: l, validityData: u, setValidityData: d } = Uu(), f = X(e.getValue);
	Z(() => {
		if (!t) return;
		let e = n;
		e === void 0 && (e = f()), u.initialValue === null && e !== null && d((t) => ({
			...t,
			initialValue: e
		}));
	}, [
		t,
		d,
		n,
		u.initialValue,
		f
	]), Z(() => {
		!t || !r || s.current.fields.set(r, {
			getValue: f,
			name: i,
			controlRef: a,
			validityData: Pu(u, c),
			validate(e = !0) {
				let t = n;
				t === void 0 && (t = f()), l.current = !0, e ? Lt(() => o(t)) : o(t);
			}
		});
	}, [
		o,
		a,
		t,
		s,
		f,
		r,
		c,
		l,
		i,
		u,
		n
	]), Z(() => {
		let e = s.current.fields;
		return () => {
			r && e.delete(r);
		};
	}, [s, r]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js
J();
var Gu = /* @__PURE__ */ F({
	controlId: void 0,
	registerControlId: wa,
	labelId: void 0,
	setLabelId: wa,
	messageIds: [],
	setMessageIds: wa,
	getDescriptionProps: (e) => e
});
process.env.NODE_ENV !== "production" && (Gu.displayName = "LabelableContext");
function Ku() {
	return ge(Gu);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js
function qu(e) {
	return e == null ? void 0 : `${e}-label`;
}
function Ju(e, t) {
	return e ?? t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/asc.js
function Yu(e, t) {
	return e - t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/replaceArrayItemAtIndex.js
function Xu(e, t, n) {
	let r = e.slice();
	return r[t] = n, r.sort(Yu);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js
function Zu(e, t, n, r, i, a) {
	let o = e;
	return o = Eu(o, n, r), i && (o = Xu(a, t, Eu(o, a[t - 1] || -Infinity, a[t + 1] || Infinity))), o;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js
function Qu(e, t, n) {
	if (!Array.isArray(e)) return !0;
	let r = e.reduce((e, t, n, r) => (n === r.length - 1 || e.push(Math.abs(t - r[n + 1])), e), []);
	return Math.min(...r) >= t * n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js
var $u = {
	activeThumbIndex: () => null,
	max: () => null,
	min: () => null,
	minStepsBetweenValues: () => null,
	step: () => null,
	values: () => null,
	...Vu
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js
J();
var ed = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (ed.displayName = "SliderRootContext");
function td() {
	let e = ge(ed);
	if (e === void 0) throw Error(process.env.NODE_ENV === "production" ? Ki(62) : "Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>.");
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/SliderRoot.js
J();
function nd(e) {
	return "key" in e ? fo : co;
}
function rd(e, t) {
	return typeof e == "number" && typeof t == "number" ? e === t : Array.isArray(e) && Array.isArray(t) ? Du(e, t) : !1;
}
var id = /* @__PURE__ */ Ye(function(e, t) {
	let { "aria-labelledby": n, className: r, defaultValue: i, disabled: a = !1, id: o, format: s, largeStep: c = 10, locale: l, render: u, max: d = 100, min: f = 0, minStepsBetweenValues: p = 0, name: m, onValueChange: h, onValueCommitted: g, orientation: _ = "horizontal", step: v = 1, thumbCollisionBehavior: y = "push", thumbAlignment: b = "center", value: x, ...S } = e, C = So(o), w = qu(C), T = X(h), E = X(g), { clearErrors: D } = Iu(), { state: O, disabled: k, name: A, setTouched: j, setDirty: M, validityData: N, shouldValidateOnChange: P, validation: F } = Uu(), { labelId: ee } = Ku(), [I, te] = V(), ne = n ?? Ju(ee, I), L = k || a, re = A ?? m, [R, ie] = Tu({
		controlled: x,
		default: i ?? f,
		name: "Slider"
	}), ae = U(null), z = U(null), B = U([]), oe = U(null), se = U(null), ce = U(-1), le = U(null), ue = U(null), de = U("none"), fe = Vs(s), [pe, H] = V(-1), [me, he] = V(-1), [G, ge] = V(!1), [_e, ve] = V(() => /* @__PURE__ */ new Map()), [ye, be] = V([void 0, void 0]), xe = X((e) => {
		H(e), e !== -1 && he(e);
	});
	Wu({
		id: C,
		commit: F.commit,
		value: R,
		controlRef: z,
		name: re,
		getValue: () => R
	}), _u(R, () => {
		D(re), P() ? F.commit(R) : F.commit(R, !0);
		let e = N.initialValue, t;
		t = Array.isArray(R) && Array.isArray(e) ? !Du(R, e) : R !== e, M(t);
	});
	let Se = X((e) => {
		e && (z.current = e);
	}), Ce = Array.isArray(R), we = W(() => Ce ? R.slice().sort(Yu) : [Eu(R, f, d)], [
		d,
		f,
		Ce,
		R
	]), Te = X((e, t) => {
		if (Number.isNaN(e) || rd(e, R)) return;
		let n = t ?? ho("none", void 0, void 0, { activeThumbIndex: -1 });
		de.current = n.reason;
		let r = n.event, i = new (r.constructor ?? Event)(r.type, r);
		Object.defineProperty(i, "target", {
			writable: !0,
			value: {
				value: e,
				name: re
			}
		}), n.event = i, ue.current = e, T(e, n), !n.isCanceled && ie(e);
	}), Ee = X((e, t, n) => {
		let r = Zu(e, t, f, d, Ce, we);
		if (Qu(r, v, p)) {
			let e = nd(n);
			Te(r, ho(e, n.nativeEvent, void 0, { activeThumbIndex: t })), j(!0), E(ue.current ?? r, go(e, n.nativeEvent));
		}
	});
	process.env.NODE_ENV !== "production" && f >= d && ca("Slider `max` must be greater than `min`."), Z(() => {
		let e = Ho(Ns(ae.current));
		L && e && ae.current?.contains(e) && e.blur();
	}, [L]), L && pe !== -1 && xe(-1);
	let K = W(() => ({
		...O,
		activeThumbIndex: pe,
		disabled: L,
		dragging: G,
		orientation: _,
		max: d,
		min: f,
		minStepsBetweenValues: p,
		step: v,
		values: we
	}), [
		O,
		pe,
		L,
		G,
		d,
		f,
		p,
		_,
		v,
		we
	]), De = W(() => ({
		active: pe,
		controlRef: z,
		disabled: L,
		dragging: G,
		validation: F,
		formatOptionsRef: fe,
		handleInputChange: Ee,
		indicatorPosition: ye,
		inset: b !== "center",
		labelId: ne,
		rootLabelId: w,
		largeStep: c,
		lastUsedThumbIndex: me,
		lastChangedValueRef: ue,
		lastChangeReasonRef: de,
		locale: l,
		max: d,
		min: f,
		minStepsBetweenValues: p,
		name: re,
		onValueCommitted: E,
		orientation: _,
		pressedInputRef: oe,
		pressedThumbCenterOffsetRef: se,
		pressedThumbIndexRef: ce,
		pressedValuesRef: le,
		registerFieldControlRef: Se,
		renderBeforeHydration: b === "edge",
		setActive: xe,
		setDragging: ge,
		setIndicatorPosition: be,
		setLabelId: te,
		setValue: Te,
		state: K,
		step: v,
		thumbCollisionBehavior: y,
		thumbMap: _e,
		thumbRefs: B,
		values: we
	}), [
		pe,
		z,
		ne,
		w,
		L,
		G,
		F,
		fe,
		Ee,
		ye,
		c,
		me,
		ue,
		de,
		l,
		d,
		f,
		p,
		re,
		E,
		_,
		oe,
		se,
		ce,
		le,
		Se,
		xe,
		ge,
		be,
		te,
		Te,
		K,
		v,
		y,
		b,
		_e,
		B,
		we
	]), Oe = Da("div", e, {
		state: K,
		ref: [t, ae],
		props: [
			{
				"aria-labelledby": ne,
				id: C,
				role: "group"
			},
			F.getValidationProps,
			S
		],
		stateAttributesMapping: $u
	});
	return /* @__PURE__ */ Vt(ed.Provider, {
		value: De,
		children: /* @__PURE__ */ Vt(Au, {
			elementsRef: B,
			onMapChange: ve,
			children: Oe
		})
	});
});
process.env.NODE_ENV !== "production" && (id.displayName = "SliderRoot");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/formatNumber.js
var ad = /* @__PURE__ */ new Map();
function od(e, t) {
	let n = JSON.stringify({
		locale: e,
		options: t
	}), r = ad.get(n);
	if (r) return r;
	let i = new Intl.NumberFormat(e, t);
	return ad.set(n, i), i;
}
function sd(e, t, n) {
	return e == null ? "" : od(t, n).format(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js
J();
var cd = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (cd.displayName = "DirectionContext");
function ld() {
	return ge(cd)?.direction ?? "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js
function ud(e) {
	let t = e.getBoundingClientRect();
	return {
		x: (t.left + t.right) / 2,
		y: (t.top + t.bottom) / 2
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js
function dd(e) {
	if (Math.abs(e) < 1) {
		let t = e.toExponential().split("e-"), n = t[0].split(".")[1];
		return (n ? n.length : 0) + parseInt(t[1], 10);
	}
	let t = e.toString().split(".")[1];
	return t ? t.length : 0;
}
function fd(e, t, n) {
	let r = Math.round((e - n) / t) * t + n;
	return Number(r.toFixed(dd(t)));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getPushedThumbValues.js
function pd({ values: e, index: t, nextValue: n, min: r, max: i, step: a, minStepsBetweenValues: o, initialValues: s }) {
	if (e.length === 0) return [];
	let c = e.slice(), l = a * o, u = c.length - 1, d = s ?? e;
	c[t] = Eu(n, r + t * l, i - (u - t) * l);
	for (let e = t + 1; e <= u; e += 1) {
		let t = c[e - 1] + l, n = i - (u - e) * l, r = d[e] ?? c[e], a = Math.max(c[e], t);
		r < a && (a = Math.max(r, t)), c[e] = Eu(a, t, n);
	}
	for (let e = t - 1; e >= 0; --e) {
		let t = c[e + 1] - l, n = r + e * l, i = d[e] ?? c[e], a = Math.min(c[e], t);
		i > a && (a = Math.min(i, t)), c[e] = Eu(a, n, t);
	}
	for (let e = 0; e <= u; e += 1) c[e] = Number(c[e].toFixed(12));
	return c;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/resolveThumbCollision.js
function md({ behavior: e, values: t, currentValues: n, initialValues: r, pressedIndex: i, nextValue: a, min: o, max: s, step: c, minStepsBetweenValues: l }) {
	let u = n ?? t, d = r ?? t;
	if (!(u.length > 1)) return {
		value: a,
		thumbIndex: 0,
		didSwap: !1
	};
	let f = c * l;
	switch (e) {
		case "swap": {
			let e = u[i], t = 1e-7, n = u.slice(), r = n[i - 1], p = n[i + 1], m = Eu(a, r == null ? o : r + f, p == null ? s : p - f), h = Number(m.toFixed(12));
			n[i] = h;
			let g = a > e, _ = a < e, v = g && p != null && a >= p - t, y = _ && r != null && a <= r + t;
			if (!v && !y) return {
				value: n,
				thumbIndex: i,
				didSwap: !1
			};
			let b = v ? i + 1 : i - 1, x = n.map((e, t) => t === i ? h : d[t] ?? u[t]), S = a;
			S = v ? Math.max(a, n[b]) : Math.min(a, n[b]);
			let C = pd({
				values: n,
				index: b,
				nextValue: S,
				min: o,
				max: s,
				step: c,
				minStepsBetweenValues: l,
				initialValues: x
			}), w = v ? b - 1 : b + 1;
			if (w >= 0 && w < C.length) {
				let e = C[w - 1], t = C[w + 1], n = e == null ? o : e + f;
				n = Math.max(n, o + w * f);
				let r = t == null ? s : t - f;
				r = Math.min(r, s - (C.length - 1 - w) * f);
				let i = Eu(h, n, r);
				C[w] = Number(i.toFixed(12));
			}
			return {
				value: C,
				thumbIndex: b,
				didSwap: !0
			};
		}
		case "push": return {
			value: pd({
				values: u,
				index: i,
				nextValue: a,
				min: o,
				max: s,
				step: c,
				minStepsBetweenValues: l
			}),
			thumbIndex: i,
			didSwap: !1
		};
		default: {
			let e = u.slice(), t = e[i - 1], n = e[i + 1], r = Eu(a, t == null ? o : t + f, n == null ? s : n - f);
			return e[i] = Number(r.toFixed(12)), {
				value: e,
				thumbIndex: i,
				didSwap: !1
			};
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/control/SliderControl.js
J();
var hd = 2;
function gd(e, t) {
	if (!e) return {
		start: 0,
		end: 0
	};
	function n(e) {
		let t = e == null ? 0 : parseFloat(e);
		return Number.isNaN(t) ? 0 : t;
	}
	let r = t ? "Top" : "InlineStart", i = t ? "Bottom" : "InlineEnd";
	return {
		start: n(e[`border${r}Width`]) + n(e[`padding${r}`]),
		end: n(e[`border${i}Width`]) + n(e[`padding${i}`])
	};
}
function _d(e, t) {
	if (t.current != null && e.changedTouches) {
		let n = e;
		for (let e = 0; e < n.changedTouches.length; e += 1) {
			let r = n.changedTouches[e];
			if (r.identifier === t.current) return {
				x: r.clientX,
				y: r.clientY
			};
		}
		return null;
	}
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var vd = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, ...i } = e, { disabled: a, dragging: o, inset: s, lastChangedValueRef: c, lastChangeReasonRef: l, max: u, min: d, minStepsBetweenValues: f, onValueCommitted: p, orientation: m, pressedInputRef: h, pressedThumbCenterOffsetRef: g, pressedThumbIndexRef: _, pressedValuesRef: v, registerFieldControlRef: y, renderBeforeHydration: b, setActive: x, setDragging: S, setValue: C, state: w, step: T, thumbCollisionBehavior: E, thumbRefs: D, values: O } = td(), k = ld(), A = O.length > 1, j = m === "vertical", M = U(null), N = U(null), P = X((e) => {
		e && N.current == null && (N.current ??= getComputedStyle(e));
	}), F = U(null), ee = U(0), I = U(0), te = Vs(O), ne = X((e) => {
		_.current !== e && (_.current = e);
		let t = D.current[e];
		if (!t) {
			g.current = null, h.current = null;
			return;
		}
		h.current = t.querySelector("input[type=\"range\"]");
	}), L = X((e) => {
		let t = M.current;
		if (!t) return null;
		let { width: n, height: r, bottom: i, left: a, right: o } = t.getBoundingClientRect(), s = gd(N.current, j), c = I.current, l = (j ? r : n) - s.start - s.end - c * 2, p = g.current ?? 0, m = e.x - p, h = e.y - p, y = Eu(((j ? i - h - s.end : (k === "rtl" ? o - m : m - a) - s.start) - c) / l, 0, 1), b = (u - d) * y + d;
		if (b = fd(b, T, d), b = Eu(b, d, u), !A) return {
			value: b,
			thumbIndex: 0,
			didSwap: !1
		};
		let x = _.current;
		if (x < 0) return null;
		let S = md({
			behavior: E,
			values: O,
			currentValues: te.current ?? O,
			initialValues: v.current,
			pressedIndex: x,
			nextValue: b,
			min: d,
			max: u,
			step: T,
			minStepsBetweenValues: f
		});
		return E === "swap" && S.didSwap ? ne(S.thumbIndex) : _.current = S.thumbIndex, S;
	}), re = X((e) => {
		v.current = A ? O.slice() : null, te.current = O;
		let t = _.current, n = t;
		if (t > -1 && t < O.length) {
			if (O[t] === u) {
				let e = t;
				for (; e > 0 && O[e - 1] === u;) --e;
				n = e;
			}
		} else {
			let t = j ? "y" : "x", r;
			n = -1;
			for (let i = 0; i < D.current.length; i += 1) {
				let a = D.current[i];
				if (Dr(a)) {
					let o = ud(a), s = Math.abs(e[t] - o[t]);
					(r === void 0 || s <= r) && (n = i, r = s);
				}
			}
		}
		if (n > -1 && n !== t && ne(n), s) {
			let e = D.current[n];
			Dr(e) && (I.current = e.getBoundingClientRect()[j ? "height" : "width"] / 2);
		}
	}), R = X((e) => {
		D.current?.[e]?.querySelector("input[type=\"range\"]")?.focus({ preventScroll: !0 });
	}), ie = X((e) => {
		let t = _d(e, F);
		if (t == null) return;
		if (ee.current += 1, e.type === "pointermove" && e.buttons === 0) {
			ae(e);
			return;
		}
		let n = L(t);
		n != null && Qu(n.value, T, f) && (!o && ee.current > hd && S(!0), C(n.value, ho(po, e, void 0, { activeThumbIndex: n.thumbIndex })), te.current = Array.isArray(n.value) ? n.value : [n.value], n.didSwap && R(n.thumbIndex));
	});
	function ae(e) {
		x(-1), S(!1), h.current = null, g.current = null;
		let t = _d(e, F), n = t == null ? null : L(t);
		if (n != null) {
			let t = l.current;
			p(c.current ?? n.value, go(t, e));
		}
		"pointerType" in e && M.current?.hasPointerCapture(e.pointerId) && M.current?.releasePointerCapture(e.pointerId), _.current = -1, F.current = null, v.current = null, B();
	}
	let z = X((e) => {
		if (a) return;
		let t = e.changedTouches[0];
		t != null && (F.current = t.identifier);
		let n = _d(e, F);
		if (n != null) {
			re(n);
			let t = L(n);
			if (t == null) return;
			R(t.thumbIndex), C(t.value, ho(so, e, void 0, { activeThumbIndex: t.thumbIndex })), te.current = Array.isArray(t.value) ? t.value : [t.value], t.didSwap && R(t.thumbIndex);
		}
		ee.current = 0;
		let r = Ns(M.current);
		r.addEventListener("touchmove", ie, { passive: !0 }), r.addEventListener("touchend", ae, { passive: !0 });
	}), B = X(() => {
		let e = Ns(M.current);
		e.removeEventListener("pointermove", ie), e.removeEventListener("pointerup", ae), e.removeEventListener("touchmove", ie), e.removeEventListener("touchend", ae), v.current = null;
	}), oe = qs();
	return H(() => {
		let e = M.current;
		return e ? (e.addEventListener("touchstart", z, { passive: !0 }), () => {
			e.removeEventListener("touchstart", z), oe.cancel(), B();
		}) : () => B();
	}, [
		B,
		z,
		M,
		oe
	]), H(() => {
		a && B();
	}, [a, B]), Da("div", e, {
		state: w,
		ref: [
			t,
			y,
			M,
			P
		],
		props: [{
			"data-base-ui-slider-control": b ? "" : void 0,
			onPointerDown(e) {
				let t = M.current;
				if (!t || a || e.defaultPrevented || !Dr(e.target) || e.button !== 0) return;
				let n = _d(e, F);
				if (n != null) {
					re(n);
					let r = L(n);
					if (r == null) return;
					Q(D.current[r.thumbIndex], Ho(Ns(t))) ? e.preventDefault() : oe.request(() => {
						R(r.thumbIndex);
					}), S(!0), g.current ?? (C(r.value, ho(so, e.nativeEvent, void 0, { activeThumbIndex: r.thumbIndex })), te.current = Array.isArray(r.value) ? r.value : [r.value], r.didSwap && R(r.thumbIndex));
				}
				e.nativeEvent.pointerId && t.setPointerCapture(e.nativeEvent.pointerId), ee.current = 0;
				let r = Ns(M.current);
				r.addEventListener("pointermove", ie, { passive: !0 }), r.addEventListener("pointerup", ae, { once: !0 });
			},
			tabIndex: -1
		}, i],
		stateAttributesMapping: $u
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/track/SliderTrack.js
process.env.NODE_ENV !== "production" && (vd.displayName = "SliderControl"), J();
var yd = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, ...i } = e, { state: a } = td();
	return Da("div", e, {
		state: a,
		ref: t,
		props: [{ style: { position: "relative" } }, i],
		stateAttributesMapping: $u
	});
});
process.env.NODE_ENV !== "production" && (yd.displayName = "SliderTrack");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/valueToPercent.js
function bd(e, t, n) {
	return (e - t) * 100 / (n - t);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js
J();
var xd = /* @__PURE__ */ function(e) {
	return e[e.None = 0] = "None", e[e.GuessFromOrder = 1] = "GuessFromOrder", e;
}({});
function Sd(e = {}) {
	let { label: t, metadata: n, textRef: r, indexGuessBehavior: i, index: a } = e, { register: o, unregister: s, subscribeMapChange: c, elementsRef: l, labelsRef: u, nextIndexRef: d } = ku(), f = U(-1), [p, m] = V(a ?? (i === xd.GuessFromOrder ? () => {
		if (f.current === -1) {
			let e = d.current;
			d.current += 1, f.current = e;
		}
		return f.current;
	} : -1)), h = U(null), g = G((e) => {
		if (h.current = e, p !== -1 && e !== null && (l.current[p] = e, u)) {
			let n = t !== void 0;
			u.current[p] = n ? t : r?.current?.textContent ?? e.textContent;
		}
	}, [
		p,
		l,
		u,
		t,
		r
	]);
	return Z(() => {
		if (a != null) return;
		let e = h.current;
		if (e) return o(e, n), () => {
			s(e);
		};
	}, [
		a,
		o,
		s,
		n
	]), Z(() => {
		if (a == null) return c((e) => {
			let t = h.current ? e.get(h.current)?.index : null;
			t != null && m(t);
		});
	}, [
		a,
		c,
		m
	]), W(() => ({
		ref: g,
		index: p
	}), [p, g]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js
J();
var Cd = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (Cd.displayName = "CSPContext");
var wd = { disableStyleElements: !1 };
function Td() {
	return ge(Cd) ?? wd;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js
J();
function Ed(e = {}) {
	let { id: t, implicit: n = !1, controlRef: r } = e, { controlId: i, registerControlId: a } = Ku(), o = So(t), s = n ? i : void 0, c = Xi(() => Symbol("labelable-control")), l = U(!1), u = U(t != null), d = X(() => {
		!l.current || a === wa || (l.current = !1, a(c.current, void 0));
	});
	return Z(() => {
		if (a === wa) return;
		let e;
		if (n) {
			let n = r?.current;
			e = Dr(n) && n.closest("label") != null ? t ?? null : s ?? o;
		} else if (t != null) u.current = !0, e = t;
		else if (u.current) e = o;
		else {
			d();
			return;
		}
		if (e === void 0) {
			d();
			return;
		}
		l.current = !0, a(c.current, e);
	}, [
		t,
		r,
		s,
		a,
		n,
		o,
		c,
		d
	]), H(() => d, [d]), i ?? o;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/thumb/SliderThumbDataAttributes.js
var Dd = /* @__PURE__ */ function(e) {
	return e.index = "data-index", e.dragging = "data-dragging", e.orientation = "data-orientation", e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.focused = "data-focused", e;
}({});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js
J();
var Od = "PageUp", kd = "PageDown", Ad = new Set([
	Kl,
	ql,
	Jl,
	Yl,
	Xl,
	"End",
	Od,
	kd
]);
function jd(e, t, n, r) {
	if (!(t < 0)) return e.length === 2 ? t === 0 ? `${sd(e[t], r, n)} start range` : `${sd(e[t], r, n)} end range` : n ? sd(e[t], r, n) : void 0;
}
function Md(e, t, n, r, i) {
	return n === 1 ? Math.min(e + t, i) : Math.max(e - t, r);
}
var Nd = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, children: r, className: i, "aria-describedby": a, "aria-label": o, "aria-labelledby": s, disabled: c = !1, getAriaLabel: u, getAriaValueText: d, id: f, index: p, inputRef: m, onBlur: h, onFocus: g, onKeyDown: _, tabIndex: v, ...y } = e, { nonce: b } = Td(), x = So(f), { active: S, lastUsedThumbIndex: C, controlRef: w, disabled: T, validation: E, formatOptionsRef: D, handleInputChange: O, inset: k, labelId: A, largeStep: j, locale: M, max: N, min: P, minStepsBetweenValues: F, name: ee, orientation: I, pressedInputRef: te, pressedThumbCenterOffsetRef: ne, pressedThumbIndexRef: L, renderBeforeHydration: re, setActive: R, setIndicatorPosition: ie, state: ae, step: z, values: B } = td(), oe = ld(), se = c || T, ce = B.length > 1, le = I === "vertical", ue = oe === "rtl", { setTouched: de, setFocused: fe, validationMode: pe } = Uu(), H = U(null), me = U(null), he = So(), ge = Ed(), _e = ce ? he : ge, { ref: ve, index: ye } = Sd({ metadata: W(() => ({ inputId: _e }), [_e]) }), be = ce ? p ?? ye : 0, xe = be === B.length - 1, Se = B[be], Ce = bd(Se, P, N), [we, Te] = V(!1), [Ee, K] = V();
	To(() => Te(!0));
	let De = C >= 0 && C < B.length ? C : -1, Oe = X(() => {
		let e = w.current, t = H.current;
		if (!e || !t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = le ? "height" : "width", a = r[i] - n[i], o = (n[i] / 2 + a * Ce / 100) / r[i] * 100;
		K(o), be === 0 ? ie((e) => [o, e[1]]) : xe && ie((e) => [e[0], o]);
	});
	Z(() => {
		k && queueMicrotask(Oe);
	}, [Oe, k]), Z(() => {
		k && Oe();
	}, [
		Oe,
		k,
		Ce
	]);
	let ke = G(() => {
		let e = le ? "bottom" : "insetInlineStart", t = le ? "left" : "top", n;
		return ce ? S === be ? n = 2 : De === be && (n = 1) : S === be && (n = 1), k ? {
			"--position": `${Ee}%`,
			visibility: re && !we || Ee === void 0 ? "hidden" : void 0,
			position: "absolute",
			[e]: "var(--position)",
			[t]: "50%",
			translate: `${(le || !ue ? -1 : 1) * 50}% ${(le ? 1 : -1) * 50}%`,
			zIndex: n
		} : Number.isFinite(Ce) ? {
			position: "absolute",
			[e]: `${Ce}%`,
			[t]: "50%",
			translate: `${(le || !ue ? -1 : 1) * 50}% ${(le ? 1 : -1) * 50}%`,
			zIndex: n
		} : Ys;
	}, [
		S,
		be,
		k,
		we,
		Ee,
		ce,
		re,
		ue,
		De,
		Ce,
		le
	]), Ae;
	I === "vertical" && (Ae = ue ? "vertical-rl" : "vertical-lr");
	let q = typeof u == "function" ? u(be) : o, je = pa({
		"aria-label": q,
		"aria-labelledby": s ?? (q == null ? A : void 0),
		"aria-describedby": a,
		"aria-orientation": I,
		"aria-valuenow": Se,
		"aria-valuetext": typeof d == "function" ? d(sd(Se, M, D.current ?? void 0), Se, be) : jd(B, be, D.current ?? void 0, M),
		disabled: se,
		id: _e,
		max: N,
		min: P,
		name: ee,
		onChange(e) {
			O(e.target.valueAsNumber, be, e);
		},
		onFocus() {
			R(be), fe(!0);
		},
		onBlur() {
			H.current && (R(-1), de(!0), fe(!1), pe === "onBlur" && E.commit(Zu(Se, be, P, N, ce, B)));
		},
		onKeyDown(e) {
			if (!Ad.has(e.key)) return;
			eu.has(e.key) && e.stopPropagation();
			let t = null, n = fd(Se, z, P);
			switch (e.key) {
				case Kl:
					t = Md(n, e.shiftKey ? j : z, 1, P, N);
					break;
				case Yl:
					t = Md(n, e.shiftKey ? j : z, ue ? -1 : 1, P, N);
					break;
				case ql:
					t = Md(n, e.shiftKey ? j : z, -1, P, N);
					break;
				case Jl:
					t = Md(n, e.shiftKey ? j : z, ue ? 1 : -1, P, N);
					break;
				case Od:
					t = Md(n, j, 1, P, N);
					break;
				case kd:
					t = Md(n, j, -1, P, N);
					break;
				case "End":
					t = N, ce && (t = Number.isFinite(B[be + 1]) ? B[be + 1] - z * F : N);
					break;
				case Xl:
					t = P, ce && (t = Number.isFinite(B[be - 1]) ? B[be - 1] + z * F : P);
					break;
				default: break;
			}
			t !== null && (O(t, be, e), e.preventDefault());
		},
		step: z,
		style: {
			...Ys,
			width: "100%",
			height: "100%",
			writingMode: Ae
		},
		tabIndex: v ?? void 0,
		type: "range",
		value: Se ?? ""
	}, E.getInputValidationProps), Me = Zi(me, E.inputRef, m);
	return Da("div", e, {
		state: ae,
		ref: [
			t,
			ve,
			H
		],
		props: [{
			[Dd.index]: be,
			children: /* @__PURE__ */ Vt(l, { children: [
				r,
				/* @__PURE__ */ Vt("input", {
					ref: Me,
					...je
				}),
				k && !we && re && xe && /* @__PURE__ */ Vt("script", {
					nonce: b,
					dangerouslySetInnerHTML: { __html: "!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest(\"[data-base-ui-slider-control]\");if(!e)return;const r=e.querySelector(\"[data-base-ui-slider-indicator]\"),i=e.getBoundingClientRect(),n=\"vertical\"===e.getAttribute(\"data-orientation\")?\"height\":\"width\",o=e.querySelectorAll('input[type=\"range\"]'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute(\"value\")??\"\");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute(\"max\")??\"100\"),g=parseFloat(e.getAttribute(\"min\")??\"0\"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty(\"--position\",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty(\"visibility\"),r&&(0===t?(a=v,r.style.setProperty(\"--start-position\",`${v}%`),l||r.style.removeProperty(\"visibility\")):t===s&&(u=v-(a??0),r.style.setProperty(\"--end-position\",`${v}%`),r.style.setProperty(\"--relative-size\",`${u}%`),r.style.removeProperty(\"visibility\"))))}}();" },
					suppressHydrationWarning: !0
				})
			] }),
			id: x,
			onBlur: h,
			onFocus: g,
			onPointerDown(e) {
				if (L.current = be, H.current != null) {
					let t = I === "horizontal" ? "x" : "y", n = ud(H.current);
					ne.current = (I === "horizontal" ? e.clientX : e.clientY) - n[t];
				}
				me.current != null && te.current !== me.current && (te.current = me.current);
			},
			style: ke(),
			suppressHydrationWarning: re || void 0,
			tabIndex: -1
		}, y],
		stateAttributesMapping: $u
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/indicator/SliderIndicator.js
process.env.NODE_ENV !== "production" && (Nd.displayName = "SliderThumb"), J();
function Pd(e, t, n, r, i, a) {
	let o = n === void 0 || t && r === void 0 ? "hidden" : void 0, s = e ? "bottom" : "insetInlineStart", c = e ? "height" : "width", l = {
		visibility: i && !a ? "hidden" : o,
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	return l["--start-position"] = `${n ?? 0}%`, t ? (l["--relative-size"] = `${(r ?? 0) - (n ?? 0)}%`, l[s] = "var(--start-position)", l[c] = "var(--relative-size)", l) : (l[s] = 0, l[c] = "var(--start-position)", l);
}
function Fd(e, t, n, r) {
	let i = e ? "bottom" : "insetInlineStart", a = e ? "height" : "width", o = {
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	if (!t) return o[i] = 0, o[a] = `${n}%`, o;
	let s = r - n;
	return o[i] = `${n}%`, o[a] = `${s}%`, o;
}
var Id = /* @__PURE__ */ Ye(function(e, t) {
	let { render: n, className: r, ...i } = e, { indicatorPosition: a, inset: o, max: s, min: c, orientation: l, renderBeforeHydration: u, state: d, values: f } = td(), [p, m] = V(!1);
	To(() => m(!0));
	let h = l === "vertical", g = f.length > 1, _ = o ? Pd(h, g, a[0], a[1], u, p) : Fd(h, g, bd(f[0], c, s), bd(f[f.length - 1], c, s));
	return Da("div", e, {
		state: d,
		ref: t,
		props: [{
			"data-base-ui-slider-indicator": u ? "" : void 0,
			style: _,
			suppressHydrationWarning: u || void 0
		}, i],
		stateAttributesMapping: $u
	});
});
process.env.NODE_ENV !== "production" && (Id.displayName = "SliderIndicator");
//#endregion
export { Qt as $, Sn as A, fn as B, kn as C, pe as Ct, Tn as D, F as Dt, En as E, H as Et, _n as F, sn as G, un as H, gn as I, rn as J, on as K, hn as L, bn as M, yn as N, wn as O, o as Ot, vn as P, $t as Q, mn as R, Mn as S, ye as St, Dn as T, ge as Tt, ln as U, dn as V, cn as W, tn as X, nn as Y, en as Z, Ri as _, he as _t, id as a, He as at, Ii as b, me as bt, au as c, Qe as ct, _o as d, zt as dt, Zt as et, Wa as f, ct as ft, Bi as g, U as gt, Ui as h, et as ht, vd as i, it, xn as j, Cn as k, l as kt, nu as l, Lt as lt, Vi as m, dt as mt, Nd as n, Yt as nt, wu as o, Ye as ot, Wi as p, J as pt, an as q, yd as r, Vt as rt, Cu as s, vt as st, Id as t, Xt as tt, Co as u, ze as ut, zi as v, _e as vt, On as w, G as wt, Si as x, V as xt, Hi as y, W as yt, pn as z };

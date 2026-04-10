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
	K.__h && K.__h(G, e, Ae || t), Ae = 0;
	var n = G.__H ||= {
		__: [],
		__h: []
	};
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function V(e) {
	return Ae = 1, pe(Ee, e);
}
function pe(e, t, n) {
	var r = fe(De++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ee(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = G, !G.__f)) {
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
		G.__f = !0;
		var a = G.shouldComponentUpdate, o = G.componentWillUpdate;
		G.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, G.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function H(e, t) {
	var n = fe(De++, 3);
	!K.__s && Te(n.__H, t) && (n.__ = e, n.u = t, G.__H.__h.push(n));
}
function me(e, t) {
	var n = fe(De++, 4);
	!K.__s && Te(n.__H, t) && (n.__ = e, n.u = t, G.__h.push(n));
}
function U(e) {
	return Ae = 5, W(function() {
		return { current: e };
	}, []);
}
function he(e, t, n) {
	Ae = 6, me(function() {
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
	var n = fe(De++, 7);
	return Te(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
	return Ae = 8, W(function() {
		return e;
	}, t);
}
function _e(e) {
	var t = G.context[e.__c], n = fe(De++, 9);
	return n.c = e, t ? (n.__ ?? (n.__ = !0, t.sub(G)), t.props.value) : e.__;
}
function ve(e, t) {
	K.useDebugValue && K.useDebugValue(t ? t(e) : e);
}
function ye(e) {
	var t = fe(De++, 10), n = V();
	return t.__ = e, G.componentDidCatch ||= function(e, r) {
		t.__ && t.__(e, r), n[1](e);
	}, [n[0], function() {
		n[1](void 0);
	}];
}
function be() {
	var e = fe(De++, 11);
	if (!e.__) {
		for (var t = G.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
		var n = t.__m ||= [0, 0];
		e.__ = "P" + n[0] + "-" + n[1]++;
	}
	return e.__;
}
function xe() {
	for (var e; e = je.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(Ce), t.__h.some(we), t.__h = [];
		} catch (n) {
			t.__h = [], K.__e(n, e.__v);
		}
	}
}
function Se(e) {
	var t, n = function() {
		clearTimeout(r), Re && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Re && (t = requestAnimationFrame(n));
}
function Ce(e) {
	var t = G, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), G = t;
}
function we(e) {
	var t = G;
	e.__c = e.__(), G = t;
}
function Te(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function Ee(e, t) {
	return typeof t == "function" ? t(e) : t;
}
var De, G, Oe, ke, Ae, je, K, Me, Ne, Pe, Fe, Ie, Le, Re, ze = t((() => {
	de(), Ae = 0, je = [], K = I, Me = K.__b, Ne = K.__r, Pe = K.diffed, Fe = K.__c, Ie = K.unmount, Le = K.__, K.__b = function(e) {
		G = null, Me && Me(e);
	}, K.__ = function(e, t) {
		e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Le && Le(e, t);
	}, K.__r = function(e) {
		Ne && Ne(e), De = 0;
		var t = (G = e.__c).__H;
		t && (Oe === G ? (t.__h = [], G.__h = [], t.__.some(function(e) {
			e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
		})) : (t.__h.some(Ce), t.__h.some(we), t.__h = [], De = 0)), Oe = G;
	}, K.diffed = function(e) {
		Pe && Pe(e);
		var t = e.__c;
		t && t.__H && (t.__H.__h.length && (je.push(t) !== 1 && ke === K.requestAnimationFrame || ((ke = K.requestAnimationFrame) || Se)(xe)), t.__H.__.some(function(e) {
			e.u && (e.__H = e.u), e.u = void 0;
		})), Oe = G = null;
	}, K.__c = function(e, t) {
		t.some(function(e) {
			try {
				e.__h.some(Ce), e.__h = e.__h.filter(function(e) {
					return !e.__ || we(e);
				});
			} catch (n) {
				t.some(function(e) {
					e.__h &&= [];
				}), t = [], K.__e(n, e.__v);
			}
		}), Fe && Fe(e, t);
	}, K.unmount = function(e) {
		Ie && Ie(e);
		var t, n = e.__c;
		n && n.__H && (n.__H.__.some(function(e) {
			try {
				Ce(e);
			} catch (e) {
				t = e;
			}
		}), n.__H = void 0, t && K.__e(t, n.__v));
	}, Re = typeof requestAnimationFrame == "function";
})), Be = /* @__PURE__ */ n({
	Children: () => yt,
	Component: () => u,
	Fragment: () => l,
	PureComponent: () => Je,
	StrictMode: () => l,
	Suspense: () => $e,
	SuspenseList: () => nt,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Ft,
	cloneElement: () => ft,
	createContext: () => F,
	createElement: () => o,
	createFactory: () => ct,
	createPortal: () => at,
	createRef: () => c,
	default: () => Bt,
	findDOMNode: () => mt,
	flushSync: () => Rt,
	forwardRef: () => Xe,
	hydrate: () => st,
	isElement: () => zt,
	isFragment: () => ut,
	isMemo: () => dt,
	isValidElement: () => lt,
	lazy: () => tt,
	memo: () => Ye,
	render: () => ot,
	startTransition: () => Ge,
	unmountComponentAtNode: () => pt,
	unstable_batchedUpdates: () => Lt,
	useCallback: () => ge,
	useContext: () => _e,
	useDebugValue: () => ve,
	useDeferredValue: () => Ke,
	useEffect: () => H,
	useErrorBoundary: () => ye,
	useId: () => be,
	useImperativeHandle: () => he,
	useInsertionEffect: () => ht,
	useLayoutEffect: () => me,
	useMemo: () => W,
	useReducer: () => pe,
	useRef: () => U,
	useState: () => V,
	useSyncExternalStore: () => Ue,
	useTransition: () => qe,
	version: () => It
});
function Ve(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function He(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function Ue(e, t) {
	var n = t(), r = V({ t: {
		__: n,
		u: t
	} }), i = r[0].t, a = r[1];
	return me(function() {
		i.__ = n, i.u = t, We(i) && a({ t: i });
	}, [
		e,
		n,
		t
	]), H(function() {
		return We(i) && a({ t: i }), e(function() {
			We(i) && a({ t: i });
		});
	}, [e]), n;
}
function We(e) {
	try {
		return !((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
	} catch {
		return !0;
	}
	var t, n;
}
function Ge(e) {
	e();
}
function Ke(e) {
	return e;
}
function qe() {
	return [!1, Ge];
}
function Je(e, t) {
	this.props = e, this.context = t;
}
function Ye(e, t) {
	function n(e) {
		var n = this.props.ref;
		return n != e.ref && n && (typeof n == "function" ? n(null) : n.current = null), t ? !t(this.props, e) || n != e.ref : He(this.props, e);
	}
	function r(t) {
		return this.shouldComponentUpdate = n, o(e, t);
	}
	return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = e, r;
}
function Xe(e) {
	function t(t) {
		var n = Ve({}, t);
		return delete n.ref, e(n, t.ref || null);
	}
	return t.$$typeof = _t, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
function Ze(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = Ve({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return Ze(e, t, n);
	})), e;
}
function Qe(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return Qe(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function $e() {
	this.__u = 0, this.o = null, this.__b = null;
}
function et(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function tt(e) {
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
function nt() {
	this.i = null, this.l = null;
}
function rt(e) {
	return this.getChildContext = function() {
		return e.context;
	}, e.children;
}
function it(e) {
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
	M(o(rt, { context: t.context }, e.__v), t.v);
}
function at(e, t) {
	var n = o(it, {
		__v: e,
		h: t
	});
	return n.containerInfo = t, n;
}
function ot(e, t, n) {
	return t.__k ?? (t.textContent = ""), M(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function st(e, t, n) {
	return N(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ct(e) {
	return o.bind(null, e);
}
function lt(e) {
	return !!e && e.$$typeof === Ct;
}
function ut(e) {
	return lt(e) && e.type === l;
}
function dt(e) {
	return !!e && typeof e.displayName == "string" && e.displayName.indexOf("Memo(") == 0;
}
function ft(e) {
	return lt(e) ? P.apply(null, arguments) : e;
}
function pt(e) {
	return !!e.__k && (M(null, e), !0);
}
function mt(e) {
	return e && (e.base || e.nodeType === 1 && e) || null;
}
var ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, q = t((() => {
	de(), ze(), ze(), ht = me, (Je.prototype = new u()).isPureReactComponent = !0, Je.prototype.shouldComponentUpdate = function(e, t) {
		return He(this.props, e) || He(this.state, t);
	}, gt = I.__b, I.__b = function(e) {
		e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), gt && gt(e);
	}, _t = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, vt = function(e, t) {
		return e == null ? null : y(y(e).map(t));
	}, yt = {
		map: vt,
		forEach: vt,
		count: function(e) {
			return e ? y(e).length : 0;
		},
		only: function(e) {
			var t = y(e);
			if (t.length !== 1) throw "Children.only";
			return t[0];
		},
		toArray: y
	}, bt = I.__e, I.__e = function(e, t, n, r) {
		if (e.then) {
			for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
		}
		bt(e, t, n, r);
	}, xt = I.unmount, I.unmount = function(e) {
		var t = e.__c;
		t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), xt && xt(e);
	}, ($e.prototype = new u()).__c = function(e, t) {
		var n = t.__c, r = this;
		r.o ??= [], r.o.push(n);
		var i = et(r.__v), a = !1, o = function() {
			a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
		};
		n.__R = o;
		var s = n.__P;
		n.__P = null;
		var c = function() {
			if (!--r.__u) {
				if (r.state.__a) {
					var e = r.state.__a;
					r.__v.__k[0] = Qe(e, e.__c.__P, e.__c.__O);
				}
				var t;
				for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
	}, $e.prototype.componentWillUnmount = function() {
		this.o = [];
	}, $e.prototype.render = function(e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement("div"), r = this.__v.__k[0].__c;
				this.__v.__k[0] = Ze(this.__b, n, r.__O = r.__P);
			}
			this.__b = null;
		}
		var i = t.__a && o(l, null, e.fallback);
		return i && (i.__u &= -33), [o(l, null, t.__a ? null : e.children), i];
	}, St = function(e, t, n) {
		if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
			for (; n.length > 3;) n.pop()();
			if (n[1] < n[0]) break;
			e.i = n = n[2];
		}
	}, (nt.prototype = new u()).__a = function(e) {
		var t = this, n = et(t.__v), r = t.l.get(e);
		return r[0]++, function(i) {
			var a = function() {
				t.props.revealOrder ? (r.push(i), St(t, e, r)) : i();
			};
			n ? n(a) : a();
		};
	}, nt.prototype.render = function(e) {
		this.i = null, this.l = /* @__PURE__ */ new Map();
		var t = y(e.children);
		e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
		for (var n = t.length; n--;) this.l.set(t[n], this.i = [
			1,
			0,
			this.i
		]);
		return e.children;
	}, nt.prototype.componentDidUpdate = nt.prototype.componentDidMount = function() {
		var e = this;
		this.l.forEach(function(t, n) {
			St(e, n, t);
		});
	}, Ct = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, wt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Tt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Et = /[A-Z0-9]/g, Dt = typeof document < "u", Ot = function(e) {
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
	}), kt = I.event, I.event = function(e) {
		return kt && (e = kt(e)), e.persist = function() {}, e.isPropagationStopped = function() {
			return this.cancelBubble;
		}, e.isDefaultPrevented = function() {
			return this.defaultPrevented;
		}, e.nativeEvent = e;
	}, jt = {
		configurable: !0,
		get: function() {
			return this.class;
		}
	}, Mt = I.vnode, I.vnode = function(e) {
		typeof e.type == "string" && function(e) {
			var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
			for (var a in t) {
				var o = t[a];
				if (!(a === "value" && "defaultValue" in t && o == null || Dt && a === "children" && n === "noscript" || a === "class" || a === "className")) {
					var s = a.toLowerCase();
					a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Ot(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : Tt.test(a) && (a = s) : s = a = "oninput" : i && wt.test(a) ? a = a.replace(Et, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
				}
			}
			n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = y(t.children).forEach(function(e) {
				e.props.selected = r.value.indexOf(e.props.value) != -1;
			})), r.defaultValue != null && (r.value = y(t.children).forEach(function(e) {
				e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
			}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", jt)) : t.className && (r.class = r.className = t.className), e.props = r;
		}(e), e.$$typeof = Ct, Mt && Mt(e);
	}, Nt = I.__r, I.__r = function(e) {
		Nt && Nt(e), At = e.__c;
	}, Pt = I.diffed, I.diffed = function(e) {
		Pt && Pt(e);
		var t = e.props, n = e.__e;
		n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), At = null;
	}, Ft = { ReactCurrentDispatcher: { current: {
		readContext: function(e) {
			return At.__n[e.__c].props.value;
		},
		useCallback: ge,
		useContext: _e,
		useDebugValue: ve,
		useDeferredValue: Ke,
		useEffect: H,
		useId: be,
		useImperativeHandle: he,
		useInsertionEffect: ht,
		useLayoutEffect: me,
		useMemo: W,
		useReducer: pe,
		useRef: U,
		useState: V,
		useSyncExternalStore: Ue,
		useTransition: qe
	} } }, It = "18.3.1", Lt = function(e, t) {
		return e(t);
	}, Rt = function(e, t) {
		var n = I.debounceRendering;
		I.debounceRendering = function(e) {
			return e();
		};
		var r = e(t);
		return I.debounceRendering = n, r;
	}, zt = lt, Bt = {
		useState: V,
		useId: be,
		useReducer: pe,
		useEffect: H,
		useLayoutEffect: me,
		useInsertionEffect: ht,
		useTransition: qe,
		useDeferredValue: Ke,
		useSyncExternalStore: Ue,
		startTransition: Ge,
		useRef: U,
		useImperativeHandle: he,
		useMemo: W,
		useCallback: ge,
		useContext: _e,
		useDebugValue: ve,
		version: "18.3.1",
		Children: yt,
		render: ot,
		hydrate: st,
		unmountComponentAtNode: pt,
		createPortal: at,
		createElement: o,
		createContext: F,
		createFactory: ct,
		cloneElement: ft,
		createRef: c,
		Fragment: l,
		isValidElement: lt,
		isElement: zt,
		isFragment: ut,
		isMemo: dt,
		findDOMNode: mt,
		Component: u,
		PureComponent: Je,
		memo: Ye,
		forwardRef: Xe,
		flushSync: Rt,
		unstable_batchedUpdates: Lt,
		StrictMode: l,
		Suspense: $e,
		SuspenseList: nt,
		lazy: tt,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ft
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
de();
var Vt = 0;
Array.isArray;
function Ht(e, t, n, r, i, a) {
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
		__v: --Vt,
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
var Ut = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wt = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Gt = (e) => {
	let t = Wt(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Kt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), qt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, Jt = {
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
q();
var Yt = Xe(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: s, ...c }, l) => o("svg", {
	ref: l,
	...Jt,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Kt("lucide", i),
	...!a && !qt(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => o(e, t)), ...Array.isArray(a) ? a : [a]]));
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.546.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js
q();
var J = (e, t) => {
	let n = Xe(({ className: n, ...r }, i) => o(Yt, {
		ref: i,
		iconNode: t,
		className: Kt(`lucide-${Ut(Gt(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Gt(e), n;
}, Xt = J("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Zt = J("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), Qt = J("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), $t = J("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), en = J("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), tn = J("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), nn = J("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), rn = J("circle-alert", [
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
]), an = J("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), on = J("circle-x", [
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
]), sn = J("download", [
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
]), cn = J("earth", [
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
]), ln = J("ellipsis", [
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
]), un = J("external-link", [
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
]), dn = J("file-search", [
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
]), fn = J("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), pn = J("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), mn = J("locate-fixed", [
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
]), hn = J("locate", [
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
]), gn = J("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), _n = J("milestone", [
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
]), vn = J("move-left", [["path", {
	d: "M6 8L2 12L6 16",
	key: "kyvwex"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), yn = J("move-right", [["path", {
	d: "M18 8L22 12L18 16",
	key: "1r0oui"
}], ["path", {
	d: "M2 12H22",
	key: "1m8cig"
}]]), bn = J("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), xn = J("radius", [
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
]), Sn = J("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Cn = J("search-x", [
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
]), wn = J("trash", [
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
]), Tn = J("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/compat/client.mjs
q();
function En(e) {
	return {
		render: function(t) {
			ot(t, e);
		},
		unmount: function() {
			pt(e);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var Dn = !1;
function On(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function kn(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var An = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !Dn : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(kn(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = On(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), jn = "-ms-", Mn = "-moz-", Y = "-webkit-", Nn = "comm", Pn = "rule", Fn = "decl", In = "@import", Ln = "@keyframes", Rn = "@layer", zn = Math.abs, Bn = String.fromCharCode, Vn = Object.assign;
function Hn(e, t) {
	return Kn(e, 0) ^ 45 ? (((t << 2 ^ Kn(e, 0)) << 2 ^ Kn(e, 1)) << 2 ^ Kn(e, 2)) << 2 ^ Kn(e, 3) : 0;
}
function Un(e) {
	return e.trim();
}
function Wn(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, n) {
	return e.replace(t, n);
}
function Gn(e, t) {
	return e.indexOf(t);
}
function Kn(e, t) {
	return e.charCodeAt(t) | 0;
}
function qn(e, t, n) {
	return e.slice(t, n);
}
function Jn(e) {
	return e.length;
}
function Yn(e) {
	return e.length;
}
function Xn(e, t) {
	return t.push(e), e;
}
function Zn(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var Qn = 1, $n = 1, er = 0, tr = 0, nr = 0, rr = "";
function ir(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Qn,
		column: $n,
		length: o,
		return: ""
	};
}
function ar(e, t) {
	return Vn(ir("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function or() {
	return nr;
}
function sr() {
	return nr = tr > 0 ? Kn(rr, --tr) : 0, $n--, nr === 10 && ($n = 1, Qn--), nr;
}
function cr() {
	return nr = tr < er ? Kn(rr, tr++) : 0, $n++, nr === 10 && ($n = 1, Qn++), nr;
}
function lr() {
	return Kn(rr, tr);
}
function ur() {
	return tr;
}
function dr(e, t) {
	return qn(rr, e, t);
}
function fr(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function pr(e) {
	return Qn = $n = 1, er = Jn(rr = e), tr = 0, [];
}
function mr(e) {
	return rr = "", e;
}
function hr(e) {
	return Un(dr(tr - 1, vr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gr(e) {
	for (; (nr = lr()) && nr < 33;) cr();
	return fr(e) > 2 || fr(nr) > 3 ? "" : " ";
}
function _r(e, t) {
	for (; --t && cr() && !(nr < 48 || nr > 102 || nr > 57 && nr < 65 || nr > 70 && nr < 97););
	return dr(e, ur() + (t < 6 && lr() == 32 && cr() == 32));
}
function vr(e) {
	for (; cr();) switch (nr) {
		case e: return tr;
		case 34:
		case 39:
			e !== 34 && e !== 39 && vr(nr);
			break;
		case 40:
			e === 41 && vr(e);
			break;
		case 92:
			cr();
			break;
	}
	return tr;
}
function yr(e, t) {
	for (; cr() && e + nr !== 57 && !(e + nr === 84 && lr() === 47););
	return "/*" + dr(t, tr - 1) + "*" + Bn(e === 47 ? e : cr());
}
function br(e) {
	for (; !fr(lr());) cr();
	return dr(e, tr);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function xr(e) {
	return mr(Sr("", null, null, null, [""], e = pr(e), 0, [0], e));
}
function Sr(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = cr()) {
		case 40: if (m != 108 && Kn(C, d - 1) == 58) {
			Gn(C += X(hr(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += hr(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += gr(m);
			break;
		case 92:
			C += _r(ur() - 1, 7);
			continue;
		case 47:
			switch (lr()) {
				case 42:
				case 47:
					Xn(wr(yr(cr(), ur()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = Jn(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = X(C, /\f/g, "")), p > 0 && Jn(C) - d && Xn(p > 32 ? Tr(C + ";", r, n, d - 1) : Tr(X(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (Xn(S = Cr(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) Sr(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && Kn(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						Sr(e, S, S, r && Xn(Cr(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: Sr(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + Jn(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && sr() == 125) continue;
			}
			switch (C += Bn(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (Jn(C) - 1) * _, _ = 1;
					break;
				case 64:
					lr() === 45 && (C += hr(cr())), f = lr(), u = d = Jn(y = C += br(ur())), v++;
					break;
				case 45: m === 45 && Jn(C) == 2 && (h = 0);
			}
	}
	return a;
}
function Cr(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = Yn(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = qn(e, d + 1, d = zn(h = o[m])), y = e; _ < p; ++_) (y = Un(h > 0 ? f[_] + " " + v : X(v, /&\f/g, f[_]))) && (c[g++] = y);
	return ir(e, t, n, i === 0 ? Pn : s, c, l, u);
}
function wr(e, t, n) {
	return ir(e, t, n, Nn, Bn(or()), qn(e, 2, -2), 0);
}
function Tr(e, t, n, r) {
	return ir(e, t, n, Fn, qn(e, 0, r), qn(e, r + 1, -1), r);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function Er(e, t) {
	for (var n = "", r = Yn(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function Dr(e, t, n, r) {
	switch (e.type) {
		case Rn: if (e.children.length) break;
		case In:
		case Fn: return e.return = e.return || e.value;
		case Nn: return "";
		case Ln: return e.return = e.value + "{" + Er(e.children, r) + "}";
		case Pn: e.value = e.props.join(",");
	}
	return Jn(n = Er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function Or(e) {
	var t = Yn(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function kr(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Ar(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var jr = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = lr(), r === 38 && i === 12 && (t[n] = 1), !fr(i);) cr();
	return dr(e, tr);
}, Mr = function(e, t) {
	var n = -1, r = 44;
	do
		switch (fr(r)) {
			case 0:
				r === 38 && lr() === 12 && (t[n] = 1), e[n] += jr(tr - 1, t, n);
				break;
			case 2:
				e[n] += hr(r);
				break;
			case 4: if (r === 44) {
				e[++n] = lr() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += Bn(r);
		}
	while (r = cr());
	return e;
}, Nr = function(e, t) {
	return mr(Mr(pr(e), t));
}, Pr = /* @__PURE__ */ new WeakMap(), Fr = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Pr.get(n)) && !r) {
			Pr.set(e, !0);
			for (var i = [], a = Nr(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, Ir = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function Lr(e, t) {
	switch (Hn(e, t)) {
		case 5103: return Y + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return Y + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return Y + e + Mn + e + jn + e + e;
		case 6828:
		case 4268: return Y + e + jn + e + e;
		case 6165: return Y + e + jn + "flex-" + e + e;
		case 5187: return Y + e + X(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + jn + "flex-$1$2") + e;
		case 5443: return Y + e + jn + "flex-item-" + X(e, /flex-|-self/, "") + e;
		case 4675: return Y + e + jn + "flex-line-pack" + X(e, /align-content|flex-|-self/, "") + e;
		case 5548: return Y + e + jn + X(e, "shrink", "negative") + e;
		case 5292: return Y + e + jn + X(e, "basis", "preferred-size") + e;
		case 6060: return Y + "box-" + X(e, "-grow", "") + Y + e + jn + X(e, "grow", "positive") + e;
		case 4554: return Y + X(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
		case 6187: return X(X(X(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
		case 5495:
		case 3959: return X(e, /(image-set\([^]*)/, Y + "$1$`$1");
		case 4968: return X(X(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + jn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return X(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (Jn(e) - 1 - t > 6) switch (Kn(e, t + 1)) {
				case 109: if (Kn(e, t + 4) !== 45) break;
				case 102: return X(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + Mn + (Kn(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~Gn(e, "stretch") ? Lr(X(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (Kn(e, t + 1) !== 115) break;
		case 6444:
			switch (Kn(e, Jn(e) - 3 - (~Gn(e, "!important") && 10))) {
				case 107: return X(e, ":", ":" + Y) + e;
				case 101: return X(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (Kn(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + jn + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (Kn(e, t + 11)) {
				case 114: return Y + e + jn + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return Y + e + jn + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return Y + e + jn + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return Y + e + jn + e + e;
	}
	return e;
}
var Rr = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case Fn:
			e.return = Lr(e.value, e.length);
			break;
		case Ln: return Er([ar(e, { value: X(e.value, "@", "@" + Y) })], r);
		case Pn: if (e.length) return Zn(e.props, function(t) {
			switch (Wn(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return Er([ar(e, { props: [X(t, /:(read-\w+)/, ":" + Mn + "$1")] })], r);
				case "::placeholder": return Er([
					ar(e, { props: [X(t, /:(plac\w+)/, ":" + Y + "input-$1")] }),
					ar(e, { props: [X(t, /:(plac\w+)/, ":" + Mn + "$1")] }),
					ar(e, { props: [X(t, /:(plac\w+)/, jn + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], zr = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || Rr, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [Fr, Ir], l, u = [Dr, kr(function(e) {
		l.insert(e);
	})], d = Or(c.concat(r, u)), f = function(e) {
		return Er(xr(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new An({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
}, Br = /* @__PURE__ */ r(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Vr = /* @__PURE__ */ r(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function ee(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(e) || x(e) === l;
		}
		function I(e) {
			return x(e) === u;
		}
		function te(e) {
			return x(e) === c;
		}
		function ne(e) {
			return x(e) === s;
		}
		function L(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function re(e) {
			return x(e) === d;
		}
		function R(e) {
			return x(e) === i;
		}
		function ie(e) {
			return x(e) === h;
		}
		function ae(e) {
			return x(e) === m;
		}
		function z(e) {
			return x(e) === r;
		}
		function B(e) {
			return x(e) === o;
		}
		function oe(e) {
			return x(e) === a;
		}
		function se(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = ee, e.isConcurrentMode = I, e.isContextConsumer = te, e.isContextProvider = ne, e.isElement = L, e.isForwardRef = re, e.isFragment = R, e.isLazy = ie, e.isMemo = ae, e.isPortal = z, e.isProfiler = B, e.isStrictMode = oe, e.isSuspense = se, e.isValidElementType = b, e.typeOf = x;
	})();
})), Hr = /* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Br() : t.exports = Vr();
})), Ur = /* @__PURE__ */ r(((e, t) => {
	var n = Hr(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})), Wr = !0;
function Gr(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Kr = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || Wr === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, qr = function(e, t, n) {
	Kr(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function Jr(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Yr = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, Xr = !1, Zr = /[A-Z]|^ms/g, Qr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $r = function(e) {
	return e.charCodeAt(1) === 45;
}, ei = function(e) {
	return e != null && typeof e != "boolean";
}, ti = /* @__PURE__ */ Ar(function(e) {
	return $r(e) ? e : e.replace(Zr, "-$&").toLowerCase();
}), ni = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(Qr, function(e, t, n) {
			return si = {
				name: t,
				styles: n,
				next: si
			}, t;
		});
	}
	return Yr[e] !== 1 && !$r(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, ri = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ii(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return si = {
				name: i.name,
				styles: i.styles,
				next: si
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) si = {
					name: o.name,
					styles: o.styles,
					next: si
				}, o = o.next;
				return a.styles + ";";
			}
			return ai(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = si, c = n(e);
				return si = s, ii(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function ai(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += ii(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : ei(s) && (r += ti(a) + ":" + ni(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && Xr) throw Error(ri);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) ei(o[c]) && (r += ti(a) + ":" + ni(a, o[c]) + ";");
			else {
				var l = ii(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += ti(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var oi = /label:\s*([^\s;{]+)\s*(;|$)/g, si;
function ci(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	si = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += ii(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += ii(n, t, e[o]), r && (i += a[o]);
	oi.lastIndex = 0;
	for (var s = "", c; (c = oi.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: Jr(i) + s,
		styles: i,
		next: si
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.4/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
q();
var li = ht || function(e) {
	return e();
};
//#endregion
//#region ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.4/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
q();
var ui = /* @__PURE__ */ F(typeof HTMLElement < "u" ? /* @__PURE__ */ zr({ key: "css" }) : null);
ui.Provider;
var di = function(e) {
	return /* @__PURE__ */ Xe(function(t, n) {
		return e(t, _e(ui), n);
	});
}, fi = /* @__PURE__ */ F({}), pi = {}.hasOwnProperty, mi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hi = function(e, t) {
	var n = {};
	for (var r in t) pi.call(t, r) && (n[r] = t[r]);
	return n[mi] = e, n;
}, gi = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Kr(t, n, r), li(function() {
		return qr(t, n, r);
	}), null;
}, _i = /* @__PURE__ */ di(function(e, t, n) {
	var r = e.css;
	typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
	var i = e[mi], a = [r], s = "";
	typeof e.className == "string" ? s = Gr(t.registered, a, e.className) : e.className != null && (s = e.className + " ");
	var c = ci(a, void 0, _e(fi));
	s += t.key + "-" + c.name;
	var u = {};
	for (var d in e) pi.call(e, d) && d !== "css" && d !== mi && (u[d] = e[d]);
	return u.className = s, n && (u.ref = n), /* @__PURE__ */ o(l, null, /* @__PURE__ */ o(gi, {
		cache: t,
		serialized: c,
		isStringTag: typeof i == "string"
	}), /* @__PURE__ */ o(i, u));
});
q(), Ur();
var vi = function(e, t) {
	var n = arguments;
	if (t == null || !pi.call(t, "css")) return o.apply(void 0, n);
	var r = n.length, i = Array(r);
	i[0] = _i, i[1] = hi(e, t);
	for (var a = 2; a < r; a++) i[a] = n[a];
	return o.apply(null, i);
};
(function(e) {
	var t;
	(function(e) {})(t ||= e.JSX ||= {});
})(vi ||= {});
function yi() {
	return ci([...arguments]);
}
function bi() {
	var e = yi.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var xi = /* @__PURE__ */ r(((t) => {
	var n = (q(), e(Be));
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
})), Si = /* @__PURE__ */ r(((t) => {
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
		var o = (q(), e(Be)), s = typeof Object.is == "function" ? Object.is : n, c = o.useState, l = o.useEffect, u = o.useLayoutEffect, d = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? a : r;
		t.useSyncExternalStore = o.useSyncExternalStore === void 0 ? m : o.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Ci = /* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = xi() : t.exports = Si();
})), wi = [
	"top",
	"right",
	"bottom",
	"left"
], Ti = Math.min, Ei = Math.max, Di = Math.round, Oi = Math.floor, ki = (e) => ({
	x: e,
	y: e
}), Ai = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ji(e, t, n) {
	return Ei(e, Ti(t, n));
}
function Mi(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ni(e) {
	return e.split("-")[0];
}
function Pi(e) {
	return e.split("-")[1];
}
function Fi(e) {
	return e === "x" ? "y" : "x";
}
function Ii(e) {
	return e === "y" ? "height" : "width";
}
function Li(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Ri(e) {
	return Fi(Li(e));
}
function zi(e, t, n) {
	n === void 0 && (n = !1);
	let r = Pi(e), i = Ri(e), a = Ii(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Ji(o)), [o, Ji(o)];
}
function Bi(e) {
	let t = Ji(e);
	return [
		Vi(e),
		t,
		Vi(t)
	];
}
function Vi(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Hi = ["left", "right"], Ui = ["right", "left"], Wi = ["top", "bottom"], Gi = ["bottom", "top"];
function Ki(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ui : Hi : t ? Hi : Ui;
		case "left":
		case "right": return t ? Wi : Gi;
		default: return [];
	}
}
function qi(e, t, n, r) {
	let i = Pi(e), a = Ki(Ni(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Vi)))), a;
}
function Ji(e) {
	let t = Ni(e);
	return Ai[t] + e.slice(t.length);
}
function Yi(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Xi(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Yi(e);
}
function Zi(e) {
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
function Qi(e, t, n) {
	let { reference: r, floating: i } = e, a = Li(t), o = Ri(t), s = Ii(o), c = Ni(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Pi(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function $i(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Mi(t, e), p = Xi(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Zi(await i.getClippingRect({
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
	}, y = Zi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var ea = 50, ta = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: $i
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Qi(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < ea && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Qi(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, na = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Mi(e, t) || {};
		if (l == null) return {};
		let d = Xi(u), f = {
			x: n,
			y: r
		}, p = Ri(i), m = Ii(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Ti(d[_], T), D = Ti(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = ji(O, A, k), M = !c.arrow && Pi(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
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
}), ra = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Mi(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ni(r), _ = Li(o), v = Ni(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Ji(o)] : Bi(o)), x = p !== "none";
			!d && x && b.push(...qi(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = zi(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Li(t)) || T.every((e) => Li(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = Li(e.placement);
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
function ia(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function aa(e) {
	return wi.some((t) => e[t] >= 0);
}
var oa = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Mi(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ia(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: aa(e)
					} };
				}
				case "escaped": {
					let e = ia(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: aa(e)
					} };
				}
				default: return {};
			}
		}
	};
}, sa = /* @__PURE__ */ new Set(["left", "top"]);
async function ca(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ni(n), s = Pi(n), c = Li(n) === "y", l = sa.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Mi(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var la = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ca(t, e);
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
}, ua = function(e) {
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
			} }, ...l } = Mi(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Li(Ni(i)), p = Fi(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = ji(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = ji(n, h, r);
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
}, da = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Mi(e, t), u = {
				x: n,
				y: r
			}, d = Li(i), f = Fi(d), p = u[f], m = u[d], h = Mi(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = sa.has(Ni(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, fa = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Mi(e, t), u = await o.detectOverflow(t, l), d = Ni(i), f = Pi(i), p = Li(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Ti(h - u[g], v), x = Ti(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Ei(u.left, 0), t = Ei(u.right, 0), n = Ei(u.top, 0), r = Ei(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Ei(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Ei(u.top, u.bottom));
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
function pa() {
	return typeof window < "u";
}
function ma(e) {
	return _a(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ha(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ga(e) {
	return ((_a(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function _a(e) {
	return pa() ? e instanceof Node || e instanceof ha(e).Node : !1;
}
function va(e) {
	return pa() ? e instanceof Element || e instanceof ha(e).Element : !1;
}
function ya(e) {
	return pa() ? e instanceof HTMLElement || e instanceof ha(e).HTMLElement : !1;
}
function ba(e) {
	return !pa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ha(e).ShadowRoot;
}
function xa(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Ma(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Sa(e) {
	return /^(table|td|th)$/.test(ma(e));
}
function Ca(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var wa = /transform|translate|scale|rotate|perspective|filter/, Ta = /paint|layout|strict|content/, Ea = (e) => !!e && e !== "none", Da;
function Oa(e) {
	let t = va(e) ? Ma(e) : e;
	return Ea(t.transform) || Ea(t.translate) || Ea(t.scale) || Ea(t.rotate) || Ea(t.perspective) || !Aa() && (Ea(t.backdropFilter) || Ea(t.filter)) || wa.test(t.willChange || "") || Ta.test(t.contain || "");
}
function ka(e) {
	let t = Pa(e);
	for (; ya(t) && !ja(t);) {
		if (Oa(t)) return t;
		if (Ca(t)) return null;
		t = Pa(t);
	}
	return null;
}
function Aa() {
	return Da ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Da;
}
function ja(e) {
	return /^(html|body|#document)$/.test(ma(e));
}
function Ma(e) {
	return ha(e).getComputedStyle(e);
}
function Na(e) {
	return va(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Pa(e) {
	if (ma(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ba(e) && e.host || ga(e);
	return ba(t) ? t.host : t;
}
function Fa(e) {
	let t = Pa(e);
	return ja(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ya(t) && xa(t) ? t : Fa(t);
}
function Ia(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Fa(e), i = r === e.ownerDocument?.body, a = ha(r);
	if (i) {
		let e = La(a);
		return t.concat(a, a.visualViewport || [], xa(r) ? r : [], e && n ? Ia(e) : []);
	} else return t.concat(r, Ia(r, [], n));
}
function La(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Ra(e) {
	let t = Ma(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = ya(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Di(n) !== a || Di(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function za(e) {
	return va(e) ? e : e.contextElement;
}
function Ba(e) {
	let t = za(e);
	if (!ya(t)) return ki(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Ra(t), o = (a ? Di(n.width) : n.width) / r, s = (a ? Di(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Va = /* @__PURE__ */ ki(0);
function Ha(e) {
	let t = ha(e);
	return !Aa() || !t.visualViewport ? Va : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ua(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== ha(e) ? !1 : t;
}
function Wa(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = za(e), o = ki(1);
	t && (r ? va(r) && (o = Ba(r)) : o = Ba(e));
	let s = Ua(a, n, r) ? Ha(a) : ki(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = ha(a), t = r && va(r) ? ha(r) : r, n = e, i = La(n);
		for (; i && r && t !== n;) {
			let e = Ba(i), t = i.getBoundingClientRect(), r = Ma(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = ha(i), i = La(n);
		}
	}
	return Zi({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ga(e, t) {
	let n = Na(e).scrollLeft;
	return t ? t.left + n : Wa(ga(e)).left + n;
}
function Ka(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ga(e, n),
		y: n.top + t.scrollTop
	};
}
function qa(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = ga(r), s = t ? Ca(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = ki(1), u = ki(0), d = ya(r);
	if ((d || !d && !a) && ((ma(r) !== "body" || xa(o)) && (c = Na(r)), d)) {
		let e = Wa(r);
		l = Ba(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ka(o, c) : ki(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ja(e) {
	return Array.from(e.getClientRects());
}
function Ya(e) {
	let t = ga(e), n = Na(e), r = e.ownerDocument.body, i = Ei(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ei(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Ga(e), s = -n.scrollTop;
	return Ma(r).direction === "rtl" && (o += Ei(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Xa = 25;
function Za(e, t) {
	let n = ha(e), r = ga(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Aa();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Ga(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Xa && (a -= o);
	} else l <= Xa && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Qa(e, t) {
	let n = Wa(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ya(e) ? Ba(e) : ki(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function $a(e, t, n) {
	let r;
	if (t === "viewport") r = Za(e, n);
	else if (t === "document") r = Ya(ga(e));
	else if (va(t)) r = Qa(t, n);
	else {
		let n = Ha(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Zi(r);
}
function eo(e, t) {
	let n = Pa(e);
	return n === t || !va(n) || ja(n) ? !1 : Ma(n).position === "fixed" || eo(n, t);
}
function to(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ia(e, [], !1).filter((e) => va(e) && ma(e) !== "body"), i = null, a = Ma(e).position === "fixed", o = a ? Pa(e) : e;
	for (; va(o) && !ja(o);) {
		let t = Ma(o), n = Oa(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || xa(o) && !n && eo(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Pa(o);
	}
	return t.set(e, r), r;
}
function no(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ca(t) ? [] : to(t, this._c) : [].concat(n), r], o = $a(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = $a(t, a[e], i);
		s = Ei(n.top, s), c = Ti(n.right, c), l = Ti(n.bottom, l), u = Ei(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function ro(e) {
	let { width: t, height: n } = Ra(e);
	return {
		width: t,
		height: n
	};
}
function io(e, t, n) {
	let r = ya(t), i = ga(t), a = n === "fixed", o = Wa(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = ki(0);
	function l() {
		c.x = Ga(i);
	}
	if (r || !r && !a) if ((ma(t) !== "body" || xa(i)) && (s = Na(t)), r) {
		let e = Wa(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Ka(i, s) : ki(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function ao(e) {
	return Ma(e).position === "static";
}
function oo(e, t) {
	if (!ya(e) || Ma(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return ga(e) === n && (n = n.ownerDocument.body), n;
}
function so(e, t) {
	let n = ha(e);
	if (Ca(e)) return n;
	if (!ya(e)) {
		let t = Pa(e);
		for (; t && !ja(t);) {
			if (va(t) && !ao(t)) return t;
			t = Pa(t);
		}
		return n;
	}
	let r = oo(e, t);
	for (; r && Sa(r) && ao(r);) r = oo(r, t);
	return r && ja(r) && ao(r) && !Oa(r) ? n : r || ka(e) || n;
}
var co = async function(e) {
	let t = this.getOffsetParent || so, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: io(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function lo(e) {
	return Ma(e).direction === "rtl";
}
var uo = {
	convertOffsetParentRelativeRectToViewportRelativeRect: qa,
	getDocumentElement: ga,
	getClippingRect: no,
	getOffsetParent: so,
	getElementRects: co,
	getClientRects: Ja,
	getDimensions: ro,
	getScale: Ba,
	isElement: va,
	isRTL: lo
};
function fo(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function po(e, t) {
	let n = null, r, i = ga(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Oi(d), h = Oi(i.clientWidth - (u + f)), g = Oi(i.clientHeight - (d + p)), _ = Oi(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Ei(0, Ti(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !fo(l, e.getBoundingClientRect()) && o(), y = !1;
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
function mo(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = za(e), u = i || a ? [...l ? Ia(l) : [], ...t ? Ia(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? po(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Wa(e) : null;
	c && g();
	function g() {
		let t = Wa(e);
		h && !fo(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ho = la, go = ua, _o = ra, vo = fa, yo = oa, bo = na, xo = da, So = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: uo,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return ta(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react-dom@2.1.8_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
q();
var Co = typeof document < "u" ? me : function() {};
function wo(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!wo(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !wo(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function To(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Eo(e, t) {
	let n = To(e);
	return Math.round(t * n) / n;
}
function Do(e) {
	let t = U(e);
	return Co(() => {
		t.current = e;
	}), t;
}
function Oo(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = V({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = V(r);
	wo(f, r) || p(r);
	let [m, h] = V(null), [g, _] = V(null), v = ge((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = ge((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = U(null), C = U(null), w = U(u), T = c != null, E = Do(c), D = Do(i), O = Do(l), k = ge(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), So(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !wo(w.current, t) && (w.current = t, Rt(() => {
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
	Co(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = U(!1);
	Co(() => (A.current = !0, () => {
		A.current = !1;
	}), []), Co(() => {
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
		let t = Eo(M.floating, u.x), r = Eo(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...To(M.floating) >= 1.5 && { willChange: "transform" }
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
var ko = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : bo({
				element: r.current,
				padding: i
			}).fn(n) : r ? bo({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Ao = (e, t) => {
	let n = ho(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, jo = (e, t) => {
	let n = go(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Mo = (e, t) => ({
	fn: xo(e).fn,
	options: [e, t]
}), No = (e, t) => {
	let n = _o(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Po = (e, t) => {
	let n = vo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Fo = (e, t) => {
	let n = yo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Io = (e, t) => {
	let n = ko(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/formatErrorMessage.js
function Lo(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var Ro = Lo("https://base-ui.com/production-error", "Base UI");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js
q();
var zo = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (zo.displayName = "DialogRootContext");
function Bo(e) {
	let t = _e(zo);
	if (e === !1 && t === void 0) throw Error(process.env.NODE_ENV === "production" ? Ro(27) : "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useRefWithInit.js
q();
var Vo = {};
function Ho(e, t) {
	let n = U(Vo);
	return n.current === Vo && (n.current = e(t)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useMergedRefs.js
function Uo(e, t, n, r) {
	let i = Ho(Go).current;
	return Ko(i, e, t, n, r) && Jo(i, [
		e,
		t,
		n,
		r
	]), i.callback;
}
function Wo(e) {
	let t = Ho(Go).current;
	return qo(t, e) && Jo(t, e), t.callback;
}
function Go() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function Ko(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function qo(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function Jo(e, t) {
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
q();
var Yo = parseInt(It, 10);
function Xo(e) {
	return Yo >= e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/getReactElementRef.js
q();
function Zo(e) {
	if (!/* @__PURE__ */ lt(e)) return null;
	let t = e, n = t.props;
	return (Xo(19) ? n?.ref : t.ref) ?? null;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/mergeObjects.js
function Qo(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/warn.js
var $o;
process.env.NODE_ENV !== "production" && ($o = /* @__PURE__ */ new Set());
function es(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		$o.has(t) || ($o.add(t), console.warn(`Base UI: ${t}`));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/getStateAttributesProps.js
function ts(e, t) {
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
function ns(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function rs(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var is = {};
function as(e, t, n, r, i) {
	let a = { ...ds(e, is) };
	return t && (a = ss(a, t)), n && (a = ss(a, n)), r && (a = ss(a, r)), i && (a = ss(a, i)), a;
}
function os(e) {
	if (e.length === 0) return is;
	if (e.length === 1) return ds(e[0], is);
	let t = { ...ds(e[0], is) };
	for (let n = 1; n < e.length; n += 1) t = ss(t, e[n]);
	return t;
}
function ss(e, t) {
	return us(t) ? t(e) : cs(e, t);
}
function cs(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = Qo(e.style, r);
				break;
			case "className":
				e[n] = ms(e.className, r);
				break;
			default: ls(n, r) ? e[n] = fs(e[n], r) : e[n] = r;
		}
	}
	return e;
}
function ls(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function us(e) {
	return typeof e == "function";
}
function ds(e, t) {
	return us(e) ? e(t) : e ?? is;
}
function fs(e, t) {
	return t ? e ? (n) => {
		if (hs(n)) {
			let r = n;
			ps(r);
			let i = t(r);
			return r.baseUIHandlerPrevented || e?.(r), i;
		}
		let r = t(n);
		return e?.(n), r;
	} : t : e;
}
function ps(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function ms(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function hs(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/empty.js
function gs() {}
Object.freeze([]);
var _s = Object.freeze({}), vs = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useRenderElement.js
q();
function ys(e, t, n = {}) {
	let r = t.render, i = bs(t, n);
	return n.enabled === !1 ? null : Ss(e, r, i, n.state ?? _s);
}
function bs(e, t = {}) {
	let { className: n, style: r, render: i } = e, { state: a = _s, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? ns(n, a) : void 0, d = l ? rs(r, a) : void 0, f = l ? ts(a, c) : _s, p = l ? Qo(f, Array.isArray(s) ? os(s) : s) ?? _s : _s;
	return typeof document < "u" && (l ? Array.isArray(o) ? p.ref = Wo([
		p.ref,
		Zo(i),
		...o
	]) : p.ref = Uo(p.ref, Zo(i), o) : Uo(null, null)), l ? (u !== void 0 && (p.className = ms(p.className, u)), d !== void 0 && (p.style = Qo(p.style, d)), p) : _s;
}
var xs = Symbol.for("react.lazy");
function Ss(e, t, n, r) {
	if (t) {
		if (typeof t == "function") return process.env.NODE_ENV !== "production" && Cs(t), t(n, r);
		let e = as(n, t.props);
		e.ref = n.ref;
		let i = t;
		if (i?.$$typeof === xs && (i = yt.toArray(t)[0]), process.env.NODE_ENV !== "production" && !/* @__PURE__ */ lt(i)) throw Error([
			"Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
			"A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
			"https://base-ui.com/r/invalid-render-prop"
		].join("\n"));
		return /* @__PURE__ */ ft(i, e);
	}
	if (e && typeof e == "string") return ws(e, n);
	throw Error(process.env.NODE_ENV === "production" ? Ro(8) : "Base UI: Render element or function are not defined.");
}
function Cs(e) {
	let t = e.name;
	if (t.length === 0) return;
	let n = t.charCodeAt(0);
	n < 65 || n > 90 || es(`The \`render\` prop received a function named \`${t}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function ws(e, t) {
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
var Ts = /* @__PURE__ */ function(e) {
	return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e;
}({}), Es = { [Ts.startingStyle]: "" }, Ds = { [Ts.endingStyle]: "" }, Os = { transitionStatus(e) {
	return e === "starting" ? Es : e === "ending" ? Ds : null;
} }, ks = function(e) {
	return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = Ts.startingStyle] = "startingStyle", e[e.endingStyle = Ts.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e.side = "data-side", e.align = "data-align", e;
}({}), As = /* @__PURE__ */ function(e) {
	return e.popupOpen = "data-popup-open", e.pressed = "data-pressed", e;
}({});
As.popupOpen, As.popupOpen, As.pressed;
var js = { [ks.open]: "" }, Ms = { [ks.closed]: "" }, Ns = { [ks.anchorHidden]: "" }, Ps = {
	open(e) {
		return e ? js : Ms;
	},
	anchorHidden(e) {
		return e ? Ns : null;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js
q();
var Fs = {
	...Ps,
	...Os
}, Is = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, forceRender: i = !1, ...a } = e, { store: o } = Bo(), s = o.useState("open"), c = o.useState("nested"), l = o.useState("mounted");
	return ys("div", e, {
		state: {
			open: s,
			transitionStatus: o.useState("transitionStatus")
		},
		ref: [o.context.backdropRef, t],
		stateAttributesMapping: Fs,
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
process.env.NODE_ENV !== "production" && (Is.displayName = "DialogBackdrop"), q();
var Ls = Be[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)], Rs = Ls && Ls !== me ? Ls : (e) => e();
function Z(e) {
	let t = Ho(zs).current;
	return t.next = e, Rs(t.effect), t.trampoline;
}
function zs() {
	let e = {
		next: void 0,
		callback: Bs,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function Bs() {
	if (process.env.NODE_ENV !== "production") throw Error("Base UI: Cannot call an event handler while rendering.");
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/error.js
var Vs;
process.env.NODE_ENV !== "production" && (Vs = /* @__PURE__ */ new Set());
function Hs(...e) {
	if (process.env.NODE_ENV !== "production") {
		let t = e.join(" ");
		Vs.has(t) || (Vs.add(t), console.error(`Base UI: ${t}`));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/safeReact.js
q();
var Us = { ...Be };
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js
q();
var Q = typeof document < "u" ? me : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js
q();
var Ws = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (Ws.displayName = "CompositeRootContext");
function Gs(e = !1) {
	let t = _e(Ws);
	if (t === void 0 && !e) throw Error(process.env.NODE_ENV === "production" ? Ro(16) : "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
q();
function Ks(e) {
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
q();
function qs(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: r = 0, native: i = !0, composite: a } = e, o = U(null), s = Gs(!0), c = a ?? s !== void 0, { props: l } = Ks({
		focusableWhenDisabled: n,
		disabled: t,
		composite: c,
		tabIndex: r,
		isNativeButton: i
	});
	process.env.NODE_ENV !== "production" && H(() => {
		if (!o.current) return;
		let e = Js(o.current);
		i ? e || Hs(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${Us.captureOwnerStack?.() || ""}`) : e && Hs(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${Us.captureOwnerStack?.() || ""}`);
	}, [i]);
	let u = ge(() => {
		let e = o.current;
		Js(e) && c && t && l.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		l.disabled,
		c
	]);
	return Q(u, [u]), {
		getButtonProps: ge((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: o, onPointerDown: s, ...u } = e;
			return as({
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
					if (t || (ps(e), o?.(e), e.baseUIHandlerPrevented)) return;
					let r = e.target === e.currentTarget, a = e.currentTarget, s = Js(a), l = !i && Ys(a), u = r && (i ? s : !l), d = e.key === "Enter", f = e.key === " ", p = a.getAttribute("role"), m = p?.startsWith("menuitem") || p === "option" || p === "gridcell";
					if (r && c && f) {
						if (e.defaultPrevented && m) return;
						e.preventDefault(), l || i && s ? (a.click(), e.preventBaseUIHandler()) : u && (n?.(e), e.preventBaseUIHandler());
						return;
					}
					u && (!i && (f || d) && e.preventDefault(), !i && d && n?.(e));
				},
				onKeyUp(e) {
					if (!t) {
						if (ps(e), a?.(e), e.target === e.currentTarget && i && c && Js(e.currentTarget) && e.key === " ") {
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
		buttonRef: Z((e) => {
			o.current = e, u();
		})
	};
}
function Js(e) {
	return ya(e) && e.tagName === "BUTTON";
}
function Ys(e) {
	return !!(e?.tagName === "A" && e?.href);
}
var Xs = "trigger-press", Zs = "outside-press", Qs = "close-press", $s = "track-press", ec = "input-change", tc = "focus-out", nc = "escape-key", rc = "keyboard", ic = "drag", ac = "imperative-action";
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js
function oc(e, t, n, r) {
	let i = !1, a = !1, o = r ?? _s;
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
function sc(e, t, n) {
	let r = n ?? _s;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		...r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js
q();
var cc = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, disabled: i = !1, nativeButton: a = !0, ...o } = e, { store: s } = Bo(), c = s.useState("open");
	function l(e) {
		c && s.setOpen(!1, oc(Qs, e.nativeEvent));
	}
	let { getButtonProps: u, buttonRef: d } = qs({
		disabled: i,
		native: a
	});
	return ys("button", e, {
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
process.env.NODE_ENV !== "production" && (cc.displayName = "DialogClose"), q();
var lc = 0;
function uc(e, t = "mui") {
	let [n, r] = V(e), i = e || n;
	return H(() => {
		n ?? (lc += 1, r(`${t}-${lc}`));
	}, [n, t]), i;
}
var dc = Us.useId;
function fc(e, t) {
	if (dc !== void 0) {
		let n = dc();
		return e ?? (t ? `${t}-${n}` : n);
	}
	return uc(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useBaseUiId.js
function pc(e) {
	return fc(e, "base-ui");
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js
q();
var mc = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, id: i, ...a } = e, { store: o } = Bo(), s = pc(i);
	return o.useSyncedValueWithCleanup("descriptionElementId", s), ys("p", e, {
		ref: t,
		props: [{ id: s }, a]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useOnMount.js
process.env.NODE_ENV !== "production" && (mc.displayName = "DialogDescription"), q();
var hc = [];
function gc(e) {
	H(e, hc);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useTimeout.js
var _c = 0, vc = class e {
	static create() {
		return new e();
	}
	currentId = _c;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = _c, t();
		}, e);
	}
	isStarted() {
		return this.currentId !== _c;
	}
	clear = () => {
		this.currentId !== _c && (clearTimeout(this.currentId), this.currentId = _c);
	};
	disposeEffect = () => this.clear;
};
function yc() {
	let e = Ho(vc.create).current;
	return gc(e.disposeEffect), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/detectBrowser.js
var bc = typeof navigator < "u", xc = kc(), Sc = jc(), Cc = Ac(), wc = typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter:none"), Tc = xc.platform === "MacIntel" && xc.maxTouchPoints > 1 ? !0 : /iP(hone|ad|od)|iOS/.test(xc.platform);
bc && /firefox/i.test(Cc);
var Ec = bc && /apple/i.test(navigator.vendor);
bc && /Edg/i.test(Cc);
var Dc = bc && /android/i.test(Sc) || /android/i.test(Cc);
bc && Sc.toLowerCase().startsWith("mac") && navigator.maxTouchPoints;
var Oc = Cc.includes("jsdom/");
function kc() {
	if (!bc) return {
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
function Ac() {
	if (!bc) return "";
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map(({ brand: e, version: t }) => `${e}/${t}`).join(" ") : navigator.userAgent;
}
function jc() {
	if (!bc) return "";
	let e = navigator.userAgentData;
	return e?.platform ? e.platform : navigator.platform ?? "";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var Mc = "data-base-ui-focusable";
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js
function Nc(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
function Pc(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode?.();
	if (e.contains(t)) return !0;
	if (n && ba(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Fc(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Ic(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Lc(e) {
	return e.matches("html,body");
}
function Rc(e) {
	return ya(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function zc(e) {
	return e ? e.getAttribute("role") === "combobox" && Rc(e) : !1;
}
function Bc(e) {
	return e ? e.hasAttribute("data-base-ui-focusable") ? e : e.querySelector("[data-base-ui-focusable]") || e : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/nodes.js
function Vc(e, t, n = !0) {
	return e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Vc(e, t.id, n)]);
}
function Hc(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function Uc(e) {
	e.preventDefault(), e.stopPropagation();
}
function Wc(e) {
	return "nativeEvent" in e;
}
function Gc(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : Dc && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Kc(e) {
	return Oc ? !1 : !Dc && e.width === 0 && e.height === 0 || Dc && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function qc(e) {
	let t = e.type;
	return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js
function Jc(e) {
	return Ma(e).display !== "none";
}
var Yc = /* @__PURE__ */ [
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
].join(","), Xc = typeof Element > "u", Zc = Xc ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qc = !Xc && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, $c = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : $c(e.parentNode));
}, el = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, tl = function(e, t, n) {
	if ($c(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(Yc));
	return t && Zc.call(e, Yc) && r.unshift(e), r = r.filter(n), r;
}, nl = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!$c(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = nl(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			Zc.call(a, Yc) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !$c(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = nl(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, rl = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, il = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || el(e)) && !rl(e) ? 0 : e.tabIndex;
}, al = function(e, t) {
	var n = il(e);
	return n < 0 && t && !rl(e) ? 0 : n;
}, ol = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, sl = function(e) {
	return e.tagName === "INPUT";
}, cl = function(e) {
	return sl(e) && e.type === "hidden";
}, ll = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, ul = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, dl = function(e) {
	if (!e.name) return !0;
	var t = e.form || Qc(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = ul(r, e.form);
	return !i || i === e;
}, fl = function(e) {
	return sl(e) && e.type === "radio";
}, pl = function(e) {
	return fl(e) && !dl(e);
}, ml = function(e) {
	var t = e && Qc(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = Qc(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, hl = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, gl = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = Zc.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (Zc.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = Qc(e);
				if (o && !o.shadowRoot && r(o) === !0) return hl(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (ml(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return hl(e);
	return !1;
}, _l = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return Zc.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, vl = function(e, t) {
	return !(t.disabled || cl(t) || gl(t, e) || ll(t) || _l(t));
}, yl = function(e, t) {
	return !(pl(t) || il(t) < 0 || !vl(e, t));
}, bl = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, xl = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = al(a, i), s = i ? xl(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(ol).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Sl = function(e, t) {
	return t ||= {}, xl(t.getShadowRoot ? nl([e], t.includeContainer, {
		filter: yl.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: bl
	}) : tl(e, t.includeContainer, yl.bind(null, t)));
}, Cl = function(e, t) {
	return t ||= {}, t.getShadowRoot ? nl([e], t.includeContainer, {
		filter: vl.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : tl(e, t.includeContainer, vl.bind(null, t));
}, wl = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return Zc.call(e, Yc) === !1 ? !1 : yl(t, e);
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/owner.js
function Tl(e) {
	return e?.ownerDocument || document;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js
var El = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function Dl(e, t) {
	let n = Sl(e, El()), r = n.length;
	if (r === 0) return;
	let i = Nc(Tl(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function Ol(e) {
	return Dl(Tl(e).body, 1) || e;
}
function kl(e) {
	return Dl(Tl(e).body, -1) || e;
}
function Al(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !Pc(n, r);
}
function jl(e) {
	Sl(e, El()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function Ml(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useValueAsRef.js
function Nl(e) {
	let t = Ho(Pl, e).current;
	return t.next = e, Q(t.effect), t;
}
function Pl(e) {
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
var Fl = null, Il = globalThis.requestAnimationFrame, Ll = new class {
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
		let n = process.env.NODE_ENV !== "production" && Il !== requestAnimationFrame && (Il = requestAnimationFrame, !0);
		return (!this.isScheduled || n) && (requestAnimationFrame(this.tick), this.isScheduled = !0), t;
	}
	cancel(e) {
		let t = e - this.startId;
		t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, --this.callbacksCount);
	}
}(), Rl = class e {
	static create() {
		return new e();
	}
	static request(e) {
		return Ll.request(e);
	}
	static cancel(e) {
		return Ll.cancel(e);
	}
	currentId = Fl;
	request(e) {
		this.cancel(), this.currentId = Ll.request(() => {
			this.currentId = Fl, e();
		});
	}
	cancel = () => {
		this.currentId !== Fl && (Ll.cancel(this.currentId), this.currentId = Fl);
	};
	disposeEffect = () => this.cancel;
};
function zl() {
	let e = Ho(Rl.create).current;
	return gc(e.disposeEffect), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/visuallyHidden.js
var Bl = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
}, Vl = {
	...Bl,
	position: "fixed",
	top: 0,
	left: 0
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/FocusGuard.js
({ ...Bl }), q();
var Hl = /* @__PURE__ */ Xe(function(e, t) {
	let [n, r] = V();
	Q(() => {
		Ec && r("button");
	}, []);
	let i = {
		tabIndex: 0,
		role: n
	};
	return /* @__PURE__ */ Ht("span", {
		...e,
		ref: t,
		style: Vl,
		"aria-hidden": n ? void 0 : !0,
		...i,
		"data-base-ui-focus-guard": ""
	});
});
process.env.NODE_ENV !== "production" && (Hl.displayName = "FocusGuard");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js
function Ul(e) {
	return `data-base-ui-${e}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/enqueueFocus.js
var Wl = 0;
function Gl(e, t = {}) {
	let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
	r && cancelAnimationFrame(Wl);
	let a = () => e?.focus({ preventScroll: n });
	i ? a() : Wl = requestAnimationFrame(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/markOthers.js
var Kl = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap()
}, ql = "data-base-ui-inert", Jl = {
	inert: /* @__PURE__ */ new WeakSet(),
	"aria-hidden": /* @__PURE__ */ new WeakSet()
}, Yl = /* @__PURE__ */ new WeakMap(), Xl = 0;
function Zl(e) {
	return Jl[e];
}
function Ql(e) {
	return e ? ba(e) ? e.host : Ql(e.parentNode) : null;
}
var $l = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = Ql(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null), eu = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		let n = e;
		for (; n && !t.has(n);) t.add(n), n = n.parentNode;
	}), t;
}, tu = (e, t, n) => {
	let r = [], i = (e) => {
		!e || n.has(e) || Array.from(e.children).forEach((e) => {
			ma(e) !== "script" && (t.has(e) ? i(e) : r.push(e));
		});
	};
	return i(e), r;
};
function nu(e, t, n, r, { mark: i = !0, markerIgnoreElements: a = [] }) {
	let o = r ? "inert" : n ? "aria-hidden" : null, s = null, c = null, l = $l(t, e), u = i ? $l(t, a) : [], d = new Set(u), f = i ? tu(t, eu(l), new Set(l)).filter((e) => !d.has(e)) : [], p = [], m = [];
	if (o) {
		let e = Kl[o], n = Zl(o);
		c = n, s = e;
		let r = $l(t, Array.from(t.querySelectorAll("[aria-live]"))), i = l.concat(r);
		tu(t, eu(i), new Set(i)).forEach((t) => {
			let r = t.getAttribute(o), i = r !== null && r !== "false", a = (e.get(t) || 0) + 1;
			e.set(t, a), p.push(t), a === 1 && i && n.add(t), i || t.setAttribute(o, o === "inert" ? "" : "true");
		});
	}
	return i && f.forEach((e) => {
		let t = (Yl.get(e) || 0) + 1;
		Yl.set(e, t), m.push(e), t === 1 && e.setAttribute(ql, "");
	}), Xl += 1, () => {
		s && p.forEach((e) => {
			let t = (s.get(e) || 0) - 1;
			s.set(e, t), t || (!c?.has(e) && o && e.removeAttribute(o), c?.delete(e));
		}), i && m.forEach((e) => {
			let t = (Yl.get(e) || 0) - 1;
			Yl.set(e, t), t || e.removeAttribute(ql);
		}), --Xl, Xl || (Kl.inert = /* @__PURE__ */ new WeakMap(), Kl["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Jl.inert = /* @__PURE__ */ new WeakSet(), Jl["aria-hidden"] = /* @__PURE__ */ new WeakSet(), Yl = /* @__PURE__ */ new WeakMap());
	};
}
function ru(e, t = {}) {
	let { ariaHidden: n = !1, inert: r = !1, mark: i = !0, markerIgnoreElements: a = [] } = t, o = Tl(e[0]).body;
	return nu(e, o, n, r, {
		mark: i,
		markerIgnoreElements: a
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
q();
var iu = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (iu.displayName = "PortalContext");
var au = () => _e(iu), ou = Ul("portal");
function su(e = {}) {
	let { ref: t, container: n, componentProps: r = _s, elementProps: i } = e, a = fc(), o = au()?.portalNode, [s, c] = V(null), [l, u] = V(null), d = Z((e) => {
		e !== null && u(e);
	}), f = U(null);
	Q(() => {
		if (n === null) {
			f.current && (f.current = null, u(null), c(null));
			return;
		}
		if (a == null) return;
		let e = (n && (_a(n) ? n : n.current)) ?? o ?? document.body;
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
	let p = ys("div", r, {
		ref: [t, d],
		props: [{
			id: a,
			[ou]: ""
		}, i]
	});
	return {
		portalNode: l,
		portalSubtree: s && p ? /* @__PURE__ */ at(p, s) : null
	};
}
var cu = /* @__PURE__ */ Xe(function(e, t) {
	let { children: n, container: r, className: i, render: a, renderGuards: o, ...s } = e, { portalNode: c, portalSubtree: u } = su({
		container: r,
		ref: t,
		componentProps: e,
		elementProps: s
	}), d = U(null), f = U(null), p = U(null), m = U(null), [h, g] = V(null), _ = h?.modal, v = h?.open, y = typeof o == "boolean" ? o : !!h && !h.modal && h.open && !!c;
	H(() => {
		if (!c || _) return;
		function e(e) {
			c && e.relatedTarget && Al(e) && (e.type === "focusin" ? Ml : jl)(c);
		}
		return c.addEventListener("focusin", e, !0), c.addEventListener("focusout", e, !0), () => {
			c.removeEventListener("focusin", e, !0), c.removeEventListener("focusout", e, !0);
		};
	}, [c, _]), H(() => {
		!c || v || Ml(c);
	}, [v, c]);
	let b = W(() => ({
		beforeOutsideRef: d,
		afterOutsideRef: f,
		beforeInsideRef: p,
		afterInsideRef: m,
		portalNode: c,
		setFocusManagerState: g
	}), [c]);
	return /* @__PURE__ */ Ht(l, { children: [u, /* @__PURE__ */ Ht(iu.Provider, {
		value: b,
		children: [
			y && c && /* @__PURE__ */ Ht(Hl, {
				"data-type": "outside",
				ref: d,
				onFocus: (e) => {
					Al(e, c) ? p.current?.focus() : kl(h ? h.domReference : null)?.focus();
				}
			}),
			y && c && /* @__PURE__ */ Ht("span", {
				"aria-owns": c.id,
				style: vs
			}),
			c && /* @__PURE__ */ at(n, c),
			y && c && /* @__PURE__ */ Ht(Hl, {
				"data-type": "outside",
				ref: f,
				onFocus: (e) => {
					Al(e, c) ? m.current?.focus() : (Ol(h ? h.domReference : null)?.focus(), h?.closeOnFocusOut && h?.onOpenChange(!1, oc("focus-out", e.nativeEvent)));
				}
			})
		]
	})] });
});
process.env.NODE_ENV !== "production" && (cu.displayName = "FloatingPortal");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js
function lu() {
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
q();
var uu = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (uu.displayName = "FloatingNodeContext");
var du = /* @__PURE__ */ F(null);
process.env.NODE_ENV !== "production" && (du.displayName = "FloatingTreeContext");
var fu = () => _e(uu)?.id || null, pu = (e) => {
	let t = _e(du);
	return e ?? t;
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveRef.js
function mu(e) {
	return e == null ? e : "current" in e ? e.current : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js
q();
function hu(e, t) {
	let n = ha(e.target);
	return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || "keyboard" : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : "";
}
var gu = 20, _u = [];
function vu() {
	_u = _u.filter((e) => e.deref()?.isConnected);
}
function yu(e) {
	vu(), e && ma(e) !== "body" && (_u.push(new WeakRef(e)), _u.length > gu && (_u = _u.slice(-gu)));
}
function bu() {
	return vu(), _u[_u.length - 1]?.deref();
}
function xu(e) {
	if (!e) return null;
	let t = El();
	return wl(e, t) ? e : Sl(e, t)[0] || e;
}
function Su(e) {
	return !e || !e.isConnected ? !1 : typeof e.checkVisibility == "function" ? e.checkVisibility() : Jc(e);
}
function Cu(e, t) {
	if (!t.current.includes("floating") && !e.getAttribute("role")?.includes("dialog")) return;
	let n = El(), r = Cl(e, n).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return wl(e, n) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), i = e.getAttribute("tabindex");
	t.current.includes("floating") || r.length === 0 ? i !== "0" && e.setAttribute("tabindex", "0") : (i !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function wu(e) {
	let { context: t, children: n, disabled: r = !1, initialFocus: i = !0, returnFocus: a = !0, restoreFocus: o = !1, modal: s = !0, closeOnFocusOut: c = !0, openInteractionType: u = "", nextFocusableElement: d, previousFocusableElement: f, beforeContentFocusGuardRef: p, externalTree: m, getInsideElements: h } = e, g = "rootStore" in t ? t.rootStore : t, _ = g.useState("open"), v = g.useState("domReferenceElement"), y = g.useState("floatingElement"), { events: b, dataRef: x } = g.context, S = Z(() => x.current.floatingContext?.nodeId), C = i === !1, w = zc(v) && C, T = U(["content"]), E = Nl(i), D = Nl(a), O = Nl(u), k = pu(m), A = au(), j = U(!1), M = U(!1), N = U(!1), P = U(-1), F = U(""), ee = U(""), I = U(null), te = U(null), ne = Uo(I, p, A?.beforeInsideRef), L = Uo(te, A?.afterInsideRef), re = yc(), R = yc(), ie = zl(), ae = A != null, z = Bc(y), B = Z((e = z) => e ? Sl(e, El()) : []), oe = Z(() => h?.().filter((e) => e != null) ?? []), se = Z((e) => {
		let t = B(e);
		return T.current.map(() => t).filter(Boolean).flat();
	});
	H(() => {
		if (r || !s) return;
		function e(e) {
			e.key === "Tab" && Pc(z, Nc(Tl(z))) && B().length === 0 && !w && Uc(e);
		}
		let t = Tl(z);
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
		let e = Tl(z);
		function t() {
			N.current = !1;
		}
		function n(e) {
			let t = Fc(e), n = oe();
			N.current = !(Pc(y, t) || Pc(v, t) || Pc(A?.portalNode, t) || n.some((e) => e === t || Pc(e, t))), ee.current = e.pointerType || "keyboard", t?.closest("[data-base-ui-click-trigger]") && (M.current = !0);
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
		let e = Tl(z);
		function t() {
			M.current = !0, R.start(0, () => {
				M.current = !1;
			});
		}
		function n(e) {
			let t = Fc(e), n = B().indexOf(t);
			n !== -1 && (P.current = n);
		}
		function i(t) {
			let n = t.relatedTarget, r = t.currentTarget, i = Fc(t);
			queueMicrotask(() => {
				let a = S(), c = g.context.triggerElements, l = oe(), u = n?.hasAttribute(Ul("focus-guard")) && [
					I.current,
					te.current,
					A?.beforeInsideRef.current,
					A?.afterInsideRef.current,
					A?.beforeOutsideRef.current,
					A?.afterOutsideRef.current,
					mu(f),
					mu(d)
				].includes(n), p = !(Pc(v, n) || Pc(y, n) || Pc(n, y) || Pc(A?.portalNode, n) || l.some((e) => e === n || Pc(e, n)) || n != null && c.hasElement(n) || c.hasMatchingElement((e) => Pc(e, n)) || u || k && (Vc(k.nodesRef.current, a).find((e) => Pc(e.context?.elements.floating, n) || Pc(e.context?.elements.domReference, n)) || Hc(k.nodesRef.current, a).find((e) => [e.context?.elements.floating, Bc(e.context?.elements.floating)].includes(n) || e.context?.elements.domReference === n)));
				if (r === v && z && Cu(z, T), o && r !== v && !Su(i) && Nc(e) === e.body) {
					if (ya(z) && (z.focus(), o === "popup")) {
						ie.request(() => {
							z.focus();
						});
						return;
					}
					let e = P.current, t = B(), n = t[e] || t[t.length - 1] || z;
					ya(n) && n.focus();
				}
				if (x.current.insideReactTree) {
					x.current.insideReactTree = !1;
					return;
				}
				(w || !s) && n && p && !M.current && (w || n !== bu()) && (j.current = !0, g.setOpen(!1, oc(tc, t)));
			});
		}
		function a() {
			N.current || (x.current.insideReactTree = !0, re.start(0, () => {
				x.current.insideReactTree = !1;
			}));
		}
		let l = ya(v) ? v : null, u = [];
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
		let e = Array.from(A?.portalNode?.querySelectorAll(`[${Ul("portal")}]`) || []), t = (k ? Hc(k.nodesRef.current, S()) : []).find((e) => zc(e.context?.elements.domReference || null))?.context?.elements.domReference, n = ru([
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
			mu(f),
			mu(d),
			w ? v : null
		].filter((e) => e != null), {
			ariaHidden: s || w,
			mark: !1
		}), i = ru([y, ...e].filter((e) => e != null));
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
	]), Q(() => {
		if (!_ || r || !ya(z)) return;
		let e = Nc(Tl(z));
		queueMicrotask(() => {
			let t = se(z), n = E.current, r = typeof n == "function" ? n(O.current || "") : n;
			if (r === void 0 || r === !1) return;
			let i;
			i = r === !0 || r === null ? t[0] || z : mu(r), i = i || t[0] || z, !Pc(z, e) && Gl(i, { preventScroll: i === z });
		});
	}, [
		r,
		_,
		z,
		C,
		se,
		E,
		O
	]), Q(() => {
		if (r || !z) return;
		let e = Tl(z);
		yu(Nc(e));
		function t(e) {
			if (e.open || (F.current = hu(e.nativeEvent, ee.current)), e.reason === "trigger-hover" && e.nativeEvent.type === "mouseleave" && (j.current = !0), e.reason === "outside-press") if (e.nested) j.current = !1;
			else if (Gc(e.nativeEvent) || Kc(e.nativeEvent)) j.current = !1;
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
				let e = v || bu();
				return e && e.isConnected ? e : null;
			}
			let n = v || bu();
			return mu(t) || n || null;
		}
		return () => {
			b.off("openchange", t);
			let r = Nc(e), i = oe(), a = Pc(y, r) || i.some((e) => e === r || Pc(e, r)) || k && Vc(k.nodesRef.current, S(), !1).some((e) => Pc(e.context?.elements.floating, r)), o = n();
			queueMicrotask(() => {
				let t = xu(o), n = typeof D.current != "boolean";
				D.current && !j.current && ya(t) && (!(!n && t !== r && r !== e.body) || a) && t.focus({ preventScroll: !0 }), j.current = !1;
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
	]), Q(() => {
		if (!wc || _ || !y) return;
		let e = Nc(Tl(y));
		!ya(e) || !Rc(e) || Pc(y, e) && e.blur();
	}, [_, y]), Q(() => {
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
	]), Q(() => {
		if (!(r || !z)) return Cu(z, T), () => {
			queueMicrotask(vu);
		};
	}, [
		r,
		z,
		T
	]);
	let ce = !r && (s ? !w : !0) && (ae || s);
	return /* @__PURE__ */ Ht(l, { children: [
		ce && /* @__PURE__ */ Ht(Hl, {
			"data-type": "inside",
			ref: ne,
			onFocus: (e) => {
				if (s) {
					let e = se();
					Gl(e[e.length - 1]);
				} else A?.portalNode && (j.current = !1, Al(e, A.portalNode) ? Ol(v)?.focus() : mu(f ?? A.beforeOutsideRef)?.focus());
			}
		}),
		n,
		ce && /* @__PURE__ */ Ht(Hl, {
			"data-type": "inside",
			ref: L,
			onFocus: (e) => {
				s ? Gl(se()[0]) : A?.portalNode && (c && (j.current = !0), Al(e, A.portalNode) ? kl(v)?.focus() : mu(d ?? A.afterOutsideRef)?.focus());
			}
		})
	] });
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js
q();
var Tu = {
	intentional: "onClick",
	sloppy: "onPointerDown"
};
function Eu() {
	return !1;
}
function Du(e) {
	return {
		escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
		outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
	};
}
function Ou(e, t = {}) {
	let n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), i = n.useState("floatingElement"), { dataRef: a } = n.context, { enabled: o = !0, escapeKey: s = !0, outsidePress: c = !0, outsidePressEvent: l = "sloppy", referencePress: u = Eu, referencePressEvent: d = "sloppy", bubbles: f, externalTree: p } = t, m = pu(p), h = Z(typeof c == "function" ? c : () => !1), g = typeof c == "function" ? h : c, _ = g !== !1, v = Z(() => l), y = U(!1), b = U(!1), x = U(!1), { escapeKey: S, outsidePress: C } = Du(f), w = U(null), T = yc(), E = yc(), D = Z(() => {
		E.clear(), a.current.insideReactTree = !1;
	}), O = U(!1), k = U(""), A = Z(u), j = Z((e) => {
		if (!r || !o || !s || e.key !== "Escape" || O.current) return;
		let t = a.current.floatingContext?.nodeId, i = m ? Vc(m.nodesRef.current, t) : [];
		if (!S && i.length > 0) {
			let e = !0;
			if (i.forEach((t) => {
				t.context?.open && !t.context.dataRef.current.__escapeKeyBubbles && (e = !1);
			}), !e) return;
		}
		let c = oc(nc, Wc(e) ? e.nativeEvent : e);
		n.setOpen(!1, c), !S && !c.isPropagationAllowed && e.stopPropagation();
	}), M = Z(() => {
		a.current.insideReactTree = !0, E.start(0, D);
	});
	H(() => {
		if (!r || !o) return;
		a.current.__escapeKeyBubbles = S, a.current.__outsidePressBubbles = C;
		let e = new vc(), t = new vc();
		function c() {
			e.clear(), O.current = !0;
		}
		function l() {
			e.start(Aa() ? 5 : 0, () => {
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
			let t = a.current.floatingContext?.nodeId, r = m && Vc(m.nodesRef.current, t).some((t) => Ic(e, t.context?.elements.floating));
			return Ic(e, n.select("floatingElement")) || Ic(e, n.select("domReferenceElement")) || r;
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
			let r = Fc(e), i = `[${Ul("inert")}]`, o = Array.from(Tl(n.select("floatingElement")).querySelectorAll(i)), s = va(r) ? r.getRootNode() : null;
			ba(s) && (o = o.concat(Array.from(s.querySelectorAll(i))));
			let c = n.context.triggerElements;
			if (r && (c.hasElement(r) || c.hasMatchingElement((e) => Pc(e, r)))) return;
			let l = va(r) ? r : null;
			for (; l && !ja(l);) {
				let e = Pa(l);
				if (ja(e) || !va(e)) break;
				l = e;
			}
			if (o.length && va(r) && !Lc(r) && !Pc(r, n.select("floatingElement")) && o.every((e) => !Pc(l, e))) return;
			if (ya(r) && !("touches" in e)) {
				let t = ja(r), n = Ma(r), i = /auto|scroll/, a = t || i.test(n.overflowX), o = t || i.test(n.overflowY), s = a && r.clientWidth > 0 && r.scrollWidth > r.clientWidth, c = o && r.clientHeight > 0 && r.scrollHeight > r.clientHeight, l = n.direction === "rtl", u = c && (l ? e.offsetX <= r.offsetWidth - r.clientWidth : e.offsetX > r.clientWidth), d = s && e.offsetY > r.clientHeight;
				if (u || d) return;
			}
			if (h(e)) return;
			if (f() === "intentional" && x.current) {
				t.clear(), x.current = !1;
				return;
			}
			if (typeof g == "function" && !g(e)) return;
			let u = a.current.floatingContext?.nodeId, d = m ? Vc(m.nodesRef.current, u) : [];
			if (d.length > 0) {
				let e = !0;
				if (d.forEach((t) => {
					t.context?.open && !t.context.dataRef.current.__outsidePressBubbles && (e = !1);
				}), !e) return;
			}
			n.setOpen(!1, oc(Zs, e)), D();
		}
		function A(e) {
			f() !== "sloppy" || e.pointerType === "touch" || !n.select("open") || !o || Ic(e, n.select("floatingElement")) || Ic(e, n.select("domReferenceElement")) || E(e);
		}
		function M(e) {
			if (f() !== "sloppy" || !n.select("open") || !o || Ic(e, n.select("floatingElement")) || Ic(e, n.select("domReferenceElement"))) return;
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
			let t = Fc(e);
			function n() {
				M(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		function P(e) {
			if (T.clear(), e.type === "pointerdown" && (k.current = e.pointerType), e.type === "mousedown" && w.current && !w.current.dismissOnMouseDown) return;
			let t = Fc(e);
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
			if (f() !== "sloppy" || !w.current || Ic(e, n.select("floatingElement")) || Ic(e, n.select("domReferenceElement"))) return;
			let t = e.touches[0];
			if (!t) return;
			let r = Math.abs(t.clientX - w.current.startX), i = Math.abs(t.clientY - w.current.startY), a = Math.sqrt(r * r + i * i);
			a > 5 && (w.current.dismissOnTouchEnd = !0), a > 10 && (E(e), T.clear(), w.current = null);
		}
		function I(e) {
			let t = Fc(e);
			function n() {
				ee(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		function te(e) {
			f() !== "sloppy" || !w.current || Ic(e, n.select("floatingElement")) || Ic(e, n.select("domReferenceElement")) || (w.current.dismissOnTouchEnd && E(e), T.clear(), w.current = null);
		}
		function ne(e) {
			let t = Fc(e);
			function n() {
				te(e), t?.removeEventListener(e.type, n);
			}
			t?.addEventListener(e.type, n);
		}
		let L = Tl(i);
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
		[Tu[d]]: (e) => {
			A() && n.setOpen(!1, oc(Xs, e.nativeEvent));
		},
		...d !== "intentional" && { onClick(e) {
			A() && n.setOpen(!1, oc("trigger-press", e.nativeEvent));
		} }
	}), [
		j,
		n,
		d,
		A
	]), P = Z((e) => {
		if (!r || !o || e.button !== 0) return;
		let t = Fc(e.nativeEvent);
		Pc(n.select("floatingElement"), t) && (y.current || (y.current = !0, b.current = !1));
	}), F = Z((e) => {
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
var ku = (e, t, n) => {
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
}, Au = (e, t, n) => {
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
}, ju = {
	inputStabilityCheck: "once",
	identityFunctionCheck: "once"
}, Mu = /* @__PURE__ */ Symbol("NOT_FOUND");
function Nu(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Pu(e, t = `expected an object, instead received ${typeof e}`) {
	if (typeof e != "object") throw TypeError(t);
}
function Fu(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Iu = (e) => Array.isArray(e) ? e : [e];
function Lu(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return Fu(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Ru(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var zu = (e, t) => {
	let { identityFunctionCheck: n, inputStabilityCheck: r } = {
		...ju,
		...t
	};
	return {
		identityFunctionCheck: {
			shouldRun: n === "always" || n === "once" && e,
			run: ku
		},
		inputStabilityCheck: {
			shouldRun: r === "always" || r === "once" && e,
			run: Au
		}
	};
};
function Bu(e) {
	let t;
	return {
		get(n) {
			return t && e(t.key, n) ? t.value : Mu;
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
function Vu(e, t) {
	let n = [];
	function r(e) {
		let r = n.findIndex((n) => t(e, n.key));
		if (r > -1) {
			let e = n[r];
			return r > 0 && (n.splice(r, 1), n.unshift(e)), e.value;
		}
		return Mu;
	}
	function i(t, i) {
		r(t) === Mu && (n.unshift({
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
var Hu = (e, t) => e === t;
function Uu(e) {
	return function(t, n) {
		if (t === null || n === null || t.length !== n.length) return !1;
		let { length: r } = t;
		for (let i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
		return !0;
	};
}
function Wu(e, t) {
	let { equalityCheck: n = Hu, maxSize: r = 1, resultEqualityCheck: i } = typeof t == "object" ? t : { equalityCheck: t }, a = Uu(n), o = 0, s = r <= 1 ? Bu(a) : Vu(r, a);
	function c() {
		let t = s.get(arguments);
		if (t === Mu) {
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
var Gu = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, Ku = typeof WeakRef < "u" ? WeakRef : Gu, qu = 0, Ju = 1;
function Yu() {
	return {
		s: qu,
		v: void 0,
		o: null,
		p: null
	};
}
function Xu(e, t = {}) {
	let n = Yu(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = Yu(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = Yu(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === Ju) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = i?.deref?.() ?? i;
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? new Ku(c) : c;
		}
		return s.s = Ju, s.v = c, c;
	}
	return o.clearCache = () => {
		n = Yu(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function Zu(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Nu(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = Xu, argsMemoizeOptions: u = [], devModeChecks: d = {} } = {
			...n,
			...a
		}, f = Iu(c), p = Iu(u), m = Lu(e), h = s(function() {
			return t++, o.apply(null, arguments);
		}, ...f), g = !0, _ = l(function() {
			r++;
			let e = Ru(m, arguments);
			if (i = h.apply(null, e), process.env.NODE_ENV !== "production") {
				let { identityFunctionCheck: t, inputStabilityCheck: n } = zu(g, d);
				if (t.shouldRun && t.run(o, e, i), n.shouldRun) {
					let t = Ru(m, arguments);
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
var Qu = /* @__PURE__ */ Zu(Xu), $u = Object.assign((e, t = Qu) => {
	Pu(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
	let n = Object.keys(e);
	return t(n.map((t) => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}));
}, { withTypes: () => $u });
Zu({
	memoize: Wu,
	memoizeOptions: {
		maxSize: 1,
		equalityCheck: Object.is
	}
});
var $ = (e, t, n, r, i, a, ...o) => {
	if (o.length > 0) throw Error(process.env.NODE_ENV === "production" ? Ro(1) : "Unsupported number of selectors");
	let s;
	if (e && t && n && r && i && a) s = (o, s, c, l) => a(e(o, s, c, l), t(o, s, c, l), n(o, s, c, l), r(o, s, c, l), i(o, s, c, l), s, c, l);
	else if (e && t && n && r && i) s = (a, o, s, c) => i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
	else if (e && t && n && r) s = (i, a, o, s) => r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
	else if (e && t && n) s = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
	else if (e && t) s = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
	else if (e) s = e;
	else throw Error("Missing arguments");
	return s;
}, ed = /* @__PURE__ */ r(((t) => {
	var n = (q(), e(Be)), r = Ci();
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
})), td = /* @__PURE__ */ r(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var r = (q(), e(Be)), i = Ci(), a = typeof Object.is == "function" ? Object.is : n, o = i.useSyncExternalStore, s = r.useRef, c = r.useEffect, l = r.useMemo, u = r.useDebugValue;
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
})), nd = /* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ed() : t.exports = td();
}));
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/fastHooks.js
q();
var rd = [], id = void 0;
function ad() {
	return id;
}
function od(e) {
	rd.push(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/useStore.js
q();
var sd = Ci(), cd = nd(), ld = Xo(19) ? fd : pd;
function ud(e, t, n, r, i) {
	return ld(e, t, n, r, i);
}
function dd(e, t, n, r, i) {
	let a = ge(() => t(e.getSnapshot(), n, r, i), [
		e,
		t,
		n,
		r,
		i
	]);
	return (0, sd.useSyncExternalStore)(e.subscribe, a, a);
}
od({
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
		}), (0, sd.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
	}
});
function fd(e, t, n, r, i) {
	let a = ad();
	if (!a) return dd(e, t, n, r, i);
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
function pd(e, t, n, r, i) {
	return (0, cd.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, (e) => t(e, n, r, i));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/Store.js
var md = class {
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
		return ud(this, e, t, n, r);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/ReactStore.js
q();
var hd = class extends md {
	constructor(e, t = {}, n) {
		super(e), this.context = t, this.selectors = n;
	}
	useSyncedValue(e, t) {
		ve(e), Q(() => {
			this.state[e] !== t && this.set(e, t);
		}, [e, t]);
	}
	useSyncedValueWithCleanup(e, t) {
		let n = this;
		Q(() => (n.state[e] !== t && n.set(e, t), () => {
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
			ve(e, (e) => Object.keys(e));
			let t = U(Object.keys(e)).current, n = Object.keys(e);
			(t.length !== n.length || t.some((e, t) => e !== n[t])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
		}
		Q(() => {
			t.update(e);
		}, [t, ...Object.values(e)]);
	}
	useControlledProp(e, t) {
		ve(e);
		let n = t !== void 0;
		if (Q(() => {
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
		return ve(e), ud(this, this.selectors[e], t, n, r);
	}
	useContextCallback(e, t) {
		ve(e);
		let n = Z(t ?? gs);
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
}, gd = {
	open: $((e) => e.open),
	domReferenceElement: $((e) => e.domReferenceElement),
	referenceElement: $((e) => e.positionReference ?? e.referenceElement),
	floatingElement: $((e) => e.floatingElement),
	floatingId: $((e) => e.floatingId)
}, _d = class extends hd {
	constructor(e) {
		let { nested: t, noEmit: n, onOpenChange: r, triggerElements: i, ...a } = e;
		super({
			...a,
			positionReference: a.referenceElement,
			domReferenceElement: a.referenceElement
		}, {
			onOpenChange: r,
			dataRef: { current: {} },
			events: lu(),
			nested: t,
			noEmit: n,
			triggerElements: i
		}, gd);
	}
	setOpen = (e, t) => {
		if ((!e || !this.state.open || qc(t.event)) && (this.context.dataRef.current.openEvent = e ? t.event : void 0), !this.context.noEmit) {
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
q();
function vd(e, t = !1, n = !1) {
	let [r, i] = V(e && t ? "idle" : void 0), [a, o] = V(e);
	return e && !a && (o(!0), i("starting")), !e && a && r !== "ending" && !n && i("ending"), !e && !a && r === "ending" && i(void 0), Q(() => {
		if (!e && a && r !== "ending" && n) {
			let e = Rl.request(() => {
				i("ending");
			});
			return () => {
				Rl.cancel(e);
			};
		}
	}, [
		e,
		a,
		r,
		n
	]), Q(() => {
		if (!e || t) return;
		let n = Rl.request(() => {
			i(void 0);
		});
		return () => {
			Rl.cancel(n);
		};
	}, [t, e]), Q(() => {
		if (!e || !t) return;
		e && a && r !== "idle" && i("starting");
		let n = Rl.request(() => {
			i("idle");
		});
		return () => {
			Rl.cancel(n);
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
q();
function yd(e, t = !1, n = !0) {
	let r = zl();
	return Z((i, a = null) => {
		r.cancel();
		function o() {
			Rt(i);
		}
		let s = mu(e);
		if (s == null) return;
		let c = s;
		if (typeof c.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) i();
		else {
			function e() {
				let e = Ts.startingStyle;
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
q();
function bd(e) {
	let { enabled: t = !0, open: n, ref: r, onComplete: i } = e, a = Z(i), o = yd(r, n, !1);
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
q();
function xd(e) {
	let t = e.useState("open");
	Q(() => {
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
function Sd(e, t, n) {
	let { mounted: r, setMounted: i, transitionStatus: a } = vd(e);
	t.useSyncedValues({
		mounted: r,
		transitionStatus: a
	});
	let o = Z(() => {
		i(!1), t.update({
			activeTriggerId: null,
			activeTriggerElement: null,
			mounted: !1
		}), n?.(), t.context.onOpenChangeComplete?.(!1);
	});
	return bd({
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
var Cd = class {
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
function wd() {
	return new _d({
		open: !1,
		floatingElement: null,
		referenceElement: null,
		triggerElements: new Cd(),
		floatingId: "",
		nested: !1,
		noEmit: !1,
		onOpenChange: void 0
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/popups/store.js
function Td() {
	return {
		open: !1,
		openProp: void 0,
		mounted: !1,
		transitionStatus: "idle",
		floatingRootContext: wd(),
		preventUnmountingOnClose: !1,
		payload: void 0,
		activeTriggerId: null,
		activeTriggerElement: null,
		triggerIdProp: void 0,
		popupElement: null,
		positionerElement: null,
		activeTriggerProps: _s,
		inactiveTriggerProps: _s,
		popupProps: _s
	};
}
var Ed = $((e) => e.triggerIdProp ?? e.activeTriggerId), Dd = {
	open: $((e) => e.openProp ?? e.open),
	mounted: $((e) => e.mounted),
	transitionStatus: $((e) => e.transitionStatus),
	floatingRootContext: $((e) => e.floatingRootContext),
	preventUnmountingOnClose: $((e) => e.preventUnmountingOnClose),
	payload: $((e) => e.payload),
	activeTriggerId: Ed,
	activeTriggerElement: $((e) => e.mounted ? e.activeTriggerElement : null),
	isTriggerActive: $((e, t) => t !== void 0 && Ed(e) === t),
	isOpenedByTrigger: $((e, t) => t !== void 0 && Ed(e) === t && e.open),
	isMountedByTrigger: $((e, t) => t !== void 0 && Ed(e) === t && e.mounted),
	triggerProps: $((e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps),
	popupProps: $((e) => e.popupProps),
	popupElement: $((e) => e.popupElement),
	positionerElement: $((e) => e.positionerElement)
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js
function Od(e) {
	let { popupStore: t, noEmit: n = !1, treatPopupAsFloatingElement: r = !1, onOpenChange: i } = e, a = fc(), o = fu() != null, s = t.useState("open"), c = t.useState("activeTriggerElement"), l = t.useState(r ? "popupElement" : "positionerElement"), u = t.context.triggerElements, d = Ho(() => new _d({
		open: s,
		referenceElement: c,
		floatingElement: l,
		triggerElements: u,
		onOpenChange: i,
		floatingId: a,
		nested: o,
		noEmit: n
	})).current;
	return Q(() => {
		let e = {
			open: s,
			floatingId: a,
			referenceElement: c,
			floatingElement: l
		};
		va(c) && (e.domReferenceElement = c), d.state.positionReference === d.state.referenceElement && (e.positionReference = c), d.update(e);
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
q();
function kd(e = []) {
	let t = e.map((e) => e?.reference), n = e.map((e) => e?.floating), r = e.map((e) => e?.item), i = e.map((e) => e?.trigger), a = ge((t) => Ad(t, e, "reference"), t), o = ge((t) => Ad(t, e, "floating"), n), s = ge((t) => Ad(t, e, "item"), r), c = ge((t) => Ad(t, e, "trigger"), i);
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
function Ad(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = {};
	n === "floating" && (a.tabIndex = -1, a[Mc] = "");
	for (let t in e) i && e && (t === "active" || t === "selected") || (a[t] = e[t]);
	for (let o = 0; o < t.length; o += 1) {
		let s, c = t[o]?.[n];
		s = typeof c == "function" ? e ? c(e) : null : c, s && jd(a, s, i, r);
	}
	return jd(a, e, i, r), a;
}
function jd(e, t, n, r) {
	for (let i in t) {
		let a = t[i];
		n && (i === "active" || i === "selected") || (i.startsWith("on") ? (r.has(i) || r.set(i, []), typeof a == "function" && (r.get(i)?.push(a), e[i] = (...e) => r.get(i)?.map((t) => t(...e)).find((e) => e !== void 0))) : e[i] = a);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js
q();
var Md = new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1]
]);
function Nd(e, t = {}) {
	let n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), i = n.useState("floatingId"), a = n.useState("domReferenceElement"), o = n.useState("floatingElement"), { role: s = "dialog" } = t, c = fc(), l = a?.id || c, u = W(() => Bc(o)?.id || i, [o, i]), d = Md.get(s) ?? s, f = fu() != null, p = W(() => d === "tooltip" || s === "label" ? _s : {
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
	]), g = ge(({ active: e, selected: t }) => {
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
var Pd = /* @__PURE__ */ function(e) {
	return e.nestedDialogs = "--nested-dialogs", e;
}({}), Fd = function(e) {
	return e[e.open = ks.open] = "open", e[e.closed = ks.closed] = "closed", e[e.startingStyle = ks.startingStyle] = "startingStyle", e[e.endingStyle = ks.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
}({});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js
q();
var Id = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (Id.displayName = "DialogPortalContext");
function Ld() {
	let e = _e(Id);
	if (e === void 0) throw Error(process.env.NODE_ENV === "production" ? Ro(26) : "Base UI: <Dialog.Portal> is missing.");
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/composite.js
var Rd = "ArrowUp", zd = "ArrowDown", Bd = "ArrowLeft", Vd = "ArrowRight", Hd = "Home", Ud = new Set([Bd, Vd]), Wd = new Set([Rd, zd]), Gd = new Set([...Ud, ...Wd]);
new Set([
	...Gd,
	Hd,
	"End"
]);
var Kd = new Set([
	Rd,
	zd,
	Bd,
	Vd,
	Hd,
	"End"
]);
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js
q();
var qd = {
	...Ps,
	...Os,
	nestedDialogOpen(e) {
		return e ? { [Fd.nestedDialogOpen]: "" } : null;
	}
}, Jd = /* @__PURE__ */ Xe(function(e, t) {
	let { className: n, finalFocus: r, initialFocus: i, render: a, ...o } = e, { store: s } = Bo(), c = s.useState("descriptionElementId"), l = s.useState("disablePointerDismissal"), u = s.useState("floatingRootContext"), d = s.useState("popupProps"), f = s.useState("modal"), p = s.useState("mounted"), m = s.useState("nested"), h = s.useState("nestedOpenDialogCount"), g = s.useState("open"), _ = s.useState("openMethod"), v = s.useState("titleElementId"), y = s.useState("transitionStatus"), b = s.useState("role");
	Ld(), bd({
		open: g,
		ref: s.context.popupRef,
		onComplete() {
			g && s.context.onOpenChangeComplete?.(!0);
		}
	});
	function x(e) {
		return e === "touch" ? s.context.popupRef.current : !0;
	}
	let S = i === void 0 ? x : i, C = ys("div", e, {
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
					Kd.has(e.key) && e.stopPropagation();
				},
				style: { [Pd.nestedDialogs]: h }
			},
			o
		],
		ref: [
			t,
			s.context.popupRef,
			s.useStateSetter("popupElement")
		],
		stateAttributesMapping: qd
	});
	return /* @__PURE__ */ Ht(wu, {
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
process.env.NODE_ENV !== "production" && (Jd.displayName = "DialogPopup");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/inertValue.js
function Yd(e) {
	return Xo(19) ? e : e ? "true" : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js
q();
var Xd = /* @__PURE__ */ Xe(function(e, t) {
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
	return /* @__PURE__ */ Ht("div", {
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
process.env.NODE_ENV !== "production" && (Xd.displayName = "InternalBackdrop"), q();
var Zd = /* @__PURE__ */ Xe(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { store: i } = Bo(), a = i.useState("mounted"), o = i.useState("modal"), s = i.useState("open");
	return a || n ? /* @__PURE__ */ Ht(Id.Provider, {
		value: n,
		children: /* @__PURE__ */ Ht(cu, {
			ref: t,
			...r,
			children: [a && o === !0 && /* @__PURE__ */ Ht(Xd, {
				ref: i.context.internalBackdropRef,
				inert: Yd(!s)
			}), e.children]
		})
	}) : null;
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useOnFirstRender.js
process.env.NODE_ENV !== "production" && (Zd.displayName = "DialogPortal"), q();
function Qd(e) {
	let t = U(!0);
	t.current && (t.current = !1, e());
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useScrollLock.js
var $d = {}, ef = {}, tf = "";
function nf(e) {
	if (typeof document > "u") return !1;
	let t = Tl(e);
	return ha(t).innerWidth - t.documentElement.clientWidth > 0;
}
function rf(e) {
	if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return !1;
	let t = Tl(e), n = t.documentElement, r = t.body, i = xa(n) ? n : r, a = i.style.overflowY, o = n.style.scrollbarGutter;
	n.style.scrollbarGutter = "stable", i.style.overflowY = "scroll";
	let s = i.offsetWidth;
	i.style.overflowY = "hidden";
	let c = i.offsetWidth;
	return i.style.overflowY = a, n.style.scrollbarGutter = o, s === c;
}
function af(e) {
	let t = Tl(e), n = t.documentElement, r = t.body, i = xa(n) ? n : r, a = {
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
function of(e) {
	let t = Tl(e), n = t.documentElement, r = t.body, i = ha(n), a = 0, o = 0, s = !1, c = Rl.create();
	if (wc && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
	function l() {
		let t = i.getComputedStyle(n), c = i.getComputedStyle(r), l = (t.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		a = n.scrollTop, o = n.scrollLeft, $d = {
			scrollbarGutter: n.style.scrollbarGutter,
			overflowY: n.style.overflowY,
			overflowX: n.style.overflowX
		}, tf = n.style.scrollBehavior, ef = {
			position: r.style.position,
			height: r.style.height,
			width: r.style.width,
			boxSizing: r.style.boxSizing,
			overflowY: r.style.overflowY,
			overflowX: r.style.overflowX,
			scrollBehavior: r.style.scrollBehavior
		};
		let u = n.scrollHeight > n.clientHeight, d = n.scrollWidth > n.clientWidth, f = t.overflowY === "scroll" || c.overflowY === "scroll", p = t.overflowX === "scroll" || c.overflowX === "scroll", m = Math.max(0, i.innerWidth - r.clientWidth), h = Math.max(0, i.innerHeight - r.clientHeight), g = parseFloat(c.marginTop) + parseFloat(c.marginBottom), _ = parseFloat(c.marginLeft) + parseFloat(c.marginRight), v = xa(n) ? n : r;
		if (s = rf(e), s) {
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
		Object.assign(n.style, $d), Object.assign(r.style, ef), s || (n.scrollTop = a, n.scrollLeft = o, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = tf);
	}
	function d() {
		u(), c.request(l);
	}
	return l(), i.addEventListener("resize", d), () => {
		c.cancel(), u(), typeof i.removeEventListener == "function" && i.removeEventListener("resize", d);
	};
}
var sf = new class {
	lockCount = 0;
	restore = null;
	timeoutLock = vc.create();
	timeoutUnlock = vc.create();
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
		let t = Tl(e).documentElement, n = ha(t).getComputedStyle(t).overflowY;
		if (n === "hidden" || n === "clip") {
			this.restore = gs;
			return;
		}
		this.restore = Tc || !nf(e) ? af(e) : of(e);
	}
}();
function cf(e = !0, t = null) {
	Q(() => {
		if (e) return sf.acquire(t);
	}, [e, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useEnhancedClickHandler.js
q();
function lf(e) {
	let t = U(""), n = ge((n) => {
		n.defaultPrevented || (t.current = n.pointerType, e(n, n.pointerType));
	}, [e]);
	return {
		onClick: ge((n) => {
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
q();
function uf(e, t) {
	let n = U(e), r = Z(t);
	Q(() => {
		n.current !== e && r(n.current);
	}, [e, r]), Q(() => {
		n.current = e;
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js
q();
function df(e) {
	let [t, n] = V(null), r = Z((t, r) => {
		e || n(r || (Tc ? "touch" : ""));
	});
	uf(e, (t) => {
		t && !e && n(null);
	});
	let { onClick: i, onPointerDown: a } = lf(r);
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
q();
function ff(e) {
	let { store: t, parentContext: n, actionsRef: r } = e, i = t.useState("open"), a = t.useState("disablePointerDismissal"), o = t.useState("modal"), s = t.useState("popupElement"), { openMethod: c, triggerProps: l } = df(i);
	xd(t);
	let { forceUnmount: u } = Sd(i, t), d = Z((e) => {
		let n = oc(e);
		return n.preventUnmountOnClose = () => {
			t.set("preventUnmountingOnClose", !0);
		}, n;
	}), f = ge(() => {
		t.setOpen(!1, d(ac));
	}, [t, d]);
	he(r, () => ({
		unmount: u,
		close: f
	}), [u, f]);
	let p = Od({
		popupStore: t,
		onOpenChange: t.setOpen,
		treatPopupAsFloatingElement: !0,
		noEmit: !0
	}), [m, h] = V(0), g = m === 0, _ = Nd(p), v = Ou(p, {
		outsidePressEvent() {
			return t.context.internalBackdropRef.current || t.context.backdropRef.current ? "intentional" : {
				mouse: o === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(e) {
			if (!t.context.outsidePressEnabledRef.current || "button" in e && e.button !== 0 || "touches" in e && e.touches.length !== 1) return !1;
			let n = Fc(e);
			if (g && !a) {
				let e = n;
				return o && (t.context.internalBackdropRef.current || t.context.backdropRef.current) ? t.context.internalBackdropRef.current === e || t.context.backdropRef.current === e || Pc(e, s) && !e?.hasAttribute("data-base-ui-portal") : !0;
			}
			return !1;
		},
		escapeKey: g
	});
	cf(i && o === !0, s);
	let { getReferenceProps: y, getFloatingProps: b, getTriggerProps: x } = kd([_, v]);
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
q();
var pf = {
	...Dd,
	modal: $((e) => e.modal),
	nested: $((e) => e.nested),
	nestedOpenDialogCount: $((e) => e.nestedOpenDialogCount),
	disablePointerDismissal: $((e) => e.disablePointerDismissal),
	openMethod: $((e) => e.openMethod),
	descriptionElementId: $((e) => e.descriptionElementId),
	titleElementId: $((e) => e.titleElementId),
	viewportElement: $((e) => e.viewportElement),
	role: $((e) => e.role)
}, mf = class extends hd {
	constructor(e) {
		super(hf(e), {
			popupRef: /* @__PURE__ */ c(),
			backdropRef: /* @__PURE__ */ c(),
			internalBackdropRef: /* @__PURE__ */ c(),
			outsidePressEnabledRef: { current: !0 },
			triggerElements: new Cd(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0
		}, pf);
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
function hf(e = {}) {
	return {
		...Td(),
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
q();
function gf(e) {
	let { children: t, open: n, defaultOpen: r = !1, onOpenChange: i, onOpenChangeComplete: a, disablePointerDismissal: o = !1, modal: s = !0, actionsRef: c, handle: l, triggerId: u, defaultTriggerId: d = null } = e, f = Bo(!0), p = !!f, m = Ho(() => l?.store ?? new mf({
		open: r,
		openProp: n,
		activeTriggerId: d,
		triggerIdProp: u,
		modal: s,
		disablePointerDismissal: o,
		nested: p
	})).current;
	Qd(() => {
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
	ff({
		store: m,
		actionsRef: c,
		parentContext: f?.store.context,
		onOpenChange: i,
		triggerIdProp: u
	});
	let g = W(() => ({ store: m }), [m]);
	return /* @__PURE__ */ Ht(zo.Provider, {
		value: g,
		children: typeof t == "function" ? t({ payload: h }) : t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js
q();
var _f = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, id: i, ...a } = e, { store: o } = Bo(), s = pc(i);
	return o.useSyncedValueWithCleanup("titleElementId", s), ys("h2", e, {
		ref: t,
		props: [{ id: s }, a]
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useControlled.js
process.env.NODE_ENV !== "production" && (_f.displayName = "DialogTitle"), q();
function vf({ controlled: e, default: t, name: n, state: r = "value" }) {
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
	return [s, ge((e) => {
		i || o(e);
	}, [])];
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/clamp.js
function yf(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/areArraysEqual.js
function bf(e, t, n = (e, t) => e === t) {
	return e.length === t.length && e.every((e, r) => n(e, t[r]));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js
q();
var xf = /* @__PURE__ */ F({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => () => {},
	elementsRef: { current: [] },
	nextIndexRef: { current: 0 }
});
process.env.NODE_ENV !== "production" && (xf.displayName = "CompositeListContext");
function Sf() {
	return _e(xf);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/CompositeList.js
q();
function Cf(e) {
	let { children: t, elementsRef: n, labelsRef: r, onMapChange: i } = e, a = Z(i), o = U(0), s = Ho(Tf).current, c = Ho(wf).current, [l, u] = V(0), d = U(l), f = Z((e, t) => {
		c.set(e, t ?? null), d.current += 1, u(d.current);
	}), p = Z((e) => {
		c.delete(e), d.current += 1, u(d.current);
	}), m = W(() => {
		let e = /* @__PURE__ */ new Map();
		return Array.from(c.keys()).filter((e) => e.isConnected).sort(Ef).forEach((t, n) => {
			let r = c.get(t) ?? {};
			e.set(t, {
				...r,
				index: n
			});
		}), e;
	}, [c, l]);
	Q(() => {
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
	}, [m]), Q(() => {
		d.current === l && (n.current.length !== m.size && (n.current.length = m.size), r && r.current.length !== m.size && (r.current.length = m.size), o.current = m.size), a(m);
	}, [
		a,
		m,
		n,
		r,
		l
	]), Q(() => () => {
		n.current = [];
	}, [n]), Q(() => () => {
		r && (r.current = []);
	}, [r]);
	let h = Z((e) => (s.add(e), () => {
		s.delete(e);
	}));
	Q(() => {
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
	return /* @__PURE__ */ Ht(xf.Provider, {
		value: g,
		children: t
	});
}
function wf() {
	return /* @__PURE__ */ new Map();
}
function Tf() {
	return /* @__PURE__ */ new Set();
}
function Ef(e, t) {
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js
function Df(e, t) {
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
q();
var Of = /* @__PURE__ */ F({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: gs,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: !1 }
});
process.env.NODE_ENV !== "production" && (Of.displayName = "FormContext");
function kf() {
	return _e(Of);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js
var Af = /* @__PURE__ */ function(e) {
	return e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), jf = {
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
}, Mf = {
	valid: null,
	touched: !1,
	dirty: !1,
	filled: !1,
	focused: !1
}, Nf = {
	disabled: !1,
	...Mf
}, Pf = { valid(e) {
	return e === null ? null : e ? { [Af.valid]: "" } : { [Af.invalid]: "" };
} };
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js
q();
var Ff = /* @__PURE__ */ F({
	invalid: void 0,
	name: void 0,
	validityData: {
		state: jf,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: gs,
	disabled: void 0,
	touched: Mf.touched,
	setTouched: gs,
	dirty: Mf.dirty,
	setDirty: gs,
	filled: Mf.filled,
	setFilled: gs,
	focused: Mf.focused,
	setFocused: gs,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => !1,
	state: Nf,
	markedDirtyRef: { current: !1 },
	validation: {
		getValidationProps: (e = _s) => e,
		getInputValidationProps: (e = _s) => e,
		inputRef: { current: null },
		commit: async () => {}
	}
});
process.env.NODE_ENV !== "production" && (Ff.displayName = "FieldRootContext");
function If(e = !0) {
	let t = _e(Ff);
	if (t.setValidityData === gs && !e) throw Error(process.env.NODE_ENV === "production" ? Ro(28) : "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/field/useField.js
q();
function Lf(e) {
	let { enabled: t = !0, value: n, id: r, name: i, controlRef: a, commit: o } = e, { formRef: s } = kf(), { invalid: c, markedDirtyRef: l, validityData: u, setValidityData: d } = If(), f = Z(e.getValue);
	Q(() => {
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
	]), Q(() => {
		!t || !r || s.current.fields.set(r, {
			getValue: f,
			name: i,
			controlRef: a,
			validityData: Df(u, c),
			validate(e = !0) {
				let t = n;
				t === void 0 && (t = f()), l.current = !0, e ? Rt(() => o(t)) : o(t);
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
	]), Q(() => {
		let e = s.current.fields;
		return () => {
			r && e.delete(r);
		};
	}, [s, r]);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js
q();
var Rf = /* @__PURE__ */ F({
	controlId: void 0,
	registerControlId: gs,
	labelId: void 0,
	setLabelId: gs,
	messageIds: [],
	setMessageIds: gs,
	getDescriptionProps: (e) => e
});
process.env.NODE_ENV !== "production" && (Rf.displayName = "LabelableContext");
function zf() {
	return _e(Rf);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js
function Bf(e) {
	return e == null ? void 0 : `${e}-label`;
}
function Vf(e, t) {
	return e ?? t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/asc.js
function Hf(e, t) {
	return e - t;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/replaceArrayItemAtIndex.js
function Uf(e, t, n) {
	let r = e.slice();
	return r[t] = n, r.sort(Hf);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js
function Wf(e, t, n, r, i, a) {
	let o = e;
	return o = yf(o, n, r), i && (o = Uf(a, t, yf(o, a[t - 1] || -Infinity, a[t + 1] || Infinity))), o;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js
function Gf(e, t, n) {
	if (!Array.isArray(e)) return !0;
	let r = e.reduce((e, t, n, r) => (n === r.length - 1 || e.push(Math.abs(t - r[n + 1])), e), []);
	return Math.min(...r) >= t * n;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js
var Kf = {
	activeThumbIndex: () => null,
	max: () => null,
	min: () => null,
	minStepsBetweenValues: () => null,
	step: () => null,
	values: () => null,
	...Pf
};
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js
q();
var qf = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (qf.displayName = "SliderRootContext");
function Jf() {
	let e = _e(qf);
	if (e === void 0) throw Error(process.env.NODE_ENV === "production" ? Ro(62) : "Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>.");
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/root/SliderRoot.js
q();
function Yf(e) {
	return "key" in e ? rc : ec;
}
function Xf(e, t) {
	return typeof e == "number" && typeof t == "number" ? e === t : Array.isArray(e) && Array.isArray(t) ? bf(e, t) : !1;
}
var Zf = /* @__PURE__ */ Xe(function(e, t) {
	let { "aria-labelledby": n, className: r, defaultValue: i, disabled: a = !1, id: o, format: s, largeStep: c = 10, locale: l, render: u, max: d = 100, min: f = 0, minStepsBetweenValues: p = 0, name: m, onValueChange: h, onValueCommitted: g, orientation: _ = "horizontal", step: v = 1, thumbCollisionBehavior: y = "push", thumbAlignment: b = "center", value: x, ...S } = e, C = pc(o), w = Bf(C), T = Z(h), E = Z(g), { clearErrors: D } = kf(), { state: O, disabled: k, name: A, setTouched: j, setDirty: M, validityData: N, shouldValidateOnChange: P, validation: F } = If(), { labelId: ee } = zf(), [I, te] = V(), ne = n ?? Vf(ee, I), L = k || a, re = A ?? m, [R, ie] = vf({
		controlled: x,
		default: i ?? f,
		name: "Slider"
	}), ae = U(null), z = U(null), B = U([]), oe = U(null), se = U(null), ce = U(-1), le = U(null), ue = U(null), de = U("none"), fe = Nl(s), [pe, H] = V(-1), [me, he] = V(-1), [ge, _e] = V(!1), [ve, ye] = V(() => /* @__PURE__ */ new Map()), [be, xe] = V([void 0, void 0]), Se = Z((e) => {
		H(e), e !== -1 && he(e);
	});
	Lf({
		id: C,
		commit: F.commit,
		value: R,
		controlRef: z,
		name: re,
		getValue: () => R
	}), uf(R, () => {
		D(re), P() ? F.commit(R) : F.commit(R, !0);
		let e = N.initialValue, t;
		t = Array.isArray(R) && Array.isArray(e) ? !bf(R, e) : R !== e, M(t);
	});
	let Ce = Z((e) => {
		e && (z.current = e);
	}), we = Array.isArray(R), Te = W(() => we ? R.slice().sort(Hf) : [yf(R, f, d)], [
		d,
		f,
		we,
		R
	]), Ee = Z((e, t) => {
		if (Number.isNaN(e) || Xf(e, R)) return;
		let n = t ?? oc("none", void 0, void 0, { activeThumbIndex: -1 });
		de.current = n.reason;
		let r = n.event, i = new (r.constructor ?? Event)(r.type, r);
		Object.defineProperty(i, "target", {
			writable: !0,
			value: {
				value: e,
				name: re
			}
		}), n.event = i, ue.current = e, T(e, n), !n.isCanceled && ie(e);
	}), De = Z((e, t, n) => {
		let r = Wf(e, t, f, d, we, Te);
		if (Gf(r, v, p)) {
			let e = Yf(n);
			Ee(r, oc(e, n.nativeEvent, void 0, { activeThumbIndex: t })), j(!0), E(ue.current ?? r, sc(e, n.nativeEvent));
		}
	});
	process.env.NODE_ENV !== "production" && f >= d && es("Slider `max` must be greater than `min`."), Q(() => {
		let e = Nc(Tl(ae.current));
		L && e && ae.current?.contains(e) && e.blur();
	}, [L]), L && pe !== -1 && Se(-1);
	let G = W(() => ({
		...O,
		activeThumbIndex: pe,
		disabled: L,
		dragging: ge,
		orientation: _,
		max: d,
		min: f,
		minStepsBetweenValues: p,
		step: v,
		values: Te
	}), [
		O,
		pe,
		L,
		ge,
		d,
		f,
		p,
		_,
		v,
		Te
	]), Oe = W(() => ({
		active: pe,
		controlRef: z,
		disabled: L,
		dragging: ge,
		validation: F,
		formatOptionsRef: fe,
		handleInputChange: De,
		indicatorPosition: be,
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
		registerFieldControlRef: Ce,
		renderBeforeHydration: b === "edge",
		setActive: Se,
		setDragging: _e,
		setIndicatorPosition: xe,
		setLabelId: te,
		setValue: Ee,
		state: G,
		step: v,
		thumbCollisionBehavior: y,
		thumbMap: ve,
		thumbRefs: B,
		values: Te
	}), [
		pe,
		z,
		ne,
		w,
		L,
		ge,
		F,
		fe,
		De,
		be,
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
		Ce,
		Se,
		_e,
		xe,
		te,
		Ee,
		G,
		v,
		y,
		b,
		ve,
		B,
		Te
	]), ke = ys("div", e, {
		state: G,
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
		stateAttributesMapping: Kf
	});
	return /* @__PURE__ */ Ht(qf.Provider, {
		value: Oe,
		children: /* @__PURE__ */ Ht(Cf, {
			elementsRef: B,
			onMapChange: ye,
			children: ke
		})
	});
});
process.env.NODE_ENV !== "production" && (Zf.displayName = "SliderRoot");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/formatNumber.js
var Qf = /* @__PURE__ */ new Map();
function $f(e, t) {
	let n = JSON.stringify({
		locale: e,
		options: t
	}), r = Qf.get(n);
	if (r) return r;
	let i = new Intl.NumberFormat(e, t);
	return Qf.set(n, i), i;
}
function ep(e, t, n) {
	return e == null ? "" : $f(t, n).format(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js
q();
var tp = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (tp.displayName = "DirectionContext");
function np() {
	return _e(tp)?.direction ?? "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js
function rp(e) {
	let t = e.getBoundingClientRect();
	return {
		x: (t.left + t.right) / 2,
		y: (t.top + t.bottom) / 2
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js
function ip(e) {
	if (Math.abs(e) < 1) {
		let t = e.toExponential().split("e-"), n = t[0].split(".")[1];
		return (n ? n.length : 0) + parseInt(t[1], 10);
	}
	let t = e.toString().split(".")[1];
	return t ? t.length : 0;
}
function ap(e, t, n) {
	let r = Math.round((e - n) / t) * t + n;
	return Number(r.toFixed(ip(t)));
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/getPushedThumbValues.js
function op({ values: e, index: t, nextValue: n, min: r, max: i, step: a, minStepsBetweenValues: o, initialValues: s }) {
	if (e.length === 0) return [];
	let c = e.slice(), l = a * o, u = c.length - 1, d = s ?? e;
	c[t] = yf(n, r + t * l, i - (u - t) * l);
	for (let e = t + 1; e <= u; e += 1) {
		let t = c[e - 1] + l, n = i - (u - e) * l, r = d[e] ?? c[e], a = Math.max(c[e], t);
		r < a && (a = Math.max(r, t)), c[e] = yf(a, t, n);
	}
	for (let e = t - 1; e >= 0; --e) {
		let t = c[e + 1] - l, n = r + e * l, i = d[e] ?? c[e], a = Math.min(c[e], t);
		i > a && (a = Math.min(i, t)), c[e] = yf(a, n, t);
	}
	for (let e = 0; e <= u; e += 1) c[e] = Number(c[e].toFixed(12));
	return c;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/utils/resolveThumbCollision.js
function sp({ behavior: e, values: t, currentValues: n, initialValues: r, pressedIndex: i, nextValue: a, min: o, max: s, step: c, minStepsBetweenValues: l }) {
	let u = n ?? t, d = r ?? t;
	if (!(u.length > 1)) return {
		value: a,
		thumbIndex: 0,
		didSwap: !1
	};
	let f = c * l;
	switch (e) {
		case "swap": {
			let e = u[i], t = 1e-7, n = u.slice(), r = n[i - 1], p = n[i + 1], m = yf(a, r == null ? o : r + f, p == null ? s : p - f), h = Number(m.toFixed(12));
			n[i] = h;
			let g = a > e, _ = a < e, v = g && p != null && a >= p - t, y = _ && r != null && a <= r + t;
			if (!v && !y) return {
				value: n,
				thumbIndex: i,
				didSwap: !1
			};
			let b = v ? i + 1 : i - 1, x = n.map((e, t) => t === i ? h : d[t] ?? u[t]), S = a;
			S = v ? Math.max(a, n[b]) : Math.min(a, n[b]);
			let C = op({
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
				let i = yf(h, n, r);
				C[w] = Number(i.toFixed(12));
			}
			return {
				value: C,
				thumbIndex: b,
				didSwap: !0
			};
		}
		case "push": return {
			value: op({
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
			let e = u.slice(), t = e[i - 1], n = e[i + 1], r = yf(a, t == null ? o : t + f, n == null ? s : n - f);
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
q();
var cp = 2;
function lp(e, t) {
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
function up(e, t) {
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
var dp = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, ...i } = e, { disabled: a, dragging: o, inset: s, lastChangedValueRef: c, lastChangeReasonRef: l, max: u, min: d, minStepsBetweenValues: f, onValueCommitted: p, orientation: m, pressedInputRef: h, pressedThumbCenterOffsetRef: g, pressedThumbIndexRef: _, pressedValuesRef: v, registerFieldControlRef: y, renderBeforeHydration: b, setActive: x, setDragging: S, setValue: C, state: w, step: T, thumbCollisionBehavior: E, thumbRefs: D, values: O } = Jf(), k = np(), A = O.length > 1, j = m === "vertical", M = U(null), N = U(null), P = Z((e) => {
		e && N.current == null && (N.current ??= getComputedStyle(e));
	}), F = U(null), ee = U(0), I = U(0), te = Nl(O), ne = Z((e) => {
		_.current !== e && (_.current = e);
		let t = D.current[e];
		if (!t) {
			g.current = null, h.current = null;
			return;
		}
		h.current = t.querySelector("input[type=\"range\"]");
	}), L = Z((e) => {
		let t = M.current;
		if (!t) return null;
		let { width: n, height: r, bottom: i, left: a, right: o } = t.getBoundingClientRect(), s = lp(N.current, j), c = I.current, l = (j ? r : n) - s.start - s.end - c * 2, p = g.current ?? 0, m = e.x - p, h = e.y - p, y = yf(((j ? i - h - s.end : (k === "rtl" ? o - m : m - a) - s.start) - c) / l, 0, 1), b = (u - d) * y + d;
		if (b = ap(b, T, d), b = yf(b, d, u), !A) return {
			value: b,
			thumbIndex: 0,
			didSwap: !1
		};
		let x = _.current;
		if (x < 0) return null;
		let S = sp({
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
	}), re = Z((e) => {
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
				if (va(a)) {
					let o = rp(a), s = Math.abs(e[t] - o[t]);
					(r === void 0 || s <= r) && (n = i, r = s);
				}
			}
		}
		if (n > -1 && n !== t && ne(n), s) {
			let e = D.current[n];
			va(e) && (I.current = e.getBoundingClientRect()[j ? "height" : "width"] / 2);
		}
	}), R = Z((e) => {
		D.current?.[e]?.querySelector("input[type=\"range\"]")?.focus({ preventScroll: !0 });
	}), ie = Z((e) => {
		let t = up(e, F);
		if (t == null) return;
		if (ee.current += 1, e.type === "pointermove" && e.buttons === 0) {
			ae(e);
			return;
		}
		let n = L(t);
		n != null && Gf(n.value, T, f) && (!o && ee.current > cp && S(!0), C(n.value, oc(ic, e, void 0, { activeThumbIndex: n.thumbIndex })), te.current = Array.isArray(n.value) ? n.value : [n.value], n.didSwap && R(n.thumbIndex));
	});
	function ae(e) {
		x(-1), S(!1), h.current = null, g.current = null;
		let t = up(e, F), n = t == null ? null : L(t);
		if (n != null) {
			let t = l.current;
			p(c.current ?? n.value, sc(t, e));
		}
		"pointerType" in e && M.current?.hasPointerCapture(e.pointerId) && M.current?.releasePointerCapture(e.pointerId), _.current = -1, F.current = null, v.current = null, B();
	}
	let z = Z((e) => {
		if (a) return;
		let t = e.changedTouches[0];
		t != null && (F.current = t.identifier);
		let n = up(e, F);
		if (n != null) {
			re(n);
			let t = L(n);
			if (t == null) return;
			R(t.thumbIndex), C(t.value, oc($s, e, void 0, { activeThumbIndex: t.thumbIndex })), te.current = Array.isArray(t.value) ? t.value : [t.value], t.didSwap && R(t.thumbIndex);
		}
		ee.current = 0;
		let r = Tl(M.current);
		r.addEventListener("touchmove", ie, { passive: !0 }), r.addEventListener("touchend", ae, { passive: !0 });
	}), B = Z(() => {
		let e = Tl(M.current);
		e.removeEventListener("pointermove", ie), e.removeEventListener("pointerup", ae), e.removeEventListener("touchmove", ie), e.removeEventListener("touchend", ae), v.current = null;
	}), oe = zl();
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
	}, [a, B]), ys("div", e, {
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
				if (!t || a || e.defaultPrevented || !va(e.target) || e.button !== 0) return;
				let n = up(e, F);
				if (n != null) {
					re(n);
					let r = L(n);
					if (r == null) return;
					Pc(D.current[r.thumbIndex], Nc(Tl(t))) ? e.preventDefault() : oe.request(() => {
						R(r.thumbIndex);
					}), S(!0), g.current ?? (C(r.value, oc($s, e.nativeEvent, void 0, { activeThumbIndex: r.thumbIndex })), te.current = Array.isArray(r.value) ? r.value : [r.value], r.didSwap && R(r.thumbIndex));
				}
				e.nativeEvent.pointerId && t.setPointerCapture(e.nativeEvent.pointerId), ee.current = 0;
				let r = Tl(M.current);
				r.addEventListener("pointermove", ie, { passive: !0 }), r.addEventListener("pointerup", ae, { once: !0 });
			},
			tabIndex: -1
		}, i],
		stateAttributesMapping: Kf
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/track/SliderTrack.js
process.env.NODE_ENV !== "production" && (dp.displayName = "SliderControl"), q();
var fp = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, ...i } = e, { state: a } = Jf();
	return ys("div", e, {
		state: a,
		ref: t,
		props: [{ style: { position: "relative" } }, i],
		stateAttributesMapping: Kf
	});
});
process.env.NODE_ENV !== "production" && (fp.displayName = "SliderTrack");
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/valueToPercent.js
function pp(e, t, n) {
	return (e - t) * 100 / (n - t);
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js
q();
var mp = /* @__PURE__ */ function(e) {
	return e[e.None = 0] = "None", e[e.GuessFromOrder = 1] = "GuessFromOrder", e;
}({});
function hp(e = {}) {
	let { label: t, metadata: n, textRef: r, indexGuessBehavior: i, index: a } = e, { register: o, unregister: s, subscribeMapChange: c, elementsRef: l, labelsRef: u, nextIndexRef: d } = Sf(), f = U(-1), [p, m] = V(a ?? (i === mp.GuessFromOrder ? () => {
		if (f.current === -1) {
			let e = d.current;
			d.current += 1, f.current = e;
		}
		return f.current;
	} : -1)), h = U(null), g = ge((e) => {
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
	return Q(() => {
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
	]), Q(() => {
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
q();
var gp = /* @__PURE__ */ F(void 0);
process.env.NODE_ENV !== "production" && (gp.displayName = "CSPContext");
var _p = { disableStyleElements: !1 };
function vp() {
	return _e(gp) ?? _p;
}
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js
q();
function yp(e = {}) {
	let { id: t, implicit: n = !1, controlRef: r } = e, { controlId: i, registerControlId: a } = zf(), o = pc(t), s = n ? i : void 0, c = Ho(() => Symbol("labelable-control")), l = U(!1), u = U(t != null), d = Z(() => {
		!l.current || a === gs || (l.current = !1, a(c.current, void 0));
	});
	return Q(() => {
		if (a === gs) return;
		let e;
		if (n) {
			let n = r?.current;
			e = va(n) && n.closest("label") != null ? t ?? null : s ?? o;
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
var bp = /* @__PURE__ */ function(e) {
	return e.index = "data-index", e.dragging = "data-dragging", e.orientation = "data-orientation", e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.focused = "data-focused", e;
}({});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js
q();
var xp = "PageUp", Sp = "PageDown", Cp = new Set([
	Rd,
	zd,
	Bd,
	Vd,
	Hd,
	"End",
	xp,
	Sp
]);
function wp(e, t, n, r) {
	if (!(t < 0)) return e.length === 2 ? t === 0 ? `${ep(e[t], r, n)} start range` : `${ep(e[t], r, n)} end range` : n ? ep(e[t], r, n) : void 0;
}
function Tp(e, t, n, r, i) {
	return n === 1 ? Math.min(e + t, i) : Math.max(e - t, r);
}
var Ep = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, children: r, className: i, "aria-describedby": a, "aria-label": o, "aria-labelledby": s, disabled: c = !1, getAriaLabel: u, getAriaValueText: d, id: f, index: p, inputRef: m, onBlur: h, onFocus: g, onKeyDown: _, tabIndex: v, ...y } = e, { nonce: b } = vp(), x = pc(f), { active: S, lastUsedThumbIndex: C, controlRef: w, disabled: T, validation: E, formatOptionsRef: D, handleInputChange: O, inset: k, labelId: A, largeStep: j, locale: M, max: N, min: P, minStepsBetweenValues: F, name: ee, orientation: I, pressedInputRef: te, pressedThumbCenterOffsetRef: ne, pressedThumbIndexRef: L, renderBeforeHydration: re, setActive: R, setIndicatorPosition: ie, state: ae, step: z, values: B } = Jf(), oe = np(), se = c || T, ce = B.length > 1, le = I === "vertical", ue = oe === "rtl", { setTouched: de, setFocused: fe, validationMode: pe } = If(), H = U(null), me = U(null), he = pc(), _e = yp(), ve = ce ? he : _e, { ref: ye, index: be } = hp({ metadata: W(() => ({ inputId: ve }), [ve]) }), xe = ce ? p ?? be : 0, Se = xe === B.length - 1, Ce = B[xe], we = pp(Ce, P, N), [Te, Ee] = V(!1), [De, G] = V();
	gc(() => Ee(!0));
	let Oe = C >= 0 && C < B.length ? C : -1, ke = Z(() => {
		let e = w.current, t = H.current;
		if (!e || !t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = le ? "height" : "width", a = r[i] - n[i], o = (n[i] / 2 + a * we / 100) / r[i] * 100;
		G(o), xe === 0 ? ie((e) => [o, e[1]]) : Se && ie((e) => [e[0], o]);
	});
	Q(() => {
		k && queueMicrotask(ke);
	}, [ke, k]), Q(() => {
		k && ke();
	}, [
		ke,
		k,
		we
	]);
	let Ae = ge(() => {
		let e = le ? "bottom" : "insetInlineStart", t = le ? "left" : "top", n;
		return ce ? S === xe ? n = 2 : Oe === xe && (n = 1) : S === xe && (n = 1), k ? {
			"--position": `${De}%`,
			visibility: re && !Te || De === void 0 ? "hidden" : void 0,
			position: "absolute",
			[e]: "var(--position)",
			[t]: "50%",
			translate: `${(le || !ue ? -1 : 1) * 50}% ${(le ? 1 : -1) * 50}%`,
			zIndex: n
		} : Number.isFinite(we) ? {
			position: "absolute",
			[e]: `${we}%`,
			[t]: "50%",
			translate: `${(le || !ue ? -1 : 1) * 50}% ${(le ? 1 : -1) * 50}%`,
			zIndex: n
		} : Vl;
	}, [
		S,
		xe,
		k,
		Te,
		De,
		ce,
		re,
		ue,
		Oe,
		we,
		le
	]), je;
	I === "vertical" && (je = ue ? "vertical-rl" : "vertical-lr");
	let K = typeof u == "function" ? u(xe) : o, Me = as({
		"aria-label": K,
		"aria-labelledby": s ?? (K == null ? A : void 0),
		"aria-describedby": a,
		"aria-orientation": I,
		"aria-valuenow": Ce,
		"aria-valuetext": typeof d == "function" ? d(ep(Ce, M, D.current ?? void 0), Ce, xe) : wp(B, xe, D.current ?? void 0, M),
		disabled: se,
		id: ve,
		max: N,
		min: P,
		name: ee,
		onChange(e) {
			O(e.target.valueAsNumber, xe, e);
		},
		onFocus() {
			R(xe), fe(!0);
		},
		onBlur() {
			H.current && (R(-1), de(!0), fe(!1), pe === "onBlur" && E.commit(Wf(Ce, xe, P, N, ce, B)));
		},
		onKeyDown(e) {
			if (!Cp.has(e.key)) return;
			Kd.has(e.key) && e.stopPropagation();
			let t = null, n = ap(Ce, z, P);
			switch (e.key) {
				case Rd:
					t = Tp(n, e.shiftKey ? j : z, 1, P, N);
					break;
				case Vd:
					t = Tp(n, e.shiftKey ? j : z, ue ? -1 : 1, P, N);
					break;
				case zd:
					t = Tp(n, e.shiftKey ? j : z, -1, P, N);
					break;
				case Bd:
					t = Tp(n, e.shiftKey ? j : z, ue ? 1 : -1, P, N);
					break;
				case xp:
					t = Tp(n, j, 1, P, N);
					break;
				case Sp:
					t = Tp(n, j, -1, P, N);
					break;
				case "End":
					t = N, ce && (t = Number.isFinite(B[xe + 1]) ? B[xe + 1] - z * F : N);
					break;
				case Hd:
					t = P, ce && (t = Number.isFinite(B[xe - 1]) ? B[xe - 1] + z * F : P);
					break;
				default: break;
			}
			t !== null && (O(t, xe, e), e.preventDefault());
		},
		step: z,
		style: {
			...Vl,
			width: "100%",
			height: "100%",
			writingMode: je
		},
		tabIndex: v ?? void 0,
		type: "range",
		value: Ce ?? ""
	}, E.getInputValidationProps), Ne = Uo(me, E.inputRef, m);
	return ys("div", e, {
		state: ae,
		ref: [
			t,
			ye,
			H
		],
		props: [{
			[bp.index]: xe,
			children: /* @__PURE__ */ Ht(l, { children: [
				r,
				/* @__PURE__ */ Ht("input", {
					ref: Ne,
					...Me
				}),
				k && !Te && re && Se && /* @__PURE__ */ Ht("script", {
					nonce: b,
					dangerouslySetInnerHTML: { __html: "!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest(\"[data-base-ui-slider-control]\");if(!e)return;const r=e.querySelector(\"[data-base-ui-slider-indicator]\"),i=e.getBoundingClientRect(),n=\"vertical\"===e.getAttribute(\"data-orientation\")?\"height\":\"width\",o=e.querySelectorAll('input[type=\"range\"]'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute(\"value\")??\"\");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute(\"max\")??\"100\"),g=parseFloat(e.getAttribute(\"min\")??\"0\"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty(\"--position\",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty(\"visibility\"),r&&(0===t?(a=v,r.style.setProperty(\"--start-position\",`${v}%`),l||r.style.removeProperty(\"visibility\")):t===s&&(u=v-(a??0),r.style.setProperty(\"--end-position\",`${v}%`),r.style.setProperty(\"--relative-size\",`${u}%`),r.style.removeProperty(\"visibility\"))))}}();" },
					suppressHydrationWarning: !0
				})
			] }),
			id: x,
			onBlur: h,
			onFocus: g,
			onPointerDown(e) {
				if (L.current = xe, H.current != null) {
					let t = I === "horizontal" ? "x" : "y", n = rp(H.current);
					ne.current = (I === "horizontal" ? e.clientX : e.clientY) - n[t];
				}
				me.current != null && te.current !== me.current && (te.current = me.current);
			},
			style: Ae(),
			suppressHydrationWarning: re || void 0,
			tabIndex: -1
		}, y],
		stateAttributesMapping: Kf
	});
});
//#endregion
//#region ../../node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/slider/indicator/SliderIndicator.js
process.env.NODE_ENV !== "production" && (Ep.displayName = "SliderThumb"), q();
function Dp(e, t, n, r, i, a) {
	let o = n === void 0 || t && r === void 0 ? "hidden" : void 0, s = e ? "bottom" : "insetInlineStart", c = e ? "height" : "width", l = {
		visibility: i && !a ? "hidden" : o,
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	return l["--start-position"] = `${n ?? 0}%`, t ? (l["--relative-size"] = `${(r ?? 0) - (n ?? 0)}%`, l[s] = "var(--start-position)", l[c] = "var(--relative-size)", l) : (l[s] = 0, l[c] = "var(--start-position)", l);
}
function Op(e, t, n, r) {
	let i = e ? "bottom" : "insetInlineStart", a = e ? "height" : "width", o = {
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	if (!t) return o[i] = 0, o[a] = `${n}%`, o;
	let s = r - n;
	return o[i] = `${n}%`, o[a] = `${s}%`, o;
}
var kp = /* @__PURE__ */ Xe(function(e, t) {
	let { render: n, className: r, ...i } = e, { indicatorPosition: a, inset: o, max: s, min: c, orientation: l, renderBeforeHydration: u, state: d, values: f } = Jf(), [p, m] = V(!1);
	gc(() => m(!0));
	let h = l === "vertical", g = f.length > 1, _ = o ? Dp(h, g, a[0], a[1], u, p) : Op(h, g, pp(f[0], c, s), pp(f[f.length - 1], c, s));
	return ys("div", e, {
		state: d,
		ref: t,
		props: [{
			"data-base-ui-slider-indicator": u ? "" : void 0,
			style: _,
			suppressHydrationWarning: u || void 0
		}, i],
		stateAttributesMapping: Kf
	});
});
process.env.NODE_ENV !== "production" && (kp.displayName = "SliderIndicator");
//#endregion
export { Qt as $, Sn as A, fn as B, yi as C, ge as Ct, Tn as D, o as Dt, En as E, F as Et, _n as F, sn as G, un as H, gn as I, rn as J, on as K, hn as L, bn as M, yn as N, wn as O, l as Ot, vn as P, $t as Q, mn as R, Ci as S, pe as St, bi as T, H as Tt, ln as U, dn as V, cn as W, tn as X, nn as Y, en as Z, Ao as _, ve as _t, Zf as a, Xe as at, Oo as b, V as bt, Zd as c, Rt as ct, cc as d, lt as dt, Zt as et, Is as f, q as ft, Mo as g, he as gt, Fo as h, U as ht, dp as i, Ue as it, xn as j, Cn as k, u as kt, Jd as l, Be as lt, No as m, tt as mt, Ep as n, Ht as nt, _f as o, yt as ot, Io as p, ft as pt, an as q, fp as r, at as rt, gf as s, $e as st, kp as t, Xt as tt, mc as u, Bt as ut, jo as v, W as vt, vi as w, _e as wt, mo as x, be as xt, Po as y, me as yt, pn as z };

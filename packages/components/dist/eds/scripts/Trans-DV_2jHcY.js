import { o as e, t } from "./rolldown-runtime-Ctdjzu3q.js";
import { Ot as n, Tt as r, ft as i, kt as a, mt as o, pt as s, st as c } from "./react-DLNUXPF9.js";
import { n as l } from "./i18next-BMrk8wO1.js";
import { a as u, c as d, i as f, l as p, n as m, o as h, s as g, u as _ } from "./useTranslation-Cl_kknJx.js";
//#endregion
//#region ../../node_modules/.pnpm/html-parse-stringify@3.0.1/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var v = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
})))()), y = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function b(e) {
	var t = {
		type: "tag",
		name: "",
		voidElement: !1,
		attrs: {},
		children: []
	}, n = e.match(/<\/?([^\s]+?)[/\s>]/);
	if (n && (t.name = n[1], (v.default[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
		var r = e.indexOf("-->");
		return {
			type: "comment",
			comment: r === -1 ? "" : e.slice(4, r)
		};
	}
	for (var i = new RegExp(y), a = null; (a = i.exec(e)) !== null;) if (a[0].trim()) if (a[1]) {
		var o = a[1].trim(), s = [o, ""];
		o.indexOf("=") > -1 && (s = o.split("=")), t.attrs[s[0]] = s[1], i.lastIndex--;
	} else a[2] && (t.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));
	return t;
}
var x = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, S = /^\s*$/, C = Object.create(null);
function w(e, t) {
	switch (t.type) {
		case "text": return e + t.content;
		case "tag": return e += "<" + t.name + (t.attrs ? function(e) {
			var t = [];
			for (var n in e) t.push(n + "=\"" + e[n] + "\"");
			return t.length ? " " + t.join(" ") : "";
		}(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(w, "") + "</" + t.name + ">";
		case "comment": return e + "<!--" + t.comment + "-->";
	}
}
var T = {
	parse: function(e, t) {
		t ||= {}, t.components ||= C;
		var n, r = [], i = [], a = -1, o = !1;
		if (e.indexOf("<") !== 0) {
			var s = e.indexOf("<");
			r.push({
				type: "text",
				content: s === -1 ? e : e.substring(0, s)
			});
		}
		return e.replace(x, function(s, c) {
			if (o) {
				if (s !== "</" + n.name + ">") return;
				o = !1;
			}
			var l, u = s.charAt(1) !== "/", d = s.startsWith("<!--"), f = c + s.length, p = e.charAt(f);
			if (d) {
				var m = b(s);
				return a < 0 ? (r.push(m), r) : ((l = i[a]).children.push(m), r);
			}
			if (u && (a++, (n = b(s)).type === "tag" && t.components[n.name] && (n.type = "component", o = !0), n.voidElement || o || !p || p === "<" || n.children.push({
				type: "text",
				content: e.slice(f, e.indexOf("<", f))
			}), a === 0 && r.push(n), (l = i[a - 1]) && l.children.push(n), i[a] = n), (!u || n.voidElement) && (a > -1 && (n.voidElement || n.name === s.slice(2, -1)) && (a--, n = a === -1 ? r : i[a]), !o && p !== "<" && p)) {
				l = a === -1 ? r : i[a].children;
				var h = e.indexOf("<", f), g = e.slice(f, h === -1 ? void 0 : h);
				S.test(g) && (g = " "), (h > -1 && a + l.length >= 0 || g !== " ") && l.push({
					type: "text",
					content: g
				});
			}
		}), r;
	},
	stringify: function(e) {
		return e.reduce(function(e, t) {
			return e + w("", t);
		}, "");
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-i18next@16.5.8_i18next@25.8.18_typescript@5.8.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.8.3/node_modules/react-i18next/dist/es/TransWithoutContext.js
s();
var E = (e, t) => {
	if (!e) return !1;
	let n = e.props?.children ?? e.children;
	return t ? n.length > 0 : !!n;
}, D = (e) => {
	if (!e) return [];
	let t = e.props?.children ?? e.children;
	return e.props?.i18nIsDynamicList ? k(t) : t;
}, O = (e) => Array.isArray(e) && e.every(i), k = (e) => Array.isArray(e) ? e : [e], A = (e, t) => {
	let n = { ...t };
	return n.props = {
		...t.props,
		...e.props
	}, n;
}, j = (e) => {
	let t = {};
	if (!e) return t;
	let n = (e) => {
		k(e).forEach((e) => {
			d(e) || (E(e) ? n(D(e)) : g(e) && !i(e) && Object.assign(t, e));
		});
	};
	return n(e), t;
}, M = (e, t, n, r) => {
	if (!e) return "";
	let a = "", o = k(e), s = t?.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
	return o.forEach((e, o) => {
		if (d(e)) {
			a += `${e}`;
			return;
		}
		if (i(e)) {
			let { props: i, type: c } = e, l = Object.keys(i).length, u = s.indexOf(c) > -1, f = i.children;
			if (!f && u && !l) {
				a += `<${c}/>`;
				return;
			}
			if (!f && (!u || l) || i.i18nIsDynamicList) {
				a += `<${o}></${o}>`;
				return;
			}
			if (u && l === 1 && d(f)) {
				a += `<${c}>${f}</${c}>`;
				return;
			}
			let p = M(f, t, n, r);
			a += `<${o}>${p}</${o}>`;
			return;
		}
		if (e === null) {
			p(n, "TRANS_NULL_VALUE", "Passed in a null value as child", { i18nKey: r });
			return;
		}
		if (g(e)) {
			let { format: t, ...i } = e, o = Object.keys(i);
			if (o.length === 1) {
				let e = t ? `${o[0]}, ${t}` : o[0];
				a += `{{${e}}}`;
				return;
			}
			p(n, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
				i18nKey: r,
				child: e
			});
			return;
		}
		p(n, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
			i18nKey: r,
			child: e
		});
	}), a;
}, N = (e, t = [], n = {}) => {
	if (!e) return e;
	let r = Object.keys(n), i = [...t, ...r], a = "", o = 0;
	for (; o < e.length;) if (e[o] === "<") {
		let t = !1, n = e.slice(o).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
		if (n) {
			let e = n[1];
			(/^\d+$/.test(e) || i.includes(e)) && (t = !0, a += n[0], o += n[0].length);
		}
		if (!t) {
			let n = e.slice(o).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
			if (n) {
				let e = n[1];
				(/^\d+$/.test(e) || i.includes(e)) && (t = !0, a += n[0], o += n[0].length);
			}
		}
		t || (a += "&lt;", o += 1);
	} else a += e[o], o += 1;
	return a;
}, P = (e, t, r, a, s, l, f) => {
	if (r === "") return [];
	let p = s.transKeepBasicHtmlNodesFor || [], m = r && new RegExp(p.map((e) => `<${e}`).join("|")).test(r);
	if (!e && !t && !m && !f) return [r];
	let _ = t ?? {}, v = (e) => {
		k(e).forEach((e) => {
			d(e) || (E(e) ? v(D(e)) : g(e) && !i(e) && Object.assign(_, e));
		});
	};
	v(e);
	let y = N(r, p, _), b = T.parse(`<0>${y}</0>`), x = {
		..._,
		...l
	}, S = (e, t, n) => {
		let r = D(e), i = w(r, t.children, n);
		return O(r) && i.length === 0 || e.props?.i18nIsDynamicList ? r : i;
	}, C = (e, t, n, r, i) => {
		e.dummy ? (e.children = t, n.push(o(e, { key: r }, i ? void 0 : t))) : n.push(...c.map([e], (e) => {
			let n = "data-i18n-is-dynamic-list", a = {
				key: r,
				[n]: void 0
			};
			return e && e.props && Object.keys(e.props).forEach((t) => {
				t === "ref" || t === "children" || t === "i18nIsDynamicList" || t === n || (a[t] = e.props[t]);
			}), o(e, a, i ? null : t);
		}));
	}, w = (e, r, o) => {
		let c = k(e);
		return k(r).reduce((e, r, l) => {
			let _ = r.children?.[0]?.content && a.services.interpolator.interpolate(r.children[0].content, x, a.language);
			if (r.type === "tag") {
				let u = c[parseInt(r.name, 10)];
				!u && t && (u = t[r.name]), o.length === 1 && !u && (u = o[0][r.name]), u ||= {};
				let v = { ...r.attrs };
				f && Object.keys(v).forEach((e) => {
					let t = v[e];
					d(t) && (v[e] = h(t));
				});
				let y = Object.keys(v).length === 0 ? u : A({ props: v }, u), b = i(y), T = b && E(r, !0) && !r.voidElement, D = m && g(y) && y.dummy && !b, O = g(t) && Object.hasOwnProperty.call(t, r.name);
				if (d(y)) {
					let t = a.services.interpolator.interpolate(y, x, a.language);
					e.push(t);
				} else if (E(y) || T) C(y, S(y, r, o), e, l);
				else if (D) C(y, w(c, r.children, o), e, l);
				else if (Number.isNaN(parseFloat(r.name))) if (O) C(y, S(y, r, o), e, l, r.voidElement);
				else if (s.transSupportBasicHtmlNodes && p.indexOf(r.name) > -1) if (r.voidElement) e.push(n(r.name, { key: `${r.name}-${l}` }));
				else {
					let t = w(c, r.children, o);
					e.push(n(r.name, { key: `${r.name}-${l}` }, t));
				}
				else if (r.voidElement) e.push(`<${r.name} />`);
				else {
					let t = w(c, r.children, o);
					e.push(`<${r.name}>${t}</${r.name}>`);
				}
				else if (g(y) && !b) {
					let t = r.children[0] ? _ : null;
					t && e.push(t);
				} else C(y, _, e, l, r.children.length !== 1 || !_);
			} else if (r.type === "text") {
				let t = s.transWrapTextNodes, i = typeof s.unescape == "function" ? s.unescape : u().unescape, o = f ? i(a.services.interpolator.interpolate(r.content, x, a.language)) : a.services.interpolator.interpolate(r.content, x, a.language);
				t ? e.push(n(t, { key: `${r.name}-${l}` }, o)) : e.push(o);
			}
			return e;
		}, []);
	};
	return D(w([{
		dummy: !0,
		children: e || []
	}], b, k(e || []))[0]);
}, F = (e, t, r) => {
	let i = e.key || t, s = o(e, { key: i });
	if (!s.props || !s.props.children || r.indexOf(`${t}/>`) < 0 && r.indexOf(`${t} />`) < 0) return s;
	function c() {
		return n(a, null, s);
	}
	return n(c, { key: i });
}, I = (e, t) => e.map((e, n) => F(e, n, t)), L = (e, t) => {
	let n = {};
	return Object.keys(e).forEach((r) => {
		Object.assign(n, { [r]: F(e[r], r, t) });
	}), n;
}, R = (e, t, n, r) => e ? Array.isArray(e) ? I(e, t) : g(e) ? L(e, t) : (_(n, "TRANS_INVALID_COMPONENTS", "<Trans /> \"components\" prop expects an object or array", { i18nKey: r }), null) : null, z = (e) => !g(e) || Array.isArray(e) ? !1 : Object.keys(e).reduce((e, t) => e && Number.isNaN(Number.parseFloat(t)), !0);
function B({ children: e, count: t, parent: r, i18nKey: i, context: a, tOptions: o = {}, values: s, defaults: c, components: p, ns: m, i18n: h, t: g, shouldUnescape: v, ...y }) {
	let b = h || f();
	if (!b) return _(b, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", { i18nKey: i }), e;
	let x = g || b.t.bind(b) || ((e) => e), S = {
		...u(),
		...b.options?.react
	}, C = m || x.ns || b.options?.defaultNS;
	C = d(C) ? [C] : C || ["translation"];
	let { transDefaultProps: w } = S, T = w?.tOptions ? {
		...w.tOptions,
		...o
	} : o, E = v ?? w?.shouldUnescape, D = w?.values ? {
		...w.values,
		...s
	} : s, O = w?.components ? {
		...w.components,
		...p
	} : p, k = M(e, S, b, i), A = c || T?.defaultValue || k || S.transEmptyNodeValue || (typeof i == "function" ? l(i) : i), { hashTransKey: N } = S, F = i || (N ? N(k || A) : k || A);
	s = b.options?.interpolation?.defaultVariables ? D && Object.keys(D).length > 0 ? {
		...D,
		...b.options.interpolation.defaultVariables
	} : { ...b.options.interpolation.defaultVariables } : D;
	let I = j(e);
	I && typeof I.count == "number" && t === void 0 && (t = I.count);
	let L = s || t !== void 0 && !b.options?.interpolation?.alwaysFormat || !e ? T.interpolation : { interpolation: {
		...T.interpolation,
		prefix: "#$?",
		suffix: "?$#"
	} }, B = {
		...T,
		context: a || T.context,
		count: t,
		...s,
		...L,
		defaultValue: A,
		ns: C
	}, V = F ? x(F, B) : A;
	V === F && A && (V = A);
	let H = R(O, V, b, i), U = H || e, W = null;
	z(H) && (W = H, U = e);
	let G = P(U, W, V, b, S, B, E), K = r ?? S.defaultTransParent;
	return K ? n(K, y, G) : G;
}
//#endregion
//#region ../../node_modules/.pnpm/react-i18next@16.5.8_i18next@25.8.18_typescript@5.8.3__react-dom@19.2.4_react@19.2.4__react@19.2.4_typescript@5.8.3/node_modules/react-i18next/dist/es/Trans.js
s();
function V({ children: e, count: t, parent: n, i18nKey: i, context: a, tOptions: o = {}, values: s, defaults: c, components: l, ns: u, i18n: d, t: p, shouldUnescape: h, ...g }) {
	let { i18n: _, defaultNS: v } = r(m) || {}, y = d || _ || f(), b = p || y?.t.bind(y);
	return B({
		children: e,
		count: t,
		parent: n,
		i18nKey: i,
		context: a,
		tOptions: o,
		values: s,
		defaults: c,
		components: l,
		ns: u || b?.ns || v || y?.options?.defaultNS,
		i18n: y,
		t: p,
		shouldUnescape: h,
		...g
	});
}
//#endregion
export { V as t };

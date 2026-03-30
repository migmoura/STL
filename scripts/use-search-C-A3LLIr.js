import { i as e } from "./utils-kL9Kd3j1.js";
import { Et as t, pt as n, wt as r, xt as i, yt as a } from "./react-DLNUXPF9.js";
import { t as o } from "./index-DQhmSjJh.js";
import { C as s, D as c, E as l, S as u, T as d, _ as f, a as p, b as m, c as h, d as g, f as _, g as v, h as y, i as b, l as x, m as S, o as C, p as w, r as T, s as E, v as ee, w as te, x as ne, y as D } from "./constants-Cb0x61ES.js";
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/fromUnixTime.js
function O(e, t) {
	return b(e * 1e3, t?.in);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
function k(e, t) {
	return b(e, t?.in).getFullYear();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js
function A(e, t) {
	let n = () => p(t?.in, NaN), r = t?.additionalDigits ?? 2, i = oe(e), a;
	if (i.date) {
		let e = se(i.date, r);
		a = ce(e.restDateString, e.year);
	}
	if (!a || isNaN(+a)) return n();
	let o = +a, s = 0, c;
	if (i.time && (s = N(i.time), isNaN(s))) return n();
	if (i.timezone) {
		if (c = F(i.timezone), isNaN(c)) return n();
	} else {
		let e = new Date(o + s), n = b(0, t?.in);
		return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
	}
	return b(o + s + c, t?.in);
}
var j = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, re = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ie = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, ae = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function oe(e) {
	let t = {}, n = e.split(j.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], j.timeZoneDelimiter.test(t.date) && (t.date = e.split(j.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = j.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function se(e, t) {
	let n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
	if (!r) return {
		year: NaN,
		restDateString: ""
	};
	let i = r[1] ? parseInt(r[1]) : null, a = r[2] ? parseInt(r[2]) : null;
	return {
		year: a === null ? i : a * 100,
		restDateString: e.slice((r[1] || r[2]).length)
	};
}
function ce(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(re);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = M(n[1]), a = M(n[2]) - 1, o = M(n[3]), s = M(n[4]), c = M(n[5]) - 1;
	if (r) return V(t, s, c) ? I(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !z(t, a, o) || !B(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function M(e) {
	return e ? parseInt(e) : 1;
}
function N(e) {
	let t = e.match(ie);
	if (!t) return NaN;
	let n = P(t[1]), r = P(t[2]), i = P(t[3]);
	return H(n, r, i) ? n * C + r * E + i * 1e3 : NaN;
}
function P(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function F(e) {
	if (e === "Z") return 0;
	let t = e.match(ae);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return U(r, i) ? n * (r * C + i * E) : NaN;
}
function I(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var L = [
	31,
	null,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
function R(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function z(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (L[t] || (R(e) ? 29 : 28));
}
function B(e, t) {
	return t >= 1 && t <= (R(e) ? 366 : 365);
}
function V(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function H(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function U(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region src/features/search/utils/highlights.ts
var W = 2, G = 150, le = "<b class=\"text-black font-extrabold\">", ue = "</b>";
function de(e, t) {
	"positions" in e.data || Object.assign(e.data, { positions: {} }), K(e, e.documentsStore.get(e.data.docs, t), t);
}
var fe = /[\p{L}0-9_'-]+/gimu;
function K(e, t, n, r = "", i = e.schema) {
	e.data.positions[n] = Object.create(null);
	for (let a of Object.keys(t)) {
		let o = typeof t[a] == "object", s = typeof i[a] == "object", c = `${r}${String(a)}`;
		if (o && a in i && s && K(e, t[a], n, c + ".", i[a]), !(typeof t[a] == "string" && a in i && !s)) continue;
		e.data.positions[n][c] = Object.create(null);
		let l = t[a], u;
		for (; (u = fe.exec(l)) !== null;) {
			let t = u[0].toLowerCase(), r = `${e.tokenizer.language}:${t}`, i;
			e.tokenizer.normalizationCache.has(r) ? i = e.tokenizer.normalizationCache.get(r) : ([i] = e.tokenizer.tokenize(t), e.tokenizer.normalizationCache.set(r, i)), Array.isArray(e.data.positions[n][c][i]) || (e.data.positions[n][c][i] = []);
			let a = u.index, o = u[0].length;
			e.data.positions[n][c][i].push({
				start: a,
				length: o
			});
		}
	}
}
function pe(e) {
	return e && Array.isArray(e) ? e : [];
}
function me(e, t) {
	if (!t || t.length === 0) return e.length <= G ? e : e.slice(0, G) + "...";
	t = [...t].sort((e, t) => e.start - t.start);
	let n = [];
	for (let e of t) {
		let t = n[n.length - 1];
		if (!t) {
			n.push({ ...e });
			continue;
		}
		let r = t.start + t.length;
		e.start <= r + 30 ? t.length = Math.max(r, e.start + e.length) - t.start : n.push({ ...e });
	}
	return n.map(({ start: t, length: n }) => {
		let r = t + n, i = Math.max(0, t - 30), a = Math.min(e.length, r + 30), o = e.slice(i, t), s = e.slice(t, r), c = e.slice(r, a);
		return `${i > 0 ? "..." : ""}${o}${le}${s}${ue}${c}${a < e.length ? "..." : ""}`;
	}).join(" ");
}
function he(e, t) {
	let n = e[t[0]], r = typeof n == "string" ? n : n.highlight, i = 0;
	return t.forEach((t) => {
		let n = e[t];
		n && typeof n == "object" && Array.isArray(n.matches) && n.matches.length > i && (i = n.matches.length, r = n.highlight);
	}), r;
}
function ge(t, n, r) {
	let { hits: i } = t;
	if (!n) return i.map(({ document: e }) => ({
		...e,
		highlight: ""
	}));
	let a = i.reduce((t, { document: n, positions: i, id: a }) => {
		let o = t[a] || { ...n };
		return r?.forEach((t) => {
			let r = n[t], a = i[t], s = e(a).sort((e, t) => t[0].length - e[0].length).map(([e, t]) => t).flat().slice(0, W);
			o[t] = {
				value: r,
				matches: s,
				highlight: me(r, s)
			};
		}), t[a] = o, t;
	}, {});
	return Object.values(a).map((e) => ({
		...e,
		highlight: he(e, ["content", "description"])
	}));
}
async function _e(t, n) {
	let r = await h(t, n), i = t.tokenizer.tokenize(n.term ?? ""), a = [];
	for (let o of r.hits) {
		let r = e(t.data.positions[o.id]), s = [];
		for (let [t, a] of r) {
			let r = [], o = e(a);
			for (let e of o) {
				let [t] = e;
				t += "";
				for (let a of i) if (n.tolerance) {
					if (u(t, a, n.tolerance).isBounded) {
						r.push(e);
						break;
					}
				} else if (t.startsWith(a)) {
					r.push(e);
					break;
				}
			}
			s.push([t, Object.fromEntries(r)]);
		}
		a.push(Object.assign(o, { positions: Object.fromEntries(s) }));
	}
	return r.hits = a, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@orama+plugin-qps@3.1.18/node_modules/@orama/plugin-qps/dist/index.js
function q(e, t, n) {
	for (let r of Object.entries(t)) {
		let t = r[0], i = r[1], a = `${n}${n ? "." : ""}${t}`;
		if (typeof i == "object" && !Array.isArray(i)) {
			q(e, i, a);
			continue;
		}
		if (l(i)) e.searchableProperties.push(a), e.searchablePropertiesWithTypes[a] = i, e.vectorIndexes[a] = {
			type: "Vector",
			node: new f(d(i)),
			isArray: !1
		};
		else {
			let t = /\[/.test(i);
			switch (i) {
				case "boolean":
				case "boolean[]":
					e.indexes[a] = {
						type: "Bool",
						node: new ee(),
						isArray: t
					};
					break;
				case "number":
				case "number[]":
					e.indexes[a] = {
						type: "AVL",
						node: new te(0, []),
						isArray: t
					};
					break;
				case "string":
				case "string[]":
					e.indexes[a] = {
						type: "Radix",
						node: new ne(),
						isArray: t
					};
					break;
				case "enum":
				case "enum[]":
					e.indexes[a] = {
						type: "Flat",
						node: new s(),
						isArray: t
					};
					break;
				case "geopoint":
					e.indexes[a] = {
						type: "BKD",
						node: new D(),
						isArray: t
					};
					break;
				default: throw Error("INVALID_SCHEMA_TYPE: " + a);
			}
			e.searchableProperties.push(a), e.searchablePropertiesWithTypes[a] = i;
		}
	}
}
var ve = 1048575;
function ye(e, t) {
	let n = X(e), r = Y(e) | 1 << t;
	return n + 1 << 20 | r;
}
function J(e, t, n, r, i, a, o) {
	let s = e.split(/\.|\?|!/), c = 0, l = 0;
	for (let e of s) {
		let s = o.tokenize(e, a, r);
		for (let e of s) {
			l++, n[e] || (n[e] = 0);
			let r = Math.min(c, 20);
			n.tokenQuantums[i][e] = ye(n.tokenQuantums[i][e], r), t.insert(e, i);
		}
		s.length > 1 && c++;
	}
	n.tokensLength.set(i, l);
}
function be(e) {
	let t = e.tokens, n = e.radixNode, r = e.exact, i = e.tolerance, a = e.stats, o = e.boostPerProp, s = e.resultMap, c = e.whereFiltersIDs, l = a.tokensLength, u = a.tokenQuantums, d = {
		term: "",
		exact: r,
		tolerance: i
	}, f = {}, p = t.length;
	for (let e = 0; e < p; e++) {
		d.term = t[e];
		let r = n.find(d);
		f = {
			...f,
			...r
		};
	}
	let m = Object.keys(f), h = m.length;
	for (let e = 0; e < h; e++) {
		let n = m[e], r = f[n], i = r.length, a = t.includes(n);
		for (let e = 0; e < i; e++) {
			let t = r[e];
			if (c && !c.has(t)) continue;
			let i = l.get(t), d = u[t][n], f = X(d), p = Y(d), m = (f * f / i + (a ? 1 : 0)) * o;
			if (!s.has(t)) {
				s.set(t, [m, p]);
				continue;
			}
			let h = s.get(t);
			h[0] = h[0] + xe(h[1] & p) * 2 + m, h[1] |= p;
		}
	}
}
function Y(e) {
	return e & ve;
}
function X(e) {
	return e >> 20;
}
function xe(e) {
	let t = 0;
	do
		e & 1 && ++t;
	while (e >>= 1);
	return t;
}
function Z(e, t, n, r, i, a, o) {
	let s = o.tokensLength, c = o.tokenQuantums, l = i.tokenize(e, a, n);
	for (let e of l) t.removeDocumentByWord(e, r, !0);
	s.delete(r), delete c[r];
}
var Se = new m("", "", !1), Ce = {
	tokenQuantums: {},
	tokensLength: /* @__PURE__ */ new Map()
};
function we(e, t, n, r, i, a, o, s, c, l, u) {
	let d = /* @__PURE__ */ new Map(), f = {
		tokens: n.tokenize(t, r),
		radixNode: Se,
		exact: a,
		tolerance: o,
		stats: Ce,
		boostPerProp: 0,
		all: d,
		resultMap: d,
		whereFiltersIDs: u
	}, p = i.length;
	for (let t = 0; t < p; t++) {
		let n = i[t], r = e.stats[n], a = s[n] ?? 1;
		f.radixNode = e.indexes[n].node, f.stats = r, f.boostPerProp = a, be(f);
	}
	let m = Array.from(d), h = m.length, g = [];
	for (let e = 0; e < h; e++) {
		let t = m[e], n = t[0], r = t[1][0];
		g.push([n, r]);
	}
	return g;
}
function Q() {
	return {
		name: "qps",
		getComponents(e) {
			return Te(e);
		}
	};
}
function Te(e) {
	return { index: {
		create: function() {
			let t = {
				indexes: {},
				vectorIndexes: {},
				searchableProperties: [],
				searchablePropertiesWithTypes: {},
				stats: {}
			};
			return q(t, e, ""), t;
		},
		insert: function(e, t, n, r, i, a, o, s, c, l) {
			if (!(o === "string" || o === "string[]")) return _(e, t, n, r, i, a, o, s, c, l);
			t.stats[n] || (t.stats[n] = {
				tokenQuantums: {},
				tokensLength: /* @__PURE__ */ new Map()
			});
			let u = t.stats[n], d = t.indexes[n].node;
			if (u.tokenQuantums[i] = {}, Array.isArray(a)) for (let e of a) J(e, d, u, n, i, s, c);
			else J(a, d, u, n, i, s, c);
		},
		remove: function(e, t, n, r, i, a, o, s, c, l) {
			if (!(o === "string" || o === "string[]")) return S(e, t, n, r, i, a, o, s, c, l);
			let u = t.stats[n], d = t.indexes[n].node;
			if (Array.isArray(a)) for (let e of a) Z(e, d, n, i, c, s, u);
			else Z(a, d, n, i, c, s, u);
		},
		insertDocumentScoreParameters: () => {
			throw Error();
		},
		insertTokenScoreParameters: () => {
			throw Error();
		},
		removeDocumentScoreParameters: () => {
			throw Error();
		},
		removeTokenScoreParameters: () => {
			throw Error();
		},
		calculateResultScores: () => {
			throw Error();
		},
		search: we,
		searchByWhereClause: function(e, t, n, r) {
			let i = Object.entries(n).filter(([t]) => e.indexes[t].type === "Radix");
			if (i.length === 0) return v(e, t, n, r);
			let a;
			for (let [n, o] of i) {
				let i = [];
				if (Array.isArray(o)) for (let e of o) {
					let n = t.tokenize(e, r)?.[0];
					i.push(n);
				}
				else i = t.tokenize(o, r);
				let s = e.indexes[n].node, l = /* @__PURE__ */ new Set();
				for (let e of i) {
					let t = s.find({
						term: e,
						exact: !0
					})[e];
					if (t) for (let e of t) l.add(e);
				}
				a = a ? c(a, l) : l;
			}
			if (Object.entries(n).filter(([t]) => e.indexes[t].type !== "Radix").length === 0) return a;
			let o = v(e, t, n, r);
			return c(a, o);
		},
		getSearchableProperties: function(e) {
			return e.searchableProperties;
		},
		getSearchablePropertiesWithTypes: function(e) {
			return e.searchablePropertiesWithTypes;
		},
		load: function(e, t) {
			let n = w(e, t[0]), r = t[1], i = {
				...n.indexes,
				...Object.fromEntries(r.radixTrees.map(([e, t, n, r]) => [e, {
					node: m.fromJSON(r),
					isArray: t,
					type: n
				}]))
			};
			return {
				...n,
				indexes: i,
				stats: Object.fromEntries(r.stats.map(([e, { tokenQuantums: t, tokensLength: n }]) => [e, {
					tokenQuantums: t,
					tokensLength: new Map(n)
				}]))
			};
		},
		save: function(e) {
			let t = e, n = Object.entries(t.indexes).filter(([, { type: e }]) => e !== "Radix");
			return [y({
				...t,
				indexes: Object.fromEntries(n)
			}), {
				radixTrees: Object.entries(t.indexes).filter(([, { type: e }]) => e === "Radix").map(([e, { node: t, isArray: n, type: r }]) => [
					e,
					n,
					r,
					t.toJSON()
				]),
				stats: Object.entries(e.stats).map(([e, { tokenQuantums: t, tokensLength: n }]) => [e, {
					tokenQuantums: t,
					tokensLength: Array.from(n.entries())
				}])
			}];
		}
	} };
}
//#endregion
//#region src/features/search/hooks/use-search.ts
n();
var Ee = [
	"title",
	"description",
	"content"
], De = {
	title: "string",
	description: "string",
	content: "string",
	path: "string",
	lastModified: "number",
	createdAt: "number",
	publishedAt: "number",
	year: "string",
	tags: "enum[]"
};
function Oe() {
	return g({
		schema: De,
		components: { tokenizer: {
			stemming: !0,
			stemmerSkipProperties: ["tags"]
		} },
		plugins: [Q(), {
			name: "highlight",
			afterInsert: de
		}]
	});
}
function ke(e, t) {
	t.forEach((t) => {
		let n = t.created && t.created !== "" ? A(t.created) : null, r = t.published && t.published !== "" ? A(t.published) : null, i = O(t.lastModified);
		x(e, {
			content: "",
			...t,
			createdAt: T(n || i),
			publishedAt: T(r || i),
			year: r ? k(r).toString() : k(i).toString(),
			tags: pe(t.tags)
		});
	});
}
var $ = async (e) => fetch(e).then((e) => e.json()).then((e) => e.data), Ae = async (e) => Promise.all(e.map($)).then((e) => e.flat() || []), je = (e, n, s) => {
	let [c, l] = i(0), [u, d] = i(s?.offset ?? 0), f = a(() => s?.sort, [s?.sort]), [p, m] = i({
		count: 0,
		hits: []
	}), [h, g] = i(!1), _ = s?.limit ?? 12, [v] = i(() => Oe());
	o(n, typeof n == "string" ? $ : Ae, {
		revalidateOnFocus: !1,
		keepPreviousData: !0,
		onSuccess: async (e) => {
			ke(v, e), l(Date.now());
		}
	});
	let y = r(async (t) => {
		let { tags: n = [], sort: r, facets: i, year: a = [] } = s || {}, o = {
			...n.length > 0 ? { tags: { containsAny: n } } : {},
			...a && a.length > 0 ? { year: a } : {}
		}, c = await _e(v, {
			term: e,
			sortBy: r?.hasOwnProperty("sortFn") ? r.sortFn : r,
			tolerance: 0,
			boost: {
				title: 8,
				description: 2,
				tags: 3,
				content: .1
			},
			where: o,
			facets: i,
			limit: _,
			offset: t
		}), l = ge(c, e, Ee);
		m((e) => ({
			count: c.count,
			facets: c.facets,
			hits: [...e.hits, ...l]
		}));
	}, [
		v,
		e,
		s?.tags,
		s?.year,
		f,
		_
	]);
	t(() => {
		c !== 0 && (m({
			count: 0,
			hits: []
		}), d(s?.offset ?? 0), y(s?.offset ?? 0));
	}, [
		s?.tags,
		s?.year,
		f,
		e,
		c
	]);
	let b = r(() => {
		if (h) return;
		g(!0);
		let e = u + _;
		y(e).then(() => {
			d(e), g(!1);
		});
	}, [u, h]), x = p.hits.length < p.count;
	return {
		...p,
		offset: u,
		next: b,
		hasMore: x,
		isLoadingMore: h
	};
};
//#endregion
export { O as n, je as t };

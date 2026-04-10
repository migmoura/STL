import { f as e, h as t, s as n, u as r } from "../../scripts/parser-Bc1VLsF3.js";
import { h as i, r as a, v as o } from "../../scripts/utils-Cw5qLqcS.js";
import { Ct as s, E as c, Et as l, Ot as u, Tt as d, bt as f, ft as p, ht as m, nt as h, ut as g, vt as _, wt as v, z as y } from "../../scripts/react-w7ldCLEn.js";
import "../../scripts/heading-DSowWvXd.js";
import { t as b } from "../../scripts/headline-CM_nM-LL.js";
import { t as x } from "../../scripts/esm-Ccs46AP5.js";
import { t as S } from "../../scripts/picture-DtJCwEBx.js";
import { C, D as w, S as T, _ as E, b as D, d as ee, g as te, h as ne, i as re, l as ie, o as ae, r as oe, s as O, t as se, u as ce, v as le, x as ue, y as de } from "../../scripts/schemas-DU_bxMgu.js";
import { n as fe, t as pe } from "../../scripts/resolvers-CXfBQPNY.js";
import "../../scripts/es2015-CAHZSTi-.js";
import { t as me } from "../../scripts/input-D5kPLzUd.js";
import { t as he } from "../../scripts/checkbox-D7WFlB1v.js";
import { t as ge } from "../../scripts/index-x5LGNNyK.js";
import { a as _e, i as ve, n as ye, r as be, t as xe } from "../../scripts/select-CetSGx-y.js";
//#region src/components/ui/textarea.tsx
p();
function Se({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ h("span", {
		className: a("flex gap-4 items-center justify-between pl-6 pr-1 bg-white ring-1 ring-gray-15 outline-none has-focus-visible:ring-pressed has-focus-visible:ring-2 hover:not-has-disabled:ring-2 has-disabled:text-gray-25 has-disabled:ring-gray-3 has-aria-invalid:ring-light-red has-aria-invalid:ring-2", e),
		children: [/* @__PURE__ */ h("textarea", {
			"data-slot": "textarea",
			className: "min-h-45 peer outline-none pt-8 pb-2 leading-tight w-full field-sizing-content",
			...n
		}), t]
	});
}
//#endregion
//#region src/components/ui/spinner.tsx
function Ce({ className: e, ...t }) {
	return /* @__PURE__ */ h(y, {
		role: "status",
		"aria-label": "Loading",
		className: a("size-6 animate-spin", e),
		...t
	});
}
//#endregion
//#region src/features/forms/components/dynamic-field.tsx
p();
var we = async (e) => fetch(e).then((e) => e.json()).then((e) => e.data);
function Te({ url: e, children: t }) {
	let { data: n } = ge(e, we);
	return /* @__PURE__ */ h(u, { children: [t, Array.isArray(n) ? n.map((e) => /* @__PURE__ */ h(be, {
		value: e.value,
		children: e.label
	}, e.value)) : null] });
}
function Ee({ form: e, show: t, ...n }) {
	let r = "required" in n && n?.required === "true";
	if (d(() => {
		t || e.resetField(n.name);
	}, [t, e]), !t) return null;
	switch (n.type) {
		case "submiterror": return /* @__PURE__ */ h(E, {
			type: "server",
			children: n.message
		});
		case "error": return /* @__PURE__ */ h(E, { children: n.message });
		case "success": return /* @__PURE__ */ h(T, { children: n.message });
		case "submit": return /* @__PURE__ */ h(o, {
			variant: n.variant,
			type: "submit",
			disabled: e.formState.isSubmitting,
			className: "relative w-fit min-w-50",
			children: [/* @__PURE__ */ h("span", {
				className: "transition-transform duration-500",
				children: n.label ?? "Submit"
			}), /* @__PURE__ */ h(Ce, { className: a("transition-all duration-500 disabled:text-gray-3", e.formState.isSubmitting ? "opacity-100" : "opacity-0 w-0") })]
		});
		default: return /* @__PURE__ */ h(le, {
			control: e.control,
			name: n.name,
			render: ({ field: t }) => /* @__PURE__ */ h(de, { children: [/* @__PURE__ */ h(te, { children: (() => {
				switch (n.type) {
					case "input": return /* @__PURE__ */ h(me, {
						placeholder: " ",
						...t,
						required: !1,
						children: /* @__PURE__ */ h(D, { children: [n.label, r ? "*" : ""] })
					});
					case "textarea": return /* @__PURE__ */ h(Se, {
						placeholder: " ",
						...t,
						required: !1,
						children: /* @__PURE__ */ h(D, { children: [n.label, r ? "*" : ""] })
					});
					case "hidden": return /* @__PURE__ */ h(me, {
						hidden: !0,
						...t,
						required: !1
					});
					case "select": return /* @__PURE__ */ h(xe, {
						value: t.value,
						onValueChange: (n) => {
							n === "empty" ? e.resetField(t.name) : t.onChange(n);
						},
						children: [/* @__PURE__ */ h(ve, {
							id: t.name,
							"aria-invalid": !!e.formState.errors[t.name],
							className: "w-full",
							children: [/* @__PURE__ */ h("span", {
								className: "peer flex",
								"data-placeholder": !t.value,
								children: /* @__PURE__ */ h(_e, {})
							}), /* @__PURE__ */ h(C, {
								htmlFor: t.name,
								children: [n.label, r ? "*" : ""]
							})]
						}), /* @__PURE__ */ h(ye, { children: typeof n.options == "string" ? /* @__PURE__ */ h(Te, {
							url: n.options,
							children: r ? null : /* @__PURE__ */ h(be, {
								value: "empty",
								children: "-- Empty --"
							})
						}) : null })]
					});
					case "checkbox": return /* @__PURE__ */ h("label", {
						className: "flex gap-4 md:w-2/3",
						children: [/* @__PURE__ */ h(he, {
							"aria-invalid": !!e.formState.errors[t.name],
							value: t.value,
							onCheckedChange: (e) => t.onChange(e)
						}), /* @__PURE__ */ h(x, {
							className: "text-gray-1",
							tagName: "span",
							transform: i,
							content: `${r ? "*" : ""}${n.label}`
						})]
					});
					default: return null;
				}
			})() }), /* @__PURE__ */ h(ue, {})] })
		}, n.name);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@standard-schema+utils@0.3.0/node_modules/@standard-schema/utils/dist/index.js
function De(e) {
	if (e.path?.length) {
		let t = "";
		for (let n of e.path) {
			let e = typeof n == "object" ? n.key : n;
			if (typeof e == "string" || typeof e == "number") t ? t += `.${e}` : t += e;
			else return null;
		}
		return t;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.71.2_react@19.2.4_/node_modules/@hookform/resolvers/standard-schema/dist/standard-schema.mjs
function Oe() {
	return Oe = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Oe.apply(null, arguments);
}
function ke(e, t, n) {
	return n === void 0 && (n = {}), function(t, r, i) {
		try {
			var a = function() {
				return o.issues ? {
					values: {},
					errors: fe(function(e, t) {
						for (var n = {}, r = 0; r < e.length; r++) {
							var i = e[r], a = De(i);
							if (a && (n[a] || (n[a] = {
								message: i.message,
								type: ""
							}), t)) {
								var o, s = n[a].types || {};
								n[a].types = Oe({}, s, ((o = {})[Object.keys(s).length] = i.message, o));
							}
						}
						return n;
					}(o.issues, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i)
				} : (i.shouldUseNativeValidation && pe({}, i), {
					values: n.raw ? Object.assign({}, t) : o.value,
					errors: {}
				});
			}, o = e["~standard"].validate(t), s = function() {
				if (o instanceof Promise) return Promise.resolve(o).then(function(e) {
					o = e;
				});
			}();
			return Promise.resolve(s && s.then ? s.then(a) : a());
		} catch (e) {
			return Promise.reject(e);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/filtrex@3.1.0/node_modules/filtrex/dist/esm/filtrex.mjs
var Ae = (function() {
	var e = {
		trace: function() {},
		yy: {},
		symbols_: {
			error: 2,
			expressions: 3,
			e: 4,
			EndOfExpression: 5,
			"-": 6,
			"+": 7,
			"*": 8,
			"/": 9,
			"^": 10,
			mod: 11,
			and: 12,
			or: 13,
			not: 14,
			if: 15,
			then: 16,
			else: 17,
			in: 18,
			notIn: 19,
			"(": 20,
			")": 21,
			Arguments: 22,
			",": 23,
			Number: 24,
			Symbol: 25,
			String: 26,
			of: 27,
			Relation: 28,
			"%": 29,
			"?": 30,
			":": 31,
			RelationalOperator: 32,
			"==": 33,
			"!=": 34,
			"~=": 35,
			"<": 36,
			"<=": 37,
			">=": 38,
			">": 39,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			5: "EndOfExpression",
			6: "-",
			7: "+",
			8: "*",
			9: "/",
			10: "^",
			11: "mod",
			12: "and",
			13: "or",
			14: "not",
			15: "if",
			16: "then",
			17: "else",
			18: "in",
			19: "notIn",
			20: "(",
			21: ")",
			23: ",",
			24: "Number",
			25: "Symbol",
			26: "String",
			27: "of",
			29: "%",
			30: "?",
			31: ":",
			33: "==",
			34: "!=",
			35: "~=",
			36: "<",
			37: "<=",
			38: ">=",
			39: ">"
		},
		productions_: [
			0,
			[3, 2],
			[4, 2],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 2],
			[4, 6],
			[4, 3],
			[4, 3],
			[4, 3],
			[4, 5],
			[4, 1],
			[4, 1],
			[4, 1],
			[4, 3],
			[4, 3],
			[4, 4],
			[4, 1],
			[4, 3],
			[4, 5],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[28, 3],
			[28, 3],
			[22, 1],
			[22, 3]
		],
		performAction: function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 1: return a[s - 1];
				case 2:
					this.$ = [
						"(",
						"ops['-'](",
						a[s],
						")",
						")"
					];
					break;
				case 3:
					this.$ = [
						"(",
						"ops['",
						a[s - 1],
						"'](",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 4:
					this.$ = [
						"(",
						"ops['",
						a[s - 1],
						"'](",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 5:
					this.$ = [
						"(",
						"ops['",
						a[s - 1],
						"'](",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 6:
					this.$ = [
						"(",
						"ops['",
						a[s - 1],
						"'](",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 7:
					this.$ = [
						"(",
						"ops['",
						a[s - 1],
						"'](",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 8:
					this.$ = [
						"(",
						"ops.mod(",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 9:
					this.$ = [
						"(",
						"",
						"std.coerceBoolean",
						"(",
						a[s - 2],
						") && ",
						"std.coerceBoolean",
						"(",
						a[s],
						")",
						")"
					];
					break;
				case 10:
					this.$ = [
						"(",
						"",
						"std.coerceBoolean",
						"(",
						a[s - 2],
						") || ",
						"std.coerceBoolean",
						"(",
						a[s],
						")",
						")"
					];
					break;
				case 11:
					this.$ = [
						"(",
						"! ",
						"std.coerceBoolean",
						"(",
						a[s],
						")",
						")"
					];
					break;
				case 12:
					this.$ = [
						"(",
						"",
						"std.coerceBoolean",
						"(",
						a[s - 4],
						") ? ",
						a[s - 2],
						" : ",
						a[s],
						"",
						")"
					];
					break;
				case 13:
					this.$ = [
						"(",
						"std.isSubset(",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 14:
					this.$ = [
						"(",
						"!std.isSubset(",
						a[s - 2],
						", ",
						a[s],
						")",
						")"
					];
					break;
				case 15:
					this.$ = [
						"(",
						"",
						a[s - 1],
						"",
						")"
					];
					break;
				case 16:
					this.$ = [
						"(",
						"[ ",
						a[s - 3],
						", ",
						a[s - 1],
						" ]",
						")"
					];
					break;
				case 17:
					this.$ = [
						"",
						a[s],
						""
					];
					break;
				case 18:
					this.$ = [
						"prop(",
						a[s],
						", data)"
					];
					break;
				case 19:
					this.$ = [
						"",
						a[s],
						""
					];
					break;
				case 20:
					this.$ = [
						"prop(",
						a[s - 2],
						", ",
						a[s],
						")"
					];
					break;
				case 21:
					this.$ = [
						"call(",
						a[s - 2],
						")"
					];
					break;
				case 22:
					this.$ = [
						"call(",
						a[s - 3],
						", ",
						a[s - 1],
						")"
					];
					break;
				case 23:
					this.$ = r.reduceRelation(a[s]);
					break;
				case 24:
					this.$ = [
						"std.warnDeprecated('modulo', ops['mod'](",
						a[s - 2],
						", ",
						a[s],
						"))"
					];
					break;
				case 25:
					this.$ = [
						"std.warnDeprecated('ternary', ",
						"std.coerceBoolean",
						"(",
						a[s - 4],
						") ? ",
						a[s - 2],
						" : ",
						a[s],
						")"
					];
					break;
				case 26:
					this.$ = ["=="];
					break;
				case 27:
					this.$ = ["!="];
					break;
				case 28:
					this.$ = ["~="];
					break;
				case 29:
					this.$ = ["<"];
					break;
				case 30:
					this.$ = ["<="];
					break;
				case 31:
					this.$ = [">="];
					break;
				case 32:
					this.$ = [">"];
					break;
				case 33:
					this.$ = [
						a[s - 2],
						a[s - 1],
						...a[s]
					];
					break;
				case 34:
					this.$ = [
						a[s - 2],
						a[s - 1],
						a[s]
					];
					break;
				case 35:
					this.$ = [
						"",
						a[s],
						""
					];
					break;
				case 36:
					this.$ = [
						"",
						a[s - 2],
						", ",
						a[s],
						""
					];
					break;
			}
		},
		table: [
			{
				3: 1,
				4: 2,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{ 1: [3] },
			{
				5: [1, 11],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				4: 32,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 33,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 34,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 35,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				22: 36,
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 17],
				6: [2, 17],
				7: [2, 17],
				8: [2, 17],
				9: [2, 17],
				10: [2, 17],
				11: [2, 17],
				12: [2, 17],
				13: [2, 17],
				16: [2, 17],
				17: [2, 17],
				18: [2, 17],
				19: [2, 17],
				21: [2, 17],
				23: [2, 17],
				29: [2, 17],
				30: [2, 17],
				31: [2, 17],
				33: [2, 17],
				34: [2, 17],
				35: [2, 17],
				36: [2, 17],
				37: [2, 17],
				38: [2, 17],
				39: [2, 17]
			},
			{
				5: [2, 18],
				6: [2, 18],
				7: [2, 18],
				8: [2, 18],
				9: [2, 18],
				10: [2, 18],
				11: [2, 18],
				12: [2, 18],
				13: [2, 18],
				16: [2, 18],
				17: [2, 18],
				18: [2, 18],
				19: [2, 18],
				20: [1, 38],
				21: [2, 18],
				23: [2, 18],
				27: [1, 37],
				29: [2, 18],
				30: [2, 18],
				31: [2, 18],
				33: [2, 18],
				34: [2, 18],
				35: [2, 18],
				36: [2, 18],
				37: [2, 18],
				38: [2, 18],
				39: [2, 18]
			},
			{
				5: [2, 19],
				6: [2, 19],
				7: [2, 19],
				8: [2, 19],
				9: [2, 19],
				10: [2, 19],
				11: [2, 19],
				12: [2, 19],
				13: [2, 19],
				16: [2, 19],
				17: [2, 19],
				18: [2, 19],
				19: [2, 19],
				21: [2, 19],
				23: [2, 19],
				29: [2, 19],
				30: [2, 19],
				31: [2, 19],
				33: [2, 19],
				34: [2, 19],
				35: [2, 19],
				36: [2, 19],
				37: [2, 19],
				38: [2, 19],
				39: [2, 19]
			},
			{
				5: [2, 23],
				6: [2, 23],
				7: [2, 23],
				8: [2, 23],
				9: [2, 23],
				10: [2, 23],
				11: [2, 23],
				12: [2, 23],
				13: [2, 23],
				16: [2, 23],
				17: [2, 23],
				18: [2, 23],
				19: [2, 23],
				21: [2, 23],
				23: [2, 23],
				29: [2, 23],
				30: [2, 23],
				31: [2, 23],
				33: [2, 23],
				34: [2, 23],
				35: [2, 23],
				36: [2, 23],
				37: [2, 23],
				38: [2, 23],
				39: [2, 23]
			},
			{ 1: [2, 1] },
			{
				4: 39,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 40,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 41,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 42,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 43,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 44,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 45,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 46,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 47,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 48,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 49,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 50,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 52,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 51
			},
			{
				6: [2, 26],
				14: [2, 26],
				15: [2, 26],
				20: [2, 26],
				24: [2, 26],
				25: [2, 26],
				26: [2, 26]
			},
			{
				6: [2, 27],
				14: [2, 27],
				15: [2, 27],
				20: [2, 27],
				24: [2, 27],
				25: [2, 27],
				26: [2, 27]
			},
			{
				6: [2, 28],
				14: [2, 28],
				15: [2, 28],
				20: [2, 28],
				24: [2, 28],
				25: [2, 28],
				26: [2, 28]
			},
			{
				6: [2, 29],
				14: [2, 29],
				15: [2, 29],
				20: [2, 29],
				24: [2, 29],
				25: [2, 29],
				26: [2, 29]
			},
			{
				6: [2, 30],
				14: [2, 30],
				15: [2, 30],
				20: [2, 30],
				24: [2, 30],
				25: [2, 30],
				26: [2, 30]
			},
			{
				6: [2, 31],
				14: [2, 31],
				15: [2, 31],
				20: [2, 31],
				24: [2, 31],
				25: [2, 31],
				26: [2, 31]
			},
			{
				6: [2, 32],
				14: [2, 32],
				15: [2, 32],
				20: [2, 32],
				24: [2, 32],
				25: [2, 32],
				26: [2, 32]
			},
			{
				5: [2, 2],
				6: [2, 2],
				7: [2, 2],
				8: [2, 2],
				9: [2, 2],
				10: [1, 16],
				11: [2, 2],
				12: [2, 2],
				13: [2, 2],
				16: [2, 2],
				17: [2, 2],
				18: [2, 2],
				19: [2, 2],
				21: [2, 2],
				23: [2, 2],
				29: [2, 2],
				30: [2, 2],
				31: [2, 2],
				32: 24,
				33: [2, 2],
				34: [2, 2],
				35: [2, 2],
				36: [2, 2],
				37: [2, 2],
				38: [2, 2],
				39: [2, 2]
			},
			{
				5: [2, 11],
				6: [2, 11],
				7: [2, 11],
				8: [2, 11],
				9: [2, 11],
				10: [1, 16],
				11: [2, 11],
				12: [2, 11],
				13: [2, 11],
				16: [2, 11],
				17: [2, 11],
				18: [2, 11],
				19: [2, 11],
				21: [2, 11],
				23: [2, 11],
				29: [2, 11],
				30: [2, 11],
				31: [2, 11],
				32: 24,
				33: [2, 11],
				34: [2, 11],
				35: [2, 11],
				36: [2, 11],
				37: [2, 11],
				38: [2, 11],
				39: [2, 11]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				16: [1, 53],
				18: [1, 20],
				19: [1, 21],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				21: [1, 54],
				23: [2, 35],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{ 23: [1, 55] },
			{
				4: 56,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				4: 59,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				21: [1, 57],
				22: 58,
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 3],
				6: [2, 3],
				7: [2, 3],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 3],
				13: [2, 3],
				16: [2, 3],
				17: [2, 3],
				18: [2, 3],
				19: [2, 3],
				21: [2, 3],
				23: [2, 3],
				29: [1, 22],
				30: [2, 3],
				31: [2, 3],
				32: 24,
				33: [2, 3],
				34: [2, 3],
				35: [2, 3],
				36: [2, 3],
				37: [2, 3],
				38: [2, 3],
				39: [2, 3]
			},
			{
				5: [2, 4],
				6: [2, 4],
				7: [2, 4],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 4],
				13: [2, 4],
				16: [2, 4],
				17: [2, 4],
				18: [2, 4],
				19: [2, 4],
				21: [2, 4],
				23: [2, 4],
				29: [1, 22],
				30: [2, 4],
				31: [2, 4],
				32: 24,
				33: [2, 4],
				34: [2, 4],
				35: [2, 4],
				36: [2, 4],
				37: [2, 4],
				38: [2, 4],
				39: [2, 4]
			},
			{
				5: [2, 5],
				6: [2, 5],
				7: [2, 5],
				8: [2, 5],
				9: [2, 5],
				10: [1, 16],
				11: [2, 5],
				12: [2, 5],
				13: [2, 5],
				16: [2, 5],
				17: [2, 5],
				18: [2, 5],
				19: [2, 5],
				21: [2, 5],
				23: [2, 5],
				29: [2, 5],
				30: [2, 5],
				31: [2, 5],
				32: 24,
				33: [2, 5],
				34: [2, 5],
				35: [2, 5],
				36: [2, 5],
				37: [2, 5],
				38: [2, 5],
				39: [2, 5]
			},
			{
				5: [2, 6],
				6: [2, 6],
				7: [2, 6],
				8: [2, 6],
				9: [2, 6],
				10: [1, 16],
				11: [2, 6],
				12: [2, 6],
				13: [2, 6],
				16: [2, 6],
				17: [2, 6],
				18: [2, 6],
				19: [2, 6],
				21: [2, 6],
				23: [2, 6],
				29: [2, 6],
				30: [2, 6],
				31: [2, 6],
				32: 24,
				33: [2, 6],
				34: [2, 6],
				35: [2, 6],
				36: [2, 6],
				37: [2, 6],
				38: [2, 6],
				39: [2, 6]
			},
			{
				5: [2, 7],
				6: [2, 7],
				7: [2, 7],
				8: [2, 7],
				9: [2, 7],
				10: [1, 16],
				11: [2, 7],
				12: [2, 7],
				13: [2, 7],
				16: [2, 7],
				17: [2, 7],
				18: [2, 7],
				19: [2, 7],
				21: [2, 7],
				23: [2, 7],
				29: [2, 7],
				30: [2, 7],
				31: [2, 7],
				32: 24,
				33: [2, 7],
				34: [2, 7],
				35: [2, 7],
				36: [2, 7],
				37: [2, 7],
				38: [2, 7],
				39: [2, 7]
			},
			{
				5: [2, 8],
				6: [2, 8],
				7: [2, 8],
				8: [2, 8],
				9: [2, 8],
				10: [1, 16],
				11: [2, 8],
				12: [2, 8],
				13: [2, 8],
				16: [2, 8],
				17: [2, 8],
				18: [2, 8],
				19: [2, 8],
				21: [2, 8],
				23: [2, 8],
				29: [2, 8],
				30: [2, 8],
				31: [2, 8],
				32: 24,
				33: [2, 8],
				34: [2, 8],
				35: [2, 8],
				36: [2, 8],
				37: [2, 8],
				38: [2, 8],
				39: [2, 8]
			},
			{
				5: [2, 9],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 9],
				13: [2, 9],
				16: [2, 9],
				17: [2, 9],
				18: [1, 20],
				19: [1, 21],
				21: [2, 9],
				23: [2, 9],
				29: [1, 22],
				30: [2, 9],
				31: [2, 9],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 10],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [2, 10],
				16: [2, 10],
				17: [2, 10],
				18: [1, 20],
				19: [1, 21],
				21: [2, 10],
				23: [2, 10],
				29: [1, 22],
				30: [2, 10],
				31: [2, 10],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 13],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 13],
				13: [2, 13],
				16: [2, 13],
				17: [2, 13],
				18: [2, 13],
				19: [2, 13],
				21: [2, 13],
				23: [2, 13],
				29: [1, 22],
				30: [2, 13],
				31: [2, 13],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 14],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 14],
				13: [2, 14],
				16: [2, 14],
				17: [2, 14],
				18: [2, 14],
				19: [2, 14],
				21: [2, 14],
				23: [2, 14],
				29: [1, 22],
				30: [2, 14],
				31: [2, 14],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 24],
				6: [2, 24],
				7: [2, 24],
				8: [2, 24],
				9: [2, 24],
				10: [1, 16],
				11: [2, 24],
				12: [2, 24],
				13: [2, 24],
				16: [2, 24],
				17: [2, 24],
				18: [2, 24],
				19: [2, 24],
				21: [2, 24],
				23: [2, 24],
				29: [2, 24],
				30: [2, 24],
				31: [2, 24],
				32: 24,
				33: [2, 24],
				34: [2, 24],
				35: [2, 24],
				36: [2, 24],
				37: [2, 24],
				38: [2, 24],
				39: [2, 24]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				29: [1, 22],
				30: [1, 23],
				31: [1, 60],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 33],
				6: [2, 33],
				7: [2, 33],
				8: [2, 33],
				9: [2, 33],
				10: [2, 33],
				11: [2, 33],
				12: [2, 33],
				13: [2, 33],
				16: [2, 33],
				17: [2, 33],
				18: [2, 33],
				19: [2, 33],
				21: [2, 33],
				23: [2, 33],
				29: [2, 33],
				30: [2, 33],
				31: [2, 33],
				33: [2, 33],
				34: [2, 33],
				35: [2, 33],
				36: [2, 33],
				37: [2, 33],
				38: [2, 33],
				39: [2, 33]
			},
			{
				5: [2, 34],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [2, 34],
				13: [2, 34],
				16: [2, 34],
				17: [2, 34],
				18: [2, 34],
				19: [2, 34],
				21: [2, 34],
				23: [2, 34],
				29: [1, 22],
				30: [2, 34],
				31: [2, 34],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				4: 61,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 15],
				6: [2, 15],
				7: [2, 15],
				8: [2, 15],
				9: [2, 15],
				10: [2, 15],
				11: [2, 15],
				12: [2, 15],
				13: [2, 15],
				16: [2, 15],
				17: [2, 15],
				18: [2, 15],
				19: [2, 15],
				21: [2, 15],
				23: [2, 15],
				29: [2, 15],
				30: [2, 15],
				31: [2, 15],
				33: [2, 15],
				34: [2, 15],
				35: [2, 15],
				36: [2, 15],
				37: [2, 15],
				38: [2, 15],
				39: [2, 15]
			},
			{
				4: 62,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 20],
				6: [2, 20],
				7: [2, 20],
				8: [2, 20],
				9: [2, 20],
				10: [2, 20],
				11: [2, 20],
				12: [2, 20],
				13: [2, 20],
				16: [2, 20],
				17: [2, 20],
				18: [2, 20],
				19: [2, 20],
				21: [2, 20],
				23: [2, 20],
				29: [2, 20],
				30: [2, 20],
				31: [2, 20],
				32: 24,
				33: [2, 20],
				34: [2, 20],
				35: [2, 20],
				36: [2, 20],
				37: [2, 20],
				38: [2, 20],
				39: [2, 20]
			},
			{
				5: [2, 21],
				6: [2, 21],
				7: [2, 21],
				8: [2, 21],
				9: [2, 21],
				10: [2, 21],
				11: [2, 21],
				12: [2, 21],
				13: [2, 21],
				16: [2, 21],
				17: [2, 21],
				18: [2, 21],
				19: [2, 21],
				21: [2, 21],
				23: [2, 21],
				29: [2, 21],
				30: [2, 21],
				31: [2, 21],
				33: [2, 21],
				34: [2, 21],
				35: [2, 21],
				36: [2, 21],
				37: [2, 21],
				38: [2, 21],
				39: [2, 21]
			},
			{
				21: [1, 63],
				23: [1, 64]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				21: [2, 35],
				23: [2, 35],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				4: 65,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				17: [1, 66],
				18: [1, 20],
				19: [1, 21],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				21: [1, 67],
				23: [2, 36],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 22],
				6: [2, 22],
				7: [2, 22],
				8: [2, 22],
				9: [2, 22],
				10: [2, 22],
				11: [2, 22],
				12: [2, 22],
				13: [2, 22],
				16: [2, 22],
				17: [2, 22],
				18: [2, 22],
				19: [2, 22],
				21: [2, 22],
				23: [2, 22],
				29: [2, 22],
				30: [2, 22],
				31: [2, 22],
				33: [2, 22],
				34: [2, 22],
				35: [2, 22],
				36: [2, 22],
				37: [2, 22],
				38: [2, 22],
				39: [2, 22]
			},
			{
				4: 68,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 25],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				16: [2, 25],
				17: [2, 25],
				18: [1, 20],
				19: [1, 21],
				21: [2, 25],
				23: [2, 25],
				29: [1, 22],
				30: [1, 23],
				31: [2, 25],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				4: 69,
				6: [1, 3],
				14: [1, 4],
				15: [1, 5],
				20: [1, 6],
				24: [1, 7],
				25: [1, 8],
				26: [1, 9],
				28: 10
			},
			{
				5: [2, 16],
				6: [2, 16],
				7: [2, 16],
				8: [2, 16],
				9: [2, 16],
				10: [2, 16],
				11: [2, 16],
				12: [2, 16],
				13: [2, 16],
				16: [2, 16],
				17: [2, 16],
				18: [2, 16],
				19: [2, 16],
				21: [2, 16],
				23: [2, 16],
				29: [2, 16],
				30: [2, 16],
				31: [2, 16],
				33: [2, 16],
				34: [2, 16],
				35: [2, 16],
				36: [2, 16],
				37: [2, 16],
				38: [2, 16],
				39: [2, 16]
			},
			{
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				18: [1, 20],
				19: [1, 21],
				21: [2, 36],
				23: [2, 36],
				29: [1, 22],
				30: [1, 23],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			},
			{
				5: [2, 12],
				6: [1, 13],
				7: [1, 12],
				8: [1, 14],
				9: [1, 15],
				10: [1, 16],
				11: [1, 17],
				12: [1, 18],
				13: [1, 19],
				16: [2, 12],
				17: [2, 12],
				18: [1, 20],
				19: [1, 21],
				21: [2, 12],
				23: [2, 12],
				29: [1, 22],
				30: [1, 23],
				31: [2, 12],
				32: 24,
				33: [1, 25],
				34: [1, 26],
				35: [1, 27],
				36: [1, 28],
				37: [1, 29],
				38: [1, 30],
				39: [1, 31]
			}
		],
		defaultActions: { 11: [2, 1] },
		parseError: function(e, t) {
			throw Error(e);
		},
		parse: function(e) {
			var t = this, n = [0], r = [null], i = [], a = this.table, o = "", s = 0, c = 0, l = 0, u = 2, d = 1;
			this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, this.lexer.yylloc === void 0 && (this.lexer.yylloc = {});
			var f = this.lexer.yylloc;
			i.push(f);
			var p = this.lexer.options && this.lexer.options.ranges;
			typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
			function m(e) {
				n.length -= 2 * e, r.length -= e, i.length -= e;
			}
			function h() {
				var e = t.lexer.lex() || 1;
				return typeof e != "number" && (e = t.symbols_[e] || e), e;
			}
			for (var g, _, v, y, b, x = {}, S, C, w, T;;) {
				if (v = n[n.length - 1], this.defaultActions[v] ? y = this.defaultActions[v] : (g ??= h(), y = a[v] && a[v][g]), y === void 0 || !y.length || !y[0]) {
					var E = "";
					if (!l) {
						for (S in T = [], a[v]) this.terminals_[S] && S > 2 && T.push("'" + this.terminals_[S] + "'");
						E = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(E, {
							text: this.lexer.match,
							token: this.terminals_[g] || g,
							line: this.lexer.yylineno,
							loc: f,
							expected: T
						});
					}
					if (l == 3) {
						if (g == d) throw Error(E || "Parsing halted.");
						c = this.lexer.yyleng, o = this.lexer.yytext, s = this.lexer.yylineno, f = this.lexer.yylloc, g = h();
					}
					for (; !(u.toString() in a[v]);) {
						if (v === 0) throw Error(E || "Parsing halted.");
						m(1), v = n[n.length - 1];
					}
					_ = g == 2 ? null : g, g = u, v = n[n.length - 1], y = a[v] && a[v][u], l = 3;
				}
				if (y[0] instanceof Array && y.length > 1) throw Error("Parse Error: multiple actions possible at state: " + v + ", token: " + g);
				switch (y[0]) {
					case 1:
						n.push(g), r.push(this.lexer.yytext), i.push(this.lexer.yylloc), n.push(y[1]), g = null, _ ? (g = _, _ = null) : (c = this.lexer.yyleng, o = this.lexer.yytext, s = this.lexer.yylineno, f = this.lexer.yylloc, l > 0 && l--);
						break;
					case 2:
						if (C = this.productions_[y[1]][1], x.$ = r[r.length - C], x._$ = {
							first_line: i[i.length - (C || 1)].first_line,
							last_line: i[i.length - 1].last_line,
							first_column: i[i.length - (C || 1)].first_column,
							last_column: i[i.length - 1].last_column
						}, p && (x._$.range = [i[i.length - (C || 1)].range[0], i[i.length - 1].range[1]]), b = this.performAction.call(x, o, c, s, this.yy, y[1], r, i), b !== void 0) return b;
						C && (n = n.slice(0, -1 * C * 2), r = r.slice(0, -1 * C), i = i.slice(0, -1 * C)), n.push(this.productions_[y[1]][0]), r.push(x.$), i.push(x._$), w = a[n[n.length - 2]][n[n.length - 1]], n.push(w);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}
	};
	e.lexer = (function() {
		var e = {
			EOF: 1,
			parseError: function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			},
			setInput: function(e) {
				return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			},
			input: function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			},
			unput: function(e) {
				var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
				var r = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
				var i = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
				}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this;
			},
			more: function() {
				return this._more = !0, this;
			},
			less: function(e) {
				this.unput(this.match.slice(e));
			},
			pastInput: function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			},
			upcomingInput: function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			},
			showPosition: function() {
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			},
			next: function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, t, n, r, i;
				this._more || (this.yytext = "", this.match = "");
				for (var a = this._currentRules(), o = 0; o < a.length && (n = this._input.match(this.rules[a[o]]), !(n && (!t || n[0].length > t[0].length) && (t = n, r = o, !this.options.flex))); o++);
				return t ? (i = t[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
				}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, a[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			},
			lex: function() {
				var e = this.next();
				return e === void 0 ? this.lex() : e;
			},
			begin: function(e) {
				this.conditionStack.push(e);
			},
			popState: function() {
				return this.conditionStack.pop();
			},
			_currentRules: function() {
				return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
			},
			topState: function() {
				return this.conditionStack[this.conditionStack.length - 2];
			},
			pushState: function(e) {
				this.begin(e);
			}
		};
		return e.options = {}, e.performAction = function(e, t, n, r) {
			switch (n) {
				case 0: return "*";
				case 1: return "/";
				case 2: return "-";
				case 3: return "+";
				case 4: return "^";
				case 5: return "(";
				case 6: return ")";
				case 7: return ",";
				case 8: return "==";
				case 9: return "!=";
				case 10: return "~=";
				case 11: return ">=";
				case 12: return "<=";
				case 13: return "<";
				case 14: return ">";
				case 15: return "notIn";
				case 16: return "and";
				case 17: return "or";
				case 18: return "not";
				case 19: return "in";
				case 20: return "of";
				case 21: return "if";
				case 22: return "then";
				case 23: return "else";
				case 24: return "mod";
				case 25: break;
				case 26: return "Number";
				case 27: return t.yytext = JSON.stringify({
					name: t.yytext,
					type: "unescaped"
				}), "Symbol";
				case 28: return t.yytext = JSON.stringify({
					name: e.buildString("'", t.yytext),
					type: "single-quoted"
				}), "Symbol";
				case 29: return t.yytext = JSON.stringify(e.buildString("\"", t.yytext)), "String";
				case 30: return "%";
				case 31: return "?";
				case 32: return ":";
				case 33: return "EndOfExpression";
			}
		}, e.rules = [
			/^(?:\*)/,
			/^(?:\/)/,
			/^(?:-)/,
			/^(?:\+)/,
			/^(?:\^)/,
			/^(?:\()/,
			/^(?:\))/,
			/^(?:\,)/,
			/^(?:==)/,
			/^(?:\!=)/,
			/^(?:\~=)/,
			/^(?:>=)/,
			/^(?:<=)/,
			/^(?:<)/,
			/^(?:>)/,
			/^(?:not\s+in[^\w])/,
			/^(?:and[^\w])/,
			/^(?:or[^\w])/,
			/^(?:not[^\w])/,
			/^(?:in[^\w])/,
			/^(?:of[^\w])/,
			/^(?:if[^\w])/,
			/^(?:then[^\w])/,
			/^(?:else[^\w])/,
			/^(?:mod[^\w])/,
			/^(?:\s+)/,
			/^(?:[0-9]+(?:\.[0-9]+)?(?![0-9\.]))/,
			/^(?:[a-zA-Z$_][\.a-zA-Z0-9$_]*)/,
			/^(?:'(?:\\'|\\\\|[^'\\])*')/,
			/^(?:"(?:\\"|\\\\|[^"\\])*")/,
			/^(?:\%)/,
			/^(?:\?)/,
			/^(?::)/,
			/^(?:$)/
		], e.conditions = { INITIAL: {
			rules: [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				26,
				27,
				28,
				29,
				30,
				31,
				32,
				33
			],
			inclusive: !0
		} }, e;
	})();
	function t() {
		this.yy = {};
	}
	return t.prototype = e, e.Parser = t, new t();
})(), je = Ae;
Ae.Parser;
var Me = class extends ReferenceError {
	I18N_STRING = "UNKNOWN_FUNCTION";
	constructor(e) {
		super(`Unknown function: ${e}()`), this.functionName = e;
	}
}, Ne = class extends ReferenceError {
	I18N_STRING = "UNKNOWN_PROPERTY";
	constructor(e) {
		super(`Property “${e}” does not exist.`), this.propertyName = e;
	}
}, Pe = class extends TypeError {
	I18N_STRING = "UNKNOWN_OPTION";
	constructor(e) {
		super(`Unknown option: ${e}`), this.keyName = e;
	}
}, k = class extends TypeError {
	I18N_STRING = "UNEXPECTED_TYPE";
	constructor(e, t) {
		super(`Expected a ${e}, but got a ${t} instead.`), this.expectedType = e, this.recievedType = t;
	}
}, A = class extends Error {
	I18N_STRING = "INTERNAL";
	constructor(e) {
		super(e);
	}
};
function j(e, t) {
	return typeof e == "object" || typeof e == "function" ? Object.prototype.hasOwnProperty.call(e, t) : !1;
}
function Fe(e, t) {
	return (e % t + t) % t;
}
function Ie(e) {
	if (typeof e != "object") return e;
	if (e instanceof Number || e instanceof String || e instanceof Boolean) return e.valueOf();
}
function M(e) {
	return Array.isArray(e) && e.length === 1 && (e = e[0]), Ie(e);
}
function N(e) {
	return e = M(e), e === void 0 ? "undefined" : e === null ? "null" : e === !0 ? "true" : e === !1 ? "false" : typeof e == "number" ? "number" : typeof e == "string" ? "text" : typeof e != "object" && typeof e != "function" ? "unknown type" : Array.isArray(e) ? "list" : "object";
}
function P(e) {
	if (e = M(e), typeof e == "number") return e;
	throw new k("number", N(e));
}
function Le(e) {
	if (e = M(e), typeof e == "string") return e;
	throw new k("text", N(e));
}
function F(e) {
	if (e = M(e), typeof e == "string" || typeof e == "number") return e;
	throw new k("text or number", N(e));
}
function Re(e) {
	if (e = M(e), typeof e == "boolean") return e;
	throw new k("logical value (“true” or “false”)", N(e));
}
function I(e) {
	if (e == null) throw new k("list", N(e));
	return Array.isArray(e) ? e : [e];
}
function L(e) {
	let t = [...e], n = [];
	for (; t.length;) {
		let e = t.pop();
		Array.isArray(e) ? t.push(...e) : n.push(e);
	}
	return n.reverse();
}
var ze = {
	isfn(e, t) {
		return j(e, t) && typeof e[t] == "function";
	},
	unknown(e) {
		throw new Me(e);
	},
	coerceArray: I,
	coerceNumber: P,
	coerceNumberOrString: F,
	coerceBoolean: Re,
	isSubset(e, t) {
		let n = I(e), r = I(t);
		return n.every((e) => r.includes(e));
	},
	warnDeprecated: (function() {
		let e = {
			ternary: 0,
			modulo: 0
		};
		return (t, n) => {
			switch (t) {
				case "ternary":
					if (e.ternary++ >= 3) break;
					console.warn("The use of ? and : as conditional operators has been deprecated in Filtrex v3 in favor of the if..then..else ternary operator. See issue #34 for more information.");
					break;
				case "modulo":
					if (e.modulo++ >= 3) break;
					console.warn("The use of '%' as a modulo operator has been deprecated in Filtrex v3 in favor of the 'mod' operator. You can use it like this: '3 mod 2 == 1'. See issue #48 for more information.");
					break;
			}
			return n;
		};
	})(),
	buildString(e, t) {
		e = String(e)[0], t = String(t);
		let n = "";
		if (t[0] !== e || t[t.length - 1] !== e) throw new A("Unexpected internal error: String literal doesn't begin/end with the right quotation mark.");
		for (let r = 1; r < t.length - 1; r++) if (t[r] === "\\") {
			if (r++, r >= t.length - 1) throw new A("Unexpected internal error: Unescaped backslash at the end of string literal.");
			if (t[r] === "\\") n += "\\";
			else if (t[r] === e) n += e;
			else throw new A(`Unexpected internal error: Invalid escaped character in string literal: ${t[r]}`);
		} else if (t[r] === e) throw new A("Unexpected internal error: String literal contains unescaped quotation mark.");
		else n += t[r];
		return n;
	},
	reduceRelation(e) {
		let t = [], n = [], r = L([e[0]]).join(""), i = 0;
		for (let a = 1; a < e.length - 1; a += 2) {
			let o = L([e[a + 1]]).join(""), s = `tmp${i++}`;
			n.push(`ops["${e[a]}"](${r}, ${s} = ${o})`), r = s, t.push(s);
		}
		return `(function(){ var ${t.join(", ")}; return ${n.join(" && ")};})()`;
	}
};
je.yy = Object.create(ze);
function Be(e, t) {
	if (arguments.length > 2) throw TypeError("Too many arguments.");
	t = typeof t == "object" ? t : {};
	let n = [
		"extraFunctions",
		"constants",
		"customProp",
		"operators"
	], { extraFunctions: r, constants: i, customProp: a, operators: o } = t;
	for (let e of Object.keys(t)) if (!n.includes(e)) throw new Pe(e);
	let s = {
		abs: Math.abs,
		ceil: Math.ceil,
		floor: Math.floor,
		log: Math.log,
		log2: Math.log2,
		log10: Math.log10,
		max: Math.max,
		min: Math.min,
		round: Math.round,
		sqrt: Math.sqrt,
		exists: (e) => e != null,
		empty: (e) => e == null || e === "" || Array.isArray(e) && e.length === 0
	};
	if (r) for (let e of Object.keys(r)) s[e] = r[e];
	let c = {
		"+": (e, t) => F(e) + F(t),
		"-": (e, t) => t === void 0 ? -P(e) : P(e) - P(t),
		"*": (e, t) => P(e) * P(t),
		"/": (e, t) => P(e) / P(t),
		"^": (e, t) => P(e) ** +P(t),
		mod: (e, t) => Fe(P(e), P(t)),
		"==": (e, t) => e === t,
		"!=": (e, t) => e !== t,
		"<": (e, t) => P(e) < P(t),
		"<=": (e, t) => P(e) <= P(t),
		">=": (e, t) => P(e) >= P(t),
		">": (e, t) => P(e) > P(t),
		"~=": (e, t) => RegExp(Le(t)).test(Le(e))
	};
	if (o) for (let e of Object.keys(o)) c[e] = o[e];
	o = c, i ??= {};
	let l = L(je.parse(e));
	l.unshift("return "), l.push(";");
	function u(e, t, n) {
		if (j(t ?? {}, e)) return t[e];
		throw new Ne(e);
	}
	function d(e) {
		return function(t) {
			if (j(e ?? {}, t)) return e[t];
			throw new Ne(t);
		};
	}
	typeof a == "function" && (u = (e, t, n) => a(e, d(t), t, n));
	function f(e) {
		return function(t) {
			let { name: n } = t;
			var r = [...arguments].slice(1);
			if (j(e, n) && typeof e[n] == "function") return e[n](...r);
			throw new Me(n);
		};
	}
	function p(e, t) {
		let { name: n, type: r } = e;
		return r === "unescaped" && j(i, n) ? i[n] : u(n, t, r);
	}
	let m = Function("call", "ops", "std", "prop", "data", l.join(""));
	return function(e) {
		try {
			return m(f(s), o, ze, p, e);
		} catch (e) {
			return e;
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-google-recaptcha-v3@1.11.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js
p();
var R = function() {
	return R = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, R.apply(this, arguments);
}, Ve, He = function(e) {
	var t;
	e ? function(e) {
		if (e) for (; e.lastChild;) e.lastChild.remove();
	}(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Ue = function(e, t) {
	He(t), window.___grecaptcha_cfg = void 0;
	var n = document.querySelector("#" + e);
	n && n.remove(), function() {
		var e = document.querySelector("script[src^=\"https://www.gstatic.com/recaptcha/releases\"]");
		e && e.remove();
	}();
}, We = function(e) {
	var t = e.render, n = e.onLoadCallbackName, r = e.language, i = e.onLoad, a = e.useRecaptchaNet, o = e.useEnterprise, s = e.scriptProps, c = s === void 0 ? {} : s, l = c.nonce, u = l === void 0 ? "" : l, d = c.defer, f = d !== void 0 && d, p = c.async, m = p !== void 0 && p, h = c.id, g = h === void 0 ? "" : h, _ = c.appendTo, v = g || "google-recaptcha-v3";
	if (function(e) {
		return !!document.querySelector("#" + e);
	}(v)) i();
	else {
		var y = function(e) {
			return "https://www." + (e.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (e.useEnterprise ? "enterprise.js" : "api.js");
		}({
			useEnterprise: o,
			useRecaptchaNet: a
		}), b = document.createElement("script");
		b.id = v, b.src = y + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), u && (b.nonce = u), b.defer = !!f, b.async = !!m, b.onload = i, (_ === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(b);
	}
}, z = function(e) {
	typeof process < "u" && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
	e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ve ||= {});
var B = l({ executeRecaptcha: function() {
	throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
B.Consumer;
function Ge(e) {
	var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, i = e.useRecaptchaNet, a = i !== void 0 && i, o = e.scriptProps, c = e.language, l = e.container, u = e.children, p = f(null), h = p[0], v = p[1], y = m(t);
	d((function() {
		if (t) {
			var e = o?.id || "google-recaptcha-v3", n = o?.onLoadCallbackName || "onRecaptchaLoadCallback";
			return window[n] = function() {
				var e = r ? window.grecaptcha.enterprise : window.grecaptcha, n = R({
					badge: "inline",
					size: "invisible",
					sitekey: t
				}, l?.parameters || {});
				y.current = e.render(l?.element, n);
			}, We({
				render: l?.element ? "explicit" : t,
				onLoadCallbackName: n,
				useEnterprise: r,
				useRecaptchaNet: a,
				scriptProps: o,
				language: c,
				onLoad: function() {
					if (window && window.grecaptcha) {
						var e = r ? window.grecaptcha.enterprise : window.grecaptcha;
						e.ready((function() {
							v(e);
						}));
					} else z("<GoogleRecaptchaProvider /> " + Ve.SCRIPT_NOT_AVAILABLE);
				},
				onError: function() {
					z("Error loading google recaptcha script");
				}
			}), function() {
				Ue(e, l?.element);
			};
		}
		z("<GoogleReCaptchaProvider /> recaptcha key not provided");
	}), [
		r,
		a,
		JSON.stringify(o),
		JSON.stringify(l?.parameters),
		c,
		t,
		l?.element
	]);
	var b = s((function(e) {
		if (!h || !h.execute) throw Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
		return h.execute(y.current, { action: e });
	}), [h, y]), x = _((function() {
		return {
			executeRecaptcha: h ? b : void 0,
			container: l?.element
		};
	}), [
		b,
		h,
		l?.element
	]);
	return g.createElement(B.Provider, { value: x }, u);
}
var Ke = function() {
	return v(B);
};
function qe(e, t) {
	return e(t = { exports: {} }, t.exports), t.exports;
}
var V = typeof Symbol == "function" && Symbol.for, Je = V ? Symbol.for("react.element") : 60103, Ye = V ? Symbol.for("react.portal") : 60106, H = V ? Symbol.for("react.fragment") : 60107, U = V ? Symbol.for("react.strict_mode") : 60108, W = V ? Symbol.for("react.profiler") : 60114, G = V ? Symbol.for("react.provider") : 60109, K = V ? Symbol.for("react.context") : 60110, Xe = V ? Symbol.for("react.async_mode") : 60111, q = V ? Symbol.for("react.concurrent_mode") : 60111, J = V ? Symbol.for("react.forward_ref") : 60112, Y = V ? Symbol.for("react.suspense") : 60113, Ze = V ? Symbol.for("react.suspense_list") : 60120, X = V ? Symbol.for("react.memo") : 60115, Z = V ? Symbol.for("react.lazy") : 60116, Qe = V ? Symbol.for("react.block") : 60121, $e = V ? Symbol.for("react.fundamental") : 60117, et = V ? Symbol.for("react.responder") : 60118, tt = V ? Symbol.for("react.scope") : 60119;
function Q(e) {
	if (typeof e == "object" && e) {
		var t = e.$$typeof;
		switch (t) {
			case Je: switch (e = e.type) {
				case Xe:
				case q:
				case H:
				case W:
				case U:
				case Y: return e;
				default: switch (e &&= e.$$typeof) {
					case K:
					case J:
					case Z:
					case X:
					case G: return e;
					default: return t;
				}
			}
			case Ye: return t;
		}
	}
}
function nt(e) {
	return Q(e) === q;
}
var rt = {
	AsyncMode: Xe,
	ConcurrentMode: q,
	ContextConsumer: K,
	ContextProvider: G,
	Element: Je,
	ForwardRef: J,
	Fragment: H,
	Lazy: Z,
	Memo: X,
	Portal: Ye,
	Profiler: W,
	StrictMode: U,
	Suspense: Y,
	isAsyncMode: function(e) {
		return nt(e) || Q(e) === Xe;
	},
	isConcurrentMode: nt,
	isContextConsumer: function(e) {
		return Q(e) === K;
	},
	isContextProvider: function(e) {
		return Q(e) === G;
	},
	isElement: function(e) {
		return typeof e == "object" && !!e && e.$$typeof === Je;
	},
	isForwardRef: function(e) {
		return Q(e) === J;
	},
	isFragment: function(e) {
		return Q(e) === H;
	},
	isLazy: function(e) {
		return Q(e) === Z;
	},
	isMemo: function(e) {
		return Q(e) === X;
	},
	isPortal: function(e) {
		return Q(e) === Ye;
	},
	isProfiler: function(e) {
		return Q(e) === W;
	},
	isStrictMode: function(e) {
		return Q(e) === U;
	},
	isSuspense: function(e) {
		return Q(e) === Y;
	},
	isValidElementType: function(e) {
		return typeof e == "string" || typeof e == "function" || e === H || e === q || e === W || e === U || e === Y || e === Ze || typeof e == "object" && !!e && (e.$$typeof === Z || e.$$typeof === X || e.$$typeof === G || e.$$typeof === K || e.$$typeof === J || e.$$typeof === $e || e.$$typeof === et || e.$$typeof === tt || e.$$typeof === Qe);
	},
	typeOf: Q
}, $ = qe((function(e, t) {
	process.env.NODE_ENV !== "production" && function() {
		var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
		function b(e) {
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
		var x = l, S = u, C = c, w = s, T = n, E = d, D = i, ee = h, te = m, ne = r, re = o, ie = a, ae = f, oe = !1;
		function O(e) {
			return b(e) === u;
		}
		t.AsyncMode = x, t.ConcurrentMode = S, t.ContextConsumer = C, t.ContextProvider = w, t.Element = T, t.ForwardRef = E, t.Fragment = D, t.Lazy = ee, t.Memo = te, t.Portal = ne, t.Profiler = re, t.StrictMode = ie, t.Suspense = ae, t.isAsyncMode = function(e) {
			return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(e) || b(e) === l;
		}, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
			return b(e) === c;
		}, t.isContextProvider = function(e) {
			return b(e) === s;
		}, t.isElement = function(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}, t.isForwardRef = function(e) {
			return b(e) === d;
		}, t.isFragment = function(e) {
			return b(e) === i;
		}, t.isLazy = function(e) {
			return b(e) === h;
		}, t.isMemo = function(e) {
			return b(e) === m;
		}, t.isPortal = function(e) {
			return b(e) === r;
		}, t.isProfiler = function(e) {
			return b(e) === o;
		}, t.isStrictMode = function(e) {
			return b(e) === a;
		}, t.isSuspense = function(e) {
			return b(e) === f;
		}, t.isValidElementType = function(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}, t.typeOf = b;
	}();
})), it = ($.AsyncMode, $.ConcurrentMode, $.ContextConsumer, $.ContextProvider, $.Element, $.ForwardRef, $.Fragment, $.Lazy, $.Memo, $.Portal, $.Profiler, $.StrictMode, $.Suspense, $.isAsyncMode, $.isConcurrentMode, $.isContextConsumer, $.isContextProvider, $.isElement, $.isForwardRef, $.isFragment, $.isLazy, $.isMemo, $.isPortal, $.isProfiler, $.isStrictMode, $.isSuspense, $.isValidElementType, $.typeOf, qe((function(e) {
	process.env.NODE_ENV === "production" ? e.exports = rt : e.exports = $;
}))), at = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
}, ot = {};
ot[it.ForwardRef] = {
	$$typeof: !0,
	render: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0
}, ot[it.Memo] = at, Object.defineProperty, Object.getOwnPropertyNames, Object.getOwnPropertySymbols, Object.getOwnPropertyDescriptor, Object.getPrototypeOf, Object.prototype;
//#endregion
//#region src/features/forms/utils.ts
function st() {
	let e = new URLSearchParams(window.location.search);
	return Object.fromEntries(e.entries());
}
function ct(e = "form:") {
	let t = document.querySelectorAll(`meta[property^="${e}"]`);
	return Array.from(t).reduce((t, n) => {
		let r = n.getAttribute("property");
		if (!r) return t;
		let i = r?.replace(e, "").toLowerCase();
		return t[i] = n.content, t;
	}, {});
}
function lt(e) {
	return ae(e.reduce((e, t) => {
		if (t.type === "error") return e;
		let n = (() => {
			switch (t.type) {
				case "select":
				case "input":
				case "textarea":
					let e = ie();
					return e = t.required === "true" ? e.check(ce(2, "This field is required.")) : O(e), t.type !== "select" && t.validation && (e = e.check(ee(new RegExp(t.validation), t.message ?? "Invalid format."))), e;
				case "checkbox": return t.required === "true" ? re(!0, { error: () => ({ message: t.message ?? "This field is required" }) }) : O(oe());
				default: return O(se());
			}
		})();
		return {
			...e,
			[t.name]: n
		};
	}, {})).check((t) => {
		t.issues = t.issues.filter((n) => {
			let r = n.path?.[0], i = e.find((e) => e.name === r);
			return i?.constraint ? Be(i.constraint)(t.value) : !0;
		});
	});
}
function ut(e) {
	let t = ct(), n = st(), [, r, i] = new URL(location.href).pathname.split("/");
	return e.reduce((e, r) => {
		if (r.type === "error" || r.type === "submiterror" || r.type === "submit" || r.type === "success") return e;
		let i = r.autofill !== "false", a = r.name.toLowerCase();
		return {
			...e,
			[r.name]: (i ? e[r.name] : void 0) || (i ? t[a] : void 0) || (i ? n[r.name] : void 0) || r.value || (r.type === "checkbox" ? !1 : "")
		};
	}, {
		countryCode: r === "global" ? void 0 : r,
		languageCode: i
	});
}
//#endregion
//#region src/features/forms/blocks/form.tsx
function dt({ headline: e, subHeadline: t, link: n, picture: r, description: i, postUrl: a, fields: o, recaptcha: s }) {
	let { executeRecaptcha: c } = Ke(), l = lt(o), u = ut(o), d = w({
		mode: "all",
		resolver: ke(l),
		defaultValues: u
	}), f = d.watch(), p = async (e) => {
		if (a) try {
			let t = await fetch(a, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...e,
					recaptchaToken: s ? await c?.("submit_form") : void 0
				})
			});
			if (!t.ok) {
				let e = await t.json();
				d.setError("root", {
					type: "server",
					message: e?.message || "Submission failed"
				});
				return;
			}
			return d.reset(), t.json();
		} catch (e) {
			e instanceof Error && d.setError("root", {
				type: "server",
				message: e?.message || "Submission failed"
			});
		}
	};
	return /* @__PURE__ */ h(ne, {
		...d,
		children: [/* @__PURE__ */ h("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ h("div", {
				className: "space-y-20",
				children: [/* @__PURE__ */ h(b, {
					headline: e,
					subHeadline: t,
					link: n
				}), /* @__PURE__ */ h("div", {
					className: "grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mx-[150px]",
					children: /* @__PURE__ */ h("p", {
						className: "text-h5 text-gray-1",
						children: i
					})
				})]
			}), /* @__PURE__ */ h("div", {
				className: "grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mx-[150px]",
				children: [/* @__PURE__ */ h("form", {
					onSubmit: d.handleSubmit(p),
					className: "flex flex-col gap-6",
					children: o.map((e) => {
						let t = !0;
						return e.constraint && (t = Be(e.constraint.replaceAll("'", "\""))(f)), /* @__PURE__ */ h(Ee, {
							form: d,
							show: t,
							...e
						}, e.name);
					})
				}), r && /* @__PURE__ */ h(S, {
					...r,
					className: "hidden xl:block ml-auto"
				})]
			})]
		}), /* @__PURE__ */ h("div", { id: "recaptcha_badge" })]
	});
}
function ft({ siteKey: e, ...t }) {
	let n = /* @__PURE__ */ h(dt, {
		...t,
		recaptcha: !!e
	});
	return e ? /* @__PURE__ */ h(Ge, {
		reCaptchaKey: e,
		language: "en",
		container: {
			element: "recaptcha_badge",
			parameters: { badge: "bottomleft" }
		},
		children: n
	}) : n;
}
//#endregion
//#region src/blocks/form/form.tsx
async function pt(i) {
	let [a, o, s, c, l, u, d, f] = Array.from(i.children), [, p, m] = Array.from(d.children);
	return {
		...n(a.querySelector("h1, h2, h3, h4, h5, h6"), o.textContent, s.querySelector("a")),
		description: t(c.textContent),
		picture: e(l.querySelector("picture")),
		postUrl: t(u.textContent),
		siteKey: r(f?.textContent),
		fields: t(p.textContent) === "object" ? JSON.parse(m?.textContent ?? "[]") : await fetch(m?.textContent ?? "").then(async (e) => (await e.json()).data)
	};
}
async function mt(e) {
	let t = await pt(e);
	c(e).render(/* @__PURE__ */ h(ft, { ...t }));
}
//#endregion
export { mt as default };

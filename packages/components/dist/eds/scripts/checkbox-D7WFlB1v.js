import { C as e, r as t } from "./utils-Cw5qLqcS.js";
import { $ as n, Ot as r, Tt as i, at as a, bt as o, ft as s, ht as c, nt as l } from "./react-w7ldCLEn.js";
import { _ as u, f as d, g as f, i as p, l as m } from "./es2015-CAHZSTi-.js";
import { p as h } from "./dist-6W7P9DyX.js";
import { o as g } from "./dist-BeZMvV7F.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-checkbox@1.3.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_a9bfe74df417688e01ae6068318bf0dd/node_modules/@radix-ui/react-checkbox/dist/index.mjs
s();
var _ = "Checkbox", [v, y] = f(_), [b, x] = v(_);
function S(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: s, name: u, onCheckedChange: f, required: p, value: m = "on", internal_do_not_use_render: h } = e, [g, v] = d({
		prop: n,
		defaultProp: i ?? !1,
		onChange: f,
		caller: _
	}), [y, x] = o(null), [S, C] = o(null), w = c(!1), T = y ? !!s || !!y.closest("form") : !0, E = {
		checked: g,
		disabled: a,
		setChecked: v,
		control: y,
		setControl: x,
		name: u,
		form: s,
		value: m,
		hasConsumerStoppedPropagationRef: w,
		required: p,
		defaultChecked: j(i) ? !1 : i,
		isFormControl: T,
		bubbleInput: S,
		setBubbleInput: C
	};
	return /* @__PURE__ */ l(b, {
		scope: t,
		...E,
		children: A(h) ? h(E) : r
	});
}
var C = "CheckboxTrigger", w = a(({ __scopeCheckbox: t, onKeyDown: n, onClick: r, ...a }, o) => {
	let { control: s, value: d, disabled: f, checked: p, required: h, setControl: g, setChecked: _, hasConsumerStoppedPropagationRef: v, isFormControl: y, bubbleInput: b } = x(C, t), S = e(o, g), w = c(p);
	return i(() => {
		let e = s?.form;
		if (e) {
			let t = () => _(w.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [s, _]), /* @__PURE__ */ l(m.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": j(p) ? "mixed" : p,
		"aria-required": h,
		"data-state": M(p),
		"data-disabled": f ? "" : void 0,
		disabled: f,
		value: d,
		...a,
		ref: S,
		onKeyDown: u(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: u(r, (e) => {
			_((e) => j(e) ? !0 : !e), b && y && (v.current = e.isPropagationStopped(), v.current || e.stopPropagation());
		})
	});
});
w.displayName = C;
var T = a((e, t) => {
	let { __scopeCheckbox: n, name: i, checked: a, defaultChecked: o, required: s, disabled: c, value: u, onCheckedChange: d, form: f, ...p } = e;
	return /* @__PURE__ */ l(S, {
		__scopeCheckbox: n,
		checked: a,
		defaultChecked: o,
		disabled: c,
		required: s,
		onCheckedChange: d,
		name: i,
		form: f,
		value: u,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ l(r, { children: [/* @__PURE__ */ l(w, {
			...p,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ l(k, { __scopeCheckbox: n })] })
	});
});
T.displayName = _;
var E = "CheckboxIndicator", D = a((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = x(E, n);
	return /* @__PURE__ */ l(p, {
		present: r || j(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ l(m.span, {
			"data-state": M(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
D.displayName = E;
var O = "CheckboxBubbleInput", k = a(({ __scopeCheckbox: t, ...n }, r) => {
	let { control: a, hasConsumerStoppedPropagationRef: o, checked: s, defaultChecked: u, required: d, disabled: f, name: p, value: _, form: v, bubbleInput: y, setBubbleInput: b } = x(O, t), S = e(r, b), C = h(s), w = g(a);
	i(() => {
		let e = y;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !o.current;
		if (C !== s && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = j(s), n.call(e, j(s) ? !1 : s), e.dispatchEvent(t);
		}
	}, [
		y,
		C,
		s,
		o
	]);
	let T = c(j(s) ? !1 : s);
	return /* @__PURE__ */ l(m.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: u ?? T.current,
		required: d,
		disabled: f,
		name: p,
		value: _,
		form: v,
		...n,
		tabIndex: -1,
		ref: S,
		style: {
			...n.style,
			...w,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
k.displayName = O;
function A(e) {
	return typeof e == "function";
}
function j(e) {
	return e === "indeterminate";
}
function M(e) {
	return j(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region src/components/ui/checkbox.tsx
s();
function N({ className: e, ...r }) {
	return /* @__PURE__ */ l(T, {
		"data-slot": "checkbox",
		className: t("peer shrink-0 size-6 bg-white shadow-gray-15 aria-invalid:shadow-light-red data-[state=unchecked]:shadow-[inset_0_0_0_1px] data-[state=unchecked]:hover:not-disabled:shadow-[inset_0_0_0_2px] data-[state=unchecked]:active:bg-gray-4 data-[state=checked]:bg-yellow data-[state=checked]:hover:bg-hovered data-[state=checked]:active:bg-pressed disabled:cursor-not-allowed disabled:shadow-gray-3 data-[state=checked]:disabled:bg-gray-3 data-[state=unchecked]:disabled:bg-gray-4 outline-none focus-visible:ring-pressed focus-visible:ring-offset-2 focus-visible:ring-2", e),
		...r,
		children: /* @__PURE__ */ l(D, {
			"data-slot": "checkbox-indicator",
			className: "flex items-center justify-center text-current transition-none",
			children: /* @__PURE__ */ l(n, { className: "size-5" })
		})
	});
}
//#endregion
export { N as t };

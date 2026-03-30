import { C as e, r as t } from "./utils-kL9Kd3j1.js";
import { Et as n, et as r, gt as i, kt as a, ot as o, pt as s, rt as c, xt as l } from "./react-DLNUXPF9.js";
import { a as u, n as d, r as f, s as p, u as m } from "./dist-CeBxUC6o.js";
import { o as h } from "./dist-CUiAlu8h.js";
import { m as g } from "./dist-B9_sdD5H.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-checkbox@1.3.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_a9bfe74df417688e01ae6068318bf0dd/node_modules/@radix-ui/react-checkbox/dist/index.mjs
s();
var _ = "Checkbox", [v, y] = m(_), [b, x] = v(_);
function S(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: a, disabled: o, form: s, name: d, onCheckedChange: f, required: p, value: m = "on", internal_do_not_use_render: h } = e, [g, v] = u({
		prop: n,
		defaultProp: a ?? !1,
		onChange: f,
		caller: _
	}), [y, x] = l(null), [S, C] = l(null), w = i(!1), T = y ? !!s || !!y.closest("form") : !0, E = {
		checked: g,
		disabled: o,
		setChecked: v,
		control: y,
		setControl: x,
		name: d,
		form: s,
		value: m,
		hasConsumerStoppedPropagationRef: w,
		required: p,
		defaultChecked: j(a) ? !1 : a,
		isFormControl: T,
		bubbleInput: S,
		setBubbleInput: C
	};
	return /* @__PURE__ */ c(b, {
		scope: t,
		...E,
		children: A(h) ? h(E) : r
	});
}
var C = "CheckboxTrigger", w = o(({ __scopeCheckbox: t, onKeyDown: r, onClick: a, ...o }, s) => {
	let { control: l, value: u, disabled: d, checked: m, required: h, setControl: g, setChecked: _, hasConsumerStoppedPropagationRef: v, isFormControl: y, bubbleInput: b } = x(C, t), S = e(s, g), w = i(m);
	return n(() => {
		let e = l?.form;
		if (e) {
			let t = () => _(w.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [l, _]), /* @__PURE__ */ c(f.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": j(m) ? "mixed" : m,
		"aria-required": h,
		"data-state": M(m),
		"data-disabled": d ? "" : void 0,
		disabled: d,
		value: u,
		...o,
		ref: S,
		onKeyDown: p(r, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: p(a, (e) => {
			_((e) => j(e) ? !0 : !e), b && y && (v.current = e.isPropagationStopped(), v.current || e.stopPropagation());
		})
	});
});
w.displayName = C;
var T = o((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: o, required: s, disabled: l, value: u, onCheckedChange: d, form: f, ...p } = e;
	return /* @__PURE__ */ c(S, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: o,
		disabled: l,
		required: s,
		onCheckedChange: d,
		name: r,
		form: f,
		value: u,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ c(a, { children: [/* @__PURE__ */ c(w, {
			...p,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ c(k, { __scopeCheckbox: n })] })
	});
});
T.displayName = _;
var E = "CheckboxIndicator", D = o((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = x(E, n);
	return /* @__PURE__ */ c(d, {
		present: r || j(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ c(f.span, {
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
var O = "CheckboxBubbleInput", k = o(({ __scopeCheckbox: t, ...r }, a) => {
	let { control: o, hasConsumerStoppedPropagationRef: s, checked: l, defaultChecked: u, required: d, disabled: p, name: m, value: _, form: v, bubbleInput: y, setBubbleInput: b } = x(O, t), S = e(a, b), C = g(l), w = h(o);
	n(() => {
		let e = y;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !s.current;
		if (C !== l && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = j(l), n.call(e, j(l) ? !1 : l), e.dispatchEvent(t);
		}
	}, [
		y,
		C,
		l,
		s
	]);
	let T = i(j(l) ? !1 : l);
	return /* @__PURE__ */ c(f.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: u ?? T.current,
		required: d,
		disabled: p,
		name: m,
		value: _,
		form: v,
		...r,
		tabIndex: -1,
		ref: S,
		style: {
			...r.style,
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
function N({ className: e, ...n }) {
	return /* @__PURE__ */ c(T, {
		"data-slot": "checkbox",
		className: t("peer shrink-0 size-6 bg-white shadow-gray-15 aria-invalid:shadow-light-red data-[state=unchecked]:shadow-[inset_0_0_0_1px] data-[state=unchecked]:hover:not-disabled:shadow-[inset_0_0_0_2px] data-[state=unchecked]:active:bg-gray-4 data-[state=checked]:bg-yellow data-[state=checked]:hover:bg-hovered data-[state=checked]:active:bg-pressed disabled:cursor-not-allowed disabled:shadow-gray-3 data-[state=checked]:disabled:bg-gray-3 data-[state=unchecked]:disabled:bg-gray-4 outline-none focus-visible:ring-pressed focus-visible:ring-offset-2 focus-visible:ring-2", e),
		...n,
		children: /* @__PURE__ */ c(D, {
			"data-slot": "checkbox-indicator",
			className: "flex items-center justify-center text-current transition-none",
			children: /* @__PURE__ */ c(r, { className: "size-5" })
		})
	});
}
//#endregion
export { N as t };

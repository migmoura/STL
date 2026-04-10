import { x as e } from "./utils-Cw5qLqcS.js";
import { at as t, ft as n, nt as r } from "./react-w7ldCLEn.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.4_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_0243fb2db8a1fb85ca77b8d9e5c2d650/node_modules/@radix-ui/react-primitive/dist/index.mjs
n();
var i = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((n, i) => {
	let a = e(`Primitive.${i}`), o = t((e, t) => {
		let { asChild: n, ...o } = e, s = n ? a : i;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ r(s, {
			...o,
			ref: t
		});
	});
	return o.displayName = `Primitive.${i}`, {
		...n,
		[i]: o
	};
}, {});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-label@2.1.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_55fa612a976b7bdfbf4dcdd93d861aab/node_modules/@radix-ui/react-label/dist/index.mjs
n();
var a = "Label", o = t((e, t) => /* @__PURE__ */ r(i.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
o.displayName = a;
var s = o;
//#endregion
export { i as n, s as t };

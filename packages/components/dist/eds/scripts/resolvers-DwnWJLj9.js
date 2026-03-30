import { E as e, T as t } from "./schemas-IQyODXna.js";
//#region ../../node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.71.2_react@19.2.4_/node_modules/@hookform/resolvers/dist/resolvers.mjs
var n = (e, n, r) => {
	if (e && "reportValidity" in e) {
		let i = t(r, n);
		e.setCustomValidity(i && i.message || ""), e.reportValidity();
	}
}, r = (e, t) => {
	for (let r in t.fields) {
		let i = t.fields[r];
		i && i.ref && "reportValidity" in i.ref ? n(i.ref, r, e) : i && i.refs && i.refs.forEach((t) => n(t, r, e));
	}
}, i = (n, i) => {
	i.shouldUseNativeValidation && r(n, i);
	let o = {};
	for (let r in n) {
		let s = t(i.fields, r), c = Object.assign(n[r] || {}, { ref: s && s.ref });
		if (a(i.names || Object.keys(n), r)) {
			let n = Object.assign({}, t(o, r));
			e(n, "root", c), e(o, r, n);
		} else e(o, r, c);
	}
	return o;
}, a = (e, t) => {
	let n = o(t);
	return e.some((e) => o(e).match(`^${n}\\.\\d+`));
};
function o(e) {
	return e.replace(/\]|\[/g, "");
}
//#endregion
export { i as n, r as t };

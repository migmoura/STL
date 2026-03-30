import { r as e, v as t } from "../../scripts/utils-kL9Kd3j1.js";
import { C as n, ot as r, pt as i, rt as a } from "../../scripts/react-DLNUXPF9.js";
//#region src/components/ui/card.tsx
i();
var o = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("rounded-xl border bg-card text-card-foreground shadow", t),
	...n
}));
o.displayName = "Card";
var s = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("flex flex-col space-y-1.5 p-6", t),
	...n
}));
s.displayName = "CardHeader";
var c = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("font-semibold leading-none tracking-tight", t),
	...n
}));
c.displayName = "CardTitle";
var l = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("text-sm text-muted-foreground", t),
	...n
}));
l.displayName = "CardDescription";
var u = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("p-6 pt-0", t),
	...n
}));
u.displayName = "CardContent";
var d = r(({ className: t, ...n }, r) => /* @__PURE__ */ a("div", {
	ref: r,
	className: e("flex items-center p-6 pt-0", t),
	...n
}));
d.displayName = "CardFooter";
//#endregion
//#region src/blocks/cards/cards.tsx
function f(e) {
	let [r, i, l] = e.children, f = r.textContent?.trim(), p = i.textContent?.trim(), m = l.textContent?.trim();
	n(e).render(/* @__PURE__ */ a(o, { children: [
		/* @__PURE__ */ a(s, { children: /* @__PURE__ */ a(c, { children: f }) }),
		/* @__PURE__ */ a(u, { children: p }),
		/* @__PURE__ */ a(d, { children: /* @__PURE__ */ a(t, { children: m }) })
	] }));
}
//#endregion
export { f as default };

import { C as e } from "./utils-kL9Kd3j1.js";
import { Dt as t, Tt as n, dt as r, pt as i, rt as a } from "./react-DLNUXPF9.js";
import { c as o, u as s } from "./dist-CeBxUC6o.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_161926fa2509d0b7370b60b8bb4eb8b0/node_modules/@radix-ui/react-collection/dist/index.mjs
i();
function c(t) {
	let n = t + "CollectionProvider", [i, c] = s(n), [l, u] = i(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: t, children: n } = e, i = r.useRef(null), o = r.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ a(l, {
			scope: t,
			itemMap: o,
			collectionRef: i,
			children: n
		});
	};
	d.displayName = n;
	let f = t + "CollectionSlot", p = o(f), m = r.forwardRef((t, n) => {
		let { scope: r, children: i } = t;
		return /* @__PURE__ */ a(p, {
			ref: e(n, u(f, r).collectionRef),
			children: i
		});
	});
	m.displayName = f;
	let h = t + "CollectionItemSlot", g = "data-radix-collection-item", _ = o(h), v = r.forwardRef((t, n) => {
		let { scope: i, children: o, ...s } = t, c = r.useRef(null), l = e(n, c), d = u(h, i);
		return r.useEffect(() => (d.itemMap.set(c, {
			ref: c,
			...s
		}), () => void d.itemMap.delete(c))), /* @__PURE__ */ a(_, {
			[g]: "",
			ref: l,
			children: o
		});
	});
	v.displayName = h;
	function y(e) {
		let n = u(t + "CollectionConsumer", e);
		return r.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: m,
			ItemSlot: v
		},
		y,
		c
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs
i();
var l = t(void 0);
function u(e) {
	let t = n(l);
	return e || t || "ltr";
}
//#endregion
export { c as n, u as t };

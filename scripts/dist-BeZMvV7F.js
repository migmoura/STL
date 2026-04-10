import { C as e } from "./utils-Cw5qLqcS.js";
import { Tt as t, _ as n, at as r, b as i, bt as a, ft as o, g as s, h as c, ht as l, m as u, nt as d, p as f, v as p, x as m, y as ee } from "./react-w7ldCLEn.js";
import { c as h, g, l as _, m as v } from "./es2015-CAHZSTi-.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_e05f2c19a58a99fddf374207b5e3778c/node_modules/@radix-ui/react-arrow/dist/index.mjs
o();
var y = "Arrow", b = r((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ d(_.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
	});
});
b.displayName = y;
var x = b;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-size/dist/index.mjs
o();
function S(e) {
	let [t, n] = a(void 0);
	return v(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_13e0521d8aea7ebfbfb8bee1fb615c05/node_modules/@radix-ui/react-popper/dist/index.mjs
o();
var C = "Popper", [w, T] = g(C), [E, D] = w(C), O = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = a(null);
	return /* @__PURE__ */ d(E, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
O.displayName = C;
var k = "PopperAnchor", A = r((n, r) => {
	let { __scopePopper: i, virtualRef: a, ...o } = n, s = D(k, i), c = l(null), u = e(r, c), f = l(null);
	return t(() => {
		let e = f.current;
		f.current = a?.current || c.current, e !== f.current && s.onAnchorChange(f.current);
	}), a ? null : /* @__PURE__ */ d(_.div, {
		...o,
		ref: u
	});
});
A.displayName = k;
var j = "PopperContent", [M, N] = w(j), P = r((t, r) => {
	let { __scopePopper: o, side: l = "bottom", sideOffset: g = 0, align: y = "center", alignOffset: b = 0, arrowPadding: x = 0, avoidCollisions: C = !0, collisionBoundary: w = [], collisionPadding: T = 0, sticky: E = "partial", hideWhenDetached: O = !1, updatePositionStrategy: k = "optimized", onPlaced: A, ...N } = t, P = D(j, o), [F, I] = a(null), L = e(r, (e) => I(e)), [V, H] = a(null), U = S(V), W = U?.width ?? 0, G = U?.height ?? 0, K = l + (y === "center" ? "" : "-" + y), te = typeof T == "number" ? T : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...T
	}, q = Array.isArray(w) ? w : [w], ne = q.length > 0, J = {
		padding: te,
		boundary: q.filter(R),
		altBoundary: ne
	}, { refs: re, floatingStyles: Y, placement: ie, isPositioned: X, middlewareData: Z } = i({
		strategy: "fixed",
		placement: K,
		whileElementsMounted: (...e) => m(...e, { animationFrame: k === "always" }),
		elements: { reference: P.anchor },
		middleware: [
			n({
				mainAxis: g + G,
				alignmentAxis: b
			}),
			C && p({
				mainAxis: !0,
				crossAxis: !1,
				limiter: E === "partial" ? s() : void 0,
				...J
			}),
			C && u({ ...J }),
			ee({
				...J,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			V && f({
				element: V,
				padding: x
			}),
			z({
				arrowWidth: W,
				arrowHeight: G
			}),
			O && c({
				strategy: "referenceHidden",
				...J
			})
		]
	}), [Q, ae] = B(ie), $ = h(A);
	v(() => {
		X && $?.();
	}, [X, $]);
	let oe = Z.arrow?.x, se = Z.arrow?.y, ce = Z.arrow?.centerOffset !== 0, [le, ue] = a();
	return v(() => {
		F && ue(window.getComputedStyle(F).zIndex);
	}, [F]), /* @__PURE__ */ d("div", {
		ref: re.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...Y,
			transform: X ? Y.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: le,
			"--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "),
			...Z.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ d(M, {
			scope: o,
			placedSide: Q,
			onArrowChange: H,
			arrowX: oe,
			arrowY: se,
			shouldHideArrow: ce,
			children: /* @__PURE__ */ d(_.div, {
				"data-side": Q,
				"data-align": ae,
				...N,
				ref: L,
				style: {
					...N.style,
					animation: X ? void 0 : "none"
				}
			})
		})
	});
});
P.displayName = j;
var F = "PopperArrow", I = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, L = r(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = N(F, n), a = I[i.placedSide];
	return /* @__PURE__ */ d("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ d(x, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
L.displayName = F;
function R(e) {
	return e !== null;
}
var z = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = B(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function B(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var V = O, H = A, U = P, W = L;
//#endregion
export { T as a, V as i, W as n, S as o, U as r, H as t };

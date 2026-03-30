import { C as e } from "./utils-kL9Kd3j1.js";
import { Dt as t, Et as n, Ot as r, Tt as i, bt as a, dt as o, gt as s, kt as c, mt as l, ot as u, pt as d, rt as f, st as p, wt as m, xt as h, yt as g } from "./react-DLNUXPF9.js";
import { i as _, o as v, r as y, s as b } from "./dist-CeBxUC6o.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
d();
function x(e) {
	let t = s(e);
	return n(() => {
		t.current = e;
	}), g(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
d();
function S(e, t = globalThis?.document) {
	let r = x(e);
	n(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [r, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14___3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
d();
var C = "DismissableLayer", w = "dismissableLayer.update", T = "dismissableLayer.pointerDownOutside", E = "dismissableLayer.focusOutside", D, O = t({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), k = u((t, r) => {
	let { disableOutsidePointerEvents: a = !1, onEscapeKeyDown: o, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d } = t, p = i(O), [m, g] = h(null), _ = m?.ownerDocument ?? globalThis?.document, [, v] = h({}), x = e(r, (e) => g(e)), C = Array.from(p.layers), [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), E = C.indexOf(T), k = m ? C.indexOf(m) : -1, ee = p.layersWithOutsidePointerEventsDisabled.size > 0, A = k >= E, j = te((e) => {
		let t = e.target, n = [...p.branches].some((e) => e.contains(t));
		!A || n || (s?.(e), l?.(e), e.defaultPrevented || u?.());
	}, _), M = ne((e) => {
		let t = e.target;
		[...p.branches].some((e) => e.contains(t)) || (c?.(e), l?.(e), e.defaultPrevented || u?.());
	}, _);
	return S((e) => {
		k === p.layers.size - 1 && (o?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	}, _), n(() => {
		if (m) return a && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (D = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), re(), () => {
			a && p.layersWithOutsidePointerEventsDisabled.size === 1 && (_.body.style.pointerEvents = D);
		};
	}, [
		m,
		_,
		a,
		p
	]), n(() => () => {
		m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), re());
	}, [m, p]), n(() => {
		let e = () => v({});
		return document.addEventListener(w, e), () => document.removeEventListener(w, e);
	}, []), /* @__PURE__ */ f(y.div, {
		...d,
		ref: x,
		style: {
			pointerEvents: ee ? A ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: b(t.onFocusCapture, M.onFocusCapture),
		onBlurCapture: b(t.onBlurCapture, M.onBlurCapture),
		onPointerDownCapture: b(t.onPointerDownCapture, j.onPointerDownCapture)
	});
});
k.displayName = C;
var ee = "DismissableLayerBranch", A = u((t, r) => {
	let a = i(O), o = s(null), c = e(r, o);
	return n(() => {
		let e = o.current;
		if (e) return a.branches.add(e), () => {
			a.branches.delete(e);
		};
	}, [a.branches]), /* @__PURE__ */ f(y.div, {
		...t,
		ref: c
	});
});
A.displayName = ee;
function te(e, t = globalThis?.document) {
	let r = x(e), i = s(!1), a = s(() => {});
	return n(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let n = function() {
					j(T, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = n, t.addEventListener("click", a.current, { once: !0 })) : n();
			} else t.removeEventListener("click", a.current);
			i.current = !1;
		}, n = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(n), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current);
		};
	}, [t, r]), { onPointerDownCapture: () => i.current = !0 };
}
function ne(e, t = globalThis?.document) {
	let r = x(e), i = s(!1);
	return n(() => {
		let e = (e) => {
			e.target && !i.current && j(E, r, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function re() {
	let e = new CustomEvent(w);
	document.dispatchEvent(e);
}
function j(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? _(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
d();
var M = "focusScope.autoFocusOnMount", N = "focusScope.autoFocusOnUnmount", ie = {
	bubbles: !1,
	cancelable: !0
}, ae = "FocusScope", oe = u((t, r) => {
	let { loop: i = !1, trapped: a = !1, onMountAutoFocus: o, onUnmountAutoFocus: c, ...l } = t, [u, d] = h(null), p = x(o), g = x(c), _ = s(null), v = e(r, (e) => d(e)), b = s({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	n(() => {
		if (a) {
			let e = function(e) {
				if (b.paused || !u) return;
				let t = e.target;
				u.contains(t) ? _.current = t : P(_.current, { select: !0 });
			}, t = function(e) {
				if (b.paused || !u) return;
				let t = e.relatedTarget;
				t !== null && (u.contains(t) || P(_.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && P(u);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return u && r.observe(u, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		a,
		u,
		b.paused
	]), n(() => {
		if (u) {
			pe.add(b);
			let e = document.activeElement;
			if (!u.contains(e)) {
				let t = new CustomEvent(M, ie);
				u.addEventListener(M, p), u.dispatchEvent(t), t.defaultPrevented || (se(ge(le(u)), { select: !0 }), document.activeElement === e && P(u));
			}
			return () => {
				u.removeEventListener(M, p), setTimeout(() => {
					let t = new CustomEvent(N, ie);
					u.addEventListener(N, g), u.dispatchEvent(t), t.defaultPrevented || P(e ?? document.body, { select: !0 }), u.removeEventListener(N, g), pe.remove(b);
				}, 0);
			};
		}
	}, [
		u,
		p,
		g,
		b
	]);
	let S = m((e) => {
		if (!i && !a || b.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [r, a] = ce(t);
			r && a ? !e.shiftKey && n === a ? (e.preventDefault(), i && P(r, { select: !0 })) : e.shiftKey && n === r && (e.preventDefault(), i && P(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		i,
		a,
		b.paused
	]);
	return /* @__PURE__ */ f(y.div, {
		tabIndex: -1,
		...l,
		ref: v,
		onKeyDown: S
	});
});
oe.displayName = ae;
function se(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (P(r, { select: t }), document.activeElement !== n) return;
}
function ce(e) {
	let t = le(e);
	return [ue(t, e), ue(t.reverse(), e)];
}
function le(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function ue(e, t) {
	for (let n of e) if (!de(n, { upTo: t })) return n;
}
function de(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function fe(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function P(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && fe(e) && t && e.select();
	}
}
var pe = me();
function me() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = he(e, t), e.unshift(t);
		},
		remove(t) {
			e = he(e, t), e[0]?.resume();
		}
	};
}
function he(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function ge(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_7668895bec2444446faa4e0f4eb5244b/node_modules/@radix-ui/react-portal/dist/index.mjs
d();
var _e = "Portal", ve = u((e, t) => {
	let { container: n, ...r } = e, [i, a] = h(!1);
	v(() => a(!0), []);
	let s = n || i && globalThis?.document?.body;
	return s ? o.createPortal(/* @__PURE__ */ f(y.div, {
		...r,
		ref: t
	}), s) : null;
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
ve.displayName = _e, d();
var F = 0;
function ye() {
	n(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? be()), document.body.insertAdjacentElement("beforeend", e[1] ?? be()), F++, () => {
			F === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), F--;
		};
	}, []);
}
function be() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var I = function() {
	return I = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, I.apply(this, arguments);
};
function xe(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Se(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var L = "right-scroll-bar-position", R = "width-before-scroll-bar", Ce = "with-scroll-bars-hidden", we = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function z(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
d();
function Te(e, t) {
	var n = h(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
d();
var Ee = typeof window < "u" ? a : n, De = /* @__PURE__ */ new WeakMap();
function Oe(e, t) {
	var n = Te(t || null, function(t) {
		return e.forEach(function(e) {
			return z(e, t);
		});
	});
	return Ee(function() {
		var t = De.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || z(e, null);
			}), i.forEach(function(e) {
				r.has(e) || z(e, a);
			});
		}
		De.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function ke(e) {
	return e;
}
function Ae(e, t) {
	t === void 0 && (t = ke);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function je(e) {
	e === void 0 && (e = {});
	var t = Ae(null);
	return t.options = I({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
d();
var B = function(e) {
	var t = e.sideCar, n = xe(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return r(i, I({}, n));
};
B.isSideCarExport = !0;
function Me(e, t) {
	return e.useMedium(t), B;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ne = je();
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/UI.js
d();
var V = function() {}, H = u(function(e, t) {
	var n = s(null), i = h({
		onScrollCapture: V,
		onWheelCapture: V,
		onTouchMoveCapture: V
	}), a = i[0], o = i[1], u = e.forwardProps, d = e.children, f = e.className, m = e.removeScrollBar, g = e.enabled, _ = e.shards, v = e.sideCar, y = e.noRelative, b = e.noIsolation, x = e.inert, S = e.allowPinchZoom, C = e.as, w = C === void 0 ? "div" : C, T = e.gapMode, E = xe(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), D = v, O = Oe([n, t]), k = I(I({}, E), a);
	return r(c, null, g && r(D, {
		sideCar: Ne,
		removeScrollBar: m,
		shards: _,
		noRelative: y,
		noIsolation: b,
		inert: x,
		setCallbacks: o,
		allowPinchZoom: !!S,
		lockRef: n,
		gapMode: T
	}), u ? l(p.only(d), I(I({}, k), { ref: O })) : r(w, I({}, k, {
		className: f,
		ref: O
	}), d));
});
H.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, H.classNames = {
	fullWidth: R,
	zeroRight: L
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Pe, Fe = function() {
	if (Pe) return Pe;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ie() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Fe();
	return t && e.setAttribute("nonce", t), e;
}
function Le(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Re(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var ze = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ie()) && (Le(t, n), Re(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/hook.js
d();
var Be = function() {
	var e = ze();
	return function(t, r) {
		n(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && r]);
	};
}, Ve = function() {
	var e = Be();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, He = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, U = function(e) {
	return parseInt(e || "", 10) || 0;
}, Ue = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		U(n),
		U(r),
		U(i)
	];
}, We = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return He;
	var t = Ue(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/component.js
d();
var Ge = Ve(), W = "data-scroll-locked", Ke = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Ce} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${W}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${L} {
    right: ${s}px ${r};
  }
  
  .${R} {
    margin-right: ${s}px ${r};
  }
  
  .${L} .${L} {
    right: 0 ${r};
  }
  
  .${R} .${R} {
    margin-right: 0 ${r};
  }
  
  body[${W}] {
    ${we}: ${s}px;
  }
`;
}, qe = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Je = function() {
	n(function() {
		return document.body.setAttribute(W, (qe() + 1).toString()), function() {
			var e = qe() - 1;
			e <= 0 ? document.body.removeAttribute(W) : document.body.setAttribute(W, e.toString());
		};
	}, []);
}, Ye = function(e) {
	var t = e.noRelative, n = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
	return Je(), r(Ge, { styles: Ke(g(function() {
		return We(a);
	}, [a]), !t, a, n ? "" : "!important") });
}, G = !1;
if (typeof window < "u") try {
	var K = Object.defineProperty({}, "passive", { get: function() {
		return G = !0, !0;
	} });
	window.addEventListener("test", K, K), window.removeEventListener("test", K, K);
} catch {
	G = !1;
}
var q = G ? { passive: !1 } : !1, Xe = function(e) {
	return e.tagName === "TEXTAREA";
}, Ze = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Xe(e) && n[t] === "visible");
}, Qe = function(e) {
	return Ze(e, "overflowY");
}, $e = function(e) {
	return Ze(e, "overflowX");
}, et = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), rt(e, r)) {
			var i = it(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, tt = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, nt = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, rt = function(e, t) {
	return e === "v" ? Qe(t) : $e(t);
}, it = function(e, t) {
	return e === "v" ? tt(t) : nt(t);
}, at = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ot = function(e, t, n, r, i) {
	var a = at(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = it(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && rt(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
d();
var J = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, st = function(e) {
	return [e.deltaX, e.deltaY];
}, ct = function(e) {
	return e && "current" in e ? e.current : e;
}, lt = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ut = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, dt = 0, Y = [];
function ft(e) {
	var t = s([]), i = s([0, 0]), a = s(), o = h(dt++)[0], l = h(Ve)[0], u = s(e);
	n(function() {
		u.current = e;
	}, [e]), n(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${o}`);
			var t = Se([e.lockRef.current], (e.shards || []).map(ct), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${o}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${o}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${o}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var d = m(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !u.current.allowPinchZoom;
		var n = J(e), r = i.current, o = "deltaX" in e ? e.deltaX : r[0] - n[0], s = "deltaY" in e ? e.deltaY : r[1] - n[1], c, l = e.target, d = Math.abs(o) > Math.abs(s) ? "h" : "v";
		if ("touches" in e && d === "h" && l.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === l || p.contains(l))) return !1;
		var m = et(d, l);
		if (!m) return !0;
		if (m ? c = d : (c = d === "v" ? "h" : "v", m = et(d, l)), !m) return !1;
		if (!a.current && "changedTouches" in e && (o || s) && (a.current = c), !c) return !0;
		var h = a.current || c;
		return ot(h, t, e, h === "h" ? o : s, !0);
	}, []), f = m(function(e) {
		var n = e;
		if (!(!Y.length || Y[Y.length - 1] !== l)) {
			var r = "deltaY" in n ? st(n) : J(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && lt(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (u.current.shards || []).map(ct).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? d(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), p = m(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: pt(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), g = m(function(e) {
		i.current = J(e), a.current = void 0;
	}, []), _ = m(function(t) {
		p(t.type, st(t), t.target, d(t, e.lockRef.current));
	}, []), v = m(function(t) {
		p(t.type, J(t), t.target, d(t, e.lockRef.current));
	}, []);
	n(function() {
		return Y.push(l), e.setCallbacks({
			onScrollCapture: _,
			onWheelCapture: _,
			onTouchMoveCapture: v
		}), document.addEventListener("wheel", f, q), document.addEventListener("touchmove", f, q), document.addEventListener("touchstart", g, q), function() {
			Y = Y.filter(function(e) {
				return e !== l;
			}), document.removeEventListener("wheel", f, q), document.removeEventListener("touchmove", f, q), document.removeEventListener("touchstart", g, q);
		};
	}, []);
	var y = e.removeScrollBar, b = e.inert;
	return r(c, null, b ? r(l, { styles: ut(o) }) : null, y ? r(Ye, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function pt(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var mt = Me(Ne, ft);
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/Combination.js
d();
var ht = u(function(e, t) {
	return r(H, I({}, e, {
		ref: t,
		sideCar: mt
	}));
});
ht.classNames = H.classNames;
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var gt = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Q = {}, $ = 0, _t = function(e) {
	return e && (e.host || _t(e.parentNode));
}, vt = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = _t(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, yt = function(e, t, n, r) {
	var i = vt(t, Array.isArray(e) ? e : [e]);
	Q[n] || (Q[n] = /* @__PURE__ */ new WeakMap());
	var a = Q[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (X.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				X.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Z.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), $++, function() {
		o.forEach(function(e) {
			var t = X.get(e) - 1, i = a.get(e) - 1;
			X.set(e, t), a.set(e, i), t || (Z.has(e) || e.removeAttribute(r), Z.delete(e)), i || e.removeAttribute(n);
		}), $--, $ || (X = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Q = {});
	};
}, bt = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || gt(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), yt(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
export { oe as a, ve as i, ht as n, k as o, ye as r, x as s, bt as t };

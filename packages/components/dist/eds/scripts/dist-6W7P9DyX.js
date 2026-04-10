import { C as e } from "./utils-Cw5qLqcS.js";
import { Ct as t, Et as n, Ot as r, Tt as i, at as a, bt as o, ft as s, ht as c, nt as l, rt as u, ut as d, vt as f, wt as p } from "./react-w7ldCLEn.js";
import { _ as m, a as h, c as g, d as _, f as v, g as y, l as b, m as x, n as S, o as C, p as w, r as T, s as E, t as D } from "./es2015-CAHZSTi-.js";
import { a as O, i as k, n as A, r as j, t as M } from "./dist-BeZMvV7F.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_161926fa2509d0b7370b60b8bb4eb8b0/node_modules/@radix-ui/react-collection/dist/index.mjs
s();
function N(t) {
	let n = t + "CollectionProvider", [r, i] = y(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: t, children: n } = e, r = d.useRef(null), i = d.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ l(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	s.displayName = n;
	let c = t + "CollectionSlot", u = _(c), f = d.forwardRef((t, n) => {
		let { scope: r, children: i } = t;
		return /* @__PURE__ */ l(u, {
			ref: e(n, o(c, r).collectionRef),
			children: i
		});
	});
	f.displayName = c;
	let p = t + "CollectionItemSlot", m = "data-radix-collection-item", h = _(p), g = d.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = d.useRef(null), c = e(n, s), u = o(p, r);
		return d.useEffect(() => (u.itemMap.set(s, {
			ref: s,
			...a
		}), () => void u.itemMap.delete(s))), /* @__PURE__ */ l(h, {
			[m]: "",
			ref: c,
			children: i
		});
	});
	g.displayName = p;
	function v(e) {
		let n = o(t + "CollectionConsumer", e);
		return d.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${m}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: f,
			ItemSlot: g
		},
		v,
		i
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs
s();
var P = n(void 0);
function ee(e) {
	let t = p(P);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs
function F(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-previous/dist/index.mjs
s();
function I(e) {
	let t = c({
		value: e,
		previous: e
	});
	return f(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
s();
var L = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), te = "VisuallyHidden", R = a((e, t) => /* @__PURE__ */ l(b.span, {
	...e,
	ref: t,
	style: {
		...L,
		...e.style
	}
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-select@2.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_53894a32562cb9eeb6aef8b357a4f4e3/node_modules/@radix-ui/react-select/dist/index.mjs
R.displayName = te, s();
var z = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], ne = [" ", "Enter"], B = "Select", [V, H, U] = N(B), [W, G] = y(B, [U, O]), K = O(), [re, q] = W(B), [ie, ae] = W(B), oe = (e) => {
	let { __scopeSelect: n, children: r, open: i, defaultOpen: a, onOpenChange: s, value: u, defaultValue: d, onValueChange: f, dir: p, name: m, autoComplete: h, disabled: g, required: _, form: y } = e, b = K(n), [x, S] = o(null), [C, T] = o(null), [E, D] = o(!1), O = ee(p), [A, j] = v({
		prop: i,
		defaultProp: a ?? !1,
		onChange: s,
		caller: B
	}), [M, N] = v({
		prop: u,
		defaultProp: d,
		onChange: f,
		caller: B
	}), P = c(null), F = x ? y || !!x.closest("form") : !0, [I, L] = o(/* @__PURE__ */ new Set()), te = Array.from(I).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ l(k, {
		...b,
		children: /* @__PURE__ */ l(re, {
			required: _,
			scope: n,
			trigger: x,
			onTriggerChange: S,
			valueNode: C,
			onValueNodeChange: T,
			valueNodeHasChildren: E,
			onValueNodeHasChildrenChange: D,
			contentId: w(),
			value: M,
			onValueChange: N,
			open: A,
			onOpenChange: j,
			dir: O,
			triggerPointerDownPosRef: P,
			disabled: g,
			children: [/* @__PURE__ */ l(V.Provider, {
				scope: n,
				children: /* @__PURE__ */ l(ie, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: t((e) => {
						L((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: t((e) => {
						L((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: r
				})
			}), F ? /* @__PURE__ */ l(Ye, {
				"aria-hidden": !0,
				required: _,
				tabIndex: -1,
				name: m,
				autoComplete: h,
				value: M,
				onChange: (e) => N(e.target.value),
				disabled: g,
				form: y,
				children: [M === void 0 ? /* @__PURE__ */ l("option", { value: "" }) : null, Array.from(I)]
			}, te) : null]
		})
	});
};
oe.displayName = B;
var J = "SelectTrigger", se = a((t, n) => {
	let { __scopeSelect: r, disabled: i = !1, ...a } = t, o = K(r), s = q(J, r), u = s.disabled || i, d = e(n, s.onTriggerChange), f = H(r), p = c("touch"), [h, g, _] = Ze((e) => {
		let t = f().filter((e) => !e.disabled), n = Qe(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), v = (e) => {
		u || (s.onOpenChange(!0), _()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ l(M, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ l(b.button, {
			type: "button",
			role: "combobox",
			"aria-controls": s.contentId,
			"aria-expanded": s.open,
			"aria-required": s.required,
			"aria-autocomplete": "none",
			dir: s.dir,
			"data-state": s.open ? "open" : "closed",
			disabled: u,
			"data-disabled": u ? "" : void 0,
			"data-placeholder": Xe(s.value) ? "" : void 0,
			...a,
			ref: d,
			onClick: m(a.onClick, (e) => {
				e.currentTarget.focus(), p.current !== "mouse" && v(e);
			}),
			onPointerDown: m(a.onPointerDown, (e) => {
				p.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (v(e), e.preventDefault());
			}),
			onKeyDown: m(a.onKeyDown, (e) => {
				let t = h.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && g(e.key), !(t && e.key === " ") && z.includes(e.key) && (v(), e.preventDefault());
			})
		})
	});
});
se.displayName = J;
var ce = "SelectValue", le = a((t, n) => {
	let { __scopeSelect: i, className: a, style: o, children: s, placeholder: c = "", ...u } = t, d = q(ce, i), { onValueNodeHasChildrenChange: f } = d, p = s !== void 0, m = e(n, d.onValueNodeChange);
	return x(() => {
		f(p);
	}, [f, p]), /* @__PURE__ */ l(b.span, {
		...u,
		ref: m,
		style: { pointerEvents: "none" },
		children: Xe(d.value) ? /* @__PURE__ */ l(r, { children: c }) : s
	});
});
le.displayName = ce;
var ue = "SelectIcon", de = a((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ l(b.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
de.displayName = ue;
var fe = "SelectPortal", pe = (e) => /* @__PURE__ */ l(h, {
	asChild: !0,
	...e
});
pe.displayName = fe;
var Y = "SelectContent", me = a((e, t) => {
	let n = q(Y, e.__scopeSelect), [r, i] = o();
	if (x(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? u(/* @__PURE__ */ l(he, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ l(V.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ l("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ l(ve, {
		...e,
		ref: t
	});
});
me.displayName = Y;
var X = 10, [he, Z] = W(Y), ge = "SelectContentImpl", _e = _("SelectContent.RemoveScroll"), ve = a((n, r) => {
	let { __scopeSelect: a, position: s = "item-aligned", onCloseAutoFocus: u, onEscapeKeyDown: d, onPointerDownOutside: f, side: p, sideOffset: h, align: g, alignOffset: _, arrowPadding: v, collisionBoundary: y, collisionPadding: b, sticky: x, hideWhenDetached: w, avoidCollisions: O, ...k } = n, A = q(Y, a), [j, M] = o(null), [N, P] = o(null), ee = e(r, (e) => M(e)), [F, I] = o(null), [L, te] = o(null), R = H(a), [z, ne] = o(!1), B = c(!1);
	i(() => {
		if (j) return D(j);
	}, [j]), T();
	let V = t((e) => {
		let [t, ...n] = R().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && N && (N.scrollTop = 0), n === r && N && (N.scrollTop = N.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [R, N]), U = t(() => V([F, j]), [
		V,
		F,
		j
	]);
	i(() => {
		z && U();
	}, [z, U]);
	let { onOpenChange: W, triggerPointerDownPosRef: G } = A;
	i(() => {
		if (j) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (G.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (G.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : j.contains(n.target) || W(!1), document.removeEventListener("pointermove", t), G.current = null;
			};
			return G.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		j,
		W,
		G
	]), i(() => {
		let e = () => W(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [W]);
	let [K, re] = Ze((e) => {
		let t = R().filter((e) => !e.disabled), n = Qe(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ie = t((e, t, n) => {
		let r = !B.current && !n;
		(A.value !== void 0 && A.value === t || r) && (I(e), r && (B.current = !0));
	}, [A.value]), ae = t(() => j?.focus(), [j]), oe = t((e, t, n) => {
		let r = !B.current && !n;
		(A.value !== void 0 && A.value === t || r) && te(e);
	}, [A.value]), J = s === "popper" ? Se : be, se = J === Se ? {
		side: p,
		sideOffset: h,
		align: g,
		alignOffset: _,
		arrowPadding: v,
		collisionBoundary: y,
		collisionPadding: b,
		sticky: x,
		hideWhenDetached: w,
		avoidCollisions: O
	} : {};
	return /* @__PURE__ */ l(he, {
		scope: a,
		content: j,
		viewport: N,
		onViewportChange: P,
		itemRefCallback: ie,
		selectedItem: F,
		onItemLeave: ae,
		itemTextRefCallback: oe,
		focusSelectedItem: U,
		selectedItemText: L,
		position: s,
		isPositioned: z,
		searchRef: K,
		children: /* @__PURE__ */ l(S, {
			as: _e,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ l(C, {
				asChild: !0,
				trapped: A.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: m(u, (e) => {
					A.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ l(E, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: d,
					onPointerDownOutside: f,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => A.onOpenChange(!1),
					children: /* @__PURE__ */ l(J, {
						role: "listbox",
						id: A.contentId,
						"data-state": A.open ? "open" : "closed",
						dir: A.dir,
						onContextMenu: (e) => e.preventDefault(),
						...k,
						...se,
						onPlaced: () => ne(!0),
						ref: ee,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...k.style
						},
						onKeyDown: m(k.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && re(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = R().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => V(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
ve.displayName = ge;
var ye = "SelectItemAlignedPosition", be = a((n, r) => {
	let { __scopeSelect: i, onPlaced: a, ...s } = n, u = q(Y, i), d = Z(Y, i), [f, p] = o(null), [m, h] = o(null), g = e(r, (e) => h(e)), _ = H(i), v = c(!1), y = c(!0), { viewport: S, selectedItem: C, selectedItemText: w, focusSelectedItem: T } = d, E = t(() => {
		if (u.trigger && u.valueNode && f && m && S && C && w) {
			let e = u.trigger.getBoundingClientRect(), t = m.getBoundingClientRect(), n = u.valueNode.getBoundingClientRect(), r = w.getBoundingClientRect();
			if (u.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - X, u = F(a, [X, Math.max(X, l - c)]);
				f.style.minWidth = s + "px", f.style.left = u + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - X, u = F(a, [X, Math.max(X, l - c)]);
				f.style.minWidth = s + "px", f.style.right = u + "px";
			}
			let i = _(), o = window.innerHeight - X * 2, s = S.scrollHeight, c = window.getComputedStyle(m), l = parseInt(c.borderTopWidth, 10), d = parseInt(c.paddingTop, 10), p = parseInt(c.borderBottomWidth, 10), h = parseInt(c.paddingBottom, 10), g = l + d + s + h + p, y = Math.min(C.offsetHeight * 5, g), b = window.getComputedStyle(S), x = parseInt(b.paddingTop, 10), T = parseInt(b.paddingBottom, 10), E = e.top + e.height / 2 - X, D = o - E, O = C.offsetHeight / 2, k = C.offsetTop + O, A = l + d + k, j = g - A;
			if (A <= E) {
				let e = i.length > 0 && C === i[i.length - 1].ref.current;
				f.style.bottom = "0px";
				let t = m.clientHeight - S.offsetTop - S.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + p);
				f.style.height = n + "px";
			} else {
				let e = i.length > 0 && C === i[0].ref.current;
				f.style.top = "0px";
				let t = Math.max(E, l + S.offsetTop + (e ? x : 0) + O) + j;
				f.style.height = t + "px", S.scrollTop = A - E + S.offsetTop;
			}
			f.style.margin = `${X}px 0`, f.style.minHeight = y + "px", f.style.maxHeight = o + "px", a?.(), requestAnimationFrame(() => v.current = !0);
		}
	}, [
		_,
		u.trigger,
		u.valueNode,
		f,
		m,
		S,
		C,
		w,
		u.dir,
		a
	]);
	x(() => E(), [E]);
	let [D, O] = o();
	return x(() => {
		m && O(window.getComputedStyle(m).zIndex);
	}, [m]), /* @__PURE__ */ l(Ce, {
		scope: i,
		contentWrapper: f,
		shouldExpandOnScrollRef: v,
		onScrollButtonChange: t((e) => {
			e && y.current === !0 && (E(), T?.(), y.current = !1);
		}, [E, T]),
		children: /* @__PURE__ */ l("div", {
			ref: p,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: D
			},
			children: /* @__PURE__ */ l(b.div, {
				...s,
				ref: g,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...s.style
				}
			})
		})
	});
});
be.displayName = ye;
var xe = "SelectPopperPosition", Se = a((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = X, ...a } = e;
	return /* @__PURE__ */ l(j, {
		...K(n),
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Se.displayName = xe;
var [Ce, we] = W(Y, {}), Te = "SelectViewport", Ee = a((t, n) => {
	let { __scopeSelect: i, nonce: a, ...o } = t, s = Z(Te, i), u = we(Te, i), d = e(n, s.onViewportChange), f = c(0);
	return /* @__PURE__ */ l(r, { children: [/* @__PURE__ */ l("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: a
	}), /* @__PURE__ */ l(V.Slot, {
		scope: i,
		children: /* @__PURE__ */ l(b.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...o,
			ref: d,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...o.style
			},
			onScroll: m(o.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
				if (r?.current && n) {
					let e = Math.abs(f.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - X * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				f.current = t.scrollTop;
			})
		})
	})] });
});
Ee.displayName = Te;
var De = "SelectGroup", [Oe, ke] = W(De), Ae = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = w();
	return /* @__PURE__ */ l(Oe, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ l(b.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Ae.displayName = De;
var je = "SelectLabel", Me = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = ke(je, n);
	return /* @__PURE__ */ l(b.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Me.displayName = je;
var Q = "SelectItem", [Ne, Pe] = W(Q), Fe = a((n, r) => {
	let { __scopeSelect: i, value: a, disabled: s = !1, textValue: u, ...d } = n, f = q(Q, i), p = Z(Q, i), h = f.value === a, [g, _] = o(u ?? ""), [v, y] = o(!1), x = e(r, (e) => p.itemRefCallback?.(e, a, s)), S = w(), C = c("touch"), T = () => {
		s || (f.onValueChange(a), f.onOpenChange(!1));
	};
	if (a === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ l(Ne, {
		scope: i,
		value: a,
		disabled: s,
		textId: S,
		isSelected: h,
		onItemTextChange: t((e) => {
			_((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ l(V.ItemSlot, {
			scope: i,
			value: a,
			disabled: s,
			textValue: g,
			children: /* @__PURE__ */ l(b.div, {
				role: "option",
				"aria-labelledby": S,
				"data-highlighted": v ? "" : void 0,
				"aria-selected": h && v,
				"data-state": h ? "checked" : "unchecked",
				"aria-disabled": s || void 0,
				"data-disabled": s ? "" : void 0,
				tabIndex: s ? void 0 : -1,
				...d,
				ref: x,
				onFocus: m(d.onFocus, () => y(!0)),
				onBlur: m(d.onBlur, () => y(!1)),
				onClick: m(d.onClick, () => {
					C.current !== "mouse" && T();
				}),
				onPointerUp: m(d.onPointerUp, () => {
					C.current === "mouse" && T();
				}),
				onPointerDown: m(d.onPointerDown, (e) => {
					C.current = e.pointerType;
				}),
				onPointerMove: m(d.onPointerMove, (e) => {
					C.current = e.pointerType, s ? p.onItemLeave?.() : C.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: m(d.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && p.onItemLeave?.();
				}),
				onKeyDown: m(d.onKeyDown, (e) => {
					p.searchRef?.current !== "" && e.key === " " || (ne.includes(e.key) && T(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Fe.displayName = Q;
var $ = "SelectItemText", Ie = a((t, n) => {
	let { __scopeSelect: i, className: a, style: s, ...c } = t, d = q($, i), p = Z($, i), m = Pe($, i), h = ae($, i), [g, _] = o(null), v = e(n, (e) => _(e), m.onItemTextChange, (e) => p.itemTextRefCallback?.(e, m.value, m.disabled)), y = g?.textContent, S = f(() => /* @__PURE__ */ l("option", {
		value: m.value,
		disabled: m.disabled,
		children: y
	}, m.value), [
		m.disabled,
		m.value,
		y
	]), { onNativeOptionAdd: C, onNativeOptionRemove: w } = h;
	return x(() => (C(S), () => w(S)), [
		C,
		w,
		S
	]), /* @__PURE__ */ l(r, { children: [/* @__PURE__ */ l(b.span, {
		id: m.textId,
		...c,
		ref: v
	}), m.isSelected && d.valueNode && !d.valueNodeHasChildren ? u(c.children, d.valueNode) : null] });
});
Ie.displayName = $;
var Le = "SelectItemIndicator", Re = a((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return Pe(Le, n).isSelected ? /* @__PURE__ */ l(b.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Re.displayName = Le;
var ze = "SelectScrollUpButton", Be = a((t, n) => {
	let r = Z(ze, t.__scopeSelect), i = we(ze, t.__scopeSelect), [a, s] = o(!1), c = e(n, i.onScrollButtonChange);
	return x(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				s(t.scrollTop > 0);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ l(Ue, {
		...t,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Be.displayName = ze;
var Ve = "SelectScrollDownButton", He = a((t, n) => {
	let r = Z(Ve, t.__scopeSelect), i = we(Ve, t.__scopeSelect), [a, s] = o(!1), c = e(n, i.onScrollButtonChange);
	return x(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				s(Math.ceil(t.scrollTop) < e);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ l(Ue, {
		...t,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
He.displayName = Ve;
var Ue = a((e, n) => {
	let { __scopeSelect: r, onAutoScroll: a, ...o } = e, s = Z("SelectScrollButton", r), u = c(null), d = H(r), f = t(() => {
		u.current !== null && (window.clearInterval(u.current), u.current = null);
	}, []);
	return i(() => () => f(), [f]), x(() => {
		d().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [d]), /* @__PURE__ */ l(b.div, {
		"aria-hidden": !0,
		...o,
		ref: n,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: m(o.onPointerDown, () => {
			u.current === null && (u.current = window.setInterval(a, 50));
		}),
		onPointerMove: m(o.onPointerMove, () => {
			s.onItemLeave?.(), u.current === null && (u.current = window.setInterval(a, 50));
		}),
		onPointerLeave: m(o.onPointerLeave, () => {
			f();
		})
	});
}), We = "SelectSeparator", Ge = a((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ l(b.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
Ge.displayName = We;
var Ke = "SelectArrow", qe = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = K(n), a = q(Ke, n), o = Z(Ke, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ l(A, {
		...i,
		...r,
		ref: t
	}) : null;
});
qe.displayName = Ke;
var Je = "SelectBubbleInput", Ye = a(({ __scopeSelect: t, value: n, ...r }, a) => {
	let o = c(null), s = e(a, o), u = I(n);
	return i(() => {
		let e = o.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(t, "value").set;
		if (u !== n && r) {
			let t = new Event("change", { bubbles: !0 });
			r.call(e, n), e.dispatchEvent(t);
		}
	}, [u, n]), /* @__PURE__ */ l(b.select, {
		...r,
		style: {
			...L,
			...r.style
		},
		ref: s,
		defaultValue: n
	});
});
Ye.displayName = Je;
function Xe(e) {
	return e === "" || e === void 0;
}
function Ze(e) {
	let n = g(e), r = c(""), a = c(0), o = t((e) => {
		let t = r.current + e;
		n(t), (function e(t) {
			r.current = t, window.clearTimeout(a.current), t !== "" && (a.current = window.setTimeout(() => e(""), 1e3));
		})(t);
	}, [n]), s = t(() => {
		r.current = "", window.clearTimeout(a.current);
	}, []);
	return i(() => () => window.clearTimeout(a.current), []), [
		r,
		o,
		s
	];
}
function Qe(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = $e(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function $e(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var et = oe, tt = se, nt = le, rt = de, it = pe, at = me, ot = Ee, st = Fe, ct = Ie, lt = Re, ut = Be, dt = He;
//#endregion
export { ct as a, dt as c, nt as d, ot as f, N as h, lt as i, ut as l, ee as m, rt as n, it as o, I as p, st as r, et as s, at as t, tt as u };

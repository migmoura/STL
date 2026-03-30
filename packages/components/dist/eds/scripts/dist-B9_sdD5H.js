import { C as e } from "./utils-kL9Kd3j1.js";
import { Et as t, gt as n, it as r, kt as i, ot as a, pt as o, rt as s, wt as c, xt as l, yt as u } from "./react-DLNUXPF9.js";
import { a as d, c as f, o as p, r as m, s as h, t as g, u as _ } from "./dist-CeBxUC6o.js";
import { n as v, t as y } from "./dist-eWzfRhmO.js";
import { a as b, i as x, n as S, o as C, r as w, s as T, t as E } from "./es2015-Lwokp0LN.js";
import { a as D, i as O, n as k, r as A, t as j } from "./dist-CUiAlu8h.js";
//#region ../../node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs
function M(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-previous/dist/index.mjs
o();
function N(e) {
	let t = n({
		value: e,
		previous: e
	});
	return u(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
o();
var P = Object.freeze({
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
}), ee = "VisuallyHidden", F = a((e, t) => /* @__PURE__ */ s(m.span, {
	...e,
	ref: t,
	style: {
		...P,
		...e.style
	}
}));
F.displayName = ee;
var I = F;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-select@2.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_53894a32562cb9eeb6aef8b357a4f4e3/node_modules/@radix-ui/react-select/dist/index.mjs
o();
var L = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], R = [" ", "Enter"], z = "Select", [B, V, te] = v(z), [H, U] = _(z, [te, D]), W = D(), [G, K] = H(z), [q, ne] = H(z), re = (e) => {
	let { __scopeSelect: t, children: r, open: i, defaultOpen: a, onOpenChange: o, value: u, defaultValue: f, onValueChange: p, dir: m, name: h, autoComplete: _, disabled: v, required: b, form: x } = e, S = W(t), [C, w] = l(null), [T, E] = l(null), [D, k] = l(!1), A = y(m), [j, M] = d({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: z
	}), [N, P] = d({
		prop: u,
		defaultProp: f,
		onChange: p,
		caller: z
	}), ee = n(null), F = C ? x || !!C.closest("form") : !0, [I, L] = l(/* @__PURE__ */ new Set()), R = Array.from(I).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ s(O, {
		...S,
		children: /* @__PURE__ */ s(G, {
			required: b,
			scope: t,
			trigger: C,
			onTriggerChange: w,
			valueNode: T,
			onValueNodeChange: E,
			valueNodeHasChildren: D,
			onValueNodeHasChildrenChange: k,
			contentId: g(),
			value: N,
			onValueChange: P,
			open: j,
			onOpenChange: M,
			dir: A,
			triggerPointerDownPosRef: ee,
			disabled: v,
			children: [/* @__PURE__ */ s(B.Provider, {
				scope: t,
				children: /* @__PURE__ */ s(q, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: c((e) => {
						L((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: c((e) => {
						L((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: r
				})
			}), F ? /* @__PURE__ */ s(Ke, {
				"aria-hidden": !0,
				required: b,
				tabIndex: -1,
				name: h,
				autoComplete: _,
				value: N,
				onChange: (e) => P(e.target.value),
				disabled: v,
				form: x,
				children: [N === void 0 ? /* @__PURE__ */ s("option", { value: "" }) : null, Array.from(I)]
			}, R) : null]
		})
	});
};
re.displayName = z;
var ie = "SelectTrigger", ae = a((t, r) => {
	let { __scopeSelect: i, disabled: a = !1, ...o } = t, c = W(i), l = K(ie, i), u = l.disabled || a, d = e(r, l.onTriggerChange), f = V(i), p = n("touch"), [g, _, v] = Je((e) => {
		let t = f().filter((e) => !e.disabled), n = Ye(t, e, t.find((e) => e.value === l.value));
		n !== void 0 && l.onValueChange(n.value);
	}), y = (e) => {
		u || (l.onOpenChange(!0), v()), e && (l.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ s(j, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ s(m.button, {
			type: "button",
			role: "combobox",
			"aria-controls": l.contentId,
			"aria-expanded": l.open,
			"aria-required": l.required,
			"aria-autocomplete": "none",
			dir: l.dir,
			"data-state": l.open ? "open" : "closed",
			disabled: u,
			"data-disabled": u ? "" : void 0,
			"data-placeholder": qe(l.value) ? "" : void 0,
			...o,
			ref: d,
			onClick: h(o.onClick, (e) => {
				e.currentTarget.focus(), p.current !== "mouse" && y(e);
			}),
			onPointerDown: h(o.onPointerDown, (e) => {
				p.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (y(e), e.preventDefault());
			}),
			onKeyDown: h(o.onKeyDown, (e) => {
				let t = g.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && _(e.key), !(t && e.key === " ") && L.includes(e.key) && (y(), e.preventDefault());
			})
		})
	});
});
ae.displayName = ie;
var oe = "SelectValue", J = a((t, n) => {
	let { __scopeSelect: r, className: a, style: o, children: c, placeholder: l = "", ...u } = t, d = K(oe, r), { onValueNodeHasChildrenChange: f } = d, h = c !== void 0, g = e(n, d.onValueNodeChange);
	return p(() => {
		f(h);
	}, [f, h]), /* @__PURE__ */ s(m.span, {
		...u,
		ref: g,
		style: { pointerEvents: "none" },
		children: qe(d.value) ? /* @__PURE__ */ s(i, { children: l }) : c
	});
});
J.displayName = oe;
var se = "SelectIcon", ce = a((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ s(m.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
ce.displayName = se;
var le = "SelectPortal", ue = (e) => /* @__PURE__ */ s(x, {
	asChild: !0,
	...e
});
ue.displayName = le;
var Y = "SelectContent", de = a((e, t) => {
	let n = K(Y, e.__scopeSelect), [i, a] = l();
	if (p(() => {
		a(new DocumentFragment());
	}, []), !n.open) {
		let t = i;
		return t ? r(/* @__PURE__ */ s(fe, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ s(B.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ s("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ s(he, {
		...e,
		ref: t
	});
});
de.displayName = Y;
var X = 10, [fe, Z] = H(Y), pe = "SelectContentImpl", me = f("SelectContent.RemoveScroll"), he = a((r, i) => {
	let { __scopeSelect: a, position: o = "item-aligned", onCloseAutoFocus: u, onEscapeKeyDown: d, onPointerDownOutside: f, side: p, sideOffset: m, align: g, alignOffset: _, arrowPadding: v, collisionBoundary: y, collisionPadding: x, sticky: T, hideWhenDetached: D, avoidCollisions: O, ...k } = r, A = K(Y, a), [j, M] = l(null), [N, P] = l(null), ee = e(i, (e) => M(e)), [F, I] = l(null), [L, R] = l(null), z = V(a), [B, te] = l(!1), H = n(!1);
	t(() => {
		if (j) return E(j);
	}, [j]), w();
	let U = c((e) => {
		let [t, ...n] = z().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && N && (N.scrollTop = 0), n === r && N && (N.scrollTop = N.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [z, N]), W = c(() => U([F, j]), [
		U,
		F,
		j
	]);
	t(() => {
		B && W();
	}, [B, W]);
	let { onOpenChange: G, triggerPointerDownPosRef: q } = A;
	t(() => {
		if (j) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (q.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (q.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : j.contains(n.target) || G(!1), document.removeEventListener("pointermove", t), q.current = null;
			};
			return q.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		j,
		G,
		q
	]), t(() => {
		let e = () => G(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [G]);
	let [ne, re] = Je((e) => {
		let t = z().filter((e) => !e.disabled), n = Ye(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ie = c((e, t, n) => {
		let r = !H.current && !n;
		(A.value !== void 0 && A.value === t || r) && (I(e), r && (H.current = !0));
	}, [A.value]), ae = c(() => j?.focus(), [j]), oe = c((e, t, n) => {
		let r = !H.current && !n;
		(A.value !== void 0 && A.value === t || r) && R(e);
	}, [A.value]), J = o === "popper" ? ye : _e, se = J === ye ? {
		side: p,
		sideOffset: m,
		align: g,
		alignOffset: _,
		arrowPadding: v,
		collisionBoundary: y,
		collisionPadding: x,
		sticky: T,
		hideWhenDetached: D,
		avoidCollisions: O
	} : {};
	return /* @__PURE__ */ s(fe, {
		scope: a,
		content: j,
		viewport: N,
		onViewportChange: P,
		itemRefCallback: ie,
		selectedItem: F,
		onItemLeave: ae,
		itemTextRefCallback: oe,
		focusSelectedItem: W,
		selectedItemText: L,
		position: o,
		isPositioned: B,
		searchRef: ne,
		children: /* @__PURE__ */ s(S, {
			as: me,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ s(b, {
				asChild: !0,
				trapped: A.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: h(u, (e) => {
					A.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ s(C, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: d,
					onPointerDownOutside: f,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => A.onOpenChange(!1),
					children: /* @__PURE__ */ s(J, {
						role: "listbox",
						id: A.contentId,
						"data-state": A.open ? "open" : "closed",
						dir: A.dir,
						onContextMenu: (e) => e.preventDefault(),
						...k,
						...se,
						onPlaced: () => te(!0),
						ref: ee,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...k.style
						},
						onKeyDown: h(k.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && re(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = z().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => U(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
he.displayName = pe;
var ge = "SelectItemAlignedPosition", _e = a((t, r) => {
	let { __scopeSelect: i, onPlaced: a, ...o } = t, u = K(Y, i), d = Z(Y, i), [f, h] = l(null), [g, _] = l(null), v = e(r, (e) => _(e)), y = V(i), b = n(!1), x = n(!0), { viewport: S, selectedItem: C, selectedItemText: w, focusSelectedItem: T } = d, E = c(() => {
		if (u.trigger && u.valueNode && f && g && S && C && w) {
			let e = u.trigger.getBoundingClientRect(), t = g.getBoundingClientRect(), n = u.valueNode.getBoundingClientRect(), r = w.getBoundingClientRect();
			if (u.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - X, u = M(a, [X, Math.max(X, l - c)]);
				f.style.minWidth = s + "px", f.style.left = u + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - X, u = M(a, [X, Math.max(X, l - c)]);
				f.style.minWidth = s + "px", f.style.right = u + "px";
			}
			let i = y(), o = window.innerHeight - X * 2, s = S.scrollHeight, c = window.getComputedStyle(g), l = parseInt(c.borderTopWidth, 10), d = parseInt(c.paddingTop, 10), p = parseInt(c.borderBottomWidth, 10), m = parseInt(c.paddingBottom, 10), h = l + d + s + m + p, _ = Math.min(C.offsetHeight * 5, h), v = window.getComputedStyle(S), x = parseInt(v.paddingTop, 10), T = parseInt(v.paddingBottom, 10), E = e.top + e.height / 2 - X, D = o - E, O = C.offsetHeight / 2, k = C.offsetTop + O, A = l + d + k, j = h - A;
			if (A <= E) {
				let e = i.length > 0 && C === i[i.length - 1].ref.current;
				f.style.bottom = "0px";
				let t = g.clientHeight - S.offsetTop - S.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + p);
				f.style.height = n + "px";
			} else {
				let e = i.length > 0 && C === i[0].ref.current;
				f.style.top = "0px";
				let t = Math.max(E, l + S.offsetTop + (e ? x : 0) + O) + j;
				f.style.height = t + "px", S.scrollTop = A - E + S.offsetTop;
			}
			f.style.margin = `${X}px 0`, f.style.minHeight = _ + "px", f.style.maxHeight = o + "px", a?.(), requestAnimationFrame(() => b.current = !0);
		}
	}, [
		y,
		u.trigger,
		u.valueNode,
		f,
		g,
		S,
		C,
		w,
		u.dir,
		a
	]);
	p(() => E(), [E]);
	let [D, O] = l();
	return p(() => {
		g && O(window.getComputedStyle(g).zIndex);
	}, [g]), /* @__PURE__ */ s(be, {
		scope: i,
		contentWrapper: f,
		shouldExpandOnScrollRef: b,
		onScrollButtonChange: c((e) => {
			e && x.current === !0 && (E(), T?.(), x.current = !1);
		}, [E, T]),
		children: /* @__PURE__ */ s("div", {
			ref: h,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: D
			},
			children: /* @__PURE__ */ s(m.div, {
				...o,
				ref: v,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...o.style
				}
			})
		})
	});
});
_e.displayName = ge;
var ve = "SelectPopperPosition", ye = a((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = X, ...a } = e;
	return /* @__PURE__ */ s(A, {
		...W(n),
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
ye.displayName = ve;
var [be, xe] = H(Y, {}), Se = "SelectViewport", Ce = a((t, r) => {
	let { __scopeSelect: a, nonce: o, ...c } = t, l = Z(Se, a), u = xe(Se, a), d = e(r, l.onViewportChange), f = n(0);
	return /* @__PURE__ */ s(i, { children: [/* @__PURE__ */ s("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: o
	}), /* @__PURE__ */ s(B.Slot, {
		scope: a,
		children: /* @__PURE__ */ s(m.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...c,
			ref: d,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...c.style
			},
			onScroll: h(c.onScroll, (e) => {
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
Ce.displayName = Se;
var we = "SelectGroup", [Te, Ee] = H(we), De = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = g();
	return /* @__PURE__ */ s(Te, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ s(m.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
De.displayName = we;
var Oe = "SelectLabel", ke = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Ee(Oe, n);
	return /* @__PURE__ */ s(m.div, {
		id: i.id,
		...r,
		ref: t
	});
});
ke.displayName = Oe;
var Q = "SelectItem", [Ae, je] = H(Q), Me = a((t, r) => {
	let { __scopeSelect: i, value: a, disabled: o = !1, textValue: u, ...d } = t, f = K(Q, i), p = Z(Q, i), _ = f.value === a, [v, y] = l(u ?? ""), [b, x] = l(!1), S = e(r, (e) => p.itemRefCallback?.(e, a, o)), C = g(), w = n("touch"), T = () => {
		o || (f.onValueChange(a), f.onOpenChange(!1));
	};
	if (a === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ s(Ae, {
		scope: i,
		value: a,
		disabled: o,
		textId: C,
		isSelected: _,
		onItemTextChange: c((e) => {
			y((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ s(B.ItemSlot, {
			scope: i,
			value: a,
			disabled: o,
			textValue: v,
			children: /* @__PURE__ */ s(m.div, {
				role: "option",
				"aria-labelledby": C,
				"data-highlighted": b ? "" : void 0,
				"aria-selected": _ && b,
				"data-state": _ ? "checked" : "unchecked",
				"aria-disabled": o || void 0,
				"data-disabled": o ? "" : void 0,
				tabIndex: o ? void 0 : -1,
				...d,
				ref: S,
				onFocus: h(d.onFocus, () => x(!0)),
				onBlur: h(d.onBlur, () => x(!1)),
				onClick: h(d.onClick, () => {
					w.current !== "mouse" && T();
				}),
				onPointerUp: h(d.onPointerUp, () => {
					w.current === "mouse" && T();
				}),
				onPointerDown: h(d.onPointerDown, (e) => {
					w.current = e.pointerType;
				}),
				onPointerMove: h(d.onPointerMove, (e) => {
					w.current = e.pointerType, o ? p.onItemLeave?.() : w.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: h(d.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && p.onItemLeave?.();
				}),
				onKeyDown: h(d.onKeyDown, (e) => {
					p.searchRef?.current !== "" && e.key === " " || (R.includes(e.key) && T(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Me.displayName = Q;
var $ = "SelectItemText", Ne = a((t, n) => {
	let { __scopeSelect: a, className: o, style: c, ...d } = t, f = K($, a), h = Z($, a), g = je($, a), _ = ne($, a), [v, y] = l(null), b = e(n, (e) => y(e), g.onItemTextChange, (e) => h.itemTextRefCallback?.(e, g.value, g.disabled)), x = v?.textContent, S = u(() => /* @__PURE__ */ s("option", {
		value: g.value,
		disabled: g.disabled,
		children: x
	}, g.value), [
		g.disabled,
		g.value,
		x
	]), { onNativeOptionAdd: C, onNativeOptionRemove: w } = _;
	return p(() => (C(S), () => w(S)), [
		C,
		w,
		S
	]), /* @__PURE__ */ s(i, { children: [/* @__PURE__ */ s(m.span, {
		id: g.textId,
		...d,
		ref: b
	}), g.isSelected && f.valueNode && !f.valueNodeHasChildren ? r(d.children, f.valueNode) : null] });
});
Ne.displayName = $;
var Pe = "SelectItemIndicator", Fe = a((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return je(Pe, n).isSelected ? /* @__PURE__ */ s(m.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Fe.displayName = Pe;
var Ie = "SelectScrollUpButton", Le = a((t, n) => {
	let r = Z(Ie, t.__scopeSelect), i = xe(Ie, t.__scopeSelect), [a, o] = l(!1), c = e(n, i.onScrollButtonChange);
	return p(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				o(t.scrollTop > 0);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ s(Be, {
		...t,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Le.displayName = Ie;
var Re = "SelectScrollDownButton", ze = a((t, n) => {
	let r = Z(Re, t.__scopeSelect), i = xe(Re, t.__scopeSelect), [a, o] = l(!1), c = e(n, i.onScrollButtonChange);
	return p(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				o(Math.ceil(t.scrollTop) < e);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ s(Be, {
		...t,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
ze.displayName = Re;
var Be = a((e, r) => {
	let { __scopeSelect: i, onAutoScroll: a, ...o } = e, l = Z("SelectScrollButton", i), u = n(null), d = V(i), f = c(() => {
		u.current !== null && (window.clearInterval(u.current), u.current = null);
	}, []);
	return t(() => () => f(), [f]), p(() => {
		d().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [d]), /* @__PURE__ */ s(m.div, {
		"aria-hidden": !0,
		...o,
		ref: r,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: h(o.onPointerDown, () => {
			u.current === null && (u.current = window.setInterval(a, 50));
		}),
		onPointerMove: h(o.onPointerMove, () => {
			l.onItemLeave?.(), u.current === null && (u.current = window.setInterval(a, 50));
		}),
		onPointerLeave: h(o.onPointerLeave, () => {
			f();
		})
	});
}), Ve = "SelectSeparator", He = a((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ s(m.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
He.displayName = Ve;
var Ue = "SelectArrow", We = a((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = W(n), a = K(Ue, n), o = Z(Ue, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ s(k, {
		...i,
		...r,
		ref: t
	}) : null;
});
We.displayName = Ue;
var Ge = "SelectBubbleInput", Ke = a(({ __scopeSelect: r, value: i, ...a }, o) => {
	let c = n(null), l = e(o, c), u = N(i);
	return t(() => {
		let e = c.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (u !== i && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [u, i]), /* @__PURE__ */ s(m.select, {
		...a,
		style: {
			...P,
			...a.style
		},
		ref: l,
		defaultValue: i
	});
});
Ke.displayName = Ge;
function qe(e) {
	return e === "" || e === void 0;
}
function Je(e) {
	let r = T(e), i = n(""), a = n(0), o = c((e) => {
		let t = i.current + e;
		r(t), (function e(t) {
			i.current = t, window.clearTimeout(a.current), t !== "" && (a.current = window.setTimeout(() => e(""), 1e3));
		})(t);
	}, [r]), s = c(() => {
		i.current = "", window.clearTimeout(a.current);
	}, []);
	return t(() => () => window.clearTimeout(a.current), []), [
		i,
		o,
		s
	];
}
function Ye(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Xe(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Xe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Ze = re, Qe = ae, $e = J, et = ce, tt = ue, nt = de, rt = Ce, it = Me, at = Ne, ot = Fe, st = Le, ct = ze;
//#endregion
export { at as a, ct as c, $e as d, rt as f, ot as i, st as l, N as m, et as n, tt as o, I as p, it as r, Ze as s, nt as t, Qe as u };

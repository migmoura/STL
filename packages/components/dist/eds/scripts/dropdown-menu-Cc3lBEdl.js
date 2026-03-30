import { C as e, S as t, r as n, y as r } from "./utils-kL9Kd3j1.js";
import { $ as i, Et as a, et as o, gt as s, kt as c, ot as l, pt as u, rt as d, wt as f, xt as p } from "./react-DLNUXPF9.js";
import { a as m, c as h, i as g, n as _, r as v, s as y, t as b, u as x } from "./dist-CeBxUC6o.js";
import { n as S, t as C } from "./dist-eWzfRhmO.js";
import { a as ee, i as w, n as te, o as ne, r as T, s as E, t as D } from "./es2015-Lwokp0LN.js";
import { a as O, i as k, n as re, r as A, t as ie } from "./dist-CUiAlu8h.js";
import { n as j } from "./dist-B9_sdD5H.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@type_4eeb29c998b846c35358e2f929e7490e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
u();
var M = "rovingFocusGroup.onEntryFocus", N = {
	bubbles: !1,
	cancelable: !0
}, P = "RovingFocusGroup", [F, I, ae] = S(P), [L, oe] = x(P, [ae]), [se, ce] = L(P), R = l((e, t) => /* @__PURE__ */ d(F.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ d(F.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ d(le, {
			...e,
			ref: t
		})
	})
}));
R.displayName = P;
var le = l((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: o = !1, dir: c, currentTabStopId: l, defaultCurrentTabStopId: u, onCurrentTabStopIdChange: h, onEntryFocus: g, preventScrollOnEntryFocus: _ = !1, ...b } = t, x = s(null), S = e(n, x), ee = C(c), [w, te] = m({
		prop: l,
		defaultProp: u ?? null,
		onChange: h,
		caller: P
	}), [ne, T] = p(!1), D = E(g), O = I(r), k = s(!1), [re, A] = p(0);
	return a(() => {
		let e = x.current;
		if (e) return e.addEventListener(M, D), () => e.removeEventListener(M, D);
	}, [D]), /* @__PURE__ */ d(se, {
		scope: r,
		orientation: i,
		dir: ee,
		loop: o,
		currentTabStopId: w,
		onItemFocus: f((e) => te(e), [te]),
		onItemShiftTab: f(() => T(!0), []),
		onFocusableItemAdd: f(() => A((e) => e + 1), []),
		onFocusableItemRemove: f(() => A((e) => e - 1), []),
		children: /* @__PURE__ */ d(v.div, {
			tabIndex: ne || re === 0 ? -1 : 0,
			"data-orientation": i,
			...b,
			ref: S,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: y(t.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: y(t.onFocus, (e) => {
				let t = !k.current;
				if (e.target === e.currentTarget && t && !ne) {
					let t = new CustomEvent(M, N);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = O().filter((e) => e.focusable);
						he([
							e.find((e) => e.active),
							e.find((e) => e.id === w),
							...e
						].filter(Boolean).map((e) => e.ref.current), _);
					}
				}
				k.current = !1;
			}),
			onBlur: y(t.onBlur, () => T(!1))
		})
	});
}), ue = "RovingFocusGroupItem", de = l((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: o, children: s, ...c } = e, l = b(), u = o || l, f = ce(ue, n), p = f.currentTabStopId === u, m = I(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: _ } = f;
	return a(() => {
		if (r) return h(), () => g();
	}, [
		r,
		h,
		g
	]), /* @__PURE__ */ d(F.ItemSlot, {
		scope: n,
		id: u,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ d(v.span, {
			tabIndex: p ? 0 : -1,
			"data-orientation": f.orientation,
			...c,
			ref: t,
			onMouseDown: y(e.onMouseDown, (e) => {
				r ? f.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: y(e.onFocus, () => f.onItemFocus(u)),
			onKeyDown: y(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					f.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = me(e, f.orientation, f.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = m().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = f.loop ? ge(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => he(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: p,
				hasTabStop: _ != null
			}) : s
		})
	});
});
de.displayName = ue;
var fe = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function pe(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function me(e, t, n) {
	let r = pe(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return fe[r];
}
function he(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ge(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var _e = R, ve = de;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_73ff7391b7be14d4dbff03af4dbac090/node_modules/@radix-ui/react-menu/dist/index.mjs
u();
var z = ["Enter", " "], ye = [
	"ArrowDown",
	"PageUp",
	"Home"
], be = [
	"ArrowUp",
	"PageDown",
	"End"
], xe = [...ye, ...be], Se = {
	ltr: [...z, "ArrowRight"],
	rtl: [...z, "ArrowLeft"]
}, Ce = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, B = "Menu", [V, we, Te] = S(B), [H, Ee] = x(B, [
	Te,
	O,
	oe
]), U = O(), De = oe(), [Oe, W] = H(B), [ke, G] = H(B), Ae = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: o, modal: c = !0 } = e, l = U(t), [u, m] = p(null), h = s(!1), g = E(o), _ = C(i);
	return a(() => {
		let e = () => {
			h.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => h.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ d(k, {
		...l,
		children: /* @__PURE__ */ d(Oe, {
			scope: t,
			open: n,
			onOpenChange: g,
			content: u,
			onContentChange: m,
			children: /* @__PURE__ */ d(ke, {
				scope: t,
				onClose: f(() => g(!1), [g]),
				isUsingKeyboardRef: h,
				dir: _,
				modal: c,
				children: r
			})
		})
	});
};
Ae.displayName = B;
var je = "MenuAnchor", Me = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ d(ie, {
		...U(n),
		...r,
		ref: t
	});
});
Me.displayName = je;
var Ne = "MenuPortal", [Pe, Fe] = H(Ne, { forceMount: void 0 }), Ie = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = W(Ne, t);
	return /* @__PURE__ */ d(Pe, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ d(_, {
			present: n || a.open,
			children: /* @__PURE__ */ d(w, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ie.displayName = Ne;
var K = "MenuContent", [Le, Re] = H(K), ze = l((e, t) => {
	let n = Fe(K, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = W(K, e.__scopeMenu), o = G(K, e.__scopeMenu);
	return /* @__PURE__ */ d(V.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ d(_, {
			present: r || a.open,
			children: /* @__PURE__ */ d(V.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ d(Be, {
					...i,
					ref: t
				}) : /* @__PURE__ */ d(Ve, {
					...i,
					ref: t
				})
			})
		})
	});
}), Be = l((t, n) => {
	let r = W(K, t.__scopeMenu), i = s(null), o = e(n, i);
	return a(() => {
		let e = i.current;
		if (e) return D(e);
	}, []), /* @__PURE__ */ d(Ue, {
		...t,
		ref: o,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: y(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), Ve = l((e, t) => {
	let n = W(K, e.__scopeMenu);
	return /* @__PURE__ */ d(Ue, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), He = h("MenuContent.ScrollLock"), Ue = l((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: o, onOpenAutoFocus: l, onCloseAutoFocus: u, disableOutsidePointerEvents: m, onEntryFocus: h, onEscapeKeyDown: g, onPointerDownOutside: _, onFocusOutside: v, onInteractOutside: b, onDismiss: x, disableOutsideScroll: S, ...C } = t, w = W(K, r), E = G(K, r), D = U(r), O = De(r), k = we(r), [re, ie] = p(null), j = s(null), M = e(n, j, w.onContentChange), N = s(0), P = s(""), F = s(0), I = s(null), ae = s("right"), L = s(0), oe = S ? te : c, se = S ? {
		as: He,
		allowPinchZoom: !0
	} : void 0, ce = (e) => {
		let t = P.current + e, n = k().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ct(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			P.current = t, window.clearTimeout(N.current), t !== "" && (N.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	a(() => () => window.clearTimeout(N.current), []), T();
	let R = f((e) => ae.current === I.current?.side && Tt(e, I.current?.area), []);
	return /* @__PURE__ */ d(Le, {
		scope: r,
		searchRef: P,
		onItemEnter: f((e) => {
			R(e) && e.preventDefault();
		}, [R]),
		onItemLeave: f((e) => {
			R(e) || (j.current?.focus(), ie(null));
		}, [R]),
		onTriggerLeave: f((e) => {
			R(e) && e.preventDefault();
		}, [R]),
		pointerGraceTimerRef: F,
		onPointerGraceIntentChange: f((e) => {
			I.current = e;
		}, []),
		children: /* @__PURE__ */ d(oe, {
			...se,
			children: /* @__PURE__ */ d(ee, {
				asChild: !0,
				trapped: o,
				onMountAutoFocus: y(l, (e) => {
					e.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: u,
				children: /* @__PURE__ */ d(ne, {
					asChild: !0,
					disableOutsidePointerEvents: m,
					onEscapeKeyDown: g,
					onPointerDownOutside: _,
					onFocusOutside: v,
					onInteractOutside: b,
					onDismiss: x,
					children: /* @__PURE__ */ d(_e, {
						asChild: !0,
						...O,
						dir: E.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: re,
						onCurrentTabStopIdChange: ie,
						onEntryFocus: y(h, (e) => {
							E.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ d(A, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": yt(w.open),
							"data-radix-menu-content": "",
							dir: E.dir,
							...D,
							...C,
							ref: M,
							style: {
								outline: "none",
								...C.style
							},
							onKeyDown: y(C.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && ce(e.key));
								let i = j.current;
								if (e.target !== i || !xe.includes(e.key)) return;
								e.preventDefault();
								let a = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								be.includes(e.key) && a.reverse(), xt(a);
							}),
							onBlur: y(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: y(t.onPointerMove, Z((e) => {
								let t = e.target, n = L.current !== e.clientX;
								e.currentTarget.contains(t) && n && (ae.current = e.clientX > L.current ? "right" : "left", L.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
ze.displayName = K;
var We = "MenuGroup", Ge = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ d(v.div, {
		role: "group",
		...r,
		ref: t
	});
});
Ge.displayName = We;
var Ke = "MenuLabel", qe = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ d(v.div, {
		...r,
		ref: t
	});
});
qe.displayName = Ke;
var q = "MenuItem", Je = "menu.itemSelect", J = l((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = s(null), c = G(q, t.__scopeMenu), l = Re(q, t.__scopeMenu), u = e(n, o), f = s(!1), p = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Je, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Je, (e) => i?.(e), { once: !0 }), g(e, t), t.defaultPrevented ? f.current = !1 : c.onClose();
		}
	};
	return /* @__PURE__ */ d(Ye, {
		...a,
		ref: u,
		disabled: r,
		onClick: y(t.onClick, p),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), f.current = !0;
		},
		onPointerUp: y(t.onPointerUp, (e) => {
			f.current || e.currentTarget?.click();
		}),
		onKeyDown: y(t.onKeyDown, (e) => {
			let t = l.searchRef.current !== "";
			r || t && e.key === " " || z.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
J.displayName = q;
var Ye = l((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: o, ...c } = t, l = Re(q, r), u = De(r), f = s(null), m = e(n, f), [h, g] = p(!1), [_, b] = p("");
	return a(() => {
		let e = f.current;
		e && b((e.textContent ?? "").trim());
	}, [c.children]), /* @__PURE__ */ d(V.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: o ?? _,
		children: /* @__PURE__ */ d(ve, {
			asChild: !0,
			...u,
			focusable: !i,
			children: /* @__PURE__ */ d(v.div, {
				role: "menuitem",
				"data-highlighted": h ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...c,
				ref: m,
				onPointerMove: y(t.onPointerMove, Z((e) => {
					i ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: y(t.onPointerLeave, Z((e) => l.onItemLeave(e))),
				onFocus: y(t.onFocus, () => g(!0)),
				onBlur: y(t.onBlur, () => g(!1))
			})
		})
	});
}), Xe = "MenuCheckboxItem", Ze = l((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ d(at, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ d(J, {
			role: "menuitemcheckbox",
			"aria-checked": X(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": bt(n),
			onSelect: y(i.onSelect, () => r?.(X(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ze.displayName = Xe;
var Qe = "MenuRadioGroup", [$e, et] = H(Qe, {
	value: void 0,
	onValueChange: () => {}
}), tt = l((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = E(r);
	return /* @__PURE__ */ d($e, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ d(Ge, {
			...i,
			ref: t
		})
	});
});
tt.displayName = Qe;
var nt = "MenuRadioItem", rt = l((e, t) => {
	let { value: n, ...r } = e, i = et(nt, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ d(at, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ d(J, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": bt(a),
			onSelect: y(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
rt.displayName = nt;
var it = "MenuItemIndicator", [at, ot] = H(it, { checked: !1 }), st = l((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = ot(it, n);
	return /* @__PURE__ */ d(_, {
		present: r || X(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ d(v.span, {
			...i,
			ref: t,
			"data-state": bt(a.checked)
		})
	});
});
st.displayName = it;
var ct = "MenuSeparator", lt = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ d(v.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
lt.displayName = ct;
var ut = "MenuArrow", dt = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ d(re, {
		...U(n),
		...r,
		ref: t
	});
});
dt.displayName = ut;
var ft = "MenuSub", [pt, mt] = H(ft), ht = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, o = W(ft, t), s = U(t), [c, l] = p(null), [u, f] = p(null), m = E(i);
	return a(() => (o.open === !1 && m(!1), () => m(!1)), [o.open, m]), /* @__PURE__ */ d(k, {
		...s,
		children: /* @__PURE__ */ d(Oe, {
			scope: t,
			open: r,
			onOpenChange: m,
			content: u,
			onContentChange: f,
			children: /* @__PURE__ */ d(pt, {
				scope: t,
				contentId: b(),
				triggerId: b(),
				trigger: c,
				onTriggerChange: l,
				children: n
			})
		})
	});
};
ht.displayName = ft;
var Y = "MenuSubTrigger", gt = l((e, n) => {
	let r = W(Y, e.__scopeMenu), i = G(Y, e.__scopeMenu), o = mt(Y, e.__scopeMenu), c = Re(Y, e.__scopeMenu), l = s(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: p } = c, m = { __scopeMenu: e.__scopeMenu }, h = f(() => {
		l.current && window.clearTimeout(l.current), l.current = null;
	}, []);
	return a(() => h, [h]), a(() => {
		let e = u.current;
		return () => {
			window.clearTimeout(e), p(null);
		};
	}, [u, p]), /* @__PURE__ */ d(Me, {
		asChild: !0,
		...m,
		children: /* @__PURE__ */ d(Ye, {
			id: o.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": o.contentId,
			"data-state": yt(r.open),
			...e,
			ref: t(n, o.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: y(e.onPointerMove, Z((t) => {
				c.onItemEnter(t), !t.defaultPrevented && !e.disabled && !r.open && !l.current && (c.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
					r.onOpenChange(!0), h();
				}, 100));
			})),
			onPointerLeave: y(e.onPointerLeave, Z((e) => {
				h();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, o = t[i ? "left" : "right"], s = t[i ? "right" : "left"];
					c.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: o,
								y: t.top
							},
							{
								x: s,
								y: t.top
							},
							{
								x: s,
								y: t.bottom
							},
							{
								x: o,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(u.current), u.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300);
				} else {
					if (c.onTriggerLeave(e), e.defaultPrevented) return;
					c.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: y(e.onKeyDown, (t) => {
				let n = c.searchRef.current !== "";
				e.disabled || n && t.key === " " || Se[i.dir].includes(t.key) && (r.onOpenChange(!0), r.content?.focus(), t.preventDefault());
			})
		})
	});
});
gt.displayName = Y;
var _t = "MenuSubContent", vt = l((t, n) => {
	let r = Fe(K, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = W(K, t.__scopeMenu), c = G(K, t.__scopeMenu), l = mt(_t, t.__scopeMenu), u = s(null), f = e(n, u);
	return /* @__PURE__ */ d(V.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ d(_, {
			present: i || o.open,
			children: /* @__PURE__ */ d(V.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ d(Ue, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...a,
					ref: f,
					align: "start",
					side: c.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: y(t.onFocusOutside, (e) => {
						e.target !== l.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: y(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: y(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Ce[c.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
vt.displayName = _t;
function yt(e) {
	return e ? "open" : "closed";
}
function X(e) {
	return e === "indeterminate";
}
function bt(e) {
	return X(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xt(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function St(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Ct(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = St(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function wt(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Tt(e, t) {
	return t ? wt({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Z(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Et = Ae, Dt = Me, Ot = Ie, kt = ze, At = Ge, jt = qe, Mt = J, Nt = Ze, Pt = tt, Ft = rt, It = st, Lt = lt, Rt = dt, zt = gt, Bt = vt;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.14__@typ_73af8346b6b2e99f5d79f55f5dac0b34/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
u();
var Q = "DropdownMenu", [Vt, Ht] = x(Q, [Ee]), $ = Ee(), [Ut, Wt] = Vt(Q), Gt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: c = !0 } = e, l = $(t), u = s(null), [p, h] = m({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Q
	});
	return /* @__PURE__ */ d(Ut, {
		scope: t,
		triggerId: b(),
		triggerRef: u,
		contentId: b(),
		open: p,
		onOpenChange: h,
		onOpenToggle: f(() => h((e) => !e), [h]),
		modal: c,
		children: /* @__PURE__ */ d(Et, {
			...l,
			open: p,
			onOpenChange: h,
			dir: r,
			modal: c,
			children: n
		})
	});
};
Gt.displayName = Q;
var Kt = "DropdownMenuTrigger", qt = l((e, n) => {
	let { __scopeDropdownMenu: r, disabled: i = !1, ...a } = e, o = Wt(Kt, r);
	return /* @__PURE__ */ d(Dt, {
		asChild: !0,
		...$(r),
		children: /* @__PURE__ */ d(v.button, {
			type: "button",
			id: o.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": o.open,
			"aria-controls": o.open ? o.contentId : void 0,
			"data-state": o.open ? "open" : "closed",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			...a,
			ref: t(n, o.triggerRef),
			onPointerDown: y(e.onPointerDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 && (o.onOpenToggle(), o.open || e.preventDefault());
			}),
			onKeyDown: y(e.onKeyDown, (e) => {
				i || (["Enter", " "].includes(e.key) && o.onOpenToggle(), e.key === "ArrowDown" && o.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
qt.displayName = Kt;
var Jt = "DropdownMenuPortal", Yt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e;
	return /* @__PURE__ */ d(Ot, {
		...$(t),
		...n
	});
};
Yt.displayName = Jt;
var Xt = "DropdownMenuContent", Zt = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Wt(Xt, n), a = $(n), o = s(!1);
	return /* @__PURE__ */ d(kt, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: y(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: y(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Zt.displayName = Xt;
var Qt = "DropdownMenuGroup", $t = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(At, {
		...$(n),
		...r,
		ref: t
	});
});
$t.displayName = Qt;
var en = "DropdownMenuLabel", tn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(jt, {
		...$(n),
		...r,
		ref: t
	});
});
tn.displayName = en;
var nn = "DropdownMenuItem", rn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Mt, {
		...$(n),
		...r,
		ref: t
	});
});
rn.displayName = nn;
var an = "DropdownMenuCheckboxItem", on = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Nt, {
		...$(n),
		...r,
		ref: t
	});
});
on.displayName = an;
var sn = "DropdownMenuRadioGroup", cn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Pt, {
		...$(n),
		...r,
		ref: t
	});
});
cn.displayName = sn;
var ln = "DropdownMenuRadioItem", un = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Ft, {
		...$(n),
		...r,
		ref: t
	});
});
un.displayName = ln;
var dn = "DropdownMenuItemIndicator", fn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(It, {
		...$(n),
		...r,
		ref: t
	});
});
fn.displayName = dn;
var pn = "DropdownMenuSeparator", mn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Lt, {
		...$(n),
		...r,
		ref: t
	});
});
mn.displayName = pn;
var hn = "DropdownMenuArrow", gn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Rt, {
		...$(n),
		...r,
		ref: t
	});
});
gn.displayName = hn;
var _n = "DropdownMenuSubTrigger", vn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(zt, {
		...$(n),
		...r,
		ref: t
	});
});
vn.displayName = _n;
var yn = "DropdownMenuSubContent", bn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ d(Bt, {
		...$(n),
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
bn.displayName = yn;
var xn = Gt, Sn = qt, Cn = Yt, wn = Zt, Tn = $t, En = tn, Dn = rn, On = on, kn = fn;
//#endregion
//#region src/components/ui/dropdown-menu.tsx
u();
function An({ ...e }) {
	return /* @__PURE__ */ d(xn, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function jn({ ...e }) {
	return /* @__PURE__ */ d(Sn, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Mn({ className: e, sideOffset: t = 4, container: r, ...i }) {
	return /* @__PURE__ */ d(Cn, {
		container: r,
		children: /* @__PURE__ */ d(wn, {
			"data-slot": "dropdown-menu-content",
			sideOffset: t,
			className: n("bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto py-2 shadow-lg", e),
			...i
		})
	});
}
function Nn({ ...e }) {
	return /* @__PURE__ */ d(Tn, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
var Pn = r("w-full flex cursor-default items-center relative gap-2 leading-label outline-hidden select-none active:bg-gray-35 focus-visible:bg-gray-4 hover:bg-gray-4 aria-selected:bg-gray-4 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-gray-25", {
	variants: { variant: {
		default: "px-6 py-5",
		outline: "text-sm px-4 py-2"
	} },
	defaultVariants: { variant: "default" }
});
function Fn({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ d(Dn, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: Pn({
			variant: n,
			className: e
		}),
		...r
	});
}
var In = r("active:bg-gray-35 focus-visible:bg-gray-4 w-full relative flex justify-between cursor-default items-center leading-label outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-25 [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "px-6 py-5",
		outline: "text-sm px-4 py-2"
	} },
	defaultVariants: { variant: "default" }
});
function Ln({ className: e, children: t, checked: r, variant: i = "default", ...a }) {
	return /* @__PURE__ */ d(On, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: In({
			variant: i,
			className: e
		}),
		checked: r,
		...a,
		children: [t, /* @__PURE__ */ d("span", {
			className: "ml-4 pointer-events-none flex items-center justify-center",
			children: /* @__PURE__ */ d(kn, { children: /* @__PURE__ */ d(o, { className: n({
				"size-6": i === "default",
				"size-4": i === "outline"
			}) }) })
		})]
	});
}
function Rn({ className: e, inset: t, ...r }) {
	return /* @__PURE__ */ d(En, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: n("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...r
	});
}
function zn({ className: e, size: t = "default", children: r, ...a }) {
	return /* @__PURE__ */ d("span", {
		className: "relative block",
		children: /* @__PURE__ */ d(Sn, {
			"data-slot": "dropdown-menu-trigger",
			"data-size": t,
			className: n("group leading-label flex justify-between items-center py-2 pl-4 pr-2 md:py-4 md:pl-6 md:pr-4 relative gap-4 bg-white/40 outline-none not-disabled:hover:ring-2 hover:ring-gray-15 disabled:text-gray-25 disabled:ring-gray-3 aria-invalid:ring-light-red aria-invalid:ring-2", e),
			...a,
			children: [r, /* @__PURE__ */ d(j, {
				asChild: !0,
				children: /* @__PURE__ */ d(i, { className: "size-6 shrink-0" })
			})]
		})
	});
}
//#endregion
export { Fn as a, zn as c, Nn as i, Pn as l, Ln as n, Rn as o, Mn as r, jn as s, An as t };

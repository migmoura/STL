import { C as e, S as t, r as n, y as r } from "./utils-Cw5qLqcS.js";
import { $ as i, Ct as a, Ot as o, Q as s, Tt as c, at as l, bt as u, ft as d, ht as f, nt as p } from "./react-w7ldCLEn.js";
import { _ as m, a as h, c as g, d as _, f as v, g as y, i as b, l as x, n as ee, o as te, p as S, r as ne, s as re, t as C, u as w } from "./es2015-CAHZSTi-.js";
import { h as T, m as E, n as D } from "./dist-6W7P9DyX.js";
import { a as O, i as k, n as A, r as ie, t as j } from "./dist-BeZMvV7F.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@type_4eeb29c998b846c35358e2f929e7490e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
d();
var M = "rovingFocusGroup.onEntryFocus", N = {
	bubbles: !1,
	cancelable: !0
}, P = "RovingFocusGroup", [F, I, L] = T(P), [R, ae] = y(P, [L]), [oe, se] = R(P), z = l((e, t) => /* @__PURE__ */ p(F.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ p(F.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ p(ce, {
			...e,
			ref: t
		})
	})
}));
z.displayName = P;
var ce = l((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: o = !1, dir: s, currentTabStopId: l, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: h, onEntryFocus: _, preventScrollOnEntryFocus: y = !1, ...b } = t, ee = f(null), te = e(n, ee), S = E(s), [ne, re] = v({
		prop: l,
		defaultProp: d ?? null,
		onChange: h,
		caller: P
	}), [C, w] = u(!1), T = g(_), D = I(r), O = f(!1), [k, A] = u(0);
	return c(() => {
		let e = ee.current;
		if (e) return e.addEventListener(M, T), () => e.removeEventListener(M, T);
	}, [T]), /* @__PURE__ */ p(oe, {
		scope: r,
		orientation: i,
		dir: S,
		loop: o,
		currentTabStopId: ne,
		onItemFocus: a((e) => re(e), [re]),
		onItemShiftTab: a(() => w(!0), []),
		onFocusableItemAdd: a(() => A((e) => e + 1), []),
		onFocusableItemRemove: a(() => A((e) => e - 1), []),
		children: /* @__PURE__ */ p(x.div, {
			tabIndex: C || k === 0 ? -1 : 0,
			"data-orientation": i,
			...b,
			ref: te,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: m(t.onMouseDown, () => {
				O.current = !0;
			}),
			onFocus: m(t.onFocus, (e) => {
				let t = !O.current;
				if (e.target === e.currentTarget && t && !C) {
					let t = new CustomEvent(M, N);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = D().filter((e) => e.focusable);
						me([
							e.find((e) => e.active),
							e.find((e) => e.id === ne),
							...e
						].filter(Boolean).map((e) => e.ref.current), y);
					}
				}
				O.current = !1;
			}),
			onBlur: m(t.onBlur, () => w(!1))
		})
	});
}), le = "RovingFocusGroupItem", ue = l((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, l = S(), u = a || l, d = se(le, n), f = d.currentTabStopId === u, h = I(n), { onFocusableItemAdd: g, onFocusableItemRemove: _, currentTabStopId: v } = d;
	return c(() => {
		if (r) return g(), () => _();
	}, [
		r,
		g,
		_
	]), /* @__PURE__ */ p(F.ItemSlot, {
		scope: n,
		id: u,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ p(x.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...s,
			ref: t,
			onMouseDown: m(e.onMouseDown, (e) => {
				r ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: m(e.onFocus, () => d.onItemFocus(u)),
			onKeyDown: m(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = pe(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = h().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? he(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => me(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: f,
				hasTabStop: v != null
			}) : o
		})
	});
});
ue.displayName = le;
var de = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function fe(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function pe(e, t, n) {
	let r = fe(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return de[r];
}
function me(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function he(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var ge = z, _e = ue;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_73ff7391b7be14d4dbff03af4dbac090/node_modules/@radix-ui/react-menu/dist/index.mjs
d();
var ve = ["Enter", " "], ye = [
	"ArrowDown",
	"PageUp",
	"Home"
], be = [
	"ArrowUp",
	"PageDown",
	"End"
], xe = [...ye, ...be], Se = {
	ltr: [...ve, "ArrowRight"],
	rtl: [...ve, "ArrowLeft"]
}, Ce = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, B = "Menu", [V, we, Te] = T(B), [H, Ee] = y(B, [
	Te,
	O,
	ae
]), U = O(), De = ae(), [Oe, W] = H(B), [ke, G] = H(B), Ae = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: o, modal: s = !0 } = e, l = U(t), [d, m] = u(null), h = f(!1), _ = g(o), v = E(i);
	return c(() => {
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
	}, []), /* @__PURE__ */ p(k, {
		...l,
		children: /* @__PURE__ */ p(Oe, {
			scope: t,
			open: n,
			onOpenChange: _,
			content: d,
			onContentChange: m,
			children: /* @__PURE__ */ p(ke, {
				scope: t,
				onClose: a(() => _(!1), [_]),
				isUsingKeyboardRef: h,
				dir: v,
				modal: s,
				children: r
			})
		})
	});
};
Ae.displayName = B;
var je = "MenuAnchor", Me = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ p(j, {
		...U(n),
		...r,
		ref: t
	});
});
Me.displayName = je;
var Ne = "MenuPortal", [Pe, Fe] = H(Ne, { forceMount: void 0 }), Ie = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = W(Ne, t);
	return /* @__PURE__ */ p(Pe, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ p(b, {
			present: n || a.open,
			children: /* @__PURE__ */ p(h, {
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
	return /* @__PURE__ */ p(V.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ p(b, {
			present: r || a.open,
			children: /* @__PURE__ */ p(V.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ p(Be, {
					...i,
					ref: t
				}) : /* @__PURE__ */ p(Ve, {
					...i,
					ref: t
				})
			})
		})
	});
}), Be = l((t, n) => {
	let r = W(K, t.__scopeMenu), i = f(null), a = e(n, i);
	return c(() => {
		let e = i.current;
		if (e) return C(e);
	}, []), /* @__PURE__ */ p(Ue, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: m(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), Ve = l((e, t) => {
	let n = W(K, e.__scopeMenu);
	return /* @__PURE__ */ p(Ue, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), He = _("MenuContent.ScrollLock"), Ue = l((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: s, onOpenAutoFocus: l, onCloseAutoFocus: d, disableOutsidePointerEvents: h, onEntryFocus: g, onEscapeKeyDown: _, onPointerDownOutside: v, onFocusOutside: y, onInteractOutside: b, onDismiss: x, disableOutsideScroll: S, ...C } = t, w = W(K, r), T = G(K, r), E = U(r), D = De(r), O = we(r), [k, A] = u(null), j = f(null), M = e(n, j, w.onContentChange), N = f(0), P = f(""), F = f(0), I = f(null), L = f("right"), R = f(0), ae = S ? ee : o, oe = S ? {
		as: He,
		allowPinchZoom: !0
	} : void 0, se = (e) => {
		let t = P.current + e, n = O().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ct(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			P.current = t, window.clearTimeout(N.current), t !== "" && (N.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	c(() => () => window.clearTimeout(N.current), []), ne();
	let z = a((e) => L.current === I.current?.side && Tt(e, I.current?.area), []);
	return /* @__PURE__ */ p(Le, {
		scope: r,
		searchRef: P,
		onItemEnter: a((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		onItemLeave: a((e) => {
			z(e) || (j.current?.focus(), A(null));
		}, [z]),
		onTriggerLeave: a((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		pointerGraceTimerRef: F,
		onPointerGraceIntentChange: a((e) => {
			I.current = e;
		}, []),
		children: /* @__PURE__ */ p(ae, {
			...oe,
			children: /* @__PURE__ */ p(te, {
				asChild: !0,
				trapped: s,
				onMountAutoFocus: m(l, (e) => {
					e.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: d,
				children: /* @__PURE__ */ p(re, {
					asChild: !0,
					disableOutsidePointerEvents: h,
					onEscapeKeyDown: _,
					onPointerDownOutside: v,
					onFocusOutside: y,
					onInteractOutside: b,
					onDismiss: x,
					children: /* @__PURE__ */ p(ge, {
						asChild: !0,
						...D,
						dir: T.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: k,
						onCurrentTabStopIdChange: A,
						onEntryFocus: m(g, (e) => {
							T.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ p(ie, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": yt(w.open),
							"data-radix-menu-content": "",
							dir: T.dir,
							...E,
							...C,
							ref: M,
							style: {
								outline: "none",
								...C.style
							},
							onKeyDown: m(C.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && se(e.key));
								let i = j.current;
								if (e.target !== i || !xe.includes(e.key)) return;
								e.preventDefault();
								let a = O().filter((e) => !e.disabled).map((e) => e.ref.current);
								be.includes(e.key) && a.reverse(), xt(a);
							}),
							onBlur: m(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: m(t.onPointerMove, Z((e) => {
								let t = e.target, n = R.current !== e.clientX;
								e.currentTarget.contains(t) && n && (L.current = e.clientX > R.current ? "right" : "left", R.current = e.clientX);
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
	return /* @__PURE__ */ p(x.div, {
		role: "group",
		...r,
		ref: t
	});
});
Ge.displayName = We;
var Ke = "MenuLabel", qe = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ p(x.div, {
		...r,
		ref: t
	});
});
qe.displayName = Ke;
var q = "MenuItem", Je = "menu.itemSelect", J = l((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = f(null), s = G(q, t.__scopeMenu), c = Re(q, t.__scopeMenu), l = e(n, o), u = f(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Je, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Je, (e) => i?.(e), { once: !0 }), w(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ p(Ye, {
		...a,
		ref: l,
		disabled: r,
		onClick: m(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: m(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: m(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || ve.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
J.displayName = q;
var Ye = l((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = Re(q, r), l = De(r), d = f(null), h = e(n, d), [g, _] = u(!1), [v, y] = u("");
	return c(() => {
		let e = d.current;
		e && y((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ p(V.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? v,
		children: /* @__PURE__ */ p(_e, {
			asChild: !0,
			...l,
			focusable: !i,
			children: /* @__PURE__ */ p(x.div, {
				role: "menuitem",
				"data-highlighted": g ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: h,
				onPointerMove: m(t.onPointerMove, Z((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: m(t.onPointerLeave, Z((e) => s.onItemLeave(e))),
				onFocus: m(t.onFocus, () => _(!0)),
				onBlur: m(t.onBlur, () => _(!1))
			})
		})
	});
}), Xe = "MenuCheckboxItem", Ze = l((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ p(at, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ p(J, {
			role: "menuitemcheckbox",
			"aria-checked": X(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": bt(n),
			onSelect: m(i.onSelect, () => r?.(X(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ze.displayName = Xe;
var Qe = "MenuRadioGroup", [$e, et] = H(Qe, {
	value: void 0,
	onValueChange: () => {}
}), tt = l((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = g(r);
	return /* @__PURE__ */ p($e, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ p(Ge, {
			...i,
			ref: t
		})
	});
});
tt.displayName = Qe;
var nt = "MenuRadioItem", rt = l((e, t) => {
	let { value: n, ...r } = e, i = et(nt, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ p(at, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ p(J, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": bt(a),
			onSelect: m(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
rt.displayName = nt;
var it = "MenuItemIndicator", [at, ot] = H(it, { checked: !1 }), st = l((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = ot(it, n);
	return /* @__PURE__ */ p(b, {
		present: r || X(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ p(x.span, {
			...i,
			ref: t,
			"data-state": bt(a.checked)
		})
	});
});
st.displayName = it;
var ct = "MenuSeparator", lt = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ p(x.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
lt.displayName = ct;
var ut = "MenuArrow", dt = l((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ p(A, {
		...U(n),
		...r,
		ref: t
	});
});
dt.displayName = ut;
var ft = "MenuSub", [pt, mt] = H(ft), ht = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = W(ft, t), o = U(t), [s, l] = u(null), [d, f] = u(null), m = g(i);
	return c(() => (a.open === !1 && m(!1), () => m(!1)), [a.open, m]), /* @__PURE__ */ p(k, {
		...o,
		children: /* @__PURE__ */ p(Oe, {
			scope: t,
			open: r,
			onOpenChange: m,
			content: d,
			onContentChange: f,
			children: /* @__PURE__ */ p(pt, {
				scope: t,
				contentId: S(),
				triggerId: S(),
				trigger: s,
				onTriggerChange: l,
				children: n
			})
		})
	});
};
ht.displayName = ft;
var Y = "MenuSubTrigger", gt = l((e, n) => {
	let r = W(Y, e.__scopeMenu), i = G(Y, e.__scopeMenu), o = mt(Y, e.__scopeMenu), s = Re(Y, e.__scopeMenu), l = f(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: d } = s, h = { __scopeMenu: e.__scopeMenu }, g = a(() => {
		l.current && window.clearTimeout(l.current), l.current = null;
	}, []);
	return c(() => g, [g]), c(() => {
		let e = u.current;
		return () => {
			window.clearTimeout(e), d(null);
		};
	}, [u, d]), /* @__PURE__ */ p(Me, {
		asChild: !0,
		...h,
		children: /* @__PURE__ */ p(Ye, {
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
			onPointerMove: m(e.onPointerMove, Z((t) => {
				s.onItemEnter(t), !t.defaultPrevented && !e.disabled && !r.open && !l.current && (s.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
					r.onOpenChange(!0), g();
				}, 100));
			})),
			onPointerLeave: m(e.onPointerLeave, Z((e) => {
				g();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, o = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
					s.onPointerGraceIntentChange({
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
								x: c,
								y: t.top
							},
							{
								x: c,
								y: t.bottom
							},
							{
								x: o,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(u.current), u.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
				} else {
					if (s.onTriggerLeave(e), e.defaultPrevented) return;
					s.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: m(e.onKeyDown, (t) => {
				let n = s.searchRef.current !== "";
				e.disabled || n && t.key === " " || Se[i.dir].includes(t.key) && (r.onOpenChange(!0), r.content?.focus(), t.preventDefault());
			})
		})
	});
});
gt.displayName = Y;
var _t = "MenuSubContent", vt = l((t, n) => {
	let r = Fe(K, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = W(K, t.__scopeMenu), s = G(K, t.__scopeMenu), c = mt(_t, t.__scopeMenu), l = f(null), u = e(n, l);
	return /* @__PURE__ */ p(V.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ p(b, {
			present: i || o.open,
			children: /* @__PURE__ */ p(V.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ p(Ue, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: m(t.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: m(t.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: m(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Ce[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
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
d();
var Q = "DropdownMenu", [Vt, Ht] = y(Q, [Ee]), $ = Ee(), [Ut, Wt] = Vt(Q), Gt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: o, onOpenChange: s, modal: c = !0 } = e, l = $(t), u = f(null), [d, m] = v({
		prop: i,
		defaultProp: o ?? !1,
		onChange: s,
		caller: Q
	});
	return /* @__PURE__ */ p(Ut, {
		scope: t,
		triggerId: S(),
		triggerRef: u,
		contentId: S(),
		open: d,
		onOpenChange: m,
		onOpenToggle: a(() => m((e) => !e), [m]),
		modal: c,
		children: /* @__PURE__ */ p(Et, {
			...l,
			open: d,
			onOpenChange: m,
			dir: r,
			modal: c,
			children: n
		})
	});
};
Gt.displayName = Q;
var Kt = "DropdownMenuTrigger", qt = l((e, n) => {
	let { __scopeDropdownMenu: r, disabled: i = !1, ...a } = e, o = Wt(Kt, r);
	return /* @__PURE__ */ p(Dt, {
		asChild: !0,
		...$(r),
		children: /* @__PURE__ */ p(x.button, {
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
			onPointerDown: m(e.onPointerDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 && (o.onOpenToggle(), o.open || e.preventDefault());
			}),
			onKeyDown: m(e.onKeyDown, (e) => {
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
	return /* @__PURE__ */ p(Ot, {
		...$(t),
		...n
	});
};
Yt.displayName = Jt;
var Xt = "DropdownMenuContent", Zt = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Wt(Xt, n), a = $(n), o = f(!1);
	return /* @__PURE__ */ p(kt, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: m(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: m(e.onInteractOutside, (e) => {
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
	return /* @__PURE__ */ p(At, {
		...$(n),
		...r,
		ref: t
	});
});
$t.displayName = Qt;
var en = "DropdownMenuLabel", tn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(jt, {
		...$(n),
		...r,
		ref: t
	});
});
tn.displayName = en;
var nn = "DropdownMenuItem", rn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Mt, {
		...$(n),
		...r,
		ref: t
	});
});
rn.displayName = nn;
var an = "DropdownMenuCheckboxItem", on = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Nt, {
		...$(n),
		...r,
		ref: t
	});
});
on.displayName = an;
var sn = "DropdownMenuRadioGroup", cn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Pt, {
		...$(n),
		...r,
		ref: t
	});
});
cn.displayName = sn;
var ln = "DropdownMenuRadioItem", un = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Ft, {
		...$(n),
		...r,
		ref: t
	});
});
un.displayName = ln;
var dn = "DropdownMenuItemIndicator", fn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(It, {
		...$(n),
		...r,
		ref: t
	});
});
fn.displayName = dn;
var pn = "DropdownMenuSeparator", mn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Lt, {
		...$(n),
		...r,
		ref: t
	});
});
mn.displayName = pn;
var hn = "DropdownMenuArrow", gn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Rt, {
		...$(n),
		...r,
		ref: t
	});
});
gn.displayName = hn;
var _n = "DropdownMenuSubTrigger", vn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(zt, {
		...$(n),
		...r,
		ref: t
	});
});
vn.displayName = _n;
var yn = "DropdownMenuSubContent", bn = l((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ p(Bt, {
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
d();
function An({ ...e }) {
	return /* @__PURE__ */ p(xn, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function jn({ ...e }) {
	return /* @__PURE__ */ p(Sn, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Mn({ className: e, sideOffset: t = 4, container: r, ...i }) {
	return /* @__PURE__ */ p(Cn, {
		container: r,
		children: /* @__PURE__ */ p(wn, {
			"data-slot": "dropdown-menu-content",
			sideOffset: t,
			className: n("bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto py-2 shadow-lg", e),
			...i
		})
	});
}
function Nn({ ...e }) {
	return /* @__PURE__ */ p(Tn, {
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
	return /* @__PURE__ */ p(Dn, {
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
function Ln({ className: e, children: t, checked: r, variant: a = "default", ...o }) {
	return /* @__PURE__ */ p(On, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: In({
			variant: a,
			className: e
		}),
		checked: r,
		...o,
		children: [t, /* @__PURE__ */ p("span", {
			className: "ml-4 pointer-events-none flex items-center justify-center",
			children: /* @__PURE__ */ p(kn, { children: /* @__PURE__ */ p(i, { className: n({
				"size-6": a === "default",
				"size-4": a === "outline"
			}) }) })
		})]
	});
}
function Rn({ className: e, inset: t, ...r }) {
	return /* @__PURE__ */ p(En, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: n("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...r
	});
}
function zn({ className: e, size: t = "default", children: r, ...i }) {
	return /* @__PURE__ */ p("span", {
		className: "relative block",
		children: /* @__PURE__ */ p(Sn, {
			"data-slot": "dropdown-menu-trigger",
			"data-size": t,
			className: n("group leading-label flex justify-between items-center py-2 pl-4 pr-2 md:py-4 md:pl-6 md:pr-4 relative gap-4 bg-white/40 outline-none not-disabled:hover:ring-2 hover:ring-gray-15 disabled:text-gray-25 disabled:ring-gray-3 aria-invalid:ring-light-red aria-invalid:ring-2", e),
			...i,
			children: [r, /* @__PURE__ */ p(D, {
				asChild: !0,
				children: /* @__PURE__ */ p(s, { className: "size-6 shrink-0" })
			})]
		})
	});
}
//#endregion
export { Fn as a, zn as c, Nn as i, Pn as l, Ln as n, Rn as o, Mn as r, jn as s, An as t };

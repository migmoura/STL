import { d as e, h as t, n, p as r, t as i } from "../../scripts/parser-YLn5-Se2.js";
import { C as a, S as o, _ as s, a as c, b as l, c as u, l as d, r as f, v as p, y as m } from "../../scripts/utils-kL9Kd3j1.js";
import { C as h, D as g, Et as _, F as v, G as y, L as b, Q as x, St as S, U as C, Z as w, ct as T, dt as ee, gt as E, ht as te, kt as ne, ot as D, pt as O, rt as k, tt as re, w as ie, wt as A, xt as j, yt as ae } from "../../scripts/react-DLNUXPF9.js";
import { a as oe, i as se, n as M, o as N, r as P, s as F, t as ce, u as le } from "../../scripts/dist-CeBxUC6o.js";
import { n as ue, t as de } from "../../scripts/dist-eWzfRhmO.js";
import "../../scripts/esm-BB_C1aMS.js";
import "../../scripts/tag-NlcpsyaD.js";
import "../../scripts/i18next-BMrk8wO1.js";
import { t as fe } from "../../scripts/Trans-DV_2jHcY.js";
import { t as I } from "../../scripts/useTranslation-Cl_kknJx.js";
import "../../scripts/picture-DXSbVeQF.js";
import { c as pe, i as me, n as he, s as ge } from "../../scripts/dist-DkU8_-4E.js";
import "../../scripts/skeleton-B-n3kDr5.js";
import { o as _e, s as L } from "../../scripts/es2015-Lwokp0LN.js";
import { a as ve, n as ye, t as be } from "../../scripts/sheet-DHtRCcio.js";
import { a as xe, c as Se, i as Ce, l as we, o as Te, r as Ee, t as De } from "../../scripts/dropdown-menu-Cc3lBEdl.js";
import { m as Oe, p as ke } from "../../scripts/dist-B9_sdD5H.js";
import { n as Ae } from "../../scripts/input-B3cTQm8l.js";
import { t as je } from "../../scripts/index-DQhmSjJh.js";
import "../../scripts/i18next-41Eg61UZ.js";
import { n as Me } from "../../scripts/teaser-C41I5SfI.js";
import { t as R } from "../../scripts/simple-link-B-rNfzjO.js";
import { t as Ne } from "../../scripts/lazy-country-selection-sheet-gyxLJ1hG.js";
import { t as Pe } from "../../scripts/scroll-CqZfFQXp.js";
import { t as Fe } from "../../scripts/service-CNRTTfnr.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-navigation-menu@1.2.14_@types+react-dom@19.2.3_@types+react@19.2.14__@t_7563284ec2dc0b07b96e6ca399b56630/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
O();
var z = "NavigationMenu", [B, Ie, Le] = ue(z), [V, Re, ze] = ue(z), [H, Be] = le(z, [Le, ze]), [Ve, U] = H(z), [He, Ue] = H(z), We = D((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: o, delayDuration: s = 200, skipDelayDuration: c = 300, orientation: l = "horizontal", dir: u, ...d } = e, [f, p] = j(null), m = a(t, (e) => p(e)), h = de(u), g = E(0), v = E(0), y = E(0), [b, x] = j(!0), [S, C] = oe({
		prop: r,
		onChange: (e) => {
			let t = e !== "", n = c > 0;
			t ? (window.clearTimeout(y.current), n && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(() => x(!0), c)), i?.(e);
		},
		defaultProp: o ?? "",
		caller: z
	}), w = A(() => {
		window.clearTimeout(v.current), v.current = window.setTimeout(() => C(""), 150);
	}, [C]), T = A((e) => {
		window.clearTimeout(v.current), C(e);
	}, [C]), ee = A((e) => {
		S === e ? window.clearTimeout(v.current) : g.current = window.setTimeout(() => {
			window.clearTimeout(v.current), C(e);
		}, s);
	}, [
		S,
		C,
		s
	]);
	return _(() => () => {
		window.clearTimeout(g.current), window.clearTimeout(v.current), window.clearTimeout(y.current);
	}, []), /* @__PURE__ */ k(qe, {
		scope: n,
		isRootMenu: !0,
		value: S,
		dir: h,
		orientation: l,
		rootNavigationMenu: f,
		onTriggerEnter: (e) => {
			window.clearTimeout(g.current), b ? ee(e) : T(e);
		},
		onTriggerLeave: () => {
			window.clearTimeout(g.current), w();
		},
		onContentEnter: () => window.clearTimeout(v.current),
		onContentLeave: w,
		onItemSelect: (e) => {
			C((t) => t === e ? "" : e);
		},
		onItemDismiss: () => C(""),
		children: /* @__PURE__ */ k(P.nav, {
			"aria-label": "Main",
			"data-orientation": l,
			dir: h,
			...d,
			ref: m
		})
	});
});
We.displayName = z;
var Ge = "NavigationMenuSub", Ke = D((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = U(Ge, n), [l, u] = oe({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Ge
	});
	return /* @__PURE__ */ k(qe, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ k(P.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
Ke.displayName = Ge;
var qe = (e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, children: o, value: s, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, h] = j(null), [g, _] = j(/* @__PURE__ */ new Map()), [v, y] = j(null);
	return /* @__PURE__ */ k(Ve, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: s,
		previousValue: Oe(s),
		baseId: ce(),
		dir: i,
		orientation: a,
		viewport: m,
		onViewportChange: h,
		indicatorTrack: v,
		onIndicatorTrackChange: y,
		onTriggerEnter: L(u),
		onTriggerLeave: L(d),
		onContentEnter: L(f),
		onContentLeave: L(p),
		onItemSelect: L(c),
		onItemDismiss: L(l),
		onViewportContentChange: A((e, t) => {
			_((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: A((e) => {
			_((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ k(B.Provider, {
			scope: t,
			children: /* @__PURE__ */ k(He, {
				scope: t,
				items: g,
				children: o
			})
		})
	});
}, Je = "NavigationMenuList", Ye = D((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U(Je, n), a = /* @__PURE__ */ k(P.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ k(P.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ k(B.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ k(ht, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
Ye.displayName = Je;
var Xe = "NavigationMenuItem", [Ze, Qe] = H(Xe), $e = D((e, t) => {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = ce(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = E(null), c = E(null), l = E(null), u = E(() => {}), d = E(!1), f = A((e = "start") => {
		if (s.current) {
			u.current();
			let t = yt(s.current);
			t.length && bt(e === "start" ? t : t.reverse());
		}
	}, []), p = A(() => {
		if (s.current) {
			let e = yt(s.current);
			e.length && (u.current = xt(e));
		}
	}, []);
	return /* @__PURE__ */ k(Ze, {
		scope: n,
		value: o,
		triggerRef: c,
		contentRef: s,
		focusProxyRef: l,
		wasEscapeCloseRef: d,
		onEntryKeyDown: f,
		onFocusProxyEnter: f,
		onRootContentClose: p,
		onContentFocusOutside: p,
		children: /* @__PURE__ */ k(P.li, {
			...i,
			ref: t
		})
	});
});
$e.displayName = Xe;
var et = "NavigationMenuTrigger", tt = D((e, t) => {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, o = U(et, e.__scopeNavigationMenu), s = Qe(et, e.__scopeNavigationMenu), c = E(null), l = a(c, s.triggerRef, t), u = wt(o.baseId, s.value), d = Tt(o.baseId, s.value), f = E(!1), p = E(!1), m = s.value === o.value;
	return /* @__PURE__ */ k(ne, { children: [/* @__PURE__ */ k(B.ItemSlot, {
		scope: n,
		value: s.value,
		children: /* @__PURE__ */ k(vt, {
			asChild: !0,
			children: /* @__PURE__ */ k(P.button, {
				id: u,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": Ct(m),
				"aria-expanded": m,
				"aria-controls": d,
				...i,
				ref: l,
				onPointerEnter: F(e.onPointerEnter, () => {
					p.current = !1, s.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: F(e.onPointerMove, K(() => {
					r || p.current || s.wasEscapeCloseRef.current || f.current || (o.onTriggerEnter(s.value), f.current = !0);
				})),
				onPointerLeave: F(e.onPointerLeave, K(() => {
					r || (o.onTriggerLeave(), f.current = !1);
				})),
				onClick: F(e.onClick, () => {
					o.onItemSelect(s.value), p.current = m;
				}),
				onKeyDown: F(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: o.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[o.orientation];
					m && e.key === t && (s.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), m && /* @__PURE__ */ k(ne, { children: [/* @__PURE__ */ k(ke, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: s.focusProxyRef,
		onFocus: (e) => {
			let t = s.contentRef.current, n = e.relatedTarget, r = n === c.current, i = t?.contains(n);
			(r || !i) && s.onFocusProxyEnter(r ? "start" : "end");
		}
	}), o.viewport && /* @__PURE__ */ k("span", { "aria-owns": d })] })] });
});
tt.displayName = et;
var nt = "NavigationMenuLink", rt = "navigationMenu.linkSelect", it = D((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ k(vt, {
		asChild: !0,
		children: /* @__PURE__ */ k(P.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: F(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(rt, {
					bubbles: !0,
					cancelable: !0
				});
				t.addEventListener(rt, (e) => i?.(e), { once: !0 }), se(t, n), !n.defaultPrevented && !e.metaKey && se(t, new CustomEvent(G, {
					bubbles: !0,
					cancelable: !0
				}));
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
it.displayName = nt;
var at = "NavigationMenuIndicator", ot = D((e, t) => {
	let { forceMount: n, ...r } = e, i = U(at, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? ee.createPortal(/* @__PURE__ */ k(M, {
		present: n || a,
		children: /* @__PURE__ */ k(st, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
ot.displayName = at;
var st = D((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U(at, n), a = Ie(n), [o, s] = j(null), [c, l] = j(null), u = i.orientation === "horizontal", d = !!i.value;
	_(() => {
		let e = a().find((e) => e.value === i.value)?.ref.current;
		e && s(e);
	}, [a, i.value]);
	let f = () => {
		o && l({
			size: u ? o.offsetWidth : o.offsetHeight,
			offset: u ? o.offsetLeft : o.offsetTop
		});
	};
	return St(o, f), St(i.indicatorTrack, f), c ? /* @__PURE__ */ k(P.div, {
		"aria-hidden": !0,
		"data-state": d ? "visible" : "hidden",
		"data-orientation": i.orientation,
		...r,
		ref: t,
		style: {
			position: "absolute",
			...u ? {
				left: 0,
				width: c.size + "px",
				transform: `translateX(${c.offset}px)`
			} : {
				top: 0,
				height: c.size + "px",
				transform: `translateY(${c.offset}px)`
			},
			...r.style
		}
	}) : null;
}), W = "NavigationMenuContent", ct = D((e, t) => {
	let { forceMount: n, ...r } = e, i = U(W, e.__scopeNavigationMenu), o = Qe(W, e.__scopeNavigationMenu), s = a(o.contentRef, t), c = o.value === i.value, l = {
		value: o.value,
		triggerRef: o.triggerRef,
		focusProxyRef: o.focusProxyRef,
		wasEscapeCloseRef: o.wasEscapeCloseRef,
		onContentFocusOutside: o.onContentFocusOutside,
		onRootContentClose: o.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ k(lt, {
		forceMount: n,
		...l,
		ref: s
	}) : /* @__PURE__ */ k(M, {
		present: n || c,
		children: /* @__PURE__ */ k(ut, {
			"data-state": Ct(c),
			...l,
			ref: s,
			onPointerEnter: F(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: F(e.onPointerLeave, K(i.onContentLeave)),
			style: {
				pointerEvents: !c && i.isRootMenu ? "none" : void 0,
				...l.style
			}
		})
	});
});
ct.displayName = W;
var lt = D((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = U(W, e.__scopeNavigationMenu);
	return N(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), N(() => () => r(e.value), [e.value, r]), null;
}), G = "navigationMenu.rootContentDismiss", ut = D((e, t) => {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: o, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: l, ...u } = e, d = U(W, n), f = E(null), p = a(f, t), m = wt(d.baseId, r), h = Tt(d.baseId, r), g = Ie(n), v = E(null), { onItemDismiss: y } = d;
	_(() => {
		let e = f.current;
		if (d.isRootMenu && e) {
			let t = () => {
				y(), c(), e.contains(document.activeElement) && i.current?.focus();
			};
			return e.addEventListener(G, t), () => e.removeEventListener(G, t);
		}
	}, [
		d.isRootMenu,
		e.value,
		i,
		y,
		c
	]);
	let b = ae(() => {
		let e = g().map((e) => e.value);
		d.dir === "rtl" && e.reverse();
		let t = e.indexOf(d.value), n = e.indexOf(d.previousValue), i = r === d.value, a = n === e.indexOf(r);
		if (!i && !a) return v.current;
		let o = (() => {
			if (t !== n) {
				if (i && n !== -1) return t > n ? "from-end" : "from-start";
				if (a && t !== -1) return t > n ? "to-start" : "to-end";
			}
			return null;
		})();
		return v.current = o, o;
	}, [
		d.previousValue,
		d.value,
		d.dir,
		g,
		r
	]);
	return /* @__PURE__ */ k(ht, {
		asChild: !0,
		children: /* @__PURE__ */ k(_e, {
			id: h,
			"aria-labelledby": m,
			"data-motion": b,
			"data-orientation": d.orientation,
			...u,
			ref: p,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(G, {
					bubbles: !0,
					cancelable: !0
				});
				f.current?.dispatchEvent(e);
			},
			onFocusOutside: F(e.onFocusOutside, (e) => {
				l();
				let t = e.target;
				d.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: F(e.onPointerDownOutside, (e) => {
				let t = e.target, n = g().some((e) => e.ref.current?.contains(t)), r = d.isRootMenu && d.viewport?.contains(t);
				(n || r || !d.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: F(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = yt(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					bt(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : o.current?.focus();
				}
			}),
			onEscapeKeyDown: F(e.onEscapeKeyDown, (e) => {
				s.current = !0;
			})
		})
	});
}), dt = "NavigationMenuViewport", ft = D((e, t) => {
	let { forceMount: n, ...r } = e, i = !!U(dt, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ k(M, {
		present: n || i,
		children: /* @__PURE__ */ k(pt, {
			...r,
			ref: t
		})
	});
});
ft.displayName = dt;
var pt = D((e, t) => {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, s = U(dt, n), c = a(t, s.onViewportChange), l = Ue(W, e.__scopeNavigationMenu), [u, d] = j(null), [f, p] = j(null), m = u ? u?.width + "px" : void 0, h = u ? u?.height + "px" : void 0, g = !!s.value, _ = g ? s.value : s.previousValue;
	return St(f, () => {
		f && d({
			width: f.offsetWidth,
			height: f.offsetHeight
		});
	}), /* @__PURE__ */ k(P.div, {
		"data-state": Ct(g),
		"data-orientation": s.orientation,
		...i,
		ref: c,
		style: {
			pointerEvents: !g && s.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": m,
			"--radix-navigation-menu-viewport-height": h,
			...i.style
		},
		onPointerEnter: F(e.onPointerEnter, s.onContentEnter),
		onPointerLeave: F(e.onPointerLeave, K(s.onContentLeave)),
		children: Array.from(l.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = _ === e;
			return /* @__PURE__ */ k(M, {
				present: n || i,
				children: /* @__PURE__ */ k(ut, {
					...r,
					ref: o(t, (e) => {
						i && e && p(e);
					})
				})
			}, e);
		})
	});
}), mt = "FocusGroup", ht = D((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U(mt, n);
	return /* @__PURE__ */ k(V.Provider, {
		scope: n,
		children: /* @__PURE__ */ k(V.Slot, {
			scope: n,
			children: /* @__PURE__ */ k(P.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}), gt = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], _t = "FocusGroupItem", vt = D((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Re(n), a = U(_t, n);
	return /* @__PURE__ */ k(V.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ k(P.button, {
			...r,
			ref: t,
			onKeyDown: F(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...gt
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), gt.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => bt(t)), e.preventDefault();
				}
			})
		})
	});
});
function yt(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function bt(e) {
	let t = document.activeElement;
	return e.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function xt(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function St(e, t) {
	let n = L(t);
	N(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
function Ct(e) {
	return e ? "open" : "closed";
}
function wt(e, t) {
	return `${e}-trigger-${t}`;
}
function Tt(e, t) {
	return `${e}-content-${t}`;
}
function K(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var q = We, Et = Ke, J = Ye, Y = $e, X = tt, Dt = it, Ot = ot, Z = ct, kt = ft;
//#endregion
//#region src/components/ui/navigation-menu.tsx
O();
var At = D(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(q, {
	ref: r,
	className: f("relative flex flex-1 items-center", e),
	...n,
	children: [t, /* @__PURE__ */ k(Rt, {})]
}));
At.displayName = q.displayName;
var jt = D(({ className: e, ...t }, n) => /* @__PURE__ */ k(J, {
	ref: n,
	className: f("leading-0 group flex flex-1 list-none items-center", e),
	...t
}));
jt.displayName = J.displayName;
var Mt = Y, Nt = m("font-bold text-md leading-[24px] pb-5 hover:shadow-[inset_0_-3px_0_0] data-[state=open]:shadow-[inset_0_-4px_0_0] data-[state=open]:shadow-yellow data-[active]:shadow-[inset_0_-4px_0_0] data-[active]:shadow-yellow", {
	variants: { dark: {
		true: "text-white hover:shadow-white",
		false: "text-black hover:shadow-black"
	} },
	defaultVariants: { dark: !1 }
}), Pt = D(({ className: e, children: t, dark: n, ...r }, i) => /* @__PURE__ */ k(X, {
	ref: i,
	className: f(Nt({ dark: n }), "group", e),
	...r,
	children: t
}));
Pt.displayName = X.displayName;
var Ft = D(({ className: e, ...t }, n) => /* @__PURE__ */ k(Z, {
	ref: n,
	className: f("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52", e),
	...t
}));
Ft.displayName = Z.displayName;
var It = Dt, Lt = Et, Rt = D(({ className: e, ...t }, n) => /* @__PURE__ */ k("div", {
	className: f("absolute left-0 top-full flex justify-center"),
	children: /* @__PURE__ */ k(kt, {
		className: f("origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden bg-white text-neutral-950 shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", e),
		ref: n,
		...t
	})
}));
Rt.displayName = kt.displayName;
var zt = D(({ className: e, ...t }, n) => /* @__PURE__ */ k(Ot, {
	ref: n,
	className: f("top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", e),
	...t,
	children: /* @__PURE__ */ k("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md" })
}));
//#endregion
//#region src/features/navigation/components/navigation.tsx
zt.displayName = Ot.displayName, O();
function Bt({ children: e, href: t, list: n, className: r }) {
	let i = d(t);
	return n ? /* @__PURE__ */ k(X, {
		asChild: !0,
		children: /* @__PURE__ */ k(It, {
			asChild: !0,
			children: /* @__PURE__ */ k("span", {
				className: "h-full w-full flex items-center justify-between mr-6 pb-0.5",
				children: [/* @__PURE__ */ k("a", {
					href: t,
					className: f("ml-10 shadow-black hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow no-underline", r),
					children: e
				}), /* @__PURE__ */ k(w, {})]
			})
		})
	}) : /* @__PURE__ */ k(It, {
		asChild: !0,
		children: /* @__PURE__ */ k("a", {
			href: t,
			target: i ? "_blank" : void 0,
			className: f("flex items-center justify-between ml-10 mr-6 pb-0.5 shadow-black hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow no-underline", r),
			children: [e, i && /* @__PURE__ */ k(C, {})]
		})
	});
}
function Vt({ items: e, teaser: t, setTeaser: n }) {
	let [r, i] = j(void 0);
	return !e || e.length === 0 ? null : /* @__PURE__ */ k(J, {
		className: "flex flex-col animate-fade-x",
		children: /* @__PURE__ */ k(Pe, {
			className: "h-[calc(100dvh-226px)] max-h-[853px]",
			children: e?.map((e) => {
				let a = Array.isArray(e.children) && e.children.length > 0, o = e.link.value;
				return /* @__PURE__ */ k(Mt, {
					className: "group hover:bg-gray-4 active:bg-gray-35 outline-none focus-visible:ring-2 focus-visible:ring-yellow h-18 flex items-center w-full",
					onMouseEnter: () => {
						a && i(o), e.teaser ? n?.(e.teaser) : t && n?.(t);
					},
					onMouseLeave: () => {
						i(void 0);
					},
					value: o,
					children: [/* @__PURE__ */ k(Bt, {
						...e.link,
						list: a,
						className: f({ "font-bold": e.link.strong }),
						children: o
					}), r && a ? /* @__PURE__ */ k(Z, { children: /* @__PURE__ */ k(Lt, {
						className: "absolute w-full top-0 left-[calc(100%+1px)]",
						value: r,
						onValueChange: i,
						children: /* @__PURE__ */ k(Vt, {
							items: e.children,
							setTeaser: n,
							teaser: e.teaser ?? t
						})
					}) }) : null]
				}, o);
			})
		})
	});
}
var Ht = m("w-full pt-6 transition-colors duration-100 ease-in-out", {
	variants: { dark: {
		true: "bg-black",
		false: "bg-white border-b-1 border-gray-3"
	} },
	defaultVariants: { dark: !0 }
});
function Ut({ top: e, dark: t, defaultTeaser: n }) {
	let [r, i] = j(e.teaser ? e.teaser : n || void 0), [a, o] = he(r, 250);
	return _(() => {
		o(r);
	}, [r]), e.title ? /* @__PURE__ */ k(Mt, {
		value: e.title.value,
		children: [/* @__PURE__ */ k(Pt, {
			dark: t,
			children: e.title.value
		}), /* @__PURE__ */ k(Ft, { children: /* @__PURE__ */ k("div", {
			className: "w-screen h-[calc(100vh-178px)] max-h-[901px] border-b-1 border-t-1 border-gray-3",
			children: /* @__PURE__ */ k("div", {
				className: "max-w-screen-3xl h-full mx-auto",
				children: /* @__PURE__ */ k("div", {
					className: "ml-10 h-full grid grid-cols-[1fr_1fr_1fr_27.6%] divide-x-1 divide-gray-3",
					children: [
						/* @__PURE__ */ k("div", {
							className: "pt-6",
							children: /* @__PURE__ */ k(Lt, {
								asChild: !0,
								children: /* @__PURE__ */ k(Vt, {
									items: e.children,
									teaser: e.teaser ?? n,
									setTeaser: i
								})
							})
						}),
						/* @__PURE__ */ k("span", {}),
						/* @__PURE__ */ k("span", {}),
						a ? /* @__PURE__ */ k("div", {
							className: "h-[calc(100vh-178px)] max-h-[901px] p-10",
							children: /* @__PURE__ */ k(Me, {
								...a,
								TitleElement: "p",
								className: "animate-fade-x",
								aspectRatio: "aspect-3/4"
							}, a.title)
						}) : null
					]
				})
			})
		}) })]
	}) : null;
}
function Wt({ navigationItems: e, teaser: t, dark: n = !0 }) {
	let { lock: r, unlock: i, isLocked: a } = ge({ autoLock: !1 });
	return /* @__PURE__ */ k(At, {
		onValueChange: (e) => {
			e === "" && a ? i() : r();
		},
		className: Ht({
			dark: n,
			className: "hidden lg:block "
		}),
		children: /* @__PURE__ */ k("div", {
			className: "fluid",
			children: /* @__PURE__ */ k(jt, {
				className: "gap-10",
				children: e.map((e) => /* @__PURE__ */ k(Ut, {
					top: e,
					dark: n,
					defaultTeaser: t
				}, e.title?.value))
			})
		})
	});
}
//#endregion
//#region src/components/svg/logo.tsx
var Gt = () => /* @__PURE__ */ k("svg", {
	width: "171",
	height: "31",
	viewBox: "0 0 171 31",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ k("g", {
		"clip-path": "url(#clip0_37766_239)",
		children: [/* @__PURE__ */ k("path", {
			d: "M170.822 24H147.708V23.24H170.822V24ZM159.255 19.6L161.426 17.52L162.327 18.42L159.985 20.41C159.795 20.65 159.655 21.03 159.535 21.26H157.804C157.894 20.62 158.795 19.82 159.245 19.6H159.255ZM151.991 6.30997C151.921 6.32997 150.189 6.80997 150.189 6.80997C150.189 6.80997 149.389 7.11997 149.029 7.34997C148.679 7.58997 148.268 7.98997 148.248 8.19997L149.789 8.54997C150.029 8.28997 150.29 8.00997 150.52 7.81997L150.87 7.64997L152.151 6.34997C152.151 6.34997 152.101 6.27997 151.981 6.29997L151.991 6.30997ZM162.447 10.54C161.456 9.44997 160.626 8.43997 159.825 7.22997C160.346 6.23997 160.726 3.60997 160.486 2.59997C160.396 2.28997 159.535 1.15997 159.395 0.989969C159.185 0.779969 158.494 -3.05176e-05 158.164 -3.05176e-05C158.094 -3.05176e-05 158.024 0.0199687 157.994 0.0499687L158.084 0.92997C157.164 1.51997 155.953 2.31997 154.872 3.12997C154.872 3.43997 154.892 3.90997 154.922 4.07997C155.092 4.21997 155.273 4.33997 155.493 4.40997C155.923 4.33997 157.244 4.00997 157.594 4.05997L156.293 6.01997L154.802 7.07997L152.931 6.48997C152.811 6.46997 152.691 6.48997 152.621 6.58997L151.25 8.07997C151.18 8.14997 151.13 8.21997 151.13 8.38997L151.08 10.07C151.08 10.07 151.06 10.33 151.06 10.61C151.06 11.82 151.6 12.38 151.6 12.38L152.501 11.08C152.381 10.89 152.171 10.37 152.121 10.13C152.121 10.08 152.141 8.68997 152.141 8.68997L153.011 8.04997L155.333 9.67997C155.333 9.67997 155.973 10.86 156.583 11.57C156.984 12.07 158.995 13.41 159.965 13.98C160.055 14.5 160.275 15.35 160.436 15.8L163.277 18.71L161.596 20.81C161.006 21.19 160.436 21.87 160.486 22.51H162.427L162.637 21.4L164.958 18.82C165.078 18.68 165.078 18.61 165.008 18.39L164.348 16.17C164.678 15.79 165.389 14.85 165.389 13.71C165.389 11.65 163.137 11.13 162.437 10.54H162.447ZM166.089 13.97C165.949 13.43 165.739 12.81 165.569 12.51C165.569 12.51 165.659 12.41 165.849 12.53C166.039 12.65 167.24 13.48 167.24 13.48C167.85 14.38 168.23 18.07 168.26 19.39C167.69 19.13 166.889 18.68 166.369 18.18L166.089 13.97Z",
			fill: "#FFA500"
		}), /* @__PURE__ */ k("path", {
			d: "M106.053 13.17C106.053 11.75 105.603 10.64 104.372 10.64C103.141 10.64 102.641 11.75 102.641 13.17V22.51H104.082V24H96.1771V22.51H97.648V9.64997H96.1771V8.20997H102.401V10.62H102.471C103.061 9.29997 104.432 7.89997 106.633 7.89997C108.955 7.89997 110.376 9.31997 110.816 11.19C110.986 11.92 111.026 13.13 111.026 13.74V22.51H112.917V24H106.033V13.17H106.053ZM74.144 13.17C74.144 11.75 73.6938 10.64 72.463 10.64C71.2323 10.64 70.732 11.75 70.732 13.17V22.51H72.1729V24H64.2682V22.51H65.739V9.64997H64.2682V8.20997H70.4919V10.62H70.5619C71.1523 9.29997 72.5231 7.89997 74.7244 7.89997C77.0458 7.89997 78.4666 9.31997 78.9069 11.19C79.077 11.92 79.117 13.13 79.117 13.74V22.51H81.0081V24H74.124V13.17H74.144ZM119.631 9.64997V21.33C119.631 22.13 120.151 22.32 120.652 22.32C121.152 22.32 121.572 22.16 121.572 22.16V23.6C121.572 23.6 120.622 24.19 118.52 24.19C116.059 24.19 114.618 22.98 114.618 20.43V9.64997H112.937V8.58997C114.808 7.09997 116.979 5.39997 118.711 3.95997H119.631V8.21997H122.042V9.65997H119.631V9.64997ZM21.0325 -3.05176e-05C21.0325 -3.05176e-05 24.8448 3.79997 26.5958 5.76997V7.25997C24.9648 5.53997 21.5828 4.08997 18.4309 4.08997C11.3067 4.08997 6.84407 9.45997 6.84407 16.1C6.84407 22.74 11.0766 28.09 18.4309 28.09C22.0931 28.09 25.0349 26.36 26.6658 24.59V26.01C24.4445 29.06 20.3721 31.05 15.3091 31.05C6.25371 31.05 0 24.48 0 16.11C0 7.73997 6.93412 1.18997 15.3091 1.18997C17.4404 1.18997 19.3515 1.53997 21.0325 2.13997V0.00996876V-3.05176e-05ZM93.8958 19.79C93.1853 20.62 92.0747 21.25 90.4137 21.25C88.9729 21.25 86.7515 20.45 86.6515 16.78H95.0965C95.1165 16.5 95.1465 15.93 95.1465 15.65C95.1465 11.21 93.3254 7.89997 88.5726 7.89997C83.8198 7.89997 81.3583 11.57 81.3583 16.13C81.3583 20.69 83.7998 24.29 88.5726 24.29C91.6444 24.29 93.5856 22.85 94.7263 20.58L93.8958 19.8V19.79ZM86.6515 15.25C86.6515 11.09 86.9817 9.52997 88.4025 9.52997C89.8234 9.52997 90.1335 11.04 90.1736 15.25H86.6515ZM16.9201 16.05C16.9201 11.23 17.3703 9.09997 19.0013 9.09997C20.6323 9.09997 21.0825 11.23 21.0825 16.05C21.0825 20.87 20.6323 23 19.0013 23C17.3703 23 16.9201 20.87 16.9201 16.05ZM11.0566 16.1C11.0566 20.88 13.9883 24.75 19.0013 24.75C24.0143 24.75 26.946 20.87 26.946 16.1C26.946 11.33 24.0143 7.44997 19.0013 7.44997C13.9883 7.44997 11.0566 11.33 11.0566 16.1ZM38.1427 13.17C38.1427 11.75 37.6924 10.64 36.4617 10.64C35.2309 10.64 34.7306 11.75 34.7306 13.17V22.51H36.1715V24H28.2668V22.51H29.7377V9.64997H28.2668V8.20997H34.4905V10.62H34.5605C35.1509 9.29997 36.5217 7.89997 38.723 7.89997C41.0444 7.89997 42.4652 9.31997 42.9055 11.19C43.0756 11.92 43.1156 13.13 43.1156 13.74V22.51H45.0067V24H38.1226V13.17H38.1427ZM56.0333 4.01997C56.0333 5.40997 57.284 6.33997 59.0851 6.33997C60.8862 6.33997 62.1369 5.41997 62.1369 4.01997C62.1369 2.61997 60.8862 1.69997 59.0851 1.69997C57.284 1.69997 56.0333 2.61997 56.0333 4.01997ZM51.7207 9.64997V21.33C51.7207 22.13 52.241 22.32 52.7413 22.32C53.2416 22.32 53.6619 22.16 53.6619 22.16V23.6C53.6619 23.6 52.7113 24.19 50.6101 24.19C48.1486 24.19 46.7077 22.98 46.7077 20.43V9.64997H45.0267V8.58997C46.8979 7.09997 49.0691 5.39997 50.8002 3.95997H51.7207V8.21997H53.6619V9.65997H51.7207V9.64997ZM143.996 22.51H145.937V24H139.003V3.80997H137.272V2.36997H143.986V22.51H143.996ZM130.648 16.17C130.508 16.03 130.197 15.84 129.557 15.84C128.066 15.84 127.736 17.31 127.736 18.82C127.736 20.33 128.186 21.52 129.467 21.52C130.077 21.52 130.457 21.26 130.648 21.05V16.18V16.17ZM130.868 22.1H130.798C129.877 23.4 128.646 24.28 126.755 24.28C124.174 24.28 122.573 22.08 122.573 19.46C122.573 16.29 124.824 14.28 128.416 14.28C129.887 14.28 130.668 14.61 130.668 14.61V13.62C130.668 11.71 129.487 10.69 127.756 10.69C125.364 10.69 124.134 12.54 124.134 12.54L123.263 11.48C124.844 9.01997 127.286 7.90997 129.557 7.90997C133.389 7.90997 135.661 10.18 135.661 13.63V22.52H137.272V24.01H130.888V22.12L130.868 22.1ZM55.1127 24V22.51H56.5536V9.64997H55.1127V8.20997H61.5466V22.51H63.0174V24H55.1127Z",
			fill: "#FFA500"
		})]
	}), /* @__PURE__ */ k("defs", { children: /* @__PURE__ */ k("clipPath", {
		id: "clip0_37766_239",
		children: /* @__PURE__ */ k("rect", {
			width: "171",
			height: "31",
			fill: "white"
		})
	}) })]
});
//#endregion
//#region src/components/ui/meta.tsx
O();
var Kt = m("text-sm pb-0.5 leading-label focus-visible:outline-2 outline-pressed outline-offset-2 active:shadow-[inset_0_-1px_0_0] active:shadow-yellow", {
	variants: {
		active: {
			true: "shadow-[inset_0_-1px_0_0] shadow-yellow",
			false: "hover:shadow-[inset_0_-1px_0_0] hover:shadow-white"
		},
		disabled: {
			true: "text-gray-1 pointer-events-none text-decoration-none",
			false: "text-white"
		}
	},
	defaultVariants: {
		active: !1,
		disabled: !1
	}
});
function Q({ className: e, disabled: t, active: n, asChild: r = !1, ...i }) {
	return /* @__PURE__ */ k(r ? l : "a", {
		className: Kt({
			active: n,
			disabled: t,
			className: e
		}),
		...i
	});
}
//#endregion
//#region src/features/navigation/components/top-navigation.tsx
O();
var qt = te(() => import("../../scripts/search-sheet-CVWMvA8h.js")), Jt = te(() => import("../../scripts/search-flyout-BOmVnG2k.js"));
function $({ children: e, href: t, className: n, list: r, ...i }) {
	let a = !r && t ? Dt : "span", o = d(t);
	return /* @__PURE__ */ k(Y, {
		...i,
		className: "hover:bg-gray-4 data-[state=open]:bg-gray-4 active:bg-gray-35 outline-none focus-visible:ring-2 focus-visible:ring-yellow",
		children: /* @__PURE__ */ k(a, {
			href: r ? void 0 : t,
			className: f("flex items-center justify-between w-full py-6 px-6", n),
			children: [
				e,
				r ? /* @__PURE__ */ k(w, {}) : null,
				o ? /* @__PURE__ */ k(C, {}) : null
			]
		})
	});
}
function Yt({ items: e, children: t, parent: n }) {
	let { t: r } = I();
	return /* @__PURE__ */ k(q, {
		className: "bg-white",
		children: /* @__PURE__ */ k(J, { children: [t, e?.map((e) => {
			let { title: t, value: i, strong: a, href: o } = e.link || {};
			return e.children && e.children.length > 0 ? /* @__PURE__ */ k(Y, {
				value: t,
				children: [/* @__PURE__ */ k(X, {
					onPointerMove: (e) => e.preventDefault(),
					onPointerLeave: (e) => e.preventDefault(),
					asChild: !0,
					children: /* @__PURE__ */ k($, {
						...e.link,
						list: !0,
						children: i
					})
				}), /* @__PURE__ */ k(Z, {
					className: "absolute z-60 h-full w-full bg-white left-0 top-0 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
					children: [n ? /* @__PURE__ */ k("div", {
						className: "absolute -top-39 h-25 flex bg-white",
						children: /* @__PURE__ */ k(X, {
							onPointerDown: (e) => e.preventDefault(),
							className: "w-[calc(100vw-98px)] p-6 flex gap-0.5 items-center",
							children: [/* @__PURE__ */ k(x, { className: "shrink-0" }), /* @__PURE__ */ k("p", {
								className: "text-gray-1 truncate overflow-hidden whitespace-nowrap font-semibold",
								children: r("Back to {{parent}}", { parent: n })
							})]
						})
					}) : null, /* @__PURE__ */ k(Yt, {
						items: e.children,
						parent: t ?? i,
						children: /* @__PURE__ */ k(R, {
							href: o,
							className: "text-h4 mx-6 mb-6",
							children: i
						})
					})]
				})]
			}, t) : /* @__PURE__ */ k($, {
				...e.link,
				className: f({ "font-bold": a }),
				children: i
			}, t);
		})] })
	});
}
function Xt({ links: e, login: t, navigationItems: n, ...r }) {
	let i = "/" + window.location.pathname.split("/").slice(1, 3).join("/"), [a, o] = j(""), { t: s } = I();
	return /* @__PURE__ */ k("div", {
		id: "top",
		className: "z-10 sticky fluid flex gap-8 items-center justify-between pt-4.5 pb-5 md:py-7",
		children: [
			/* @__PURE__ */ k("a", {
				href: i,
				"aria-label": s("Continental Industries Home"),
				className: "w-40 h-7",
				children: /* @__PURE__ */ k(Gt, {})
			}),
			/* @__PURE__ */ k(q, {
				className: "@container hidden flex-1 lg:flex items-center gap-8 text-nowrap",
				children: [/* @__PURE__ */ k(T, {
					fallback: /* @__PURE__ */ k(Ae, {
						className: "text-white text-sm ml-auto w-fit xl:w-[400px]",
						"data-slot": "popover-trigger",
						placeholder: s("Search...")
					}),
					children: /* @__PURE__ */ k(Jt, { ...r })
				}), /* @__PURE__ */ k(J, {
					className: "flex items-center gap-8",
					children: [
						e.map((e) => {
							let { title: t, value: n, href: r } = e.link, i = e.children?.length ? e.children : void 0;
							return i ? /* @__PURE__ */ k(Y, {
								className: "relative flex",
								children: [/* @__PURE__ */ k(X, {
									asChild: !0,
									children: /* @__PURE__ */ k(Q, {
										href: r,
										title: t,
										className: "flex-none",
										children: n
									}, t)
								}), /* @__PURE__ */ k(Z, {
									className: "absolute top-full left-0 w-fit bg-white flex flex-col py-2 shadow-lg",
									children: i.map((e) => /* @__PURE__ */ k("div", {
										className: we({ variant: "outline" }),
										children: /* @__PURE__ */ k(R, {
											...e,
											children: e.value
										})
									}))
								})]
							}, r) : /* @__PURE__ */ k(Q, {
								href: r,
								title: t,
								className: "flex-none",
								children: n
							}, t);
						}),
						/* @__PURE__ */ k(T, {
							fallback: /* @__PURE__ */ k(Q, {
								className: "flex-none flex items-center gap-3",
								children: [/* @__PURE__ */ k(y, {}), "Global (EN)"]
							}),
							children: /* @__PURE__ */ k(Ne, { renderTrigger: (e, t) => /* @__PURE__ */ k(Q, {
								className: "flex-none flex items-center gap-3",
								children: [
									/* @__PURE__ */ k(y, {}),
									e,
									" (",
									t.toUpperCase(),
									")"
								]
							}) })
						}),
						t ? /* @__PURE__ */ k(Q, {
							href: t.href,
							title: t.title,
							className: "flex-none flex items-center gap-3",
							children: [/* @__PURE__ */ k(b, {}), t.value]
						}, t.title) : null
					]
				})]
			}),
			/* @__PURE__ */ k("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ k(T, {
					fallback: /* @__PURE__ */ k(p, {
						className: "block lg:hidden bg-blur-lg",
						size: "icon",
						variant: "tertiary",
						dark: !0,
						children: /* @__PURE__ */ k(g, {})
					}),
					children: /* @__PURE__ */ k(qt, { ...r })
				}), /* @__PURE__ */ k(be, { children: [/* @__PURE__ */ k(ve, {
					asChild: !0,
					children: /* @__PURE__ */ k(p, {
						"aria-label": s("Open navigation menu"),
						className: "block lg:hidden bg-blur-lg",
						size: "icon",
						variant: "secondary",
						dark: !0,
						children: /* @__PURE__ */ k(v, {})
					})
				}), /* @__PURE__ */ k(ye, {
					className: "w-full overflow-y-auto",
					children: /* @__PURE__ */ k(q, {
						className: "w-full h-full",
						value: a,
						onValueChange: o,
						children: /* @__PURE__ */ k(J, {
							className: "w-full h-full",
							children: /* @__PURE__ */ k("div", {
								className: "relative flex flex-col gap-25 justify-between mt-39",
								children: [/* @__PURE__ */ k("div", {
									className: "h-full px-6 flex flex-col gap-14",
									children: n.map((e) => /* @__PURE__ */ k(Y, { children: [/* @__PURE__ */ k(X, {
										onPointerMove: (e) => e.preventDefault(),
										onPointerLeave: (e) => e.preventDefault(),
										asChild: !0,
										children: /* @__PURE__ */ k("span", {
											className: "text-h4",
											children: e.title?.value
										})
									}), /* @__PURE__ */ k(Z, {
										className: "z-60 absolute h-[calc(100dvh-156px)] left-0 top-0 w-full bg-white transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
										children: [/* @__PURE__ */ k("div", {
											className: "absolute -top-39 h-25 flex bg-white",
											children: /* @__PURE__ */ k(X, {
												className: "p-6 flex gap-0.5 items-center font-semibold",
												children: [/* @__PURE__ */ k(x, {}), /* @__PURE__ */ k("span", {
													className: " text-gray-1",
													children: s("Back to overview")
												})]
											})
										}), /* @__PURE__ */ k(Yt, {
											items: e.children,
											parent: e.title?.value,
											children: /* @__PURE__ */ k("div", {
												className: "text-h4 mx-6 mb-6",
												children: e.title?.value
											})
										})]
									})] }, e.title?.value))
								}), /* @__PURE__ */ k("div", {
									className: "flex flex-col gap-8 px-6 pb-8",
									children: [
										e.map((e) => {
											let { title: t, value: n, href: r } = e.link, i = e.children?.length ? e.children : void 0;
											return i ? /* @__PURE__ */ k(Y, { children: [/* @__PURE__ */ k(X, {
												asChild: !0,
												children: /* @__PURE__ */ k("p", {
													className: "flex items-center gap-2",
													children: [n, /* @__PURE__ */ k(w, { className: "size-4" })]
												})
											}), /* @__PURE__ */ k(Z, {
												className: "absolute h-[calc(100dvh-156px)] left-0 top-0 w-full bg-white transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
												children: [/* @__PURE__ */ k("div", {
													className: "absolute -top-39 h-25 flex bg-white",
													children: /* @__PURE__ */ k(X, {
														className: "p-6 flex gap-0.5 items-center font-semibold",
														children: [/* @__PURE__ */ k(x, {}), /* @__PURE__ */ k("span", {
															className: " text-gray-1",
															children: s("Back to overview")
														})]
													})
												}), /* @__PURE__ */ k("div", {
													className: "absolute top-0 h-25 flex bg-white",
													children: /* @__PURE__ */ k(J, { children: [/* @__PURE__ */ k($, {
														href: r,
														className: "font-bold",
														children: n
													}, t), i.map((e) => /* @__PURE__ */ k($, {
														...e,
														children: e.value
													}, t))] })
												})]
											})] }, r) : /* @__PURE__ */ k(R, {
												href: r,
												title: t,
												children: n
											}, t);
										}),
										/* @__PURE__ */ k(T, {
											fallback: /* @__PURE__ */ k("button", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ k(y, {}), "Global (EN)"]
											}),
											children: /* @__PURE__ */ k(Ne, { renderTrigger: (e, t) => a === "" ? /* @__PURE__ */ k("button", {
												className: "flex lg:hidden items-center gap-2 w-fit",
												children: [
													/* @__PURE__ */ k(y, {}),
													e,
													" (",
													t.toUpperCase(),
													")"
												]
											}) : null })
										}),
										t ? /* @__PURE__ */ k("a", {
											className: "flex items-center gap-2",
											...t,
											children: [t.value, /* @__PURE__ */ k(b, {})]
										}, t.title) : null
									]
								})]
							})
						})
					})
				})] })]
			})
		]
	});
}
//#endregion
//#region src/hooks/use-scroll-position.ts
O();
var Zt = () => {
	let [e, t] = j(0);
	return _(() => {
		let e = () => {
			t(window.scrollY);
		};
		return window.addEventListener("scroll", e), e(), () => window.removeEventListener("scroll", e);
	}, []), e;
};
//#endregion
//#region src/components/ui/notice-banner.tsx
O();
var Qt = m("z-50 overflow-hidden transition-all duration-300 linear", {
	variants: {
		variant: {
			primary: "bg-yellow text-black",
			error: "bg-light-red text-white"
		},
		closing: {
			true: "h-0 py-0",
			false: "py-4"
		}
	},
	defaultVariants: {
		variant: "primary",
		closing: !1
	}
});
function $t({ open: e, message: t, primaryAction: n, secondaryAction: r, ariaLabel: i = "Site context notice", variant: a }) {
	let [o, s] = j(e), [c, l] = j(!1), [u, d] = pe("__conti-notice-banner-dismissed", !1);
	_(() => {
		e || m();
	}, [e]);
	let p = S(), m = () => {
		l(!0), setTimeout(() => {
			s(!1);
		}, 300);
	}, h = () => {
		setTimeout(() => {
			d(!0);
		}, 300), m();
	};
	return !o || u ? null : /* @__PURE__ */ k("section", {
		role: "region",
		"aria-labelledby": p,
		className: f(Qt({
			variant: a,
			closing: c
		})),
		children: [/* @__PURE__ */ k("p", {
			id: p,
			className: "sr-only",
			children: i
		}), /* @__PURE__ */ k("div", {
			className: "fluid relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ k("button", {
					type: "button",
					onClick: h,
					"aria-label": "Dismiss notice",
					className: "absolute right-3 top-0 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
					children: /* @__PURE__ */ k(ie, {})
				}),
				/* @__PURE__ */ k("div", {
					className: "text-sm leading-label pr-6 md:pr-0",
					children: t
				}),
				/* @__PURE__ */ k("div", {
					className: "w-full md:w-fit flex justify-end shrink-0 items-center gap-6",
					children: [
						n,
						r,
						/* @__PURE__ */ k("button", {
							type: "button",
							onClick: h,
							"aria-label": "Dismiss notice",
							className: "hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
							children: /* @__PURE__ */ k(ie, {})
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/features/navigation/utils.ts
function en(e) {
	if (!e || e.length === 0) return;
	let t = navigator.languages || [navigator.language];
	for (let n of t) {
		let [t, r] = n.toLowerCase().split("-");
		if (r) {
			let n = e.find((e) => c(e.localeCode, t) && c(e.countryCode, r));
			if (n) return `${n.countryCode}/${n.localeCode}`.toLowerCase();
			let i = e.find((e) => c(e.countryCode, r));
			if (i) return `${i.countryCode}/${i.localeCode}`.toLowerCase();
		}
		let i = e.find((e) => c(e.localeCode, t) && c(e.countryCode, t));
		if (i) return `${i.countryCode}/${i.localeCode}`.toLowerCase();
		let a = e.find((e) => c(e.countryCode, t));
		if (a) return `${a.countryCode}/${a.localeCode}`.toLowerCase();
	}
}
function tn(e, t) {
	for (let n of e) if (n) {
		let [e, r] = n.split("/"), i = t?.find((t) => c(t.countryCode, e) && c(t.localeCode, r));
		if (i) return i;
	}
}
//#endregion
//#region src/features/navigation/components/country-notice.tsx
O();
function nn() {
	let { t: e } = I(), [, t, n] = new URL(location.href).pathname.split("/"), { data: r } = je("/config/locales.json", Fe), i = u(r, "group"), a = `${t}/${n}`.toLowerCase(), [o, s] = j(null), [l, d] = me("__conti-preferred-locale", null), f = ae(() => en(r), [r]), m = r?.find((e) => c(e.countryCode, t) && c(e.localeCode, n)), h = tn([
		o,
		l,
		f
	], r) ?? m;
	if (!i) return null;
	let g = l !== a, _ = () => {
		o ? (d(o), window.location.href = `/${o}`) : d(a);
	}, v = (e, t) => {
		s(`${e}/${t}`.toLowerCase());
	};
	return /* @__PURE__ */ k($t, {
		open: g,
		message: /* @__PURE__ */ k(fe, {
			defaults: "You are currently on our <bold>{{locale}}</bold> website. To access your local information, please select your country/language.",
			values: { locale: `${m?.country} (${m?.locale})` },
			components: { bold: /* @__PURE__ */ k("strong", { className: "font-bold" }) }
		}),
		ariaLabel: "Country and language notice",
		primaryAction: /* @__PURE__ */ k(De, { children: [/* @__PURE__ */ k(Se, {
			className: "w-fit md:w-[435px] bg-opacity-40",
			children: [
				h?.country,
				" (",
				h?.locale,
				")"
			]
		}), /* @__PURE__ */ k(Ee, {
			align: "end",
			className: "max-h-[400px] w-(--radix-dropdown-menu-trigger-width) z-50 overflow-y-auto",
			children: Object.entries(i).map(([e, t]) => /* @__PURE__ */ k(Ce, { children: [/* @__PURE__ */ k(Te, { children: e }), t.map((e) => /* @__PURE__ */ k(xe, {
				onClick: () => v(e.countryCode, e.localeCode),
				children: [
					e.country,
					" (",
					e.locale,
					")"
				]
			}, `${e.countryCode}-${e.localeCode}`))] }, e))
		})] }),
		secondaryAction: /* @__PURE__ */ k(p, {
			variant: "secondary",
			onClick: _,
			children: e("Continue")
		})
	});
}
//#endregion
//#region src/features/navigation/blocks/header.tsx
var rn = (t) => {
	let a = t.length === 5 || t.length === 4 && !t.at(-2)?.querySelector(".navigation-teaser"), o = t[0], s = a ? t[1] : null, c = a ? t[2] : t[1], l = a ? t[3] : t[2], u = Array.from(c.querySelector("ul")?.children ?? []).map((t) => (t.querySelector("table")?.deleteRow(0), {
		title: e(t.querySelector("p")),
		teaser: r(t.querySelector("tbody")),
		children: n(Array.from(t.querySelectorAll(":scope > ul > li")), !0)
	})), d = l.querySelector("div")?.className == "navigation-teaser" ? r(l.querySelector("div")) : void 0;
	return {
		meta: Array.from(o.querySelector("ul")?.children ?? []).map((e) => ({
			link: i(e.querySelector("a"), !0),
			children: Array.from(e.querySelectorAll("li")).map((e) => i(e.querySelector("a"), !0))
		})),
		menu: u,
		login: s && i(s.querySelector("a")),
		teaser: d
	};
}, an = (e) => {
	if (!e) return { indexes: [] };
	let [n, ...r] = Array.from(e.children), a = window.location.pathname.split("/").slice(1, 3).join("/");
	return {
		link: i(n.querySelector("a"), !0),
		indexes: r.map((e) => {
			let [n, r] = Array.from(e.children);
			return {
				label: t(n.textContent),
				url: t(r.textContent).replace("global/en", a)
			};
		})
	};
}, on = async ([e, t, n]) => fetch(`/${e}/${t}/${n}`).then((e) => e.text()).then((e) => {
	let t = new DOMParser().parseFromString(e, "text/html");
	return {
		...rn(Array.from(t.body.children)),
		...an(t.body.querySelector(".search"))
	};
});
function sn() {
	let e = Zt(), t = new URL(location.href).pathname.split("/")[1], n = new URL(location.href).pathname.split("/")[2], { data: r } = je([
		t,
		n,
		"nav.plain.html"
	], on), { t: i } = I();
	if (!r) return null;
	let { meta: a, login: o, menu: c, teaser: l, indexes: u, link: d } = r;
	return /* @__PURE__ */ k(ne, { children: [/* @__PURE__ */ k(nn, {}), /* @__PURE__ */ k("div", {
		className: "flex w-full flex-col border-t-6 border-yellow bg-black",
		children: [
			/* @__PURE__ */ k("div", { children: [/* @__PURE__ */ k("span", {
				className: "sr-only focus-visible:not-sr-only",
				children: /* @__PURE__ */ k(s, {
					href: "#main",
					variant: "secondary",
					children: "Skip to content"
				})
			}), /* @__PURE__ */ k("span", {
				className: "sr-only focus-visible:not-sr-only",
				children: /* @__PURE__ */ k(s, {
					href: "#footer",
					variant: "secondary",
					children: "Skip to footer"
				})
			})] }),
			/* @__PURE__ */ k(Xt, {
				indexes: u,
				link: d,
				links: a,
				navigationItems: c,
				login: o
			}),
			/* @__PURE__ */ k(Wt, {
				navigationItems: c,
				dark: e < 50,
				teaser: l
			}),
			/* @__PURE__ */ k(p, {
				variant: "secondary",
				size: "icon",
				className: "fixed bottom-6 right-6",
				"aria-label": i("Scroll to Top."),
				onClick: () => {
					document.documentElement.scrollTo({
						top: 0,
						behavior: "smooth"
					});
				},
				children: /* @__PURE__ */ k(re, { className: "size-6" })
			})
		]
	})] });
}
//#endregion
//#region src/blocks/header/header.tsx
async function cn(e) {
	h(e).render(/* @__PURE__ */ k(sn, {}));
}
//#endregion
export { cn as default };

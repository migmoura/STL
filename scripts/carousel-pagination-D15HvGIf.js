import { y as e } from "./utils-kL9Kd3j1.js";
import { rt as t } from "./react-DLNUXPF9.js";
import { a as n, i as r } from "./carousel-_PEDPEI0.js";
//#region src/components/ui/carousel-pagination.tsx
var i = e("p-1 flex items-center", {
	variants: {
		elevated: {
			true: "shadow-lg",
			false: null
		},
		inverted: {
			true: "gap-4 border-1 border-white/50 bg-white/10 backdrop-blur-lg",
			false: "gap-8 bg-white"
		}
	},
	defaultVariants: {
		elevated: !1,
		inverted: !1
	}
}), a = e("rounded-full transition-colors disabled:bg-gray-4/10 disabled:cursor-not-allowed", {
	variants: {
		inverted: {
			true: null,
			false: null
		},
		selected: {
			true: "size-3",
			false: "bg-gray-4/50 size-2"
		}
	},
	compoundVariants: [{
		inverted: !0,
		selected: !0,
		className: "bg-white"
	}, {
		inverted: !1,
		selected: !0,
		className: "bg-yellow"
	}],
	defaultVariants: {
		inverted: !1,
		selected: !1
	}
});
function o({ current: e, scrollTo: o, total: s, ...c }) {
	let l = Array.from({ length: s });
	return /* @__PURE__ */ t("div", {
		className: i(c),
		children: [
			/* @__PURE__ */ t(n, {
				variant: c.inverted ? "tertiary" : "primary",
				dark: c.inverted
			}),
			/* @__PURE__ */ t("div", {
				className: "flex gap-4 items-center",
				children: l.map((n, r) => /* @__PURE__ */ t("button", {
					onClick: () => o?.(r),
					"aria-label": `Go to slide ${r + 1}${e === r ? " (current)" : ""}`,
					className: a({
						inverted: c.inverted,
						selected: e === r
					})
				}, r))
			}),
			/* @__PURE__ */ t(r, {
				variant: c.inverted ? "tertiary" : "primary",
				dark: c.inverted
			})
		]
	});
}
//#endregion
export { o as t };

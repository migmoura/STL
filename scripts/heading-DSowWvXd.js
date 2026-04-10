import { y as e } from "./utils-Cw5qLqcS.js";
import { Dt as t, ft as n } from "./react-w7ldCLEn.js";
//#region src/components/ui/heading.tsx
n();
var r = e("", { variants: {
	weight: {
		1: "text-h1",
		2: "text-h2",
		3: "text-h3",
		4: "text-h4",
		5: "text-h5"
	},
	display: { true: "text-display!" },
	strong: { true: "font-bold" },
	italic: { true: "italic" },
	underline: { true: "underline" }
} });
function i({ weight: e = "2", id: n = "", display: i = !1, strong: a = !1, italic: o = !1, underline: s = !1, className: c, ...l }) {
	return e ? t(`h${e}`, {
		id: n,
		className: r({
			weight: c?.includes("h") ? void 0 : e,
			display: i,
			strong: a,
			italic: o,
			underline: s,
			className: c
		}),
		...l
	}, l.children) : null;
}
i.displayName = "Heading";
//#endregion
export { i as t };

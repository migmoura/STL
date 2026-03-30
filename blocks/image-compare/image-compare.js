import { f as e, u as t } from "../../scripts/parser-YLn5-Se2.js";
import { r as n } from "../../scripts/utils-kL9Kd3j1.js";
import { C as r, gt as i, pt as a, rt as o, xt as s } from "../../scripts/react-DLNUXPF9.js";
import { t as c } from "../../scripts/picture-DXSbVeQF.js";
//#region src/features/content/simple-blocks/simple-image-compare.tsx
a();
function l({ pictures: e, caption: t, defaultValue: r = 50 }) {
	if (!e?.[0] || !e?.[1]) return null;
	let [a, l] = s(r), u = Math.min(100, Math.max(0, a)), d = i(null), f = i(!1), p = (e) => {
		let t = d.current?.getBoundingClientRect();
		if (!t) return;
		let n = (e - t.left) / t.width * 100;
		l(Math.min(100, Math.max(0, n)));
	}, m = (e) => {
		e.button === 0 && (f.current = !0, e.currentTarget.setPointerCapture(e.pointerId), p(e.clientX));
	}, h = (e) => {
		f.current && p(e.clientX);
	}, g = (e) => {
		f.current && (f.current = !1, e.currentTarget.releasePointerCapture(e.pointerId));
	}, _ = (e) => {
		let t = e.shiftKey ? 10 : 1;
		(e.key === "ArrowLeft" || e.key === "ArrowDown") && (e.preventDefault(), l((e) => Math.max(0, e - t))), (e.key === "ArrowRight" || e.key === "ArrowUp") && (e.preventDefault(), l((e) => Math.min(100, e + t))), e.key === "Home" && (e.preventDefault(), l(0)), e.key === "End" && (e.preventDefault(), l(100));
	};
	return /* @__PURE__ */ o("div", {
		className: n("image-full:w-full image-lg:w-3/4 image-md:w-1/2 image-sm:w-1/4", "image-center:mx-auto image-right:ml-auto"),
		children: [/* @__PURE__ */ o("div", {
			className: n("ratio-1-1:aspect-square ratio-1-2:aspect-1/2 ratio-2-1:aspect-2/1", "ratio-4-3:aspect-4/3 ratio-3-4:aspect-3/4", "ratio-16-9:aspect-16/9 ratio-9-16:aspect-9/16", "relative overflow-visible"),
			children: [/* @__PURE__ */ o("div", {
				ref: d,
				className: "absolute inset-0 grid grid-areas-stack w-full h-full overflow-hidden",
				style: { touchAction: "pan-y" },
				children: [
					/* @__PURE__ */ o(c, {
						...e[0],
						className: "area-stack block w-full h-full",
						imageClassName: "w-full h-full object-cover object-top"
					}),
					/* @__PURE__ */ o("div", {
						className: "area-stack overflow-hidden",
						style: { clipPath: `inset(0 ${100 - u}% 0 0)` },
						children: /* @__PURE__ */ o("div", {
							className: "grid grid-areas-stack w-full h-full",
							children: /* @__PURE__ */ o(c, {
								...e[1],
								className: "area-stack block w-full h-full",
								imageClassName: "w-full h-full object-cover object-top"
							})
						})
					}),
					/* @__PURE__ */ o("div", {
						className: "area-stack pointer-events-none",
						children: /* @__PURE__ */ o("div", {
							className: "absolute top-0 bottom-0 w-px bg-white/80",
							style: { left: `${u}%` },
							"aria-hidden": "true"
						})
					})
				]
			}), /* @__PURE__ */ o("div", {
				role: "slider",
				"aria-label": "Image comparison slider",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": u,
				"aria-valuetext": `${Math.round(u)}%`,
				tabIndex: 0,
				className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-4 rounded-full border border-yellow bg-white shadow-sm cursor-ew-resize ring-yellow transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden",
				style: { left: `${u}%` },
				onPointerDown: m,
				onPointerMove: h,
				onPointerUp: g,
				onPointerCancel: g,
				onKeyDown: _
			})]
		}), t && /* @__PURE__ */ o("p", {
			className: "mt-2 text-left text-gray-1 text-sm",
			children: t
		})]
	});
}
//#endregion
//#region src/blocks/image-compare/image-compare.tsx
function u(n) {
	let [i, a, s] = Array.from(n.children), c = {
		pictures: [e(i.querySelector("picture")), e(a.querySelector("picture"))],
		caption: t(s?.textContent)
	};
	r(n).render(/* @__PURE__ */ o(l, { ...c }));
}
//#endregion
export { u as default };

import { r as e } from "./utils-kL9Kd3j1.js";
import { $ as t, Et as n, X as r, gt as i, pt as a, rt as o, xt as s } from "./react-DLNUXPF9.js";
//#region src/components/ui/scroll.tsx
a();
function c({ children: a, className: c, listClassName: l }) {
	let u = i(null), [d, f] = s(!1), [p, m] = s(!0);
	n(() => {
		let e = u.current;
		if (!e) return;
		let t = () => {
			let { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
			f(t > 5), m(t + r < n - 5);
		};
		return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
	}, [a]);
	let h = (e) => {
		let t = u.current;
		if (!t) return;
		let n = e === "up" ? -80 : 80;
		t.scrollBy({
			top: n,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ o("div", {
		className: e("relative w-full overflow-y-clip", c),
		children: [
			d && /* @__PURE__ */ o("div", {
				className: "absolute top-0 left-0 right-0 z-10 flex bg-white",
				children: /* @__PURE__ */ o("button", {
					className: "flex w-full cursor-default items-center justify-center text-gray-1",
					onClick: () => h("up"),
					children: /* @__PURE__ */ o(r, { className: "size-6" })
				})
			}),
			/* @__PURE__ */ o("div", {
				ref: u,
				className: e("h-full overflow-y-auto scroll-smooth scrollbar-none", l),
				children: a
			}),
			p && /* @__PURE__ */ o("div", {
				className: "absolute bottom-0 left-0 right-0 z-10 flex bg-white",
				children: /* @__PURE__ */ o("button", {
					className: "w-full flex cursor-default items-center justify-center text-gray-1",
					onClick: () => h("down"),
					children: /* @__PURE__ */ o(t, { className: "size-6" })
				})
			})
		]
	});
}
//#endregion
export { c as t };

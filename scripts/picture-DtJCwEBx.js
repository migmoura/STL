import { bt as e, ft as t, nt as n } from "./react-w7ldCLEn.js";
//#region src/components/ui/picture.tsx
t();
function r({ sources: t, image: r, imageClassName: i, defaultSrc: a, ...o }) {
	let [s, c] = e(r.src);
	return /* @__PURE__ */ n("picture", {
		...o,
		children: [t?.map((e) => /* @__PURE__ */ n("source", {
			type: e.type,
			srcSet: e.srcset,
			media: e.media
		}, e.srcset)), /* @__PURE__ */ n("img", {
			className: i,
			loading: "lazy",
			alt: r.alt,
			src: s,
			onError: () => c(a)
		})]
	});
}
//#endregion
export { r as t };

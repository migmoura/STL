import { pt as e, rt as t, xt as n } from "./react-DLNUXPF9.js";
//#region src/components/ui/picture.tsx
e();
function r({ sources: e, image: r, imageClassName: i, defaultSrc: a, ...o }) {
	let [s, c] = n(r.src);
	return /* @__PURE__ */ t("picture", {
		...o,
		children: [e?.map((e) => /* @__PURE__ */ t("source", {
			type: e.type,
			srcSet: e.srcset,
			media: e.media
		}, e.srcset)), /* @__PURE__ */ t("img", {
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

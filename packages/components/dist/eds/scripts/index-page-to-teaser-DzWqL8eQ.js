import { o as e, s as t } from "./utils-Cw5qLqcS.js";
import { n } from "./use-search-7ykMqwIw.js";
//#region src/lib/map-tags-to-filter.tsx
function r(e, t) {
	return t ? {
		...e,
		records: Object.fromEntries(Object.keys(t).map((e) => [e, {
			label: e.charAt(0).toUpperCase() + e.slice(1),
			count: t[e]
		}]))
	} : {
		...e,
		records: {}
	};
}
//#endregion
//#region src/lib/index-page-to-teaser.ts
function i(r) {
	return (i) => ({
		title: e(i.title),
		description: t(i.description),
		hint: i.publishedAt ? n(i.publishedAt).toLocaleDateString("de-DE") : null,
		tags: i.tags,
		link: {
			href: i.path,
			title: t(i.title),
			value: r
		},
		image: {
			sources: [],
			image: {
				src: i.image,
				alt: i.imageAlt || i.title
			}
		}
	});
}
function a(e) {
	return (r) => ({
		title: t(r.title),
		description: t(r.description),
		hint: r.publishedAt ? n(r.publishedAt).toLocaleDateString("de-DE") : null,
		tags: r.tags,
		link: {
			href: r.path,
			title: t(r.title),
			value: e
		},
		image: {
			sources: [],
			image: {
				src: r.image,
				alt: r.imageAlt || r.title
			}
		}
	});
}
//#endregion
export { a as n, r, i as t };

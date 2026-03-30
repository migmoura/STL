import { d as e } from "./utils-kL9Kd3j1.js";
//#region ../../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.mjs
var { entries: t, setPrototypeOf: n, isFrozen: r, getPrototypeOf: i, getOwnPropertyDescriptor: a } = Object, { freeze: o, seal: s, create: c } = Object, { apply: l, construct: u } = typeof Reflect < "u" && Reflect;
o ||= function(e) {
	return e;
}, s ||= function(e) {
	return e;
}, l ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, u ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var ee = _(Array.prototype.forEach), d = _(Array.prototype.lastIndexOf), te = _(Array.prototype.pop), f = _(Array.prototype.push), ne = _(Array.prototype.splice), re = _(String.prototype.toLowerCase), ie = _(String.prototype.toString), ae = _(String.prototype.match), p = _(String.prototype.replace), oe = _(String.prototype.indexOf), se = _(String.prototype.trim), m = _(Object.prototype.hasOwnProperty), h = _(RegExp.prototype.test), g = v(TypeError);
function _(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return l(e, t, n);
	};
}
function v(e) {
	return function() {
		return u(e, [...arguments]);
	};
}
function y(e, t) {
	let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : re;
	n && n(e, null);
	let a = t.length;
	for (; a--;) {
		let n = t[a];
		if (typeof n == "string") {
			let e = i(n);
			e !== n && (r(t) || (t[a] = e), n = e);
		}
		e[n] = !0;
	}
	return e;
}
function ce(e) {
	for (let t = 0; t < e.length; t++) m(e, t) || (e[t] = null);
	return e;
}
function b(e) {
	let n = c(null);
	for (let [r, i] of t(e)) m(e, r) && (Array.isArray(i) ? n[r] = ce(i) : i && typeof i == "object" && i.constructor === Object ? n[r] = b(i) : n[r] = i);
	return n;
}
function x(e, t) {
	for (; e !== null;) {
		let n = a(e, t);
		if (n) {
			if (n.get) return _(n.get);
			if (typeof n.value == "function") return _(n.value);
		}
		e = i(e);
	}
	function n() {
		return null;
	}
	return n;
}
var le = o(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), ue = o(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), de = o([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), fe = o([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), pe = o(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), me = o([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), he = o(["#text"]), ge = o(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(".")), _e = o(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), ve = o(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), ye = o([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), be = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xe = s(/<%[\w\W]*|[\w\W]*%>/gm), S = s(/\$\{[\w\W]*/gm), C = s(/^data-[\-\w.\u00B7-\uFFFF]+$/), Se = s(/^aria-[\-\w]+$/), Ce = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), we = s(/^(?:\w+script|data):/i), Te = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ee = s(/^html$/i), De = s(/^[a-z][.\w]*(-[.\w]+)+$/i), Oe = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ARIA_ATTR: Se,
	ATTR_WHITESPACE: Te,
	CUSTOM_ELEMENT: De,
	DATA_ATTR: C,
	DOCTYPE_NAME: Ee,
	ERB_EXPR: xe,
	IS_ALLOWED_URI: Ce,
	IS_SCRIPT_OR_DATA: we,
	MUSTACHE_EXPR: be,
	TMPLIT_EXPR: S
}), w = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	progressingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, ke = function() {
	return typeof window > "u" ? null : window;
}, Ae = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, je = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
function Me() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ke(), n = (e) => Me(e);
	if (n.version = "3.3.3", n.removed = [], !e || !e.document || e.document.nodeType !== w.document || !e.Element) return n.isSupported = !1, n;
	let { document: r } = e, i = r, a = i.currentScript, { DocumentFragment: s, HTMLTemplateElement: l, Node: u, Element: _, NodeFilter: v, NamedNodeMap: ce = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: be, DOMParser: xe, trustedTypes: S } = e, C = _.prototype, Se = x(C, "cloneNode"), we = x(C, "remove"), Te = x(C, "nextSibling"), De = x(C, "childNodes"), T = x(C, "parentNode");
	if (typeof l == "function") {
		let e = r.createElement("template");
		e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
	}
	let E, D = "", { implementation: O, createNodeIterator: Ne, createDocumentFragment: Pe, getElementsByTagName: k } = r, { importNode: A } = i, j = je();
	n.isSupported = typeof t == "function" && typeof T == "function" && O && O.createHTMLDocument !== void 0;
	let { MUSTACHE_EXPR: M, ERB_EXPR: N, TMPLIT_EXPR: Fe, DATA_ATTR: Ie, ARIA_ATTR: Le, IS_SCRIPT_OR_DATA: Re, ATTR_WHITESPACE: P, CUSTOM_ELEMENT: ze } = Oe, { IS_ALLOWED_URI: Be } = Oe, F = null, Ve = y({}, [
		...le,
		...ue,
		...de,
		...pe,
		...he
	]), I = null, He = y({}, [
		...ge,
		..._e,
		...ve,
		...ye
	]), L = Object.seal(c(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), R = null, Ue = null, z = Object.seal(c(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), We = !0, Ge = !0, Ke = !1, qe = !0, B = !1, Je = !0, V = !1, Ye = !1, Xe = !1, H = !1, Ze = !1, Qe = !1, $e = !0, et = !1, tt = !0, U = !1, W = {}, G = null, nt = y({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]), rt = null, it = y({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), at = null, ot = y({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), st = "http://www.w3.org/1998/Math/MathML", ct = "http://www.w3.org/2000/svg", K = "http://www.w3.org/1999/xhtml", q = K, lt = !1, ut = null, dt = y({}, [
		st,
		ct,
		K
	], ie), ft = y({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), pt = y({}, ["annotation-xml"]), mt = y({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), J = null, ht = ["application/xhtml+xml", "text/html"], Y = null, X = null, gt = r.createElement("form"), _t = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, vt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!(X && X === e)) {
			if ((!e || typeof e != "object") && (e = {}), e = b(e), J = ht.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, Y = J === "application/xhtml+xml" ? ie : re, F = m(e, "ALLOWED_TAGS") ? y({}, e.ALLOWED_TAGS, Y) : Ve, I = m(e, "ALLOWED_ATTR") ? y({}, e.ALLOWED_ATTR, Y) : He, ut = m(e, "ALLOWED_NAMESPACES") ? y({}, e.ALLOWED_NAMESPACES, ie) : dt, at = m(e, "ADD_URI_SAFE_ATTR") ? y(b(ot), e.ADD_URI_SAFE_ATTR, Y) : ot, rt = m(e, "ADD_DATA_URI_TAGS") ? y(b(it), e.ADD_DATA_URI_TAGS, Y) : it, G = m(e, "FORBID_CONTENTS") ? y({}, e.FORBID_CONTENTS, Y) : nt, R = m(e, "FORBID_TAGS") ? y({}, e.FORBID_TAGS, Y) : b({}), Ue = m(e, "FORBID_ATTR") ? y({}, e.FORBID_ATTR, Y) : b({}), W = m(e, "USE_PROFILES") ? e.USE_PROFILES : !1, We = e.ALLOW_ARIA_ATTR !== !1, Ge = e.ALLOW_DATA_ATTR !== !1, Ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, qe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = e.SAFE_FOR_TEMPLATES || !1, Je = e.SAFE_FOR_XML !== !1, V = e.WHOLE_DOCUMENT || !1, H = e.RETURN_DOM || !1, Ze = e.RETURN_DOM_FRAGMENT || !1, Qe = e.RETURN_TRUSTED_TYPE || !1, Xe = e.FORCE_BODY || !1, $e = e.SANITIZE_DOM !== !1, et = e.SANITIZE_NAMED_PROPS || !1, tt = e.KEEP_CONTENT !== !1, U = e.IN_PLACE || !1, Be = e.ALLOWED_URI_REGEXP || Ce, q = e.NAMESPACE || K, ft = e.MATHML_TEXT_INTEGRATION_POINTS || ft, pt = e.HTML_INTEGRATION_POINTS || pt, L = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && _t(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && _t(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (Ge = !1), Ze && (H = !0), W && (F = y({}, he), I = c(null), W.html === !0 && (y(F, le), y(I, ge)), W.svg === !0 && (y(F, ue), y(I, _e), y(I, ye)), W.svgFilters === !0 && (y(F, de), y(I, _e), y(I, ye)), W.mathMl === !0 && (y(F, pe), y(I, ve), y(I, ye))), m(e, "ADD_TAGS") || (z.tagCheck = null), m(e, "ADD_ATTR") || (z.attributeCheck = null), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? z.tagCheck = e.ADD_TAGS : (F === Ve && (F = b(F)), y(F, e.ADD_TAGS, Y))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? z.attributeCheck = e.ADD_ATTR : (I === He && (I = b(I)), y(I, e.ADD_ATTR, Y))), e.ADD_URI_SAFE_ATTR && y(at, e.ADD_URI_SAFE_ATTR, Y), e.FORBID_CONTENTS && (G === nt && (G = b(G)), y(G, e.FORBID_CONTENTS, Y)), e.ADD_FORBID_CONTENTS && (G === nt && (G = b(G)), y(G, e.ADD_FORBID_CONTENTS, Y)), tt && (F["#text"] = !0), V && y(F, [
				"html",
				"head",
				"body"
			]), F.table && (y(F, ["tbody"]), delete R.tbody), e.TRUSTED_TYPES_POLICY) {
				if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw g("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw g("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				E = e.TRUSTED_TYPES_POLICY, D = E.createHTML("");
			} else E === void 0 && (E = Ae(S, a)), E !== null && typeof D == "string" && (D = E.createHTML(""));
			o && o(e), X = e;
		}
	}, yt = y({}, [
		...ue,
		...de,
		...fe
	]), bt = y({}, [...pe, ...me]), xt = function(e) {
		let t = T(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: q,
			tagName: "template"
		});
		let n = re(e.tagName), r = re(t.tagName);
		return ut[e.namespaceURI] ? e.namespaceURI === ct ? t.namespaceURI === K ? n === "svg" : t.namespaceURI === st ? n === "svg" && (r === "annotation-xml" || ft[r]) : !!yt[n] : e.namespaceURI === st ? t.namespaceURI === K ? n === "math" : t.namespaceURI === ct ? n === "math" && pt[r] : !!bt[n] : e.namespaceURI === K ? t.namespaceURI === ct && !pt[r] || t.namespaceURI === st && !ft[r] ? !1 : !bt[n] && (mt[n] || !yt[n]) : !!(J === "application/xhtml+xml" && ut[e.namespaceURI]) : !1;
	}, Z = function(e) {
		f(n.removed, { element: e });
		try {
			T(e).removeChild(e);
		} catch {
			we(e);
		}
	}, Q = function(e, t) {
		try {
			f(n.removed, {
				attribute: t.getAttributeNode(e),
				from: t
			});
		} catch {
			f(n.removed, {
				attribute: null,
				from: t
			});
		}
		if (t.removeAttribute(e), e === "is") if (H || Ze) try {
			Z(t);
		} catch {}
		else try {
			t.setAttribute(e, "");
		} catch {}
	}, St = function(e) {
		let t = null, n = null;
		if (Xe) e = "<remove></remove>" + e;
		else {
			let t = ae(e, /^[\r\n\t ]+/);
			n = t && t[0];
		}
		J === "application/xhtml+xml" && q === K && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = E ? E.createHTML(e) : e;
		if (q === K) try {
			t = new xe().parseFromString(i, J);
		} catch {}
		if (!t || !t.documentElement) {
			t = O.createDocument(q, "template", null);
			try {
				t.documentElement.innerHTML = lt ? D : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), q === K ? k.call(t, V ? "html" : "body")[0] : V ? t.documentElement : a;
	}, Ct = function(e) {
		return Ne.call(e.ownerDocument || e, e, v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION, null);
	}, wt = function(e) {
		return e instanceof be && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof ce) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
	}, Tt = function(e) {
		return typeof u == "function" && e instanceof u;
	};
	function $(e, t, r) {
		ee(e, (e) => {
			e.call(n, t, r, X);
		});
	}
	let Et = function(e) {
		let t = null;
		if ($(j.beforeSanitizeElements, e, null), wt(e)) return Z(e), !0;
		let r = Y(e.nodeName);
		if ($(j.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: F
		}), Je && e.hasChildNodes() && !Tt(e.firstElementChild) && h(/<[/\w!]/g, e.innerHTML) && h(/<[/\w!]/g, e.textContent) || e.nodeType === w.progressingInstruction || Je && e.nodeType === w.comment && h(/<[/\w]/g, e.data)) return Z(e), !0;
		if (!(z.tagCheck instanceof Function && z.tagCheck(r)) && (!F[r] || R[r])) {
			if (!R[r] && Ot(r) && (L.tagNameCheck instanceof RegExp && h(L.tagNameCheck, r) || L.tagNameCheck instanceof Function && L.tagNameCheck(r))) return !1;
			if (tt && !G[r]) {
				let t = T(e) || e.parentNode, n = De(e) || e.childNodes;
				if (n && t) {
					let r = n.length;
					for (let i = r - 1; i >= 0; --i) {
						let r = Se(n[i], !0);
						r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, Te(e));
					}
				}
			}
			return Z(e), !0;
		}
		return e instanceof _ && !xt(e) || (r === "noscript" || r === "noembed" || r === "noframes") && h(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Z(e), !0) : (B && e.nodeType === w.text && (t = e.textContent, ee([
			M,
			N,
			Fe
		], (e) => {
			t = p(t, e, " ");
		}), e.textContent !== t && (f(n.removed, { element: e.cloneNode() }), e.textContent = t)), $(j.afterSanitizeElements, e, null), !1);
	}, Dt = function(e, t, n) {
		if (Ue[t] || $e && (t === "id" || t === "name") && (n in r || n in gt)) return !1;
		if (!(Ge && !Ue[t] && h(Ie, t)) && !(We && h(Le, t)) && !(z.attributeCheck instanceof Function && z.attributeCheck(t, e))) {
			if (!I[t] || Ue[t]) {
				if (!(Ot(e) && (L.tagNameCheck instanceof RegExp && h(L.tagNameCheck, e) || L.tagNameCheck instanceof Function && L.tagNameCheck(e)) && (L.attributeNameCheck instanceof RegExp && h(L.attributeNameCheck, t) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(t, e)) || t === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && h(L.tagNameCheck, n) || L.tagNameCheck instanceof Function && L.tagNameCheck(n)))) return !1;
			} else if (!at[t] && !h(Be, p(n, P, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && oe(n, "data:") === 0 && rt[e]) && !(Ke && !h(Re, p(n, P, ""))) && n) return !1;
		}
		return !0;
	}, Ot = function(e) {
		return e !== "annotation-xml" && ae(e, ze);
	}, kt = function(e) {
		$(j.beforeSanitizeAttributes, e, null);
		let { attributes: t } = e;
		if (!t || wt(e)) return;
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: I,
			forceKeepAttr: void 0
		}, i = t.length;
		for (; i--;) {
			let { name: a, namespaceURI: o, value: s } = t[i], c = Y(a), l = s, u = a === "value" ? l : se(l);
			if (r.attrName = c, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, $(j.uponSanitizeAttribute, e, r), u = r.attrValue, et && (c === "id" || c === "name") && (Q(a, e), u = "user-content-" + u), Je && h(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, u)) {
				Q(a, e);
				continue;
			}
			if (c === "attributename" && ae(u, "href")) {
				Q(a, e);
				continue;
			}
			if (r.forceKeepAttr) continue;
			if (!r.keepAttr) {
				Q(a, e);
				continue;
			}
			if (!qe && h(/\/>/i, u)) {
				Q(a, e);
				continue;
			}
			B && ee([
				M,
				N,
				Fe
			], (e) => {
				u = p(u, e, " ");
			});
			let d = Y(e.nodeName);
			if (!Dt(d, c, u)) {
				Q(a, e);
				continue;
			}
			if (E && typeof S == "object" && typeof S.getAttributeType == "function" && !o) switch (S.getAttributeType(d, c)) {
				case "TrustedHTML":
					u = E.createHTML(u);
					break;
				case "TrustedScriptURL":
					u = E.createScriptURL(u);
					break;
			}
			if (u !== l) try {
				o ? e.setAttributeNS(o, a, u) : e.setAttribute(a, u), wt(e) ? Z(e) : te(n.removed);
			} catch {
				Q(a, e);
			}
		}
		$(j.afterSanitizeAttributes, e, null);
	}, At = function e(t) {
		let n = null, r = Ct(t);
		for ($(j.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) $(j.uponSanitizeShadowNode, n, null), Et(n), kt(n), n.content instanceof s && e(n.content);
		$(j.afterSanitizeShadowDOM, t, null);
	};
	return n.sanitize = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = null, a = null, o = null, c = null;
		if (lt = !e, lt && (e = "<!-->"), typeof e != "string" && !Tt(e)) if (typeof e.toString == "function") {
			if (e = e.toString(), typeof e != "string") throw g("dirty is not a string, aborting");
		} else throw g("toString is not a function");
		if (!n.isSupported) return e;
		if (Ye || vt(t), n.removed = [], typeof e == "string" && (U = !1), U) {
			if (e.nodeName) {
				let t = Y(e.nodeName);
				if (!F[t] || R[t]) throw g("root node is forbidden and cannot be sanitized in-place");
			}
		} else if (e instanceof u) r = St("<!---->"), a = r.ownerDocument.importNode(e, !0), a.nodeType === w.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
		else {
			if (!H && !B && !V && e.indexOf("<") === -1) return E && Qe ? E.createHTML(e) : e;
			if (r = St(e), !r) return H ? null : Qe ? D : "";
		}
		r && Xe && Z(r.firstChild);
		let l = Ct(U ? e : r);
		for (; o = l.nextNode();) Et(o), kt(o), o.content instanceof s && At(o.content);
		if (U) return e;
		if (H) {
			if (Ze) for (c = Pe.call(r.ownerDocument); r.firstChild;) c.appendChild(r.firstChild);
			else c = r;
			return (I.shadowroot || I.shadowrootmode) && (c = A.call(i, c, !0)), c;
		}
		let d = V ? r.outerHTML : r.innerHTML;
		return V && F["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && h(Ee, r.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + d), B && ee([
			M,
			N,
			Fe
		], (e) => {
			d = p(d, e, " ");
		}), E && Qe ? E.createHTML(d) : d;
	}, n.setConfig = function() {
		vt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), Ye = !0;
	}, n.clearConfig = function() {
		X = null, Ye = !1;
	}, n.isValidAttribute = function(e, t, n) {
		return X || vt({}), Dt(Y(e), Y(t), n);
	}, n.addHook = function(e, t) {
		typeof t == "function" && f(j[e], t);
	}, n.removeHook = function(e, t) {
		if (t !== void 0) {
			let n = d(j[e], t);
			return n === -1 ? void 0 : ne(j[e], n, 1)[0];
		}
		return te(j[e]);
	}, n.removeHooks = function(e) {
		j[e] = [];
	}, n.removeAllHooks = function() {
		j = je();
	}, n;
}
var T = Me();
//#endregion
//#region src/lib/parser.ts
function E(e) {
	return Array.from(e.attributes).reduce((e, t) => (e[t.name] = t.value, e), {});
}
function D(e) {
	if (e) return new DOMParser().parseFromString(e, "text/html").documentElement.textContent?.trim();
}
function O(e) {
	if (!e) throw Error("String is not valid");
	return new DOMParser().parseFromString(e, "text/html").documentElement.textContent?.trim() ?? "";
}
function Ne(e) {
	if (!e?.src) throw Error("Image has no src attribute");
	return {
		src: e?.src,
		alt: e?.alt
	};
}
function Pe(e, t = void 0) {
	if (!e) return;
	let n = e.querySelector("a[href$=\".mp4\"], a[href$=\".webm\"]");
	if (n?.href) return {
		type: "video",
		sources: [{ src: n.href }],
		poster: e.querySelector("picture")?.querySelector("img")?.getAttribute("src")
	};
	if (e.querySelector("picture")) {
		let n = k(e);
		return n ? {
			type: "image",
			...n,
			image: {
				...n.image,
				altText: t
			}
		} : void 0;
	}
}
function k(e) {
	if (!e || e?.innerHTML === "") return;
	let t = e.querySelector("img"), n = Array.from(e.querySelectorAll("source")).map((e) => ({
		srcset: e.getAttribute("srcset") ?? void 0,
		type: e.getAttribute("type") ?? void 0,
		media: e.getAttribute("media") ?? void 0
	}));
	return {
		image: Ne(t),
		sources: n
	};
}
function A(t, n = !1) {
	if (!t?.getAttribute("href")) throw Error("Anchor element has no link content");
	let r = t.getAttribute("href");
	return {
		href: n ? e(r) : r,
		title: t.getAttribute("title") ?? void 0,
		value: O(t.innerHTML),
		strong: t.parentElement?.tagName === "STRONG",
		italic: t.parentElement?.tagName === "EM",
		underline: t.parentElement?.tagName === "U"
	};
}
var j = (e) => {
	let t = M(e);
	return {
		id: e?.id,
		weight: e?.tagName.replace("H", ""),
		...t
	};
}, M = (e) => ({
	value: D(e?.innerHTML),
	strong: !!e?.querySelector("strong"),
	italic: !!e?.querySelector("em"),
	underline: !!e?.querySelector("u")
}), N = (e) => {
	let [t, n] = Array.from(e.children), r = t.querySelector("a");
	try {
		return {
			variant: n.innerHTML ? O(n.innerHTML) : "primary",
			link: r ? A(r) : null,
			universalEditor: E(e)
		};
	} catch (e) {
		e instanceof Error && console.error("Element has no anchor element.");
	}
	return null;
}, Fe = (e) => e.map((e) => N(e)).filter(Boolean), Ie = (e, t = !1) => e.map((e) => {
	let n = e.querySelector("a"), r = e.querySelectorAll(":scope > ul > li");
	e.querySelector("table")?.deleteRow(0);
	try {
		return {
			link: A(n, t),
			teaser: P(e.querySelector("tbody")),
			children: Ie(Array.from(r), t)
		};
	} catch (e) {
		e instanceof Error && console.error("List item has no anchor element.");
	}
	return null;
}).filter(Boolean), Le = (e) => e.map((e) => {
	let [t, n] = e.querySelectorAll("p"), r = e.querySelector("picture"), i = e.querySelector("a"), a;
	try {
		a = A(i);
	} catch {
		a = void 0;
	}
	try {
		return {
			link: a,
			picture: k(r),
			heading: D(t?.innerHTML),
			copy: D(n?.innerHTML),
			universalEditor: E(e)
		};
	} catch (e) {
		e instanceof Error && console.error("Big Image Item has an issue: ", e.message);
	}
	return { universalEditor: E(e) };
}), Re = (e) => e.map((e) => {
	let [t, n, r] = Array.from(e.children), i = t.querySelector("picture");
	try {
		return {
			title: O(n.textContent),
			description: r.innerHTML,
			icon: k(i)
		};
	} catch (e) {
		e instanceof Error && console.error("Icon Teaser has an issue: ", e.message);
	}
	return null;
}).filter(Boolean);
function P(e) {
	if (!e) return;
	let t = Array.from(e.children), n = t[0]?.querySelector("picture"), r = t[3]?.querySelector("a"), i = r ? A(r) : void 0, a = D(r?.textContent);
	try {
		return {
			image: n ? k(n) : null,
			title: D(t[1]?.textContent),
			description: t[2]?.innerHTML,
			link: i,
			cta: a
		};
	} catch (e) {
		e instanceof Error && console.error("Icon Teaser has an issue: ", e.message);
	}
}
var ze = (e) => e.map((e) => P(e)).filter(Boolean);
function Be(e, t, n) {
	try {
		return {
			headline: j(e),
			subHeadline: t ? O(t) : void 0,
			link: n ? A(n) : void 0
		};
	} catch {
		return { headline: void 0 };
	}
}
//#endregion
export { T as _, Fe as a, Re as c, M as d, k as f, E as g, O as h, N as i, Pe as l, ze as m, Ie as n, j as o, P as p, Le as r, Be as s, A as t, D as u };

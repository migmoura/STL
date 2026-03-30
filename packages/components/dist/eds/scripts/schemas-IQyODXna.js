import { b as e, r as t } from "./utils-kL9Kd3j1.js";
import { Dt as n, J as r, St as i, Tt as a, Y as o, dt as s, pt as c, rt as l } from "./react-DLNUXPF9.js";
import { t as u } from "./dist-DlxyKVcb.js";
//#region ../../node_modules/.pnpm/react-hook-form@7.71.2_react@19.2.4/node_modules/react-hook-form/dist/index.esm.mjs
c();
var d = (e) => e.type === "checkbox", f = (e) => e instanceof Date, p = (e) => e == null, m = (e) => typeof e == "object", h = (e) => !p(e) && !Array.isArray(e) && m(e) && !f(e), g = (e) => h(e) && e.target ? d(e.target) ? e.target.checked : e.target.value : e, _ = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, v = (e, t) => e.has(_(t)), y = (e) => {
	let t = e.constructor && e.constructor.prototype;
	return h(t) && t.hasOwnProperty("isPrototypeOf");
}, b = typeof window < "u" && window.HTMLElement !== void 0 && typeof document < "u";
function x(e) {
	if (e instanceof Date) return new Date(e);
	let t = typeof FileList < "u" && e instanceof FileList;
	if (b && (e instanceof Blob || t)) return e;
	let n = Array.isArray(e);
	if (!n && !(h(e) && y(e))) return e;
	let r = n ? [] : Object.create(Object.getPrototypeOf(e));
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = x(e[t]));
	return r;
}
var S = (e) => /^\w*$/.test(e), C = (e) => e === void 0, w = (e) => Array.isArray(e) ? e.filter(Boolean) : [], T = (e) => w(e.replace(/["|']|\]/g, "").split(/\.|\[/)), E = (e, t, n) => {
	if (!t || !h(e)) return n;
	let r = (S(t) ? [t] : T(t)).reduce((e, t) => p(e) ? e : e[t], e);
	return C(r) || r === e ? C(e[t]) ? n : e[t] : r;
}, D = (e) => typeof e == "boolean", O = (e) => typeof e == "function", k = (e, t, n) => {
	let r = -1, i = S(t) ? [t] : T(t), a = i.length, o = a - 1;
	for (; ++r < a;) {
		let t = i[r], a = n;
		if (r !== o) {
			let n = e[t];
			a = h(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
		}
		if (t === "__proto__" || t === "constructor" || t === "prototype") return;
		e[t] = a, e = e[t];
	}
}, A = {
	BLUR: "blur",
	FOCUS_OUT: "focusout",
	CHANGE: "change"
}, j = {
	onBlur: "onBlur",
	onChange: "onChange",
	onSubmit: "onSubmit",
	onTouched: "onTouched",
	all: "all"
}, M = {
	max: "max",
	min: "min",
	maxLength: "maxLength",
	minLength: "minLength",
	pattern: "pattern",
	required: "required",
	validate: "validate"
}, N = s.createContext(null);
N.displayName = "HookFormControlContext";
var P = () => s.useContext(N), ee = (e, t, n, r = !0) => {
	let i = { defaultValues: t._defaultValues };
	for (let a in e) Object.defineProperty(i, a, { get: () => {
		let i = a;
		return t._proxyFormState[i] !== j.all && (t._proxyFormState[i] = !r || j.all), n && (n[i] = !0), e[i];
	} });
	return i;
}, te = typeof window < "u" ? s.useLayoutEffect : s.useEffect;
function F(e) {
	let t = P(), { control: n = t, disabled: r, name: i, exact: a } = e || {}, [o, c] = s.useState(n._formState), l = s.useRef({
		isDirty: !1,
		isLoading: !1,
		dirtyFields: !1,
		touchedFields: !1,
		validatingFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	});
	return te(() => n._subscribe({
		name: i,
		formState: l.current,
		exact: a,
		callback: (e) => {
			!r && c({
				...n._formState,
				...e
			});
		}
	}), [
		i,
		r,
		a
	]), s.useEffect(() => {
		l.current.isValid && n._setValid(!0);
	}, [n]), s.useMemo(() => ee(o, n, l.current, !1), [o, n]);
}
var I = (e) => typeof e == "string", ne = (e, t, n, r, i) => I(e) ? (r && t.watch.add(e), E(n, e, i)) : Array.isArray(e) ? e.map((e) => (r && t.watch.add(e), E(n, e))) : (r && (t.watchAll = !0), n), re = (e) => p(e) || !m(e);
function L(e, t, n = /* @__PURE__ */ new WeakSet()) {
	if (re(e) || re(t)) return Object.is(e, t);
	if (f(e) && f(t)) return Object.is(e.getTime(), t.getTime());
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length !== i.length) return !1;
	if (n.has(e) || n.has(t)) return !0;
	n.add(e), n.add(t);
	for (let a of r) {
		let r = e[a];
		if (!i.includes(a)) return !1;
		if (a !== "ref") {
			let e = t[a];
			if (f(r) && f(e) || h(r) && h(e) || Array.isArray(r) && Array.isArray(e) ? !L(r, e, n) : !Object.is(r, e)) return !1;
		}
	}
	return !0;
}
function ie(e) {
	let t = P(), { control: n = t, name: r, defaultValue: i, disabled: a, exact: o, compute: c } = e || {}, l = s.useRef(i), u = s.useRef(c), d = s.useRef(void 0), f = s.useRef(n), p = s.useRef(r);
	u.current = c;
	let [m, h] = s.useState(() => {
		let e = n._getWatch(r, l.current);
		return u.current ? u.current(e) : e;
	}), g = s.useCallback((e) => {
		let t = ne(r, n._names, e || n._formValues, !1, l.current);
		return u.current ? u.current(t) : t;
	}, [
		n._formValues,
		n._names,
		r
	]), _ = s.useCallback((e) => {
		if (!a) {
			let t = ne(r, n._names, e || n._formValues, !1, l.current);
			if (u.current) {
				let e = u.current(t);
				L(e, d.current) || (h(e), d.current = e);
			} else h(t);
		}
	}, [
		n._formValues,
		n._names,
		a,
		r
	]);
	te(() => ((f.current !== n || !L(p.current, r)) && (f.current = n, p.current = r, _()), n._subscribe({
		name: r,
		formState: { values: !0 },
		exact: o,
		callback: (e) => {
			_(e.values);
		}
	})), [
		n,
		o,
		r,
		_
	]), s.useEffect(() => n._removeUnmounted());
	let v = f.current !== n, y = p.current, b = s.useMemo(() => {
		if (a) return null;
		let e = !v && !L(y, r);
		return v || e ? g() : null;
	}, [
		a,
		v,
		r,
		y,
		g
	]);
	return b === null ? m : b;
}
function R(e) {
	let t = P(), { name: n, disabled: r, control: i = t, shouldUnregister: a, defaultValue: o, exact: c = !0 } = e, l = v(i._names.array, n), u = ie({
		control: i,
		name: n,
		defaultValue: s.useMemo(() => E(i._formValues, n, E(i._defaultValues, n, o)), [
			i,
			n,
			o
		]),
		exact: c
	}), d = F({
		control: i,
		name: n,
		exact: c
	}), f = s.useRef(e), p = s.useRef(void 0), m = s.useRef(i.register(n, {
		...e.rules,
		value: u,
		...D(e.disabled) ? { disabled: e.disabled } : {}
	}));
	f.current = e;
	let h = s.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: !0,
			get: () => !!E(d.errors, n)
		},
		isDirty: {
			enumerable: !0,
			get: () => !!E(d.dirtyFields, n)
		},
		isTouched: {
			enumerable: !0,
			get: () => !!E(d.touchedFields, n)
		},
		isValidating: {
			enumerable: !0,
			get: () => !!E(d.validatingFields, n)
		},
		error: {
			enumerable: !0,
			get: () => E(d.errors, n)
		}
	}), [d, n]), _ = s.useCallback((e) => m.current.onChange({
		target: {
			value: g(e),
			name: n
		},
		type: A.CHANGE
	}), [n]), y = s.useCallback(() => m.current.onBlur({
		target: {
			value: E(i._formValues, n),
			name: n
		},
		type: A.BLUR
	}), [n, i._formValues]), b = s.useCallback((e) => {
		let t = E(i._fields, n);
		t && t._f && e && (t._f.ref = {
			focus: () => O(e.focus) && e.focus(),
			select: () => O(e.select) && e.select(),
			setCustomValidity: (t) => O(e.setCustomValidity) && e.setCustomValidity(t),
			reportValidity: () => O(e.reportValidity) && e.reportValidity()
		});
	}, [i._fields, n]), S = s.useMemo(() => ({
		name: n,
		value: u,
		...D(r) || d.disabled ? { disabled: d.disabled || r } : {},
		onChange: _,
		onBlur: y,
		ref: b
	}), [
		n,
		r,
		d.disabled,
		_,
		y,
		b,
		u
	]);
	return s.useEffect(() => {
		let e = i._options.shouldUnregister || a, t = p.current;
		t && t !== n && !l && i.unregister(t), i.register(n, {
			...f.current.rules,
			...D(f.current.disabled) ? { disabled: f.current.disabled } : {}
		});
		let r = (e, t) => {
			let n = E(i._fields, e);
			n && n._f && (n._f.mount = t);
		};
		if (r(n, !0), e) {
			let e = x(E(i._options.defaultValues, n, f.current.defaultValue));
			k(i._defaultValues, n, e), C(E(i._formValues, n)) && k(i._formValues, n, e);
		}
		return !l && i.register(n), p.current = n, () => {
			(l ? e && !i._state.action : e) ? i.unregister(n) : r(n, !1);
		};
	}, [
		n,
		i,
		l,
		a
	]), s.useEffect(() => {
		i._setDisabledField({
			disabled: r,
			name: n
		});
	}, [
		r,
		n,
		i
	]), s.useMemo(() => ({
		field: S,
		formState: d,
		fieldState: h
	}), [
		S,
		d,
		h
	]);
}
var ae = (e) => e.render(R(e)), z = s.createContext(null);
z.displayName = "HookFormContext";
var oe = () => s.useContext(z), B = (e) => {
	let { children: t, watch: n, getValues: r, getFieldState: i, setError: a, clearErrors: o, setValue: c, trigger: l, formState: u, resetField: d, reset: f, handleSubmit: p, unregister: m, control: h, register: g, setFocus: _, subscribe: v } = e;
	return s.createElement(z.Provider, { value: s.useMemo(() => ({
		watch: n,
		getValues: r,
		getFieldState: i,
		setError: a,
		clearErrors: o,
		setValue: c,
		trigger: l,
		formState: u,
		resetField: d,
		reset: f,
		handleSubmit: p,
		unregister: m,
		control: h,
		register: g,
		setFocus: _,
		subscribe: v
	}), [
		o,
		h,
		u,
		i,
		r,
		p,
		g,
		f,
		d,
		a,
		_,
		c,
		v,
		l,
		m,
		n
	]) }, s.createElement(N.Provider, { value: h }, t));
}, V = (e, t, n, r, i) => t ? {
	...n[e],
	types: {
		...n[e] && n[e].types ? n[e].types : {},
		[r]: i || !0
	}
} : {}, se = (e) => Array.isArray(e) ? e : [e], ce = () => {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (t) => {
			for (let n of e) n.next && n.next(t);
		},
		subscribe: (t) => (e.push(t), { unsubscribe: () => {
			e = e.filter((e) => e !== t);
		} }),
		unsubscribe: () => {
			e = [];
		}
	};
};
function le(e, t) {
	let n = {};
	for (let r in e) if (e.hasOwnProperty(r)) {
		let i = e[r], a = t[r];
		if (i && h(i) && a) {
			let e = le(i, a);
			h(e) && (n[r] = e);
		} else e[r] && (n[r] = a);
	}
	return n;
}
var H = (e) => h(e) && !Object.keys(e).length, ue = (e) => e.type === "file", de = (e) => {
	if (!b) return !1;
	let t = e ? e.ownerDocument : 0;
	return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, fe = (e) => e.type === "select-multiple", pe = (e) => e.type === "radio", me = (e) => pe(e) || d(e), he = (e) => de(e) && e.isConnected;
function ge(e, t) {
	let n = t.slice(0, -1).length, r = 0;
	for (; r < n;) e = C(e) ? r++ : e[t[r++]];
	return e;
}
function _e(e) {
	for (let t in e) if (e.hasOwnProperty(t) && !C(e[t])) return !1;
	return !0;
}
function U(e, t) {
	let n = Array.isArray(t) ? t : S(t) ? [t] : T(t), r = n.length === 1 ? e : ge(e, n), i = n.length - 1, a = n[i];
	return r && delete r[a], i !== 0 && (h(r) && H(r) || Array.isArray(r) && _e(r)) && U(e, n.slice(0, -1)), e;
}
var W = (e) => {
	for (let t in e) if (O(e[t])) return !0;
	return !1;
};
function ve(e) {
	return Array.isArray(e) || h(e) && !W(e);
}
function G(e, t = {}) {
	for (let n in e) {
		let r = e[n];
		ve(r) ? (t[n] = Array.isArray(r) ? [] : {}, G(r, t[n])) : C(r) || (t[n] = !0);
	}
	return t;
}
function K(e, t, n) {
	n ||= G(t);
	for (let r in e) {
		let i = e[r];
		if (ve(i)) C(t) || re(n[r]) ? n[r] = G(i, Array.isArray(i) ? [] : {}) : K(i, p(t) ? {} : t[r], n[r]);
		else {
			let e = t[r];
			n[r] = !L(i, e);
		}
	}
	return n;
}
var ye = {
	value: !1,
	isValid: !1
}, be = {
	value: !0,
	isValid: !0
}, xe = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
			return {
				value: t,
				isValid: !!t.length
			};
		}
		return e[0].checked && !e[0].disabled ? e[0].attributes && !C(e[0].attributes.value) ? C(e[0].value) || e[0].value === "" ? be : {
			value: e[0].value,
			isValid: !0
		} : be : ye;
	}
	return ye;
}, Se = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => C(e) ? e : t ? e === "" ? NaN : e && +e : n && I(e) ? new Date(e) : r ? r(e) : e, Ce = {
	isValid: !1,
	value: null
}, we = (e) => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
	isValid: !0,
	value: t.value
} : e, Ce) : Ce;
function Te(e) {
	let t = e.ref;
	return ue(t) ? t.files : pe(t) ? we(e.refs).value : fe(t) ? [...t.selectedOptions].map(({ value: e }) => e) : d(t) ? xe(e.refs).value : Se(C(t.value) ? e.ref.value : t.value, e);
}
var Ee = (e, t, n, r) => {
	let i = {};
	for (let n of e) {
		let e = E(t, n);
		e && k(i, n, e._f);
	}
	return {
		criteriaMode: n,
		names: [...e],
		fields: i,
		shouldUseNativeValidation: r
	};
}, De = (e) => e instanceof RegExp, Oe = (e) => C(e) ? e : De(e) ? e.source : h(e) ? De(e.value) ? e.value.source : e.value : e, ke = (e) => ({
	isOnSubmit: !e || e === j.onSubmit,
	isOnBlur: e === j.onBlur,
	isOnChange: e === j.onChange,
	isOnAll: e === j.all,
	isOnTouch: e === j.onTouched
}), Ae = "AsyncFunction", je = (e) => !!e && !!e.validate && !!(O(e.validate) && e.validate.constructor.name === Ae || h(e.validate) && Object.values(e.validate).find((e) => e.constructor.name === Ae)), Me = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Ne = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), Pe = (e, t, n, r) => {
	for (let i of n || Object.keys(e)) {
		let n = E(e, i);
		if (n) {
			let { _f: e, ...a } = n;
			if (e) {
				if (e.refs && e.refs[0] && t(e.refs[0], i) && !r || e.ref && t(e.ref, e.name) && !r) return !0;
				if (Pe(a, t)) break;
			} else if (h(a) && Pe(a, t)) break;
		}
	}
};
function Fe(e, t, n) {
	let r = E(e, n);
	if (r || S(n)) return {
		error: r,
		name: n
	};
	let i = n.split(".");
	for (; i.length;) {
		let r = i.join("."), a = E(t, r), o = E(e, r);
		if (a && !Array.isArray(a) && n !== r) return { name: n };
		if (o && o.type) return {
			name: r,
			error: o
		};
		if (o && o.root && o.root.type) return {
			name: `${r}.root`,
			error: o.root
		};
		i.pop();
	}
	return { name: n };
}
var Ie = (e, t, n, r) => {
	n(e);
	let { name: i, ...a } = e;
	return H(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((e) => t[e] === (!r || j.all));
}, Le = (e, t, n) => !e || !t || e === t || se(e).some((e) => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))), Re = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, ze = (e, t) => !w(E(e, t)).length && U(e, t), Be = (e, t, n) => {
	let r = se(E(e, n));
	return k(r, "root", t[n]), k(e, n, r), e;
};
function Ve(e, t, n = "validate") {
	if (I(e) || Array.isArray(e) && e.every(I) || D(e) && !e) return {
		type: n,
		message: I(e) ? e : "",
		ref: t
	};
}
var q = (e) => h(e) && !De(e) ? e : {
	value: e,
	message: ""
}, He = async (e, t, n, r, i, a) => {
	let { ref: o, refs: s, required: c, maxLength: l, minLength: u, min: f, max: m, pattern: g, validate: _, name: v, valueAsNumber: y, mount: b } = e._f, x = E(n, v);
	if (!b || t.has(v)) return {};
	let S = s ? s[0] : o, w = (e) => {
		i && S.reportValidity && (S.setCustomValidity(D(e) ? "" : e || ""), S.reportValidity());
	}, T = {}, k = pe(o), A = d(o), j = k || A, N = (y || ue(o)) && C(o.value) && C(x) || de(o) && o.value === "" || x === "" || Array.isArray(x) && !x.length, P = V.bind(null, v, r, T), ee = (e, t, n, r = M.maxLength, i = M.minLength) => {
		let a = e ? t : n;
		T[v] = {
			type: e ? r : i,
			message: a,
			ref: o,
			...P(e ? r : i, a)
		};
	};
	if (a ? !Array.isArray(x) || !x.length : c && (!j && (N || p(x)) || D(x) && !x || A && !xe(s).isValid || k && !we(s).isValid)) {
		let { value: e, message: t } = I(c) ? {
			value: !!c,
			message: c
		} : q(c);
		if (e && (T[v] = {
			type: M.required,
			message: t,
			ref: S,
			...P(M.required, t)
		}, !r)) return w(t), T;
	}
	if (!N && (!p(f) || !p(m))) {
		let e, t, n = q(m), i = q(f);
		if (!p(x) && !isNaN(x)) {
			let r = o.valueAsNumber || x && +x;
			p(n.value) || (e = r > n.value), p(i.value) || (t = r < i.value);
		} else {
			let r = o.valueAsDate || new Date(x), a = (e) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e), s = o.type == "time", c = o.type == "week";
			I(n.value) && x && (e = s ? a(x) > a(n.value) : c ? x > n.value : r > new Date(n.value)), I(i.value) && x && (t = s ? a(x) < a(i.value) : c ? x < i.value : r < new Date(i.value));
		}
		if ((e || t) && (ee(!!e, n.message, i.message, M.max, M.min), !r)) return w(T[v].message), T;
	}
	if ((l || u) && !N && (I(x) || a && Array.isArray(x))) {
		let e = q(l), t = q(u), n = !p(e.value) && x.length > +e.value, i = !p(t.value) && x.length < +t.value;
		if ((n || i) && (ee(n, e.message, t.message), !r)) return w(T[v].message), T;
	}
	if (g && !N && I(x)) {
		let { value: e, message: t } = q(g);
		if (De(e) && !x.match(e) && (T[v] = {
			type: M.pattern,
			message: t,
			ref: o,
			...P(M.pattern, t)
		}, !r)) return w(t), T;
	}
	if (_) {
		if (O(_)) {
			let e = Ve(await _(x, n), S);
			if (e && (T[v] = {
				...e,
				...P(M.validate, e.message)
			}, !r)) return w(e.message), T;
		} else if (h(_)) {
			let e = {};
			for (let t in _) {
				if (!H(e) && !r) break;
				let i = Ve(await _[t](x, n), S, t);
				i && (e = {
					...i,
					...P(t, i.message)
				}, w(i.message), r && (T[v] = e));
			}
			if (!H(e) && (T[v] = {
				ref: S,
				...e
			}, !r)) return T;
		}
	}
	return w(!0), T;
}, Ue = {
	mode: j.onSubmit,
	reValidateMode: j.onChange,
	shouldFocusError: !0
};
function We(e = {}) {
	let t = {
		...Ue,
		...e
	}, n = {
		submitCount: 0,
		isDirty: !1,
		isReady: !1,
		isLoading: O(t.defaultValues),
		isValidating: !1,
		isSubmitted: !1,
		isSubmitting: !1,
		isSubmitSuccessful: !1,
		isValid: !1,
		touchedFields: {},
		dirtyFields: {},
		validatingFields: {},
		errors: t.errors || {},
		disabled: t.disabled || !1
	}, r = {}, i = (h(t.defaultValues) || h(t.values)) && x(t.defaultValues || t.values) || {}, a = t.shouldUnregister ? {} : x(i), o = {
		action: !1,
		mount: !1,
		watch: !1,
		keepIsValid: !1
	}, s = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set()
	}, c, l = 0, u = {
		isDirty: !1,
		dirtyFields: !1,
		validatingFields: !1,
		touchedFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	}, m = { ...u }, _ = { ...m }, y = {
		array: ce(),
		state: ce()
	}, S = t.criteriaMode === j.all, T = (e) => (t) => {
		clearTimeout(l), l = setTimeout(e, t);
	}, M = async (e) => {
		if (!o.keepIsValid && !t.disabled && (m.isValid || _.isValid || e)) {
			let e;
			t.resolver ? (e = H((await R()).errors), N()) : e = await z(r, !0), e !== n.isValid && y.state.next({ isValid: e });
		}
	}, N = (e, r) => {
		!t.disabled && (m.isValidating || m.validatingFields || _.isValidating || _.validatingFields) && ((e || Array.from(s.mount)).forEach((e) => {
			e && (r ? k(n.validatingFields, e, r) : U(n.validatingFields, e));
		}), y.state.next({
			validatingFields: n.validatingFields,
			isValidating: !H(n.validatingFields)
		}));
	}, P = (e, s = [], c, l, u = !0, d = !0) => {
		if (l && c && !t.disabled) {
			if (o.action = !0, d && Array.isArray(E(r, e))) {
				let t = c(E(r, e), l.argA, l.argB);
				u && k(r, e, t);
			}
			if (d && Array.isArray(E(n.errors, e))) {
				let t = c(E(n.errors, e), l.argA, l.argB);
				u && k(n.errors, e, t), ze(n.errors, e);
			}
			if ((m.touchedFields || _.touchedFields) && d && Array.isArray(E(n.touchedFields, e))) {
				let t = c(E(n.touchedFields, e), l.argA, l.argB);
				u && k(n.touchedFields, e, t);
			}
			(m.dirtyFields || _.dirtyFields) && (n.dirtyFields = K(i, a)), y.state.next({
				name: e,
				isDirty: B(e, s),
				dirtyFields: n.dirtyFields,
				errors: n.errors,
				isValid: n.isValid
			});
		} else k(a, e, s);
	}, ee = (e, t) => {
		k(n.errors, e, t), y.state.next({ errors: n.errors });
	}, te = (e) => {
		n.errors = e, y.state.next({
			errors: n.errors,
			isValid: !1
		});
	}, F = (e, t, n, s) => {
		let c = E(r, e);
		if (c) {
			let r = E(a, e, C(n) ? E(i, e) : n);
			C(r) || s && s.defaultChecked || t ? k(a, e, t ? r : Te(c._f)) : ge(e, r), o.mount && !o.action && M();
		}
	}, re = (e, r, a, o, s) => {
		let c = !1, l = !1, u = { name: e };
		if (!t.disabled) {
			if (!a || o) {
				(m.isDirty || _.isDirty) && (l = n.isDirty, n.isDirty = u.isDirty = B(), c = l !== u.isDirty);
				let t = L(E(i, e), r);
				l = !!E(n.dirtyFields, e), t ? U(n.dirtyFields, e) : k(n.dirtyFields, e, !0), u.dirtyFields = n.dirtyFields, c ||= (m.dirtyFields || _.dirtyFields) && l !== !t;
			}
			if (a) {
				let t = E(n.touchedFields, e);
				t || (k(n.touchedFields, e, a), u.touchedFields = n.touchedFields, c ||= (m.touchedFields || _.touchedFields) && t !== a);
			}
			c && s && y.state.next(u);
		}
		return c ? u : {};
	}, ie = (e, r, i, a) => {
		let o = E(n.errors, e), s = (m.isValid || _.isValid) && D(r) && n.isValid !== r;
		if (t.delayError && i ? (c = T(() => ee(e, i)), c(t.delayError)) : (clearTimeout(l), c = null, i ? k(n.errors, e, i) : U(n.errors, e)), (i ? !L(o, i) : o) || !H(a) || s) {
			let t = {
				...a,
				...s && D(r) ? { isValid: r } : {},
				errors: n.errors,
				name: e
			};
			n = {
				...n,
				...t
			}, y.state.next(t);
		}
	}, R = async (e) => (N(e, !0), await t.resolver(a, t.context, Ee(e || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation))), ae = async (e) => {
		let { errors: t } = await R(e);
		if (N(e), e) for (let r of e) {
			let e = E(t, r);
			e ? k(n.errors, r, e) : U(n.errors, r);
		}
		else n.errors = t;
		return t;
	}, z = async (r, i, o = { valid: !0 }) => {
		for (let c in r) {
			let l = r[c];
			if (l) {
				let { _f: r, ...c } = l;
				if (r) {
					let c = s.array.has(r.name), u = l._f && je(l._f);
					u && m.validatingFields && N([r.name], !0);
					let d = await He(l, s.disabled, a, S, t.shouldUseNativeValidation && !i, c);
					if (u && m.validatingFields && N([r.name]), d[r.name] && (o.valid = !1, i || e.shouldUseNativeValidation)) break;
					!i && (E(d, r.name) ? c ? Be(n.errors, d, r.name) : k(n.errors, r.name, d[r.name]) : U(n.errors, r.name));
				}
				!H(c) && await z(c, i, o);
			}
		}
		return o.valid;
	}, oe = () => {
		for (let e of s.unMount) {
			let t = E(r, e);
			t && (t._f.refs ? t._f.refs.every((e) => !he(e)) : !he(t._f.ref)) && q(e);
		}
		s.unMount = /* @__PURE__ */ new Set();
	}, B = (e, n) => !t.disabled && (e && n && k(a, e, n), !L(be(), i)), V = (e, t, n) => ne(e, s, { ...o.mount ? a : C(t) ? i : I(e) ? { [e]: t } : t }, n, t), pe = (e) => w(E(o.mount ? a : i, e, t.shouldUnregister ? E(i, e, []) : [])), ge = (e, t, n = {}) => {
		let i = E(r, e), o = t;
		if (i) {
			let n = i._f;
			n && (!n.disabled && k(a, e, Se(t, n)), o = de(n.ref) && p(t) ? "" : t, fe(n.ref) ? [...n.ref.options].forEach((e) => e.selected = o.includes(e.value)) : n.refs ? d(n.ref) ? n.refs.forEach((e) => {
				(!e.defaultChecked || !e.disabled) && (Array.isArray(o) ? e.checked = !!o.find((t) => t === e.value) : e.checked = o === e.value || !!o);
			}) : n.refs.forEach((e) => e.checked = e.value === o) : ue(n.ref) ? n.ref.value = "" : (n.ref.value = o, n.ref.type || y.state.next({
				name: e,
				values: x(a)
			})));
		}
		(n.shouldDirty || n.shouldTouch) && re(e, o, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && ye(e);
	}, _e = (e, t, n) => {
		for (let i in t) {
			if (!t.hasOwnProperty(i)) return;
			let a = t[i], o = e + "." + i, c = E(r, o);
			(s.array.has(e) || h(a) || c && !c._f) && !f(a) ? _e(o, a, n) : ge(o, a, n);
		}
	}, W = (e, t, c = {}) => {
		let l = E(r, e), u = s.array.has(e), d = x(t);
		k(a, e, d), u ? (y.array.next({
			name: e,
			values: x(a)
		}), (m.isDirty || m.dirtyFields || _.isDirty || _.dirtyFields) && c.shouldDirty && y.state.next({
			name: e,
			dirtyFields: K(i, a),
			isDirty: B(e, d)
		})) : l && !l._f && !p(d) ? _e(e, d, c) : ge(e, d, c), Ne(e, s) ? y.state.next({
			...n,
			name: e,
			values: x(a)
		}) : y.state.next({
			name: o.mount ? e : void 0,
			values: x(a)
		});
	}, ve = async (e) => {
		o.mount = !0;
		let i = e.target, l = i.name, u = !0, d = E(r, l), p = (e) => {
			u = Number.isNaN(e) || f(e) && isNaN(e.getTime()) || L(e, E(a, l, e));
		}, h = ke(t.mode), v = ke(t.reValidateMode);
		if (d) {
			let o, f, b = i.type ? Te(d._f) : g(e), C = e.type === A.BLUR || e.type === A.FOCUS_OUT, w = !Me(d._f) && !t.resolver && !E(n.errors, l) && !d._f.deps || Re(C, E(n.touchedFields, l), n.isSubmitted, v, h), T = Ne(l, s, C);
			k(a, l, b), C ? (!i || !i.readOnly) && (d._f.onBlur && d._f.onBlur(e), c && c(0)) : d._f.onChange && d._f.onChange(e);
			let D = re(l, b, C), O = !H(D) || T;
			if (!C && y.state.next({
				name: l,
				type: e.type,
				values: x(a)
			}), w) return (m.isValid || _.isValid) && (t.mode === "onBlur" ? C && M() : C || M()), O && y.state.next({
				name: l,
				...T ? {} : D
			});
			if (!C && T && y.state.next({ ...n }), t.resolver) {
				let { errors: e } = await R([l]);
				if (N([l]), p(b), u) {
					let t = Fe(n.errors, r, l), i = Fe(e, r, t.name || l);
					o = i.error, l = i.name, f = H(e);
				}
			} else N([l], !0), o = (await He(d, s.disabled, a, S, t.shouldUseNativeValidation))[l], N([l]), p(b), u && (o ? f = !1 : (m.isValid || _.isValid) && (f = await z(r, !0)));
			u && (d._f.deps && (!Array.isArray(d._f.deps) || d._f.deps.length > 0) && ye(d._f.deps), ie(l, f, o, D));
		}
	}, G = (e, t) => {
		if (E(n.errors, t) && e.focus) return e.focus(), 1;
	}, ye = async (e, i = {}) => {
		let a, o, c = se(e);
		if (t.resolver) {
			let t = await ae(C(e) ? e : c);
			a = H(t), o = e ? !c.some((e) => E(t, e)) : a;
		} else e ? (o = (await Promise.all(c.map(async (e) => {
			let t = E(r, e);
			return await z(t && t._f ? { [e]: t } : t);
		}))).every(Boolean), !(!o && !n.isValid) && M()) : o = a = await z(r);
		return y.state.next({
			...!I(e) || (m.isValid || _.isValid) && a !== n.isValid ? {} : { name: e },
			...t.resolver || !e ? { isValid: a } : {},
			errors: n.errors
		}), i.shouldFocus && !o && Pe(r, G, e ? c : s.mount), o;
	}, be = (e, t) => {
		let r = { ...o.mount ? a : i };
		return t && (r = le(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)), C(e) ? r : I(e) ? E(r, e) : e.map((e) => E(r, e));
	}, xe = (e, t) => ({
		invalid: !!E((t || n).errors, e),
		isDirty: !!E((t || n).dirtyFields, e),
		error: E((t || n).errors, e),
		isValidating: !!E(n.validatingFields, e),
		isTouched: !!E((t || n).touchedFields, e)
	}), Ce = (e) => {
		let t = e ? se(e) : void 0;
		t?.forEach((e) => U(n.errors, e)), t ? t.forEach((e) => {
			y.state.next({
				name: e,
				errors: n.errors
			});
		}) : y.state.next({ errors: {} });
	}, we = (e, t, i) => {
		let a = (E(r, e, { _f: {} })._f || {}).ref, { ref: o, message: s, type: c, ...l } = E(n.errors, e) || {};
		k(n.errors, e, {
			...l,
			...t,
			ref: a
		}), y.state.next({
			name: e,
			errors: n.errors,
			isValid: !1
		}), i && i.shouldFocus && a && a.focus && a.focus();
	}, De = (e, t) => O(e) ? y.state.subscribe({ next: (n) => "values" in n && e(V(void 0, t), n) }) : V(e, t, !0), Ae = (e) => y.state.subscribe({ next: (t) => {
		Le(e.name, t.name, e.exact) && Ie(t, e.formState || m, $e, e.reRenderRoot) && e.callback({
			values: { ...a },
			...n,
			...t,
			defaultValues: i
		});
	} }).unsubscribe, Ve = (e) => (o.mount = !0, _ = {
		..._,
		...e.formState
	}, Ae({
		...e,
		formState: {
			...u,
			...e.formState
		}
	})), q = (e, o = {}) => {
		for (let c of e ? se(e) : s.mount) s.mount.delete(c), s.array.delete(c), o.keepValue || (U(r, c), U(a, c)), !o.keepError && U(n.errors, c), !o.keepDirty && U(n.dirtyFields, c), !o.keepTouched && U(n.touchedFields, c), !o.keepIsValidating && U(n.validatingFields, c), !t.shouldUnregister && !o.keepDefaultValue && U(i, c);
		y.state.next({ values: x(a) }), y.state.next({
			...n,
			...o.keepDirty ? { isDirty: B() } : {}
		}), !o.keepIsValid && M();
	}, We = ({ disabled: e, name: t }) => {
		if (D(e) && o.mount || e || s.disabled.has(t)) {
			let n = s.disabled.has(t) !== !!e;
			e ? s.disabled.add(t) : s.disabled.delete(t), n && o.mount && !o.action && M();
		}
	}, Ge = (e, n = {}) => {
		let a = E(r, e), c = D(n.disabled) || D(t.disabled);
		return k(r, e, {
			...a || {},
			_f: {
				...a && a._f ? a._f : { ref: { name: e } },
				name: e,
				mount: !0,
				...n
			}
		}), s.mount.add(e), a ? We({
			disabled: D(n.disabled) ? n.disabled : t.disabled,
			name: e
		}) : F(e, !0, n.value), {
			...c ? { disabled: n.disabled || t.disabled } : {},
			...t.progressive ? {
				required: !!n.required,
				min: Oe(n.min),
				max: Oe(n.max),
				minLength: Oe(n.minLength),
				maxLength: Oe(n.maxLength),
				pattern: Oe(n.pattern)
			} : {},
			name: e,
			onChange: ve,
			onBlur: ve,
			ref: (c) => {
				if (c) {
					Ge(e, n), a = E(r, e);
					let t = C(c.value) && c.querySelectorAll && c.querySelectorAll("input,select,textarea")[0] || c, o = me(t), s = a._f.refs || [];
					if (o ? s.find((e) => e === t) : t === a._f.ref) return;
					k(r, e, { _f: {
						...a._f,
						...o ? {
							refs: [
								...s.filter(he),
								t,
								...Array.isArray(E(i, e)) ? [{}] : []
							],
							ref: {
								type: t.type,
								name: e
							}
						} : { ref: t }
					} }), F(e, !1, void 0, t);
				} else a = E(r, e, {}), a._f && (a._f.mount = !1), (t.shouldUnregister || n.shouldUnregister) && !(v(s.array, e) && o.action) && s.unMount.add(e);
			}
		};
	}, Ke = () => t.shouldFocusError && Pe(r, G, s.mount), qe = (e) => {
		D(e) && (y.state.next({ disabled: e }), Pe(r, (t, n) => {
			let i = E(r, n);
			i && (t.disabled = i._f.disabled || e, Array.isArray(i._f.refs) && i._f.refs.forEach((t) => {
				t.disabled = i._f.disabled || e;
			}));
		}, 0, !1));
	}, Je = (e, i) => async (o) => {
		let c;
		o && (o.preventDefault && o.preventDefault(), o.persist && o.persist());
		let l = x(a);
		if (y.state.next({ isSubmitting: !0 }), t.resolver) {
			let { errors: e, values: t } = await R();
			N(), n.errors = e, l = x(t);
		} else await z(r);
		if (s.disabled.size) for (let e of s.disabled) U(l, e);
		if (U(n.errors, "root"), H(n.errors)) {
			y.state.next({ errors: {} });
			try {
				await e(l, o);
			} catch (e) {
				c = e;
			}
		} else i && await i({ ...n.errors }, o), Ke(), setTimeout(Ke);
		if (y.state.next({
			isSubmitted: !0,
			isSubmitting: !1,
			isSubmitSuccessful: H(n.errors) && !c,
			submitCount: n.submitCount + 1,
			errors: n.errors
		}), c) throw c;
	}, Ye = (e, t = {}) => {
		E(r, e) && (C(t.defaultValue) ? W(e, x(E(i, e))) : (W(e, t.defaultValue), k(i, e, x(t.defaultValue))), t.keepTouched || U(n.touchedFields, e), t.keepDirty || (U(n.dirtyFields, e), n.isDirty = t.defaultValue ? B(e, x(E(i, e))) : B()), t.keepError || (U(n.errors, e), m.isValid && M()), y.state.next({ ...n }));
	}, Xe = (e, c = {}) => {
		let l = e ? x(e) : i, u = x(l), d = H(e), f = d ? i : u;
		if (c.keepDefaultValues || (i = l), !c.keepValues) {
			if (c.keepDirtyValues) {
				let e = new Set([...s.mount, ...Object.keys(K(i, a))]);
				for (let t of Array.from(e)) {
					let e = E(n.dirtyFields, t), r = E(a, t), i = E(f, t);
					e && !C(r) ? k(f, t, r) : !e && !C(i) && W(t, i);
				}
			} else {
				if (b && C(e)) for (let e of s.mount) {
					let t = E(r, e);
					if (t && t._f) {
						let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
						if (de(e)) {
							let t = e.closest("form");
							if (t) {
								t.reset();
								break;
							}
						}
					}
				}
				if (c.keepFieldsRef) for (let e of s.mount) W(e, E(f, e));
				else r = {};
			}
			a = t.shouldUnregister ? c.keepDefaultValues ? x(i) : {} : x(f), y.array.next({ values: { ...f } }), y.state.next({ values: { ...f } });
		}
		s = {
			mount: c.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: !1,
			focus: ""
		}, o.mount = !m.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !t.shouldUnregister && !H(f), o.watch = !!t.shouldUnregister, o.keepIsValid = !!c.keepIsValid, o.action = !1, c.keepErrors || (n.errors = {}), y.state.next({
			submitCount: c.keepSubmitCount ? n.submitCount : 0,
			isDirty: d ? !1 : c.keepDirty ? n.isDirty : !!(c.keepDefaultValues && !L(e, i)),
			isSubmitted: c.keepIsSubmitted ? n.isSubmitted : !1,
			dirtyFields: d ? {} : c.keepDirtyValues ? c.keepDefaultValues && a ? K(i, a) : n.dirtyFields : c.keepDefaultValues && e ? K(i, e) : c.keepDirty ? n.dirtyFields : {},
			touchedFields: c.keepTouched ? n.touchedFields : {},
			errors: c.keepErrors ? n.errors : {},
			isSubmitSuccessful: c.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
			isSubmitting: !1,
			defaultValues: i
		});
	}, Ze = (e, n) => Xe(O(e) ? e(a) : e, {
		...t.resetOptions,
		...n
	}), Qe = (e, t = {}) => {
		let n = E(r, e), i = n && n._f;
		if (i) {
			let e = i.refs ? i.refs[0] : i.ref;
			e.focus && setTimeout(() => {
				e.focus(), t.shouldSelect && O(e.select) && e.select();
			});
		}
	}, $e = (e) => {
		n = {
			...n,
			...e
		};
	}, et = {
		control: {
			register: Ge,
			unregister: q,
			getFieldState: xe,
			handleSubmit: Je,
			setError: we,
			_subscribe: Ae,
			_runSchema: R,
			_updateIsValidating: N,
			_focusError: Ke,
			_getWatch: V,
			_getDirty: B,
			_setValid: M,
			_setFieldArray: P,
			_setDisabledField: We,
			_setErrors: te,
			_getFieldArray: pe,
			_reset: Xe,
			_resetDefaultValues: () => O(t.defaultValues) && t.defaultValues().then((e) => {
				Ze(e, t.resetOptions), y.state.next({ isLoading: !1 });
			}),
			_removeUnmounted: oe,
			_disableForm: qe,
			_subjects: y,
			_proxyFormState: m,
			get _fields() {
				return r;
			},
			get _formValues() {
				return a;
			},
			get _state() {
				return o;
			},
			set _state(e) {
				o = e;
			},
			get _defaultValues() {
				return i;
			},
			get _names() {
				return s;
			},
			set _names(e) {
				s = e;
			},
			get _formState() {
				return n;
			},
			get _options() {
				return t;
			},
			set _options(e) {
				t = {
					...t,
					...e
				};
			}
		},
		subscribe: Ve,
		trigger: ye,
		register: Ge,
		handleSubmit: Je,
		watch: De,
		setValue: W,
		getValues: be,
		reset: Ze,
		resetField: Ye,
		clearErrors: Ce,
		unregister: q,
		setError: we,
		setFocus: Qe,
		getFieldState: xe
	};
	return {
		...et,
		formControl: et
	};
}
function Ge(e = {}) {
	let t = s.useRef(void 0), n = s.useRef(void 0), [r, i] = s.useState({
		isDirty: !1,
		isValidating: !1,
		isLoading: O(e.defaultValues),
		isSubmitted: !1,
		isSubmitting: !1,
		isSubmitSuccessful: !1,
		isValid: !1,
		submitCount: 0,
		dirtyFields: {},
		touchedFields: {},
		validatingFields: {},
		errors: e.errors || {},
		disabled: e.disabled || !1,
		isReady: !1,
		defaultValues: O(e.defaultValues) ? void 0 : e.defaultValues
	});
	if (!t.current) if (e.formControl) t.current = {
		...e.formControl,
		formState: r
	}, e.defaultValues && !O(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
	else {
		let { formControl: n, ...i } = We(e);
		t.current = {
			...i,
			formState: r
		};
	}
	let a = t.current.control;
	return a._options = e, te(() => {
		let e = a._subscribe({
			formState: a._proxyFormState,
			callback: () => i({ ...a._formState }),
			reRenderRoot: !0
		});
		return i((e) => ({
			...e,
			isReady: !0
		})), a._formState.isReady = !0, e;
	}, [a]), s.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), s.useEffect(() => {
		e.mode && (a._options.mode = e.mode), e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
	}, [
		a,
		e.mode,
		e.reValidateMode
	]), s.useEffect(() => {
		e.errors && (a._setErrors(e.errors), a._focusError());
	}, [a, e.errors]), s.useEffect(() => {
		e.shouldUnregister && a._subjects.state.next({ values: a._getWatch() });
	}, [a, e.shouldUnregister]), s.useEffect(() => {
		if (a._proxyFormState.isDirty) {
			let e = a._getDirty();
			e !== r.isDirty && a._subjects.state.next({ isDirty: e });
		}
	}, [a, r.isDirty]), s.useEffect(() => {
		e.values && !L(e.values, n.current) ? (a._reset(e.values, {
			keepFieldsRef: !0,
			...a._options.resetOptions
		}), a._options.resetOptions?.keepIsValid || a._setValid(), n.current = e.values, i((e) => ({ ...e }))) : a._resetDefaultValues();
	}, [a, e.values]), s.useEffect(() => {
		a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
	}), t.current.formState = s.useMemo(() => ee(r, a), [a, r]), t.current;
}
//#endregion
//#region src/components/ui/label.tsx
c();
function Ke({ className: e, ...n }) {
	return /* @__PURE__ */ l(u, {
		"data-slot": "label",
		className: t("text-gray-1 absolute top-6 2xl:top-5 left-6 z-10 transform origin-[0] duration-200 -translate-y-2 scale-80 peer-data-[placeholder=true]:scale-100 peer-placeholder-shown:scale-100 peer-data-[placeholder=true]:translate-y-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-2 flex items-center gap-2 leading-tight font-medium select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:text-gray-25 group-disabled:text-gray-25", e),
		...n
	});
}
//#endregion
//#region src/components/ui/form.tsx
c();
var qe = B, Je = n({}), Ye = ({ ...e }) => /* @__PURE__ */ l(Je.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ l(ae, { ...e })
}), Xe = () => {
	let e = a(Je), t = a(Ze), { getFieldState: n } = oe(), r = F({ name: e.name }), i = n(e.name, r);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { id: o } = t;
	return {
		id: o,
		name: e.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...i
	};
}, Ze = n({});
function Qe({ className: e, ...n }) {
	let r = i();
	return /* @__PURE__ */ l(Ze.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ l("div", {
			"data-slot": "form-item",
			className: t("relative", e),
			...n
		})
	});
}
function $e({ ...e }) {
	let { error: t, formItemId: n } = Xe();
	return /* @__PURE__ */ l(Ke, {
		"data-slot": "form-label",
		"data-error": !!t,
		htmlFor: n,
		...e
	});
}
function et({ ...t }) {
	let { error: n, formItemId: r, formDescriptionId: i, formMessageId: a } = Xe();
	return /* @__PURE__ */ l(e, {
		"data-slot": "form-control",
		id: r,
		"aria-describedby": n ? `${i} ${a}` : `${i}`,
		"aria-invalid": !!n,
		...t
	});
}
function tt({ className: e, ...n }) {
	let { error: r, formMessageId: i } = Xe(), a = r ? String(r?.message ?? "") : n.children;
	return a ? /* @__PURE__ */ l("p", {
		"data-slot": "form-message",
		id: i,
		className: t("px-6 pt-2 text-sm leading-label text-light-red", e),
		...n,
		children: a
	}) : null;
}
function nt({ className: e, children: n, type: r = "", ...i }) {
	let { errors: a } = F();
	return Object.values(a).filter((e) => e?.type === r).length === 0 ? null : /* @__PURE__ */ l("p", {
		"data-slot": "form-error-message",
		className: t("flex gap-4 items-center text-gray-1", e),
		...i,
		children: [/* @__PURE__ */ l(o, { className: "size-5 2xl:size-6 text-light-red" }), n]
	});
}
function rt({ className: e, children: n, ...i }) {
	let { isSubmitSuccessful: a } = F();
	return a ? /* @__PURE__ */ l("p", {
		"data-slot": "form-success-message",
		className: t("flex gap-4 items-center text-gray-1", e),
		...i,
		children: [/* @__PURE__ */ l(r, { className: "size-5 2xl:size-6 text-light-green" }), n]
	}) : null;
}
Object.freeze({ status: "aborted" });
function J(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var Y = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, it = {};
function at(e) {
	return e && Object.assign(it, e), it;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/util.js
function ot(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function st(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function ct(e) {
	return e == null;
}
function lt(e) {
	let t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
var ut = Symbol("evaluating");
function dt(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== ut) return r === void 0 && (r = ut, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
var ft = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function pt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function mt(e) {
	if (pt(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(pt(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function ht(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function gt(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function X(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function _t(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
-Number.MAX_VALUE, Number.MAX_VALUE;
function vt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Z(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function yt(e) {
	return typeof e == "string" ? e : e?.message;
}
function bt(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = yt(e.inst?._zod.def?.error?.(e)) ?? yt(t?.error?.(e)) ?? yt(n.customError?.(e)) ?? yt(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function xt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/errors.js
var St = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, ot, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Ct = J("$ZodError", St), wt = J("$ZodError", St, { Parent: Error }), Tt = /* @__PURE__ */ ((e) => (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !1 }) : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new Y();
	if (o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => bt(e, a, at())));
		throw ft(t, i?.callee), t;
	}
	return o.value;
})(wt), Et = /* @__PURE__ */ ((e) => async (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !0 }) : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => bt(e, a, at())));
		throw ft(t, i?.callee), t;
	}
	return o.value;
})(wt), Dt = /* @__PURE__ */ ((e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Y();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Ct)(a.issues.map((e) => bt(e, i, at())))
	} : {
		success: !0,
		data: a.value
	};
})(wt), Ot = /* @__PURE__ */ ((e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { async: !0 }) : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => bt(e, i, at())))
	} : {
		success: !0,
		data: a.value
	};
})(wt), kt = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, At = /^-?\d+(?:\.\d+)?$/, jt = /^(?:true|false)$/i, Mt = /* @__PURE__ */ J("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Nt = /* @__PURE__ */ J("$ZodCheckMinLength", (e, t) => {
	var n;
	Mt.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ct(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = xt(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Pt = /* @__PURE__ */ J("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	Mt.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Ft = /* @__PURE__ */ J("$ZodCheckRegex", (e, t) => {
	Pt.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), It = {
	major: 4,
	minor: 3,
	patch: 6
}, Q = /* @__PURE__ */ J("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = It;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = vt(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (!a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new Y();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= vt(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= vt(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (vt(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Y();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let o = e._zod.parse(i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Y();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	dt(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = Dt(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Ot(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Lt = /* @__PURE__ */ J("$ZodString", (e, t) => {
	Q.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? kt(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), Rt = /* @__PURE__ */ J("$ZodNumber", (e, t) => {
	Q.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? At, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), zt = /* @__PURE__ */ J("$ZodBoolean", (e, t) => {
	Q.init(e, t), e._zod.pattern = jt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Bt = /* @__PURE__ */ J("$ZodAny", (e, t) => {
	Q.init(e, t), e._zod.parse = (e) => e;
});
function Vt(e, t, n) {
	e.issues.length && t.issues.push(...Z(n, e.issues)), t.value[n] = e.value;
}
var Ht = /* @__PURE__ */ J("$ZodArray", (e, t) => {
	Q.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => Vt(t, n, e))) : Vt(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function Ut(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...Z(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Wt(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = _t(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Gt(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optout === "optional";
	for (let i in t) {
		if (s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Ut(e, n, i, t, u))) : Ut(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var Kt = /* @__PURE__ */ J("$ZodObject", (e, t) => {
	if (Q.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = st(() => Wt(t));
	dt(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = pt, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optout === "optional", i = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			i instanceof Promise ? c.push(i.then((n) => Ut(n, t, e, s, r))) : Ut(i, t, e, s, r);
		}
		return i ? Gt(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), qt = /* @__PURE__ */ J("$ZodRecord", (e, t) => {
	Q.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!mt(i)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		let a = [], o = t.keyType._zod.values;
		if (o) {
			n.value = {};
			let s = /* @__PURE__ */ new Set();
			for (let e of o) if (typeof e == "string" || typeof e == "number" || typeof e == "symbol") {
				s.add(typeof e == "number" ? e.toString() : e);
				let o = t.valueType._zod.run({
					value: i[e],
					issues: []
				}, r);
				o instanceof Promise ? a.push(o.then((t) => {
					t.issues.length && n.issues.push(...Z(e, t.issues)), n.value[e] = t.value;
				})) : (o.issues.length && n.issues.push(...Z(e, o.issues)), n.value[e] = o.value);
			}
			let c;
			for (let e in i) s.has(e) || (c ??= [], c.push(e));
			c && c.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: i,
				inst: e,
				keys: c
			});
		} else {
			n.value = {};
			for (let o of Reflect.ownKeys(i)) {
				if (o === "__proto__") continue;
				let s = t.keyType._zod.run({
					value: o,
					issues: []
				}, r);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof o == "string" && At.test(o) && s.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(o),
						issues: []
					}, r);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (s = e);
				}
				if (s.issues.length) {
					t.mode === "loose" ? n.value[o] = i[o] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => bt(e, r, at())),
						input: o,
						path: [o],
						inst: e
					});
					continue;
				}
				let c = t.valueType._zod.run({
					value: i[o],
					issues: []
				}, r);
				c instanceof Promise ? a.push(c.then((e) => {
					e.issues.length && n.issues.push(...Z(o, e.issues)), n.value[s.value] = e.value;
				})) : (c.issues.length && n.issues.push(...Z(o, c.issues)), n.value[s.value] = c.value);
			}
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
}), Jt = /* @__PURE__ */ J("$ZodLiteral", (e, t) => {
	if (Q.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? ht(e) : e ? ht(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
});
function Yt(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
var Xt = /* @__PURE__ */ J("$ZodOptional", (e, t) => {
	Q.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", dt(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), dt(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${lt(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((t) => Yt(t, e.value)) : Yt(r, e.value);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), Zt, Qt = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function $t() {
	return new Qt();
}
(Zt = globalThis).__zod_globalRegistry ?? (Zt.__zod_globalRegistry = $t()), globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function en(e, t) {
	return new e({
		type: "string",
		...X(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t) {
	return new e({
		type: "number",
		checks: [],
		...X(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nn(e, t) {
	return new e({
		type: "boolean",
		...X(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e) {
	return new e({ type: "any" });
}
/* @__NO_SIDE_EFFECTS__ */
function an(e, t) {
	return new Nt({
		check: "min_length",
		...X(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function on(e, t) {
	return new Ft({
		check: "string_format",
		format: "regex",
		...X(t),
		pattern: e
	});
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/schemas.js
var $ = /* @__PURE__ */ J("ZodMiniType", (e, t) => {
	if (!e._zod) throw Error("Uninitialized schema in ZodMiniType.");
	Q.init(e, t), e.def = t, e.type = t.type, e.parse = (t, n) => Tt(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Dt(e, t, n), e.parseAsync = async (t, n) => Et(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Ot(e, t, n), e.check = (...n) => e.clone({
		...t,
		checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)]
	}, { parent: !0 }), e.with = e.check, e.clone = (t, n) => gt(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.apply = (t) => t(e);
}), sn = /* @__PURE__ */ J("ZodMiniString", (e, t) => {
	Lt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function cn(e) {
	return /* @__PURE__ */ en(sn, e);
}
var ln = /* @__PURE__ */ J("ZodMiniNumber", (e, t) => {
	Rt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function un(e) {
	return /* @__PURE__ */ tn(ln, e);
}
var dn = /* @__PURE__ */ J("ZodMiniBoolean", (e, t) => {
	zt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function fn(e) {
	return /* @__PURE__ */ nn(dn, e);
}
var pn = /* @__PURE__ */ J("ZodMiniAny", (e, t) => {
	Bt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function mn() {
	return /* @__PURE__ */ rn(pn);
}
var hn = /* @__PURE__ */ J("ZodMiniArray", (e, t) => {
	Ht.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function gn(e, t) {
	return new hn({
		type: "array",
		element: e,
		...X(t)
	});
}
var _n = /* @__PURE__ */ J("ZodMiniObject", (e, t) => {
	Kt.init(e, t), $.init(e, t), dt(e, "shape", () => t.shape);
});
/* @__NO_SIDE_EFFECTS__ */
function vn(e, t) {
	return new _n({
		type: "object",
		shape: e ?? {},
		...X(t)
	});
}
var yn = /* @__PURE__ */ J("ZodMiniRecord", (e, t) => {
	qt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function bn(e, t, n) {
	return new yn({
		type: "record",
		keyType: e,
		valueType: t,
		...X(n)
	});
}
var xn = /* @__PURE__ */ J("ZodMiniLiteral", (e, t) => {
	Jt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function Sn(e, t) {
	return new xn({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...X(t)
	});
}
var Cn = /* @__PURE__ */ J("ZodMiniOptional", (e, t) => {
	Xt.init(e, t), $.init(e, t);
});
/* @__NO_SIDE_EFFECTS__ */
function wn(e) {
	return new Cn({
		type: "optional",
		innerType: e
	});
}
//#endregion
export { Ke as C, Ge as D, k as E, rt as S, E as T, nt as _, un as a, $e as b, bn as c, on as d, Tt as f, et as g, qe as h, Sn as i, cn as l, Ct as m, gn as n, vn as o, Et as p, fn as r, wn as s, mn as t, an as u, Ye as v, V as w, tt as x, Qe as y };

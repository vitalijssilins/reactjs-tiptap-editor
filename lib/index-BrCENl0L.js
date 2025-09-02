import { g as vo, c as kr, a as go } from "./_commonjsHelpers-BItOPCY9.js";
var re, en;
function La() {
  if (en) return re;
  en = 1;
  var r = Object.prototype.toString;
  return re = function(n) {
    var o = r.call(n), e = o === "[object Arguments]";
    return e || (e = o !== "[object Array]" && n !== null && typeof n == "object" && typeof n.length == "number" && n.length >= 0 && r.call(n.callee) === "[object Function]"), e;
  }, re;
}
var ee, tn;
function ho() {
  if (tn) return ee;
  tn = 1;
  var r;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, n = Object.prototype.toString, o = La(), e = Object.prototype.propertyIsEnumerable, s = !e.call({ toString: null }, "toString"), i = e.call(function() {
    }, "prototype"), a = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], f = function(y) {
      var d = y.constructor;
      return d && d.prototype === y;
    }, c = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, g = function() {
      if (typeof window > "u")
        return !1;
      for (var y in window)
        try {
          if (!c["$" + y] && t.call(window, y) && window[y] !== null && typeof window[y] == "object")
            try {
              f(window[y]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), p = function(y) {
      if (typeof window > "u" || !g)
        return f(y);
      try {
        return f(y);
      } catch {
        return !1;
      }
    };
    r = function(d) {
      var b = d !== null && typeof d == "object", j = n.call(d) === "[object Function]", P = o(d), I = b && n.call(d) === "[object String]", O = [];
      if (!b && !j && !P)
        throw new TypeError("Object.keys called on a non-object");
      var S = i && j;
      if (I && d.length > 0 && !t.call(d, 0))
        for (var T = 0; T < d.length; ++T)
          O.push(String(T));
      if (P && d.length > 0)
        for (var X = 0; X < d.length; ++X)
          O.push(String(X));
      else
        for (var G in d)
          !(S && G === "prototype") && t.call(d, G) && O.push(String(G));
      if (s)
        for (var C = p(d), F = 0; F < a.length; ++F)
          !(C && a[F] === "constructor") && t.call(d, a[F]) && O.push(a[F]);
      return O;
    };
  }
  return ee = r, ee;
}
var te, nn;
function Ft() {
  if (nn) return te;
  nn = 1;
  var r = Array.prototype.slice, t = La(), n = Object.keys, o = n ? function(i) {
    return n(i);
  } : ho(), e = Object.keys;
  return o.shim = function() {
    if (Object.keys) {
      var i = function() {
        var a = Object.keys(arguments);
        return a && a.length === arguments.length;
      }(1, 2);
      i || (Object.keys = function(f) {
        return t(f) ? e(r.call(f)) : e(f);
      });
    } else
      Object.keys = o;
    return Object.keys || o;
  }, te = o, te;
}
var ne, an;
function Lr() {
  if (an) return ne;
  an = 1;
  var r = Object.defineProperty || !1;
  if (r)
    try {
      r({}, "a", { value: 1 });
    } catch {
      r = !1;
    }
  return ne = r, ne;
}
var ae, on;
function Ct() {
  return on || (on = 1, ae = SyntaxError), ae;
}
var oe, un;
function tr() {
  return un || (un = 1, oe = TypeError), oe;
}
var ie, fn;
function mo() {
  return fn || (fn = 1, ie = Object.getOwnPropertyDescriptor), ie;
}
var ue, sn;
function Ar() {
  if (sn) return ue;
  sn = 1;
  var r = /* @__PURE__ */ mo();
  if (r)
    try {
      r([], "length");
    } catch {
      r = null;
    }
  return ue = r, ue;
}
var fe, ln;
function _t() {
  if (ln) return fe;
  ln = 1;
  var r = /* @__PURE__ */ Lr(), t = /* @__PURE__ */ Ct(), n = /* @__PURE__ */ tr(), o = /* @__PURE__ */ Ar();
  return fe = function(s, i, a) {
    if (!s || typeof s != "object" && typeof s != "function")
      throw new n("`obj` must be an object or a function`");
    if (typeof i != "string" && typeof i != "symbol")
      throw new n("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new n("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new n("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new n("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new n("`loose`, if provided, must be a boolean");
    var f = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, g = arguments.length > 5 ? arguments[5] : null, p = arguments.length > 6 ? arguments[6] : !1, y = !!o && o(s, i);
    if (r)
      r(s, i, {
        configurable: g === null && y ? y.configurable : !g,
        enumerable: f === null && y ? y.enumerable : !f,
        value: a,
        writable: c === null && y ? y.writable : !c
      });
    else if (p || !f && !c && !g)
      s[i] = a;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, fe;
}
var se, cn;
function Nt() {
  if (cn) return se;
  cn = 1;
  var r = /* @__PURE__ */ Lr(), t = function() {
    return !!r;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!r)
      return null;
    try {
      return r([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, se = t, se;
}
var le, pn;
function Or() {
  if (pn) return le;
  pn = 1;
  var r = Ft(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", n = Object.prototype.toString, o = Array.prototype.concat, e = /* @__PURE__ */ _t(), s = function(c) {
    return typeof c == "function" && n.call(c) === "[object Function]";
  }, i = /* @__PURE__ */ Nt()(), a = function(c, g, p, y) {
    if (g in c) {
      if (y === !0) {
        if (c[g] === p)
          return;
      } else if (!s(y) || !y())
        return;
    }
    i ? e(c, g, p, !0) : e(c, g, p);
  }, f = function(c, g) {
    var p = arguments.length > 2 ? arguments[2] : {}, y = r(g);
    t && (y = o.call(y, Object.getOwnPropertySymbols(g)));
    for (var d = 0; d < y.length; d += 1)
      a(c, y[d], g[y[d]], p[y[d]]);
  };
  return f.supportsDescriptors = !!i, le = f, le;
}
var ce = { exports: {} }, pe, yn;
function Wt() {
  return yn || (yn = 1, pe = Object), pe;
}
var ye, vn;
function Ua() {
  return vn || (vn = 1, ye = Error), ye;
}
var ve, gn;
function So() {
  return gn || (gn = 1, ve = EvalError), ve;
}
var ge, hn;
function bo() {
  return hn || (hn = 1, ge = RangeError), ge;
}
var he, dn;
function Ao() {
  return dn || (dn = 1, he = ReferenceError), he;
}
var de, mn;
function Oo() {
  return mn || (mn = 1, de = URIError), de;
}
var me, Sn;
function wo() {
  return Sn || (Sn = 1, me = Math.abs), me;
}
var Se, bn;
function qo() {
  return bn || (bn = 1, Se = Math.floor), Se;
}
var be, An;
function Po() {
  return An || (An = 1, be = Math.max), be;
}
var Ae, On;
function Io() {
  return On || (On = 1, Ae = Math.min), Ae;
}
var Oe, wn;
function $o() {
  return wn || (wn = 1, Oe = Math.pow), Oe;
}
var we, qn;
function Ro() {
  return qn || (qn = 1, we = Math.round), we;
}
var qe, Pn;
function Eo() {
  return Pn || (Pn = 1, qe = Number.isNaN || function(t) {
    return t !== t;
  }), qe;
}
var Pe, In;
function Bo() {
  if (In) return Pe;
  In = 1;
  var r = /* @__PURE__ */ Eo();
  return Pe = function(n) {
    return r(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Pe;
}
var Ie, $n;
function Ur() {
  return $n || ($n = 1, Ie = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), o = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
      return !1;
    var e = 42;
    t[n] = e;
    for (var s in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (a.value !== e || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ie;
}
var $e, Rn;
function kt() {
  if (Rn) return $e;
  Rn = 1;
  var r = typeof Symbol < "u" && Symbol, t = Ur();
  return $e = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, $e;
}
var Re, En;
function Ga() {
  return En || (En = 1, Re = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Re;
}
var Ee, Bn;
function Ha() {
  if (Bn) return Ee;
  Bn = 1;
  var r = /* @__PURE__ */ Wt();
  return Ee = r.getPrototypeOf || null, Ee;
}
var Be, Mn;
function Mo() {
  if (Mn) return Be;
  Mn = 1;
  var r = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, o = "[object Function]", e = function(f, c) {
    for (var g = [], p = 0; p < f.length; p += 1)
      g[p] = f[p];
    for (var y = 0; y < c.length; y += 1)
      g[y + f.length] = c[y];
    return g;
  }, s = function(f, c) {
    for (var g = [], p = c, y = 0; p < f.length; p += 1, y += 1)
      g[y] = f[p];
    return g;
  }, i = function(a, f) {
    for (var c = "", g = 0; g < a.length; g += 1)
      c += a[g], g + 1 < a.length && (c += f);
    return c;
  };
  return Be = function(f) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== o)
      throw new TypeError(r + c);
    for (var g = s(arguments, 1), p, y = function() {
      if (this instanceof p) {
        var I = c.apply(
          this,
          e(g, arguments)
        );
        return Object(I) === I ? I : this;
      }
      return c.apply(
        f,
        e(g, arguments)
      );
    }, d = n(0, c.length - g.length), b = [], j = 0; j < d; j++)
      b[j] = "$" + j;
    if (p = Function("binder", "return function (" + i(b, ",") + "){ return binder.apply(this,arguments); }")(y), c.prototype) {
      var P = function() {
      };
      P.prototype = c.prototype, p.prototype = new P(), P.prototype = null;
    }
    return p;
  }, Be;
}
var Me, jn;
function Tr() {
  if (jn) return Me;
  jn = 1;
  var r = Mo();
  return Me = Function.prototype.bind || r, Me;
}
var je, Tn;
function Lt() {
  return Tn || (Tn = 1, je = Function.prototype.call), je;
}
var Te, xn;
function Ut() {
  return xn || (xn = 1, Te = Function.prototype.apply), Te;
}
var xe, Dn;
function jo() {
  return Dn || (Dn = 1, xe = typeof Reflect < "u" && Reflect && Reflect.apply), xe;
}
var De, Fn;
function za() {
  if (Fn) return De;
  Fn = 1;
  var r = Tr(), t = Ut(), n = Lt(), o = jo();
  return De = o || r.call(n, t), De;
}
var Fe, Cn;
function Gt() {
  if (Cn) return Fe;
  Cn = 1;
  var r = Tr(), t = /* @__PURE__ */ tr(), n = Lt(), o = za();
  return Fe = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return o(r, n, s);
  }, Fe;
}
var Ce, _n;
function To() {
  if (_n) return Ce;
  _n = 1;
  var r = Gt(), t = /* @__PURE__ */ Ar(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var o = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), e = Object, s = e.getPrototypeOf;
  return Ce = o && typeof o.get == "function" ? r([o.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return s(a == null ? a : e(a));
    }
  ) : !1, Ce;
}
var _e, Nn;
function Va() {
  if (Nn) return _e;
  Nn = 1;
  var r = Ga(), t = Ha(), n = /* @__PURE__ */ To();
  return _e = r ? function(e) {
    return r(e);
  } : t ? function(e) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new TypeError("getProto: not an object");
    return t(e);
  } : n ? function(e) {
    return n(e);
  } : null, _e;
}
var Ne, Wn;
function Ht() {
  if (Wn) return Ne;
  Wn = 1;
  var r = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Tr();
  return Ne = n.call(r, t), Ne;
}
var We, kn;
function cr() {
  if (kn) return We;
  kn = 1;
  var r, t = /* @__PURE__ */ Wt(), n = /* @__PURE__ */ Ua(), o = /* @__PURE__ */ So(), e = /* @__PURE__ */ bo(), s = /* @__PURE__ */ Ao(), i = /* @__PURE__ */ Ct(), a = /* @__PURE__ */ tr(), f = /* @__PURE__ */ Oo(), c = /* @__PURE__ */ wo(), g = /* @__PURE__ */ qo(), p = /* @__PURE__ */ Po(), y = /* @__PURE__ */ Io(), d = /* @__PURE__ */ $o(), b = /* @__PURE__ */ Ro(), j = /* @__PURE__ */ Bo(), P = Function, I = function(x) {
    try {
      return P('"use strict"; return (' + x + ").constructor;")();
    } catch {
    }
  }, O = /* @__PURE__ */ Ar(), S = /* @__PURE__ */ Lr(), T = function() {
    throw new a();
  }, X = O ? function() {
    try {
      return arguments.callee, T;
    } catch {
      try {
        return O(arguments, "callee").get;
      } catch {
        return T;
      }
    }
  }() : T, G = kt()(), C = Va(), F = Ha(), w = Ga(), _ = Ut(), L = Lt(), N = {}, U = typeof Uint8Array > "u" || !C ? r : C(Uint8Array), V = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
    "%ArrayIteratorPrototype%": G && C ? C([][Symbol.iterator]()) : r,
    "%AsyncFromSyncIteratorPrototype%": r,
    "%AsyncFunction%": N,
    "%AsyncGenerator%": N,
    "%AsyncGeneratorFunction%": N,
    "%AsyncIteratorPrototype%": N,
    "%Atomics%": typeof Atomics > "u" ? r : Atomics,
    "%BigInt%": typeof BigInt > "u" ? r : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? r : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": o,
    "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
    "%Function%": P,
    "%GeneratorFunction%": N,
    "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": G && C ? C(C([][Symbol.iterator]())) : r,
    "%JSON%": typeof JSON == "object" ? JSON : r,
    "%Map%": typeof Map > "u" ? r : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !G || !C ? r : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": O,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? r : Promise,
    "%Proxy%": typeof Proxy > "u" ? r : Proxy,
    "%RangeError%": e,
    "%ReferenceError%": s,
    "%Reflect%": typeof Reflect > "u" ? r : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? r : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !G || !C ? r : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": G && C ? C(""[Symbol.iterator]()) : r,
    "%Symbol%": G ? Symbol : r,
    "%SyntaxError%": i,
    "%ThrowTypeError%": X,
    "%TypedArray%": U,
    "%TypeError%": a,
    "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
    "%URIError%": f,
    "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
    "%Function.prototype.call%": L,
    "%Function.prototype.apply%": _,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": F,
    "%Math.abs%": c,
    "%Math.floor%": g,
    "%Math.max%": p,
    "%Math.min%": y,
    "%Math.pow%": d,
    "%Math.round%": b,
    "%Math.sign%": j,
    "%Reflect.getPrototypeOf%": w
  };
  if (C)
    try {
      null.error;
    } catch (x) {
      var ir = C(C(x));
      V["%Error.prototype%"] = ir;
    }
  var qr = function x(A) {
    var q;
    if (A === "%AsyncFunction%")
      q = I("async function () {}");
    else if (A === "%GeneratorFunction%")
      q = I("function* () {}");
    else if (A === "%AsyncGeneratorFunction%")
      q = I("async function* () {}");
    else if (A === "%AsyncGenerator%") {
      var m = x("%AsyncGeneratorFunction%");
      m && (q = m.prototype);
    } else if (A === "%AsyncIteratorPrototype%") {
      var E = x("%AsyncGenerator%");
      E && C && (q = C(E.prototype));
    }
    return V[A] = q, q;
  }, dr = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, nr = Tr(), H = /* @__PURE__ */ Ht(), mr = nr.call(L, Array.prototype.concat), Pr = nr.call(_, Array.prototype.splice), Sr = nr.call(L, String.prototype.replace), pr = nr.call(L, String.prototype.slice), v = nr.call(L, RegExp.prototype.exec), h = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, R = /\\(\\)?/g, $ = function(A) {
    var q = pr(A, 0, 1), m = pr(A, -1);
    if (q === "%" && m !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (m === "%" && q !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var E = [];
    return Sr(A, h, function(z, J, K, Y) {
      E[E.length] = K ? Sr(Y, R, "$1") : J || z;
    }), E;
  }, M = function(A, q) {
    var m = A, E;
    if (H(dr, m) && (E = dr[m], m = "%" + E[0] + "%"), H(V, m)) {
      var z = V[m];
      if (z === N && (z = qr(m)), typeof z > "u" && !q)
        throw new a("intrinsic " + A + " exists, but is not available. Please file an issue!");
      return {
        alias: E,
        name: m,
        value: z
      };
    }
    throw new i("intrinsic " + A + " does not exist!");
  };
  return We = function(A, q) {
    if (typeof A != "string" || A.length === 0)
      throw new a("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new a('"allowMissing" argument must be a boolean');
    if (v(/^%?[^%]*%?$/, A) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var m = $(A), E = m.length > 0 ? m[0] : "", z = M("%" + E + "%", q), J = z.name, K = z.value, Y = !1, Z = z.alias;
    Z && (E = Z[0], Pr(m, mr([0, 1], Z)));
    for (var ur = 1, ar = !0; ur < m.length; ur += 1) {
      var rr = m[ur], fr = pr(rr, 0, 1), sr = pr(rr, -1);
      if ((fr === '"' || fr === "'" || fr === "`" || sr === '"' || sr === "'" || sr === "`") && fr !== sr)
        throw new i("property names with quotes must have matching quotes");
      if ((rr === "constructor" || !ar) && (Y = !0), E += "." + rr, J = "%" + E + "%", H(V, J))
        K = V[J];
      else if (K != null) {
        if (!(rr in K)) {
          if (!q)
            throw new a("base intrinsic for " + A + " exists, but the property is not available.");
          return;
        }
        if (O && ur + 1 >= m.length) {
          var lr = O(K, rr);
          ar = !!lr, ar && "get" in lr && !("originalValue" in lr.get) ? K = lr.get : K = K[rr];
        } else
          ar = H(K, rr), K = K[rr];
        ar && !Y && (V[J] = K);
      }
    }
    return K;
  }, We;
}
var ke, Ln;
function xo() {
  if (Ln) return ke;
  Ln = 1;
  var r = /* @__PURE__ */ cr(), t = /* @__PURE__ */ _t(), n = /* @__PURE__ */ Nt()(), o = /* @__PURE__ */ Ar(), e = /* @__PURE__ */ tr(), s = r("%Math.floor%");
  return ke = function(a, f) {
    if (typeof a != "function")
      throw new e("`fn` is not a function");
    if (typeof f != "number" || f < 0 || f > 4294967295 || s(f) !== f)
      throw new e("`length` must be a positive 32-bit integer");
    var c = arguments.length > 2 && !!arguments[2], g = !0, p = !0;
    if ("length" in a && o) {
      var y = o(a, "length");
      y && !y.configurable && (g = !1), y && !y.writable && (p = !1);
    }
    return (g || p || !c) && (n ? t(
      /** @type {Parameters<define>[0]} */
      a,
      "length",
      f,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      a,
      "length",
      f
    )), a;
  }, ke;
}
var Le, Un;
function Do() {
  if (Un) return Le;
  Un = 1;
  var r = Tr(), t = Ut(), n = za();
  return Le = function() {
    return n(r, t, arguments);
  }, Le;
}
var Gn;
function Er() {
  return Gn || (Gn = 1, function(r) {
    var t = /* @__PURE__ */ xo(), n = /* @__PURE__ */ Lr(), o = Gt(), e = Do();
    r.exports = function(i) {
      var a = o(arguments), f = i.length - (arguments.length - 1);
      return t(
        a,
        1 + (f > 0 ? f : 0),
        !0
      );
    }, n ? n(r.exports, "apply", { value: e }) : r.exports.apply = e;
  }(ce)), ce.exports;
}
var Ue, Hn;
function Q() {
  if (Hn) return Ue;
  Hn = 1;
  var r = /* @__PURE__ */ cr(), t = Gt(), n = t([r("%String.prototype.indexOf%")]);
  return Ue = function(e, s) {
    var i = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      r(e, !!s)
    );
    return typeof i == "function" && n(e, ".prototype.") > -1 ? t([i]) : i;
  }, Ue;
}
var Ge, zn;
function Ja() {
  if (zn) return Ge;
  zn = 1;
  var r = Ft(), t = Ur()(), n = /* @__PURE__ */ Q(), o = /* @__PURE__ */ Wt(), e = n("Array.prototype.push"), s = n("Object.prototype.propertyIsEnumerable"), i = t ? o.getOwnPropertySymbols : null;
  return Ge = function(f, c) {
    if (f == null)
      throw new TypeError("target must be an object");
    var g = o(f);
    if (arguments.length === 1)
      return g;
    for (var p = 1; p < arguments.length; ++p) {
      var y = o(arguments[p]), d = r(y), b = t && (o.getOwnPropertySymbols || i);
      if (b)
        for (var j = b(y), P = 0; P < j.length; ++P) {
          var I = j[P];
          s(y, I) && e(d, I);
        }
      for (var O = 0; O < d.length; ++O) {
        var S = d[O];
        if (s(y, S)) {
          var T = y[S];
          g[S] = T;
        }
      }
    }
    return g;
  }, Ge;
}
var He, Vn;
function Ka() {
  if (Vn) return He;
  Vn = 1;
  var r = Ja(), t = function() {
    if (!Object.assign)
      return !1;
    for (var o = "abcdefghijklmnopqrst", e = o.split(""), s = {}, i = 0; i < e.length; ++i)
      s[e[i]] = e[i];
    var a = Object.assign({}, s), f = "";
    for (var c in a)
      f += c;
    return o !== f;
  }, n = function() {
    if (!Object.assign || !Object.preventExtensions)
      return !1;
    var o = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(o, "xy");
    } catch {
      return o[1] === "y";
    }
    return !1;
  };
  return He = function() {
    return !Object.assign || t() || n() ? r : Object.assign;
  }, He;
}
var ze, Jn;
function Fo() {
  if (Jn) return ze;
  Jn = 1;
  var r = Or(), t = Ka();
  return ze = function() {
    var o = t();
    return r(
      Object,
      { assign: o },
      { assign: function() {
        return Object.assign !== o;
      } }
    ), o;
  }, ze;
}
var Ve, Kn;
function Co() {
  if (Kn) return Ve;
  Kn = 1;
  var r = Or(), t = Er(), n = Ja(), o = Ka(), e = Fo(), s = t.apply(o()), i = function(f, c) {
    return s(Object, arguments);
  };
  return r(i, {
    getPolyfill: o,
    implementation: n,
    shim: e
  }), Ve = i, Ve;
}
var Je, Yn;
function Ya() {
  if (Yn) return Je;
  Yn = 1;
  var r = /* @__PURE__ */ cr(), t = Er(), n = t(r("String.prototype.indexOf"));
  return Je = function(e, s) {
    var i = r(e, !!s);
    return typeof i == "function" && n(e, ".prototype.") > -1 ? t(i) : i;
  }, Je;
}
var Ke, Xn;
function _o() {
  if (Xn) return Ke;
  Xn = 1;
  var r = function() {
    return typeof (function() {
    }).name == "string";
  }, t = Object.getOwnPropertyDescriptor;
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  r.functionsHaveConfigurableNames = function() {
    if (!r() || !t)
      return !1;
    var e = t(function() {
    }, "name");
    return !!e && !!e.configurable;
  };
  var n = Function.prototype.bind;
  return r.boundFunctionsHaveNames = function() {
    return r() && typeof n == "function" && (function() {
    }).bind().name !== "";
  }, Ke = r, Ke;
}
var Ye, Qn;
function No() {
  if (Qn) return Ye;
  Qn = 1;
  var r = /* @__PURE__ */ _t(), t = /* @__PURE__ */ Nt()(), n = _o().functionsHaveConfigurableNames(), o = /* @__PURE__ */ tr();
  return Ye = function(s, i) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    var a = arguments.length > 2 && !!arguments[2];
    return (!a || n) && (t ? r(
      /** @type {Parameters<define>[0]} */
      s,
      "name",
      i,
      !0,
      !0
    ) : r(
      /** @type {Parameters<define>[0]} */
      s,
      "name",
      i
    )), s;
  }, Ye;
}
var Xe, Zn;
function Xa() {
  if (Zn) return Xe;
  Zn = 1;
  var r = No(), t = /* @__PURE__ */ tr(), n = Object;
  return Xe = r(function() {
    if (this == null || this !== n(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var e = "";
    return this.hasIndices && (e += "d"), this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.unicodeSets && (e += "v"), this.sticky && (e += "y"), e;
  }, "get flags", !0), Xe;
}
var Qe, ra;
function Qa() {
  if (ra) return Qe;
  ra = 1;
  var r = Xa(), t = Or().supportsDescriptors, n = Object.getOwnPropertyDescriptor;
  return Qe = function() {
    if (t && /a/mig.flags === "gim") {
      var e = n(RegExp.prototype, "flags");
      if (e && typeof e.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
        var s = "", i = {};
        if (Object.defineProperty(i, "hasIndices", {
          get: function() {
            s += "d";
          }
        }), Object.defineProperty(i, "sticky", {
          get: function() {
            s += "y";
          }
        }), e.get.call(i), s === "dy")
          return e.get;
      }
    }
    return r;
  }, Qe;
}
var Ze, ea;
function Wo() {
  if (ea) return Ze;
  ea = 1;
  var r = Or().supportsDescriptors, t = Qa(), n = /* @__PURE__ */ Ar(), o = Object.defineProperty, e = /* @__PURE__ */ Ua(), s = Va(), i = /a/;
  return Ze = function() {
    if (!r || !s)
      throw new e("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var f = t(), c = s(i), g = n(c, "flags");
    return (!g || g.get !== f) && o(c, "flags", {
      configurable: !0,
      enumerable: !1,
      get: f
    }), f;
  }, Ze;
}
var rt, ta;
function ko() {
  if (ta) return rt;
  ta = 1;
  var r = Or(), t = Er(), n = Xa(), o = Qa(), e = Wo(), s = t(o());
  return r(s, {
    getPolyfill: o,
    implementation: n,
    shim: e
  }), rt = s, rt;
}
var jr = { exports: {} }, et, na;
function wr() {
  if (na) return et;
  na = 1;
  var r = Ur();
  return et = function() {
    return r() && !!Symbol.toStringTag;
  }, et;
}
var tt, aa;
function Za() {
  if (aa) return tt;
  aa = 1;
  var r = wr()(), t = /* @__PURE__ */ Q(), n = t("Object.prototype.toString"), o = function(a) {
    return r && a && typeof a == "object" && Symbol.toStringTag in a ? !1 : n(a) === "[object Arguments]";
  }, e = function(a) {
    return o(a) ? !0 : a !== null && typeof a == "object" && "length" in a && typeof a.length == "number" && a.length >= 0 && n(a) !== "[object Array]" && "callee" in a && n(a.callee) === "[object Function]";
  }, s = function() {
    return o(arguments);
  }();
  return o.isLegacyArguments = e, tt = s ? o : e, tt;
}
const Lo = {}, Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), Go = /* @__PURE__ */ vo(Uo);
var nt, oa;
function Gr() {
  if (oa) return nt;
  oa = 1;
  var r = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = r && t && typeof t.get == "function" ? t.get : null, o = r && Map.prototype.forEach, e = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = e && s && typeof s.get == "function" ? s.get : null, a = e && Set.prototype.forEach, f = typeof WeakMap == "function" && WeakMap.prototype, c = f ? WeakMap.prototype.has : null, g = typeof WeakSet == "function" && WeakSet.prototype, p = g ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, d = y ? WeakRef.prototype.deref : null, b = Boolean.prototype.valueOf, j = Object.prototype.toString, P = Function.prototype.toString, I = String.prototype.match, O = String.prototype.slice, S = String.prototype.replace, T = String.prototype.toUpperCase, X = String.prototype.toLowerCase, G = RegExp.prototype.test, C = Array.prototype.concat, F = Array.prototype.join, w = Array.prototype.slice, _ = Math.floor, L = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, N = Object.getOwnPropertySymbols, U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", ir = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, qr = Object.prototype.propertyIsEnumerable, dr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(u) {
    return u.__proto__;
  } : null);
  function nr(u, l) {
    if (u === 1 / 0 || u === -1 / 0 || u !== u || u && u > -1e3 && u < 1e3 || G.call(/e/, l))
      return l;
    var D = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof u == "number") {
      var W = u < 0 ? -_(-u) : _(u);
      if (W !== u) {
        var k = String(W), B = O.call(l, k.length + 1);
        return S.call(k, D, "$&_") + "." + S.call(S.call(B, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(l, D, "$&_");
  }
  var H = Go, mr = H.custom, Pr = z(mr) ? mr : null, Sr = {
    __proto__: null,
    double: '"',
    single: "'"
  }, pr = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  nt = function u(l, D, W, k) {
    var B = D || {};
    if (Y(B, "quoteStyle") && !Y(Sr, B.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Y(B, "maxStringLength") && (typeof B.maxStringLength == "number" ? B.maxStringLength < 0 && B.maxStringLength !== 1 / 0 : B.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var gr = Y(B, "customInspect") ? B.customInspect : !0;
    if (typeof gr != "boolean" && gr !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Y(B, "indent") && B.indent !== null && B.indent !== "	" && !(parseInt(B.indent, 10) === B.indent && B.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Y(B, "numericSeparator") && typeof B.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var br = B.numericSeparator;
    if (typeof l > "u")
      return "undefined";
    if (l === null)
      return "null";
    if (typeof l == "boolean")
      return l ? "true" : "false";
    if (typeof l == "string")
      return Ir(l, B);
    if (typeof l == "number") {
      if (l === 0)
        return 1 / 0 / l > 0 ? "0" : "-0";
      var er = String(l);
      return br ? nr(l, er) : er;
    }
    if (typeof l == "bigint") {
      var hr = String(l) + "n";
      return br ? nr(l, hr) : hr;
    }
    var Vr = typeof B.depth > "u" ? 5 : B.depth;
    if (typeof W > "u" && (W = 0), W >= Vr && Vr > 0 && typeof l == "object")
      return $(l) ? "[Array]" : "[Object]";
    var $r = co(B, W);
    if (typeof k > "u")
      k = [];
    else if (ar(k, l) >= 0)
      return "[Circular]";
    function or(Rr, Cr, yo) {
      if (Cr && (k = w.call(k), k.push(Cr)), yo) {
        var rn = {
          depth: B.depth
        };
        return Y(B, "quoteStyle") && (rn.quoteStyle = B.quoteStyle), u(Rr, rn, W + 1, k);
      }
      return u(Rr, B, W + 1, k);
    }
    if (typeof l == "function" && !x(l)) {
      var Vt = ur(l), Jt = Dr(l, or);
      return "[Function" + (Vt ? ": " + Vt : " (anonymous)") + "]" + (Jt.length > 0 ? " { " + F.call(Jt, ", ") + " }" : "");
    }
    if (z(l)) {
      var Kt = V ? S.call(String(l), /^(Symbol\(.*\))_[^)]*$/, "$1") : U.call(l);
      return typeof l == "object" && !V ? vr(Kt) : Kt;
    }
    if (yr(l)) {
      for (var Mr = "<" + X.call(String(l.nodeName)), Jr = l.attributes || [], Fr = 0; Fr < Jr.length; Fr++)
        Mr += " " + Jr[Fr].name + "=" + v(h(Jr[Fr].value), "double", B);
      return Mr += ">", l.childNodes && l.childNodes.length && (Mr += "..."), Mr += "</" + X.call(String(l.nodeName)) + ">", Mr;
    }
    if ($(l)) {
      if (l.length === 0)
        return "[]";
      var Kr = Dr(l, or);
      return $r && !lo(Kr) ? "[" + zr(Kr, $r) + "]" : "[ " + F.call(Kr, ", ") + " ]";
    }
    if (A(l)) {
      var Yr = Dr(l, or);
      return !("cause" in Error.prototype) && "cause" in l && !qr.call(l, "cause") ? "{ [" + String(l) + "] " + F.call(C.call("[cause]: " + or(l.cause), Yr), ", ") + " }" : Yr.length === 0 ? "[" + String(l) + "]" : "{ [" + String(l) + "] " + F.call(Yr, ", ") + " }";
    }
    if (typeof l == "object" && gr) {
      if (Pr && typeof l[Pr] == "function" && H)
        return H(l, { depth: Vr - W });
      if (gr !== "symbol" && typeof l.inspect == "function")
        return l.inspect();
    }
    if (rr(l)) {
      var Yt = [];
      return o && o.call(l, function(Rr, Cr) {
        Yt.push(or(Cr, l, !0) + " => " + or(Rr, l));
      }), zt("Map", n.call(l), Yt, $r);
    }
    if (lr(l)) {
      var Xt = [];
      return a && a.call(l, function(Rr) {
        Xt.push(or(Rr, l));
      }), zt("Set", i.call(l), Xt, $r);
    }
    if (fr(l))
      return Hr("WeakMap");
    if (xr(l))
      return Hr("WeakSet");
    if (sr(l))
      return Hr("WeakRef");
    if (m(l))
      return vr(or(Number(l)));
    if (J(l))
      return vr(or(L.call(l)));
    if (E(l))
      return vr(b.call(l));
    if (q(l))
      return vr(or(String(l)));
    if (typeof window < "u" && l === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && l === globalThis || typeof kr < "u" && l === kr)
      return "{ [object globalThis] }";
    if (!M(l) && !x(l)) {
      var Xr = Dr(l, or), Qt = dr ? dr(l) === Object.prototype : l instanceof Object || l.constructor === Object, Qr = l instanceof Object ? "" : "null prototype", Zt = !Qt && ir && Object(l) === l && ir in l ? O.call(Z(l), 8, -1) : Qr ? "Object" : "", po = Qt || typeof l.constructor != "function" ? "" : l.constructor.name ? l.constructor.name + " " : "", Zr = po + (Zt || Qr ? "[" + F.call(C.call([], Zt || [], Qr || []), ": ") + "] " : "");
      return Xr.length === 0 ? Zr + "{}" : $r ? Zr + "{" + zr(Xr, $r) + "}" : Zr + "{ " + F.call(Xr, ", ") + " }";
    }
    return String(l);
  };
  function v(u, l, D) {
    var W = D.quoteStyle || l, k = Sr[W];
    return k + u + k;
  }
  function h(u) {
    return S.call(String(u), /"/g, "&quot;");
  }
  function R(u) {
    return !ir || !(typeof u == "object" && (ir in u || typeof u[ir] < "u"));
  }
  function $(u) {
    return Z(u) === "[object Array]" && R(u);
  }
  function M(u) {
    return Z(u) === "[object Date]" && R(u);
  }
  function x(u) {
    return Z(u) === "[object RegExp]" && R(u);
  }
  function A(u) {
    return Z(u) === "[object Error]" && R(u);
  }
  function q(u) {
    return Z(u) === "[object String]" && R(u);
  }
  function m(u) {
    return Z(u) === "[object Number]" && R(u);
  }
  function E(u) {
    return Z(u) === "[object Boolean]" && R(u);
  }
  function z(u) {
    if (V)
      return u && typeof u == "object" && u instanceof Symbol;
    if (typeof u == "symbol")
      return !0;
    if (!u || typeof u != "object" || !U)
      return !1;
    try {
      return U.call(u), !0;
    } catch {
    }
    return !1;
  }
  function J(u) {
    if (!u || typeof u != "object" || !L)
      return !1;
    try {
      return L.call(u), !0;
    } catch {
    }
    return !1;
  }
  var K = Object.prototype.hasOwnProperty || function(u) {
    return u in this;
  };
  function Y(u, l) {
    return K.call(u, l);
  }
  function Z(u) {
    return j.call(u);
  }
  function ur(u) {
    if (u.name)
      return u.name;
    var l = I.call(P.call(u), /^function\s*([\w$]+)/);
    return l ? l[1] : null;
  }
  function ar(u, l) {
    if (u.indexOf)
      return u.indexOf(l);
    for (var D = 0, W = u.length; D < W; D++)
      if (u[D] === l)
        return D;
    return -1;
  }
  function rr(u) {
    if (!n || !u || typeof u != "object")
      return !1;
    try {
      n.call(u);
      try {
        i.call(u);
      } catch {
        return !0;
      }
      return u instanceof Map;
    } catch {
    }
    return !1;
  }
  function fr(u) {
    if (!c || !u || typeof u != "object")
      return !1;
    try {
      c.call(u, c);
      try {
        p.call(u, p);
      } catch {
        return !0;
      }
      return u instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function sr(u) {
    if (!d || !u || typeof u != "object")
      return !1;
    try {
      return d.call(u), !0;
    } catch {
    }
    return !1;
  }
  function lr(u) {
    if (!i || !u || typeof u != "object")
      return !1;
    try {
      i.call(u);
      try {
        n.call(u);
      } catch {
        return !0;
      }
      return u instanceof Set;
    } catch {
    }
    return !1;
  }
  function xr(u) {
    if (!p || !u || typeof u != "object")
      return !1;
    try {
      p.call(u, p);
      try {
        c.call(u, c);
      } catch {
        return !0;
      }
      return u instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function yr(u) {
    return !u || typeof u != "object" ? !1 : typeof HTMLElement < "u" && u instanceof HTMLElement ? !0 : typeof u.nodeName == "string" && typeof u.getAttribute == "function";
  }
  function Ir(u, l) {
    if (u.length > l.maxStringLength) {
      var D = u.length - l.maxStringLength, W = "... " + D + " more character" + (D > 1 ? "s" : "");
      return Ir(O.call(u, 0, l.maxStringLength), l) + W;
    }
    var k = pr[l.quoteStyle || "single"];
    k.lastIndex = 0;
    var B = S.call(S.call(u, k, "\\$1"), /[\x00-\x1f]/g, Br);
    return v(B, "single", l);
  }
  function Br(u) {
    var l = u.charCodeAt(0), D = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[l];
    return D ? "\\" + D : "\\x" + (l < 16 ? "0" : "") + T.call(l.toString(16));
  }
  function vr(u) {
    return "Object(" + u + ")";
  }
  function Hr(u) {
    return u + " { ? }";
  }
  function zt(u, l, D, W) {
    var k = W ? zr(D, W) : F.call(D, ", ");
    return u + " (" + l + ") {" + k + "}";
  }
  function lo(u) {
    for (var l = 0; l < u.length; l++)
      if (ar(u[l], `
`) >= 0)
        return !1;
    return !0;
  }
  function co(u, l) {
    var D;
    if (u.indent === "	")
      D = "	";
    else if (typeof u.indent == "number" && u.indent > 0)
      D = F.call(Array(u.indent + 1), " ");
    else
      return null;
    return {
      base: D,
      prev: F.call(Array(l + 1), D)
    };
  }
  function zr(u, l) {
    if (u.length === 0)
      return "";
    var D = `
` + l.prev + l.base;
    return D + F.call(u, "," + D) + `
` + l.prev;
  }
  function Dr(u, l) {
    var D = $(u), W = [];
    if (D) {
      W.length = u.length;
      for (var k = 0; k < u.length; k++)
        W[k] = Y(u, k) ? l(u[k], u) : "";
    }
    var B = typeof N == "function" ? N(u) : [], gr;
    if (V) {
      gr = {};
      for (var br = 0; br < B.length; br++)
        gr["$" + B[br]] = B[br];
    }
    for (var er in u)
      Y(u, er) && (D && String(Number(er)) === er && er < u.length || V && gr["$" + er] instanceof Symbol || (G.call(/[^\w$]/, er) ? W.push(l(er, u) + ": " + l(u[er], u)) : W.push(er + ": " + l(u[er], u))));
    if (typeof N == "function")
      for (var hr = 0; hr < B.length; hr++)
        qr.call(u, B[hr]) && W.push("[" + l(B[hr]) + "]: " + l(u[B[hr]], u));
    return W;
  }
  return nt;
}
var at, ia;
function Ho() {
  if (ia) return at;
  ia = 1;
  var r = /* @__PURE__ */ Gr(), t = /* @__PURE__ */ tr(), n = function(a, f, c) {
    for (var g = a, p; (p = g.next) != null; g = p)
      if (p.key === f)
        return g.next = p.next, c || (p.next = /** @type {NonNullable<typeof list.next>} */
        a.next, a.next = p), p;
  }, o = function(a, f) {
    if (a) {
      var c = n(a, f);
      return c && c.value;
    }
  }, e = function(a, f, c) {
    var g = n(a, f);
    g ? g.value = c : a.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: f,
      next: a.next,
      value: c
    };
  }, s = function(a, f) {
    return a ? !!n(a, f) : !1;
  }, i = function(a, f) {
    if (a)
      return n(a, f, !0);
  };
  return at = function() {
    var f, c = {
      assert: function(g) {
        if (!c.has(g))
          throw new t("Side channel does not contain " + r(g));
      },
      delete: function(g) {
        var p = f && f.next, y = i(f, g);
        return y && p && p === y && (f = void 0), !!y;
      },
      get: function(g) {
        return o(f, g);
      },
      has: function(g) {
        return s(f, g);
      },
      set: function(g, p) {
        f || (f = {
          next: void 0
        }), e(
          /** @type {NonNullable<typeof $o>} */
          f,
          g,
          p
        );
      }
    };
    return c;
  }, at;
}
var ot, ua;
function ro() {
  if (ua) return ot;
  ua = 1;
  var r = /* @__PURE__ */ cr(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Gr(), o = /* @__PURE__ */ tr(), e = r("%Map%", !0), s = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), a = t("Map.prototype.has", !0), f = t("Map.prototype.delete", !0), c = t("Map.prototype.size", !0);
  return ot = !!e && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, y = {
      assert: function(d) {
        if (!y.has(d))
          throw new o("Side channel does not contain " + n(d));
      },
      delete: function(d) {
        if (p) {
          var b = f(p, d);
          return c(p) === 0 && (p = void 0), b;
        }
        return !1;
      },
      get: function(d) {
        if (p)
          return s(p, d);
      },
      has: function(d) {
        return p ? a(p, d) : !1;
      },
      set: function(d, b) {
        p || (p = new e()), i(p, d, b);
      }
    };
    return y;
  }, ot;
}
var it, fa;
function zo() {
  if (fa) return it;
  fa = 1;
  var r = /* @__PURE__ */ cr(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ Gr(), o = ro(), e = /* @__PURE__ */ tr(), s = r("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), a = t("WeakMap.prototype.set", !0), f = t("WeakMap.prototype.has", !0), c = t("WeakMap.prototype.delete", !0);
  return it = s ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, y, d = {
        assert: function(b) {
          if (!d.has(b))
            throw new e("Side channel does not contain " + n(b));
        },
        delete: function(b) {
          if (s && b && (typeof b == "object" || typeof b == "function")) {
            if (p)
              return c(p, b);
          } else if (o && y)
            return y.delete(b);
          return !1;
        },
        get: function(b) {
          return s && b && (typeof b == "object" || typeof b == "function") && p ? i(p, b) : y && y.get(b);
        },
        has: function(b) {
          return s && b && (typeof b == "object" || typeof b == "function") && p ? f(p, b) : !!y && y.has(b);
        },
        set: function(b, j) {
          s && b && (typeof b == "object" || typeof b == "function") ? (p || (p = new s()), a(p, b, j)) : o && (y || (y = o()), y.set(b, j));
        }
      };
      return d;
    }
  ) : o, it;
}
var ut, sa;
function eo() {
  if (sa) return ut;
  sa = 1;
  var r = /* @__PURE__ */ tr(), t = /* @__PURE__ */ Gr(), n = Ho(), o = ro(), e = zo(), s = e || o || n;
  return ut = function() {
    var a, f = {
      assert: function(c) {
        if (!f.has(c))
          throw new r("Side channel does not contain " + t(c));
      },
      delete: function(c) {
        return !!a && a.delete(c);
      },
      get: function(c) {
        return a && a.get(c);
      },
      has: function(c) {
        return !!a && a.has(c);
      },
      set: function(c, g) {
        a || (a = s()), a.set(c, g);
      }
    };
    return f;
  }, ut;
}
var ft, la;
function Vo() {
  if (la) return ft;
  la = 1;
  var r = /* @__PURE__ */ Ht(), t = eo()(), n = /* @__PURE__ */ tr(), o = {
    assert: function(e, s) {
      if (!e || typeof e != "object" && typeof e != "function")
        throw new n("`O` is not an object");
      if (typeof s != "string")
        throw new n("`slot` must be a string");
      if (t.assert(e), !o.has(e, s))
        throw new n("`" + s + "` is not present on `O`");
    },
    get: function(e, s) {
      if (!e || typeof e != "object" && typeof e != "function")
        throw new n("`O` is not an object");
      if (typeof s != "string")
        throw new n("`slot` must be a string");
      var i = t.get(e);
      return i && i[
        /** @type {SaltedInternalSlot} */
        "$" + s
      ];
    },
    has: function(e, s) {
      if (!e || typeof e != "object" && typeof e != "function")
        throw new n("`O` is not an object");
      if (typeof s != "string")
        throw new n("`slot` must be a string");
      var i = t.get(e);
      return !!i && r(
        i,
        /** @type {SaltedInternalSlot} */
        "$" + s
      );
    },
    set: function(e, s, i) {
      if (!e || typeof e != "object" && typeof e != "function")
        throw new n("`O` is not an object");
      if (typeof s != "string")
        throw new n("`slot` must be a string");
      var a = t.get(e);
      a || (a = {}, t.set(e, a)), a[
        /** @type {SaltedInternalSlot} */
        "$" + s
      ] = i;
    }
  };
  return Object.freeze && Object.freeze(o), ft = o, ft;
}
var st, ca;
function Jo() {
  if (ca) return st;
  ca = 1;
  var r = Vo(), t = /* @__PURE__ */ Ct(), n = typeof StopIteration == "object" ? StopIteration : null;
  return st = function(e) {
    if (!n)
      throw new t("this environment lacks StopIteration");
    r.set(e, "[[Done]]", !1);
    var s = {
      next: (
        /** @type {() => IteratorResult<T>} */
        function() {
          var a = (
            /** @type {typeof origIterator} */
            r.get(this, "[[Iterator]]")
          ), f = !!r.get(a, "[[Done]]");
          try {
            return {
              done: f,
              // eslint-disable-next-line no-extra-parens
              value: f ? void 0 : (
                /** @type {T} */
                a.next()
              )
            };
          } catch (c) {
            if (r.set(a, "[[Done]]", !0), c !== n)
              throw c;
            return {
              done: !0,
              value: void 0
            };
          }
        }
      )
    };
    return r.set(s, "[[Iterator]]", e), s;
  }, st;
}
var lt, pa;
function to() {
  if (pa) return lt;
  pa = 1;
  var r = {}.toString;
  return lt = Array.isArray || function(t) {
    return r.call(t) == "[object Array]";
  }, lt;
}
var ct, ya;
function no() {
  if (ya) return ct;
  ya = 1;
  var r = /* @__PURE__ */ Q(), t = r("String.prototype.valueOf"), n = function(a) {
    try {
      return t(a), !0;
    } catch {
      return !1;
    }
  }, o = r("Object.prototype.toString"), e = "[object String]", s = wr()();
  return ct = function(a) {
    return typeof a == "string" ? !0 : !a || typeof a != "object" ? !1 : s ? n(a) : o(a) === e;
  }, ct;
}
var pt, va;
function ao() {
  if (va) return pt;
  va = 1;
  var r = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, n;
  r || (n = function(i) {
    return !1;
  });
  var o = r ? Map.prototype.has : null, e = t ? Set.prototype.has : null;
  return !n && !o && (n = function(i) {
    return !1;
  }), pt = n || function(i) {
    if (!i || typeof i != "object")
      return !1;
    try {
      if (o.call(i), e)
        try {
          e.call(i);
        } catch {
          return !0;
        }
      return i instanceof r;
    } catch {
    }
    return !1;
  }, pt;
}
var yt, ga;
function oo() {
  if (ga) return yt;
  ga = 1;
  var r = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, n;
  t || (n = function(i) {
    return !1;
  });
  var o = r ? Map.prototype.has : null, e = t ? Set.prototype.has : null;
  return !n && !e && (n = function(i) {
    return !1;
  }), yt = n || function(i) {
    if (!i || typeof i != "object")
      return !1;
    try {
      if (e.call(i), o)
        try {
          o.call(i);
        } catch {
          return !0;
        }
      return i instanceof t;
    } catch {
    }
    return !1;
  }, yt;
}
var ha;
function Ko() {
  if (ha) return jr.exports;
  ha = 1;
  var r = /* @__PURE__ */ Za(), t = /* @__PURE__ */ Jo();
  if (kt()() || Ur()()) {
    var n = Symbol.iterator;
    jr.exports = function(w) {
      if (w != null && typeof w[n] < "u")
        return w[n]();
      if (r(w))
        return Array.prototype[n].call(w);
    };
  } else {
    var o = to(), e = no(), s = /* @__PURE__ */ cr(), i = s("%Map%", !0), a = s("%Set%", !0), f = Ya(), c = f("Array.prototype.push"), g = f("String.prototype.charCodeAt"), p = f("String.prototype.slice"), y = function(w, _) {
      var L = w.length;
      if (_ + 1 >= L)
        return _ + 1;
      var N = g(w, _);
      if (N < 55296 || N > 56319)
        return _ + 1;
      var U = g(w, _ + 1);
      return U < 56320 || U > 57343 ? _ + 1 : _ + 2;
    }, d = function(w) {
      var _ = 0;
      return {
        next: function() {
          var N = _ >= w.length, U;
          return N || (U = w[_], _ += 1), {
            done: N,
            value: U
          };
        }
      };
    }, b = function(w, _) {
      if (o(w) || r(w))
        return d(w);
      if (e(w)) {
        var L = 0;
        return {
          next: function() {
            var U = y(w, L), V = p(w, L, U);
            return L = U, {
              done: U > w.length,
              value: V
            };
          }
        };
      }
      if (_ && typeof w["_es6-shim iterator_"] < "u")
        return w["_es6-shim iterator_"]();
    };
    if (!i && !a)
      jr.exports = function(w) {
        if (w != null)
          return b(w, !0);
      };
    else {
      var j = /* @__PURE__ */ ao(), P = /* @__PURE__ */ oo(), I = f("Map.prototype.forEach", !0), O = f("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var S = f("Map.prototype.iterator", !0), T = f("Set.prototype.iterator", !0);
      var X = f("Map.prototype.@@iterator", !0) || f("Map.prototype._es6-shim iterator_", !0), G = f("Set.prototype.@@iterator", !0) || f("Set.prototype._es6-shim iterator_", !0), C = function(w) {
        if (j(w)) {
          if (S)
            return t(S(w));
          if (X)
            return X(w);
          if (I) {
            var _ = [];
            return I(w, function(N, U) {
              c(_, [U, N]);
            }), d(_);
          }
        }
        if (P(w)) {
          if (T)
            return t(T(w));
          if (G)
            return G(w);
          if (O) {
            var L = [];
            return O(w, function(N) {
              c(L, N);
            }), d(L);
          }
        }
      };
      jr.exports = function(w) {
        return C(w) || b(w);
      };
    }
  }
  return jr.exports;
}
var vt, da;
function io() {
  if (da) return vt;
  da = 1;
  var r = function(t) {
    return t !== t;
  };
  return vt = function(n, o) {
    return n === 0 && o === 0 ? 1 / n === 1 / o : !!(n === o || r(n) && r(o));
  }, vt;
}
var gt, ma;
function uo() {
  if (ma) return gt;
  ma = 1;
  var r = io();
  return gt = function() {
    return typeof Object.is == "function" ? Object.is : r;
  }, gt;
}
var ht, Sa;
function Yo() {
  if (Sa) return ht;
  Sa = 1;
  var r = uo(), t = Or();
  return ht = function() {
    var o = r();
    return t(Object, { is: o }, {
      is: function() {
        return Object.is !== o;
      }
    }), o;
  }, ht;
}
var dt, ba;
function Xo() {
  if (ba) return dt;
  ba = 1;
  var r = Or(), t = Er(), n = io(), o = uo(), e = Yo(), s = t(o(), Object);
  return r(s, {
    getPolyfill: o,
    implementation: n,
    shim: e
  }), dt = s, dt;
}
var mt, Aa;
function fo() {
  if (Aa) return mt;
  Aa = 1;
  var r = Er(), t = /* @__PURE__ */ Q(), n = /* @__PURE__ */ cr(), o = n("%ArrayBuffer%", !0), e = t("ArrayBuffer.prototype.byteLength", !0), s = t("Object.prototype.toString"), i = !!o && !e && new o(0).slice, a = !!i && r(i);
  return mt = e || a ? function(c) {
    if (!c || typeof c != "object")
      return !1;
    try {
      return e ? e(c) : a(c, 0), !0;
    } catch {
      return !1;
    }
  } : o ? function(c) {
    return s(c) === "[object ArrayBuffer]";
  } : function(c) {
    return !1;
  }, mt;
}
var St, Oa;
function Qo() {
  if (Oa) return St;
  Oa = 1;
  var r = /* @__PURE__ */ Q(), t = r("Date.prototype.getDay"), n = function(a) {
    try {
      return t(a), !0;
    } catch {
      return !1;
    }
  }, o = r("Object.prototype.toString"), e = "[object Date]", s = wr()();
  return St = function(a) {
    return typeof a != "object" || a === null ? !1 : s ? n(a) : o(a) === e;
  }, St;
}
var bt, wa;
function so() {
  if (wa) return bt;
  wa = 1;
  var r = /* @__PURE__ */ Q(), t = wr()(), n = /* @__PURE__ */ Ht(), o = /* @__PURE__ */ Ar(), e;
  if (t) {
    var s = r("RegExp.prototype.exec"), i = {}, a = function() {
      throw i;
    }, f = {
      toString: a,
      valueOf: a
    };
    typeof Symbol.toPrimitive == "symbol" && (f[Symbol.toPrimitive] = a), e = function(y) {
      if (!y || typeof y != "object")
        return !1;
      var d = (
        /** @type {NonNullable<typeof gOPD>} */
        o(
          /** @type {{ lastIndex?: unknown }} */
          y,
          "lastIndex"
        )
      ), b = d && n(d, "value");
      if (!b)
        return !1;
      try {
        s(
          y,
          /** @type {string} */
          /** @type {unknown} */
          f
        );
      } catch (j) {
        return j === i;
      }
    };
  } else {
    var c = r("Object.prototype.toString"), g = "[object RegExp]";
    e = function(y) {
      return !y || typeof y != "object" && typeof y != "function" ? !1 : c(y) === g;
    };
  }
  return bt = e, bt;
}
var At, qa;
function Zo() {
  if (qa) return At;
  qa = 1;
  var r = /* @__PURE__ */ Q(), t = r("SharedArrayBuffer.prototype.byteLength", !0);
  return At = t ? function(o) {
    if (!o || typeof o != "object")
      return !1;
    try {
      return t(o), !0;
    } catch {
      return !1;
    }
  } : function(o) {
    return !1;
  }, At;
}
var Ot, Pa;
function ri() {
  if (Pa) return Ot;
  Pa = 1;
  var r = /* @__PURE__ */ Q(), t = r("Number.prototype.toString"), n = function(a) {
    try {
      return t(a), !0;
    } catch {
      return !1;
    }
  }, o = r("Object.prototype.toString"), e = "[object Number]", s = wr()();
  return Ot = function(a) {
    return typeof a == "number" ? !0 : !a || typeof a != "object" ? !1 : s ? n(a) : o(a) === e;
  }, Ot;
}
var wt, Ia;
function ei() {
  if (Ia) return wt;
  Ia = 1;
  var r = /* @__PURE__ */ Q(), t = r("Boolean.prototype.toString"), n = r("Object.prototype.toString"), o = function(a) {
    try {
      return t(a), !0;
    } catch {
      return !1;
    }
  }, e = "[object Boolean]", s = wr()();
  return wt = function(a) {
    return typeof a == "boolean" ? !0 : a === null || typeof a != "object" ? !1 : s ? o(a) : n(a) === e;
  }, wt;
}
var _r = { exports: {} }, qt, $a;
function ti() {
  if ($a) return qt;
  $a = 1;
  var r = /* @__PURE__ */ Q(), t = so(), n = r("RegExp.prototype.exec"), o = /* @__PURE__ */ tr();
  return qt = function(s) {
    if (!t(s))
      throw new o("`regex` must be a RegExp");
    return function(a) {
      return n(s, a) !== null;
    };
  }, qt;
}
var Ra;
function ni() {
  if (Ra) return _r.exports;
  Ra = 1;
  var r = /* @__PURE__ */ Q(), t = r("Object.prototype.toString"), n = kt()(), o = /* @__PURE__ */ ti();
  if (n) {
    var e = r("Symbol.prototype.toString"), s = o(/^Symbol\(.*\)$/), i = function(f) {
      return typeof f.valueOf() != "symbol" ? !1 : s(e(f));
    };
    _r.exports = function(f) {
      if (typeof f == "symbol")
        return !0;
      if (!f || typeof f != "object" || t(f) !== "[object Symbol]")
        return !1;
      try {
        return i(f);
      } catch {
        return !1;
      }
    };
  } else
    _r.exports = function(f) {
      return !1;
    };
  return _r.exports;
}
var Nr = { exports: {} }, Pt, Ea;
function ai() {
  if (Ea) return Pt;
  Ea = 1;
  var r = typeof BigInt < "u" && BigInt;
  return Pt = function() {
    return typeof r == "function" && typeof BigInt == "function" && typeof r(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, Pt;
}
var Ba;
function oi() {
  if (Ba) return Nr.exports;
  Ba = 1;
  var r = ai()();
  if (r) {
    var t = BigInt.prototype.valueOf, n = function(e) {
      try {
        return t.call(e), !0;
      } catch {
      }
      return !1;
    };
    Nr.exports = function(e) {
      return e === null || typeof e > "u" || typeof e == "boolean" || typeof e == "string" || typeof e == "number" || typeof e == "symbol" || typeof e == "function" ? !1 : typeof e == "bigint" ? !0 : n(e);
    };
  } else
    Nr.exports = function(e) {
      return !1;
    };
  return Nr.exports;
}
var It, Ma;
function ii() {
  if (Ma) return It;
  Ma = 1;
  var r = no(), t = ri(), n = ei(), o = ni(), e = oi();
  return It = function(i) {
    if (i == null || typeof i != "object" && typeof i != "function")
      return null;
    if (r(i))
      return "String";
    if (t(i))
      return "Number";
    if (n(i))
      return "Boolean";
    if (o(i))
      return "Symbol";
    if (e(i))
      return "BigInt";
  }, It;
}
var $t, ja;
function ui() {
  if (ja) return $t;
  ja = 1;
  var r = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, t = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, n;
  r || (n = function(i) {
    return !1;
  });
  var o = r ? r.prototype.has : null, e = t ? t.prototype.has : null;
  return !n && !o && (n = function(i) {
    return !1;
  }), $t = n || function(i) {
    if (!i || typeof i != "object")
      return !1;
    try {
      if (o.call(i, o), e)
        try {
          e.call(i, e);
        } catch {
          return !0;
        }
      return i instanceof r;
    } catch {
    }
    return !1;
  }, $t;
}
var Wr = { exports: {} }, Ta;
function fi() {
  if (Ta) return Wr.exports;
  Ta = 1;
  var r = /* @__PURE__ */ cr(), t = /* @__PURE__ */ Q(), n = r("%WeakSet%", !0), o = t("WeakSet.prototype.has", !0);
  if (o) {
    var e = t("WeakMap.prototype.has", !0);
    Wr.exports = function(i) {
      if (!i || typeof i != "object")
        return !1;
      try {
        if (o(i, o), e)
          try {
            e(i, e);
          } catch {
            return !0;
          }
        return i instanceof n;
      } catch {
      }
      return !1;
    };
  } else
    Wr.exports = function(i) {
      return !1;
    };
  return Wr.exports;
}
var Rt, xa;
function si() {
  if (xa) return Rt;
  xa = 1;
  var r = /* @__PURE__ */ ao(), t = /* @__PURE__ */ oo(), n = ui(), o = /* @__PURE__ */ fi();
  return Rt = function(s) {
    if (s && typeof s == "object") {
      if (r(s))
        return "Map";
      if (t(s))
        return "Set";
      if (n(s))
        return "WeakMap";
      if (o(s))
        return "WeakSet";
    }
    return !1;
  }, Rt;
}
var Et, Da;
function li() {
  if (Da) return Et;
  Da = 1;
  var r = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, n, o;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      n = Object.defineProperty({}, "length", {
        get: function() {
          throw o;
        }
      }), o = {}, t(function() {
        throw 42;
      }, null, n);
    } catch (O) {
      O !== o && (t = null);
    }
  else
    t = null;
  var e = /^\s*class\b/, s = function(S) {
    try {
      var T = r.call(S);
      return e.test(T);
    } catch {
      return !1;
    }
  }, i = function(S) {
    try {
      return s(S) ? !1 : (r.call(S), !0);
    } catch {
      return !1;
    }
  }, a = Object.prototype.toString, f = "[object Object]", c = "[object Function]", g = "[object GeneratorFunction]", p = "[object HTMLAllCollection]", y = "[object HTML document.all class]", d = "[object HTMLCollection]", b = typeof Symbol == "function" && !!Symbol.toStringTag, j = !(0 in [,]), P = function() {
    return !1;
  };
  if (typeof document == "object") {
    var I = document.all;
    a.call(I) === a.call(document.all) && (P = function(S) {
      if ((j || !S) && (typeof S > "u" || typeof S == "object"))
        try {
          var T = a.call(S);
          return (T === p || T === y || T === d || T === f) && S("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Et = t ? function(S) {
    if (P(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    try {
      t(S, null, n);
    } catch (T) {
      if (T !== o)
        return !1;
    }
    return !s(S) && i(S);
  } : function(S) {
    if (P(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    if (b)
      return i(S);
    if (s(S))
      return !1;
    var T = a.call(S);
    return T !== c && T !== g && !/^\[object HTML/.test(T) ? !1 : i(S);
  }, Et;
}
var Bt, Fa;
function ci() {
  if (Fa) return Bt;
  Fa = 1;
  var r = li(), t = Object.prototype.toString, n = Object.prototype.hasOwnProperty, o = function(f, c, g) {
    for (var p = 0, y = f.length; p < y; p++)
      n.call(f, p) && (g == null ? c(f[p], p, f) : c.call(g, f[p], p, f));
  }, e = function(f, c, g) {
    for (var p = 0, y = f.length; p < y; p++)
      g == null ? c(f.charAt(p), p, f) : c.call(g, f.charAt(p), p, f);
  }, s = function(f, c, g) {
    for (var p in f)
      n.call(f, p) && (g == null ? c(f[p], p, f) : c.call(g, f[p], p, f));
  };
  function i(a) {
    return t.call(a) === "[object Array]";
  }
  return Bt = function(f, c, g) {
    if (!r(c))
      throw new TypeError("iterator must be a function");
    var p;
    arguments.length >= 3 && (p = g), i(f) ? o(f, c, p) : typeof f == "string" ? e(f, c, p) : s(f, c, p);
  }, Bt;
}
var Mt, Ca;
function pi() {
  return Ca || (Ca = 1, Mt = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), Mt;
}
var jt, _a;
function yi() {
  if (_a) return jt;
  _a = 1;
  var r = /* @__PURE__ */ pi(), t = typeof globalThis > "u" ? kr : globalThis;
  return jt = function() {
    for (var o = [], e = 0; e < r.length; e++)
      typeof t[r[e]] == "function" && (o[o.length] = r[e]);
    return o;
  }, jt;
}
var Tt, Na;
function vi() {
  if (Na) return Tt;
  Na = 1;
  var r = ci(), t = /* @__PURE__ */ yi(), n = Er(), o = /* @__PURE__ */ Q(), e = /* @__PURE__ */ Ar(), s = o("Object.prototype.toString"), i = wr()(), a = typeof globalThis > "u" ? kr : globalThis, f = t(), c = o("String.prototype.slice"), g = Object.getPrototypeOf, p = o("Array.prototype.indexOf", !0) || function(P, I) {
    for (var O = 0; O < P.length; O += 1)
      if (P[O] === I)
        return O;
    return -1;
  }, y = { __proto__: null };
  i && e && g ? r(f, function(j) {
    var P = new a[j]();
    if (Symbol.toStringTag in P) {
      var I = g(P), O = e(I, Symbol.toStringTag);
      if (!O) {
        var S = g(I);
        O = e(S, Symbol.toStringTag);
      }
      y["$" + j] = n(O.get);
    }
  }) : r(f, function(j) {
    var P = new a[j](), I = P.slice || P.set;
    I && (y["$" + j] = n(I));
  });
  var d = function(P) {
    var I = !1;
    return r(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      y,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(O, S) {
        if (!I)
          try {
            "$" + O(P) === S && (I = c(S, 1));
          } catch {
          }
      }
    ), I;
  }, b = function(P) {
    var I = !1;
    return r(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      y,
      /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
      function(O, S) {
        if (!I)
          try {
            O(P), I = c(S, 1);
          } catch {
          }
      }
    ), I;
  };
  return Tt = function(P) {
    if (!P || typeof P != "object")
      return !1;
    if (!i) {
      var I = c(s(P), 8, -1);
      return p(f, I) > -1 ? I : I !== "Object" ? !1 : b(P);
    }
    return e ? d(P) : null;
  }, Tt;
}
var xt, Wa;
function gi() {
  if (Wa) return xt;
  Wa = 1;
  var r = /* @__PURE__ */ Q(), t = r("ArrayBuffer.prototype.byteLength", !0), n = /* @__PURE__ */ fo();
  return xt = function(e) {
    return n(e) ? t ? t(e) : e.byteLength : NaN;
  }, xt;
}
var Dt, ka;
function hi() {
  if (ka) return Dt;
  ka = 1;
  var r = Co(), t = Ya(), n = ko(), o = /* @__PURE__ */ cr(), e = Ko(), s = eo(), i = Xo(), a = /* @__PURE__ */ Za(), f = to(), c = /* @__PURE__ */ fo(), g = /* @__PURE__ */ Qo(), p = so(), y = /* @__PURE__ */ Zo(), d = Ft(), b = ii(), j = /* @__PURE__ */ si(), P = /* @__PURE__ */ vi(), I = /* @__PURE__ */ gi(), O = t("SharedArrayBuffer.prototype.byteLength", !0), S = t("Date.prototype.getTime"), T = Object.getPrototypeOf, X = t("Object.prototype.toString"), G = o("%Set%", !0), C = t("Map.prototype.has", !0), F = t("Map.prototype.get", !0), w = t("Map.prototype.size", !0), _ = t("Set.prototype.add", !0), L = t("Set.prototype.delete", !0), N = t("Set.prototype.has", !0), U = t("Set.prototype.size", !0);
  function V(v, h, R, $) {
    for (var M = e(v), x; (x = M.next()) && !x.done; )
      if (H(h, x.value, R, $))
        return L(v, x.value), !0;
    return !1;
  }
  function ir(v) {
    if (typeof v > "u")
      return null;
    if (typeof v != "object")
      return typeof v == "symbol" ? !1 : typeof v == "string" || typeof v == "number" ? +v == +v : !0;
  }
  function qr(v, h, R, $, M, x) {
    var A = ir(R);
    if (A != null)
      return A;
    var q = F(h, A), m = r({}, M, { strict: !1 });
    return typeof q > "u" && !C(h, A) || !H($, q, m, x) ? !1 : !C(v, A) && H($, q, m, x);
  }
  function dr(v, h, R) {
    var $ = ir(R);
    return $ ?? (N(h, $) && !N(v, $));
  }
  function nr(v, h, R, $, M, x) {
    for (var A = e(v), q, m; (q = A.next()) && !q.done; )
      if (m = q.value, // eslint-disable-next-line no-use-before-define
      H(R, m, M, x) && H($, F(h, m), M, x))
        return L(v, m), !0;
    return !1;
  }
  function H(v, h, R, $) {
    var M = R || {};
    if (M.strict ? i(v, h) : v === h)
      return !0;
    var x = b(v), A = b(h);
    if (x !== A)
      return !1;
    if (!v || !h || typeof v != "object" && typeof h != "object")
      return M.strict ? i(v, h) : v == h;
    var q = $.has(v), m = $.has(h), E;
    if (q && m) {
      if ($.get(v) === $.get(h))
        return !0;
    } else
      E = {};
    return q || $.set(v, E), m || $.set(h, E), pr(v, h, M, $);
  }
  function mr(v) {
    return !v || typeof v != "object" || typeof v.length != "number" || typeof v.copy != "function" || typeof v.slice != "function" || v.length > 0 && typeof v[0] != "number" ? !1 : !!(v.constructor && v.constructor.isBuffer && v.constructor.isBuffer(v));
  }
  function Pr(v, h, R, $) {
    if (U(v) !== U(h))
      return !1;
    for (var M = e(v), x = e(h), A, q, m; (A = M.next()) && !A.done; )
      if (A.value && typeof A.value == "object")
        m || (m = new G()), _(m, A.value);
      else if (!N(h, A.value)) {
        if (R.strict || !dr(v, h, A.value))
          return !1;
        m || (m = new G()), _(m, A.value);
      }
    if (m) {
      for (; (q = x.next()) && !q.done; )
        if (q.value && typeof q.value == "object") {
          if (!V(m, q.value, R.strict, $))
            return !1;
        } else if (!R.strict && !N(v, q.value) && !V(m, q.value, R.strict, $))
          return !1;
      return U(m) === 0;
    }
    return !0;
  }
  function Sr(v, h, R, $) {
    if (w(v) !== w(h))
      return !1;
    for (var M = e(v), x = e(h), A, q, m, E, z, J; (A = M.next()) && !A.done; )
      if (E = A.value[0], z = A.value[1], E && typeof E == "object")
        m || (m = new G()), _(m, E);
      else if (J = F(h, E), typeof J > "u" && !C(h, E) || !H(z, J, R, $)) {
        if (R.strict || !qr(v, h, E, z, R, $))
          return !1;
        m || (m = new G()), _(m, E);
      }
    if (m) {
      for (; (q = x.next()) && !q.done; )
        if (E = q.value[0], J = q.value[1], E && typeof E == "object") {
          if (!nr(m, v, E, J, R, $))
            return !1;
        } else if (!R.strict && (!v.has(E) || !H(F(v, E), J, R, $)) && !nr(m, v, E, J, r({}, R, { strict: !1 }), $))
          return !1;
      return U(m) === 0;
    }
    return !0;
  }
  function pr(v, h, R, $) {
    var M, x;
    if (typeof v != typeof h || v == null || h == null || X(v) !== X(h) || a(v) !== a(h))
      return !1;
    var A = f(v), q = f(h);
    if (A !== q)
      return !1;
    var m = v instanceof Error, E = h instanceof Error;
    if (m !== E || (m || E) && (v.name !== h.name || v.message !== h.message))
      return !1;
    var z = p(v), J = p(h);
    if (z !== J || (z || J) && (v.source !== h.source || n(v) !== n(h)))
      return !1;
    var K = g(v), Y = g(h);
    if (K !== Y || (K || Y) && S(v) !== S(h) || R.strict && T && T(v) !== T(h))
      return !1;
    var Z = P(v), ur = P(h);
    if (Z !== ur)
      return !1;
    if (Z || ur) {
      if (v.length !== h.length)
        return !1;
      for (M = 0; M < v.length; M++)
        if (v[M] !== h[M])
          return !1;
      return !0;
    }
    var ar = mr(v), rr = mr(h);
    if (ar !== rr)
      return !1;
    if (ar || rr) {
      if (v.length !== h.length)
        return !1;
      for (M = 0; M < v.length; M++)
        if (v[M] !== h[M])
          return !1;
      return !0;
    }
    var fr = c(v), sr = c(h);
    if (fr !== sr)
      return !1;
    if (fr || sr)
      return I(v) !== I(h) ? !1 : typeof Uint8Array == "function" && H(new Uint8Array(v), new Uint8Array(h), R, $);
    var lr = y(v), xr = y(h);
    if (lr !== xr)
      return !1;
    if (lr || xr)
      return O(v) !== O(h) ? !1 : typeof Uint8Array == "function" && H(new Uint8Array(v), new Uint8Array(h), R, $);
    if (typeof v != typeof h)
      return !1;
    var yr = d(v), Ir = d(h);
    if (yr.length !== Ir.length)
      return !1;
    for (yr.sort(), Ir.sort(), M = yr.length - 1; M >= 0; M--)
      if (yr[M] != Ir[M])
        return !1;
    for (M = yr.length - 1; M >= 0; M--)
      if (x = yr[M], !H(v[x], h[x], R, $))
        return !1;
    var Br = j(v), vr = j(h);
    return Br !== vr ? !1 : Br === "Set" || vr === "Set" ? Pr(v, h, R, $) : Br === "Map" ? Sr(v, h, R, $) : !0;
  }
  return Dt = function(h, R, $) {
    return H(h, R, $, s());
  }, Dt;
}
var di = hi();
const Si = /* @__PURE__ */ go(di);
export {
  Si as d
};

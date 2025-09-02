var nr = Object.defineProperty;
var rr = (e, t, n) => t in e ? nr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ce = (e, t, n) => rr(e, typeof t != "symbol" ? t + "" : t, n);
import * as ce from "react";
import { useRef as He, useState as J, useEffect as k, useMemo as Y, useCallback as _, Fragment as ir, memo as or, forwardRef as sr, useId as ar, useImperativeHandle as cr, useLayoutEffect as lr } from "react";
import { jsx as c, jsxs as v, Fragment as O } from "react/jsx-runtime";
import { B as q, u as dr, E as ur } from "./index-CJo9otU0.js";
import { A as P } from "./ActionButton-D15ZSL0z.js";
import { b as fr, c as hr, d as mr, e as gr, S as xr } from "./SizeSetter-rba2E6_h.js";
import { D as pr, a as vr, b as yr, e as br, c as wr, d as Cr } from "./dialog-DWW5z2Zs.js";
import { I as me, g as Tr } from "./Iframe-CLTPRxfR.js";
import { u as Ar, t as Sr } from "./theme-Dt3LKWNl.js";
import { u as M, f as Te } from "./index-ZqXobaiP.js";
import { d as ln } from "./delete-node-IyVmiRbI.js";
import { I as Pr } from "./input-BQQ_iBrZ.js";
import { B as Ee } from "./button-CcHmDfB3.js";
import { I as dn } from "./checkbox-C8kjShPh.js";
import { ImageGif as un } from "./ImageGif.js";
import { MultiColumn as Fe, Column as Er } from "./MultiColumn.js";
import { U as Or, H as _r, S as xe, a as be, P as le, T as Qe, V as Nr, E as de, W as Rr, D as Oe, b as et, G as $r, I as yt, J as fn, j as hn, L as Ir, O as Dr, N as tt, m as mn, X as kr } from "./index-sel2RZJw.js";
import Mr, { sticky as Br } from "tippy.js";
import { H as Lr } from "./HighlightActionButton-CYwPkB5h.js";
import { S as X } from "./separator-DsUDfBB2.js";
import { L as zr } from "./LinkEditBlock-DVZRq-NI.js";
import { c as nt, S as ae, t as Hr, i as Re, b as ue, r as Z, a as te, f as Fr, d as jr } from "./debounce-M7Yt2bxB.js";
import { Video as Gr } from "./Video.js";
import { I as bt, s as wt } from "./indent-KXnZJEhz.js";
import { I as N } from "./Icon-BXO4CVnL.js";
import { D as Ur, a as Vr, b as Kr, f as j, d as Wr, g as Ct, h as Tt, i as At, j as St } from "./dropdown-menu-D4P0bXFo.js";
import { T as Jr, a as Xr, b as Yr, d as Pt } from "./tooltip-KX73XsAg.js";
import { i as qr, h as Zr } from "./utils-uHATd4OQ.js";
import * as R from "@radix-ui/react-toast";
import { c as fe, a as Qr } from "./index-BP_NLBls.js";
import { X as ei } from "lucide-react";
import { u as ti } from "./use-toast-Crf7-q5H.js";
import { E as ni } from "./index-oWDQeNNi.js";
import { e as ri } from "./editableEditor-CCGmYPta.js";
import { P as ii, b as oi, u as si, a as ai } from "./store-j-5VHU4U.js";
import { l as Et, E as Ot } from "./events.constant-BTaUfYyd.js";
import { t as ci } from "./index-D4ootzAt.js";
import { ListItem as li } from "./ListItem.js";
import { T as di } from "./index-BvZMIXgn.js";
import { Document as ui } from "./Document.js";
import { Selection as fi } from "./Selection.js";
import { TextBubble as hi } from "./TextBubble.js";
import { TrailingNode as mi } from "./TrailingNode.js";
function fd() {
  var o;
  const e = He({ editor: null }), [t, n] = J(!1), [r, i] = J(null);
  return k(() => {
    var s;
    (s = e.current) != null && s.editor && (n(!0), i(e.current.editor));
  }, [e, (o = e.current) == null ? void 0 : o.editor]), { isReady: t, editor: r, editorRef: e };
}
function gn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var F = Array.isArray, _t = ae ? ae.prototype : void 0, Nt = _t ? _t.toString : void 0;
function _e(e) {
  if (typeof e == "string")
    return e;
  if (F(e))
    return gn(e, _e) + "";
  if (nt(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Rt = 1 / 0, gi = 17976931348623157e292;
function xi(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Hr(e), e === Rt || e === -Rt) {
    var t = e < 0 ? -1 : 1;
    return t * gi;
  }
  return e === e ? e : 0;
}
function pi(e) {
  var t = xi(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function rt(e) {
  return e;
}
var vi = "[object AsyncFunction]", yi = "[object Function]", bi = "[object GeneratorFunction]", wi = "[object Proxy]";
function xn(e) {
  if (!Re(e))
    return !1;
  var t = ue(e);
  return t == yi || t == bi || t == vi || t == wi;
}
var Me = Z["__core-js_shared__"], $t = function() {
  var e = /[^.]+$/.exec(Me && Me.keys && Me.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ci(e) {
  return !!$t && $t in e;
}
var Ti = Function.prototype, Ai = Ti.toString;
function re(e) {
  if (e != null) {
    try {
      return Ai.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Si = /[\\^$.*+?()[\]{}|]/g, Pi = /^\[object .+?Constructor\]$/, Ei = Function.prototype, Oi = Object.prototype, _i = Ei.toString, Ni = Oi.hasOwnProperty, Ri = RegExp(
  "^" + _i.call(Ni).replace(Si, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $i(e) {
  if (!Re(e) || Ci(e))
    return !1;
  var t = xn(e) ? Ri : Pi;
  return t.test(re(e));
}
function Ii(e, t) {
  return e == null ? void 0 : e[t];
}
function ie(e, t) {
  var n = Ii(e, t);
  return $i(n) ? n : void 0;
}
var je = ie(Z, "WeakMap");
function Di(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ki = 800, Mi = 16, Bi = Date.now;
function Li(e) {
  var t = 0, n = 0;
  return function() {
    var r = Bi(), i = Mi - (r - n);
    if (n = r, i > 0) {
      if (++t >= ki)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zi(e) {
  return function() {
    return e;
  };
}
var It = function() {
  try {
    var e = ie(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Hi = It ? function(e, t) {
  return It(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zi(t),
    writable: !0
  });
} : rt, Fi = Li(Hi);
function ji(e, t, n, r) {
  for (var i = e.length, o = n + -1; ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function Gi(e) {
  return e !== e;
}
function Ui(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; )
    if (e[r] === t)
      return r;
  return -1;
}
function Vi(e, t, n) {
  return t === t ? Ui(e, t, n) : ji(e, Gi, n);
}
function Ki(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Vi(e, t, 0) > -1;
}
var Wi = 9007199254740991, Ji = /^(?:0|[1-9]\d*)$/;
function pn(e, t) {
  var n = typeof e;
  return t = t ?? Wi, !!t && (n == "number" || n != "symbol" && Ji.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vn(e, t) {
  return e === t || e !== e && t !== t;
}
var Dt = Math.max;
function Xi(e, t, n) {
  return t = Dt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, o = Dt(r.length - t, 0), s = Array(o); ++i < o; )
      s[i] = r[t + i];
    i = -1;
    for (var a = Array(t + 1); ++i < t; )
      a[i] = r[i];
    return a[t] = n(s), Di(e, this, a);
  };
}
function Yi(e, t) {
  return Fi(Xi(e, t, rt), e + "");
}
var qi = 9007199254740991;
function it(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qi;
}
function yn(e) {
  return e != null && it(e.length) && !xn(e);
}
var Zi = Object.prototype;
function Qi(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Zi;
  return e === n;
}
function eo(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var to = "[object Arguments]";
function kt(e) {
  return te(e) && ue(e) == to;
}
var bn = Object.prototype, no = bn.hasOwnProperty, ro = bn.propertyIsEnumerable, ot = kt(/* @__PURE__ */ function() {
  return arguments;
}()) ? kt : function(e) {
  return te(e) && no.call(e, "callee") && !ro.call(e, "callee");
};
function io() {
  return !1;
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, Mt = wn && typeof module == "object" && module && !module.nodeType && module, oo = Mt && Mt.exports === wn, Bt = oo ? Z.Buffer : void 0, so = Bt ? Bt.isBuffer : void 0, Ge = so || io, ao = "[object Arguments]", co = "[object Array]", lo = "[object Boolean]", uo = "[object Date]", fo = "[object Error]", ho = "[object Function]", mo = "[object Map]", go = "[object Number]", xo = "[object Object]", po = "[object RegExp]", vo = "[object Set]", yo = "[object String]", bo = "[object WeakMap]", wo = "[object ArrayBuffer]", Co = "[object DataView]", To = "[object Float32Array]", Ao = "[object Float64Array]", So = "[object Int8Array]", Po = "[object Int16Array]", Eo = "[object Int32Array]", Oo = "[object Uint8Array]", _o = "[object Uint8ClampedArray]", No = "[object Uint16Array]", Ro = "[object Uint32Array]", A = {};
A[To] = A[Ao] = A[So] = A[Po] = A[Eo] = A[Oo] = A[_o] = A[No] = A[Ro] = !0;
A[ao] = A[co] = A[wo] = A[lo] = A[Co] = A[uo] = A[fo] = A[ho] = A[mo] = A[go] = A[xo] = A[po] = A[vo] = A[yo] = A[bo] = !1;
function $o(e) {
  return te(e) && it(e.length) && !!A[ue(e)];
}
function st(e) {
  return function(t) {
    return e(t);
  };
}
var Cn = typeof exports == "object" && exports && !exports.nodeType && exports, ge = Cn && typeof module == "object" && module && !module.nodeType && module, Io = ge && ge.exports === Cn, Be = Io && Fr.process, Ne = function() {
  try {
    var e = ge && ge.require && ge.require("util").types;
    return e || Be && Be.binding && Be.binding("util");
  } catch {
  }
}(), Lt = Ne && Ne.isTypedArray, Tn = Lt ? st(Lt) : $o, Do = Object.prototype, ko = Do.hasOwnProperty;
function Mo(e, t) {
  var n = F(e), r = !n && ot(e), i = !n && !r && Ge(e), o = !n && !r && !i && Tn(e), s = n || r || i || o, a = s ? eo(e.length, String) : [], l = a.length;
  for (var d in e)
    ko.call(e, d) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    pn(d, l))) && a.push(d);
  return a;
}
function Bo(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Lo = Bo(Object.keys, Object), zo = Object.prototype, Ho = zo.hasOwnProperty;
function Fo(e) {
  if (!Qi(e))
    return Lo(e);
  var t = [];
  for (var n in Object(e))
    Ho.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function An(e) {
  return yn(e) ? Mo(e) : Fo(e);
}
var jo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Go = /^\w*$/;
function at(e, t) {
  if (F(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || nt(e) ? !0 : Go.test(e) || !jo.test(e) || t != null && e in Object(t);
}
var pe = ie(Object, "create");
function Uo() {
  this.__data__ = pe ? pe(null) : {}, this.size = 0;
}
function Vo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ko = "__lodash_hash_undefined__", Wo = Object.prototype, Jo = Wo.hasOwnProperty;
function Xo(e) {
  var t = this.__data__;
  if (pe) {
    var n = t[e];
    return n === Ko ? void 0 : n;
  }
  return Jo.call(t, e) ? t[e] : void 0;
}
var Yo = Object.prototype, qo = Yo.hasOwnProperty;
function Zo(e) {
  var t = this.__data__;
  return pe ? t[e] !== void 0 : qo.call(t, e);
}
var Qo = "__lodash_hash_undefined__";
function es(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pe && t === void 0 ? Qo : t, this;
}
function ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = Uo;
ne.prototype.delete = Vo;
ne.prototype.get = Xo;
ne.prototype.has = Zo;
ne.prototype.set = es;
function ts() {
  this.__data__ = [], this.size = 0;
}
function $e(e, t) {
  for (var n = e.length; n--; )
    if (vn(e[n][0], t))
      return n;
  return -1;
}
var ns = Array.prototype, rs = ns.splice;
function is(e) {
  var t = this.__data__, n = $e(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : rs.call(t, n, 1), --this.size, !0;
}
function os(e) {
  var t = this.__data__, n = $e(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ss(e) {
  return $e(this.__data__, e) > -1;
}
function as(e, t) {
  var n = this.__data__, r = $e(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function U(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
U.prototype.clear = ts;
U.prototype.delete = is;
U.prototype.get = os;
U.prototype.has = ss;
U.prototype.set = as;
var ve = ie(Z, "Map");
function cs() {
  this.size = 0, this.__data__ = {
    hash: new ne(),
    map: new (ve || U)(),
    string: new ne()
  };
}
function ls(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ie(e, t) {
  var n = e.__data__;
  return ls(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ds(e) {
  var t = Ie(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function us(e) {
  return Ie(this, e).get(e);
}
function fs(e) {
  return Ie(this, e).has(e);
}
function hs(e, t) {
  var n = Ie(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function V(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
V.prototype.clear = cs;
V.prototype.delete = ds;
V.prototype.get = us;
V.prototype.has = fs;
V.prototype.set = hs;
var ms = "Expected a function";
function ct(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ms);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var s = e.apply(this, r);
    return n.cache = o.set(i, s) || o, s;
  };
  return n.cache = new (ct.Cache || V)(), n;
}
ct.Cache = V;
var gs = 500;
function xs(e) {
  var t = ct(e, function(r) {
    return n.size === gs && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ps = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /\\(\\)?/g, ys = xs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ps, function(n, r, i, o) {
    t.push(i ? o.replace(vs, "$1") : r || n);
  }), t;
});
function Ue(e) {
  return e == null ? "" : _e(e);
}
function Sn(e, t) {
  return F(e) ? e : at(e, t) ? [e] : ys(Ue(e));
}
function De(e) {
  if (typeof e == "string" || nt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Pn(e, t) {
  t = Sn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[De(t[n++])];
  return n && n == r ? e : void 0;
}
function bs(e, t, n) {
  var r = e == null ? void 0 : Pn(e, t);
  return r === void 0 ? n : r;
}
function En(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var zt = ae ? ae.isConcatSpreadable : void 0;
function ws(e) {
  return F(e) || ot(e) || !!(zt && e && e[zt]);
}
function Cs(e, t, n, r, i) {
  var o = -1, s = e.length;
  for (n || (n = ws), i || (i = []); ++o < s; ) {
    var a = e[o];
    n(a) && En(i, a);
  }
  return i;
}
function Ts(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = e[r + t];
  return o;
}
function As(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : Ts(e, t, n);
}
var Ss = "\\ud800-\\udfff", Ps = "\\u0300-\\u036f", Es = "\\ufe20-\\ufe2f", Os = "\\u20d0-\\u20ff", _s = Ps + Es + Os, Ns = "\\ufe0e\\ufe0f", Rs = "\\u200d", $s = RegExp("[" + Rs + Ss + _s + Ns + "]");
function lt(e) {
  return $s.test(e);
}
function Is(e) {
  return e.split("");
}
var On = "\\ud800-\\udfff", Ds = "\\u0300-\\u036f", ks = "\\ufe20-\\ufe2f", Ms = "\\u20d0-\\u20ff", Bs = Ds + ks + Ms, Ls = "\\ufe0e\\ufe0f", zs = "[" + On + "]", Ve = "[" + Bs + "]", Ke = "\\ud83c[\\udffb-\\udfff]", Hs = "(?:" + Ve + "|" + Ke + ")", _n = "[^" + On + "]", Nn = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rn = "[\\ud800-\\udbff][\\udc00-\\udfff]", Fs = "\\u200d", $n = Hs + "?", In = "[" + Ls + "]?", js = "(?:" + Fs + "(?:" + [_n, Nn, Rn].join("|") + ")" + In + $n + ")*", Gs = In + $n + js, Us = "(?:" + [_n + Ve + "?", Ve, Nn, Rn, zs].join("|") + ")", Vs = RegExp(Ke + "(?=" + Ke + ")|" + Us + Gs, "g");
function Ks(e) {
  return e.match(Vs) || [];
}
function Ws(e) {
  return lt(e) ? Ks(e) : Is(e);
}
function Js() {
  this.__data__ = new U(), this.size = 0;
}
function Xs(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ys(e) {
  return this.__data__.get(e);
}
function qs(e) {
  return this.__data__.has(e);
}
var Zs = 200;
function Qs(e, t) {
  var n = this.__data__;
  if (n instanceof U) {
    var r = n.__data__;
    if (!ve || r.length < Zs - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new V(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function G(e) {
  var t = this.__data__ = new U(e);
  this.size = t.size;
}
G.prototype.clear = Js;
G.prototype.delete = Xs;
G.prototype.get = Ys;
G.prototype.has = qs;
G.prototype.set = Qs;
function ea(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[i++] = s);
  }
  return o;
}
function ta() {
  return [];
}
var na = Object.prototype, ra = na.propertyIsEnumerable, Ht = Object.getOwnPropertySymbols, ia = Ht ? function(e) {
  return e == null ? [] : (e = Object(e), ea(Ht(e), function(t) {
    return ra.call(e, t);
  }));
} : ta;
function oa(e, t, n) {
  var r = t(e);
  return F(e) ? r : En(r, n(e));
}
function Ft(e) {
  return oa(e, An, ia);
}
var We = ie(Z, "DataView"), Je = ie(Z, "Promise"), Xe = ie(Z, "Set"), jt = "[object Map]", sa = "[object Object]", Gt = "[object Promise]", Ut = "[object Set]", Vt = "[object WeakMap]", Kt = "[object DataView]", aa = re(We), ca = re(ve), la = re(Je), da = re(Xe), ua = re(je), W = ue;
(We && W(new We(new ArrayBuffer(1))) != Kt || ve && W(new ve()) != jt || Je && W(Je.resolve()) != Gt || Xe && W(new Xe()) != Ut || je && W(new je()) != Vt) && (W = function(e) {
  var t = ue(e), n = t == sa ? e.constructor : void 0, r = n ? re(n) : "";
  if (r)
    switch (r) {
      case aa:
        return Kt;
      case ca:
        return jt;
      case la:
        return Gt;
      case da:
        return Ut;
      case ua:
        return Vt;
    }
  return t;
});
var Wt = Z.Uint8Array, fa = "__lodash_hash_undefined__";
function ha(e) {
  return this.__data__.set(e, fa), this;
}
function ma(e) {
  return this.__data__.has(e);
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new V(); ++t < n; )
    this.add(e[t]);
}
ye.prototype.add = ye.prototype.push = ha;
ye.prototype.has = ma;
function ga(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Dn(e, t) {
  return e.has(t);
}
var xa = 1, pa = 2;
function kn(e, t, n, r, i, o) {
  var s = n & xa, a = e.length, l = t.length;
  if (a != l && !(s && l > a))
    return !1;
  var d = o.get(e), u = o.get(t);
  if (d && u)
    return d == t && u == e;
  var f = -1, h = !0, x = n & pa ? new ye() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < a; ) {
    var p = e[f], m = t[f];
    if (r)
      var g = s ? r(m, p, f, t, e, o) : r(p, m, f, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (x) {
      if (!ga(t, function(w, T) {
        if (!Dn(x, T) && (p === w || i(p, w, n, r, o)))
          return x.push(T);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === m || i(p, m, n, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), h;
}
function va(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function ya(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ba = 1, wa = 2, Ca = "[object Boolean]", Ta = "[object Date]", Aa = "[object Error]", Sa = "[object Map]", Pa = "[object Number]", Ea = "[object RegExp]", Oa = "[object Set]", _a = "[object String]", Na = "[object Symbol]", Ra = "[object ArrayBuffer]", $a = "[object DataView]", Jt = ae ? ae.prototype : void 0, Le = Jt ? Jt.valueOf : void 0;
function Ia(e, t, n, r, i, o, s) {
  switch (n) {
    case $a:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ra:
      return !(e.byteLength != t.byteLength || !o(new Wt(e), new Wt(t)));
    case Ca:
    case Ta:
    case Pa:
      return vn(+e, +t);
    case Aa:
      return e.name == t.name && e.message == t.message;
    case Ea:
    case _a:
      return e == t + "";
    case Sa:
      var a = va;
    case Oa:
      var l = r & ba;
      if (a || (a = ya), e.size != t.size && !l)
        return !1;
      var d = s.get(e);
      if (d)
        return d == t;
      r |= wa, s.set(e, t);
      var u = kn(a(e), a(t), r, i, o, s);
      return s.delete(e), u;
    case Na:
      if (Le)
        return Le.call(e) == Le.call(t);
  }
  return !1;
}
var Da = 1, ka = Object.prototype, Ma = ka.hasOwnProperty;
function Ba(e, t, n, r, i, o) {
  var s = n & Da, a = Ft(e), l = a.length, d = Ft(t), u = d.length;
  if (l != u && !s)
    return !1;
  for (var f = l; f--; ) {
    var h = a[f];
    if (!(s ? h in t : Ma.call(t, h)))
      return !1;
  }
  var x = o.get(e), p = o.get(t);
  if (x && p)
    return x == t && p == e;
  var m = !0;
  o.set(e, t), o.set(t, e);
  for (var g = s; ++f < l; ) {
    h = a[f];
    var w = e[h], T = t[h];
    if (r)
      var E = s ? r(T, w, h, t, e, o) : r(w, T, h, e, t, o);
    if (!(E === void 0 ? w === T || i(w, T, n, r, o) : E)) {
      m = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (m && !g) {
    var b = e.constructor, C = t.constructor;
    b != C && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof C == "function" && C instanceof C) && (m = !1);
  }
  return o.delete(e), o.delete(t), m;
}
var La = 1, Xt = "[object Arguments]", Yt = "[object Array]", Ae = "[object Object]", za = Object.prototype, qt = za.hasOwnProperty;
function Ha(e, t, n, r, i, o) {
  var s = F(e), a = F(t), l = s ? Yt : W(e), d = a ? Yt : W(t);
  l = l == Xt ? Ae : l, d = d == Xt ? Ae : d;
  var u = l == Ae, f = d == Ae, h = l == d;
  if (h && Ge(e)) {
    if (!Ge(t))
      return !1;
    s = !0, u = !1;
  }
  if (h && !u)
    return o || (o = new G()), s || Tn(e) ? kn(e, t, n, r, i, o) : Ia(e, t, l, n, r, i, o);
  if (!(n & La)) {
    var x = u && qt.call(e, "__wrapped__"), p = f && qt.call(t, "__wrapped__");
    if (x || p) {
      var m = x ? e.value() : e, g = p ? t.value() : t;
      return o || (o = new G()), i(m, g, n, r, o);
    }
  }
  return h ? (o || (o = new G()), Ba(e, t, n, r, i, o)) : !1;
}
function dt(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !te(e) && !te(t) ? e !== e && t !== t : Ha(e, t, n, r, dt, i);
}
var Fa = 1, ja = 2;
function Ga(e, t, n, r) {
  var i = n.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var s = n[i];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    s = n[i];
    var a = s[0], l = e[a], d = s[1];
    if (s[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var u = new G(), f;
      if (!(f === void 0 ? dt(d, l, Fa | ja, r, u) : f))
        return !1;
    }
  }
  return !0;
}
function Mn(e) {
  return e === e && !Re(e);
}
function Ua(e) {
  for (var t = An(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, Mn(i)];
  }
  return t;
}
function Bn(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Va(e) {
  var t = Ua(e);
  return t.length == 1 && t[0][2] ? Bn(t[0][0], t[0][1]) : function(n) {
    return n === e || Ga(n, e, t);
  };
}
function Ka(e, t) {
  return e != null && t in Object(e);
}
function Wa(e, t, n) {
  t = Sn(t, e);
  for (var r = -1, i = t.length, o = !1; ++r < i; ) {
    var s = De(t[r]);
    if (!(o = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && it(i) && pn(s, i) && (F(e) || ot(e)));
}
function Ja(e, t) {
  return e != null && Wa(e, t, Ka);
}
var Xa = 1, Ya = 2;
function qa(e, t) {
  return at(e) && Mn(t) ? Bn(De(e), t) : function(n) {
    var r = bs(n, e);
    return r === void 0 && r === t ? Ja(n, e) : dt(t, r, Xa | Ya);
  };
}
function Ln(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Za(e) {
  return function(t) {
    return Pn(t, e);
  };
}
function Qa(e) {
  return at(e) ? Ln(De(e)) : Za(e);
}
function ec(e) {
  return typeof e == "function" ? e : e == null ? rt : typeof e == "object" ? F(e) ? qa(e[0], e[1]) : Va(e) : Qa(e);
}
function ze(e) {
  return te(e) && yn(e);
}
var tc = 200;
function nc(e, t, n, r) {
  var i = -1, o = Ki, s = !0, a = e.length, l = [], d = t.length;
  if (!a)
    return l;
  n && (t = gn(t, st(n))), t.length >= tc && (o = Dn, s = !1, t = new ye(t));
  e:
    for (; ++i < a; ) {
      var u = e[i], f = n == null ? u : n(u);
      if (u = u !== 0 ? u : 0, s && f === f) {
        for (var h = d; h--; )
          if (t[h] === f)
            continue e;
        l.push(u);
      } else o(t, f, r) || l.push(u);
    }
  return l;
}
function rc(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ic = Yi(function(e, t) {
  var n = rc(t);
  return ze(n) && (n = void 0), ze(e) ? nc(e, Cs(t, 1, ze), ec(n)) : [];
}), oc = "[object RegExp]";
function sc(e) {
  return te(e) && ue(e) == oc;
}
var Zt = Ne && Ne.isRegExp, ac = Zt ? st(Zt) : sc, cc = Ln("length"), zn = "\\ud800-\\udfff", lc = "\\u0300-\\u036f", dc = "\\ufe20-\\ufe2f", uc = "\\u20d0-\\u20ff", fc = lc + dc + uc, hc = "\\ufe0e\\ufe0f", mc = "[" + zn + "]", Ye = "[" + fc + "]", qe = "\\ud83c[\\udffb-\\udfff]", gc = "(?:" + Ye + "|" + qe + ")", Hn = "[^" + zn + "]", Fn = "(?:\\ud83c[\\udde6-\\uddff]){2}", jn = "[\\ud800-\\udbff][\\udc00-\\udfff]", xc = "\\u200d", Gn = gc + "?", Un = "[" + hc + "]?", pc = "(?:" + xc + "(?:" + [Hn, Fn, jn].join("|") + ")" + Un + Gn + ")*", vc = Un + Gn + pc, yc = "(?:" + [Hn + Ye + "?", Ye, Fn, jn, mc].join("|") + ")", Qt = RegExp(qe + "(?=" + qe + ")|" + yc + vc, "g");
function bc(e) {
  for (var t = Qt.lastIndex = 0; Qt.test(e); )
    ++t;
  return t;
}
function wc(e) {
  return lt(e) ? bc(e) : cc(e);
}
var Cc = 30, Tc = "...", Ac = /\w*$/;
function Sc(e, t) {
  var n = Cc, r = Tc;
  if (Re(t)) {
    var i = "separator" in t ? t.separator : i;
    n = "length" in t ? pi(t.length) : n, r = "omission" in t ? _e(t.omission) : r;
  }
  e = Ue(e);
  var o = e.length;
  if (lt(e)) {
    var s = Ws(e);
    o = s.length;
  }
  if (n >= o)
    return e;
  var a = n - wc(r);
  if (a < 1)
    return r;
  var l = s ? As(s, 0, a).join("") : e.slice(0, a);
  if (i === void 0)
    return l + r;
  if (s && (a += l.length - a), ac(i)) {
    if (e.slice(a).search(i)) {
      var d, u = l;
      for (i.global || (i = RegExp(i.source, Ue(Ac.exec(i)) + "g")), i.lastIndex = 0; d = i.exec(u); )
        var f = d.index;
      l = l.slice(0, f === void 0 ? a : f);
    }
  } else if (e.indexOf(_e(i), a) != a) {
    var h = l.lastIndexOf(i);
    h > -1 && (l = l.slice(0, h));
  }
  return l + r;
}
function ut(e, t, n) {
  const r = [], i = e.node(0);
  n = typeof n == "number" && n >= 0 ? n : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
  const o = new Or(e, t, n), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((a, l) => {
    const d = s + l, u = d + a.nodeSize;
    if (d < o.start || d >= o.end) return;
    const f = new _r(i.resolve(d), i.resolve(u));
    r.push(f);
  }), r;
}
class ft {
  constructor(t, n) {
    Ce(this, "anchor");
    Ce(this, "head");
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new ft(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), r = t.resolve(this.head);
    return new H(n, r);
  }
}
class H extends xe {
  constructor(n, r, i, o = 1) {
    const { doc: s } = n, a = n === r, l = n.pos === s.content.size && r.pos === s.content.size, d = a && !l ? s.resolve(r.pos + (o > 0 ? 1 : -1)) : r, u = a && l ? s.resolve(n.pos - (o > 0 ? 1 : -1)) : n, f = ut(u.min(d), u.max(d), i);
    super(
      d.pos >= n.pos ? f[0].$from : f[f.length - 1].$to,
      d.pos >= n.pos ? f[f.length - 1].$to : f[0].$from,
      f
    );
    Ce(this, "depth");
    this.depth = i;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(n) {
    return n instanceof H && n.$from.pos === this.$from.pos && n.$to.pos === this.$to.pos;
  }
  map(n, r) {
    const i = n.resolve(r.map(this.anchor)), o = n.resolve(r.map(this.head));
    return new H(i, o);
  }
  toJSON() {
    return { type: "nodeRange", anchor: this.anchor, head: this.head };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: n } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const o = this.ranges.slice(0, -1), s = o[0].$from, a = o[o.length - 1].$to;
      return new H(s, a, this.depth);
    }
    const r = this.ranges[0], i = n.resolve(Math.max(0, r.$from.pos - 1));
    return new H(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: n } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), s = o[0].$from, a = o[o.length - 1].$to;
      return new H(a, s, this.depth);
    }
    const r = this.ranges[this.ranges.length - 1], i = n.resolve(Math.min(n.content.size, r.$to.pos + 1));
    return new H(this.$anchor, i, this.depth);
  }
  static fromJSON(n, r) {
    return new H(n.resolve(r.anchor), n.resolve(r.head));
  }
  static create(n, r, i, o, s = 1) {
    return new this(n.resolve(r), n.resolve(i), o, s);
  }
  getBookmark() {
    return new ft(this.anchor, this.head);
  }
}
function Pc(e) {
  const t = e.cloneNode(!0), n = [e, ...Array.from(e.getElementsByTagName("*"))], r = [t, ...Array.from(t.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    r[o].style.cssText = function(s) {
      let a = "";
      const l = getComputedStyle(s);
      for (let d = 0; d < l.length; d += 1)
        a += `${l[d]}:${l.getPropertyValue(l[d])};`;
      return a;
    }(i);
  }), t;
}
function Se(e, t) {
  return window.getComputedStyle(e)[t];
}
function Ec(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function en(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function Vn(e) {
  const { x: t, y: n, direction: r, editor: i } = e;
  let o = null, s = null, a = null, l = t;
  for (; s === null && l < window.innerWidth && l > 0; ) {
    const d = document.elementsFromPoint(l, n), u = d.findIndex((h) => h.classList.contains("ProseMirror")), f = d.slice(0, u);
    if (f.length > 0) {
      const h = f[0];
      if (o = h, a = i.view.posAtDOM(h, 0), a >= 0) {
        s = i.state.doc.nodeAt(Math.max(a - 1, 0)), (s === null || s.isText) && (s = i.state.doc.nodeAt(Math.max(a - 1, 0))), s || (s = i.state.doc.nodeAt(Math.max(a, 0)));
        break;
      }
    }
    r === "left" ? l -= 1 : l += 1;
  }
  return {
    resultElement: o,
    resultNode: s,
    pos: a !== null ? a : null
  };
}
function Oc(e, t) {
  const { doc: n } = t.view.state, r = Vn({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!r.resultNode || r.pos === null) return [];
  const i = e.clientX, o = function(u, f, h) {
    const x = Number.parseInt(Se(u.dom, "paddingLeft"), 10), p = Number.parseInt(Se(u.dom, "paddingRight"), 10), m = Number.parseInt(Se(u.dom, "borderLeftWidth"), 10), g = Number.parseInt(Se(u.dom, "borderLeftWidth"), 10), w = u.dom.getBoundingClientRect();
    return {
      left: Ec(
        f,
        w.left + x + m,
        w.right - p - g
      ),
      top: h
    };
  }(t.view, i, e.clientY), s = t.view.posAtCoords(o);
  if (!s) return [];
  const { pos: a } = s;
  if (!n.resolve(a).parent) return [];
  const l = n.resolve(r.pos), d = n.resolve(r.pos + 1);
  return ut(l, d, 0);
}
function tn(e, t) {
  const n = e.resolve(t), { depth: r } = n;
  return r === 0 ? t : n.pos - n.parentOffset - 1;
}
function nn(e, t) {
  const n = e.nodeAt(t), r = e.resolve(t);
  let { depth: i } = r, o = n;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}
function rn(e, t) {
  let n = t;
  for (; n && n.parentNode && n.parentNode !== e.dom; ) n = n.parentNode;
  return n;
}
const Kn = new be("dragHandle");
function _c({
  pluginKey: e = Kn,
  element: t,
  editor: n,
  tippyOptions: r,
  onNodeChange: i
}) {
  const o = document.createElement("div");
  let s = null, a = !1, l = null, d = -1;
  return t.addEventListener("dragstart", (u) => {
    const { view: f } = n;
    if (!u.dataTransfer) return;
    const { empty: h, $from: x, $to: p } = f.state.selection, m = Oc(u, n), g = ut(x, p, 0), w = g.some((L) => m.find((I) => I.$from === L.$from && I.$to === L.$to)), T = h || !w ? m : g;
    if (T.length === 0) return;
    const { tr: E } = f.state, b = document.createElement("div"), C = T[0].$from.pos, $ = T[T.length - 1].$to.pos, B = H.create(f.state.doc, C, $), D = B.content();
    T.forEach((L) => {
      const I = Pc(f.nodeDOM(L.$from.pos));
      b.append(I);
    }), b.style.position = "absolute", b.style.top = "-10000px", document.body.append(b), u.dataTransfer.clearData(), u.dataTransfer.setDragImage(b, 0, 0), f.dragging = { slice: D, move: !0 }, E.setSelection(B), f.dispatch(E), document.addEventListener("drop", () => en(b), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new le({
    key: typeof e == "string" ? new be(e) : e,
    state: {
      init: () => ({ locked: !1 }),
      apply(u, f) {
        const h = u.getMeta("lockDragHandle"), x = u.getMeta("hideDragHandle");
        if (h !== void 0 && (a = h), x && s)
          return s.hide(), a = !1, l = null, d = -1, i == null || i({ editor: n, node: null, pos: -1 }), f;
        if (u.docChanged && d !== -1 && t && s) {
          const p = u.mapping.map(d);
          p !== d && (d = p);
        }
        return f;
      }
    },
    view: (u) => {
      return f(), h(n.view.dom), s = Mr(u.dom, {
        ...x(),
        ...r
      }), {
        update(b, C) {
          if (!p(t, s) || (t.draggable = !a, !m(b, C)))
            return;
          const $ = g(b);
          $ && w(b, $);
        },
        destroy() {
          E();
        }
      };
      function f() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(b) {
        var C;
        (C = b.parentElement) == null || C.appendChild(o), o.appendChild(t), Object.assign(o.style, {
          pointerEvents: "none",
          position: "absolute",
          top: "0",
          left: "0"
        });
      }
      function x() {
        return {
          getReferenceClientRect: null,
          interactive: !0,
          trigger: "manual",
          placement: "left-start",
          hideOnClick: !1,
          duration: 100,
          zIndex: 10,
          appendTo: o,
          content: t,
          popperOptions: {
            modifiers: [
              { name: "flip", enabled: !1 },
              {
                name: "preventOverflow",
                options: {
                  rootBoundary: "document",
                  mainAxis: !1
                }
              }
            ]
          }
        };
      }
      function p(b, C) {
        return b && C;
      }
      function m(b, C) {
        return !b.state.doc.eq(C.doc) && d !== -1;
      }
      function g(b) {
        let C = b.nodeDOM(d);
        return C = rn(b, C), C === b.dom || (C == null ? void 0 : C.nodeType) !== 1 ? null : C;
      }
      function w(b, C) {
        const $ = b.posAtDOM(C, 0), B = nn(n.state.doc, $);
        if (B === l)
          return;
        const D = tn(n.state.doc, $);
        l = B, d = D, i == null || i({
          editor: n,
          node: l,
          pos: d
        }), T(C);
      }
      function T(b) {
        s.setProps({
          getReferenceClientRect: () => b.getBoundingClientRect()
        }), s.show();
      }
      function E() {
        s == null || s.destroy(), t && en(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (u, f) => {
          if (a || !h(f)) return !1;
          return x(), p(), !1;
          function h(m) {
            return m.target && !o.contains(m.relatedTarget);
          }
          function x() {
            s == null || s.hide();
          }
          function p() {
            l = null, d = -1, i == null || i({
              editor: n,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: jr((u, f) => {
          if (!t || !s || a)
            return !1;
          const h = Vn({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: n
          });
          if (!h.resultElement || h.resultElement === u.dom)
            return !1;
          const x = rn(u, h.resultElement);
          if (x === u.dom || (x == null ? void 0 : x.nodeType) !== 1)
            return !1;
          const p = u.posAtDOM(x, 0), m = nn(n.state.doc, p);
          if (m === l)
            return !1;
          const g = tn(n.state.doc, p);
          return l = m, d = g, i == null || i({
            editor: n,
            node: l,
            pos: d
          }), s.setProps({
            getReferenceClientRect: () => x.getBoundingClientRect()
          }), s.show(), !1;
        }, 100)
      }
    }
  });
}
function Nc(e) {
  var D, L, I;
  const { pluginKey: t = Kn } = e, { t: n } = M(), [r, i] = J(null), [o, s] = J(-1), a = He(null), l = He(null), [d, u] = J(!1), f = e.editor.extensionManager.extensions.some((y) => y.name === "textAlign"), h = e.editor.extensionManager.extensions.some((y) => y.name === "indent"), x = e.editor.extensionManager.extensions.some((y) => y.name === "clear");
  k(() => {
    a.current && !e.editor.isDestroyed && (l.current = _c({
      editor: e.editor,
      element: a.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: C
    }), e.editor.registerPlugin(l.current));
  }, [e.editor, a]);
  function p() {
    const y = e.editor.chain();
    y.setNodeSelection(o).unsetAllMarks(), (r == null ? void 0 : r.type.name) !== "paragraph" && y.setParagraph(), y.run();
  }
  function m() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function g() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: y } = e.editor.state.selection, K = y.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((r == null ? void 0 : r.nodeSize) || 0), K.toJSON()).run();
  }
  function w(y) {
    e.editor.commands.setTextAlign(y);
  }
  function T() {
    const y = wt(e.editor.state.tr, o, 1);
    y.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(y);
  }
  function E() {
    const y = wt(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(y);
  }
  function b() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function C(y) {
    y.node && i(y.node), s(y.pos);
  }
  function $() {
    var y;
    if (o !== -1) {
      const K = (r == null ? void 0 : r.nodeSize) || 0, he = o + K, Q = (r == null ? void 0 : r.type.name) === "paragraph" && ((y = r == null ? void 0 : r.content) == null ? void 0 : y.size) === 0, we = Q ? o + 2 : he + 2;
      e.editor.chain().command(({ dispatch: ee, tr: oe, state: z }) => ee ? (Q ? oe.insertText("/", o, o + 1) : oe.insert(
        he,
        z.schema.nodes.paragraph.create(null, [z.schema.text("/")])
      ), ee(oe)) : !0).focus(we).run();
    }
  }
  k(() => (d ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [d]), k(() => () => {
    l.current && (e.editor.unregisterPlugin(t), l.current = null);
  }, []), k(() => {
    var y;
    (y = e.editor) != null && y.isDestroyed && l.current && (e.editor.unregisterPlugin(t), l.current = null);
  }, [(D = e.editor) == null ? void 0 : D.isDestroyed]);
  const B = (y) => {
    e != null && e.disabled || u(y);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: a,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ v("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ c(
          Ee,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: $,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ c(
              N,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ v(
          Ur,
          {
            onOpenChange: B,
            open: d,
            children: [
              /* @__PURE__ */ v("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ v(Jr, { children: [
                  /* @__PURE__ */ c(
                    Xr,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ c(
                        Ee,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (y) => {
                            y.preventDefault(), !(e != null && e.disabled) && u(!0);
                          },
                          children: /* @__PURE__ */ c(
                            N,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ c(Yr, { children: n("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ c(Vr, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ v(
                Kr,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ v(
                      j,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: b,
                        children: [
                          /* @__PURE__ */ c(N, { name: "Trash2" }),
                          /* @__PURE__ */ c("span", { children: n("editor.remove") })
                        ]
                      }
                    ),
                    x ? /* @__PURE__ */ v(
                      j,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: p,
                        children: [
                          /* @__PURE__ */ c(N, { name: "PaintRoller" }),
                          /* @__PURE__ */ c("span", { children: n("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ v(
                      j,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ c(N, { name: "Clipboard" }),
                          /* @__PURE__ */ c("span", { children: n("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ v(
                      j,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ c(N, { name: "Copy" }),
                          /* @__PURE__ */ c("span", { children: n("editor.copy") })
                        ]
                      }
                    ),
                    f || h ? /* @__PURE__ */ c(Wr, {}) : null,
                    f ? /* @__PURE__ */ v(Ct, { children: [
                      /* @__PURE__ */ v(Tt, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ c(N, { name: "AlignCenter" }),
                        /* @__PURE__ */ c("span", { children: n("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ c(At, { children: /* @__PURE__ */ v(St, { children: [
                        /* @__PURE__ */ v(
                          j,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => w("left"),
                            children: [
                              /* @__PURE__ */ c(N, { name: "AlignLeft" }),
                              /* @__PURE__ */ c("span", { children: n("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ v(
                          j,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => w("center"),
                            children: [
                              /* @__PURE__ */ c(N, { name: "AlignCenter" }),
                              /* @__PURE__ */ c("span", { children: n("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ v(
                          j,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => w("right"),
                            children: [
                              /* @__PURE__ */ c(N, { name: "AlignRight" }),
                              /* @__PURE__ */ c("span", { children: n("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ v(Ct, { children: [
                      /* @__PURE__ */ v(Tt, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ c(N, { name: "IndentIncrease" }),
                        /* @__PURE__ */ c("span", { children: n("editor.indent") })
                      ] }),
                      /* @__PURE__ */ c(At, { children: /* @__PURE__ */ v(St, { children: [
                        /* @__PURE__ */ v(
                          j,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((L = r == null ? void 0 : r.attrs) == null ? void 0 : L.indent) >= bt.max,
                            onClick: T,
                            children: [
                              /* @__PURE__ */ c(N, { name: "IndentIncrease" }),
                              /* @__PURE__ */ c("span", { children: n("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ v(
                          j,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((I = r == null ? void 0 : r.attrs) == null ? void 0 : I.indent) <= bt.min,
                            onClick: E,
                            children: [
                              /* @__PURE__ */ c(N, { name: "IndentDecrease" }),
                              /* @__PURE__ */ c("span", { children: n("editor.outdent.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
const Rc = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function $c({ item: e, disabled: t, editor: n }) {
  var i;
  const r = e.component;
  return r ? /* @__PURE__ */ c(
    r,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: n
    }
  ) : /* @__PURE__ */ c(O, {});
}
function Ic(e) {
  const { t, lang: n } = M(), r = ({ editor: o }) => {
    const { selection: s } = o.view.state, { $from: a, to: l } = s;
    return a.pos === l ? !1 : s instanceof Qe;
  }, i = Y(() => e.disabled || !(e != null && e.editor) ? [] : fr(e.editor, t), [e.disabled, e.editor, n, t]);
  return /* @__PURE__ */ c(
    q,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: Rc,
      children: i != null && i.length ? /* @__PURE__ */ c("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ c("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, s) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ c(
        X,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${s}`
      ) : /* @__PURE__ */ c(
        $c,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: o
        },
        `bubbleMenu-text-${s}`
      )) }) }) : /* @__PURE__ */ c(O, {})
    }
  );
}
function Dc({ editor: e, disabled: t, actions: n }) {
  var g, w, T, E, b, C, $, B, D, L, I, y, K, he, Q, we, ee, oe;
  const r = ({ editor: z }) => Nr(z.view.state, "table"), { t: i } = M();
  function o() {
    e.chain().focus().addColumnBefore().run();
  }
  function s() {
    e.chain().focus().addColumnAfter().run();
  }
  function a() {
    e.chain().focus().deleteColumn().run();
  }
  function l() {
    e.chain().focus().addRowBefore().run();
  }
  function d() {
    e.chain().focus().addRowAfter().run();
  }
  function u() {
    e.chain().focus().deleteRow().run();
  }
  function f() {
    e.chain().focus().mergeCells().run();
  }
  function h() {
    e == null || e.chain().focus().splitCell().run();
  }
  function x() {
    e.chain().focus().deleteTable().run();
  }
  function p(z) {
    e.chain().focus().setTableCellBackground(z).run();
  }
  return /* @__PURE__ */ c(
    q,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: r,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var vt;
          const {
            view: z,
            state: {
              selection: { from: ke }
            }
          } = e, se = z.domAtPos(ke).node;
          if (!se)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const pt = (vt = se == null ? void 0 : se.closest) == null ? void 0 : vt.call(se, ".tableWrapper");
          return pt ? pt.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Br],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ c(O, {}) : /* @__PURE__ */ v("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ c(
          P,
          {
            action: o,
            disabled: !((w = (g = e == null ? void 0 : e.can()) == null ? void 0 : g.addColumnBefore) != null && w.call(g)),
            icon: "BetweenHorizonalEnd",
            tooltip: i("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: s,
            disabled: !((E = (T = e == null ? void 0 : e.can()) == null ? void 0 : T.addColumnAfter) != null && E.call(T)),
            icon: "BetweenHorizonalStart",
            tooltip: i("editor.table.menu.insertColumnAfter"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: a,
            disabled: !((C = e == null ? void 0 : (b = e.can()).deleteColumn) != null && C.call(b)),
            icon: "DeleteColumn",
            tooltip: i("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          X,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: l,
            disabled: !((B = e == null ? void 0 : ($ = e.can()).addRowBefore) != null && B.call($)),
            icon: "BetweenVerticalEnd",
            tooltip: i("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: d,
            disabled: !((L = (D = e == null ? void 0 : e.can()) == null ? void 0 : D.addRowAfter) != null && L.call(D)),
            icon: "BetweenVerticalStart",
            tooltip: i("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: u,
            disabled: !((y = (I = e == null ? void 0 : e.can()) == null ? void 0 : I.deleteRow) != null && y.call(I)),
            icon: "DeleteRow",
            tooltip: i("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          X,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: f,
            disabled: !((he = (K = e == null ? void 0 : e.can()) == null ? void 0 : K.mergeCells) != null && he.call(K)),
            icon: "TableCellsMerge",
            tooltip: i("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: h,
            disabled: !((we = (Q = e == null ? void 0 : e.can()) == null ? void 0 : Q.splitCell) != null && we.call(Q)),
            icon: "TableCellsSplit",
            tooltip: i("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          X,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ c(
          Lr,
          {
            action: p,
            editor: e,
            tooltip: i("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: x,
            disabled: !((oe = (ee = e == null ? void 0 : e.can()) == null ? void 0 : ee.deleteTable) != null && oe.call(ee)),
            icon: "Trash2",
            tooltip: i("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        n && n.map((z, ke) => /* @__PURE__ */ c(
          P,
          {
            ...z
          },
          ke
        ))
      ] })
    }
  );
}
function kc(e) {
  const { t } = M();
  return /* @__PURE__ */ v("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ c(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: Sc(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ c(X, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ v("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ c(
        P,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ c(
        P,
        {
          icon: "Unlink",
          tooltip: t("editor.link.unlink.tooltip"),
          action: () => {
            e == null || e.onClear();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      )
    ] })
  ] });
}
function Mc({ editor: e, disabled: t }) {
  const [n, r] = J(!1), i = Y(() => {
    const { href: l } = e.getAttributes("link");
    return l;
  }, [e]), o = _(({ editor: l }) => l.isActive("link"), []), s = (l, d, u) => {
    const f = e.state.selection, { from: h } = f, x = (d == null ? void 0 : d.length) ?? 0, p = h + x;
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: d,
      marks: [
        {
          type: "link",
          attrs: {
            href: l,
            target: u ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: l }).setTextSelection({ from: h, to: p }).focus().run(), r(!1);
  }, a = _(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), r(!1);
  }, [e]);
  return /* @__PURE__ */ c(O, { children: /* @__PURE__ */ c(
    q,
    {
      editor: e,
      shouldShow: o,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          r(!1);
        }
      },
      children: t ? /* @__PURE__ */ c(O, {}) : /* @__PURE__ */ c(O, { children: n ? /* @__PURE__ */ c(zr, { onSetLink: s, editor: e }) : /* @__PURE__ */ c(
        kc,
        {
          editor: e,
          onClear: a,
          onEdit: () => {
            r(!0);
          },
          link: i
        }
      ) })
    }
  ) });
}
const ht = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function mt({ item: e, disabled: t, editor: n }) {
  var i;
  const r = e.component;
  return r ? /* @__PURE__ */ c(ir, { children: e.type === "divider" ? /* @__PURE__ */ c(
    X,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ c(
    r,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: n
    }
  ) }) : /* @__PURE__ */ c(O, {});
}
function Bc(e) {
  return e.type.name === dn.name;
}
function Lc(e) {
  return e.type.name === un.name;
}
function zc(e) {
  return e.type.name === Gr.name;
}
function Hc(e) {
  const { lang: t } = M(), n = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: s, to: a } = o;
    let l = !1;
    return i.view.state.doc.nodesBetween(s.pos, a, (d) => {
      if (Bc(d))
        return l = !0, !1;
    }), l;
  }, r = Y(() => e.disabled ? [] : hr(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ c(O, { children: /* @__PURE__ */ c(
    q,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ht,
      children: r != null && r.length ? /* @__PURE__ */ c("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ c("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((i, o) => /* @__PURE__ */ c(
        mt,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ c(O, {})
    }
  ) });
}
function Fc(e) {
  const { lang: t } = M(), n = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: s, to: a } = o;
    let l = !1;
    return i.view.state.doc.nodesBetween(s.pos, a, (d) => {
      if (Lc(d))
        return l = !0, !1;
    }), l;
  }, r = Y(() => e.disabled ? [] : mr(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ c(O, { children: /* @__PURE__ */ c(
    q,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ht,
      children: r != null && r.length ? /* @__PURE__ */ c("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ c("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((i, o) => /* @__PURE__ */ c(
        mt,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ c(O, {})
    }
  ) });
}
function jc(e) {
  const { lang: t } = M(), n = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: s, to: a } = o;
    let l = !1;
    return i.view.state.doc.nodesBetween(s.pos, a, (d) => {
      if (zc(d))
        return l = !0, !1;
    }), l;
  }, r = Y(() => e.disabled ? [] : gr(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ c(O, { children: /* @__PURE__ */ c(
    q,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ht,
      children: r != null && r.length ? /* @__PURE__ */ c("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ c("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((i, o) => /* @__PURE__ */ c(
        mt,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ c(O, {})
    }
  ) });
}
function Gc({ editor: e }) {
  const { t } = M(), n = _(() => e.isActive(Fe.name), [e]), r = _(() => ln(Fe.name, e), [e]), i = _(() => e.chain().focus().addColBefore().run(), [e]), o = _(() => e.chain().focus().addColAfter().run(), [e]), s = _(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ c(
    q,
    {
      editor: e,
      pluginKey: "columns-bubble-menu",
      shouldShow: n,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ v("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
        /* @__PURE__ */ c(
          P,
          {
            action: i,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: s,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            action: r,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const Uc = R.Provider, Wn = ce.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  R.Viewport,
  {
    ref: n,
    className: fe(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
Wn.displayName = R.Viewport.displayName;
const Vc = Qr(
  "richtext-group richtext-pointer-events-auto richtext-relative richtext-flex richtext-w-full richtext-items-center richtext-justify-between richtext-space-x-4 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-p-6 richtext-pr-8 richtext-shadow-lg richtext-transition-all data-[swipe=cancel]:richtext-translate-x-0 data-[swipe=end]:richtext-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:richtext-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:richtext-transition-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[swipe=end]:richtext-animate-out data-[state=closed]:richtext-fade-out-80 data-[state=closed]:richtext-slide-out-to-right-full data-[state=open]:richtext-slide-in-from-top-full data-[state=open]:sm:richtext-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "richtext-border richtext-bg-background richtext-text-foreground",
        destructive: "richtext-destructive richtext-group richtext-border-destructive richtext-bg-destructive richtext-text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Jn = ce.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ c(
  R.Root,
  {
    ref: r,
    className: fe(Vc({ variant: t }), e),
    ...n
  }
));
Jn.displayName = R.Root.displayName;
const Kc = ce.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  R.Action,
  {
    ref: n,
    className: fe(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
Kc.displayName = R.Action.displayName;
const Xn = ce.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  R.Close,
  {
    ref: n,
    className: fe(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ c(ei, { className: "richtext-h-4 richtext-w-4" })
  }
));
Xn.displayName = R.Close.displayName;
const Yn = ce.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  R.Title,
  {
    ref: n,
    className: fe("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Yn.displayName = R.Title.displayName;
const qn = ce.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  R.Description,
  {
    ref: n,
    className: fe("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
qn.displayName = R.Description.displayName;
function Wc({ editor: e }) {
  const { t } = M(), { width: n, height: r, src: i } = Ar(e, me.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, s] = J(!1), [a, l] = J(""), d = _(() => {
    s(!1);
  }, [s]);
  k(() => {
    o && l(i);
  }, [o, i]);
  const u = _(() => {
    const g = Tr(a);
    e.chain().updateAttributes(me.name, {
      src: (g == null ? void 0 : g.src) || a
    }).setNodeSelection(e.state.selection.from).focus().run(), s(!1);
  }, [e, a, s]), f = _(() => {
    window.open(i, "_blank");
  }, [i]), h = _(() => {
    s(!0);
  }, [s]), x = _(
    (g) => {
      e.chain().updateAttributes(me.name, g).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), p = _(() => e.isActive(me.name) && !i, [e, i]), m = _(() => ln(me.name, e), [e]);
  return /* @__PURE__ */ v(O, { children: [
    /* @__PURE__ */ c(
      q,
      {
        className: "bubble-menu",
        editor: e,
        pluginKey: "iframe-bubble-menu",
        shouldShow: p,
        tippyOptions: {
          popperOptions: {
            modifiers: [{ name: "flip", enabled: !1 }]
          },
          placement: "bottom-start",
          offset: [-2, 16],
          zIndex: 9999
          // onHidden: () => {
          //   toggleVisible(false)
          // },
        },
        children: /* @__PURE__ */ v("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
          /* @__PURE__ */ c(
            P,
            {
              action: f,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ c(
            P,
            {
              action: h,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ c(
            xr,
            {
              height: r,
              onOk: x,
              width: n,
              children: /* @__PURE__ */ c(
                P,
                {
                  icon: "Settings",
                  tooltip: t("editor.settings")
                }
              )
            }
          ),
          /* @__PURE__ */ c(
            P,
            {
              action: m,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ v(
      pr,
      {
        onOpenChange: s,
        open: o,
        children: [
          /* @__PURE__ */ c(vr, {}),
          /* @__PURE__ */ v(yr, { children: [
            /* @__PURE__ */ c(br, { children: /* @__PURE__ */ c(wr, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ c(
              Pr,
              {
                autoFocus: !0,
                onInput: (g) => l(g.target.value),
                placeholder: "Enter link",
                type: "url",
                value: a
              }
            ),
            /* @__PURE__ */ v(Cr, { children: [
              /* @__PURE__ */ c(Ee, { onClick: d, children: "Cancel" }),
              /* @__PURE__ */ c(Ee, { onClick: u, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Jc({ editor: e, disabled: t, bubbleMenu: n }) {
  const r = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, s, a, l, d, u, f, h, x, p;
    return [
      r.includes("columns") && !((o = n == null ? void 0 : n.columnConfig) != null && o.hidden) ? /* @__PURE__ */ c(
        Gc,
        {
          editor: e
        },
        "columns"
      ) : null,
      r.includes("table") && !((s = n == null ? void 0 : n.tableConfig) != null && s.hidden) ? /* @__PURE__ */ c(
        Dc,
        {
          actions: (a = n == null ? void 0 : n.tableConfig) == null ? void 0 : a.actions,
          editor: e
        },
        "table"
      ) : null,
      r.includes("link") && !((l = n == null ? void 0 : n.linkConfig) != null && l.hidden) ? /* @__PURE__ */ c(
        Mc,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      r.includes(dn.name) && !((d = n == null ? void 0 : n.imageConfig) != null && d.hidden) ? /* @__PURE__ */ c(
        Hc,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      r.includes(un.name) && !((u = n == null ? void 0 : n.imageGifConfig) != null && u.hidden) ? /* @__PURE__ */ c(
        Fc,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      r.includes("video") && !((f = n == null ? void 0 : n.videoConfig) != null && f.hidden) ? /* @__PURE__ */ c(
        jc,
        {
          disabled: t,
          editor: e
        },
        "video"
      ) : null,
      r.includes("iframe") && !((h = n == null ? void 0 : n.iframeConfig) != null && h.hidden) ? /* @__PURE__ */ c(
        Wc,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (x = n == null ? void 0 : n.floatingMenuConfig) != null && x.hidden ? null : /* @__PURE__ */ c(
        Nc,
        {
          disabled: t,
          editor: e
        },
        "content"
      ),
      (p = n == null ? void 0 : n.textConfig) != null && p.hidden ? null : /* @__PURE__ */ c(
        Ic,
        {
          disabled: t,
          editor: e
        },
        "text"
      )
    ];
  };
  return n != null && n.render ? n.render({ editor: e, disabled: t || !1, extensionsNames: r, bubbleMenu: n }, i()) : i().filter(Boolean);
}
function Xc({ editor: e, disabled: t, toolbar: n }) {
  const { t: r, lang: i } = M(), o = Y(() => {
    const d = [...e.extensionManager.extensions].sort((f, h) => {
      const x = f.options.sort ?? -1, p = h.options.sort ?? -1;
      return x - p;
    });
    let u = [];
    for (const f of d) {
      const {
        button: h,
        divider: x = !1,
        spacer: p = !1,
        toolbar: m = !0
      } = f.options;
      if (!h || !qr(h) || !m)
        continue;
      const g = h({
        editor: e,
        extension: f,
        t: r
      });
      if (Array.isArray(g)) {
        const w = g.map((T, E) => ({
          button: T,
          divider: E === g.length - 1 ? x : !1,
          spacer: E === 0 ? p : !1,
          type: f.type,
          name: f.name
        }));
        u = [...u, ...w];
        continue;
      }
      u.push({
        button: g,
        divider: x,
        spacer: p,
        type: f.type,
        name: f.name
      });
    }
    return u;
  }, [e, r, i]), s = (l) => /* @__PURE__ */ c(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ c("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: l })
    }
  ), a = o.map((l, d) => {
    var f, h;
    const u = l.button.component;
    return /* @__PURE__ */ v("div", { className: "richtext-flex richtext-items-center", children: [
      (l == null ? void 0 : l.spacer) && /* @__PURE__ */ c(X, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ c(
        u,
        {
          ...l.button.componentProps,
          disabled: t || ((h = (f = l == null ? void 0 : l.button) == null ? void 0 : f.componentProps) == null ? void 0 : h.disabled)
        }
      ),
      (l == null ? void 0 : l.divider) && /* @__PURE__ */ c(X, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${d}`);
  });
  return n && (n != null && n.render) ? n.render({ editor: e, disabled: t || !1 }, o, a, s) : s(a);
}
function Yc({ editor: e, extensions: t }) {
  const { t: n } = M(), r = Y(() => {
    var i, o, s;
    return (s = (o = (i = t == null ? void 0 : t.find((a) => a.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : s.limit;
  }, [t]);
  return r ? /* @__PURE__ */ c("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ v("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    r,
    " ",
    n("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ c("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ v("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    n("editor.characters")
  ] }) }) }) });
}
function on() {
  const { toasts: e } = ti();
  return /* @__PURE__ */ v(Uc, { children: [
    e.map(({ id: t, title: n, description: r, action: i, ...o }) => /* @__PURE__ */ v(
      Jn,
      {
        ...o,
        children: [
          /* @__PURE__ */ v("div", { className: "richtext-grid richtext-gap-1", children: [
            n && /* @__PURE__ */ c(Yn, { children: n }),
            r && /* @__PURE__ */ c(qn, { children: r })
          ] }),
          i,
          /* @__PURE__ */ c(Xn, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ c(Wn, {})
  ] });
}
const qc = `
.reactjs-tiptap-editor,
.richtext-dialog-content {
  button,
  input:where([type=button]),
  input:where([type=reset]),
  input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  input,
  optgroup,
  select {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  input {
    border-width: 1px;
  }


  input::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button, input {
    cursor: pointer;
    color: inherit;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
}

div[data-radix-popper-content-wrapper],
div[data-tippy-root] {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  button, input {
    cursor: pointer;
    color: inherit;
  }
}
`, Zc = or(({ children: e, id: t }) => {
  const [, n] = si((s) => s.value), [, r] = ai((s) => s.value), i = (s) => {
    n({
      value: s.detail
    });
  }, o = (s) => {
    r({
      value: s.detail
    });
  };
  return k(() => {
    const s = Et(Ot.EDIT(t), i), a = Et(Ot.UPDATE_THEME(t), o);
    return () => {
      s(), a();
    };
  }, []), /* @__PURE__ */ c(O, { children: e });
});
function sn({ children: e, id: t }) {
  return /* @__PURE__ */ c(ii, { children: /* @__PURE__ */ c(oi, { children: /* @__PURE__ */ c(Zc, { id: t, children: e }) }) });
}
const an = "data-rc-order", cn = "data-rc-priority", Qc = "rc-util-key", Ze = /* @__PURE__ */ new Map();
function el(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
function Zn({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Qc;
}
function gt(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function tl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Qn(e) {
  return [...(Ze.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function er(e, t = {}) {
  const { csp: n, prepend: r, priority: i = 0 } = t, o = tl(r), s = o === "prependQueue", a = document.createElement("style");
  a.setAttribute(an, o), s && i && a.setAttribute(cn, `${i}`), n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce), a.innerHTML = e;
  const l = gt(t), { firstChild: d } = l;
  if (r) {
    if (s) {
      const u = Qn(l).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(an)))
          return !1;
        const h = Number(f.getAttribute(cn) || 0);
        return i >= h;
      });
      if (u.length > 0)
        return l.insertBefore(a, u.at(-1).nextSibling), a;
    }
    d.before(a);
  } else
    l.append(a);
  return a;
}
function tr(e, t = {}) {
  const n = gt(t);
  return Qn(n).find((r) => r.getAttribute(Zn(t)) === e);
}
function nl(e, t = {}) {
  const n = tr(e, t);
  n && n.remove();
}
function rl(e, t) {
  const n = Ze.get(e);
  if (!n || !el(document, n)) {
    const r = er("", t), { parentNode: i } = r;
    Ze.set(e, i), r.remove();
  }
}
function il(e, t, n = {}) {
  var s, a, l;
  const r = gt(n);
  rl(r, n);
  const i = tr(t, n);
  if (i)
    return (s = n.csp) != null && s.nonce && i.nonce !== ((a = n.csp) == null ? void 0 : a.nonce) && (i.nonce = (l = n.csp) == null ? void 0 : l.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = er(e, n);
  return o.setAttribute(Zn(n), t), o;
}
function ol(e, t) {
  const { content: n, extensions: r, useEditorOptions: i = {}, renderToolbar: o, renderHeader: s } = e, a = ar(), l = Y(() => {
    const m = ic(r, r, "name");
    return [...r.map((w) => {
      const T = r.find((E) => E.name === w.name);
      return T ? w.configure(T.options) : w;
    }), ...m].map((w, T) => w.configure({ sort: T }));
  }, [r]), d = ci((m) => {
    var w;
    const g = f(m, e.output);
    (w = e == null ? void 0 : e.onChangeContent) == null || w.call(e, g);
  }, ni), u = dr({
    extensions: l,
    content: n,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: m }) => {
      d && d(m);
    },
    ...i
  });
  cr(t, () => ({
    editor: u
  })), k(() => {
    document.documentElement.classList.toggle("dark", e.dark), Sr.setTheme(a, e.dark ? "dark" : "light");
  }, [e.dark]), k(() => {
    u == null || u.setEditable(!(e != null && e.disabled)), ri.setDisable(a, !(e != null && e.disabled));
  }, [u, e == null ? void 0 : e.disabled]), k(() => ((e == null ? void 0 : e.resetCSS) !== !1 && il(qc, "react-tiptap-reset"), () => {
    nl("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function f(m, g) {
    return e != null && e.removeDefaultWrapper ? g === "html" ? m.isEmpty ? "" : m.getHTML() : g === "json" ? m.isEmpty ? {} : m.getJSON() : g === "text" ? m.isEmpty ? "" : m.getText() : "" : g === "html" ? m.getHTML() : g === "json" ? m.getJSON() : g === "text" ? m.getText() : "";
  }
  lr(() => {
    u && (u.id = a);
  }, [a, u]), k(() => () => {
    var m;
    (m = u == null ? void 0 : u.destroy) == null || m.call(u);
  }, []);
  const h = Zr(u, "characterCount");
  if (!u)
    return /* @__PURE__ */ c(O, {});
  const x = !(e != null && e.hideToolbar) && /* @__PURE__ */ c(
    Xc,
    {
      disabled: !!(e != null && e.disabled),
      editor: u,
      toolbar: e.toolbar
    }
  ), p = /* @__PURE__ */ v(O, { children: [
    s && s(),
    /* @__PURE__ */ c(
      ur,
      {
        className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`,
        editor: u
      }
    ),
    h && /* @__PURE__ */ c(
      Yc,
      {
        editor: u,
        extensions: r
      }
    ),
    !(e != null && e.hideBubble) && /* @__PURE__ */ c(
      Jc,
      {
        bubbleMenu: e == null ? void 0 : e.bubbleMenu,
        disabled: e == null ? void 0 : e.disabled,
        editor: u
      }
    )
  ] });
  return o && x ? /* @__PURE__ */ v("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ c(sn, { id: a, children: /* @__PURE__ */ v(Pt, { delayDuration: 0, disableHoverableContent: !0, children: [
      o(x),
      /* @__PURE__ */ c("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: p }) })
    ] }) }),
    /* @__PURE__ */ c(on, {})
  ] }) : /* @__PURE__ */ v("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ c(sn, { id: a, children: /* @__PURE__ */ c(Pt, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ c("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ v("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
      x,
      p
    ] }) }) }) }),
    /* @__PURE__ */ c(on, {})
  ] });
}
const hd = sr(ol), sl = de.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (e) => e.length,
      wordCounter: (e) => e.split(" ").filter((t) => t !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (e) => {
      const t = (e == null ? void 0 : e.node) || this.editor.state.doc;
      if (((e == null ? void 0 : e.mode) || this.options.mode) === "textSize") {
        const r = t.textBetween(0, t.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return t.nodeSize;
    }, this.storage.words = (e) => {
      const t = (e == null ? void 0 : e.node) || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let e = !1;
    return [
      new le({
        key: new be("characterCount"),
        appendTransaction: (t, n, r) => {
          if (e)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            e = !0;
            return;
          }
          const o = this.storage.characters({ node: r.doc });
          if (o > i) {
            const s = o - i, a = 0, l = s;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
            const d = r.tr.deleteRange(a, l);
            return e = !0, d;
          }
          e = !0;
        },
        filterTransaction: (t, n) => {
          const r = this.options.limit;
          if (!t.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: t.doc });
          if (o <= r || i > r && o > r && o <= i)
            return !0;
          if (i > r && o > r && o > i || !t.getMeta("paste"))
            return !1;
          const a = t.selection.$head.pos, l = o - r, d = a - l, u = a;
          return t.deleteRange(d, u), !(this.storage.characters({ node: t.doc }) > r);
        }
      })
    ];
  }
});
function al(e = {}) {
  return new le({
    view(t) {
      return new cl(t, e);
    }
  });
}
class cl {
  constructor(t, n) {
    var r;
    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return t.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: t, handler: n }) => this.editorView.dom.removeEventListener(t, n));
  }
  update(t, n) {
    this.cursorPos != null && n.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(t) {
    t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let t = this.editorView.state.doc.resolve(this.cursorPos), n = !t.parent.inlineContent, r;
    if (n) {
      let a = t.nodeBefore, l = t.nodeAfter;
      if (a || l) {
        let d = this.editorView.nodeDOM(this.cursorPos - (a ? a.nodeSize : 0));
        if (d) {
          let u = d.getBoundingClientRect(), f = a ? u.bottom : u.top;
          a && l && (f = (f + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: u.left, right: u.right, top: f - this.width / 2, bottom: f + this.width / 2 };
        }
      }
    }
    if (!r) {
      let a = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: a.left - this.width / 2, right: a.left + this.width / 2, top: a.top, bottom: a.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let a = i.getBoundingClientRect();
      o = a.left - i.scrollLeft, s = a.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(t) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t);
  }
  dragover(t) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: t.clientX, top: t.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, n, t) : i;
    if (n && !o) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let a = Rr(this.editorView.state.doc, s, this.editorView.dragging.slice);
        a != null && (s = a);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(t) {
    (t.target == this.editorView.dom || !this.editorView.dom.contains(t.relatedTarget)) && this.setCursor(null);
  }
}
const ll = de.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      al(this.options)
    ];
  }
}), dl = de.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new le({
        key: new be("focus"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: i } = t, o = [];
            if (!n || !r)
              return Oe.create(e, []);
            let s = 0;
            this.options.mode === "deepest" && e.descendants((l, d) => {
              if (l.isText)
                return;
              if (!(i >= d && i <= d + l.nodeSize - 1))
                return !1;
              s += 1;
            });
            let a = 0;
            return e.descendants((l, d) => {
              if (l.isText || !(i >= d && i <= d + l.nodeSize - 1))
                return !1;
              if (a += 1, this.options.mode === "deepest" && s - a > 0 || this.options.mode === "shallowest" && a > 1)
                return this.options.mode === "deepest";
              o.push(et.node(d, d + l.nodeSize, {
                class: this.options.className
              }));
            }), Oe.create(e, o);
          }
        }
      })
    ];
  }
});
class S extends xe {
  /**
  Create a gap cursor.
  */
  constructor(t) {
    super(t, t);
  }
  map(t, n) {
    let r = t.resolve(n.map(this.head));
    return S.valid(r) ? new S(r) : xe.near(r);
  }
  content() {
    return fn.empty;
  }
  eq(t) {
    return t instanceof S && t.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new S(t.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new xt(this.anchor);
  }
  /**
  @internal
  */
  static valid(t) {
    let n = t.parent;
    if (n.isTextblock || !ul(t) || !fl(t))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(t.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(t, n, r = !1) {
    e: for (; ; ) {
      if (!r && S.valid(t))
        return t;
      let i = t.pos, o = null;
      for (let s = t.depth; ; s--) {
        let a = t.node(s);
        if (n > 0 ? t.indexAfter(s) < a.childCount : t.index(s) > 0) {
          o = a.child(n > 0 ? t.indexAfter(s) : t.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += n;
        let l = t.doc.resolve(i);
        if (S.valid(l))
          return l;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !hn.isSelectable(o)) {
            t = t.doc.resolve(i + o.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += n;
        let a = t.doc.resolve(i);
        if (S.valid(a))
          return a;
      }
      return null;
    }
  }
}
S.prototype.visible = !1;
S.findFrom = S.findGapCursorFrom;
xe.jsonID("gapcursor", S);
class xt {
  constructor(t) {
    this.pos = t;
  }
  map(t) {
    return new xt(t.map(this.pos));
  }
  resolve(t) {
    let n = t.resolve(this.pos);
    return S.valid(n) ? new S(n) : xe.near(n);
  }
}
function ul(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t), r = e.node(t);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function fl(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t), r = e.node(t);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function hl() {
  return new le({
    props: {
      decorations: pl,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && S.valid(n) ? new S(n) : null;
      },
      handleClick: gl,
      handleKeyDown: ml,
      handleDOMEvents: { beforeinput: xl }
    }
  });
}
const ml = $r({
  ArrowLeft: Pe("horiz", -1),
  ArrowRight: Pe("horiz", 1),
  ArrowUp: Pe("vert", -1),
  ArrowDown: Pe("vert", 1)
});
function Pe(e, t) {
  const n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, a = t > 0 ? s.$to : s.$from, l = s.empty;
    if (s instanceof Qe) {
      if (!o.endOfTextblock(n) || a.depth == 0)
        return !1;
      l = !1, a = r.doc.resolve(t > 0 ? a.after() : a.before());
    }
    let d = S.findGapCursorFrom(a, t, l);
    return d ? (i && i(r.tr.setSelection(new S(d))), !0) : !1;
  };
}
function gl(e, t, n) {
  if (!e || !e.editable)
    return !1;
  let r = e.state.doc.resolve(t);
  if (!S.valid(r))
    return !1;
  let i = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && hn.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new S(r))), !0);
}
function xl(e, t) {
  if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof S))
    return !1;
  let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = yt.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = yt.from(r[s].createAndFill(null, i));
  let o = e.state.tr.replace(n.pos, n.pos, new fn(i, 0, 0));
  return o.setSelection(Qe.near(o.doc.resolve(n.pos + 1))), e.dispatch(o), !1;
}
function pl(e) {
  if (!(e.selection instanceof S))
    return null;
  let t = document.createElement("div");
  return t.className = "ProseMirror-gapcursor", Oe.create(e.doc, [et.widget(e.selection.head, t, { key: "gapcursor" })]);
}
const vl = de.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      hl()
    ];
  },
  extendNodeSchema(e) {
    var t;
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      allowGapCursor: (t = Ir(Dr(e, "allowGapCursor", n))) !== null && t !== void 0 ? t : null
    };
  }
}), yl = tt.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["br", mn(this.options.HTMLAttributes, e)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: e, chain: t, state: n, editor: r }) => e.first([
        () => e.exitCode(),
        () => e.command(() => {
          const { selection: i, storedMarks: o } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: a } = r.extensionManager, l = o || i.$to.parentOffset && i.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: d, dispatch: u }) => {
            if (u && l && s) {
              const f = l.filter((h) => a.includes(h.type.name));
              d.ensureMarks(f);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), bl = tt.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["p", mn(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: e }) => e.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), wl = de.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new le({
        key: new be("placeholder"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = t, i = [];
            if (!n)
              return null;
            const o = this.editor.isEmpty;
            return e.descendants((s, a) => {
              const l = r >= a && r <= a + s.nodeSize, d = !s.isLeaf && kr(s);
              if ((l || !this.options.showOnlyCurrent) && d) {
                const u = [this.options.emptyNodeClass];
                o && u.push(this.options.emptyEditorClass);
                const f = et.node(a, a + s.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: a,
                    hasAnchor: l
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), Oe.create(e, i);
          }
        }
      })
    ];
  }
}), Cl = tt.create({
  name: "text",
  group: "inline"
}), md = /* @__PURE__ */ de.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(ui.configure()), this.options.placeholder !== !1 && e.push(
      wl.configure({
        placeholder: ({ node: t, pos: n, editor: r }) => {
          var i, o, s, a, l;
          return ((i = t == null ? void 0 : t.type) == null ? void 0 : i.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "heading" ? `${Te.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "codeBlock" || ((l = t == null ? void 0 : t.type) == null ? void 0 : l.name) === "table" ? "" : r.extensionManager.extensions.some((d) => d.name === "slashCommand") ? Te.t("editor.slash") : n === 0 ? Te.t("editor.content") : Te.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      dl.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(Cl.configure()), this.options.textBubble !== !1 && e.push(hi.configure()), this.options.gapcursor !== !1 && e.push(vl.configure()), this.options.dropcursor !== !1 && e.push(
      ll.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(sl.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(bl.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(yl.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(li.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(di.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(mi.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(fi), this.options.multiColumn !== !1 && e.push(Er, Fe), e;
  }
});
export {
  md as BaseKit,
  q as BubbleMenu,
  hd as default,
  fd as useEditorState
};

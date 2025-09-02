var xf = Object.defineProperty;
var bf = (e, t, r) => t in e ? xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _r = (e, t, r) => bf(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as E, jsx as l, Fragment as de } from "react/jsx-runtime";
import * as ne from "react";
import ir, { useState as J, useRef as ot, useEffect as pe, useMemo as we, useCallback as oe, createContext as wf, useContext as Sf, useSyncExternalStore as Af, Fragment as Cf, memo as Tf, forwardRef as Ef, useId as If, useImperativeHandle as Rf, useLayoutEffect as Of } from "react";
import { c as Oa, B as St, N as Pa, R as Na, g as ti, u as Pf, E as Nf } from "./dom-dataset-CHDbKz5J.js";
import { Slot as fu } from "@radix-ui/react-slot";
import { m as Te, B as kf, q as Xr, V as ra, u as Se, r as Mf, I as Jr, i as Zr, h as hu, C as Lf, E as $f } from "./index-Tj3Ci7xM.js";
import * as pu from "@radix-ui/react-separator";
import * as ke from "@radix-ui/react-toast";
import { Loader2 as _f, WrapText as Df, PencilRuler as Bf, FlipHorizontal as jf, FlipVertical as zf, CropIcon as Hf, ChevronUp as qf, Paperclip as Ff, Eye as Uf, Settings as Wf, ZoomOut as Gf, ZoomIn as Vf, BookMarked as Kf, Sigma as Yf, SmilePlusIcon as Xf, Replace as Ts, SmilePlus as Jf, Frame as Zf, Columns2 as Es, PanelRight as Qf, PanelLeft as eh, Clipboard as th, Copy as rh, GripVertical as nh, Plus as mu, Columns4 as ih, Columns3 as oh, Heading6 as ah, Heading5 as sh, Heading4 as ch, Heading3 as lh, Heading2 as uh, Heading1 as dh, ChevronsUpDown as fh, Trash as hh, Trash2 as ph, TableCellsSplit as mh, TableCellsMerge as gh, BetweenVerticalEnd as vh, BetweenVerticalStart as yh, BetweenHorizonalStart as xh, BetweenHorizonalEnd as bh, Unlink as wh, Pencil as Sh, Sparkles as Ah, Table as Ch, Minimize as Th, Maximize as Eh, Video as Ih, ImageUp as Rh, Link as Oh, ListTodo as Ph, ListOrdered as Nh, List as kh, IndentDecrease as Mh, IndentIncrease as Lh, Type as $h, CodeXml as _h, Code as Dh, Superscript as Bh, Subscript as jh, ChevronDown as zh, Undo2 as Hh, Redo2 as qh, PaintRoller as Fh, Eraser as Uh, Minus as Wh, Strikethrough as Gh, Quote as Vh, Underline as Kh, Italic as Yh, LoaderCircle as Xh, Bold as Jh, X as gu, ChevronRight as Zh, Check as vu, Circle as Qh } from "lucide-react";
import * as Cr from "@radix-ui/react-tooltip";
import * as yu from "@radix-ui/react-toggle";
import { TextAlignRightIcon as ep, TextAlignLeftIcon as tp, TextAlignJustifyIcon as rp, TextAlignCenterIcon as np } from "@radix-ui/react-icons";
import * as pr from "@radix-ui/react-popover";
import * as xu from "@radix-ui/react-label";
import * as $e from "@radix-ui/react-dialog";
import { H as Tr, I as ip, z as op, u as ap, a as Wt, P as Ot, T as Gt, A as sp, J as cp, K as lp, M as up, c as dp, m as at, L as fp, O as hp, Q as pp, R as mp, U as gp, V as vp, N as Er, n as bu, b as yp, D as xp, W as Qr, X as bp, E as wp } from "./index-BWx1Mchx.js";
import { Resizable as Sp } from "re-resizable";
import Ap from "react-image-crop";
import * as Pt from "@radix-ui/react-tabs";
import * as na from "@radix-ui/react-checkbox";
import Cp, { sticky as Tp } from "tippy.js";
import { HexColorPicker as Ep } from "react-colorful";
import * as ia from "@radix-ui/react-switch";
import * as fe from "@radix-ui/react-dropdown-menu";
var wu = typeof global == "object" && global && global.Object === Object && global, Ip = typeof self == "object" && self && self.Object === Object && self, Ke = wu || Ip || Function("return this")(), Ge = Ke.Symbol, Su = Object.prototype, Rp = Su.hasOwnProperty, Op = Su.toString, Qt = Ge ? Ge.toStringTag : void 0;
function Pp(e) {
  var t = Rp.call(e, Qt), r = e[Qt];
  try {
    e[Qt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Op.call(e);
  return n && (t ? e[Qt] = r : delete e[Qt]), i;
}
var Np = Object.prototype, kp = Np.toString;
function Mp(e) {
  return kp.call(e);
}
var Lp = "[object Null]", $p = "[object Undefined]", Is = Ge ? Ge.toStringTag : void 0;
function At(e) {
  return e == null ? e === void 0 ? $p : Lp : Is && Is in Object(e) ? Pp(e) : Mp(e);
}
function st(e) {
  return e != null && typeof e == "object";
}
var _p = "[object Symbol]";
function Mn(e) {
  return typeof e == "symbol" || st(e) && At(e) == _p;
}
function Au(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ve = Array.isArray, Rs = Ge ? Ge.prototype : void 0, Os = Rs ? Rs.toString : void 0;
function en(e) {
  if (typeof e == "string")
    return e;
  if (Ve(e))
    return Au(e, en) + "";
  if (Mn(e))
    return Os ? Os.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Dp = /\s/;
function Bp(e) {
  for (var t = e.length; t-- && Dp.test(e.charAt(t)); )
    ;
  return t;
}
var jp = /^\s+/;
function zp(e) {
  return e && e.slice(0, Bp(e) + 1).replace(jp, "");
}
function wt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ps = NaN, Hp = /^[-+]0x[0-9a-f]+$/i, qp = /^0b[01]+$/i, Fp = /^0o[0-7]+$/i, Up = parseInt;
function Ht(e) {
  if (typeof e == "number")
    return e;
  if (Mn(e))
    return Ps;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zp(e);
  var r = qp.test(e);
  return r || Fp.test(e) ? Up(e.slice(2), r ? 2 : 8) : Hp.test(e) ? Ps : +e;
}
var Ns = 1 / 0, Wp = 17976931348623157e292;
function Gp(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ht(e), e === Ns || e === -Ns) {
    var t = e < 0 ? -1 : 1;
    return t * Wp;
  }
  return e === e ? e : 0;
}
function Vp(e) {
  var t = Gp(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function ka(e) {
  return e;
}
var Kp = "[object AsyncFunction]", Yp = "[object Function]", Xp = "[object GeneratorFunction]", Jp = "[object Proxy]";
function Cu(e) {
  if (!wt(e))
    return !1;
  var t = At(e);
  return t == Yp || t == Xp || t == Kp || t == Jp;
}
var ri = Ke["__core-js_shared__"], ks = function() {
  var e = /[^.]+$/.exec(ri && ri.keys && ri.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zp(e) {
  return !!ks && ks in e;
}
var Qp = Function.prototype, em = Qp.toString;
function Nt(e) {
  if (e != null) {
    try {
      return em.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tm = /[\\^$.*+?()[\]{}|]/g, rm = /^\[object .+?Constructor\]$/, nm = Function.prototype, im = Object.prototype, om = nm.toString, am = im.hasOwnProperty, sm = RegExp(
  "^" + om.call(am).replace(tm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cm(e) {
  if (!wt(e) || Zp(e))
    return !1;
  var t = Cu(e) ? sm : rm;
  return t.test(Nt(e));
}
function lm(e, t) {
  return e == null ? void 0 : e[t];
}
function kt(e, t) {
  var r = lm(e, t);
  return cm(r) ? r : void 0;
}
var oa = kt(Ke, "WeakMap");
function um(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var dm = 800, fm = 16, hm = Date.now;
function pm(e) {
  var t = 0, r = 0;
  return function() {
    var n = hm(), i = fm - (n - r);
    if (r = n, i > 0) {
      if (++t >= dm)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function mm(e) {
  return function() {
    return e;
  };
}
var Ms = function() {
  try {
    var e = kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), gm = Ms ? function(e, t) {
  return Ms(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mm(t),
    writable: !0
  });
} : ka, vm = pm(gm);
function ym(e, t, r, n) {
  for (var i = e.length, o = r + -1; ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function xm(e) {
  return e !== e;
}
function bm(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function wm(e, t, r) {
  return t === t ? bm(e, t, r) : ym(e, xm, r);
}
function Sm(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && wm(e, t, 0) > -1;
}
var Am = 9007199254740991, Cm = /^(?:0|[1-9]\d*)$/;
function Tu(e, t) {
  var r = typeof e;
  return t = t ?? Am, !!t && (r == "number" || r != "symbol" && Cm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Eu(e, t) {
  return e === t || e !== e && t !== t;
}
var Ls = Math.max;
function Tm(e, t, r) {
  return t = Ls(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = Ls(n.length - t, 0), a = Array(o); ++i < o; )
      a[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(a), um(e, this, s);
  };
}
function Em(e, t) {
  return vm(Tm(e, t, ka), e + "");
}
var Im = 9007199254740991;
function Ma(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Im;
}
function Iu(e) {
  return e != null && Ma(e.length) && !Cu(e);
}
var Rm = Object.prototype;
function Om(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Rm;
  return e === r;
}
function Pm(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Nm = "[object Arguments]";
function $s(e) {
  return st(e) && At(e) == Nm;
}
var Ru = Object.prototype, km = Ru.hasOwnProperty, Mm = Ru.propertyIsEnumerable, La = $s(/* @__PURE__ */ function() {
  return arguments;
}()) ? $s : function(e) {
  return st(e) && km.call(e, "callee") && !Mm.call(e, "callee");
};
function Lm() {
  return !1;
}
var Ou = typeof exports == "object" && exports && !exports.nodeType && exports, _s = Ou && typeof module == "object" && module && !module.nodeType && module, $m = _s && _s.exports === Ou, Ds = $m ? Ke.Buffer : void 0, _m = Ds ? Ds.isBuffer : void 0, aa = _m || Lm, Dm = "[object Arguments]", Bm = "[object Array]", jm = "[object Boolean]", zm = "[object Date]", Hm = "[object Error]", qm = "[object Function]", Fm = "[object Map]", Um = "[object Number]", Wm = "[object Object]", Gm = "[object RegExp]", Vm = "[object Set]", Km = "[object String]", Ym = "[object WeakMap]", Xm = "[object ArrayBuffer]", Jm = "[object DataView]", Zm = "[object Float32Array]", Qm = "[object Float64Array]", eg = "[object Int8Array]", tg = "[object Int16Array]", rg = "[object Int32Array]", ng = "[object Uint8Array]", ig = "[object Uint8ClampedArray]", og = "[object Uint16Array]", ag = "[object Uint32Array]", le = {};
le[Zm] = le[Qm] = le[eg] = le[tg] = le[rg] = le[ng] = le[ig] = le[og] = le[ag] = !0;
le[Dm] = le[Bm] = le[Xm] = le[jm] = le[Jm] = le[zm] = le[Hm] = le[qm] = le[Fm] = le[Um] = le[Wm] = le[Gm] = le[Vm] = le[Km] = le[Ym] = !1;
function sg(e) {
  return st(e) && Ma(e.length) && !!le[At(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var Pu = typeof exports == "object" && exports && !exports.nodeType && exports, ar = Pu && typeof module == "object" && module && !module.nodeType && module, cg = ar && ar.exports === Pu, ni = cg && wu.process, tn = function() {
  try {
    var e = ar && ar.require && ar.require("util").types;
    return e || ni && ni.binding && ni.binding("util");
  } catch {
  }
}(), Bs = tn && tn.isTypedArray, Nu = Bs ? $a(Bs) : sg, lg = Object.prototype, ug = lg.hasOwnProperty;
function dg(e, t) {
  var r = Ve(e), n = !r && La(e), i = !r && !n && aa(e), o = !r && !n && !i && Nu(e), a = r || n || i || o, s = a ? Pm(e.length, String) : [], c = s.length;
  for (var u in e)
    ug.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Tu(u, c))) && s.push(u);
  return s;
}
function fg(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var hg = fg(Object.keys, Object), pg = Object.prototype, mg = pg.hasOwnProperty;
function gg(e) {
  if (!Om(e))
    return hg(e);
  var t = [];
  for (var r in Object(e))
    mg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ku(e) {
  return Iu(e) ? dg(e) : gg(e);
}
var vg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yg = /^\w*$/;
function _a(e, t) {
  if (Ve(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Mn(e) ? !0 : yg.test(e) || !vg.test(e) || t != null && e in Object(t);
}
var mr = kt(Object, "create");
function xg() {
  this.__data__ = mr ? mr(null) : {}, this.size = 0;
}
function bg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wg = "__lodash_hash_undefined__", Sg = Object.prototype, Ag = Sg.hasOwnProperty;
function Cg(e) {
  var t = this.__data__;
  if (mr) {
    var r = t[e];
    return r === wg ? void 0 : r;
  }
  return Ag.call(t, e) ? t[e] : void 0;
}
var Tg = Object.prototype, Eg = Tg.hasOwnProperty;
function Ig(e) {
  var t = this.__data__;
  return mr ? t[e] !== void 0 : Eg.call(t, e);
}
var Rg = "__lodash_hash_undefined__";
function Og(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = mr && t === void 0 ? Rg : t, this;
}
function It(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
It.prototype.clear = xg;
It.prototype.delete = bg;
It.prototype.get = Cg;
It.prototype.has = Ig;
It.prototype.set = Og;
function Pg() {
  this.__data__ = [], this.size = 0;
}
function Ln(e, t) {
  for (var r = e.length; r--; )
    if (Eu(e[r][0], t))
      return r;
  return -1;
}
var Ng = Array.prototype, kg = Ng.splice;
function Mg(e) {
  var t = this.__data__, r = Ln(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : kg.call(t, r, 1), --this.size, !0;
}
function Lg(e) {
  var t = this.__data__, r = Ln(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function $g(e) {
  return Ln(this.__data__, e) > -1;
}
function _g(e, t) {
  var r = this.__data__, n = Ln(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ct(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ct.prototype.clear = Pg;
ct.prototype.delete = Mg;
ct.prototype.get = Lg;
ct.prototype.has = $g;
ct.prototype.set = _g;
var gr = kt(Ke, "Map");
function Dg() {
  this.size = 0, this.__data__ = {
    hash: new It(),
    map: new (gr || ct)(),
    string: new It()
  };
}
function Bg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function $n(e, t) {
  var r = e.__data__;
  return Bg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function jg(e) {
  var t = $n(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function zg(e) {
  return $n(this, e).get(e);
}
function Hg(e) {
  return $n(this, e).has(e);
}
function qg(e, t) {
  var r = $n(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function lt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
lt.prototype.clear = Dg;
lt.prototype.delete = jg;
lt.prototype.get = zg;
lt.prototype.has = Hg;
lt.prototype.set = qg;
var Fg = "Expected a function";
function Da(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fg);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Da.Cache || lt)(), r;
}
Da.Cache = lt;
var Ug = 500;
function Wg(e) {
  var t = Da(e, function(n) {
    return r.size === Ug && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Gg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vg = /\\(\\)?/g, Kg = Wg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gg, function(r, n, i, o) {
    t.push(i ? o.replace(Vg, "$1") : n || r);
  }), t;
});
function sa(e) {
  return e == null ? "" : en(e);
}
function Mu(e, t) {
  return Ve(e) ? e : _a(e, t) ? [e] : Kg(sa(e));
}
function _n(e) {
  if (typeof e == "string" || Mn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Lu(e, t) {
  t = Mu(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[_n(t[r++])];
  return r && r == n ? e : void 0;
}
function Yg(e, t, r) {
  var n = e == null ? void 0 : Lu(e, t);
  return n === void 0 ? r : n;
}
function $u(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var js = Ge ? Ge.isConcatSpreadable : void 0;
function Xg(e) {
  return Ve(e) || La(e) || !!(js && e && e[js]);
}
function Jg(e, t, r, n, i) {
  var o = -1, a = e.length;
  for (r || (r = Xg), i || (i = []); ++o < a; ) {
    var s = e[o];
    r(s) && $u(i, s);
  }
  return i;
}
function Zg(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function Qg(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Zg(e, t, r);
}
var e0 = "\\ud800-\\udfff", t0 = "\\u0300-\\u036f", r0 = "\\ufe20-\\ufe2f", n0 = "\\u20d0-\\u20ff", i0 = t0 + r0 + n0, o0 = "\\ufe0e\\ufe0f", a0 = "\\u200d", s0 = RegExp("[" + a0 + e0 + i0 + o0 + "]");
function Ba(e) {
  return s0.test(e);
}
function c0(e) {
  return e.split("");
}
var _u = "\\ud800-\\udfff", l0 = "\\u0300-\\u036f", u0 = "\\ufe20-\\ufe2f", d0 = "\\u20d0-\\u20ff", f0 = l0 + u0 + d0, h0 = "\\ufe0e\\ufe0f", p0 = "[" + _u + "]", ca = "[" + f0 + "]", la = "\\ud83c[\\udffb-\\udfff]", m0 = "(?:" + ca + "|" + la + ")", Du = "[^" + _u + "]", Bu = "(?:\\ud83c[\\udde6-\\uddff]){2}", ju = "[\\ud800-\\udbff][\\udc00-\\udfff]", g0 = "\\u200d", zu = m0 + "?", Hu = "[" + h0 + "]?", v0 = "(?:" + g0 + "(?:" + [Du, Bu, ju].join("|") + ")" + Hu + zu + ")*", y0 = Hu + zu + v0, x0 = "(?:" + [Du + ca + "?", ca, Bu, ju, p0].join("|") + ")", b0 = RegExp(la + "(?=" + la + ")|" + x0 + y0, "g");
function w0(e) {
  return e.match(b0) || [];
}
function S0(e) {
  return Ba(e) ? w0(e) : c0(e);
}
function A0(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function qu(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Ht(r), r = r === r ? r : 0), t !== void 0 && (t = Ht(t), t = t === t ? t : 0), A0(Ht(e), t, r);
}
function C0() {
  this.__data__ = new ct(), this.size = 0;
}
function T0(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function E0(e) {
  return this.__data__.get(e);
}
function I0(e) {
  return this.__data__.has(e);
}
var R0 = 200;
function O0(e, t) {
  var r = this.__data__;
  if (r instanceof ct) {
    var n = r.__data__;
    if (!gr || n.length < R0 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new lt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function nt(e) {
  var t = this.__data__ = new ct(e);
  this.size = t.size;
}
nt.prototype.clear = C0;
nt.prototype.delete = T0;
nt.prototype.get = E0;
nt.prototype.has = I0;
nt.prototype.set = O0;
function P0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function N0() {
  return [];
}
var k0 = Object.prototype, M0 = k0.propertyIsEnumerable, zs = Object.getOwnPropertySymbols, L0 = zs ? function(e) {
  return e == null ? [] : (e = Object(e), P0(zs(e), function(t) {
    return M0.call(e, t);
  }));
} : N0;
function $0(e, t, r) {
  var n = t(e);
  return Ve(e) ? n : $u(n, r(e));
}
function Hs(e) {
  return $0(e, ku, L0);
}
var ua = kt(Ke, "DataView"), da = kt(Ke, "Promise"), fa = kt(Ke, "Set"), qs = "[object Map]", _0 = "[object Object]", Fs = "[object Promise]", Us = "[object Set]", Ws = "[object WeakMap]", Gs = "[object DataView]", D0 = Nt(ua), B0 = Nt(gr), j0 = Nt(da), z0 = Nt(fa), H0 = Nt(oa), yt = At;
(ua && yt(new ua(new ArrayBuffer(1))) != Gs || gr && yt(new gr()) != qs || da && yt(da.resolve()) != Fs || fa && yt(new fa()) != Us || oa && yt(new oa()) != Ws) && (yt = function(e) {
  var t = At(e), r = t == _0 ? e.constructor : void 0, n = r ? Nt(r) : "";
  if (n)
    switch (n) {
      case D0:
        return Gs;
      case B0:
        return qs;
      case j0:
        return Fs;
      case z0:
        return Us;
      case H0:
        return Ws;
    }
  return t;
});
var Vs = Ke.Uint8Array, q0 = "__lodash_hash_undefined__";
function F0(e) {
  return this.__data__.set(e, q0), this;
}
function U0(e) {
  return this.__data__.has(e);
}
function vr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new lt(); ++t < r; )
    this.add(e[t]);
}
vr.prototype.add = vr.prototype.push = F0;
vr.prototype.has = U0;
function W0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Fu(e, t) {
  return e.has(t);
}
var G0 = 1, V0 = 2;
function Uu(e, t, r, n, i, o) {
  var a = r & G0, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = o.get(e), d = o.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, h = !0, p = r & V0 ? new vr() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var m = e[f], v = t[f];
    if (n)
      var g = a ? n(v, m, f, t, e, o) : n(m, v, f, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!W0(t, function(y, w) {
        if (!Fu(p, w) && (m === y || i(m, y, r, n, o)))
          return p.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === v || i(m, v, r, n, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), h;
}
function K0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Y0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var X0 = 1, J0 = 2, Z0 = "[object Boolean]", Q0 = "[object Date]", e1 = "[object Error]", t1 = "[object Map]", r1 = "[object Number]", n1 = "[object RegExp]", i1 = "[object Set]", o1 = "[object String]", a1 = "[object Symbol]", s1 = "[object ArrayBuffer]", c1 = "[object DataView]", Ks = Ge ? Ge.prototype : void 0, ii = Ks ? Ks.valueOf : void 0;
function l1(e, t, r, n, i, o, a) {
  switch (r) {
    case c1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case s1:
      return !(e.byteLength != t.byteLength || !o(new Vs(e), new Vs(t)));
    case Z0:
    case Q0:
    case r1:
      return Eu(+e, +t);
    case e1:
      return e.name == t.name && e.message == t.message;
    case n1:
    case o1:
      return e == t + "";
    case t1:
      var s = K0;
    case i1:
      var c = n & X0;
      if (s || (s = Y0), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= J0, a.set(e, t);
      var d = Uu(s(e), s(t), n, i, o, a);
      return a.delete(e), d;
    case a1:
      if (ii)
        return ii.call(e) == ii.call(t);
  }
  return !1;
}
var u1 = 1, d1 = Object.prototype, f1 = d1.hasOwnProperty;
function h1(e, t, r, n, i, o) {
  var a = r & u1, s = Hs(e), c = s.length, u = Hs(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(a ? h in t : f1.call(t, h)))
      return !1;
  }
  var p = o.get(e), m = o.get(t);
  if (p && m)
    return p == t && m == e;
  var v = !0;
  o.set(e, t), o.set(t, e);
  for (var g = a; ++f < c; ) {
    h = s[f];
    var y = e[h], w = t[h];
    if (n)
      var A = a ? n(w, y, h, t, e, o) : n(y, w, h, e, t, o);
    if (!(A === void 0 ? y === w || i(y, w, r, n, o) : A)) {
      v = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (v && !g) {
    var I = e.constructor, T = t.constructor;
    I != T && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof T == "function" && T instanceof T) && (v = !1);
  }
  return o.delete(e), o.delete(t), v;
}
var p1 = 1, Ys = "[object Arguments]", Xs = "[object Array]", Dr = "[object Object]", m1 = Object.prototype, Js = m1.hasOwnProperty;
function g1(e, t, r, n, i, o) {
  var a = Ve(e), s = Ve(t), c = a ? Xs : yt(e), u = s ? Xs : yt(t);
  c = c == Ys ? Dr : c, u = u == Ys ? Dr : u;
  var d = c == Dr, f = u == Dr, h = c == u;
  if (h && aa(e)) {
    if (!aa(t))
      return !1;
    a = !0, d = !1;
  }
  if (h && !d)
    return o || (o = new nt()), a || Nu(e) ? Uu(e, t, r, n, i, o) : l1(e, t, c, r, n, i, o);
  if (!(r & p1)) {
    var p = d && Js.call(e, "__wrapped__"), m = f && Js.call(t, "__wrapped__");
    if (p || m) {
      var v = p ? e.value() : e, g = m ? t.value() : t;
      return o || (o = new nt()), i(v, g, r, n, o);
    }
  }
  return h ? (o || (o = new nt()), h1(e, t, r, n, i, o)) : !1;
}
function ja(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !st(e) && !st(t) ? e !== e && t !== t : g1(e, t, r, n, ja, i);
}
var v1 = 1, y1 = 2;
function x1(e, t, r, n) {
  var i = r.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = r[i];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = r[i];
    var s = a[0], c = e[s], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var d = new nt(), f;
      if (!(f === void 0 ? ja(u, c, v1 | y1, n, d) : f))
        return !1;
    }
  }
  return !0;
}
function Wu(e) {
  return e === e && !wt(e);
}
function b1(e) {
  for (var t = ku(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Wu(i)];
  }
  return t;
}
function Gu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function w1(e) {
  var t = b1(e);
  return t.length == 1 && t[0][2] ? Gu(t[0][0], t[0][1]) : function(r) {
    return r === e || x1(r, e, t);
  };
}
function S1(e, t) {
  return e != null && t in Object(e);
}
function A1(e, t, r) {
  t = Mu(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = _n(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Ma(i) && Tu(a, i) && (Ve(e) || La(e)));
}
function C1(e, t) {
  return e != null && A1(e, t, S1);
}
var T1 = 1, E1 = 2;
function I1(e, t) {
  return _a(e) && Wu(t) ? Gu(_n(e), t) : function(r) {
    var n = Yg(r, e);
    return n === void 0 && n === t ? C1(r, e) : ja(t, n, T1 | E1);
  };
}
function Vu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function R1(e) {
  return function(t) {
    return Lu(t, e);
  };
}
function O1(e) {
  return _a(e) ? Vu(_n(e)) : R1(e);
}
function P1(e) {
  return typeof e == "function" ? e : e == null ? ka : typeof e == "object" ? Ve(e) ? I1(e[0], e[1]) : w1(e) : O1(e);
}
var oi = function() {
  return Ke.Date.now();
}, N1 = "Expected a function", k1 = Math.max, M1 = Math.min;
function Dn(e, t, r) {
  var n, i, o, a, s, c, u = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(N1);
  t = Ht(t) || 0, wt(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? k1(Ht(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function p(M) {
    var L = n, k = i;
    return n = i = void 0, u = M, a = e.apply(k, L), a;
  }
  function m(M) {
    return u = M, s = setTimeout(y, t), d ? p(M) : a;
  }
  function v(M) {
    var L = M - c, k = M - u, N = t - L;
    return f ? M1(N, o - k) : N;
  }
  function g(M) {
    var L = M - c, k = M - u;
    return c === void 0 || L >= t || L < 0 || f && k >= o;
  }
  function y() {
    var M = oi();
    if (g(M))
      return w(M);
    s = setTimeout(y, v(M));
  }
  function w(M) {
    return s = void 0, h && n ? p(M) : (n = i = void 0, a);
  }
  function A() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function I() {
    return s === void 0 ? a : w(oi());
  }
  function T() {
    var M = oi(), L = g(M);
    if (n = arguments, i = this, c = M, L) {
      if (s === void 0)
        return m(c);
      if (f)
        return clearTimeout(s), s = setTimeout(y, t), p(c);
    }
    return s === void 0 && (s = setTimeout(y, t)), a;
  }
  return T.cancel = A, T.flush = I, T;
}
function ai(e) {
  return st(e) && Iu(e);
}
var L1 = 200;
function $1(e, t, r, n) {
  var i = -1, o = Sm, a = !0, s = e.length, c = [], u = t.length;
  if (!s)
    return c;
  r && (t = Au(t, $a(r))), t.length >= L1 && (o = Fu, a = !1, t = new vr(t));
  e:
    for (; ++i < s; ) {
      var d = e[i], f = r == null ? d : r(d);
      if (d = d !== 0 ? d : 0, a && f === f) {
        for (var h = u; h--; )
          if (t[h] === f)
            continue e;
        c.push(d);
      } else o(t, f, n) || c.push(d);
    }
  return c;
}
function _1(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var D1 = Em(function(e, t) {
  var r = _1(t);
  return ai(r) && (r = void 0), ai(e) ? $1(e, Jg(t, 1, ai), P1(r)) : [];
}), B1 = "[object Number]";
function rn(e) {
  return typeof e == "number" || st(e) && At(e) == B1;
}
var j1 = "[object RegExp]";
function z1(e) {
  return st(e) && At(e) == j1;
}
var Zs = tn && tn.isRegExp, H1 = Zs ? $a(Zs) : z1, q1 = Vu("length"), Ku = "\\ud800-\\udfff", F1 = "\\u0300-\\u036f", U1 = "\\ufe20-\\ufe2f", W1 = "\\u20d0-\\u20ff", G1 = F1 + U1 + W1, V1 = "\\ufe0e\\ufe0f", K1 = "[" + Ku + "]", ha = "[" + G1 + "]", pa = "\\ud83c[\\udffb-\\udfff]", Y1 = "(?:" + ha + "|" + pa + ")", Yu = "[^" + Ku + "]", Xu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ju = "[\\ud800-\\udbff][\\udc00-\\udfff]", X1 = "\\u200d", Zu = Y1 + "?", Qu = "[" + V1 + "]?", J1 = "(?:" + X1 + "(?:" + [Yu, Xu, Ju].join("|") + ")" + Qu + Zu + ")*", Z1 = Qu + Zu + J1, Q1 = "(?:" + [Yu + ha + "?", ha, Xu, Ju, K1].join("|") + ")", Qs = RegExp(pa + "(?=" + pa + ")|" + Q1 + Z1, "g");
function ev(e) {
  for (var t = Qs.lastIndex = 0; Qs.test(e); )
    ++t;
  return t;
}
function tv(e) {
  return Ba(e) ? ev(e) : q1(e);
}
var rv = "Expected a function";
function yr(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(rv);
  return wt(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Dn(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var nv = 30, iv = "...", ov = /\w*$/;
function av(e, t) {
  var r = nv, n = iv;
  if (wt(t)) {
    var i = "separator" in t ? t.separator : i;
    r = "length" in t ? Vp(t.length) : r, n = "omission" in t ? en(t.omission) : n;
  }
  e = sa(e);
  var o = e.length;
  if (Ba(e)) {
    var a = S0(e);
    o = a.length;
  }
  if (r >= o)
    return e;
  var s = r - tv(n);
  if (s < 1)
    return n;
  var c = a ? Qg(a, 0, s).join("") : e.slice(0, s);
  if (i === void 0)
    return c + n;
  if (a && (s += c.length - s), H1(i)) {
    if (e.slice(s).search(i)) {
      var u, d = c;
      for (i.global || (i = RegExp(i.source, sa(ov.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(d); )
        var f = u.index;
      c = c.slice(0, f === void 0 ? s : f);
    }
  } else if (e.indexOf(en(i), s) != s) {
    var h = c.lastIndexOf(i);
    h > -1 && (c = c.slice(0, h));
  }
  return c + n;
}
const za = "-", sv = (e) => {
  const t = lv(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(za);
      return s[0] === "" && s.length !== 1 && s.shift(), ed(s, t) || cv(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, ed = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? ed(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(za);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}, ec = /^\[(.+)\]$/, cv = (e) => {
  if (ec.test(e)) {
    const t = ec.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, lv = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return dv(Object.entries(e.classGroups), r).forEach(([o, a]) => {
    ma(a, n, o, t);
  }), n;
}, ma = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : tc(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (uv(i)) {
        ma(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      ma(a, tc(t, o), r, n);
    });
  });
}, tc = (e, t) => {
  let r = e;
  return t.split(za).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, uv = (e) => e.isThemeGetter, dv = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
  return [r, i];
}) : e, fv = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (o, a) => {
    r.set(o, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = r.get(o);
      if (a !== void 0)
        return a;
      if ((a = n.get(o)) !== void 0)
        return i(o, a), a;
    },
    set(o, a) {
      r.has(o) ? r.set(o, a) : i(o, a);
    }
  };
}, td = "!", hv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], o = t.length, a = (s) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let g = 0; g < s.length; g++) {
      let y = s[g];
      if (u === 0) {
        if (y === i && (n || s.slice(g, g + o) === t)) {
          c.push(s.slice(d, g)), d = g + o;
          continue;
        }
        if (y === "/") {
          f = g;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const h = c.length === 0 ? s : s.substring(d), p = h.startsWith(td), m = p ? h.substring(1) : h, v = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, pv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, mv = (e) => ({
  cache: fv(e.cacheSize),
  parseClassName: hv(e),
  ...sv(e)
}), gv = /\s+/, vv = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, o = [], a = e.trim().split(gv);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = r(u);
    let m = !!p, v = n(m ? h.substring(0, p) : h);
    if (!v) {
      if (!m) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = n(h), !v) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const g = pv(d).join(":"), y = f ? g + td : g, w = y + v;
    if (o.includes(w))
      continue;
    o.push(w);
    const A = i(v, m);
    for (let I = 0; I < A.length; ++I) {
      const T = A[I];
      o.push(y + T);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function yv() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = rd(t)) && (n && (n += " "), n += r);
  return n;
}
const rd = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = rd(e[n])) && (r && (r += " "), r += t);
  return r;
};
function xv(e, ...t) {
  let r, n, i, o = a;
  function a(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = mv(u), n = r.cache.get, i = r.cache.set, o = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const d = vv(c, r);
    return i(c, d), d;
  }
  return function() {
    return o(yv.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, nd = /^\[(?:([a-z-]+):)?(.+)\]$/i, bv = /^\d+\/\d+$/, wv = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Av = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Tv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ev = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qe = (e) => qt(e) || wv.has(e) || bv.test(e), mt = (e) => Vt(e, "length", Lv), qt = (e) => !!e && !Number.isNaN(Number(e)), si = (e) => Vt(e, "number", qt), er = (e) => !!e && Number.isInteger(Number(e)), Iv = (e) => e.endsWith("%") && qt(e.slice(0, -1)), V = (e) => nd.test(e), gt = (e) => Sv.test(e), Rv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ov = (e) => Vt(e, Rv, id), Pv = (e) => Vt(e, "position", id), Nv = /* @__PURE__ */ new Set(["image", "url"]), kv = (e) => Vt(e, Nv, _v), Mv = (e) => Vt(e, "", $v), tr = () => !0, Vt = (e, t, r) => {
  const n = nd.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Lv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Av.test(e) && !Cv.test(e)
), id = () => !1, $v = (e) => Tv.test(e), _v = (e) => Ev.test(e), Dv = () => {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), i = ce("borderColor"), o = ce("borderRadius"), a = ce("borderSpacing"), s = ce("borderWidth"), c = ce("contrast"), u = ce("grayscale"), d = ce("hueRotate"), f = ce("invert"), h = ce("gap"), p = ce("gradientColorStops"), m = ce("gradientColorStopPositions"), v = ce("inset"), g = ce("margin"), y = ce("opacity"), w = ce("padding"), A = ce("saturate"), I = ce("scale"), T = ce("sepia"), M = ce("skew"), L = ce("space"), k = ce("translate"), N = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", V, t], S = () => [V, t], P = () => ["", Qe, mt], D = () => ["auto", qt, V], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], te = () => ["", "0", V], ye = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [qt, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tr],
      spacing: [Qe, mt],
      blur: ["none", "", gt, V],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gt, V],
      borderSpacing: S(),
      borderWidth: P(),
      contrast: me(),
      grayscale: te(),
      hueRotate: me(),
      invert: te(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Iv, mt],
      inset: C(),
      margin: C(),
      opacity: me(),
      padding: S(),
      saturate: me(),
      scale: me(),
      sepia: te(),
      skew: me(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", V]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [gt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ye()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ye()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), V]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", er, V]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: C()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: te()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: te()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", er, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", er, V]
        }, V]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [er, V]
        }, V]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Q()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Q(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Q(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [L]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [L]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [V, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [gt]
        }, gt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [V, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gt, mt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", si]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qt, si]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, V]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", V]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe, mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qe, V]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", V]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Pv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ov]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Qe, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe, mt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: P()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe, mt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", gt, Mv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", gt, V]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", V]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [er, V]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", V]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Qe, mt, si]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Bv = /* @__PURE__ */ xv(Dv);
function ee(...e) {
  return Bv(Oa(e));
}
let ci;
function li() {
  return ci === void 0 && (ci = navigator.platform.includes("Mac")), ci;
}
function jv(e) {
  return `${e}`.toLowerCase() === "mod" ? li() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? li() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? li() ? "⇧" : "Shift" : e;
}
function zv(e) {
  return e.map(jv).join(" ");
}
const F = ir.forwardRef(
  (e, t) => {
    const {
      icon: r = void 0,
      // title = undefined,
      tooltip: n = void 0,
      disabled: i = !1,
      customClass: o = "",
      // color = undefined,
      loading: a = void 0,
      shortcutKeys: s = void 0,
      tooltipOptions: c = {},
      action: u = void 0,
      isActive: d = void 0,
      children: f,
      asChild: h = !1,
      upload: p = !1,
      initialDisplayedColor: m = void 0,
      ...v
    } = e, g = sd[r];
    return /* @__PURE__ */ E(Bd, { children: [
      /* @__PURE__ */ l(jd, { asChild: !0, children: /* @__PURE__ */ E(
        h ? fu : Dd,
        {
          "data-state": d != null && d() ? "on" : "off",
          onClick: u,
          ref: t,
          size: "sm",
          className: ee("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: i,
          ...v,
          children: [
            g && /* @__PURE__ */ l(g, { className: "richtext-size-4" }),
            f
          ]
        }
      ) }),
      n && /* @__PURE__ */ l(ns, { ...c, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ l("div", { children: n }),
        !!(s != null && s.length) && /* @__PURE__ */ l("span", { children: zv(s) })
      ] }) })
    ] });
  }
);
function Hv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImage({ width: Xr[n] }),
      isActive: () => e.isActive("image", { width: Xr[n] })
    }
  }));
}
function qv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateImageGif({ width: Xr[n] }),
      isActive: () => e.isActive("image", { width: Xr[n] })
    }
  }));
}
function Fv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImage) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Uv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageGif) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Wv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageMermaid) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Gv(e) {
  const t = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var i, o;
        return (o = (i = e.commands) == null ? void 0 : i.setAlignImageDrawer) == null ? void 0 : o.call(i, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Vv(e) {
  return [
    { type: "flex-start", icon: "AlignLeft", tooltip: "Align left" },
    { type: "center", icon: "AlignCenter", tooltip: "Align center" },
    { type: "flex-end", icon: "AlignRight", tooltip: "Align right" }
  ].map((r) => ({
    type: `video-align-${r.type}`,
    component: F,
    componentProps: {
      tooltip: r.tooltip,
      icon: r.icon,
      action: () => e.commands.updateVideo({ align: r.type }),
      isActive: () => e.getAttributes("video").align === r.type
    }
  }));
}
function Kv(e) {
  const t = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, i) => ({
    type: `video-${n}`,
    component: F,
    componentProps: {
      tooltip: Te.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateVideo({ width: ra[n] }),
      isActive: () => e.isActive("video", { width: ra[n] })
    }
  }));
}
function Yv(e) {
  return [
    {
      type: "flipX",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const t = e.getAttributes("image"), { flipX: r } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !r
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const t = e.getAttributes("image"), { flipY: r } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !r
          }).run();
        }
      }
    },
    ...Hv(e),
    ...Fv(e),
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Tr(t, r);
        }
      }
    }
  ];
}
function Xv(e) {
  return [
    ...qv(e),
    ...Uv(e),
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Tr(t, r);
        }
      }
    }
  ];
}
function vw(e) {
  return [
    ...Wv(e),
    {
      type: "edit",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Tr(t, r);
        }
      }
    }
  ];
}
function yw(e) {
  return [
    ...Gv(e),
    {
      type: "edit",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Tr(t, r);
        }
      }
    }
  ];
}
function Jv(e) {
  return [
    ...Kv(e),
    ...Vv(e),
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Te.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Tr(t, r);
        }
      }
    }
  ];
}
function Zv(e, t) {
  return kf.reduce((r, n) => {
    if (n === "divider" && r.length > 0)
      return [...r, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const i = e.extensionManager.extensions.find((o) => o.name === n);
    return i ? [...r, i.configure().options.button({ editor: e, t, extension: i })] : r;
  }, []);
}
function Ha(e, t, r) {
  const n = [], i = e.node(0);
  r = typeof r == "number" && r >= 0 ? r : e.sameParent(t) ? Math.max(0, e.sharedDepth(t.pos) - 1) : e.sharedDepth(t.pos);
  const o = new ip(e, t, r), a = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((s, c) => {
    const u = a + c, d = u + s.nodeSize;
    if (u < o.start || u >= o.end) return;
    const f = new op(i.resolve(u), i.resolve(d));
    n.push(f);
  }), n;
}
class qa {
  constructor(t, r) {
    _r(this, "anchor");
    _r(this, "head");
    this.anchor = t, this.head = r;
  }
  map(t) {
    return new qa(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const r = t.resolve(this.anchor), n = t.resolve(this.head);
    return new Ue(r, n);
  }
}
class Ue extends ap {
  constructor(r, n, i, o = 1) {
    const { doc: a } = r, s = r === n, c = r.pos === a.content.size && n.pos === a.content.size, u = s && !c ? a.resolve(n.pos + (o > 0 ? 1 : -1)) : n, d = s && c ? a.resolve(r.pos - (o > 0 ? 1 : -1)) : r, f = Ha(d.min(u), d.max(u), i);
    super(
      u.pos >= r.pos ? f[0].$from : f[f.length - 1].$to,
      u.pos >= r.pos ? f[f.length - 1].$to : f[0].$from,
      f
    );
    _r(this, "depth");
    this.depth = i;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(r) {
    return r instanceof Ue && r.$from.pos === this.$from.pos && r.$to.pos === this.$to.pos;
  }
  map(r, n) {
    const i = r.resolve(n.map(this.anchor)), o = r.resolve(n.map(this.head));
    return new Ue(i, o);
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
    const { doc: r } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const o = this.ranges.slice(0, -1), a = o[0].$from, s = o[o.length - 1].$to;
      return new Ue(a, s, this.depth);
    }
    const n = this.ranges[0], i = r.resolve(Math.max(0, n.$from.pos - 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: r } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), a = o[0].$from, s = o[o.length - 1].$to;
      return new Ue(s, a, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], i = r.resolve(Math.min(r.content.size, n.$to.pos + 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  static fromJSON(r, n) {
    return new Ue(r.resolve(n.anchor), r.resolve(n.head));
  }
  static create(r, n, i, o, a = 1) {
    return new this(r.resolve(n), r.resolve(i), o, a);
  }
  getBookmark() {
    return new qa(this.anchor, this.head);
  }
}
function Qv(e) {
  const t = e.cloneNode(!0), r = [e, ...Array.from(e.getElementsByTagName("*"))], n = [t, ...Array.from(t.getElementsByTagName("*"))];
  return r.forEach((i, o) => {
    n[o].style.cssText = function(a) {
      let s = "";
      const c = getComputedStyle(a);
      for (let u = 0; u < c.length; u += 1)
        s += `${c[u]}:${c.getPropertyValue(c[u])};`;
      return s;
    }(i);
  }), t;
}
function Br(e, t) {
  return window.getComputedStyle(e)[t];
}
function ey(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function rc(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function od(e) {
  const { x: t, y: r, direction: n, editor: i } = e;
  let o = null, a = null, s = null, c = t;
  for (; a === null && c < window.innerWidth && c > 0; ) {
    const u = document.elementsFromPoint(c, r), d = u.findIndex((h) => h.classList.contains("ProseMirror")), f = u.slice(0, d);
    if (f.length > 0) {
      const h = f[0];
      if (o = h, s = i.view.posAtDOM(h, 0), s >= 0) {
        a = i.state.doc.nodeAt(Math.max(s - 1, 0)), (a === null || a.isText) && (a = i.state.doc.nodeAt(Math.max(s - 1, 0))), a || (a = i.state.doc.nodeAt(Math.max(s, 0)));
        break;
      }
    }
    n === "left" ? c -= 1 : c += 1;
  }
  return {
    resultElement: o,
    resultNode: a,
    pos: s !== null ? s : null
  };
}
function ty(e, t) {
  const { doc: r } = t.view.state, n = od({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const i = e.clientX, o = function(d, f, h) {
    const p = Number.parseInt(Br(d.dom, "paddingLeft"), 10), m = Number.parseInt(Br(d.dom, "paddingRight"), 10), v = Number.parseInt(Br(d.dom, "borderLeftWidth"), 10), g = Number.parseInt(Br(d.dom, "borderLeftWidth"), 10), y = d.dom.getBoundingClientRect();
    return {
      left: ey(
        f,
        y.left + p + v,
        y.right - m - g
      ),
      top: h
    };
  }(t.view, i, e.clientY), a = t.view.posAtCoords(o);
  if (!a) return [];
  const { pos: s } = a;
  if (!r.resolve(s).parent) return [];
  const c = r.resolve(n.pos), u = r.resolve(n.pos + 1);
  return Ha(c, u, 0);
}
function nc(e, t) {
  const r = e.resolve(t), { depth: n } = r;
  return n === 0 ? t : r.pos - r.parentOffset - 1;
}
function ic(e, t) {
  const r = e.nodeAt(t), n = e.resolve(t);
  let { depth: i } = n, o = r;
  for (; i > 0; ) {
    const a = n.node(i);
    i -= 1, i === 0 && (o = a);
  }
  return o;
}
function oc(e, t) {
  let r = t;
  for (; r && r.parentNode && r.parentNode !== e.dom; ) r = r.parentNode;
  return r;
}
const ad = new Wt("dragHandle");
function ry({
  pluginKey: e = ad,
  element: t,
  editor: r,
  tippyOptions: n,
  onNodeChange: i
}) {
  const o = document.createElement("div");
  let a = null, s = !1, c = null, u = -1;
  return t.addEventListener("dragstart", (d) => {
    const { view: f } = r;
    if (!d.dataTransfer) return;
    const { empty: h, $from: p, $to: m } = f.state.selection, v = ty(d, r), g = Ha(p, m, 0), y = g.some((N) => v.find(($) => $.$from === N.$from && $.$to === N.$to)), w = h || !y ? v : g;
    if (w.length === 0) return;
    const { tr: A } = f.state, I = document.createElement("div"), T = w[0].$from.pos, M = w[w.length - 1].$to.pos, L = Ue.create(f.state.doc, T, M), k = L.content();
    w.forEach((N) => {
      const $ = Qv(f.nodeDOM(N.$from.pos));
      I.append($);
    }), I.style.position = "absolute", I.style.top = "-10000px", document.body.append(I), d.dataTransfer.clearData(), d.dataTransfer.setDragImage(I, 0, 0), f.dragging = { slice: k, move: !0 }, A.setSelection(L), f.dispatch(A), document.addEventListener("drop", () => rc(I), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new Ot({
    key: typeof e == "string" ? new Wt(e) : e,
    state: {
      init: () => ({ locked: !1 }),
      apply(d, f) {
        const h = d.getMeta("lockDragHandle"), p = d.getMeta("hideDragHandle");
        if (h !== void 0 && (s = h), p && a)
          return a.hide(), s = !1, c = null, u = -1, i == null || i({ editor: r, node: null, pos: -1 }), f;
        if (d.docChanged && u !== -1 && t && a) {
          const m = d.mapping.map(u);
          m !== u && (u = m);
        }
        return f;
      }
    },
    view: (d) => {
      return f(), h(r.view.dom), a = Cp(d.dom, {
        ...p(),
        ...n
      }), {
        update(I, T) {
          if (!m(t, a) || (t.draggable = !s, !v(I, T)))
            return;
          const M = g(I);
          M && y(I, M);
        },
        destroy() {
          A();
        }
      };
      function f() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(I) {
        var T;
        (T = I.parentElement) == null || T.appendChild(o), o.appendChild(t), Object.assign(o.style, {
          pointerEvents: "none",
          position: "absolute",
          top: "0",
          left: "0"
        });
      }
      function p() {
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
      function m(I, T) {
        return I && T;
      }
      function v(I, T) {
        return !I.state.doc.eq(T.doc) && u !== -1;
      }
      function g(I) {
        let T = I.nodeDOM(u);
        return T = oc(I, T), T === I.dom || (T == null ? void 0 : T.nodeType) !== 1 ? null : T;
      }
      function y(I, T) {
        const M = I.posAtDOM(T, 0), L = ic(r.state.doc, M);
        if (L === c)
          return;
        const k = nc(r.state.doc, M);
        c = L, u = k, i == null || i({
          editor: r,
          node: c,
          pos: u
        }), w(T);
      }
      function w(I) {
        a.setProps({
          getReferenceClientRect: () => I.getBoundingClientRect()
        }), a.show();
      }
      function A() {
        a == null || a.destroy(), t && rc(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (d, f) => {
          if (s || !h(f)) return !1;
          return p(), m(), !1;
          function h(v) {
            return v.target && !o.contains(v.relatedTarget);
          }
          function p() {
            a == null || a.hide();
          }
          function m() {
            c = null, u = -1, i == null || i({
              editor: r,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: Dn((d, f) => {
          if (!t || !a || s)
            return !1;
          const h = od({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: r
          });
          if (!h.resultElement || h.resultElement === d.dom)
            return !1;
          const p = oc(d, h.resultElement);
          if (p === d.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), v = ic(r.state.doc, m);
          if (v === c)
            return !1;
          const g = nc(r.state.doc, m);
          return c = v, u = g, i == null || i({
            editor: r,
            node: c,
            pos: u
          }), a.setProps({
            getReferenceClientRect: () => p.getBoundingClientRect()
          }), a.show(), !1;
        }, 100)
      }
    }
  });
}
var ga = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(ga || {});
function ny(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function iy(e, t, r, n) {
  const { doc: i, selection: o } = e;
  if (!i || !o || !(o instanceof Gt || o instanceof sp))
    return e;
  const { from: a, to: s } = o;
  return i.nodesBetween(a, s, (c, u) => {
    const d = c.type;
    return r.includes(d.name) ? (e = va(e, u, t), !1) : !cp(c.type.name, n.extensionManager.extensions);
  }), e;
}
function va(e, t, r) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const a = ny((n.attrs.indent || 0) + r, 0, 7);
  if (a === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: a
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function xw({ delta: e, types: t }) {
  return ({ state: r, dispatch: n, editor: i }) => {
    const { selection: o } = r;
    let { tr: a } = r;
    return a = a.setSelection(o), a = iy(a, e, t, i), a.docChanged ? (n && n(a), !0) : !1;
  };
}
function oy(e) {
  var k, N, $;
  const { pluginKey: t = ad } = e, { t: r } = Se(), [n, i] = J(null), [o, a] = J(-1), s = ot(null), c = ot(null), [u, d] = J(!1), f = e.editor.extensionManager.extensions.some((C) => C.name === "textAlign"), h = e.editor.extensionManager.extensions.some((C) => C.name === "indent"), p = e.editor.extensionManager.extensions.some((C) => C.name === "clear");
  pe(() => {
    s.current && !e.editor.isDestroyed && (c.current = ry({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: T
    }), e.editor.registerPlugin(c.current));
  }, [e.editor, s]);
  function m() {
    const C = e.editor.chain();
    C.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && C.setParagraph(), C.run();
  }
  function v() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function g() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: C } = e.editor.state.selection, S = C.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), S.toJSON()).run();
  }
  function y(C) {
    e.editor.commands.setTextAlign(C);
  }
  function w() {
    const C = va(e.editor.state.tr, o, 1);
    C.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function A() {
    const C = va(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(C);
  }
  function I() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function T(C) {
    C.node && i(C.node), a(C.pos);
  }
  function M() {
    var C;
    if (o !== -1) {
      const S = (n == null ? void 0 : n.nodeSize) || 0, P = o + S, D = (n == null ? void 0 : n.type.name) === "paragraph" && ((C = n == null ? void 0 : n.content) == null ? void 0 : C.size) === 0, H = D ? o + 2 : P + 2;
      e.editor.chain().command(({ dispatch: j, tr: W, state: Q }) => j ? (D ? W.insertText("/", o, o + 1) : W.insert(
        P,
        Q.schema.nodes.paragraph.create(null, [Q.schema.text("/")])
      ), j(W)) : !0).focus(H).run();
    }
  }
  pe(() => (u ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [u]), pe(() => () => {
    c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, []), pe(() => {
    var C;
    (C = e.editor) != null && C.isDestroyed && c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, [(k = e.editor) == null ? void 0 : k.isDestroyed]);
  const L = (C) => {
    e != null && e.disabled || d(C);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        !e.hidePlusIcon && /* @__PURE__ */ l(
          Ce,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: M,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ l(
              ve,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ E(
          Xx,
          {
            onOpenChange: L,
            open: u,
            children: [
              /* @__PURE__ */ E("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ E(Bd, { children: [
                  /* @__PURE__ */ l(
                    jd,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ l(
                        Ce,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (C) => {
                            C.preventDefault(), !(e != null && e.disabled) && d(!0);
                          },
                          children: /* @__PURE__ */ l(
                            ve,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ l(ns, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ l(Jx, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ E(
                Rd,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: I,
                        children: [
                          /* @__PURE__ */ l(ve, { name: "Trash2" }),
                          /* @__PURE__ */ l("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    p ? /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ l(ve, { name: "PaintRoller" }),
                          /* @__PURE__ */ l("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: v,
                        children: [
                          /* @__PURE__ */ l(ve, { name: "Clipboard" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ E(
                      He,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ l(ve, { name: "Copy" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    f || h ? /* @__PURE__ */ l(Od, {}) : null,
                    f ? /* @__PURE__ */ E(vc, { children: [
                      /* @__PURE__ */ E(Ea, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(ve, { name: "AlignCenter" }),
                        /* @__PURE__ */ l("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ l(gc, { children: /* @__PURE__ */ E(Ia, { children: [
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => y("left"),
                            children: [
                              /* @__PURE__ */ l(ve, { name: "AlignLeft" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => y("center"),
                            children: [
                              /* @__PURE__ */ l(ve, { name: "AlignCenter" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => y("right"),
                            children: [
                              /* @__PURE__ */ l(ve, { name: "AlignRight" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ E(vc, { children: [
                      /* @__PURE__ */ E(Ea, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(ve, { name: "IndentIncrease" }),
                        /* @__PURE__ */ l("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ l(gc, { children: /* @__PURE__ */ E(Ia, { children: [
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((N = n == null ? void 0 : n.attrs) == null ? void 0 : N.indent) >= ga.max,
                            onClick: w,
                            children: [
                              /* @__PURE__ */ l(ve, { name: "IndentIncrease" }),
                              /* @__PURE__ */ l("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E(
                          He,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: (($ = n == null ? void 0 : n.attrs) == null ? void 0 : $.indent) <= ga.min,
                            onClick: A,
                            children: [
                              /* @__PURE__ */ l(ve, { name: "IndentDecrease" }),
                              /* @__PURE__ */ l("span", { children: r("editor.outdent.tooltip") })
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
const ay = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function sy({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ l(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) : /* @__PURE__ */ l(de, {});
}
function cy(e) {
  const { t, lang: r } = Se(), n = ({ editor: o }) => {
    const { selection: a } = o.view.state, { $from: s, to: c } = a;
    return s.pos === c ? !1 : a instanceof Gt;
  }, i = we(() => e.disabled || !(e != null && e.editor) ? [] : Zv(e.editor, t), [e.disabled, e.editor, r, t]);
  return /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ay,
      children: i != null && i.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, a) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ l(
        We,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ l(
        sy,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: o
        },
        `bubbleMenu-text-${a}`
      )) }) }) : /* @__PURE__ */ l(de, {})
    }
  );
}
function ly(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function uy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"
    }
  ) });
}
function dy() {
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ l(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function fy() {
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ l(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function hy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function ve(e) {
  const t = sd[e.name];
  return t ? /* @__PURE__ */ l(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function py(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function my(e) {
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M36 19L24 31L12 19z"
        }
      )
    }
  );
}
function gy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function vy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function yy(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function xy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
function by() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function wy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function Sy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function Ay() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function Cy() {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function Ty() {
  return /* @__PURE__ */ E(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ l(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            fill: "currentColor",
            d: "m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
          }
        )
      ]
    }
  );
}
function Ey() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ E("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ l("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ l("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function Iy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function Ry() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ E("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ l("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ l("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function Oy() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function Py() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function Ny() {
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
const sd = {
  Bold: Jh,
  LoaderCircle: Xh,
  Italic: Yh,
  Underline: Kh,
  Quote: Vh,
  TextQuote: uy,
  Strikethrough: Gh,
  Minus: Wh,
  Eraser: Uh,
  PaintRoller: Fh,
  Redo2: qh,
  Undo2: Hh,
  AlignCenter: np,
  AlignJustify: rp,
  AlignLeft: tp,
  AlignRight: ep,
  ChevronDown: zh,
  Subscript: jh,
  Superscript: Bh,
  Code: Dh,
  Code2: _h,
  Type: $h,
  IndentIncrease: Lh,
  IndentDecrease: Mh,
  List: kh,
  ListOrdered: Nh,
  ListTodo: Ph,
  Link: Oh,
  ImageUp: Rh,
  Video: Ih,
  Maximize: Eh,
  Minimize: Th,
  Table: Ch,
  Sparkles: Ah,
  Pencil: Sh,
  Unlink: wh,
  BetweenHorizonalEnd: bh,
  BetweenHorizonalStart: xh,
  BetweenVerticalStart: yh,
  BetweenVerticalEnd: vh,
  TableCellsMerge: gh,
  TableCellsSplit: mh,
  Trash2: ph,
  Trash: hh,
  Replace: Ts,
  ChevronsUpDown: fh,
  LineHeight: py,
  Word: hy,
  Heading1: dh,
  Heading2: uh,
  Heading3: lh,
  Heading4: ch,
  Heading5: sh,
  Heading6: ah,
  Columns2: Es,
  Columns3: oh,
  Columns4: ih,
  Plus: mu,
  Grip: nh,
  Copy: rh,
  Clipboard: th,
  PanelLeft: eh,
  PanelRight: Qf,
  Columns: Es,
  Iframe: Zf,
  MenuDown: my,
  SizeS: yy,
  SizeM: vy,
  SizeL: gy,
  AspectRatio: ly,
  Emoji: Jf,
  DeleteColumn: dy,
  DeleteRow: fy,
  SearchAndReplace: Ts,
  EmojiIcon: Xf,
  KatexIcon: Yf,
  ExportPdf: Cy,
  ExportWord: Ty,
  ImportWord: Ny,
  ColumnAddLeft: by,
  ColumnAddRight: wy,
  BookMarked: Kf,
  Excalidraw: Ay,
  ZoomIn: Vf,
  ZoomOut: Gf,
  Settings: Wf,
  Eye: Uf,
  TextDirection: Sy,
  LeftToRight: Iy,
  RightToLeft: Oy,
  Attachment: Ff,
  GifIcon: Ey,
  ChevronUp: qf,
  Crop: Hf,
  Mermaid: Ry,
  Twitter: Py,
  CodeView: xy,
  FlipX: zf,
  FlipY: jf,
  PencilRuler: Bf,
  WrapText: Df,
  Loader: _f
};
function ky({ fill: e }) {
  return /* @__PURE__ */ l(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ l("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ E("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ l("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ E(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ l(
          "path",
          {
            d: "M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z",
            id: "矩形",
            fill: e || "#FBDE28"
          }
        )
      ] }) })
    }
  );
}
function My(e) {
  const [t, r] = J(void 0);
  function n(a) {
    var s;
    (s = e.action) == null || s.call(e, a);
  }
  function i() {
    var a;
    (a = e.action) == null || a.call(e, t);
  }
  const o = oe(
    Dn((a) => {
      r(a);
    }, 350),
    []
  );
  return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ l(
      F,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: i,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ l("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ l(ky, { fill: t }) })
      }
    ),
    /* @__PURE__ */ l(
      U2,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(Ce, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ l(ve, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function Ly({ editor: e, disabled: t, actions: r }) {
  var g, y, w, A, I, T, M, L, k, N, $, C, S, P, D, H, j, W;
  const n = ({ editor: Q }) => lp(Q.view.state, "table"), { t: i } = Se();
  function o() {
    e.chain().focus().addColumnBefore().run();
  }
  function a() {
    e.chain().focus().addColumnAfter().run();
  }
  function s() {
    e.chain().focus().deleteColumn().run();
  }
  function c() {
    e.chain().focus().addRowBefore().run();
  }
  function u() {
    e.chain().focus().addRowAfter().run();
  }
  function d() {
    e.chain().focus().deleteRow().run();
  }
  function f() {
    e.chain().focus().mergeCells().run();
  }
  function h() {
    e == null || e.chain().focus().splitCell().run();
  }
  function p() {
    e.chain().focus().deleteTable().run();
  }
  function m(Q) {
    e.chain().focus().setTableCellBackground(Q).run();
  }
  return /* @__PURE__ */ l(
    St,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: n,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var Be;
          const {
            view: Q,
            state: {
              selection: { from: te }
            }
          } = e, ye = Q.domAtPos(te).node;
          if (!ye)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const me = (Be = ye == null ? void 0 : ye.closest) == null ? void 0 : Be.call(ye, ".tableWrapper");
          return me ? me.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Tp],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ l(de, {}) : /* @__PURE__ */ E("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ l(
          F,
          {
            action: o,
            disabled: !((y = (g = e == null ? void 0 : e.can()) == null ? void 0 : g.addColumnBefore) != null && y.call(g)),
            icon: "BetweenHorizonalEnd",
            tooltip: i("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: a,
            disabled: !((A = (w = e == null ? void 0 : e.can()) == null ? void 0 : w.addColumnAfter) != null && A.call(w)),
            icon: "BetweenHorizonalStart",
            tooltip: i("editor.table.menu.insertColumnAfter"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: s,
            disabled: !((T = e == null ? void 0 : (I = e.can()).deleteColumn) != null && T.call(I)),
            icon: "DeleteColumn",
            tooltip: i("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: c,
            disabled: !((L = e == null ? void 0 : (M = e.can()).addRowBefore) != null && L.call(M)),
            icon: "BetweenVerticalEnd",
            tooltip: i("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: u,
            disabled: !((N = (k = e == null ? void 0 : e.can()) == null ? void 0 : k.addRowAfter) != null && N.call(k)),
            icon: "BetweenVerticalStart",
            tooltip: i("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: d,
            disabled: !((C = ($ = e == null ? void 0 : e.can()) == null ? void 0 : $.deleteRow) != null && C.call($)),
            icon: "DeleteRow",
            tooltip: i("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: f,
            disabled: !((P = (S = e == null ? void 0 : e.can()) == null ? void 0 : S.mergeCells) != null && P.call(S)),
            icon: "TableCellsMerge",
            tooltip: i("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: h,
            disabled: !((H = (D = e == null ? void 0 : e.can()) == null ? void 0 : D.splitCell) != null && H.call(D)),
            icon: "TableCellsSplit",
            tooltip: i("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          We,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ l(
          My,
          {
            action: m,
            editor: e,
            tooltip: i("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: p,
            disabled: !((W = (j = e == null ? void 0 : e.can()) == null ? void 0 : j.deleteTable) != null && W.call(j)),
            icon: "Trash2",
            tooltip: i("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        r && r.map((Q, te) => /* @__PURE__ */ l(
          F,
          {
            ...Q
          },
          te
        ))
      ] })
    }
  );
}
const $y = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _y = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ut = (e, t) => {
  for (const r in t)
    e[r] = t[r];
  return e;
}, ya = "numeric", xa = "ascii", ba = "alpha", sr = "asciinumeric", or = "alphanumeric", wa = "domain", cd = "emoji", Dy = "scheme", By = "slashscheme", ui = "whitespace";
function jy(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Et(e, t, r) {
  t[ya] && (t[sr] = !0, t[or] = !0), t[xa] && (t[sr] = !0, t[ba] = !0), t[sr] && (t[or] = !0), t[ba] && (t[or] = !0), t[or] && (t[wa] = !0), t[cd] && (t[wa] = !0);
  for (const n in t) {
    const i = jy(n, r);
    i.indexOf(e) < 0 && i.push(e);
  }
}
function zy(e, t) {
  const r = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (r[n] = !0);
  return r;
}
function Oe(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Oe.groups = {};
Oe.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(e) {
    const t = this, r = t.j[e];
    if (r)
      return r;
    for (let n = 0; n < t.jr.length; n++) {
      const i = t.jr[n][0], o = t.jr[n][1];
      if (o && i.test(e))
        return o;
    }
    return t.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(e, t, r, n) {
    for (let i = 0; i < e.length; i++)
      this.tt(e[i], t, r, n);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(e, t, r, n) {
    n = n || Oe.groups;
    let i;
    return t && t.j ? i = t : (i = new Oe(t), r && n && Et(t, r, n)), this.jr.push([e, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(e, t, r, n) {
    let i = this;
    const o = e.length;
    if (!o)
      return i;
    for (let a = 0; a < o - 1; a++)
      i = i.tt(e[a]);
    return i.tt(e[o - 1], t, r, n);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(e, t, r, n) {
    n = n || Oe.groups;
    const i = this;
    if (t && t.j)
      return i.j[e] = t, t;
    const o = t;
    let a, s = i.go(e);
    if (s ? (a = new Oe(), Ut(a.j, s.j), a.jr.push.apply(a.jr, s.jr), a.jd = s.jd, a.t = s.t) : a = new Oe(), o) {
      if (n)
        if (a.t && typeof a.t == "string") {
          const c = Ut(zy(a.t, n), r);
          Et(o, c, n);
        } else r && Et(o, r, n);
      a.t = o;
    }
    return i.j[e] = a, a;
  }
};
const Y = (e, t, r, n, i) => e.ta(t, r, n, i), he = (e, t, r, n, i) => e.tr(t, r, n, i), ac = (e, t, r, n, i) => e.ts(t, r, n, i), O = (e, t, r, n, i) => e.tt(t, r, n, i), rt = "WORD", Sa = "UWORD", ld = "ASCIINUMERICAL", ud = "ALPHANUMERICAL", xr = "LOCALHOST", Aa = "TLD", Ca = "UTLD", Vr = "SCHEME", jt = "SLASH_SCHEME", Fa = "NUM", Ta = "WS", Ua = "NL", cr = "OPENBRACE", lr = "CLOSEBRACE", nn = "OPENBRACKET", on = "CLOSEBRACKET", an = "OPENPAREN", sn = "CLOSEPAREN", cn = "OPENANGLEBRACKET", ln = "CLOSEANGLEBRACKET", un = "FULLWIDTHLEFTPAREN", dn = "FULLWIDTHRIGHTPAREN", fn = "LEFTCORNERBRACKET", hn = "RIGHTCORNERBRACKET", pn = "LEFTWHITECORNERBRACKET", mn = "RIGHTWHITECORNERBRACKET", gn = "FULLWIDTHLESSTHAN", vn = "FULLWIDTHGREATERTHAN", yn = "AMPERSAND", Wa = "APOSTROPHE", xn = "ASTERISK", xt = "AT", bn = "BACKSLASH", wn = "BACKTICK", Sn = "CARET", bt = "COLON", Ga = "COMMA", An = "DOLLAR", qe = "DOT", Cn = "EQUALS", Va = "EXCLAMATION", Le = "HYPHEN", ur = "PERCENT", Tn = "PIPE", En = "PLUS", In = "POUND", dr = "QUERY", Ka = "QUOTE", dd = "FULLWIDTHMIDDLEDOT", Ya = "SEMI", Fe = "SLASH", fr = "TILDE", Rn = "UNDERSCORE", fd = "EMOJI", On = "SYM";
var hd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: rt,
  UWORD: Sa,
  ASCIINUMERICAL: ld,
  ALPHANUMERICAL: ud,
  LOCALHOST: xr,
  TLD: Aa,
  UTLD: Ca,
  SCHEME: Vr,
  SLASH_SCHEME: jt,
  NUM: Fa,
  WS: Ta,
  NL: Ua,
  OPENBRACE: cr,
  CLOSEBRACE: lr,
  OPENBRACKET: nn,
  CLOSEBRACKET: on,
  OPENPAREN: an,
  CLOSEPAREN: sn,
  OPENANGLEBRACKET: cn,
  CLOSEANGLEBRACKET: ln,
  FULLWIDTHLEFTPAREN: un,
  FULLWIDTHRIGHTPAREN: dn,
  LEFTCORNERBRACKET: fn,
  RIGHTCORNERBRACKET: hn,
  LEFTWHITECORNERBRACKET: pn,
  RIGHTWHITECORNERBRACKET: mn,
  FULLWIDTHLESSTHAN: gn,
  FULLWIDTHGREATERTHAN: vn,
  AMPERSAND: yn,
  APOSTROPHE: Wa,
  ASTERISK: xn,
  AT: xt,
  BACKSLASH: bn,
  BACKTICK: wn,
  CARET: Sn,
  COLON: bt,
  COMMA: Ga,
  DOLLAR: An,
  DOT: qe,
  EQUALS: Cn,
  EXCLAMATION: Va,
  HYPHEN: Le,
  PERCENT: ur,
  PIPE: Tn,
  PLUS: En,
  POUND: In,
  QUERY: dr,
  QUOTE: Ka,
  FULLWIDTHMIDDLEDOT: dd,
  SEMI: Ya,
  SLASH: Fe,
  TILDE: fr,
  UNDERSCORE: Rn,
  EMOJI: fd,
  SYM: On
});
const et = /[a-z]/, rr = new RegExp("\\p{L}", "u"), di = new RegExp("\\p{Emoji}", "u"), tt = /\d/, fi = /\s/, sc = "\r", hi = `
`, Hy = "️", qy = "‍", pi = "￼";
let jr = null, zr = null;
function Fy(e = []) {
  const t = {};
  Oe.groups = t;
  const r = new Oe();
  jr == null && (jr = cc($y)), zr == null && (zr = cc(_y)), O(r, "'", Wa), O(r, "{", cr), O(r, "}", lr), O(r, "[", nn), O(r, "]", on), O(r, "(", an), O(r, ")", sn), O(r, "<", cn), O(r, ">", ln), O(r, "（", un), O(r, "）", dn), O(r, "「", fn), O(r, "」", hn), O(r, "『", pn), O(r, "』", mn), O(r, "＜", gn), O(r, "＞", vn), O(r, "&", yn), O(r, "*", xn), O(r, "@", xt), O(r, "`", wn), O(r, "^", Sn), O(r, ":", bt), O(r, ",", Ga), O(r, "$", An), O(r, ".", qe), O(r, "=", Cn), O(r, "!", Va), O(r, "-", Le), O(r, "%", ur), O(r, "|", Tn), O(r, "+", En), O(r, "#", In), O(r, "?", dr), O(r, '"', Ka), O(r, "/", Fe), O(r, ";", Ya), O(r, "~", fr), O(r, "_", Rn), O(r, "\\", bn), O(r, "・", dd);
  const n = he(r, tt, Fa, {
    [ya]: !0
  });
  he(n, tt, n);
  const i = he(n, et, ld, {
    [sr]: !0
  }), o = he(n, rr, ud, {
    [or]: !0
  }), a = he(r, et, rt, {
    [xa]: !0
  });
  he(a, tt, i), he(a, et, a), he(i, tt, i), he(i, et, i);
  const s = he(r, rr, Sa, {
    [ba]: !0
  });
  he(s, et), he(s, tt, o), he(s, rr, s), he(o, tt, o), he(o, et), he(o, rr, o);
  const c = O(r, hi, Ua, {
    [ui]: !0
  }), u = O(r, sc, Ta, {
    [ui]: !0
  }), d = he(r, fi, Ta, {
    [ui]: !0
  });
  O(r, pi, d), O(u, hi, c), O(u, pi, d), he(u, fi, d), O(d, sc), O(d, hi), he(d, fi, d), O(d, pi, d);
  const f = he(r, di, fd, {
    [cd]: !0
  });
  O(f, "#"), he(f, di, f), O(f, Hy, f);
  const h = O(f, qy);
  O(h, "#"), he(h, di, f);
  const p = [[et, a], [tt, i]], m = [[et, null], [rr, s], [tt, o]];
  for (let v = 0; v < jr.length; v++)
    vt(r, jr[v], Aa, rt, p);
  for (let v = 0; v < zr.length; v++)
    vt(r, zr[v], Ca, Sa, m);
  Et(Aa, {
    tld: !0,
    ascii: !0
  }, t), Et(Ca, {
    utld: !0,
    alpha: !0
  }, t), vt(r, "file", Vr, rt, p), vt(r, "mailto", Vr, rt, p), vt(r, "http", jt, rt, p), vt(r, "https", jt, rt, p), vt(r, "ftp", jt, rt, p), vt(r, "ftps", jt, rt, p), Et(Vr, {
    scheme: !0,
    ascii: !0
  }, t), Et(jt, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((v, g) => v[0] > g[0] ? 1 : -1);
  for (let v = 0; v < e.length; v++) {
    const g = e[v][0], w = e[v][1] ? {
      [Dy]: !0
    } : {
      [By]: !0
    };
    g.indexOf("-") >= 0 ? w[wa] = !0 : et.test(g) ? tt.test(g) ? w[sr] = !0 : w[xa] = !0 : w[ya] = !0, ac(r, g, g, w);
  }
  return ac(r, "localhost", xr, {
    ascii: !0
  }), r.jd = new Oe(On), {
    start: r,
    tokens: Ut({
      groups: t
    }, hd)
  };
}
function pd(e, t) {
  const r = Uy(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), n = r.length, i = [];
  let o = 0, a = 0;
  for (; a < n; ) {
    let s = e, c = null, u = 0, d = null, f = -1, h = -1;
    for (; a < n && (c = s.go(r[a])); )
      s = c, s.accepts() ? (f = 0, h = 0, d = s) : f >= 0 && (f += r[a].length, h++), u += r[a].length, o += r[a].length, a++;
    o -= f, a -= h, u -= f, i.push({
      t: d.t,
      // token type/name
      v: t.slice(o - u, o),
      // string value
      s: o - u,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function Uy(e) {
  const t = [], r = e.length;
  let n = 0;
  for (; n < r; ) {
    let i = e.charCodeAt(n), o, a = i < 55296 || i > 56319 || n + 1 === r || (o = e.charCodeAt(n + 1)) < 56320 || o > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(a), n += a.length;
  }
  return t;
}
function vt(e, t, r, n, i) {
  let o;
  const a = t.length;
  for (let s = 0; s < a - 1; s++) {
    const c = t[s];
    e.j[c] ? o = e.j[c] : (o = new Oe(n), o.jr = i.slice(), e.j[c] = o), e = o;
  }
  return o = new Oe(r), o.jr = i.slice(), e.j[t[a - 1]] = o, o;
}
function cc(e) {
  const t = [], r = [];
  let n = 0, i = "0123456789";
  for (; n < e.length; ) {
    let o = 0;
    for (; i.indexOf(e[n + o]) >= 0; )
      o++;
    if (o > 0) {
      t.push(r.join(""));
      for (let a = parseInt(e.substring(n, n + o), 10); a > 0; a--)
        r.pop();
      n += o;
    } else
      r.push(e[n]), n++;
  }
  return t;
}
const br = {
  defaultProtocol: "http",
  events: null,
  format: lc,
  formatHref: lc,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Xa(e, t = null) {
  let r = Ut({}, br);
  e && (r = Ut(r, e instanceof Xa ? e.o : e));
  const n = r.ignoreTags, i = [];
  for (let o = 0; o < n.length; o++)
    i.push(n[o].toUpperCase());
  this.o = r, t && (this.defaultRender = t), this.ignoreTags = i;
}
Xa.prototype = {
  o: br,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(e) {
    return e;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(e, t, r) {
    const n = t != null;
    let i = this.o[e];
    return i && (typeof i == "object" ? (i = r.t in i ? i[r.t] : br[e], typeof i == "function" && n && (i = i(t, r))) : typeof i == "function" && n && (i = i(t, r.t, r)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, r) {
    let n = this.o[e];
    return typeof n == "function" && t != null && (n = n(t, r.t, r)), n;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function lc(e) {
  return e;
}
function md(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
md.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(e) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(e) {
    const t = this.toString(), r = e.get("truncate", t, this), n = e.get("format", t, this);
    return r && n.length > r ? n.substring(0, r) + "…" : n;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(e = br.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(e) {
    const t = this, r = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", r, this), i = e.get("tagName", r, t), o = this.toFormattedString(e), a = {}, s = e.get("className", r, t), c = e.get("target", r, t), u = e.get("rel", r, t), d = e.getObj("attributes", r, t), f = e.getObj("events", r, t);
    return a.href = n, s && (a.class = s), c && (a.target = c), u && (a.rel = u), d && Ut(a, d), {
      tagName: i,
      attributes: a,
      content: o,
      eventListeners: f
    };
  }
};
function Bn(e, t) {
  class r extends md {
    constructor(i, o) {
      super(i, o), this.t = e;
    }
  }
  for (const n in t)
    r.prototype[n] = t[n];
  return r.t = e, r;
}
const uc = Bn("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), dc = Bn("text"), Wy = Bn("nl"), Hr = Bn("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = br.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== xr && e[1].t === bt;
  }
}), Me = (e) => new Oe(e);
function Gy({
  groups: e
}) {
  const t = e.domain.concat([yn, xn, xt, bn, wn, Sn, An, Cn, Le, Fa, ur, Tn, En, In, Fe, On, fr, Rn]), r = [bt, Ga, qe, Va, ur, dr, Ka, Ya, cn, ln, cr, lr, on, nn, an, sn, un, dn, fn, hn, pn, mn, gn, vn], n = [yn, Wa, xn, bn, wn, Sn, An, Cn, Le, cr, lr, ur, Tn, En, In, dr, Fe, On, fr, Rn], i = Me(), o = O(i, fr);
  Y(o, n, o), Y(o, e.domain, o);
  const a = Me(), s = Me(), c = Me();
  Y(i, e.domain, a), Y(i, e.scheme, s), Y(i, e.slashscheme, c), Y(a, n, o), Y(a, e.domain, a);
  const u = O(a, xt);
  O(o, xt, u), O(s, xt, u), O(c, xt, u);
  const d = O(o, qe);
  Y(d, n, o), Y(d, e.domain, o);
  const f = Me();
  Y(u, e.domain, f), Y(f, e.domain, f);
  const h = O(f, qe);
  Y(h, e.domain, f);
  const p = Me(uc);
  Y(h, e.tld, p), Y(h, e.utld, p), O(u, xr, p);
  const m = O(f, Le);
  O(m, Le, m), Y(m, e.domain, f), Y(p, e.domain, f), O(p, qe, h), O(p, Le, m);
  const v = O(p, bt);
  Y(v, e.numeric, uc);
  const g = O(a, Le), y = O(a, qe);
  O(g, Le, g), Y(g, e.domain, a), Y(y, n, o), Y(y, e.domain, a);
  const w = Me(Hr);
  Y(y, e.tld, w), Y(y, e.utld, w), Y(w, e.domain, a), Y(w, n, o), O(w, qe, y), O(w, Le, g), O(w, xt, u);
  const A = O(w, bt), I = Me(Hr);
  Y(A, e.numeric, I);
  const T = Me(Hr), M = Me();
  Y(T, t, T), Y(T, r, M), Y(M, t, T), Y(M, r, M), O(w, Fe, T), O(I, Fe, T);
  const L = O(s, bt), k = O(c, bt), N = O(k, Fe), $ = O(N, Fe);
  Y(s, e.domain, a), O(s, qe, y), O(s, Le, g), Y(c, e.domain, a), O(c, qe, y), O(c, Le, g), Y(L, e.domain, T), O(L, Fe, T), O(L, dr, T), Y($, e.domain, T), Y($, t, T), O($, Fe, T);
  const C = [
    [cr, lr],
    // {}
    [nn, on],
    // []
    [an, sn],
    // ()
    [cn, ln],
    // <>
    [un, dn],
    // （）
    [fn, hn],
    // 「」
    [pn, mn],
    // 『』
    [gn, vn]
    // ＜＞
  ];
  for (let S = 0; S < C.length; S++) {
    const [P, D] = C[S], H = O(T, P);
    O(M, P, H), O(H, D, T);
    const j = Me(Hr);
    Y(H, t, j);
    const W = Me();
    Y(H, r), Y(j, t, j), Y(j, r, W), Y(W, t, j), Y(W, r, W), O(j, D, T), O(W, D, T);
  }
  return O(i, xr, w), O(i, Ua, Wy), {
    start: i,
    tokens: hd
  };
}
function Vy(e, t, r) {
  let n = r.length, i = 0, o = [], a = [];
  for (; i < n; ) {
    let s = e, c = null, u = null, d = 0, f = null, h = -1;
    for (; i < n && !(c = s.go(r[i].t)); )
      a.push(r[i++]);
    for (; i < n && (u = c || s.go(r[i].t)); )
      c = null, s = u, s.accepts() ? (h = 0, f = s) : h >= 0 && h++, i++, d++;
    if (h < 0)
      i -= d, i < n && (a.push(r[i]), i++);
    else {
      a.length > 0 && (o.push(mi(dc, t, a)), a = []), i -= h, d -= h;
      const p = f.t, m = r.slice(i - d, i);
      o.push(mi(p, t, m));
    }
  }
  return a.length > 0 && o.push(mi(dc, t, a)), o;
}
function mi(e, t, r) {
  const n = r[0].s, i = r[r.length - 1].e, o = t.slice(n, i);
  return new e(o, r);
}
const Ky = typeof console < "u" && console && console.warn || (() => {
}), Yy = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ue = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Xy() {
  return Oe.groups = {}, ue.scanner = null, ue.parser = null, ue.tokenQueue = [], ue.pluginQueue = [], ue.customSchemes = [], ue.initialized = !1, ue;
}
function fc(e, t = !1) {
  if (ue.initialized && Ky(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Yy}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ue.customSchemes.push([e, t]);
}
function Jy() {
  ue.scanner = Fy(ue.customSchemes);
  for (let e = 0; e < ue.tokenQueue.length; e++)
    ue.tokenQueue[e][1]({
      scanner: ue.scanner
    });
  ue.parser = Gy(ue.scanner.tokens);
  for (let e = 0; e < ue.pluginQueue.length; e++)
    ue.pluginQueue[e][1]({
      scanner: ue.scanner,
      parser: ue.parser
    });
  return ue.initialized = !0, ue;
}
function Ja(e) {
  return ue.initialized || Jy(), Vy(ue.parser.start, e, pd(ue.scanner.start, e));
}
Ja.scan = pd;
function gd(e, t = null, r = null) {
  if (t && typeof t == "object") {
    if (r)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    r = t, t = null;
  }
  const n = new Xa(r), i = Ja(e), o = [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    s.isLink && (!t || s.t === t) && n.check(s) && o.push(s.toFormattedObject(n));
  }
  return o;
}
function Zy(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Qy(e) {
  return new Ot({
    key: new Wt("autolink"),
    appendTransaction: (t, r, n) => {
      const i = t.some((u) => u.docChanged) && !r.doc.eq(n.doc), o = t.some((u) => u.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: a } = n, s = fp(r.doc, [...t]);
      if (hp(s).forEach(({ newRange: u }) => {
        const d = pp(n.doc, u, (p) => p.isTextblock);
        let f, h;
        if (d.length > 1 ? (f = d[0], h = n.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ")) : d.length && n.doc.textBetween(u.from, u.to, " ", " ").endsWith(" ") && (f = d[0], h = n.doc.textBetween(f.pos, u.to, void 0, " ")), f && h) {
          const p = h.split(" ").filter((y) => y !== "");
          if (p.length <= 0)
            return !1;
          const m = p[p.length - 1], v = f.pos + h.lastIndexOf(m);
          if (!m)
            return !1;
          const g = Ja(m).map((y) => y.toObject(e.defaultProtocol));
          if (!Zy(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: v + y.start + 1,
            to: v + y.end + 1
          })).filter((y) => n.schema.marks.code ? !n.doc.rangeHasMark(y.from, y.to, n.schema.marks.code) : !0).filter((y) => e.validate(y.value)).filter((y) => e.shouldAutoLink(y.value)).forEach((y) => {
            mp(y.from, y.to, n.doc).some((w) => w.mark.type === e.type) || a.addMark(y.from, y.to, e.type.create({
              href: y.href
            }));
          });
        }
      }), !!a.steps.length)
        return a;
    }
  });
}
function ex(e) {
  return new Ot({
    key: new Wt("handleClickLink"),
    props: {
      handleClick: (t, r, n) => {
        var i, o;
        if (n.button !== 0 || !t.editable)
          return !1;
        let a = n.target;
        const s = [];
        for (; a.nodeName !== "DIV"; )
          s.push(a), a = a.parentNode;
        if (!s.find((h) => h.nodeName === "A"))
          return !1;
        const c = gp(t.state, e.type.name), u = n.target, d = (i = u == null ? void 0 : u.href) !== null && i !== void 0 ? i : c.href, f = (o = u == null ? void 0 : u.target) !== null && o !== void 0 ? o : c.target;
        return u && d ? (window.open(d, f), !0) : !1;
      }
    }
  });
}
function tx(e) {
  return new Ot({
    key: new Wt("handlePasteLink"),
    props: {
      handlePaste: (t, r, n) => {
        const { state: i } = t, { selection: o } = i, { empty: a } = o;
        if (a)
          return !1;
        let s = "";
        n.content.forEach((u) => {
          s += u.textContent;
        });
        const c = gd(s, { defaultProtocol: e.defaultProtocol }).find((u) => u.isLink && u.value === s);
        return !s || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
const rx = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Tt(e, t) {
  const r = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return t && t.forEach((n) => {
    const i = typeof n == "string" ? n : n.scheme;
    i && r.push(i);
  }), !e || e.replace(rx, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const nx = up.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        fc(e);
        return;
      }
      fc(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Xy();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (e, t) => !!Tt(e, t.protocols),
      validate: (e) => !!e,
      shouldAutoLink: (e) => !!e
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(e) {
          return e.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (e) => {
          const t = e.getAttribute("href");
          return !t || !this.options.isAllowedUri(t, {
            defaultValidate: (r) => !!Tt(r, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!Tt(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", at(this.options.HTMLAttributes, e), 0] : [
      "a",
      at(this.options.HTMLAttributes, { ...e, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Tt(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: r } = e;
        return this.options.isAllowedUri(r, {
          defaultValidate: (n) => !!Tt(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      dp({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: r, defaultProtocol: n } = this.options, i = gd(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (a) => !!Tt(a, r),
              protocols: r,
              defaultProtocol: n
            }));
            i.length && i.forEach((o) => t.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return t;
        },
        type: this.type,
        getAttributes: (e) => {
          var t;
          return {
            href: (t = e.data) === null || t === void 0 ? void 0 : t.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const e = [], { protocols: t, defaultProtocol: r } = this.options;
    return this.options.autolink && e.push(Qy({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (n) => this.options.isAllowedUri(n, {
        defaultValidate: (i) => !!Tt(i, t),
        protocols: t,
        defaultProtocol: r
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(ex({
      type: this.type
    })), this.options.linkOnPaste && e.push(tx({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
});
function ix(e) {
  const [t, r] = J(!1);
  function n(i, o, a) {
    e.action && (e.action({ link: i, text: o, openInNewTab: a }), r(!1));
  }
  return /* @__PURE__ */ E(Or, { modal: !0, open: t, onOpenChange: r, children: [
    /* @__PURE__ */ l(Pr, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ l(
      F,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(ve, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ l(Kt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ l(vd, { editor: e.editor, onSetLink: n }) })
  ] });
}
const ox = /* @__PURE__ */ nx.extend({
  inclusive: !1,
  parseHTML() {
    return [
      {
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "a",
      at(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !0,
      button: ({ editor: t, t: r }) => ({
        component: ix,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: i, text: o, openInNewTab: a } = n, { state: s } = t, { from: c } = s.selection, u = o.length, d = c + u;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: i,
                    target: a ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: i }).setTextSelection({ from: c, to: d }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: r("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ot({
        props: {
          handleClick: (e, t) => {
            const { schema: r, doc: n, tr: i } = e.state, o = vp(n.resolve(t), r.marks.link);
            if (!o)
              return !1;
            const a = n.resolve(o.from), s = n.resolve(o.to), c = i.setSelection(
              new Gt(a, s)
            );
            e.dispatch(c);
          }
        }
      })
    ];
  }
});
function vd(e) {
  const { t } = Se(), [r, n] = J({
    text: "",
    link: ""
  }), [i, o] = J(!1);
  pe(() => {
    const s = () => {
      var c, u, d;
      if ((c = e.editor) != null && c.isActive("link")) {
        const { href: f, target: h } = e.editor.getAttributes("link"), { from: p, to: m } = e.editor.state.selection, v = e.editor.state.doc.textBetween(p, m, " ");
        n({ link: f || "", text: v }), o(h === "_blank");
      } else {
        const f = (u = e.editor.extensionManager.extensions.find(
          (h) => h.name === ox.name
        )) == null ? void 0 : u.options;
        o(((d = f == null ? void 0 : f.HTMLAttributes) == null ? void 0 : d.target) === "_blank");
      }
    };
    return s(), e.editor.on("selectionUpdate", s), () => {
      e.editor.off("selectionUpdate", s);
    };
  }, [e.editor]);
  function a(s) {
    s.preventDefault(), s.stopPropagation(), e == null || e.onSetLink(r.link, r.text, i), n({ text: "", link: "" });
  }
  return /* @__PURE__ */ l("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col richtext-gap-2", children: [
    /* @__PURE__ */ l(it, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ l(
      Ne,
      {
        className: "richtext-w-80",
        onChange: (s) => n({ ...r, text: s.target.value }),
        placeholder: "Text",
        required: !0,
        type: "text",
        value: r.text
      }
    ) }) }),
    /* @__PURE__ */ l(it, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ E("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
      /* @__PURE__ */ l(
        Ne,
        {
          className: "richtext-pl-10",
          onChange: (s) => n({ ...r, link: s.target.value }),
          required: !0,
          type: "url",
          value: r.link
        }
      ),
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ l(
        ve,
        {
          className: "richtext-size-5 richtext-text-muted-foreground",
          name: "Link"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ l(it, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ l(
        Pd,
        {
          checked: i,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ l(
      Ce,
      {
        className: "richtext-mt-2 richtext-self-end",
        onClick: a,
        type: "button",
        children: t("editor.link.dialog.button.apply")
      }
    )
  ] }) });
}
function ax(e) {
  const { t } = Se();
  return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ l(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: av(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ l(
        F,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ l(
        F,
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
function sx({ editor: e, disabled: t }) {
  var h;
  const r = e.extensionManager.extensions.find((p) => p.name === "link"), n = (h = r == null ? void 0 : r.options) == null ? void 0 : h.bubbleMenuComponents, i = (n == null ? void 0 : n.LinkEditBlock) || vd, o = (n == null ? void 0 : n.LinkViewBlock) || ax, [a, s] = J(!1), c = we(() => {
    const { href: p } = e.getAttributes("link");
    return p;
  }, [e]), u = oe(({ editor: p }) => p.isActive("link"), []), d = (p, m, v) => {
    const g = e.state.selection, { from: y } = g, w = (m == null ? void 0 : m.length) ?? 0, A = y + w;
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: m,
      marks: [
        {
          type: "link",
          attrs: {
            href: p,
            target: v ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: p }).setTextSelection({ from: y, to: A }).focus().run(), s(!1);
  }, f = oe(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), s(!1);
  }, [e]);
  return /* @__PURE__ */ l(de, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e,
      shouldShow: u,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          s(!1);
        }
      },
      children: t ? /* @__PURE__ */ l(de, {}) : /* @__PURE__ */ l(de, { children: a ? /* @__PURE__ */ l(i, { onSetLink: d, editor: e }) : /* @__PURE__ */ l(
        o,
        {
          editor: e,
          onClear: f,
          onEdit: () => {
            s(!0);
          },
          link: c
        }
      ) })
    }
  ) });
}
const cx = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, yd = Er.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", at(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setImage: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      bu({
        find: cx,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, n] = e;
          return { src: r, alt: t, title: n };
        }
      })
    ];
  }
}), jn = $e.Root, zn = $e.Trigger, lx = $e.Portal, xd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Overlay,
  {
    ref: r,
    className: ee(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
xd.displayName = $e.Overlay.displayName;
const Ir = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ E(lx, { children: [
  /* @__PURE__ */ l(xd, {}),
  /* @__PURE__ */ E(
    $e.Content,
    {
      ref: n,
      className: ee(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ E($e.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ l(gu, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ l("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ir.displayName = $e.Content.displayName;
function bd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: ee(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
bd.displayName = "DialogHeader";
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: ee(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
Za.displayName = "DialogFooter";
const Rr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Title,
  {
    ref: r,
    className: ee(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
Rr.displayName = $e.Title.displayName;
const ux = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $e.Description,
  {
    ref: r,
    className: ee("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
ux.displayName = $e.Description.displayName;
const hc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, pc = Oa, Hn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return pc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((u) => {
    const d = r == null ? void 0 : r[u], f = o == null ? void 0 : o[u];
    if (d === null) return null;
    const h = hc(d) || hc(f);
    return i[u][h];
  }), s = r && Object.entries(r).reduce((u, d) => {
    let [f, h] = d;
    return h === void 0 || (u[f] = h), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: f, className: h, ...p } = d;
    return Object.entries(p).every((m) => {
      let [v, g] = m;
      return Array.isArray(g) ? g.includes({
        ...o,
        ...s
      }[v]) : {
        ...o,
        ...s
      }[v] === g;
    }) ? [
      ...u,
      f,
      h
    ] : u;
  }, []);
  return pc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, dx = Hn(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50",
  {
    variants: {
      variant: {
        default: "!richtext-bg-primary !richtext-text-primary-foreground hover:!richtext-bg-primary/90",
        destructive: "richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/90",
        outline: "richtext-border richtext-border-input richtext-bg-background hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        secondary: "richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        ghost: "hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        link: "richtext-text-primary richtext-underline-offset-4 hover:richtext-underline"
      },
      size: {
        default: "richtext-h-10 richtext-px-4 richtext-py-2",
        sm: "richtext-h-9 richtext-rounded-md richtext-px-3",
        lg: "richtext-h-11 richtext-rounded-md richtext-px-8",
        icon: "richtext-h-10 richtext-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ce = ne.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, o) => /* @__PURE__ */ l(
    n ? fu : "button",
    {
      className: ee(dx({ variant: t, size: r, className: e })),
      ref: o,
      ...i
    }
  )
);
Ce.displayName = "Button";
function bw(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function ww(e) {
  return e.split(".").pop();
}
function Sw(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function Aw(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function fx(e) {
  return new Promise((t) => {
    const r = new FileReader();
    r.addEventListener(
      "load",
      () => {
        t({
          alt: e.name,
          src: r.result
        });
      },
      !1
    ), r.readAsDataURL(e);
  });
}
function hx(e, t) {
  const r = e.split(","), n = r[0].match(/:(.*?);/)[1], i = atob(r[r.length - 1]);
  let o = i.length;
  const a = new Uint8Array(o);
  for (; o--; )
    a[o] = i.charCodeAt(o);
  return new File([a], t, { type: n });
}
function px(e, t) {
  const r = e.type, n = e.name.toLowerCase(), i = n.split(".").pop();
  if (!i) return !1;
  const a = r || {
    heif: "image/heif",
    heic: "image/heic",
    dng: "image/x-adobe-dng",
    cr2: "image/x-canon-cr2",
    nef: "image/x-nikon-nef",
    arw: "image/x-sony-arw",
    raf: "image/x-fuji-raf",
    orf: "image/x-olympus-orf"
  }[i];
  return t.some((s) => {
    if (s.startsWith("."))
      return n.endsWith(s);
    if (s.endsWith("/*")) {
      const c = s.split("/")[0];
      return a == null ? void 0 : a.startsWith(c + "/");
    }
    return a === s;
  });
}
function wd(e, t) {
  const { acceptMimes: r, maxSize: n, t: i, toast: o } = t, a = [];
  return (Array.isArray(e) ? e : Object.values(e)).forEach((c) => {
    if (!px(c, r)) {
      t.onError ? t.onError({
        type: "type",
        message: i("editor.upload.fileTypeNotSupported", { fileName: c.name }),
        file: c
      }) : o({
        variant: "default",
        title: i("editor.upload.fileTypeNotSupported", { fileName: c.name })
      });
      return;
    }
    if (c.size > n) {
      const u = (n / 1024 / 1024).toFixed(2);
      t.onError ? t.onError({
        type: "size",
        message: i("editor.upload.fileSizeTooBig", { fileName: c.name, size: u }),
        file: c
      }) : o({
        variant: "default",
        title: i("editor.upload.fileSizeTooBig", { fileName: c.name, size: u })
      });
      return;
    }
    a.push(c);
  }), a;
}
function mx({ editor: e, imageInline: t, onClose: r, disabled: n, alt: i }) {
  var $, C;
  const { t: o } = Se(), { toast: a } = is(), [s, c] = J(!1), [u, d] = J(!1), f = ir.useRef(null), [h, p] = ir.useState(), [m, v] = ir.useState(""), g = ot(null), [y, w] = J({
    src: "",
    file: null
  }), A = we(() => {
    var S;
    return (S = e.extensionManager.extensions.find(
      (P) => P.name === wr.name
    )) == null ? void 0 : S.options;
  }, [e]);
  function I(S) {
    if (f.current && S.width && S.height) {
      const P = T(f.current, S);
      v(P);
    }
  }
  function T(S, P) {
    const D = document.createElement("canvas"), H = S.naturalWidth / S.width, j = S.naturalHeight / S.height;
    D.width = P.width * H, D.height = P.height * j;
    const W = D.getContext("2d");
    return W && (W.imageSmoothingEnabled = !1, W.drawImage(
      S,
      P.x * H,
      P.y * j,
      P.width * H,
      P.height * j,
      0,
      0,
      P.width * H,
      P.height * j
    )), D.toDataURL("image/png", 1);
  }
  const M = ir.useCallback(async () => {
    var S;
    if (!u) {
      d(!0);
      try {
        const P = hx(m, ((S = y == null ? void 0 : y.file) == null ? void 0 : S.name) || "image.png");
        let D = "";
        A.upload ? D = await A.upload(P) : D = URL.createObjectURL(P), e.chain().focus().setImageInline({ src: D, inline: t, alt: i }).run(), c(!1), w({
          src: "",
          file: null
        }), N(), r();
      } catch (P) {
        console.log("Error cropping image", P);
      } finally {
        d(!1);
      }
    }
  }, [m, e, t, u, r, ($ = y == null ? void 0 : y.file) == null ? void 0 : $.name, A]);
  function L(S) {
    var P;
    S.preventDefault(), (P = g.current) == null || P.click();
  }
  const k = async (S) => {
    var W;
    const P = (W = S == null ? void 0 : S.target) == null ? void 0 : W.files;
    if (!e || e.isDestroyed || P.length === 0) {
      S.target.value = "";
      return;
    }
    const D = wd(P, {
      acceptMimes: A == null ? void 0 : A.acceptMimes,
      maxSize: A == null ? void 0 : A.maxSize,
      t: o,
      toast: a,
      onError: A.onError
    });
    if (D.length <= 0) {
      S.target.value = "";
      return;
    }
    const H = D[0], j = await fx(H);
    c(!0), w({
      src: j.src,
      file: H
    });
  }, N = () => {
    g.current && (g.current.value = "");
  };
  return /* @__PURE__ */ E(de, { children: [
    /* @__PURE__ */ l(
      Ce,
      {
        className: "richtext-mt-1 richtext-w-full",
        disabled: n,
        onClick: L,
        size: "sm",
        children: o("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ E(
      jn,
      {
        open: s,
        onOpenChange: (S) => {
          c(S), S || (w({ src: "", file: null }), N());
        },
        children: [
          /* @__PURE__ */ l(zn, {}),
          /* @__PURE__ */ E(Ir, { children: [
            /* @__PURE__ */ l(Rr, { children: o("editor.image.dialog.tab.uploadCrop") }),
            /* @__PURE__ */ l("div", { children: y.src && /* @__PURE__ */ l(
              Ap,
              {
                className: "richtext-w-full",
                crop: h,
                onChange: (S) => p(S),
                onComplete: (S) => I(S),
                children: /* @__PURE__ */ l(
                  "img",
                  {
                    alt: "Crop me",
                    ref: f,
                    src: y.src
                  }
                )
              }
            ) }),
            /* @__PURE__ */ E(Za, { children: [
              /* @__PURE__ */ E(
                Ce,
                {
                  disabled: u,
                  onClick: () => {
                    c(!1), w({
                      src: "",
                      file: null
                    }), N();
                  },
                  children: [
                    o("editor.imageUpload.cancel"),
                    /* @__PURE__ */ l(
                      ve,
                      {
                        className: "richtext-ml-1",
                        name: "Trash2"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l(
                Ce,
                {
                  className: "richtext-w-fit",
                  disabled: u || !h,
                  onClick: M,
                  children: u ? /* @__PURE__ */ E(de, { children: [
                    o("editor.imageUpload.uploading"),
                    /* @__PURE__ */ l(
                      ve,
                      {
                        className: "richtext-ml-1 richtext-animate-spin",
                        name: "Loader"
                      }
                    )
                  ] }) : /* @__PURE__ */ E(de, { children: [
                    o("editor.imageUpload.crop"),
                    /* @__PURE__ */ l(
                      ve,
                      {
                        className: "richtext-ml-1",
                        name: "Crop"
                      }
                    )
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l(
      "input",
      {
        accept: ((C = A == null ? void 0 : A.acceptMimes) == null ? void 0 : C.join(",")) || "image/*",
        multiple: !1,
        onChange: k,
        ref: g,
        style: { display: "none" },
        type: "file"
      }
    )
  ] });
}
function qn(e) {
  function t() {
    const o = ot(e), a = oe(() => o.current, []), s = ot(/* @__PURE__ */ new Set()), c = oe((d) => {
      o.current = { ...o.current, ...d }, s.current.forEach((f) => f());
    }, []), u = oe((d) => (s.current.add(d), () => s.current.delete(d)), []);
    return {
      get: a,
      set: c,
      subscribe: u
    };
  }
  const r = wf(null);
  function n({ children: o }) {
    return /* @__PURE__ */ l(r.Provider, { value: t(), children: o });
  }
  function i(o) {
    const a = Sf(r);
    if (!a)
      throw new Error("Store not found");
    return [Af(
      a.subscribe,
      () => o(a.get()),
      () => o(e)
    ), a.set];
  }
  return {
    Provider: n,
    useStore: i
  };
}
qn({
  value: !1
});
qn({
  value: !1
});
const { Provider: gx, useStore: Sd } = qn({
  value: !1
}), { Provider: vx, useStore: Ad } = qn({
  value: "light"
});
Mf("0");
function Pn(e, t) {
  return window.addEventListener(e, t), () => {
    window.removeEventListener(e, t);
  };
}
function Qa(e, t) {
  window.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}
const Rt = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EDIT: (e) => `EDIT-${e}`,
  UPDATE_THEME: (e) => `UPDATE_THEME-${e}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, yx = {
  setOpen: (e, t) => {
    Qa(Rt.UPLOAD_IMAGE(e), t);
  }
};
function xx(e) {
  var I;
  const { t } = Se(), { toast: r } = is(), [n, i] = J(!1), [o, a] = J(!1), s = (T) => {
    i(T.detail);
  }, [c, u] = J(""), [d, f] = J(""), h = ot(null), p = ((I = e.editor.extensionManager.extensions.find(
    (T) => T.name === wr.name
  )) == null ? void 0 : I.options.defaultInline) || !1, [m, v] = J(p), g = we(() => {
    var M;
    return (M = e.editor.extensionManager.extensions.find(
      (L) => L.name === wr.name
    )) == null ? void 0 : M.options;
  }, [e.editor]);
  pe(() => {
    const T = Pn(Rt.UPLOAD_IMAGE(e.editor.id), s);
    return () => {
      T();
    };
  }, []);
  async function y(T) {
    var k;
    const M = (k = T == null ? void 0 : T.target) == null ? void 0 : k.files;
    if (!e.editor || e.editor.isDestroyed || M.length === 0 || o) {
      T.target.value = "";
      return;
    }
    const L = wd(M, {
      acceptMimes: g == null ? void 0 : g.acceptMimes,
      maxSize: g == null ? void 0 : g.maxSize,
      t,
      toast: r,
      onError: g.onError
    });
    if (L.length <= 0) {
      T.target.value = "";
      return;
    }
    a(!0);
    try {
      if (g != null && g.multiple) {
        const N = L.map(async (C) => {
          let S = "";
          return g.upload ? S = await g.upload(C) : S = URL.createObjectURL(C), S;
        });
        (await Promise.all(N)).forEach((C) => {
          e.editor.chain().focus().setImageInline({ src: C, inline: m, alt: d }).run();
        });
      } else {
        const N = L[0];
        let $ = "";
        g.upload ? $ = await g.upload(N) : $ = URL.createObjectURL(N), e.editor.chain().focus().setImageInline({ src: $, inline: m, alt: d }).run();
      }
      i(!1), f(""), v(p);
    } catch (N) {
      console.error("Error uploading image", N), g.onError ? g.onError({
        type: "upload",
        message: t("editor.upload.error")
      }) : r({
        variant: "destructive",
        title: t("editor.upload.error")
      });
    } finally {
      a(!1), T.target.value = "";
    }
  }
  function w(T) {
    T.preventDefault(), T.stopPropagation(), e.editor.chain().focus().setImageInline({ src: c, inline: m, alt: d }).run(), i(!1), v(p), u(""), f("");
  }
  function A(T) {
    var M;
    T.preventDefault(), (M = h.current) == null || M.click();
  }
  return /* @__PURE__ */ E(
    jn,
    {
      onOpenChange: i,
      open: n,
      children: [
        /* @__PURE__ */ l(zn, { asChild: !0, children: /* @__PURE__ */ l(
          F,
          {
            action: () => i(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ E(Ir, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ E(
            Nd,
            {
              activationMode: "manual",
              defaultValue: g.resourceImage === "both" || g.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ E(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  g.resourceImage === "both" || g.resourceImage === "upload" ? /* @__PURE__ */ l(Sr, { value: "upload", children: t("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ l(de, {}),
                  g.resourceImage === "both" || g.resourceImage === "link" ? /* @__PURE__ */ l(Sr, { value: "link", children: t("editor.image.dialog.tab.url") }) : /* @__PURE__ */ l(de, {})
                ] }),
                /* @__PURE__ */ E("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ l(
                    zd,
                    {
                      checked: m,
                      onCheckedChange: (T) => {
                        v(T);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(it, { children: t("editor.link.dialog.inline") })
                ] }),
                g.enableAlt && /* @__PURE__ */ E("div", { className: "richtext-my-[10px] ", children: [
                  /* @__PURE__ */ l(it, { className: "mb-[6px]", children: t("editor.imageUpload.alt") }),
                  /* @__PURE__ */ l(
                    Ne,
                    {
                      onChange: (T) => f(T.target.value),
                      required: !0,
                      type: "text",
                      value: d
                    }
                  )
                ] }),
                /* @__PURE__ */ E(Ar, { value: "upload", children: [
                  /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ l(
                      Ce,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        disabled: o,
                        onClick: A,
                        size: "sm",
                        children: o ? /* @__PURE__ */ E(de, { children: [
                          t("editor.imageUpload.uploading"),
                          /* @__PURE__ */ l(
                            ve,
                            {
                              className: "richtext-ml-1 richtext-animate-spin",
                              name: "Loader"
                            }
                          )
                        ] }) : t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ l(
                      mx,
                      {
                        alt: d,
                        disabled: o,
                        editor: e.editor,
                        imageInline: m,
                        onClose: () => {
                          yx.setOpen(e.editor.id, !1), f("");
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      accept: g.acceptMimes.join(",") || "image/*",
                      multiple: g.multiple,
                      onChange: y,
                      ref: h,
                      style: { display: "none" },
                      type: "file"
                    }
                  )
                ] }),
                /* @__PURE__ */ l(Ar, { value: "link", children: /* @__PURE__ */ l("form", { onSubmit: w, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ l(
                    Ne,
                    {
                      autoFocus: !0,
                      onChange: (T) => u(T.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: c
                    }
                  ),
                  /* @__PURE__ */ l(Ce, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const qr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function bx(e) {
  var k, N, $;
  const [t, r] = J({
    width: Jr,
    height: Jr
  }), [n, i] = J({
    width: 0,
    height: 0
  }), [o] = J([
    qr.TOP_LEFT,
    qr.TOP_RIGHT,
    qr.BOTTOM_LEFT,
    qr.BOTTOM_RIGHT
  ]), [a, s] = J(!1), [c, u] = J({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: f } = (k = e == null ? void 0 : e.node) == null ? void 0 : k.attrs, h = f && (d === "left" || d === "right"), p = we(() => {
    var De;
    const { src: C, alt: S, width: P, height: D, flipX: H, flipY: j } = (De = e == null ? void 0 : e.node) == null ? void 0 : De.attrs, W = rn(P) ? `${P}px` : P, Q = rn(D) ? `${D}px` : D, te = [];
    H && te.push("rotateX(180deg)"), j && te.push("rotateY(180deg)");
    const ye = te.join(" ");
    return {
      src: C || void 0,
      alt: S || void 0,
      style: {
        width: W || void 0,
        height: Q || void 0,
        transform: ye || "none",
        ...h ? { float: d } : {}
      }
    };
  }, [(N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs]), m = we(() => {
    const {
      style: { width: C }
    } = p;
    return { width: C === "100%" ? C : void 0 };
  }, [p]);
  function v(C) {
    i({
      width: C.target.width,
      height: C.target.height
    });
  }
  function g() {
    const { editor: C, getPos: S } = e;
    C.commands.setNodeSelection(S());
  }
  const y = oe(
    yr(() => {
      const { editor: C } = e, { width: S } = getComputedStyle(C.view.dom);
      r((P) => ({
        ...P,
        width: Number.parseInt(S, 10)
      }));
    }, Zr),
    [e == null ? void 0 : e.editor]
  );
  function w(C, S) {
    C.preventDefault(), C.stopPropagation();
    const P = n.width, D = n.height, H = P / D;
    let j = Number(e.node.attrs.width), W = Number(e.node.attrs.height);
    const Q = t.width;
    j && !W ? (j = j > Q ? Q : j, W = Math.round(j / H)) : W && !j ? (j = Math.round(W * H), j = j > Q ? Q : j) : !j && !W ? (j = P > Q ? Q : P, W = Math.round(j / H)) : j = j > Q ? Q : j, s(!0), u({
      x: C.clientX,
      y: C.clientY,
      w: j,
      h: W,
      dir: S
    });
  }
  const A = oe(
    yr((C) => {
      if (C.preventDefault(), C.stopPropagation(), !a)
        return;
      const { x: S, w: P, dir: D } = c, H = (C.clientX - S) * (/l/.test(D) ? -1 : 1), j = qu(P + H, hu, t.width);
      e.updateAttributes({
        width: j,
        height: null
      });
    }, Zr),
    [a, c, t, e.updateAttributes]
  ), I = oe(
    (C) => {
      C.preventDefault(), C.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), g());
    },
    [a, g]
  ), T = oe(() => {
    document == null || document.addEventListener("mousemove", A, !0), document == null || document.addEventListener("mouseup", I, !0);
  }, [A, I]), M = oe(() => {
    document == null || document.removeEventListener("mousemove", A, !0), document == null || document.removeEventListener("mouseup", I, !0);
  }, [A, I]);
  pe(() => (a ? T() : M(), () => {
    M();
  }), [a, T, M]);
  const L = we(() => new ResizeObserver(() => y()), [y]);
  return pe(() => (L.observe(e.editor.view.dom), () => {
    L.disconnect();
  }), [e.editor.view.dom, L]), /* @__PURE__ */ l(
    Pa,
    {
      as: f ? "span" : "div",
      className: "image-view",
      style: {
        float: h ? d : void 0,
        margin: h ? d === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: f ? "inline" : "block",
        textAlign: h ? void 0 : d,
        width: (($ = p.style) == null ? void 0 : $.width) ?? "auto",
        ...h ? {} : m
      },
      children: /* @__PURE__ */ E(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: m,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ l(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: g,
                onLoad: v,
                src: p.src,
                style: p.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((C) => /* @__PURE__ */ l(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${C}`,
                onMouseDown: (S) => w(S, C)
              },
              `image-dir-${C}`
            )) })
          ]
        }
      )
    }
  );
}
const Ft = new Wt("upload-image");
function wx() {
  return new Ot({
    key: Ft,
    state: {
      init() {
        return xp.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const r = e.getMeta(Ft);
        if (r != null && r.add)
          for (const { id: n, pos: i, src: o } of r.add) {
            const a = Sx(o), s = yp.widget(i, a, { id: n });
            t = t.add(e.doc, [s]);
          }
        else if (r != null && r.remove)
          for (const n of r.remove)
            t = t.remove(t.find(void 0, void 0, (i) => i.id === n));
        return t;
      }
    },
    props: {
      decorations(e) {
        return this.getState(e);
      }
    }
  });
}
function Sx(e) {
  const t = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = e, r.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(r), t;
}
function Ax(e, t) {
  var i;
  const n = Ft.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (i = n[0]) == null ? void 0 : i.from : null;
}
function Cx({ validateFn: e, onUpload: t, postUpload: r, defaultInline: n = !1 }) {
  return (i, o, a) => {
    for (const s of i) {
      if (e && !e(s))
        continue;
      const c = Date.now().toString(), u = o.state.tr;
      u.selection.empty || u.deleteSelection();
      const d = URL.createObjectURL(s);
      u.setMeta(Ft, {
        add: [{ id: c, pos: a, src: d }]
      }), o.dispatch(u), t(s).then(
        async (f) => {
          var w;
          r && typeof f == "string" && (f = await r(f));
          const { schema: h } = o.state;
          let p = Ax(o.state, c);
          if (p === null)
            return;
          const m = typeof f == "object" ? d : f, v = (w = h.nodes.image) == null ? void 0 : w.create({
            src: m,
            inline: n
          });
          if (!v)
            return;
          const { doc: g } = o.state;
          p > g.content.size && (p = g.content.size - 1);
          const y = o.state.tr.replaceWith(p, p, v).setMeta(Ft, { remove: [c] });
          o.dispatch(y);
        },
        () => {
          const f = o.state.tr.delete(a, a).setMeta(Ft, { remove: [c] });
          o.dispatch(f);
        }
      );
    }
  };
}
function Tx(e, t, r) {
  var i;
  const n = [...((i = t.clipboardData) == null ? void 0 : i.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return r(n, e, o + 1), !0;
  }
  return !1;
}
function Ex(e, t, r, n) {
  var o;
  const i = [...((o = t.dataTransfer) == null ? void 0 : o.files) || []];
  if (!r && i.length > 0) {
    t.preventDefault();
    const a = e.posAtCoords({
      left: t.clientX,
      top: t.clientY
    });
    if (a)
      return n(i, e, a.pos + 1), !0;
  }
  return !1;
}
const Ix = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  multiple: !0,
  resourceImage: "both",
  defaultInline: !1,
  enableAlt: !0
}, wr = /* @__PURE__ */ yd.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...Ix,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => {
        var i, o;
        return {
          component: xx,
          componentProps: {
            action: () => !0,
            upload: r.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((o = (i = t.can()).setImage) != null && o.call(i, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (t) => {
          const r = t.style.width || t.getAttribute("width") || null;
          return r ? Number.parseInt(r, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      },
      alt: {
        default: "",
        parseHTML: (t) => t.getAttribute("alt"),
        renderHTML: (t) => ({
          alt: t.alt
        })
      }
    };
  },
  addNodeView() {
    return Na(bx);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: {
          ...t,
          inline: t.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { flipX: t, flipY: r, align: n, inline: i } = e, o = i && (n === "left" || n === "right"), a = t || r ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${r ? "180" : "0"}deg);` : "", s = o ? "" : `text-align: ${n};`, d = `${o ? `float: ${n};` : ""}${o ? n === "left" ? "margin: 1em 1em 1em 0;" : "margin: 1em 0 1em 1em;" : ""}${a}`;
    return [
      i ? "span" : "div",
      {
        style: s,
        class: "image"
      },
      [
        "img",
        at(
          {
            height: "auto",
            style: d
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (e) => {
          var o;
          const t = e == null ? void 0 : e.parentElement, r = e == null ? void 0 : e.getAttribute("width"), n = (e == null ? void 0 : e.getAttribute("flipx")) || !1, i = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || ((o = t == null ? void 0 : t.style) == null ? void 0 : o.textAlign) || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: i === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), r = t == null ? void 0 : t.getAttribute("width"), n = (t == null ? void 0 : t.getAttribute("flipx")) || !1, i = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: i === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = Cx({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new Ot({
        props: {
          handlePaste: (r, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : Tx(r, n, t),
          handleDrop: (r, n, i, o) => (!(n instanceof DragEvent) || !n.dataTransfer || Ex(r, n, o, t), !1)
        }
      }),
      wx()
    ];
  }
});
function Rx({ selectImage: e, giphyApiKey: t, children: r }) {
  const [n, i] = J([]), [o] = J(15), a = ot(null), s = (u, d = "search") => {
    if (!t)
      return;
    const h = `${d === "search" ? `https://api.giphy.com/v1/gifs/search?q=${u}` : `https://api.giphy.com/v1/gifs/trending?q=${u}`}&limit=${o}&api_key=${t}`;
    fetch(h).then((p) => p.json()).then((p) => {
      i(p.data);
    }).catch((p) => {
      console.log(p);
    });
  };
  pe(() => {
    s("", "trend");
  }, []);
  const c = oe(
    Dn((u) => {
      if (!u.target.value) {
        s("", "trend");
        return;
      }
      s(u.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ E(Or, { modal: !0, children: [
    /* @__PURE__ */ l(Pr, { asChild: !0, children: r }),
    /* @__PURE__ */ l(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: t ? /* @__PURE__ */ E(de, { children: [
          /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ l(
            Ne,
            {
              onChange: c,
              placeholder: "Search GIF",
              ref: a,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ l("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((u) => /* @__PURE__ */ l(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: u.images.fixed_width_downsampled.height,
              onClick: () => e(u),
              src: u.images.fixed_width_downsampled.url,
              width: u.images.fixed_width_downsampled.width
            },
            `giphy-${u.id}`
          )) : /* @__PURE__ */ l("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function Ox({ editor: e, icon: t, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ l(
    Rx,
    {
      giphyApiKey: r,
      selectImage: (o) => {
        const { url: a } = o.images.original;
        e.chain().focus().setImageGif({ src: a }).run();
      },
      children: /* @__PURE__ */ l(
        F,
        {
          icon: t,
          tooltip: n == null ? void 0 : n.tooltip
        }
      )
    }
  );
}
const Fr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Px(e) {
  var M, L;
  const [t, r] = J({
    width: Jr,
    height: Jr
  }), [n, i] = J({
    width: 0,
    height: 0
  }), [o] = J([
    Fr.TOP_LEFT,
    Fr.TOP_RIGHT,
    Fr.BOTTOM_LEFT,
    Fr.BOTTOM_RIGHT
  ]), [a, s] = J(!1), [c, u] = J({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d } = (M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs, f = we(() => {
    var D;
    const { src: k, alt: N, width: $, height: C } = (D = e == null ? void 0 : e.node) == null ? void 0 : D.attrs, S = rn($) ? `${$}px` : $, P = rn(C) ? `${C}px` : C;
    return {
      src: k || void 0,
      alt: N || void 0,
      style: {
        width: S || void 0,
        height: P || void 0
      }
    };
  }, [(L = e == null ? void 0 : e.node) == null ? void 0 : L.attrs]), h = we(() => {
    const {
      style: { width: k }
    } = f;
    return { width: k === "100%" ? k : void 0 };
  }, [f]);
  function p(k) {
    i({
      width: k.target.width,
      height: k.target.height
    });
  }
  function m() {
    const { editor: k, getPos: N } = e;
    k.commands.setNodeSelection(N());
  }
  const v = oe(
    yr(() => {
      const { editor: k } = e, { width: N } = getComputedStyle(k.view.dom);
      r(($) => ({
        ...$,
        width: Number.parseInt(N, 10)
      }));
    }, Zr),
    [e == null ? void 0 : e.editor]
  );
  function g(k, N) {
    k.preventDefault(), k.stopPropagation();
    const $ = n.width, C = n.height, S = $ / C;
    let P = Number(e.node.attrs.width), D = Number(e.node.attrs.height);
    const H = t.width;
    P && !D ? (P = P > H ? H : P, D = Math.round(P / S)) : D && !P ? (P = Math.round(D * S), P = P > H ? H : P) : !P && !D ? (P = $ > H ? H : $, D = Math.round(P / S)) : P = P > H ? H : P, s(!0), u({
      x: k.clientX,
      y: k.clientY,
      w: P,
      h: D,
      dir: N
    });
  }
  const y = oe(
    yr((k) => {
      if (k.preventDefault(), k.stopPropagation(), !a)
        return;
      const { x: N, w: $, dir: C } = c, S = (k.clientX - N) * (/l/.test(C) ? -1 : 1), P = qu($ + S, hu, t.width);
      e.updateAttributes({
        width: P,
        height: null
      });
    }, Zr),
    [a, c, t, e.updateAttributes]
  ), w = oe(
    (k) => {
      k.preventDefault(), k.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), m());
    },
    [a, m]
  ), A = oe(() => {
    document == null || document.addEventListener("mousemove", y, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [y, w]), I = oe(() => {
    document == null || document.removeEventListener("mousemove", y, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [y, w]);
  pe(() => (a ? A() : I(), () => {
    I();
  }), [a, A, I]);
  const T = we(() => new ResizeObserver(() => v()), [v]);
  return pe(() => (T.observe(e.editor.view.dom), () => {
    T.disconnect();
  }), [e.editor.view.dom, T]), /* @__PURE__ */ l(
    Pa,
    {
      className: "image-view",
      style: { ...h, width: "100%", textAlign: d },
      children: /* @__PURE__ */ E(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: h,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ l(
              "img",
              {
                alt: f.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: m,
                onLoad: p,
                src: f.src,
                style: f.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((k) => /* @__PURE__ */ l(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${k}`,
                onMouseDown: (N) => g(N, k)
              },
              `image-dir-${k}`
            )) })
          ]
        }
      )
    }
  );
}
const Cd = /* @__PURE__ */ yd.extend({
  name: "imageGif",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: t, extension: r, t: n }) => {
        var o;
        const i = ((o = r == null ? void 0 : r.options) == null ? void 0 : o.GIPHY_API_KEY) || "";
        return {
          component: Ox,
          componentProps: {
            editor: t,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: n("editor.imageGif.tooltip"),
            giphyApiKey: i
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const r = t.style.width || t.getAttribute("width") || "10";
          return r === void 0 ? null : Number.parseInt(`${r}`, 10);
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return Na(Px);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageGif: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImageGif: (t) => ({ commands: r }) => r.updateAttributes(this.name, t),
      setAlignImageGif: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageGIf"
      },
      [
        "img",
        at(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), r = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            title: t == null ? void 0 : t.getAttribute("title"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
});
function Nx(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return !(t != null && t.length) || t.length === 1 && t[0] === "." ? !0 : t.some((n) => {
    if (n.includes("*")) {
      const i = n.replace(/\./g, "\\.").replace(/\*/g, ".*");
      return new RegExp(`^${i}$`).test(r.hostname);
    }
    return r.hostname.includes(n);
  });
}
function kx(e) {
  const { t } = Se(), [r, n] = J(""), i = ot(null), [o, a] = J(""), [s, c] = J(!1), u = (m) => {
    c(m.detail);
  };
  pe(() => {
    const m = Pn(Rt.UPLOAD_VIDEO(e.editor.id), u);
    return () => {
      m();
    };
  }, []);
  const d = we(() => {
    var v;
    return (v = e.editor.extensionManager.extensions.find(
      (g) => g.name === Td.name
    )) == null ? void 0 : v.options;
  }, [e.editor]);
  async function f(m) {
    var w;
    const v = (w = m == null ? void 0 : m.target) == null ? void 0 : w.files;
    if (!e.editor || e.editor.isDestroyed || v.length === 0)
      return;
    const g = v[0];
    let y = "";
    d.upload ? y = await d.upload(g) : y = URL.createObjectURL(g), e.editor.chain().focus().setVideo({
      src: y,
      width: "100%"
    }).run(), c(!1);
  }
  function h(m) {
    m.preventDefault(), m.stopPropagation(), r && (e.editor.chain().focus().setVideo({
      src: r,
      width: "100%"
    }).run(), c(!1));
  }
  function p(m) {
    var v;
    m.preventDefault(), (v = i.current) == null || v.click();
  }
  return /* @__PURE__ */ E(
    jn,
    {
      onOpenChange: c,
      open: s,
      children: [
        /* @__PURE__ */ l(zn, { asChild: !0, children: /* @__PURE__ */ l(
          F,
          {
            action: () => c(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ E(Ir, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.video.dialog.title") }),
          /* @__PURE__ */ E(
            Nd,
            {
              activationMode: "manual",
              defaultValue: (d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ E(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload") && /* @__PURE__ */ l(Sr, { value: "upload", children: t("editor.video.dialog.tab.upload") }),
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "link") && /* @__PURE__ */ l(Sr, { value: "link", children: t("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ E(Ar, { value: "upload", children: [
                  /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ l(
                    Ce,
                    {
                      className: "richtext-mt-1 richtext-w-full",
                      onClick: p,
                      size: "sm",
                      children: t("editor.video.dialog.tab.upload")
                    }
                  ) }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      accept: "video/*",
                      multiple: !0,
                      onChange: f,
                      ref: i,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ E(Ar, { value: "link", children: [
                  /* @__PURE__ */ l("form", { onSubmit: h, children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ l(
                      Ne,
                      {
                        autoFocus: !0,
                        placeholder: t("editor.video.dialog.placeholder"),
                        required: !0,
                        type: "url",
                        value: r,
                        onChange: (m) => {
                          n(m.target.value);
                        },
                        onBlur: (m) => {
                          const v = m.target.value, g = d.videoProviders || ["."];
                          v && !Nx(v, g) ? a("Invalid video URL") : a("");
                        }
                      }
                    ),
                    /* @__PURE__ */ l(Ce, { type: "submit", children: t("editor.video.dialog.button.apply") })
                  ] }) }),
                  o && /* @__PURE__ */ l("div", { className: "richtext-my-[5px] richtext-text-red-500", children: o })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Cw(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const Mx = (e) => typeof e == "number", Lx = (e) => typeof e == "string", $x = (e) => typeof e == "function";
function _x(e, t = "px") {
  if (!e)
    return e;
  const r = Mx(e) ? String(e) : e, n = Number.parseFloat(r), i = r.match(/[%a-z]+$/i), o = i ? i[0] : t;
  return Number.isNaN(n) ? e : n + o;
}
function Dx(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((i) => i.name === t);
}
function Tw(e) {
  return e.map((t) => Lx(t) ? { value: t, name: t } : t);
}
function Bx(e) {
  e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/");
  const t = e.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  t && (e = `https://www.youtube.com/embed/${t[1]}`);
  const r = e.match(/^https:\/\/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (r) {
    const i = r[1], o = r[2];
    o ? e = `https://player.vimeo.com/video/${i}?h=${o}` : e = `https://player.vimeo.com/video/${i}`;
  }
  return /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const Td = /* @__PURE__ */ Er.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      resourceVideo: "both",
      width: ra["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper"
        // style: 'display: flex;justify-content: center;',
      },
      button: ({ editor: e, t }) => {
        var r, n;
        return {
          component: kx,
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((n = (r = e.can()).setVideo) != null && n.call(r, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            videoProviders: ["."],
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Bx(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: _x(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      },
      align: {
        default: "center",
        // Default alignment
        renderHTML: ({ align: e }) => ({
          align: e
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%", align: r = "center" } = e ?? {}, n = {
      ...e,
      width: "100%",
      height: "100%"
    }, i = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, o = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, d = ["div", { style: `display: flex; justify-content: ${r};` }, [
      "div",
      { style: i },
      ["div", { style: o }],
      ["iframe", n]
    ]];
    return ["div", {
      ...this.options.HTMLAttributes,
      class: "iframe-wrapper",
      "data-video": ""
    }, d];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
}), es = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ts({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ l(Cf, { children: e.type === "divider" ? /* @__PURE__ */ l(
    We,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ l(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ l(de, {});
}
function jx(e) {
  return e.type.name === wr.name;
}
function zx(e) {
  return e.type.name === Cd.name;
}
function Hx(e) {
  return e.type.name === Td.name;
}
function qx(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (jx(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Yv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(de, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ l(de, {})
    }
  ) });
}
function Fx(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (zx(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Xv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(de, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ l(de, {})
    }
  ) });
}
function Ux(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (Hx(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Jv(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ l(de, { children: /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: r,
      tippyOptions: es,
      children: n != null && n.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((i, o) => /* @__PURE__ */ l(
        ts,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ l(de, {})
    }
  ) });
}
function Wx(e, t, r = null) {
  return r ? e.createChecked({ index: t }, r) : e.createAndFill({ index: t });
}
function Gx(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function Vx(e, t, r = null) {
  const n = Gx(e), i = [];
  for (let o = 0; o < t; o += 1) {
    const a = Wx(n.column, o, r);
    a && i.push(a);
  }
  return n.columns.createChecked({ cols: t }, i);
}
function gi({
  state: e,
  dispatch: t,
  type: r
}) {
  const n = Qr((o) => o.type.name === Nn.name)(e.selection), i = Qr((o) => o.type.name === Ed.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index, s = o.toJSON();
    let c = a;
    r === "delete" ? (c = a - 1, s.content.splice(a, 1)) : (c = r === "addBefore" ? a : a + 1, s.content.splice(c, 0, {
      type: "column",
      attrs: {
        index: a
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), s.attrs.cols = s.content.length, s.content.forEach((h, p) => {
      h.attrs.index = p;
    });
    const u = bp.fromJSON(e.schema, s);
    let d = n.pos;
    u.content.forEach((h, p, m) => {
      m < c && (d += h.nodeSize);
    });
    const f = e.tr.setTime(Date.now());
    f.replaceWith(n.pos, n.pos + n.node.nodeSize, u).setSelection(
      Gt.near(f.doc.resolve(d))
    ), t(f);
  }
  return !0;
}
function mc({ state: e, dispatch: t, type: r }) {
  const n = Qr((o) => o.type.name === Nn.name)(e.selection), i = Qr((o) => o.type.name === Ed.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index;
    let s = 0;
    r === "before" ? s = (a - 1 + o.attrs.cols) % o.attrs.cols : s = (a + 1) % o.attrs.cols;
    let c = n.pos;
    o.content.forEach((d, f, h) => {
      h < s && (c += d.nodeSize);
    });
    const u = e.tr.setTime(Date.now());
    return u.setSelection(Gt.near(u.doc.resolve(c))), t(u), !0;
  }
  return !1;
}
const Ed = /* @__PURE__ */ Er.create({
  name: "column",
  content: "block+",
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "column"
      }
    };
  },
  addAttributes() {
    return {
      index: {
        default: 0,
        parseHTML: (e) => e.getAttribute("index")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=column]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", at(this.options.HTMLAttributes, e), 0];
  }
}), Ew = wp.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: r }) => ({
        component: F,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: r("editor.columns.tooltip")
        }
      })
    };
  }
}), Kx = 200, Nn = /* @__PURE__ */ Er.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: Kx,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "columns"
      }
    };
  },
  addAttributes() {
    return {
      cols: {
        default: 2,
        parseHTML: (e) => e.getAttribute("cols")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=grid]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", at(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: r, editor: n }) => {
        const i = Vx(n.schema, e && e.cols || 3);
        if (r) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(i).scrollIntoView().setSelection(Gt.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => gi({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => gi({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => gi({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => mc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => mc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
});
function Id(e, t) {
  const { state: r } = t, n = r.selection.$anchor;
  let i = !1;
  if (n.depth)
    for (let o = n.depth; o > 0; o--)
      n.node(o).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(r.tr.delete(n.before(o), n.after(o)).scrollIntoView()), i = !0);
  else {
    const o = r.selection.node;
    o && o.type.name === e && (t.chain().deleteSelection().run(), i = !0);
  }
  if (!i) {
    const o = n.pos;
    if (o) {
      const a = r.tr.doc.nodeAt(o);
      a && a.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(r.tr.delete(o, o + a.nodeSize)), i = !0);
    }
  }
  return i;
}
function Yx({ editor: e }) {
  const { t } = Se(), r = oe(() => e.isActive(Nn.name), [e]), n = oe(() => Id(Nn.name, e), [e]), i = oe(() => e.chain().focus().addColBefore().run(), [e]), o = oe(() => e.chain().focus().addColAfter().run(), [e]), a = oe(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ l(
    St,
    {
      editor: e,
      pluginKey: "columns-bubble-menu",
      shouldShow: r,
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
      children: /* @__PURE__ */ E("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
        /* @__PURE__ */ l(
          F,
          {
            action: i,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: a,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            action: n,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const Xx = fe.Root, Jx = fe.Trigger, gc = fe.Portal, vc = fe.Sub, Ea = ne.forwardRef(({ className: e, inset: t, children: r, ...n }, i) => /* @__PURE__ */ E(
  fe.SubTrigger,
  {
    ref: i,
    className: ee(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      t && "richtext-pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ l(Zh, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
Ea.displayName = fe.SubTrigger.displayName;
const Ia = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  fe.SubContent,
  {
    ref: r,
    className: ee(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ia.displayName = fe.SubContent.displayName;
const Rd = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(fe.Portal, { children: /* @__PURE__ */ l(
  fe.Content,
  {
    ref: n,
    sideOffset: t,
    className: ee(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Rd.displayName = fe.Content.displayName;
const He = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  fe.Item,
  {
    ref: n,
    className: ee(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
He.displayName = fe.Item.displayName;
const Zx = ne.forwardRef(({ className: e, children: t, checked: r, ...n }, i) => /* @__PURE__ */ E(
  fe.CheckboxItem,
  {
    ref: i,
    className: ee(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(fe.ItemIndicator, { children: /* @__PURE__ */ l(vu, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
Zx.displayName = fe.CheckboxItem.displayName;
const Qx = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ E(
  fe.RadioItem,
  {
    ref: n,
    className: ee(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(fe.ItemIndicator, { children: /* @__PURE__ */ l(Qh, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
Qx.displayName = fe.RadioItem.displayName;
const eb = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  fe.Label,
  {
    ref: n,
    className: ee(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
eb.displayName = fe.Label.displayName;
const Od = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  fe.Separator,
  {
    ref: r,
    className: ee("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Od.displayName = fe.Separator.displayName;
function tb({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      className: ee("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
tb.displayName = "DropdownMenuShortcut";
const Ne = ne.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ l(
    "input",
    {
      type: t,
      className: ee(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
Ne.displayName = "Input";
const rb = Hn(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), it = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  xu.Root,
  {
    ref: r,
    className: ee(rb(), e),
    ...t
  }
));
it.displayName = xu.Root.displayName;
const Or = pr.Root, Pr = pr.Trigger, Kt = ne.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => /* @__PURE__ */ l(pr.Portal, { children: /* @__PURE__ */ l(
  pr.Content,
  {
    ref: i,
    align: t,
    sideOffset: r,
    className: ee(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Kt.displayName = pr.Content.displayName;
const We = ne.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, i) => /* @__PURE__ */ l(
    pu.Root,
    {
      ref: i,
      decorative: r,
      orientation: t,
      className: ee(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...n
    }
  )
);
We.displayName = pu.Root.displayName;
const Pd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ia.Root,
  {
    className: ee(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ l(
      ia.Thumb,
      {
        className: ee(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Pd.displayName = ia.Root.displayName;
const Nd = Pt.Root, rs = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Pt.List,
  {
    ref: r,
    className: ee(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
rs.displayName = Pt.List.displayName;
const Sr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Pt.Trigger,
  {
    ref: r,
    className: ee(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
Sr.displayName = Pt.Trigger.displayName;
const Ar = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Pt.Content,
  {
    ref: r,
    className: ee(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
Ar.displayName = Pt.Content.displayName;
const nb = ke.Provider, kd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ke.Viewport,
  {
    ref: r,
    className: ee(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
kd.displayName = ke.Viewport.displayName;
const ib = Hn(
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
), Md = ne.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ l(
  ke.Root,
  {
    ref: n,
    className: ee(ib({ variant: t }), e),
    ...r
  }
));
Md.displayName = ke.Root.displayName;
const ob = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ke.Action,
  {
    ref: r,
    className: ee(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
ob.displayName = ke.Action.displayName;
const Ld = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ke.Close,
  {
    ref: r,
    className: ee(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l(gu, { className: "richtext-h-4 richtext-w-4" })
  }
));
Ld.displayName = ke.Close.displayName;
const $d = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ke.Title,
  {
    ref: r,
    className: ee("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
$d.displayName = ke.Title.displayName;
const _d = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ke.Description,
  {
    ref: r,
    className: ee("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
_d.displayName = ke.Description.displayName;
const ab = Hn(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Dd = ne.forwardRef(({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ l(
  yu.Root,
  {
    ref: i,
    className: ee(ab({ variant: t, size: r, className: e })),
    ...n
  }
));
Dd.displayName = yu.Root.displayName;
const yc = Cr.Provider, Bd = Cr.Root, jd = Cr.Trigger, ns = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(
  Cr.Content,
  {
    ref: n,
    sideOffset: t,
    className: ee(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
ns.displayName = Cr.Content.displayName;
const sb = 1, cb = 1e6;
let vi = 0;
function lb() {
  return vi = (vi + 1) % Number.MAX_SAFE_INTEGER, vi.toString();
}
const yi = /* @__PURE__ */ new Map();
function xc(e) {
  if (yi.has(e))
    return;
  const t = setTimeout(() => {
    yi.delete(e), hr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, cb);
  yi.set(e, t);
}
function ub(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, sb)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t.toast.id ? { ...r, ...t.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? xc(r) : e.toasts.forEach((n) => {
        xc(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}
const Kr = [];
let Yr = { toasts: [] };
function hr(e) {
  Yr = ub(Yr, e), Kr.forEach((t) => {
    t(Yr);
  });
}
function db({ ...e }) {
  const t = lb(), r = (i) => hr({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), n = () => hr({ type: "DISMISS_TOAST", toastId: t });
  return hr({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (i) => {
        i || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
function is() {
  const [e, t] = ne.useState(Yr);
  return ne.useEffect(() => (Kr.push(t), () => {
    const r = Kr.indexOf(t);
    r > -1 && Kr.splice(r, 1);
  }), [e]), {
    ...e,
    toast: db,
    dismiss: (r) => hr({ type: "DISMISS_TOAST", toastId: r })
  };
}
const zd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  na.Root,
  {
    ref: r,
    className: ee(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(
      na.Indicator,
      {
        className: ee("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ l(vu, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
zd.displayName = na.Root.displayName;
const fb = { padding: "0 12px 12px" }, hb = ({ width: e, maxWidth: t, height: r, onOk: n, children: i }) => {
  const { t: o } = Se(), [a, s] = J({
    width: "",
    height: "",
    maxWidth: ""
  });
  pe(() => {
    s({
      width: e,
      height: r,
      maxWidth: t
    });
  }, [r, t, e]);
  function c(u) {
    u.preventDefault(), u.stopPropagation(), n(a);
  }
  return /* @__PURE__ */ E(Or, { modal: !0, children: [
    /* @__PURE__ */ l(Pr, { asChild: !0, children: i }),
    /* @__PURE__ */ l(Kt, { children: /* @__PURE__ */ l("div", { style: fb, children: /* @__PURE__ */ E("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ l(it, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Ne,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (u) => s({ ...a, width: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(it, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Ne,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (u) => s({ ...a, maxWidth: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(it, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        Ne,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (u) => s({ ...a, height: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(Ce, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
}, Yt = {
  youtube: {
    example: "https://www.youtube.com/watch?v=I4sMhHbHYXM",
    src: "https://www.youtube.com/embed/I4sMhHbHYXM",
    srcPrefix: "https://www.youtube.com/embed",
    linkRule: [
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\s/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[&?]v=)|youtu\.be\/)([\w-]{11})/
    ]
  },
  youku: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html?spm=a2h0c.8166622.PhoneSokuUgc_4.dtitle",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "https://player.youku.com/embed",
    linkRule: [String.raw`v.youku.com\/v_show\/id_\w+\=*`],
    idRule: String.raw`id_\w+\=*`
  },
  bilibili: {
    example: "https://www.bilibili.com/video/BV1EJ411u7DN",
    src: "https://player.bilibili.com/player.html?bvid=BV1EJ411u7DN",
    srcPrefix: "https://player.bilibili.com/player.html?bvid",
    linkRule: [String.raw`www.bilibili.com\/video\/\w+`]
  },
  qqvideo: {
    example: "https://v.qq.com/x/cover/mzc0020006aw1mn/u0033nvzb5v.html",
    src: "https://v.qq.com/txp/iframe/player.html?vid=u0033nvzb5v",
    srcPrefix: "https://v.qq.com/txp/iframe/player.html?vid",
    linkRule: [String.raw`v.qq.com\/x\/cover\/\w+\/\w+`]
  },
  amap: {
    example: "https://ditu.amap.com/",
    src: "https://www.amap.com/place/B000A45467",
    srcPrefix: "",
    linkRule: [String.raw`\.amap\.com`]
  },
  baidu_map: {
    example: "https://j.map.baidu.com/15/fo",
    src: "https://j.map.baidu.com/15/fo",
    srcPrefix: "",
    linkRule: [String.raw`map\.baidu\.com`]
  },
  modao: {
    example: "https://free.modao.cc/app/2cd26580a6717a147454df7470e7ec464093cba3/embed/v2#screen=sk71k6d1dfxulzx",
    src: "https://free.modao.cc/app/6UkpAxcGE3nPz52GLqhnOZgC7MATBSy/embed/v2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/\w+.modao.cc\/app\/\w+\/embed\/v2`],
    tips: "Modao > More > Share > Embed > COPY"
  },
  lanhu: {
    example: "https://lanhuapp.com/link/#/invite?sid=evP7L",
    src: "https://lanhuapp.com/url/evP7L",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/lanhuapp.com\/url\/\w+`],
    tips: "Lanhu > Project > Share > Copy Link"
  },
  figma: {
    example: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    src: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    srcPrefix: "https://www.figma.com/embed?embed_host=share&url",
    linkRule: [String.raw`https:\/\/www.figma.com\/file\/\w+`]
  },
  canva: {
    example: "https://www.canva.cn/design/DAD61-t29UI/view",
    src: "https://www.canva.cn/design/DAD61-t29UI/view",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.canva.cn\/design\/.+\/view`]
  },
  processon: {
    example: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    src: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.processon.com\/embed\/\w+`]
  },
  codepen: {
    example: "https://codepen.io/mekery/embed/YzyrKOJ",
    src: "https://codepen.io/mekery/embed/YzyrKOJ",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/codepen.io\/.+\/embed\/\w+`]
  },
  jinshuju: {
    example: "https://jinshuju.net/f/q9YvVf",
    src: "https://jinshuju.net/f/q9YvVf",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/jinshuju.net\/f\/\w+`]
  },
  iframe: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "",
    linkRule: [".+"]
  },
  googlemaps: {
    example: "https://goo.gl/maps/8Ys8b4K1ZJY2",
    src: "https://www.google.com/maps/embed?pb=https://goo.gl/maps/8Ys8b4K1ZJY2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/goo.gl\/maps\/\w+`]
  }
};
function pb(e) {
  const t = Yt.youtube, r = e.matchedUrl;
  e.validLink = !0;
  const n = r.split("="), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}/${o}`, e.validId = !0;
  }
  return e;
}
function mb(e) {
  const t = Yt.youku, r = e.matchedUrl, n = t.idRule, i = new RegExp(n), o = r.match(i);
  if (o && o.length > 0) {
    const a = o[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${a}`;
  } else
    e.validId = !1;
  return e;
}
function gb(e) {
  const t = Yt.bilibili, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function vb(e) {
  const t = Yt.qqvideo, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function yb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function xb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function bb(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function wb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Sb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Ab(e) {
  const t = Yt.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function Cb(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function Tb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function Eb(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function Ib(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function Rb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function Ob(e, t, r) {
  if (e === "googlemaps")
    return r.validLink = !0, r.matchedUrl = t, r;
  const i = Yt[e].linkRule;
  for (const o of i) {
    const a = new RegExp(o), s = t.match(a);
    if (s && s.length > 0)
      return r.validLink = !0, r.matchedUrl = e === "youtube" ? s[1] : s[0], r;
  }
  return r;
}
function Pb(e) {
  var r, n;
  let t = "iframe";
  return ((r = e.includes) != null && r.call(e, "youtube") || (n = e.includes) != null && n.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function Hd(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const r = Pb(e);
  if (t = Ob(r, e, t), !t.validLink)
    return t;
  switch (r) {
    case "youtube":
      return pb(t);
    case "youku":
      return mb(t);
    case "bilibili":
      return gb(t);
    case "qqvideo":
      return vb(t);
    case "amap":
      return yb(e, t);
    case "baidu_map":
      return xb(e, t);
    case "googlemaps":
      return bb(e, t);
    case "modao":
      return wb(t);
    case "lanhu":
      return Sb(t);
    case "figma":
      return Ab(t);
    case "canva":
      return Cb(e, t);
    case "processon":
      return Tb(e, t);
    case "codepen":
      return Eb(t);
    case "jinshuju":
      return Ib(e, t);
    case "iframe":
      return Rb(e, t);
    default:
      return e;
  }
}
function Nb() {
  const [e] = Sd((t) => t.value);
  return e;
}
const kb = {
  setDisable: (e, t) => {
    Qa(Rt.EDIT(e), t);
  }
}, Mb = "_wrap_5y04w_1", Lb = "_innerWrap_5y04w_15", bc = {
  wrap: Mb,
  innerWrap: Lb
};
function $b({ editor: e, node: t, updateAttributes: r }) {
  const n = Nb(), { src: i, width: o, height: a } = t.attrs, [s, c] = J("");
  function u() {
    if (!s)
      return;
    const f = Hd(s);
    e.chain().updateAttributes(zt.name, {
      src: (f == null ? void 0 : f.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const d = oe(
    (f) => {
      r({ width: f.width, height: f.height });
    },
    [r]
  );
  return /* @__PURE__ */ E(Pa, { children: [
    !i && /* @__PURE__ */ E("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ l(
        Ne,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (f) => c(f.target.value),
          placeholder: "Enter link",
          type: "url",
          value: s
        }
      ),
      /* @__PURE__ */ l(
        Ce,
        {
          className: "richtext-w-[60px]",
          onClick: u,
          children: "OK"
        }
      )
    ] }),
    i && /* @__PURE__ */ l(
      Sp,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(a) },
        onResizeStop: (f, h, p, m) => {
          d({
            width: Number.parseInt(o) + m.width,
            height: Number.parseInt(a) + m.height
          });
        },
        children: /* @__PURE__ */ l("div", { className: Oa(bc.wrap, "render-wrapper"), children: /* @__PURE__ */ l(
          "div",
          {
            className: bc.innerWrap,
            style: { pointerEvents: n ? "none" : "auto" },
            children: /* @__PURE__ */ l(
              "iframe",
              {
                className: "richtext-my-[12px] ",
                src: i
              }
            )
          }
        ) })
      }
    )
  ] });
}
const zt = /* @__PURE__ */ Er.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => ({
        component: F,
        componentProps: {
          action: (i) => t.commands.setIframe(i),
          upload: r.options.upload,
          disabled: !t.can().setIframe({}),
          icon: "Iframe",
          tooltip: n("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: ti("width")
      },
      height: {
        default: 300,
        parseHTML: ti("height")
      },
      src: {
        default: null,
        parseHTML: ti("src")
      },
      defaultShowPicker: {
        default: !1
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["iframe", at(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ tr: t, commands: r, chain: n }) => {
        var o, a, s;
        if (((s = (a = (o = t.selection) == null ? void 0 : o.node) == null ? void 0 : a.type) == null ? void 0 : s.name) == this.name)
          return r.updateAttributes(this.name, e);
        const i = e || { url: "" };
        return n().insertContent({
          type: this.name,
          attrs: i
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      bu({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Na($b);
  }
});
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _b(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Db(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var xi, wc;
function qd() {
  if (wc) return xi;
  wc = 1;
  var e = Object.prototype.toString;
  return xi = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, xi;
}
var bi, Sc;
function Bb() {
  if (Sc) return bi;
  Sc = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = qd(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), a = i.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(h) {
      var p = h.constructor;
      return p && p.prototype === h;
    }, u = {
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
    }, d = function() {
      if (typeof window > "u")
        return !1;
      for (var h in window)
        try {
          if (!u["$" + h] && t.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              c(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), f = function(h) {
      if (typeof window > "u" || !d)
        return c(h);
      try {
        return c(h);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var m = p !== null && typeof p == "object", v = r.call(p) === "[object Function]", g = n(p), y = m && r.call(p) === "[object String]", w = [];
      if (!m && !v && !g)
        throw new TypeError("Object.keys called on a non-object");
      var A = a && v;
      if (y && p.length > 0 && !t.call(p, 0))
        for (var I = 0; I < p.length; ++I)
          w.push(String(I));
      if (g && p.length > 0)
        for (var T = 0; T < p.length; ++T)
          w.push(String(T));
      else
        for (var M in p)
          !(A && M === "prototype") && t.call(p, M) && w.push(String(M));
      if (o)
        for (var L = f(p), k = 0; k < s.length; ++k)
          !(L && s[k] === "constructor") && t.call(p, s[k]) && w.push(s[k]);
      return w;
    };
  }
  return bi = e, bi;
}
var wi, Ac;
function os() {
  if (Ac) return wi;
  Ac = 1;
  var e = Array.prototype.slice, t = qd(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : Bb(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var a = function() {
        var s = Object.keys(arguments);
        return s && s.length === arguments.length;
      }(1, 2);
      a || (Object.keys = function(c) {
        return t(c) ? i(e.call(c)) : i(c);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, wi = n, wi;
}
var Si, Cc;
function Fn() {
  if (Cc) return Si;
  Cc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Si = e, Si;
}
var Ai, Tc;
function as() {
  return Tc || (Tc = 1, Ai = SyntaxError), Ai;
}
var Ci, Ec;
function _e() {
  return Ec || (Ec = 1, Ci = TypeError), Ci;
}
var Ti, Ic;
function jb() {
  return Ic || (Ic = 1, Ti = Object.getOwnPropertyDescriptor), Ti;
}
var Ei, Rc;
function Mt() {
  if (Rc) return Ei;
  Rc = 1;
  var e = /* @__PURE__ */ jb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ei = e, Ei;
}
var Ii, Oc;
function ss() {
  if (Oc) return Ii;
  Oc = 1;
  var e = /* @__PURE__ */ Fn(), t = /* @__PURE__ */ as(), r = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Mt();
  return Ii = function(o, a, s) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, h = !!n && n(o, a);
    if (e)
      e(o, a, {
        configurable: d === null && h ? h.configurable : !d,
        enumerable: c === null && h ? h.enumerable : !c,
        value: s,
        writable: u === null && h ? h.writable : !u
      });
    else if (f || !c && !u && !d)
      o[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ii;
}
var Ri, Pc;
function cs() {
  if (Pc) return Ri;
  Pc = 1;
  var e = /* @__PURE__ */ Fn(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Ri = t, Ri;
}
var Oi, Nc;
function Lt() {
  if (Nc) return Oi;
  Nc = 1;
  var e = os(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, i = /* @__PURE__ */ ss(), o = function(u) {
    return typeof u == "function" && r.call(u) === "[object Function]";
  }, a = /* @__PURE__ */ cs()(), s = function(u, d, f, h) {
    if (d in u) {
      if (h === !0) {
        if (u[d] === f)
          return;
      } else if (!o(h) || !h())
        return;
    }
    a ? i(u, d, f, !0) : i(u, d, f);
  }, c = function(u, d) {
    var f = arguments.length > 2 ? arguments[2] : {}, h = e(d);
    t && (h = n.call(h, Object.getOwnPropertySymbols(d)));
    for (var p = 0; p < h.length; p += 1)
      s(u, h[p], d[h[p]], f[h[p]]);
  };
  return c.supportsDescriptors = !!a, Oi = c, Oi;
}
var Pi = { exports: {} }, Ni, kc;
function ls() {
  return kc || (kc = 1, Ni = Object), Ni;
}
var ki, Mc;
function Fd() {
  return Mc || (Mc = 1, ki = Error), ki;
}
var Mi, Lc;
function zb() {
  return Lc || (Lc = 1, Mi = EvalError), Mi;
}
var Li, $c;
function Hb() {
  return $c || ($c = 1, Li = RangeError), Li;
}
var $i, _c;
function qb() {
  return _c || (_c = 1, $i = ReferenceError), $i;
}
var _i, Dc;
function Fb() {
  return Dc || (Dc = 1, _i = URIError), _i;
}
var Di, Bc;
function Ub() {
  return Bc || (Bc = 1, Di = Math.abs), Di;
}
var Bi, jc;
function Wb() {
  return jc || (jc = 1, Bi = Math.floor), Bi;
}
var ji, zc;
function Gb() {
  return zc || (zc = 1, ji = Math.max), ji;
}
var zi, Hc;
function Vb() {
  return Hc || (Hc = 1, zi = Math.min), zi;
}
var Hi, qc;
function Kb() {
  return qc || (qc = 1, Hi = Math.pow), Hi;
}
var qi, Fc;
function Yb() {
  return Fc || (Fc = 1, qi = Math.round), qi;
}
var Fi, Uc;
function Xb() {
  return Uc || (Uc = 1, Fi = Number.isNaN || function(t) {
    return t !== t;
  }), Fi;
}
var Ui, Wc;
function Jb() {
  if (Wc) return Ui;
  Wc = 1;
  var e = /* @__PURE__ */ Xb();
  return Ui = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Ui;
}
var Wi, Gc;
function Un() {
  return Gc || (Gc = 1, Wi = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Wi;
}
var Gi, Vc;
function us() {
  if (Vc) return Gi;
  Vc = 1;
  var e = typeof Symbol < "u" && Symbol, t = Un();
  return Gi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Gi;
}
var Vi, Kc;
function Ud() {
  return Kc || (Kc = 1, Vi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Vi;
}
var Ki, Yc;
function Wd() {
  if (Yc) return Ki;
  Yc = 1;
  var e = /* @__PURE__ */ ls();
  return Ki = e.getPrototypeOf || null, Ki;
}
var Yi, Xc;
function Zb() {
  if (Xc) return Yi;
  Xc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(c, u) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var h = 0; h < u.length; h += 1)
      d[h + c.length] = u[h];
    return d;
  }, o = function(c, u) {
    for (var d = [], f = u, h = 0; f < c.length; f += 1, h += 1)
      d[h] = c[f];
    return d;
  }, a = function(s, c) {
    for (var u = "", d = 0; d < s.length; d += 1)
      u += s[d], d + 1 < s.length && (u += c);
    return u;
  };
  return Yi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var d = o(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var y = u.apply(
          this,
          i(d, arguments)
        );
        return Object(y) === y ? y : this;
      }
      return u.apply(
        c,
        i(d, arguments)
      );
    }, p = r(0, u.length - d.length), m = [], v = 0; v < p; v++)
      m[v] = "$" + v;
    if (f = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var g = function() {
      };
      g.prototype = u.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, Yi;
}
var Xi, Jc;
function Nr() {
  if (Jc) return Xi;
  Jc = 1;
  var e = Zb();
  return Xi = Function.prototype.bind || e, Xi;
}
var Ji, Zc;
function ds() {
  return Zc || (Zc = 1, Ji = Function.prototype.call), Ji;
}
var Zi, Qc;
function fs() {
  return Qc || (Qc = 1, Zi = Function.prototype.apply), Zi;
}
var Qi, el;
function Qb() {
  return el || (el = 1, Qi = typeof Reflect < "u" && Reflect && Reflect.apply), Qi;
}
var eo, tl;
function Gd() {
  if (tl) return eo;
  tl = 1;
  var e = Nr(), t = fs(), r = ds(), n = Qb();
  return eo = n || e.call(r, t), eo;
}
var to, rl;
function hs() {
  if (rl) return to;
  rl = 1;
  var e = Nr(), t = /* @__PURE__ */ _e(), r = ds(), n = Gd();
  return to = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, to;
}
var ro, nl;
function e2() {
  if (nl) return ro;
  nl = 1;
  var e = hs(), t = /* @__PURE__ */ Mt(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return ro = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, ro;
}
var no, il;
function Vd() {
  if (il) return no;
  il = 1;
  var e = Ud(), t = Wd(), r = /* @__PURE__ */ e2();
  return no = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, no;
}
var io, ol;
function ps() {
  if (ol) return io;
  ol = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Nr();
  return io = r.call(e, t), io;
}
var oo, al;
function ut() {
  if (al) return oo;
  al = 1;
  var e, t = /* @__PURE__ */ ls(), r = /* @__PURE__ */ Fd(), n = /* @__PURE__ */ zb(), i = /* @__PURE__ */ Hb(), o = /* @__PURE__ */ qb(), a = /* @__PURE__ */ as(), s = /* @__PURE__ */ _e(), c = /* @__PURE__ */ Fb(), u = /* @__PURE__ */ Ub(), d = /* @__PURE__ */ Wb(), f = /* @__PURE__ */ Gb(), h = /* @__PURE__ */ Vb(), p = /* @__PURE__ */ Kb(), m = /* @__PURE__ */ Yb(), v = /* @__PURE__ */ Jb(), g = Function, y = function(re) {
    try {
      return g('"use strict"; return (' + re + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Mt(), A = /* @__PURE__ */ Fn(), I = function() {
    throw new s();
  }, T = w ? function() {
    try {
      return arguments.callee, I;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return I;
      }
    }
  }() : I, M = us()(), L = Vd(), k = Wd(), N = Ud(), $ = fs(), C = ds(), S = {}, P = typeof Uint8Array > "u" || !L ? e : L(Uint8Array), D = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": M && L ? L([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": S,
    "%AsyncGenerator%": S,
    "%AsyncGeneratorFunction%": S,
    "%AsyncIteratorPrototype%": S,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": S,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": M && L ? L(L([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !M || !L ? e : L((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !M || !L ? e : L((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": M && L ? L(""[Symbol.iterator]()) : e,
    "%Symbol%": M ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": T,
    "%TypedArray%": P,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": C,
    "%Function.prototype.apply%": $,
    "%Object.defineProperty%": A,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": p,
    "%Math.round%": m,
    "%Math.sign%": v,
    "%Reflect.getPrototypeOf%": N
  };
  if (L)
    try {
      null.error;
    } catch (re) {
      var H = L(L(re));
      D["%Error.prototype%"] = H;
    }
  var j = function re(z) {
    var q;
    if (z === "%AsyncFunction%")
      q = y("async function () {}");
    else if (z === "%GeneratorFunction%")
      q = y("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      q = y("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var B = re("%AsyncGeneratorFunction%");
      B && (q = B.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var K = re("%AsyncGenerator%");
      K && L && (q = L(K.prototype));
    }
    return D[z] = q, q;
  }, W = {
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
  }, Q = Nr(), te = /* @__PURE__ */ ps(), ye = Q.call(C, Array.prototype.concat), me = Q.call($, Array.prototype.splice), De = Q.call(C, String.prototype.replace), Be = Q.call(C, String.prototype.slice), R = Q.call(C, RegExp.prototype.exec), _ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, U = function(z) {
    var q = Be(z, 0, 1), B = Be(z, -1);
    if (q === "%" && B !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (B === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var K = [];
    return De(z, _, function(ge, xe, be, Ae) {
      K[K.length] = be ? De(Ae, G, "$1") : xe || ge;
    }), K;
  }, Z = function(z, q) {
    var B = z, K;
    if (te(W, B) && (K = W[B], B = "%" + K[0] + "%"), te(D, B)) {
      var ge = D[B];
      if (ge === S && (ge = j(B)), typeof ge > "u" && !q)
        throw new s("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: K,
        name: B,
        value: ge
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return oo = function(z, q) {
    if (typeof z != "string" || z.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (R(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var B = U(z), K = B.length > 0 ? B[0] : "", ge = Z("%" + K + "%", q), xe = ge.name, be = ge.value, Ae = !1, Ie = ge.alias;
    Ie && (K = Ie[0], me(B, ye([0, 1], Ie)));
    for (var Ye = 1, je = !0; Ye < B.length; Ye += 1) {
      var Re = B[Ye], Xe = Be(Re, 0, 1), Je = Be(Re, -1);
      if ((Xe === '"' || Xe === "'" || Xe === "`" || Je === '"' || Je === "'" || Je === "`") && Xe !== Je)
        throw new a("property names with quotes must have matching quotes");
      if ((Re === "constructor" || !je) && (Ae = !0), K += "." + Re, xe = "%" + K + "%", te(D, xe))
        be = D[xe];
      else if (be != null) {
        if (!(Re in be)) {
          if (!q)
            throw new s("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (w && Ye + 1 >= B.length) {
          var Ze = w(be, Re);
          je = !!Ze, je && "get" in Ze && !("originalValue" in Ze.get) ? be = Ze.get : be = be[Re];
        } else
          je = te(be, Re), be = be[Re];
        je && !Ae && (D[xe] = be);
      }
    }
    return be;
  }, oo;
}
var ao, sl;
function t2() {
  if (sl) return ao;
  sl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ ss(), r = /* @__PURE__ */ cs()(), n = /* @__PURE__ */ Mt(), i = /* @__PURE__ */ _e(), o = e("%Math.floor%");
  return ao = function(s, c) {
    if (typeof s != "function")
      throw new i("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || o(c) !== c)
      throw new i("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], d = !0, f = !0;
    if ("length" in s && n) {
      var h = n(s, "length");
      h && !h.configurable && (d = !1), h && !h.writable && (f = !1);
    }
    return (d || f || !u) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, ao;
}
var so, cl;
function r2() {
  if (cl) return so;
  cl = 1;
  var e = Nr(), t = fs(), r = Gd();
  return so = function() {
    return r(e, t, arguments);
  }, so;
}
var ll;
function Xt() {
  return ll || (ll = 1, function(e) {
    var t = /* @__PURE__ */ t2(), r = /* @__PURE__ */ Fn(), n = hs(), i = r2();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(Pi)), Pi.exports;
}
var co, ul;
function Ee() {
  if (ul) return co;
  ul = 1;
  var e = /* @__PURE__ */ ut(), t = hs(), r = t([e("%String.prototype.indexOf%")]);
  return co = function(i, o) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t([a]) : a;
  }, co;
}
var lo, dl;
function Kd() {
  if (dl) return lo;
  dl = 1;
  var e = os(), t = Un()(), r = /* @__PURE__ */ Ee(), n = /* @__PURE__ */ ls(), i = r("Array.prototype.push"), o = r("Object.prototype.propertyIsEnumerable"), a = t ? n.getOwnPropertySymbols : null;
  return lo = function(c, u) {
    if (c == null)
      throw new TypeError("target must be an object");
    var d = n(c);
    if (arguments.length === 1)
      return d;
    for (var f = 1; f < arguments.length; ++f) {
      var h = n(arguments[f]), p = e(h), m = t && (n.getOwnPropertySymbols || a);
      if (m)
        for (var v = m(h), g = 0; g < v.length; ++g) {
          var y = v[g];
          o(h, y) && i(p, y);
        }
      for (var w = 0; w < p.length; ++w) {
        var A = p[w];
        if (o(h, A)) {
          var I = h[A];
          d[A] = I;
        }
      }
    }
    return d;
  }, lo;
}
var uo, fl;
function Yd() {
  if (fl) return uo;
  fl = 1;
  var e = Kd(), t = function() {
    if (!Object.assign)
      return !1;
    for (var n = "abcdefghijklmnopqrst", i = n.split(""), o = {}, a = 0; a < i.length; ++a)
      o[i[a]] = i[a];
    var s = Object.assign({}, o), c = "";
    for (var u in s)
      c += u;
    return n !== c;
  }, r = function() {
    if (!Object.assign || !Object.preventExtensions)
      return !1;
    var n = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(n, "xy");
    } catch {
      return n[1] === "y";
    }
    return !1;
  };
  return uo = function() {
    return !Object.assign || t() || r() ? e : Object.assign;
  }, uo;
}
var fo, hl;
function n2() {
  if (hl) return fo;
  hl = 1;
  var e = Lt(), t = Yd();
  return fo = function() {
    var n = t();
    return e(
      Object,
      { assign: n },
      { assign: function() {
        return Object.assign !== n;
      } }
    ), n;
  }, fo;
}
var ho, pl;
function i2() {
  if (pl) return ho;
  pl = 1;
  var e = Lt(), t = Xt(), r = Kd(), n = Yd(), i = n2(), o = t.apply(n()), a = function(c, u) {
    return o(Object, arguments);
  };
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), ho = a, ho;
}
var po, ml;
function Xd() {
  if (ml) return po;
  ml = 1;
  var e = /* @__PURE__ */ ut(), t = Xt(), r = t(e("String.prototype.indexOf"));
  return po = function(i, o) {
    var a = e(i, !!o);
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(a) : a;
  }, po;
}
var mo, gl;
function o2() {
  if (gl) return mo;
  gl = 1;
  var e = function() {
    return typeof (function() {
    }).name == "string";
  }, t = Object.getOwnPropertyDescriptor;
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  e.functionsHaveConfigurableNames = function() {
    if (!e() || !t)
      return !1;
    var i = t(function() {
    }, "name");
    return !!i && !!i.configurable;
  };
  var r = Function.prototype.bind;
  return e.boundFunctionsHaveNames = function() {
    return e() && typeof r == "function" && (function() {
    }).bind().name !== "";
  }, mo = e, mo;
}
var go, vl;
function a2() {
  if (vl) return go;
  vl = 1;
  var e = /* @__PURE__ */ ss(), t = /* @__PURE__ */ cs()(), r = o2().functionsHaveConfigurableNames(), n = /* @__PURE__ */ _e();
  return go = function(o, a) {
    if (typeof o != "function")
      throw new n("`fn` is not a function");
    var s = arguments.length > 2 && !!arguments[2];
    return (!s || r) && (t ? e(
      /** @type {Parameters<define>[0]} */
      o,
      "name",
      a,
      !0,
      !0
    ) : e(
      /** @type {Parameters<define>[0]} */
      o,
      "name",
      a
    )), o;
  }, go;
}
var vo, yl;
function Jd() {
  if (yl) return vo;
  yl = 1;
  var e = a2(), t = /* @__PURE__ */ _e(), r = Object;
  return vo = e(function() {
    if (this == null || this !== r(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var i = "";
    return this.hasIndices && (i += "d"), this.global && (i += "g"), this.ignoreCase && (i += "i"), this.multiline && (i += "m"), this.dotAll && (i += "s"), this.unicode && (i += "u"), this.unicodeSets && (i += "v"), this.sticky && (i += "y"), i;
  }, "get flags", !0), vo;
}
var yo, xl;
function Zd() {
  if (xl) return yo;
  xl = 1;
  var e = Jd(), t = Lt().supportsDescriptors, r = Object.getOwnPropertyDescriptor;
  return yo = function() {
    if (t && /a/mig.flags === "gim") {
      var i = r(RegExp.prototype, "flags");
      if (i && typeof i.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
        var o = "", a = {};
        if (Object.defineProperty(a, "hasIndices", {
          get: function() {
            o += "d";
          }
        }), Object.defineProperty(a, "sticky", {
          get: function() {
            o += "y";
          }
        }), i.get.call(a), o === "dy")
          return i.get;
      }
    }
    return e;
  }, yo;
}
var xo, bl;
function s2() {
  if (bl) return xo;
  bl = 1;
  var e = Lt().supportsDescriptors, t = Zd(), r = /* @__PURE__ */ Mt(), n = Object.defineProperty, i = /* @__PURE__ */ Fd(), o = Vd(), a = /a/;
  return xo = function() {
    if (!e || !o)
      throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var c = t(), u = o(a), d = r(u, "flags");
    return (!d || d.get !== c) && n(u, "flags", {
      configurable: !0,
      enumerable: !1,
      get: c
    }), c;
  }, xo;
}
var bo, wl;
function c2() {
  if (wl) return bo;
  wl = 1;
  var e = Lt(), t = Xt(), r = Jd(), n = Zd(), i = s2(), o = t(n());
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), bo = o, bo;
}
var nr = { exports: {} }, wo, Sl;
function $t() {
  if (Sl) return wo;
  Sl = 1;
  var e = Un();
  return wo = function() {
    return e() && !!Symbol.toStringTag;
  }, wo;
}
var So, Al;
function Qd() {
  if (Al) return So;
  Al = 1;
  var e = $t()(), t = /* @__PURE__ */ Ee(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, i = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, o = function() {
    return n(arguments);
  }();
  return n.isLegacyArguments = i, So = o ? n : i, So;
}
const l2 = {}, u2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l2
}, Symbol.toStringTag, { value: "Module" })), d2 = /* @__PURE__ */ Db(u2);
var Ao, Cl;
function Wn() {
  if (Cl) return Ao;
  Cl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, p = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, v = Object.prototype.toString, g = Function.prototype.toString, y = String.prototype.match, w = String.prototype.slice, A = String.prototype.replace, I = String.prototype.toUpperCase, T = String.prototype.toLowerCase, M = RegExp.prototype.test, L = Array.prototype.concat, k = Array.prototype.join, N = Array.prototype.slice, $ = Math.floor, C = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, S = Object.getOwnPropertySymbols, P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, D = typeof Symbol == "function" && typeof Symbol.iterator == "object", H = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === D || !0) ? Symbol.toStringTag : null, j = Object.prototype.propertyIsEnumerable, W = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(x) {
    return x.__proto__;
  } : null);
  function Q(x, b) {
    if (x === 1 / 0 || x === -1 / 0 || x !== x || x && x > -1e3 && x < 1e3 || M.call(/e/, b))
      return b;
    var ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof x == "number") {
      var ae = x < 0 ? -$(-x) : $(x);
      if (ae !== x) {
        var se = String(ae), X = w.call(b, se.length + 1);
        return A.call(se, ie, "$&_") + "." + A.call(A.call(X, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return A.call(b, ie, "$&_");
  }
  var te = d2, ye = te.custom, me = ge(ye) ? ye : null, De = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ao = function x(b, ie, ae, se) {
    var X = ie || {};
    if (Ae(X, "quoteStyle") && !Ae(De, X.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ae(X, "maxStringLength") && (typeof X.maxStringLength == "number" ? X.maxStringLength < 0 && X.maxStringLength !== 1 / 0 : X.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ht = Ae(X, "customInspect") ? X.customInspect : !0;
    if (typeof ht != "boolean" && ht !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ae(X, "indent") && X.indent !== null && X.indent !== "	" && !(parseInt(X.indent, 10) === X.indent && X.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ae(X, "numericSeparator") && typeof X.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ct = X.numericSeparator;
    if (typeof b > "u")
      return "undefined";
    if (b === null)
      return "null";
    if (typeof b == "boolean")
      return b ? "true" : "false";
    if (typeof b == "string")
      return _t(b, X);
    if (typeof b == "number") {
      if (b === 0)
        return 1 / 0 / b > 0 ? "0" : "-0";
      var Pe = String(b);
      return Ct ? Q(b, Pe) : Pe;
    }
    if (typeof b == "bigint") {
      var pt = String(b) + "n";
      return Ct ? Q(b, pt) : pt;
    }
    var Kn = typeof X.depth > "u" ? 5 : X.depth;
    if (typeof ae > "u" && (ae = 0), ae >= Kn && Kn > 0 && typeof b == "object")
      return U(b) ? "[Array]" : "[Object]";
    var Dt = gf(X, ae);
    if (typeof se > "u")
      se = [];
    else if (je(se, b) >= 0)
      return "[Circular]";
    function ze(Bt, $r, yf) {
      if ($r && (se = N.call(se), se.push($r)), yf) {
        var Cs = {
          depth: X.depth
        };
        return Ae(X, "quoteStyle") && (Cs.quoteStyle = X.quoteStyle), x(Bt, Cs, ae + 1, se);
      }
      return x(Bt, X, ae + 1, se);
    }
    if (typeof b == "function" && !re(b)) {
      var vs = Ye(b), ys = Mr(b, ze);
      return "[Function" + (vs ? ": " + vs : " (anonymous)") + "]" + (ys.length > 0 ? " { " + k.call(ys, ", ") + " }" : "");
    }
    if (ge(b)) {
      var xs = D ? A.call(String(b), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(b);
      return typeof b == "object" && !D ? ft(xs) : xs;
    }
    if (dt(b)) {
      for (var Zt = "<" + T.call(String(b.nodeName)), Yn = b.attributes || [], Lr = 0; Lr < Yn.length; Lr++)
        Zt += " " + Yn[Lr].name + "=" + R(_(Yn[Lr].value), "double", X);
      return Zt += ">", b.childNodes && b.childNodes.length && (Zt += "..."), Zt += "</" + T.call(String(b.nodeName)) + ">", Zt;
    }
    if (U(b)) {
      if (b.length === 0)
        return "[]";
      var Xn = Mr(b, ze);
      return Dt && !mf(Xn) ? "[" + Vn(Xn, Dt) + "]" : "[ " + k.call(Xn, ", ") + " ]";
    }
    if (z(b)) {
      var Jn = Mr(b, ze);
      return !("cause" in Error.prototype) && "cause" in b && !j.call(b, "cause") ? "{ [" + String(b) + "] " + k.call(L.call("[cause]: " + ze(b.cause), Jn), ", ") + " }" : Jn.length === 0 ? "[" + String(b) + "]" : "{ [" + String(b) + "] " + k.call(Jn, ", ") + " }";
    }
    if (typeof b == "object" && ht) {
      if (me && typeof b[me] == "function" && te)
        return te(b, { depth: Kn - ae });
      if (ht !== "symbol" && typeof b.inspect == "function")
        return b.inspect();
    }
    if (Re(b)) {
      var bs = [];
      return n && n.call(b, function(Bt, $r) {
        bs.push(ze($r, b, !0) + " => " + ze(Bt, b));
      }), gs("Map", r.call(b), bs, Dt);
    }
    if (Ze(b)) {
      var ws = [];
      return s && s.call(b, function(Bt) {
        ws.push(ze(Bt, b));
      }), gs("Set", a.call(b), ws, Dt);
    }
    if (Xe(b))
      return Gn("WeakMap");
    if (kr(b))
      return Gn("WeakSet");
    if (Je(b))
      return Gn("WeakRef");
    if (B(b))
      return ft(ze(Number(b)));
    if (xe(b))
      return ft(ze(C.call(b)));
    if (K(b))
      return ft(m.call(b));
    if (q(b))
      return ft(ze(String(b)));
    if (typeof window < "u" && b === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && b === globalThis || typeof kn < "u" && b === kn)
      return "{ [object globalThis] }";
    if (!Z(b) && !re(b)) {
      var Zn = Mr(b, ze), Ss = W ? W(b) === Object.prototype : b instanceof Object || b.constructor === Object, Qn = b instanceof Object ? "" : "null prototype", As = !Ss && H && Object(b) === b && H in b ? w.call(Ie(b), 8, -1) : Qn ? "Object" : "", vf = Ss || typeof b.constructor != "function" ? "" : b.constructor.name ? b.constructor.name + " " : "", ei = vf + (As || Qn ? "[" + k.call(L.call([], As || [], Qn || []), ": ") + "] " : "");
      return Zn.length === 0 ? ei + "{}" : Dt ? ei + "{" + Vn(Zn, Dt) + "}" : ei + "{ " + k.call(Zn, ", ") + " }";
    }
    return String(b);
  };
  function R(x, b, ie) {
    var ae = ie.quoteStyle || b, se = De[ae];
    return se + x + se;
  }
  function _(x) {
    return A.call(String(x), /"/g, "&quot;");
  }
  function G(x) {
    return !H || !(typeof x == "object" && (H in x || typeof x[H] < "u"));
  }
  function U(x) {
    return Ie(x) === "[object Array]" && G(x);
  }
  function Z(x) {
    return Ie(x) === "[object Date]" && G(x);
  }
  function re(x) {
    return Ie(x) === "[object RegExp]" && G(x);
  }
  function z(x) {
    return Ie(x) === "[object Error]" && G(x);
  }
  function q(x) {
    return Ie(x) === "[object String]" && G(x);
  }
  function B(x) {
    return Ie(x) === "[object Number]" && G(x);
  }
  function K(x) {
    return Ie(x) === "[object Boolean]" && G(x);
  }
  function ge(x) {
    if (D)
      return x && typeof x == "object" && x instanceof Symbol;
    if (typeof x == "symbol")
      return !0;
    if (!x || typeof x != "object" || !P)
      return !1;
    try {
      return P.call(x), !0;
    } catch {
    }
    return !1;
  }
  function xe(x) {
    if (!x || typeof x != "object" || !C)
      return !1;
    try {
      return C.call(x), !0;
    } catch {
    }
    return !1;
  }
  var be = Object.prototype.hasOwnProperty || function(x) {
    return x in this;
  };
  function Ae(x, b) {
    return be.call(x, b);
  }
  function Ie(x) {
    return v.call(x);
  }
  function Ye(x) {
    if (x.name)
      return x.name;
    var b = y.call(g.call(x), /^function\s*([\w$]+)/);
    return b ? b[1] : null;
  }
  function je(x, b) {
    if (x.indexOf)
      return x.indexOf(b);
    for (var ie = 0, ae = x.length; ie < ae; ie++)
      if (x[ie] === b)
        return ie;
    return -1;
  }
  function Re(x) {
    if (!r || !x || typeof x != "object")
      return !1;
    try {
      r.call(x);
      try {
        a.call(x);
      } catch {
        return !0;
      }
      return x instanceof Map;
    } catch {
    }
    return !1;
  }
  function Xe(x) {
    if (!u || !x || typeof x != "object")
      return !1;
    try {
      u.call(x, u);
      try {
        f.call(x, f);
      } catch {
        return !0;
      }
      return x instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Je(x) {
    if (!p || !x || typeof x != "object")
      return !1;
    try {
      return p.call(x), !0;
    } catch {
    }
    return !1;
  }
  function Ze(x) {
    if (!a || !x || typeof x != "object")
      return !1;
    try {
      a.call(x);
      try {
        r.call(x);
      } catch {
        return !0;
      }
      return x instanceof Set;
    } catch {
    }
    return !1;
  }
  function kr(x) {
    if (!f || !x || typeof x != "object")
      return !1;
    try {
      f.call(x, f);
      try {
        u.call(x, u);
      } catch {
        return !0;
      }
      return x instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function dt(x) {
    return !x || typeof x != "object" ? !1 : typeof HTMLElement < "u" && x instanceof HTMLElement ? !0 : typeof x.nodeName == "string" && typeof x.getAttribute == "function";
  }
  function _t(x, b) {
    if (x.length > b.maxStringLength) {
      var ie = x.length - b.maxStringLength, ae = "... " + ie + " more character" + (ie > 1 ? "s" : "");
      return _t(w.call(x, 0, b.maxStringLength), b) + ae;
    }
    var se = Be[b.quoteStyle || "single"];
    se.lastIndex = 0;
    var X = A.call(A.call(x, se, "\\$1"), /[\x00-\x1f]/g, Jt);
    return R(X, "single", b);
  }
  function Jt(x) {
    var b = x.charCodeAt(0), ie = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[b];
    return ie ? "\\" + ie : "\\x" + (b < 16 ? "0" : "") + I.call(b.toString(16));
  }
  function ft(x) {
    return "Object(" + x + ")";
  }
  function Gn(x) {
    return x + " { ? }";
  }
  function gs(x, b, ie, ae) {
    var se = ae ? Vn(ie, ae) : k.call(ie, ", ");
    return x + " (" + b + ") {" + se + "}";
  }
  function mf(x) {
    for (var b = 0; b < x.length; b++)
      if (je(x[b], `
`) >= 0)
        return !1;
    return !0;
  }
  function gf(x, b) {
    var ie;
    if (x.indent === "	")
      ie = "	";
    else if (typeof x.indent == "number" && x.indent > 0)
      ie = k.call(Array(x.indent + 1), " ");
    else
      return null;
    return {
      base: ie,
      prev: k.call(Array(b + 1), ie)
    };
  }
  function Vn(x, b) {
    if (x.length === 0)
      return "";
    var ie = `
` + b.prev + b.base;
    return ie + k.call(x, "," + ie) + `
` + b.prev;
  }
  function Mr(x, b) {
    var ie = U(x), ae = [];
    if (ie) {
      ae.length = x.length;
      for (var se = 0; se < x.length; se++)
        ae[se] = Ae(x, se) ? b(x[se], x) : "";
    }
    var X = typeof S == "function" ? S(x) : [], ht;
    if (D) {
      ht = {};
      for (var Ct = 0; Ct < X.length; Ct++)
        ht["$" + X[Ct]] = X[Ct];
    }
    for (var Pe in x)
      Ae(x, Pe) && (ie && String(Number(Pe)) === Pe && Pe < x.length || D && ht["$" + Pe] instanceof Symbol || (M.call(/[^\w$]/, Pe) ? ae.push(b(Pe, x) + ": " + b(x[Pe], x)) : ae.push(Pe + ": " + b(x[Pe], x))));
    if (typeof S == "function")
      for (var pt = 0; pt < X.length; pt++)
        j.call(x, X[pt]) && ae.push("[" + b(X[pt]) + "]: " + b(x[X[pt]], x));
    return ae;
  }
  return Ao;
}
var Co, Tl;
function f2() {
  if (Tl) return Co;
  Tl = 1;
  var e = /* @__PURE__ */ Wn(), t = /* @__PURE__ */ _e(), r = function(s, c, u) {
    for (var d = s, f; (f = d.next) != null; d = f)
      if (f.key === c)
        return d.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, n = function(s, c) {
    if (s) {
      var u = r(s, c);
      return u && u.value;
    }
  }, i = function(s, c, u) {
    var d = r(s, c);
    d ? d.value = u : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: s.next,
      value: u
    };
  }, o = function(s, c) {
    return s ? !!r(s, c) : !1;
  }, a = function(s, c) {
    if (s)
      return r(s, c, !0);
  };
  return Co = function() {
    var c, u = {
      assert: function(d) {
        if (!u.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var f = c && c.next, h = a(c, d);
        return h && f && f === h && (c = void 0), !!h;
      },
      get: function(d) {
        return n(c, d);
      },
      has: function(d) {
        return o(c, d);
      },
      set: function(d, f) {
        c || (c = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          c,
          d,
          f
        );
      }
    };
    return u;
  }, Co;
}
var To, El;
function ef() {
  if (El) return To;
  El = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ Wn(), n = /* @__PURE__ */ _e(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return To = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, h = {
      assert: function(p) {
        if (!h.has(p))
          throw new n("Side channel does not contain " + r(p));
      },
      delete: function(p) {
        if (f) {
          var m = c(f, p);
          return u(f) === 0 && (f = void 0), m;
        }
        return !1;
      },
      get: function(p) {
        if (f)
          return o(f, p);
      },
      has: function(p) {
        return f ? s(f, p) : !1;
      },
      set: function(p, m) {
        f || (f = new i()), a(f, p, m);
      }
    };
    return h;
  }, To;
}
var Eo, Il;
function h2() {
  if (Il) return Eo;
  Il = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ Wn(), n = ef(), i = /* @__PURE__ */ _e(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Eo = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, h, p = {
        assert: function(m) {
          if (!p.has(m))
            throw new i("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return u(f, m);
          } else if (n && h)
            return h.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && f ? a(f, m) : h && h.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && f ? c(f, m) : !!h && h.has(m);
        },
        set: function(m, v) {
          o && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new o()), s(f, m, v)) : n && (h || (h = n()), h.set(m, v));
        }
      };
      return p;
    }
  ) : n, Eo;
}
var Io, Rl;
function tf() {
  if (Rl) return Io;
  Rl = 1;
  var e = /* @__PURE__ */ _e(), t = /* @__PURE__ */ Wn(), r = f2(), n = ef(), i = h2(), o = i || n || r;
  return Io = function() {
    var s, c = {
      assert: function(u) {
        if (!c.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!s && s.delete(u);
      },
      get: function(u) {
        return s && s.get(u);
      },
      has: function(u) {
        return !!s && s.has(u);
      },
      set: function(u, d) {
        s || (s = o()), s.set(u, d);
      }
    };
    return c;
  }, Io;
}
var Ro, Ol;
function p2() {
  if (Ol) return Ro;
  Ol = 1;
  var e = /* @__PURE__ */ ps(), t = tf()(), r = /* @__PURE__ */ _e(), n = {
    assert: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      if (t.assert(i), !n.has(i, o))
        throw new r("`" + o + "` is not present on `O`");
    },
    get: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var a = t.get(i);
      return a && a[
        /** @type {SaltedInternalSlot} */
        "$" + o
      ];
    },
    has: function(i, o) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var a = t.get(i);
      return !!a && e(
        a,
        /** @type {SaltedInternalSlot} */
        "$" + o
      );
    },
    set: function(i, o, a) {
      if (!i || typeof i != "object" && typeof i != "function")
        throw new r("`O` is not an object");
      if (typeof o != "string")
        throw new r("`slot` must be a string");
      var s = t.get(i);
      s || (s = {}, t.set(i, s)), s[
        /** @type {SaltedInternalSlot} */
        "$" + o
      ] = a;
    }
  };
  return Object.freeze && Object.freeze(n), Ro = n, Ro;
}
var Oo, Pl;
function m2() {
  if (Pl) return Oo;
  Pl = 1;
  var e = p2(), t = /* @__PURE__ */ as(), r = typeof StopIteration == "object" ? StopIteration : null;
  return Oo = function(i) {
    if (!r)
      throw new t("this environment lacks StopIteration");
    e.set(i, "[[Done]]", !1);
    var o = {
      next: (
        /** @type {() => IteratorResult<T>} */
        function() {
          var s = (
            /** @type {typeof origIterator} */
            e.get(this, "[[Iterator]]")
          ), c = !!e.get(s, "[[Done]]");
          try {
            return {
              done: c,
              // eslint-disable-next-line no-extra-parens
              value: c ? void 0 : (
                /** @type {T} */
                s.next()
              )
            };
          } catch (u) {
            if (e.set(s, "[[Done]]", !0), u !== r)
              throw u;
            return {
              done: !0,
              value: void 0
            };
          }
        }
      )
    };
    return e.set(o, "[[Iterator]]", i), o;
  }, Oo;
}
var Po, Nl;
function rf() {
  if (Nl) return Po;
  Nl = 1;
  var e = {}.toString;
  return Po = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, Po;
}
var No, kl;
function nf() {
  if (kl) return No;
  kl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("String.prototype.valueOf"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object String]", o = $t()();
  return No = function(s) {
    return typeof s == "string" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, No;
}
var ko, Ml;
function of() {
  if (Ml) return ko;
  Ml = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), ko = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (n.call(a), i)
        try {
          i.call(a);
        } catch {
          return !0;
        }
      return a instanceof e;
    } catch {
    }
    return !1;
  }, ko;
}
var Mo, Ll;
function af() {
  if (Ll) return Mo;
  Ll = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  t || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !i && (r = function(a) {
    return !1;
  }), Mo = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (i.call(a), n)
        try {
          n.call(a);
        } catch {
          return !0;
        }
      return a instanceof t;
    } catch {
    }
    return !1;
  }, Mo;
}
var $l;
function g2() {
  if ($l) return nr.exports;
  $l = 1;
  var e = /* @__PURE__ */ Qd(), t = /* @__PURE__ */ m2();
  if (us()() || Un()()) {
    var r = Symbol.iterator;
    nr.exports = function(N) {
      if (N != null && typeof N[r] < "u")
        return N[r]();
      if (e(N))
        return Array.prototype[r].call(N);
    };
  } else {
    var n = rf(), i = nf(), o = /* @__PURE__ */ ut(), a = o("%Map%", !0), s = o("%Set%", !0), c = Xd(), u = c("Array.prototype.push"), d = c("String.prototype.charCodeAt"), f = c("String.prototype.slice"), h = function(N, $) {
      var C = N.length;
      if ($ + 1 >= C)
        return $ + 1;
      var S = d(N, $);
      if (S < 55296 || S > 56319)
        return $ + 1;
      var P = d(N, $ + 1);
      return P < 56320 || P > 57343 ? $ + 1 : $ + 2;
    }, p = function(N) {
      var $ = 0;
      return {
        next: function() {
          var S = $ >= N.length, P;
          return S || (P = N[$], $ += 1), {
            done: S,
            value: P
          };
        }
      };
    }, m = function(N, $) {
      if (n(N) || e(N))
        return p(N);
      if (i(N)) {
        var C = 0;
        return {
          next: function() {
            var P = h(N, C), D = f(N, C, P);
            return C = P, {
              done: P > N.length,
              value: D
            };
          }
        };
      }
      if ($ && typeof N["_es6-shim iterator_"] < "u")
        return N["_es6-shim iterator_"]();
    };
    if (!a && !s)
      nr.exports = function(N) {
        if (N != null)
          return m(N, !0);
      };
    else {
      var v = /* @__PURE__ */ of(), g = /* @__PURE__ */ af(), y = c("Map.prototype.forEach", !0), w = c("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var A = c("Map.prototype.iterator", !0), I = c("Set.prototype.iterator", !0);
      var T = c("Map.prototype.@@iterator", !0) || c("Map.prototype._es6-shim iterator_", !0), M = c("Set.prototype.@@iterator", !0) || c("Set.prototype._es6-shim iterator_", !0), L = function(N) {
        if (v(N)) {
          if (A)
            return t(A(N));
          if (T)
            return T(N);
          if (y) {
            var $ = [];
            return y(N, function(S, P) {
              u($, [P, S]);
            }), p($);
          }
        }
        if (g(N)) {
          if (I)
            return t(I(N));
          if (M)
            return M(N);
          if (w) {
            var C = [];
            return w(N, function(S) {
              u(C, S);
            }), p(C);
          }
        }
      };
      nr.exports = function(N) {
        return L(N) || m(N);
      };
    }
  }
  return nr.exports;
}
var Lo, _l;
function sf() {
  if (_l) return Lo;
  _l = 1;
  var e = function(t) {
    return t !== t;
  };
  return Lo = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, Lo;
}
var $o, Dl;
function cf() {
  if (Dl) return $o;
  Dl = 1;
  var e = sf();
  return $o = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, $o;
}
var _o, Bl;
function v2() {
  if (Bl) return _o;
  Bl = 1;
  var e = cf(), t = Lt();
  return _o = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, _o;
}
var Do, jl;
function y2() {
  if (jl) return Do;
  jl = 1;
  var e = Lt(), t = Xt(), r = sf(), n = cf(), i = v2(), o = t(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), Do = o, Do;
}
var Bo, zl;
function lf() {
  if (zl) return Bo;
  zl = 1;
  var e = Xt(), t = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ ut(), n = r("%ArrayBuffer%", !0), i = t("ArrayBuffer.prototype.byteLength", !0), o = t("Object.prototype.toString"), a = !!n && !i && new n(0).slice, s = !!a && e(a);
  return Bo = i || s ? function(u) {
    if (!u || typeof u != "object")
      return !1;
    try {
      return i ? i(u) : s(u, 0), !0;
    } catch {
      return !1;
    }
  } : n ? function(u) {
    return o(u) === "[object ArrayBuffer]";
  } : function(u) {
    return !1;
  }, Bo;
}
var jo, Hl;
function x2() {
  if (Hl) return jo;
  Hl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Date.prototype.getDay"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Date]", o = $t()();
  return jo = function(s) {
    return typeof s != "object" || s === null ? !1 : o ? r(s) : n(s) === i;
  }, jo;
}
var zo, ql;
function uf() {
  if (ql) return zo;
  ql = 1;
  var e = /* @__PURE__ */ Ee(), t = $t()(), r = /* @__PURE__ */ ps(), n = /* @__PURE__ */ Mt(), i;
  if (t) {
    var o = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), i = function(h) {
      if (!h || typeof h != "object")
        return !1;
      var p = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          h,
          "lastIndex"
        )
      ), m = p && r(p, "value");
      if (!m)
        return !1;
      try {
        o(
          h,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (v) {
        return v === a;
      }
    };
  } else {
    var u = e("Object.prototype.toString"), d = "[object RegExp]";
    i = function(h) {
      return !h || typeof h != "object" && typeof h != "function" ? !1 : u(h) === d;
    };
  }
  return zo = i, zo;
}
var Ho, Fl;
function b2() {
  if (Fl) return Ho;
  Fl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("SharedArrayBuffer.prototype.byteLength", !0);
  return Ho = t ? function(n) {
    if (!n || typeof n != "object")
      return !1;
    try {
      return t(n), !0;
    } catch {
      return !1;
    }
  } : function(n) {
    return !1;
  }, Ho;
}
var qo, Ul;
function w2() {
  if (Ul) return qo;
  Ul = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Number.prototype.toString"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Number]", o = $t()();
  return qo = function(s) {
    return typeof s == "number" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, qo;
}
var Fo, Wl;
function S2() {
  if (Wl) return Fo;
  Wl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Boolean.prototype.toString"), r = e("Object.prototype.toString"), n = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, i = "[object Boolean]", o = $t()();
  return Fo = function(s) {
    return typeof s == "boolean" ? !0 : s === null || typeof s != "object" ? !1 : o ? n(s) : r(s) === i;
  }, Fo;
}
var Ur = { exports: {} }, Uo, Gl;
function A2() {
  if (Gl) return Uo;
  Gl = 1;
  var e = /* @__PURE__ */ Ee(), t = uf(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ _e();
  return Uo = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Uo;
}
var Vl;
function C2() {
  if (Vl) return Ur.exports;
  Vl = 1;
  var e = /* @__PURE__ */ Ee(), t = e("Object.prototype.toString"), r = us()(), n = /* @__PURE__ */ A2();
  if (r) {
    var i = e("Symbol.prototype.toString"), o = n(/^Symbol\(.*\)$/), a = function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : o(i(c));
    };
    Ur.exports = function(c) {
      if (typeof c == "symbol")
        return !0;
      if (!c || typeof c != "object" || t(c) !== "[object Symbol]")
        return !1;
      try {
        return a(c);
      } catch {
        return !1;
      }
    };
  } else
    Ur.exports = function(c) {
      return !1;
    };
  return Ur.exports;
}
var Wr = { exports: {} }, Wo, Kl;
function T2() {
  if (Kl) return Wo;
  Kl = 1;
  var e = typeof BigInt < "u" && BigInt;
  return Wo = function() {
    return typeof e == "function" && typeof BigInt == "function" && typeof e(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, Wo;
}
var Yl;
function E2() {
  if (Yl) return Wr.exports;
  Yl = 1;
  var e = T2()();
  if (e) {
    var t = BigInt.prototype.valueOf, r = function(i) {
      try {
        return t.call(i), !0;
      } catch {
      }
      return !1;
    };
    Wr.exports = function(i) {
      return i === null || typeof i > "u" || typeof i == "boolean" || typeof i == "string" || typeof i == "number" || typeof i == "symbol" || typeof i == "function" ? !1 : typeof i == "bigint" ? !0 : r(i);
    };
  } else
    Wr.exports = function(i) {
      return !1;
    };
  return Wr.exports;
}
var Go, Xl;
function I2() {
  if (Xl) return Go;
  Xl = 1;
  var e = nf(), t = w2(), r = S2(), n = C2(), i = E2();
  return Go = function(a) {
    if (a == null || typeof a != "object" && typeof a != "function")
      return null;
    if (e(a))
      return "String";
    if (t(a))
      return "Number";
    if (r(a))
      return "Boolean";
    if (n(a))
      return "Symbol";
    if (i(a))
      return "BigInt";
  }, Go;
}
var Vo, Jl;
function R2() {
  if (Jl) return Vo;
  Jl = 1;
  var e = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, t = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, r;
  e || (r = function(a) {
    return !1;
  });
  var n = e ? e.prototype.has : null, i = t ? t.prototype.has : null;
  return !r && !n && (r = function(a) {
    return !1;
  }), Vo = r || function(a) {
    if (!a || typeof a != "object")
      return !1;
    try {
      if (n.call(a, n), i)
        try {
          i.call(a, i);
        } catch {
          return !0;
        }
      return a instanceof e;
    } catch {
    }
    return !1;
  }, Vo;
}
var Gr = { exports: {} }, Zl;
function O2() {
  if (Zl) return Gr.exports;
  Zl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Ee(), r = e("%WeakSet%", !0), n = t("WeakSet.prototype.has", !0);
  if (n) {
    var i = t("WeakMap.prototype.has", !0);
    Gr.exports = function(a) {
      if (!a || typeof a != "object")
        return !1;
      try {
        if (n(a, n), i)
          try {
            i(a, i);
          } catch {
            return !0;
          }
        return a instanceof r;
      } catch {
      }
      return !1;
    };
  } else
    Gr.exports = function(a) {
      return !1;
    };
  return Gr.exports;
}
var Ko, Ql;
function P2() {
  if (Ql) return Ko;
  Ql = 1;
  var e = /* @__PURE__ */ of(), t = /* @__PURE__ */ af(), r = R2(), n = /* @__PURE__ */ O2();
  return Ko = function(o) {
    if (o && typeof o == "object") {
      if (e(o))
        return "Map";
      if (t(o))
        return "Set";
      if (r(o))
        return "WeakMap";
      if (n(o))
        return "WeakSet";
    }
    return !1;
  }, Ko;
}
var Yo, eu;
function N2() {
  if (eu) return Yo;
  eu = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (w) {
      w !== n && (t = null);
    }
  else
    t = null;
  var i = /^\s*class\b/, o = function(A) {
    try {
      var I = e.call(A);
      return i.test(I);
    } catch {
      return !1;
    }
  }, a = function(A) {
    try {
      return o(A) ? !1 : (e.call(A), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", d = "[object GeneratorFunction]", f = "[object HTMLAllCollection]", h = "[object HTML document.all class]", p = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, v = !(0 in [,]), g = function() {
    return !1;
  };
  if (typeof document == "object") {
    var y = document.all;
    s.call(y) === s.call(document.all) && (g = function(A) {
      if ((v || !A) && (typeof A > "u" || typeof A == "object"))
        try {
          var I = s.call(A);
          return (I === f || I === h || I === p || I === c) && A("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Yo = t ? function(A) {
    if (g(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    try {
      t(A, null, r);
    } catch (I) {
      if (I !== n)
        return !1;
    }
    return !o(A) && a(A);
  } : function(A) {
    if (g(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    if (m)
      return a(A);
    if (o(A))
      return !1;
    var I = s.call(A);
    return I !== u && I !== d && !/^\[object HTML/.test(I) ? !1 : a(A);
  }, Yo;
}
var Xo, tu;
function k2() {
  if (tu) return Xo;
  tu = 1;
  var e = N2(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, d) {
    for (var f = 0, h = c.length; f < h; f++)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  }, i = function(c, u, d) {
    for (var f = 0, h = c.length; f < h; f++)
      d == null ? u(c.charAt(f), f, c) : u.call(d, c.charAt(f), f, c);
  }, o = function(c, u, d) {
    for (var f in c)
      r.call(c, f) && (d == null ? u(c[f], f, c) : u.call(d, c[f], f, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return Xo = function(c, u, d) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, u, f) : typeof c == "string" ? i(c, u, f) : o(c, u, f);
  }, Xo;
}
var Jo, ru;
function M2() {
  return ru || (ru = 1, Jo = [
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
  ]), Jo;
}
var Zo, nu;
function L2() {
  if (nu) return Zo;
  nu = 1;
  var e = /* @__PURE__ */ M2(), t = typeof globalThis > "u" ? kn : globalThis;
  return Zo = function() {
    for (var n = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (n[n.length] = e[i]);
    return n;
  }, Zo;
}
var Qo, iu;
function $2() {
  if (iu) return Qo;
  iu = 1;
  var e = k2(), t = /* @__PURE__ */ L2(), r = Xt(), n = /* @__PURE__ */ Ee(), i = /* @__PURE__ */ Mt(), o = n("Object.prototype.toString"), a = $t()(), s = typeof globalThis > "u" ? kn : globalThis, c = t(), u = n("String.prototype.slice"), d = Object.getPrototypeOf, f = n("Array.prototype.indexOf", !0) || function(g, y) {
    for (var w = 0; w < g.length; w += 1)
      if (g[w] === y)
        return w;
    return -1;
  }, h = { __proto__: null };
  a && i && d ? e(c, function(v) {
    var g = new s[v]();
    if (Symbol.toStringTag in g) {
      var y = d(g), w = i(y, Symbol.toStringTag);
      if (!w) {
        var A = d(y);
        w = i(A, Symbol.toStringTag);
      }
      h["$" + v] = r(w.get);
    }
  }) : e(c, function(v) {
    var g = new s[v](), y = g.slice || g.set;
    y && (h["$" + v] = r(y));
  });
  var p = function(g) {
    var y = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, A) {
        if (!y)
          try {
            "$" + w(g) === A && (y = u(A, 1));
          } catch {
          }
      }
    ), y;
  }, m = function(g) {
    var y = !1;
    return e(
      // eslint-disable-next-line no-extra-parens
      /** @type {Record<`\$${TypedArrayName}`, Getter>} */
      /** @type {any} */
      h,
      /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, A) {
        if (!y)
          try {
            w(g), y = u(A, 1);
          } catch {
          }
      }
    ), y;
  };
  return Qo = function(g) {
    if (!g || typeof g != "object")
      return !1;
    if (!a) {
      var y = u(o(g), 8, -1);
      return f(c, y) > -1 ? y : y !== "Object" ? !1 : m(g);
    }
    return i ? p(g) : null;
  }, Qo;
}
var ea, ou;
function _2() {
  if (ou) return ea;
  ou = 1;
  var e = /* @__PURE__ */ Ee(), t = e("ArrayBuffer.prototype.byteLength", !0), r = /* @__PURE__ */ lf();
  return ea = function(i) {
    return r(i) ? t ? t(i) : i.byteLength : NaN;
  }, ea;
}
var ta, au;
function D2() {
  if (au) return ta;
  au = 1;
  var e = i2(), t = Xd(), r = c2(), n = /* @__PURE__ */ ut(), i = g2(), o = tf(), a = y2(), s = /* @__PURE__ */ Qd(), c = rf(), u = /* @__PURE__ */ lf(), d = /* @__PURE__ */ x2(), f = uf(), h = /* @__PURE__ */ b2(), p = os(), m = I2(), v = /* @__PURE__ */ P2(), g = /* @__PURE__ */ $2(), y = /* @__PURE__ */ _2(), w = t("SharedArrayBuffer.prototype.byteLength", !0), A = t("Date.prototype.getTime"), I = Object.getPrototypeOf, T = t("Object.prototype.toString"), M = n("%Set%", !0), L = t("Map.prototype.has", !0), k = t("Map.prototype.get", !0), N = t("Map.prototype.size", !0), $ = t("Set.prototype.add", !0), C = t("Set.prototype.delete", !0), S = t("Set.prototype.has", !0), P = t("Set.prototype.size", !0);
  function D(R, _, G, U) {
    for (var Z = i(R), re; (re = Z.next()) && !re.done; )
      if (te(_, re.value, G, U))
        return C(R, re.value), !0;
    return !1;
  }
  function H(R) {
    if (typeof R > "u")
      return null;
    if (typeof R != "object")
      return typeof R == "symbol" ? !1 : typeof R == "string" || typeof R == "number" ? +R == +R : !0;
  }
  function j(R, _, G, U, Z, re) {
    var z = H(G);
    if (z != null)
      return z;
    var q = k(_, z), B = e({}, Z, { strict: !1 });
    return typeof q > "u" && !L(_, z) || !te(U, q, B, re) ? !1 : !L(R, z) && te(U, q, B, re);
  }
  function W(R, _, G) {
    var U = H(G);
    return U ?? (S(_, U) && !S(R, U));
  }
  function Q(R, _, G, U, Z, re) {
    for (var z = i(R), q, B; (q = z.next()) && !q.done; )
      if (B = q.value, // eslint-disable-next-line no-use-before-define
      te(G, B, Z, re) && te(U, k(_, B), Z, re))
        return C(R, B), !0;
    return !1;
  }
  function te(R, _, G, U) {
    var Z = G || {};
    if (Z.strict ? a(R, _) : R === _)
      return !0;
    var re = m(R), z = m(_);
    if (re !== z)
      return !1;
    if (!R || !_ || typeof R != "object" && typeof _ != "object")
      return Z.strict ? a(R, _) : R == _;
    var q = U.has(R), B = U.has(_), K;
    if (q && B) {
      if (U.get(R) === U.get(_))
        return !0;
    } else
      K = {};
    return q || U.set(R, K), B || U.set(_, K), Be(R, _, Z, U);
  }
  function ye(R) {
    return !R || typeof R != "object" || typeof R.length != "number" || typeof R.copy != "function" || typeof R.slice != "function" || R.length > 0 && typeof R[0] != "number" ? !1 : !!(R.constructor && R.constructor.isBuffer && R.constructor.isBuffer(R));
  }
  function me(R, _, G, U) {
    if (P(R) !== P(_))
      return !1;
    for (var Z = i(R), re = i(_), z, q, B; (z = Z.next()) && !z.done; )
      if (z.value && typeof z.value == "object")
        B || (B = new M()), $(B, z.value);
      else if (!S(_, z.value)) {
        if (G.strict || !W(R, _, z.value))
          return !1;
        B || (B = new M()), $(B, z.value);
      }
    if (B) {
      for (; (q = re.next()) && !q.done; )
        if (q.value && typeof q.value == "object") {
          if (!D(B, q.value, G.strict, U))
            return !1;
        } else if (!G.strict && !S(R, q.value) && !D(B, q.value, G.strict, U))
          return !1;
      return P(B) === 0;
    }
    return !0;
  }
  function De(R, _, G, U) {
    if (N(R) !== N(_))
      return !1;
    for (var Z = i(R), re = i(_), z, q, B, K, ge, xe; (z = Z.next()) && !z.done; )
      if (K = z.value[0], ge = z.value[1], K && typeof K == "object")
        B || (B = new M()), $(B, K);
      else if (xe = k(_, K), typeof xe > "u" && !L(_, K) || !te(ge, xe, G, U)) {
        if (G.strict || !j(R, _, K, ge, G, U))
          return !1;
        B || (B = new M()), $(B, K);
      }
    if (B) {
      for (; (q = re.next()) && !q.done; )
        if (K = q.value[0], xe = q.value[1], K && typeof K == "object") {
          if (!Q(B, R, K, xe, G, U))
            return !1;
        } else if (!G.strict && (!R.has(K) || !te(k(R, K), xe, G, U)) && !Q(B, R, K, xe, e({}, G, { strict: !1 }), U))
          return !1;
      return P(B) === 0;
    }
    return !0;
  }
  function Be(R, _, G, U) {
    var Z, re;
    if (typeof R != typeof _ || R == null || _ == null || T(R) !== T(_) || s(R) !== s(_))
      return !1;
    var z = c(R), q = c(_);
    if (z !== q)
      return !1;
    var B = R instanceof Error, K = _ instanceof Error;
    if (B !== K || (B || K) && (R.name !== _.name || R.message !== _.message))
      return !1;
    var ge = f(R), xe = f(_);
    if (ge !== xe || (ge || xe) && (R.source !== _.source || r(R) !== r(_)))
      return !1;
    var be = d(R), Ae = d(_);
    if (be !== Ae || (be || Ae) && A(R) !== A(_) || G.strict && I && I(R) !== I(_))
      return !1;
    var Ie = g(R), Ye = g(_);
    if (Ie !== Ye)
      return !1;
    if (Ie || Ye) {
      if (R.length !== _.length)
        return !1;
      for (Z = 0; Z < R.length; Z++)
        if (R[Z] !== _[Z])
          return !1;
      return !0;
    }
    var je = ye(R), Re = ye(_);
    if (je !== Re)
      return !1;
    if (je || Re) {
      if (R.length !== _.length)
        return !1;
      for (Z = 0; Z < R.length; Z++)
        if (R[Z] !== _[Z])
          return !1;
      return !0;
    }
    var Xe = u(R), Je = u(_);
    if (Xe !== Je)
      return !1;
    if (Xe || Je)
      return y(R) !== y(_) ? !1 : typeof Uint8Array == "function" && te(new Uint8Array(R), new Uint8Array(_), G, U);
    var Ze = h(R), kr = h(_);
    if (Ze !== kr)
      return !1;
    if (Ze || kr)
      return w(R) !== w(_) ? !1 : typeof Uint8Array == "function" && te(new Uint8Array(R), new Uint8Array(_), G, U);
    if (typeof R != typeof _)
      return !1;
    var dt = p(R), _t = p(_);
    if (dt.length !== _t.length)
      return !1;
    for (dt.sort(), _t.sort(), Z = dt.length - 1; Z >= 0; Z--)
      if (dt[Z] != _t[Z])
        return !1;
    for (Z = dt.length - 1; Z >= 0; Z--)
      if (re = dt[Z], !te(R[re], _[re], G, U))
        return !1;
    var Jt = v(R), ft = v(_);
    return Jt !== ft ? !1 : Jt === "Set" || ft === "Set" ? me(R, _, G, U) : Jt === "Map" ? De(R, _, G, U) : !0;
  }
  return ta = function(_, G, U) {
    return te(_, G, U, o());
  }, ta;
}
var B2 = D2();
const j2 = /* @__PURE__ */ _b(B2);
function z2(e) {
  return e;
}
function H2(e, t, r, n) {
  const i = z2, [o, a] = J(i(r)), s = ot(o);
  return pe(() => {
    const c = () => {
      const u = { ...r, ...e.getAttributes(t) };
      Object.keys(u).forEach((f) => {
        (u[f] === null || u[f] === void 0) && (u[f] = r ? r[f] : null);
      });
      const d = i(u);
      j2(s.current, d) || (a(d), s.current = d);
    };
    return e.on("selectionUpdate", c), e.on("transaction", c), () => {
      e.off("selectionUpdate", c), e.off("transaction", c);
    };
  }, [e, r, t, i]), o;
}
function q2({ editor: e }) {
  const { t } = Se(), { width: r, height: n, src: i } = H2(e, zt.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, a] = J(!1), [s, c] = J(""), u = oe(() => {
    a(!1);
  }, [a]);
  pe(() => {
    o && c(i);
  }, [o, i]);
  const d = oe(() => {
    const g = Hd(s);
    e.chain().updateAttributes(zt.name, {
      src: (g == null ? void 0 : g.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run(), a(!1);
  }, [e, s, a]), f = oe(() => {
    window.open(i, "_blank");
  }, [i]), h = oe(() => {
    a(!0);
  }, [a]), p = oe(
    (g) => {
      e.chain().updateAttributes(zt.name, g).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = oe(() => e.isActive(zt.name) && !i, [e, i]), v = oe(() => Id(zt.name, e), [e]);
  return /* @__PURE__ */ E(de, { children: [
    /* @__PURE__ */ l(
      St,
      {
        className: "bubble-menu",
        editor: e,
        pluginKey: "iframe-bubble-menu",
        shouldShow: m,
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
        children: /* @__PURE__ */ E("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
          /* @__PURE__ */ l(
            F,
            {
              action: f,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ l(
            F,
            {
              action: h,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ l(
            hb,
            {
              height: n,
              onOk: p,
              width: r,
              children: /* @__PURE__ */ l(
                F,
                {
                  icon: "Settings",
                  tooltip: t("editor.settings")
                }
              )
            }
          ),
          /* @__PURE__ */ l(
            F,
            {
              action: v,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ E(
      jn,
      {
        onOpenChange: a,
        open: o,
        children: [
          /* @__PURE__ */ l(zn, {}),
          /* @__PURE__ */ E(Ir, { children: [
            /* @__PURE__ */ l(bd, { children: /* @__PURE__ */ l(Rr, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ l(
              Ne,
              {
                autoFocus: !0,
                onInput: (g) => c(g.target.value),
                placeholder: "Enter link",
                type: "url",
                value: s
              }
            ),
            /* @__PURE__ */ E(Za, { children: [
              /* @__PURE__ */ l(Ce, { onClick: u, children: "Cancel" }),
              /* @__PURE__ */ l(Ce, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function F2({ editor: e, disabled: t, bubbleMenu: r }) {
  const n = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, a, s, c, u, d, f, h, p, m, v;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ l(
        Yx,
        {
          editor: e
        },
        "columns"
      ) : null,
      n.includes("table") && !((a = r == null ? void 0 : r.tableConfig) != null && a.hidden) ? /* @__PURE__ */ l(
        Ly,
        {
          actions: (s = r == null ? void 0 : r.tableConfig) == null ? void 0 : s.actions,
          editor: e
        },
        "table"
      ) : null,
      n.includes("link") && !((c = r == null ? void 0 : r.linkConfig) != null && c.hidden) ? /* @__PURE__ */ l(
        sx,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      n.includes(wr.name) && !((u = r == null ? void 0 : r.imageConfig) != null && u.hidden) ? /* @__PURE__ */ l(
        qx,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      n.includes(Cd.name) && !((d = r == null ? void 0 : r.imageGifConfig) != null && d.hidden) ? /* @__PURE__ */ l(
        Fx,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      n.includes("video") && !((f = r == null ? void 0 : r.videoConfig) != null && f.hidden) ? /* @__PURE__ */ l(
        Ux,
        {
          disabled: t,
          editor: e
        },
        "video"
      ) : null,
      n.includes("iframe") && !((h = r == null ? void 0 : r.iframeConfig) != null && h.hidden) ? /* @__PURE__ */ l(
        q2,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (p = r == null ? void 0 : r.floatingMenuConfig) != null && p.hidden ? null : /* @__PURE__ */ l(
        oy,
        {
          disabled: t,
          editor: e,
          hidePlusIcon: (m = r == null ? void 0 : r.floatingMenuConfig) == null ? void 0 : m.hidePlusIcon
        },
        "content"
      ),
      (v = r == null ? void 0 : r.textConfig) != null && v.hidden ? null : /* @__PURE__ */ l(
        cy,
        {
          disabled: t,
          editor: e
        },
        "text"
      )
    ];
  };
  return r != null && r.render ? r.render({ editor: e, disabled: t || !1, extensionsNames: n, bubbleMenu: r }, i()) : i().filter(Boolean);
}
function su() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function U2(e) {
  const { t } = Se(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: i,
    setSelectedColor: o,
    onChange: a,
    colors: s = Lf
  } = e, c = we(() => {
    const p = s, m = [];
    for (let v = 0; v < p.length; v += 10)
      m.push(p.slice(v, v + 10));
    return m;
  }, [s]), [u, d] = J([]), f = (p) => {
    const m = [...u], v = m.indexOf(p);
    v !== -1 && m.splice(v, 1), m.unshift(p), m.length > 10 && m.pop(), d(m);
  };
  function h(p) {
    if (p === void 0) {
      o == null || o(p), a == null || a(p);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(p) && (o == null || o(p), a == null || a(p), f(p));
  }
  return /* @__PURE__ */ E(Or, { modal: !0, children: [
    /* @__PURE__ */ l(
      Pr,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: e == null ? void 0 : e.children
      }
    ),
    /* @__PURE__ */ l(
      Kt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ E(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => h(void 0),
              children: [
                /* @__PURE__ */ l(su, {}),
                /* @__PURE__ */ l("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ E(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                h(void 0);
              },
              children: [
                /* @__PURE__ */ l(su, {}),
                /* @__PURE__ */ l("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
              ]
            }
          ),
          c.map((p, m) => /* @__PURE__ */ l(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: p.map((v, g) => /* @__PURE__ */ l(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => h(v),
                  children: /* @__PURE__ */ l(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: v
                      },
                      children: v === i ? /* @__PURE__ */ l(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ l(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      )
                    }
                  )
                },
                `sub-color-${g}`
              ))
            },
            m
          )),
          /* @__PURE__ */ E("div", { children: [
            /* @__PURE__ */ l("div", { className: "richtext-my-1 richtext-text-sm", children: t("editor.recent") }),
            /* @__PURE__ */ l("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: u == null ? void 0 : u.map((p, m) => /* @__PURE__ */ l(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => h(p),
                children: /* @__PURE__ */ l(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: p
                    },
                    children: /* @__PURE__ */ l(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ l("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${m}`
            )) })
          ] }),
          /* @__PURE__ */ l(W2, { setColor: h })
        ] })
      }
    )
  ] });
}
function W2({ setColor: e }) {
  const [t, r] = J("#000000"), [n, i] = J(!1), { t: o } = Se();
  return pe(() => () => {
    i(!1);
  }, []), /* @__PURE__ */ E(Or, { open: n, children: [
    /* @__PURE__ */ l(Pr, { asChild: !0, children: /* @__PURE__ */ E(
      "div",
      {
        className: "richtext-p-1.5 richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent",
        onClick: (a) => {
          a.preventDefault(), i(!0);
        },
        children: [
          o("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ E(Kt, { children: [
      /* @__PURE__ */ E("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ l(
          Ep,
          {
            color: t,
            onChange: r
          }
        ),
        /* @__PURE__ */ l(
          Ne,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            value: t.slice(1),
            onChange: (a) => {
              a.preventDefault(), r(`#${a.target.value}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ l(We, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ l(
        Ce,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), e(t), i(!1);
          },
          children: /* @__PURE__ */ l(mu, { size: 16 })
        }
      )
    ] })
  ] });
}
function G2({ editor: e, disabled: t, toolbar: r }) {
  const { t: n, lang: i } = Se(), o = we(() => {
    const u = [...e.extensionManager.extensions].sort((f, h) => {
      const p = f.options.sort ?? -1, m = h.options.sort ?? -1;
      return p - m;
    });
    let d = [];
    for (const f of u) {
      const {
        button: h,
        divider: p = !1,
        spacer: m = !1,
        toolbar: v = !0
      } = f.options;
      if (!h || !$x(h) || !v)
        continue;
      const g = h({
        editor: e,
        extension: f,
        t: n
      });
      if (Array.isArray(g)) {
        const y = g.map((w, A) => ({
          button: w,
          divider: A === g.length - 1 ? p : !1,
          spacer: A === 0 ? m : !1,
          type: f.type,
          name: f.name
        }));
        d = [...d, ...y];
        continue;
      }
      d.push({
        button: g,
        divider: p,
        spacer: m,
        type: f.type,
        name: f.name
      });
    }
    return d;
  }, [e, n, i]), a = (c) => /* @__PURE__ */ l(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: c })
    }
  ), s = o.map((c, u) => {
    var f, h;
    const d = c.button.component;
    return /* @__PURE__ */ E("div", { className: "richtext-flex richtext-items-center", children: [
      (c == null ? void 0 : c.spacer) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ l(
        d,
        {
          ...c.button.componentProps,
          disabled: t || ((h = (f = c == null ? void 0 : c.button) == null ? void 0 : f.componentProps) == null ? void 0 : h.disabled)
        }
      ),
      (c == null ? void 0 : c.divider) && /* @__PURE__ */ l(We, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${u}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: e, disabled: t || !1 }, o, s, a) : a(s);
}
function V2({ editor: e, extensions: t }) {
  const { t: r } = Se(), n = we(() => {
    var i, o, a;
    return (a = (o = (i = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : a.limit;
  }, [t]);
  return n ? /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ E("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ E("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function cu() {
  const { toasts: e } = is();
  return /* @__PURE__ */ E(nb, { children: [
    e.map(({ id: t, title: r, description: n, action: i, ...o }) => /* @__PURE__ */ E(
      Md,
      {
        ...o,
        children: [
          /* @__PURE__ */ E("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ l($d, { children: r }),
            n && /* @__PURE__ */ l(_d, { children: n })
          ] }),
          i,
          /* @__PURE__ */ l(Ld, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ l(kd, {})
  ] });
}
const K2 = `
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
`, Y2 = Tf(({ children: e, id: t }) => {
  const [, r] = Sd((a) => a.value), [, n] = Ad((a) => a.value), i = (a) => {
    r({
      value: a.detail
    });
  }, o = (a) => {
    n({
      value: a.detail
    });
  };
  return pe(() => {
    const a = Pn(Rt.EDIT(t), i), s = Pn(Rt.UPDATE_THEME(t), o);
    return () => {
      a(), s();
    };
  }, []), /* @__PURE__ */ l(de, { children: e });
});
function lu({ children: e, id: t }) {
  return /* @__PURE__ */ l(gx, { children: /* @__PURE__ */ l(vx, { children: /* @__PURE__ */ l(Y2, { id: t, children: e }) }) });
}
function Iw() {
  const [e] = Ad((t) => t.value);
  return e;
}
const X2 = {
  setTheme: (e, t) => {
    Qa(Rt.UPDATE_THEME(e), t);
  }
}, uu = "data-rc-order", du = "data-rc-priority", J2 = "rc-util-key", Ra = /* @__PURE__ */ new Map();
function Z2(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let r = t;
  for (; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function df({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : J2;
}
function ms(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Q2(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ff(e) {
  return [...(Ra.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function hf(e, t = {}) {
  const { csp: r, prepend: n, priority: i = 0 } = t, o = Q2(n), a = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(uu, o), a && i && s.setAttribute(du, `${i}`), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  const c = ms(t), { firstChild: u } = c;
  if (n) {
    if (a) {
      const d = ff(c).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(uu)))
          return !1;
        const h = Number(f.getAttribute(du) || 0);
        return i >= h;
      });
      if (d.length > 0)
        return c.insertBefore(s, d.at(-1).nextSibling), s;
    }
    u.before(s);
  } else
    c.append(s);
  return s;
}
function pf(e, t = {}) {
  const r = ms(t);
  return ff(r).find((n) => n.getAttribute(df(t)) === e);
}
function ew(e, t = {}) {
  const r = pf(e, t);
  r && r.remove();
}
function tw(e, t) {
  const r = Ra.get(e);
  if (!r || !Z2(document, r)) {
    const n = hf("", t), { parentNode: i } = n;
    Ra.set(e, i), n.remove();
  }
}
function rw(e, t, r = {}) {
  var a, s, c;
  const n = ms(r);
  tw(n, r);
  const i = pf(t, r);
  if (i)
    return (a = r.csp) != null && a.nonce && i.nonce !== ((s = r.csp) == null ? void 0 : s.nonce) && (i.nonce = (c = r.csp) == null ? void 0 : c.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = hf(e, r);
  return o.setAttribute(df(r), t), o;
}
function nw(e, t) {
  const { content: r, extensions: n, useEditorOptions: i = {}, renderToolbar: o, renderHeader: a } = e, s = If(), c = we(() => {
    const v = D1(n, n, "name");
    return [...n.map((y) => {
      const w = n.find((A) => A.name === y.name);
      return w ? y.configure(w.options) : y;
    }), ...v].map((y, w) => y.configure({ sort: w }));
  }, [n]), u = yr((v) => {
    var y;
    const g = f(v, e.output);
    (y = e == null ? void 0 : e.onChangeContent) == null || y.call(e, g);
  }, $f), d = Pf({
    extensions: c,
    content: r,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: v }) => {
      u && u(v);
    },
    ...i
  });
  Rf(t, () => ({
    editor: d
  })), pe(() => {
    document.documentElement.classList.toggle("dark", e.dark), X2.setTheme(s, e.dark ? "dark" : "light");
  }, [e.dark]), pe(() => {
    d == null || d.setEditable(!(e != null && e.disabled)), kb.setDisable(s, !(e != null && e.disabled));
  }, [d, e == null ? void 0 : e.disabled]), pe(() => ((e == null ? void 0 : e.resetCSS) !== !1 && rw(K2, "react-tiptap-reset"), () => {
    ew("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function f(v, g) {
    return e != null && e.removeDefaultWrapper ? g === "html" ? v.isEmpty ? "" : v.getHTML() : g === "json" ? v.isEmpty ? {} : v.getJSON() : g === "text" ? v.isEmpty ? "" : v.getText() : "" : g === "html" ? v.getHTML() : g === "json" ? v.getJSON() : g === "text" ? v.getText() : "";
  }
  Of(() => {
    d && (d.id = s);
  }, [s, d]), pe(() => () => {
    var v;
    (v = d == null ? void 0 : d.destroy) == null || v.call(d);
  }, []);
  const h = Dx(d, "characterCount");
  if (!d)
    return /* @__PURE__ */ l(de, {});
  const p = !(e != null && e.hideToolbar) && /* @__PURE__ */ l(
    G2,
    {
      disabled: !!(e != null && e.disabled),
      editor: d,
      toolbar: e.toolbar
    }
  ), m = /* @__PURE__ */ E(de, { children: [
    a && a(),
    /* @__PURE__ */ l(
      Nf,
      {
        className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`,
        editor: d
      }
    ),
    h && /* @__PURE__ */ l(
      V2,
      {
        editor: d,
        extensions: n
      }
    ),
    !(e != null && e.hideBubble) && /* @__PURE__ */ l(
      F2,
      {
        bubbleMenu: e == null ? void 0 : e.bubbleMenu,
        disabled: e == null ? void 0 : e.disabled,
        editor: d
      }
    )
  ] });
  return o && p ? /* @__PURE__ */ E("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ l(lu, { id: s, children: /* @__PURE__ */ E(yc, { delayDuration: 0, disableHoverableContent: !0, children: [
      o(p),
      /* @__PURE__ */ l("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: m }) })
    ] }) }),
    /* @__PURE__ */ l(cu, {})
  ] }) : /* @__PURE__ */ E("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ l(lu, { id: s, children: /* @__PURE__ */ l(yc, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ l("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ E("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
      p,
      m
    ] }) }) }) }),
    /* @__PURE__ */ l(cu, {})
  ] });
}
const Rw = Ef(nw);
export {
  bw as $,
  F as A,
  Ce as B,
  U2 as C,
  Xx as D,
  Rt as E,
  Za as F,
  hx as G,
  My as H,
  ga as I,
  yr as J,
  Cw as K,
  it as L,
  my as M,
  yd as N,
  H2 as O,
  Or as P,
  Iw as Q,
  wr as R,
  Pd as S,
  Bd as T,
  yx as U,
  Td as V,
  Aw as W,
  Ty as X,
  Cy as Y,
  Nb as Z,
  ww as _,
  jd as a,
  Sw as a0,
  vw as a1,
  We as a2,
  Id as a3,
  hb as a4,
  yw as a5,
  Ed as a6,
  Nn as a7,
  Rw as a8,
  Db as a9,
  kn as aa,
  _b as ab,
  is as ac,
  Dx as ad,
  ox as ae,
  Cd as af,
  Kx as ag,
  Ew as ah,
  zt as ai,
  ns as b,
  xw as c,
  ee as d,
  Jx as e,
  Rd as f,
  zv as g,
  Zx as h,
  sd as i,
  Tw as j,
  ve as k,
  Pn as l,
  Pr as m,
  Kt as n,
  Ne as o,
  j2 as p,
  Qa as q,
  Dd as r,
  jv as s,
  Dn as t,
  Od as u,
  tb as v,
  jn as w,
  zn as x,
  Ir as y,
  Rr as z
};

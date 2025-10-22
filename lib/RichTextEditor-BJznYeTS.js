var yf = Object.defineProperty;
var bf = (e, t, r) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $r = (e, t, r) => bf(e, typeof t != "symbol" ? t + "" : t, r);
import { jsxs as R, jsx as l, Fragment as pe } from "react/jsx-runtime";
import * as ne from "react";
import nr, { useState as J, useRef as He, useEffect as ge, useMemo as we, useCallback as oe, createContext as wf, useContext as Sf, useSyncExternalStore as Af, Fragment as Cf, memo as Tf, forwardRef as Ef, useId as Rf, useImperativeHandle as If, useLayoutEffect as Of } from "react";
import { c as Oa, B as St, N as Pa, R as Na, g as ti, u as Pf, E as Nf } from "./dom-dataset-DR4-OJWP.js";
import { Slot as hu } from "@radix-ui/react-slot";
import { n as Ee, B as kf, r as Xr, V as ra, u as Se, s as Lf, I as Yr, j as Jr, i as pu, C as Mf, E as $f } from "./index-6fSuOJHp.js";
import * as mu from "@radix-ui/react-separator";
import * as Le from "@radix-ui/react-toast";
import { Loader2 as _f, WrapText as Df, PencilRuler as Bf, FlipHorizontal as jf, FlipVertical as zf, CropIcon as Hf, ChevronUp as qf, Paperclip as Ff, Eye as Uf, Settings as Wf, ZoomOut as Gf, ZoomIn as Vf, BookMarked as Kf, Sigma as Xf, SmilePlusIcon as Yf, Replace as Es, SmilePlus as Jf, Frame as Zf, Columns2 as Rs, PanelRight as Qf, PanelLeft as eh, Clipboard as th, Copy as rh, GripVertical as nh, Plus as gu, Columns4 as ih, Columns3 as oh, Heading6 as ah, Heading5 as sh, Heading4 as ch, Heading3 as lh, Heading2 as uh, Heading1 as dh, ChevronsUpDown as fh, Trash as hh, Trash2 as ph, TableCellsSplit as mh, TableCellsMerge as gh, BetweenVerticalEnd as vh, BetweenVerticalStart as xh, BetweenHorizonalStart as yh, BetweenHorizonalEnd as bh, Unlink as wh, Pencil as Sh, Sparkles as Ah, Table as Ch, Minimize as Th, Maximize as Eh, Video as Rh, ImageUp as Ih, Link as Oh, ListTodo as Ph, ListOrdered as Nh, List as kh, IndentDecrease as Lh, IndentIncrease as Mh, Type as $h, CodeXml as _h, Code as Dh, Superscript as Bh, Subscript as jh, ChevronDown as zh, Undo2 as Hh, Redo2 as qh, PaintRoller as Fh, Eraser as Uh, Minus as Wh, Strikethrough as Gh, Quote as Vh, Underline as Kh, Italic as Xh, LoaderCircle as Yh, Bold as Jh, X as vu, ChevronRight as Zh, Check as xu, Circle as Qh } from "lucide-react";
import * as Ar from "@radix-ui/react-tooltip";
import * as yu from "@radix-ui/react-toggle";
import { TextAlignRightIcon as ep, TextAlignLeftIcon as tp, TextAlignJustifyIcon as rp, TextAlignCenterIcon as np } from "@radix-ui/react-icons";
import * as hr from "@radix-ui/react-popover";
import * as bu from "@radix-ui/react-label";
import * as _e from "@radix-ui/react-dialog";
import { I as Cr, J as ip, B as op, v as ap, a as Ot, P as Pt, T as Wt, A as sp, K as cp, L as lp, M as up, c as dp, m as at, O as fp, Q as hp, R as pp, U as mp, V as gp, W as vp, N as Tr, n as wu, b as xp, D as yp, X as Zr, q as bp, E as wp } from "./index-D84lfj--.js";
import { Resizable as Sp } from "re-resizable";
import Ap from "react-image-crop";
import * as Nt from "@radix-ui/react-tabs";
import * as na from "@radix-ui/react-checkbox";
import Cp, { sticky as Tp } from "tippy.js";
import { HexColorPicker as Ep } from "react-colorful";
import * as ia from "@radix-ui/react-switch";
import * as de from "@radix-ui/react-dropdown-menu";
var Su = typeof global == "object" && global && global.Object === Object && global, Rp = typeof self == "object" && self && self.Object === Object && self, Xe = Su || Rp || Function("return this")(), Ve = Xe.Symbol, Au = Object.prototype, Ip = Au.hasOwnProperty, Op = Au.toString, Zt = Ve ? Ve.toStringTag : void 0;
function Pp(e) {
  var t = Ip.call(e, Zt), r = e[Zt];
  try {
    e[Zt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Op.call(e);
  return n && (t ? e[Zt] = r : delete e[Zt]), i;
}
var Np = Object.prototype, kp = Np.toString;
function Lp(e) {
  return kp.call(e);
}
var Mp = "[object Null]", $p = "[object Undefined]", Is = Ve ? Ve.toStringTag : void 0;
function At(e) {
  return e == null ? e === void 0 ? $p : Mp : Is && Is in Object(e) ? Pp(e) : Lp(e);
}
function st(e) {
  return e != null && typeof e == "object";
}
var _p = "[object Symbol]";
function Ln(e) {
  return typeof e == "symbol" || st(e) && At(e) == _p;
}
function Cu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ke = Array.isArray, Os = Ve ? Ve.prototype : void 0, Ps = Os ? Os.toString : void 0;
function Qr(e) {
  if (typeof e == "string")
    return e;
  if (Ke(e))
    return Cu(e, Qr) + "";
  if (Ln(e))
    return Ps ? Ps.call(e) : "";
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
var Ns = NaN, Hp = /^[-+]0x[0-9a-f]+$/i, qp = /^0b[01]+$/i, Fp = /^0o[0-7]+$/i, Up = parseInt;
function qt(e) {
  if (typeof e == "number")
    return e;
  if (Ln(e))
    return Ns;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zp(e);
  var r = qp.test(e);
  return r || Fp.test(e) ? Up(e.slice(2), r ? 2 : 8) : Hp.test(e) ? Ns : +e;
}
var ks = 1 / 0, Wp = 17976931348623157e292;
function Gp(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = qt(e), e === ks || e === -ks) {
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
var Kp = "[object AsyncFunction]", Xp = "[object Function]", Yp = "[object GeneratorFunction]", Jp = "[object Proxy]";
function Tu(e) {
  if (!wt(e))
    return !1;
  var t = At(e);
  return t == Xp || t == Yp || t == Kp || t == Jp;
}
var ri = Xe["__core-js_shared__"], Ls = (function() {
  var e = /[^.]+$/.exec(ri && ri.keys && ri.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Zp(e) {
  return !!Ls && Ls in e;
}
var Qp = Function.prototype, em = Qp.toString;
function kt(e) {
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
  var t = Tu(e) ? sm : rm;
  return t.test(kt(e));
}
function lm(e, t) {
  return e == null ? void 0 : e[t];
}
function Lt(e, t) {
  var r = lm(e, t);
  return cm(r) ? r : void 0;
}
var oa = Lt(Xe, "WeakMap");
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
var Ms = (function() {
  try {
    var e = Lt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), gm = Ms ? function(e, t) {
  return Ms(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mm(t),
    writable: !0
  });
} : ka, vm = pm(gm);
function xm(e, t, r, n) {
  for (var i = e.length, o = r + -1; ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function ym(e) {
  return e !== e;
}
function bm(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
function wm(e, t, r) {
  return t === t ? bm(e, t, r) : xm(e, ym, r);
}
function Sm(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && wm(e, t, 0) > -1;
}
var Am = 9007199254740991, Cm = /^(?:0|[1-9]\d*)$/;
function Eu(e, t) {
  var r = typeof e;
  return t = t ?? Am, !!t && (r == "number" || r != "symbol" && Cm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ru(e, t) {
  return e === t || e !== e && t !== t;
}
var $s = Math.max;
function Tm(e, t, r) {
  return t = $s(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = $s(n.length - t, 0), a = Array(o); ++i < o; )
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
var Rm = 9007199254740991;
function La(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rm;
}
function Iu(e) {
  return e != null && La(e.length) && !Tu(e);
}
var Im = Object.prototype;
function Om(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Im;
  return e === r;
}
function Pm(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Nm = "[object Arguments]";
function _s(e) {
  return st(e) && At(e) == Nm;
}
var Ou = Object.prototype, km = Ou.hasOwnProperty, Lm = Ou.propertyIsEnumerable, Ma = _s(/* @__PURE__ */ (function() {
  return arguments;
})()) ? _s : function(e) {
  return st(e) && km.call(e, "callee") && !Lm.call(e, "callee");
};
function Mm() {
  return !1;
}
var Pu = typeof exports == "object" && exports && !exports.nodeType && exports, Ds = Pu && typeof module == "object" && module && !module.nodeType && module, $m = Ds && Ds.exports === Pu, Bs = $m ? Xe.Buffer : void 0, _m = Bs ? Bs.isBuffer : void 0, aa = _m || Mm, Dm = "[object Arguments]", Bm = "[object Array]", jm = "[object Boolean]", zm = "[object Date]", Hm = "[object Error]", qm = "[object Function]", Fm = "[object Map]", Um = "[object Number]", Wm = "[object Object]", Gm = "[object RegExp]", Vm = "[object Set]", Km = "[object String]", Xm = "[object WeakMap]", Ym = "[object ArrayBuffer]", Jm = "[object DataView]", Zm = "[object Float32Array]", Qm = "[object Float64Array]", eg = "[object Int8Array]", tg = "[object Int16Array]", rg = "[object Int32Array]", ng = "[object Uint8Array]", ig = "[object Uint8ClampedArray]", og = "[object Uint16Array]", ag = "[object Uint32Array]", le = {};
le[Zm] = le[Qm] = le[eg] = le[tg] = le[rg] = le[ng] = le[ig] = le[og] = le[ag] = !0;
le[Dm] = le[Bm] = le[Ym] = le[jm] = le[Jm] = le[zm] = le[Hm] = le[qm] = le[Fm] = le[Um] = le[Wm] = le[Gm] = le[Vm] = le[Km] = le[Xm] = !1;
function sg(e) {
  return st(e) && La(e.length) && !!le[At(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports, or = Nu && typeof module == "object" && module && !module.nodeType && module, cg = or && or.exports === Nu, ni = cg && Su.process, en = (function() {
  try {
    var e = or && or.require && or.require("util").types;
    return e || ni && ni.binding && ni.binding("util");
  } catch {
  }
})(), js = en && en.isTypedArray, ku = js ? $a(js) : sg, lg = Object.prototype, ug = lg.hasOwnProperty;
function dg(e, t) {
  var r = Ke(e), n = !r && Ma(e), i = !r && !n && aa(e), o = !r && !n && !i && ku(e), a = r || n || i || o, s = a ? Pm(e.length, String) : [], c = s.length;
  for (var u in e)
    ug.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Eu(u, c))) && s.push(u);
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
function Lu(e) {
  return Iu(e) ? dg(e) : gg(e);
}
var vg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xg = /^\w*$/;
function _a(e, t) {
  if (Ke(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ln(e) ? !0 : xg.test(e) || !vg.test(e) || t != null && e in Object(t);
}
var pr = Lt(Object, "create");
function yg() {
  this.__data__ = pr ? pr(null) : {}, this.size = 0;
}
function bg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wg = "__lodash_hash_undefined__", Sg = Object.prototype, Ag = Sg.hasOwnProperty;
function Cg(e) {
  var t = this.__data__;
  if (pr) {
    var r = t[e];
    return r === wg ? void 0 : r;
  }
  return Ag.call(t, e) ? t[e] : void 0;
}
var Tg = Object.prototype, Eg = Tg.hasOwnProperty;
function Rg(e) {
  var t = this.__data__;
  return pr ? t[e] !== void 0 : Eg.call(t, e);
}
var Ig = "__lodash_hash_undefined__";
function Og(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = pr && t === void 0 ? Ig : t, this;
}
function Rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = yg;
Rt.prototype.delete = bg;
Rt.prototype.get = Cg;
Rt.prototype.has = Rg;
Rt.prototype.set = Og;
function Pg() {
  this.__data__ = [], this.size = 0;
}
function Mn(e, t) {
  for (var r = e.length; r--; )
    if (Ru(e[r][0], t))
      return r;
  return -1;
}
var Ng = Array.prototype, kg = Ng.splice;
function Lg(e) {
  var t = this.__data__, r = Mn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : kg.call(t, r, 1), --this.size, !0;
}
function Mg(e) {
  var t = this.__data__, r = Mn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function $g(e) {
  return Mn(this.__data__, e) > -1;
}
function _g(e, t) {
  var r = this.__data__, n = Mn(r, e);
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
ct.prototype.delete = Lg;
ct.prototype.get = Mg;
ct.prototype.has = $g;
ct.prototype.set = _g;
var mr = Lt(Xe, "Map");
function Dg() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (mr || ct)(),
    string: new Rt()
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
  return e == null ? "" : Qr(e);
}
function Mu(e, t) {
  return Ke(e) ? e : _a(e, t) ? [e] : Kg(sa(e));
}
function _n(e) {
  if (typeof e == "string" || Ln(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $u(e, t) {
  t = Mu(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[_n(t[r++])];
  return r && r == n ? e : void 0;
}
function Xg(e, t, r) {
  var n = e == null ? void 0 : $u(e, t);
  return n === void 0 ? r : n;
}
function _u(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var zs = Ve ? Ve.isConcatSpreadable : void 0;
function Yg(e) {
  return Ke(e) || Ma(e) || !!(zs && e && e[zs]);
}
function Jg(e, t, r, n, i) {
  var o = -1, a = e.length;
  for (r || (r = Yg), i || (i = []); ++o < a; ) {
    var s = e[o];
    r(s) && _u(i, s);
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
var Du = "\\ud800-\\udfff", l0 = "\\u0300-\\u036f", u0 = "\\ufe20-\\ufe2f", d0 = "\\u20d0-\\u20ff", f0 = l0 + u0 + d0, h0 = "\\ufe0e\\ufe0f", p0 = "[" + Du + "]", ca = "[" + f0 + "]", la = "\\ud83c[\\udffb-\\udfff]", m0 = "(?:" + ca + "|" + la + ")", Bu = "[^" + Du + "]", ju = "(?:\\ud83c[\\udde6-\\uddff]){2}", zu = "[\\ud800-\\udbff][\\udc00-\\udfff]", g0 = "\\u200d", Hu = m0 + "?", qu = "[" + h0 + "]?", v0 = "(?:" + g0 + "(?:" + [Bu, ju, zu].join("|") + ")" + qu + Hu + ")*", x0 = qu + Hu + v0, y0 = "(?:" + [Bu + ca + "?", ca, ju, zu, p0].join("|") + ")", b0 = RegExp(la + "(?=" + la + ")|" + y0 + x0, "g");
function w0(e) {
  return e.match(b0) || [];
}
function S0(e) {
  return Ba(e) ? w0(e) : c0(e);
}
function A0(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Fu(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = qt(r), r = r === r ? r : 0), t !== void 0 && (t = qt(t), t = t === t ? t : 0), A0(qt(e), t, r);
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
function R0(e) {
  return this.__data__.has(e);
}
var I0 = 200;
function O0(e, t) {
  var r = this.__data__;
  if (r instanceof ct) {
    var n = r.__data__;
    if (!mr || n.length < I0 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new lt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function it(e) {
  var t = this.__data__ = new ct(e);
  this.size = t.size;
}
it.prototype.clear = C0;
it.prototype.delete = T0;
it.prototype.get = E0;
it.prototype.has = R0;
it.prototype.set = O0;
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
var k0 = Object.prototype, L0 = k0.propertyIsEnumerable, Hs = Object.getOwnPropertySymbols, M0 = Hs ? function(e) {
  return e == null ? [] : (e = Object(e), P0(Hs(e), function(t) {
    return L0.call(e, t);
  }));
} : N0;
function $0(e, t, r) {
  var n = t(e);
  return Ke(e) ? n : _u(n, r(e));
}
function qs(e) {
  return $0(e, Lu, M0);
}
var ua = Lt(Xe, "DataView"), da = Lt(Xe, "Promise"), fa = Lt(Xe, "Set"), Fs = "[object Map]", _0 = "[object Object]", Us = "[object Promise]", Ws = "[object Set]", Gs = "[object WeakMap]", Vs = "[object DataView]", D0 = kt(ua), B0 = kt(mr), j0 = kt(da), z0 = kt(fa), H0 = kt(oa), xt = At;
(ua && xt(new ua(new ArrayBuffer(1))) != Vs || mr && xt(new mr()) != Fs || da && xt(da.resolve()) != Us || fa && xt(new fa()) != Ws || oa && xt(new oa()) != Gs) && (xt = function(e) {
  var t = At(e), r = t == _0 ? e.constructor : void 0, n = r ? kt(r) : "";
  if (n)
    switch (n) {
      case D0:
        return Vs;
      case B0:
        return Fs;
      case j0:
        return Us;
      case z0:
        return Ws;
      case H0:
        return Gs;
    }
  return t;
});
var Ks = Xe.Uint8Array, q0 = "__lodash_hash_undefined__";
function F0(e) {
  return this.__data__.set(e, q0), this;
}
function U0(e) {
  return this.__data__.has(e);
}
function gr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new lt(); ++t < r; )
    this.add(e[t]);
}
gr.prototype.add = gr.prototype.push = F0;
gr.prototype.has = U0;
function W0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Uu(e, t) {
  return e.has(t);
}
var G0 = 1, V0 = 2;
function Wu(e, t, r, n, i, o) {
  var a = r & G0, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = o.get(e), d = o.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, h = !0, p = r & V0 ? new gr() : void 0;
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
      if (!W0(t, function(x, w) {
        if (!Uu(p, w) && (m === x || i(m, x, r, n, o)))
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
function X0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Y0 = 1, J0 = 2, Z0 = "[object Boolean]", Q0 = "[object Date]", e1 = "[object Error]", t1 = "[object Map]", r1 = "[object Number]", n1 = "[object RegExp]", i1 = "[object Set]", o1 = "[object String]", a1 = "[object Symbol]", s1 = "[object ArrayBuffer]", c1 = "[object DataView]", Xs = Ve ? Ve.prototype : void 0, ii = Xs ? Xs.valueOf : void 0;
function l1(e, t, r, n, i, o, a) {
  switch (r) {
    case c1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case s1:
      return !(e.byteLength != t.byteLength || !o(new Ks(e), new Ks(t)));
    case Z0:
    case Q0:
    case r1:
      return Ru(+e, +t);
    case e1:
      return e.name == t.name && e.message == t.message;
    case n1:
    case o1:
      return e == t + "";
    case t1:
      var s = K0;
    case i1:
      var c = n & Y0;
      if (s || (s = X0), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= J0, a.set(e, t);
      var d = Wu(s(e), s(t), n, i, o, a);
      return a.delete(e), d;
    case a1:
      if (ii)
        return ii.call(e) == ii.call(t);
  }
  return !1;
}
var u1 = 1, d1 = Object.prototype, f1 = d1.hasOwnProperty;
function h1(e, t, r, n, i, o) {
  var a = r & u1, s = qs(e), c = s.length, u = qs(t), d = u.length;
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
    var x = e[h], w = t[h];
    if (n)
      var A = a ? n(w, x, h, t, e, o) : n(x, w, h, e, t, o);
    if (!(A === void 0 ? x === w || i(x, w, r, n, o) : A)) {
      v = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (v && !g) {
    var E = e.constructor, C = t.constructor;
    E != C && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof C == "function" && C instanceof C) && (v = !1);
  }
  return o.delete(e), o.delete(t), v;
}
var p1 = 1, Ys = "[object Arguments]", Js = "[object Array]", _r = "[object Object]", m1 = Object.prototype, Zs = m1.hasOwnProperty;
function g1(e, t, r, n, i, o) {
  var a = Ke(e), s = Ke(t), c = a ? Js : xt(e), u = s ? Js : xt(t);
  c = c == Ys ? _r : c, u = u == Ys ? _r : u;
  var d = c == _r, f = u == _r, h = c == u;
  if (h && aa(e)) {
    if (!aa(t))
      return !1;
    a = !0, d = !1;
  }
  if (h && !d)
    return o || (o = new it()), a || ku(e) ? Wu(e, t, r, n, i, o) : l1(e, t, c, r, n, i, o);
  if (!(r & p1)) {
    var p = d && Zs.call(e, "__wrapped__"), m = f && Zs.call(t, "__wrapped__");
    if (p || m) {
      var v = p ? e.value() : e, g = m ? t.value() : t;
      return o || (o = new it()), i(v, g, r, n, o);
    }
  }
  return h ? (o || (o = new it()), h1(e, t, r, n, i, o)) : !1;
}
function ja(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !st(e) && !st(t) ? e !== e && t !== t : g1(e, t, r, n, ja, i);
}
var v1 = 1, x1 = 2;
function y1(e, t, r, n) {
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
      var d = new it(), f;
      if (!(f === void 0 ? ja(u, c, v1 | x1, n, d) : f))
        return !1;
    }
  }
  return !0;
}
function Gu(e) {
  return e === e && !wt(e);
}
function b1(e) {
  for (var t = Lu(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Gu(i)];
  }
  return t;
}
function Vu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function w1(e) {
  var t = b1(e);
  return t.length == 1 && t[0][2] ? Vu(t[0][0], t[0][1]) : function(r) {
    return r === e || y1(r, e, t);
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
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && La(i) && Eu(a, i) && (Ke(e) || Ma(e)));
}
function C1(e, t) {
  return e != null && A1(e, t, S1);
}
var T1 = 1, E1 = 2;
function R1(e, t) {
  return _a(e) && Gu(t) ? Vu(_n(e), t) : function(r) {
    var n = Xg(r, e);
    return n === void 0 && n === t ? C1(r, e) : ja(t, n, T1 | E1);
  };
}
function Ku(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function I1(e) {
  return function(t) {
    return $u(t, e);
  };
}
function O1(e) {
  return _a(e) ? Ku(_n(e)) : I1(e);
}
function P1(e) {
  return typeof e == "function" ? e : e == null ? ka : typeof e == "object" ? Ke(e) ? R1(e[0], e[1]) : w1(e) : O1(e);
}
var oi = function() {
  return Xe.Date.now();
}, N1 = "Expected a function", k1 = Math.max, L1 = Math.min;
function Dn(e, t, r) {
  var n, i, o, a, s, c, u = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(N1);
  t = qt(t) || 0, wt(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? k1(qt(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function p(k) {
    var M = n, L = i;
    return n = i = void 0, u = k, a = e.apply(L, M), a;
  }
  function m(k) {
    return u = k, s = setTimeout(x, t), d ? p(k) : a;
  }
  function v(k) {
    var M = k - c, L = k - u, N = t - M;
    return f ? L1(N, o - L) : N;
  }
  function g(k) {
    var M = k - c, L = k - u;
    return c === void 0 || M >= t || M < 0 || f && L >= o;
  }
  function x() {
    var k = oi();
    if (g(k))
      return w(k);
    s = setTimeout(x, v(k));
  }
  function w(k) {
    return s = void 0, h && n ? p(k) : (n = i = void 0, a);
  }
  function A() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : w(oi());
  }
  function C() {
    var k = oi(), M = g(k);
    if (n = arguments, i = this, c = k, M) {
      if (s === void 0)
        return m(c);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), p(c);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return C.cancel = A, C.flush = E, C;
}
function ai(e) {
  return st(e) && Iu(e);
}
var M1 = 200;
function $1(e, t, r, n) {
  var i = -1, o = Sm, a = !0, s = e.length, c = [], u = t.length;
  if (!s)
    return c;
  r && (t = Cu(t, $a(r))), t.length >= M1 && (o = Uu, a = !1, t = new gr(t));
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
function tn(e) {
  return typeof e == "number" || st(e) && At(e) == B1;
}
var j1 = "[object RegExp]";
function z1(e) {
  return st(e) && At(e) == j1;
}
var Qs = en && en.isRegExp, H1 = Qs ? $a(Qs) : z1, q1 = Ku("length"), Xu = "\\ud800-\\udfff", F1 = "\\u0300-\\u036f", U1 = "\\ufe20-\\ufe2f", W1 = "\\u20d0-\\u20ff", G1 = F1 + U1 + W1, V1 = "\\ufe0e\\ufe0f", K1 = "[" + Xu + "]", ha = "[" + G1 + "]", pa = "\\ud83c[\\udffb-\\udfff]", X1 = "(?:" + ha + "|" + pa + ")", Yu = "[^" + Xu + "]", Ju = "(?:\\ud83c[\\udde6-\\uddff]){2}", Zu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Y1 = "\\u200d", Qu = X1 + "?", ed = "[" + V1 + "]?", J1 = "(?:" + Y1 + "(?:" + [Yu, Ju, Zu].join("|") + ")" + ed + Qu + ")*", Z1 = ed + Qu + J1, Q1 = "(?:" + [Yu + ha + "?", ha, Ju, Zu, K1].join("|") + ")", ec = RegExp(pa + "(?=" + pa + ")|" + Q1 + Z1, "g");
function ev(e) {
  for (var t = ec.lastIndex = 0; ec.test(e); )
    ++t;
  return t;
}
function tv(e) {
  return Ba(e) ? ev(e) : q1(e);
}
var rv = "Expected a function";
function vr(e, t, r) {
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
    r = "length" in t ? Vp(t.length) : r, n = "omission" in t ? Qr(t.omission) : n;
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
  } else if (e.indexOf(Qr(i), s) != s) {
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
      return s[0] === "" && s.length !== 1 && s.shift(), td(s, t) || cv(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, td = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? td(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(za);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}, tc = /^\[(.+)\]$/, cv = (e) => {
  if (tc.test(e)) {
    const t = tc.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
      const o = i === "" ? t : rc(t, i);
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
      ma(a, rc(t, o), r, n);
    });
  });
}, rc = (e, t) => {
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
}, rd = "!", hv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], o = t.length, a = (s) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let g = 0; g < s.length; g++) {
      let x = s[g];
      if (u === 0) {
        if (x === i && (n || s.slice(g, g + o) === t)) {
          c.push(s.slice(d, g)), d = g + o;
          continue;
        }
        if (x === "/") {
          f = g;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const h = c.length === 0 ? s : s.substring(d), p = h.startsWith(rd), m = p ? h.substring(1) : h, v = f && f > d ? f - d : void 0;
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
    const g = pv(d).join(":"), x = f ? g + rd : g, w = x + v;
    if (o.includes(w))
      continue;
    o.push(w);
    const A = i(v, m);
    for (let E = 0; E < A.length; ++E) {
      const C = A[E];
      o.push(x + C);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function xv() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = nd(t)) && (n && (n += " "), n += r);
  return n;
}
const nd = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = nd(e[n])) && (r && (r += " "), r += t);
  return r;
};
function yv(e, ...t) {
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
    return o(xv.apply(null, arguments));
  };
}
const ce = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, id = /^\[(?:([a-z-]+):)?(.+)\]$/i, bv = /^\d+\/\d+$/, wv = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Av = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Tv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ev = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, et = (e) => Ft(e) || wv.has(e) || bv.test(e), mt = (e) => Gt(e, "length", Mv), Ft = (e) => !!e && !Number.isNaN(Number(e)), si = (e) => Gt(e, "number", Ft), Qt = (e) => !!e && Number.isInteger(Number(e)), Rv = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), V = (e) => id.test(e), gt = (e) => Sv.test(e), Iv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ov = (e) => Gt(e, Iv, od), Pv = (e) => Gt(e, "position", od), Nv = /* @__PURE__ */ new Set(["image", "url"]), kv = (e) => Gt(e, Nv, _v), Lv = (e) => Gt(e, "", $v), er = () => !0, Gt = (e, t, r) => {
  const n = id.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Mv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Av.test(e) && !Cv.test(e)
), od = () => !1, $v = (e) => Tv.test(e), _v = (e) => Ev.test(e), Dv = () => {
  const e = ce("colors"), t = ce("spacing"), r = ce("blur"), n = ce("brightness"), i = ce("borderColor"), o = ce("borderRadius"), a = ce("borderSpacing"), s = ce("borderWidth"), c = ce("contrast"), u = ce("grayscale"), d = ce("hueRotate"), f = ce("invert"), h = ce("gap"), p = ce("gradientColorStops"), m = ce("gradientColorStopPositions"), v = ce("inset"), g = ce("margin"), x = ce("opacity"), w = ce("padding"), A = ce("saturate"), E = ce("scale"), C = ce("sepia"), k = ce("skew"), M = ce("space"), L = ce("translate"), N = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", V, t], S = () => [V, t], P = () => ["", et, mt], D = () => ["auto", Ft, V], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], re = () => ["", "0", V], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [Ft, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [er],
      spacing: [et, mt],
      blur: ["none", "", gt, V],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gt, V],
      borderSpacing: S(),
      borderWidth: P(),
      contrast: me(),
      grayscale: re(),
      hueRotate: me(),
      invert: re(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Rv, mt],
      inset: T(),
      margin: T(),
      opacity: me(),
      padding: S(),
      saturate: me(),
      scale: me(),
      sepia: re(),
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
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
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
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
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
        z: ["auto", Qt, V]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        grow: re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Qt, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [er]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qt, V]
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
        "grid-rows": [er]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qt, V]
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
        justify: ["normal", ...ee()]
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
        content: ["normal", ...ee(), "baseline"]
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
        "place-content": [...ee(), "baseline"]
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
        "space-x": [M]
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
        "space-y": [M]
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
        font: [er]
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
        "line-clamp": ["none", Ft, si]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", et, V]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: ["auto", "from-font", et, mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", et, V]
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
        "bg-opacity": [x]
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
        "border-opacity": [x]
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
        "divide-opacity": [x]
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
        "outline-offset": [et, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [et, mt]
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [et, mt]
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
        shadow: ["", "inner", "none", gt, Lv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [er]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
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
        sepia: [C]
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
        "backdrop-opacity": [x]
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
        "backdrop-sepia": [C]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Qt, V]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
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
        stroke: [et, mt, si]
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
}, Bv = /* @__PURE__ */ yv(Dv);
function Q(...e) {
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
const F = nr.forwardRef(
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
    } = e, g = cd[r];
    return /* @__PURE__ */ R(jd, { children: [
      /* @__PURE__ */ l(zd, { asChild: !0, children: /* @__PURE__ */ R(
        h ? hu : Bd,
        {
          "data-state": d != null && d() ? "on" : "off",
          onClick: u,
          ref: t,
          size: "sm",
          className: Q("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: i,
          ...v,
          children: [
            g && /* @__PURE__ */ l(g, { className: "richtext-size-4" }),
            f
          ]
        }
      ) }),
      n && /* @__PURE__ */ l(ns, { ...c, children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
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
      tooltip: Ee.t(`editor.${n.replace("-", ".")}.tooltip`),
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
      tooltip: Ee.t(`editor.${n.replace("-", ".")}.tooltip`),
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
      tooltip: Ee.t(`editor.textalign.${n}.tooltip`),
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
      tooltip: Ee.t(`editor.textalign.${n}.tooltip`),
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
      tooltip: Ee.t(`editor.textalign.${n}.tooltip`),
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
      tooltip: Ee.t(`editor.textalign.${n}.tooltip`),
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
      tooltip: Ee.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[i],
      action: () => e.commands.updateVideo({ width: ra[n] }),
      isActive: () => e.isActive("video", { width: ra[n] })
    }
  }));
}
function Xv(e) {
  return [
    {
      type: "flipX",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.tooltip.flipX"),
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
        tooltip: Ee.t("editor.tooltip.flipY"),
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
        tooltip: Ee.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function Yv(e) {
  return [
    ...qv(e),
    ...Uv(e),
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function yw(e) {
  return [
    ...Wv(e),
    {
      type: "edit",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
        }
      }
    }
  ];
}
function bw(e) {
  return [
    ...Gv(e),
    {
      type: "edit",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: F,
      componentProps: {
        editor: e,
        tooltip: Ee.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
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
        tooltip: Ee.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: r } = e.view;
          Cr(t, r);
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
    $r(this, "anchor");
    $r(this, "head");
    this.anchor = t, this.head = r;
  }
  map(t) {
    return new qa(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const r = t.resolve(this.anchor), n = t.resolve(this.head);
    return new We(r, n);
  }
}
class We extends ap {
  constructor(r, n, i, o = 1) {
    const { doc: a } = r, s = r === n, c = r.pos === a.content.size && n.pos === a.content.size, u = s && !c ? a.resolve(n.pos + (o > 0 ? 1 : -1)) : n, d = s && c ? a.resolve(r.pos - (o > 0 ? 1 : -1)) : r, f = Ha(d.min(u), d.max(u), i);
    super(
      u.pos >= r.pos ? f[0].$from : f[f.length - 1].$to,
      u.pos >= r.pos ? f[f.length - 1].$to : f[0].$from,
      f
    );
    $r(this, "depth");
    this.depth = i;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(r) {
    return r instanceof We && r.$from.pos === this.$from.pos && r.$to.pos === this.$to.pos;
  }
  map(r, n) {
    const i = r.resolve(n.map(this.anchor)), o = r.resolve(n.map(this.head));
    return new We(i, o);
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
      return new We(a, s, this.depth);
    }
    const n = this.ranges[0], i = r.resolve(Math.max(0, n.$from.pos - 1));
    return new We(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: r } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), a = o[0].$from, s = o[o.length - 1].$to;
      return new We(s, a, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], i = r.resolve(Math.min(r.content.size, n.$to.pos + 1));
    return new We(this.$anchor, i, this.depth);
  }
  static fromJSON(r, n) {
    return new We(r.resolve(n.anchor), r.resolve(n.head));
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
    n[o].style.cssText = (function(a) {
      let s = "";
      const c = getComputedStyle(a);
      for (let u = 0; u < c.length; u += 1)
        s += `${c[u]}:${c.getPropertyValue(c[u])};`;
      return s;
    })(i);
  }), t;
}
function Dr(e, t) {
  return window.getComputedStyle(e)[t];
}
function ex(e = 0, t = 0, r = 0) {
  return Math.min(Math.max(e, t), r);
}
function nc(e) {
  e.parentNode !== null && e.parentNode !== void 0 && e.parentNode.removeChild(e);
}
function ad(e) {
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
function tx(e, t) {
  const { doc: r } = t.view.state, n = ad({ editor: t, x: e.clientX, y: e.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const i = e.clientX, o = (function(d, f, h) {
    const p = Number.parseInt(Dr(d.dom, "paddingLeft"), 10), m = Number.parseInt(Dr(d.dom, "paddingRight"), 10), v = Number.parseInt(Dr(d.dom, "borderLeftWidth"), 10), g = Number.parseInt(Dr(d.dom, "borderLeftWidth"), 10), x = d.dom.getBoundingClientRect();
    return {
      left: ex(
        f,
        x.left + p + v,
        x.right - m - g
      ),
      top: h
    };
  })(t.view, i, e.clientY), a = t.view.posAtCoords(o);
  if (!a) return [];
  const { pos: s } = a;
  if (!r.resolve(s).parent) return [];
  const c = r.resolve(n.pos), u = r.resolve(n.pos + 1);
  return Ha(c, u, 0);
}
function ic(e, t) {
  const r = e.resolve(t), { depth: n } = r;
  return n === 0 ? t : r.pos - r.parentOffset - 1;
}
function oc(e, t) {
  const r = e.nodeAt(t), n = e.resolve(t);
  let { depth: i } = n, o = r;
  for (; i > 0; ) {
    const a = n.node(i);
    i -= 1, i === 0 && (o = a);
  }
  return o;
}
function ac(e, t) {
  let r = t;
  for (; r && r.parentNode && r.parentNode !== e.dom; ) r = r.parentNode;
  return r;
}
const sd = new Ot("dragHandle");
function rx({
  pluginKey: e = sd,
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
    const { empty: h, $from: p, $to: m } = f.state.selection, v = tx(d, r), g = Ha(p, m, 0), x = g.some((N) => v.find((_) => _.$from === N.$from && _.$to === N.$to)), w = h || !x ? v : g;
    if (w.length === 0) return;
    const { tr: A } = f.state, E = document.createElement("div"), C = w[0].$from.pos, k = w[w.length - 1].$to.pos, M = We.create(f.state.doc, C, k), L = M.content();
    w.forEach((N) => {
      const _ = Qv(f.nodeDOM(N.$from.pos));
      E.append(_);
    }), E.style.position = "absolute", E.style.top = "-10000px", document.body.append(E), d.dataTransfer.clearData(), d.dataTransfer.setDragImage(E, 0, 0), f.dragging = { slice: L, move: !0 }, A.setSelection(M), f.dispatch(A), document.addEventListener("drop", () => nc(E), { once: !0 }), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }), t.addEventListener("dragend", () => {
    t && (t.style.pointerEvents = "auto");
  }), new Pt({
    key: typeof e == "string" ? new Ot(e) : e,
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
        update(E, C) {
          if (!m(t, a) || (t.draggable = !s, !v(E, C)))
            return;
          const k = g(E);
          k && x(E, k);
        },
        destroy() {
          A();
        }
      };
      function f() {
        t.draggable = !0, t.style.pointerEvents = "auto";
      }
      function h(E) {
        var C;
        (C = E.parentElement) == null || C.appendChild(o), o.appendChild(t), Object.assign(o.style, {
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
      function m(E, C) {
        return E && C;
      }
      function v(E, C) {
        return !E.state.doc.eq(C.doc) && u !== -1;
      }
      function g(E) {
        let C = E.nodeDOM(u);
        return C = ac(E, C), C === E.dom || (C == null ? void 0 : C.nodeType) !== 1 ? null : C;
      }
      function x(E, C) {
        const k = E.posAtDOM(C, 0), M = oc(r.state.doc, k);
        if (M === c)
          return;
        const L = ic(r.state.doc, k);
        c = M, u = L, i == null || i({
          editor: r,
          node: c,
          pos: u
        }), w(C);
      }
      function w(E) {
        a.setProps({
          getReferenceClientRect: () => E.getBoundingClientRect()
        }), a.show();
      }
      function A() {
        a == null || a.destroy(), t && nc(o);
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
          const h = ad({
            x: f.clientX,
            y: f.clientY,
            direction: "right",
            editor: r
          });
          if (!h.resultElement || h.resultElement === d.dom)
            return !1;
          const p = ac(d, h.resultElement);
          if (p === d.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return !1;
          const m = d.posAtDOM(p, 0), v = oc(r.state.doc, m);
          if (v === c)
            return !1;
          const g = ic(r.state.doc, m);
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
function nx(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
function ix(e, t, r, n) {
  const { doc: i, selection: o } = e;
  if (!i || !o || !(o instanceof Wt || o instanceof sp))
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
  const a = nx((n.attrs.indent || 0) + r, 0, 7);
  if (a === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: a
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function ww({ delta: e, types: t }) {
  return ({ state: r, dispatch: n, editor: i }) => {
    const { selection: o } = r;
    let { tr: a } = r;
    return a = a.setSelection(o), a = ix(a, e, t, i), a.docChanged ? (n && n(a), !0) : !1;
  };
}
function ox(e) {
  var L, N, _;
  const { pluginKey: t = sd } = e, { t: r } = Se(), [n, i] = J(null), [o, a] = J(-1), s = He(null), c = He(null), [u, d] = J(!1), f = e.editor.extensionManager.extensions.some((T) => T.name === "textAlign"), h = e.editor.extensionManager.extensions.some((T) => T.name === "indent"), p = e.editor.extensionManager.extensions.some((T) => T.name === "clear");
  ge(() => {
    s.current && !e.editor.isDestroyed && (c.current = rx({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: C
    }), e.editor.registerPlugin(c.current));
  }, [e.editor, s]);
  function m() {
    const T = e.editor.chain();
    T.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && T.setParagraph(), T.run();
  }
  function v() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function g() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: T } = e.editor.state.selection, S = T.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), S.toJSON()).run();
  }
  function x(T) {
    e.editor.commands.setTextAlign(T);
  }
  function w() {
    const T = va(e.editor.state.tr, o, 1);
    T.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(T);
  }
  function A() {
    const T = va(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(T);
  }
  function E() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function C(T) {
    T.node && i(T.node), a(T.pos);
  }
  function k() {
    var T;
    if (o !== -1) {
      const S = (n == null ? void 0 : n.nodeSize) || 0, P = o + S, D = (n == null ? void 0 : n.type.name) === "paragraph" && ((T = n == null ? void 0 : n.content) == null ? void 0 : T.size) === 0, H = D ? o + 2 : P + 2;
      e.editor.chain().command(({ dispatch: j, tr: W, state: ee }) => j ? (D ? W.insertText("/", o, o + 1) : W.insert(
        P,
        ee.schema.nodes.paragraph.create(null, [ee.schema.text("/")])
      ), j(W)) : !0).focus(H).run();
    }
  }
  ge(() => (u ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [u]), ge(() => () => {
    c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, []), ge(() => {
    var T;
    (T = e.editor) != null && T.isDestroyed && c.current && (e.editor.unregisterPlugin(t), c.current = null);
  }, [(L = e.editor) == null ? void 0 : L.isDestroyed]);
  const M = (T) => {
    e != null && e.disabled || d(T);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        !e.hidePlusIcon && /* @__PURE__ */ l(
          Te,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: k,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ l(
              xe,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ R(
          Zy,
          {
            onOpenChange: M,
            open: u,
            children: [
              /* @__PURE__ */ R("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ R(jd, { children: [
                  /* @__PURE__ */ l(
                    zd,
                    {
                      asChild: !0,
                      disabled: e == null ? void 0 : e.disabled,
                      children: /* @__PURE__ */ l(
                        Te,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: e == null ? void 0 : e.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (T) => {
                            T.preventDefault(), !(e != null && e.disabled) && d(!0);
                          },
                          children: /* @__PURE__ */ l(
                            xe,
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
                /* @__PURE__ */ l(Qy, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ R(
                Od,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ R(
                      qe,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: E,
                        children: [
                          /* @__PURE__ */ l(xe, { name: "Trash2" }),
                          /* @__PURE__ */ l("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    p ? /* @__PURE__ */ R(
                      qe,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: m,
                        children: [
                          /* @__PURE__ */ l(xe, { name: "PaintRoller" }),
                          /* @__PURE__ */ l("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ R(
                      qe,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: v,
                        children: [
                          /* @__PURE__ */ l(xe, { name: "Clipboard" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ R(
                      qe,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: g,
                        children: [
                          /* @__PURE__ */ l(xe, { name: "Copy" }),
                          /* @__PURE__ */ l("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    f || h ? /* @__PURE__ */ l(Pd, {}) : null,
                    f ? /* @__PURE__ */ R(xc, { children: [
                      /* @__PURE__ */ R(Ea, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(xe, { name: "AlignCenter" }),
                        /* @__PURE__ */ l("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ l(vc, { children: /* @__PURE__ */ R(Ra, { children: [
                        /* @__PURE__ */ R(
                          qe,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("left"),
                            children: [
                              /* @__PURE__ */ l(xe, { name: "AlignLeft" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ R(
                          qe,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("center"),
                            children: [
                              /* @__PURE__ */ l(xe, { name: "AlignCenter" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ R(
                          qe,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => x("right"),
                            children: [
                              /* @__PURE__ */ l(xe, { name: "AlignRight" }),
                              /* @__PURE__ */ l("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    h ? /* @__PURE__ */ R(xc, { children: [
                      /* @__PURE__ */ R(Ea, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ l(xe, { name: "IndentIncrease" }),
                        /* @__PURE__ */ l("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ l(vc, { children: /* @__PURE__ */ R(Ra, { children: [
                        /* @__PURE__ */ R(
                          qe,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((N = n == null ? void 0 : n.attrs) == null ? void 0 : N.indent) >= ga.max,
                            onClick: w,
                            children: [
                              /* @__PURE__ */ l(xe, { name: "IndentIncrease" }),
                              /* @__PURE__ */ l("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ R(
                          qe,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((_ = n == null ? void 0 : n.attrs) == null ? void 0 : _.indent) <= ga.min,
                            onClick: A,
                            children: [
                              /* @__PURE__ */ l(xe, { name: "IndentDecrease" }),
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
const ax = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function sx({ item: e, disabled: t, editor: r }) {
  var i;
  const n = e.component;
  return n ? /* @__PURE__ */ l(
    n,
    {
      ...e.componentProps,
      disabled: t || ((i = e == null ? void 0 : e.componentProps) == null ? void 0 : i.disabled),
      editor: r
    }
  ) : /* @__PURE__ */ l(pe, {});
}
function cx(e) {
  const { t, lang: r } = Se(), n = ({ editor: o }) => {
    const { selection: a } = o.view.state, { $from: s, to: c } = a;
    return s.pos === c ? !1 : a instanceof Wt;
  }, i = we(() => e.disabled || !(e != null && e.editor) ? [] : Zv(e.editor, t), [e.disabled, e.editor, r, t]);
  return /* @__PURE__ */ l(
    St,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ax,
      children: i != null && i.length ? /* @__PURE__ */ l("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: i == null ? void 0 : i.map((o, a) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ l(
        Ge,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ l(
        sx,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: o
        },
        `bubbleMenu-text-${a}`
      )) }) }) : /* @__PURE__ */ l(pe, {})
    }
  );
}
function lx(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function ux(e) {
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
function dx() {
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
function fx() {
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
function hx(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function xe(e) {
  const t = cd[e.name];
  return t ? /* @__PURE__ */ l(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function px(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function mx(e) {
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
function gx(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function vx(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function xx(e) {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function yx() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
function bx() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function wx() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function Sx() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function Ax() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function Cx() {
  return /* @__PURE__ */ R("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function Tx() {
  return /* @__PURE__ */ R(
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
function Ex() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ R("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ l("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ l("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function Rx() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function Ix() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ R("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ l("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ l("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ l("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function Ox() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function Px() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function Nx() {
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
const cd = {
  Bold: Jh,
  LoaderCircle: Yh,
  Italic: Xh,
  Underline: Kh,
  Quote: Vh,
  TextQuote: ux,
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
  IndentIncrease: Mh,
  IndentDecrease: Lh,
  List: kh,
  ListOrdered: Nh,
  ListTodo: Ph,
  Link: Oh,
  ImageUp: Ih,
  Video: Rh,
  Maximize: Eh,
  Minimize: Th,
  Table: Ch,
  Sparkles: Ah,
  Pencil: Sh,
  Unlink: wh,
  BetweenHorizonalEnd: bh,
  BetweenHorizonalStart: yh,
  BetweenVerticalStart: xh,
  BetweenVerticalEnd: vh,
  TableCellsMerge: gh,
  TableCellsSplit: mh,
  Trash2: ph,
  Trash: hh,
  Replace: Es,
  ChevronsUpDown: fh,
  LineHeight: px,
  Word: hx,
  Heading1: dh,
  Heading2: uh,
  Heading3: lh,
  Heading4: ch,
  Heading5: sh,
  Heading6: ah,
  Columns2: Rs,
  Columns3: oh,
  Columns4: ih,
  Plus: gu,
  Grip: nh,
  Copy: rh,
  Clipboard: th,
  PanelLeft: eh,
  PanelRight: Qf,
  Columns: Rs,
  Iframe: Zf,
  MenuDown: mx,
  SizeS: xx,
  SizeM: vx,
  SizeL: gx,
  AspectRatio: lx,
  Emoji: Jf,
  DeleteColumn: dx,
  DeleteRow: fx,
  SearchAndReplace: Es,
  EmojiIcon: Yf,
  KatexIcon: Xf,
  ExportPdf: Cx,
  ExportWord: Tx,
  ImportWord: Nx,
  ColumnAddLeft: bx,
  ColumnAddRight: wx,
  BookMarked: Kf,
  Excalidraw: Ax,
  ZoomIn: Vf,
  ZoomOut: Gf,
  Settings: Wf,
  Eye: Uf,
  TextDirection: Sx,
  LeftToRight: Rx,
  RightToLeft: Ox,
  Attachment: Ff,
  GifIcon: Ex,
  ChevronUp: qf,
  Crop: Hf,
  Mermaid: Ix,
  Twitter: Px,
  CodeView: yx,
  FlipX: zf,
  FlipY: jf,
  PencilRuler: Bf,
  WrapText: Df,
  Loader: _f
};
function kx({ fill: e }) {
  return /* @__PURE__ */ l(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ l("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ R("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ l("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ R(
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
            fill: e || "none"
          }
        )
      ] }) })
    }
  );
}
function Lx(e) {
  const [t, r] = J(e == null ? void 0 : e.defaultColor);
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
  return /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ l(
      F,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: i,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ l("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ l(kx, { fill: t }) })
      }
    ),
    /* @__PURE__ */ l(
      G2,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(Te, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ l(xe, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function Mx({ editor: e, disabled: t, actions: r, hiddenActions: n = [] }) {
  var w, A, E, C, k, M, L, N, _, T, S, P, D, H, j, W, ee, re;
  const i = ({ editor: fe }) => lp(fe.view.state, "table"), { t: o } = Se(), a = (fe) => n.includes(fe);
  function s() {
    e.chain().focus().addColumnBefore().run();
  }
  function c() {
    e.chain().focus().addColumnAfter().run();
  }
  function u() {
    e.chain().focus().deleteColumn().run();
  }
  function d() {
    e.chain().focus().addRowBefore().run();
  }
  function f() {
    e.chain().focus().addRowAfter().run();
  }
  function h() {
    e.chain().focus().deleteRow().run();
  }
  function p() {
    e.chain().focus().mergeCells().run();
  }
  function m() {
    e == null || e.chain().focus().splitCell().run();
  }
  function v() {
    e.chain().focus().deleteTable().run();
  }
  function g(fe) {
    e.chain().focus().setTableCellBackground(fe).run();
  }
  return /* @__PURE__ */ l(
    St,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: i,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var $;
          const {
            view: fe,
            state: {
              selection: { from: me }
            }
          } = e, Ae = fe.domAtPos(me).node;
          if (!Ae)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const Be = ($ = Ae == null ? void 0 : Ae.closest) == null ? void 0 : $.call(Ae, ".tableWrapper");
          return Be ? Be.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Tp],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ l(pe, {}) : /* @__PURE__ */ R("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        !a("addColumnBefore") && /* @__PURE__ */ l(
          F,
          {
            action: s,
            disabled: !((A = (w = e == null ? void 0 : e.can()) == null ? void 0 : w.addColumnBefore) != null && A.call(w)),
            icon: "BetweenHorizonalEnd",
            tooltip: o("editor.table.menu.insertColumnBefore"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("addColumnAfter") && /* @__PURE__ */ l(
          F,
          {
            action: c,
            disabled: !((C = (E = e == null ? void 0 : e.can()) == null ? void 0 : E.addColumnAfter) != null && C.call(E)),
            icon: "BetweenHorizonalStart",
            tooltip: o("editor.table.menu.insertColumnAfter"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("deleteColumn") && /* @__PURE__ */ l(
          F,
          {
            action: u,
            disabled: !((M = e == null ? void 0 : (k = e.can()).deleteColumn) != null && M.call(k)),
            icon: "DeleteColumn",
            tooltip: o("editor.table.menu.deleteColumn"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ l(Ge, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("addRowAbove") && /* @__PURE__ */ l(
          F,
          {
            action: d,
            disabled: !((N = e == null ? void 0 : (L = e.can()).addRowBefore) != null && N.call(L)),
            icon: "BetweenVerticalEnd",
            tooltip: o("editor.table.menu.insertRowAbove"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("addRowBelow") && /* @__PURE__ */ l(
          F,
          {
            action: f,
            disabled: !((T = (_ = e == null ? void 0 : e.can()) == null ? void 0 : _.addRowAfter) != null && T.call(_)),
            icon: "BetweenVerticalStart",
            tooltip: o("editor.table.menu.insertRowBelow"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("deleteRow") && /* @__PURE__ */ l(
          F,
          {
            action: h,
            disabled: !((P = (S = e == null ? void 0 : e.can()) == null ? void 0 : S.deleteRow) != null && P.call(S)),
            icon: "DeleteRow",
            tooltip: o("editor.table.menu.deleteRow"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ l(Ge, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("mergeCells") && /* @__PURE__ */ l(
          F,
          {
            action: p,
            disabled: !((H = (D = e == null ? void 0 : e.can()) == null ? void 0 : D.mergeCells) != null && H.call(D)),
            icon: "TableCellsMerge",
            tooltip: o("editor.table.menu.mergeCells"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        !a("splitCells") && /* @__PURE__ */ l(
          F,
          {
            action: m,
            disabled: !((W = (j = e == null ? void 0 : e.can()) == null ? void 0 : j.splitCell) != null && W.call(j)),
            icon: "TableCellsSplit",
            tooltip: o("editor.table.menu.splitCells"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ l(Ge, { className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]", orientation: "vertical" }),
        !a("setCellBackground") && /* @__PURE__ */ l(
          Lx,
          {
            action: g,
            editor: e,
            tooltip: o("editor.table.menu.setCellsBgColor"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !a("deleteTable") && /* @__PURE__ */ l(
          F,
          {
            action: v,
            disabled: !((re = (ee = e == null ? void 0 : e.can()) == null ? void 0 : ee.deleteTable) != null && re.call(ee)),
            icon: "Trash2",
            tooltip: o("editor.table.menu.deleteTable"),
            "tooltip-options": { sideOffset: 15 }
          }
        ),
        r && r.map((fe, me) => /* @__PURE__ */ l(
          F,
          {
            ...fe
          },
          me
        ))
      ] })
    }
  );
}
const $x = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _x = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", xa = "numeric", ya = "ascii", ba = "alpha", ar = "asciinumeric", ir = "alphanumeric", wa = "domain", ld = "emoji", Dx = "scheme", Bx = "slashscheme", ui = "whitespace";
function jx(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Et(e, t, r) {
  t[xa] && (t[ar] = !0, t[ir] = !0), t[ya] && (t[ar] = !0, t[ba] = !0), t[ar] && (t[ir] = !0), t[ba] && (t[ir] = !0), t[ir] && (t[wa] = !0), t[ld] && (t[wa] = !0);
  for (const n in t) {
    const i = jx(n, r);
    i.indexOf(e) < 0 && i.push(e);
  }
}
function zx(e, t) {
  const r = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (r[n] = !0);
  return r;
}
function Pe(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Pe.groups = {};
Pe.prototype = {
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
    n = n || Pe.groups;
    let i;
    return t && t.j ? i = t : (i = new Pe(t), r && n && Et(t, r, n)), this.jr.push([e, i]), i;
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
    n = n || Pe.groups;
    const i = this;
    if (t && t.j)
      return i.j[e] = t, t;
    const o = t;
    let a, s = i.go(e);
    if (s ? (a = new Pe(), Object.assign(a.j, s.j), a.jr.push.apply(a.jr, s.jr), a.jd = s.jd, a.t = s.t) : a = new Pe(), o) {
      if (n)
        if (a.t && typeof a.t == "string") {
          const c = Object.assign(zx(a.t, n), r);
          Et(o, c, n);
        } else r && Et(o, r, n);
      a.t = o;
    }
    return i.j[e] = a, a;
  }
};
const X = (e, t, r, n, i) => e.ta(t, r, n, i), he = (e, t, r, n, i) => e.tr(t, r, n, i), sc = (e, t, r, n, i) => e.ts(t, r, n, i), O = (e, t, r, n, i) => e.tt(t, r, n, i), nt = "WORD", Sa = "UWORD", ud = "ASCIINUMERICAL", dd = "ALPHANUMERICAL", xr = "LOCALHOST", Aa = "TLD", Ca = "UTLD", Gr = "SCHEME", zt = "SLASH_SCHEME", Fa = "NUM", Ta = "WS", Ua = "NL", sr = "OPENBRACE", cr = "CLOSEBRACE", rn = "OPENBRACKET", nn = "CLOSEBRACKET", on = "OPENPAREN", an = "CLOSEPAREN", sn = "OPENANGLEBRACKET", cn = "CLOSEANGLEBRACKET", ln = "FULLWIDTHLEFTPAREN", un = "FULLWIDTHRIGHTPAREN", dn = "LEFTCORNERBRACKET", fn = "RIGHTCORNERBRACKET", hn = "LEFTWHITECORNERBRACKET", pn = "RIGHTWHITECORNERBRACKET", mn = "FULLWIDTHLESSTHAN", gn = "FULLWIDTHGREATERTHAN", vn = "AMPERSAND", xn = "APOSTROPHE", yn = "ASTERISK", yt = "AT", bn = "BACKSLASH", wn = "BACKTICK", Sn = "CARET", bt = "COLON", Wa = "COMMA", An = "DOLLAR", Fe = "DOT", Cn = "EQUALS", Ga = "EXCLAMATION", $e = "HYPHEN", lr = "PERCENT", Tn = "PIPE", En = "PLUS", Rn = "POUND", ur = "QUERY", Va = "QUOTE", fd = "FULLWIDTHMIDDLEDOT", Ka = "SEMI", Ue = "SLASH", dr = "TILDE", In = "UNDERSCORE", hd = "EMOJI", On = "SYM";
var pd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: dd,
  AMPERSAND: vn,
  APOSTROPHE: xn,
  ASCIINUMERICAL: ud,
  ASTERISK: yn,
  AT: yt,
  BACKSLASH: bn,
  BACKTICK: wn,
  CARET: Sn,
  CLOSEANGLEBRACKET: cn,
  CLOSEBRACE: cr,
  CLOSEBRACKET: nn,
  CLOSEPAREN: an,
  COLON: bt,
  COMMA: Wa,
  DOLLAR: An,
  DOT: Fe,
  EMOJI: hd,
  EQUALS: Cn,
  EXCLAMATION: Ga,
  FULLWIDTHGREATERTHAN: gn,
  FULLWIDTHLEFTPAREN: ln,
  FULLWIDTHLESSTHAN: mn,
  FULLWIDTHMIDDLEDOT: fd,
  FULLWIDTHRIGHTPAREN: un,
  HYPHEN: $e,
  LEFTCORNERBRACKET: dn,
  LEFTWHITECORNERBRACKET: hn,
  LOCALHOST: xr,
  NL: Ua,
  NUM: Fa,
  OPENANGLEBRACKET: sn,
  OPENBRACE: sr,
  OPENBRACKET: rn,
  OPENPAREN: on,
  PERCENT: lr,
  PIPE: Tn,
  PLUS: En,
  POUND: Rn,
  QUERY: ur,
  QUOTE: Va,
  RIGHTCORNERBRACKET: fn,
  RIGHTWHITECORNERBRACKET: pn,
  SCHEME: Gr,
  SEMI: Ka,
  SLASH: Ue,
  SLASH_SCHEME: zt,
  SYM: On,
  TILDE: dr,
  TLD: Aa,
  UNDERSCORE: In,
  UTLD: Ca,
  UWORD: Sa,
  WORD: nt,
  WS: Ta
});
const tt = /[a-z]/, tr = new RegExp("\\p{L}", "u"), di = new RegExp("\\p{Emoji}", "u"), rt = /\d/, fi = /\s/, cc = "\r", hi = `
`, Hx = "️", qx = "‍", pi = "￼";
let Br = null, jr = null;
function Fx(e = []) {
  const t = {};
  Pe.groups = t;
  const r = new Pe();
  Br == null && (Br = lc($x)), jr == null && (jr = lc(_x)), O(r, "'", xn), O(r, "{", sr), O(r, "}", cr), O(r, "[", rn), O(r, "]", nn), O(r, "(", on), O(r, ")", an), O(r, "<", sn), O(r, ">", cn), O(r, "（", ln), O(r, "）", un), O(r, "「", dn), O(r, "」", fn), O(r, "『", hn), O(r, "』", pn), O(r, "＜", mn), O(r, "＞", gn), O(r, "&", vn), O(r, "*", yn), O(r, "@", yt), O(r, "`", wn), O(r, "^", Sn), O(r, ":", bt), O(r, ",", Wa), O(r, "$", An), O(r, ".", Fe), O(r, "=", Cn), O(r, "!", Ga), O(r, "-", $e), O(r, "%", lr), O(r, "|", Tn), O(r, "+", En), O(r, "#", Rn), O(r, "?", ur), O(r, '"', Va), O(r, "/", Ue), O(r, ";", Ka), O(r, "~", dr), O(r, "_", In), O(r, "\\", bn), O(r, "・", fd);
  const n = he(r, rt, Fa, {
    [xa]: !0
  });
  he(n, rt, n);
  const i = he(n, tt, ud, {
    [ar]: !0
  }), o = he(n, tr, dd, {
    [ir]: !0
  }), a = he(r, tt, nt, {
    [ya]: !0
  });
  he(a, rt, i), he(a, tt, a), he(i, rt, i), he(i, tt, i);
  const s = he(r, tr, Sa, {
    [ba]: !0
  });
  he(s, tt), he(s, rt, o), he(s, tr, s), he(o, rt, o), he(o, tt), he(o, tr, o);
  const c = O(r, hi, Ua, {
    [ui]: !0
  }), u = O(r, cc, Ta, {
    [ui]: !0
  }), d = he(r, fi, Ta, {
    [ui]: !0
  });
  O(r, pi, d), O(u, hi, c), O(u, pi, d), he(u, fi, d), O(d, cc), O(d, hi), he(d, fi, d), O(d, pi, d);
  const f = he(r, di, hd, {
    [ld]: !0
  });
  O(f, "#"), he(f, di, f), O(f, Hx, f);
  const h = O(f, qx);
  O(h, "#"), he(h, di, f);
  const p = [[tt, a], [rt, i]], m = [[tt, null], [tr, s], [rt, o]];
  for (let v = 0; v < Br.length; v++)
    vt(r, Br[v], Aa, nt, p);
  for (let v = 0; v < jr.length; v++)
    vt(r, jr[v], Ca, Sa, m);
  Et(Aa, {
    tld: !0,
    ascii: !0
  }, t), Et(Ca, {
    utld: !0,
    alpha: !0
  }, t), vt(r, "file", Gr, nt, p), vt(r, "mailto", Gr, nt, p), vt(r, "http", zt, nt, p), vt(r, "https", zt, nt, p), vt(r, "ftp", zt, nt, p), vt(r, "ftps", zt, nt, p), Et(Gr, {
    scheme: !0,
    ascii: !0
  }, t), Et(zt, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((v, g) => v[0] > g[0] ? 1 : -1);
  for (let v = 0; v < e.length; v++) {
    const g = e[v][0], w = e[v][1] ? {
      [Dx]: !0
    } : {
      [Bx]: !0
    };
    g.indexOf("-") >= 0 ? w[wa] = !0 : tt.test(g) ? rt.test(g) ? w[ar] = !0 : w[ya] = !0 : w[xa] = !0, sc(r, g, g, w);
  }
  return sc(r, "localhost", xr, {
    ascii: !0
  }), r.jd = new Pe(On), {
    start: r,
    tokens: Object.assign({
      groups: t
    }, pd)
  };
}
function md(e, t) {
  const r = Ux(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), n = r.length, i = [];
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
function Ux(e) {
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
    e.j[c] ? o = e.j[c] : (o = new Pe(n), o.jr = i.slice(), e.j[c] = o), e = o;
  }
  return o = new Pe(r), o.jr = i.slice(), e.j[t[a - 1]] = o, o;
}
function lc(e) {
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
const yr = {
  defaultProtocol: "http",
  events: null,
  format: uc,
  formatHref: uc,
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
  let r = Object.assign({}, yr);
  e && (r = Object.assign(r, e instanceof Xa ? e.o : e));
  const n = r.ignoreTags, i = [];
  for (let o = 0; o < n.length; o++)
    i.push(n[o].toUpperCase());
  this.o = r, t && (this.defaultRender = t), this.ignoreTags = i;
}
Xa.prototype = {
  o: yr,
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
    return i && (typeof i == "object" ? (i = r.t in i ? i[r.t] : yr[e], typeof i == "function" && n && (i = i(t, r))) : typeof i == "function" && n && (i = i(t, r.t, r)), i);
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
function uc(e) {
  return e;
}
function gd(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
gd.prototype = {
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
  toObject(e = yr.defaultProtocol) {
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
    return a.href = n, s && (a.class = s), c && (a.target = c), u && (a.rel = u), d && Object.assign(a, d), {
      tagName: i,
      attributes: a,
      content: o,
      eventListeners: f
    };
  }
};
function Bn(e, t) {
  class r extends gd {
    constructor(i, o) {
      super(i, o), this.t = e;
    }
  }
  for (const n in t)
    r.prototype[n] = t[n];
  return r.t = e, r;
}
const dc = Bn("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), fc = Bn("text"), Wx = Bn("nl"), zr = Bn("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = yr.defaultProtocol) {
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
}), Me = (e) => new Pe(e);
function Gx({
  groups: e
}) {
  const t = e.domain.concat([vn, yn, yt, bn, wn, Sn, An, Cn, $e, Fa, lr, Tn, En, Rn, Ue, On, dr, In]), r = [xn, bt, Wa, Fe, Ga, lr, ur, Va, Ka, sn, cn, sr, cr, nn, rn, on, an, ln, un, dn, fn, hn, pn, mn, gn], n = [vn, xn, yn, bn, wn, Sn, An, Cn, $e, sr, cr, lr, Tn, En, Rn, ur, Ue, On, dr, In], i = Me(), o = O(i, dr);
  X(o, n, o), X(o, e.domain, o);
  const a = Me(), s = Me(), c = Me();
  X(i, e.domain, a), X(i, e.scheme, s), X(i, e.slashscheme, c), X(a, n, o), X(a, e.domain, a);
  const u = O(a, yt);
  O(o, yt, u), O(s, yt, u), O(c, yt, u);
  const d = O(o, Fe);
  X(d, n, o), X(d, e.domain, o);
  const f = Me();
  X(u, e.domain, f), X(f, e.domain, f);
  const h = O(f, Fe);
  X(h, e.domain, f);
  const p = Me(dc);
  X(h, e.tld, p), X(h, e.utld, p), O(u, xr, p);
  const m = O(f, $e);
  O(m, $e, m), X(m, e.domain, f), X(p, e.domain, f), O(p, Fe, h), O(p, $e, m);
  const v = O(p, bt);
  X(v, e.numeric, dc);
  const g = O(a, $e), x = O(a, Fe);
  O(g, $e, g), X(g, e.domain, a), X(x, n, o), X(x, e.domain, a);
  const w = Me(zr);
  X(x, e.tld, w), X(x, e.utld, w), X(w, e.domain, a), X(w, n, o), O(w, Fe, x), O(w, $e, g), O(w, yt, u);
  const A = O(w, bt), E = Me(zr);
  X(A, e.numeric, E);
  const C = Me(zr), k = Me();
  X(C, t, C), X(C, r, k), X(k, t, C), X(k, r, k), O(w, Ue, C), O(E, Ue, C);
  const M = O(s, bt), L = O(c, bt), N = O(L, Ue), _ = O(N, Ue);
  X(s, e.domain, a), O(s, Fe, x), O(s, $e, g), X(c, e.domain, a), O(c, Fe, x), O(c, $e, g), X(M, e.domain, C), O(M, Ue, C), O(M, ur, C), X(_, e.domain, C), X(_, t, C), O(_, Ue, C);
  const T = [
    [sr, cr],
    // {}
    [rn, nn],
    // []
    [on, an],
    // ()
    [sn, cn],
    // <>
    [ln, un],
    // （）
    [dn, fn],
    // 「」
    [hn, pn],
    // 『』
    [mn, gn]
    // ＜＞
  ];
  for (let S = 0; S < T.length; S++) {
    const [P, D] = T[S], H = O(C, P);
    O(k, P, H), O(H, D, C);
    const j = Me(zr);
    X(H, t, j);
    const W = Me();
    X(H, r), X(j, t, j), X(j, r, W), X(W, t, j), X(W, r, W), O(j, D, C), O(W, D, C);
  }
  return O(i, xr, w), O(i, Ua, Wx), {
    start: i,
    tokens: pd
  };
}
function Vx(e, t, r) {
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
      a.length > 0 && (o.push(mi(fc, t, a)), a = []), i -= h, d -= h;
      const p = f.t, m = r.slice(i - d, i);
      o.push(mi(p, t, m));
    }
  }
  return a.length > 0 && o.push(mi(fc, t, a)), o;
}
function mi(e, t, r) {
  const n = r[0].s, i = r[r.length - 1].e, o = t.slice(n, i);
  return new e(o, r);
}
const Kx = typeof console < "u" && console && console.warn || (() => {
}), Xx = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ue = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Yx() {
  return Pe.groups = {}, ue.scanner = null, ue.parser = null, ue.tokenQueue = [], ue.pluginQueue = [], ue.customSchemes = [], ue.initialized = !1, ue;
}
function hc(e, t = !1) {
  if (ue.initialized && Kx(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Xx}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ue.customSchemes.push([e, t]);
}
function Jx() {
  ue.scanner = Fx(ue.customSchemes);
  for (let e = 0; e < ue.tokenQueue.length; e++)
    ue.tokenQueue[e][1]({
      scanner: ue.scanner
    });
  ue.parser = Gx(ue.scanner.tokens);
  for (let e = 0; e < ue.pluginQueue.length; e++)
    ue.pluginQueue[e][1]({
      scanner: ue.scanner,
      parser: ue.parser
    });
  return ue.initialized = !0, ue;
}
function Ya(e) {
  return ue.initialized || Jx(), Vx(ue.parser.start, e, md(ue.scanner.start, e));
}
Ya.scan = md;
function vd(e, t = null, r = null) {
  if (t && typeof t == "object") {
    if (r)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    r = t, t = null;
  }
  const n = new Xa(r), i = Ya(e), o = [];
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    s.isLink && (!t || s.t === t) && n.check(s) && o.push(s.toFormattedObject(n));
  }
  return o;
}
const Ja = "[\0-   ᠎ -\u2029 　]", Zx = new RegExp(Ja), Qx = new RegExp(`${Ja}$`), ey = new RegExp(Ja, "g");
function ty(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function ry(e) {
  return new Pt({
    key: new Ot("autolink"),
    appendTransaction: (t, r, n) => {
      const i = t.some((u) => u.docChanged) && !r.doc.eq(n.doc), o = t.some((u) => u.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: a } = n, s = fp(r.doc, [...t]);
      if (hp(s).forEach(({ newRange: u }) => {
        const d = pp(n.doc, u, (p) => p.isTextblock);
        let f, h;
        if (d.length > 1)
          f = d[0], h = n.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ");
        else if (d.length) {
          const p = n.doc.textBetween(u.from, u.to, " ", " ");
          if (!Qx.test(p))
            return;
          f = d[0], h = n.doc.textBetween(f.pos, u.to, void 0, " ");
        }
        if (f && h) {
          const p = h.split(Zx).filter(Boolean);
          if (p.length <= 0)
            return !1;
          const m = p[p.length - 1], v = f.pos + h.lastIndexOf(m);
          if (!m)
            return !1;
          const g = Ya(m).map((x) => x.toObject(e.defaultProtocol));
          if (!ty(g))
            return !1;
          g.filter((x) => x.isLink).map((x) => ({
            ...x,
            from: v + x.start + 1,
            to: v + x.end + 1
          })).filter((x) => n.schema.marks.code ? !n.doc.rangeHasMark(x.from, x.to, n.schema.marks.code) : !0).filter((x) => e.validate(x.value)).filter((x) => e.shouldAutoLink(x.value)).forEach((x) => {
            mp(x.from, x.to, n.doc).some((w) => w.mark.type === e.type) || a.addMark(x.from, x.to, e.type.create({
              href: x.href
            }));
          });
        }
      }), !!a.steps.length)
        return a;
    }
  });
}
function ny(e) {
  return new Pt({
    key: new Ot("handleClickLink"),
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
function iy(e) {
  return new Pt({
    key: new Ot("handlePasteLink"),
    props: {
      handlePaste: (t, r, n) => {
        const { state: i } = t, { selection: o } = i, { empty: a } = o;
        if (a)
          return !1;
        let s = "";
        n.content.forEach((u) => {
          s += u.textContent;
        });
        const c = vd(s, { defaultProtocol: e.defaultProtocol }).find((u) => u.isLink && u.value === s);
        return !s || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
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
  }), !e || e.replace(ey, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const oy = up.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        hc(e);
        return;
      }
      hc(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Yx();
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
            const { protocols: r, defaultProtocol: n } = this.options, i = vd(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
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
    return this.options.autolink && e.push(ry({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (n) => this.options.isAllowedUri(n, {
        defaultValidate: (i) => !!Tt(i, t),
        protocols: t,
        defaultProtocol: r
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(ny({
      type: this.type
    })), this.options.linkOnPaste && e.push(iy({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
});
function ay(e) {
  const [t, r] = J(!1);
  function n(i, o, a) {
    e.action && (e.action({ link: i, text: o, openInNewTab: a }), r(!1));
  }
  return /* @__PURE__ */ R(Ir, { modal: !0, open: t, onOpenChange: r, children: [
    /* @__PURE__ */ l(Or, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ l(
      F,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ l(xe, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ l(Vt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ l(xd, { editor: e.editor, onSetLink: n, open: t, target: e.target }) })
  ] });
}
const sy = /* @__PURE__ */ oy.extend({
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
    var r, n;
    const e = ((r = this.parent) == null ? void 0 : r.call(this)) || {}, t = (n = e.HTMLAttributes) == null ? void 0 : n.target;
    return {
      ...e,
      openOnClick: !0,
      button: ({ editor: i, t: o }) => ({
        component: ay,
        componentProps: {
          editor: i,
          action: (a) => {
            const { link: s, text: c, openInNewTab: u } = a;
            if (!s) {
              i.chain().extendMarkRange("link").unsetLink().run();
              return;
            }
            i.isActive("link") && i.chain().extendMarkRange("link").run();
            const { from: d } = i.state.selection, f = c.length;
            i.chain().insertContent({
              type: "text",
              text: c,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: s.match(/^https?:\/\//i) ? s : `http://${s}`,
                    target: t ?? (u ? "_blank" : "")
                  }
                }
              ]
            }).setLink({ href: s }).setTextSelection({ from: d, to: d + f }).focus().run();
          },
          id: "linkk",
          isActive: () => i.isActive("link") || !1,
          disabled: !i.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: o("editor.link.tooltip"),
          target: t
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new Pt({
        props: {
          handleClick: (e, t) => {
            const { schema: r, doc: n, tr: i } = e.state, o = vp(n.resolve(t), r.marks.link);
            if (!o)
              return !1;
            let a = null;
            if (n.nodesBetween(o.from, o.to, (d) => (a = d.marks.find((f) => f.type === r.marks.link), !a)), this.options.openOnClick && (a != null && a.attrs.href) && t !== o.to)
              return window.open(a.attrs.href, a.attrs.target || "_self"), !0;
            const s = n.resolve(o.from), c = n.resolve(o.to), u = i.setSelection(
              new Wt(s, c)
            );
            e.dispatch(u);
          }
        }
      })
    ];
  }
});
function xd(e) {
  const { t } = Se(), [r, n] = J({
    text: "",
    link: ""
  }), [i, o] = J(!1), a = He(null), s = He(null);
  ge(() => {
    const u = () => {
      var w, A, E, C;
      const { from: d, to: f, empty: h } = e.editor.state.selection, p = (w = e.editor.extensionManager.extensions.find(
        (k) => k.name === sy.name
      )) == null ? void 0 : w.options;
      let m = "", v = "", g = (A = p == null ? void 0 : p.HTMLAttributes) == null ? void 0 : A.target;
      const x = e.editor.state.doc.nodeAt(d);
      if (x) {
        const k = x.marks.find((M) => M.type.name === "link");
        k ? (v = k.attrs.href || "", g = k.attrs.target, h ? m = x.text || "" : m = e.editor.state.doc.textBetween(d, f, " ")) : m = e.editor.state.doc.textBetween(d, f, " ");
      }
      x || (m = e.editor.state.doc.textBetween(d, f, " ")), n({ link: v, text: m }), o(e.target ? e.target === "_blank" : g === "_blank"), e.open && (m === "" ? (E = a.current) == null || E.focus() : (C = s.current) == null || C.focus());
    };
    return u(), e.editor.on("selectionUpdate", u), () => {
      e.editor.off("selectionUpdate", u);
    };
  }, [e.editor, e.open]);
  function c(u) {
    u.preventDefault(), u.stopPropagation(), e == null || e.onSetLink(r.link, r.text, i), n({ text: "", link: "" });
  }
  return /* @__PURE__ */ l("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-flex-col richtext-gap-2", children: [
    /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ l(
      ke,
      {
        ref: a,
        className: "richtext-w-80",
        onChange: (u) => n({ ...r, text: u.target.value }),
        placeholder: "Text",
        required: !0,
        type: "text",
        value: r.text
      }
    ) }) }),
    /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ R("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
      /* @__PURE__ */ l(
        ke,
        {
          ref: s,
          className: "richtext-pl-10",
          onChange: (u) => n({ ...r, link: u.target.value }),
          required: !0,
          type: "url",
          value: r.link
        }
      ),
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ l(
        xe,
        {
          className: "richtext-size-5 richtext-text-muted-foreground",
          name: "Link"
        }
      ) })
    ] }) }),
    !e.target && /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ l(ot, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ l(
        Nd,
        {
          checked: i,
          onCheckedChange: (u) => {
            o(u);
          }
        }
      )
    ] }),
    /* @__PURE__ */ l(
      Te,
      {
        className: "richtext-mt-2 richtext-self-end",
        onClick: c,
        type: "button",
        children: t("editor.link.dialog.button.apply")
      }
    )
  ] }) });
}
function cy(e) {
  const { t } = Se();
  return /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
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
    (e == null ? void 0 : e.link) && /* @__PURE__ */ l(Ge, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ R("div", { className: "richtext-flex richtext-flex-nowrap", children: [
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
function ly({ editor: e, disabled: t }) {
  var h;
  const r = e.extensionManager.extensions.find((p) => p.name === "link"), n = (h = r == null ? void 0 : r.options) == null ? void 0 : h.bubbleMenuComponents, i = (n == null ? void 0 : n.LinkEditBlock) || xd, o = (n == null ? void 0 : n.LinkViewBlock) || cy, [a, s] = J(!1), c = we(() => {
    const { href: p } = e.getAttributes("link");
    return p;
  }, [e.state.selection, e.state.doc]), u = oe(({ editor: p }) => p.isActive("link"), []), d = (p, m, v) => {
    const g = e.state.selection, { from: x } = g, w = (m == null ? void 0 : m.length) ?? 0, A = x + w;
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
    }).setLink({ href: p }).setTextSelection({ from: x, to: A }).focus().run(), s(!1);
  }, f = oe(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), s(!1);
  }, [e]);
  return /* @__PURE__ */ l(pe, { children: /* @__PURE__ */ l(
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
      children: t ? /* @__PURE__ */ l(pe, {}) : /* @__PURE__ */ l(pe, { children: a ? /* @__PURE__ */ l(i, { onSetLink: d, editor: e }) : /* @__PURE__ */ l(
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
const uy = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, yd = Tr.create({
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
      wu({
        find: uy,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, n] = e;
          return { src: r, alt: t, title: n };
        }
      })
    ];
  }
}), jn = _e.Root, zn = _e.Trigger, dy = _e.Portal, bd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  _e.Overlay,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
bd.displayName = _e.Overlay.displayName;
const Er = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ R(dy, { children: [
  /* @__PURE__ */ l(bd, {}),
  /* @__PURE__ */ R(
    _e.Content,
    {
      ref: n,
      className: Q(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ R(_e.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ l(vu, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ l("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Er.displayName = _e.Content.displayName;
function wd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: Q(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
wd.displayName = "DialogHeader";
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: Q(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
Za.displayName = "DialogFooter";
const Rr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  _e.Title,
  {
    ref: r,
    className: Q(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
Rr.displayName = _e.Title.displayName;
const fy = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  _e.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
fy.displayName = _e.Description.displayName;
const pc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mc = Oa, Hn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return mc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((u) => {
    const d = r == null ? void 0 : r[u], f = o == null ? void 0 : o[u];
    if (d === null) return null;
    const h = pc(d) || pc(f);
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
  return mc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, hy = Hn(
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
), Te = ne.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, o) => /* @__PURE__ */ l(
    n ? hu : "button",
    {
      className: Q(hy({ variant: t, size: r, className: e })),
      ref: o,
      ...i
    }
  )
);
Te.displayName = "Button";
function Sw(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function Aw(e) {
  return e.split(".").pop();
}
function Cw(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function Tw(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function py(e) {
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
function my(e, t) {
  const r = e.split(","), n = r[0].match(/:(.*?);/)[1], i = atob(r[r.length - 1]);
  let o = i.length;
  const a = new Uint8Array(o);
  for (; o--; )
    a[o] = i.charCodeAt(o);
  return new File([a], t, { type: n });
}
function gy(e, t) {
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
function Sd(e, t) {
  const { acceptMimes: r, maxSize: n, t: i, toast: o } = t, a = [];
  return (Array.isArray(e) ? e : Object.values(e)).forEach((c) => {
    if (!gy(c, r)) {
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
function vy({ editor: e, imageInline: t, onClose: r, disabled: n, alt: i }) {
  var _, T;
  const { t: o } = Se(), { toast: a } = is(), [s, c] = J(!1), [u, d] = J(!1), f = nr.useRef(null), [h, p] = nr.useState(), [m, v] = nr.useState(""), g = He(null), [x, w] = J({
    src: "",
    file: null
  }), A = we(() => {
    var S;
    return (S = e.extensionManager.extensions.find(
      (P) => P.name === br.name
    )) == null ? void 0 : S.options;
  }, [e]);
  function E(S) {
    if (f.current && S.width && S.height) {
      const P = C(f.current, S);
      v(P);
    }
  }
  function C(S, P) {
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
  const k = nr.useCallback(async () => {
    var S;
    if (!u) {
      d(!0);
      try {
        const P = my(m, ((S = x == null ? void 0 : x.file) == null ? void 0 : S.name) || "image.png");
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
  }, [m, e, t, u, r, (_ = x == null ? void 0 : x.file) == null ? void 0 : _.name, A]);
  function M(S) {
    var P;
    S.preventDefault(), (P = g.current) == null || P.click();
  }
  const L = async (S) => {
    var W;
    const P = (W = S == null ? void 0 : S.target) == null ? void 0 : W.files;
    if (!e || e.isDestroyed || P.length === 0) {
      S.target.value = "";
      return;
    }
    const D = Sd(P, {
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
    const H = D[0], j = await py(H);
    c(!0), w({
      src: j.src,
      file: H
    });
  }, N = () => {
    g.current && (g.current.value = "");
  };
  return /* @__PURE__ */ R(pe, { children: [
    /* @__PURE__ */ l(
      Te,
      {
        className: "richtext-mt-1 richtext-w-full",
        disabled: n,
        onClick: M,
        size: "sm",
        children: o("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ R(
      jn,
      {
        open: s,
        onOpenChange: (S) => {
          c(S), S || (w({ src: "", file: null }), N());
        },
        children: [
          /* @__PURE__ */ l(zn, {}),
          /* @__PURE__ */ R(Er, { children: [
            /* @__PURE__ */ l(Rr, { children: o("editor.image.dialog.tab.uploadCrop") }),
            /* @__PURE__ */ l("div", { children: x.src && /* @__PURE__ */ l(
              Ap,
              {
                className: "richtext-w-full",
                crop: h,
                onChange: (S) => p(S),
                onComplete: (S) => E(S),
                children: /* @__PURE__ */ l(
                  "img",
                  {
                    alt: "Crop me",
                    ref: f,
                    src: x.src
                  }
                )
              }
            ) }),
            /* @__PURE__ */ R(Za, { children: [
              /* @__PURE__ */ R(
                Te,
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
                      xe,
                      {
                        className: "richtext-ml-1",
                        name: "Trash2"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l(
                Te,
                {
                  className: "richtext-w-fit",
                  disabled: u || !h,
                  onClick: k,
                  children: u ? /* @__PURE__ */ R(pe, { children: [
                    o("editor.imageUpload.uploading"),
                    /* @__PURE__ */ l(
                      xe,
                      {
                        className: "richtext-ml-1 richtext-animate-spin",
                        name: "Loader"
                      }
                    )
                  ] }) : /* @__PURE__ */ R(pe, { children: [
                    o("editor.imageUpload.crop"),
                    /* @__PURE__ */ l(
                      xe,
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
        accept: ((T = A == null ? void 0 : A.acceptMimes) == null ? void 0 : T.join(",")) || "image/*",
        multiple: !1,
        onChange: L,
        ref: g,
        style: { display: "none" },
        type: "file"
      }
    )
  ] });
}
function qn(e) {
  function t() {
    const o = He(e), a = oe(() => o.current, []), s = He(/* @__PURE__ */ new Set()), c = oe((d) => {
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
const { Provider: xy, useStore: Ad } = qn({
  value: !1
}), { Provider: yy, useStore: Cd } = qn({
  value: "light"
});
Lf("0");
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
const It = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EDIT: (e) => `EDIT-${e}`,
  UPDATE_THEME: (e) => `UPDATE_THEME-${e}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, by = {
  setOpen: (e, t) => {
    Qa(It.UPLOAD_IMAGE(e), t);
  }
};
function wy(e) {
  var E;
  const { t } = Se(), { toast: r } = is(), [n, i] = J(!1), [o, a] = J(!1), s = (C) => {
    i(C.detail);
  }, [c, u] = J(""), [d, f] = J(""), h = He(null), p = ((E = e.editor.extensionManager.extensions.find(
    (C) => C.name === br.name
  )) == null ? void 0 : E.options.defaultInline) || !1, [m, v] = J(p), g = we(() => {
    var k;
    return (k = e.editor.extensionManager.extensions.find(
      (M) => M.name === br.name
    )) == null ? void 0 : k.options;
  }, [e.editor]);
  ge(() => {
    const C = Pn(It.UPLOAD_IMAGE(e.editor.id), s);
    return () => {
      C();
    };
  }, []);
  async function x(C) {
    var L;
    const k = (L = C == null ? void 0 : C.target) == null ? void 0 : L.files;
    if (!e.editor || e.editor.isDestroyed || k.length === 0 || o) {
      C.target.value = "";
      return;
    }
    const M = Sd(k, {
      acceptMimes: g == null ? void 0 : g.acceptMimes,
      maxSize: g == null ? void 0 : g.maxSize,
      t,
      toast: r,
      onError: g.onError
    });
    if (M.length <= 0) {
      C.target.value = "";
      return;
    }
    a(!0);
    try {
      if (g != null && g.multiple) {
        const N = M.map(async (T) => {
          let S = "";
          return g.upload ? S = await g.upload(T) : S = URL.createObjectURL(T), S;
        });
        (await Promise.all(N)).forEach((T) => {
          e.editor.chain().focus().setImageInline({ src: T, inline: m, alt: d }).run();
        });
      } else {
        const N = M[0];
        let _ = "";
        g.upload ? _ = await g.upload(N) : _ = URL.createObjectURL(N), e.editor.chain().focus().setImageInline({ src: _, inline: m, alt: d }).run();
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
      a(!1), C.target.value = "";
    }
  }
  function w(C) {
    C.preventDefault(), C.stopPropagation(), e.editor.chain().focus().setImageInline({ src: c, inline: m, alt: d }).run(), i(!1), v(p), u(""), f("");
  }
  function A(C) {
    var k;
    C.preventDefault(), (k = h.current) == null || k.click();
  }
  return /* @__PURE__ */ R(
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
        /* @__PURE__ */ R(Er, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ R(
            kd,
            {
              activationMode: "manual",
              defaultValue: g.resourceImage === "both" || g.resourceImage === "upload" ? "upload" : "link",
              children: [
                g.resourceImage === "both" && /* @__PURE__ */ R(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  /* @__PURE__ */ l(wr, { value: "upload", children: t("editor.image.dialog.tab.upload") }),
                  /* @__PURE__ */ l(wr, { value: "link", children: t("editor.image.dialog.tab.url") })
                ] }),
                /* @__PURE__ */ R("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ l(
                    Hd,
                    {
                      checked: m,
                      onCheckedChange: (C) => {
                        v(C);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(ot, { children: t("editor.link.dialog.inline") })
                ] }),
                g.enableAlt && /* @__PURE__ */ R("div", { className: "richtext-my-[10px] ", children: [
                  /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: t("editor.imageUpload.alt") }),
                  /* @__PURE__ */ l(
                    ke,
                    {
                      onChange: (C) => f(C.target.value),
                      required: !0,
                      type: "text",
                      value: d
                    }
                  )
                ] }),
                /* @__PURE__ */ R(Sr, { value: "upload", children: [
                  /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ l(
                      Te,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        disabled: o,
                        onClick: A,
                        size: "sm",
                        children: o ? /* @__PURE__ */ R(pe, { children: [
                          t("editor.imageUpload.uploading"),
                          /* @__PURE__ */ l(
                            xe,
                            {
                              className: "richtext-ml-1 richtext-animate-spin",
                              name: "Loader"
                            }
                          )
                        ] }) : t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ l(
                      vy,
                      {
                        alt: d,
                        disabled: o,
                        editor: e.editor,
                        imageInline: m,
                        onClose: () => {
                          by.setOpen(e.editor.id, !1), f("");
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      accept: g.acceptMimes.join(",") || "image/*",
                      multiple: g.multiple,
                      onChange: x,
                      ref: h,
                      style: { display: "none" },
                      type: "file"
                    }
                  )
                ] }),
                /* @__PURE__ */ l(Sr, { value: "link", children: /* @__PURE__ */ l("form", { onSubmit: w, children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ l(
                    ke,
                    {
                      autoFocus: !0,
                      onChange: (C) => u(C.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: c
                    }
                  ),
                  /* @__PURE__ */ l(Te, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Hr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Sy(e) {
  var L, N, _;
  const [t, r] = J({
    width: Yr,
    height: Yr
  }), [n, i] = J({
    width: 0,
    height: 0
  }), [o] = J([
    Hr.TOP_LEFT,
    Hr.TOP_RIGHT,
    Hr.BOTTOM_LEFT,
    Hr.BOTTOM_RIGHT
  ]), [a, s] = J(!1), [c, u] = J({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: f } = (L = e == null ? void 0 : e.node) == null ? void 0 : L.attrs, h = f && (d === "left" || d === "right"), p = we(() => {
    var Ae;
    const { src: T, alt: S, width: P, height: D, flipX: H, flipY: j } = (Ae = e == null ? void 0 : e.node) == null ? void 0 : Ae.attrs, W = tn(P) ? `${P}px` : P, ee = tn(D) ? `${D}px` : D, re = [];
    H && re.push("rotateX(180deg)"), j && re.push("rotateY(180deg)");
    const fe = re.join(" ");
    return {
      src: T || void 0,
      alt: S || void 0,
      style: {
        width: W || void 0,
        height: ee || void 0,
        transform: fe || "none",
        ...h ? { float: d } : {}
      }
    };
  }, [(N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs]), m = we(() => {
    const {
      style: { width: T }
    } = p;
    return { width: T === "100%" ? T : void 0 };
  }, [p]);
  function v(T) {
    i({
      width: T.target.width,
      height: T.target.height
    });
  }
  function g() {
    const { editor: T, getPos: S } = e;
    T.commands.setNodeSelection(S());
  }
  const x = oe(
    vr(() => {
      const { editor: T } = e, { width: S } = getComputedStyle(T.view.dom);
      r((P) => ({
        ...P,
        width: Number.parseInt(S, 10)
      }));
    }, Jr),
    [e == null ? void 0 : e.editor]
  );
  function w(T, S) {
    T.preventDefault(), T.stopPropagation();
    const P = n.width, D = n.height, H = P / D;
    let j = Number(e.node.attrs.width), W = Number(e.node.attrs.height);
    const ee = t.width;
    j && !W ? (j = j > ee ? ee : j, W = Math.round(j / H)) : W && !j ? (j = Math.round(W * H), j = j > ee ? ee : j) : !j && !W ? (j = P > ee ? ee : P, W = Math.round(j / H)) : j = j > ee ? ee : j, s(!0), u({
      x: T.clientX,
      y: T.clientY,
      w: j,
      h: W,
      dir: S
    });
  }
  const A = oe(
    vr((T) => {
      if (T.preventDefault(), T.stopPropagation(), !a)
        return;
      const { x: S, w: P, dir: D } = c, H = (T.clientX - S) * (/l/.test(D) ? -1 : 1), j = Fu(P + H, pu, t.width);
      e.updateAttributes({
        width: j,
        height: null
      });
    }, Jr),
    [a, c, t, e.updateAttributes]
  ), E = oe(
    (T) => {
      T.preventDefault(), T.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), g());
    },
    [a, g]
  ), C = oe(() => {
    document == null || document.addEventListener("mousemove", A, !0), document == null || document.addEventListener("mouseup", E, !0);
  }, [A, E]), k = oe(() => {
    document == null || document.removeEventListener("mousemove", A, !0), document == null || document.removeEventListener("mouseup", E, !0);
  }, [A, E]);
  ge(() => (a ? C() : k(), () => {
    k();
  }), [a, C, k]);
  const M = we(() => new ResizeObserver(() => x()), [x]);
  return ge(() => (M.observe(e.editor.view.dom), () => {
    M.disconnect();
  }), [e.editor.view.dom, M]), /* @__PURE__ */ l(
    Pa,
    {
      as: f ? "span" : "div",
      className: "image-view",
      style: {
        float: h ? d : void 0,
        margin: h ? d === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: f ? "inline" : "block",
        textAlign: h ? void 0 : d,
        width: ((_ = p.style) == null ? void 0 : _.width) ?? "auto",
        ...h ? {} : m
      },
      children: /* @__PURE__ */ R(
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
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((T) => /* @__PURE__ */ l(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${T}`,
                onMouseDown: (S) => w(S, T)
              },
              `image-dir-${T}`
            )) })
          ]
        }
      )
    }
  );
}
const Ut = new Ot("upload-image");
function Ay() {
  return new Pt({
    key: Ut,
    state: {
      init() {
        return yp.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const r = e.getMeta(Ut);
        if (r != null && r.add)
          for (const { id: n, pos: i, src: o } of r.add) {
            const a = Cy(o), s = xp.widget(i, a, { id: n });
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
function Cy(e) {
  const t = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = e, r.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(r), t;
}
function Ty(e, t) {
  var i;
  const n = Ut.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (i = n[0]) == null ? void 0 : i.from : null;
}
function Ey({ validateFn: e, onUpload: t, postUpload: r, defaultInline: n = !1 }) {
  return (i, o, a) => {
    for (const s of i) {
      if (e && !e(s))
        continue;
      const c = Date.now().toString(), u = o.state.tr;
      u.selection.empty || u.deleteSelection();
      const d = URL.createObjectURL(s);
      u.setMeta(Ut, {
        add: [{ id: c, pos: a, src: d }]
      }), o.dispatch(u), t(s).then(
        async (f) => {
          var w;
          r && typeof f == "string" && (f = await r(f));
          const { schema: h } = o.state;
          let p = Ty(o.state, c);
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
          const x = o.state.tr.replaceWith(p, p, v).setMeta(Ut, { remove: [c] });
          o.dispatch(x);
        },
        () => {
          const f = o.state.tr.delete(a, a).setMeta(Ut, { remove: [c] });
          o.dispatch(f);
        }
      );
    }
  };
}
function Ry(e, t, r) {
  var i;
  const n = [...((i = t.clipboardData) == null ? void 0 : i.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return r(n, e, o + 1), !0;
  }
  return !1;
}
function Iy(e, t, r, n) {
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
const Oy = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  multiple: !0,
  resourceImage: "both",
  defaultInline: !1,
  enableAlt: !0
}, br = /* @__PURE__ */ yd.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...Oy,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: n
      }) => {
        var i, o;
        return {
          component: wy,
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
    return Na(Sy);
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
      },
      {
        tag: 'img[src]:not([src^="data:"])'
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = Ey({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      Ay(),
      new Pt({
        key: new Ot("image"),
        props: {
          handlePaste: (r, n) => {
            var a;
            if (!(n.clipboardData && n.clipboardData.files && ((a = n.clipboardData.files) == null ? void 0 : a.length)))
              return;
            if ([...n.clipboardData.files || []].some((s) => s.type === "text/html"))
              return !1;
            if (n.clipboardData.items.length == 2) {
              n.clipboardData.items[0].getAsString((s) => {
                let c = "";
                if (s.replace(/src\s*=\s*"(.*)"/, (u, d) => c = d), c && typeof c == "string") {
                  const u = r.state.schema.nodes.image.create({
                    src: c
                  }), d = r.state.tr.replaceSelectionWith(u);
                  r.dispatch(d);
                }
              });
              return;
            }
            return Ry(r, n, t);
          },
          handleDrop: (r, n, i, o) => {
            if (!(n instanceof DragEvent) || !n.dataTransfer)
              return !1;
            if (n.dataTransfer.items.length == 2) {
              n.dataTransfer.items[0].getAsString((a) => {
                let s = "";
                if (a.replace(/src\s*=\s*"(.*)"/, (c, u) => s = u), s && typeof s == "string") {
                  const c = r.state.schema.nodes.image.create({
                    src: s
                  }), u = r.state.tr.replaceSelectionWith(c);
                  r.dispatch(u);
                }
              });
              return;
            }
            return Iy(r, n, o, t), !1;
          }
        }
      })
    ];
  }
});
function Py({ selectImage: e, giphyApiKey: t, children: r }) {
  const [n, i] = J([]), [o] = J(15), a = He(null), s = (u, d = "search") => {
    if (!t)
      return;
    const h = `${d === "search" ? `https://api.giphy.com/v1/gifs/search?q=${u}` : `https://api.giphy.com/v1/gifs/trending?q=${u}`}&limit=${o}&api_key=${t}`;
    fetch(h).then((p) => p.json()).then((p) => {
      i(p.data);
    }).catch((p) => {
      console.log(p);
    });
  };
  ge(() => {
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
  return /* @__PURE__ */ R(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: r }),
    /* @__PURE__ */ l(
      Vt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: t ? /* @__PURE__ */ R(pe, { children: [
          /* @__PURE__ */ l("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ l(
            ke,
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
function Ny({ editor: e, icon: t, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ l(
    Py,
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
const qr = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function ky(e) {
  var k, M;
  const [t, r] = J({
    width: Yr,
    height: Yr
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
  }), { align: d } = (k = e == null ? void 0 : e.node) == null ? void 0 : k.attrs, f = we(() => {
    var D;
    const { src: L, alt: N, width: _, height: T } = (D = e == null ? void 0 : e.node) == null ? void 0 : D.attrs, S = tn(_) ? `${_}px` : _, P = tn(T) ? `${T}px` : T;
    return {
      src: L || void 0,
      alt: N || void 0,
      style: {
        width: S || void 0,
        height: P || void 0
      }
    };
  }, [(M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs]), h = we(() => {
    const {
      style: { width: L }
    } = f;
    return { width: L === "100%" ? L : void 0 };
  }, [f]);
  function p(L) {
    i({
      width: L.target.width,
      height: L.target.height
    });
  }
  function m() {
    const { editor: L, getPos: N } = e;
    L.commands.setNodeSelection(N());
  }
  const v = oe(
    vr(() => {
      const { editor: L } = e, { width: N } = getComputedStyle(L.view.dom);
      r((_) => ({
        ..._,
        width: Number.parseInt(N, 10)
      }));
    }, Jr),
    [e == null ? void 0 : e.editor]
  );
  function g(L, N) {
    L.preventDefault(), L.stopPropagation();
    const _ = n.width, T = n.height, S = _ / T;
    let P = Number(e.node.attrs.width), D = Number(e.node.attrs.height);
    const H = t.width;
    P && !D ? (P = P > H ? H : P, D = Math.round(P / S)) : D && !P ? (P = Math.round(D * S), P = P > H ? H : P) : !P && !D ? (P = _ > H ? H : _, D = Math.round(P / S)) : P = P > H ? H : P, s(!0), u({
      x: L.clientX,
      y: L.clientY,
      w: P,
      h: D,
      dir: N
    });
  }
  const x = oe(
    vr((L) => {
      if (L.preventDefault(), L.stopPropagation(), !a)
        return;
      const { x: N, w: _, dir: T } = c, S = (L.clientX - N) * (/l/.test(T) ? -1 : 1), P = Fu(_ + S, pu, t.width);
      e.updateAttributes({
        width: P,
        height: null
      });
    }, Jr),
    [a, c, t, e.updateAttributes]
  ), w = oe(
    (L) => {
      L.preventDefault(), L.stopPropagation(), a && (u({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), m());
    },
    [a, m]
  ), A = oe(() => {
    document == null || document.addEventListener("mousemove", x, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [x, w]), E = oe(() => {
    document == null || document.removeEventListener("mousemove", x, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [x, w]);
  ge(() => (a ? A() : E(), () => {
    E();
  }), [a, A, E]);
  const C = we(() => new ResizeObserver(() => v()), [v]);
  return ge(() => (C.observe(e.editor.view.dom), () => {
    C.disconnect();
  }), [e.editor.view.dom, C]), /* @__PURE__ */ l(
    Pa,
    {
      className: "image-view",
      style: { ...h, width: "100%", textAlign: d },
      children: /* @__PURE__ */ R(
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
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || a) && /* @__PURE__ */ l("div", { className: "image-resizer", children: o == null ? void 0 : o.map((L) => /* @__PURE__ */ l(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${L}`,
                onMouseDown: (N) => g(N, L)
              },
              `image-dir-${L}`
            )) })
          ]
        }
      )
    }
  );
}
const Td = /* @__PURE__ */ yd.extend({
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
          component: Ny,
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
    return Na(ky);
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
function Ly(e, t) {
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
function My(e) {
  const { t } = Se(), [r, n] = J(""), i = He(null), [o, a] = J(""), [s, c] = J(!1), u = (m) => {
    c(m.detail);
  };
  ge(() => {
    const m = Pn(It.UPLOAD_VIDEO(e.editor.id), u);
    return () => {
      m();
    };
  }, []);
  const d = we(() => {
    var v;
    return (v = e.editor.extensionManager.extensions.find(
      (g) => g.name === Ed.name
    )) == null ? void 0 : v.options;
  }, [e.editor]);
  async function f(m) {
    var w;
    const v = (w = m == null ? void 0 : m.target) == null ? void 0 : w.files;
    if (!e.editor || e.editor.isDestroyed || v.length === 0)
      return;
    const g = v[0];
    let x = "";
    d.upload ? x = await d.upload(g) : x = URL.createObjectURL(g), e.editor.chain().focus().setVideo({
      src: x,
      width: "100%"
    }).run(), c(!1);
  }
  function h(m) {
    m.preventDefault(), m.stopPropagation(), r && (e.editor.chain().focus().setVideo({
      src: r,
      width: "100%"
    }).run(), c(!1), n(""));
  }
  function p(m) {
    var v;
    m.preventDefault(), (v = i.current) == null || v.click();
  }
  return /* @__PURE__ */ R(
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
        /* @__PURE__ */ R(Er, { children: [
          /* @__PURE__ */ l(Rr, { children: t("editor.video.dialog.title") }),
          /* @__PURE__ */ R(
            kd,
            {
              activationMode: "manual",
              defaultValue: (d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ R(rs, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload") && /* @__PURE__ */ l(wr, { value: "upload", children: t("editor.video.dialog.tab.upload") }),
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "link") && /* @__PURE__ */ l(wr, { value: "link", children: t("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ R(Sr, { value: "upload", children: [
                  /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ l(
                    Te,
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
                /* @__PURE__ */ R(Sr, { value: "link", children: [
                  /* @__PURE__ */ l("div", { children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ l(
                      ke,
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
                          v && !Ly(v, g) ? a("Invalid video URL") : a("");
                        }
                      }
                    ),
                    /* @__PURE__ */ l(Te, { type: "button", onClick: h, children: t("editor.video.dialog.button.apply") })
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
function Ew(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const $y = (e) => typeof e == "number", _y = (e) => typeof e == "string", Dy = (e) => typeof e == "function";
function By(e, t = "px") {
  if (!e)
    return e;
  const r = $y(e) ? String(e) : e, n = Number.parseFloat(r), i = r.match(/[%a-z]+$/i), o = i ? i[0] : t;
  return Number.isNaN(n) ? e : n + o;
}
function jy(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((i) => i.name === t);
}
function Rw(e) {
  return e.map((t) => _y(t) ? { value: t, name: t } : t);
}
function zy(e) {
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
const Ed = /* @__PURE__ */ Tr.create({
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
          component: My,
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
          src: e ? zy(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: By(e)
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
    Ge,
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
  ) }) : /* @__PURE__ */ l(pe, {});
}
function Hy(e) {
  return e.type.name === br.name;
}
function qy(e) {
  return e.type.name === Td.name;
}
function Fy(e) {
  return e.type.name === Ed.name;
}
function Uy(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (Hy(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Xv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(pe, { children: /* @__PURE__ */ l(
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
      )) }) }) : /* @__PURE__ */ l(pe, {})
    }
  ) });
}
function Wy(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (qy(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Yv(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ l(pe, { children: /* @__PURE__ */ l(
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
      )) }) }) : /* @__PURE__ */ l(pe, {})
    }
  ) });
}
function Gy(e) {
  const { lang: t } = Se(), r = ({ editor: i }) => {
    const { selection: o } = i.view.state, { $from: a, to: s } = o;
    let c = !1;
    return i.view.state.doc.nodesBetween(a.pos, s, (u) => {
      if (Fy(u))
        return c = !0, !1;
    }), c;
  }, n = we(() => e.disabled ? [] : Jv(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ l(pe, { children: /* @__PURE__ */ l(
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
      )) }) }) : /* @__PURE__ */ l(pe, {})
    }
  ) });
}
function Vy(e, t, r = null) {
  return r ? e.createChecked({ index: t }, r) : e.createAndFill({ index: t });
}
function Ky(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function Xy(e, t, r = null) {
  const n = Ky(e), i = [];
  for (let o = 0; o < t; o += 1) {
    const a = Vy(n.column, o, r);
    a && i.push(a);
  }
  return n.columns.createChecked({ cols: t }, i);
}
function gi({
  state: e,
  dispatch: t,
  type: r
}) {
  const n = Zr((o) => o.type.name === Nn.name)(e.selection), i = Zr((o) => o.type.name === Rd.name)(e.selection);
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
      Wt.near(f.doc.resolve(d))
    ), t(f);
  }
  return !0;
}
function gc({ state: e, dispatch: t, type: r }) {
  const n = Zr((o) => o.type.name === Nn.name)(e.selection), i = Zr((o) => o.type.name === Rd.name)(e.selection);
  if (t && n && i) {
    const o = n.node, a = i.node.attrs.index;
    let s = 0;
    r === "before" ? s = (a - 1 + o.attrs.cols) % o.attrs.cols : s = (a + 1) % o.attrs.cols;
    let c = n.pos;
    o.content.forEach((d, f, h) => {
      h < s && (c += d.nodeSize);
    });
    const u = e.tr.setTime(Date.now());
    return u.setSelection(Wt.near(u.doc.resolve(c))), t(u), !0;
  }
  return !1;
}
const Rd = /* @__PURE__ */ Tr.create({
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
}), Iw = wp.create({
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
}), Yy = 200, Nn = /* @__PURE__ */ Tr.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: Yy,
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
        const i = Xy(n.schema, e && e.cols || 3);
        if (r) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(i).scrollIntoView().setSelection(Wt.near(t.doc.resolve(o)));
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
      Tab: () => gc({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => gc({
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
function Jy({ editor: e }) {
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
      children: /* @__PURE__ */ R("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
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
const Zy = de.Root, Qy = de.Trigger, vc = de.Portal, xc = de.Sub, Ea = ne.forwardRef(({ className: e, inset: t, children: r, ...n }, i) => /* @__PURE__ */ R(
  de.SubTrigger,
  {
    ref: i,
    className: Q(
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
Ea.displayName = de.SubTrigger.displayName;
const Ra = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  de.SubContent,
  {
    ref: r,
    className: Q(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ra.displayName = de.SubContent.displayName;
const Od = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(de.Portal, { children: /* @__PURE__ */ l(
  de.Content,
  {
    ref: n,
    sideOffset: t,
    className: Q(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Od.displayName = de.Content.displayName;
const qe = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  de.Item,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
qe.displayName = de.Item.displayName;
const eb = ne.forwardRef(({ className: e, children: t, checked: r, ...n }, i) => /* @__PURE__ */ R(
  de.CheckboxItem,
  {
    ref: i,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(de.ItemIndicator, { children: /* @__PURE__ */ l(xu, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
eb.displayName = de.CheckboxItem.displayName;
const tb = ne.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ R(
  de.RadioItem,
  {
    ref: n,
    className: Q(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ l(de.ItemIndicator, { children: /* @__PURE__ */ l(Qh, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
tb.displayName = de.RadioItem.displayName;
const rb = ne.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  de.Label,
  {
    ref: n,
    className: Q(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...r
  }
));
rb.displayName = de.Label.displayName;
const Pd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  de.Separator,
  {
    ref: r,
    className: Q("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Pd.displayName = de.Separator.displayName;
function nb({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      className: Q("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
nb.displayName = "DropdownMenuShortcut";
const ke = ne.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ l(
    "input",
    {
      type: t,
      className: Q(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ke.displayName = "Input";
const ib = Hn(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ot = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  bu.Root,
  {
    ref: r,
    className: Q(ib(), e),
    ...t
  }
));
ot.displayName = bu.Root.displayName;
const Ir = hr.Root, Or = hr.Trigger, Vt = ne.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, i) => /* @__PURE__ */ l(hr.Portal, { children: /* @__PURE__ */ l(
  hr.Content,
  {
    ref: i,
    align: t,
    sideOffset: r,
    className: Q(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Vt.displayName = hr.Content.displayName;
const Ge = ne.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, i) => /* @__PURE__ */ l(
    mu.Root,
    {
      ref: i,
      decorative: r,
      orientation: t,
      className: Q(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...n
    }
  )
);
Ge.displayName = mu.Root.displayName;
const Nd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ia.Root,
  {
    className: Q(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ l(
      ia.Thumb,
      {
        className: Q(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Nd.displayName = ia.Root.displayName;
const kd = Nt.Root, rs = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Nt.List,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
rs.displayName = Nt.List.displayName;
const wr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Nt.Trigger,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
wr.displayName = Nt.Trigger.displayName;
const Sr = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Nt.Content,
  {
    ref: r,
    className: Q(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
Sr.displayName = Nt.Content.displayName;
const ob = Le.Provider, Ld = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Le.Viewport,
  {
    ref: r,
    className: Q(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
Ld.displayName = Le.Viewport.displayName;
const ab = Hn(
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
  Le.Root,
  {
    ref: n,
    className: Q(ab({ variant: t }), e),
    ...r
  }
));
Md.displayName = Le.Root.displayName;
const sb = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Le.Action,
  {
    ref: r,
    className: Q(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
sb.displayName = Le.Action.displayName;
const $d = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Le.Close,
  {
    ref: r,
    className: Q(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l(vu, { className: "richtext-h-4 richtext-w-4" })
  }
));
$d.displayName = Le.Close.displayName;
const _d = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Le.Title,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
_d.displayName = Le.Title.displayName;
const Dd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Le.Description,
  {
    ref: r,
    className: Q("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
Dd.displayName = Le.Description.displayName;
const cb = Hn(
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
), Bd = ne.forwardRef(({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ l(
  yu.Root,
  {
    ref: i,
    className: Q(cb({ variant: t, size: r, className: e })),
    ...n
  }
));
Bd.displayName = yu.Root.displayName;
const yc = Ar.Provider, jd = Ar.Root, zd = Ar.Trigger, ns = ne.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(
  Ar.Content,
  {
    ref: n,
    sideOffset: t,
    className: Q(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
ns.displayName = Ar.Content.displayName;
const lb = 1, ub = 1e6;
let vi = 0;
function db() {
  return vi = (vi + 1) % Number.MAX_SAFE_INTEGER, vi.toString();
}
const xi = /* @__PURE__ */ new Map();
function bc(e) {
  if (xi.has(e))
    return;
  const t = setTimeout(() => {
    xi.delete(e), fr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, ub);
  xi.set(e, t);
}
function fb(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, lb)
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
      return r ? bc(r) : e.toasts.forEach((n) => {
        bc(n.id);
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
const Vr = [];
let Kr = { toasts: [] };
function fr(e) {
  Kr = fb(Kr, e), Vr.forEach((t) => {
    t(Kr);
  });
}
function hb({ ...e }) {
  const t = db(), r = (i) => fr({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), n = () => fr({ type: "DISMISS_TOAST", toastId: t });
  return fr({
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
  const [e, t] = ne.useState(Kr);
  return ne.useEffect(() => (Vr.push(t), () => {
    const r = Vr.indexOf(t);
    r > -1 && Vr.splice(r, 1);
  }), [e]), {
    ...e,
    toast: hb,
    dismiss: (r) => fr({ type: "DISMISS_TOAST", toastId: r })
  };
}
const Hd = ne.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  na.Root,
  {
    ref: r,
    className: Q(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(
      na.Indicator,
      {
        className: Q("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ l(xu, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
Hd.displayName = na.Root.displayName;
const pb = { padding: "0 12px 12px" }, mb = ({ width: e, maxWidth: t, height: r, onOk: n, children: i }) => {
  const { t: o } = Se(), [a, s] = J({
    width: "",
    height: "",
    maxWidth: ""
  });
  ge(() => {
    s({
      width: e,
      height: r,
      maxWidth: t
    });
  }, [r, t, e]);
  function c(u) {
    u.preventDefault(), u.stopPropagation(), n(a);
  }
  return /* @__PURE__ */ R(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: i }),
    /* @__PURE__ */ l(Vt, { children: /* @__PURE__ */ l("div", { style: pb, children: /* @__PURE__ */ R("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        ke,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (u) => s({ ...a, width: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        ke,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (u) => s({ ...a, maxWidth: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(ot, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ l("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ l("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ l(
        ke,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (u) => s({ ...a, height: u.target.value })
        }
      ) }) }),
      /* @__PURE__ */ l(Te, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
}, Kt = {
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
function gb(e) {
  const t = Kt.youtube, r = e.matchedUrl;
  e.validLink = !0;
  const n = r.split("="), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}/${o}`, e.validId = !0;
  }
  return e;
}
function vb(e) {
  const t = Kt.youku, r = e.matchedUrl, n = t.idRule, i = new RegExp(n), o = r.match(i);
  if (o && o.length > 0) {
    const a = o[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${a}`;
  } else
    e.validId = !1;
  return e;
}
function xb(e) {
  const t = Kt.bilibili, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function yb(e) {
  const t = Kt.qqvideo, n = e.matchedUrl.split("/"), i = n.length;
  if (i > 0) {
    const o = n[i - 1];
    e.src = `${t.srcPrefix}=${o}`, e.validId = !0;
  }
  return e;
}
function bb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function wb(e, t) {
  return t.src = e, t.validId = !0, t;
}
function Sb(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function Ab(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Cb(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function Tb(e) {
  const t = Kt.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function Eb(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function Rb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function Ib(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function Ob(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function Pb(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function Nb(e, t, r) {
  if (e === "googlemaps")
    return r.validLink = !0, r.matchedUrl = t, r;
  const i = Kt[e].linkRule;
  for (const o of i) {
    const a = new RegExp(o), s = t.match(a);
    if (s && s.length > 0)
      return r.validLink = !0, r.matchedUrl = e === "youtube" ? s[1] : s[0], r;
  }
  return r;
}
function kb(e) {
  var r, n;
  let t = "iframe";
  return ((r = e.includes) != null && r.call(e, "youtube") || (n = e.includes) != null && n.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function qd(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const r = kb(e);
  if (t = Nb(r, e, t), !t.validLink)
    return t;
  switch (r) {
    case "youtube":
      return gb(t);
    case "youku":
      return vb(t);
    case "bilibili":
      return xb(t);
    case "qqvideo":
      return yb(t);
    case "amap":
      return bb(e, t);
    case "baidu_map":
      return wb(e, t);
    case "googlemaps":
      return Sb(e, t);
    case "modao":
      return Ab(t);
    case "lanhu":
      return Cb(t);
    case "figma":
      return Tb(t);
    case "canva":
      return Eb(e, t);
    case "processon":
      return Rb(e, t);
    case "codepen":
      return Ib(t);
    case "jinshuju":
      return Ob(e, t);
    case "iframe":
      return Pb(e, t);
    default:
      return e;
  }
}
function Lb() {
  const [e] = Ad((t) => t.value);
  return e;
}
const Mb = {
  setDisable: (e, t) => {
    Qa(It.EDIT(e), t);
  }
}, $b = "_wrap_5y04w_1", _b = "_innerWrap_5y04w_15", wc = {
  wrap: $b,
  innerWrap: _b
};
function Db({ editor: e, node: t, updateAttributes: r }) {
  const n = Lb(), { src: i, width: o, height: a } = t.attrs, [s, c] = J("");
  function u() {
    if (!s)
      return;
    const f = qd(s);
    e.chain().updateAttributes(Ht.name, {
      src: (f == null ? void 0 : f.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const d = oe(
    (f) => {
      r({ width: f.width, height: f.height });
    },
    [r]
  );
  return /* @__PURE__ */ R(Pa, { children: [
    !i && /* @__PURE__ */ R("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ l(
        ke,
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
        Te,
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
        children: /* @__PURE__ */ l("div", { className: Oa(wc.wrap, "render-wrapper"), children: /* @__PURE__ */ l(
          "div",
          {
            className: wc.innerWrap,
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
const Ht = /* @__PURE__ */ Tr.create({
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
      wu({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Na(Db);
  }
});
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jb(e) {
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
var yi, Sc;
function Fd() {
  if (Sc) return yi;
  Sc = 1;
  var e = Object.prototype.toString;
  return yi = function(r) {
    var n = e.call(r), i = n === "[object Arguments]";
    return i || (i = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), i;
  }, yi;
}
var bi, Ac;
function zb() {
  if (Ac) return bi;
  Ac = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Fd(), i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), a = i.call(function() {
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
    }, d = (function() {
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
    })(), f = function(h) {
      if (typeof window > "u" || !d)
        return c(h);
      try {
        return c(h);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var m = p !== null && typeof p == "object", v = r.call(p) === "[object Function]", g = n(p), x = m && r.call(p) === "[object String]", w = [];
      if (!m && !v && !g)
        throw new TypeError("Object.keys called on a non-object");
      var A = a && v;
      if (x && p.length > 0 && !t.call(p, 0))
        for (var E = 0; E < p.length; ++E)
          w.push(String(E));
      if (g && p.length > 0)
        for (var C = 0; C < p.length; ++C)
          w.push(String(C));
      else
        for (var k in p)
          !(A && k === "prototype") && t.call(p, k) && w.push(String(k));
      if (o)
        for (var M = f(p), L = 0; L < s.length; ++L)
          !(M && s[L] === "constructor") && t.call(p, s[L]) && w.push(s[L]);
      return w;
    };
  }
  return bi = e, bi;
}
var wi, Cc;
function os() {
  if (Cc) return wi;
  Cc = 1;
  var e = Array.prototype.slice, t = Fd(), r = Object.keys, n = r ? function(a) {
    return r(a);
  } : zb(), i = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var a = (function() {
        var s = Object.keys(arguments);
        return s && s.length === arguments.length;
      })(1, 2);
      a || (Object.keys = function(c) {
        return t(c) ? i(e.call(c)) : i(c);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, wi = n, wi;
}
var Si, Tc;
function Fn() {
  if (Tc) return Si;
  Tc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Si = e, Si;
}
var Ai, Ec;
function as() {
  return Ec || (Ec = 1, Ai = SyntaxError), Ai;
}
var Ci, Rc;
function De() {
  return Rc || (Rc = 1, Ci = TypeError), Ci;
}
var Ti, Ic;
function Hb() {
  return Ic || (Ic = 1, Ti = Object.getOwnPropertyDescriptor), Ti;
}
var Ei, Oc;
function Mt() {
  if (Oc) return Ei;
  Oc = 1;
  var e = /* @__PURE__ */ Hb();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ei = e, Ei;
}
var Ri, Pc;
function ss() {
  if (Pc) return Ri;
  Pc = 1;
  var e = /* @__PURE__ */ Fn(), t = /* @__PURE__ */ as(), r = /* @__PURE__ */ De(), n = /* @__PURE__ */ Mt();
  return Ri = function(o, a, s) {
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
  }, Ri;
}
var Ii, Nc;
function cs() {
  if (Nc) return Ii;
  Nc = 1;
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
  }, Ii = t, Ii;
}
var Oi, kc;
function $t() {
  if (kc) return Oi;
  kc = 1;
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
var Pi = { exports: {} }, Ni, Lc;
function ls() {
  return Lc || (Lc = 1, Ni = Object), Ni;
}
var ki, Mc;
function Ud() {
  return Mc || (Mc = 1, ki = Error), ki;
}
var Li, $c;
function qb() {
  return $c || ($c = 1, Li = EvalError), Li;
}
var Mi, _c;
function Fb() {
  return _c || (_c = 1, Mi = RangeError), Mi;
}
var $i, Dc;
function Ub() {
  return Dc || (Dc = 1, $i = ReferenceError), $i;
}
var _i, Bc;
function Wb() {
  return Bc || (Bc = 1, _i = URIError), _i;
}
var Di, jc;
function Gb() {
  return jc || (jc = 1, Di = Math.abs), Di;
}
var Bi, zc;
function Vb() {
  return zc || (zc = 1, Bi = Math.floor), Bi;
}
var ji, Hc;
function Kb() {
  return Hc || (Hc = 1, ji = Math.max), ji;
}
var zi, qc;
function Xb() {
  return qc || (qc = 1, zi = Math.min), zi;
}
var Hi, Fc;
function Yb() {
  return Fc || (Fc = 1, Hi = Math.pow), Hi;
}
var qi, Uc;
function Jb() {
  return Uc || (Uc = 1, qi = Math.round), qi;
}
var Fi, Wc;
function Zb() {
  return Wc || (Wc = 1, Fi = Number.isNaN || function(t) {
    return t !== t;
  }), Fi;
}
var Ui, Gc;
function Qb() {
  if (Gc) return Ui;
  Gc = 1;
  var e = /* @__PURE__ */ Zb();
  return Ui = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Ui;
}
var Wi, Vc;
function Un() {
  return Vc || (Vc = 1, Wi = function() {
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
var Gi, Kc;
function us() {
  if (Kc) return Gi;
  Kc = 1;
  var e = typeof Symbol < "u" && Symbol, t = Un();
  return Gi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Gi;
}
var Vi, Xc;
function Wd() {
  return Xc || (Xc = 1, Vi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Vi;
}
var Ki, Yc;
function Gd() {
  if (Yc) return Ki;
  Yc = 1;
  var e = /* @__PURE__ */ ls();
  return Ki = e.getPrototypeOf || null, Ki;
}
var Xi, Jc;
function e2() {
  if (Jc) return Xi;
  Jc = 1;
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
  return Xi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var d = o(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var x = u.apply(
          this,
          i(d, arguments)
        );
        return Object(x) === x ? x : this;
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
  }, Xi;
}
var Yi, Zc;
function Pr() {
  if (Zc) return Yi;
  Zc = 1;
  var e = e2();
  return Yi = Function.prototype.bind || e, Yi;
}
var Ji, Qc;
function ds() {
  return Qc || (Qc = 1, Ji = Function.prototype.call), Ji;
}
var Zi, el;
function fs() {
  return el || (el = 1, Zi = Function.prototype.apply), Zi;
}
var Qi, tl;
function t2() {
  return tl || (tl = 1, Qi = typeof Reflect < "u" && Reflect && Reflect.apply), Qi;
}
var eo, rl;
function Vd() {
  if (rl) return eo;
  rl = 1;
  var e = Pr(), t = fs(), r = ds(), n = t2();
  return eo = n || e.call(r, t), eo;
}
var to, nl;
function hs() {
  if (nl) return to;
  nl = 1;
  var e = Pr(), t = /* @__PURE__ */ De(), r = ds(), n = Vd();
  return to = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, to;
}
var ro, il;
function r2() {
  if (il) return ro;
  il = 1;
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
var no, ol;
function ps() {
  if (ol) return no;
  ol = 1;
  var e = Wd(), t = Gd(), r = /* @__PURE__ */ r2();
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
var io, al;
function ms() {
  if (al) return io;
  al = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Pr();
  return io = r.call(e, t), io;
}
var oo, sl;
function ut() {
  if (sl) return oo;
  sl = 1;
  var e, t = /* @__PURE__ */ ls(), r = /* @__PURE__ */ Ud(), n = /* @__PURE__ */ qb(), i = /* @__PURE__ */ Fb(), o = /* @__PURE__ */ Ub(), a = /* @__PURE__ */ as(), s = /* @__PURE__ */ De(), c = /* @__PURE__ */ Wb(), u = /* @__PURE__ */ Gb(), d = /* @__PURE__ */ Vb(), f = /* @__PURE__ */ Kb(), h = /* @__PURE__ */ Xb(), p = /* @__PURE__ */ Yb(), m = /* @__PURE__ */ Jb(), v = /* @__PURE__ */ Qb(), g = Function, x = function(te) {
    try {
      return g('"use strict"; return (' + te + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Mt(), A = /* @__PURE__ */ Fn(), E = function() {
    throw new s();
  }, C = w ? (function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  })() : E, k = us()(), M = ps(), L = Gd(), N = Wd(), _ = fs(), T = ds(), S = {}, P = typeof Uint8Array > "u" || !M ? e : M(Uint8Array), D = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": k && M ? M([][Symbol.iterator]()) : e,
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
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
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
    "%IteratorPrototype%": k && M ? M(M([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !k || !M ? e : M((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !k || !M ? e : M((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": k && M ? M(""[Symbol.iterator]()) : e,
    "%Symbol%": k ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": C,
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
    "%Function.prototype.call%": T,
    "%Function.prototype.apply%": _,
    "%Object.defineProperty%": A,
    "%Object.getPrototypeOf%": L,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": p,
    "%Math.round%": m,
    "%Math.sign%": v,
    "%Reflect.getPrototypeOf%": N
  };
  if (M)
    try {
      null.error;
    } catch (te) {
      var H = M(M(te));
      D["%Error.prototype%"] = H;
    }
  var j = function te(z) {
    var q;
    if (z === "%AsyncFunction%")
      q = x("async function () {}");
    else if (z === "%GeneratorFunction%")
      q = x("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      q = x("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var B = te("%AsyncGeneratorFunction%");
      B && (q = B.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var K = te("%AsyncGenerator%");
      K && M && (q = M(K.prototype));
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
  }, ee = Pr(), re = /* @__PURE__ */ ms(), fe = ee.call(T, Array.prototype.concat), me = ee.call(_, Array.prototype.splice), Ae = ee.call(T, String.prototype.replace), Be = ee.call(T, String.prototype.slice), I = ee.call(T, RegExp.prototype.exec), $ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, U = function(z) {
    var q = Be(z, 0, 1), B = Be(z, -1);
    if (q === "%" && B !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (B === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var K = [];
    return Ae(z, $, function(ve, ye, be, Ce) {
      K[K.length] = be ? Ae(Ce, G, "$1") : ye || ve;
    }), K;
  }, Z = function(z, q) {
    var B = z, K;
    if (re(W, B) && (K = W[B], B = "%" + K[0] + "%"), re(D, B)) {
      var ve = D[B];
      if (ve === S && (ve = j(B)), typeof ve > "u" && !q)
        throw new s("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: K,
        name: B,
        value: ve
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return oo = function(z, q) {
    if (typeof z != "string" || z.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (I(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var B = U(z), K = B.length > 0 ? B[0] : "", ve = Z("%" + K + "%", q), ye = ve.name, be = ve.value, Ce = !1, Ie = ve.alias;
    Ie && (K = Ie[0], me(B, fe([0, 1], Ie)));
    for (var Ye = 1, je = !0; Ye < B.length; Ye += 1) {
      var Oe = B[Ye], Je = Be(Oe, 0, 1), Ze = Be(Oe, -1);
      if ((Je === '"' || Je === "'" || Je === "`" || Ze === '"' || Ze === "'" || Ze === "`") && Je !== Ze)
        throw new a("property names with quotes must have matching quotes");
      if ((Oe === "constructor" || !je) && (Ce = !0), K += "." + Oe, ye = "%" + K + "%", re(D, ye))
        be = D[ye];
      else if (be != null) {
        if (!(Oe in be)) {
          if (!q)
            throw new s("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (w && Ye + 1 >= B.length) {
          var Qe = w(be, Oe);
          je = !!Qe, je && "get" in Qe && !("originalValue" in Qe.get) ? be = Qe.get : be = be[Oe];
        } else
          je = re(be, Oe), be = be[Oe];
        je && !Ce && (D[ye] = be);
      }
    }
    return be;
  }, oo;
}
var ao, cl;
function n2() {
  if (cl) return ao;
  cl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ ss(), r = /* @__PURE__ */ cs()(), n = /* @__PURE__ */ Mt(), i = /* @__PURE__ */ De(), o = e("%Math.floor%");
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
var so, ll;
function i2() {
  if (ll) return so;
  ll = 1;
  var e = Pr(), t = fs(), r = Vd();
  return so = function() {
    return r(e, t, arguments);
  }, so;
}
var ul;
function Xt() {
  return ul || (ul = 1, (function(e) {
    var t = /* @__PURE__ */ n2(), r = /* @__PURE__ */ Fn(), n = hs(), i = i2();
    e.exports = function(a) {
      var s = n(arguments), c = a.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, r ? r(e.exports, "apply", { value: i }) : e.exports.apply = i;
  })(Pi)), Pi.exports;
}
var co, dl;
function Re() {
  if (dl) return co;
  dl = 1;
  var e = /* @__PURE__ */ ut(), t = hs(), r = t([e("%String.prototype.indexOf%")]);
  return co = function(i, o) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, co;
}
var lo, fl;
function Kd() {
  if (fl) return lo;
  fl = 1;
  var e = os(), t = Un()(), r = /* @__PURE__ */ Re(), n = /* @__PURE__ */ ls(), i = r("Array.prototype.push"), o = r("Object.prototype.propertyIsEnumerable"), a = t ? n.getOwnPropertySymbols : null;
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
          var x = v[g];
          o(h, x) && i(p, x);
        }
      for (var w = 0; w < p.length; ++w) {
        var A = p[w];
        if (o(h, A)) {
          var E = h[A];
          d[A] = E;
        }
      }
    }
    return d;
  }, lo;
}
var uo, hl;
function Xd() {
  if (hl) return uo;
  hl = 1;
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
var fo, pl;
function o2() {
  if (pl) return fo;
  pl = 1;
  var e = $t(), t = Xd();
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
var ho, ml;
function a2() {
  if (ml) return ho;
  ml = 1;
  var e = $t(), t = Xt(), r = Kd(), n = Xd(), i = o2(), o = t.apply(n()), a = function(c, u) {
    return o(Object, arguments);
  };
  return e(a, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), ho = a, ho;
}
var po, gl;
function Yd() {
  if (gl) return po;
  gl = 1;
  var e = /* @__PURE__ */ ut(), t = Xt(), r = t(e("String.prototype.indexOf"));
  return po = function(i, o) {
    var a = e(i, !!o);
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(a) : a;
  }, po;
}
var mo, vl;
function s2() {
  if (vl) return mo;
  vl = 1;
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
var go, xl;
function c2() {
  if (xl) return go;
  xl = 1;
  var e = /* @__PURE__ */ ss(), t = /* @__PURE__ */ cs()(), r = s2().functionsHaveConfigurableNames(), n = /* @__PURE__ */ De();
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
  var e = c2(), t = /* @__PURE__ */ De(), r = Object;
  return vo = e(function() {
    if (this == null || this !== r(this))
      throw new t("RegExp.prototype.flags getter called on non-object");
    var i = "";
    return this.hasIndices && (i += "d"), this.global && (i += "g"), this.ignoreCase && (i += "i"), this.multiline && (i += "m"), this.dotAll && (i += "s"), this.unicode && (i += "u"), this.unicodeSets && (i += "v"), this.sticky && (i += "y"), i;
  }, "get flags", !0), vo;
}
var xo, bl;
function Zd() {
  if (bl) return xo;
  bl = 1;
  var e = Jd(), t = $t().supportsDescriptors, r = Object.getOwnPropertyDescriptor;
  return xo = function() {
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
  }, xo;
}
var yo, wl;
function l2() {
  if (wl) return yo;
  wl = 1;
  var e = $t().supportsDescriptors, t = Zd(), r = /* @__PURE__ */ Mt(), n = Object.defineProperty, i = /* @__PURE__ */ Ud(), o = ps(), a = /a/;
  return yo = function() {
    if (!e || !o)
      throw new i("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var c = t(), u = o(a), d = r(u, "flags");
    return (!d || d.get !== c) && n(u, "flags", {
      configurable: !0,
      enumerable: !1,
      get: c
    }), c;
  }, yo;
}
var bo, Sl;
function u2() {
  if (Sl) return bo;
  Sl = 1;
  var e = $t(), t = Xt(), r = Jd(), n = Zd(), i = l2(), o = t(n());
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), bo = o, bo;
}
var rr = { exports: {} }, wo, Al;
function _t() {
  if (Al) return wo;
  Al = 1;
  var e = Un();
  return wo = function() {
    return e() && !!Symbol.toStringTag;
  }, wo;
}
var So, Cl;
function Qd() {
  if (Cl) return So;
  Cl = 1;
  var e = _t()(), t = /* @__PURE__ */ Re(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, i = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, o = (function() {
    return n(arguments);
  })();
  return n.isLegacyArguments = i, So = o ? n : i, So;
}
const d2 = {}, f2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d2
}, Symbol.toStringTag, { value: "Module" })), h2 = /* @__PURE__ */ jb(f2);
var Ao, Tl;
function Wn() {
  if (Tl) return Ao;
  Tl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, p = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, v = Object.prototype.toString, g = Function.prototype.toString, x = String.prototype.match, w = String.prototype.slice, A = String.prototype.replace, E = String.prototype.toUpperCase, C = String.prototype.toLowerCase, k = RegExp.prototype.test, M = Array.prototype.concat, L = Array.prototype.join, N = Array.prototype.slice, _ = Math.floor, T = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, S = Object.getOwnPropertySymbols, P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, D = typeof Symbol == "function" && typeof Symbol.iterator == "object", H = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === D || !0) ? Symbol.toStringTag : null, j = Object.prototype.propertyIsEnumerable, W = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(y) {
    return y.__proto__;
  } : null);
  function ee(y, b) {
    if (y === 1 / 0 || y === -1 / 0 || y !== y || y && y > -1e3 && y < 1e3 || k.call(/e/, b))
      return b;
    var ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof y == "number") {
      var ae = y < 0 ? -_(-y) : _(y);
      if (ae !== y) {
        var se = String(ae), Y = w.call(b, se.length + 1);
        return A.call(se, ie, "$&_") + "." + A.call(A.call(Y, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return A.call(b, ie, "$&_");
  }
  var re = h2, fe = re.custom, me = ve(fe) ? fe : null, Ae = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ao = function y(b, ie, ae, se) {
    var Y = ie || {};
    if (Ce(Y, "quoteStyle") && !Ce(Ae, Y.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ce(Y, "maxStringLength") && (typeof Y.maxStringLength == "number" ? Y.maxStringLength < 0 && Y.maxStringLength !== 1 / 0 : Y.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ht = Ce(Y, "customInspect") ? Y.customInspect : !0;
    if (typeof ht != "boolean" && ht !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ce(Y, "indent") && Y.indent !== null && Y.indent !== "	" && !(parseInt(Y.indent, 10) === Y.indent && Y.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ce(Y, "numericSeparator") && typeof Y.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ct = Y.numericSeparator;
    if (typeof b > "u")
      return "undefined";
    if (b === null)
      return "null";
    if (typeof b == "boolean")
      return b ? "true" : "false";
    if (typeof b == "string")
      return Dt(b, Y);
    if (typeof b == "number") {
      if (b === 0)
        return 1 / 0 / b > 0 ? "0" : "-0";
      var Ne = String(b);
      return Ct ? ee(b, Ne) : Ne;
    }
    if (typeof b == "bigint") {
      var pt = String(b) + "n";
      return Ct ? ee(b, pt) : pt;
    }
    var Kn = typeof Y.depth > "u" ? 5 : Y.depth;
    if (typeof ae > "u" && (ae = 0), ae >= Kn && Kn > 0 && typeof b == "object")
      return U(b) ? "[Array]" : "[Object]";
    var Bt = gf(Y, ae);
    if (typeof se > "u")
      se = [];
    else if (je(se, b) >= 0)
      return "[Circular]";
    function ze(jt, Mr, xf) {
      if (Mr && (se = N.call(se), se.push(Mr)), xf) {
        var Ts = {
          depth: Y.depth
        };
        return Ce(Y, "quoteStyle") && (Ts.quoteStyle = Y.quoteStyle), y(jt, Ts, ae + 1, se);
      }
      return y(jt, Y, ae + 1, se);
    }
    if (typeof b == "function" && !te(b)) {
      var xs = Ye(b), ys = kr(b, ze);
      return "[Function" + (xs ? ": " + xs : " (anonymous)") + "]" + (ys.length > 0 ? " { " + L.call(ys, ", ") + " }" : "");
    }
    if (ve(b)) {
      var bs = D ? A.call(String(b), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(b);
      return typeof b == "object" && !D ? ft(bs) : bs;
    }
    if (dt(b)) {
      for (var Jt = "<" + C.call(String(b.nodeName)), Xn = b.attributes || [], Lr = 0; Lr < Xn.length; Lr++)
        Jt += " " + Xn[Lr].name + "=" + I($(Xn[Lr].value), "double", Y);
      return Jt += ">", b.childNodes && b.childNodes.length && (Jt += "..."), Jt += "</" + C.call(String(b.nodeName)) + ">", Jt;
    }
    if (U(b)) {
      if (b.length === 0)
        return "[]";
      var Yn = kr(b, ze);
      return Bt && !mf(Yn) ? "[" + Vn(Yn, Bt) + "]" : "[ " + L.call(Yn, ", ") + " ]";
    }
    if (z(b)) {
      var Jn = kr(b, ze);
      return !("cause" in Error.prototype) && "cause" in b && !j.call(b, "cause") ? "{ [" + String(b) + "] " + L.call(M.call("[cause]: " + ze(b.cause), Jn), ", ") + " }" : Jn.length === 0 ? "[" + String(b) + "]" : "{ [" + String(b) + "] " + L.call(Jn, ", ") + " }";
    }
    if (typeof b == "object" && ht) {
      if (me && typeof b[me] == "function" && re)
        return re(b, { depth: Kn - ae });
      if (ht !== "symbol" && typeof b.inspect == "function")
        return b.inspect();
    }
    if (Oe(b)) {
      var ws = [];
      return n && n.call(b, function(jt, Mr) {
        ws.push(ze(Mr, b, !0) + " => " + ze(jt, b));
      }), vs("Map", r.call(b), ws, Bt);
    }
    if (Qe(b)) {
      var Ss = [];
      return s && s.call(b, function(jt) {
        Ss.push(ze(jt, b));
      }), vs("Set", a.call(b), Ss, Bt);
    }
    if (Je(b))
      return Gn("WeakMap");
    if (Nr(b))
      return Gn("WeakSet");
    if (Ze(b))
      return Gn("WeakRef");
    if (B(b))
      return ft(ze(Number(b)));
    if (ye(b))
      return ft(ze(T.call(b)));
    if (K(b))
      return ft(m.call(b));
    if (q(b))
      return ft(ze(String(b)));
    if (typeof window < "u" && b === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && b === globalThis || typeof kn < "u" && b === kn)
      return "{ [object globalThis] }";
    if (!Z(b) && !te(b)) {
      var Zn = kr(b, ze), As = W ? W(b) === Object.prototype : b instanceof Object || b.constructor === Object, Qn = b instanceof Object ? "" : "null prototype", Cs = !As && H && Object(b) === b && H in b ? w.call(Ie(b), 8, -1) : Qn ? "Object" : "", vf = As || typeof b.constructor != "function" ? "" : b.constructor.name ? b.constructor.name + " " : "", ei = vf + (Cs || Qn ? "[" + L.call(M.call([], Cs || [], Qn || []), ": ") + "] " : "");
      return Zn.length === 0 ? ei + "{}" : Bt ? ei + "{" + Vn(Zn, Bt) + "}" : ei + "{ " + L.call(Zn, ", ") + " }";
    }
    return String(b);
  };
  function I(y, b, ie) {
    var ae = ie.quoteStyle || b, se = Ae[ae];
    return se + y + se;
  }
  function $(y) {
    return A.call(String(y), /"/g, "&quot;");
  }
  function G(y) {
    return !H || !(typeof y == "object" && (H in y || typeof y[H] < "u"));
  }
  function U(y) {
    return Ie(y) === "[object Array]" && G(y);
  }
  function Z(y) {
    return Ie(y) === "[object Date]" && G(y);
  }
  function te(y) {
    return Ie(y) === "[object RegExp]" && G(y);
  }
  function z(y) {
    return Ie(y) === "[object Error]" && G(y);
  }
  function q(y) {
    return Ie(y) === "[object String]" && G(y);
  }
  function B(y) {
    return Ie(y) === "[object Number]" && G(y);
  }
  function K(y) {
    return Ie(y) === "[object Boolean]" && G(y);
  }
  function ve(y) {
    if (D)
      return y && typeof y == "object" && y instanceof Symbol;
    if (typeof y == "symbol")
      return !0;
    if (!y || typeof y != "object" || !P)
      return !1;
    try {
      return P.call(y), !0;
    } catch {
    }
    return !1;
  }
  function ye(y) {
    if (!y || typeof y != "object" || !T)
      return !1;
    try {
      return T.call(y), !0;
    } catch {
    }
    return !1;
  }
  var be = Object.prototype.hasOwnProperty || function(y) {
    return y in this;
  };
  function Ce(y, b) {
    return be.call(y, b);
  }
  function Ie(y) {
    return v.call(y);
  }
  function Ye(y) {
    if (y.name)
      return y.name;
    var b = x.call(g.call(y), /^function\s*([\w$]+)/);
    return b ? b[1] : null;
  }
  function je(y, b) {
    if (y.indexOf)
      return y.indexOf(b);
    for (var ie = 0, ae = y.length; ie < ae; ie++)
      if (y[ie] === b)
        return ie;
    return -1;
  }
  function Oe(y) {
    if (!r || !y || typeof y != "object")
      return !1;
    try {
      r.call(y);
      try {
        a.call(y);
      } catch {
        return !0;
      }
      return y instanceof Map;
    } catch {
    }
    return !1;
  }
  function Je(y) {
    if (!u || !y || typeof y != "object")
      return !1;
    try {
      u.call(y, u);
      try {
        f.call(y, f);
      } catch {
        return !0;
      }
      return y instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Ze(y) {
    if (!p || !y || typeof y != "object")
      return !1;
    try {
      return p.call(y), !0;
    } catch {
    }
    return !1;
  }
  function Qe(y) {
    if (!a || !y || typeof y != "object")
      return !1;
    try {
      a.call(y);
      try {
        r.call(y);
      } catch {
        return !0;
      }
      return y instanceof Set;
    } catch {
    }
    return !1;
  }
  function Nr(y) {
    if (!f || !y || typeof y != "object")
      return !1;
    try {
      f.call(y, f);
      try {
        u.call(y, u);
      } catch {
        return !0;
      }
      return y instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function dt(y) {
    return !y || typeof y != "object" ? !1 : typeof HTMLElement < "u" && y instanceof HTMLElement ? !0 : typeof y.nodeName == "string" && typeof y.getAttribute == "function";
  }
  function Dt(y, b) {
    if (y.length > b.maxStringLength) {
      var ie = y.length - b.maxStringLength, ae = "... " + ie + " more character" + (ie > 1 ? "s" : "");
      return Dt(w.call(y, 0, b.maxStringLength), b) + ae;
    }
    var se = Be[b.quoteStyle || "single"];
    se.lastIndex = 0;
    var Y = A.call(A.call(y, se, "\\$1"), /[\x00-\x1f]/g, Yt);
    return I(Y, "single", b);
  }
  function Yt(y) {
    var b = y.charCodeAt(0), ie = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[b];
    return ie ? "\\" + ie : "\\x" + (b < 16 ? "0" : "") + E.call(b.toString(16));
  }
  function ft(y) {
    return "Object(" + y + ")";
  }
  function Gn(y) {
    return y + " { ? }";
  }
  function vs(y, b, ie, ae) {
    var se = ae ? Vn(ie, ae) : L.call(ie, ", ");
    return y + " (" + b + ") {" + se + "}";
  }
  function mf(y) {
    for (var b = 0; b < y.length; b++)
      if (je(y[b], `
`) >= 0)
        return !1;
    return !0;
  }
  function gf(y, b) {
    var ie;
    if (y.indent === "	")
      ie = "	";
    else if (typeof y.indent == "number" && y.indent > 0)
      ie = L.call(Array(y.indent + 1), " ");
    else
      return null;
    return {
      base: ie,
      prev: L.call(Array(b + 1), ie)
    };
  }
  function Vn(y, b) {
    if (y.length === 0)
      return "";
    var ie = `
` + b.prev + b.base;
    return ie + L.call(y, "," + ie) + `
` + b.prev;
  }
  function kr(y, b) {
    var ie = U(y), ae = [];
    if (ie) {
      ae.length = y.length;
      for (var se = 0; se < y.length; se++)
        ae[se] = Ce(y, se) ? b(y[se], y) : "";
    }
    var Y = typeof S == "function" ? S(y) : [], ht;
    if (D) {
      ht = {};
      for (var Ct = 0; Ct < Y.length; Ct++)
        ht["$" + Y[Ct]] = Y[Ct];
    }
    for (var Ne in y)
      Ce(y, Ne) && (ie && String(Number(Ne)) === Ne && Ne < y.length || D && ht["$" + Ne] instanceof Symbol || (k.call(/[^\w$]/, Ne) ? ae.push(b(Ne, y) + ": " + b(y[Ne], y)) : ae.push(Ne + ": " + b(y[Ne], y))));
    if (typeof S == "function")
      for (var pt = 0; pt < Y.length; pt++)
        j.call(y, Y[pt]) && ae.push("[" + b(Y[pt]) + "]: " + b(y[Y[pt]], y));
    return ae;
  }
  return Ao;
}
var Co, El;
function p2() {
  if (El) return Co;
  El = 1;
  var e = /* @__PURE__ */ Wn(), t = /* @__PURE__ */ De(), r = function(s, c, u) {
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
var To, Rl;
function ef() {
  if (Rl) return To;
  Rl = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Wn(), n = /* @__PURE__ */ De(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
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
function m2() {
  if (Il) return Eo;
  Il = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Wn(), n = ef(), i = /* @__PURE__ */ De(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
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
var Ro, Ol;
function tf() {
  if (Ol) return Ro;
  Ol = 1;
  var e = /* @__PURE__ */ De(), t = /* @__PURE__ */ Wn(), r = p2(), n = ef(), i = m2(), o = i || n || r;
  return Ro = function() {
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
  }, Ro;
}
var Io, Pl;
function g2() {
  if (Pl) return Io;
  Pl = 1;
  var e = /* @__PURE__ */ ms(), t = tf()(), r = /* @__PURE__ */ De(), n = {
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
  return Object.freeze && Object.freeze(n), Io = n, Io;
}
var Oo, Nl;
function v2() {
  if (Nl) return Oo;
  Nl = 1;
  var e = g2(), t = /* @__PURE__ */ as(), r = typeof StopIteration == "object" ? StopIteration : null;
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
var Po, kl;
function rf() {
  if (kl) return Po;
  kl = 1;
  var e = {}.toString;
  return Po = Array.isArray || function(t) {
    return e.call(t) == "[object Array]";
  }, Po;
}
var No, Ll;
function nf() {
  if (Ll) return No;
  Ll = 1;
  var e = /* @__PURE__ */ Re(), t = e("String.prototype.valueOf"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object String]", o = _t()();
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
var Lo, $l;
function af() {
  if ($l) return Lo;
  $l = 1;
  var e = typeof Map == "function" && Map.prototype ? Map : null, t = typeof Set == "function" && Set.prototype ? Set : null, r;
  t || (r = function(a) {
    return !1;
  });
  var n = e ? Map.prototype.has : null, i = t ? Set.prototype.has : null;
  return !r && !i && (r = function(a) {
    return !1;
  }), Lo = r || function(a) {
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
  }, Lo;
}
var _l;
function x2() {
  if (_l) return rr.exports;
  _l = 1;
  var e = /* @__PURE__ */ Qd(), t = /* @__PURE__ */ v2();
  if (us()() || Un()()) {
    var r = Symbol.iterator;
    rr.exports = function(N) {
      if (N != null && typeof N[r] < "u")
        return N[r]();
      if (e(N))
        return Array.prototype[r].call(N);
    };
  } else {
    var n = rf(), i = nf(), o = /* @__PURE__ */ ut(), a = o("%Map%", !0), s = o("%Set%", !0), c = Yd(), u = c("Array.prototype.push"), d = c("String.prototype.charCodeAt"), f = c("String.prototype.slice"), h = function(N, _) {
      var T = N.length;
      if (_ + 1 >= T)
        return _ + 1;
      var S = d(N, _);
      if (S < 55296 || S > 56319)
        return _ + 1;
      var P = d(N, _ + 1);
      return P < 56320 || P > 57343 ? _ + 1 : _ + 2;
    }, p = function(N) {
      var _ = 0;
      return {
        next: function() {
          var S = _ >= N.length, P;
          return S || (P = N[_], _ += 1), {
            done: S,
            value: P
          };
        }
      };
    }, m = function(N, _) {
      if (n(N) || e(N))
        return p(N);
      if (i(N)) {
        var T = 0;
        return {
          next: function() {
            var P = h(N, T), D = f(N, T, P);
            return T = P, {
              done: P > N.length,
              value: D
            };
          }
        };
      }
      if (_ && typeof N["_es6-shim iterator_"] < "u")
        return N["_es6-shim iterator_"]();
    };
    if (!a && !s)
      rr.exports = function(N) {
        if (N != null)
          return m(N, !0);
      };
    else {
      var v = /* @__PURE__ */ of(), g = /* @__PURE__ */ af(), x = c("Map.prototype.forEach", !0), w = c("Set.prototype.forEach", !0);
      if (typeof process > "u" || !process.versions || !process.versions.node)
        var A = c("Map.prototype.iterator", !0), E = c("Set.prototype.iterator", !0);
      var C = c("Map.prototype.@@iterator", !0) || c("Map.prototype._es6-shim iterator_", !0), k = c("Set.prototype.@@iterator", !0) || c("Set.prototype._es6-shim iterator_", !0), M = function(N) {
        if (v(N)) {
          if (A)
            return t(A(N));
          if (C)
            return C(N);
          if (x) {
            var _ = [];
            return x(N, function(S, P) {
              u(_, [P, S]);
            }), p(_);
          }
        }
        if (g(N)) {
          if (E)
            return t(E(N));
          if (k)
            return k(N);
          if (w) {
            var T = [];
            return w(N, function(S) {
              u(T, S);
            }), p(T);
          }
        }
      };
      rr.exports = function(N) {
        return M(N) || m(N);
      };
    }
  }
  return rr.exports;
}
var Mo, Dl;
function sf() {
  if (Dl) return Mo;
  Dl = 1;
  var e = function(t) {
    return t !== t;
  };
  return Mo = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, Mo;
}
var $o, Bl;
function cf() {
  if (Bl) return $o;
  Bl = 1;
  var e = sf();
  return $o = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, $o;
}
var _o, jl;
function y2() {
  if (jl) return _o;
  jl = 1;
  var e = cf(), t = $t();
  return _o = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, _o;
}
var Do, zl;
function b2() {
  if (zl) return Do;
  zl = 1;
  var e = $t(), t = Xt(), r = sf(), n = cf(), i = y2(), o = t(n(), Object);
  return e(o, {
    getPolyfill: n,
    implementation: r,
    shim: i
  }), Do = o, Do;
}
var Bo, Hl;
function lf() {
  if (Hl) return Bo;
  Hl = 1;
  var e = Xt(), t = /* @__PURE__ */ Re(), r = /* @__PURE__ */ ut(), n = r("%ArrayBuffer%", !0), i = t("ArrayBuffer.prototype.byteLength", !0), o = t("Object.prototype.toString"), a = !!n && !i && new n(0).slice, s = !!a && e(a);
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
var jo, ql;
function w2() {
  if (ql) return jo;
  ql = 1;
  var e = /* @__PURE__ */ Re(), t = e("Date.prototype.getDay"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Date]", o = _t()();
  return jo = function(s) {
    return typeof s != "object" || s === null ? !1 : o ? r(s) : n(s) === i;
  }, jo;
}
var zo, Fl;
function uf() {
  if (Fl) return zo;
  Fl = 1;
  var e = /* @__PURE__ */ Re(), t = _t()(), r = /* @__PURE__ */ ms(), n = /* @__PURE__ */ Mt(), i;
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
var Ho, Ul;
function S2() {
  if (Ul) return Ho;
  Ul = 1;
  var e = /* @__PURE__ */ Re(), t = e("SharedArrayBuffer.prototype.byteLength", !0);
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
var qo, Wl;
function A2() {
  if (Wl) return qo;
  Wl = 1;
  var e = /* @__PURE__ */ Re(), t = e("Number.prototype.toString"), r = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, n = e("Object.prototype.toString"), i = "[object Number]", o = _t()();
  return qo = function(s) {
    return typeof s == "number" ? !0 : !s || typeof s != "object" ? !1 : o ? r(s) : n(s) === i;
  }, qo;
}
var Fo, Gl;
function C2() {
  if (Gl) return Fo;
  Gl = 1;
  var e = /* @__PURE__ */ Re(), t = e("Boolean.prototype.toString"), r = e("Object.prototype.toString"), n = function(s) {
    try {
      return t(s), !0;
    } catch {
      return !1;
    }
  }, i = "[object Boolean]", o = _t()();
  return Fo = function(s) {
    return typeof s == "boolean" ? !0 : s === null || typeof s != "object" ? !1 : o ? n(s) : r(s) === i;
  }, Fo;
}
var Fr = { exports: {} }, Uo, Vl;
function T2() {
  if (Vl) return Uo;
  Vl = 1;
  var e = /* @__PURE__ */ Re(), t = uf(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ De();
  return Uo = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Uo;
}
var Kl;
function E2() {
  if (Kl) return Fr.exports;
  Kl = 1;
  var e = /* @__PURE__ */ Re(), t = e("Object.prototype.toString"), r = us()(), n = /* @__PURE__ */ T2();
  if (r) {
    var i = e("Symbol.prototype.toString"), o = n(/^Symbol\(.*\)$/), a = function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : o(i(c));
    };
    Fr.exports = function(c) {
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
    Fr.exports = function(c) {
      return !1;
    };
  return Fr.exports;
}
var Ur = { exports: {} }, Wo, Xl;
function R2() {
  if (Xl) return Wo;
  Xl = 1;
  var e = typeof BigInt < "u" && BigInt;
  return Wo = function() {
    return typeof e == "function" && typeof BigInt == "function" && typeof e(42) == "bigint" && typeof BigInt(42) == "bigint";
  }, Wo;
}
var Yl;
function I2() {
  if (Yl) return Ur.exports;
  Yl = 1;
  var e = R2()();
  if (e) {
    var t = BigInt.prototype.valueOf, r = function(i) {
      try {
        return t.call(i), !0;
      } catch {
      }
      return !1;
    };
    Ur.exports = function(i) {
      return i === null || typeof i > "u" || typeof i == "boolean" || typeof i == "string" || typeof i == "number" || typeof i == "symbol" || typeof i == "function" ? !1 : typeof i == "bigint" ? !0 : r(i);
    };
  } else
    Ur.exports = function(i) {
      return !1;
    };
  return Ur.exports;
}
var Go, Jl;
function O2() {
  if (Jl) return Go;
  Jl = 1;
  var e = nf(), t = A2(), r = C2(), n = E2(), i = I2();
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
var Vo, Zl;
function P2() {
  if (Zl) return Vo;
  Zl = 1;
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
var Wr = { exports: {} }, Ql;
function N2() {
  if (Ql) return Wr.exports;
  Ql = 1;
  var e = /* @__PURE__ */ ut(), t = /* @__PURE__ */ Re(), r = e("%WeakSet%", !0), n = t("WeakSet.prototype.has", !0);
  if (n) {
    var i = t("WeakMap.prototype.has", !0);
    Wr.exports = function(a) {
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
    Wr.exports = function(a) {
      return !1;
    };
  return Wr.exports;
}
var Ko, eu;
function k2() {
  if (eu) return Ko;
  eu = 1;
  var e = /* @__PURE__ */ of(), t = /* @__PURE__ */ af(), r = P2(), n = /* @__PURE__ */ N2();
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
var Xo, tu;
function L2() {
  if (tu) return Xo;
  tu = 1;
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
      var E = e.call(A);
      return i.test(E);
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
    var x = document.all;
    s.call(x) === s.call(document.all) && (g = function(A) {
      if ((v || !A) && (typeof A > "u" || typeof A == "object"))
        try {
          var E = s.call(A);
          return (E === f || E === h || E === p || E === c) && A("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Xo = t ? function(A) {
    if (g(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    try {
      t(A, null, r);
    } catch (E) {
      if (E !== n)
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
    var E = s.call(A);
    return E !== u && E !== d && !/^\[object HTML/.test(E) ? !1 : a(A);
  }, Xo;
}
var Yo, ru;
function M2() {
  if (ru) return Yo;
  ru = 1;
  var e = L2(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, d) {
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
  return Yo = function(c, u, d) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var f;
    arguments.length >= 3 && (f = d), a(c) ? n(c, u, f) : typeof c == "string" ? i(c, u, f) : o(c, u, f);
  }, Yo;
}
var Jo, nu;
function $2() {
  return nu || (nu = 1, Jo = [
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
var Zo, iu;
function _2() {
  if (iu) return Zo;
  iu = 1;
  var e = /* @__PURE__ */ $2(), t = typeof globalThis > "u" ? kn : globalThis;
  return Zo = function() {
    for (var n = [], i = 0; i < e.length; i++)
      typeof t[e[i]] == "function" && (n[n.length] = e[i]);
    return n;
  }, Zo;
}
var Qo, ou;
function D2() {
  if (ou) return Qo;
  ou = 1;
  var e = M2(), t = /* @__PURE__ */ _2(), r = Xt(), n = /* @__PURE__ */ Re(), i = /* @__PURE__ */ Mt(), o = ps(), a = n("Object.prototype.toString"), s = _t()(), c = typeof globalThis > "u" ? kn : globalThis, u = t(), d = n("String.prototype.slice"), f = n("Array.prototype.indexOf", !0) || function(g, x) {
    for (var w = 0; w < g.length; w += 1)
      if (g[w] === x)
        return w;
    return -1;
  }, h = { __proto__: null };
  s && i && o ? e(u, function(v) {
    var g = new c[v]();
    if (Symbol.toStringTag in g && o) {
      var x = o(g), w = i(x, Symbol.toStringTag);
      if (!w && x) {
        var A = o(x);
        w = i(A, Symbol.toStringTag);
      }
      h["$" + v] = r(w.get);
    }
  }) : e(u, function(v) {
    var g = new c[v](), x = g.slice || g.set;
    x && (h[
      /** @type {`$${import('.').TypedArrayName}`} */
      "$" + v
    ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
    // @ts-expect-error TODO FIXME
    r(x));
  });
  var p = function(g) {
    var x = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, A) {
        if (!x)
          try {
            "$" + w(g) === A && (x = /** @type {import('.').TypedArrayName} */
            d(A, 1));
          } catch {
          }
      }
    ), x;
  }, m = function(g) {
    var x = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      h,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(w, A) {
        if (!x)
          try {
            w(g), x = /** @type {import('.').TypedArrayName} */
            d(A, 1);
          } catch {
          }
      }
    ), x;
  };
  return Qo = function(g) {
    if (!g || typeof g != "object")
      return !1;
    if (!s) {
      var x = d(a(g), 8, -1);
      return f(u, x) > -1 ? x : x !== "Object" ? !1 : m(g);
    }
    return i ? p(g) : null;
  }, Qo;
}
var ea, au;
function B2() {
  if (au) return ea;
  au = 1;
  var e = /* @__PURE__ */ Re(), t = e("ArrayBuffer.prototype.byteLength", !0), r = /* @__PURE__ */ lf();
  return ea = function(i) {
    return r(i) ? t ? t(i) : i.byteLength : NaN;
  }, ea;
}
var ta, su;
function j2() {
  if (su) return ta;
  su = 1;
  var e = a2(), t = Yd(), r = u2(), n = /* @__PURE__ */ ut(), i = x2(), o = tf(), a = b2(), s = /* @__PURE__ */ Qd(), c = rf(), u = /* @__PURE__ */ lf(), d = /* @__PURE__ */ w2(), f = uf(), h = /* @__PURE__ */ S2(), p = os(), m = O2(), v = /* @__PURE__ */ k2(), g = /* @__PURE__ */ D2(), x = /* @__PURE__ */ B2(), w = t("SharedArrayBuffer.prototype.byteLength", !0), A = t("Date.prototype.getTime"), E = Object.getPrototypeOf, C = t("Object.prototype.toString"), k = n("%Set%", !0), M = t("Map.prototype.has", !0), L = t("Map.prototype.get", !0), N = t("Map.prototype.size", !0), _ = t("Set.prototype.add", !0), T = t("Set.prototype.delete", !0), S = t("Set.prototype.has", !0), P = t("Set.prototype.size", !0);
  function D(I, $, G, U) {
    for (var Z = i(I), te; (te = Z.next()) && !te.done; )
      if (re($, te.value, G, U))
        return T(I, te.value), !0;
    return !1;
  }
  function H(I) {
    if (typeof I > "u")
      return null;
    if (typeof I != "object")
      return typeof I == "symbol" ? !1 : typeof I == "string" || typeof I == "number" ? +I == +I : !0;
  }
  function j(I, $, G, U, Z, te) {
    var z = H(G);
    if (z != null)
      return z;
    var q = L($, z), B = e({}, Z, { strict: !1 });
    return typeof q > "u" && !M($, z) || !re(U, q, B, te) ? !1 : !M(I, z) && re(U, q, B, te);
  }
  function W(I, $, G) {
    var U = H(G);
    return U ?? (S($, U) && !S(I, U));
  }
  function ee(I, $, G, U, Z, te) {
    for (var z = i(I), q, B; (q = z.next()) && !q.done; )
      if (B = q.value, // eslint-disable-next-line no-use-before-define
      re(G, B, Z, te) && re(U, L($, B), Z, te))
        return T(I, B), !0;
    return !1;
  }
  function re(I, $, G, U) {
    var Z = G || {};
    if (Z.strict ? a(I, $) : I === $)
      return !0;
    var te = m(I), z = m($);
    if (te !== z)
      return !1;
    if (!I || !$ || typeof I != "object" && typeof $ != "object")
      return Z.strict ? a(I, $) : I == $;
    var q = U.has(I), B = U.has($), K;
    if (q && B) {
      if (U.get(I) === U.get($))
        return !0;
    } else
      K = {};
    return q || U.set(I, K), B || U.set($, K), Be(I, $, Z, U);
  }
  function fe(I) {
    return !I || typeof I != "object" || typeof I.length != "number" || typeof I.copy != "function" || typeof I.slice != "function" || I.length > 0 && typeof I[0] != "number" ? !1 : !!(I.constructor && I.constructor.isBuffer && I.constructor.isBuffer(I));
  }
  function me(I, $, G, U) {
    if (P(I) !== P($))
      return !1;
    for (var Z = i(I), te = i($), z, q, B; (z = Z.next()) && !z.done; )
      if (z.value && typeof z.value == "object")
        B || (B = new k()), _(B, z.value);
      else if (!S($, z.value)) {
        if (G.strict || !W(I, $, z.value))
          return !1;
        B || (B = new k()), _(B, z.value);
      }
    if (B) {
      for (; (q = te.next()) && !q.done; )
        if (q.value && typeof q.value == "object") {
          if (!D(B, q.value, G.strict, U))
            return !1;
        } else if (!G.strict && !S(I, q.value) && !D(B, q.value, G.strict, U))
          return !1;
      return P(B) === 0;
    }
    return !0;
  }
  function Ae(I, $, G, U) {
    if (N(I) !== N($))
      return !1;
    for (var Z = i(I), te = i($), z, q, B, K, ve, ye; (z = Z.next()) && !z.done; )
      if (K = z.value[0], ve = z.value[1], K && typeof K == "object")
        B || (B = new k()), _(B, K);
      else if (ye = L($, K), typeof ye > "u" && !M($, K) || !re(ve, ye, G, U)) {
        if (G.strict || !j(I, $, K, ve, G, U))
          return !1;
        B || (B = new k()), _(B, K);
      }
    if (B) {
      for (; (q = te.next()) && !q.done; )
        if (K = q.value[0], ye = q.value[1], K && typeof K == "object") {
          if (!ee(B, I, K, ye, G, U))
            return !1;
        } else if (!G.strict && (!I.has(K) || !re(L(I, K), ye, G, U)) && !ee(B, I, K, ye, e({}, G, { strict: !1 }), U))
          return !1;
      return P(B) === 0;
    }
    return !0;
  }
  function Be(I, $, G, U) {
    var Z, te;
    if (typeof I != typeof $ || I == null || $ == null || C(I) !== C($) || s(I) !== s($))
      return !1;
    var z = c(I), q = c($);
    if (z !== q)
      return !1;
    var B = I instanceof Error, K = $ instanceof Error;
    if (B !== K || (B || K) && (I.name !== $.name || I.message !== $.message))
      return !1;
    var ve = f(I), ye = f($);
    if (ve !== ye || (ve || ye) && (I.source !== $.source || r(I) !== r($)))
      return !1;
    var be = d(I), Ce = d($);
    if (be !== Ce || (be || Ce) && A(I) !== A($) || G.strict && E && E(I) !== E($))
      return !1;
    var Ie = g(I), Ye = g($);
    if (Ie !== Ye)
      return !1;
    if (Ie || Ye) {
      if (I.length !== $.length)
        return !1;
      for (Z = 0; Z < I.length; Z++)
        if (I[Z] !== $[Z])
          return !1;
      return !0;
    }
    var je = fe(I), Oe = fe($);
    if (je !== Oe)
      return !1;
    if (je || Oe) {
      if (I.length !== $.length)
        return !1;
      for (Z = 0; Z < I.length; Z++)
        if (I[Z] !== $[Z])
          return !1;
      return !0;
    }
    var Je = u(I), Ze = u($);
    if (Je !== Ze)
      return !1;
    if (Je || Ze)
      return x(I) !== x($) ? !1 : typeof Uint8Array == "function" && re(new Uint8Array(I), new Uint8Array($), G, U);
    var Qe = h(I), Nr = h($);
    if (Qe !== Nr)
      return !1;
    if (Qe || Nr)
      return w(I) !== w($) ? !1 : typeof Uint8Array == "function" && re(new Uint8Array(I), new Uint8Array($), G, U);
    if (typeof I != typeof $)
      return !1;
    var dt = p(I), Dt = p($);
    if (dt.length !== Dt.length)
      return !1;
    for (dt.sort(), Dt.sort(), Z = dt.length - 1; Z >= 0; Z--)
      if (dt[Z] != Dt[Z])
        return !1;
    for (Z = dt.length - 1; Z >= 0; Z--)
      if (te = dt[Z], !re(I[te], $[te], G, U))
        return !1;
    var Yt = v(I), ft = v($);
    return Yt !== ft ? !1 : Yt === "Set" || ft === "Set" ? me(I, $, G, U) : Yt === "Map" ? Ae(I, $, G, U) : !0;
  }
  return ta = function($, G, U) {
    return re($, G, U, o());
  }, ta;
}
var z2 = j2();
const H2 = /* @__PURE__ */ Bb(z2);
function q2(e) {
  return e;
}
function F2(e, t, r, n) {
  const i = q2, [o, a] = J(i(r)), s = He(o);
  return ge(() => {
    const c = () => {
      const u = { ...r, ...e.getAttributes(t) };
      Object.keys(u).forEach((f) => {
        (u[f] === null || u[f] === void 0) && (u[f] = r ? r[f] : null);
      });
      const d = i(u);
      H2(s.current, d) || (a(d), s.current = d);
    };
    return e.on("selectionUpdate", c), e.on("transaction", c), () => {
      e.off("selectionUpdate", c), e.off("transaction", c);
    };
  }, [e, r, t, i]), o;
}
function U2({ editor: e }) {
  const { t } = Se(), { width: r, height: n, src: i } = F2(e, Ht.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, a] = J(!1), [s, c] = J(""), u = oe(() => {
    a(!1);
  }, [a]);
  ge(() => {
    o && c(i);
  }, [o, i]);
  const d = oe(() => {
    const g = qd(s);
    e.chain().updateAttributes(Ht.name, {
      src: (g == null ? void 0 : g.src) || s
    }).setNodeSelection(e.state.selection.from).focus().run(), a(!1);
  }, [e, s, a]), f = oe(() => {
    window.open(i, "_blank");
  }, [i]), h = oe(() => {
    a(!0);
  }, [a]), p = oe(
    (g) => {
      e.chain().updateAttributes(Ht.name, g).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = oe(() => e.isActive(Ht.name) && !i, [e, i]), v = oe(() => Id(Ht.name, e), [e]);
  return /* @__PURE__ */ R(pe, { children: [
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
        children: /* @__PURE__ */ R("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: [
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
            mb,
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
    /* @__PURE__ */ R(
      jn,
      {
        onOpenChange: a,
        open: o,
        children: [
          /* @__PURE__ */ l(zn, {}),
          /* @__PURE__ */ R(Er, { children: [
            /* @__PURE__ */ l(wd, { children: /* @__PURE__ */ l(Rr, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ l(
              ke,
              {
                autoFocus: !0,
                onInput: (g) => c(g.target.value),
                placeholder: "Enter link",
                type: "url",
                value: s
              }
            ),
            /* @__PURE__ */ R(Za, { children: [
              /* @__PURE__ */ l(Te, { onClick: u, children: "Cancel" }),
              /* @__PURE__ */ l(Te, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function W2({ editor: e, disabled: t, bubbleMenu: r }) {
  const n = e.extensionManager.extensions.map((o) => o.name), i = () => {
    var o, a, s, c, u, d, f, h, p, m, v, g;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ l(
        Jy,
        {
          editor: e
        },
        "columns"
      ) : null,
      n.includes("table") && !((a = r == null ? void 0 : r.tableConfig) != null && a.hidden) ? /* @__PURE__ */ l(
        Mx,
        {
          actions: (s = r == null ? void 0 : r.tableConfig) == null ? void 0 : s.actions,
          editor: e,
          hiddenActions: (c = r == null ? void 0 : r.tableConfig) == null ? void 0 : c.hiddenActions
        },
        "table"
      ) : null,
      n.includes("link") && !((u = r == null ? void 0 : r.linkConfig) != null && u.hidden) ? /* @__PURE__ */ l(
        ly,
        {
          disabled: t,
          editor: e
        },
        "link"
      ) : null,
      n.includes(br.name) && !((d = r == null ? void 0 : r.imageConfig) != null && d.hidden) ? /* @__PURE__ */ l(
        Uy,
        {
          disabled: t,
          editor: e
        },
        "image"
      ) : null,
      n.includes(Td.name) && !((f = r == null ? void 0 : r.imageGifConfig) != null && f.hidden) ? /* @__PURE__ */ l(
        Wy,
        {
          disabled: t,
          editor: e
        },
        "imageGif"
      ) : null,
      n.includes("video") && !((h = r == null ? void 0 : r.videoConfig) != null && h.hidden) ? /* @__PURE__ */ l(
        Gy,
        {
          disabled: t,
          editor: e
        },
        "video"
      ) : null,
      n.includes("iframe") && !((p = r == null ? void 0 : r.iframeConfig) != null && p.hidden) ? /* @__PURE__ */ l(
        U2,
        {
          disabled: t,
          editor: e
        },
        "iframe"
      ) : null,
      (m = r == null ? void 0 : r.floatingMenuConfig) != null && m.hidden ? null : /* @__PURE__ */ l(
        ox,
        {
          disabled: t,
          editor: e,
          hidePlusIcon: (v = r == null ? void 0 : r.floatingMenuConfig) == null ? void 0 : v.hidePlusIcon
        },
        "content"
      ),
      (g = r == null ? void 0 : r.textConfig) != null && g.hidden ? null : /* @__PURE__ */ l(
        cx,
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
function cu() {
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function G2(e) {
  const { t } = Se(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: i,
    setSelectedColor: o,
    onChange: a,
    colors: s = Mf
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
  return /* @__PURE__ */ R(Ir, { modal: !0, children: [
    /* @__PURE__ */ l(
      Or,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: e == null ? void 0 : e.children
      }
    ),
    /* @__PURE__ */ l(
      Vt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ R(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => h(void 0),
              children: [
                /* @__PURE__ */ l(cu, {}),
                /* @__PURE__ */ l("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ R(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                h(void 0);
              },
              children: [
                /* @__PURE__ */ l(cu, {}),
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
          /* @__PURE__ */ R("div", { children: [
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
          /* @__PURE__ */ l(V2, { setColor: h })
        ] })
      }
    )
  ] });
}
function V2({ setColor: e }) {
  const [t, r] = J("#000000"), [n, i] = J(!1), { t: o } = Se();
  return ge(() => () => {
    i(!1);
  }, []), /* @__PURE__ */ R(Ir, { open: n, children: [
    /* @__PURE__ */ l(Or, { asChild: !0, children: /* @__PURE__ */ R(
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
    /* @__PURE__ */ R(Vt, { children: [
      /* @__PURE__ */ R("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ l(
          Ep,
          {
            color: t,
            onChange: r
          }
        ),
        /* @__PURE__ */ l(
          ke,
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
      /* @__PURE__ */ l(Ge, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ l(
        Te,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), e(t), i(!1);
          },
          children: /* @__PURE__ */ l(gu, { size: 16 })
        }
      )
    ] })
  ] });
}
function K2({ editor: e, disabled: t, toolbar: r }) {
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
      if (!h || !Dy(h) || !v)
        continue;
      const g = h({
        editor: e,
        extension: f,
        t: n
      });
      if (Array.isArray(g)) {
        const x = g.map((w, A) => ({
          button: w,
          divider: A === g.length - 1 ? p : !1,
          spacer: A === 0 ? m : !1,
          type: f.type,
          name: f.name
        }));
        d = [...d, ...x];
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
    return /* @__PURE__ */ R("div", { className: "richtext-flex richtext-items-center", children: [
      (c == null ? void 0 : c.spacer) && /* @__PURE__ */ l(Ge, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ l(
        d,
        {
          ...c.button.componentProps,
          disabled: t || ((h = (f = c == null ? void 0 : c.button) == null ? void 0 : f.componentProps) == null ? void 0 : h.disabled)
        }
      ),
      (c == null ? void 0 : c.divider) && /* @__PURE__ */ l(Ge, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${u}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: e, disabled: t || !1 }, o, s, a) : a(s);
}
function X2({ editor: e, extensions: t }) {
  const { t: r } = Se(), n = we(() => {
    var i, o, a;
    return (a = (o = (i = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : i.options) == null ? void 0 : o.characterCount) == null ? void 0 : a.limit;
  }, [t]);
  return n ? /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ R("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ l("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ R("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function lu() {
  const { toasts: e } = is();
  return /* @__PURE__ */ R(ob, { children: [
    e.map(({ id: t, title: r, description: n, action: i, ...o }) => /* @__PURE__ */ R(
      Md,
      {
        ...o,
        children: [
          /* @__PURE__ */ R("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ l(_d, { children: r }),
            n && /* @__PURE__ */ l(Dd, { children: n })
          ] }),
          i,
          /* @__PURE__ */ l($d, {})
        ]
      },
      t
    )),
    /* @__PURE__ */ l(Ld, {})
  ] });
}
const Y2 = `
.reactjs-tiptap-editor,
.richtext-dialog-content {
  color: hsl(var(--richtext-foreground));

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
  }

  button, input {
    cursor: pointer;
  }
}
`, J2 = Tf(({ children: e, id: t }) => {
  const [, r] = Ad((a) => a.value), [, n] = Cd((a) => a.value), i = (a) => {
    r({
      value: a.detail
    });
  }, o = (a) => {
    n({
      value: a.detail
    });
  };
  return ge(() => {
    const a = Pn(It.EDIT(t), i), s = Pn(It.UPDATE_THEME(t), o);
    return () => {
      a(), s();
    };
  }, []), /* @__PURE__ */ l(pe, { children: e });
});
function uu({ children: e, id: t }) {
  return /* @__PURE__ */ l(xy, { children: /* @__PURE__ */ l(yy, { children: /* @__PURE__ */ l(J2, { id: t, children: e }) }) });
}
function Ow() {
  const [e] = Cd((t) => t.value);
  return e;
}
const Z2 = {
  setTheme: (e, t) => {
    Qa(It.UPDATE_THEME(e), t);
  }
}, du = "data-rc-order", fu = "data-rc-priority", Q2 = "rc-util-key", Ia = /* @__PURE__ */ new Map();
function ew(e, t) {
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
  return e ? e.startsWith("data-") ? e : `data-${e}` : Q2;
}
function gs(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function tw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ff(e) {
  return [...(Ia.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function hf(e, t = {}) {
  const { csp: r, prepend: n, priority: i = 0 } = t, o = tw(n), a = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(du, o), a && i && s.setAttribute(fu, `${i}`), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  const c = gs(t), { firstChild: u } = c;
  if (n) {
    if (a) {
      const d = ff(c).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(du)))
          return !1;
        const h = Number(f.getAttribute(fu) || 0);
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
  const r = gs(t);
  return ff(r).find((n) => n.getAttribute(df(t)) === e);
}
function rw(e, t = {}) {
  const r = pf(e, t);
  r && r.remove();
}
function nw(e, t) {
  const r = Ia.get(e);
  if (!r || !ew(document, r)) {
    const n = hf("", t), { parentNode: i } = n;
    Ia.set(e, i), n.remove();
  }
}
function iw(e, t, r = {}) {
  var a, s, c;
  const n = gs(r);
  nw(n, r);
  const i = pf(t, r);
  if (i)
    return (a = r.csp) != null && a.nonce && i.nonce !== ((s = r.csp) == null ? void 0 : s.nonce) && (i.nonce = (c = r.csp) == null ? void 0 : c.nonce), i.innerHTML !== e && (i.innerHTML = e), i;
  const o = hf(e, r);
  return o.setAttribute(df(r), t), o;
}
function ow(e, t) {
  const { content: r, extensions: n, useEditorOptions: i = {}, renderToolbar: o, renderHeader: a } = e, s = Rf(), c = we(() => {
    const v = D1(n, n, "name");
    return [...n.map((x) => {
      const w = n.find((A) => A.name === x.name);
      return w ? x.configure(w.options) : x;
    }), ...v].map((x, w) => x.configure({ sort: w }));
  }, [n]), u = vr((v) => {
    var x;
    const g = f(v, e.output);
    (x = e == null ? void 0 : e.onChangeContent) == null || x.call(e, g);
  }, $f), d = Pf({
    extensions: c,
    content: r,
    immediatelyRender: (e == null ? void 0 : e.immediatelyRender) || !1,
    onUpdate: ({ editor: v }) => {
      u && u(v);
    },
    ...i
  });
  If(t, () => ({
    editor: d
  })), ge(() => {
    document.documentElement.classList.toggle("dark", e.dark), Z2.setTheme(s, e.dark ? "dark" : "light");
  }, [e.dark]), ge(() => {
    d == null || d.setEditable(!(e != null && e.disabled)), Mb.setDisable(s, !(e != null && e.disabled));
  }, [d, e == null ? void 0 : e.disabled]), ge(() => ((e == null ? void 0 : e.resetCSS) !== !1 && iw(Y2, "react-tiptap-reset"), () => {
    rw("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function f(v, g) {
    return e != null && e.removeDefaultWrapper ? g === "html" ? v.isEmpty ? "" : v.getHTML() : g === "json" ? v.isEmpty ? {} : v.getJSON() : g === "text" ? v.isEmpty ? "" : v.getText() : "" : g === "html" ? v.getHTML() : g === "json" ? v.getJSON() : g === "text" ? v.getText() : "";
  }
  Of(() => {
    d && (d.id = s);
  }, [s, d]), ge(() => () => {
    var v;
    (v = d == null ? void 0 : d.destroy) == null || v.call(d);
  }, []);
  const h = jy(d, "characterCount");
  if (!d)
    return /* @__PURE__ */ l(pe, {});
  const p = !(e != null && e.hideToolbar) && /* @__PURE__ */ l(
    K2,
    {
      disabled: !!(e != null && e.disabled),
      editor: d,
      toolbar: e.toolbar
    }
  ), m = /* @__PURE__ */ R(pe, { children: [
    a && a(),
    /* @__PURE__ */ l(
      Nf,
      {
        className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`,
        editor: d
      }
    ),
    h && /* @__PURE__ */ l(
      X2,
      {
        editor: d,
        extensions: n
      }
    ),
    !(e != null && e.hideBubble) && /* @__PURE__ */ l(
      W2,
      {
        bubbleMenu: e == null ? void 0 : e.bubbleMenu,
        disabled: e == null ? void 0 : e.disabled,
        editor: d
      }
    )
  ] });
  return o && p ? /* @__PURE__ */ R("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ l(uu, { id: s, children: /* @__PURE__ */ R(yc, { delayDuration: 0, disableHoverableContent: !0, children: [
      o(p),
      /* @__PURE__ */ l("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ l("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: m }) })
    ] }) }),
    /* @__PURE__ */ l(lu, {})
  ] }) : /* @__PURE__ */ R("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ l(uu, { id: s, children: /* @__PURE__ */ l(yc, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ l("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ R("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
      p,
      m
    ] }) }) }) }),
    /* @__PURE__ */ l(lu, {})
  ] });
}
const Pw = Ef(ow);
export {
  Sw as $,
  F as A,
  Te as B,
  G2 as C,
  Zy as D,
  It as E,
  Za as F,
  my as G,
  Lx as H,
  ga as I,
  vr as J,
  Ew as K,
  ot as L,
  mx as M,
  yd as N,
  F2 as O,
  Ir as P,
  Ow as Q,
  br as R,
  Nd as S,
  jd as T,
  by as U,
  Ed as V,
  Tw as W,
  Tx as X,
  Cx as Y,
  Lb as Z,
  Aw as _,
  zd as a,
  Cw as a0,
  yw as a1,
  Ge as a2,
  Id as a3,
  mb as a4,
  bw as a5,
  Rd as a6,
  Nn as a7,
  Pw as a8,
  jb as a9,
  kn as aa,
  Bb as ab,
  is as ac,
  jy as ad,
  sy as ae,
  Td as af,
  Yy as ag,
  Iw as ah,
  Ht as ai,
  ns as b,
  ww as c,
  Q as d,
  Qy as e,
  Od as f,
  zv as g,
  eb as h,
  cd as i,
  Rw as j,
  xe as k,
  Pn as l,
  Or as m,
  Vt as n,
  ke as o,
  H2 as p,
  Qa as q,
  Bd as r,
  jv as s,
  Dn as t,
  Pd as u,
  nb as v,
  jn as w,
  zn as x,
  Er as y,
  Rr as z
};

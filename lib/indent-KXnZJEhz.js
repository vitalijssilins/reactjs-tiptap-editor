import { T as m, A as d, i as l } from "./index-sel2RZJw.js";
var x = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(x || {});
function y(e, r, i) {
  return e < r ? r : e > i ? i : e;
}
function A(e, r, i, n) {
  const { doc: o, selection: s } = e;
  if (!o || !s || !(s instanceof m || s instanceof d))
    return e;
  const { from: t, to: c } = s;
  return o.nodesBetween(t, c, (u, a) => {
    const f = u.type;
    return i.includes(f.name) ? (e = k(e, a, r), !1) : !l(u.type.name, n.extensionManager.extensions);
  }), e;
}
function k(e, r, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(r);
  if (!n)
    return e;
  const t = y((n.attrs.indent || 0) + i, 0, 7);
  if (t === n.attrs.indent)
    return e;
  const c = {
    ...n.attrs,
    indent: t
  };
  return e.setNodeMarkup(r, n.type, c, n.marks);
}
function S({ delta: e, types: r }) {
  return ({ state: i, dispatch: n, editor: o }) => {
    const { selection: s } = i;
    let { tr: t } = i;
    return t = t.setSelection(s), t = A(t, e, r, o), t.docChanged ? (n && n(t), !0) : !1;
  };
}
export {
  x as I,
  S as c,
  k as s
};

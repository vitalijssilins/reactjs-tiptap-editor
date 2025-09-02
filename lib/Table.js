import { a as de, S as N, G as Pe, H as Oe, T as E, I as T, J as H, P as ke, D as oe, b as ne, j as Ie, K as Fe, N as J, L as je, O as Ve, m as U, Q as Ke, E as Xe } from "./index-sel2RZJw.js";
import { jsxs as Q, jsx as k } from "react/jsx-runtime";
import { A as Ge } from "./ActionButton-D15ZSL0z.js";
import { useState as ee } from "react";
import { T as O, i as I, j as F } from "./index-oWDQeNNi.js";
import { P as qe, a as Je, b as Ue } from "./popover-B8VvcibZ.js";
var le, re;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  le = (e) => t.get(e), re = (e, o) => (t.set(e, o), o);
} else {
  const t = [];
  let o = 0;
  le = (n) => {
    for (let l = 0; l < t.length; l += 2)
      if (t[l] == n) return t[l + 1];
  }, re = (n, l) => (o == 10 && (o = 0), t[o++] = n, t[o++] = l);
}
var C = class {
  constructor(t, e, o, n) {
    this.width = t, this.height = e, this.map = o, this.problems = n;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const o = this.map[e];
      if (o != t) continue;
      const n = e % this.width, l = e / this.width | 0;
      let r = n + 1, s = l + 1;
      for (let i = 1; r < this.width && this.map[e + i] == o; i++)
        r++;
      for (let i = 1; s < this.height && this.map[e + this.width * i] == o; i++)
        s++;
      return { left: n, top: l, right: r, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, o) {
    const { left: n, right: l, top: r, bottom: s } = this.findCell(t);
    return e == "horiz" ? (o < 0 ? n == 0 : l == this.width) ? null : this.map[r * this.width + (o < 0 ? n - 1 : l)] : (o < 0 ? r == 0 : s == this.height) ? null : this.map[n + this.width * (o < 0 ? r - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: o,
      right: n,
      top: l,
      bottom: r
    } = this.findCell(t), {
      left: s,
      right: i,
      top: c,
      bottom: a
    } = this.findCell(e);
    return {
      left: Math.min(o, s),
      top: Math.min(l, c),
      right: Math.max(n, i),
      bottom: Math.max(r, a)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], o = {};
    for (let n = t.top; n < t.bottom; n++)
      for (let l = t.left; l < t.right; l++) {
        const r = n * this.width + l, s = this.map[r];
        o[s] || (o[s] = !0, !(l == t.left && l && this.map[r - 1] == s || n == t.top && n && this.map[r - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, o) {
    for (let n = 0, l = 0; ; n++) {
      const r = l + o.child(n).nodeSize;
      if (n == t) {
        let s = e + t * this.width;
        const i = (t + 1) * this.width;
        for (; s < i && this.map[s] < l; ) s++;
        return s == i ? r - 1 : this.map[s];
      }
      l = r;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return le(t) || re(t, Ze(t));
  }
};
function Ze(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = Ye(t), o = t.childCount, n = [];
  let l = 0, r = null;
  const s = [];
  for (let a = 0, u = e * o; a < u; a++) n[a] = 0;
  for (let a = 0, u = 0; a < o; a++) {
    const d = t.child(a);
    u++;
    for (let p = 0; ; p++) {
      for (; l < n.length && n[l] != 0; ) l++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: g, rowspan: w, colwidth: A } = m.attrs;
      for (let M = 0; M < w; M++) {
        if (M + a >= o) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: w - M
          });
          break;
        }
        const $ = l + M * e;
        for (let L = 0; L < g; L++) {
          n[$ + L] == 0 ? n[$ + L] = u : (r || (r = [])).push({
            type: "collision",
            row: a,
            pos: u,
            n: g - L
          });
          const P = A && A[L];
          if (P) {
            const W = ($ + L) % e * 2, Y = s[W];
            Y == null || Y != P && s[W + 1] == 1 ? (s[W] = P, s[W + 1] = 1) : Y == P && s[W + 1]++;
          }
        }
      }
      l += g, u += m.nodeSize;
    }
    const f = (a + 1) * e;
    let h = 0;
    for (; l < f; ) n[l++] == 0 && h++;
    h && (r || (r = [])).push({ type: "missing", row: a, n: h }), u++;
  }
  (e === 0 || o === 0) && (r || (r = [])).push({ type: "zero_sized" });
  const i = new C(e, o, n, r);
  let c = !1;
  for (let a = 0; !c && a < s.length; a += 2)
    s[a] != null && s[a + 1] < o && (c = !0);
  return c && Qe(i, s, t), i;
}
function Ye(t) {
  let e = -1, o = !1;
  for (let n = 0; n < t.childCount; n++) {
    const l = t.child(n);
    let r = 0;
    if (o)
      for (let s = 0; s < n; s++) {
        const i = t.child(s);
        for (let c = 0; c < i.childCount; c++) {
          const a = i.child(c);
          s + a.attrs.rowspan > n && (r += a.attrs.colspan);
        }
      }
    for (let s = 0; s < l.childCount; s++) {
      const i = l.child(s);
      r += i.attrs.colspan, i.attrs.rowspan > 1 && (o = !0);
    }
    e == -1 ? e = r : e != r && (e = Math.max(e, r));
  }
  return e;
}
function Qe(t, e, o) {
  t.problems || (t.problems = []);
  const n = {};
  for (let l = 0; l < t.map.length; l++) {
    const r = t.map[l];
    if (n[r]) continue;
    n[r] = !0;
    const s = o.nodeAt(r);
    if (!s)
      throw new RangeError(`No cell with offset ${r} found`);
    let i = null;
    const c = s.attrs;
    for (let a = 0; a < c.colspan; a++) {
      const u = (l + a) % t.width, d = e[u * 2];
      d != null && (!c.colwidth || c.colwidth[a] != d) && ((i || (i = et(c)))[a] = d);
    }
    i && t.problems.unshift({
      type: "colwidth mismatch",
      pos: r,
      colwidth: i
    });
  }
}
function et(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let o = 0; o < t.colspan; o++) e.push(0);
  return e;
}
function y(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const o in t.nodes) {
      const n = t.nodes[o], l = n.spec.tableRole;
      l && (e[l] = n);
    }
  }
  return e;
}
var z = new de("selectingCells");
function D(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function tt(t) {
  for (let e = t.depth; e > 0; e--) {
    const o = t.node(e).type.spec.tableRole;
    if (o === "cell" || o === "header_cell") return t.node(e);
  }
  return null;
}
function x(t) {
  const e = t.selection.$head;
  for (let o = e.depth; o > 0; o--)
    if (e.node(o).type.spec.tableRole == "row") return !0;
  return !1;
}
function Z(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const o = D(e.$head) || ot(e.$head);
  if (o)
    return o;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function ot(t) {
  for (let e = t.nodeAfter, o = t.pos; e; e = e.firstChild, o++) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell") return t.doc.resolve(o);
  }
  for (let e = t.nodeBefore, o = t.pos; e; e = e.lastChild, o--) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell")
      return t.doc.resolve(o - e.nodeSize);
  }
}
function se(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function nt(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ue(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function ze(t, e, o) {
  const n = t.node(-1), l = C.get(n), r = t.start(-1), s = l.nextCell(t.pos - r, e, o);
  return s == null ? null : t.node(0).resolve(r + s);
}
function B(t, e, o = 1) {
  const n = { ...t, colspan: t.colspan - o };
  return n.colwidth && (n.colwidth = n.colwidth.slice(), n.colwidth.splice(e, o), n.colwidth.some((l) => l > 0) || (n.colwidth = null)), n;
}
function Ee(t, e, o = 1) {
  const n = { ...t, colspan: t.colspan + o };
  if (n.colwidth) {
    n.colwidth = n.colwidth.slice();
    for (let l = 0; l < o; l++) n.colwidth.splice(e, 0, 0);
  }
  return n;
}
function lt(t, e, o) {
  const n = y(e.type.schema).header_cell;
  for (let l = 0; l < t.height; l++)
    if (e.nodeAt(t.map[o + l * t.width]).type != n)
      return !1;
  return !0;
}
var b = class v extends N {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, o = e) {
    const n = e.node(-1), l = C.get(n), r = e.start(-1), s = l.rectBetween(
      e.pos - r,
      o.pos - r
    ), i = e.node(0), c = l.cellsInRect(s).filter((u) => u != o.pos - r);
    c.unshift(o.pos - r);
    const a = c.map((u) => {
      const d = n.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = r + u + 1;
      return new Oe(
        i.resolve(f),
        i.resolve(f + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = e, this.$headCell = o;
  }
  map(e, o) {
    const n = e.resolve(o.map(this.$anchorCell.pos)), l = e.resolve(o.map(this.$headCell.pos));
    if (se(n) && se(l) && ue(n, l)) {
      const r = this.$anchorCell.node(-1) != n.node(-1);
      return r && this.isRowSelection() ? v.rowSelection(n, l) : r && this.isColSelection() ? v.colSelection(n, l) : new v(n, l);
    }
    return E.between(n, l);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), o = C.get(e), n = this.$anchorCell.start(-1), l = o.rectBetween(
      this.$anchorCell.pos - n,
      this.$headCell.pos - n
    ), r = {}, s = [];
    for (let c = l.top; c < l.bottom; c++) {
      const a = [];
      for (let u = c * o.width + l.left, d = l.left; d < l.right; d++, u++) {
        const f = o.map[u];
        if (r[f]) continue;
        r[f] = !0;
        const h = o.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = l.left - h.left, g = h.right - l.right;
        if (m > 0 || g > 0) {
          let w = p.attrs;
          if (m > 0 && (w = B(w, 0, m)), g > 0 && (w = B(
            w,
            w.colspan - g,
            g
          )), h.left < l.left) {
            if (p = p.type.createAndFill(w), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(w)}`
              );
          } else
            p = p.type.create(w, p.content);
        }
        if (h.top < l.top || h.bottom > l.bottom) {
          const w = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, l.bottom) - Math.max(h.top, l.top)
          };
          h.top < l.top ? p = p.type.createAndFill(w) : p = p.type.create(w, p.content);
        }
        a.push(p);
      }
      s.push(e.child(c).copy(T.from(a)));
    }
    const i = this.isColSelection() && this.isRowSelection() ? e : s;
    return new H(T.from(i), 1, 1);
  }
  replace(e, o = H.empty) {
    const n = e.steps.length, l = this.ranges;
    for (let s = 0; s < l.length; s++) {
      const { $from: i, $to: c } = l[s], a = e.mapping.slice(n);
      e.replace(
        a.map(i.pos),
        a.map(c.pos),
        s ? H.empty : o
      );
    }
    const r = N.findFrom(
      e.doc.resolve(e.mapping.slice(n).map(this.to)),
      -1
    );
    r && e.setSelection(r);
  }
  replaceWith(e, o) {
    this.replace(e, new H(T.from(o), 0, 0));
  }
  forEachCell(e) {
    const o = this.$anchorCell.node(-1), n = C.get(o), l = this.$anchorCell.start(-1), r = n.cellsInRect(
      n.rectBetween(
        this.$anchorCell.pos - l,
        this.$headCell.pos - l
      )
    );
    for (let s = 0; s < r.length; s++)
      e(o.nodeAt(r[s]), l + r[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), o = this.$headCell.index(-1);
    if (Math.min(e, o) > 0) return !1;
    const n = e + this.$anchorCell.nodeAfter.attrs.rowspan, l = o + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, l) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, o = e) {
    const n = e.node(-1), l = C.get(n), r = e.start(-1), s = l.findCell(e.pos - r), i = l.findCell(o.pos - r), c = e.node(0);
    return s.top <= i.top ? (s.top > 0 && (e = c.resolve(r + l.map[s.left])), i.bottom < l.height && (o = c.resolve(
      r + l.map[l.width * (l.height - 1) + i.right - 1]
    ))) : (i.top > 0 && (o = c.resolve(r + l.map[i.left])), s.bottom < l.height && (e = c.resolve(
      r + l.map[l.width * (l.height - 1) + s.right - 1]
    ))), new v(e, o);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), o = C.get(e), n = this.$anchorCell.start(-1), l = o.colCount(this.$anchorCell.pos - n), r = o.colCount(this.$headCell.pos - n);
    if (Math.min(l, r) > 0) return !1;
    const s = l + this.$anchorCell.nodeAfter.attrs.colspan, i = r + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, i) == o.width;
  }
  eq(e) {
    return e instanceof v && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, o = e) {
    const n = e.node(-1), l = C.get(n), r = e.start(-1), s = l.findCell(e.pos - r), i = l.findCell(o.pos - r), c = e.node(0);
    return s.left <= i.left ? (s.left > 0 && (e = c.resolve(
      r + l.map[s.top * l.width]
    )), i.right < l.width && (o = c.resolve(
      r + l.map[l.width * (i.top + 1) - 1]
    ))) : (i.left > 0 && (o = c.resolve(r + l.map[i.top * l.width])), s.right < l.width && (e = c.resolve(
      r + l.map[l.width * (s.top + 1) - 1]
    ))), new v(e, o);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, o) {
    return new v(e.resolve(o.anchor), e.resolve(o.head));
  }
  static create(e, o, n = o) {
    return new v(e.resolve(o), e.resolve(n));
  }
  getBookmark() {
    return new rt(this.$anchorCell.pos, this.$headCell.pos);
  }
};
b.prototype.visible = !1;
N.jsonID("cell", b);
var rt = class He {
  constructor(e, o) {
    this.anchor = e, this.head = o;
  }
  map(e) {
    return new He(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const o = e.resolve(this.anchor), n = e.resolve(this.head);
    return o.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && o.index() < o.parent.childCount && n.index() < n.parent.childCount && ue(o, n) ? new b(o, n) : N.near(n, 1);
  }
};
function st(t) {
  if (!(t.selection instanceof b)) return null;
  const e = [];
  return t.selection.forEachCell((o, n) => {
    e.push(
      ne.node(n, n + o.nodeSize, { class: "selectedCell" })
    );
  }), oe.create(t.doc, e);
}
function it({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let o = t.pos, n = e.pos, l = t.depth;
  for (; l >= 0 && !(t.after(l + 1) < t.end(l)); l--, o++)
    ;
  for (let r = e.depth; r >= 0 && !(e.before(r + 1) > e.start(r)); r--, n--)
    ;
  return o == n && /row|table/.test(t.node(l).type.spec.tableRole);
}
function ct({ $from: t, $to: e }) {
  let o, n;
  for (let l = t.depth; l > 0; l--) {
    const r = t.node(l);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      o = r;
      break;
    }
  }
  for (let l = e.depth; l > 0; l--) {
    const r = e.node(l);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      n = r;
      break;
    }
  }
  return o !== n && e.parentOffset === 0;
}
function at(t, e, o) {
  const n = (e || t).selection, l = (e || t).doc;
  let r, s;
  if (n instanceof Ie && (s = n.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      r = b.create(l, n.from);
    else if (s == "row") {
      const i = l.resolve(n.from + 1);
      r = b.rowSelection(i, i);
    } else if (!o) {
      const i = C.get(n.node), c = n.from + 1, a = c + i.map[i.width * i.height - 1];
      r = b.create(l, c + 1, a);
    }
  } else n instanceof E && it(n) ? r = E.create(l, n.from) : n instanceof E && ct(n) && (r = E.create(l, n.$from.start(), n.$from.end()));
  return r && (e || (e = t.tr)).setSelection(r), e;
}
var dt = new de("fix-tables");
function Le(t, e, o, n) {
  const l = t.childCount, r = e.childCount;
  e: for (let s = 0, i = 0; s < r; s++) {
    const c = e.child(s);
    for (let a = i, u = Math.min(l, s + 3); a < u; a++)
      if (t.child(a) == c) {
        i = a + 1, o += c.nodeSize;
        continue e;
      }
    n(c, o), i < l && t.child(i).sameMarkup(c) ? Le(t.child(i), c, o + 1, n) : c.nodesBetween(0, c.content.size, n, o + 1), o += c.nodeSize;
  }
}
function Be(t, e) {
  let o;
  const n = (l, r) => {
    l.type.spec.tableRole == "table" && (o = ut(t, l, r, o));
  };
  return e ? e.doc != t.doc && Le(e.doc, t.doc, 0, n) : t.doc.descendants(n), o;
}
function ut(t, e, o, n) {
  const l = C.get(e);
  if (!l.problems) return n;
  n || (n = t.tr);
  const r = [];
  for (let c = 0; c < l.height; c++) r.push(0);
  for (let c = 0; c < l.problems.length; c++) {
    const a = l.problems[c];
    if (a.type == "collision") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) r[a.row + f] += a.n;
      n.setNodeMarkup(
        n.mapping.map(o + 1 + a.pos),
        null,
        B(d, d.colspan - a.n, a.n)
      );
    } else if (a.type == "missing")
      r[a.row] += a.n;
    else if (a.type == "overlong_rowspan") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - a.n
      });
    } else if (a.type == "colwidth mismatch") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, {
        ...u.attrs,
        colwidth: a.colwidth
      });
    } else if (a.type == "zero_sized") {
      const u = n.mapping.map(o);
      n.delete(u, u + e.nodeSize);
    }
  }
  let s, i;
  for (let c = 0; c < r.length; c++)
    r[c] && (s == null && (s = c), i = c);
  for (let c = 0, a = o + 1; c < l.height; c++) {
    const u = e.child(c), d = a + u.nodeSize, f = r[c];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const w = y(t.schema)[h].createAndFill();
        w && p.push(w);
      }
      const m = (c == 0 || s == c - 1) && i == c ? a + 1 : d - 1;
      n.insert(n.mapping.map(m), p);
    }
    a = d;
  }
  return n.setMeta(dt, { fixTables: !0 });
}
function R(t) {
  const e = t.selection, o = Z(t), n = o.node(-1), l = o.start(-1), r = C.get(n);
  return { ...e instanceof b ? r.rectBetween(
    e.$anchorCell.pos - l,
    e.$headCell.pos - l
  ) : r.findCell(o.pos - l), tableStart: l, map: r, table: n };
}
function De(t, { map: e, tableStart: o, table: n }, l) {
  let r = l > 0 ? -1 : 0;
  lt(e, n, l + r) && (r = l == 0 || l == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const i = s * e.width + l;
    if (l > 0 && l < e.width && e.map[i - 1] == e.map[i]) {
      const c = e.map[i], a = n.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(o + c),
        null,
        Ee(a.attrs, l - e.colCount(c))
      ), s += a.attrs.rowspan - 1;
    } else {
      const c = r == null ? y(n.type.schema).cell : n.nodeAt(e.map[i + r]).type, a = e.positionAt(s, l, n);
      t.insert(t.mapping.map(o + a), c.createAndFill());
    }
  }
  return t;
}
function ft(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t);
    e(De(t.tr, o, o.left));
  }
  return !0;
}
function ht(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t);
    e(De(t.tr, o, o.right));
  }
  return !0;
}
function pt(t, { map: e, table: o, tableStart: n }, l) {
  const r = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const i = s * e.width + l, c = e.map[i], a = o.nodeAt(c), u = a.attrs;
    if (l > 0 && e.map[i - 1] == c || l < e.width - 1 && e.map[i + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(r).map(n + c),
        null,
        B(u, l - e.colCount(c))
      );
    else {
      const d = t.mapping.slice(r).map(n + c);
      t.delete(d, d + a.nodeSize);
    }
    s += u.rowspan;
  }
}
function mt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t), n = t.tr;
    if (o.left == 0 && o.right == o.map.width) return !1;
    for (let l = o.right - 1; pt(n, o, l), l != o.left; l--) {
      const r = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!r)
        throw RangeError("No table found");
      o.table = r, o.map = C.get(r);
    }
    e(n);
  }
  return !0;
}
function gt(t, e, o) {
  var n;
  const l = y(e.type.schema).header_cell;
  for (let r = 0; r < t.width; r++)
    if (((n = e.nodeAt(t.map[r + o * t.width])) == null ? void 0 : n.type) != l)
      return !1;
  return !0;
}
function $e(t, { map: e, tableStart: o, table: n }, l) {
  var r;
  let s = o;
  for (let a = 0; a < l; a++) s += n.child(a).nodeSize;
  const i = [];
  let c = l > 0 ? -1 : 0;
  gt(e, n, l + c) && (c = l == 0 || l == e.height ? null : 0);
  for (let a = 0, u = e.width * l; a < e.width; a++, u++)
    if (l > 0 && l < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = n.nodeAt(d).attrs;
      t.setNodeMarkup(o + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), a += f.colspan - 1;
    } else {
      const d = c == null ? y(n.type.schema).cell : (r = n.nodeAt(e.map[u + c * e.width])) == null ? void 0 : r.type, f = d == null ? void 0 : d.createAndFill();
      f && i.push(f);
    }
  return t.insert(s, y(n.type.schema).row.create(null, i)), t;
}
function bt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t);
    e($e(t.tr, o, o.top));
  }
  return !0;
}
function wt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t);
    e($e(t.tr, o, o.bottom));
  }
  return !0;
}
function Ct(t, { map: e, table: o, tableStart: n }, l) {
  let r = 0;
  for (let a = 0; a < l; a++) r += o.child(a).nodeSize;
  const s = r + o.child(l).nodeSize, i = t.mapping.maps.length;
  t.delete(r + n, s + n);
  const c = /* @__PURE__ */ new Set();
  for (let a = 0, u = l * e.width; a < e.width; a++, u++) {
    const d = e.map[u];
    if (!c.has(d)) {
      if (c.add(d), l > 0 && d == e.map[u - e.width]) {
        const f = o.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(i).map(d + n), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), a += f.colspan - 1;
      } else if (l < e.height && d == e.map[u + e.width]) {
        const f = o.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(l + 1, a, o);
        t.insert(t.mapping.slice(i).map(n + m), p), a += h.colspan - 1;
      }
    }
  }
}
function yt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const o = R(t), n = t.tr;
    if (o.top == 0 && o.bottom == o.map.height) return !1;
    for (let l = o.bottom - 1; Ct(n, o, l), l != o.top; l--) {
      const r = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!r)
        throw RangeError("No table found");
      o.table = r, o.map = C.get(o.table);
    }
    e(n);
  }
  return !0;
}
function fe(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function St({ width: t, height: e, map: o }, n) {
  let l = n.top * t + n.left, r = l, s = (n.bottom - 1) * t + n.left, i = l + (n.right - n.left - 1);
  for (let c = n.top; c < n.bottom; c++) {
    if (n.left > 0 && o[r] == o[r - 1] || n.right < t && o[i] == o[i + 1])
      return !0;
    r += t, i += t;
  }
  for (let c = n.left; c < n.right; c++) {
    if (n.top > 0 && o[l] == o[l - t] || n.bottom < e && o[s] == o[s + t])
      return !0;
    l++, s++;
  }
  return !1;
}
function he(t, e) {
  const o = t.selection;
  if (!(o instanceof b) || o.$anchorCell.pos == o.$headCell.pos)
    return !1;
  const n = R(t), { map: l } = n;
  if (St(l, n)) return !1;
  if (e) {
    const r = t.tr, s = {};
    let i = T.empty, c, a;
    for (let u = n.top; u < n.bottom; u++)
      for (let d = n.left; d < n.right; d++) {
        const f = l.map[u * l.width + d], h = n.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, c == null)
            c = f, a = h;
          else {
            fe(h) || (i = i.append(h.content));
            const p = r.mapping.map(f + n.tableStart);
            r.delete(p, p + h.nodeSize);
          }
      }
    if (c == null || a == null)
      return !0;
    if (r.setNodeMarkup(c + n.tableStart, null, {
      ...Ee(
        a.attrs,
        a.attrs.colspan,
        n.right - n.left - a.attrs.colspan
      ),
      rowspan: n.bottom - n.top
    }), i.size) {
      const u = c + 1 + a.content.size, d = fe(a) ? c + 1 : u;
      r.replaceWith(d + n.tableStart, u + n.tableStart, i);
    }
    r.setSelection(
      new b(r.doc.resolve(c + n.tableStart))
    ), e(r);
  }
  return !0;
}
function pe(t, e) {
  const o = y(t.schema);
  return At(({ node: n }) => o[n.type.spec.tableRole])(t, e);
}
function At(t) {
  return (e, o) => {
    var n;
    const l = e.selection;
    let r, s;
    if (l instanceof b) {
      if (l.$anchorCell.pos != l.$headCell.pos) return !1;
      r = l.$anchorCell.nodeAfter, s = l.$anchorCell.pos;
    } else {
      if (r = tt(l.$from), !r) return !1;
      s = (n = D(l.$from)) == null ? void 0 : n.pos;
    }
    if (r == null || s == null || r.attrs.colspan == 1 && r.attrs.rowspan == 1)
      return !1;
    if (o) {
      let i = r.attrs;
      const c = [], a = i.colwidth;
      i.rowspan > 1 && (i = { ...i, rowspan: 1 }), i.colspan > 1 && (i = { ...i, colspan: 1 });
      const u = R(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        c.push(
          a ? {
            ...i,
            colwidth: a && a[h] ? [a[h]] : null
          } : i
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += r.nodeSize);
        for (let m = u.left, g = 0; m < u.right; m++, g++)
          m == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            t({ node: r, row: h, col: m }).createAndFill(c[g])
          );
      }
      d.setNodeMarkup(
        s,
        t({ node: r, row: u.top, col: u.left }),
        c[0]
      ), l instanceof b && d.setSelection(
        new b(
          d.doc.resolve(l.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), o(d);
    }
    return !0;
  };
}
function xt(t, e) {
  return function(o, n) {
    if (!x(o)) return !1;
    const l = Z(o);
    if (l.nodeAfter.attrs[t] === e) return !1;
    if (n) {
      const r = o.tr;
      o.selection instanceof b ? o.selection.forEachCell((s, i) => {
        s.attrs[t] !== e && r.setNodeMarkup(i, null, {
          ...s.attrs,
          [t]: e
        });
      }) : r.setNodeMarkup(l.pos, null, {
        ...l.nodeAfter.attrs,
        [t]: e
      }), n(r);
    }
    return !0;
  };
}
function Tt(t) {
  return function(e, o) {
    if (!x(e)) return !1;
    if (o) {
      const n = y(e.schema), l = R(e), r = e.tr, s = l.map.cellsInRect(
        t == "column" ? {
          left: l.left,
          top: 0,
          right: l.right,
          bottom: l.map.height
        } : t == "row" ? {
          left: 0,
          top: l.top,
          right: l.map.width,
          bottom: l.bottom
        } : l
      ), i = s.map((c) => l.table.nodeAt(c));
      for (let c = 0; c < s.length; c++)
        i[c].type == n.header_cell && r.setNodeMarkup(
          l.tableStart + s[c],
          n.cell,
          i[c].attrs
        );
      if (r.steps.length == 0)
        for (let c = 0; c < s.length; c++)
          r.setNodeMarkup(
            l.tableStart + s[c],
            n.header_cell,
            i[c].attrs
          );
      o(r);
    }
    return !0;
  };
}
function me(t, e, o) {
  const n = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let l = 0; l < n.length; l++) {
    const r = e.table.nodeAt(n[l]);
    if (r && r.type !== o.header_cell)
      return !1;
  }
  return !0;
}
function _(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Tt(t) : function(o, n) {
    if (!x(o)) return !1;
    if (n) {
      const l = y(o.schema), r = R(o), s = o.tr, i = me("row", r, l), c = me(
        "column",
        r,
        l
      ), u = (t === "column" ? i : t === "row" ? c : !1) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: r.map.height
      } : t == "row" ? {
        left: u,
        top: 0,
        right: r.map.width,
        bottom: 1
      } : r, f = t == "column" ? c ? l.cell : l.header_cell : t == "row" ? i ? l.cell : l.header_cell : l.cell;
      r.map.cellsInRect(d).forEach((h) => {
        const p = h + r.tableStart, m = s.doc.nodeAt(p);
        m && s.setNodeMarkup(p, f, m.attrs);
      }), n(s);
    }
    return !0;
  };
}
_("row", {
  useDeprecatedLogic: !0
});
_("column", {
  useDeprecatedLogic: !0
});
var Rt = _("cell", {
  useDeprecatedLogic: !0
});
function Mt(t, e) {
  if (e < 0) {
    const o = t.nodeBefore;
    if (o) return t.pos - o.nodeSize;
    for (let n = t.index(-1) - 1, l = t.before(); n >= 0; n--) {
      const r = t.node(-1).child(n), s = r.lastChild;
      if (s)
        return l - 1 - s.nodeSize;
      l -= r.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const o = t.node(-1);
    for (let n = t.indexAfter(-1), l = t.after(); n < o.childCount; n++) {
      const r = o.child(n);
      if (r.childCount) return l + 1;
      l += r.nodeSize;
    }
  }
  return null;
}
function ge(t) {
  return function(e, o) {
    if (!x(e)) return !1;
    const n = Mt(Z(e), t);
    if (n == null) return !1;
    if (o) {
      const l = e.doc.resolve(n);
      o(
        e.tr.setSelection(E.between(l, nt(l))).scrollIntoView()
      );
    }
    return !0;
  };
}
function vt(t, e) {
  const o = t.selection.$anchor;
  for (let n = o.depth; n > 0; n--)
    if (o.node(n).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(o.before(n), o.after(n)).scrollIntoView()
      ), !0;
  return !1;
}
function j(t, e) {
  const o = t.selection;
  if (!(o instanceof b)) return !1;
  if (e) {
    const n = t.tr, l = y(t.schema).cell.createAndFill().content;
    o.forEachCell((r, s) => {
      r.content.eq(l) || n.replace(
        n.mapping.map(s + 1),
        n.mapping.map(s + r.nodeSize - 1),
        new H(l, 0, 0)
      );
    }), n.docChanged && e(n);
  }
  return !0;
}
function Nt(t) {
  if (!t.size) return null;
  let { content: e, openStart: o, openEnd: n } = t;
  for (; e.childCount == 1 && (o > 0 && n > 0 || e.child(0).type.spec.tableRole == "table"); )
    o--, n--, e = e.child(0).content;
  const l = e.child(0), r = l.type.spec.tableRole, s = l.type.schema, i = [];
  if (r == "row")
    for (let c = 0; c < e.childCount; c++) {
      let a = e.child(c).content;
      const u = c ? 0 : Math.max(0, o - 1), d = c < e.childCount - 1 ? 0 : Math.max(0, n - 1);
      (u || d) && (a = ie(
        y(s).row,
        new H(a, u, d)
      ).content), i.push(a);
    }
  else if (r == "cell" || r == "header_cell")
    i.push(
      o || n ? ie(
        y(s).row,
        new H(e, o, n)
      ).content : e
    );
  else
    return null;
  return kt(s, i);
}
function kt(t, e) {
  const o = [];
  for (let l = 0; l < e.length; l++) {
    const r = e[l];
    for (let s = r.childCount - 1; s >= 0; s--) {
      const { rowspan: i, colspan: c } = r.child(s).attrs;
      for (let a = l; a < l + i; a++)
        o[a] = (o[a] || 0) + c;
    }
  }
  let n = 0;
  for (let l = 0; l < o.length; l++) n = Math.max(n, o[l]);
  for (let l = 0; l < o.length; l++)
    if (l >= e.length && e.push(T.empty), o[l] < n) {
      const r = y(t).cell.createAndFill(), s = [];
      for (let i = o[l]; i < n; i++)
        s.push(r);
      e[l] = e[l].append(T.from(s));
    }
  return { height: e.length, width: n, rows: e };
}
function ie(t, e) {
  const o = t.createAndFill();
  return new Fe(o).replace(0, o.content.size, e).doc;
}
function zt({ width: t, height: e, rows: o }, n, l) {
  if (t != n) {
    const r = [], s = [];
    for (let i = 0; i < o.length; i++) {
      const c = o[i], a = [];
      for (let u = r[i] || 0, d = 0; u < n; d++) {
        let f = c.child(d % c.childCount);
        u + f.attrs.colspan > n && (f = f.type.createChecked(
          B(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - n
          ),
          f.content
        )), a.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          r[i + h] = (r[i + h] || 0) + f.attrs.colspan;
      }
      s.push(T.from(a));
    }
    o = s, t = n;
  }
  if (e != l) {
    const r = [];
    for (let s = 0, i = 0; s < l; s++, i++) {
      const c = [], a = o[i % e];
      for (let u = 0; u < a.childCount; u++) {
        let d = a.child(u);
        s + d.attrs.rowspan > l && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, l - d.attrs.rowspan)
          },
          d.content
        )), c.push(d);
      }
      r.push(T.from(c));
    }
    o = r, e = l;
  }
  return { width: t, height: e, rows: o };
}
function Et(t, e, o, n, l, r, s) {
  const i = t.doc.type.schema, c = y(i);
  let a, u;
  if (l > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = o.child(d);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == c.cell ? m = a || (a = c.cell.createAndFill()) : m = u || (u = c.header_cell.createAndFill());
      for (let g = e.width; g < l; g++) p.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + n), p);
    }
  if (r > e.height) {
    const d = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, l); p++) {
      const g = p >= e.width ? !1 : o.nodeAt(e.map[m + p]).type == c.header_cell;
      d.push(
        g ? u || (u = c.header_cell.createAndFill()) : a || (a = c.cell.createAndFill())
      );
    }
    const f = c.row.create(null, T.from(d)), h = [];
    for (let p = e.height; p < r; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(n + o.nodeSize - 2), h);
  }
  return !!(a || u);
}
function be(t, e, o, n, l, r, s, i) {
  if (s == 0 || s == e.height) return !1;
  let c = !1;
  for (let a = l; a < r; a++) {
    const u = s * e.width + a, d = e.map[u];
    if (e.map[u - e.width] == d) {
      c = !0;
      const f = o.nodeAt(d), { top: h, left: p } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(i).map(d + n), null, {
        ...f.attrs,
        rowspan: s - h
      }), t.insert(
        t.mapping.slice(i).map(e.positionAt(s, p, o)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), a += f.attrs.colspan - 1;
    }
  }
  return c;
}
function we(t, e, o, n, l, r, s, i) {
  if (s == 0 || s == e.width) return !1;
  let c = !1;
  for (let a = l; a < r; a++) {
    const u = a * e.width + s, d = e.map[u];
    if (e.map[u - 1] == d) {
      c = !0;
      const f = o.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(i).map(d + n);
      t.setNodeMarkup(
        p,
        null,
        B(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          B(f.attrs, 0, s - h)
        )
      ), a += f.attrs.rowspan - 1;
    }
  }
  return c;
}
function Ce(t, e, o, n, l) {
  let r = o ? t.doc.nodeAt(o - 1) : t.doc;
  if (!r)
    throw new Error("No table found");
  let s = C.get(r);
  const { top: i, left: c } = n, a = c + l.width, u = i + l.height, d = t.tr;
  let f = 0;
  function h() {
    if (r = o ? d.doc.nodeAt(o - 1) : d.doc, !r)
      throw new Error("No table found");
    s = C.get(r), f = d.mapping.maps.length;
  }
  Et(d, s, r, o, a, u, f) && h(), be(d, s, r, o, c, a, i, f) && h(), be(d, s, r, o, c, a, u, f) && h(), we(d, s, r, o, i, u, c, f) && h(), we(d, s, r, o, i, u, a, f) && h();
  for (let p = i; p < u; p++) {
    const m = s.positionAt(p, c, r), g = s.positionAt(p, a, r);
    d.replace(
      d.mapping.slice(f).map(m + o),
      d.mapping.slice(f).map(g + o),
      new H(l.rows[p - i], 0, 0)
    );
  }
  h(), d.setSelection(
    new b(
      d.doc.resolve(o + s.positionAt(i, c, r)),
      d.doc.resolve(o + s.positionAt(u - 1, a - 1, r))
    )
  ), e(d);
}
var Ht = Pe({
  ArrowLeft: V("horiz", -1),
  ArrowRight: V("horiz", 1),
  ArrowUp: V("vert", -1),
  ArrowDown: V("vert", 1),
  "Shift-ArrowLeft": K("horiz", -1),
  "Shift-ArrowRight": K("horiz", 1),
  "Shift-ArrowUp": K("vert", -1),
  "Shift-ArrowDown": K("vert", 1),
  Backspace: j,
  "Mod-Backspace": j,
  Delete: j,
  "Mod-Delete": j
});
function G(t, e, o) {
  return o.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(o).scrollIntoView()), !0);
}
function V(t, e) {
  return (o, n, l) => {
    if (!l) return !1;
    const r = o.selection;
    if (r instanceof b)
      return G(
        o,
        n,
        N.near(r.$headCell, e)
      );
    if (t != "horiz" && !r.empty) return !1;
    const s = We(l, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return G(
        o,
        n,
        N.near(o.doc.resolve(r.head + e), e)
      );
    {
      const i = o.doc.resolve(s), c = ze(i, t, e);
      let a;
      return c ? a = N.near(c, 1) : e < 0 ? a = N.near(o.doc.resolve(i.before(-1)), -1) : a = N.near(o.doc.resolve(i.after(-1)), 1), G(o, n, a);
    }
  };
}
function K(t, e) {
  return (o, n, l) => {
    if (!l) return !1;
    const r = o.selection;
    let s;
    if (r instanceof b)
      s = r;
    else {
      const c = We(l, t, e);
      if (c == null) return !1;
      s = new b(o.doc.resolve(c));
    }
    const i = ze(s.$headCell, t, e);
    return i ? G(
      o,
      n,
      new b(s.$anchorCell, i)
    ) : !1;
  };
}
function Lt(t, e) {
  const o = t.state.doc, n = D(o.resolve(e));
  return n ? (t.dispatch(t.state.tr.setSelection(new b(n))), !0) : !1;
}
function Bt(t, e, o) {
  if (!x(t.state)) return !1;
  let n = Nt(o);
  const l = t.state.selection;
  if (l instanceof b) {
    n || (n = {
      width: 1,
      height: 1,
      rows: [
        T.from(
          ie(y(t.state.schema).cell, o)
        )
      ]
    });
    const r = l.$anchorCell.node(-1), s = l.$anchorCell.start(-1), i = C.get(r).rectBetween(
      l.$anchorCell.pos - s,
      l.$headCell.pos - s
    );
    return n = zt(n, i.right - i.left, i.bottom - i.top), Ce(t.state, t.dispatch, s, i, n), !0;
  } else if (n) {
    const r = Z(t.state), s = r.start(-1);
    return Ce(
      t.state,
      t.dispatch,
      s,
      C.get(r.node(-1)).findCell(r.pos - s),
      n
    ), !0;
  } else
    return !1;
}
function Dt(t, e) {
  var o;
  if (e.ctrlKey || e.metaKey) return;
  const n = ye(t, e.target);
  let l;
  if (e.shiftKey && t.state.selection instanceof b)
    r(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && n && (l = D(t.state.selection.$anchor)) != null && ((o = te(t, e)) == null ? void 0 : o.pos) != l.pos)
    r(l, e), e.preventDefault();
  else if (!n)
    return;
  function r(c, a) {
    let u = te(t, a);
    const d = z.getState(t.state) == null;
    if (!u || !ue(c, u))
      if (d) u = c;
      else return;
    const f = new b(c, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(z, c.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", i), z.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(z, -1));
  }
  function i(c) {
    const a = c, u = z.getState(t.state);
    let d;
    if (u != null)
      d = t.state.doc.resolve(u);
    else if (ye(t, a.target) != n && (d = te(t, e), !d))
      return s();
    d && r(d, a);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", i);
}
function We(t, e, o) {
  if (!(t.state.selection instanceof E)) return null;
  const { $head: n } = t.state.selection;
  for (let l = n.depth - 1; l >= 0; l--) {
    const r = n.node(l);
    if ((o < 0 ? n.index(l) : n.indexAfter(l)) != (o < 0 ? 0 : r.childCount)) return null;
    if (r.type.spec.tableRole == "cell" || r.type.spec.tableRole == "header_cell") {
      const i = n.before(l), c = e == "vert" ? o > 0 ? "down" : "up" : o > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? i : null;
    }
  }
  return null;
}
function ye(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function te(t, e) {
  const o = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return o && o ? D(t.state.doc.resolve(o.pos)) : null;
}
var $t = class {
  constructor(e, o) {
    this.node = e, this.defaultCellMinWidth = o, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${o}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ce(e, this.colgroup, this.table, o), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ce(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function ce(t, e, o, n, l, r) {
  var s;
  let i = 0, c = !0, a = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = l == f ? r : p && p[m], w = g ? g + "px" : "";
        if (i += g || n, g || (c = !1), a)
          a.style.width != w && (a.style.width = w), a = a.nextSibling;
        else {
          const A = document.createElement("col");
          A.style.width = w, e.appendChild(A);
        }
      }
    }
    for (; a; ) {
      const d = a.nextSibling;
      (s = a.parentNode) == null || s.removeChild(a), a = d;
    }
    c ? (o.style.width = i + "px", o.style.minWidth = "") : (o.style.width = "", o.style.minWidth = i + "px");
  }
}
var S = new de(
  "tableColumnResizing"
);
function Wt({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: o = 100,
  View: n = $t,
  lastColumnResizable: l = !0
} = {}) {
  const r = new ke({
    key: S,
    state: {
      init(s, i) {
        var c, a;
        const u = (a = (c = r.spec) == null ? void 0 : c.props) == null ? void 0 : a.nodeViews, d = y(i.schema).table.name;
        return n && u && (u[d] = (f, h) => new n(f, o, h)), new _t(-1, !1);
      },
      apply(s, i) {
        return i.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const i = S.getState(s);
        return i && i.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, i) => {
          Pt(s, i, t, l);
        },
        mouseleave: (s) => {
          Ot(s);
        },
        mousedown: (s, i) => {
          It(s, i, e, o);
        }
      },
      decorations: (s) => {
        const i = S.getState(s);
        if (i && i.activeHandle > -1)
          return Xt(s, i.activeHandle);
      },
      nodeViews: {}
    }
  });
  return r;
}
var _t = class q {
  constructor(e, o) {
    this.activeHandle = e, this.dragging = o;
  }
  apply(e) {
    const o = this, n = e.getMeta(S);
    if (n && n.setHandle != null)
      return new q(n.setHandle, !1);
    if (n && n.setDragging !== void 0)
      return new q(o.activeHandle, n.setDragging);
    if (o.activeHandle > -1 && e.docChanged) {
      let l = e.mapping.map(o.activeHandle, -1);
      return se(e.doc.resolve(l)) || (l = -1), new q(l, o.dragging);
    }
    return o;
  }
};
function Pt(t, e, o, n) {
  if (!t.editable) return;
  const l = S.getState(t.state);
  if (l && !l.dragging) {
    const r = jt(e.target);
    let s = -1;
    if (r) {
      const { left: i, right: c } = r.getBoundingClientRect();
      e.clientX - i <= o ? s = Se(t, e, "left", o) : c - e.clientX <= o && (s = Se(t, e, "right", o));
    }
    if (s != l.activeHandle) {
      if (!n && s !== -1) {
        const i = t.state.doc.resolve(s), c = i.node(-1), a = C.get(c), u = i.start(-1);
        if (a.colCount(i.pos - u) + i.nodeAfter.attrs.colspan - 1 == a.width - 1)
          return;
      }
      _e(t, s);
    }
  }
}
function Ot(t) {
  if (!t.editable) return;
  const e = S.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && _e(t, -1);
}
function It(t, e, o, n) {
  var l;
  if (!t.editable) return !1;
  const r = (l = t.dom.ownerDocument.defaultView) != null ? l : window, s = S.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const i = t.state.doc.nodeAt(s.activeHandle), c = Ft(t, s.activeHandle, i.attrs);
  t.dispatch(
    t.state.tr.setMeta(S, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function a(d) {
    r.removeEventListener("mouseup", a), r.removeEventListener("mousemove", u);
    const f = S.getState(t.state);
    f != null && f.dragging && (Vt(
      t,
      f.activeHandle,
      Ae(f.dragging, d, o)
    ), t.dispatch(
      t.state.tr.setMeta(S, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return a(d);
    const f = S.getState(t.state);
    if (f && f.dragging) {
      const h = Ae(f.dragging, d, o);
      xe(
        t,
        f.activeHandle,
        h,
        n
      );
    }
  }
  return xe(
    t,
    s.activeHandle,
    c,
    n
  ), r.addEventListener("mouseup", a), r.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Ft(t, e, { colspan: o, colwidth: n }) {
  const l = n && n[n.length - 1];
  if (l) return l;
  const r = t.domAtPos(e);
  let i = r.node.childNodes[r.offset].offsetWidth, c = o;
  if (n)
    for (let a = 0; a < o; a++)
      n[a] && (i -= n[a], c--);
  return i / c;
}
function jt(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Se(t, e, o, n) {
  const l = o == "right" ? -n : n, r = t.posAtCoords({
    left: e.clientX + l,
    top: e.clientY
  });
  if (!r) return -1;
  const { pos: s } = r, i = D(t.state.doc.resolve(s));
  if (!i) return -1;
  if (o == "right") return i.pos;
  const c = C.get(i.node(-1)), a = i.start(-1), u = c.map.indexOf(i.pos - a);
  return u % c.width == 0 ? -1 : a + c.map[u - 1];
}
function Ae(t, e, o) {
  const n = e.clientX - t.startX;
  return Math.max(o, t.startWidth + n);
}
function _e(t, e) {
  t.dispatch(
    t.state.tr.setMeta(S, { setHandle: e })
  );
}
function Vt(t, e, o) {
  const n = t.state.doc.resolve(e), l = n.node(-1), r = C.get(l), s = n.start(-1), i = r.colCount(n.pos - s) + n.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let a = 0; a < r.height; a++) {
    const u = a * r.width + i;
    if (a && r.map[u] == r.map[u - r.width]) continue;
    const d = r.map[u], f = l.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : i - r.colCount(d);
    if (f.colwidth && f.colwidth[h] == o) continue;
    const p = f.colwidth ? f.colwidth.slice() : Kt(f.colspan);
    p[h] = o, c.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function xe(t, e, o, n) {
  const l = t.state.doc.resolve(e), r = l.node(-1), s = l.start(-1), i = C.get(r).colCount(l.pos - s) + l.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(l.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && ce(
    r,
    c.firstChild,
    c,
    n,
    i,
    o
  );
}
function Kt(t) {
  return Array(t).fill(0);
}
function Xt(t, e) {
  var o;
  const n = [], l = t.doc.resolve(e), r = l.node(-1);
  if (!r)
    return oe.empty;
  const s = C.get(r), i = l.start(-1), c = s.colCount(l.pos - i) + l.nodeAfter.attrs.colspan - 1;
  for (let a = 0; a < s.height; a++) {
    const u = c + a * s.width;
    if ((c == s.width - 1 || s.map[u] != s.map[u + 1]) && (a == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = i + d + r.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (o = S.getState(t)) != null && o.dragging && n.push(
        ne.node(
          i + d,
          i + d + r.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), n.push(ne.widget(f, h));
    }
  }
  return oe.create(t.doc, n);
}
function Gt({
  allowTableNodeSelection: t = !1
} = {}) {
  return new ke({
    key: z,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, o) {
        const n = e.getMeta(z);
        if (n != null) return n == -1 ? null : n;
        if (o == null || !e.docChanged) return o;
        const { deleted: l, pos: r } = e.mapping.mapResult(o);
        return l ? null : r;
      }
    },
    props: {
      decorations: st,
      handleDOMEvents: {
        mousedown: Dt
      },
      createSelectionBetween(e) {
        return z.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Lt,
      handleKeyDown: Ht,
      handlePaste: Bt
    },
    appendTransaction(e, o, n) {
      return at(
        n,
        Be(n, o),
        t
      );
    }
  });
}
function ae(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Te(t, e, o, n, l, r) {
  var s;
  let i = 0, c = !0, a = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let d = 0, f = 0; d < u.childCount; d += 1) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m += 1, f += 1) {
        const g = l === f ? r : p && p[m], w = g ? `${g}px` : "";
        if (i += g || n, g || (c = !1), a) {
          if (a.style.width !== w) {
            const [A, M] = ae(n, g);
            a.style.setProperty(A, M);
          }
          a = a.nextSibling;
        } else {
          const A = document.createElement("col"), [M, $] = ae(n, g);
          A.style.setProperty(M, $), e.appendChild(A);
        }
      }
    }
  for (; a; ) {
    const d = a.nextSibling;
    (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = d;
  }
  c ? (o.style.width = `${i}px`, o.style.minWidth = "") : (o.style.width = "", o.style.minWidth = `${i}px`);
}
class qt {
  constructor(e, o) {
    this.node = e, this.cellMinWidth = o, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Te(e, this.colgroup, this.table, o), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, Te(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function Jt(t, e, o, n) {
  let l = 0, r = !0;
  const s = [], i = t.firstChild;
  if (!i)
    return {};
  for (let d = 0, f = 0; d < i.childCount; d += 1) {
    const { colspan: h, colwidth: p } = i.child(d).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const g = o === f ? n : p && p[m];
      l += g || e, g || (r = !1);
      const [w, A] = ae(e, g);
      s.push([
        "col",
        { style: `${w}: ${A}` }
      ]);
    }
  }
  const c = r ? `${l}px` : "", a = r ? "" : `${l}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: a };
}
function Re(t, e) {
  return t.createAndFill();
}
function Ut(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((o) => {
    const n = t.nodes[o];
    n.spec.tableRole && (e[n.spec.tableRole] = n);
  }), t.cached.tableNodeTypes = e, e;
}
function Zt(t, e, o, n, l) {
  const r = Ut(t), s = [], i = [];
  for (let a = 0; a < o; a += 1) {
    const u = Re(r.cell);
    if (u && i.push(u), n) {
      const d = Re(r.header_cell);
      d && s.push(d);
    }
  }
  const c = [];
  for (let a = 0; a < e; a += 1)
    c.push(r.row.createChecked(null, n && a === 0 ? s : i));
  return r.table.createChecked(null, c);
}
function Yt(t) {
  return t instanceof b;
}
const X = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Yt(e))
    return !1;
  let o = 0;
  const n = Ke(e.ranges[0].$from, (r) => r.type.name === "table");
  return n == null || n.node.descendants((r) => {
    if (r.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(r.type.name) && (o += 1);
  }), o === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Qt = J.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: qt,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: o, tableWidth: n, tableMinWidth: l } = Jt(t, this.options.cellMinWidth);
    return [
      "table",
      U(this.options.HTMLAttributes, e, {
        style: n ? `width: ${n}` : `min-width: ${l}`
      }),
      o,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: o = !0 } = {}) => ({ tr: n, dispatch: l, editor: r }) => {
        const s = Zt(r.schema, t, e, o);
        if (l) {
          const i = n.selection.from + 1;
          n.replaceSelectionWith(s).scrollIntoView().setSelection(E.near(n.doc.resolve(i)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => ft(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => ht(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => mt(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => bt(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => wt(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => yt(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => vt(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => he(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => pe(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => _("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => _("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Rt(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => he(t, e) ? !0 : pe(t, e),
      setCellAttribute: (t, e) => ({ state: o, dispatch: n }) => xt(t, e)(o, n),
      goToNextCell: () => ({ state: t, dispatch: e }) => ge(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => ge(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Be(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: o }) => {
        if (o) {
          const n = b.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(n);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: X,
      "Mod-Backspace": X,
      Delete: X,
      "Mod-Delete": X
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Wt({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Gt({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: je(Ve(t, "tableRole", e))
    };
  }
}), eo = J.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((n) => parseInt(n, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", U(this.options.HTMLAttributes, t), 0];
  }
}), to = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, oo = /CrOS/, no = /android|ipad|playbook|silk/i;
function Me(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(to.test(e) && !oo.test(e) || t.tablet && no.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const ve = (t) => Array.from({ length: t }).map((e, o) => o + 1);
function lo(t) {
  var u;
  const [e, o] = ee(!0), [n, l] = ee({
    rows: Me() ? O : I,
    cols: Me() ? O : I
  }), [r, s] = ee({
    rows: F,
    cols: F
  });
  function i(d, f) {
    d === n.rows && l((h) => ({
      ...h,
      rows: Math.min(d + 1, O)
    })), f === n.cols && l((h) => ({
      ...h,
      cols: Math.min(f + 1, O)
    })), s({
      rows: d,
      cols: f
    });
  }
  function c(d, f) {
    t == null || t.createTable({ rows: d, cols: f, withHeaderRow: e }), a();
  }
  function a() {
    o(!1), l({
      rows: I,
      cols: I
    }), s({
      rows: F,
      cols: F
    });
  }
  return /* @__PURE__ */ Q(qe, { modal: !0, children: [
    /* @__PURE__ */ k(Je, { asChild: !0, children: t == null ? void 0 : t.children }),
    /* @__PURE__ */ k(
      Ue,
      {
        align: "start",
        className: "richtext-w-full !richtext-p-2",
        side: "bottom",
        children: /* @__PURE__ */ Q("div", { className: "table-grid-size-editor richtext-p-0", children: [
          /* @__PURE__ */ k("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (u = ve(n == null ? void 0 : n.rows)) == null ? void 0 : u.map((d) => {
            var f;
            return /* @__PURE__ */ k(
              "div",
              {
                className: "richtext-flex richtext-gap-1",
                children: (f = ve(n == null ? void 0 : n.cols)) == null ? void 0 : f.map((h) => /* @__PURE__ */ k(
                  "div",
                  {
                    onMouseDown: () => c(d, h),
                    onMouseOver: () => i(d, h),
                    className: `richtext-cursor-pointer richtext-border-border ${h <= r.cols && d <= r.rows && "tableCellActive !richtext-bg-foreground"}`,
                    children: /* @__PURE__ */ k("div", { className: "richtext-box-border richtext-size-4 richtext-rounded-[2px] !richtext-border richtext-border-solid !richtext-border-border richtext-p-1" })
                  },
                  `c-${h}`
                ))
              },
              `r-${d}`
            );
          }) }),
          /* @__PURE__ */ Q("div", { className: "richtext-mt-2 richtext-text-center richtext-text-sm richtext-text-zinc-600", children: [
            r.rows,
            " ",
            "x",
            r.cols
          ] })
        ] })
      }
    )
  ] });
}
function ro(t) {
  function e(o) {
    t.disabled || t.editor.chain().focus().insertTable({ ...o, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ k(lo, { createTable: e, children: /* @__PURE__ */ k(
    Ge,
    {
      icon: t == null ? void 0 : t.icon,
      tooltip: t == null ? void 0 : t.tooltip,
      disabled: t == null ? void 0 : t.disabled,
      color: t == null ? void 0 : t.color,
      action: t == null ? void 0 : t.action,
      isActive: t == null ? void 0 : t.isActive
    }
  ) });
}
function so(t, e, o) {
  if (!t.doc)
    return t;
  const n = t.doc.nodeAt(e);
  if (!n || o === n.attrs.backgroundColor)
    return t;
  const l = {
    ...n.attrs,
    backgroundColor: o
  };
  return t.setNodeMarkup(e, n.type, l, n.marks);
}
function io(t, e, o) {
  const { doc: n, selection: l } = t;
  return !n || !l || !(l instanceof b) || l.forEachCell((r, s) => {
    t = so(t, s, o);
  }), t;
}
function Ne(t, e) {
  return ({ tr: o, state: n, dispatch: l }) => {
    const { selection: r } = n;
    return o = o.setSelection(r), o = io(o, e, t), o.docChanged ? (l == null || l(o), !0) : !1;
  };
}
const co = Xe.create({
  name: "tableCellBackground",
  addOptions() {
    return {
      types: ["tableCell"],
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            parseHTML: (t) => t.style.backgroundColor || "",
            renderHTML: (t) => !t.backgroundColor || t.backgroundColor === "" ? {} : {
              style: `background-color: ${t.backgroundColor}`
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTableCellBackground: (t) => Ne(t, this.options),
      unsetTableCellBackground: () => Ne("", this.options)
    };
  }
}), ao = J.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", U(this.options.HTMLAttributes, t), 0];
  }
}), uo = ao.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: "border-bottom: 1px solid #000;"
        /* Row borders */
      }
    };
  }
}), fo = J.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((n) => parseInt(n, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", U(this.options.HTMLAttributes, t), 0];
  }
}), ho = fo.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: `
            border-right: 1px solid #000; 
            padding: 8px 12px;            
            &:last-child {
              border-right: none;        
            }
          `
      }
    };
  }
}), So = /* @__PURE__ */ Qt.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: `
          border: 1px solid #000;         
          border-collapse: collapse;     
          width: 100%;
        `
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: e, t: o }) => ({
        component: ro,
        componentProps: {
          disabled: e.isActive("table") || !1,
          icon: "Table",
          tooltip: o("editor.table.tooltip"),
          editor: e
        }
      })
    };
  },
  addExtensions() {
    return [
      uo.configure(this.options.tableRow),
      eo.configure(this.options.tableHeader),
      ho.configure(this.options.tableCell),
      co.configure(this.options.tableCellBackground)
    ];
  }
});
export {
  So as Table,
  So as default
};

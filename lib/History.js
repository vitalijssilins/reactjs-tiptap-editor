import { P as j, a as A, v as G, E as L } from "./index-sel2RZJw.js";
import { jsxs as x, jsx as I, Fragment as F } from "react/jsx-runtime";
import { T as S, a as z, b as N, g as U } from "./tooltip-KX73XsAg.js";
import { T as Z } from "./toggle-ZsttqCGR.js";
import { i as $ } from "./index-BP_NLBls.js";
var E = 200, f = function() {
};
f.prototype.append = function(e) {
  return e.length ? (e = f.from(e), !this.length && e || e.length < E && this.leafAppend(e) || this.length < E && e.leafPrepend(this) || this.appendInner(e)) : this;
};
f.prototype.prepend = function(e) {
  return e.length ? f.from(e).append(this) : this;
};
f.prototype.appendInner = function(e) {
  return new R(this, e);
};
f.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? f.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
f.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
f.prototype.forEach = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
};
f.prototype.map = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length);
  var r = [];
  return this.forEach(function(s, o) {
    return r.push(e(s, o));
  }, t, n), r;
};
f.from = function(e) {
  return e instanceof f ? e : e && e.length ? new H(e) : f.empty;
};
var H = /* @__PURE__ */ function(i) {
  function e(n) {
    i.call(this), this.values = n;
  }
  i && (e.__proto__ = i), e.prototype = Object.create(i && i.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(r, s) {
    return r == 0 && s == this.length ? this : new e(this.values.slice(r, s));
  }, e.prototype.getInner = function(r) {
    return this.values[r];
  }, e.prototype.forEachInner = function(r, s, o, l) {
    for (var p = s; p < o; p++)
      if (r(this.values[p], l + p) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(r, s, o, l) {
    for (var p = s - 1; p >= o; p--)
      if (r(this.values[p], l + p) === !1)
        return !1;
  }, e.prototype.leafAppend = function(r) {
    if (this.length + r.length <= E)
      return new e(this.values.concat(r.flatten()));
  }, e.prototype.leafPrepend = function(r) {
    if (this.length + r.length <= E)
      return new e(r.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(f);
f.empty = new H([]);
var R = /* @__PURE__ */ function(i) {
  function e(t, n) {
    i.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
  }
  return i && (e.__proto__ = i), e.prototype = Object.create(i && i.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(n) {
    return n < this.left.length ? this.left.get(n) : this.right.get(n - this.left.length);
  }, e.prototype.forEachInner = function(n, r, s, o) {
    var l = this.left.length;
    if (r < l && this.left.forEachInner(n, r, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(n, Math.max(r - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(n, r, s, o) {
    var l = this.left.length;
    if (r > l && this.right.forEachInvertedInner(n, r - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(n, Math.min(r, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(n, r) {
    if (n == 0 && r == this.length)
      return this;
    var s = this.left.length;
    return r <= s ? this.left.slice(n, r) : n >= s ? this.right.slice(n - s, r - s) : this.left.slice(n, s).append(this.right.slice(0, r - s));
  }, e.prototype.leafAppend = function(n) {
    var r = this.right.leafAppend(n);
    if (r)
      return new e(this.left, r);
  }, e.prototype.leafPrepend = function(n) {
    var r = this.left.leafPrepend(n);
    if (r)
      return new e(r, this.right);
  }, e.prototype.appendInner = function(n) {
    return this.left.depth >= Math.max(this.right.depth, n.depth) + 1 ? new e(this.left, new e(this.right, n)) : new e(this, n);
  }, e;
}(f);
const V = 500;
class m {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let n = this.items.length;
    for (; ; n--)
      if (this.items.get(n - 1).selection) {
        --n;
        break;
      }
    let r, s;
    t && (r = this.remapping(n, this.items.length), s = r.maps.length);
    let o = e.tr, l, p, a = [], c = [];
    return this.items.forEach((h, u) => {
      if (!h.step) {
        r || (r = this.remapping(n, u + 1), s = r.maps.length), s--, c.push(h);
        return;
      }
      if (r) {
        c.push(new g(h.map));
        let d = h.step.map(r.slice(s)), w;
        d && o.maybeStep(d).doc && (w = o.mapping.maps[o.mapping.maps.length - 1], a.push(new g(w, void 0, void 0, a.length + c.length))), s--, w && r.appendMap(w, s);
      } else
        o.maybeStep(h.step);
      if (h.selection)
        return l = r ? h.selection.map(r.slice(s)) : h.selection, p = new m(this.items.slice(0, n).append(c.reverse().concat(a)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: p, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, n, r) {
    let s = [], o = this.eventCount, l = this.items, p = !r && l.length ? l.get(l.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let h = e.steps[c].invert(e.docs[c]), u = new g(e.mapping.maps[c], h, t), d;
      (d = p && p.merge(u)) && (u = d, c ? s.pop() : l = l.slice(0, l.length - 1)), s.push(u), t && (o++, t = void 0), r || (p = u);
    }
    let a = o - n.depth;
    return a > B && (l = W(l, a), o -= a), new m(l.append(s), o);
  }
  remapping(e, t) {
    let n = new G();
    return this.items.forEach((r, s) => {
      let o = r.mirrorOffset != null && s - r.mirrorOffset >= e ? n.maps.length - r.mirrorOffset : void 0;
      n.appendMap(r.map, o);
    }, e, t), n;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new m(this.items.append(e.map((t) => new g(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let n = [], r = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, r);
    let p = t;
    this.items.forEach((u) => {
      let d = s.getMirror(--p);
      if (d == null)
        return;
      o = Math.min(o, d);
      let w = s.maps[d];
      if (u.step) {
        let K = e.steps[d].invert(e.docs[d]), P = u.selection && u.selection.map(s.slice(p + 1, d));
        P && l++, n.push(new g(w, K, P));
      } else
        n.push(new g(w));
    }, r);
    let a = [];
    for (let u = t; u < o; u++)
      a.push(new g(s.maps[u]));
    let c = this.items.slice(0, r).append(a).append(n), h = new m(c, l);
    return h.emptyItemCount() > V && (h = h.compress(this.items.length - n.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), n = t.maps.length, r = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        r.push(o), o.selection && s++;
      else if (o.step) {
        let p = o.step.map(t.slice(n)), a = p && p.getMap();
        if (n--, a && t.appendMap(a, n), p) {
          let c = o.selection && o.selection.map(t.slice(n));
          c && s++;
          let h = new g(a.invert(), p, c), u, d = r.length - 1;
          (u = r.length && r[d].merge(h)) ? r[d] = u : r.push(h);
        }
      } else o.map && n--;
    }, this.items.length, 0), new m(f.from(r.reverse()), s);
  }
}
m.empty = new m(f.empty, 0);
function W(i, e) {
  let t;
  return i.forEach((n, r) => {
    if (n.selection && e-- == 0)
      return t = r, !1;
  }), i.slice(t);
}
class g {
  constructor(e, t, n, r) {
    this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new g(t.getMap().invert(), t, this.selection);
    }
  }
}
class v {
  constructor(e, t, n, r, s) {
    this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = s;
  }
}
const B = 20;
function J(i, e, t, n) {
  let r = t.getMeta(y), s;
  if (r)
    return r.historyState;
  t.getMeta(Y) && (i = new v(i.done, i.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return i;
  if (o && o.getMeta(y))
    return o.getMeta(y).redo ? new v(i.done.addTransform(t, void 0, n, M(e)), i.undone, b(t.mapping.maps), i.prevTime, i.prevComposition) : new v(i.done, i.undone.addTransform(t, void 0, n, M(e)), null, i.prevTime, i.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), p = i.prevTime == 0 || !o && i.prevComposition != l && (i.prevTime < (t.time || 0) - n.newGroupDelay || !Q(t, i.prevRanges)), a = o ? T(i.prevRanges, t.mapping) : b(t.mapping.maps);
    return new v(i.done.addTransform(t, p ? e.selection.getBookmark() : void 0, n, M(e)), m.empty, a, t.time, l ?? i.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new v(i.done.rebased(t, s), i.undone.rebased(t, s), T(i.prevRanges, t.mapping), i.prevTime, i.prevComposition) : new v(i.done.addMaps(t.mapping.maps), i.undone.addMaps(t.mapping.maps), T(i.prevRanges, t.mapping), i.prevTime, i.prevComposition);
}
function Q(i, e) {
  if (!e)
    return !1;
  if (!i.docChanged)
    return !0;
  let t = !1;
  return i.mapping.maps[0].forEach((n, r) => {
    for (let s = 0; s < e.length; s += 2)
      n <= e[s + 1] && r >= e[s] && (t = !0);
  }), t;
}
function b(i) {
  let e = [];
  for (let t = i.length - 1; t >= 0 && e.length == 0; t--)
    i[t].forEach((n, r, s, o) => e.push(s, o));
  return e;
}
function T(i, e) {
  if (!i)
    return null;
  let t = [];
  for (let n = 0; n < i.length; n += 2) {
    let r = e.map(i[n], 1), s = e.map(i[n + 1], -1);
    r <= s && t.push(r, s);
  }
  return t;
}
function X(i, e, t) {
  let n = M(e), r = y.get(e).spec.config, s = (t ? i.undone : i.done).popEvent(e, n);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? i.done : i.undone).addTransform(s.transform, e.selection.getBookmark(), r, n), p = new v(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(y, { redo: t, historyState: p });
}
let C = !1, O = null;
function M(i) {
  let e = i.plugins;
  if (O != e) {
    C = !1, O = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        C = !0;
        break;
      }
  }
  return C;
}
const y = new A("history"), Y = new A("closeHistory");
function q(i = {}) {
  return i = {
    depth: i.depth || 100,
    newGroupDelay: i.newGroupDelay || 500
  }, new j({
    key: y,
    state: {
      init() {
        return new v(m.empty, m.empty, null, 0, -1);
      },
      apply(e, t, n) {
        return J(t, n, e, i);
      }
    },
    config: i,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let n = t.inputType, r = n == "historyUndo" ? _ : n == "historyRedo" ? k : null;
          return r ? (t.preventDefault(), r(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function D(i, e) {
  return (t, n) => {
    let r = y.getState(t);
    if (!r || (i ? r.undone : r.done).eventCount == 0)
      return !1;
    if (n) {
      let s = X(r, t, i);
      s && n(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const _ = D(!1, !0), k = D(!0, !0), ee = L.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: i, dispatch: e }) => _(i, e),
      redo: () => ({ state: i, dispatch: e }) => k(i, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      q(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
function te(i) {
  var a;
  const {
    icon: e = void 0,
    // title = undefined,
    tooltip: t = void 0,
    // disabled = false,
    customClass: n = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: r = {},
    action: s = void 0,
    isActive: o = void 0,
    children: l
  } = i, p = $[e];
  return /* @__PURE__ */ x(S, { children: [
    /* @__PURE__ */ I(z, { asChild: !0, children: /* @__PURE__ */ x(
      Z,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${n}`,
        disabled: o == null ? void 0 : o(),
        onClick: s,
        children: [
          p && /* @__PURE__ */ I(p, { className: "richtext-w-4 richtext-h-4" }),
          l && /* @__PURE__ */ I(F, { children: l })
        ]
      }
    ) }),
    t && /* @__PURE__ */ I(N, { ...r, children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ I("div", { children: t }),
      !!((a = i == null ? void 0 : i.shortcutKeys) != null && a.length) && /* @__PURE__ */ I("span", { children: U(i == null ? void 0 : i.shortcutKeys) })
    ] }) })
  ] });
}
const ne = ["undo", "redo"], pe = /* @__PURE__ */ ee.extend({
  addOptions() {
    var i;
    return {
      ...(i = this.parent) == null ? void 0 : i.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: e, t }) => ne.map((n) => ({
        component: te,
        componentProps: {
          action: () => {
            n === "undo" && e.chain().focus().undo().run(), n === "redo" && e.chain().focus().redo().run();
          },
          shortcutKeys: n === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: n === "undo" ? !e.can().undo() : !e.can().redo(),
          isActive: () => n === "undo" ? !e.can().undo() : !e.can().redo(),
          icon: n === "undo" ? "Undo2" : "Redo2",
          tooltip: t(`editor.${n}.tooltip`)
        }
      }))
    };
  }
});
export {
  pe as History
};

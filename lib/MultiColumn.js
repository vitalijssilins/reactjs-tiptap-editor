import { s as p, T as h, u as g, N as b, m as y, E as N } from "./index-sel2RZJw.js";
import { A as H } from "./ActionButton-D15ZSL0z.js";
function M(e, t, s = null) {
  return s ? e.createChecked({ index: t }, s) : e.createAndFill({ index: t });
}
function L(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function v(e, t, s = null) {
  const o = L(e), c = [];
  for (let n = 0; n < t; n += 1) {
    const r = M(o.column, n, s);
    r && c.push(r);
  }
  return o.columns.createChecked({ cols: t }, c);
}
function f({
  state: e,
  dispatch: t,
  type: s
}) {
  const o = p((n) => n.type.name === A.name)(e.selection), c = p((n) => n.type.name === x.name)(e.selection);
  if (t && o && c) {
    const n = o.node, r = c.node.attrs.index, l = n.toJSON();
    let i = r;
    s === "delete" ? (i = r - 1, l.content.splice(r, 1)) : (i = s === "addBefore" ? r : r + 1, l.content.splice(i, 0, {
      type: "column",
      attrs: {
        index: r
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), l.attrs.cols = l.content.length, l.content.forEach((u, C) => {
      u.attrs.index = C;
    });
    const a = g.fromJSON(e.schema, l);
    let d = o.pos;
    a.content.forEach((u, C, S) => {
      S < i && (d += u.nodeSize);
    });
    const m = e.tr.setTime(Date.now());
    m.replaceWith(o.pos, o.pos + o.node.nodeSize, a).setSelection(
      h.near(m.doc.resolve(d))
    ), t(m);
  }
  return !0;
}
function T({ state: e, dispatch: t, type: s }) {
  const o = p((n) => n.type.name === A.name)(e.selection), c = p((n) => n.type.name === x.name)(e.selection);
  if (t && o && c) {
    const n = o.node, r = c.node.attrs.index;
    let l = 0;
    s === "before" ? l = (r - 1 + n.attrs.cols) % n.attrs.cols : l = (r + 1) % n.attrs.cols;
    let i = o.pos;
    n.content.forEach((d, m, u) => {
      u < l && (i += d.nodeSize);
    });
    const a = e.tr.setTime(Date.now());
    return a.setSelection(h.near(a.doc.resolve(i))), t(a), !0;
  }
  return !1;
}
const x = /* @__PURE__ */ b.create({
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
    return ["div", y(this.options.HTMLAttributes, e), 0];
  }
}), w = N.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: s }) => ({
        component: H,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: s("editor.columns.tooltip")
        }
      })
    };
  }
}), I = 200, A = /* @__PURE__ */ b.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: I,
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
    return ["div", y(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: s, editor: o }) => {
        const c = v(o.schema, e && e.cols || 3);
        if (s) {
          const n = t.selection.anchor + 1;
          t.replaceSelectionWith(c).scrollIntoView().setSelection(h.near(t.doc.resolve(n)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => f({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => f({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => f({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => T({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => T({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
});
export {
  x as Column,
  w as ColumnActionButton,
  I as EXTENSION_PRIORITY_HIGHEST,
  A as MultiColumn
};

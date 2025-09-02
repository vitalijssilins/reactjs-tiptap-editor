import { N as b, m as v } from "./index-BWx1Mchx.js";
import { N as C, c as g, R as N } from "./dom-dataset-CHDbKz5J.js";
import { jsx as l, jsxs as T } from "react/jsx-runtime";
import { useState as p, useCallback as m, useEffect as d } from "react";
import { u as O } from "./index-Tj3Ci7xM.js";
import { Z as _, A as y } from "./RichTextEditor-jy1O8VR5.js";
const x = "_toc_aag8a_1", A = "_visible_aag8a_7", w = "_list_aag8a_11", E = "_item_aag8a_16", f = {
  toc: x,
  visible: A,
  list: w,
  item: E
};
function k(t) {
  const o = [], a = [o];
  return t.forEach((n) => {
    let e = -1, s = a[n.level + e];
    for (; !s; )
      e -= 1, s = a[n.level + e];
    s.push({ ...n, children: a[n.level] = [] });
  }), o;
}
function M({ editor: t }) {
  const o = _(), [a, n] = p([]), { t: e } = O(), s = m(() => {
    const i = [], r = t.state.tr;
    t.state.doc.descendants((c, h) => {
      if (c.type.name === "heading") {
        const u = `heading-${i.length + 1}`;
        c.attrs.id !== u && r.setNodeMarkup(h, void 0, {
          ...c.attrs,
          id: u
        }), i.push({
          level: c.attrs.level,
          text: c.textContent,
          id: u
        });
      }
    }), r.setMeta("addToHistory", !1), r.setMeta("preventUpdate", !0), t.view.dispatch(r), n(i), t.eventEmitter && t.eventEmitter.emit("TableOfContents", k(i));
  }, [t]);
  return d(() => {
    if (t) {
      if (!t.options.editable) {
        s();
        return;
      }
      return t.on("update", s), () => {
        t.off("update", s);
      };
    }
  }, [t, s]), d(() => {
    s();
  }, []), /* @__PURE__ */ l(C, { className: g("tableOfContent", f.toc, o && f.visible), children: o ? /* @__PURE__ */ T("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ l("p", { className: "text-[20px] richtext-mb-[8px] richtext-font-semibold", children: e("editor.table_of_content") }),
    /* @__PURE__ */ l("ul", { className: f.list, children: a.map((i, r) => /* @__PURE__ */ l(
      "li",
      {
        className: f.item,
        style: { paddingLeft: `${i.level - 1}rem` },
        children: /* @__PURE__ */ l("a", { href: `#${i.id}`, children: i.text })
      },
      `table-of-content-${r}`
    )) })
  ] }) : null });
}
function B(t, ...o) {
  const [a, n] = p(!1);
  return d(() => {
    const e = () => {
      n(t.isActive.apply(t, o));
    };
    return t.on("selectionUpdate", e), t.on("transaction", e), () => {
      t.off("selectionUpdate", e), t.off("transaction", e);
    };
  }, [t, o, n]), a;
}
function H({ editor: t, icon: o, tooltip: a }) {
  const n = B(t, z.name), e = m(() => {
    if (n) {
      t.chain().focus().removeTableOfContents().run();
      return;
    }
    t.chain().focus().setTableOfContents().run();
  }, [t, n]);
  return /* @__PURE__ */ l(
    y,
    {
      action: e,
      isActive: () => n || !1,
      icon: o,
      tooltip: a
    }
  );
}
function L(t) {
  return t && t.type.name === "title";
}
function S(t, o) {
  const n = [t.getJSON()], e = [];
  for (; n.length > 0; ) {
    const s = n.shift();
    s.type === o && e.push(s), s.content && s.content.length > 0 && n.push(...s.content);
  }
  return e;
}
const z = /* @__PURE__ */ b.create({
  name: "tableOfContents",
  group: "block",
  atom: !0,
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      onHasOneBeforeInsert: () => {
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: o, t: a }) => ({
        component: H,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: a("editor.table_of_content"),
          editor: o
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["toc", v(t)];
  },
  addNodeView() {
    return N(M);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: t, editor: o, view: a }) => {
        if (S(o, this.name).length > 0) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const e = a.props.state.doc.content.firstChild;
        if (L(e)) {
          const s = (e.firstChild && e.firstChild.nodeSize || 0) + 1;
          return t.insertContentAt(s, { type: this.name });
        }
        return t.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: t, dispatch: o }) => {
        const { tr: a } = t, n = t.schema.nodes.tableOfContents;
        return t.doc.descendants((e, s) => {
          if (e.type === n) {
            const i = s, r = s + e.nodeSize;
            a.delete(i, r);
          }
        }), a.docChanged ? (o(a), !0) : !1;
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});
export {
  z as TableOfContents
};

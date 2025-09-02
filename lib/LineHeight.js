import { T as f, A as H, E as L } from "./index-BWx1Mchx.js";
import { u as x, j as m, k as T } from "./index-Tj3Ci7xM.js";
import { jsxs as b, jsx as h } from "react/jsx-runtime";
import { useState as p, useMemo as _ } from "react";
import { D, e as E, A as M, k as w, f as A, h as C } from "./RichTextEditor-BSiZeOM2.js";
function y(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function k(e) {
  const { t } = x(), [n, s] = p("default");
  function o(i) {
    i === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(i), s(i);
  }
  const c = _(() => {
    const a = e.editor.extensionManager.extensions.find(
      (l) => l.name === "lineHeight"
    ).options.lineHeights.map((l) => ({
      label: y(l),
      value: l
    }));
    return a.unshift({
      label: t("editor.default"),
      value: "default"
    }), a;
  }, [e]);
  return /* @__PURE__ */ b(D, { children: [
    /* @__PURE__ */ h(
      E,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ h(
          M,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ h(
              w,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ h(A, { className: "richtext-min-w-24", children: c == null ? void 0 : c.map((i, u) => /* @__PURE__ */ h(
      C,
      {
        checked: i.value === n,
        onClick: () => o(i.value),
        children: i.label
      },
      `lineHeight-${u}`
    )) })
  ] });
}
const I = ["paragraph", "heading", "list_item", "todo_item"];
function N(e, t) {
  const { selection: n, doc: s } = e;
  if (!n || !s || !(n instanceof f || n instanceof H))
    return e;
  const { from: o, to: c } = n, i = [], u = t && t !== m ? t : null;
  if (s.nodesBetween(o, c, (a, l) => {
    const r = a.type;
    return I.includes(r.name) ? ((a.attrs.lineHeight || null) !== u && i.push({
      node: a,
      pos: l,
      nodeType: r
    }), r.name !== "list_item" && r.name !== "todo_item") : !0;
  }), i.length === 0)
    return e;
  for (const a of i) {
    const { node: l, pos: r, nodeType: g } = a;
    let { attrs: d } = l;
    d = {
      ...d,
      lineHeight: u
    }, e = e.setNodeMarkup(r, g, d, l.marks);
  }
  return e;
}
function v(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: s } = t;
    let { tr: o } = t;
    return o = o.setSelection(s), o = N(o, e), o.docChanged ? (n && n(o), !0) : !1;
  };
}
const z = /* @__PURE__ */ L.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: T,
      defaultHeight: m,
      button({ editor: t, t: n }) {
        return {
          component: k,
          componentProps: {
            editor: t,
            tooltip: n("editor.lineheight.tooltip")
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => e.style.lineHeight || this.options.defaultHeight,
            renderHTML: (e) => e.lineHeight === this.options.defaultHeight || !e.lineHeight ? {} : { style: `line-height: ${e.lineHeight}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => v(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
export {
  T as DEFAULT_LINE_HEIGHT_LIST,
  z as LineHeight
};

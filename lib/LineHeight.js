import { T as f, A as H, E as L } from "./index-sel2RZJw.js";
import { f as g, g as p } from "./index-oWDQeNNi.js";
import { jsxs as x, jsx as h } from "react/jsx-runtime";
import { useState as T, useMemo as b } from "react";
import { A as _ } from "./ActionButton-D15ZSL0z.js";
import { u as D } from "./index-ZqXobaiP.js";
import { D as E, a as M, b as w, c as A } from "./dropdown-menu-D4P0bXFo.js";
import { I as C } from "./Icon-BXO4CVnL.js";
function y(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function I(e) {
  const { t } = D(), [n, s] = T("default");
  function o(i) {
    i === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(i), s(i);
  }
  const c = b(() => {
    const l = e.editor.extensionManager.extensions.find(
      (a) => a.name === "lineHeight"
    ).options.lineHeights.map((a) => ({
      label: y(a),
      value: a
    }));
    return l.unshift({
      label: t("editor.default"),
      value: "default"
    }), l;
  }, [e]);
  return /* @__PURE__ */ x(E, { children: [
    /* @__PURE__ */ h(
      M,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ h(
          _,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ h(
              C,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ h(w, { className: "richtext-min-w-24", children: c == null ? void 0 : c.map((i, u) => /* @__PURE__ */ h(
      A,
      {
        checked: i.value === n,
        onClick: () => o(i.value),
        children: i.label
      },
      `lineHeight-${u}`
    )) })
  ] });
}
const N = ["paragraph", "heading", "list_item", "todo_item"];
function v(e, t) {
  const { selection: n, doc: s } = e;
  if (!n || !s || !(n instanceof f || n instanceof H))
    return e;
  const { from: o, to: c } = n, i = [], u = t && t !== g ? t : null;
  if (s.nodesBetween(o, c, (l, a) => {
    const r = l.type;
    return N.includes(r.name) ? ((l.attrs.lineHeight || null) !== u && i.push({
      node: l,
      pos: a,
      nodeType: r
    }), r.name !== "list_item" && r.name !== "todo_item") : !0;
  }), i.length === 0)
    return e;
  for (const l of i) {
    const { node: a, pos: r, nodeType: m } = l;
    let { attrs: d } = a;
    d = {
      ...d,
      lineHeight: u
    }, e = e.setNodeMarkup(r, m, d, a.marks);
  }
  return e;
}
function S(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: s } = t;
    let { tr: o } = t;
    return o = o.setSelection(s), o = v(o, e), o.docChanged ? (n && n(o), !0) : !1;
  };
}
const U = /* @__PURE__ */ L.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: p,
      defaultHeight: g,
      button({ editor: t, t: n }) {
        return {
          component: I,
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
      setLineHeight: (e) => S(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
export {
  p as DEFAULT_LINE_HEIGHT_LIST,
  U as LineHeight
};

import { E as h } from "./index-BWx1Mchx.js";
import { S as d, a as m } from "./index-DEFQHExY.js";
import { jsxs as u, jsx as c } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { D as x, e as b, A as g, M, f as S, h as k, k as A, g as w } from "./RichTextEditor-BSiZeOM2.js";
function y(t) {
  var s;
  const i = f(() => {
    var o;
    const e = (o = t == null ? void 0 : t.items) == null ? void 0 : o.find((a) => a.isActive());
    return e && !e.default ? {
      ...e,
      icon: e != null && e.icon ? e == null ? void 0 : e.icon : t == null ? void 0 : t.icon
    } : {
      title: t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ u(x, { children: [
    /* @__PURE__ */ c(
      b,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ c(
          g,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            children: /* @__PURE__ */ c(M, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ c(S, { className: "w-full", children: (s = t == null ? void 0 : t.items) == null ? void 0 : s.map((e, n) => /* @__PURE__ */ u(
      k,
      {
        checked: i.title === e.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: e.action,
        children: [
          /* @__PURE__ */ c(A, { name: e == null ? void 0 : e.icon }),
          /* @__PURE__ */ c("span", { className: "richtext-ml-1", children: e.title }),
          !!(e != null && e.shortcutKeys) && /* @__PURE__ */ c("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: w(e.shortcutKeys) })
        ]
      },
      `more-mark-${n}`
    )) })
  ] });
}
const B = /* @__PURE__ */ h.create({
  name: "moreMark",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: i, extension: s, t: e }) {
        const n = s.options.subscript, o = s.options.superscript, a = {
          action: () => i.commands.toggleSubscript(),
          isActive: () => i.isActive("subscript") || !1,
          disabled: !i.can().toggleSubscript(),
          icon: "Subscript",
          title: e("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, l = {
          action: () => i.commands.toggleSuperscript(),
          isActive: () => i.isActive("superscript") || !1,
          disabled: !i.can().toggleSuperscript(),
          icon: "Superscript",
          title: e("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, r = [];
        return n !== !1 && r.push(a), o !== !1 && r.push(l), {
          component: y,
          componentProps: {
            icon: "Type",
            tooltip: e("editor.moremark"),
            disabled: !i.isEditable,
            items: r
          }
        };
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(d.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(m.configure(this.options.superscript)), t;
  }
});
export {
  B as MoreMark
};

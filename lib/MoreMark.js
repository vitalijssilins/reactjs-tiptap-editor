import { E as m } from "./index-sel2RZJw.js";
import { S as h, a as d } from "./index-C407R9vY.js";
import { jsxs as u, jsx as c } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { A as b } from "./ActionButton-D15ZSL0z.js";
import { g as x } from "./tooltip-KX73XsAg.js";
import { D as g, a as M, b as S, c as A } from "./dropdown-menu-D4P0bXFo.js";
import { M as k } from "./index-BP_NLBls.js";
import { I as w } from "./Icon-BXO4CVnL.js";
function y(t) {
  var s;
  const e = f(() => {
    var o;
    const i = (o = t == null ? void 0 : t.items) == null ? void 0 : o.find((r) => r.isActive());
    return i && !i.default ? {
      ...i,
      icon: i != null && i.icon ? i == null ? void 0 : i.icon : t == null ? void 0 : t.icon
    } : {
      title: t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ u(g, { children: [
    /* @__PURE__ */ c(
      M,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ c(
          b,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            children: /* @__PURE__ */ c(k, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ c(S, { className: "w-full", children: (s = t == null ? void 0 : t.items) == null ? void 0 : s.map((i, n) => /* @__PURE__ */ u(
      A,
      {
        checked: e.title === i.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: i.action,
        children: [
          /* @__PURE__ */ c(w, { name: i == null ? void 0 : i.icon }),
          /* @__PURE__ */ c("span", { className: "richtext-ml-1", children: i.title }),
          !!(i != null && i.shortcutKeys) && /* @__PURE__ */ c("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: x(i.shortcutKeys) })
        ]
      },
      `more-mark-${n}`
    )) })
  ] });
}
const T = /* @__PURE__ */ m.create({
  name: "moreMark",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: e, extension: s, t: i }) {
        const n = s.options.subscript, o = s.options.superscript, r = {
          action: () => e.commands.toggleSubscript(),
          isActive: () => e.isActive("subscript") || !1,
          disabled: !e.can().toggleSubscript(),
          icon: "Subscript",
          title: i("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, l = {
          action: () => e.commands.toggleSuperscript(),
          isActive: () => e.isActive("superscript") || !1,
          disabled: !e.can().toggleSuperscript(),
          icon: "Superscript",
          title: i("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, a = [];
        return n !== !1 && a.push(r), o !== !1 && a.push(l), {
          component: y,
          componentProps: {
            icon: "Type",
            tooltip: i("editor.moremark"),
            disabled: !e.isEditable,
            items: a
          }
        };
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(h.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(d.configure(this.options.superscript)), t;
  }
});
export {
  T as MoreMark
};

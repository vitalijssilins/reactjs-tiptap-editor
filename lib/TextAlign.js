import { E as y } from "./index-BWx1Mchx.js";
import { jsxs as g, jsx as l } from "react/jsx-runtime";
import { useMemo as b } from "react";
import { P as v, m as M, A as S, k as A, n as C, T as j, a as K, r as w, b as P, s as z } from "./RichTextEditor-BSiZeOM2.js";
const L = y.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
function N(t) {
  var n;
  const e = b(() => {
    var c;
    const i = (c = t == null ? void 0 : t.items) == null ? void 0 : c.find((a) => a.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : t.icon
    } : {
      title: t == null ? void 0 : t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ g(v, { modal: !0, children: [
    /* @__PURE__ */ l(
      M,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ l(
          S,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            children: /* @__PURE__ */ l(
              A,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ l(
      C,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = t == null ? void 0 : t.items) == null ? void 0 : n.map((i, r) => {
          var c, a;
          return /* @__PURE__ */ g(j, { children: [
            /* @__PURE__ */ l(K, { asChild: !0, children: /* @__PURE__ */ l(
              w,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": e.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: e.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ l(A, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ g(P, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ l("span", { children: i.title }),
              !!((c = i.shortcutKeys) != null && c.length) && /* @__PURE__ */ l("span", { children: (a = i.shortcutKeys) == null ? void 0 : a.map((o) => z(o)).join(" ") })
            ] })
          ] }, `text-align-${r}`);
        })
      }
    )
  ] });
}
const H = /* @__PURE__ */ L.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: e,
        extension: n,
        t: i
      }) {
        var u;
        const r = ((u = n.options) == null ? void 0 : u.alignments) || [], c = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, a = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, o = r.map((s) => {
          var x, h, f;
          return {
            title: i(`editor.textalign.${s}.tooltip`),
            icon: a[s],
            shortcutKeys: c[s],
            isActive: () => e.isActive({ textAlign: s }) || !1,
            action: () => {
              var d, m;
              return (m = (d = e.commands) == null ? void 0 : d.setTextAlign) == null ? void 0 : m.call(d, s);
            },
            disabled: !((f = (h = (x = e == null ? void 0 : e.can) == null ? void 0 : x.call(e)) == null ? void 0 : h.setTextAlign) != null && f.call(h, s))
          };
        }), T = o.filter((s) => s.disabled).length === o.length;
        return {
          component: N,
          componentProps: {
            icon: "AlignJustify",
            tooltip: i("editor.textalign.tooltip"),
            disabled: T,
            items: o
          }
        };
      }
    };
  }
});
export {
  H as TextAlign
};

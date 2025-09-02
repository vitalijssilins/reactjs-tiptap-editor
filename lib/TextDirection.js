import { E as b } from "./index-sel2RZJw.js";
import { jsxs as h, jsx as n } from "react/jsx-runtime";
import { useMemo as g } from "react";
import { A as D } from "./ActionButton-D15ZSL0z.js";
import { T as v, a as y, b as A, c as C } from "./tooltip-KX73XsAg.js";
import { P as w, a as M, b as P } from "./popover-B8VvcibZ.js";
import { I as T } from "./Icon-BXO4CVnL.js";
import { T as z } from "./toggle-ZsttqCGR.js";
function L(t) {
  var c;
  const i = g(() => {
    var r;
    const e = (r = t == null ? void 0 : t.items) == null ? void 0 : r.find((o) => o.isActive());
    return e && !e.default ? {
      ...e,
      icon: e.icon ? e.icon : t.icon
    } : {
      title: t == null ? void 0 : t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ h(w, { modal: !0, children: [
    /* @__PURE__ */ n(
      M,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ n(
          D,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            children: /* @__PURE__ */ n(
              T,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ n(
      P,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (c = t == null ? void 0 : t.items) == null ? void 0 : c.map((e, s) => {
          var r, o;
          return /* @__PURE__ */ h(v, { children: [
            /* @__PURE__ */ n(y, { asChild: !0, children: /* @__PURE__ */ n(
              z,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": i.title === e.title ? "on" : "off",
                onClick: e == null ? void 0 : e.action,
                pressed: i.title === e.title,
                size: "sm",
                children: (e == null ? void 0 : e.icon) && /* @__PURE__ */ n(T, { name: e.icon })
              }
            ) }),
            /* @__PURE__ */ h(A, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ n("span", { children: e.title }),
              !!((r = e.shortcutKeys) != null && r.length) && /* @__PURE__ */ n("span", { children: (o = e.shortcutKeys) == null ? void 0 : o.map((u) => C(u)).join(" ") })
            ] })
          ] }, `text-align-${s}`);
        })
      }
    )
  ] });
}
const $ = /* @__PURE__ */ b.create({
  name: "text-direction",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph"],
      directions: ["auto", "ltr", "rtl"],
      defaultDirection: "auto",
      button({
        editor: i,
        extension: c,
        t: e
      }) {
        var x;
        const s = ((x = c.options) == null ? void 0 : x.directions) || [], r = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, o = s.map((a) => ({
          title: e(`editor.textDirection.${a}.tooltip`),
          icon: r[a],
          isActive: () => !1,
          action: () => {
            var l, f, d, m;
            if (a === "auto") {
              (f = (l = i.commands) == null ? void 0 : l.unsetTextDirection) == null || f.call(l);
              return;
            }
            (m = (d = i.commands) == null ? void 0 : d.setTextDirection) == null || m.call(d, a);
          },
          disabled: !1
        })), u = o.filter((a) => a.disabled).length === o.length;
        return {
          component: L,
          componentProps: {
            icon: "TextDirection",
            tooltip: e("editor.textDirection.tooltip"),
            disabled: u,
            items: o
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
          dir: {
            default: this.options.defaultDirection,
            parseHTML: (t) => t.attributes.dir && this.options.directions.includes(t.attributes.dir) ? t.attributes.dir.value : this.options.defaultDirection,
            renderHTML: (t) => ({ dir: t.dir })
          }
        }
      }
    ];
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTextDirection: (t) => ({ commands: i }) => this.options.directions.includes(t) ? this.options.types.every((c) => i.updateAttributes(c, { dir: t })) : !1,
      unsetTextDirection: () => ({ commands: t }) => this.options.types.every((i) => t.resetAttributes(i, "dir"))
    };
  }
});
export {
  $ as TextDirection
};

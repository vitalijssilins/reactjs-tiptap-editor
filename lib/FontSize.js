import { E as m } from "./index-BWx1Mchx.js";
import { u as S, D as z, f } from "./index-Tj3Ci7xM.js";
import { D as v, e as h, f as x, h as F, j as c } from "./RichTextEditor-BSiZeOM2.js";
import { jsxs as y, jsx as u } from "react/jsx-runtime";
import { useMemo as A } from "react";
import { A as M } from "./ActionMenuButton-Bums9lhJ.js";
function b(t) {
  var a;
  const { t: e } = S(), l = A(() => {
    const i = (t.items || []).find((s) => s.isActive());
    return i || {
      title: e("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ y(v, { children: [
    /* @__PURE__ */ u(
      h,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ u(
          M,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: l == null ? void 0 : l.title,
            tooltip: `${t == null ? void 0 : t.tooltip}`
          }
        )
      }
    ),
    /* @__PURE__ */ u(x, { className: "richtext-max-h-96 richtext-w-32 richtext-overflow-y-auto", children: (a = t == null ? void 0 : t.items) == null ? void 0 : a.map((i, o) => /* @__PURE__ */ u(
      F,
      {
        checked: l.title === i.title,
        onClick: i.action,
        children: /* @__PURE__ */ u("div", { className: "richtext-ml-1 richtext-h-full", children: i.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const N = /* @__PURE__ */ m.create({
  name: "fontSize",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      fontSizes: [...z],
      button({ editor: e, extension: l, t: a }) {
        var r;
        const i = c(((r = l.options) == null ? void 0 : r.fontSizes) || f), o = c([f])[0], s = i.map((n) => ({
          title: n.value === o.value ? a("editor.fontSize.default.tooltip") : String(n.name),
          isActive: () => {
            const { fontSize: d } = e.getAttributes("textStyle");
            return n.value === o.value && d === void 0 ? !0 : e.isActive({ fontSize: String(n.value) }) || !1;
          },
          action: () => {
            if (n.value === o.value) {
              e.commands.unsetFontSize();
              return;
            }
            e.commands.setFontSize(String(n.value));
          },
          disabled: !e.can().setFontSize(String(n.value)),
          divider: n.value === o.value || !1,
          default: n.value === o.value || !1
        }));
        return {
          component: b,
          componentProps: {
            editor: e,
            tooltip: a("editor.fontSize.tooltip"),
            disabled: !1,
            items: s,
            maxHeight: 280
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
          fontSize: {
            default: null,
            parseHTML: (t) => t.style.fontSize.replaceAll(/["']+/g, ""),
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${t.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
});
export {
  z as DEFAULT_FONT_SIZE_LIST,
  N as FontSize
};

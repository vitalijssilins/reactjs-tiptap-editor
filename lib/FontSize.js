import { E as m } from "./index-sel2RZJw.js";
import { D as S, a as f } from "./index-oWDQeNNi.js";
import { e as c } from "./utils-uHATd4OQ.js";
import { jsxs as z, jsx as r } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { A as h } from "./ActionMenuButton-BUn0uG_L.js";
import { u as x } from "./index-ZqXobaiP.js";
import { D as F, a as b, b as y, c as A } from "./dropdown-menu-D4P0bXFo.js";
function M(t) {
  var a;
  const { t: e } = x(), l = v(() => {
    const i = (t.items || []).find((u) => u.isActive());
    return i || {
      title: e("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ z(F, { children: [
    /* @__PURE__ */ r(
      b,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ r(
          h,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: l == null ? void 0 : l.title,
            tooltip: `${t == null ? void 0 : t.tooltip}`
          }
        )
      }
    ),
    /* @__PURE__ */ r(y, { className: "richtext-max-h-96 richtext-w-32 richtext-overflow-y-auto", children: (a = t == null ? void 0 : t.items) == null ? void 0 : a.map((i, o) => /* @__PURE__ */ r(
      A,
      {
        checked: l.title === i.title,
        onClick: i.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-ml-1 richtext-h-full", children: i.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const O = /* @__PURE__ */ m.create({
  name: "fontSize",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      fontSizes: [...S],
      button({ editor: e, extension: l, t: a }) {
        var s;
        const i = c(((s = l.options) == null ? void 0 : s.fontSizes) || f), o = c([f])[0], u = i.map((n) => ({
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
          component: M,
          componentProps: {
            editor: e,
            tooltip: a("editor.fontSize.tooltip"),
            disabled: !1,
            items: u,
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
  S as DEFAULT_FONT_SIZE_LIST,
  O as FontSize
};

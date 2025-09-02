import "./index-DIPntess.js";
import { E as c } from "./index-BWx1Mchx.js";
import { u as y, g as F } from "./index-Tj3Ci7xM.js";
import { jsxs as r, jsx as a } from "react/jsx-runtime";
import { useMemo as h, Fragment as b } from "react";
import { A as x } from "./ActionMenuButton-Bums9lhJ.js";
import { D as M, e as A, f as g, h as L, u as D, j as S } from "./RichTextEditor-BSiZeOM2.js";
const w = c.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (t) => t.style.fontFamily,
            renderHTML: (t) => t.fontFamily ? {
              style: `font-family: ${t.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: i }) => i().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
});
function T(t) {
  var m, u, f;
  const { t: i, lang: s } = y(), n = h(() => {
    var o;
    const e = (o = t == null ? void 0 : t.items) == null ? void 0 : o.find((l) => l.isActive());
    return e && !e.default ? {
      ...e
    } : {
      title: t.tooltip,
      font: i("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => t.editor.chain().focus().unsetFontFamily().run()
    };
  }, [i, s, t]);
  return /* @__PURE__ */ r(M, { children: [
    /* @__PURE__ */ a(
      A,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ a(
          x,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: ((m = n == null ? void 0 : n.font) == null ? void 0 : m.length) > 7 ? `${(u = n == null ? void 0 : n.font) == null ? void 0 : u.slice(0, 6)}...` : n == null ? void 0 : n.font,
            tooltip: t == null ? void 0 : t.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ a(g, { className: "richtext-w-full", children: (f = t == null ? void 0 : t.items) == null ? void 0 : f.map((e, d) => {
      const o = e.font === i("editor.fontFamily.default.tooltip") ? {} : { fontFamily: e.font };
      return /* @__PURE__ */ r(b, { children: [
        /* @__PURE__ */ a(
          L,
          {
            checked: (n == null ? void 0 : n.font) === e.font,
            onClick: e.action,
            children: /* @__PURE__ */ a(
              "div",
              {
                className: "richtext-ml-1 richtext-h-full",
                style: o,
                children: e.font
              }
            )
          }
        ),
        e.font === i("editor.fontFamily.default.tooltip") && /* @__PURE__ */ a(D, {})
      ] }, `font-family-${d}`);
    }) })
  ] });
}
const j = /* @__PURE__ */ w.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      fontFamilyList: F,
      button({ editor: i, extension: s, t: n }) {
        var o;
        const { extensions: m = [] } = i.extensionManager ?? [], u = S(((o = s == null ? void 0 : s.options) == null ? void 0 : o.fontFamilyList) || []), f = m.find(
          (l) => l.name === "base-kit"
        ), e = u.map((l) => ({
          action: () => {
            i.chain().focus().setFontFamily(l.value).run();
          },
          isActive: () => i.isActive("textStyle", { fontFamily: l.value }) || !1,
          disabled: !i.can().setFontFamily(l.value),
          title: l.name,
          font: l.value
        }));
        f && f.options.textStyle !== !1 && e.unshift({
          action: () => i.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: n("editor.fontFamily.default.tooltip"),
          title: n("editor.fontFamily.tooltip")
        });
        const d = e.filter((l) => l.disabled).length === e.length;
        return {
          component: T,
          componentProps: {
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: d,
            items: e,
            editor: i
          }
        };
      }
    };
  }
});
export {
  F as DEFAULT_FONT_FAMILY_LIST,
  j as FontFamily
};

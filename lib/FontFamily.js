import "./index-BvZMIXgn.js";
import { E as c } from "./index-sel2RZJw.js";
import { b as y } from "./index-oWDQeNNi.js";
import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { useMemo as F, Fragment as h } from "react";
import { A as b } from "./ActionMenuButton-BUn0uG_L.js";
import { u as x } from "./index-ZqXobaiP.js";
import { D as M, a as A, b as L, c as g, d as D } from "./dropdown-menu-D4P0bXFo.js";
import { e as S } from "./utils-uHATd4OQ.js";
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
  var m, r, f;
  const { t: i, lang: s } = x(), n = F(() => {
    var l;
    const e = (l = t == null ? void 0 : t.items) == null ? void 0 : l.find((o) => o.isActive());
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
  return /* @__PURE__ */ d(M, { children: [
    /* @__PURE__ */ a(
      A,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ a(
          b,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: ((m = n == null ? void 0 : n.font) == null ? void 0 : m.length) > 7 ? `${(r = n == null ? void 0 : n.font) == null ? void 0 : r.slice(0, 6)}...` : n == null ? void 0 : n.font,
            tooltip: t == null ? void 0 : t.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ a(L, { className: "richtext-w-full", children: (f = t == null ? void 0 : t.items) == null ? void 0 : f.map((e, u) => {
      const l = e.font === i("editor.fontFamily.default.tooltip") ? {} : { fontFamily: e.font };
      return /* @__PURE__ */ d(h, { children: [
        /* @__PURE__ */ a(
          g,
          {
            checked: (n == null ? void 0 : n.font) === e.font,
            onClick: e.action,
            children: /* @__PURE__ */ a(
              "div",
              {
                className: "richtext-ml-1 richtext-h-full",
                style: l,
                children: e.font
              }
            )
          }
        ),
        e.font === i("editor.fontFamily.default.tooltip") && /* @__PURE__ */ a(D, {})
      ] }, `font-family-${u}`);
    }) })
  ] });
}
const j = /* @__PURE__ */ w.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      fontFamilyList: y,
      button({ editor: i, extension: s, t: n }) {
        var l;
        const { extensions: m = [] } = i.extensionManager ?? [], r = S(((l = s == null ? void 0 : s.options) == null ? void 0 : l.fontFamilyList) || []), f = m.find(
          (o) => o.name === "base-kit"
        ), e = r.map((o) => ({
          action: () => {
            i.chain().focus().setFontFamily(o.value).run();
          },
          isActive: () => i.isActive("textStyle", { fontFamily: o.value }) || !1,
          disabled: !i.can().setFontFamily(o.value),
          title: o.name,
          font: o.value
        }));
        f && f.options.textStyle !== !1 && e.unshift({
          action: () => i.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: n("editor.fontFamily.default.tooltip"),
          title: n("editor.fontFamily.tooltip")
        });
        const u = e.filter((o) => o.disabled).length === e.length;
        return {
          component: T,
          componentProps: {
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: u,
            items: e,
            editor: i
          }
        };
      }
    };
  }
});
export {
  y as DEFAULT_FONT_FAMILY_LIST,
  j as FontFamily
};

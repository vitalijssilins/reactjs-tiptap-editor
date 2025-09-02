import { N as g, t as m, m as f } from "./index-BWx1Mchx.js";
import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { useMemo as v, Fragment as b } from "react";
import { A as M } from "./ActionMenuButton-BfAx3zpV.js";
import { D as x, e as A, f as H, h as $, v as p, s as w, u as y } from "./RichTextEditor-BB0ShA4S.js";
const D = g.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((e) => ({
      tag: `h${e}`,
      attrs: { level: e }
    }));
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, f(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
      toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((e, t) => ({
      ...e,
      [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((e) => m({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
      type: this.type,
      getAttributes: {
        level: e
      }
    }));
  }
});
function k(e) {
  var r;
  const t = v(() => {
    var s;
    const n = (s = e == null ? void 0 : e.items) == null ? void 0 : s.find((a) => a.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ c(x, { children: [
    /* @__PURE__ */ o(
      A,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          M,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: t == null ? void 0 : t.title,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ o(H, { className: "richtext-w-full", children: (r = e == null ? void 0 : e.items) == null ? void 0 : r.map((n, d) => {
      var s, a;
      return /* @__PURE__ */ c(b, { children: [
        /* @__PURE__ */ c(
          $,
          {
            checked: (t == null ? void 0 : t.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ o("div", { className: `heading- richtext-ml-1 richtext-h-full${n.level}`, children: n.title }),
              !!((s = n == null ? void 0 : n.shortcutKeys) != null && s.length) && /* @__PURE__ */ o(p, { className: "richtext-pl-4", children: (a = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : a.map((l) => w(l)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ o(y, {})
      ] }, `heading-k-${d}`);
    }) })
  ] });
}
const S = /* @__PURE__ */ D.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: r, t: n }) {
        var h;
        const { extensions: d = [] } = t.extensionManager ?? [], s = ((h = r.options) == null ? void 0 : h.levels) || [], a = d.find(
          (i) => i.name === "base-kit"
        ), l = s.map((i) => ({
          action: () => t.commands.toggleHeading({ level: i }),
          isActive: () => t.isActive("heading", { level: i }) || !1,
          disabled: !t.can().toggleHeading({ level: i }),
          title: n(`editor.heading.h${i}.tooltip`),
          level: i,
          shortcutKeys: ["alt", "mod", `${i}`]
        }));
        a && a.options.paragraph !== !1 && l.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const u = l.filter((i) => i.disabled).length === l.length;
        return {
          component: k,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: u,
            items: l,
            editor: t
          }
        };
      }
    };
  }
});
export {
  S as Heading
};

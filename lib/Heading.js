import { N as f, t as v, m as b } from "./index-D84lfj--.js";
import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { useMemo as M, Fragment as A } from "react";
import { A as x } from "./ActionMenuButton-dIYn5cQ5.js";
import { D as H, e as p, f as y, h as $, v as w, s as K, u as D } from "./RichTextEditor-BJznYeTS.js";
const k = f.create({
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
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, b(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => ({
      ...t,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => v({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
function N(t) {
  var i;
  const e = M(() => {
    var a;
    const n = (a = t == null ? void 0 : t.items) == null ? void 0 : a.find((l) => l.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: t.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ c(H, { children: [
    /* @__PURE__ */ r(
      p,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: e == null ? void 0 : e.title,
            tooltip: t == null ? void 0 : t.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ r(y, { className: "richtext-w-full", children: (i = t == null ? void 0 : t.items) == null ? void 0 : i.map((n, d) => {
      var a, l;
      return /* @__PURE__ */ c(A, { children: [
        /* @__PURE__ */ c(
          $,
          {
            checked: (e == null ? void 0 : e.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ r("div", { className: `heading- richtext-ml-1 richtext-h-full${n.level}`, children: n.title }),
              !!((a = n == null ? void 0 : n.shortcutKeys) != null && a.length) && /* @__PURE__ */ r(w, { className: "richtext-pl-4", children: (l = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : l.map((o) => K(o)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ r(D, {})
      ] }, `heading-k-${d}`);
    }) })
  ] });
}
const I = /* @__PURE__ */ k.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: e, extension: i, t: n }) {
        var h, u;
        const { extensions: d = [] } = e.extensionManager ?? [], a = ((h = i.options) == null ? void 0 : h.levels) || [], l = d.find(
          (s) => s.name === "base-kit"
        ), o = a.map((s) => {
          var g;
          return {
            action: () => e.commands.toggleHeading({ level: s }),
            isActive: () => e.isActive("heading", { level: s }) || !1,
            disabled: !e.can().toggleHeading({ level: s }),
            title: n(`editor.heading.h${s}.tooltip`),
            level: s,
            shortcutKeys: ((g = i.options.shortcutKeys) == null ? void 0 : g[s]) ?? ["alt", "mod", `${s}`]
          };
        });
        l && l.options.paragraph !== !1 && o.unshift({
          action: () => e.commands.setParagraph(),
          isActive: () => e.isActive("paragraph") || !1,
          disabled: !e.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ((u = i.options.shortcutKeys) == null ? void 0 : u[0]) ?? ["alt", "mod", "0"]
        });
        const m = o.filter((s) => s.disabled).length === o.length;
        return {
          component: N,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: m,
            items: o,
            editor: e
          }
        };
      }
    };
  }
});
export {
  I as Heading
};

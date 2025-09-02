import { M as r, c as s, f as o, m as a } from "./index-sel2RZJw.js";
import { A as d } from "./ActionButton-D15ZSL0z.js";
const i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, u = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, g = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, m = r.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      o({
        find: i,
        type: this.type
      }),
      o({
        find: u,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      s({
        find: l,
        type: this.type
      }),
      s({
        find: g,
        type: this.type
      })
    ];
  }
}), _ = /* @__PURE__ */ m.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: d,
        componentProps: {
          action: () => e.commands.toggleBold(),
          isActive: () => e.isActive("bold") || !1,
          disabled: !1,
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: n("editor.bold.tooltip")
        }
      })
    };
  }
});
export {
  _ as Bold
};

import { N as n, w as r, m as s } from "./index-BWx1Mchx.js";
import { A as u } from "./RichTextEditor-jy1O8VR5.js";
const c = /^\s*>\s$/, i = n.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["blockquote", s(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      r({
        find: c,
        type: this.type
      })
    ];
  }
}), d = /* @__PURE__ */ i.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: o, t: e }) => ({
        component: u,
        componentProps: {
          action: () => o.commands.toggleBlockquote(),
          isActive: () => o.isActive("blockquote") || !1,
          disabled: !o.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: e("editor.blockquote.tooltip")
        }
      })
    };
  }
});
export {
  d as Blockquote
};

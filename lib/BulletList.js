import { N as n, w as s, m as p } from "./index-BWx1Mchx.js";
import { A as u } from "./RichTextEditor-BSiZeOM2.js";
const l = "listItem", i = "textStyle", o = /^\s*([-+*])\s$/, a = n.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", p(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(l, this.editor.getAttributes(i)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = s({
      find: o,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = s({
      find: o,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(i),
      editor: this.editor
    })), [
      t
    ];
  }
}), h = /* @__PURE__ */ a.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: r }) => ({
        component: u,
        componentProps: {
          action: () => e.commands.toggleBulletList(),
          isActive: () => e.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: r("editor.bulletlist.tooltip")
        }
      })
    };
  }
});
export {
  h as BulletList
};

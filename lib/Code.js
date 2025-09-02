import { M as r, c as n, d as s, m as d } from "./index-BWx1Mchx.js";
import { A as a } from "./RichTextEditor-jy1O8VR5.js";
const i = /(^|[^`])`([^`]+)`(?!`)/, u = /(^|[^`])`([^`]+)`(?!`)/g, c = r.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["code", d(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: e }) => e.setMark(this.name),
      toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      s({
        find: i,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      n({
        find: u,
        type: this.type
      })
    ];
  }
}), g = /* @__PURE__ */ c.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: a,
        componentProps: {
          action: () => t.commands.toggleCode(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "Code",
          shortcutKeys: ["mod", "E"],
          tooltip: o("editor.code.tooltip")
        }
      })
    };
  }
});
export {
  g as Code
};

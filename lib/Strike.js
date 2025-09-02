import { M as r, c as n, d as i, m as o } from "./index-BWx1Mchx.js";
import { A as a } from "./RichTextEditor-jy1O8VR5.js";
const u = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, d = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, m = r.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", o(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      i({
        find: u,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      n({
        find: d,
        type: this.type
      })
    ];
  }
}), g = /* @__PURE__ */ m.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: s }) => ({
        component: a,
        componentProps: {
          action: () => e.commands.toggleStrike(),
          isActive: () => e.isActive("strike") || !1,
          disabled: !1,
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "S"],
          tooltip: s("editor.strike.tooltip")
        }
      })
    };
  }
});
export {
  g as Strike
};

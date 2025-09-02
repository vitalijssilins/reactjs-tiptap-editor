import { M as a, c as s, d as n, m as i } from "./index-BWx1Mchx.js";
import { A as o } from "./RichTextEditor-jy1O8VR5.js";
const l = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, c = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, d = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, u = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, m = a.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", i(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      n({
        find: l,
        type: this.type
      }),
      n({
        find: d,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      s({
        find: c,
        type: this.type
      }),
      s({
        find: u,
        type: this.type
      })
    ];
  }
}), y = /* @__PURE__ */ m.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: e, t: r }) {
        return {
          component: o,
          componentProps: {
            action: () => e.commands.toggleItalic(),
            isActive: () => e.isActive("italic") || !1,
            disabled: !1,
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: r("editor.italic.tooltip")
          }
        };
      }
    };
  }
});
export {
  y as Italic
};

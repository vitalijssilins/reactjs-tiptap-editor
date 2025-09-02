import { M as o, c as s, f as n, m as a } from "./index-sel2RZJw.js";
import { H as u } from "./HighlightActionButton-CYwPkB5h.js";
const h = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, l = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, g = o.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: r }) => r.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: r }) => r.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      n({
        find: h,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      s({
        find: l,
        type: this.type
      })
    ];
  }
}), p = /* @__PURE__ */ g.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      multicolor: !0,
      button: ({ editor: r, t: i }) => ({
        component: u,
        componentProps: {
          action: (e) => {
            typeof e == "string" && r.chain().focus().setHighlight({ color: e }).run(), e === void 0 && r.chain().focus().unsetHighlight().run();
          },
          editor: r,
          isActive: () => r.isActive("highlight") || !1,
          disabled: !1,
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: i("editor.highlight.tooltip")
        }
      })
    };
  }
});
export {
  p as Highlight
};

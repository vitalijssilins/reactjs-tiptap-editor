import { N as a, w as i, m as r } from "./index-BWx1Mchx.js";
import { A as p } from "./RichTextEditor-BSiZeOM2.js";
const d = "listItem", o = "textStyle", n = /^(\d+)\.\s$/, u = a.create({
  name: "orderedList",
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
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...s } = t;
    return e === 1 ? ["ol", r(this.options.HTMLAttributes, s), 0] : ["ol", r(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(d, this.editor.getAttributes(o)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = i({
      find: n,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = i({
      find: n,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(o) }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1],
      editor: this.editor
    })), [
      t
    ];
  }
}), h = /* @__PURE__ */ u.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: s }) => ({
        component: p,
        componentProps: {
          action: () => e.commands.toggleOrderedList(),
          isActive: () => e.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: s("editor.orderedlist.tooltip")
        }
      })
    };
  }
});
export {
  h as OrderedList
};

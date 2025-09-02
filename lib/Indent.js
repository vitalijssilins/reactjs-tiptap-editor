import { E as s } from "./index-BWx1Mchx.js";
import { c as d, I as e, A as r } from "./RichTextEditor-jy1O8VR5.js";
const p = /* @__PURE__ */ s.create({
  name: "indent",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: e.min,
      maxIndent: e.max,
      button({ editor: n, t: o }) {
        return [
          {
            component: r,
            componentProps: {
              action: () => {
                n.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: o("editor.indent.tooltip")
            }
          },
          {
            component: r,
            componentProps: {
              action: () => {
                n.commands.outdent();
              },
              shortcutKeys: ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: o("editor.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (t) => {
              const n = t.dataset.indent;
              return (n ? Number.parseInt(n, 10) : 0) || 0;
            },
            renderHTML: (t) => t.indent ? { "data-indent": t.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => d({
        delta: e.more,
        types: this.options.types
      }),
      outdent: () => d({
        delta: e.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
});
export {
  p as Indent
};

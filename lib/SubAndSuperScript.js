import { E as a } from "./index-BWx1Mchx.js";
import { S as b, a as l } from "./index-DEFQHExY.js";
import { A as r } from "./RichTextEditor-BSiZeOM2.js";
const g = /* @__PURE__ */ a.create({
  name: "subAndSuperScript",
  addOptions() {
    var s;
    return {
      ...(s = this.parent) == null ? void 0 : s.call(this),
      button: ({ editor: t, extension: p, t: o }) => {
        const c = p.options.subscript, n = p.options.superscript, e = {
          component: r,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: o("editor.subscript.tooltip")
          }
        }, u = {
          component: r,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: o("editor.superscript.tooltip")
          }
        }, i = [];
        return c !== !1 && i.push(e), n !== !1 && i.push(u), i;
      }
    };
  },
  addExtensions() {
    const s = [];
    return this.options.subscript !== !1 && s.push(b.configure(this.options.subscript)), this.options.superscript !== !1 && s.push(l.configure(this.options.superscript)), s;
  }
});
export {
  g as SubAndSuperScript
};

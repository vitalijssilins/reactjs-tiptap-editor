import { E as i } from "./index-sel2RZJw.js";
import { A as s } from "./ActionButton-D15ZSL0z.js";
const r = /* @__PURE__ */ i.create({
  name: "codeView",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: o }) {
        return {
          component: s,
          componentProps: {
            action: () => {
              t.commands.toggleCodeView();
            },
            isActive: () => t.storage.codeView.isActive || !1,
            disabled: !1,
            icon: "CodeView",
            tooltip: o("editor.codeView.tooltip") || "View HTML Code",
            customClass: "tiptap-code-view-button"
          }
        };
      }
    };
  },
  addStorage() {
    return {
      isActive: !1,
      originalContent: ""
    };
  },
  addCommands() {
    return {
      toggleCodeView: () => ({ editor: e }) => {
        const t = e.storage.codeView.isActive;
        if (t)
          e.commands.setContent(e.getText());
        else {
          const o = e.getHTML();
          e.storage.codeView.originalContent = o;
          const n = o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
          e.commands.setContent(
            `<div class="tiptap-code-view-wrapper">${n}</div>`
          );
        }
        return e.storage.codeView.isActive = !t, !0;
      }
    };
  }
});
export {
  r as CodeView
};

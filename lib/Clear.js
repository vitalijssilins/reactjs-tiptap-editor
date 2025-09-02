import { N as r } from "./index-BWx1Mchx.js";
import { A as e } from "./RichTextEditor-BSiZeOM2.js";
const s = /* @__PURE__ */ r.create({
  name: "clear",
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      button: ({ editor: t, t: n }) => ({
        component: e,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: n("editor.clear.tooltip")
        }
      })
    };
  }
});
export {
  s as Clear
};

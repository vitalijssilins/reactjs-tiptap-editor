import { E as a } from "./index-sel2RZJw.js";
import { Packer as i, WidthType as c } from "docx";
import { defaultNodes as t, DocxSerializer as d, defaultMarks as l } from "prosemirror-docx";
import { A as p } from "./ActionButton-D15ZSL0z.js";
const m = typeof window < "u";
function u(e, o) {
  if (m) {
    const n = window.URL.createObjectURL(e), r = document.createElement("a");
    return r.href = n, r.download = o, r.click(), window.URL.revokeObjectURL(n), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const f = {
  ...t,
  hardBreak: t.hard_break,
  codeBlock: t.code_block,
  orderedList: t.ordered_list,
  listItem: t.list_item,
  bulletList: t.bullet_list,
  horizontalRule: t.horizontal_rule,
  // Requirement Buffer on browser
  image(e, o) {
    e.renderInline(o), e.closeBlock(o);
  },
  table(e, o) {
    e.table(o, {
      tableOptions: {
        width: {
          size: 100,
          type: c.PERCENTAGE
        }
      }
    });
  }
}, w = /* @__PURE__ */ new d(f, l), y = /* @__PURE__ */ a.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: o, t: n }) => ({
        component: p,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            o == null || o.commands.exportToWord();
          },
          tooltip: n("editor.exportWord.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  // @ts-expect-error
  addCommands() {
    return {
      exportToWord: () => async ({ editor: e }) => {
        const o = {
          getImageBuffer: async (r) => {
            const s = await (await fetch(r)).arrayBuffer();
            return new Uint8Array(s);
          }
        }, n = w.serialize(e.state.doc, o);
        return i.toBlob(n).then((r) => u(new Blob([r]), "export-document.docx")), !0;
      }
    };
  }
});
export {
  y as ExportWord
};

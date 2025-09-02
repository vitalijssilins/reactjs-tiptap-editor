import { E as m, P as u, a as c } from "./index-BWx1Mchx.js";
import { A as p } from "./RichTextEditor-jy1O8VR5.js";
const v = /* @__PURE__ */ m.create({
  name: "painter",
  addOptions() {
    var n;
    return {
      ...(n = this.parent) == null ? void 0 : n.call(this),
      button: ({ editor: t, t: e }) => ({
        component: p,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: e("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (n) => ({
        view: {
          dispatch: t,
          state: { tr: e },
          dom: s
        }
      }) => {
        const a = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return s.style.cursor = a, t(e.setMeta("painterAction", { type: "start", marks: n })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new u({
        key: new c("format-painter"),
        state: {
          init: () => [],
          apply: (n, t) => {
            const e = n.getMeta("painterAction");
            return e && e.type === "start" ? t = e.marks : e && e.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(n) {
              const t = this.getState(n.state);
              if (!t || t.length === 0)
                return n.dom.style.cursor = "", !1;
              const e = () => {
                document.removeEventListener("mouseup", e);
                let {
                  dispatch: s,
                  state: { tr: o, selection: r },
                  dom: a
                } = n;
                a.style.cursor = "", o = o.removeMark(r.from, r.to);
                for (const i of t)
                  i.type.name !== "link" && (o = o.addMark(r.from, r.to, i));
                s(o.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", e), !0;
            }
          }
        }
      })
    ];
  }
});
export {
  v as FormatPainter
};

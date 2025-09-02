import { N as f, n as h, f as A, i as H, T as a, g as T, m as p } from "./index-BWx1Mchx.js";
import { A as y } from "./RichTextEditor-BB0ShA4S.js";
const M = f.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: o }) {
    return ["hr", p(this.options.HTMLAttributes, o)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: o, state: n }) => {
        if (!A(n, n.schema.nodes[this.name]))
          return !1;
        const { selection: s } = n, { $from: c, $to: l } = s, r = o();
        return c.parentOffset === 0 ? r.insertContentAt({
          from: Math.max(c.pos - 1, 0),
          to: l.pos
        }, {
          type: this.name
        }) : H(s) ? r.insertContentAt(l.pos, {
          type: this.name
        }) : r.insertContent({ type: this.name }), r.command(({ tr: e, dispatch: m }) => {
          var i;
          if (m) {
            const { $to: t } = e.selection, d = t.end();
            if (t.nodeAfter)
              t.nodeAfter.isTextblock ? e.setSelection(a.create(e.doc, t.pos + 1)) : t.nodeAfter.isBlock ? e.setSelection(T.create(e.doc, t.pos)) : e.setSelection(a.create(e.doc, t.pos));
            else {
              const u = (i = t.parent.type.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.create();
              u && (e.insert(d, u), e.setSelection(a.create(e.doc, d + 1)));
            }
            e.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      h({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), S = /* @__PURE__ */ M.extend({
  renderHTML() {
    return [
      "div",
      p(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      button: ({ editor: n, t: s }) => ({
        component: y,
        componentProps: {
          action: () => n.commands.setHorizontalRule(),
          disabled: !n.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: s("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
export {
  S as HorizontalRule
};

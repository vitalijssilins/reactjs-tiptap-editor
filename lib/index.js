import { useRef as L, useState as A, useEffect as D } from "react";
import { a6 as V, a7 as H } from "./RichTextEditor-BJznYeTS.js";
import { a8 as Te } from "./RichTextEditor-BJznYeTS.js";
import { B as Ee } from "./dom-dataset-DR4-OJWP.js";
import { E as p, P as m, a as S, s as F, D as x, b as k, u as W, F as E, S as O, T as B, g as z, v, x as I, y as G, N as M, m as N, z as K } from "./index-D84lfj--.js";
import { ListItem as X } from "./ListItem.js";
import { T as Y } from "./index-TVe2VFXZ.js";
import { Document as J } from "./Document.js";
import { Selection as j } from "./Selection.js";
import { TextBubble as q } from "./TextBubble.js";
import { TrailingNode as U } from "./TrailingNode.js";
import { n as y } from "./index-6fSuOJHp.js";
function Se() {
  var n;
  const t = L({ editor: null }), [e, r] = A(!1), [s, o] = A(null);
  return D(() => {
    var i;
    (i = t.current) != null && i.editor && (r(!0), o(t.current.editor));
  }, [t, (n = t.current) == null ? void 0 : n.editor]), { isReady: e, editor: s, editorRef: t };
}
const Q = p.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t) => t.length,
      wordCounter: (t) => t.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
      if (((t == null ? void 0 : t.mode) || this.options.mode) === "textSize") {
        const s = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(s);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc, r = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(r);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new m({
        key: new S("characterCount"),
        appendTransaction: (e, r, s) => {
          if (t)
            return;
          const o = this.options.limit;
          if (o == null || o === 0) {
            t = !0;
            return;
          }
          const n = this.storage.characters({ node: s.doc });
          if (n > o) {
            const i = n - o, l = 0, a = i;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`);
            const c = s.tr.deleteRange(l, a);
            return t = !0, c;
          }
          t = !0;
        },
        filterTransaction: (e, r) => {
          const s = this.options.limit;
          if (!e.docChanged || s === 0 || s === null || s === void 0)
            return !0;
          const o = this.storage.characters({ node: r.doc }), n = this.storage.characters({ node: e.doc });
          if (n <= s || o > s && n > s && n <= o)
            return !0;
          if (o > s && n > s && n > o || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = n - s, c = l - a, f = l;
          return e.deleteRange(c, f), !(this.storage.characters({ node: e.doc }) > s);
        }
      })
    ];
  }
});
function Z(t = {}) {
  return new m({
    view(e) {
      return new $(e, t);
    }
  });
}
class $ {
  constructor(e, r) {
    var s;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (s = r.width) !== null && s !== void 0 ? s : 1, this.color = r.color === !1 ? void 0 : r.color || "black", this.class = r.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((o) => {
      let n = (i) => {
        this[o](i);
      };
      return e.dom.addEventListener(o, n), { name: o, handler: n };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: r }) => this.editorView.dom.removeEventListener(e, r));
  }
  update(e, r) {
    this.cursorPos != null && r.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), r = !e.parent.inlineContent, s, o = this.editorView.dom, n = o.getBoundingClientRect(), i = n.width / o.offsetWidth, l = n.height / o.offsetHeight;
    if (r) {
      let u = e.nodeBefore, h = e.nodeAfter;
      if (u || h) {
        let g = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
        if (g) {
          let C = g.getBoundingClientRect(), w = u ? C.bottom : C.top;
          u && h && (w = (w + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let T = this.width / 2 * l;
          s = { left: C.left, right: C.right, top: w - T, bottom: w + T };
        }
      }
    }
    if (!s) {
      let u = this.editorView.coordsAtPos(this.cursorPos), h = this.width / 2 * i;
      s = { left: u.left - h, right: u.left + h, top: u.top, bottom: u.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", r), this.element.classList.toggle("prosemirror-dropcursor-inline", !r);
    let c, f;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, f = -pageYOffset;
    else {
      let u = a.getBoundingClientRect(), h = u.width / a.offsetWidth, g = u.height / a.offsetHeight;
      c = u.left - a.scrollLeft * h, f = u.top - a.scrollTop * g;
    }
    this.element.style.left = (s.left - c) / i + "px", this.element.style.top = (s.top - f) / l + "px", this.element.style.width = (s.right - s.left) / i + "px", this.element.style.height = (s.bottom - s.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let r = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), s = r && r.inside >= 0 && this.editorView.state.doc.nodeAt(r.inside), o = s && s.type.spec.disableDropCursor, n = typeof o == "function" ? o(this.editorView, r, e) : o;
    if (r && !n) {
      let i = r.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = F(this.editorView.state.doc, i, this.editorView.dragging.slice);
        l != null && (i = l);
      }
      this.setCursor(i), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
const _ = p.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      Z(this.options)
    ];
  }
}), ee = p.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new m({
        key: new S("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: r, isFocused: s } = this.editor, { anchor: o } = e, n = [];
            if (!r || !s)
              return x.create(t, []);
            let i = 0;
            this.options.mode === "deepest" && t.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              i += 1;
            });
            let l = 0;
            return t.descendants((a, c) => {
              if (a.isText || !(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && i - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              n.push(k.node(c, c + a.nodeSize, {
                class: this.options.className
              }));
            }), x.create(t, n);
          }
        }
      })
    ];
  }
});
class d extends v {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, r) {
    let s = e.resolve(r.map(this.head));
    return d.valid(s) ? new d(s) : v.near(s);
  }
  content() {
    return O.empty;
  }
  eq(e) {
    return e instanceof d && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, r) {
    if (typeof r.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new d(e.resolve(r.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new P(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let r = e.parent;
    if (r.isTextblock || !te(e) || !re(e))
      return !1;
    let s = r.type.spec.allowGapCursor;
    if (s != null)
      return s;
    let o = r.contentMatchAt(e.index()).defaultType;
    return o && o.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, r, s = !1) {
    e: for (; ; ) {
      if (!s && d.valid(e))
        return e;
      let o = e.pos, n = null;
      for (let i = e.depth; ; i--) {
        let l = e.node(i);
        if (r > 0 ? e.indexAfter(i) < l.childCount : e.index(i) > 0) {
          n = l.child(r > 0 ? e.indexAfter(i) : e.index(i) - 1);
          break;
        } else if (i == 0)
          return null;
        o += r;
        let a = e.doc.resolve(o);
        if (d.valid(a))
          return a;
      }
      for (; ; ) {
        let i = r > 0 ? n.firstChild : n.lastChild;
        if (!i) {
          if (n.isAtom && !n.isText && !z.isSelectable(n)) {
            e = e.doc.resolve(o + n.nodeSize * r), s = !1;
            continue e;
          }
          break;
        }
        n = i, o += r;
        let l = e.doc.resolve(o);
        if (d.valid(l))
          return l;
      }
      return null;
    }
  }
}
d.prototype.visible = !1;
d.findFrom = d.findGapCursorFrom;
v.jsonID("gapcursor", d);
class P {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new P(e.map(this.pos));
  }
  resolve(e) {
    let r = e.resolve(this.pos);
    return d.valid(r) ? new d(r) : v.near(r);
  }
}
function R(t) {
  return t.isAtom || t.spec.isolating || t.spec.createGapCursor;
}
function te(t) {
  for (let e = t.depth; e >= 0; e--) {
    let r = t.index(e), s = t.node(e);
    if (r == 0) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(r - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || R(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function re(t) {
  for (let e = t.depth; e >= 0; e--) {
    let r = t.indexAfter(e), s = t.node(e);
    if (r == s.childCount) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(r); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || R(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function oe() {
  return new m({
    props: {
      decorations: le,
      createSelectionBetween(t, e, r) {
        return e.pos == r.pos && d.valid(r) ? new d(r) : null;
      },
      handleClick: ie,
      handleKeyDown: se,
      handleDOMEvents: { beforeinput: ne }
    }
  });
}
const se = W({
  ArrowLeft: b("horiz", -1),
  ArrowRight: b("horiz", 1),
  ArrowUp: b("vert", -1),
  ArrowDown: b("vert", 1)
});
function b(t, e) {
  const r = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(s, o, n) {
    let i = s.selection, l = e > 0 ? i.$to : i.$from, a = i.empty;
    if (i instanceof B) {
      if (!n.endOfTextblock(r) || l.depth == 0)
        return !1;
      a = !1, l = s.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = d.findGapCursorFrom(l, e, a);
    return c ? (o && o(s.tr.setSelection(new d(c))), !0) : !1;
  };
}
function ie(t, e, r) {
  if (!t || !t.editable)
    return !1;
  let s = t.state.doc.resolve(e);
  if (!d.valid(s))
    return !1;
  let o = t.posAtCoords({ left: r.clientX, top: r.clientY });
  return o && o.inside > -1 && z.isSelectable(t.state.doc.nodeAt(o.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new d(s))), !0);
}
function ne(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof d))
    return !1;
  let { $from: r } = t.state.selection, s = r.parent.contentMatchAt(r.index()).findWrapping(t.state.schema.nodes.text);
  if (!s)
    return !1;
  let o = E.empty;
  for (let i = s.length - 1; i >= 0; i--)
    o = E.from(s[i].createAndFill(null, o));
  let n = t.state.tr.replace(r.pos, r.pos, new O(o, 0, 0));
  return n.setSelection(B.near(n.doc.resolve(r.pos + 1))), t.dispatch(n), !1;
}
function le(t) {
  if (!(t.selection instanceof d))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", x.create(t.doc, [k.widget(t.selection.head, e, { key: "gapcursor" })]);
}
const ae = p.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      oe()
    ];
  },
  extendNodeSchema(t) {
    var e;
    const r = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = I(G(t, "allowGapCursor", r))) !== null && e !== void 0 ? e : null
    };
  }
}), ce = M.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", N(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: r, editor: s }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: o, storedMarks: n } = r;
          if (o.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: i } = this.options, { splittableMarks: l } = s.extensionManager, a = n || o.$to.parentOffset && o.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: f }) => {
            if (f && a && i) {
              const u = a.filter((h) => l.includes(h.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), de = M.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", N(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), ue = p.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new m({
        key: new S("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const r = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: s } = e, o = [];
            if (!r)
              return null;
            const n = this.editor.isEmpty;
            return t.descendants((i, l) => {
              const a = s >= l && s <= l + i.nodeSize, c = !i.isLeaf && K(i);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const f = [this.options.emptyNodeClass];
                n && f.push(this.options.emptyEditorClass);
                const u = k.node(l, l + i.nodeSize, {
                  class: f.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: i,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                o.push(u);
              }
              return this.options.includeChildren;
            }), x.create(t, o);
          }
        }
      })
    ];
  }
}), fe = M.create({
  name: "text",
  group: "inline"
}), ke = /* @__PURE__ */ p.create({
  name: "base-kit",
  addExtensions() {
    const t = [];
    return this.options.document !== !1 && t.push(J.configure()), this.options.placeholder !== !1 && t.push(
      ue.configure({
        placeholder: ({ node: e, pos: r, editor: s }) => {
          var o, n, i, l, a;
          return ((o = e == null ? void 0 : e.type) == null ? void 0 : o.name) === "columns" || ((n = e == null ? void 0 : e.content) == null ? void 0 : n.size) !== 0 ? "" : ((i = e == null ? void 0 : e.type) == null ? void 0 : i.name) === "heading" ? `${y.t(`editor.heading.h${e.attrs.level}.tooltip`)}` : ((l = e == null ? void 0 : e.type) == null ? void 0 : l.name) === "codeBlock" || ((a = e == null ? void 0 : e.type) == null ? void 0 : a.name) === "table" ? "" : s.extensionManager.extensions.some((c) => c.name === "slashCommand") ? y.t("editor.slash") : r === 0 ? y.t("editor.content") : y.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      ee.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && t.push(fe.configure()), this.options.textBubble !== !1 && t.push(q.configure()), this.options.gapcursor !== !1 && t.push(ae.configure()), this.options.dropcursor !== !1 && t.push(
      _.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && t.push(Q.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(de.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(ce.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(X.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(Y.configure(this.options.textStyle)), this.options.trailingNode !== !1 && t.push(U.configure(this.options.trailingNode)), this.options.selection !== !1 && t.push(j), this.options.multiColumn !== !1 && t.push(V, H), t;
  }
});
export {
  ke as BaseKit,
  Ee as BubbleMenu,
  Te as default,
  Se as useEditorState
};

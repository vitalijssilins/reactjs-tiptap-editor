import { useRef as O, useState as S, useEffect as B } from "react";
import { a6 as z, a7 as N } from "./RichTextEditor-BSiZeOM2.js";
import { a8 as ve } from "./RichTextEditor-BSiZeOM2.js";
import { B as ke } from "./dom-dataset-CHDbKz5J.js";
import { E as f, P as p, a as w, r as L, D as C, b, s as R, F as k, S as P, T as M, g as T, u as y, v as D, x as V, N as x, m as A, y as H } from "./index-BWx1Mchx.js";
import { ListItem as F } from "./ListItem.js";
import { T as I } from "./index-DIPntess.js";
import { Document as K } from "./Document.js";
import { Selection as W } from "./Selection.js";
import { TextBubble as G } from "./TextBubble.js";
import { TrailingNode as J } from "./TrailingNode.js";
import { m } from "./index-Tj3Ci7xM.js";
function ye() {
  var l;
  const t = O({ editor: null }), [e, o] = S(!1), [s, r] = S(null);
  return B(() => {
    var i;
    (i = t.current) != null && i.editor && (o(!0), r(t.current.editor));
  }, [t, (l = t.current) == null ? void 0 : l.editor]), { isReady: e, editor: s, editorRef: t };
}
const X = f.create({
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
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc, o = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(o);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new p({
        key: new w("characterCount"),
        appendTransaction: (e, o, s) => {
          if (t)
            return;
          const r = this.options.limit;
          if (r == null || r === 0) {
            t = !0;
            return;
          }
          const l = this.storage.characters({ node: s.doc });
          if (l > r) {
            const i = l - r, n = 0, a = i;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`);
            const c = s.tr.deleteRange(n, a);
            return t = !0, c;
          }
          t = !0;
        },
        filterTransaction: (e, o) => {
          const s = this.options.limit;
          if (!e.docChanged || s === 0 || s === null || s === void 0)
            return !0;
          const r = this.storage.characters({ node: o.doc }), l = this.storage.characters({ node: e.doc });
          if (l <= s || r > s && l > s && l <= r)
            return !0;
          if (r > s && l > s && l > r || !e.getMeta("paste"))
            return !1;
          const n = e.selection.$head.pos, a = l - s, c = n - a, d = n;
          return e.deleteRange(c, d), !(this.storage.characters({ node: e.doc }) > s);
        }
      })
    ];
  }
});
function Y(t = {}) {
  return new p({
    view(e) {
      return new j(e, t);
    }
  });
}
class j {
  constructor(e, o) {
    var s;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (s = o.width) !== null && s !== void 0 ? s : 1, this.color = o.color === !1 ? void 0 : o.color || "black", this.class = o.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let l = (i) => {
        this[r](i);
      };
      return e.dom.addEventListener(r, l), { name: r, handler: l };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: o }) => this.editorView.dom.removeEventListener(e, o));
  }
  update(e, o) {
    this.cursorPos != null && o.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), o = !e.parent.inlineContent, s;
    if (o) {
      let n = e.nodeBefore, a = e.nodeAfter;
      if (n || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (n ? n.nodeSize : 0));
        if (c) {
          let d = c.getBoundingClientRect(), h = n ? d.bottom : d.top;
          n && a && (h = (h + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), s = { left: d.left, right: d.right, top: h - this.width / 2, bottom: h + this.width / 2 };
        }
      }
    }
    if (!s) {
      let n = this.editorView.coordsAtPos(this.cursorPos);
      s = { left: n.left - this.width / 2, right: n.left + this.width / 2, top: n.top, bottom: n.bottom };
    }
    let r = this.editorView.dom.offsetParent;
    this.element || (this.element = r.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", o), this.element.classList.toggle("prosemirror-dropcursor-inline", !o);
    let l, i;
    if (!r || r == document.body && getComputedStyle(r).position == "static")
      l = -pageXOffset, i = -pageYOffset;
    else {
      let n = r.getBoundingClientRect();
      l = n.left - r.scrollLeft, i = n.top - r.scrollTop;
    }
    this.element.style.left = s.left - l + "px", this.element.style.top = s.top - i + "px", this.element.style.width = s.right - s.left + "px", this.element.style.height = s.bottom - s.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let o = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), s = o && o.inside >= 0 && this.editorView.state.doc.nodeAt(o.inside), r = s && s.type.spec.disableDropCursor, l = typeof r == "function" ? r(this.editorView, o, e) : r;
    if (o && !l) {
      let i = o.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let n = L(this.editorView.state.doc, i, this.editorView.dragging.slice);
        n != null && (i = n);
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
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const q = f.create({
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
      Y(this.options)
    ];
  }
}), U = f.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new p({
        key: new w("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: o, isFocused: s } = this.editor, { anchor: r } = e, l = [];
            if (!o || !s)
              return C.create(t, []);
            let i = 0;
            this.options.mode === "deepest" && t.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(r >= c && r <= c + a.nodeSize - 1))
                return !1;
              i += 1;
            });
            let n = 0;
            return t.descendants((a, c) => {
              if (a.isText || !(r >= c && r <= c + a.nodeSize - 1))
                return !1;
              if (n += 1, this.options.mode === "deepest" && i - n > 0 || this.options.mode === "shallowest" && n > 1)
                return this.options.mode === "deepest";
              l.push(b.node(c, c + a.nodeSize, {
                class: this.options.className
              }));
            }), C.create(t, l);
          }
        }
      })
    ];
  }
});
class u extends y {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, o) {
    let s = e.resolve(o.map(this.head));
    return u.valid(s) ? new u(s) : y.near(s);
  }
  content() {
    return P.empty;
  }
  eq(e) {
    return e instanceof u && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, o) {
    if (typeof o.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new u(e.resolve(o.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new v(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let o = e.parent;
    if (o.isTextblock || !Q(e) || !Z(e))
      return !1;
    let s = o.type.spec.allowGapCursor;
    if (s != null)
      return s;
    let r = o.contentMatchAt(e.index()).defaultType;
    return r && r.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, o, s = !1) {
    e: for (; ; ) {
      if (!s && u.valid(e))
        return e;
      let r = e.pos, l = null;
      for (let i = e.depth; ; i--) {
        let n = e.node(i);
        if (o > 0 ? e.indexAfter(i) < n.childCount : e.index(i) > 0) {
          l = n.child(o > 0 ? e.indexAfter(i) : e.index(i) - 1);
          break;
        } else if (i == 0)
          return null;
        r += o;
        let a = e.doc.resolve(r);
        if (u.valid(a))
          return a;
      }
      for (; ; ) {
        let i = o > 0 ? l.firstChild : l.lastChild;
        if (!i) {
          if (l.isAtom && !l.isText && !T.isSelectable(l)) {
            e = e.doc.resolve(r + l.nodeSize * o), s = !1;
            continue e;
          }
          break;
        }
        l = i, r += o;
        let n = e.doc.resolve(r);
        if (u.valid(n))
          return n;
      }
      return null;
    }
  }
}
u.prototype.visible = !1;
u.findFrom = u.findGapCursorFrom;
y.jsonID("gapcursor", u);
class v {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new v(e.map(this.pos));
  }
  resolve(e) {
    let o = e.resolve(this.pos);
    return u.valid(o) ? new u(o) : y.near(o);
  }
}
function Q(t) {
  for (let e = t.depth; e >= 0; e--) {
    let o = t.index(e), s = t.node(e);
    if (o == 0) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = s.child(o - 1); ; r = r.lastChild) {
      if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Z(t) {
  for (let e = t.depth; e >= 0; e--) {
    let o = t.indexAfter(e), s = t.node(e);
    if (o == s.childCount) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = s.child(o); ; r = r.firstChild) {
      if (r.childCount == 0 && !r.inlineContent || r.isAtom || r.type.spec.isolating)
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function $() {
  return new p({
    props: {
      decorations: re,
      createSelectionBetween(t, e, o) {
        return e.pos == o.pos && u.valid(o) ? new u(o) : null;
      },
      handleClick: ee,
      handleKeyDown: _,
      handleDOMEvents: { beforeinput: te }
    }
  });
}
const _ = R({
  ArrowLeft: g("horiz", -1),
  ArrowRight: g("horiz", 1),
  ArrowUp: g("vert", -1),
  ArrowDown: g("vert", 1)
});
function g(t, e) {
  const o = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(s, r, l) {
    let i = s.selection, n = e > 0 ? i.$to : i.$from, a = i.empty;
    if (i instanceof M) {
      if (!l.endOfTextblock(o) || n.depth == 0)
        return !1;
      a = !1, n = s.doc.resolve(e > 0 ? n.after() : n.before());
    }
    let c = u.findGapCursorFrom(n, e, a);
    return c ? (r && r(s.tr.setSelection(new u(c))), !0) : !1;
  };
}
function ee(t, e, o) {
  if (!t || !t.editable)
    return !1;
  let s = t.state.doc.resolve(e);
  if (!u.valid(s))
    return !1;
  let r = t.posAtCoords({ left: o.clientX, top: o.clientY });
  return r && r.inside > -1 && T.isSelectable(t.state.doc.nodeAt(r.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new u(s))), !0);
}
function te(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof u))
    return !1;
  let { $from: o } = t.state.selection, s = o.parent.contentMatchAt(o.index()).findWrapping(t.state.schema.nodes.text);
  if (!s)
    return !1;
  let r = k.empty;
  for (let i = s.length - 1; i >= 0; i--)
    r = k.from(s[i].createAndFill(null, r));
  let l = t.state.tr.replace(o.pos, o.pos, new P(r, 0, 0));
  return l.setSelection(M.near(l.doc.resolve(o.pos + 1))), t.dispatch(l), !1;
}
function re(t) {
  if (!(t.selection instanceof u))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", C.create(t.doc, [b.widget(t.selection.head, e, { key: "gapcursor" })]);
}
const oe = f.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      $()
    ];
  },
  extendNodeSchema(t) {
    var e;
    const o = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = D(V(t, "allowGapCursor", o))) !== null && e !== void 0 ? e : null
    };
  }
}), se = x.create({
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
    return ["br", A(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: o, editor: s }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: r, storedMarks: l } = o;
          if (r.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: i } = this.options, { splittableMarks: n } = s.extensionManager, a = l || r.$to.parentOffset && r.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && i) {
              const h = a.filter((E) => n.includes(E.type.name));
              c.ensureMarks(h);
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
}), ie = x.create({
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
    return ["p", A(this.options.HTMLAttributes, t), 0];
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
}), ne = f.create({
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
      new p({
        key: new w("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const o = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: s } = e, r = [];
            if (!o)
              return null;
            const l = this.editor.isEmpty;
            return t.descendants((i, n) => {
              const a = s >= n && s <= n + i.nodeSize, c = !i.isLeaf && H(i);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const d = [this.options.emptyNodeClass];
                l && d.push(this.options.emptyEditorClass);
                const h = b.node(n, n + i.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: i,
                    pos: n,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                r.push(h);
              }
              return this.options.includeChildren;
            }), C.create(t, r);
          }
        }
      })
    ];
  }
}), le = x.create({
  name: "text",
  group: "inline"
}), we = /* @__PURE__ */ f.create({
  name: "base-kit",
  addExtensions() {
    const t = [];
    return this.options.document !== !1 && t.push(K.configure()), this.options.placeholder !== !1 && t.push(
      ne.configure({
        placeholder: ({ node: e, pos: o, editor: s }) => {
          var r, l, i, n, a;
          return ((r = e == null ? void 0 : e.type) == null ? void 0 : r.name) === "columns" || ((l = e == null ? void 0 : e.content) == null ? void 0 : l.size) !== 0 ? "" : ((i = e == null ? void 0 : e.type) == null ? void 0 : i.name) === "heading" ? `${m.t(`editor.heading.h${e.attrs.level}.tooltip`)}` : ((n = e == null ? void 0 : e.type) == null ? void 0 : n.name) === "codeBlock" || ((a = e == null ? void 0 : e.type) == null ? void 0 : a.name) === "table" ? "" : s.extensionManager.extensions.some((c) => c.name === "slashCommand") ? m.t("editor.slash") : o === 0 ? m.t("editor.content") : m.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      U.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && t.push(le.configure()), this.options.textBubble !== !1 && t.push(G.configure()), this.options.gapcursor !== !1 && t.push(oe.configure()), this.options.dropcursor !== !1 && t.push(
      q.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && t.push(X.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(ie.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(se.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(F.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(I.configure(this.options.textStyle)), this.options.trailingNode !== !1 && t.push(J.configure(this.options.trailingNode)), this.options.selection !== !1 && t.push(W), this.options.multiColumn !== !1 && t.push(z, N), t;
  }
});
export {
  we as BaseKit,
  ke as BubbleMenu,
  ve as default,
  ye as useEditorState
};

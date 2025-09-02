import { E as A, a as O } from "./index-BWx1Mchx.js";
import { a as D } from "./dom-dataset-CHDbKz5J.js";
import { S as P } from "./index-oQutU45z.js";
import B from "tippy.js";
import { jsx as g, jsxs as k } from "react/jsx-runtime";
import { forwardRef as $, useState as N, useRef as E, useImperativeHandle as z, useEffect as M, Fragment as T } from "react";
import { d as V, k as U, q, E as K, R as G, U as F, V as j } from "./RichTextEditor-BSiZeOM2.js";
import { u as W, m as h } from "./index-Tj3Ci7xM.js";
function Q(i, m) {
  var L, v;
  const [t, n] = N(0), [e, a] = N(0), r = E(null), { t: s } = W(), u = E([]);
  z(m, () => ({
    onKeyDown: f
  })), M(() => {
    if (!r.current)
      return;
    const l = e * 1e3 + t, c = u.current[l];
    c && c.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [t, e]);
  function f({ event: l }) {
    return l.key === "ArrowUp" ? (w(), !0) : l.key === "ArrowDown" ? (b(), !0) : l.key === "Enter" ? (y(), !0) : !1;
  }
  function w() {
    var d;
    if (i.items.length === 0)
      return !1;
    let l = t - 1, c = e;
    l < 0 && (c = e - 1, l = ((d = i.items[c]) == null ? void 0 : d.commands.length) - 1 || 0), c < 0 && (c = i.items.length - 1, l = i.items[c].commands.length - 1), n(l), a(c);
  }
  function b() {
    if (i.items.length === 0)
      return !1;
    const l = i.items[e].commands;
    let c = t + 1, d = e;
    l.length - 1 < c && (c = 0, d = e + 1), i.items.length - 1 < d && (d = 0), n(c), a(d);
  }
  function y() {
    if (i.items.length === 0 || e === -1 || t === -1)
      return !1;
    C(e, t);
  }
  function C(l, c) {
    const d = i.items[l].commands[c];
    i.command(d);
  }
  function H(l, c) {
    C(l, c);
  }
  function I(l, c, d) {
    u.current[l * 1e3 + c] = d;
  }
  return /* @__PURE__ */ g(
    "div",
    {
      className: "richtext-mb-8 richtext-max-h-[min(80vh,24rem)] richtext-flex-wrap richtext-overflow-auto richtext-rounded-lg !richtext-border !richtext-border-neutral-200 !richtext-bg-white richtext-p-1 !richtext-text-black richtext-shadow-sm dark:!richtext-border-neutral-800 dark:!richtext-bg-black",
      ref: r,
      children: (L = i == null ? void 0 : i.items) != null && L.length ? /* @__PURE__ */ g("div", { className: "richtext-grid richtext-min-w-48 richtext-grid-cols-1 richtext-gap-0.5", children: (v = i == null ? void 0 : i.items) == null ? void 0 : v.map((l, c) => /* @__PURE__ */ k(T, { children: [
        /* @__PURE__ */ g("div", { className: "richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-select-none richtext-text-[0.65rem] richtext-font-semibold richtext-uppercase richtext-tracking-wider !richtext-text-neutral-500 first:richtext-mt-0.5", children: l.title }),
        l.commands.map((d, R) => /* @__PURE__ */ k(
          "button",
          {
            onClick: () => H(c, R),
            ref: (S) => I(c, R, S),
            className: V("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": e === c && t === R
            }),
            children: [
              d.iconUrl && /* @__PURE__ */ g(
                "img",
                {
                  alt: "",
                  className: "richtext-size-6",
                  src: d.iconUrl
                }
              ),
              d.iconName && /* @__PURE__ */ g(
                U,
                {
                  className: "!richtext-mr-1 !richtext-text-lg",
                  name: d.iconName
                }
              ),
              d.label
            ]
          },
          `command-${R}`
        ))
      ] }, `slash-${l.title}`)) }) : /* @__PURE__ */ g("div", { className: "richtext-p-3", children: /* @__PURE__ */ g("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: s("editor.slash.empty") }) })
    }
  );
}
const _ = $(Q), J = {
  setOpen: (i, m) => {
    q(K.UPLOAD_VIDEO(i), m);
  }
};
function X(i, m) {
  const t = [
    {
      name: "format",
      title: h.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: h.t("editor.slash.insert"),
      commands: []
    }
  ];
  return i.forEach((n) => {
    n.name.toLowerCase() === "heading" && n.options.levels.forEach((e) => {
      t[0].commands.push({
        name: `heading${e}`,
        //@ts-expect-error
        label: h.t(`editor.heading.h${e}.tooltip`),
        aliases: [`h${e}`, "bt", `bt${e}`],
        iconName: `Heading${e}`,
        action: ({ editor: a, range: r }) => {
          a.chain().focus().deleteRange(r).setHeading({ level: e }).run();
        }
      });
    }), n.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: h.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), n.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: h.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), n.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: h.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), n.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: h.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), n.name.toLowerCase() === "codeblock" && t[0].commands.push({
      name: "codeBlock",
      label: h.t("editor.codeblock.tooltip"),
      iconName: "Code2",
      description: "Code block with syntax highlighting",
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setCodeBlock().run();
      }
    }), n.name.toLowerCase() === G.name && t[1].commands.push({
      name: "image",
      label: h.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).run(), F.setOpen(e.id, !0);
      }
    }), n.name.toLowerCase() === j.name && t[1].commands.push({
      name: "video",
      label: h.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).run(), J.setOpen(e.id, !0);
      }
    }), n.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: h.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (e) => e.isActive("columns"),
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), n.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: h.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: e, range: a }) => {
        e.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), n.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: h.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: e }) => {
        e.chain().focus().insertColumns({ cols: 2 }).run();
      }
    }), m == null || m(n, t);
  }), t;
}
const x = "slashCommand";
let o;
const oe = /* @__PURE__ */ A.create({
  name: x,
  priority: 200,
  onCreate() {
    o = B("body", {
      interactive: !0,
      trigger: "manual",
      placement: "bottom-start",
      theme: "slash-command",
      maxWidth: "16rem",
      offset: [16, 8],
      popperOptions: {
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            enabled: !1
          }
        ]
      }
    });
  },
  addProseMirrorPlugins() {
    return [
      P({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new O(x),
        allow: ({ state: i, range: m }) => {
          var f, w, b;
          const t = i.doc.resolve(m.from), n = t.depth === 1, e = t.parent.type.name === "paragraph", a = ((f = t.parent.textContent) == null ? void 0 : f.charAt(0)) === "/", r = this.editor.isActive("column"), s = (b = t.parent.textContent) == null ? void 0 : b.slice(
            Math.max(0, (w = t.parent.textContent) == null ? void 0 : w.indexOf("/"))
          ), u = !(s != null && s.endsWith("  "));
          return (n && e && a || r && e && a) && u;
        },
        command: ({ editor: i, range: m, props: t }) => {
          const { view: n } = i;
          t.action({ editor: i, range: m }), n.focus();
        },
        items: ({ query: i, editor: m }) => X(m.extensionManager.extensions, this.options.renderGroupItem).map((r) => ({
          ...r,
          commands: r.commands.filter((s) => {
            const u = s.label.toLowerCase().trim(), f = i.toLowerCase().trim();
            if (s.aliases) {
              const w = s.aliases.map((C) => C.toLowerCase().trim()), b = u.match(f), y = w.some((C) => C.match(f));
              return b || y;
            }
            return u.match(f);
          }).filter(
            (s) => s.shouldBeHidden ? !s.shouldBeHidden(this.editor) : !0
          )
        })).filter((r) => r.commands.length > 0).map((r) => ({
          ...r,
          commands: r.commands.map((s) => ({
            ...s,
            isEnabled: !0
          }))
        })),
        render: () => {
          let i, m = null;
          return {
            onStart: (t) => {
              var a;
              i = new D(_, {
                props: t,
                editor: t.editor
              });
              const { view: n } = t.editor, e = () => {
                if (!t.clientRect)
                  return t.editor.storage[x].rect;
                const r = t.clientRect();
                if (!r)
                  return t.editor.storage[x].rect;
                let s = r.y;
                if (r.top + i.element.offsetHeight + 40 > window.innerHeight) {
                  const u = r.top + i.element.offsetHeight - window.innerHeight + 40;
                  s = r.y - u;
                }
                return new DOMRect(r.x, s, r.width, r.height);
              };
              m = () => {
                o == null || o[0].setProps({
                  getReferenceClientRect: e
                });
              }, (a = n.dom.parentElement) == null || a.addEventListener("scroll", m), o == null || o[0].setProps({
                getReferenceClientRect: e,
                appendTo: () => document.body,
                content: i.element
              }), o == null || o[0].show();
            },
            onUpdate(t) {
              var r;
              i.updateProps(t);
              const { view: n } = t.editor, e = () => {
                if (!t.clientRect)
                  return t.editor.storage[x].rect;
                const s = t.clientRect();
                return s ? new DOMRect(s.x, s.y, s.width, s.height) : t.editor.storage[x].rect;
              }, a = () => {
                o == null || o[0].setProps({
                  getReferenceClientRect: e
                });
              };
              (r = n.dom.parentElement) == null || r.addEventListener("scroll", a), t.editor.storage[x].rect = t.clientRect ? e() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, o == null || o[0].setProps({
                getReferenceClientRect: e
              });
            },
            onKeyDown(t) {
              var n;
              return t.event.key === "Escape" ? (o == null || o[0].hide(), !0) : (o != null && o[0].state.isShown || o == null || o[0].show(), (n = i.ref) == null ? void 0 : n.onKeyDown(t));
            },
            onExit(t) {
              var n;
              if (o == null || o[0].hide(), m) {
                const { view: e } = t.editor;
                (n = e.dom.parentElement) == null || n.removeEventListener("scroll", m);
              }
              i.destroy();
            }
          };
        }
      })
    ];
  },
  addStorage() {
    return {
      rect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
});
export {
  oe as SlashCommand,
  oe as default
};

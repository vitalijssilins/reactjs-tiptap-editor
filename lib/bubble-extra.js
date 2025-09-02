import { jsxs as b, jsx as t, Fragment as w } from "react/jsx-runtime";
import { useState as y, useRef as F, useCallback as v, useEffect as T, useMemo as W, Fragment as G } from "react";
import { B as E } from "./index-CJo9otU0.js";
import { Mermaid as j } from "./Mermaid.js";
import { s as Z, i as J } from "./shortId-WJVkrvml.js";
import { A as S } from "./ActionButton-D15ZSL0z.js";
import { D as Q, a as X, b as Y, c as ee, d as te } from "./dialog-DWW5z2Zs.js";
import { T as re } from "./textarea-yZZRtHgT.js";
import { d as ne } from "./file-BLas99n7.js";
import { B as H } from "./button-CcHmDfB3.js";
import { u as D } from "./theme-Dt3LKWNl.js";
import { u as O } from "./index-ZqXobaiP.js";
import { g as ce, S as se, a as le } from "./SizeSetter-rba2E6_h.js";
import { S as ie } from "./separator-DsUDfBB2.js";
import { E as I, t as de } from "./Excalidraw-C9x4dmlG.js";
import { d as R } from "./delete-node-IyVmiRbI.js";
import { T as K, F as he } from "./Twitter-Buab0tLj.js";
import ue from "katex";
import { HelpCircle as me, Pencil as fe, Trash2 as xe } from "lucide-react";
import { Katex as P } from "./Katex.js";
import { C as pe, D as _ } from "./Drawer-CkkdxiGv.js";
import { Editor as ge, makeDropdownToolbar as be } from "easydrawer";
const q = `graph TB
a-->b`, we = ({ editor: e, attrs: s, extension: o }) => {
  const { alt: a, align: n } = s, [r, i] = y(decodeURIComponent(a ?? q)), [l, h] = y(""), [m, f] = y(!1), p = F(null), [x, M] = y(null), k = o == null ? void 0 : o.options.upload, A = v(
    (g) => {
      g && import("mermaid").then((B) => {
        M(B.default);
      });
    },
    []
  ), z = async (g) => {
    try {
      const { svg: B } = await x.render("mermaid-svg", g);
      h(B);
    } catch {
      h("");
    }
  }, $ = () => {
    x.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), z(r);
  };
  return T(() => {
    x && m && $();
  }, [x, m]), T(() => {
    x && m && z(r);
  }, [x, r]), /* @__PURE__ */ b(
    Q,
    {
      onOpenChange: f,
      open: m,
      children: [
        /* @__PURE__ */ t(X, { asChild: !0, children: /* @__PURE__ */ t(
          S,
          {
            action: () => f(!0),
            icon: "Pencil",
            tooltip: "Edit Mermaid"
          }
        ) }),
        /* @__PURE__ */ b(Y, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ t(ee, { children: "Edit Mermaid" }),
          /* @__PURE__ */ t(
            "div",
            {
              ref: A,
              style: { height: "100%", border: "1px solid hsl(var(--border))" },
              children: /* @__PURE__ */ b("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
                /* @__PURE__ */ t(
                  re,
                  {
                    autoFocus: !0,
                    className: "richtext-flex-1",
                    defaultValue: q,
                    onChange: (g) => i(g.target.value),
                    placeholder: "Text",
                    required: !0,
                    rows: 10,
                    value: r,
                    style: {
                      color: "hsl(var(--richtext-foreground))"
                    }
                  }
                ),
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                    dangerouslySetInnerHTML: { __html: l },
                    ref: p,
                    style: { height: "100%", border: "1px solid hsl(var(--border))", minHeight: 500, background: "#fff" }
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(
            H,
            {
              onClick: async () => {
                if (r !== "") {
                  if (r) {
                    const g = p.current.querySelector("svg"), { width: B, height: V } = g.getBoundingClientRect(), u = `mermaid-${Z()}.svg`;
                    let c = J(g.outerHTML);
                    if (k) {
                      const d = ne(c, u);
                      c = await k(d);
                    }
                    e == null || e.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: c,
                        alt: encodeURIComponent(r),
                        width: B,
                        height: V
                      },
                      !!r
                    ).run(), e == null || e.commands.setAlignImageMermaid(n);
                  }
                  f(!1);
                }
              },
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
};
function oe(e, s) {
  const [o, a] = y(void 0);
  return T(() => {
    const n = () => {
      const r = e.extensionManager.extensions.find((i) => i.name === s);
      r && a(r);
    };
    return e.on("selectionUpdate", n), e.on("transaction", n), () => {
      e.off("selectionUpdate", n), e.off("transaction", n);
    };
  }, [e, s]), o;
}
const ve = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ye({ item: e, disabled: s, editor: o }) {
  var n;
  const a = e.component;
  return a ? /* @__PURE__ */ t(G, { children: e.type === "divider" ? /* @__PURE__ */ t(
    ie,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ t(
    a,
    {
      ...e.componentProps,
      disabled: s || ((n = e == null ? void 0 : e.componentProps) == null ? void 0 : n.disabled),
      editor: o
    }
  ) }) : /* @__PURE__ */ t(w, {});
}
function Se(e) {
  return e.type.name === "mermaid";
}
function Je(e) {
  const { lang: s } = O(), o = D(e.editor, j.name), a = oe(e.editor, j.name), n = ({ editor: i }) => {
    const { selection: l } = i.view.state, { $from: h, to: m } = l;
    let f = !1;
    return i.view.state.doc.nodesBetween(h.pos, m, (p) => {
      if (Se(p))
        return f = !0, !1;
    }), f;
  }, r = W(() => e.disabled ? [] : ce(e.editor), [e.disabled, e.editor, s]);
  return /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t(
    E,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: ve,
      children: r != null && r.length ? /* @__PURE__ */ t("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ t("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((i, l) => i.type === "edit" && (o != null && o.src) ? /* @__PURE__ */ t(
        we,
        {
          attrs: o,
          editor: e.editor,
          extension: a
        },
        `bubbleMenu-mermaid-${l}`
      ) : /* @__PURE__ */ t(
        ye,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-mermaid-${l}`
      )) }) }) : /* @__PURE__ */ t(w, {})
    }
  ) });
}
const C = /* @__PURE__ */ new Map();
function Ce(e) {
  const s = e.options.element;
  C.has("width") || C.set("width", s.clientWidth), C.has("width") && C.get("width") <= 0 && C.set("width", s.clientWidth);
  const o = { attributes: !0, childList: !0, subtree: !0 }, a = function() {
    C.set("width", s.clientWidth);
  }, n = new MutationObserver(a);
  return n.observe(s, o), e.on("destroy", () => {
    n.disconnect();
  }), { width: C.get("width") };
}
function Qe({ editor: e }) {
  const { t: s } = O(), { width: o } = Ce(e), a = D(e, I.name, {
    defaultShowPicker: !1,
    createUser: "",
    width: 0,
    height: 0
  }), { defaultShowPicker: n, createUser: r, width: i, height: l } = a, h = v(
    (x) => {
      e.chain().updateAttributes(I.name, x).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), m = v(() => {
    de({ ...a, editor: e });
  }, [e, a]), f = v(() => e.isActive(I.name), [e]), p = v(() => R(I.name, e), [e]);
  return T(() => {
    n && (m(), e.chain().updateAttributes(I.name, { defaultShowPicker: !1 }).focus().run());
  }, [r, n, e, m]), /* @__PURE__ */ t(
    E,
    {
      className: "bubble-menu",
      editor: e,
      pluginKey: "excalidraw-bubble-menu",
      shouldShow: f,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ b("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ t(
          S,
          {
            icon: "Pencil",
            action: m,
            tooltip: s("editor.edit")
          }
        ),
        /* @__PURE__ */ t(se, { width: i, maxWidth: o, height: l, onOk: h, children: /* @__PURE__ */ t(
          S,
          {
            icon: "Settings",
            tooltip: s("editor.settings")
          }
        ) }),
        /* @__PURE__ */ t(
          S,
          {
            icon: "Trash2",
            action: p,
            tooltip: s("editor.delete")
          }
        )
      ] })
    }
  );
}
function Xe({ editor: e, disabled: s }) {
  const [o, a] = y(!1), { t: n } = O(), r = v(({ editor: h }) => h.isActive(K.name), []), i = (h) => {
    e.commands.updateTweet({ src: h }), a(!1);
  }, l = v(() => R(K.name, e), [e]);
  return /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t(
    E,
    {
      editor: e,
      shouldShow: r,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          a(!1);
        }
      },
      children: s ? /* @__PURE__ */ t(w, {}) : /* @__PURE__ */ t(w, { children: o ? /* @__PURE__ */ t(
        he,
        {
          editor: e,
          onSetLink: i
        }
      ) : /* @__PURE__ */ t("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-lg !richtext-border richtext-border-neutral-200 richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ b("div", { className: "richtext-flex richtext-flex-nowrap", children: [
        /* @__PURE__ */ t(
          S,
          {
            icon: "Pencil",
            tooltip: n("editor.link.edit.tooltip"),
            tooltipOptions: { sideOffset: 15 },
            action: () => {
              a(!0);
            }
          }
        ),
        /* @__PURE__ */ t(
          S,
          {
            action: l,
            icon: "Trash",
            tooltip: n("editor.delete"),
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] }) }) })
    }
  ) });
}
function Ye({ editor: e, ...s }) {
  const o = D(e, P.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: a, defaultShowPicker: n } = o, [r, i] = y(""), [l, h] = y(!1), m = v(() => e.isActive(P.name), [e]), f = v(() => R(P.name, e), [e]), p = v(() => {
    e.chain().focus().setKatex({ text: r }).run(), h(!1);
  }, [e, r]);
  T(() => {
    n && (h(!0), e.chain().updateAttributes(P.name, { defaultShowPicker: !1 }).focus().run());
  }, [e, n, h]), T(() => {
    l && i(a || "");
  }, [l]);
  const x = W(() => {
    try {
      return ue.renderToString(`${r}`);
    } catch {
      return r;
    }
  }, [r]), M = W(
    () => `${r}`.trim() ? /* @__PURE__ */ t(
      "span",
      {
        contentEditable: !1,
        dangerouslySetInnerHTML: { __html: x || "" }
      }
    ) : null,
    [r, x]
  );
  return /* @__PURE__ */ t(
    E,
    {
      editor: e,
      pluginKey: "Katex-bubble-menu",
      shouldShow: m,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          h(!1);
        }
      },
      children: s != null && s.disabled ? /* @__PURE__ */ t(w, {}) : /* @__PURE__ */ t("div", { className: "richtext-rounded-lg !richtext-border richtext-border-neutral-200 richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: l ? /* @__PURE__ */ b(w, { children: [
        /* @__PURE__ */ t(
          re,
          {
            autoFocus: !0,
            defaultValue: a,
            onChange: (k) => i(k.target.value),
            placeholder: "Formula text",
            rows: 3,
            style: { marginBottom: 8 },
            value: r
          }
        ),
        M && /* @__PURE__ */ t("div", { className: "richtext-my-[10px] richtext-overflow-auto richtext-whitespace-nowrap richtext-rounded-[6px] !richtext-border richtext-p-[10px]", children: M }),
        /* @__PURE__ */ b("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
          /* @__PURE__ */ t(
            H,
            {
              className: "richtext-flex-1",
              onClick: p,
              children: "Submit"
            }
          ),
          /* @__PURE__ */ t(
            "a",
            {
              href: "https://katex.org/docs/supported",
              rel: "noreferrer noopener",
              target: "_blank",
              children: /* @__PURE__ */ t(me, { size: 16 })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ b("div", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-gap-[6px]", children: [
        /* @__PURE__ */ t(
          S,
          {
            action: () => h(!l),
            tooltip: "Edit",
            children: /* @__PURE__ */ t(fe, { size: 16 })
          }
        ),
        /* @__PURE__ */ t(
          S,
          {
            action: f,
            tooltip: "Delete",
            children: /* @__PURE__ */ t(xe, { size: 16 })
          }
        )
      ] }) })
    }
  );
}
let N = !1;
function Te({ editor: e, attrs: s, extension: o }) {
  const [a, n] = y(!1), r = F(null), i = F(null), { alt: l, align: h } = s, m = o == null ? void 0 : o.options.upload, f = () => {
    (async () => {
      const c = document.querySelector("#easydrawer");
      c && (r.current = new ge(c, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), i.current = be(r.current), i.current.addDefaultToolWidgets(), r.current.loadFromSVG(decodeURIComponent(l)));
    })();
  };
  T(() => {
    a && setTimeout(() => {
      f();
    }, 200);
  }, [a]);
  const p = async () => {
    if (r.current) {
      const u = r.current.toSVG(), c = u.outerHTML, d = `drawer-${Z()}.svg`;
      let L = J(u.outerHTML);
      if (m) {
        const ae = ne(L, d);
        L = await m(ae);
      }
      e == null || e.chain().focus().setDrawer(
        {
          type: "drawer",
          src: L,
          alt: encodeURIComponent(c),
          width: 426,
          height: 212
        },
        !!c
      ).run(), e == null || e.commands.setAlignImageDrawer(h);
    }
    n(!1);
  }, x = (u) => {
    const c = r.current.toolController.getPrimaryTools()[2], d = i.current.getWidgetById("pen-1");
    c && d && (c.setColor(u), d.serializeState());
  }, M = (u) => {
    const c = r.current.toolController.getPrimaryTools()[2], d = i.current.getWidgetById("pen-1");
    c && d && (c.setThickness(u), d.serializeState());
  }, k = (u) => {
    const c = r.current.toolController.getPrimaryTools()[3], d = i.current.getWidgetById("pen-2");
    c && d && (c.setColor(u), d.serializeState());
  }, A = (u) => {
    const c = i.current.getWidgetById("shape");
    c && c.setShapeType(u);
  }, z = (u) => {
    const c = r.current.toolController.getPrimaryTools()[5], d = i.current.getWidgetById("shape");
    c && d && (c.setColor(u), d.serializeState());
  }, $ = (u) => {
    const c = r.current.toolController.getPrimaryTools()[5], d = i.current.getWidgetById("shape");
    c && d && (c.setThickness(u), d.serializeState());
  }, U = (u) => {
    const c = r.current.toolController.getPrimaryTools()[5], d = i.current.getWidgetById("shape");
    c && d && (c.setBorderColor(u), d.serializeState());
  }, g = () => {
    if (N) {
      for (; r.current.history.redoStackSize > 0; )
        r.current.history.redo();
      N = !1;
      return;
    }
    r.current.history.undo();
  };
  return /* @__PURE__ */ b(
    Q,
    {
      onOpenChange: n,
      open: a,
      children: [
        /* @__PURE__ */ t(X, { asChild: !0, children: /* @__PURE__ */ t(
          S,
          {
            action: () => n(!0),
            icon: "Pencil",
            tooltip: "Edit Drawer"
          }
        ) }),
        /* @__PURE__ */ b(Y, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ t(ee, { children: "Edit Drawer" }),
          /* @__PURE__ */ b("div", { style: { height: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ t(
              pe,
              {
                changeBorderColorShape: U,
                changeColorShape: z,
                changeShape: A,
                onClear: () => {
                  if (!N) {
                    for (; r.current.history.undoStackSize > 0; )
                      g();
                    N = !0;
                  }
                },
                onRedo: () => {
                  N || r.current.history.redo();
                },
                onThicknessChange: $,
                onUndo: g,
                refEditor: r,
                setColorHighlight: k,
                setColorPen: x,
                setThicknessPen: M
              }
            )
          ] }),
          /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(
            H,
            {
              onClick: p,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}
const Me = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ke({ item: e, disabled: s, editor: o }) {
  var n;
  const a = e.component;
  return a ? /* @__PURE__ */ t(G, { children: e.type === "divider" ? /* @__PURE__ */ t(
    ie,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ t(
    a,
    {
      ...e.componentProps,
      disabled: s || ((n = e == null ? void 0 : e.componentProps) == null ? void 0 : n.disabled),
      editor: o
    }
  ) }) : /* @__PURE__ */ t(w, {});
}
function Be(e) {
  return e.type.name === "drawer";
}
function et(e) {
  const { lang: s } = O(), o = D(e.editor, _.name), a = oe(e.editor, _.name), n = ({ editor: i }) => {
    const { selection: l } = i.view.state, { $from: h, to: m } = l;
    let f = !1;
    return i.view.state.doc.nodesBetween(h.pos, m, (p) => {
      if (Be(p))
        return f = !0, !1;
    }), f;
  }, r = W(() => e.disabled ? [] : le(e.editor), [e.disabled, e.editor, s]);
  return /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t(
    E,
    {
      editor: e == null ? void 0 : e.editor,
      shouldShow: n,
      tippyOptions: Me,
      children: r != null && r.length ? /* @__PURE__ */ t("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ t("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((i, l) => i.type === "edit" && (o != null && o.src) ? /* @__PURE__ */ t(
        Te,
        {
          attrs: o,
          editor: e.editor,
          extension: a
        },
        `bubbleMenu-drawer-${l}`
      ) : /* @__PURE__ */ t(
        ke,
        {
          disabled: e.disabled,
          editor: e.editor,
          item: i
        },
        `bubbleMenu-drawer-${l}`
      )) }) }) : /* @__PURE__ */ t(w, {})
    }
  ) });
}
export {
  et as BubbleMenuDrawer,
  Qe as BubbleMenuExcalidraw,
  Ye as BubbleMenuKatex,
  Je as BubbleMenuMermaid,
  Xe as BubbleMenuTwitter
};

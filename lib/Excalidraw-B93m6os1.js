import { N as Z, n as k, m as z } from "./index-BWx1Mchx.js";
import { N as P, c as C, R as j, n as V, g as y } from "./dom-dataset-CHDbKz5J.js";
import { jsxs as w, jsx as n } from "react/jsx-runtime";
import { useMemo as B, useState as o, useCallback as f, useEffect as A, useRef as U } from "react";
import { w as $, x as F, A as M, y as X, z as G, F as K, B as Y, K as q } from "./RichTextEditor-BSiZeOM2.js";
import { n as J } from "./index-Tj3Ci7xM.js";
import { Resizable as Q } from "re-resizable";
let I;
function D() {
  try {
    return I || (I = J()), I;
  } catch {
    throw new Error("Error EventEmitter");
  }
}
const S = "OPEN_EXCALIDRAW_SETTING_MODAL";
function ee(e, a) {
  D().on(e, a);
}
function te(e, a) {
  D().off(e, a);
}
function we(e) {
  D().emit(S, e);
}
const re = ({ editor: e }) => {
  const a = B(() => {
    var t;
    return ((t = e.extensionManager.extensions.find(
      (r) => r.name === "excalidraw"
    )) == null ? void 0 : t.options) || {};
  }, [e]), [i, h] = o(null), [p, l] = o({}), [m, E] = o({ elements: [], appState: { isLoading: !1 }, files: null }), [u, c] = o(!1), [d, x] = o(!0), [s, T] = o(null), _ = f(
    (t) => {
      t && import("@excalidraw/excalidraw").then((r) => {
        h(r.Excalidraw);
      }).catch(T).finally(() => x(!1));
    },
    [x]
  ), N = f((t) => {
    setTimeout(() => {
      t.refresh();
    });
  }, []), v = f((t, r, g) => {
    l({
      elements: t,
      appState: { isLoading: !1 },
      files: g
    });
  }, []), L = f(() => {
    if (!i) {
      c(!1);
      return;
    }
    e.chain().focus().setExcalidraw({ data: p }).run(), c(!1);
  }, [i, e, p, c]);
  return A(() => {
    const t = (r) => {
      (r == null ? void 0 : r.editor) === e && (c(!0), r && E(r.data));
    };
    return ee(S, t), () => {
      te(S, t);
    };
  }, [e, c]), A(() => {
    !d && i && u && setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 400);
  }, [d, i, u]), /* @__PURE__ */ w(
    $,
    {
      onOpenChange: c,
      open: u,
      children: [
        /* @__PURE__ */ n(F, { asChild: !0, children: /* @__PURE__ */ n(
          M,
          {
            action: () => c(!0),
            icon: "Excalidraw",
            tooltip: "Excalidraw"
          }
        ) }),
        /* @__PURE__ */ w(X, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ n(G, { children: "Excalidraw" }),
          /* @__PURE__ */ w("div", { style: { height: "100%", borderWidth: 1 }, children: [
            d && /* @__PURE__ */ n("p", { children: "Loading..." }),
            s && /* @__PURE__ */ n("p", { children: s && s.message || "Error" }),
            /* @__PURE__ */ n(
              "div",
              {
                ref: _,
                style: { width: "100%", height: 600 },
                children: !d && !s && i ? /* @__PURE__ */ n(
                  i,
                  {
                    initialData: m,
                    langCode: "en",
                    onChange: v,
                    ref: N,
                    ...a.excalidrawProps
                  }
                ) : null
              }
            )
          ] }),
          /* @__PURE__ */ n(K, { children: /* @__PURE__ */ n(
            Y,
            {
              onClick: L,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, ne = "_wrap_15k3c_1", ae = "_renderWrap_15k3c_7", ie = "_handlerWrap_15k3c_30", b = {
  wrap: ne,
  renderWrap: ae,
  handlerWrap: ie
}, se = 10, oe = 200, R = 15, W = { width: "100%", height: "100%", maxWidth: "100%" };
function le({ editor: e, node: a, updateAttributes: i }) {
  const h = U(null), p = e.isActive(ce.name), { data: l, width: m, height: E } = a.attrs, [u, c] = o(null), [d, x] = o(!0), [s, T] = o(null), [_, N] = o(100), v = f((t) => () => {
    N(
      (r) => q(t === "minus" ? r - R : r + R, se, oe)
    );
  }, []);
  A(() => {
    let t = !1;
    return import("@excalidraw/excalidraw").then((r) => {
      t || (h.current = r.exportToSvg);
    }).catch((r) => !t && T(r)).finally(() => !t && x(!1)), () => {
      t = !0;
    };
  }, [l]), A(() => {
    let t = !1;
    return (async () => {
      if (!h.current || t || d || s || !l)
        return;
      const g = await h.current(l);
      t || (g.setAttribute("width", "100%"), g.setAttribute("height", "100%"), g.setAttribute("display", "block"), c(g));
    })(), () => {
      t = !0;
    };
  }, [l, d, s]);
  const L = (t) => {
    i({ width: t.width, height: t.height });
  };
  return /* @__PURE__ */ n(P, { className: C(b.wrap, p && b.isActive), children: /* @__PURE__ */ n(
    Q,
    {
      size: { width: Number.parseInt(m), height: Number.parseInt(E) },
      onResizeStop: (t, r, g, O) => {
        L({
          width: Number.parseInt(m) + O.width,
          height: Number.parseInt(E) + O.height
        });
      },
      children: /* @__PURE__ */ w(
        "div",
        {
          className: C(b.renderWrap, "render-wrapper"),
          style: { ...W, overflow: "hidden" },
          children: [
            s && /* @__PURE__ */ n("div", { style: W, children: /* @__PURE__ */ n("p", { children: s.message || s }) }),
            d && /* @__PURE__ */ n("p", { children: "Loading..." }),
            !d && !s && u && /* @__PURE__ */ n(
              "div",
              {
                dangerouslySetInnerHTML: { __html: (u == null ? void 0 : u.outerHTML) ?? "" },
                style: {
                  height: "100%",
                  maxHeight: "100%",
                  padding: 24,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${_ / 100})`,
                  transition: "all ease-in-out .3s"
                }
              }
            ),
            /* @__PURE__ */ w("div", { className: b.handlerWrap, children: [
              /* @__PURE__ */ n(
                M,
                {
                  action: v("minus"),
                  icon: "ZoomOut",
                  tooltip: "Zoom Out"
                }
              ),
              /* @__PURE__ */ n(
                M,
                {
                  action: v("plus"),
                  icon: "ZoomIn",
                  tooltip: "Zoom In"
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
const H = { elements: [] }, ce = /* @__PURE__ */ Z.create({
  name: "excalidraw",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  addAttributes() {
    return {
      defaultShowPicker: {
        default: !1
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%",
        parseHTML: y("width")
      },
      height: {
        default: 240,
        parseHTML: y("height")
      },
      data: {
        default: H,
        parseHTML: y("data", !0)
      }
    };
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "excalidraw"
      },
      excalidrawProps: {},
      button: ({ editor: a }) => ({
        component: re,
        componentProps: {
          editor: a
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: a }) {
    return ["div", z(this.options.HTMLAttributes, e, V(a))];
  },
  addCommands() {
    return {
      setExcalidraw: (e) => ({ tr: a, commands: i, chain: h }) => {
        var p, l, m;
        return e = e || {}, e.data = e.data || H, ((m = (l = (p = a.selection) == null ? void 0 : p.node) == null ? void 0 : l.type) == null ? void 0 : m.name) == this.name ? i.updateAttributes(this.name, e) : h().insertContent({
          type: this.name,
          attrs: e
        }).run();
      }
    };
  },
  addNodeView() {
    return j(le);
  },
  addInputRules() {
    return [
      k({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  }
});
export {
  ce as E,
  we as t
};

import { h as $, m as X } from "./index-BWx1Mchx.js";
import { w as Z, x as J, A as K, y as Y, z as Q, F as tt, B as et, G as rt, J as V, K as it, N as at } from "./RichTextEditor-jy1O8VR5.js";
import { N as st, R as nt } from "./dom-dataset-CHDbKz5J.js";
import { jsxs as C, jsx as o } from "react/jsx-runtime";
import { useState as g, useRef as ot, useCallback as y, useEffect as E, useMemo as k } from "react";
import { s as lt, i as ct } from "./shortId-WJVkrvml.js";
import { T as ht } from "./textarea-wZ89omb6.js";
import { I as q, h as dt, i as W } from "./index-Tj3Ci7xM.js";
const j = `graph TB
a-->b`, ut = ({ editor: r, upload: t }) => {
  const [e, s] = g(j), [f, b] = g(""), [x, T] = g(!1), A = ot(null), [l, c] = g(null), N = y(
    (n) => {
      n && import("mermaid").then((p) => {
        c(p.default);
      });
    },
    []
  ), _ = async (n) => {
    try {
      const { svg: p } = await l.render("mermaid-svg", n);
      b(p);
    } catch {
      b("");
    }
  }, L = () => {
    l.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), _(e);
  };
  return E(() => {
    l && x && L();
  }, [l, x]), E(() => {
    l && x && _(e);
  }, [l && e]), /* @__PURE__ */ C(
    Z,
    {
      onOpenChange: T,
      open: x,
      children: [
        /* @__PURE__ */ o(J, { asChild: !0, children: /* @__PURE__ */ o(
          K,
          {
            action: () => T(!0),
            icon: "Mermaid",
            tooltip: "Mermaid"
          }
        ) }),
        /* @__PURE__ */ C(Y, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ o(Q, { children: "Mermaid" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: N,
              style: { height: "100%", border: "1px solid hsl(var(--border))" },
              children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
                /* @__PURE__ */ o(
                  ht,
                  {
                    autoFocus: !0,
                    className: "richtext-flex-1",
                    defaultValue: j,
                    onChange: (n) => s(n.target.value),
                    placeholder: "Text",
                    required: !0,
                    rows: 10,
                    value: e,
                    style: {
                      color: "hsl(var(--richtext-foreground))"
                    }
                  }
                ),
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                    dangerouslySetInnerHTML: { __html: f },
                    ref: A,
                    style: { height: "100%", borderWidth: 1, minHeight: 500, background: "#fff" }
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ o(tt, { children: /* @__PURE__ */ o(
            et,
            {
              onClick: async () => {
                if (e !== "") {
                  if (e) {
                    const n = A.current.querySelector("svg"), { width: p, height: H } = n.getBoundingClientRect(), I = `mermaid-${lt()}.svg`;
                    let w = ct(n.outerHTML);
                    if (t) {
                      console.log({
                        src: w
                      });
                      const R = rt(w, I);
                      w = await t(R);
                    }
                    r == null || r.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: w,
                        alt: encodeURIComponent(e),
                        width: p,
                        height: H
                      },
                      !!e
                    ).run();
                  }
                  T(!1);
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
}, O = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function mt({ editor: r, node: t, updateAttributes: e, getPos: s, selected: f }) {
  const [b, x] = g({
    width: q,
    height: q
  }), [T, A] = g({
    width: 0,
    height: 0
  }), [l] = g([
    O.TOP_LEFT,
    O.TOP_RIGHT,
    O.BOTTOM_LEFT,
    O.BOTTOM_RIGHT
  ]), [c, N] = g(!1), [_, L] = g({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: F } = t == null ? void 0 : t.attrs, n = k(() => {
    const { src: i, alt: d, width: u, height: M } = t == null ? void 0 : t.attrs, v = $(u) ? `${u}px` : u, a = $(M) ? `${M}px` : M;
    return {
      src: i || void 0,
      alt: d || void 0,
      style: {
        width: v || void 0,
        height: a || void 0
      }
    };
  }, [t == null ? void 0 : t.attrs]), p = k(() => {
    const {
      style: { width: i }
    } = n;
    return { width: i === "100%" ? i : void 0 };
  }, [n]);
  function H(i) {
    A({
      width: i.target.width,
      height: i.target.height
    });
  }
  function I() {
    r.commands.setNodeSelection(s());
  }
  const w = y(
    V(() => {
      const { width: i } = getComputedStyle(r.view.dom);
      x((d) => ({
        ...d,
        width: Number.parseInt(i, 10)
      }));
    }, W),
    [r]
  );
  function R(i, d) {
    i.preventDefault(), i.stopPropagation();
    const u = T.width, M = T.height, v = u / M;
    let a = Number(t.attrs.width), m = Number(t.attrs.height);
    const h = b.width;
    a && !m ? (a = a > h ? h : a, m = Math.round(a / v)) : m && !a ? (a = Math.round(m * v), a = a > h ? h : a) : !a && !m ? (a = u > h ? h : u, m = Math.round(a / v)) : a = a > h ? h : a, N(!0), L({
      x: i.clientX,
      y: i.clientY,
      w: a,
      h: m,
      dir: d
    });
  }
  const S = y(
    V((i) => {
      if (i.preventDefault(), i.stopPropagation(), !c)
        return;
      const { x: d, w: u, dir: M } = _, v = (i.clientX - d) * (/l/.test(M) ? -1 : 1), { width: a, height: m } = t == null ? void 0 : t.attrs, h = a / m, P = it(u + v, dt, b.width), U = Math.round(P / h);
      e({
        width: P,
        height: U
      });
    }, W),
    [c, _, b, e, t == null ? void 0 : t.attrs]
  ), z = y(
    (i) => {
      i.preventDefault(), i.stopPropagation(), c && (L({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), N(!1), I());
    },
    [c, I]
  ), G = y(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", z, !0);
  }, [S, z]), B = y(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", z, !0);
  }, [S, z]);
  E(() => (c ? G() : B(), () => {
    B();
  }), [c, G, B]);
  const D = k(() => new ResizeObserver(() => w()), [w]);
  return E(() => (D.observe(r.view.dom), () => {
    D.disconnect();
  }), [r.view.dom, D]), /* @__PURE__ */ o(
    st,
    {
      className: "image-view",
      style: { ...p, width: "100%", textAlign: F },
      children: /* @__PURE__ */ C(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...p, background: "#fff" },
          className: `image-view__body ${f ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ o(
              "img",
              {
                alt: n.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: I,
                onLoad: H,
                src: n.src,
                style: n.style
              }
            ),
            r.view.editable && (f || c) && /* @__PURE__ */ o("div", { className: "image-resizer", children: l == null ? void 0 : l.map((i) => /* @__PURE__ */ o(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${i}`,
                onMouseDown: (d) => R(d, i)
              },
              `image-dir-${i}`
            )) })
          ]
        }
      )
    }
  );
}
const Tt = /* @__PURE__ */ at.extend({
  name: "mermaid",
  addOptions() {
    var r;
    return {
      ...(r = this.parent) == null ? void 0 : r.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "mermaid"
      },
      button: ({ editor: t, t: e, extension: s }) => {
        var f;
        return {
          component: ut,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: t,
            icon: "Mermaid",
            tooltip: e("editor.mermaid.tooltip"),
            upload: (f = s == null ? void 0 : s.options) == null ? void 0 : f.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var r;
    return {
      ...(r = this.parent) == null ? void 0 : r.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const e = t.querySelector("img"), s = e == null ? void 0 : e.getAttribute("width");
          return s ? Number.parseInt(s, 10) : 320;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      height: {
        default: null,
        parseHTML: (t) => {
          const e = t.querySelector("img"), s = e == null ? void 0 : e.getAttribute("height");
          return s ? Number.parseInt(s, 10) : 212;
        },
        renderHTML: (t) => ({
          height: t.height
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return nt(mt);
  },
  // @ts-ignore
  addCommands() {
    return {
      setMermaid: (r, t) => ({ commands: e, editor: s }) => t ? e.insertContent({
        type: this.name,
        attrs: r
      }) : e.insertContentAt(s.state.selection.anchor, {
        type: this.name,
        attrs: r
      }),
      setAlignImageMermaid: (r) => ({ commands: t }) => t.updateAttributes(this.name, { align: r })
    };
  },
  renderHTML({ HTMLAttributes: r }) {
    const { align: t } = r;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageMermaid"
      },
      [
        "img",
        X(
          // @ts-ignore
          this.options.HTMLAttributes,
          r
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageMermaid]",
        getAttrs: (r) => {
          const t = r.querySelector("img"), e = t == null ? void 0 : t.getAttribute("width"), s = t == null ? void 0 : t.getAttribute("height");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            width: e ? Number.parseInt(e, 10) : null,
            height: s ? Number.parseInt(s, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || r.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  Tt as Mermaid
};

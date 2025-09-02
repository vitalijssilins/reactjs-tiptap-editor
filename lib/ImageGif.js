import { m as Y } from "./index-sel2RZJw.js";
import { t as k, I as V } from "./index-D4ootzAt.js";
import { N as j, R as q } from "./index-CJo9otU0.js";
import { jsx as r, jsxs as z, Fragment as X } from "react/jsx-runtime";
import { useState as v, useRef as K, useEffect as R, useCallback as x, useMemo as O } from "react";
import { A as Z } from "./ActionButton-D15ZSL0z.js";
import { d as U } from "./debounce-M7Yt2bxB.js";
import { P as J, a as Q, b as p } from "./popover-B8VvcibZ.js";
import { I as tt } from "./input-BQQ_iBrZ.js";
import { c as F, d as B, e as et } from "./index-oWDQeNNi.js";
import { i as D, c as it } from "./isNumber-CbxoT3F2.js";
function nt({ selectImage: t, giphyApiKey: e, children: n }) {
  const [s, I] = v([]), [u] = v(15), d = K(null), b = (o, N = "search") => {
    if (!e)
      return;
    const A = `${N === "search" ? `https://api.giphy.com/v1/gifs/search?q=${o}` : `https://api.giphy.com/v1/gifs/trending?q=${o}`}&limit=${u}&api_key=${e}`;
    fetch(A).then((g) => g.json()).then((g) => {
      I(g.data);
    }).catch((g) => {
      console.log(g);
    });
  };
  R(() => {
    b("", "trend");
  }, []);
  const T = x(
    U((o) => {
      if (!o.target.value) {
        b("", "trend");
        return;
      }
      b(o.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ z(J, { modal: !0, children: [
    /* @__PURE__ */ r(Q, { asChild: !0, children: n }),
    /* @__PURE__ */ r(
      p,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: e ? /* @__PURE__ */ z(X, { children: [
          /* @__PURE__ */ r("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ r(
            tt,
            {
              onChange: T,
              placeholder: "Search GIF",
              ref: d,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: s != null && s.length ? s == null ? void 0 : s.map((o) => /* @__PURE__ */ r(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: o.images.fixed_width_downsampled.height,
              onClick: () => t(o),
              src: o.images.fixed_width_downsampled.url,
              width: o.images.fixed_width_downsampled.width
            },
            `giphy-${o.id}`
          )) : /* @__PURE__ */ r("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function at({ editor: t, icon: e, giphyApiKey: n, ...s }) {
  return /* @__PURE__ */ r(
    nt,
    {
      giphyApiKey: n,
      selectImage: (u) => {
        const { url: d } = u.images.original;
        t.chain().focus().setImageGif({ src: d }).run();
      },
      children: /* @__PURE__ */ r(
        Z,
        {
          icon: e,
          tooltip: s == null ? void 0 : s.tooltip
        }
      )
    }
  );
}
const G = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function rt(t) {
  var $, C;
  const [e, n] = v({
    width: F,
    height: F
  }), [s, I] = v({
    width: 0,
    height: 0
  }), [u] = v([
    G.TOP_LEFT,
    G.TOP_RIGHT,
    G.BOTTOM_LEFT,
    G.BOTTOM_RIGHT
  ]), [d, b] = v(!1), [T, o] = v({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: N } = ($ = t == null ? void 0 : t.node) == null ? void 0 : $.attrs, _ = O(() => {
    var h;
    const { src: i, alt: c, width: l, height: f } = (h = t == null ? void 0 : t.node) == null ? void 0 : h.attrs, w = D(l) ? `${l}px` : l, a = D(f) ? `${f}px` : f;
    return {
      src: i || void 0,
      alt: c || void 0,
      style: {
        width: w || void 0,
        height: a || void 0
      }
    };
  }, [(C = t == null ? void 0 : t.node) == null ? void 0 : C.attrs]), A = O(() => {
    const {
      style: { width: i }
    } = _;
    return { width: i === "100%" ? i : void 0 };
  }, [_]);
  function g(i) {
    I({
      width: i.target.width,
      height: i.target.height
    });
  }
  function E() {
    const { editor: i, getPos: c } = t;
    i.commands.setNodeSelection(c());
  }
  const S = x(
    k(() => {
      const { editor: i } = t, { width: c } = getComputedStyle(i.view.dom);
      n((l) => ({
        ...l,
        width: Number.parseInt(c, 10)
      }));
    }, B),
    [t == null ? void 0 : t.editor]
  );
  function W(i, c) {
    i.preventDefault(), i.stopPropagation();
    const l = s.width, f = s.height, w = l / f;
    let a = Number(t.node.attrs.width), h = Number(t.node.attrs.height);
    const m = e.width;
    a && !h ? (a = a > m ? m : a, h = Math.round(a / w)) : h && !a ? (a = Math.round(h * w), a = a > m ? m : a) : !a && !h ? (a = l > m ? m : l, h = Math.round(a / w)) : a = a > m ? m : a, b(!0), o({
      x: i.clientX,
      y: i.clientY,
      w: a,
      h,
      dir: c
    });
  }
  const M = x(
    k((i) => {
      if (i.preventDefault(), i.stopPropagation(), !d)
        return;
      const { x: c, w: l, dir: f } = T, w = (i.clientX - c) * (/l/.test(f) ? -1 : 1), a = it(l + w, et, e.width);
      t.updateAttributes({
        width: a,
        height: null
      });
    }, B),
    [d, T, e, t.updateAttributes]
  ), y = x(
    (i) => {
      i.preventDefault(), i.stopPropagation(), d && (o({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), b(!1), E());
    },
    [d, E]
  ), H = x(() => {
    document == null || document.addEventListener("mousemove", M, !0), document == null || document.addEventListener("mouseup", y, !0);
  }, [M, y]), P = x(() => {
    document == null || document.removeEventListener("mousemove", M, !0), document == null || document.removeEventListener("mouseup", y, !0);
  }, [M, y]);
  R(() => (d ? H() : P(), () => {
    P();
  }), [d, H, P]);
  const L = O(() => new ResizeObserver(() => S()), [S]);
  return R(() => (L.observe(t.editor.view.dom), () => {
    L.disconnect();
  }), [t.editor.view.dom, L]), /* @__PURE__ */ r(
    j,
    {
      className: "image-view",
      style: { ...A, width: "100%", textAlign: N },
      children: /* @__PURE__ */ z(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: A,
          className: `image-view__body ${t != null && t.selected ? "image-view__body--focused" : ""} ${d ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                alt: _.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: E,
                onLoad: g,
                src: _.src,
                style: _.style
              }
            ),
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || d) && /* @__PURE__ */ r("div", { className: "image-resizer", children: u == null ? void 0 : u.map((i) => /* @__PURE__ */ r(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${i}`,
                onMouseDown: (c) => W(c, i)
              },
              `image-dir-${i}`
            )) })
          ]
        }
      )
    }
  );
}
const vt = /* @__PURE__ */ V.extend({
  name: "imageGif",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: e, extension: n, t: s }) => {
        var u;
        const I = ((u = n == null ? void 0 : n.options) == null ? void 0 : u.GIPHY_API_KEY) || "";
        return {
          component: at,
          componentProps: {
            editor: e,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: s("editor.imageGif.tooltip"),
            giphyApiKey: I
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      width: {
        default: null,
        parseHTML: (e) => {
          const n = e.style.width || e.getAttribute("width") || "10";
          return n === void 0 ? null : Number.parseInt(`${n}`, 10);
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      align: {
        default: "center",
        parseHTML: (e) => e.getAttribute("align"),
        renderHTML: (e) => ({
          align: e.align
        })
      }
    };
  },
  addNodeView() {
    return q(rt);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      setImageGif: (e) => ({ commands: n }) => n.insertContent({
        type: this.name,
        attrs: e
      }),
      updateImageGif: (e) => ({ commands: n }) => n.updateAttributes(this.name, e),
      setAlignImageGif: (e) => ({ commands: n }) => n.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { align: e } = t;
    return [
      "div",
      // Parent element
      {
        style: e ? `text-align: ${e};` : "",
        class: "imageGIf"
      },
      [
        "img",
        Y(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), n = e == null ? void 0 : e.getAttribute("width");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            title: e == null ? void 0 : e.getAttribute("title"),
            width: n ? Number.parseInt(n, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  vt as ImageGif,
  vt as default
};

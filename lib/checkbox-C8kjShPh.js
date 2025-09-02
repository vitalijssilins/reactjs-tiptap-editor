import { a as be, P as oe, b as ye, D as Ie, m as we } from "./index-sel2RZJw.js";
import { t as Z, I as ve } from "./index-D4ootzAt.js";
import { N as Ae, R as Te } from "./index-CJo9otU0.js";
import { jsxs as v, Fragment as O, jsx as s } from "react/jsx-runtime";
import * as Me from "react";
import X, { useState as L, useRef as le, useMemo as j, useEffect as G, useCallback as H } from "react";
import { A as Ee } from "./ActionButton-D15ZSL0z.js";
import { D as se, a as ce, b as de, c as ue, d as Ce } from "./dialog-DWW5z2Zs.js";
import Se from "react-image-crop";
import { B } from "./button-CcHmDfB3.js";
import { c as J, d as Q, e as Ne } from "./index-oWDQeNNi.js";
import { i as ee, c as Le } from "./isNumber-CbxoT3F2.js";
import { u as fe } from "./index-ZqXobaiP.js";
import { d as _e, r as ze } from "./file-BLas99n7.js";
import { u as me } from "./use-toast-Crf7-q5H.js";
import { I as Y } from "./Icon-BXO4CVnL.js";
import "./store-j-5VHU4U.js";
import { d as De, E as he, l as ke } from "./events.constant-BTaUfYyd.js";
import { T as Re, a as Pe, b as te, c as ie } from "./tabs-BkY1zAS3.js";
import * as V from "@radix-ui/react-checkbox";
import { Check as Ue } from "lucide-react";
import { c as ae } from "./index-BP_NLBls.js";
import { L as ne } from "./label-BUeBtRLx.js";
import { I as re } from "./input-BQQ_iBrZ.js";
function Oe(e, t) {
  const i = e.type, n = e.name.toLowerCase(), o = n.split(".").pop();
  if (!o) return !1;
  const u = i || {
    heif: "image/heif",
    heic: "image/heic",
    dng: "image/x-adobe-dng",
    cr2: "image/x-canon-cr2",
    nef: "image/x-nikon-nef",
    arw: "image/x-sony-arw",
    raf: "image/x-fuji-raf",
    orf: "image/x-olympus-orf"
  }[o];
  return t.some((g) => {
    if (g.startsWith("."))
      return n.endsWith(g);
    if (g.endsWith("/*")) {
      const m = g.split("/")[0];
      return u == null ? void 0 : u.startsWith(m + "/");
    }
    return u === g;
  });
}
function ge(e, t) {
  const { acceptMimes: i, maxSize: n, t: o, toast: a } = t, u = [];
  return (Array.isArray(e) ? e : Object.values(e)).forEach((m) => {
    if (!Oe(m, i)) {
      t.onError ? t.onError({
        type: "type",
        message: o("editor.upload.fileTypeNotSupported", { fileName: m.name }),
        file: m
      }) : a({
        variant: "default",
        title: o("editor.upload.fileTypeNotSupported", { fileName: m.name })
      });
      return;
    }
    if (m.size > n) {
      const p = (n / 1024 / 1024).toFixed(2);
      t.onError ? t.onError({
        type: "size",
        message: o("editor.upload.fileSizeTooBig", { fileName: m.name, size: p }),
        file: m
      }) : a({
        variant: "default",
        title: o("editor.upload.fileSizeTooBig", { fileName: m.name, size: p })
      });
      return;
    }
    u.push(m);
  }), u;
}
function Fe({ editor: e, imageInline: t, onClose: i, disabled: n, alt: o }) {
  var k, c;
  const { t: a } = fe(), { toast: u } = me(), [g, m] = L(!1), [p, x] = L(!1), b = X.useRef(null), [C, w] = X.useState(), [S, D] = X.useState(""), l = le(null), [T, _] = L({
    src: "",
    file: null
  }), y = j(() => {
    var r;
    return (r = e.extensionManager.extensions.find(
      (d) => d.name === q.name
    )) == null ? void 0 : r.options;
  }, [e]);
  function P(r) {
    if (b.current && r.width && r.height) {
      const d = f(b.current, r);
      D(d);
    }
  }
  function f(r, d) {
    const I = document.createElement("canvas"), M = r.naturalWidth / r.width, h = r.naturalHeight / r.height;
    I.width = d.width * M, I.height = d.height * h;
    const A = I.getContext("2d");
    return A && (A.imageSmoothingEnabled = !1, A.drawImage(
      r,
      d.x * M,
      d.y * h,
      d.width * M,
      d.height * h,
      0,
      0,
      d.width * M,
      d.height * h
    )), I.toDataURL("image/png", 1);
  }
  const E = X.useCallback(async () => {
    var r;
    if (!p) {
      x(!0);
      try {
        const d = _e(S, ((r = T == null ? void 0 : T.file) == null ? void 0 : r.name) || "image.png");
        let I = "";
        y.upload ? I = await y.upload(d) : I = URL.createObjectURL(d), e.chain().focus().setImageInline({ src: I, inline: t, alt: o }).run(), m(!1), _({
          src: "",
          file: null
        }), N(), i();
      } catch (d) {
        console.log("Error cropping image", d);
      } finally {
        x(!1);
      }
    }
  }, [S, e, t, p, i, (k = T == null ? void 0 : T.file) == null ? void 0 : k.name, y]);
  function z(r) {
    var d;
    r.preventDefault(), (d = l.current) == null || d.click();
  }
  const U = async (r) => {
    var A;
    const d = (A = r == null ? void 0 : r.target) == null ? void 0 : A.files;
    if (!e || e.isDestroyed || d.length === 0) {
      r.target.value = "";
      return;
    }
    const I = ge(d, {
      acceptMimes: y == null ? void 0 : y.acceptMimes,
      maxSize: y == null ? void 0 : y.maxSize,
      t: a,
      toast: u,
      onError: y.onError
    });
    if (I.length <= 0) {
      r.target.value = "";
      return;
    }
    const M = I[0], h = await ze(M);
    m(!0), _({
      src: h.src,
      file: M
    });
  }, N = () => {
    l.current && (l.current.value = "");
  };
  return /* @__PURE__ */ v(O, { children: [
    /* @__PURE__ */ s(
      B,
      {
        className: "richtext-mt-1 richtext-w-full",
        disabled: n,
        onClick: z,
        size: "sm",
        children: a("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ v(
      se,
      {
        open: g,
        onOpenChange: (r) => {
          m(r), r || (_({ src: "", file: null }), N());
        },
        children: [
          /* @__PURE__ */ s(ce, {}),
          /* @__PURE__ */ v(de, { children: [
            /* @__PURE__ */ s(ue, { children: a("editor.image.dialog.tab.uploadCrop") }),
            /* @__PURE__ */ s("div", { children: T.src && /* @__PURE__ */ s(
              Se,
              {
                className: "richtext-w-full",
                crop: C,
                onChange: (r) => w(r),
                onComplete: (r) => P(r),
                children: /* @__PURE__ */ s(
                  "img",
                  {
                    alt: "Crop me",
                    ref: b,
                    src: T.src
                  }
                )
              }
            ) }),
            /* @__PURE__ */ v(Ce, { children: [
              /* @__PURE__ */ v(
                B,
                {
                  disabled: p,
                  onClick: () => {
                    m(!1), _({
                      src: "",
                      file: null
                    }), N();
                  },
                  children: [
                    a("editor.imageUpload.cancel"),
                    /* @__PURE__ */ s(
                      Y,
                      {
                        className: "richtext-ml-1",
                        name: "Trash2"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                B,
                {
                  className: "richtext-w-fit",
                  disabled: p || !C,
                  onClick: E,
                  children: p ? /* @__PURE__ */ v(O, { children: [
                    a("editor.imageUpload.uploading"),
                    /* @__PURE__ */ s(
                      Y,
                      {
                        className: "richtext-ml-1 richtext-animate-spin",
                        name: "Loader"
                      }
                    )
                  ] }) : /* @__PURE__ */ v(O, { children: [
                    a("editor.imageUpload.crop"),
                    /* @__PURE__ */ s(
                      Y,
                      {
                        className: "richtext-ml-1",
                        name: "Crop"
                      }
                    )
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ s(
      "input",
      {
        accept: ((c = y == null ? void 0 : y.acceptMimes) == null ? void 0 : c.join(",")) || "image/*",
        multiple: !1,
        onChange: U,
        ref: l,
        style: { display: "none" },
        type: "file"
      }
    )
  ] });
}
const He = {
  setOpen: (e, t) => {
    De(he.UPLOAD_IMAGE(e), t);
  }
};
function je(e) {
  var P;
  const { t } = fe(), { toast: i } = me(), [n, o] = L(!1), [a, u] = L(!1), g = (f) => {
    o(f.detail);
  }, [m, p] = L(""), [x, b] = L(""), C = le(null), w = ((P = e.editor.extensionManager.extensions.find(
    (f) => f.name === q.name
  )) == null ? void 0 : P.options.defaultInline) || !1, [S, D] = L(w), l = j(() => {
    var E;
    return (E = e.editor.extensionManager.extensions.find(
      (z) => z.name === q.name
    )) == null ? void 0 : E.options;
  }, [e.editor]);
  G(() => {
    const f = ke(he.UPLOAD_IMAGE(e.editor.id), g);
    return () => {
      f();
    };
  }, []);
  async function T(f) {
    var U;
    const E = (U = f == null ? void 0 : f.target) == null ? void 0 : U.files;
    if (!e.editor || e.editor.isDestroyed || E.length === 0 || a) {
      f.target.value = "";
      return;
    }
    const z = ge(E, {
      acceptMimes: l == null ? void 0 : l.acceptMimes,
      maxSize: l == null ? void 0 : l.maxSize,
      t,
      toast: i,
      onError: l.onError
    });
    if (z.length <= 0) {
      f.target.value = "";
      return;
    }
    u(!0);
    try {
      if (l != null && l.multiple) {
        const N = z.map(async (c) => {
          let r = "";
          return l.upload ? r = await l.upload(c) : r = URL.createObjectURL(c), r;
        });
        (await Promise.all(N)).forEach((c) => {
          e.editor.chain().focus().setImageInline({ src: c, inline: S, alt: x }).run();
        });
      } else {
        const N = z[0];
        let k = "";
        l.upload ? k = await l.upload(N) : k = URL.createObjectURL(N), e.editor.chain().focus().setImageInline({ src: k, inline: S, alt: x }).run();
      }
      o(!1), b(""), D(w);
    } catch (N) {
      console.error("Error uploading image", N), l.onError ? l.onError({
        type: "upload",
        message: t("editor.upload.error")
      }) : i({
        variant: "destructive",
        title: t("editor.upload.error")
      });
    } finally {
      u(!1), f.target.value = "";
    }
  }
  function _(f) {
    f.preventDefault(), f.stopPropagation(), e.editor.chain().focus().setImageInline({ src: m, inline: S, alt: x }).run(), o(!1), D(w), p(""), b("");
  }
  function y(f) {
    var E;
    f.preventDefault(), (E = C.current) == null || E.click();
  }
  return /* @__PURE__ */ v(
    se,
    {
      onOpenChange: o,
      open: n,
      children: [
        /* @__PURE__ */ s(ce, { asChild: !0, children: /* @__PURE__ */ s(
          Ee,
          {
            action: () => o(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ v(de, { children: [
          /* @__PURE__ */ s(ue, { children: t("editor.image.dialog.title") }),
          /* @__PURE__ */ v(
            Re,
            {
              activationMode: "manual",
              defaultValue: l.resourceImage === "both" || l.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ v(Pe, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  l.resourceImage === "both" || l.resourceImage === "upload" ? /* @__PURE__ */ s(te, { value: "upload", children: t("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ s(O, {}),
                  l.resourceImage === "both" || l.resourceImage === "link" ? /* @__PURE__ */ s(te, { value: "link", children: t("editor.image.dialog.tab.url") }) : /* @__PURE__ */ s(O, {})
                ] }),
                /* @__PURE__ */ v("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ s(
                    pe,
                    {
                      checked: S,
                      onCheckedChange: (f) => {
                        D(f);
                      }
                    }
                  ),
                  /* @__PURE__ */ s(ne, { children: t("editor.link.dialog.inline") })
                ] }),
                l.enableAlt && /* @__PURE__ */ v("div", { className: "richtext-my-[10px] ", children: [
                  /* @__PURE__ */ s(ne, { className: "mb-[6px]", children: t("editor.imageUpload.alt") }),
                  /* @__PURE__ */ s(
                    re,
                    {
                      onChange: (f) => b(f.target.value),
                      required: !0,
                      type: "text",
                      value: x
                    }
                  )
                ] }),
                /* @__PURE__ */ v(ie, { value: "upload", children: [
                  /* @__PURE__ */ v("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ s(
                      B,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        disabled: a,
                        onClick: y,
                        size: "sm",
                        children: a ? /* @__PURE__ */ v(O, { children: [
                          t("editor.imageUpload.uploading"),
                          /* @__PURE__ */ s(
                            Y,
                            {
                              className: "richtext-ml-1 richtext-animate-spin",
                              name: "Loader"
                            }
                          )
                        ] }) : t("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ s(
                      Fe,
                      {
                        alt: x,
                        disabled: a,
                        editor: e.editor,
                        imageInline: S,
                        onClose: () => {
                          He.setOpen(e.editor.id, !1), b("");
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      accept: l.acceptMimes.join(",") || "image/*",
                      multiple: l.multiple,
                      onChange: T,
                      ref: C,
                      style: { display: "none" },
                      type: "file"
                    }
                  )
                ] }),
                /* @__PURE__ */ s(ie, { value: "link", children: /* @__PURE__ */ s("form", { onSubmit: _, children: /* @__PURE__ */ v("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ s(
                    re,
                    {
                      autoFocus: !0,
                      onChange: (f) => p(f.target.value),
                      placeholder: t("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: m
                    }
                  ),
                  /* @__PURE__ */ s(B, { type: "submit", children: t("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const $ = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Be(e) {
  var U, N, k;
  const [t, i] = L({
    width: J,
    height: J
  }), [n, o] = L({
    width: 0,
    height: 0
  }), [a] = L([
    $.TOP_LEFT,
    $.TOP_RIGHT,
    $.BOTTOM_LEFT,
    $.BOTTOM_RIGHT
  ]), [u, g] = L(!1), [m, p] = L({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: x, inline: b } = (U = e == null ? void 0 : e.node) == null ? void 0 : U.attrs, C = b && (x === "left" || x === "right"), w = j(() => {
    var K;
    const { src: c, alt: r, width: d, height: I, flipX: M, flipY: h } = (K = e == null ? void 0 : e.node) == null ? void 0 : K.attrs, A = ee(d) ? `${d}px` : d, R = ee(I) ? `${I}px` : I, W = [];
    M && W.push("rotateX(180deg)"), h && W.push("rotateY(180deg)");
    const xe = W.join(" ");
    return {
      src: c || void 0,
      alt: r || void 0,
      style: {
        width: A || void 0,
        height: R || void 0,
        transform: xe || "none",
        ...C ? { float: x } : {}
      }
    };
  }, [(N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs]), S = j(() => {
    const {
      style: { width: c }
    } = w;
    return { width: c === "100%" ? c : void 0 };
  }, [w]);
  function D(c) {
    o({
      width: c.target.width,
      height: c.target.height
    });
  }
  function l() {
    const { editor: c, getPos: r } = e;
    c.commands.setNodeSelection(r());
  }
  const T = H(
    Z(() => {
      const { editor: c } = e, { width: r } = getComputedStyle(c.view.dom);
      i((d) => ({
        ...d,
        width: Number.parseInt(r, 10)
      }));
    }, Q),
    [e == null ? void 0 : e.editor]
  );
  function _(c, r) {
    c.preventDefault(), c.stopPropagation();
    const d = n.width, I = n.height, M = d / I;
    let h = Number(e.node.attrs.width), A = Number(e.node.attrs.height);
    const R = t.width;
    h && !A ? (h = h > R ? R : h, A = Math.round(h / M)) : A && !h ? (h = Math.round(A * M), h = h > R ? R : h) : !h && !A ? (h = d > R ? R : d, A = Math.round(h / M)) : h = h > R ? R : h, g(!0), p({
      x: c.clientX,
      y: c.clientY,
      w: h,
      h: A,
      dir: r
    });
  }
  const y = H(
    Z((c) => {
      if (c.preventDefault(), c.stopPropagation(), !u)
        return;
      const { x: r, w: d, dir: I } = m, M = (c.clientX - r) * (/l/.test(I) ? -1 : 1), h = Le(d + M, Ne, t.width);
      e.updateAttributes({
        width: h,
        height: null
      });
    }, Q),
    [u, m, t, e.updateAttributes]
  ), P = H(
    (c) => {
      c.preventDefault(), c.stopPropagation(), u && (p({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), g(!1), l());
    },
    [u, l]
  ), f = H(() => {
    document == null || document.addEventListener("mousemove", y, !0), document == null || document.addEventListener("mouseup", P, !0);
  }, [y, P]), E = H(() => {
    document == null || document.removeEventListener("mousemove", y, !0), document == null || document.removeEventListener("mouseup", P, !0);
  }, [y, P]);
  G(() => (u ? f() : E(), () => {
    E();
  }), [u, f, E]);
  const z = j(() => new ResizeObserver(() => T()), [T]);
  return G(() => (z.observe(e.editor.view.dom), () => {
    z.disconnect();
  }), [e.editor.view.dom, z]), /* @__PURE__ */ s(
    Ae,
    {
      as: b ? "span" : "div",
      className: "image-view",
      style: {
        float: C ? x : void 0,
        margin: C ? x === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: b ? "inline" : "block",
        textAlign: C ? void 0 : x,
        width: ((k = w.style) == null ? void 0 : k.width) ?? "auto",
        ...C ? {} : S
      },
      children: /* @__PURE__ */ v(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: S,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${u ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ s(
              "img",
              {
                alt: w.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: l,
                onLoad: D,
                src: w.src,
                style: w.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || u) && /* @__PURE__ */ s("div", { className: "image-resizer", children: a == null ? void 0 : a.map((c) => /* @__PURE__ */ s(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${c}`,
                onMouseDown: (r) => _(r, c)
              },
              `image-dir-${c}`
            )) })
          ]
        }
      )
    }
  );
}
const F = new be("upload-image");
function Xe() {
  return new oe({
    key: F,
    state: {
      init() {
        return Ie.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const i = e.getMeta(F);
        if (i != null && i.add)
          for (const { id: n, pos: o, src: a } of i.add) {
            const u = $e(a), g = ye.widget(o, u, { id: n });
            t = t.add(e.doc, [g]);
          }
        else if (i != null && i.remove)
          for (const n of i.remove)
            t = t.remove(t.find(void 0, void 0, (o) => o.id === n));
        return t;
      }
    },
    props: {
      decorations(e) {
        return this.getState(e);
      }
    }
  });
}
function $e(e) {
  const t = document.createElement("div"), i = document.createElement("img");
  return i.setAttribute("class", "opacity-50"), i.src = e, i.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(i), t;
}
function Ye(e, t) {
  var o;
  const n = F.getState(e).find(void 0, void 0, (a) => a.id === t);
  return n.length > 0 ? (o = n[0]) == null ? void 0 : o.from : null;
}
function We({ validateFn: e, onUpload: t, postUpload: i, defaultInline: n = !1 }) {
  return (o, a, u) => {
    for (const g of o) {
      if (e && !e(g))
        continue;
      const m = Date.now().toString(), p = a.state.tr;
      p.selection.empty || p.deleteSelection();
      const x = URL.createObjectURL(g);
      p.setMeta(F, {
        add: [{ id: m, pos: u, src: x }]
      }), a.dispatch(p), t(g).then(
        async (b) => {
          var _;
          i && typeof b == "string" && (b = await i(b));
          const { schema: C } = a.state;
          let w = Ye(a.state, m);
          if (w === null)
            return;
          const S = typeof b == "object" ? x : b, D = (_ = C.nodes.image) == null ? void 0 : _.create({
            src: S,
            inline: n
          });
          if (!D)
            return;
          const { doc: l } = a.state;
          w > l.content.size && (w = l.content.size - 1);
          const T = a.state.tr.replaceWith(w, w, D).setMeta(F, { remove: [m] });
          a.dispatch(T);
        },
        () => {
          const b = a.state.tr.delete(u, u).setMeta(F, { remove: [m] });
          a.dispatch(b);
        }
      );
    }
  };
}
function Ge(e, t, i) {
  var o;
  const n = [...((o = t.clipboardData) == null ? void 0 : o.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const a = e.state.selection.from;
    return i(n, e, a + 1), !0;
  }
  return !1;
}
function Ve(e, t, i, n) {
  var a;
  const o = [...((a = t.dataTransfer) == null ? void 0 : a.files) || []];
  if (!i && o.length > 0) {
    t.preventDefault();
    const u = e.posAtCoords({
      left: t.clientX,
      top: t.clientY
    });
    if (u)
      return n(o, e, u.pos + 1), !0;
  }
  return !1;
}
const qe = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  multiple: !0,
  resourceImage: "both",
  defaultInline: !1,
  enableAlt: !0
}, q = /* @__PURE__ */ ve.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...qe,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: i,
        t: n
      }) => {
        var o, a;
        return {
          component: je,
          componentProps: {
            action: () => !0,
            upload: i.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((a = (o = t.can()).setImage) != null && a.call(o, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || null;
          return i ? Number.parseInt(i, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      },
      alt: {
        default: "",
        parseHTML: (t) => t.getAttribute("alt"),
        renderHTML: (t) => ({
          alt: t.alt
        })
      }
    };
  },
  addNodeView() {
    return Te(Be);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: {
          ...t,
          inline: t.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { flipX: t, flipY: i, align: n, inline: o } = e, a = o && (n === "left" || n === "right"), u = t || i ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${i ? "180" : "0"}deg);` : "", g = a ? "" : `text-align: ${n};`, x = `${a ? `float: ${n};` : ""}${a ? n === "left" ? "margin: 1em 1em 1em 0;" : "margin: 1em 0 1em 1em;" : ""}${u}`;
    return [
      o ? "span" : "div",
      {
        style: g,
        class: "image"
      },
      [
        "img",
        we(
          {
            height: "auto",
            style: x
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (e) => {
          var a;
          const t = e == null ? void 0 : e.parentElement, i = e == null ? void 0 : e.getAttribute("width"), n = (e == null ? void 0 : e.getAttribute("flipx")) || !1, o = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || ((a = t == null ? void 0 : t.style) == null ? void 0 : a.textAlign) || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: o === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width"), n = (t == null ? void 0 : t.getAttribute("flipx")) || !1, o = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: o === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = We({
      validateFn: (i) => !(!this.options.acceptMimes.includes(i.type) || i.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new oe({
        props: {
          handlePaste: (i, n) => !n.clipboardData || [...n.clipboardData.files || []].some((a) => a.type === "text/html") ? !1 : Ge(i, n, t),
          handleDrop: (i, n, o, a) => (!(n instanceof DragEvent) || !n.dataTransfer || Ve(i, n, a, t), !1)
        }
      }),
      Xe()
    ];
  }
}), pe = Me.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ s(
  V.Root,
  {
    ref: i,
    className: ae(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ s(
      V.Indicator,
      {
        className: ae("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ s(Ue, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
pe.displayName = V.Root.displayName;
export {
  q as I,
  He as a
};

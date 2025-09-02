import { N as g, n as v, m as x } from "./index-sel2RZJw.js";
import { N as k, R as y } from "./index-CJo9otU0.js";
import { A as S } from "./ActionButton-D15ZSL0z.js";
import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { useState as I, useCallback as P } from "react";
import { c as M } from "./clsx-OuTLNxxd.js";
import { Resizable as N } from "re-resizable";
import { g as p } from "./dom-dataset-CIEeltF6.js";
import { u as R } from "./editableEditor-CCGmYPta.js";
import { I as j } from "./input-BQQ_iBrZ.js";
import { B as U } from "./button-CcHmDfB3.js";
const m = {
  youtube: {
    example: "https://www.youtube.com/watch?v=I4sMhHbHYXM",
    src: "https://www.youtube.com/embed/I4sMhHbHYXM",
    srcPrefix: "https://www.youtube.com/embed",
    linkRule: [
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\s/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[&?]v=)|youtu\.be\/)([\w-]{11})/
    ]
  },
  youku: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html?spm=a2h0c.8166622.PhoneSokuUgc_4.dtitle",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "https://player.youku.com/embed",
    linkRule: [String.raw`v.youku.com\/v_show\/id_\w+\=*`],
    idRule: String.raw`id_\w+\=*`
  },
  bilibili: {
    example: "https://www.bilibili.com/video/BV1EJ411u7DN",
    src: "https://player.bilibili.com/player.html?bvid=BV1EJ411u7DN",
    srcPrefix: "https://player.bilibili.com/player.html?bvid",
    linkRule: [String.raw`www.bilibili.com\/video\/\w+`]
  },
  qqvideo: {
    example: "https://v.qq.com/x/cover/mzc0020006aw1mn/u0033nvzb5v.html",
    src: "https://v.qq.com/txp/iframe/player.html?vid=u0033nvzb5v",
    srcPrefix: "https://v.qq.com/txp/iframe/player.html?vid",
    linkRule: [String.raw`v.qq.com\/x\/cover\/\w+\/\w+`]
  },
  amap: {
    example: "https://ditu.amap.com/",
    src: "https://www.amap.com/place/B000A45467",
    srcPrefix: "",
    linkRule: [String.raw`\.amap\.com`]
  },
  baidu_map: {
    example: "https://j.map.baidu.com/15/fo",
    src: "https://j.map.baidu.com/15/fo",
    srcPrefix: "",
    linkRule: [String.raw`map\.baidu\.com`]
  },
  modao: {
    example: "https://free.modao.cc/app/2cd26580a6717a147454df7470e7ec464093cba3/embed/v2#screen=sk71k6d1dfxulzx",
    src: "https://free.modao.cc/app/6UkpAxcGE3nPz52GLqhnOZgC7MATBSy/embed/v2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/\w+.modao.cc\/app\/\w+\/embed\/v2`],
    tips: "Modao > More > Share > Embed > COPY"
  },
  lanhu: {
    example: "https://lanhuapp.com/link/#/invite?sid=evP7L",
    src: "https://lanhuapp.com/url/evP7L",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/lanhuapp.com\/url\/\w+`],
    tips: "Lanhu > Project > Share > Copy Link"
  },
  figma: {
    example: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    src: "https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1",
    srcPrefix: "https://www.figma.com/embed?embed_host=share&url",
    linkRule: [String.raw`https:\/\/www.figma.com\/file\/\w+`]
  },
  canva: {
    example: "https://www.canva.cn/design/DAD61-t29UI/view",
    src: "https://www.canva.cn/design/DAD61-t29UI/view",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.canva.cn\/design\/.+\/view`]
  },
  processon: {
    example: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    src: "https://www.processon.com/embed/5ea99d8607912948b0e6fe78",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/www.processon.com\/embed\/\w+`]
  },
  codepen: {
    example: "https://codepen.io/mekery/embed/YzyrKOJ",
    src: "https://codepen.io/mekery/embed/YzyrKOJ",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/codepen.io\/.+\/embed\/\w+`]
  },
  jinshuju: {
    example: "https://jinshuju.net/f/q9YvVf",
    src: "https://jinshuju.net/f/q9YvVf",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/jinshuju.net\/f\/\w+`]
  },
  iframe: {
    example: "https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html",
    src: "https://player.youku.com/embed/XNDM0NDM4MTcy",
    srcPrefix: "",
    linkRule: [".+"]
  },
  googlemaps: {
    example: "https://goo.gl/maps/8Ys8b4K1ZJY2",
    src: "https://www.google.com/maps/embed?pb=https://goo.gl/maps/8Ys8b4K1ZJY2",
    srcPrefix: "",
    linkRule: [String.raw`https:\/\/goo.gl\/maps\/\w+`]
  }
};
function q(e) {
  const t = m.youtube, i = e.matchedUrl;
  e.validLink = !0;
  const r = i.split("="), n = r.length;
  if (n > 0) {
    const c = r[n - 1];
    e.src = `${t.srcPrefix}/${c}`, e.validId = !0;
  }
  return e;
}
function L(e) {
  const t = m.youku, i = e.matchedUrl, r = t.idRule, n = new RegExp(r), c = i.match(n);
  if (c && c.length > 0) {
    const o = c[0].slice(3);
    e.validId = !0, e.src = `${t.srcPrefix}/${o}`;
  } else
    e.validId = !1;
  return e;
}
function _(e) {
  const t = m.bilibili, r = e.matchedUrl.split("/"), n = r.length;
  if (n > 0) {
    const c = r[n - 1];
    e.src = `${t.srcPrefix}=${c}`, e.validId = !0;
  }
  return e;
}
function $(e) {
  const t = m.qqvideo, r = e.matchedUrl.split("/"), n = r.length;
  if (n > 0) {
    const c = r[n - 1];
    e.src = `${t.srcPrefix}=${c}`, e.validId = !0;
  }
  return e;
}
function A(e, t) {
  return t.src = e, t.validId = !0, t;
}
function D(e, t) {
  return t.src = e, t.validId = !0, t;
}
function T(e, t) {
  return t.src = e, t.validId = !0, t.originalLink = e, t;
}
function Y(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function z(e) {
  return e.src = e.matchedUrl, e.validId = !0, e.originalLink = e.src, e;
}
function C(e) {
  const t = m.figma;
  return e.src = `${t.srcPrefix}=${encodeURIComponent(e.matchedUrl)}`, e.validId = !0, e.originalLink = e.matchedUrl, e;
}
function E(e, t) {
  return t.src = `${t.matchedUrl}?embed`, t.validId = !0, t.originalLink = e, t;
}
function H(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function B(e) {
  return e.src = `${e.matchedUrl}`, e.validId = !0, e.originalLink = e.src, e;
}
function V(e, t) {
  return t.src = `${t.matchedUrl}?background=white&banner=show&embedded=true`, t.validId = !0, t.originalLink = e, t;
}
function X(e, t) {
  return t.src = `${t.matchedUrl}`, t.validId = !0, t.originalLink = e, t;
}
function J(e, t, i) {
  if (e === "googlemaps")
    return i.validLink = !0, i.matchedUrl = t, i;
  const n = m[e].linkRule;
  for (const c of n) {
    const o = new RegExp(c), a = t.match(o);
    if (a && a.length > 0)
      return i.validLink = !0, i.matchedUrl = e === "youtube" ? a[1] : a[0], i;
  }
  return i;
}
function K(e) {
  var i, r;
  let t = "iframe";
  return ((i = e.includes) != null && i.call(e, "youtube") || (r = e.includes) != null && r.call(e, "youtu.be")) && (t = "youtube"), e.includes("youku") && (t = "youku"), e.includes("bilibili") && (t = "bilibili"), e.includes("qq") && (t = "qqvideo"), e.includes("amap") && (t = "amap"), e.includes("map.baidu") && (t = "baidu_map"), (e.includes("google.com/maps") || e.includes("maps.app.goo.gl")) && (t = "googlemaps"), e.includes("modao") && (t = "modao"), e.includes("lanhuapp") && (t = "lanhu"), e.includes("figma") && (t = "figma"), e.includes("canva") && (t = "canva"), e.includes("processon") && (t = "processon"), e.includes("codepen") && (t = "codepen"), e.includes("jinshuju") && (t = "jinshuju"), e.includes("iframe") && (t = "iframe"), t;
}
function O(e) {
  let t = {
    validLink: !1,
    validId: !1,
    matchedUrl: "",
    originalLink: e,
    src: ""
  };
  const i = K(e);
  if (t = J(i, e, t), !t.validLink)
    return t;
  switch (i) {
    case "youtube":
      return q(t);
    case "youku":
      return L(t);
    case "bilibili":
      return _(t);
    case "qqvideo":
      return $(t);
    case "amap":
      return A(e, t);
    case "baidu_map":
      return D(e, t);
    case "googlemaps":
      return T(e, t);
    case "modao":
      return Y(t);
    case "lanhu":
      return z(t);
    case "figma":
      return C(t);
    case "canva":
      return E(e, t);
    case "processon":
      return H(e, t);
    case "codepen":
      return B(t);
    case "jinshuju":
      return V(e, t);
    case "iframe":
      return X(e, t);
    default:
      return e;
  }
}
const W = "_wrap_5y04w_1", F = "_innerWrap_5y04w_15", h = {
  wrap: W,
  innerWrap: F
};
function G({ editor: e, node: t, updateAttributes: i }) {
  const r = R(), { src: n, width: c, height: o } = t.attrs, [a, f] = I("");
  function w() {
    if (!a)
      return;
    const s = O(a);
    e.chain().updateAttributes(Z.name, {
      src: (s == null ? void 0 : s.src) || a
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const b = P(
    (s) => {
      i({ width: s.width, height: s.height });
    },
    [i]
  );
  return /* @__PURE__ */ l(k, { children: [
    !n && /* @__PURE__ */ l("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ d(
        j,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (s) => f(s.target.value),
          placeholder: "Enter link",
          type: "url",
          value: a
        }
      ),
      /* @__PURE__ */ d(
        U,
        {
          className: "richtext-w-[60px]",
          onClick: w,
          children: "OK"
        }
      )
    ] }),
    n && /* @__PURE__ */ d(
      N,
      {
        size: { width: Number.parseInt(c), height: Number.parseInt(o) },
        onResizeStop: (s, Q, ee, u) => {
          b({
            width: Number.parseInt(c) + u.width,
            height: Number.parseInt(o) + u.height
          });
        },
        children: /* @__PURE__ */ d("div", { className: M(h.wrap, "render-wrapper"), children: /* @__PURE__ */ d(
          "div",
          {
            className: h.innerWrap,
            style: { pointerEvents: r ? "none" : "auto" },
            children: /* @__PURE__ */ d(
              "iframe",
              {
                className: "richtext-my-[12px] ",
                src: n
              }
            )
          }
        ) })
      }
    )
  ] });
}
const Z = /* @__PURE__ */ g.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: t,
        extension: i,
        t: r
      }) => ({
        component: S,
        componentProps: {
          action: (n) => t.commands.setIframe(n),
          upload: i.options.upload,
          disabled: !t.can().setIframe({}),
          icon: "Iframe",
          tooltip: r("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: p("width")
      },
      height: {
        default: 300,
        parseHTML: p("height")
      },
      src: {
        default: null,
        parseHTML: p("src")
      },
      defaultShowPicker: {
        default: !1
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["iframe", x(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ tr: t, commands: i, chain: r }) => {
        var c, o, a;
        if (((a = (o = (c = t.selection) == null ? void 0 : c.node) == null ? void 0 : o.type) == null ? void 0 : a.name) == this.name)
          return i.updateAttributes(this.name, e);
        const n = e || { url: "" };
        return r().insertContent({
          type: this.name,
          attrs: n
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      v({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return y(G);
  }
});
export {
  Z as I,
  O as g
};

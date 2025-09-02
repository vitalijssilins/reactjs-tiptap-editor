import { N as D } from "./index-sel2RZJw.js";
import { V as T } from "./index-oWDQeNNi.js";
import { jsxs as c, jsx as n } from "react/jsx-runtime";
import { useState as p, useRef as k, useEffect as A, useMemo as C } from "react";
import { A as I } from "./ActionButton-D15ZSL0z.js";
import { D as E, a as S, b as $, c as H } from "./dialog-DWW5z2Zs.js";
import { g as N } from "./utils-uHATd4OQ.js";
import { u as U } from "./index-ZqXobaiP.js";
import { l as z, E as B } from "./events.constant-BTaUfYyd.js";
import { T as R, a as j, b as y, c as x } from "./tabs-BkY1zAS3.js";
import { B as V } from "./button-CcHmDfB3.js";
import { I as F } from "./input-BQQ_iBrZ.js";
function O(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return !(t != null && t.length) || t.length === 1 && t[0] === "." ? !0 : t.some((a) => {
    if (a.includes("*")) {
      const l = a.replace(/\./g, "\\.").replace(/\*/g, ".*");
      return new RegExp(`^${l}$`).test(r.hostname);
    }
    return r.hostname.includes(a);
  });
}
function Z(e) {
  const { t } = U(), [r, a] = p(""), l = k(null), [d, m] = p(""), [v, u] = p(!1), b = (o) => {
    u(o.detail);
  };
  A(() => {
    const o = z(B.UPLOAD_VIDEO(e.editor.id), b);
    return () => {
      o();
    };
  }, []);
  const i = C(() => {
    var s;
    return (s = e.editor.extensionManager.extensions.find(
      (h) => h.name === q.name
    )) == null ? void 0 : s.options;
  }, [e.editor]);
  async function g(o) {
    var w;
    const s = (w = o == null ? void 0 : o.target) == null ? void 0 : w.files;
    if (!e.editor || e.editor.isDestroyed || s.length === 0)
      return;
    const h = s[0];
    let f = "";
    i.upload ? f = await i.upload(h) : f = URL.createObjectURL(h), e.editor.chain().focus().setVideo({
      src: f,
      width: "100%"
    }).run(), u(!1);
  }
  function L(o) {
    o.preventDefault(), o.stopPropagation(), r && (e.editor.chain().focus().setVideo({
      src: r,
      width: "100%"
    }).run(), u(!1));
  }
  function M(o) {
    var s;
    o.preventDefault(), (s = l.current) == null || s.click();
  }
  return /* @__PURE__ */ c(
    E,
    {
      onOpenChange: u,
      open: v,
      children: [
        /* @__PURE__ */ n(S, { asChild: !0, children: /* @__PURE__ */ n(
          I,
          {
            action: () => u(!0),
            icon: e.icon,
            tooltip: e.tooltip
          }
        ) }),
        /* @__PURE__ */ c($, { children: [
          /* @__PURE__ */ n(H, { children: t("editor.video.dialog.title") }),
          /* @__PURE__ */ c(
            R,
            {
              activationMode: "manual",
              defaultValue: (i == null ? void 0 : i.resourceVideo) === "both" || (i == null ? void 0 : i.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ c(j, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((i == null ? void 0 : i.resourceVideo) === "both" || (i == null ? void 0 : i.resourceVideo) === "upload") && /* @__PURE__ */ n(y, { value: "upload", children: t("editor.video.dialog.tab.upload") }),
                  ((i == null ? void 0 : i.resourceVideo) === "both" || (i == null ? void 0 : i.resourceVideo) === "link") && /* @__PURE__ */ n(y, { value: "link", children: t("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ c(x, { value: "upload", children: [
                  /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ n(
                    V,
                    {
                      className: "richtext-mt-1 richtext-w-full",
                      onClick: M,
                      size: "sm",
                      children: t("editor.video.dialog.tab.upload")
                    }
                  ) }),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      accept: "video/*",
                      multiple: !0,
                      onChange: g,
                      ref: l,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ c(x, { value: "link", children: [
                  /* @__PURE__ */ n("form", { onSubmit: L, children: /* @__PURE__ */ c("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ n(
                      F,
                      {
                        autoFocus: !0,
                        placeholder: t("editor.video.dialog.placeholder"),
                        required: !0,
                        type: "url",
                        value: r,
                        onChange: (o) => {
                          a(o.target.value);
                        },
                        onBlur: (o) => {
                          const s = o.target.value, h = i.videoProviders || ["."];
                          s && !O(s, h) ? m("Invalid video URL") : m("");
                        }
                      }
                    ),
                    /* @__PURE__ */ n(V, { type: "submit", children: t("editor.video.dialog.button.apply") })
                  ] }) }),
                  d && /* @__PURE__ */ n("div", { className: "richtext-my-[5px] richtext-text-red-500", children: d })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function _(e) {
  e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/");
  const t = e.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  t && (e = `https://www.youtube.com/embed/${t[1]}`);
  const r = e.match(/^https:\/\/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (r) {
    const l = r[1], d = r[2];
    d ? e = `https://player.vimeo.com/video/${l}?h=${d}` : e = `https://player.vimeo.com/video/${l}`;
  }
  return /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const q = /* @__PURE__ */ D.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      resourceVideo: "both",
      width: T["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper"
        // style: 'display: flex;justify-content: center;',
      },
      button: ({ editor: e, t }) => {
        var r, a;
        return {
          component: Z,
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((a = (r = e.can()).setVideo) != null && a.call(r, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            videoProviders: ["."],
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? _(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: N(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      },
      align: {
        default: "center",
        // Default alignment
        renderHTML: ({ align: e }) => ({
          align: e
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%", align: r = "center" } = e ?? {}, a = {
      ...e,
      width: "100%",
      height: "100%"
    }, l = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, d = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, i = ["div", { style: `display: flex; justify-content: ${r};` }, [
      "div",
      { style: l },
      ["div", { style: d }],
      ["iframe", a]
    ]];
    return ["div", {
      ...this.options.HTMLAttributes,
      class: "iframe-wrapper",
      "data-video": ""
    }, i];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
});
export {
  q as Video
};

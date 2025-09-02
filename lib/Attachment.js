import { N as j, m as D } from "./index-sel2RZJw.js";
import { N as x, R as P } from "./index-CJo9otU0.js";
import { A as C } from "./ActionButton-D15ZSL0z.js";
import { jsx as e, Fragment as N, jsxs as p } from "react/jsx-runtime";
import { LucideTableProperties as R, LucideSheet as $, LucideImage as I, LucideFile as Z, LucideVideo as O, LucideAudioLines as W } from "lucide-react";
import { E as U, b as q } from "./index-BP_NLBls.js";
import { n as G, e as J, a as K, b } from "./file-BLas99n7.js";
import { useRef as Q, useState as X, useCallback as y, useEffect as Y } from "react";
import { c as k } from "./clsx-OuTLNxxd.js";
import { u as ee } from "./index-ZqXobaiP.js";
import { u as te } from "./editableEditor-CCGmYPta.js";
import { g as s } from "./dom-dataset-CIEeltF6.js";
const re = {
  audio: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  pdf: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z"></path>
      <path fill="currentColor" d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z"></path>
    </svg>`,
  word: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="icon"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
      />
      <path
        fill="currentColor"
        d="m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
      />
    </svg>`,
  excel: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>',
  ppt: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-properties"><path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>'
};
function ie(t) {
  const o = re[t], n = new DOMParser().parseFromString(o, "image/svg+xml").documentElement, a = [
    "svg",
    {
      ...Array.from(n.attributes).reduce((r, l) => (r[l.name] = l.value, r), {})
    }
  ];
  return Array.from(n.childNodes).forEach((r) => {
    if (r.nodeType === 1) {
      const l = [
        r.tagName.toLowerCase(),
        Array.from(r.attributes).reduce((m, f) => (m[f.name] = f.value, m), {})
      ];
      r.textContent && l.push(r.textContent), a.push(l);
    }
  }), a;
}
const oe = {
  audio: /* @__PURE__ */ e(W, {}),
  video: /* @__PURE__ */ e(O, {}),
  file: /* @__PURE__ */ e(Z, {}),
  image: /* @__PURE__ */ e(I, {}),
  pdf: /* @__PURE__ */ e(q, {}),
  word: /* @__PURE__ */ e(U, {}),
  excel: /* @__PURE__ */ e($, {}),
  ppt: /* @__PURE__ */ e(R, {})
};
function A(t, o = !1) {
  const i = G(t), c = oe[i] || /* @__PURE__ */ e(N, {});
  return o ? ie(i) : c;
}
const ne = "_wrap_1x1ms_2", M = {
  wrap: ne
};
function ae({ editor: t, node: o, updateAttributes: i, deleteNode: c, extension: n }) {
  var L;
  const a = Q(null), r = te(), { hasTrigger: l, fileName: m, fileSize: f, fileExt: E, fileType: z, url: d, error: T } = o.attrs, [F, g] = X(!1), { t: w } = ee(), V = (L = n == null ? void 0 : n.options) == null ? void 0 : L.upload, u = y(() => {
    !r || d || r && a.current.click();
  }, [r, d]), S = y(
    async (H) => {
      const h = H.target.files && H.target.files[0];
      if (!h)
        return;
      const B = {
        fileName: K(h.name),
        fileSize: h.size,
        fileType: h.type,
        fileExt: J(h.name)
      };
      g(!0);
      try {
        const v = await V(h);
        i({ ...B, url: v }), g(!1);
      } catch (v) {
        i({ error: `File upload fail: ${v && v.message}` || "Unknown error" }), g(!1), a.current.value = "";
      }
    },
    [g, i]
  );
  Y(() => {
    !d && !l && (u(), i({ hasTrigger: !0 }));
  }, [d, l, u, i]);
  const _ = y(() => c(), [t]);
  return r && !d ? /* @__PURE__ */ e(x, { children: /* @__PURE__ */ p("div", { className: k(M.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ e(
      "p",
      {
        onClick: u,
        style: { cursor: "pointer" },
        children: F ? /* @__PURE__ */ e("span", { children: w("editor.attachment.uploading") }) : /* @__PURE__ */ e("span", { children: w("editor.attachment.please_upload") })
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        hidden: !0,
        onChange: S,
        ref: a,
        type: "file"
      }
    )
  ] }) }) : d ? /* @__PURE__ */ e(x, { children: /* @__PURE__ */ p(
    "div",
    {
      className: k(M.wrap, "render-wrapper"),
      onClick: u,
      children: [
        /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
          /* @__PURE__ */ e("span", { children: A(z) }),
          /* @__PURE__ */ p("span", { children: [
            m,
            ".",
            E
          ] }),
          /* @__PURE__ */ p("span", { children: [
            "(",
            b(f),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e(
          C,
          {
            action: _,
            icon: "Trash2",
            tooltip: w("editor.delete")
          }
        )
      ]
    }
  ) }) : T !== "null" ? /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(
    "div",
    {
      className: k(M.wrap, "render-wrapper"),
      onClick: u,
      children: /* @__PURE__ */ e("p", { children: T })
    }
  ) }) : /* @__PURE__ */ e(N, {});
}
const xe = /* @__PURE__ */ j.create({
  name: "attachment",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "attachment"
      },
      button: ({ editor: o, t: i }) => ({
        component: C,
        componentProps: {
          action: () => o.chain().focus().setAttachment().run(),
          isActive: () => !1,
          disabled: !1,
          icon: "Attachment",
          tooltip: i("editor.attachment.tooltip")
        }
      })
    };
  },
  parseHTML() {
    return [{ tag: "div[class=attachment]" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    const {
      url: o = "",
      fileName: i = "",
      fileSize: c = "",
      fileType: n = "",
      fileExt: a = ""
    } = t || {};
    return [
      "div",
      D(
        // @ts-expect-error
        this.options.HTMLAttributes || {},
        t || {}
      ),
      o ? [
        "a",
        { href: o || "#" },
        [
          "span",
          { class: "attachment__icon" },
          A(n, !0)
        ],
        [
          "span",
          { class: "attachment__text" },
          `${i}.${a} (${b(c)})`
        ]
      ] : ["div", { class: "attachment__placeholder" }]
    ];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: s("filename")
      },
      fileSize: {
        default: null,
        parseHTML: s("filesize")
      },
      fileType: {
        default: null,
        parseHTML: s("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: s("fileext")
      },
      url: {
        default: null,
        parseHTML: s("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (t) => s("hastrigger")(t) === "true"
      },
      error: {
        default: null,
        parseHTML: s("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (t = {}) => ({ chain: o }) => o().insertContent({ type: this.name, attrs: t }).run()
    };
  },
  addNodeView() {
    return P(ae);
  }
});
export {
  xe as Attachment
};

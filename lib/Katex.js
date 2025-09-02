import { N as b, n as g, m as w } from "./index-BWx1Mchx.js";
import { N as k, R as N } from "./dom-dataset-CHDbKz5J.js";
import { jsx as n, jsxs as u } from "react/jsx-runtime";
import { useState as T, useCallback as $, useEffect as v, useMemo as c } from "react";
import x from "katex";
import { HelpCircle as A } from "lucide-react";
import { O as S, P as L, m as P, A as C, n as H, L as I, B as M, Q as y } from "./RichTextEditor-BSiZeOM2.js";
import { T as K } from "./textarea-CEsZNh4g.js";
import { u as R } from "./index-Tj3Ci7xM.js";
function V({ editor: t, ...e }) {
  const { t: a } = R(), o = S(t, h.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: s, defaultShowPicker: r } = o, [i, l] = T(""), f = $(() => {
    t.chain().focus().setKatex({ text: i }).run(), l("");
  }, [t, i]);
  v(() => {
    r && t.chain().updateAttributes(h.name, { defaultShowPicker: !1 }).focus().run();
  }, [t, r]);
  const m = c(() => {
    try {
      return x.renderToString(`${i}`);
    } catch {
      return i;
    }
  }, [i]), d = c(
    () => `${i}`.trim() ? /* @__PURE__ */ n(
      "span",
      {
        contentEditable: !1,
        dangerouslySetInnerHTML: { __html: m || "" }
      }
    ) : null,
    [i, m]
  );
  return /* @__PURE__ */ u(L, { modal: !0, children: [
    /* @__PURE__ */ n(P, { asChild: !0, children: /* @__PURE__ */ n(
      C,
      {
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ) }),
    /* @__PURE__ */ u(
      H,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: [
          /* @__PURE__ */ n(I, { className: "richtext-mb-[6px]", children: a("editor.formula.dialog.text") }),
          /* @__PURE__ */ n("div", { className: "richtext-mb-[16px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ n(
            K,
            {
              autoFocus: !0,
              className: "richtext-w-full",
              defaultValue: s,
              onChange: (p) => l(p.target.value),
              placeholder: "Text",
              required: !0,
              rows: 3,
              value: i
            }
          ) }) }),
          d && /* @__PURE__ */ n("div", { className: "richtext-my-[10px] richtext-max-w-[286px] richtext-overflow-auto richtext-whitespace-nowrap richtext-rounded-[6px] !richtext-border richtext-p-[10px]", children: d }),
          /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
            /* @__PURE__ */ n(
              M,
              {
                className: "richtext-flex-1",
                onClick: f,
                children: "Submit"
              }
            ),
            /* @__PURE__ */ n(
              "a",
              {
                href: "https://katex.org/docs/supported",
                rel: "noreferrer noopener",
                target: "_blank",
                children: /* @__PURE__ */ n(A, { size: 16 })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function B(t, e = 1) {
  let a = 0, o = 0, s = 0;
  if (t.startsWith("rgb")) {
    const r = t.replace(/\s/g, "").match(/rgb\((.*)\)$/)[1].split(",");
    a = +r[0], o = +r[1], s = +r[2];
  } else if (t.startsWith("#")) {
    let r = t.replace("#", "");
    r.length === 3 && (r = `${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`), a = Number.parseInt(r.substring(0, 2), 16), o = Number.parseInt(r.substring(2, 4), 16), s = Number.parseInt(r.substring(4, 6), 16);
  } else
    return t;
  return e > 1 && e <= 100 && (e = e / 100), `rgba(${a},${o},${s},${e})`;
}
function W({ node: t }) {
  const e = y(), { text: a } = t.attrs, o = c(() => {
    const i = "rgb(254, 242, 237)";
    return e === "dark" ? B(i, 0.75) : i;
  }, [e]), s = c(() => {
    try {
      return x.renderToString(`${a}`);
    } catch {
      return a;
    }
  }, [a]), r = c(
    () => a.trim() ? /* @__PURE__ */ n("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: s } }) : /* @__PURE__ */ n("span", { contentEditable: !1, children: "Not enter a formula" }),
    [a, s]
  );
  return /* @__PURE__ */ n(
    k,
    {
      style: {
        display: "inline-block",
        backgroundColor: o
      },
      as: "span",
      children: r
    }
  );
}
function _(t) {
  return (e) => e.getAttribute(t);
}
const h = /* @__PURE__ */ b.create({
  name: "katex",
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "katex"
      },
      button: ({ editor: t, t: e }) => ({
        component: V,
        componentProps: {
          editor: t,
          action: () => !0,
          isActive: () => !1,
          disabled: !1,
          icon: "KatexIcon",
          tooltip: e("editor.katex.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      text: {
        default: "",
        parseHTML: _("text")
      },
      defaultShowPicker: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{ tag: "span.katex" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", w(this.options && this.options.HTMLAttributes || {}, t)];
  },
  addCommands() {
    return {
      setKatex: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      g({
        find: /^\$katex\$$/,
        type: this.type,
        getAttributes: () => ({ defaultShowPicker: !0 })
      })
    ];
  },
  addNodeView() {
    return N(W);
  }
});
export {
  h as Katex
};

import { d as m } from "./index-sel2RZJw.js";
import { A as c } from "./ActionButton-D15ZSL0z.js";
import { B as A, I as u, V as f } from "./index-oWDQeNNi.js";
import { f as a, u as y } from "./index-ZqXobaiP.js";
import { jsxs as x, jsx as r } from "react/jsx-runtime";
import { useState as b, useEffect as w } from "react";
import { P as S, a as P, b as M } from "./popover-B8VvcibZ.js";
import { L as h } from "./label-BUeBtRLx.js";
import { I as d } from "./input-BQQ_iBrZ.js";
import { B as I } from "./button-CcHmDfB3.js";
function $(t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((e, o) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.${e.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateImage({ width: u[e] }),
      isActive: () => t.isActive("image", { width: u[e] })
    }
  }));
}
function z(t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((e, o) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.${e.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateImageGif({ width: u[e] }),
      isActive: () => t.isActive("image", { width: u[e] })
    }
  }));
}
function B(t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((e) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.textalign.${e}.tooltip`),
      icon: i[e],
      action: () => {
        var o, s;
        return (s = (o = t.commands) == null ? void 0 : o.setAlignImage) == null ? void 0 : s.call(o, e);
      },
      isActive: () => t.isActive({ align: e }) || !1,
      disabled: !1
    }
  }));
}
function L(t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((e) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.textalign.${e}.tooltip`),
      icon: i[e],
      action: () => {
        var o, s;
        return (s = (o = t.commands) == null ? void 0 : o.setAlignImageGif) == null ? void 0 : s.call(o, e);
      },
      isActive: () => t.isActive({ align: e }) || !1,
      disabled: !1
    }
  }));
}
function N(t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((e) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.textalign.${e}.tooltip`),
      icon: i[e],
      action: () => {
        var o, s;
        return (s = (o = t.commands) == null ? void 0 : o.setAlignImageMermaid) == null ? void 0 : s.call(o, e);
      },
      isActive: () => t.isActive({ align: e }) || !1,
      disabled: !1
    }
  }));
}
function C(t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((e) => ({
    type: `image-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.textalign.${e}.tooltip`),
      icon: i[e],
      action: () => {
        var o, s;
        return (s = (o = t.commands) == null ? void 0 : o.setAlignImageDrawer) == null ? void 0 : s.call(o, e);
      },
      isActive: () => t.isActive({ align: e }) || !1,
      disabled: !1
    }
  }));
}
function T(t) {
  return [
    { type: "flex-start", icon: "AlignLeft", tooltip: "Align left" },
    { type: "center", icon: "AlignCenter", tooltip: "Align center" },
    { type: "flex-end", icon: "AlignRight", tooltip: "Align right" }
  ].map((i) => ({
    type: `video-align-${i.type}`,
    component: c,
    componentProps: {
      tooltip: i.tooltip,
      icon: i.icon,
      action: () => t.commands.updateVideo({ align: i.type }),
      isActive: () => t.getAttributes("video").align === i.type
    }
  }));
}
function E(t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((e, o) => ({
    type: `video-${e}`,
    component: c,
    componentProps: {
      tooltip: a.t(`editor.${e.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateVideo({ width: f[e] }),
      isActive: () => t.isActive("video", { width: f[e] })
    }
  }));
}
function Z(t) {
  return [
    {
      type: "flipX",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const n = t.getAttributes("image"), { flipX: i } = n;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !i
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const n = t.getAttributes("image"), { flipY: i } = n;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !i
          }).run();
        }
      }
    },
    ...$(t),
    ...B(t),
    {
      type: "remove",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = t.view;
          m(n, i);
        }
      }
    }
  ];
}
function H(t) {
  return [
    ...z(t),
    ...L(t),
    {
      type: "remove",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = t.view;
          m(n, i);
        }
      }
    }
  ];
}
function O(t) {
  return [
    ...N(t),
    {
      type: "edit",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = t.view;
          m(n, i);
        }
      }
    }
  ];
}
function U(t) {
  return [
    ...C(t),
    {
      type: "edit",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = t.view;
          m(n, i);
        }
      }
    }
  ];
}
function J(t) {
  return [
    ...E(t),
    ...T(t),
    {
      type: "remove",
      component: c,
      componentProps: {
        editor: t,
        tooltip: a.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = t.view;
          m(n, i);
        }
      }
    }
  ];
}
function K(t, n) {
  return A.reduce((i, e) => {
    if (e === "divider" && i.length > 0)
      return [...i, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const o = t.extensionManager.extensions.find((s) => s.name === e);
    return o ? [...i, o.configure().options.button({ editor: t, t: n, extension: o })] : i;
  }, []);
}
const V = { padding: "0 12px 12px" }, Q = ({ width: t, maxWidth: n, height: i, onOk: e, children: o }) => {
  const { t: s } = y(), [p, g] = b({
    width: "",
    height: "",
    maxWidth: ""
  });
  w(() => {
    g({
      width: t,
      height: i,
      maxWidth: n
    });
  }, [i, n, t]);
  function v(l) {
    l.preventDefault(), l.stopPropagation(), e(p);
  }
  return /* @__PURE__ */ x(S, { modal: !0, children: [
    /* @__PURE__ */ r(P, { asChild: !0, children: o }),
    /* @__PURE__ */ r(M, { children: /* @__PURE__ */ r("div", { style: V, children: /* @__PURE__ */ x("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: v, children: [
      /* @__PURE__ */ r(h, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        d,
        {
          type: "number",
          value: p.width,
          required: !0,
          onChange: (l) => g({ ...p, width: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(h, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        d,
        {
          type: "number",
          value: p.maxWidth,
          required: !0,
          onChange: (l) => g({ ...p, maxWidth: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(h, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        d,
        {
          type: "number",
          value: p.height,
          required: !0,
          onChange: (l) => g({ ...p, height: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(I, { type: "submit", className: "richtext-self-end richtext-mt-2", children: s("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
};
export {
  Q as S,
  U as a,
  K as b,
  Z as c,
  H as d,
  J as e,
  O as g
};

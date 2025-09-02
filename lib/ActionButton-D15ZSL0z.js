import { jsxs as e, jsx as t } from "react/jsx-runtime";
import g from "react";
import { Slot as v } from "@radix-ui/react-slot";
import { i as C, c as T } from "./index-BP_NLBls.js";
import { T as u, a as w, b as N, g as b } from "./tooltip-KX73XsAg.js";
import { T as j } from "./toggle-ZsttqCGR.js";
const O = g.forwardRef(
  (l, a) => {
    const {
      icon: c = void 0,
      // title = undefined,
      tooltip: r = void 0,
      disabled: n = !1,
      customClass: d = "",
      // color = undefined,
      loading: z = void 0,
      shortcutKeys: o = void 0,
      tooltipOptions: m = {},
      action: h = void 0,
      isActive: i = void 0,
      children: p,
      asChild: x = !1,
      upload: R = !1,
      initialDisplayedColor: S = void 0,
      ...f
    } = l, s = C[c];
    return /* @__PURE__ */ e(u, { children: [
      /* @__PURE__ */ t(w, { asChild: !0, children: /* @__PURE__ */ e(
        x ? v : j,
        {
          "data-state": i != null && i() ? "on" : "off",
          onClick: h,
          ref: a,
          size: "sm",
          className: T("richtext-w-[32px] richtext-h-[32px]", d),
          disabled: n,
          ...f,
          children: [
            s && /* @__PURE__ */ t(s, { className: "richtext-size-4" }),
            p
          ]
        }
      ) }),
      r && /* @__PURE__ */ t(N, { ...m, children: /* @__PURE__ */ e("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ t("div", { children: r }),
        !!(o != null && o.length) && /* @__PURE__ */ t("span", { children: b(o) })
      ] }) })
    ] });
  }
);
export {
  O as A
};

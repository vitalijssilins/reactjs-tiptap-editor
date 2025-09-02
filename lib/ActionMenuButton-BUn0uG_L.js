import { jsxs as i, jsx as e } from "react/jsx-runtime";
import n from "react";
import { Slot as a } from "@radix-ui/react-slot";
import { T as r, a as m, b as d, g as f } from "./tooltip-KX73XsAg.js";
import { B as o } from "./button-CcHmDfB3.js";
import { i as u } from "./index-BP_NLBls.js";
const C = n.forwardRef(
  ({ asChild: l, ...t }, x) => {
    var h;
    const c = u[t.icon];
    return /* @__PURE__ */ i(r, { children: [
      /* @__PURE__ */ e(m, { asChild: !0, children: /* @__PURE__ */ e(
        l ? a : o,
        {
          className: "richtext-h-[32px] richtext-min-w-24 richtext-overflow-hidden richtext-px-[5px]  richtext-py-0",
          disabled: t == null ? void 0 : t.disabled,
          ref: x,
          variant: "ghost",
          ...t,
          children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-h-full richtext-items-center richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ e("div", { className: "richtext-grow richtext-truncate richtext-text-left richtext-text-sm", children: t == null ? void 0 : t.title }),
            c && /* @__PURE__ */ e(c, { className: "richtext-ml-1 richtext-size-3 richtext-shrink-0 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ e(d, { children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ e("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ e("div", { className: "richtext-flex", children: !!((h = t == null ? void 0 : t.shortcutKeys) != null && h.length) && /* @__PURE__ */ e("span", { children: f(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
);
export {
  C as A
};

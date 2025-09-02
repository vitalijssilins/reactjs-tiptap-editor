import { jsx as e } from "react/jsx-runtime";
import * as s from "react";
import * as t from "@radix-ui/react-popover";
import { c } from "./index-BP_NLBls.js";
const x = t.Root, p = t.Trigger, n = s.forwardRef(({ className: o, align: r = "center", sideOffset: i = 4, ...a }, d) => /* @__PURE__ */ e(t.Portal, { children: /* @__PURE__ */ e(
  t.Content,
  {
    ref: d,
    align: r,
    sideOffset: i,
    className: c(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      o
    ),
    ...a
  }
) }));
n.displayName = t.Content.displayName;
export {
  x as P,
  p as a,
  n as b
};

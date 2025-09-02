import { jsx as m } from "react/jsx-runtime";
import * as c from "react";
import * as t from "@radix-ui/react-separator";
import { c as h } from "./index-BP_NLBls.js";
const p = c.forwardRef(
  ({ className: o, orientation: r = "horizontal", decorative: a = !0, ...e }, i) => /* @__PURE__ */ m(
    t.Root,
    {
      ref: i,
      decorative: a,
      orientation: r,
      className: h(
        "richtext-shrink-0 richtext-bg-border",
        r === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        o
      ),
      ...e
    }
  )
);
p.displayName = t.Root.displayName;
export {
  p as S
};

import { jsx as e } from "react/jsx-runtime";
import * as s from "react";
import * as t from "@radix-ui/react-switch";
import { c as r } from "./index-BP_NLBls.js";
const a = s.forwardRef(({ className: i, ...c }, o) => /* @__PURE__ */ e(
  t.Root,
  {
    className: r(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      i
    ),
    ...c,
    ref: o,
    children: /* @__PURE__ */ e(
      t.Thumb,
      {
        className: r(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
a.displayName = t.Root.displayName;
export {
  a as S
};

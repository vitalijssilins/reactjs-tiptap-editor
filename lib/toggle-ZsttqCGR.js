import { jsx as a } from "react/jsx-runtime";
import * as n from "react";
import * as t from "@radix-ui/react-toggle";
import { c as s, a as x } from "./index-BP_NLBls.js";
const h = x(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), d = n.forwardRef(({ className: e, variant: r, size: i, ...c }, o) => /* @__PURE__ */ a(
  t.Root,
  {
    ref: o,
    className: s(h({ variant: r, size: i, className: e })),
    ...c
  }
));
d.displayName = t.Root.displayName;
export {
  d as T
};

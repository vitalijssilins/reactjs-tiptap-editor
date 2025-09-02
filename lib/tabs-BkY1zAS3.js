import { jsx as s } from "react/jsx-runtime";
import * as c from "react";
import * as t from "@radix-ui/react-tabs";
import { c as a } from "./index-BP_NLBls.js";
const d = t.Root, o = c.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ s(
  t.List,
  {
    ref: r,
    className: a(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...i
  }
));
o.displayName = t.List.displayName;
const n = c.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ s(
  t.Trigger,
  {
    ref: r,
    className: a(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...i
  }
));
n.displayName = t.Trigger.displayName;
const x = c.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ s(
  t.Content,
  {
    ref: r,
    className: a(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...i
  }
));
x.displayName = t.Content.displayName;
export {
  d as T,
  o as a,
  n as b,
  x as c
};

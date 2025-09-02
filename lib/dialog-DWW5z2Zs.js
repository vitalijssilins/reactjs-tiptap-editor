import { jsx as a, jsxs as s } from "react/jsx-runtime";
import * as o from "react";
import * as t from "@radix-ui/react-dialog";
import { X as n } from "lucide-react";
import { c } from "./index-BP_NLBls.js";
const D = t.Root, b = t.Trigger, h = t.Portal, x = o.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ a(
  t.Overlay,
  {
    ref: r,
    className: c(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...i
  }
));
x.displayName = t.Overlay.displayName;
const d = o.forwardRef(({ className: e, children: i, ...r }, l) => /* @__PURE__ */ s(h, { children: [
  /* @__PURE__ */ a(x, {}),
  /* @__PURE__ */ s(
    t.Content,
    {
      ref: l,
      className: c(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        i,
        /* @__PURE__ */ s(t.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ a(n, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ a("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
d.displayName = t.Content.displayName;
function m({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: c(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...i
    }
  );
}
m.displayName = "DialogHeader";
function f({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: c(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...i
    }
  );
}
f.displayName = "DialogFooter";
const p = o.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ a(
  t.Title,
  {
    ref: r,
    className: c(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...i
  }
));
p.displayName = t.Title.displayName;
const g = o.forwardRef(({ className: e, ...i }, r) => /* @__PURE__ */ a(
  t.Description,
  {
    ref: r,
    className: c("richtext-text-sm richtext-text-muted-foreground", e),
    ...i
  }
));
g.displayName = t.Description.displayName;
export {
  D,
  b as a,
  d as b,
  p as c,
  f as d,
  m as e
};

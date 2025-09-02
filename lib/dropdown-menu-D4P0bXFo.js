import { jsx as c, jsxs as h } from "react/jsx-runtime";
import * as n from "react";
import * as t from "@radix-ui/react-dropdown-menu";
import { Check as x, ChevronRight as d, Circle as l } from "lucide-react";
import { c as o } from "./index-BP_NLBls.js";
const R = t.Root, I = t.Trigger, S = t.Portal, C = t.Sub, m = n.forwardRef(({ className: e, inset: r, children: i, ...a }, s) => /* @__PURE__ */ h(
  t.SubTrigger,
  {
    ref: s,
    className: o(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      r && "richtext-pl-8",
      e
    ),
    ...a,
    children: [
      i,
      /* @__PURE__ */ c(d, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
m.displayName = t.SubTrigger.displayName;
const p = n.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ c(
  t.SubContent,
  {
    ref: i,
    className: o(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
p.displayName = t.SubContent.displayName;
const u = n.forwardRef(({ className: e, sideOffset: r = 4, ...i }, a) => /* @__PURE__ */ c(t.Portal, { children: /* @__PURE__ */ c(
  t.Content,
  {
    ref: a,
    sideOffset: r,
    className: o(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
u.displayName = t.Content.displayName;
const f = n.forwardRef(({ className: e, inset: r, ...i }, a) => /* @__PURE__ */ c(
  t.Item,
  {
    ref: a,
    className: o(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      r && "richtext-pl-8",
      e
    ),
    ...i
  }
));
f.displayName = t.Item.displayName;
const b = n.forwardRef(({ className: e, children: r, checked: i, ...a }, s) => /* @__PURE__ */ h(
  t.CheckboxItem,
  {
    ref: s,
    className: o(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: i,
    ...a,
    children: [
      /* @__PURE__ */ c("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ c(t.ItemIndicator, { children: /* @__PURE__ */ c(x, { className: "richtext-h-4 richtext-w-4" }) }) }),
      r
    ]
  }
));
b.displayName = t.CheckboxItem.displayName;
const w = n.forwardRef(({ className: e, children: r, ...i }, a) => /* @__PURE__ */ h(
  t.RadioItem,
  {
    ref: a,
    className: o(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ c("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ c(t.ItemIndicator, { children: /* @__PURE__ */ c(l, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      r
    ]
  }
));
w.displayName = t.RadioItem.displayName;
const g = n.forwardRef(({ className: e, inset: r, ...i }, a) => /* @__PURE__ */ c(
  t.Label,
  {
    ref: a,
    className: o(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      r && "richtext-pl-8",
      e
    ),
    ...i
  }
));
g.displayName = t.Label.displayName;
const N = n.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ c(
  t.Separator,
  {
    ref: i,
    className: o("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...r
  }
));
N.displayName = t.Separator.displayName;
function y({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ c(
    "span",
    {
      className: o("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...r
    }
  );
}
y.displayName = "DropdownMenuShortcut";
export {
  R as D,
  I as a,
  u as b,
  b as c,
  N as d,
  y as e,
  f,
  C as g,
  m as h,
  S as i,
  p as j
};

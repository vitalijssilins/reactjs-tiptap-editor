import { jsx as n } from "react/jsx-runtime";
import * as c from "react";
import * as e from "@radix-ui/react-tooltip";
import { c as d } from "./index-BP_NLBls.js";
let r;
function o() {
  return r === void 0 && (r = navigator.platform.includes("Mac")), r;
}
function m(t) {
  return `${t}`.toLowerCase() === "mod" ? o() ? "⌘" : "Ctrl" : `${t}`.toLowerCase() === "alt" ? o() ? "⌥" : "Alt" : `${t}`.toLowerCase() === "shift" ? o() ? "⇧" : "Shift" : t;
}
function p(t) {
  return t.map(m).join(" ");
}
const x = e.Provider, u = e.Root, g = e.Trigger, f = c.forwardRef(({ className: t, sideOffset: i = 4, ...a }, s) => /* @__PURE__ */ n(
  e.Content,
  {
    ref: s,
    sideOffset: i,
    className: d(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
f.displayName = e.Content.displayName;
export {
  u as T,
  g as a,
  f as b,
  m as c,
  x as d,
  p as g
};

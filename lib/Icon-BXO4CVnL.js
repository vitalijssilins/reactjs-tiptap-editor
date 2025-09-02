import { jsx as t } from "react/jsx-runtime";
import { i } from "./index-BP_NLBls.js";
function a(n) {
  const c = i[n.name];
  return c ? /* @__PURE__ */ t(c, { onClick: n == null ? void 0 : n.onClick, className: `richtext-w-4 richtext-h-4 ${(n == null ? void 0 : n.className) || ""}` }) : null;
}
export {
  a as I
};

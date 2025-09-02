import { t, a as d, b as a } from "./debounce-M7Yt2bxB.js";
function s(i, f, n) {
  return i === i && (n !== void 0 && (i = i <= n ? i : n), f !== void 0 && (i = i >= f ? i : f)), i;
}
function b(i, f, n) {
  return n === void 0 && (n = f, f = void 0), n !== void 0 && (n = t(n), n = n === n ? n : 0), f !== void 0 && (f = t(f), f = f === f ? f : 0), s(t(i), f, n);
}
var c = "[object Number]";
function g(i) {
  return typeof i == "number" || d(i) && a(i) == c;
}
export {
  b as c,
  g as i
};

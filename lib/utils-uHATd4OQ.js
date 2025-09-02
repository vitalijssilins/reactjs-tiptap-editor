function c(n, t, s) {
  return n < t ? t : n > s ? s : n;
}
const i = (n) => typeof n == "number", f = (n) => typeof n == "string", o = (n) => typeof n == "function";
function a(n, t = "px") {
  if (!n)
    return n;
  const s = i(n) ? String(n) : n, e = Number.parseFloat(s), r = s.match(/[%a-z]+$/i), u = r ? r[0] : t;
  return Number.isNaN(e) ? n : e + u;
}
function p(n, t) {
  if (!n)
    return !1;
  const { extensions: s = [] } = (n == null ? void 0 : n.extensionManager) ?? {};
  return !!s.find((r) => r.name === t);
}
function g(n) {
  return n.map((t) => f(t) ? { value: t, name: t } : t);
}
export {
  c,
  g as e,
  a as g,
  p as h,
  o as i
};

import { d as b } from "./index-7cuXJD5N.js";
import { jsx as m } from "react/jsx-runtime";
import { createContext as x, useContext as E, useSyncExternalStore as P, useRef as a, useCallback as n } from "react";
function s(u) {
  function i() {
    const e = a(u), t = n(() => e.current, []), r = a(/* @__PURE__ */ new Set()), l = n((o) => {
      e.current = { ...e.current, ...o }, r.current.forEach((S) => S());
    }, []), v = n((o) => (r.current.add(o), () => r.current.delete(o)), []);
    return {
      get: t,
      set: l,
      subscribe: v
    };
  }
  const c = x(null);
  function d({ children: e }) {
    return /* @__PURE__ */ m(c.Provider, { value: i(), children: e });
  }
  function f(e) {
    const t = E(c);
    if (!t)
      throw new Error("Store not found");
    return [P(
      t.subscribe,
      () => e(t.get()),
      () => e(u)
    ), t.set];
  }
  return {
    Provider: d,
    useStore: f
  };
}
s({
  value: !1
});
s({
  value: !1
});
const { Provider: g, useStore: w } = s({
  value: !1
}), { Provider: T, useStore: j } = s({
  value: "light"
});
b("0");
export {
  g as P,
  j as a,
  T as b,
  w as u
};

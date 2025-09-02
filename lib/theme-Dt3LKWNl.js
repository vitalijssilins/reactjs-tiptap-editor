import { useState as i, useRef as p, useEffect as E } from "react";
import { d as h } from "./index-BrCENl0L.js";
import { a as v } from "./store-j-5VHU4U.js";
import { d as T, E as l } from "./events.constant-BTaUfYyd.js";
function A(t) {
  return t;
}
function j(t, n, e, S) {
  const c = A, [u, f] = i(c(e)), m = p(u);
  return E(() => {
    const o = () => {
      const s = { ...e, ...t.getAttributes(n) };
      Object.keys(s).forEach((r) => {
        (s[r] === null || s[r] === void 0) && (s[r] = e ? e[r] : null);
      });
      const a = c(s);
      h(m.current, a) || (f(a), m.current = a);
    };
    return t.on("selectionUpdate", o), t.on("transaction", o), () => {
      t.off("selectionUpdate", o), t.off("transaction", o);
    };
  }, [t, e, n, c]), u;
}
function q() {
  const [t] = v((n) => n.value);
  return t;
}
const C = {
  setTheme: (t, n) => {
    T(l.UPDATE_THEME(t), n);
  }
};
export {
  q as a,
  C as t,
  j as u
};

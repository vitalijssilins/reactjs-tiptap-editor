import * as c from "react";
const d = 1, f = 1e6;
let T = 0;
function p() {
  return T = (T + 1) % Number.MAX_SAFE_INTEGER, T.toString();
}
const a = /* @__PURE__ */ new Map();
function S(t) {
  if (a.has(t))
    return;
  const s = setTimeout(() => {
    a.delete(t), n({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, f);
  a.set(t, s);
}
function A(t, s) {
  switch (s.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [s.toast, ...t.toasts].slice(0, d)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (e) => e.id === s.toast.id ? { ...e, ...s.toast } : e
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: e } = s;
      return e ? S(e) : t.toasts.forEach((o) => {
        S(o.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (o) => o.id === e || e === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return s.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((e) => e.id !== s.toastId)
      };
  }
}
const r = [];
let u = { toasts: [] };
function n(t) {
  u = A(u, t), r.forEach((s) => {
    s(u);
  });
}
function O({ ...t }) {
  const s = p(), e = (i) => n({
    type: "UPDATE_TOAST",
    toast: { ...i, id: s }
  }), o = () => n({ type: "DISMISS_TOAST", toastId: s });
  return n({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: s,
      open: !0,
      onOpenChange: (i) => {
        i || o();
      }
    }
  }), {
    id: s,
    dismiss: o,
    update: e
  };
}
function E() {
  const [t, s] = c.useState(u);
  return c.useEffect(() => (r.push(s), () => {
    const e = r.indexOf(s);
    e > -1 && r.splice(e, 1);
  }), [t]), {
    ...t,
    toast: O,
    dismiss: (e) => n({ type: "DISMISS_TOAST", toastId: e })
  };
}
export {
  E as u
};

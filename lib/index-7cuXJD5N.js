import { useSyncExternalStore as w } from "react";
function E({
  updateComputed: n,
  notifyEffect: u
}) {
  let d, r;
  return {
    /**
     * Links a given dependency and subscriber if they are not already linked.
     * 
     * @param dep - The dependency to be linked.
     * @param sub - The subscriber that depends on this dependency.
     * @returns The newly created link object if the two are not already linked; otherwise `undefined`.
     */
    link(e, s) {
      const t = s.depsTail;
      if (t !== void 0 && t.dep === e)
        return;
      const f = t !== void 0 ? t.nextDep : s.deps;
      if (f !== void 0 && f.dep === e) {
        s.depsTail = f;
        return;
      }
      const i = e.subsTail;
      if (!(i !== void 0 && i.sub === s && p(i, s)))
        return y(e, s, f, t);
    },
    /**
     * Traverses and marks subscribers starting from the provided link.
     * 
     * It sets flags (e.g., Dirty, PendingComputed, PendingEffect) on each subscriber
     * to indicate which ones require re-computation or effect processing. 
     * This function should be called after a signal's value changes.
     * 
     * @param link - The starting link from which propagation begins.
     */
    propagate(e) {
      let s = 32, t = e, f = 0;
      e: do {
        const i = e.sub, o = i.flags;
        if (!(o & 244) && (i.flags = o | s | 8, !0) || o & 16 && !(o & 4) && (i.flags = o & -17 | s | 8, !0) || !(o & 224) && p(e, i) && (i.flags = o | 16 | s | 8, i.subs !== void 0)) {
          const c = i.subs;
          if (c !== void 0) {
            c.nextSub !== void 0 ? (c.prevSub = t, e = t = c, s = 64, ++f) : (e = c, s = o & 2 ? 128 : 64);
            continue;
          }
          o & 2 && (r !== void 0 ? r.depsTail.nextDep = i.deps : d = i, r = i);
        } else o & (4 | s) ? !(o & s) && o & 224 && p(e, i) && (i.flags = o | s) : (i.flags = o | s | 8, (o & 10) === 2 && (r !== void 0 ? r.depsTail.nextDep = i.deps : d = i, r = i));
        if ((e = t.nextSub) !== void 0) {
          t = e, s = f ? 64 : 32;
          continue;
        }
        for (; f; ) {
          --f;
          const x = t.dep.subs;
          if (t = x.prevSub, x.prevSub = void 0, (e = t.nextSub) !== void 0) {
            t = e, s = f ? 64 : 32;
            continue e;
          }
        }
        break;
      } while (!0);
    },
    /**
     * Prepares the given subscriber to track new dependencies.
     * 
     * It resets the subscriber's internal pointers (e.g., depsTail) and
     * sets its flags to indicate it is now tracking dependency links.
     * 
     * @param sub - The subscriber to start tracking.
     */
    startTracking(e) {
      e.depsTail = void 0, e.flags = e.flags & -249 | 4;
    },
    /**
     * Concludes tracking of dependencies for the specified subscriber.
     * 
     * It clears or unlinks any tracked dependency information, then
     * updates the subscriber's flags to indicate tracking is complete.
     * 
     * @param sub - The subscriber whose tracking is ending.
     */
    endTracking(e) {
      const s = e.depsTail;
      if (s !== void 0) {
        const t = s.nextDep;
        t !== void 0 && (S(t), s.nextDep = void 0);
      } else e.deps !== void 0 && (S(e.deps), e.deps = void 0);
      e.flags &= -5;
    },
    /**
     * Updates the dirty flag for the given subscriber based on its dependencies.
     * 
     * If the subscriber has any pending computeds, this function sets the Dirty flag
     * and returns `true`. Otherwise, it clears the PendingComputed flag and returns `false`.
     * 
     * @param sub - The subscriber to update.
     * @param flags - The current flag set for this subscriber.
     * @returns `true` if the subscriber is marked as Dirty; otherwise `false`.
     */
    updateDirtyFlag(e, s) {
      return g(e.deps) ? (e.flags = s | 32, !0) : (e.flags = s & -65, !1);
    },
    /**
     * Updates the computed subscriber if necessary before its value is accessed.
     * 
     * If the subscriber is marked Dirty or PendingComputed, this function runs
     * the provided updateComputed logic and triggers a shallowPropagate for any
     * downstream subscribers if an actual update occurs.
     * 
     * @param computed - The computed subscriber to update.
     * @param flags - The current flag set for this subscriber.
     */
    processComputedUpdate(e, s) {
      if ((s & 32 || (g(e.deps) || (e.flags = s & -65, !1))) && n(e)) {
        const t = e.subs;
        t !== void 0 && l(t);
      }
    },
    /**
     * Ensures all pending internal effects for the given subscriber are processed.
     * 
     * This should be called after an effect decides not to re-run itself but may still
     * have dependencies flagged with PendingEffect. If the subscriber is flagged with
     * PendingEffect, this function clears that flag and invokes `notifyEffect` on any
     * related dependencies marked as Effect and Propagated, processing pending effects.
     * 
     * @param sub - The subscriber which may have pending effects.
     * @param flags - The current flags on the subscriber to check.
     */
    processPendingInnerEffects(e, s) {
      if (s & 128) {
        e.flags = s & -129;
        let t = e.deps;
        do {
          const f = t.dep;
          "flags" in f && f.flags & 2 && f.flags & 224 && u(f), t = t.nextDep;
        } while (t !== void 0);
      }
    },
    /**
     * Processes queued effect notifications after a batch operation finishes.
     * 
     * Iterates through all queued effects, calling notifyEffect on each.
     * If an effect remains partially handled, its flags are updated, and future
     * notifications may be triggered until fully handled.
     */
    processEffectNotifications() {
      for (; d !== void 0; ) {
        const e = d, s = e.depsTail, t = s.nextDep;
        t !== void 0 ? (s.nextDep = void 0, d = t.sub) : (d = void 0, r = void 0), u(e) || (e.flags &= -9);
      }
    }
  };
  function y(e, s, t, f) {
    const i = {
      dep: e,
      sub: s,
      nextDep: t,
      prevSub: void 0,
      nextSub: void 0
    };
    if (f === void 0 ? s.deps = i : f.nextDep = i, e.subs === void 0)
      e.subs = i;
    else {
      const o = e.subsTail;
      i.prevSub = o, o.nextSub = i;
    }
    return s.depsTail = i, e.subsTail = i, i;
  }
  function g(e) {
    let s = 0, t;
    e: do {
      t = !1;
      const f = e.dep;
      if ("flags" in f) {
        const i = f.flags;
        if ((i & 33) === 33) {
          if (n(f)) {
            const o = f.subs;
            o.nextSub !== void 0 && l(o), t = !0;
          }
        } else if ((i & 65) === 65) {
          const o = f.subs;
          o.nextSub !== void 0 && (o.prevSub = e), e = f.deps, ++s;
          continue;
        }
      }
      if (!t && e.nextDep !== void 0) {
        e = e.nextDep;
        continue;
      }
      if (s) {
        let i = e.sub;
        do {
          --s;
          const o = i.subs;
          if (t) {
            if (n(i)) {
              (e = o.prevSub) !== void 0 ? (o.prevSub = void 0, l(i.subs), i = e.sub) : i = o.sub;
              continue;
            }
          } else
            i.flags &= -65;
          if ((e = o.prevSub) !== void 0) {
            if (o.prevSub = void 0, e.nextDep !== void 0) {
              e = e.nextDep;
              continue e;
            }
            i = e.sub;
          } else {
            if ((e = o.nextDep) !== void 0)
              continue e;
            i = o.sub;
          }
          t = !1;
        } while (s);
      }
      return t;
    } while (!0);
  }
  function l(e) {
    do {
      const s = e.sub, t = s.flags;
      (t & 96) === 64 && (s.flags = t | 32 | 8, (t & 10) === 2 && (r !== void 0 ? r.depsTail.nextDep = s.deps : d = s, r = s)), e = e.nextSub;
    } while (e !== void 0);
  }
  function p(e, s) {
    const t = s.depsTail;
    if (t !== void 0) {
      let f = s.deps;
      do {
        if (f === e)
          return !0;
        if (f === t)
          break;
        f = f.nextDep;
      } while (f !== void 0);
    }
    return !1;
  }
  function S(e) {
    do {
      const s = e.dep, t = e.nextDep, f = e.nextSub, i = e.prevSub;
      if (f !== void 0 ? f.prevSub = i : s.subsTail = i, i !== void 0 ? i.nextSub = f : s.subs = f, s.subs === void 0 && "deps" in s) {
        const o = s.flags;
        o & 32 || (s.flags = o | 32);
        const c = s.deps;
        if (c !== void 0) {
          e = c, s.depsTail.nextDep = t, s.deps = void 0, s.depsTail = void 0;
          continue;
        }
      }
      e = t;
    } while (e !== void 0);
  }
}
var {
  link: T,
  propagate: V,
  updateDirtyFlag: F,
  startTracking: v,
  endTracking: b,
  processEffectNotifications: N,
  processComputedUpdate: R,
  processPendingInnerEffects: D
} = E({
  updateComputed(n) {
    const u = a;
    a = n, v(n);
    try {
      const d = n.currentValue, r = n.getter(d);
      return d !== r ? (n.currentValue = r, !0) : !1;
    } finally {
      a = u, b(n);
    }
  },
  notifyEffect(n) {
    return "isScope" in n ? I(n) : P(n);
  }
}), a;
function q(n) {
  return U.bind({
    currentValue: n,
    subs: void 0,
    subsTail: void 0
  });
}
function L(n) {
  const u = {
    fn: n,
    subs: void 0,
    subsTail: void 0,
    deps: void 0,
    depsTail: void 0,
    flags: 2
    /* Effect */
  };
  return a !== void 0 && T(u, a), h(u), C.bind(u);
}
function h(n) {
  const u = a;
  a = n, v(n);
  try {
    n.fn();
  } finally {
    a = u, b(n);
  }
}
function P(n) {
  const u = n.flags;
  return u & 32 || u & 64 && F(n, u) ? h(n) : D(n, n.flags), !0;
}
function I(n) {
  return n.flags & 128 ? (D(n, n.flags), !0) : !1;
}
function U(...n) {
  if (n.length) {
    if (this.currentValue !== (this.currentValue = n[0])) {
      const u = this.subs;
      u !== void 0 && (V(u), N());
    }
  } else
    return a !== void 0 && T(this, a), this.currentValue;
}
function C() {
  v(this), b(this);
}
function j(n) {
  return q(n);
}
function z(n) {
  return [w((u) => {
    let d = L(() => {
      n(), u();
    });
    return () => d();
  }, () => n(), () => n()), (u) => {
    n(typeof u == "function" ? u(n()) : u);
  }];
}
export {
  j as d,
  z as x
};

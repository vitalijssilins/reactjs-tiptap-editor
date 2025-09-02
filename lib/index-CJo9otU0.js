import { P as se, a as ue, k as ae, h as de, p as le, E as ce, l as he, o as fe, q as pe } from "./index-sel2RZJw.js";
import me from "tippy.js";
import O, { useState as $, useContext as k, useEffect as K, useRef as ve, useDebugValue as ee, forwardRef as Se, createContext as te, useLayoutEffect as Ee, createRef as ye, memo as _e, createElement as Oe, version as q } from "react";
import be, { flushSync as ge } from "react-dom";
class we {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: f }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: c, from: h, to: d }) => {
      const { doc: a, selection: p } = c, { empty: m } = p, E = !a.textBetween(h, d).length && ae(c.selection), S = this.element.contains(document.activeElement);
      return !(!(s.hasFocus() || S) || m || E || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var c;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((c = this.element.parentNode) === null || c === void 0) && c.contains(s.relatedTarget)) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.handleDebouncedUpdate = (s, c) => {
      const h = !(c != null && c.selection.eq(s.state.selection)), d = !(c != null && c.doc.eq(s.state.doc));
      !h && !d || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(s, h, d, c);
      }, this.updateDelay));
    }, this.updateHandler = (s, c, h, d) => {
      var a, p, m;
      const { state: E, composing: S } = s, { selection: y } = E;
      if (S || !c && !h)
        return;
      this.createTooltip();
      const { ranges: D } = y, v = Math.min(...D.map((u) => u.$from.pos)), l = Math.max(...D.map((u) => u.$to.pos));
      if (!((a = this.shouldShow) === null || a === void 0 ? void 0 : a.call(this, {
        editor: this.editor,
        element: this.element,
        view: s,
        state: E,
        oldState: d,
        from: v,
        to: l
      }))) {
        this.hide();
        return;
      }
      (p = this.tippy) === null || p === void 0 || p.setProps({
        getReferenceClientRect: ((m = this.tippyOptions) === null || m === void 0 ? void 0 : m.getReferenceClientRect) || (() => {
          if (de(E.selection)) {
            let u = s.nodeDOM(v);
            if (u) {
              const _ = u.dataset.nodeViewWrapper ? u : u.querySelector("[data-node-view-wrapper]");
              if (_ && (u = _.firstChild), u)
                return u.getBoundingClientRect();
            }
          }
          return le(s, v, l);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, f && (this.shouldShow = f), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = me(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), f = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, f, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const ne = (n) => new se({
  key: typeof n.pluginKey == "string" ? new ue(n.pluginKey) : n.pluginKey,
  view: (e) => new we({ view: e, ...n })
});
ce.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      ne({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
function De(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var U = { exports: {} }, I = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function Re() {
  if (z) return I;
  z = 1;
  var n = O;
  function e(a, p) {
    return a === p && (a !== 0 || 1 / a === 1 / p) || a !== a && p !== p;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, o = n.useLayoutEffect, f = n.useDebugValue;
  function s(a, p) {
    var m = p(), E = r({ inst: { value: m, getSnapshot: p } }), S = E[0].inst, y = E[1];
    return o(function() {
      S.value = m, S.getSnapshot = p, c(S) && y({ inst: S });
    }, [a, m, p]), i(function() {
      return c(S) && y({ inst: S }), a(function() {
        c(S) && y({ inst: S });
      });
    }, [a]), f(m), m;
  }
  function c(a) {
    var p = a.getSnapshot;
    a = a.value;
    try {
      var m = p();
      return !t(a, m);
    } catch {
      return !0;
    }
  }
  function h(a, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : s;
  return I.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, I;
}
var H = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function Ce() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = O, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(v) {
      {
        for (var l = arguments.length, b = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
          b[u - 1] = arguments[u];
        r("error", v, b);
      }
    }
    function r(v, l, b) {
      {
        var u = e.ReactDebugCurrentFrame, _ = u.getStackAddendum();
        _ !== "" && (l += "%s", b = b.concat([_]));
        var w = b.map(function(g) {
          return String(g);
        });
        w.unshift("Warning: " + l), Function.prototype.apply.call(console[v], console, w);
      }
    }
    function i(v, l) {
      return v === l && (v !== 0 || 1 / v === 1 / l) || v !== v && l !== l;
    }
    var o = typeof Object.is == "function" ? Object.is : i, f = n.useState, s = n.useEffect, c = n.useLayoutEffect, h = n.useDebugValue, d = !1, a = !1;
    function p(v, l, b) {
      d || n.startTransition !== void 0 && (d = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var u = l();
      if (!a) {
        var _ = l();
        o(u, _) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), a = !0);
      }
      var w = f({
        inst: {
          value: u,
          getSnapshot: l
        }
      }), g = w[0].inst, C = w[1];
      return c(function() {
        g.value = u, g.getSnapshot = l, m(g) && C({
          inst: g
        });
      }, [v, u, l]), s(function() {
        m(g) && C({
          inst: g
        });
        var L = function() {
          m(g) && C({
            inst: g
          });
        };
        return v(L);
      }, [v]), h(u), u;
    }
    function m(v) {
      var l = v.getSnapshot, b = v.value;
      try {
        var u = l();
        return !o(b, u);
      } catch {
        return !0;
      }
    }
    function E(v, l, b) {
      return l();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", y = !S, R = y ? E : p, D = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : R;
    H.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), H;
}
process.env.NODE_ENV === "production" ? U.exports = Re() : U.exports = Ce();
var M = U.exports;
const Te = (...n) => (e) => {
  n.forEach((t) => {
    typeof t == "function" ? t(e) : t && (t.current = e);
  });
}, Me = ({ contentComponent: n }) => {
  const e = M.useSyncExternalStore(n.subscribe, n.getSnapshot, n.getServerSnapshot);
  return O.createElement(O.Fragment, null, Object.values(e));
};
function Le() {
  const n = /* @__PURE__ */ new Set();
  let e = {};
  return {
    /**
     * Subscribe to the editor instance's changes.
     */
    subscribe(t) {
      return n.add(t), () => {
        n.delete(t);
      };
    },
    getSnapshot() {
      return e;
    },
    getServerSnapshot() {
      return e;
    },
    /**
     * Adds a new NodeView Renderer to the editor.
     */
    setRenderer(t, r) {
      e = {
        ...e,
        [t]: be.createPortal(r.reactElement, r.element, t)
      }, n.forEach((i) => i());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(t) {
      const r = { ...e };
      delete r[t], e = r, n.forEach((i) => i());
    }
  };
}
class xe extends O.Component {
  constructor(e) {
    var t;
    super(e), this.editorContentRef = O.createRef(), this.initialized = !1, this.state = {
      hasContentComponentInitialized: !!(!((t = e.editor) === null || t === void 0) && t.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const e = this.props.editor;
    if (e && !e.isDestroyed && e.options.element) {
      if (e.contentComponent)
        return;
      const t = this.editorContentRef.current;
      t.append(...e.options.element.childNodes), e.setOptions({
        element: t
      }), e.contentComponent = Le(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
        this.setState((r) => r.hasContentComponentInitialized ? r : {
          hasContentComponentInitialized: !0
        }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
      })), e.createNodeViews(), this.initialized = !0;
    }
  }
  componentWillUnmount() {
    const e = this.props.editor;
    if (!e || (this.initialized = !1, e.isDestroyed || e.view.setProps({
      nodeViews: {}
    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null, !e.options.element.firstChild))
      return;
    const t = document.createElement("div");
    t.append(...e.options.element.childNodes), e.setOptions({
      element: t
    });
  }
  render() {
    const { editor: e, innerRef: t, ...r } = this.props;
    return O.createElement(
      O.Fragment,
      null,
      O.createElement("div", { ref: Te(t, this.editorContentRef), ...r }),
      (e == null ? void 0 : e.contentComponent) && O.createElement(Me, { contentComponent: e.contentComponent })
    );
  }
}
const Ne = Se((n, e) => {
  const t = O.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [n.editor]);
  return O.createElement(xe, {
    key: t,
    innerRef: e,
    ...n
  });
}), ke = O.memo(Ne);
var Ve = function n(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, i, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0; )
        if (!n(e[i], t[i])) return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      for (i of e.entries())
        if (!n(i[1], t.get(i[0]))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0; )
        if (e[i] !== t[i]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var f = o[i];
      if (!(f === "_owner" && e.$$typeof) && !n(e[f], t[f]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}, Ae = /* @__PURE__ */ De(Ve), j = { exports: {} }, B = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function Ie() {
  if (Y) return B;
  Y = 1;
  var n = O, e = M;
  function t(h, d) {
    return h === d && (h !== 0 || 1 / h === 1 / d) || h !== h && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, o = n.useRef, f = n.useEffect, s = n.useMemo, c = n.useDebugValue;
  return B.useSyncExternalStoreWithSelector = function(h, d, a, p, m) {
    var E = o(null);
    if (E.current === null) {
      var S = { hasValue: !1, value: null };
      E.current = S;
    } else S = E.current;
    E = s(function() {
      function R(u) {
        if (!D) {
          if (D = !0, v = u, u = p(u), m !== void 0 && S.hasValue) {
            var _ = S.value;
            if (m(_, u)) return l = _;
          }
          return l = u;
        }
        if (_ = l, r(v, u)) return _;
        var w = p(u);
        return m !== void 0 && m(_, w) ? _ : (v = u, l = w);
      }
      var D = !1, v, l, b = a === void 0 ? null : a;
      return [function() {
        return R(d());
      }, b === null ? void 0 : function() {
        return R(b());
      }];
    }, [d, a, p, m]);
    var y = i(h, E[0], E[1]);
    return f(function() {
      S.hasValue = !0, S.value = y;
    }, [y]), c(y), y;
  }, B;
}
var P = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function He() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = O, e = M;
    function t(d, a) {
      return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
    }
    var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, o = n.useRef, f = n.useEffect, s = n.useMemo, c = n.useDebugValue;
    function h(d, a, p, m, E) {
      var S = o(null), y;
      S.current === null ? (y = {
        hasValue: !1,
        value: null
      }, S.current = y) : y = S.current;
      var R = s(function() {
        var b = !1, u, _, w = function(T) {
          if (!b) {
            b = !0, u = T;
            var x = m(T);
            if (E !== void 0 && y.hasValue) {
              var N = y.value;
              if (E(N, x))
                return _ = N, N;
            }
            return _ = x, x;
          }
          var oe = u, V = _;
          if (r(oe, T))
            return V;
          var A = m(T);
          return E !== void 0 && E(V, A) ? V : (u = T, _ = A, A);
        }, g = p === void 0 ? null : p, C = function() {
          return w(a());
        }, L = g === null ? void 0 : function() {
          return w(g());
        };
        return [C, L];
      }, [a, p, m, E]), D = R[0], v = R[1], l = i(d, D, v);
      return f(function() {
        y.hasValue = !0, y.value = l;
      }, [l]), c(l), l;
    }
    P.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), P;
}
process.env.NODE_ENV === "production" ? j.exports = Ie() : j.exports = He();
var Be = j.exports;
const Pe = typeof window < "u" ? Ee : K;
class Ue {
  constructor(e) {
    this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = e, this.lastSnapshot = { editor: e, transactionNumber: 0 }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
  }
  /**
   * Get the current editor instance.
   */
  getSnapshot() {
    return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = { editor: this.editor, transactionNumber: this.transactionNumber }, this.lastSnapshot);
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return { editor: null, transactionNumber: 0 };
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(e) {
    return this.subscribers.add(e), () => {
      this.subscribers.delete(e);
    };
  }
  /**
   * Watch the editor instance for changes.
   */
  watch(e) {
    if (this.editor = e, this.editor) {
      const t = () => {
        this.transactionNumber += 1, this.subscribers.forEach((i) => i());
      }, r = this.editor;
      return r.on("transaction", t), () => {
        r.off("transaction", t);
      };
    }
  }
}
function je(n) {
  var e;
  const [t] = $(() => new Ue(n.editor)), r = Be.useSyncExternalStoreWithSelector(t.subscribe, t.getSnapshot, t.getServerSnapshot, n.selector, (e = n.equalityFn) !== null && e !== void 0 ? e : Ae);
  return Pe(() => t.watch(n.editor), [n.editor, t]), ee(r), r;
}
const Q = process.env.NODE_ENV !== "production", F = typeof window > "u", Fe = F || !!(typeof window < "u" && window.next);
class W {
  constructor(e) {
    this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
  }
  setEditor(e) {
    this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((t) => t());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0)
      return F || Fe ? (Q && console.warn("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."), null) : this.createEditor();
    if (this.options.current.immediatelyRender && F && Q)
      throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
    return this.options.current.immediatelyRender ? this.createEditor() : null;
  }
  /**
   * Create a new editor instance. And attach event listeners.
   */
  createEditor() {
    const e = {
      ...this.options.current,
      // Always call the most recent version of the callback function by default
      onBeforeCreate: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onBeforeCreate) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onBlur: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onBlur) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onCreate: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onCreate) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onDestroy: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onDestroy) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onFocus: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onFocus) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onSelectionUpdate: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onSelectionUpdate) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onTransaction: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onTransaction) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onUpdate: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onUpdate) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onContentError: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onContentError) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onDrop: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onDrop) === null || o === void 0 ? void 0 : o.call(i, ...r);
      },
      onPaste: (...r) => {
        var i, o;
        return (o = (i = this.options.current).onPaste) === null || o === void 0 ? void 0 : o.call(i, ...r);
      }
    };
    return new he(e);
  }
  /**
   * Get the current editor instance.
   */
  getEditor() {
    return this.editor;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return null;
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(e) {
    return this.subscriptions.add(e), () => {
      this.subscriptions.delete(e);
    };
  }
  static compareOptions(e, t) {
    return Object.keys(e).every((r) => ["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(r) ? !0 : r === "extensions" && e.extensions && t.extensions ? e.extensions.length !== t.extensions.length ? !1 : e.extensions.every((i, o) => {
      var f;
      return i === ((f = t.extensions) === null || f === void 0 ? void 0 : f[o]);
    }) : e[r] === t[r]);
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(e) {
    return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? W.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
      ...this.options.current,
      editable: this.editor.isEditable
    }) : this.refreshEditorInstance(e), () => {
      this.isComponentMounted = !1, this.scheduleDestroy();
    });
  }
  /**
   * Recreate the editor instance if the dependencies have changed.
   */
  refreshEditorInstance(e) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = e;
        return;
      }
      if (this.previousDeps.length === e.length && this.previousDeps.every((r, i) => r === e[i]))
        return;
    }
    this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
  }
  /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */
  scheduleDestroy() {
    const e = this.instanceId, t = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === e) {
        t && t.setOptions(this.options.current);
        return;
      }
      t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
    }, 1);
  }
}
function et(n = {}, e = []) {
  const t = ve(n);
  t.current = n;
  const [r] = $(() => new W(t)), i = M.useSyncExternalStore(r.subscribe, r.getEditor, r.getServerSnapshot);
  return ee(i), K(r.onRender(e)), je({
    editor: i,
    selector: ({ transactionNumber: o }) => n.shouldRerenderOnTransaction === !1 ? null : n.immediatelyRender && o === 0 ? 0 : o + 1
  }), i;
}
const re = te({
  editor: null
});
re.Consumer;
const $e = () => k(re), tt = (n) => {
  const [e, t] = $(null), { editor: r } = $e();
  return K(() => {
    var i;
    if (!e || !((i = n.editor) === null || i === void 0) && i.isDestroyed || r != null && r.isDestroyed)
      return;
    const { pluginKey: o = "bubbleMenu", editor: f, tippyOptions: s = {}, updateDelay: c, shouldShow: h = null } = n, d = f || r;
    if (!d) {
      console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
      return;
    }
    const a = ne({
      updateDelay: c,
      editor: d,
      element: e,
      pluginKey: o,
      shouldShow: h,
      tippyOptions: s
    });
    return d.registerPlugin(a), () => {
      d.unregisterPlugin(o);
    };
  }, [n.editor, r, e]), O.createElement("div", { ref: t, className: n.className, style: { visibility: "hidden" } }, n.children);
}, ie = te({
  onDragStart: void 0
}), Ke = () => k(ie), nt = O.forwardRef((n, e) => {
  const { onDragStart: t } = Ke(), r = n.as || "div";
  return (
    // @ts-ignore
    O.createElement(r, { ...n, ref: e, "data-node-view-wrapper": "", onDragStart: t, style: {
      whiteSpace: "normal",
      ...n.style
    } })
  );
});
function X(n) {
  return !!(typeof n == "function" && n.prototype && n.prototype.isReactComponent);
}
function Z(n) {
  return !!(typeof n == "object" && n.$$typeof && (n.$$typeof.toString() === "Symbol(react.forward_ref)" || n.$$typeof.description === "react.forward_ref"));
}
function We(n) {
  return !!(typeof n == "object" && n.$$typeof && (n.$$typeof.toString() === "Symbol(react.memo)" || n.$$typeof.description === "react.memo"));
}
function qe(n) {
  if (X(n) || Z(n))
    return !0;
  if (We(n)) {
    const e = n.type;
    if (e)
      return X(e) || Z(e);
  }
  return !1;
}
function ze() {
  try {
    if (q)
      return parseInt(q.split(".")[0], 10) >= 19;
  } catch {
  }
  return !1;
}
class Ge {
  /**
   * Immediately creates element and renders the provided React component.
   */
  constructor(e, { editor: t, props: r = {}, as: i = "div", className: o = "" }) {
    this.ref = null, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = e, this.editor = t, this.props = r, this.element = document.createElement(i), this.element.classList.add("react-renderer"), o && this.element.classList.add(...o.split(" ")), this.editor.isInitialized ? ge(() => {
      this.render();
    }) : this.render();
  }
  /**
   * Render the React component.
   */
  render() {
    var e;
    const t = this.component, r = this.props, i = this.editor, o = ze(), f = qe(t), s = { ...r };
    s.ref && !(o || f) && delete s.ref, !s.ref && (o || f) && (s.ref = (c) => {
      this.ref = c;
    }), this.reactElement = O.createElement(t, { ...s }), (e = i == null ? void 0 : i.contentComponent) === null || e === void 0 || e.setRenderer(this.id, this);
  }
  /**
   * Re-renders the React component with new props.
   */
  updateProps(e = {}) {
    this.props = {
      ...this.props,
      ...e
    }, this.render();
  }
  /**
   * Destroy the React component.
   */
  destroy() {
    var e;
    const t = this.editor;
    (e = t == null ? void 0 : t.contentComponent) === null || e === void 0 || e.removeRenderer(this.id);
  }
  /**
   * Update the attributes of the element that holds the React component.
   */
  updateAttributes(e) {
    Object.keys(e).forEach((t) => {
      this.element.setAttribute(t, e[t]);
    });
  }
}
class Ye extends fe {
  /**
   * Setup the React component.
   * Called on initialization.
   */
  mount() {
    const e = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (h = {}) => this.updateAttributes(h),
      deleteNode: () => this.deleteNode(),
      ref: ye()
    };
    if (!this.component.displayName) {
      const h = (d) => d.charAt(0).toUpperCase() + d.substring(1);
      this.component.displayName = h(this.extension.name);
    }
    const i = { onDragStart: this.onDragStart.bind(this), nodeViewContentRef: (h) => {
      h && this.contentDOMElement && h.firstChild !== this.contentDOMElement && h.appendChild(this.contentDOMElement);
    } }, o = this.component, f = _e((h) => O.createElement(ie.Provider, { value: i }, Oe(o, h)));
    f.displayName = "ReactNodeView", this.node.isLeaf ? this.contentDOMElement = null : this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement && (this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.style.whiteSpace = "inherit");
    let s = this.node.isInline ? "span" : "div";
    this.options.as && (s = this.options.as);
    const { className: c = "" } = this.options;
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new Ge(f, {
      editor: this.editor,
      props: e,
      as: s,
      className: `node-${this.node.type.name} ${c}`.trim()
    }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes();
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    var e;
    if (this.renderer.element.firstElementChild && !(!((e = this.renderer.element.firstElementChild) === null || e === void 0) && e.hasAttribute("data-node-view-wrapper")))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const { from: e, to: t } = this.editor.state.selection, r = this.getPos();
    if (typeof r == "number")
      if (e <= r && t >= r + this.node.nodeSize) {
        if (this.renderer.props.selected)
          return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected)
          return;
        this.deselectNode();
      }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(e, t, r) {
    const i = (o) => {
      this.renderer.updateProps(o), typeof this.options.attrs == "function" && this.updateElementAttributes();
    };
    if (e.type !== this.node.type)
      return !1;
    if (typeof this.options.update == "function") {
      const o = this.node, f = this.decorations, s = this.innerDecorations;
      return this.node = e, this.decorations = t, this.innerDecorations = r, this.options.update({
        oldNode: o,
        oldDecorations: f,
        newNode: e,
        newDecorations: t,
        oldInnerDecorations: s,
        innerDecorations: r,
        updateProps: () => i({ node: e, decorations: t, innerDecorations: r })
      });
    }
    return e === this.node && this.decorations === t && this.innerDecorations === r || (this.node = e, this.decorations = t, this.innerDecorations = r, i({ node: e, decorations: t, innerDecorations: r })), !0;
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  /**
   * Destroy the React component instance.
   */
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null;
  }
  /**
   * Update the attributes of the top-level element that holds the React component.
   * Applying the attributes defined in the `attrs` option.
   */
  updateElementAttributes() {
    if (this.options.attrs) {
      let e = {};
      if (typeof this.options.attrs == "function") {
        const t = this.editor.extensionManager.attributes, r = pe(this.node, t);
        e = this.options.attrs({ node: this.node, HTMLAttributes: r });
      } else
        e = this.options.attrs;
      this.renderer.updateAttributes(e);
    }
  }
}
function rt(n, e) {
  return (t) => t.editor.contentComponent ? new Ye(n, t, e) : {};
}
export {
  tt as B,
  ke as E,
  nt as N,
  rt as R,
  Ge as a,
  et as u
};

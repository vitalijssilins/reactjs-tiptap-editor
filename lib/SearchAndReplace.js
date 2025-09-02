import { E as _, P as M, a as $, b as N, D as P } from "./index-BWx1Mchx.js";
import q from "scroll-into-view-if-needed";
import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { useState as g, useEffect as E } from "react";
import { l as k, E as d, P as B, m as j, A as F, k as A, n as O, L as I, o as y, B as T, S as W, p as K, q as R } from "./RichTextEditor-BSiZeOM2.js";
import { u as U } from "./index-Tj3Ci7xM.js";
function z({ editor: e, ...t }) {
  const { t: s } = U(), [c, r] = g(-1), [n, i] = g([]), [a, u] = g(""), [l, h] = g(""), [x, v] = g(!1), [b, V] = g(!1);
  return E(() => {
    x || (u(""), h(""), r(-1), i([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, x]), E(() => {
    x && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(a);
  }, [x, a, e]), E(() => {
    x && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(l);
  }, [x, l, e]), E(() => {
    if (!e)
      return;
    const m = e.extensionManager.extensions.find((S) => S.name === Y.name);
    if (!m)
      return;
    const w = () => {
      if (!x)
        return;
      const S = m ? m.storage.currentIndex : -1, L = m ? m.storage.results : [];
      r((C) => C !== S ? S : C), i((C) => K(C, L) ? C : L);
    };
    return k(d.SEARCH_REPLCE, w), () => {
      m && k(d.SEARCH_REPLCE, w);
    };
  }, [x, e]), /* @__PURE__ */ f(
    B,
    {
      onOpenChange: v,
      open: x,
      children: [
        /* @__PURE__ */ o(
          j,
          {
            asChild: !0,
            disabled: t == null ? void 0 : t.disabled,
            children: /* @__PURE__ */ o(
              F,
              {
                disabled: t == null ? void 0 : t.disabled,
                isActive: t == null ? void 0 : t.isActive,
                tooltip: t == null ? void 0 : t.tooltip,
                children: /* @__PURE__ */ o(A, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ f(
          O,
          {
            align: "start",
            className: "richtext-w-full",
            hideWhenDetached: !0,
            side: "bottom",
            children: [
              /* @__PURE__ */ f("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ o(I, { children: s("editor.search.dialog.text") }),
                /* @__PURE__ */ o("span", { className: "richtext-font-semibold", children: n.length > 0 ? `${c + 1}/${n.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ f("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: [
                /* @__PURE__ */ o(
                  y,
                  {
                    autoFocus: !0,
                    className: "richtext-w-full",
                    onChange: (m) => u(m.target.value),
                    placeholder: "Text",
                    required: !0,
                    type: "text",
                    value: a
                  }
                ),
                /* @__PURE__ */ o(
                  T,
                  {
                    className: "richtext-flex-1",
                    disabled: n.length === 0,
                    onClick: e.commands.goToPrevSearchResult,
                    children: /* @__PURE__ */ o(A, { name: "ChevronUp" })
                  }
                ),
                /* @__PURE__ */ o(
                  T,
                  {
                    className: "richtext-flex-1",
                    disabled: n.length === 0,
                    onClick: e.commands.goToNextSearchResult,
                    children: /* @__PURE__ */ o(A, { name: "ChevronDown" })
                  }
                )
              ] }),
              /* @__PURE__ */ o(I, { className: "richtext-mb-[6px]", children: s("editor.replace.dialog.text") }),
              /* @__PURE__ */ o("div", { className: "richtext-mb-[5px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ o("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ o(
                y,
                {
                  className: "richtext-w-80",
                  onChange: (m) => h(m.target.value),
                  placeholder: "Text",
                  required: !0,
                  type: "text",
                  value: l
                }
              ) }) }),
              /* @__PURE__ */ f("div", { className: "richtext-mb-[10px] richtext-flex richtext-items-center richtext-space-x-2", children: [
                /* @__PURE__ */ o(
                  W,
                  {
                    checked: b,
                    onCheckedChange: (m) => {
                      V(m), e.commands.setCaseSensitive(m);
                    }
                  }
                ),
                /* @__PURE__ */ o(I, { children: s("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ f("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ o(
                  T,
                  {
                    className: "richtext-flex-1",
                    disabled: n.length === 0,
                    onClick: e.commands.replace,
                    children: s("editor.replace.dialog.text")
                  }
                ),
                /* @__PURE__ */ o(
                  T,
                  {
                    className: "richtext-flex-1",
                    disabled: n.length === 0,
                    onClick: e.commands.replaceAll,
                    children: s("editor.replaceAll.dialog.text")
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const p = (e, t) => t(e.tr);
function G(e, t, s) {
  return RegExp(t ? e.replace(/[$()*+./?[\\\]^{|}-]/g, String.raw`\$&`) : e, s ? "gu" : "gui");
}
function J(e, t, s) {
  const c = [];
  let r = [];
  const n = [];
  let i = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((a, u) => {
    a.isText ? r[i] ? r[i] = {
      text: r[i].text + a.text,
      pos: r[i].pos
    } : r[i] = {
      text: `${a.text}`,
      pos: u
    } : i += 1;
  }), r = r.filter(Boolean);
  for (const { text: a, pos: u } of r) {
    const l = [...a.matchAll(t)];
    for (const h of l) {
      if (h[0] === "")
        break;
      h.index !== void 0 && n.push({
        from: u + h.index,
        to: u + h.index + h[0].length
      });
    }
  }
  for (const a of n)
    c.push(N.inline(a.from, a.to, { class: s }));
  return {
    decorationsToReturn: c,
    results: n
  };
}
function D(e, t, { state: s, dispatch: c }) {
  if (!t[0])
    return;
  const { from: n, to: i } = t[0];
  c && c(s.tr.insertText(e, n, i));
}
function Q(e, t, s, c) {
  const r = t + 1;
  if (!c[r])
    return null;
  const { from: n, to: i } = c[t], a = i - n - e.length + s, { from: u, to: l } = c[r];
  return c[r] = {
    to: l - a,
    from: u - a
  }, [a, c];
}
function X(e, t, { tr: s, dispatch: c }) {
  let r = 0, n = t.slice();
  if (n.length === 0)
    return !1;
  for (let i = 0; i < n.length; i += 1) {
    const { from: a, to: u } = n[i];
    s.insertText(e, a, u);
    const l = Q(e, i, r, n);
    l && (r = l[0], n = l[1]);
  }
  return c(s), !0;
}
function H({ view: e, tr: t, searchResults: s, searchResultCurrentClass: c, gotoIndex: r }) {
  const n = s[r];
  if (n) {
    const i = t.setMeta("directDecoration", {
      fromPos: n.from,
      toPos: n.to,
      attrs: { class: c }
    });
    return e == null || e.dispatch(i), setTimeout(() => {
      const a = window.document.querySelector(`.${c}`);
      a && q(a, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const Y = /* @__PURE__ */ _.create({
  name: "search",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      searchTerm: "",
      replaceTerm: "",
      results: [],
      currentIndex: 0,
      searchResultClass: "search-result",
      searchResultCurrentClass: "search-result-current",
      caseSensitive: !1,
      disableRegex: !1,
      onChange: () => {
      },
      button: ({ editor: t, t: s }) => ({
        component: z,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: s("editor.searchAndReplace.tooltip"),
          isActive: () => !1,
          disabled: !1,
          editor: t
        }
      })
    };
  },
  addStorage() {
    return {
      results: [],
      currentIndex: -1
    };
  },
  addCommands() {
    return {
      setSearchTerm: (e) => ({ state: t, dispatch: s }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, R(d.SEARCH_REPLCE), p(t, s), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: s }) => (this.options.replaceTerm = e, p(t, s), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: s }) => (this.options.caseSensitive = e, p(t, s), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: s } = this.options, { currentIndex: c, results: r } = this.storage, n = r[c];
        return n ? (D(s, [n], { state: e, dispatch: t }), this.storage.results.splice(c, 1)) : (D(s, r, { state: e, dispatch: t }), this.storage.results.shift()), R(d.SEARCH_REPLCE), p(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: s }) => {
        const { replaceTerm: c } = this.options, { results: r } = this.storage;
        return X(c, r, { tr: t, dispatch: s }), this.storage.currentIndex = -1, this.storage.results = [], R(d.SEARCH_REPLCE), p(e, s), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: s } = this.options, { currentIndex: c, results: r } = this.storage, n = (c + r.length - 1) % r.length;
        return this.storage.currentIndex = n, R(d.SEARCH_REPLCE), H({
          view: e,
          tr: t,
          searchResults: r,
          searchResultCurrentClass: s,
          gotoIndex: n
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: s } = this.options, { currentIndex: c, results: r } = this.storage, n = (c + 1) % r.length;
        return this.storage.currentIndex = n, this.options.onChange && this.options.onChange(), R(d.SEARCH_REPLCE), H({
          view: e,
          tr: t,
          searchResults: r,
          searchResultCurrentClass: s,
          gotoIndex: n
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new M({
        key: new $("search"),
        state: {
          init() {
            return P.empty;
          },
          apply(t) {
            const { doc: s, docChanged: c } = t, { searchTerm: r, searchResultClass: n, searchResultCurrentClass: i, disableRegex: a, caseSensitive: u } = e.options;
            if (c || r) {
              const { decorationsToReturn: l, results: h } = J(
                s,
                G(r, a, u),
                n
              );
              if (e.storage.results = h, e.storage.currentIndex > h.length - 1 && (e.storage.currentIndex = 0), R(d.SEARCH_REPLCE), t.getMeta("directDecoration")) {
                const { fromPos: x, toPos: v, attrs: b } = t.getMeta("directDecoration");
                l.push(N.inline(x, v, b));
              } else
                h.length > 0 && (l[0] = N.inline(h[0].from, h[0].to, {
                  class: i
                }));
              return P.create(s, l);
            }
            return P.empty;
          }
        },
        props: {
          decorations(t) {
            return this.getState(t);
          }
        }
      })
    ];
  }
});
export {
  Y as SearchAndReplace
};

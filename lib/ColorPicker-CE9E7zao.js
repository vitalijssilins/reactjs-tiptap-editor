import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { useMemo as y, useState as m, useEffect as M } from "react";
import { Plus as z } from "lucide-react";
import { HexColorPicker as P } from "react-colorful";
import { C as B } from "./index-oWDQeNNi.js";
import { u as v } from "./index-ZqXobaiP.js";
import { P as b, a as C, b as g } from "./popover-B8VvcibZ.js";
import { I as _ } from "./input-BQQ_iBrZ.js";
import { S as D } from "./separator-DsUDfBB2.js";
import { B as O } from "./button-CcHmDfB3.js";
function f() {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ t("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function W(h) {
  const { t: s } = v(), {
    highlight: x = !1,
    disabled: p = !1,
    selectedColor: n,
    setSelectedColor: l,
    onChange: i,
    colors: u = B
  } = h, L = y(() => {
    const e = u, r = [];
    for (let c = 0; c < e.length; c += 10)
      r.push(e.slice(c, c + 10));
    return r;
  }, [u]), [d, N] = m([]), k = (e) => {
    const r = [...d], c = r.indexOf(e);
    c !== -1 && r.splice(c, 1), r.unshift(e), r.length > 10 && r.pop(), N(r);
  };
  function a(e) {
    if (e === void 0) {
      l == null || l(e), i == null || i(e);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(e) && (l == null || l(e), i == null || i(e), k(e));
  }
  return /* @__PURE__ */ o(b, { modal: !0, children: [
    /* @__PURE__ */ t(
      C,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: p,
        children: h == null ? void 0 : h.children
      }
    ),
    /* @__PURE__ */ t(
      g,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ o("div", { className: "richtext-flex richtext-flex-col", children: [
          x ? /* @__PURE__ */ o(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => a(void 0),
              children: [
                /* @__PURE__ */ t(f, {}),
                /* @__PURE__ */ t("span", { className: "richtext-ml-1 richtext-text-sm", children: s("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ o(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                a(void 0);
              },
              children: [
                /* @__PURE__ */ t(f, {}),
                /* @__PURE__ */ t("span", { className: "richtext-ml-1 richtext-text-sm", children: s("editor.default") })
              ]
            }
          ),
          L.map((e, r) => /* @__PURE__ */ t(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: e.map((c, w) => /* @__PURE__ */ t(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => a(c),
                  children: /* @__PURE__ */ t(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: c
                      },
                      children: c === n ? /* @__PURE__ */ t(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ t("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ t(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ t("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      )
                    }
                  )
                },
                `sub-color-${w}`
              ))
            },
            r
          )),
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t("div", { className: "richtext-my-1 richtext-text-sm", children: s("editor.recent") }),
            /* @__PURE__ */ t("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: d == null ? void 0 : d.map((e, r) => /* @__PURE__ */ t(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => a(e),
                children: /* @__PURE__ */ t(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: e
                    },
                    children: /* @__PURE__ */ t(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ t("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${r}`
            )) })
          ] }),
          /* @__PURE__ */ t(R, { setColor: a })
        ] })
      }
    )
  ] });
}
function R({ setColor: h }) {
  const [s, x] = m("#000000"), [p, n] = m(!1), { t: l } = v();
  return M(() => () => {
    n(!1);
  }, []), /* @__PURE__ */ o(b, { open: p, children: [
    /* @__PURE__ */ t(C, { asChild: !0, children: /* @__PURE__ */ o(
      "div",
      {
        className: "richtext-p-1.5 richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent",
        onClick: (i) => {
          i.preventDefault(), n(!0);
        },
        children: [
          l("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ o(g, { children: [
      /* @__PURE__ */ o("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ t(
          P,
          {
            color: s,
            onChange: x
          }
        ),
        /* @__PURE__ */ t(
          _,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            value: s.slice(1),
            onChange: (i) => {
              i.preventDefault(), x(`#${i.target.value}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ t(D, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ t(
        O,
        {
          className: "richtext-w-full",
          onClick: (i) => {
            i.preventDefault(), h(s), n(!1);
          },
          children: /* @__PURE__ */ t(z, { size: 16 })
        }
      )
    ] })
  ] });
}
export {
  W as C
};

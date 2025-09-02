import "./index-DIPntess.js";
import { E as u } from "./index-BWx1Mchx.js";
import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { useState as s, useCallback as C } from "react";
import { t as h, A as f, C as x, B as m, k as v } from "./RichTextEditor-BSiZeOM2.js";
const L = u.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
});
function b({ fill: t }) {
  return /* @__PURE__ */ l(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ l("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ l("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ a("g", { transform: "translate(39.000000, 17.353553)", children: [
        /* @__PURE__ */ l(
          "path",
          {
            d: "M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z",
            id: "矩形",
            fill: t || "#DF2A3F",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            d: "M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z",
            id: "路径-21",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            d: "M121,103.146447 C126.522847,103.146447 131,107.623599 131,113.146447 C131,118.575687 126.673329,122.994378 121.279905,123.142605 L121,123.146447 L55,123.146447 C49.4771525,123.146447 45,118.669294 45,113.146447 C45,107.717207 49.3266708,103.298515 54.7200952,103.150288 L55,103.146447 L121,103.146447 Z",
            id: "路径-22",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        )
      ] }) }) })
    }
  );
}
function g(t) {
  const [e, r] = s(void 0);
  function i(o) {
    var c;
    (c = t.action) == null || c.call(t, o);
  }
  function n() {
    var o;
    (o = t.action) == null || o.call(t, e);
  }
  const d = C(
    h((o) => {
      r(o);
    }, 350),
    []
  );
  return /* @__PURE__ */ a("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ l(f, { tooltip: t == null ? void 0 : t.tooltip, disabled: t == null ? void 0 : t.disabled, action: n, children: /* @__PURE__ */ l("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ l(b, { fill: e || t.initialDisplayedColor }) }) }),
    /* @__PURE__ */ l(
      x,
      {
        selectedColor: e,
        setSelectedColor: d,
        onChange: i,
        disabled: t == null ? void 0 : t.disabled,
        colors: t == null ? void 0 : t.colors,
        defaultColor: t == null ? void 0 : t.defaultColor,
        children: /* @__PURE__ */ l(m, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: t == null ? void 0 : t.disabled, children: /* @__PURE__ */ l(v, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const k = /* @__PURE__ */ L.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: e, t: r, extension: i }) {
        return {
          component: g,
          componentProps: {
            colors: i.options.colors,
            defaultColor: i.options.defaultColor,
            action: (n) => {
              n === void 0 && e.chain().focus().unsetColor().run(), typeof n == "string" && e.chain().focus().setColor(n).run();
            },
            isActive: () => {
              const { color: n } = e.getAttributes("textStyle");
              return n && e.isActive({ color: n }) || !1;
            },
            editor: e,
            disabled: !1,
            tooltip: r("editor.color.tooltip")
          }
        };
      }
    };
  }
});
export {
  k as Color
};

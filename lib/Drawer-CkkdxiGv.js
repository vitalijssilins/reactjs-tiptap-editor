import { r as Z, m as te } from "./index-sel2RZJw.js";
import { t as j, I as re } from "./index-D4ootzAt.js";
import { N as oe, R as le } from "./index-CJo9otU0.js";
import { jsx as e, jsxs as x, Fragment as J } from "react/jsx-runtime";
import { useState as y, useRef as X, useEffect as O, useMemo as F, useCallback as q } from "react";
import { Color4 as g, Editor as ne, makeDropdownToolbar as ie } from "easydrawer";
import { s as se, i as ae } from "./shortId-WJVkrvml.js";
import { A as ce } from "./ActionButton-D15ZSL0z.js";
import { D as he, a as ue, b as de, c as ge, d as me } from "./dialog-DWW5z2Zs.js";
import { c as d } from "./index-BP_NLBls.js";
import { d as pe } from "./file-BLas99n7.js";
import { B as we } from "./button-CcHmDfB3.js";
import { c as K, d as Q, e as ve } from "./index-oWDQeNNi.js";
import { c as fe } from "./utils-uHATd4OQ.js";
const Te = "_wrapper_rraz2_1", Ce = "_tool_rraz2_17", be = "_active_rraz2_37", xe = "_pen_rraz2_41", ye = "_line_rraz2_48", Me = "_options_rraz2_56", He = "_colorWrap_rraz2_66", Ee = "_color_rraz2_66", Le = "_colorActive_rraz2_83", l = {
  wrapper: Te,
  tool: Ce,
  active: be,
  pen: xe,
  line: ye,
  options: Me,
  colorWrap: He,
  color: Ee,
  colorActive: Le
};
function Ne(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          color: "currentColor",
          d: "M2 9.2v3.6M12.8 2H9.2M7.5 20H9M20 7.5V9M2.133 4.699c.155-.727.415-1.274.854-1.712c.426-.426.954-.684 1.652-.84m15.228 2.552c-.155-.727-.415-1.274-.854-1.712c-.417-.417-.932-.673-1.608-.83M4.64 19.853c-.698-.156-1.226-.414-1.652-.84c-.43-.43-.69-.965-.845-1.673m11.638 3.626c-1.812.125-3.607-8.326-2.374-9.559s9.684.561 9.559 2.373c-.087 1.187-2.095 1.656-2.037 2.711c.018.309.408.59 1.188 1.154c.543.39 1.096.77 1.629 1.175a.66.66 0 0 1 .234.687a3.35 3.35 0 0 1-2.472 2.473a.66.66 0 0 1-.688-.235c-.404-.533-.784-1.086-1.175-1.628c-.563-.78-.844-1.17-1.153-1.188c-1.055-.059-1.524 1.95-2.71 2.037",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5"
        }
      )
    }
  );
}
function Se(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93z",
          fill: "currentColor"
        }
      )
    }
  );
}
function ke(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function ze(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.19-21.18a16 16 0 0 0 18.81-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69L83.31 112L104 91.31L172.69 160Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function _e(t) {
  return /* @__PURE__ */ x(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 16 16",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "m2.648 9.937l7.29-7.288a2.21 2.21 0 0 1 3.124 0l2.29 2.288a2.21 2.21 0 0 1 0 3.126L10.413 13H12.5a.5.5 0 0 1 0 1H4.501a2.2 2.2 0 0 1-1.563-.647l.707-.707c.227.226.535.354.856.354h4.005a1.2 1.2 0 0 0 .848-.354l1.292-1.293l-4-4l-3.29 3.291a1.21 1.21 0 0 0 0 1.712l.29.29l-.708.707l-.29-.29a2.21 2.21 0 0 1 0-3.126M8 6h6.89a1.2 1.2 0 0 0-.246-.356L14 5H9zm2-2h3l-.645-.644a1.21 1.21 0 0 0-1.71 0zm4.89 3H7.708l1 1H14l.644-.644A1.2 1.2 0 0 0 14.891 7zM9.708 9l1.646 1.646L13 9z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M14 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5-.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-1 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Ae(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M3 3h18v18H3zm2 2v14h14V5z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Be(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M2 20V4h20v16zm2-2h16V6H4zm0 0V6z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Pe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
          fill: "currentColor"
        }
      )
    }
  );
}
function qe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2"
        }
      )
    }
  );
}
function Re(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9zm1.15-2h8.1l4.025-7l-4.025-7h-8.1L3.9 12zM12 12",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ie(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ x(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          children: [
            /* @__PURE__ */ e("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
            /* @__PURE__ */ e(
              "path",
              {
                d: "M10.586 2.807a2 2 0 0 1 2.828 0l7.778 7.779a2 2 0 0 1 0 2.828l-7.778 7.778a2 2 0 0 1-2.828 0l-7.778-7.778a2 2 0 0 1 0-2.828zM12 4.222L4.222 12L12 19.778L19.778 12z",
                fill: "currentColor"
              }
            )
          ]
        }
      )
    }
  );
}
function We(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function De(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          clipRule: "evenodd",
          d: "M7.53 3.47a.75.75 0 0 1 0 1.06L5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function Fe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          clipRule: "evenodd",
          d: "M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a4.25 4.25 0 0 0 0 8.5h7a.75.75 0 0 1 0 1.5H9a5.75 5.75 0 0 1 0-11.5h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function Oe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ve(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ge(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725",
          fill: "currentColor"
        }
      )
    }
  );
}
function $e(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763zM8.85 8.125L4 9.725L7.1 14.2L7 18.975l5-1.375l5 1.4l-.1-4.8L20 9.775l-4.85-1.65L12 4zM12 11.5",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ue(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5l1.52.11c1.56.11 2.78 1.41 2.78 2.96c0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.46 5.46 0 0 1 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04C2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ze(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M5.586 6.45A2 2 0 0 1 7.509 5h11.84a2 2 0 0 1 1.923 2.55l-2.858 10A2 2 0 0 1 16.491 19H4.651a2 2 0 0 1-1.923-2.55z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2"
        }
      )
    }
  );
}
const je = [
  g.blackHighlight,
  g.ofRGBA(166 / 255, 81 / 255, 167 / 255, 0.3),
  g.ofRGBA(247 / 255, 78 / 255, 158 / 255, 0.3),
  g.ofRGBA(166 / 255, 83 / 255, 88 / 255, 0.3),
  g.ofRGBA(246 / 255, 130 / 255, 28 / 255, 0.3),
  g.ofRGBA(166 / 255, 198 / 255, 0, 0.3),
  g.ofRGBA(98 / 255, 186 / 255, 70 / 255, 0.3)
], Y = [
  g.black,
  g.fromHex("#007AFF"),
  g.fromHex("#A651A7"),
  g.fromHex("#F74E9E"),
  g.fromHex("#FF5358"),
  g.fromHex("#F6821C"),
  g.fromHex("#FFC600"),
  g.fromHex("#62BA46"),
  g.fromHex("#E6BFE8"),
  g.fromHex("#FEA3D2"),
  g.fromHex("#FFA0A3"),
  g.fromHex("#FBC276"),
  g.fromHex("#FFFB85"),
  g.fromHex("#AADC99")
];
function Xe({ onChange: t }) {
  const [r, o] = y(g.blackHighlight);
  return /* @__PURE__ */ e("div", { className: l.colorWrap, children: je.map((i, s) => /* @__PURE__ */ e(
    "button",
    {
      style: { backgroundColor: i.toHexString() },
      className: d(l.color, {
        [l.colorActive]: r.toHexString() === i.toHexString()
      }),
      onClick: () => {
        o(i), t(i);
      }
    },
    s
  )) });
}
function V({ onChange: t }) {
  const [r, o] = y(g.black);
  return /* @__PURE__ */ x(J, { children: [
    /* @__PURE__ */ e("div", { className: l.colorWrap, children: Y.slice(0, 7).map((i, s) => /* @__PURE__ */ e(
      "button",
      {
        style: { backgroundColor: i.toHexString() },
        className: d(l.color, {
          [l.colorActive]: r.toHexString() === i.toHexString()
        }),
        onClick: () => {
          o(i), t(i);
        }
      },
      s
    )) }),
    /* @__PURE__ */ e("div", { className: l.colorWrap, children: Y.slice(7).map((i, s) => /* @__PURE__ */ e(
      "button",
      {
        style: { backgroundColor: i.toHexString() },
        className: d(l.color, {
          [l.colorActive]: r.toHexString() === i.toHexString()
        }),
        onClick: () => {
          o(i), t(i);
        }
      },
      s
    )) })
  ] });
}
function Ke({ setColorPen: t, setThicknessPen: r }) {
  const [o, i] = y(2);
  return /* @__PURE__ */ x("div", { className: l.options, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      V,
      {
        onChange: (s) => t(s)
      }
    ) }),
    /* @__PURE__ */ e("div", { className: l.line }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "input",
      {
        max: 10,
        min: 1,
        step: 0.1,
        type: "range",
        value: o,
        onChange: (s) => {
          r(Number.parseFloat(s.target.value)), i(Number.parseFloat(s.target.value));
        }
      }
    ) })
  ] });
}
function Qe({ setColorHighlight: t }) {
  return /* @__PURE__ */ e("div", { className: l.options, children: /* @__PURE__ */ e(
    Xe,
    {
      onChange: (r) => t(r)
    }
  ) });
}
function Ye({
  changeColorShape: t,
  changeBorderColorShape: r,
  onThicknessChange: o
}) {
  return /* @__PURE__ */ x("div", { className: l.options, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      V,
      {
        onChange: (i) => t(i)
      }
    ) }),
    /* @__PURE__ */ e("div", { className: l.line }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      V,
      {
        onChange: (i) => r(i)
      }
    ) }),
    /* @__PURE__ */ e("div", { className: l.line }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "input",
      {
        defaultValue: 0,
        max: 20,
        min: 0,
        step: 1,
        type: "range",
        onChange: (i) => {
          o(Number.parseFloat(i.target.value));
        }
      }
    ) })
  ] });
}
function Je(t) {
  const {
    setColorPen: r,
    refEditor: o,
    setThicknessPen: i,
    setColorHighlight: s,
    changeBorderColorShape: C,
    onUndo: P,
    changeColorShape: _,
    changeShape: f,
    onThicknessChange: S,
    onRedo: b,
    onClear: A
  } = t, [a, h] = y(null), [T, m] = y(
    0
    /* square */
  );
  return /* @__PURE__ */ e(J, { children: /* @__PURE__ */ x(
    "div",
    {
      className: l.wrapper,
      children: [
        /* @__PURE__ */ x("div", { className: l.pen, children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "select"
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                if (a === "select") {
                  h(null), n[0].setEnabled(!1);
                  return;
                }
                h("select"), n[0].setEnabled(!0);
              },
              children: /* @__PURE__ */ e(Ne, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: l.line }),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "text"
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                if (o.current.toolController.setToolEnabled(n[1]), a === "text") {
                  n[1].setEnabled(!1), h(null);
                  return;
                }
                h("text"), n[1].setEnabled(!0);
              },
              children: /* @__PURE__ */ e(Se, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: l.line }),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "pencil"
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                if (a === "pencil") {
                  h(null), n[2].setEnabled(!1);
                  return;
                }
                h("pencil"), n[2].setEnabled(!0);
              },
              children: /* @__PURE__ */ e(ke, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "highlighter"
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                if (a === "highlighter") {
                  h(null), n[3].setEnabled(!1);
                  return;
                }
                h("highlighter"), n[3].setEnabled(!0);
              },
              children: /* @__PURE__ */ e(ze, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: l.line }),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "eraser"
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                if (a === "eraser") {
                  h(null), n[4].setEnabled(!1);
                  return;
                }
                h("eraser"), n[4].setEnabled(!0);
              },
              children: /* @__PURE__ */ e(_e, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: l.line }),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 0
                /* square */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  0
                  /* square */
                ), m(
                  0
                  /* square */
                );
              },
              children: /* @__PURE__ */ e(Ae, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 1
                /* rectangle */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  1
                  /* rectangle */
                ), m(
                  1
                  /* rectangle */
                );
              },
              children: /* @__PURE__ */ e(Be, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 2
                /* circle */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  2
                  /* circle */
                ), m(
                  2
                  /* circle */
                );
              },
              children: /* @__PURE__ */ e(Pe, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 3
                /* triangle */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  3
                  /* triangle */
                ), m(
                  3
                  /* triangle */
                );
              },
              children: /* @__PURE__ */ e(qe, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 4
                /* hexagonal */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  4
                  /* hexagonal */
                ), m(
                  4
                  /* hexagonal */
                );
              },
              children: /* @__PURE__ */ e(Re, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 5
                /* diamond */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  5
                  /* diamond */
                ), m(
                  5
                  /* diamond */
                );
              },
              children: /* @__PURE__ */ e(Ie, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 6
                /* arrow */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  6
                  /* arrow */
                ), m(
                  6
                  /* arrow */
                );
              },
              children: /* @__PURE__ */ e(We, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 7
                /* line */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  7
                  /* line */
                ), m(
                  7
                  /* line */
                );
              },
              children: /* @__PURE__ */ e(Ve, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 8
                /* heart */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  8
                  /* heart */
                ), m(
                  8
                  /* heart */
                );
              },
              children: /* @__PURE__ */ e(Ge, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 9
                /* star */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  9
                  /* star */
                ), m(
                  9
                  /* star */
                );
              },
              children: /* @__PURE__ */ e($e, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 10
                /* cloud */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  10
                  /* cloud */
                ), m(
                  10
                  /* cloud */
                );
              },
              children: /* @__PURE__ */ e(Ue, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool, {
                [l.active]: a === "shapes" && T === 11
                /* parallelogram */
              }),
              onClick: () => {
                const n = o.current.toolController.getPrimaryTools();
                o.current.toolController.setToolEnabled(n[5]), h("shapes"), n[5].setEnabled(!0), f(
                  11
                  /* parallelogram */
                ), m(
                  11
                  /* parallelogram */
                );
              },
              children: /* @__PURE__ */ e(Ze, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: l.line }),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool),
              onClick: P,
              children: /* @__PURE__ */ e(De, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool),
              onClick: b,
              children: /* @__PURE__ */ e(Fe, {})
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: d(l.tool),
              onClick: A,
              children: /* @__PURE__ */ e(Oe, {})
            }
          )
        ] }),
        /* @__PURE__ */ x("div", { className: l.optionsWrap, children: [
          a === "pencil" && /* @__PURE__ */ e(
            Ke,
            {
              setColorPen: r,
              setThicknessPen: i
            }
          ),
          a === "highlighter" && /* @__PURE__ */ e(Qe, { setColorHighlight: s }),
          a === "shapes" && /* @__PURE__ */ e(
            Ye,
            {
              changeBorderColorShape: C,
              changeColorShape: _,
              changeShape: f,
              onThicknessChange: S
            }
          )
        ] })
      ]
    }
  ) });
}
let R = !1;
const et = ({ editor: t, upload: r }) => {
  const [o, i] = y(!1), s = X(null), C = X(null), P = () => {
    (async () => {
      const c = document.querySelector("#easydrawer");
      c && (s.current = new ne(c, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), C.current = ie(s.current), C.current.addDefaultToolWidgets());
    })();
  };
  O(() => {
    o && setTimeout(() => {
      P();
    }, 200);
  }, [o]);
  const _ = async () => {
    if (s.current) {
      const p = s.current.toSVG(), c = p.outerHTML, w = `drawer-${se()}.svg`;
      let N = ae(p.outerHTML);
      if (r) {
        const B = pe(N, w);
        N = await r(B);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: N,
          alt: encodeURIComponent(c),
          width: 426,
          height: 212
        },
        !!c
      ).run();
    }
    i(!1);
  }, f = (p) => {
    const c = s.current.toolController.getPrimaryTools()[2], w = C.current.getWidgetById("pen-1");
    c && w && (c.setColor(p), w.serializeState());
  }, S = (p) => {
    const c = s.current.toolController.getPrimaryTools()[2], w = C.current.getWidgetById("pen-1");
    c && w && (c.setThickness(p), w.serializeState());
  }, b = (p) => {
    const c = s.current.toolController.getPrimaryTools()[3], w = C.current.getWidgetById("pen-2");
    c && w && (c.setColor(p), w.serializeState());
  }, A = (p) => {
    const c = C.current.getWidgetById("shape");
    c && c.setShapeType(p);
  }, a = (p) => {
    const c = s.current.toolController.getPrimaryTools()[5], w = C.current.getWidgetById("shape");
    c && w && (c.setColor(p), w.serializeState());
  }, h = (p) => {
    const c = s.current.toolController.getPrimaryTools()[5], w = C.current.getWidgetById("shape");
    c && w && (c.setThickness(p), w.serializeState());
  }, T = (p) => {
    const c = s.current.toolController.getPrimaryTools()[5], w = C.current.getWidgetById("shape");
    c && w && (c.setBorderColor(p), w.serializeState());
  }, m = () => {
    if (R) {
      for (; s.current.history.redoStackSize > 0; )
        s.current.history.redo();
      R = !1;
      return;
    }
    s.current.history.undo();
  };
  return /* @__PURE__ */ x(
    he,
    {
      onOpenChange: i,
      open: o,
      children: [
        /* @__PURE__ */ e(ue, { asChild: !0, children: /* @__PURE__ */ e(
          ce,
          {
            action: () => i(!0),
            icon: "PencilRuler",
            tooltip: "Drawer"
          }
        ) }),
        /* @__PURE__ */ x(de, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ e(ge, { children: "Drawer" }),
          /* @__PURE__ */ x("div", { style: { height: "600px", width: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ e(
              Je,
              {
                changeBorderColorShape: T,
                changeColorShape: a,
                changeShape: A,
                onClear: () => {
                  if (!R) {
                    for (; s.current.history.undoStackSize > 0; )
                      m();
                    R = !0;
                  }
                },
                onRedo: () => {
                  R || s.current.history.redo();
                },
                onThicknessChange: h,
                onUndo: m,
                refEditor: s,
                setColorHighlight: b,
                setColorPen: f,
                setThicknessPen: S
              }
            )
          ] }),
          /* @__PURE__ */ e(me, { children: /* @__PURE__ */ e(
            we,
            {
              onClick: _,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, I = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function tt({ editor: t, node: r, updateAttributes: o, getPos: i, selected: s }) {
  const [C, P] = y({
    width: K,
    height: K
  }), [_, f] = y({
    width: 0,
    height: 0
  }), [S] = y([
    I.TOP_LEFT,
    I.TOP_RIGHT,
    I.BOTTOM_LEFT,
    I.BOTTOM_RIGHT
  ]), [b, A] = y(!1), [a, h] = y({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: T } = r == null ? void 0 : r.attrs, m = F(() => {
    const { src: u, alt: H, width: E, height: k } = r == null ? void 0 : r.attrs, z = Z(E) ? `${E}px` : E, v = Z(k) ? `${k}px` : k;
    return {
      src: u || void 0,
      alt: H || void 0,
      style: {
        width: z || void 0,
        height: v || void 0
      }
    };
  }, [r == null ? void 0 : r.attrs]), n = F(() => {
    const {
      style: { width: u }
    } = m;
    return { width: u === "100%" ? u : void 0 };
  }, [m]);
  function G(u) {
    f({
      width: u.target.width,
      height: u.target.height
    });
  }
  function p() {
    t.commands.setNodeSelection(i());
  }
  const c = q(
    j(() => {
      const { width: u } = getComputedStyle(t.view.dom);
      P((H) => ({
        ...H,
        width: Number.parseInt(u, 10)
      }));
    }, Q),
    [t]
  );
  function w(u, H) {
    u.preventDefault(), u.stopPropagation();
    const E = _.width, k = _.height, z = E / k;
    let v = Number(r.attrs.width), L = Number(r.attrs.height);
    const M = C.width;
    v && !L ? (v = v > M ? M : v, L = Math.round(v / z)) : L && !v ? (v = Math.round(L * z), v = v > M ? M : v) : !v && !L ? (v = E > M ? M : E, L = Math.round(v / z)) : v = v > M ? M : v, A(!0), h({
      x: u.clientX,
      y: u.clientY,
      w: v,
      h: L,
      dir: H
    });
  }
  const N = q(
    j((u) => {
      if (u.preventDefault(), u.stopPropagation(), !b)
        return;
      const { x: H, w: E, dir: k } = a, z = (u.clientX - H) * (/l/.test(k) ? -1 : 1), { width: v, height: L } = r == null ? void 0 : r.attrs, M = v / L, U = fe(E + z, ve, C.width), ee = Math.round(U / M);
      o({
        width: U,
        height: ee
      });
    }, Q),
    [b, a, C, o, r == null ? void 0 : r.attrs]
  ), B = q(
    (u) => {
      u.preventDefault(), u.stopPropagation(), b && (h({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), A(!1), p());
    },
    [b, p]
  ), $ = q(() => {
    document == null || document.addEventListener("mousemove", N, !0), document == null || document.addEventListener("mouseup", B, !0);
  }, [N, B]), W = q(() => {
    document == null || document.removeEventListener("mousemove", N, !0), document == null || document.removeEventListener("mouseup", B, !0);
  }, [N, B]);
  O(() => (b ? $() : W(), () => {
    W();
  }), [b, $, W]);
  const D = F(() => new ResizeObserver(() => c()), [c]);
  return O(() => (D.observe(t.view.dom), () => {
    D.disconnect();
  }), [t.view.dom, D]), /* @__PURE__ */ e(
    oe,
    {
      className: "image-view",
      style: { ...n, width: "100%", textAlign: T },
      children: /* @__PURE__ */ x(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...n, background: "#fff" },
          className: `image-view__body ${s ? "image-view__body--focused" : ""} ${b ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ e(
              "img",
              {
                alt: m.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: p,
                onLoad: G,
                src: m.src,
                style: m.style
              }
            ),
            t.view.editable && (s || b) && /* @__PURE__ */ e("div", { className: "image-resizer", children: S == null ? void 0 : S.map((u) => /* @__PURE__ */ e(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${u}`,
                onMouseDown: (H) => w(H, u)
              },
              `image-dir-${u}`
            )) })
          ]
        }
      )
    }
  );
}
const wt = /* @__PURE__ */ re.extend({
  name: "drawer",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "drawer"
      },
      button: ({ editor: r, t: o, extension: i }) => {
        var s;
        return {
          component: et,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: r,
            icon: "PencilRuler",
            tooltip: o("editor.drawer.tooltip"),
            upload: (s = i == null ? void 0 : i.options) == null ? void 0 : s.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      width: {
        default: null,
        parseHTML: (r) => {
          const o = r.querySelector("img"), i = o == null ? void 0 : o.getAttribute("width");
          return i ? Number.parseInt(i, 10) : 320;
        },
        renderHTML: (r) => ({
          width: r.width
        })
      },
      height: {
        default: null,
        parseHTML: (r) => {
          const o = r.querySelector("img"), i = o == null ? void 0 : o.getAttribute("height");
          return i ? Number.parseInt(i, 10) : 212;
        },
        renderHTML: (r) => ({
          height: r.height
        })
      },
      align: {
        default: "center",
        parseHTML: (r) => r.getAttribute("align"),
        renderHTML: (r) => ({
          align: r.align
        })
      }
    };
  },
  addNodeView() {
    return le(tt);
  },
  // @ts-ignore
  addCommands() {
    return {
      setDrawer: (t, r) => ({ commands: o, editor: i }) => r ? o.insertContent({
        type: this.name,
        attrs: t
      }) : o.insertContentAt(i.state.selection.anchor, {
        type: this.name,
        attrs: t
      }),
      setAlignImageDrawer: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { align: r } = t;
    return [
      "div",
      // Parent element
      {
        style: r ? `text-align: ${r};` : "",
        class: "imageDrawer"
      },
      [
        "img",
        te(
          // @ts-ignore
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageDrawer]",
        getAttrs: (t) => {
          const r = t.querySelector("img"), o = r == null ? void 0 : r.getAttribute("width"), i = r == null ? void 0 : r.getAttribute("height");
          return {
            src: r == null ? void 0 : r.getAttribute("src"),
            alt: r == null ? void 0 : r.getAttribute("alt"),
            width: o ? Number.parseInt(o, 10) : null,
            height: i ? Number.parseInt(i, 10) : null,
            align: (r == null ? void 0 : r.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  Je as C,
  wt as D
};

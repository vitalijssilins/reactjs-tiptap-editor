import { E as f } from "./index-BWx1Mchx.js";
import { A as u } from "./RichTextEditor-BB0ShA4S.js";
function g(e, o) {
  var i;
  const t = document.createElement("iframe");
  t.setAttribute(
    "style",
    "position: absolute; width: 0; height: 0; top: 0; left: 0;"
  ), document.body.appendChild(t);
  const n = t.contentDocument || ((i = t.contentWindow) == null ? void 0 : i.document);
  if (!n) return;
  const {
    paperSize: d,
    margins: {
      top: s,
      right: c,
      bottom: p,
      left: l
    }
  } = o, m = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Echo Editor</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @media print {
          @page {
            size: ${d};
            margin: ${s} ${c} ${p} ${l}; /* top, right, bottom, left */
          }

          body {
            background: none;
            margin: 0;
            padding: 0;
          }

          .print-container {
            width: 100%;
            box-sizing: border-box;
          }

          .no-print {
            display: none;
          }
        }
      </style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css">
    </head>
    <body>
      <div class="print-container">
        ${e}
      </div>
    </body>
    </html>
  `;
  n.open(), n.write(m), n.close(), t.addEventListener("load", () => {
    setTimeout(() => {
      var r, a;
      try {
        (r = t.contentWindow) == null || r.focus(), (a = t.contentWindow) == null || a.print();
      } catch (h) {
        console.error("Print failed", h);
      }
      setTimeout(() => {
        document.body.removeChild(t);
      }, 100);
    }, 50);
  });
}
function b(e, o) {
  const t = e.getHTML();
  return t ? (g(t, o), !0) : !1;
}
const w = /* @__PURE__ */ f.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      paperSize: "Letter",
      margins: {
        top: "0.4in",
        right: "0.4in",
        bottom: "0.4in",
        left: "0.4in"
      },
      button: ({ editor: o, extension: t, t: n }) => ({
        component: u,
        componentProps: {
          action: () => {
            b(o, t.options);
          },
          icon: "ExportPdf",
          tooltip: n("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
export {
  w as ExportPdf
};

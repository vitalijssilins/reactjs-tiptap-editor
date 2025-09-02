import { E as h } from "./index-sel2RZJw.js";
import { jsxs as o, jsx as a } from "react/jsx-runtime";
import { useMemo as l } from "react";
import { ChevronDown as u } from "lucide-react";
import { u as m } from "./index-ZqXobaiP.js";
import { D as g, a as x, b, c as v } from "./dropdown-menu-D4P0bXFo.js";
import { B as f } from "./button-CcHmDfB3.js";
import { i as N } from "./index-BP_NLBls.js";
function A(e) {
  const { t } = m(), c = l(() => [
    {
      name: "paragraph",
      label: t("editor.paragraph.tooltip"),
      iconName: "Heading1",
      isActive: () => e.editor.isActive("paragraph") && !e.editor.isActive("orderedList") && !e.editor.isActive("bulletList") && !e.editor.isActive("taskList"),
      action: () => e.editor.chain().focus().clearNodes().run()
    },
    {
      name: "heading1",
      label: t("editor.heading.h1.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 1 }),
      iconName: "Heading1",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run()
    },
    {
      name: "heading2",
      label: t("editor.heading.h2.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 2 }),
      iconName: "Heading2",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run()
    },
    {
      name: "heading3",
      label: t("editor.heading.h3.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 3 }),
      iconName: "Heading3",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run()
    },
    {
      name: "bulletList",
      label: t("editor.bulletlist.tooltip"),
      isActive: () => e.editor.isActive("bulletList"),
      iconName: "List",
      action: () => e.editor.chain().focus().clearNodes().toggleBulletList().run()
    },
    {
      name: "numberedList",
      label: t("editor.orderedlist.tooltip"),
      isActive: () => e.editor.isActive("orderedList"),
      iconName: "ListOrdered",
      action: () => e.editor.chain().focus().clearNodes().toggleOrderedList().run()
    },
    {
      name: "taskList",
      label: t("editor.tasklist.tooltip"),
      isActive: () => e.editor.isActive("taskList"),
      iconName: "ListTodo",
      action: () => e.editor.chain().focus().clearNodes().toggleTaskList().run()
    },
    {
      name: "blockquote",
      label: t("editor.blockquote.tooltip"),
      isActive: () => e.editor.isActive("blockquote"),
      iconName: "TextQuote",
      action: () => e.editor.chain().focus().clearNodes().toggleBlockquote().run()
    }
  ], [e.editor, t]), n = l(() => c.findLast((i) => i.isActive()) ?? {
    label: "Empty"
  }, [c]);
  return /* @__PURE__ */ o(g, { children: [
    /* @__PURE__ */ a(x, { asChild: !0, children: /* @__PURE__ */ o(
      f,
      {
        className: "richtext-flex richtext-h-[32px] richtext-gap-1 richtext-px-1.5",
        variant: "ghost",
        children: [
          /* @__PURE__ */ o("span", { className: "richtext-whitespace-nowrap richtext-text-sm richtext-font-normal", children: [
            " ",
            n == null ? void 0 : n.label
          ] }),
          /* @__PURE__ */ a(u, { className: "richtext-size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      b,
      {
        align: "start",
        className: "richtext-w-full richtext-p-1",
        hideWhenDetached: !0,
        sideOffset: 5,
        children: c.map((i, s) => {
          var r;
          const d = N[i.iconName];
          return /* @__PURE__ */ a(
            v,
            {
              checked: ((r = i.isActive) == null ? void 0 : r.call(i)) || !1,
              className: "richtext-cursor-pointer",
              onClick: () => i.action(),
              children: /* @__PURE__ */ o("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
                /* @__PURE__ */ a(d, { className: "richtext-h3 richtext-w-3" }),
                /* @__PURE__ */ o("span", { children: [
                  " ",
                  i.label
                ] })
              ] })
            },
            `text-bubble-${s}`
          );
        })
      }
    )
  ] });
}
const C = /* @__PURE__ */ h.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: A,
        componentProps: {}
      })
    };
  }
});
export {
  C as TextBubble,
  C as default
};

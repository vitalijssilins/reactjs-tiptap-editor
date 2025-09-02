import { N as m, w as b, m as l } from "./index-BWx1Mchx.js";
import { A as f } from "./RichTextEditor-BB0ShA4S.js";
const L = /^\s*(\[([( |x])?\])\s$/, T = m.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList"
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const n = t.getAttribute("data-checked");
          return n === "" || n === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: n }) {
    return [
      "li",
      l(this.options.HTMLAttributes, n, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: n, getPos: r, editor: o }) => {
      const i = document.createElement("li"), c = document.createElement("label"), k = document.createElement("span"), s = document.createElement("input"), h = document.createElement("div");
      return c.contentEditable = "false", s.type = "checkbox", s.addEventListener("mousedown", (e) => e.preventDefault()), s.addEventListener("change", (e) => {
        if (!o.isEditable && !this.options.onReadOnlyChecked) {
          s.checked = !s.checked;
          return;
        }
        const { checked: a } = e.target;
        o.isEditable && typeof r == "function" && o.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: p }) => {
          const d = r();
          if (typeof d != "number")
            return !1;
          const u = p.doc.nodeAt(d);
          return p.setNodeMarkup(d, void 0, {
            ...u == null ? void 0 : u.attrs,
            checked: a
          }), !0;
        }).run(), !o.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, a) || (s.checked = !s.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([e, a]) => {
        i.setAttribute(e, a);
      }), i.dataset.checked = t.attrs.checked, s.checked = t.attrs.checked, c.append(s, k), i.append(c, h), Object.entries(n).forEach(([e, a]) => {
        i.setAttribute(e, a);
      }), {
        dom: i,
        contentDOM: h,
        update: (e) => e.type !== this.type ? !1 : (i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, !0)
      };
    };
  },
  addInputRules() {
    return [
      b({
        find: L,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), y = m.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", l(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
}), M = /* @__PURE__ */ y.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: n, t: r }) => ({
        component: f,
        componentProps: {
          action: () => n.commands.toggleTaskList(),
          isActive: () => n.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: r("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [T.configure(this.options.taskItem)];
  }
});
export {
  M as TaskList
};

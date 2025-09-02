import { d as a, i as s } from "./debounce-M7Yt2bxB.js";
import { N as l, n as u, m as o } from "./index-sel2RZJw.js";
var d = "Expected a function";
function p(t, r, e) {
  var n = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(d);
  return s(e) && (n = "leading" in e ? !!e.leading : n, i = "trailing" in e ? !!e.trailing : i), a(t, r, {
    leading: n,
    maxWait: r,
    trailing: i
  });
}
const g = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, f = l.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", o(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      u({
        find: g,
        type: this.type,
        getAttributes: (t) => {
          const [, , r, e, n] = t;
          return { src: e, alt: r, title: n };
        }
      })
    ];
  }
});
export {
  f as I,
  p as t
};

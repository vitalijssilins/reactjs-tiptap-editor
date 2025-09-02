import { N as sa, t as Gt, m as oa } from "./index-BWx1Mchx.js";
import { N as la, c as Le, R as ca } from "./dom-dataset-CHDbKz5J.js";
import { jsxs as _e, jsx as k } from "react/jsx-runtime";
import { d as ne, A as da, Z as ua, a3 as pa, k as xe } from "./RichTextEditor-jy1O8VR5.js";
import * as ue from "react";
import { useRef as zt, useCallback as it, useEffect as Ht } from "react";
import * as F from "@radix-ui/react-select";
import { ChevronDown as Nn, ChevronUp as fa, Check as ba } from "lucide-react";
const Vt = F.Root, ga = F.Value, gt = ue.forwardRef(({ className: e, children: t, ...n }, i) => /* @__PURE__ */ _e(
  F.Trigger,
  {
    ref: i,
    className: ne(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ k(F.Icon, { asChild: !0, children: /* @__PURE__ */ k(Nn, { className: "richtext-h-4 richtext-w-4 richtext-opacity-50" }) })
    ]
  }
));
gt.displayName = F.Trigger.displayName;
const On = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ k(
  F.ScrollUpButton,
  {
    ref: n,
    className: ne(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ k(fa, { className: "richtext-h-4 richtext-w-4" })
  }
));
On.displayName = F.ScrollUpButton.displayName;
const Ln = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ k(
  F.ScrollDownButton,
  {
    ref: n,
    className: ne(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ k(Nn, { className: "richtext-h-4 richtext-w-4" })
  }
));
Ln.displayName = F.ScrollDownButton.displayName;
const mt = ue.forwardRef(({ className: e, children: t, position: n = "popper", ...i }, l) => /* @__PURE__ */ k(F.Portal, { children: /* @__PURE__ */ _e(
  F.Content,
  {
    ref: l,
    className: ne(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-overflow-y-auto richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md richtext-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      e
    ),
    position: n,
    ...i,
    children: [
      /* @__PURE__ */ k(On, {}),
      /* @__PURE__ */ k(
        F.Viewport,
        {
          className: ne(
            "richtext-p-1",
            n === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ k(Ln, {})
    ]
  }
) }));
mt.displayName = F.Content.displayName;
const ma = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ k(
  F.Label,
  {
    ref: n,
    className: ne("richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
ma.displayName = F.Label.displayName;
const ht = ue.forwardRef(({ className: e, children: t, ...n }, i) => /* @__PURE__ */ _e(
  F.Item,
  {
    ref: i,
    className: ne(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ k("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ k(F.ItemIndicator, { children: /* @__PURE__ */ k(ba, { className: "richtext-h-4 richtext-w-4" }) }) }),
      /* @__PURE__ */ k(F.ItemText, { children: t })
    ]
  }
));
ht.displayName = F.Item.displayName;
const ha = ue.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ k(
  F.Separator,
  {
    ref: n,
    className: ne("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
ha.displayName = F.Separator.displayName;
function _a({ action: e, ...t }) {
  return /* @__PURE__ */ k(
    da,
    {
      action: e,
      disabled: t == null ? void 0 : t.disabled,
      icon: t == null ? void 0 : t.icon,
      tooltip: t == null ? void 0 : t.tooltip
    }
  );
}
var Ce = {}, Y = Symbol(), ee = Symbol(), Ct = (e) => typeof e == "string" ? _[e] : e, _ = {
  plain: Ce,
  plaintext: Ce,
  text: Ce,
  txt: Ce
}, Ne = (e, t) => (t[ee] || Oe)(e, t), Oe = (e, t) => {
  for (var n = [e], i, l = [], u = 0; i = Ct(t[Y]); )
    delete t[Y], Object.assign(t, i);
  for (Pn(e, t, n, 0); l[u++] = n[0], n = n[1]; ) ;
  return l;
}, Zt = "</span>", Me = "", Ae = "", Cn = (e) => {
  for (var t = "", n = e.length, i = 0; i < n; ) t += Mn(e[i++]);
  return t;
}, Mn = (e) => {
  if (e instanceof be) {
    var { type: t, alias: n, content: i } = e, l = Me, u = Ae, b = `<span class="token ${t + (n ? " " + n : "") + (t == "keyword" && typeof i == "string" ? " keyword-" + i : "")}">`;
    Ae += Zt, Me += b;
    var E = Mn(i);
    return Me = l, Ae = u, b + E + Zt;
  }
  return typeof e != "string" ? Cn(e) : (e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;"), Ae && e.includes(`
`) ? e.replace(/\n/g, Ae + `
` + Me) : e);
}, Pn = (e, t, n, i, l) => {
  for (var u in t)
    if (t[u]) for (var b = 0, E = t[u], y = Array.isArray(E) ? E : [E]; b < y.length; ++b) {
      if (l && l[0] == u && l[1] == b)
        return;
      for (var w = y[b], m = w.pattern || w, p = Ct(w.inside), c = w.lookbehind, f = w.greedy && m.global, g = w.alias, a = n, r = i; a && (!l || r < l[2]); r += a[0].length, a = a[1]) {
        var d = a[0], o = 0, s, h;
        if (!(d instanceof be)) {
          if (m.lastIndex = f ? r : 0, s = m.exec(f ? e : d), s && c && s[1] && (h = s[1].length, s.index += h, s[0] = s[0].slice(h)), f) {
            if (!s)
              break;
            if (s[0]) {
              for (var S = s.index, R = S + s[0].length, A; S >= r + (A = a[0].length); a = a[1], r += A) ;
              if (a[0] instanceof be)
                continue;
              for (var v = a, E = r; (E += v[0].length) < R; v = v[1], o++) ;
              d = e.slice(r, E), s.index -= r;
            }
          }
          if (s && s[0]) {
            for (var S = s.index, N = s[0], T = d.slice(S + N.length), L = r + d.length, P = new be(u, p ? Ne(N, p) : N, N, g), M = a, Z = 0, H; M = M[1], Z++ < o; ) ;
            T && (!M || M[0] instanceof be ? M = [T, M] : M[0] = T + M[0]), r += S, a[0] = S ? d.slice(0, S) : P, S ? a = a[1] = [P, M] : a[1] = M, o && (Pn(e, t, a, r, H = [u, b, L]), L = H[2]), l && L > l[2] && (l[2] = L);
          }
        }
      }
    }
};
function be(e, t, n, i) {
  this.type = e, this.content = t, this.alias = i, this.length = n.length;
}
var Ze = "\\b(?:BASH(?:OPTS|_ALIASES|_ARG[CV]|_CMDS|_COMPLETION_COMPAT_DIR|_LINENO|_REMATCH|_SOURCE|_VERSINFO|_VERSION)?|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|E?UID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_(?:ADDRESS|ALL|IDENTIFICATION|MEASUREMENT|MONETARY|NAME|NUMERIC|PAPER|TELEPHONE|TIME)|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS[1-4]|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_(?:CONFIG_DIRS|CURRENT_DESKTOP|DATA_DIRS|GREETER_DATA_DIR|MENU_PREFIX|RUNTIME_DIR|SEAT|SEAT_PATH|SESSION_DESKTOP|SESSION_ID|SESSION_PATH|SESSION_TYPE|VTNR)|XMODIFIERS)\\b", _t = {
  pattern: /(^(["']?)\w+\2)[ 	]+\S.*/,
  lookbehind: !0,
  alias: "punctuation"
  // this looks reasonably well in all themes
}, $n = {
  variable: /^\$\(|^`|\)$|`$/
}, Pe = {
  bash: _t,
  environment: {
    pattern: RegExp("\\$" + Ze),
    alias: "constant"
  },
  variable: [
    // [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([^]*?\)\)/g,
      greedy: !0,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        variable: [
          {
            pattern: /(^\$[^]+)../,
            lookbehind: !0
          },
          /^\$\(\(/
        ],
        number: /\b0x[a-fA-F\d]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        operator: /--|\+\+|&&|\|\||(?:\*\*|<<|>>|[%&|^!=<>/*+-])=?|[?:~]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        punctuation: /\(\(?|\)\)?|,|;/
      }
    },
    // [1]: Command Substitution
    {
      pattern: /\$\((?:[^()]|\([^)]*\))*\)|`[^`]+`/g,
      greedy: !0,
      inside: $n
    },
    // [2]: Brace expansion
    {
      pattern: /\$\{[^}]*\}/g,
      greedy: !0,
      inside: {
        operator: /:[?=+-]?|[!/]|##?|%%?|\^\^?|,,?/,
        punctuation: /[[\]]/,
        environment: {
          pattern: RegExp("(\\{)" + Ze),
          lookbehind: !0,
          alias: "constant"
        }
      }
    },
    /\$(?:\w+|[#?*!@$])/
  ],
  // Escape sequences from echo and printf's manuals, and escaped quotes.
  entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[a-fA-F\d]{8}|u[a-fA-F\d]{4}|x[a-fA-F\d]{1,2})/
}, Ea = _t.inside = _.sh = _.shell = _.bash = {
  shebang: {
    pattern: /^#!\s*\/.*/,
    alias: "important"
  },
  comment: {
    pattern: /(^|[^"{\\$])#.*/,
    lookbehind: !0
  },
  "function-name": [
    // a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: !0,
      alias: "function"
    },
    {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }
  ],
  // Highlight variable names as variables in for and select beginnings.
  "for-or-select": {
    pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
    lookbehind: !0,
    alias: "variable"
  },
  // Highlight variable names as variables in the left-hand part
  // of assignments (“=” and “+=”).
  "assign-left": {
    pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
    lookbehind: !0,
    alias: "variable",
    inside: {
      environment: {
        pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + Ze),
        lookbehind: !0,
        alias: "constant"
      }
    }
  },
  // Highlight parameter names as variables
  parameter: {
    pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?![^\s=])/,
    lookbehind: !0,
    alias: "variable"
  },
  string: [
    // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[^]*?\n\2/g,
      lookbehind: !0,
      greedy: !0,
      inside: Pe
    },
    // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[^]*?\n\3/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        bash: _t
      }
    },
    // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[^]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^\\"`$])*"/g,
      lookbehind: !0,
      greedy: !0,
      inside: Pe
    },
    {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/g,
      lookbehind: !0,
      greedy: !0
    },
    {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:\\[^]|[^\\'])*'/g,
      greedy: !0,
      inside: {
        entity: Pe.entity
      }
    }
  ],
  environment: {
    pattern: RegExp("\\$?" + Ze),
    alias: "constant"
  },
  variable: Pe.variable,
  function: {
    pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|c?fdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cron|crontab|c?split|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff3?|dig|dircolors|dirname|dirs?|dmesg|docker|docker-compose|du|[ef]?grep|eject|env|ethtool|expand|expect|expr|fdformat|fg|file|find|fmt|fold|format|free|fsck|fuser|g?awk|git|g?parted|groupadd|groupdel|groupmod|groups|grub-mkconfig|halt|head|hg|history|host|hostname|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|killall|less|link|ln|logname|logrotate|look|lpc|lprint[dq]?|lprm?|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mm?v|more|most|mtools|m?tr|mutt|nano|nc|netstat|nice|nl|node|nohup|notify-send|nslookup|op|open|passwd|paste|pathchk|ping|p?kill|p?npm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ra[mr]|reboot|remsync|rename|renice|rev|rmdir|rp?m|r?sync|[sr]?cp|screen|sdiff|se[dq]|sendmail|service|s?ftp|shellcheck|shuf|shutdown|sleep|s?locate|[sz]?sh|stat|strace|sudo|sum?|suspend|swapon|sysctl|tac|tail|tar|tee|time|timeout|h?top|touch|traceroute|t?sort|tty|u?mount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vim?|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|g?zip|zsh|zypper)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  keyword: {
    pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
  builtin: {
    pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|[ls]et|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
    lookbehind: !0,
    // Alias added to make those easier to distinguish from strings.
    alias: "class-name"
  },
  boolean: {
    pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
    lookbehind: !0
  },
  "file-descriptor": {
    pattern: /\B&\d\b/,
    alias: "important"
  },
  operator: {
    // Lots of redirections here, but not just that.
    pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
    inside: {
      "file-descriptor": {
        pattern: /^\d/,
        alias: "important"
      }
    }
  },
  punctuation: /\$?\(\(?|\)\)?|\.\.|[[\]{};\\]/,
  number: {
    pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
    lookbehind: !0
  }
};
[
  "comment",
  "function-name",
  "for-or-select",
  "assign-left",
  "parameter",
  "string",
  "environment",
  "function",
  "keyword",
  "builtin",
  "boolean",
  "file-descriptor",
  "operator",
  "punctuation",
  "number"
].forEach((e) => $n[e] = Ea[e]);
var Dn = /(?:"(?:\\[^]|[^\\\n"])*"|'(?:\\[^]|[^\\\n'])*')/g, $e = Dn.source, qt = {
  rule: /^@[\w-]+/,
  "selector-function-argument": {
    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^)]*\))*\))+(?=\s*\))/,
    lookbehind: !0,
    alias: "selector"
  },
  keyword: {
    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
    lookbehind: !0
  }
  // See rest below
};
qt[Y] = _.css = {
  comment: /\/\*[^]*?\*\//,
  atrule: {
    pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|${$e})*?(?:;|(?=\\s*\\{))`),
    inside: qt
  },
  url: {
    // https://drafts.csswg.org/css-values-3/#urls
    pattern: RegExp(`\\burl\\((?:${$e}|(?:[^\\\\
"')=]|\\\\[^])*)\\)`, "gi"),
    greedy: !0,
    inside: {
      function: /^url/i,
      punctuation: /^\(|\)$/,
      string: {
        pattern: RegExp("^" + $e + "$"),
        alias: "url"
      }
    }
  },
  selector: {
    pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${$e})*(?=\\s*\\{)`),
    lookbehind: !0
  },
  string: {
    pattern: Dn,
    greedy: !0
  },
  property: {
    pattern: /(^|[^-\w\xa0-\uffff])(?!\d)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*:)/i,
    lookbehind: !0
  },
  important: /!important\b/i,
  function: {
    pattern: /(^|[^-a-z\d])[-a-z\d]+(?=\()/i,
    lookbehind: !0
  },
  punctuation: /[(){},:;]/
};
var Be = (e, t) => {
  if (t.has(e)) return t.get(e);
  var n = e, i = ya.call(e).slice(8, -1);
  if (i == "Object") {
    t.set(e, n = {});
    for (var l in e)
      n[l] = Be(e[l], t);
    e[Y] && (n[Y] = Be(e[Y], t)), e[ee] && (n[ee] = e[ee]);
  } else if (i == "Array") {
    t.set(e, n = []);
    for (var u = 0, b = e.length; u < b; u++)
      n[u] = Be(e[u], t);
  }
  return n;
}, et = (e) => Be(e, /* @__PURE__ */ new Map()), ie = (e, t) => Object.assign(et(_[e]), t), $ = (e, t, n) => {
  var i = {};
  for (var l in e)
    i[l] = e[l], delete e[l];
  for (var l in i)
    l == t && Object.assign(e, n), n.hasOwnProperty(l) || (e[l] = i[l]);
}, ya = {}.toString, qe = _.css, Kt = {
  pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
  lookbehind: !0
}, Wt = {
  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
  lookbehind: !0
};
qe.selector.inside = qe.atrule.inside["selector-function-argument"].inside = {
  "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
  "pseudo-class": /:[-\w]+/,
  class: /\.[-\w]+/,
  id: /#[-\w]+/,
  attribute: {
    pattern: /\[(?:[^[\]"']|(["'])(?:\\[^]|(?!\1)[^\\\n])*\1)*\]/g,
    greedy: !0,
    inside: {
      punctuation: /^\[|\]$/,
      "case-sensitivity": {
        pattern: /(\s)[si]$/i,
        lookbehind: !0,
        alias: "keyword"
      },
      namespace: {
        pattern: /^(\s*)(?:(?!\s)[-*\w\xa0-\uffff])*\|(?!=)/,
        lookbehind: !0,
        inside: {
          punctuation: /\|$/
        }
      },
      "attr-name": {
        pattern: /^(\s*)(?:(?!\s)[-\w\xa0-\uffff])+/,
        lookbehind: !0
      },
      "attr-value": {
        pattern: /(=\s*)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*$)|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2/,
        lookbehind: !0
      },
      operator: /[|~*^$]?=/
    }
  },
  "n-th": [
    {
      pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
      lookbehind: !0,
      inside: {
        number: /[\dn]+/,
        operator: /[+-]/
      }
    },
    {
      pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
      lookbehind: !0
    }
  ],
  combinator: />|\+|~|\|\|/,
  // the `tag` token has been existed and removed.
  // because we can't find a perfect tokenize to match it.
  // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
  punctuation: /[(),]/
};
$(qe, "property", {
  variable: {
    pattern: /(^|[^-\w\xa0-\uffff])--(?!\d)(?:(?!\s)[-\w\xa0-\uffff])*/i,
    lookbehind: !0
  }
});
$(qe, "function", {
  operator: {
    pattern: /(\s)[/*+-](?!\S)/,
    lookbehind: !0
  },
  // CAREFUL!
  // Previewers and Inline color use hexcode and color.
  hexcode: {
    pattern: /\B#[a-f\d]{3,8}\b/i,
    alias: "color"
  },
  color: [
    {
      pattern: /(^|[^\w-])(?:(?:alice|cadet|cornflower|deepsky|dodger|midnight|powder|royal|sky|steel)blue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blueviolet|brown|burlywood|chartreuse|chocolate|coral|cornsilk|crimson|(?:dark)?(?:blue|cyan|goldenrod|gr[ae]y|green|khaki|magenta|olivegreen|orange|orchid|red|salmon|seagreen|slateblue|slategr[ae]y|turquoise|violet)|deeppink|dimgr[ae]y|firebrick|floralwhite|(?:forest|lawn|lime|pale|spring)green|fuchsia|gainsboro|ghostwhite|gold|greenyellow|honeydew|hotpink|indianred|indigo|ivory|lavender|lavenderblush|lemonchiffon|light(?:blue|coral|cyan|goldenrodyellow|gr[ae]y|green|pink|salmon|seagreen|skyblue|slategr[ae]y|steelblue|yellow)|lime|linen|maroon|medium(?:aquamarine|blue|orchid|purple|seagreen|slateblue|springgreen|turquoise|violetred)|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orangered|palegoldenrod|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|purple|rebeccapurple|rosybrown|saddlebrown|sandybrown|seashell|sienna|silver|snow|tan|teal|thistle|tomato|transparent|wheat|white|whitesmoke|yellow|yellowgreen)(?![\w-])/i,
      lookbehind: !0
    },
    {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        function: /^[^(]+/,
        unit: Kt,
        number: Wt,
        punctuation: /[(),]/
      }
    }
  ],
  // it's important that there is no boundary assertion after the hex digits
  entity: /\\[a-f\d]{1,8}/i,
  unit: Kt,
  number: Wt
});
_.ini = {
  /**
   * The component mimics the behavior of the Win32 API parser.
   *
   * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
   */
  comment: {
    pattern: /(^[ \f	\v]*)[#;].*/m,
    lookbehind: !0
  },
  section: {
    pattern: /(^[ \f	\v]*)\[[^\n\]]*\]?/m,
    lookbehind: !0,
    inside: {
      "section-name": {
        pattern: /(^\[[ \f	\v]*)[^ \f	\v\]]+(?:[ \f	\v]+[^ \f	\v\]]+)*/,
        lookbehind: !0,
        alias: "selector"
      },
      punctuation: /[[\]]/
    }
  },
  key: {
    pattern: /(^[ \f	\v]*)[^ \f\n	\v=]+(?:[ \f	\v]+[^ \f\n	\v=]+)*(?=[ \f	\v]*=)/m,
    lookbehind: !0,
    alias: "attr-name"
  },
  value: {
    pattern: /(=[ \f	\v]*)[^ \f\n	\v]+(?:[ \f	\v]+[^ \f\n	\v]+)*/,
    lookbehind: !0,
    alias: "attr-value",
    inside: {
      "inner-value": {
        pattern: /^(["']).+(?=\1$)/,
        lookbehind: !0
      }
    }
  },
  punctuation: /=/
};
var se = () => ({
  pattern: /\/\/.*|\/\*[^]*?(?:\*\/|$)/g,
  greedy: !0
}), Mt = () => ({
  pattern: /(["'])(?:\\[^]|(?!\1)[^\\\n])*\1/g,
  greedy: !0
}), Fn = /\b0x[a-f\d]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, ae = /[()[\]{}.,:;]/, K = /\b(?:false|true)\b/, st = {
  "interpolation-punctuation": {
    pattern: /^\$\{?|\}$/,
    alias: "punctuation"
  },
  expression: {
    pattern: /[^]+/
  }
};
st.expression.inside = _.kts = _.kt = _.kotlin = {
  // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
  "string-literal": [
    {
      pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
      alias: "multiline",
      inside: {
        interpolation: {
          pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          inside: st
        },
        string: /[^]+/
      }
    },
    {
      pattern: /"(?:\\.|[^\\\n"$]|\$(?:(?!\{)|\{[^{}]*\}))*"/,
      alias: "singleline",
      inside: {
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\\\)*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          lookbehind: !0,
          inside: st
        },
        string: /[^]+/
      }
    }
  ],
  char: {
    // https://kotlinlang.org/spec/expressions.html#character-literals
    pattern: /'(?:[^\\\n']|\\(?:.|u[a-fA-F\d]{0,4}))'/g,
    greedy: !0
  },
  comment: se(),
  annotation: {
    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
    alias: "builtin"
  },
  keyword: {
    // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
    pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
    lookbehind: !0
  },
  boolean: K,
  label: {
    pattern: /\b\w+@|@\w+/,
    alias: "symbol"
  },
  function: {
    pattern: /(?:`[^\n`]+`|\b\w+)(?=\s*\()|(\.)(?:`[^\n`]+`|\w+)(?=\s*\{)/g,
    lookbehind: !0,
    greedy: !0
  },
  number: /\b(?:0[xX][a-fA-F\d]+(?:_[a-fA-F\d]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
  operator: /--|\+\+|&&|\|\||->|[!=]==|!!|[%!=<>/*+-]=?|[?:]:?|\.\.|\b(?:and|inv|shl|u?shr|x?or)\b/,
  punctuation: ae
};
var Un = [
  {
    pattern: /&[a-z\d]{1,8};/i,
    alias: "named-entity"
  },
  /&#x?[a-f\d]{1,8};/i
], va = {
  pattern: /<\/?(?!\d)[^\s/=>$<%]+(?:\s(?:\s*[^\s/=>]+(?:\s*=\s*(?!\s)(?:"[^"]*"|'[^']*'|[^\s"'=>]+(?=[\s>]))?|(?=[\s/>])))+)?\s*\/?>/g,
  greedy: !0,
  inside: {
    punctuation: /^<\/?|\/?>$/,
    tag: {
      pattern: /^\S+/,
      inside: {
        namespace: /^[^:]+:/
      }
    },
    "attr-value": [{
      pattern: /(=\s*)(?:"[^"]*"|'[^']*'|[^\s"'=>]+)/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^["']|["']$/,
        entity: Un
      }
    }],
    "attr-equals": /=/,
    "attr-name": {
      pattern: /\S+/,
      inside: {
        namespace: /^[^:]+:/
      }
    }
  }
};
_.rss = _.atom = _.ssml = _.xml = {
  comment: {
    pattern: /<!--(?:(?!<!--)[^])*?-->/g,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[^]+?\?>/g,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/gi,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(\[)[^]+(?=\]\s*>$)/,
        lookbehind: !0,
        inside: "xml"
      },
      string: /"[^"]*"|'[^']*'/,
      punctuation: /^<!|[>[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /\S+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[^]*?\]\]>/gi,
    greedy: !0
  },
  tag: va,
  entity: Un,
  "markup-bracket": {
    pattern: /[()[\]{}]/,
    alias: "punctuation"
  }
};
var Et = (e, t) => (e["language-" + t] = {
  pattern: /[^]+/,
  inside: t
}, e), jt = (e, t) => ({
  pattern: RegExp(`(<${e}[^>]*>)(?!</${e}>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])+?(?=</${e}>)`, "gi"),
  lookbehind: !0,
  greedy: !0,
  inside: Et({
    "included-cdata": {
      pattern: /<!\[CDATA\[[^]*?\]\]>/i,
      inside: Et({
        cdata: /^<!\[CDATA\[|\]\]>$/i
      }, t)
    }
  }, t)
}), Yt = (e, t) => ({
  pattern: RegExp(`((?:^|["'\\s])(?:${e})\\s*=\\s*)(?:"[^"]*"|'[^']*'|[^\\s"'=>]+)`, "gi"),
  lookbehind: !0,
  greedy: !0,
  inside: Et({
    punctuation: /^["']|["']$/
  }, t)
}), Bn = _.svg = _.mathml = _.html = _.markup = et(_.xml);
Bn.tag.inside["attr-value"].unshift(
  Yt("style", "css"),
  Yt("on[a-z]+", "javascript")
);
$(Bn, "cdata", {
  style: jt("style", "css"),
  script: jt("script", "javascript")
});
_.r = {
  comment: /#.*/,
  string: {
    pattern: /(["'])(?:\\.|(?!\1)[^\\\n])*\1/g,
    greedy: !0
  },
  "percent-operator": {
    // Includes user-defined operators
    // and %%, %*%, %/%, %in%, %o%, %x%
    pattern: /%[^%\s]*%/,
    alias: "operator"
  },
  boolean: /\b(?:FALSE|TRUE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [
    /\b(?:Inf|NaN)\b/,
    /(?:\b0x[a-fA-F\d]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
  ],
  keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
  operator: /->>?|<=|<<?-|[!=<>]=?|::?|&&?|\|\|?|[~^$@/*+-]/,
  punctuation: /[()[\]{},;]/
};
_.basic = {
  comment: {
    pattern: /(?:!|rem\b).+/i,
    inside: {
      keyword: /^rem/i
    }
  },
  string: {
    pattern: /"(?:""|[#$%&'().,:;\w ?^!=<>/*+-])*"/g,
    greedy: !0
  },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  keyword: /\b(?:as|beep|bload|bsave|call absolute|call|case|chain|chdir|clear|close|cls|com|common|const|data|declare|def(?: fn| seg|dbl|int|[ls]ng|str)|dim|do|double|else|elseif|environ|erase|error|exit|field|files|for|function|get|gosub|goto|if|input|integer|ioctl|key|kill|line input|locate|lock|long|loop|[lr]set|mkdir|name|next|off|on(?: com| error| key| timer)?|open|option base|[op]ut|poke|read|redim|rem|restore|resume|return|rmdir|run|select case|shared|shell|single|sleep|static|step|stop|string|sub|swap|system|then|timer|to|troff|tron|type|unlock|until|using|view print|wait|w?end|while|write)(?:\$|\b)/i,
  function: /\b(?:abs|access|a?cos|angle|area|arithmetic|array|a?sin|ask|atn?|base|begin|break|cause|ceil|chr|clip|collate|color|co[nst]|cosh|csc|date|datum|debug|decimal|de[fgt]|degrees|delete|device|display|dot|elapsed|eps|erasable|exline|exp|external|extype|filetype|fixed|fp|go|graph|handler|idn|image|int?|internal|ip|is|keyed|[lu]bound|[lu]case|left|le[nt]|length|lines?|log2?|log10|[lr]trim|margin|ma[tx]|maxnum|mi[dn]|missing|mod|native|nul|numeric|of|option|ord|organization|outin|output|pi|pointer|points?|pos|print|program|prompt|rad|radians|randomize|record|recsize|rectype|relative|remainder|repeat|rest|retry|rewrite|right|rnd|round|same|se[ct]|select|sequential|setter|sgn|sinh|size|skip|s[qt]r|standard|status|stream|style|tab|tanh?|template|text|there|time|timeout|trace|transform|truncate|use|val|variable|viewport|when|window|with|zer|zonewidth)(?:\$|\b)/i,
  operator: /<=|<>|>=|[&^=<>/*+-]|\b(?:and|eqv|imp|not|x?or)\b/i,
  punctuation: /[(),:;]/
};
_.vbnet = ie("basic", {
  comment: {
    pattern: /(?:!|'|rem\b).*/i,
    inside: {
      keyword: /^rem/i
    }
  },
  string: {
    pattern: /(^|[^"])"(?:""|[^"])*"(?!")/g,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /(?:\b(?:addhandler|addressof|alias|and|andalso|as|beep|bload|boolean|bsave|byref|byval|call absolute|call|case|catch|cbool|c?byte|cc?har|c?date|cdbl|cdec|chain|chdir|cu?int|class|clear|close|cls|cobj|com|common|const|continue|c?sbyte|c?u?short|c?sng|cstr|c?type|cu?lng|data|decimal|declare|def(?: fn| seg|dbl|int|lng|sng|str)|default|delegate|dim|directcast|do|double|else|elseif|enum|environ|erase|error|event|exit|false|true|field|files|finally|for each|for|friend|function|[gls]et|gettype|getxmlnamespace|global|gosub|goto|handles|i[fns]|implements|imports|inherits|input|interface|ioctl|isnot|key|kill|lib|like|line input|locate|lock|loop|[lr]set|me|mkdir|mod|module|mustinherit|mustoverride|mybase|myclass|name|namespace|narrowing|new|next|not|nothing|notinheritable|notoverridable|object|off?|on (?:com|error|key|timer)|on|open|operator|option base|option|optional|orelse|out|overloads|overridable|overrides|paramarray|partial|poke|private|property|protected|public|put|raiseevent|read|readonly|redim|removehandler|restore|resume|return|rmdir|run|select case|select|shadows|shared|shell|single|sleep|static|step|stop|string|structure|sub|swap|synclock|system|[tw]hen|throw|timer|to|troff|tron|try|trycast|typeof|u?integer|u?long|unlock|until|using|view print|wait|w?end|while|widening|with|withevents|write|writeonly|x?or)|\B#(?:const|else|elseif|end|if))(?:\$|\b)/i,
  punctuation: /[(){},:;]/
});
var Xt = {
  // https://en.cppreference.com/w/c/language/character_constant
  pattern: /'(?:\\[^]|[^\\\n']){0,32}'/g,
  greedy: !0
}, Qt = {
  pattern: /\/\/(?:[^\\\n]|\\\n?)*|\/\*[^]*?(?:\*\/|$)/g,
  greedy: !0
}, Jt = {
  // https://en.cppreference.com/w/c/language/string_literal
  pattern: /"(?:\\[^]|[^\\\n"])*"/g,
  greedy: !0
}, en = {
  pattern: /\S[^]*/
};
en.inside = _.c = {
  comment: Qt,
  char: Xt,
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[ 	]*)#\s*[a-z](?:[^\\\n/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\[^])*/img,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Jt
      ],
      char: Xt,
      comment: Qt,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=\n)/,
      expression: en
    }
  },
  string: Jt,
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([^]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[a-f\d]+(?:\.[a-f\d]*)?|\.[a-f\d]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: /->|([&|:+-])\1|[?:~]|>>=?|<<=?|[%&|^!=<>/*+-]=?/,
  punctuation: ae
};
$(
  _.opencl = ie("c", {
    // Extracted from the official specs (2.0) and http://streamcomputing.eu/downloads/?opencl.lang (opencl-keywords, opencl-types) and http://sourceforge.net/tracker/?func=detail&aid=2957794&group_id=95717&atid=612384 (Words2, partly Words3)
    keyword: /\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,
    // Extracted from http://streamcomputing.eu/downloads/?opencl.lang (opencl-const)
    // Math Constants: https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/mathConstants.html
    // Macros and Limits: https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/macroLimits.html
    number: /(?:\b0x(?:[a-f\d]+(?:\.[a-f\d]*)?|\.[a-f\d]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,
    boolean: K,
    "constant-opencl-kernel": {
      pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN2|LN10|LOG2E?|LOG10E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,
      alias: "constant"
    }
  }),
  "class-name",
  {
    // https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/scalarDataTypes.html
    // https://www.khronos.org/registry/OpenCL/sdk/2.1/docs/man/xhtml/otherDataTypes.html
    "builtin-type": {
      pattern: /\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|u?intptr_t)\b/,
      alias: "keyword"
    }
  }
);
var yt = {
  // Extracted from http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-types and opencl-host)
  "type-opencl-host": {
    pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:[2348]|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
    alias: "keyword"
  },
  "boolean-opencl-host": {
    pattern: /\bCL_(?:FALSE|TRUE)\b/,
    alias: "boolean"
  },
  // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-const)
  "constant-opencl-host": {
    pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|RA?|READ_(?:ONLY|WRITE)_CACHE|RG|RGB[Ax]?|RG?x|RUNNING|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_5[56]5|VERSION_(?:1_[012]|2_[01])|s?BGRA|sRGB[Ax]?)\b/,
    alias: "constant"
  },
  // Extracted from cl.h (2.0) and http://streamcomputing.eu/downloads/?opencl_host.lang (opencl-host)
  "function-opencl-host": {
    pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image[23]D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
    alias: "function"
  }
};
$(_.c, "keyword", yt);
_.cpp && (yt["type-opencl-host-cpp"] = {
  pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image(?:[123]D|[12]DArray|1DBuffer|[23]DGL|Format|GL)?|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTrait(?:Atomic|Coarse|Fine|ReadOnly|ReadWrite|WriteOnly)|Sampler|UserEvent)\b/,
  alias: "keyword"
}, $(_.cpp, "keyword", yt));
var wa = _.diff = {
  // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
  // Match "@@ ... @@" coord lines in unified diff.
  // Match coord lines in normal diff (starts with a number).
  coord: /^(?:\*{3}|-{3}|\+{3}|\d).*$|^@@.*@@$/m
  // deleted, inserted, unchanged, diff
}, ot = {
  "deleted-sign": "-",
  "deleted-arrow": "<",
  "inserted-sign": "+",
  "inserted-arrow": ">",
  unchanged: " ",
  diff: "!"
};
for (var pe in ot) {
  var lt = pe.split("-")[0];
  wa[pe] = {
    pattern: RegExp("^(?:[" + ot[pe] + `].*$
?)+`, "m"),
    alias: lt != pe ? lt : pe == "diff" ? "bold" : void 0,
    inside: {
      prefix: {
        pattern: RegExp("^[" + ot[pe] + "]", "mg"),
        greedy: !0,
        alias: lt
      }
    }
  };
}
var ct = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|opens?|package|permits|private|protected|provides|public|record(?!\s*[()[\]{}%~.,:;?%&|^=<>/*+-])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throws?|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, Se = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", vt = {
  pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
  inside: {
    punctuation: /\./
  }
}, wt = {
  namespace: vt,
  punctuation: /\./
}, tn = {
  pattern: RegExp(`(^|[^\\w.])${Se}[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b`),
  lookbehind: !0,
  inside: wt
};
_.java = {
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?(?:\*\/|$)/g,
    greedy: !0,
    alias: "comment",
    inside: "javadoc"
  },
  comment: se(),
  "triple-quoted-string": {
    // http://openjdk.java.net/jeps/355#Description
    pattern: /"""[ 	]*\n(?:\\.|[^\\])*?"""/g,
    greedy: !0,
    alias: "string"
  },
  char: {
    pattern: /'(?:\\.|[^\\\n']){1,6}'/g,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\\n"])*"/g,
    lookbehind: !0,
    greedy: !0
  },
  annotation: {
    pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
    lookbehind: !0,
    alias: "punctuation"
  },
  generics: {
    pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
    inside: {
      "class-name": tn,
      keyword: ct,
      punctuation: /[().,:<>]/,
      operator: /[?&|]/
    }
  },
  import: [
    {
      pattern: RegExp(`(\\bimport\\s+)${Se}(?:[A-Z]\\w*|\\*)(?=\\s*;)`),
      lookbehind: !0,
      inside: {
        namespace: vt,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    },
    {
      pattern: RegExp(`(\\bimport\\s+static\\s+)${Se}(?:\\w+|\\*)(?=\\s*;)`),
      lookbehind: !0,
      alias: "static",
      inside: {
        namespace: vt,
        static: /\b\w+$/,
        punctuation: /\./,
        operator: /\*/,
        "class-name": /\w+/
      }
    }
  ],
  namespace: {
    pattern: RegExp(
      `(\\b(?:exports|import(?:\\s+static)?|module|opens?|package|provides|requires|to|transitive|uses|with)\\s+)(?!${ct.source})[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?`
    ),
    lookbehind: !0,
    inside: {
      punctuation: /\./
    }
  },
  "class-name": [
    tn,
    {
      // variables, parameters, and constructor references
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(`(^|[^\\w.])${Se}[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)`),
      lookbehind: !0,
      inside: wt
    },
    {
      // class names based on keyword
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(`(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)${Se}[A-Z]\\w*\\b`),
      lookbehind: !0,
      inside: wt
    }
  ],
  keyword: ct,
  boolean: K,
  function: {
    pattern: /\b\w+(?=\()|(::\s*)[a-z_]\w*/,
    lookbehind: !0
  },
  number: /\b0b[01][01_]*l?\b|\b0x(?:\.[a-f\d_p+-]+|[a-f\d_]+(?:\.[a-f\d_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
  constant: /\b[A-Z][A-Z_\d]+\b/,
  operator: {
    pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[%&|^!=<>/*+-]=?)/m,
    lookbehind: !0
  },
  punctuation: ae
};
$(
  _.less = ie("css", {
    comment: se(),
    atrule: {
      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[():]/
      }
    },
    // selectors and mixins are considered the same
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        // mixin parameters
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[/*+-]/
  }),
  "property",
  {
    variable: [
      // Variable declaration (the colon must be consumed!)
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      },
      // Variable usage
      /@@?[\w-]+/
    ],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: "function"
    }
  }
);
_.objc = _.objectivec = ie("c", {
  string: {
    pattern: /@?"(?:\\[^]|[^\\\n"])*"/g,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int?|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|==?|>>?=?|<<?=?|&&?|\|\|?|[~^@%?/*]/
});
delete _.objc["class-name"];
var Gn = {
  pattern: /^(..)[^]+(?=.)/,
  lookbehind: !0
}, dt = "(?:([^a-zA-Z\\d\\s{(\\[<=])(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|\\((?:\\\\[\\s\\S]|[^\\\\()]|\\((?:\\\\[\\s\\S]|[^\\\\()])*\\))*\\)|\\{(?:\\\\[\\s\\S]|[^\\\\{}]|\\{(?:\\\\[\\s\\S]|[^\\\\{}])*\\})*\\}|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]]|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]])*\\])*\\]|<(?:\\\\[\\s\\S]|[^\\\\<>]|<(?:\\\\[\\s\\S]|[^\\\\<>])*>)*>)", nn = `(?:"(?:\\\\.|[^\\\\
"])*"|(?:\\b(?!\\d)\\w+|[^\\s\0-\\x7f]+)[?!]?|\\$.)`, oe = {
  pattern: /((?:^|[^\\])(?:\\\\)*)#\{(?:[^{}]|\{[^}]*\})*\}/,
  lookbehind: !0,
  inside: {
    content: Gn,
    delimiter: {
      pattern: /.+/,
      alias: "punctuation"
    }
  }
};
Gn.inside = _.rb = _.ruby = {
  comment: {
    pattern: /#.*|^=begin\s[^]*?^=end/mg,
    greedy: !0
  },
  "string-literal": [
    {
      pattern: RegExp("%[qQiIwWs]?" + dt, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /(["'])(?:#\{[^}]+\}|#(?!\{)|\\[^]|(?!\1)[^\\#\n])*\1/g,
      greedy: !0,
      inside: {
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /<<[-~]?([a-z_]\w*)\n(?:.*\n)*?[ 	]*\1/gi,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
          inside: {
            symbol: /\w+/,
            punctuation: /^<<[-~]?/
          }
        },
        interpolation: oe,
        string: /[^]+/
      }
    },
    {
      pattern: /<<[-~]?'([a-z_]\w*)'\n(?:.*\n)*?[ 	]*\1/gi,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
          inside: {
            symbol: /\w+/,
            punctuation: /^<<[-~]?'|'$/
          }
        },
        string: /[^]+/
      }
    }
  ],
  "command-literal": [
    {
      pattern: RegExp("%x" + dt, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        command: {
          pattern: /[^]+/,
          alias: "string"
        }
      }
    },
    {
      pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\[^]|[^\\`#\n])*`/g,
      greedy: !0,
      inside: {
        interpolation: oe,
        command: {
          pattern: /[^]+/,
          alias: "string"
        }
      }
    }
  ],
  "class-name": {
    pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  "regex-literal": [
    {
      pattern: RegExp(`%r${dt}[egimnosux]{0,6}`, "g"),
      greedy: !0,
      inside: {
        interpolation: oe,
        regex: /[^]+/
      }
    },
    {
      pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\]]+\]|\\.|[^\\\n/[])+\/[egimnosux]{0,6}(?=\s*(?:$|[\n,.;})#]))/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: oe,
        regex: /[^]+/
      }
    }
  ],
  variable: /[@$]+(?!\d)\w+(?:[?!]|\b)/,
  symbol: [
    {
      pattern: RegExp("(^|[^:]):" + nn, "g"),
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: RegExp(`([
{(,][ 	]*)` + nn + "(?=:(?!:))", "g"),
      lookbehind: !0,
      greedy: !0
    }
  ],
  "method-definition": {
    pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
    lookbehind: !0,
    inside: {
      function: /\b\w+$/,
      keyword: /^self\b/,
      "class-name": /^\w+/,
      punctuation: /\./
    }
  },
  keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|f?or|if|in|include|module|new|next|nil|not|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|[tw]hen|throw|undef|unless|until|while|yield)\b/,
  boolean: K,
  builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
  constant: /\b[A-Z][A-Z\d_]*(?:[?!]|\b)/,
  number: Fn,
  "double-colon": {
    pattern: /::/,
    alias: "punctuation"
  },
  operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[%&|^!=<>/*+-])=?|[?:]/,
  punctuation: /[()[\]{}.,;]/
};
_.sql = {
  comment: /\/\*[^]*?\*\/|(?:--|\/\/|#).*/,
  variable: [
    {
      pattern: /@(["'`])(?:\\[^]|(?!\1)[^\\])+\1/g,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])(["'])(?:\\[^]|(?!\2)[^\\]|\2\2)*\2/g,
    lookbehind: !0,
    greedy: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[^]|[^\\`]|``)*`/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:avg|count|first|format|last|[lu]case|len|max|mi[dn]|mod|now|round|sum)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:action|add|after|algorithm|alter|analyze|any|apply|asc?|authorization|auto_increment|backup|bdb|begin|berkeleydb|bigint|binary|bit|blob|bool|boolean|break|browse|[br]tree|bulk|by|c?all|cascaded?|case|chain|character|charset|check(?:point)?|close|clustered|coalesce|collate|columns?|comment|commit(?:ted)?|compute|connect|consistent|constraint|contains(?:table)?|continue|convert|create|cross|current(?:_date|_time|_timestamp|_user)?|cursor|cycle|data(?:bases?)?|date(?:time)?|day|dbcc|deallocate|dec|decimal|declare|default|definer|delayed|delete|delimiters?|deny|desc|describe|deterministic|disable|discard|disk|distinct|distinctrow|distributed|do|double|drop|dummy|dump(?:file)?|duplicate|else(?:if)?|enable|enclosed|end|engine|enum|errlvl|errors|escaped?|except|exec(?:ute)?|exists|exit|explain|extended|fetch|fields|file|fillfactor|first|fixed|float|following|for each row|for|force|foreign|freetexttable|freetext|from|full|function|geometry(?:collection)?|global|goto|grant|group|handler|hash|having|holdlock|hour|identity(?:col|_insert)?|if|ignore|import|index|infile|inner|innodb|inout|insert|integer|intersect|interval|into?|invoker|isolation|iterate|join|keys?|kill|language|last|leave|left|level|limit|lineno|lines|linestring|load|local|lock|long(?:blob|text)|loop|matched|match|(?:medium|tiny)(?:blob|int|text)|merge|middleint|minute|mode|modifies|modify|month|multi(?:linestring|point|polygon)|national|natural|n?char|next|no|nonclustered|nullif|numeric|off?|offsets?|on|open(?:datasource|query|rowset)?|optimize|option(?:ally)?|order|out(?:er|file)?|over|partial|partition|percent|pivot|plan|point|polygon|preceding|precision|prepare|prev|primary|print|privileges|proc(?:edure)?|public|purge|quick|raiserror|reads?|real|reconfigure|references|release|rename|repeat(?:able)?|replace|replication|require|resignal|restore|restrict|returning|returns?|revoke|right|rollback|routine|row(?:count|guidcol|s)?|rule|savepoint|save|schema|second|select|serializable|serial|session_user|session|setuser|set|share|show|shutdown|simple|smallint|snapshot|some|soname|sql|start(?:ing)?|statistics|status|striped|system_user|tables?|tablespace|temp(?:orary|table)?|terminated|textsize|text|[tw]hen|timestamp|time|top?|transactions?|tran|trigger|truncate|tsequal|types?|unbounded|uncommitted|undefined|union|unique|unlock|unpivot|unsigned|updatetext|update|usage|user?|using|values?|var(?:binary|char|character|ying)|view|waitfor|warnings|where|while|with(?: rollup|in)?|work|writetext|write|year)\b/i,
  boolean: /\b(?:false|true|null)\b/i,
  number: /\b0x[a-f\d]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[=%~^/*+-]|&&?|\|\|?|!=?|<<|<=?>?|>[>=]?|\b(?:and|between|div|[ir]?like|in|is|not|x?or|regexp|sounds like)\b/i,
  punctuation: /[()[\].,;`]/
};
_.wasm = {
  comment: /\(;[^]*?;\)|;;.*/,
  string: {
    pattern: /"(?:\\[^]|[^\\"])*"/g,
    greedy: !0
  },
  keyword: [
    {
      pattern: /\b(?:align|offset)=/,
      inside: {
        operator: /=/
      }
    },
    {
      pattern: /\b(?:(?:[fi]32|[fi]64)(?:\.(?:abs|a[dn]d|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|x?or))?|memory\.(?:grow|size))\b/,
      inside: {
        punctuation: /\./
      }
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
  ],
  variable: /\$[\w!#$%&'*./:<=>?@\\^`|~+-]+/,
  number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[a-fA-F\d](?:_?[a-fA-F\d])*(?:\.[a-fA-F\d](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[a-fA-F\d](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/
};
var ye = (e, t) => {
  for (var n = 0; n < t; n++)
    e = e.replace(/<self>/g, `(?:${e})`);
  return e.replace(/<self>/g, "[]");
}, U = (e, t) => e.replace(/<(\d+)>/g, (n, i) => `(?:${t[+i]})`), O = (e, t, n) => RegExp(U(e, t), n), xt = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, Ee = _.cpp = ie("c", {
  "class-name": [
    {
      pattern: RegExp(`(\\b(?:class|concept|enum|struct|typename)\\s+)(?!${xt.source})\\w+`),
      lookbehind: !0
    },
    // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
    // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[a-z_]\w*(?=\s*::\s*~\w+\s*\()/i,
    // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
  ],
  keyword: xt,
  number: {
    pattern: /(?:\b0b[01']+|\b0x(?:[a-f\d']+(?:\.[a-f\d']*)?|\.[a-f\d']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/gi,
    greedy: !0
  },
  operator: /->|--|\+\+|&&|\|\||[?:~]|<=>|>>=?|<<=?|[%&|^!=<>/*+-]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|x?or|x?or_eq)\b/,
  boolean: K
});
$(Ee, "string", {
  module: {
    // https://en.cppreference.com/w/cpp/language/modules
    pattern: O(
      `(\\b(?:import|module)\\s+)(?:"(?:\\\\[\\s\\S]|[^\\\\
"])*"|<[^<>
]*>|<0>(?:\\s*:\\s*<0>)?|:\\s*<0>)`,
      [`\\b(?!${xt.source})\\w+(?:\\s*\\.\\s*\\w+)*\\b`],
      "g"
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      string: /^[<"][^]+/,
      operator: /:/,
      punctuation: /\./
    }
  },
  "raw-string": {
    pattern: /R"([^()\\ ]{0,16})\([^]*?\)\1"/g,
    greedy: !0,
    alias: "string"
  }
});
$(Ee, "keyword", {
  "generic-function": {
    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
    inside: {
      function: /^\w+/,
      generic: {
        pattern: /<[^]+/,
        alias: "class-name",
        inside: Ee
      }
    }
  }
});
$(Ee, "operator", {
  "double-colon": {
    pattern: /::/,
    alias: "punctuation"
  }
});
var zn = Object.assign({}, Ee);
$(Ee, "class-name", {
  // the base clause is an optional list of parent classes
  // https://en.cppreference.com/w/cpp/language/class
  "base-clause": {
    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/g,
    lookbehind: !0,
    greedy: !0,
    inside: zn
  }
});
$(zn, "double-colon", {
  // All untokenized words that are not namespaces should be class names
  "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
});
_.go = {
  comment: se(),
  char: {
    pattern: /'(?:\\.|[^\\\n']){0,10}'/g,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\\n"])*"|`[^`]*`/g,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|true|iota|nil)\b/,
  function: /\b\w+(?=\()/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /--|\+\+|&&|\|\||&\^=?|<-|<<=?|>>=?|[%&|^!=<>/*+-]=?|:=|\.{3}/,
  punctuation: ae,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
};
var ut = {};
_.js = _.javascript = Object.assign(ut, {
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?(?:\*\/|$)/g,
    greedy: !0,
    alias: "comment",
    inside: "jsdoc"
  },
  comment: se(),
  hashbang: {
    pattern: /^#!.*/g,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[^]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}|(?!\$\{)[^\\`])*`/g,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\\\)*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          [Y]: ut
        }
      },
      string: /[^]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ 	]*)(["'])(?:\\[^]|(?!\2)[^\\\n])*\2(?=\s*:)/mg,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  },
  string: Mt(),
  regex: {
    pattern: /((?:^|[^$\w\xa0-\uffff"'`.)\]\s]|\b(?:return|yield))\s*)\/(?:(?:\[(?:\\.|[^\\\n\]])*\]|\\.|[^\\\n/[])+\/[dgimyus]{0,7}|(?:\[(?:\\.|[^\\\n[\]]|\[(?:\\.|[^\\\n[\]]|\[(?:\\.|[^\\\n[\]])*\])*\])*\]|\\.|[^\\\n/[])+\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?!\/\*|[^()[\]{}.,:;?`\n%&|^!=<>/*+-]))/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-flags": /\w+$/,
      "regex-delimiter": /^\/|\/$/,
      "regex-source": {
        pattern: /.+/,
        alias: "language-regex",
        inside: "regex"
      }
    }
  },
  "class-name": [
    {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new)\s+)(?!\d)(?:(?!\s)[$\w.\xa0-\uffff])+/,
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    {
      pattern: /(^|[^$\w\xa0-\uffff]|\s)(?![a-z\d])(?:(?!\s)[$\w\xa0-\uffff])+(?=\.(?:constructor|prototype)\b)/,
      lookbehind: !0
    }
  ],
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^)]*\))*\)|(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+)\s*=>))/,
    alias: "function",
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  parameter: [
    /(function(?:\s+(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    /(^|[^$\w\xa0-\uffff]|\s)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*=>)/,
    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|continue|default|do|else|finally|for|if|return|switch|throw|try|while|yield|class|const|debugger|delete|enum|extends|function|[gs]et|export|from|import|implements|in|instanceof|interface|let|new|null|of|package|private|protected|public|static|super|this|typeof|undefined|var|void|with)(?![$\w\xa0-\uffff]))(?:(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/
  ].map((e) => ({
    pattern: e,
    lookbehind: !0,
    inside: ut
  })),
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  keyword: [
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:as|assert(?=\s*\{)|export|from(?!\s*[^\s"'])|import)\b/,
      alias: "module",
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:await|break|case|catch|continue|default|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow",
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.{3}\s*)\b(?:async(?!\s*[^\s($\w\xa0-\uffff])|class|const|debugger|delete|enum|extends|function|[gs]et(?!\s*[^\s#[$\w\xa0-\uffff])|implements|in|instanceof|interface|let|new|null|of|package|private|protected|public|static|super|this|typeof|undefined|var|void|with)\b/,
      lookbehind: !0
    }
  ],
  boolean: K,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: {
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  number: {
    pattern: /(^|[^$\w])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][a-fA-F\d]+(?:_[a-fA-F\d]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![$\w])/,
    lookbehind: !0
  },
  "literal-property": {
    pattern: /([\n,{][ 	]*)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?=\s*:)/,
    lookbehind: !0,
    alias: "property"
  },
  operator: [
    {
      pattern: /=>/,
      alias: "arrow"
    },
    /--|\+\+|(?:\*\*|&&|\|\||[!=]=|>>>?|<<|[%&|^!=<>/*+-]|\?\?)=?|\.{3}|\?(?!\.)|~|:/
  ],
  "property-access": {
    pattern: /(\.\s*)#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+/,
    lookbehind: !0,
    inside: {
      "maybe-class-name": /^[A-Z].*/
    }
  },
  "maybe-class-name": {
    pattern: /(^|[^$\w\xa0-\uffff])[A-Z][$\w\xa0-\uffff]+/,
    lookbehind: !0
  },
  punctuation: /\?\.|[()[\]{}.,:;]/
});
var Hn = (e) => (t, n) => {
  for (var i = Ct(e), l = "", u = [], b = 0, E = Oe(t, n), y = 0, w = E.length, g = 0; y < w; ) {
    var m = E[y++], p = m.length, c = m.type;
    c && c.slice(0, 6) != "ignore" ? (u[b++] = [g, m], l += " ".repeat(p)) : l += t.slice(g, g + p), g += p;
  }
  var f = 0, g = 0, a = (d) => {
    for (var o = 0; f < b && o < d.length; o++) {
      var s = d[o], h = s.content;
      if (Array.isArray(h))
        a(h);
      else {
        for (var R = s.length, A = [], v, S, N = 0, T = g; ([v, S] = u[f], v >= g && v < g + R) && (T < v && (A[N++] = l.slice(T, v)), T = v + S.length, A[N++] = S, ++f != b); )
          ;
        g += R, N && (T < g && (A[N++] = l.slice(T, g)), h ? s.content = A : (d.splice(o, 1, ...A), o += N - 1));
      }
    }
  }, r = i ? Ne(l, i) : [l];
  return a(r), r;
}, Vn = _.js, Pt = Vn["template-string"], xa = Pt.pattern.source, Aa = Pt.inside.interpolation.pattern, fe = (e, t) => ({
  pattern: RegExp("((?:" + t + ")\\s*)" + xa, "g"),
  lookbehind: !0,
  greedy: !0,
  inside: {
    "template-punctuation": {
      pattern: /^`|`$/,
      alias: "string"
    },
    ["language-" + e]: {
      pattern: /[^]+/,
      inside: {
        interpolation: {
          pattern: Aa,
          lookbehind: !0,
          alias: "language-javascript",
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            [Y]: "js"
          }
        },
        [ee]: Hn(e)
      }
    }
  }
});
Vn["template-string"] = [
  // styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  fe("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),
  // html`<p></p>`
  // div.innerHTML = `<p></p>`
  fe("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),
  // svg`<path fill="#fff" d="M55.37 ..."/>`
  fe("svg", "\\bsvg"),
  // md`# h1`, markdown`## h2`
  fe("markdown", "\\b(?:markdown|md)"),
  // gql`...`, graphql`...`, graphql.experimental`...`
  fe("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),
  // sql`...`
  fe("sql", "\\bsql"),
  // vanilla template string
  Pt
];
var Ge = "\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/", At = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})*\\}", an = U("\\{<0>*\\.{3}(?:[^{}]|<1>)*\\}", [Ge, At]), rn = (e) => e && (!e.type || e.type == "plain-text"), Ia = (e, t, n) => {
  for (var i = 0, l = [], u = 0; i < e.length; i++) {
    var b = e[i], E = b.length, y = b.type, w = !y, m, p, c, f, g;
    y && (g = b.content, y == "tag" ? (c = g[0].length, p = g[2] ? t.substr(n + c, g[1].length) : "", c > 1 ? u && l[u - 1][0] == p && u-- : g[g.length - 1].length < 2 && (l[u++] = [p, 0])) : u && y == "punctuation" ? (m = l[u - 1], g == "{" ? m[1]++ : m[1] && g == "}" ? m[1]-- : w = !"}()[]".includes(g)) : w = !0), w && u && !l[u - 1][1] && (c = n, rn(e[i + 1]) && (E += e[i + 1].length, e.splice(i + 1, 1)), rn(e[i - 1]) && (c -= e[--i].length, e.splice(i, 1)), f = t.slice(c, n + E), e[i] = new be("plain-text", f, f)), n += E;
  }
  return e;
}, Zn = (e, t) => {
  $(_[t] = e = et(e), "regex", {
    tag: {
      pattern: O(
        `</?(?:(?!\\d)[^\\s/=><%]+(?:<0>(?:<0>*(?:[^\\s<>/={*]+(?:<0>*=<0>*(?!\\s)(?:"[^"]*"|'[^']*'|<1>)?|(?=[\\s/>]))|<2>))+)?<0>*/?)?>`,
        [Ge, At, an],
        "g"
      ),
      greedy: !0,
      inside: {
        punctuation: /^<\/?|\/?>$/,
        tag: {
          pattern: /^[^\s/]+/,
          inside: {
            namespace: /^[^:]+:/,
            "class-name": /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
          }
        },
        script: {
          // Allow for two levels of nesting
          pattern: O("(=<0>*)<1>", [Ge, At]),
          lookbehind: !0,
          alias: t = "language-" + t,
          inside: e
        },
        spread: {
          pattern: RegExp(an),
          alias: t,
          inside: e
        },
        "attr-value": {
          pattern: O(`(=<0>*)(?:"[^"]*"|'[^']*')`, [Ge]),
          lookbehind: !0,
          inside: {
            punctuation: /^["']|["']$/
          }
        },
        comment: e.comment,
        "attr-equals": /=/,
        "attr-name": {
          pattern: /\S+/,
          inside: {
            namespace: /^[^:]+:/
          }
        }
      }
    }
  }), e[ee] = (n, i) => Ia(Oe(n, i), n, 0);
};
Zn(_.js, "jsx");
_.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[^]*?\]\1\]|.*)/m,
  // \z may be used to skip the following space
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\n]|\\z\s|\\[^z])*\1|\[(=*)\[[^]*?\]\2\]/g,
    greedy: !0
  },
  number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|true|f?or|function|goto|if|in|local|nil|not|repeat|return|then|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  // Match ".." but don't break "..."
  operator: {
    pattern: /[%&|^#*+-]|\/\/?|<[<=]?|>[>=]?|[=~]=?|(^|[^.])\.\.(?!\.)/,
    lookbehind: !0
  },
  punctuation: /[()[\]{},;]|\.+|:+/
};
var De = "(?:\\((?:\\\\[\\s\\S]|[^\\\\()])*\\)|\\{(?:\\\\[\\s\\S]|[^\\\\{}])*\\}|\\[(?:\\\\[\\s\\S]|[^\\\\[\\]])*\\]|<(?:\\\\[\\s\\S]|[^\\\\<>])*>)", sn = "(?![a-zA-Zd])\\s*(?:([^a-zA-Zd\\s{([<])(?:\\\\[^]|(?!\\1)[^\\\\])*\\1|([a-zA-Zd])(?:\\\\[^]|(?!\\2)[^\\\\])*\\2";
_.perl = {
  comment: [
    {
      // POD
      pattern: /(^\s*)=\w[^]*?=cut.*/mg,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\$])#.*/g,
      lookbehind: !0,
      greedy: !0
    }
  ],
  // TODO Could be nice to handle Heredoc too.
  string: {
    pattern: RegExp(
      `\\bq[qwx]?${sn}|${De})|("|\`)(?:\\\\[^]|(?!\\3)[^\\\\])*\\3|'(?:\\\\.|[^\\\\
'])*'`,
      "g"
    ),
    greedy: !0
  },
  regex: [
    {
      pattern: RegExp(
        `\\b(?:m|qr)${sn}|${De})[msixpodualngc]*`,
        "g"
      ),
      greedy: !0
    },
    // The lookbehinds prevent -s from breaking
    {
      pattern: RegExp(
        `(^|[^-])\\b(?:s|tr|y)(?![a-zA-Zd])\\s*(?:([^a-zA-Zd\\s{([<])(?:\\\\[^]|(?!\\2)[^\\\\])*\\2(?:\\\\[^]|(?!\\2)[^\\\\])*\\2|([a-zA-Zd])(?:\\\\[^]|(?!\\3)[^\\\\])*\\3(?:\\\\[^]|(?!\\3)[^\\\\])*\\3|${De}\\s*${De})[msixpodualngcer]*`,
        "g"
      ),
      lookbehind: !0,
      greedy: !0
    },
    // /.../
    // The look-ahead tries to prevent two divisions on
    // the same line from being highlighted as regex.
    // This does not support multi-line regex.
    {
      pattern: /\/(?:\\.|[^\\\n/])*\/[msixpodualngc]*(?=\s*(?:$|[\n,.;})&|*~<>!?^+-]|(?:and|cmp|eq|[gl][et]|ne|not|x|x?or)\b))/g,
      greedy: !0
    }
  ],
  // FIXME Not sure about the handling of ::, ', and #
  variable: /[&*$@%](?:\{\^[A-Z]+\}|\^[A-Z_]|#?(?=\{)|#?(?:(?:::)*'?(?!\d)[$\w]+(?![$\w]))+(?:::)*|\d+)|(?!%=)[$@%][!"#$%&'*,./:;<=>?@()[\]{}||^_`|~+-]/,
  filehandle: {
    // <>, <FOO>, _
    pattern: /<(?![<=])\S*?>|\b_\b/,
    alias: "symbol"
  },
  "v-string": {
    // v1.2, 1.2.3
    pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
    alias: "string"
  },
  function: {
    pattern: /(\bsub[ 	]+)\w+/,
    lookbehind: !0
  },
  keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number: /\b(?:0x[a-fA-F\d](?:_?[a-fA-F\d])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
  operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|->|=>|=~|~~|<=>?|!~|--|\+\+|(?:\*\*|\/\/|&&|\|\||<<|>>|[~%&|^!=<>/*+-])=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|[gl][et]|ne|not|x?or)\b/,
  punctuation: /[()[\]{},:;]/
};
var on = {
  "format-spec": {
    pattern: /(:)[^(){}:]+(?=\}$)/,
    lookbehind: !0
  },
  "conversion-option": {
    pattern: /![sra](?=[:}]$)/,
    alias: "punctuation"
  }
};
on[Y] = _.py = _.python = {
  comment: {
    pattern: /#.*/g,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:fr?|rf)(?:("""|''')[^]*?\1|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2)/gi,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
        lookbehind: !0,
        inside: on
      },
      string: /[^]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:br?|rb?|u)?("""|''')[^]*?\1/gi,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:br?|rb?|u)?(["'])(?:\\[^]|(?!\1)[^\\\n])*\1/gi,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ 	]+)(?!\d)\w+(?=\s*\()/,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[ 	]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: "annotation punctuation",
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|de[fl]|elif|else|except|exec|finally|f?or|from|global|i[fns]|import|lambda|match|nonlocal|not|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|ma[px]|memoryview|min|next|object|oct|open|ord|pow|property|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|x?range|zip)\b/,
  boolean: /\b(?:False|True|None)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f\d])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /!=|:=|\*\*=?|\/\/=?|<>|>>|<<|[%=<>/*+-]=?|[&|^~]/,
  punctuation: ae
};
var Ra = ye("/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", 2), ln = {
  pattern: /b?"(?:\\[^]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/g,
  greedy: !0
}, cn = {
  "closure-punctuation": {
    pattern: /^\||\|$/,
    alias: "punctuation"
  }
};
cn[Y] = _.rust = {
  comment: {
    pattern: RegExp("//.*|" + Ra, "g"),
    greedy: !0
  },
  string: ln,
  char: {
    pattern: /b?'(?:\\(?:x[0-7][a-fA-F\d]|u\{(?:[a-fA-F\d]_*){1,6}\}|.)|[^\\\n	'])'/g,
    greedy: !0
  },
  attribute: {
    pattern: /#!?\[(?:[^[\]"]|"(?:\\[^]|[^\\"])*")*\]/g,
    greedy: !0,
    alias: "attr-name",
    inside: {
      string: ln
    }
  },
  // Closure params should not be confused with bitwise OR |
  "closure-params": {
    pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/g,
    lookbehind: !0,
    greedy: !0,
    inside: cn
  },
  "lifetime-annotation": {
    pattern: /'\w+/,
    alias: "symbol"
  },
  "fragment-specifier": {
    pattern: /(\$\w+:)[a-z]+/,
    lookbehind: !0,
    alias: "punctuation"
  },
  variable: /\$\w+/,
  "function-definition": {
    pattern: /(\bfn\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "type-definition": {
    pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
    lookbehind: !0,
    alias: "class-name"
  },
  "module-declaration": [
    {
      pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
      lookbehind: !0,
      alias: "namespace"
    },
    {
      pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
      lookbehind: !0,
      alias: "namespace",
      inside: {
        punctuation: /::/
      }
    }
  ],
  // https://github.com/rust-lang/reference/blob/master/src/keywords.md
  // primitives and str
  // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
  keyword: /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield|bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
  // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
  // and Rust's naming conventions recommend snake_case anyway.
  // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
  function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
  macro: {
    pattern: /\b\w+!/,
    alias: "property"
  },
  constant: /\b[A-Z_][A-Z_\d]+\b/,
  "class-name": /\b[A-Z]\w*\b/,
  namespace: {
    pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
    inside: {
      punctuation: /::/
    }
  },
  // Hex, oct, bin, dec numbers with visual separators and type suffix
  number: /\b(?:0x[a-fA-F\d](?:_?[a-fA-F\d])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
  boolean: K,
  punctuation: /->|\.\.=|\.{1,3}|::|[()[\]{},:;]/,
  operator: /&&|\|\||=>|>>=?|<<=?|[%&|^!=<>/*+-]=?|[@?]/
};
var dn = _.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//g,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: /(^|[^"#])(?:"(?:\\(?:\((?:[^()]|\([^)]*\))*\)|[^(])|[^\\\n"])*"|"""(?:\\(?:\((?:[^()]|\([^)]*\))*\)|[^(])|[^\\"]|"(?!""))*""")(?!["#])/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))+(?=\))/,
          lookbehind: !0
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=\n)/,
        string: /[^]+/
      }
    },
    {
      pattern: /(^|[^"#])(#+)(?:"(?:\\(?:#+\((?:[^()]|\([^)]*\))*\)|[^#])|[^\\\n])*?"|"""(?:\\(?:#+\((?:[^()]|\([^)]*\))*\)|[^#])|[^\\])*?""")\2/g,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))+(?=\))/,
          lookbehind: !0
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[^]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: /#(?:(?:elseif|if)\b(?:[ 	]*(?:![ 	]*)?(?:\b\w+\b(?:[ 	]*\((?:[^()]|\([^)]*\))*\))?|\((?:[^()]|\([^)]*\))*\))(?:[ 	]*(?:&&|\|\|))?)+|(?:else|endif)\b)/,
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: K,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b(?!\d)\w+(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|[Pp]rotocol|[Ss]elf|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|[gs]et|guard|higherThan|i[fns]|import|indirect|infix|init|inout|internal|isolated|lazy|lef?t|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|public|repeat|required|rethrows|return|right|safe|some|static|struct|subscript|super|switch|throws?|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: K,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f\d_]+(?:\.[a-f\dp_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[~?%&|^!=<>/*+-]+|\.[.~?%&|^!=<>/*+-]+/,
  punctuation: /[()[\]{}.,:;\\]/
};
dn["string-literal"].forEach((e) => {
  e.inside.interpolation.inside = dn;
});
_.clike = {
  comment: se(),
  string: Mt(),
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: K,
  function: /\b\w+(?=\()/,
  number: Fn,
  operator: /[!=]==|[!=<>]=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: ae
};
var tt = (e) => `\\b(?:${e})\\b`, qn = "bool|char|decimal|double|dynamic|float|object|s?byte|string|u?int|u?long|u?short|var|void", nt = "class|enum|interface|record|struct", Kn = "add|alias|and|ascending|async|await|by|descending|from(?!\\s*[^\\s\\w])|[gls]et|global|group|into|init(?=\\s*;)|join|nameof|not|notnull|on|or|orderby|partial|remove|select|unmanaged|value|when|where|with(?=\\s*{)", $t = "abstract|as|[bc]ase|break|catch|checked|const|continue|default|delegate|do|else|event|explicit|extern|finally|fixed|for|foreach|goto|i[fns]|implicit|internal|lock|namespace|new|null|operator|out|override|params|private|protected|public|readonly|ref|return|sealed|sizeof|stackalloc|static|switch|this|throw|try|typeof|unchecked|unsafe|using|virtual|volatile|while|yield", Wn = tt(nt), Ke = RegExp(tt(qn + "|" + nt + "|" + Kn + "|" + $t)), Sa = tt(nt + "|" + Kn + "|" + $t), ka = tt(qn + "|" + nt + "|" + $t), We = ye("<(?:[^<>;=*/%&|^+-]|<self>)*>", 2), ze = ye("\\((?:[^()]|<self>)*\\)", 2), J = "@?\\b(?!\\d)\\w+\\b", je = U("<0>(?:\\s*<1>)?", [J, We]), de = U("(?!<0>)<1>(?:\\s*\\.\\s*<1>)*", [Sa, je]), Dt = "\\[\\s*(?:,\\s*)*\\]", Ta = U("<0>(?:\\s*(?:\\?\\s*)?<1>)*(?:\\s*\\?)?", [de, Dt]), Na = U("[^()[\\],;%&|^=<>/*+-]|<0>|<1>|<2>", [We, ze, Dt]), Oa = U("\\(<0>+(?:,<0>+)+\\)", [Na]), ge = U("(?:<0>|<1>)(?:\\s*(?:\\?\\s*)?<2>)*(?:\\s*\\?)?", [Oa, de, Dt]), j = {
  keyword: Ke,
  punctuation: /[()[\].,:<>?]/
}, jn = `'(?:\\\\.|[^
'\\\\]|\\\\[Uux][a-fA-F\\d]{1,8})'`, Yn = `"(?:\\\\.|[^\\\\
"])*"`, La = '@"(?:""|\\\\[\\s\\S]|[^\\\\"])*"(?!")', re = _.dotnet = _.cs = _.csharp = ie("clike", {
  string: [
    {
      pattern: O("(^|[^$\\\\])<0>", [La], "g"),
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: O("(^|[^@$\\\\])<0>", [Yn], "g"),
      lookbehind: !0,
      greedy: !0
    }
  ],
  "class-name": [
    {
      // Using static
      // using static System.Math;
      pattern: O("(\\busing\\s+static\\s+)<0>(?=\\s*;)", [de]),
      lookbehind: !0,
      inside: j
    },
    {
      // Using alias (type)
      // using Project = PC.MyCompany.Project;
      pattern: O("(\\busing\\s+<0>\\s*=\\s*)<1>(?=\\s*;)", [J, ge]),
      lookbehind: !0,
      inside: j
    },
    {
      // Using alias (alias)
      // using Project = PC.MyCompany.Project;
      pattern: O("(\\busing\\s+)<0>(?=\\s*=)", [J]),
      lookbehind: !0
    },
    {
      // Type declarations
      // class Foo<A, B>
      // interface Foo<out A, B>
      pattern: O("(\\b<0>\\s+)<1>", [Wn, je]),
      lookbehind: !0,
      inside: j
    },
    {
      // Single catch exception declaration
      // catch(Foo)
      // (things like catch(Foo e) is covered by variable declaration)
      pattern: O("(\\bcatch\\s*\\(\\s*)<0>", [de]),
      lookbehind: !0,
      inside: j
    },
    {
      // Name of the type parameter of generic constraints
      // where Foo : class
      pattern: O("(\\bwhere\\s+)<0>", [J]),
      lookbehind: !0
    },
    {
      // Casts and checks via as and is.
      // as Foo<A>, is Bar<B>
      // (things like if(a is Foo b) is covered by variable declaration)
      pattern: O("(\\b(?:is(?:\\s+not)?|as)\\s+)<0>", [Ta]),
      lookbehind: !0,
      inside: j
    },
    {
      // Variable, field and parameter declaration
      // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
      pattern: O("\\b<0>(?=\\s+(?!<1>|with\\s*\\{)<2>(?:\\s*[=,:;{)\\]]|\\s+(?:in|when)\\b))", [ge, ka, J]),
      inside: j
    }
  ],
  keyword: Ke,
  // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
  number: /(?:\b0(?:x[a-f\d_]*[a-f\d]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[+-]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
  operator: /[=-]>|([&|+-])\1|~|\?\?=?|>>=?|<<=?|[%&|^!=<>/*+-]=?/,
  punctuation: /\?\.?|::|[()[\]{}.,:;]/
});
$(re, "number", {
  range: {
    pattern: /\.\./,
    alias: "operator"
  }
});
$(re, "punctuation", {
  "named-parameter": {
    pattern: O("([(,]\\s*)<0>(?=\\s*:)", [J]),
    lookbehind: !0,
    alias: "punctuation"
  }
});
$(re, "class-name", {
  namespace: {
    // namespace Foo.Bar {}
    // using Foo.Bar;
    pattern: O("(\\b(?:namespace|using)\\s+)<0>(?:\\s*\\.\\s*<0>)*(?=\\s*[;{])", [J]),
    lookbehind: !0,
    inside: {
      punctuation: /\./
    }
  },
  "type-expression": {
    // default(Foo), typeof(Foo<Bar>), sizeof(int)
    pattern: O("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<0>)+(?=\\s*\\))", [ze]),
    lookbehind: !0,
    alias: "class-name",
    inside: j
  },
  "return-type": {
    // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
    // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
    // int Foo => 0; int Foo { get; set } = 0;
    pattern: O("<0>(?=\\s+(?:<1>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [ge, de]),
    alias: "class-name",
    inside: j
  },
  "constructor-invocation": {
    // new List<Foo<Bar[]>> { }
    pattern: O("(\\bnew\\s+)<0>(?=\\s*[[({])", [ge]),
    lookbehind: !0,
    alias: "class-name",
    inside: j
  },
  /*'explicit-implementation': {
  	// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
  	pattern: replace(/\b<0>(?=\.<1>)/, className, methodOrPropertyDeclaration),
  	inside: classNameInside,
  	alias: 'class-name'
  },*/
  "generic-method": {
    // foo<Bar>()
    pattern: O("<0>\\s*<1>(?=\\s*\\()", [J, We]),
    inside: {
      function: O("^<0>", [J]),
      generic: {
        pattern: RegExp(We),
        alias: "class-name",
        inside: j
      }
    }
  },
  "type-list": {
    // The list of types inherited or of generic constraints
    // class Foo<F> : Bar, IList<FooBar>
    // where F : Bar, IList<int>
    pattern: O(
      "\\b((?:<0>\\s+<1>|record\\s+<1>\\s*<5>|where\\s+<2>)\\s*:\\s*)(?:<3>|<4>|<1>\\s*<5>|<6>)(?:\\s*,\\s*(?:<3>|<4>|<6>))*(?=\\s*(?:where|[{;]|=>|$))",
      [Wn, je, J, ge, Ke.source, ze, "\\bnew\\s*\\(\\s*\\)"]
    ),
    lookbehind: !0,
    inside: {
      "record-arguments": {
        pattern: O("(^(?!new\\s*\\()<0>\\s*)<1>", [je, ze], "g"),
        lookbehind: !0,
        greedy: !0,
        inside: re
      },
      keyword: Ke,
      "class-name": {
        pattern: RegExp(ge, "g"),
        greedy: !0,
        inside: j
      },
      punctuation: /[(),]/
    }
  },
  preprocessor: {
    pattern: /(^[ 	]*)#.*/m,
    lookbehind: !0,
    alias: "property",
    inside: {
      // highlight preprocessor directives as keywords
      directive: {
        pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
        lookbehind: !0,
        alias: "keyword"
      }
    }
  }
});
var Xn = Yn + "|" + jn, Qn = U(`/(?![*/])|//[^
]*
|/\\*(?:[^*]|\\*(?!/))*\\*/|<0>`, [Xn]), Jn = ye(U(`[^()"'/]|<0>|\\(<self>*\\)`, [Qn]), 2), un = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", Ca = U("<0>(?:\\s*\\(<1>*\\))?", [de, Jn]), Ft = `:[^
}]+`, ea = ye(U(`[^()"'/]|<0>|\\(<self>*\\)`, [Qn]), 2), pn = U("\\{(?!\\{)(?:(?![}:])<0>)*<1>?\\}", [ea, Ft]), ta = ye(U(`[^()"'/]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<0>|\\(<self>*\\)`, [Xn]), 2), fn = U("\\{(?!\\{)(?:(?![}:])<0>)*<1>?\\}", [ta, Ft]), bn = (e, t) => ({
  interpolation: {
    pattern: O("((?:^|[^{])(?:\\{\\{)*)<0>", [e]),
    lookbehind: !0,
    inside: {
      "format-string": {
        pattern: O("(^\\{(?:(?![}:])<0>)*)<1>(?=\\}$)", [t, Ft]),
        lookbehind: !0,
        inside: {
          punctuation: /^:/
        }
      },
      punctuation: /^\{|\}$/,
      expression: {
        pattern: /[^]+/,
        alias: "language-csharp",
        inside: re
      }
    }
  },
  string: /[^]+/
});
$(re, "class-name", {
  attribute: {
    // Attributes
    // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
    pattern: O("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<0>\\s*:\\s*)?<1>(?:\\s*,\\s*<1>)*(?=\\s*\\])", [un, Ca], "g"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      target: {
        pattern: O("^<0>(?=\\s*:)", [un]),
        alias: "keyword"
      },
      "attribute-arguments": {
        pattern: O("\\(<0>*\\)", [Jn]),
        inside: re
      },
      "class-name": {
        pattern: RegExp(de),
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /[,:]/
    }
  }
});
$(re, "string", {
  "interpolation-string": [
    {
      pattern: O('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[\\s\\S]|\\{\\{|<0>|[^\\\\{"])*"', [pn], "g"),
      lookbehind: !0,
      greedy: !0,
      inside: bn(pn, ea)
    },
    {
      pattern: O('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<0>|[^\\\\"{])*"', [fn], "g"),
      lookbehind: !0,
      greedy: !0,
      inside: bn(fn, ta)
    }
  ],
  char: {
    pattern: RegExp(jn, "g"),
    greedy: !0
  }
});
_.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|"(?!""))*"""|"(?:\\.|[^\\\n"])*")(?=\s*[a-z_])/gi,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /("(?!")|""")[^]+(?=\1)/,
        lookbehind: !0,
        inside: "md"
      }
    }
  },
  string: {
    pattern: /"""[^]*?"""|"(?:\\.|[^\\\n"])*"/g,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: K,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\\n"])*")*\))?:)/gi,
    greedy: !0
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)(?!\d)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[&|!=]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[()[\]{},:!=]/,
  property: /\w+/,
  [ee](e, t) {
    for (var n = Oe(e, t), i = n.filter(({ type: a }) => a && a != "comment" && a != "scalar"), l = i.length, u = 0, b = (a) => {
      for (var r = 0; r < a.length; r++)
        if (u + r == l || i[u + r].type != a[r])
          return !0;
    }, E = (a, r) => {
      for (var d = 1, o = u; o < l; o++) {
        var s = i[o], h = s.content;
        if (s.type == "punctuation") {
          if (a == h)
            d++;
          else if (r == h && !--d)
            return o;
        }
      }
    }; u < l; ) {
      var y = i[u++];
      if (y.type == "keyword" && y.content == "mutation") {
        var w = [];
        if (!b(["definition-mutation", "punctuation"]) && i[u + 1].content == "(") {
          u += 2;
          var m = E("(", ")");
          if (!m) continue;
          for (; u < m; u++) {
            var p = i[u];
            p.type == "variable" && (p.alias = "variable-input", w.push(p.content));
          }
          u = m + 1;
        }
        if (!b(["punctuation", "property-query"]) && i[u].content == "{" && (i[++u].alias = "property-mutation", w[0])) {
          var c = E("{", "}");
          if (c) for (var f = u; f < c; f++) {
            var g = i[f];
            g.type == "variable" && w.indexOf(g.content) >= 0 && (g.alias = "variable-input");
          }
        }
      }
    }
    return n;
  }
};
_.webmanifest = _.json = {
  property: {
    pattern: /"(?:\\.|[^\\\n"])*"(?=\s*:)/g,
    greedy: !0
  },
  string: {
    pattern: /"(?:\\.|[^\\\n"])*"/g,
    greedy: !0
  },
  comment: se(),
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  operator: /:/,
  punctuation: /[[\]{},]/,
  boolean: K,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
_.makefile = {
  comment: /#(?:\\[^]|[^\\\n])*/,
  string: Mt(),
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  target: {
    pattern: /^(?:[^:=\s]|[ 	]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|override|private|s?include|undefine|unexport|vpath)\b/,
  function: {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ 	])/,
    lookbehind: !0
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/
};
var Ut = _.scss = ie("css", {
  comment: se(),
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/,
      [Y]: "scss"
    }
  },
  // url, compassified
  url: /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  selector: {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?!\s)[^@;(){}]?(?:[^@;(){}\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
$(Ut, "atrule", {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    {
      pattern: /( )(?:from|through)(?= )/,
      lookbehind: !0
    }
  ]
});
$(Ut, "important", {
  // var and interpolated vars
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
});
$(Ut, "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: K,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[%/*+-]|[!=]=|[<>]=?|and|not|or)(?!\S)/,
    lookbehind: !0
  }
});
var na = {
  pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/g,
  lookbehind: !0,
  greedy: !0
}, ve = _.ts = _.typescript = ie("js", {
  "class-name": na
});
$(ve, "operator", {
  builtin: /\b(?:Array|Function|Promise|any|boolean|never|number|string|symbol|unknown)\b/
});
ve.keyword.push(
  /\b(?:abstract|declare|is|keyof|readonly|require)\b|\b(?:asserts|infer|interface|module|namespace|type)\b(?!\s*[^\s{_$a-zA-Z\xa0-\uffff])|\btype(?=\s*\*)/
);
delete ve.parameter;
delete ve["literal-property"];
var Bt = na.inside = Object.assign({}, ve);
delete Bt["class-name"];
delete Bt["maybe-class-name"];
$(ve, "function", {
  decorator: {
    pattern: /@[$\w\xa0-\uffff]+/,
    inside: {
      at: {
        pattern: /^@/,
        alias: "operator"
      },
      function: /.+/
    }
  },
  "generic-function": {
    // e.g. foo<T extends "bar" | "baz">( ...
    pattern: /#?(?!\d)(?:(?!\s)[$\w\xa0-\uffff])+\s*<(?:[^<>=]|=[^<]|=?<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/g,
    greedy: !0,
    inside: {
      generic: {
        pattern: /<[^]+/,
        // everything after the first <
        alias: "class-name",
        inside: Bt
      },
      function: /\S+/
    }
  }
});
Zn(_.ts, "tsx");
var It = _.tsx.tag, aa = "(?:^|(";
try {
  RegExp("(?<=)"), aa += "?<=";
} catch {
  It.lookbehind = !0;
}
It.pattern = RegExp(aa + `[^\\w$])|(?=</))${It.pattern.source}`, "g");
var Rt = /[*&][^\s[\]{},]+/, St = /!(?:<[\w%#;/?:@&=$,.!~*'()[\]+-]+>|(?:[a-zA-Z\d-]*!)?[\w%#;/?:@&=$.~*'()+-]+)?/, kt = `(?:${St.source}(?:[ 	]+${Rt.source})?|${Rt.source}(?:[ 	]+${St.source})?)`, Ma = U(
  "(?:[^\\s\0-\\x08\\x0e-\\x1f!\"#%&'*,:>?@[\\]{}`|\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff-]|[?:-]<0>)(?:[ 	]*(?:(?![#:])<0>|:<0>))*",
  ["[^\\s\0-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"]
), gn = `"(?:\\\\.|[^\\\\
"])*"|'(?:\\\\.|[^\\\\
'])*'`, Ie = (e, t) => O(
  `([:,[{-]\\s*(?:\\s<0>[ 	]+)?)<1>(?=[ 	]*(?:$|,|\\]|\\}|(?:
\\s*)?#))`,
  [kt, e],
  t
);
_.yml = _.yaml = {
  scalar: {
    pattern: O(`([:-]\\s*(?:\\s<0>[ 	]+)?[|>])[ 	]*(?:(
[ 	]+)\\S.*(?:\\2.+)*)`, [kt]),
    lookbehind: !0,
    alias: "string"
  },
  comment: /#.*/,
  key: {
    pattern: O(
      `((?:^|[:,[{
?-])[ 	]*(?:<0>[ 	]+)?)<1>(?=\\s*:\\s)`,
      [kt, "(?:" + Ma + "|" + gn + ")"],
      "g"
    ),
    lookbehind: !0,
    greedy: !0,
    alias: "atrule"
  },
  directive: {
    pattern: /(^[ 	]*)%.+/m,
    lookbehind: !0,
    alias: "important"
  },
  datetime: {
    pattern: Ie("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d\\d:\\d\\d(?:\\.\\d*)?(?:[ 	]*(?:Z|[+-]\\d\\d?(?::\\d\\d)?))?|\\d{4}-\\d\\d-\\d\\d|\\d\\d?:\\d\\d(?::\\d\\d(?:\\.\\d*)?)?", "m"),
    lookbehind: !0,
    alias: "number"
  },
  boolean: {
    pattern: Ie("false|true", "im"),
    lookbehind: !0,
    alias: "important"
  },
  null: {
    pattern: Ie("null|~", "im"),
    lookbehind: !0,
    alias: "important"
  },
  string: {
    pattern: Ie(gn, "mg"),
    lookbehind: !0,
    greedy: !0
  },
  number: {
    pattern: Ie("[+-]?(?:0x[a-f\\d]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "im"),
    lookbehind: !0
  },
  tag: St,
  important: Rt,
  punctuation: /---|[:[\]{},|>?-]|\.{3}/
};
var mn = {
  pattern: /\\[\\()[\]{}^$+*?|.]/,
  alias: "escape"
}, He = /\\(?:x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|u\{[a-fA-F\d]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, Pa = {
  pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
  alias: "class-name"
}, $a = {
  pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
  alias: "class-name"
}, hn = "(?:[^\\\\-]|" + He.source + ")", Da = RegExp(hn + "-" + hn), _n = {
  pattern: /(<|')[^<>']+(?=[>']$)/,
  lookbehind: !0,
  alias: "variable"
};
_.regex = {
  "char-class": {
    pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:\\[^]|[^\\\]])*\]/,
    lookbehind: !0,
    inside: {
      "char-class-punctuation": {
        pattern: /^.|.$/g,
        greedy: !0,
        alias: "punctuation"
      },
      "char-class-negation": {
        pattern: /^\^/,
        alias: "operator"
      },
      range: {
        pattern: Da,
        inside: {
          escape: He,
          "range-punctuation": {
            pattern: /-/,
            alias: "operator"
          }
        }
      },
      "special-escape": mn,
      "char-set": $a,
      escape: He
    }
  },
  "special-escape": mn,
  "char-set": Pa,
  backreference: [
    {
      // a backreference which is not an octal escape
      pattern: /\\(?![123][0-7]{2})[1-9]/,
      alias: "keyword"
    },
    {
      pattern: /\\k<[^<>']+>/,
      alias: "keyword",
      inside: {
        "group-name": _n
      }
    }
  ],
  anchor: {
    pattern: /[$^]|\\[ABbGZz]/,
    alias: "function"
  },
  escape: He,
  group: [
    {
      // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
      // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs
      // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
      pattern: /(\()\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[!=]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?)/,
      lookbehind: !0,
      inside: {
        "group-name": _n
      }
    },
    {
      pattern: /[()]/,
      alias: "punctuation"
    }
  ],
  quantifier: {
    pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
    alias: "number"
  },
  alternation: {
    pattern: /\|/,
    alias: "keyword"
  }
};
var En = /\/\*[^]*?\*\/|\/\/.*|#(?!\[).*/, yn = [
  {
    pattern: /\b(?:false|true)\b/i,
    alias: "boolean"
  },
  {
    pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/gi,
    lookbehind: !0,
    greedy: !0
  },
  {
    pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/gi,
    lookbehind: !0,
    greedy: !0
  },
  /\b(?:null)\b/i,
  /\b[A-Z_][A-Z\d_]*\b(?!\s*\()/
], vn = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[a-f\d]+(?:_[a-f\d]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, wn = /<?=>|\?\?=?|\.{3}|\??->|[!=]==|::|--|\+\+|&&|\*\*=?|\|\||>>|<<|[?~]|[.%&|^!=<>/*+-]=?/, Tt = {
  pattern: /\{\$(?:[^{}]|\{(?:[^{}]|\{[^}]+\})*\})*\}|(^|[^\\{])\$+(?:\w+(?:\[[^\n[\]]*\]|->\w+)?)/,
  lookbehind: !0
}, xn = [
  {
    pattern: /<<<'([^']+)'\n(?:.*\n)*?\1;/g,
    alias: "nowdoc-string",
    greedy: !0,
    inside: {
      delimiter: {
        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<<'?|[';]$/
        }
      }
    }
  },
  {
    pattern: /<<<(?:"([^"]+)"\n(?:.*\n)*?\1;|([a-z_]\w*)\n(?:.*\n)*?\2;)/gi,
    greedy: !0,
    alias: "heredoc-string",
    inside: {
      delimiter: {
        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<<"?|[";]$/
        }
      },
      interpolation: Tt
    }
  },
  {
    pattern: /`(?:\\[^]|[^\\`])*`/g,
    alias: "backtick-quoted-string",
    greedy: !0
  },
  {
    pattern: /'(?:\\[^]|[^\\'])*'/g,
    greedy: !0,
    alias: "single-quoted-string"
  },
  {
    pattern: /"(?:\\[^]|[^\\"])*"/g,
    greedy: !0,
    alias: "double-quoted-string",
    inside: {
      interpolation: Tt
    }
  }
], An = Tt.inside = {
  delimiter: {
    pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
    alias: "important"
  },
  "doc-comment": {
    pattern: /\/\*\*(?!\/)[^]*?\*\//g,
    greedy: !0,
    alias: "comment",
    inside: "phpdoc"
  },
  comment: En,
  string: xn,
  attribute: {
    pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*')+\](?=\s*[a-z$#])/img,
    greedy: !0,
    inside: {
      "attribute-content": {
        pattern: /^(..)[^]+(?=.)/,
        lookbehind: !0,
        // inside can appear subset of php
        inside: {
          comment: En,
          string: xn,
          "attribute-class-name": [
            {
              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/gi,
              lookbehind: !0,
              greedy: !0,
              alias: "class-name"
            },
            {
              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/gi,
              lookbehind: !0,
              greedy: !0,
              alias: "class-name class-name-fully-qualified",
              inside: {
                punctuation: /\\/
              }
            }
          ],
          constant: yn,
          number: vn,
          operator: wn,
          punctuation: ae
        }
      },
      delimiter: {
        pattern: /.+/,
        alias: "punctuation"
      }
    }
  },
  variable: /\$+(?:\w+|(?=\{))/,
  package: {
    pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
    lookbehind: !0,
    inside: {
      punctuation: /\\/
    }
  },
  "class-name-definition": {
    pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
    lookbehind: !0,
    alias: "class-name"
  },
  "function-definition": {
    pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
    lookbehind: !0,
    alias: "function"
  },
  keyword: [
    {
      pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-casting"
    },
    {
      pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-hint"
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "return-type"
    },
    {
      pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/gi,
      alias: "type-declaration",
      greedy: !0
    },
    {
      pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-declaration"
    },
    {
      pattern: /\b(?:parent|self|static)(?=\s*::)/gi,
      greedy: !0,
      alias: "static-context"
    },
    {
      // yield from
      pattern: /(\byield\s+)from\b/gi,
      lookbehind: !0
    },
    // `class` is always a keyword unlike other keywords
    /\bclass\b/i,
    {
      // https://www.php.net/manual/en/reserved.keywords.php
      //
      // keywords cannot be preceded by "->"
      // the complex lookbehind means `(?<!(?:->|::)\s*)`
      pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|[fx]?or|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|yield|__halt_compiler)\b/i,
      lookbehind: !0
    }
  ],
  "argument-name": {
    pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
    lookbehind: !0
  },
  "class-name": [
    {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/gi,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/gi,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/gi,
      greedy: !0
    },
    {
      pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /\b[a-z_]\w*(?=\s*\$)/gi,
      greedy: !0,
      alias: "type-declaration"
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified type-declaration",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /\b[a-z_]\w*(?=\s*::)/gi,
      greedy: !0,
      alias: "static-context"
    },
    {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/gi,
      greedy: !0,
      alias: "class-name-fully-qualified static-context",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "type-hint"
    },
    {
      pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified type-hint",
      inside: {
        punctuation: /\\/
      }
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/gi,
      alias: "return-type",
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/gi,
      lookbehind: !0,
      greedy: !0,
      alias: "class-name-fully-qualified return-type",
      inside: {
        punctuation: /\\/
      }
    }
  ],
  constant: yn,
  function: {
    pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
    lookbehind: !0,
    inside: {
      punctuation: /\\/
    }
  },
  property: {
    pattern: /(->\s*)\w+/,
    lookbehind: !0
  },
  number: vn,
  operator: wn,
  punctuation: ae
}, Fa = Hn("html");
_.php = {
  php: {
    pattern: /<\?(?:[^"'/#]|\/(?![*/])|(["'])(?:\\[^]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^\n?]|\?(?!>))*(?=$|\?>|\n)|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/,
    alias: "language-php",
    inside: An
  },
  [ee]: (e, t) => e.includes("<?") ? Fa(e, t) : Ne(e, An)
};
var Ua = [`(?:\\\\.|[^\\\\
]|
(?!
))`], Fe = (e) => O(`((?:^|[^\\\\])(?:\\\\\\\\)*)(?:${e})`, Ua, "g"), Nt = /(?:\\.|``(?:[^\n`]|`(?!`))+``|`[^\n`]+`|[^\\\n|`])+/, In = U(`\\|?<0>(?:\\|<0>)+\\|?(?:
|(?![\\s\\S]))`, [Nt.source]), Ba = `\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?
`, me = _.md = _.markdown = et(_.html);
$(me, "prolog", {
  "front-matter-block": {
    pattern: /(^(?:\s*\n)?)---(?!.)[^]*?\n---(?!.)/g,
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^---|---$/,
      "front-matter": {
        pattern: /\S(?:[^]*\S)?/,
        alias: "language-yaml",
        inside: "yaml"
      }
    }
  },
  blockquote: {
    // > ...
    pattern: /^>(?:[ 	]*>)*/m,
    alias: "punctuation"
  },
  table: {
    pattern: RegExp("^" + In + Ba + "(?:" + In + ")*", "m"),
    inside: {
      "table-header-row": {
        pattern: /^.+/,
        inside: {
          "table-header": {
            pattern: Nt,
            alias: "important",
            inside: me
          },
          punctuation: /\|/
        }
      },
      "table-data-rows": {
        pattern: /(.+\n)[^]+/,
        lookbehind: !0,
        inside: {
          "table-data": {
            pattern: Nt,
            inside: me
          },
          punctuation: /\|/
        }
      },
      "table-line": {
        pattern: /.+/,
        inside: {
          punctuation: /\S+/
        }
      }
    }
  },
  code: [
    {
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /(^[ 	]*\n)(?:    |	).+(?:\n(?:    |	).+)*/m,
      lookbehind: !0,
      alias: "keyword"
    },
    {
      // ```optional language
      // code block
      // ```
      pattern: /^(```+)[^`][^]*?^\1`*$/mg,
      greedy: !0,
      inside: {
        punctuation: /^`+|`+$/,
        "code-language": /^.+/,
        "code-block": /(?!^)[^]+(?=\n)/,
        [ee](e, t) {
          var n = Oe(e, t), i;
          return n[5] && (i = (/[a-z][\w-]*/i.exec(
            n[1].content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp")
          ) || [""])[0].toLowerCase(), n[3].alias = "language-" + i, (t = _[i]) && (n[3].content = Ne(n[3].content, t))), n;
        }
      }
    }
  ],
  title: [
    {
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*\n(?:==+|--+)(?=[ 	]*$)/m,
      alias: "important",
      inside: {
        punctuation: /=+$|-+$/
      }
    },
    {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }
  ],
  hr: {
    // ***
    // ---
    // * * *
    // -----------
    pattern: /(^\s*)([*-])(?:[ 	]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  list: {
    // * item
    // + item
    // - item
    // 1. item
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[ 	].)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  "url-reference": {
    // [id]: http://example.com "Optional title"
    // [id]: http://example.com 'Optional title'
    // [id]: http://example.com (Optional title)
    // [id]: <http://example.com> "Optional title"
    pattern: /!?\[[^\]]+\]:[ 	]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[ 	]+(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: !0
      },
      string: /(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[[\]!:]|<|>/
    },
    alias: "url"
  },
  bold: {
    // **strong**
    // __strong__
    // allow one nested instance of italic text using the same delimiter
    pattern: Fe("\\b__(?:(?!_)<0>|_(?:(?!_)<0>)+_)+__\\b|\\*\\*(?:(?!\\*)<0>|\\*(?:(?!\\*)<0>)+\\*)+\\*\\*"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      content: {
        pattern: /(^..)[^]+(?=..)/,
        lookbehind: !0,
        inside: {}
        // see below
      },
      punctuation: /../
    }
  },
  italic: {
    // *em*
    // _em_
    // allow one nested instance of bold text using the same delimiter
    pattern: Fe("\\b_(?:(?!_)<0>|__(?:(?!_)<0>)+__)+_\\b|\\*(?:(?!\\*)<0>|\\*\\*(?:(?!\\*)<0>)+\\*\\*)+\\*"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      content: {
        pattern: /(?!^)[^]+(?=.)/,
        inside: {}
        // see below
      },
      punctuation: /./
    }
  },
  strike: {
    // ~~strike through~~
    // ~strike~
    // eslint-disable-next-line regexp/strict
    pattern: Fe("(~~?)(?:(?!~)<0>)+\\2"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      punctuation: /^~~?|~~?$/,
      content: {
        pattern: /[^]+/,
        inside: {}
        // see below
      }
    }
  },
  "code-snippet": {
    // `code`
    // ``code``
    pattern: /(^|[^\\`])(?:``[^\n`]+(?:`[^\n`]+)*``(?!`)|`[^\n`]+`(?!`))/g,
    lookbehind: !0,
    greedy: !0,
    alias: "code keyword"
  },
  url: {
    // [example](http://example.com "Optional title")
    // [example][id]
    // [example] [id]
    pattern: Fe('!?\\[(?:(?!\\])<0>)+\\](?:\\([^\\s)]+(?:[ 	]+"(?:\\\\.|[^\\\\"])*")?\\)|[ 	]?\\[(?:(?!\\])<0>)+\\])'),
    lookbehind: !0,
    greedy: !0,
    inside: {
      operator: /^!/,
      content: {
        pattern: /(^\[)[^\]]+(?=\])/,
        lookbehind: !0,
        inside: {}
        // see below
      },
      variable: {
        pattern: /(^\][ 	]?\[)[^\]]+(?=\]$)/,
        lookbehind: !0
      },
      url: {
        pattern: /(^\]\()[^\s)]+/,
        lookbehind: !0
      },
      string: {
        pattern: /(^[ 	]+)"(?:\\.|[^\\"])*"(?=\)$)/,
        lookbehind: !0
      },
      "markup-bracket": me["markup-bracket"]
    }
  }
});
["url", "bold", "italic", "strike"].forEach((e) => {
  ["url", "bold", "italic", "strike", "code-snippet", "markup-bracket"].forEach((t) => {
    e != t && (me[e].inside.content.inside[t] = me[t]);
  });
});
const Ga = (e, t, ...n) => {
  var X;
  let i, l, u = [], b, E = "", y, w = !1, m = !1, p = !0, c = [], f, g = 0;
  const a = Ha(), r = a.firstChild, d = r.children, o = d[0], s = o.firstChild, h = { language: "text", value: E }, R = new Set(n), A = {}, v = (x) => {
    if (Object.assign(h, x), E = x.value ?? E, i = h.language, !_[i]) throw Error(`Language '${i}' has no grammar.`);
    f = !!h.readOnly, a.style.tabSize = h.tabSize || 2, s.inputMode = f ? "none" : "", s.setAttribute("aria-readonly", f), T(), N(), (l != (l = _[i]) || E != s.value) && (Z(), s.value = E, s.selectionEnd = 0, S());
  }, S = () => {
    c = Ne(E = s.value, l), H("tokenize", c, i, E);
    let x = Cn(c).split(`
`), I = 0, C = g, q = g = x.length;
    for (; x[I] == u[I] && I < q; ) ++I;
    for (; q && x[--q] == u[--C]; ) ;
    if (I == q && I == C) d[I + 1].innerHTML = x[I] + `
`;
    else {
      let Q = C < I ? C : I - 1, W = Q, we = "";
      for (; W < q; ) we += `<div class=pce-line aria-hidden=true>${x[++W]}
</div>`;
      for (W = q < I ? q : I - 1; W < C; W++) d[I + 1].remove();
      for (we && d[Q + 1].insertAdjacentHTML("afterend", we), W = Q + 1; W < g; ) d[++W].setAttribute("data-line", W);
      a.style.setProperty(
        "--number-width",
        Math.ceil(Math.log10(g + 1)) + ".001ch"
      );
    }
    H("update", E), B(!0), p && setTimeout(setTimeout, 0, () => p = !0), u = x, p = !1;
  }, N = (x) => {
    (x || R).forEach((I) => {
      typeof I == "object" ? (I.update(D, h), x && R.add(I)) : (I(D, h), x || R.delete(I));
    });
  }, T = ([x, I] = L()) => {
    a.className = `prism-code-editor language-${i}${h.lineNumbers == !1 ? "" : " show-line-numbers"} pce-${h.wordWrap ? "" : "no"}wrap${h.rtl ? " pce-rtl" : ""} pce-${x < I ? "has" : "no"}-selection${m ? " pce-focus" : ""}${f ? " pce-readonly" : ""}`;
  }, L = () => [
    s.selectionStart,
    s.selectionEnd,
    s.selectionDirection
  ], P = {
    Escape() {
      s.blur();
    }
  }, M = {}, Z = () => Ve && !m && z(
    D,
    "focus",
    (x) => {
      let I = x.relatedTarget;
      I ? I.focus() : s.blur();
    },
    { once: !0 }
  ), H = (x, ...I) => {
    var C, q;
    (C = A[x]) == null || C.forEach((Q) => Q.apply(D, I)), (q = h["on" + x[0].toUpperCase() + x.slice(1)]) == null || q.apply(D, I);
  }, B = (x) => {
    if (x || p) {
      const I = L(), C = d[y = ia(E, 0, I[I[2] < "f" ? 0 : 1])];
      C != b && (b == null || b.classList.remove("active-line"), C.classList.add("active-line"), b = C), T(I), H("selectionChange", I, E);
    }
  }, D = {
    scrollContainer: a,
    wrapper: r,
    overlays: o,
    textarea: s,
    get activeLine() {
      return b;
    },
    get activeLineNumber() {
      return y;
    },
    get value() {
      return E;
    },
    options: h,
    get focused() {
      return m;
    },
    get removed() {
      return w;
    },
    get tokens() {
      return c;
    },
    inputCommandMap: M,
    keyCommandMap: P,
    extensions: {},
    setOptions: v,
    update: S,
    getSelection: L,
    setSelection(x, I = x, C) {
      Z(), s.setSelectionRange(x, I, C), B(!0);
    },
    addExtensions(...x) {
      N(x);
    },
    addListener(x, I) {
      (A[x] || (A[x] = /* @__PURE__ */ new Set())).add(I);
    },
    removeListener(x, I) {
      var C;
      (C = A[x]) == null || C.delete(I);
    },
    remove() {
      a.remove(), w = !0;
    }
  };
  return z(D, "keydown", (x) => {
    var I;
    (I = P[x.key]) != null && I.call(P, x, L(), E) && G(x);
  }), z(D, "beforeinput", (x) => {
    var I;
    (f || x.inputType == "insertText" && ((I = M[x.data]) != null && I.call(M, x, L(), E))) && G(x);
  }), z(D, "input", S), z(D, "blur", () => {
    Te = null, m = !1, T();
  }), z(D, "focus", () => {
    Te = B, m = !0, T();
  }), z(D, "selectionchange", (x) => {
    B(), G(x);
  }), (X = za(e)) == null || X.append(a), t && v(t), D;
}, Rn = /* @__PURE__ */ document.createElement("div"), at = (e) => {
  Rn.innerHTML = e;
  const t = Rn.firstChild;
  return () => t.cloneNode(!0);
}, z = (e, t, n, i) => e.textarea.addEventListener(t, n, i), za = (e) => typeof e == "string" ? document.querySelector(e) : e, ra = navigator.userAgent, Ye = /Mac|iPhone|iPod|iPad/i.test(navigator.platform), Xe = /Chrome\//.test(ra), Ve = !Xe && /AppleWebKit\//.test(ra), ia = (e, t = 0, n = 1 / 0) => {
  let i = 1;
  for (; (t = e.indexOf(`
`, t) + 1) && t <= n; i++) ;
  return i;
}, pt = {}, Ha = /* @__PURE__ */ at(
  "<div><div class=pce-wrapper><div class=pce-overlays><textarea spellcheck=false autocapitalize=off autocomplete=off>"
), G = (e) => {
  e.preventDefault(), e.stopImmediatePropagation();
};
let Te;
document.addEventListener("selectionchange", () => Te == null ? void 0 : Te());
const Va = (e, t, n = 0) => {
  const i = e.scrollContainer.style, l = document.documentElement.style;
  i.scrollPaddingBlock = l.scrollPaddingBlock = `${n}px ${Xe && !t.textContent ? t.offsetHeight : 0}px`, t.scrollIntoView({ block: "nearest" }), i.scrollPaddingBlock = l.scrollPaddingBlock = "";
}, Qe = (e, t) => t ? e.lastIndexOf(`
`, t - 1) + 1 : 0, rt = (e, t) => (t = e.indexOf(`
`, t)) + 1 ? t : e.length, Za = (e, t, n) => (e.addListener(t, n), () => e.removeListener(t, n)), qa = (e, t) => parseFloat(getComputedStyle(e)[t]);
let he;
const Re = (e) => e.replace(/[$+?|.^*()[\]{}\\]/g, "\\$&"), Ot = (e, t) => e.slice(Qe(e, t), t), te = (e, t, n = t) => [
  e.slice(t = Qe(e, t), n = rt(e, n)).split(`
`),
  t,
  n
], Je = (e, t, n = 0, i = n, l = e.getSelection()[0]) => {
  var m;
  const u = e.value, b = e.wrapper.children[ia(u, 0, l)], E = document.createTreeWalker(b, 5);
  let y = E.lastChild(), w = rt(u, l) + 1 - l - y.length;
  for (; -w <= i && (y = E.previousNode()); )
    if (!y.lastChild && (w -= y.length || 0, w <= n)) {
      for (; y != b; y = y.parentNode)
        if ((m = y.matches) != null && m.call(y, t)) return y;
    }
}, ft = (e, t) => {
  var n;
  return ((n = Je(e, '[class*="language-"]', 0, 0, t)) == null ? void 0 : n.className.match(
    /language-(\S*)/
  )[1]) || e.options.language;
}, V = (e, t, n, i, l, u) => {
  if (e.options.readOnly) return;
  he = e.getSelection(), i ?? (i = n);
  let b = e.textarea, E = e.value, y = Xe && !E[i ?? he[1]] && /\n$/.test(t) && /^$|\n$/.test(E), w;
  e.focused || b.focus(), n != null && b.setSelectionRange(n, i), l != null && (w = Za(e, "update", () => {
    b.setSelectionRange(
      l,
      u ?? l,
      he[2]
    ), w();
  })), Ve || b.dispatchEvent(new InputEvent("beforeinput", { data: t })), Xe || Ve ? (y && (b.selectionEnd--, t = t.slice(0, -1)), Ve && (t += `
`), document.execCommand(
    t ? "insertHTML" : "delete",
    !1,
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;")
  ), y && b.selectionStart++) : document.execCommand(t ? "insertText" : "delete", !1, t), he = 0;
}, ke = (e) => e.altKey + e.ctrlKey * 2 + e.metaKey * 4 + e.shiftKey * 8;
let Lt = !1;
const Sn = navigator.clipboard, ce = Ye ? 4 : 2, Ka = (e) => Lt = e, le = (e) => e.search(/\S|$/), Wa = (e = ['""', "''", "``", "()", "[]", "{}"], t = /([^$\w'"`]["'`]|.[[({])[.,:;\])}>\s]|.[[({]`/s) => (n, i) => {
  let l;
  const { keyCommandMap: u, inputCommandMap: b, getSelection: E, scrollContainer: y } = n, w = ({ insertSpaces: a = !0, tabSize: r } = i) => [a ? " " : "	", a ? r || 2 : 1], m = () => {
    var a;
    return !i.readOnly && !((a = n.extensions.cursor) != null && a.scrollIntoView());
  }, p = ([a, r], [d, o], s, h) => (a < r || !h && t.test((s[r - 1] || " ") + d + (s[r] || " "))) && !V(n, d + s.slice(a, r) + o, null, null, a + 1, r + 1), c = ([a, r], d, o) => a == r && o[r] == d && !n.setSelection(a + 1), f = (a, r, d, o, s, h) => {
    let R = r.join(`
`);
    if (R != a.join(`
`)) {
      const A = a.length - 1, v = r[A], S = a[A], N = S.length - v.length, T = r[0].length - a[0].length, L = d + le((T < 0 ? r : a)[0]), P = o - S.length + le(N > 0 ? v : S), M = d - o + R.length + N, Z = L > s ? s : Math.max(L, s + T), H = h + d - o + R.length;
      V(
        n,
        R,
        d,
        o,
        Z,
        h < P ? H + N : Math.max(P + M, H)
      );
    }
  }, g = (a, r, d, o, s, h, R, A) => {
    f(
      r,
      r.map(
        a ? (v) => v.slice(le(v) ? A - le(v) % A : 0) : (v) => v && R.repeat(A - le(v) % A) + v
      ),
      d,
      o,
      s,
      h
    );
  };
  b["<"] = (a, r, d) => p(r, "<>", d, !0), e.forEach(([a, r]) => {
    const d = a == r;
    b[a] = (o, s, h) => (d && c(s, r, h) || p(s, a + r, h)) && m(), d || (b[r] = (o, s, h) => c(s, r, h) && m());
  }), b[">"] = (a, r, d) => {
    var s, h;
    const o = (h = (s = pt[ft(n)]) == null ? void 0 : s.autoCloseTags) == null ? void 0 : h.call(s, r, d, n);
    o && (V(n, ">" + o, null, null, r[0] + 1), G(a));
  }, u.Tab = (a, [r, d], o) => {
    if (Lt || i.readOnly || ke(a) & 6) return;
    const [s, h] = w(i), R = a.shiftKey, [A, v, S] = te(o, r, d);
    return r < d || R ? g(R, A, v, S, r, d, s, h) : V(n, s.repeat(h - (r - v) % h)), m();
  }, u.Enter = (a, r, d) => {
    var s, h, R;
    const o = ke(a) & 7;
    if (!o || o == ce) {
      o && (r[0] = r[1] = te(d, r[1])[2]);
      const [A, v] = w(), [S, N] = r, T = (s = pt[ft(n)]) == null ? void 0 : s.autoIndent, L = Math.floor(le(Ot(d, S)) / v) * v, P = (h = T == null ? void 0 : T[0]) != null && h.call(T, r, d, n) ? v : 0, M = (R = T == null ? void 0 : T[1]) == null ? void 0 : R.call(T, r, d, n), Z = `
` + A.repeat(L + P) + (M ? `
` + A.repeat(L) : "");
      if (Z[1] || d[N])
        return V(n, Z, S, N, S + L + P + 1), m();
    }
  }, u.Backspace = (a, [r, d], o) => {
    if (r == d) {
      const s = Ot(o, r), h = i.tabSize || 2, R = e.includes(o.slice(r - 1, r + 1)), A = /[^ ]/.test(s) ? 0 : (s.length - 1) % h + 1;
      if (R || A > 1)
        return V(n, "", r - (R ? 1 : A), r + R), m();
    }
  };
  for (let a = 0; a < 2; a++)
    u[a ? "ArrowDown" : "ArrowUp"] = (r, [d, o], s) => {
      const h = ke(r);
      if (h == 1) {
        const R = a ? d : Qe(s, d) - 1, A = a ? s.indexOf(`
`, o) + 1 : o;
        if (R > -1 && A > 0) {
          const [v, S, N] = te(s, R, A), T = v[a ? "pop" : "shift"](), L = (T.length + 1) * (a ? 1 : -1);
          v[a ? "unshift" : "push"](T), V(n, v.join(`
`), S, N, d + L, o + L);
        }
        return m();
      } else if (h == 9) {
        const [R, A, v] = te(s, d, o), S = R.join(`
`), N = a ? S.length + 1 : 0;
        return V(n, S + `
` + S, A, v, d + N, o + N), m();
      } else if (h == 2 && !Ye)
        return y.scrollBy(0, qa(y, "lineHeight") * (a ? 1 : -1)), !0;
    };
  z(n, "keydown", (a) => {
    var R;
    const r = ke(a), d = a.keyCode, [o, s, h] = E();
    if (r == ce && (d == 221 || d == 219))
      g(d == 219, ...te(n.value, o, s), o, s, ...w()), m(), G(a);
    else if (r == (Ye ? 10 : 2) && d == 77)
      Ka(!Lt), G(a);
    else if (d == 191 && r == ce || d == 65 && r == 9) {
      const A = n.value, v = r == 9, S = v ? o : Qe(A, o), N = pt[ft(n, S)] || {}, { line: T, block: L } = ((R = N.getComments) == null ? void 0 : R.call(N, n, S, A)) || N.comments || {}, [P, M, Z] = te(A, o, s), H = P.length - 1;
      if (v) {
        if (L) {
          const [B, D] = L, X = A.slice(o, s), x = A.slice(0, o).search(Re(B) + " ?$"), I = RegExp("^ ?" + Re(D)).test(A.slice(s));
          x + 1 && I ? V(
            n,
            X,
            x,
            s + +(A[s] == " ") + D.length,
            x,
            x + s - o
          ) : V(
            n,
            `${B} ${X} ${D}`,
            o,
            s,
            o + B.length + 1,
            s + B.length + 1
          ), m(), G(a);
        }
      } else if (T) {
        const B = Re(T), D = RegExp(`^\\s*(${B} ?|$)`), X = RegExp(B + " ?"), x = !/\S/.test(A.slice(M, Z)), I = P.map(
          P.every((C) => D.test(C)) && !x ? (C) => C.replace(X, "") : (C) => x || /\S/.test(C) ? C.replace(/^\s*/, `$&${T} `) : C
        );
        f(P, I, M, Z, o, s), m(), G(a);
      } else if (L) {
        const [B, D] = L, X = le(P[0]), x = P[0].startsWith(B, X) && P[H].endsWith(D), I = P.slice();
        I[0] = P[0].replace(
          x ? RegExp(Re(B) + " ?") : /(?=\S)|$/,
          x ? "" : B + " "
        );
        let C = I[0].length - P[0].length;
        I[H] = x ? I[H].replace(RegExp(`( ?${Re(D)})?$`), "") : I[H] + " " + D;
        let q = I.join(`
`), Q = X + M, W = Q > o ? o : Math.max(o + C, Q), we = Q > s - (o != s) ? s : Math.min(Math.max(Q, s + C), M + q.length);
        V(n, q, M, Z, W, Math.max(W, we)), m(), G(a);
      }
    } else if (r == 8 + ce && d == 75) {
      const A = n.value, [v, S, N] = te(A, o, s), T = h > "f" ? s - N + v.pop().length : o - S, L = rt(A, N + 1) - N - 1;
      V(
        n,
        "",
        S - !!S,
        N + !S,
        S + Math.min(T, L)
      ), m(), G(a);
    }
  }), ["copy", "cut", "paste"].forEach(
    (a) => z(n, a, (r) => {
      const [d, o] = E();
      if (d == o && Sn) {
        const [[s], h, R] = te(n.value, d, o);
        a == "paste" ? r.clipboardData.getData("text/plain") == l && (V(n, l + `
`, h, h, d + l.length + 1), m(), G(r)) : (Sn.writeText(l = s), a == "cut" && (V(n, "", h, R + 1), m()), G(r));
      }
    })
  );
}, ja = (e = 999) => {
  let t = 0, n, i, l = !1, u, b, E, y, w, m;
  const p = [], c = (a) => {
    a >= e && (a--, p.shift()), p.splice(t = a, e, [n.value, m(), m()]);
  }, f = (a) => {
    var r;
    p[a] && (w.value = p[a][0], w.setSelectionRange(...p[a][a < t ? 2 : 1]), n.update(), (r = n.extensions.cursor) == null || r.scrollIntoView(), t = a, i = !1);
  }, g = (a, r) => {
    a.extensions.history = g, n = a, m = a.getSelection, w || c(0), w = a.textarea, a.addListener("selectionChange", () => {
      i = l, l = !1;
    }), z(a, "beforeinput", (d) => {
      let o = d.data, s = d.inputType, h = d.timeStamp;
      /history/.test(s) ? (f(t + (s[7] == "U" ? -1 : 1)), G(d)) : (y = i && (u == s || h - E < 99 && s.slice(-4) == "Drop") && !he && (o != " " || b == o)) || (p[t][2] = he || m()), l = !0, b = o, E = h, u = s;
    }), z(a, "input", () => c(t + !y)), z(a, "keydown", (d) => {
      if (!r.readOnly) {
        const o = ke(d), s = d.keyCode, h = o == ce && s == 90, R = o == ce + 8 && s == 90 || !Ye && o == ce && s == 89;
        h ? (f(t - 1), G(d)) : R && (f(t + 1), G(d));
      }
    });
  };
  return g.clear = () => {
    c(0), i = !1;
  }, g.has = (a) => t + a in p, g.go = (a) => f(t + a), g;
}, Ya = at(
  "<div style=position:absolute;top:0;opacity:0;padding:inherit> <span><span></span> "
), Xa = () => {
  let e, t = " ", n = " ";
  const i = Ya(), [l, u] = i.childNodes, [b, E] = u.childNodes, y = (p) => {
    let { value: c, activeLine: f } = e, g = p[p[2] < "f" ? 0 : 1], a = Ot(c, g), r = c.slice(g, rt(c, g));
    !a && !r && (r = " "), t != a && (l.data = t = a), n != r && (E.data = n = r), i.parentNode != f && f.prepend(i);
  }, w = () => Va(e, b), m = (p) => {
    p.addListener("selectionChange", y), e = p, p.extensions.cursor = m, z(p, "input", (c) => {
      /history/.test(c.inputType) && w();
    }), p.activeLine && y(p.getSelection());
  };
  return m.getPosition = () => {
    const p = b.getBoundingClientRect(), c = e.overlays.getBoundingClientRect();
    return {
      top: p.y - c.y,
      bottom: c.bottom - p.bottom,
      left: p.x - c.x,
      right: c.right - p.x,
      height: p.height
    };
  }, m.scrollIntoView = w, m.element = b, m;
}, Qa = at(
  "<div class=guide-indents style=left:var(--padding-left);bottom:auto;right:auto> "
), Ja = at(
  "<div style=width:1px;position:absolute;background:var(--bg-guide-indent)>"
), er = () => {
  let e, t = 0, n, i = -1, l;
  const u = [], b = [], E = Qa(), y = [], w = (f) => {
    n = [];
    const g = p(f.split(`
`)), a = g.length;
    for (let r = 0, d = [], o = g[0]; o; r++) {
      const s = (u[r] || (u[r] = Ja())).style, [h, R, A] = o, v = b[r];
      o = g[r + 1], h != (v == null ? void 0 : v[0]) && (s.top = h + "00%"), R != (v == null ? void 0 : v[1]) && (s.height = R + "00%"), A != (v == null ? void 0 : v[2]) && (s.left = A * 100 + "%");
      const S = d[0] != h && (o == null ? void 0 : o[0]) != h, N = d[0] + d[1] != h + R && (o == null ? void 0 : o[0]) + (o == null ? void 0 : o[1]) != h + R;
      for (let T = -S, L = R + N; T < L; T++)
        n[T + h] = r;
      d = b[r] = g[r];
    }
    for (let r = t; r > a; ) u[--r].remove();
    E.append(...u.slice(t, t = a));
  }, m = () => {
    const f = n[l.activeLineNumber - 1] ?? -1;
    f != i && (i > -1 && (u[i].className = ""), f > -1 && (u[f].className = "active")), i = f;
  }, p = (f) => {
    const g = f.length, a = [], r = [];
    for (let d = 0, o = -1, s = 0, h = 0; ; s++) {
      const R = s == g, A = R ? 0 : y[s] = c(f[s]);
      if (A < 0)
        o < 0 && (o = s);
      else {
        for (let v = A; v < d; v++)
          a[v][1] = (o < 0 || v == A && !R ? s : o) - a[v][0];
        for (let v = d; v < A; )
          r[h++] = a[v] = [
            o < 0 || v > d ? s : o,
            0,
            v++ * e
          ];
        o = -1, d = A;
      }
      if (R) break;
    }
    return y.length = g, r;
  }, c = (f) => {
    let g = f.search(/\S/), a = 0;
    if (g < 0) return g;
    for (let r = 0; r < g; )
      a += f[r++] == "	" ? e - a % e : 1;
    return Math.ceil(a / e);
  };
  return {
    lines: E.children,
    indentLevels: y,
    update(f, g) {
      l || (l = f, f.extensions.indentGuides = this, f.overlays.append(E), f.addListener("update", w), f.addListener("selectionChange", m)), E.style.display = g.wordWrap ? "none" : "", e != (e = g.tabSize || 2) && (w(f.value), m());
    }
  };
}, tr = () => (e) => {
  let t, n, i, l = -1, u = [], b = () => {
    n || (n = e.extensions.matchBrackets);
    let [w, m] = e.getSelection(), p = w == m && e.focused && n && E(m) || -1;
    if (p != l) {
      if (y(), p + 1) {
        let c = t[i[p]], f = t[p];
        u = [c, f].map(
          (g) => Je(e, ".punctuation", 0, -1, g[1])
        ), u[0] != u[1] && c[1] + c[3].length == f[1] && (u[0].textContent += u[1].textContent, u[1].textContent = "", u[1] = u[0]), y(!0);
      } else u = [];
      l = p;
    }
  }, E = (w) => {
    var m;
    ({ brackets: t, pairs: i } = n);
    for (let p = 0, c; c = t[++p]; )
      if (!c[4] && c[5] >= w && ((m = t[i[p]]) == null ? void 0 : m[1]) <= w)
        return p;
  }, y = (w) => u.forEach((m) => m.classList.toggle("active-bracket", !!w));
  z(e, "focus", b), z(e, "blur", b), e.addListener("selectionChange", b), e.addListener("update", () => {
    y(), l = -1;
  });
}, nr = (e = !0, t = "([{", n = ")]}") => {
  let i, l;
  const u = [], b = (p) => {
    p.extensions.matchBrackets = b, p.addListener("tokenize", w), e && p.tokens[0] ? p.update() : w(p.tokens);
  }, E = b.brackets = [], y = b.pairs = [], w = (p) => {
    if (y.length = E.length = l = i = 0, m(p, 0), e)
      for (let c = 0, f; f = E[c]; ) {
        let g = f[0].alias;
        f[0].alias = (g ? g + " " : "") + `bracket-${c++ in y ? "level-" + f[2] % 12 : "error"}`;
      }
  }, m = (p, c) => {
    let f, g = 0;
    for (; f = p[g++]; ) {
      let a = f.length;
      if (typeof f != "string") {
        let r = f.content;
        if (Array.isArray(r))
          m(r, c);
        else if ((f.alias || f.type) == "punctuation") {
          let d = kn(r, t, a - 1), o = d || kn(r, n, a - 1);
          if (o) {
            if (E[i] = [f, c, 0, r, !!d, c + a], d) u[l++] = [i, d];
            else
              for (let s = l; s; ) {
                let [h, R] = u[--s];
                o == R && (y[y[i] = h] = i, E[i][2] = E[h][2] = l = s, s = 0);
              }
            i++;
          }
        }
      }
      c += a;
    }
  };
  return b;
}, kn = (e, t, n) => t.indexOf(e[0]) + 1 || n && t.indexOf(e[n]) + 1, ar = "xml,rss,atom,jsx,tsx,xquery,actionscript".split(","), rr = /^(?:area|base|w?br|col|embed|hr|img|input|link|meta|source|track)$/i, ir = (e) => {
  let t = [], n, i = [], l, u, b = [], E = (w, m, p) => {
    n = p, i.length = t.length = l = u = 0, y(w, m, 0);
  }, y = (w, m, p) => {
    let c = ar.includes(m), f = 0, g = w.length;
    for (; f < g; ) {
      const a = w[f++], r = a.content, d = a.length;
      if (Array.isArray(r))
        if (a.type == "tag" && n[p] == "<") {
          const o = r[0].length, s = r[2] ? n.substr(p + o, r[1].length) : "", h = r[r.length - 1].length < 2 && (c || !rr.test(s));
          if (r[2] && c && y(r, m, p), h)
            if (o > 1)
              for (let R = u; R; )
                s == b[--R][1] && (t[t[l] = b[u = R][0]] = l, R = 0);
            else
              b[u++] = [l, s];
          i[l++] = [
            a,
            p,
            p + d,
            s,
            o > 1,
            h
          ];
        } else {
          let o = a.alias || a.type;
          y(
            r,
            o.slice(0, 9) == "language-" ? o.slice(9) : m,
            p
          );
        }
      p += d;
    }
  };
  return e.addListener("tokenize", E), E(e.tokens, e.options.language, e.value), {
    tags: i,
    pairs: t
  };
}, sr = (e, t) => {
  for (let n = 0, i = t.length; n < i; n++) if (t[n][1] <= e && t[n][2] >= e) return n;
}, or = () => (e) => {
  var t;
  let n, i;
  const { tags: l, pairs: u } = (t = e.extensions).matchTags || (t.matchTags = ir(e)), b = (E) => [n, i].forEach((y) => {
    y && y.classList.toggle("active-tagname", !E);
  });
  e.addListener("selectionChange", ([E, y]) => {
    let w, m, p;
    E == y && e.focused && (p = sr(E, l), p + 1 && (p = u[p], p + 1 && (w = Je(e, ".tag>.tag")) && (m = Je(e, ".tag>.tag", 2, 0, l[p][1])))), n != w && (b(!0), n = w, i = m, b());
  });
}, lr = "_wrap_1x3wi_1", cr = "_blockInfoEditable_1x3wi_30", Tn = {
  wrap: lr,
  blockInfoEditable: cr
}, Ue = [
  { value: "plaintext", label: "plaintext" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "sql", label: "SQL" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "markdown", label: "Markdown" },
  { value: "bash", label: "Bash" },
  { value: "php", label: "PHP" }
], bt = [2, 4, 8];
function dr(e) {
  const t = ua(), n = zt(null), i = it(() => pa(fr.name, e == null ? void 0 : e.editor), [e == null ? void 0 : e.editor]), l = zt(null), u = e.node.attrs.code || e.node.textContent || "", b = it((c) => {
    c == null || c.stopPropagation(), setTimeout(() => {
      var f, g, a;
      (a = (g = (f = l.current) == null ? void 0 : f.textarea) == null ? void 0 : g.focus) == null || a.call(g);
    }, 0);
  }, []), E = async () => {
    if (u)
      try {
        if (navigator.clipboard)
          await navigator.clipboard.writeText(u), console.log("Copy Success");
        else {
          const c = document.createElement("textarea");
          c.value = u, document.body.appendChild(c), c.select(), document.execCommand("copy"), document.body.removeChild(c), console.log("Copy Success (fallback)");
        }
      } catch (c) {
        console.error("Error:", c);
      } finally {
        b();
      }
  }, y = () => {
    e.updateAttributes({
      lineNumbers: !e.node.attrs.lineNumbers
    }), b();
  }, w = () => {
    e.updateAttributes({
      wordWrap: !e.node.attrs.wordWrap
    }), b();
  }, m = (c) => {
    const f = { ...c };
    return f.language && !Ue.some((g) => g.value === f.language) && (f.language = "plaintext", e.updateAttributes({
      language: "plaintext"
    })), f;
  }, p = it((c) => {
    b(c);
  }, [b]);
  return Ht(() => {
    if (n.current) {
      const c = m(e.node.attrs);
      l.current = Ga(n.current, {
        readOnly: !e.editor.isEditable,
        language: c.language || "plaintext",
        tabSize: c.tabSize ?? 2,
        lineNumbers: c.lineNumbers ?? !0,
        wordWrap: c.wordWrap ?? !1,
        value: u,
        rtl: !1,
        onUpdate(f) {
          queueMicrotask(() => {
            e.updateAttributes({ code: f });
          });
        }
      }), l.current.addExtensions(
        nr(),
        or(),
        er(),
        tr(),
        Xa(),
        Wa(),
        ja()
      ), e.node.attrs.shouldFocus && setTimeout(() => {
        b(), e.updateAttributes({
          shouldFocus: !1
        });
      }, 0);
    }
    return () => {
      var c, f;
      (c = l.current) != null && c.remove && ((f = l.current) == null || f.remove());
    };
  }, [n]), Ht(() => {
    var c, f;
    if ((c = l.current) != null && c.setOptions) {
      const g = m(e.node.attrs);
      (f = l.current) == null || f.setOptions(g);
    }
  }, [l, e.node.attrs]), /* @__PURE__ */ k(la, { className: Le(Tn.wrap, "render-wrapper"), children: /* @__PURE__ */ k(
    "div",
    {
      onClick: p,
      ref: n,
      className: Le("richtext-node-container richtext-hover-shadow richtext-select-outline richtext-node-code-block !richtext-my-[10px]", {
        [Tn.blockInfoEditable]: !t
      }),
      children: /* @__PURE__ */ _e("div", { className: "richtext-code-block-toolbar", children: [
        /* @__PURE__ */ k("div", { children: /* @__PURE__ */ _e(
          Vt,
          {
            defaultValue: e.node.attrs.language,
            disabled: !t,
            onValueChange: (c) => {
              e.updateAttributes({
                language: c
              }), b();
            },
            children: [
              /* @__PURE__ */ k(gt, { className: "richtext-h-7 richtext-w-[160px] richtext-border-none richtext-text-sm richtext-outline-none hover:richtext-bg-[#5a5d5e4f]", children: /* @__PURE__ */ k(ga, { placeholder: "Select language" }) }),
              /* @__PURE__ */ k(
                mt,
                {
                  className: "richtext-border-[#3a3f4b] richtext-bg-[#21252b] richtext-text-[#ccc]",
                  onCloseAutoFocus: (c) => c.preventDefault(),
                  children: Ue == null ? void 0 : Ue.map(
                    (c) => /* @__PURE__ */ k(
                      ht,
                      {
                        value: c.value,
                        children: c.label
                      },
                      c.value
                    )
                  )
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ k("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ k(
          "div",
          {
            className: "richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]",
            onClick: E,
            children: /* @__PURE__ */ k(
              xe,
              {
                className: "richtext-size-4",
                name: "Copy"
              }
            )
          }
        ),
        /* @__PURE__ */ k("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ k(
          "div",
          {
            onClick: y,
            className: Le("richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]", {
              "richtext-bg-[#5a5d5e4f]": e == null ? void 0 : e.node.attrs.lineNumbers
            }),
            children: /* @__PURE__ */ k(
              xe,
              {
                className: "richtext-size-4",
                name: "List"
              }
            )
          }
        ),
        /* @__PURE__ */ k("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ k(
          "div",
          {
            onClick: w,
            className: Le("richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]", {
              "richtext-bg-[#5a5d5e4f]": e == null ? void 0 : e.node.attrs.wordWrap
            }),
            children: /* @__PURE__ */ k(
              xe,
              {
                className: "richtext-size-4",
                name: "WrapText"
              }
            )
          }
        ),
        /* @__PURE__ */ k("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ k("div", { children: /* @__PURE__ */ _e(
          Vt,
          {
            defaultValue: e.node.attrs.tabSize,
            disabled: !t,
            onValueChange: (c) => {
              e.updateAttributes({
                tabSize: c
              }), b();
            },
            children: [
              /* @__PURE__ */ k(gt, { className: "richtext-h-7 richtext-w-[60px] richtext-border-none richtext-text-sm richtext-outline-none hover:richtext-bg-[#5a5d5e4f]", children: /* @__PURE__ */ k(
                xe,
                {
                  className: "richtext-size-4",
                  name: "IndentIncrease"
                }
              ) }),
              /* @__PURE__ */ k(
                mt,
                {
                  className: "richtext-border-[#3a3f4b] richtext-bg-[#21252b] richtext-text-[#ccc]",
                  onCloseAutoFocus: (c) => c.preventDefault(),
                  children: bt == null ? void 0 : bt.map((c) => /* @__PURE__ */ k(
                    ht,
                    {
                      value: c,
                      children: c
                    },
                    c
                  ))
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ k("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ k(
          "div",
          {
            className: "richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]",
            onClick: i,
            children: /* @__PURE__ */ k(
              xe,
              {
                className: "richtext-size-4",
                name: "Trash2"
              }
            )
          }
        )
      ] })
    }
  ) });
}
const ur = /^`{3}([a-z]+)?\s$/, pr = /^~{3}([a-z]+)?\s$/, fr = /* @__PURE__ */ sa.create({
  name: "codeBlock",
  group: "block",
  atom: !0,
  content: "text*",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      languages: [],
      button: ({ editor: t, t: n }) => ({
        component: _a,
        componentProps: {
          action: () => t.commands.setCodeBlock({}),
          isActive: () => t.isActive("codeBlock") || !1,
          disabled: !1,
          icon: "Code2",
          tooltip: n("editor.codeblock.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      code: {
        default: "",
        parseHTML: (e) => e.textContent || ""
      },
      language: {
        default: "plaintext"
      },
      lineNumbers: {
        default: !0
      },
      wordWrap: {
        default: !1
      },
      tabSize: {
        default: 2
      },
      shouldFocus: {
        default: !0,
        parseHTML: () => !1,
        renderHTML: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      },
      {
        tag: "pre code",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    var i;
    const n = t.attrs.code || ((i = t.content.firstChild) == null ? void 0 : i.text) || "";
    return [
      "pre",
      oa(this.options.HTMLAttributes, e),
      ["code", {}, n]
    ];
  },
  addNodeView() {
    return ca(dr);
  },
  addCommands() {
    return {
      setCodeBlock: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: {
          ...e,
          shouldFocus: !0
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.setCodeBlock({})
    };
  },
  addInputRules() {
    return [
      Gt({
        find: ur,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      Gt({
        find: pr,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      })
    ];
  }
});
export {
  fr as CodeBlock,
  ur as backtickInputRegex,
  pr as tildeInputRegex
};

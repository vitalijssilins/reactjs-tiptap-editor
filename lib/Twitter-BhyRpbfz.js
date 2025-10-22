import { N as Vt, m as Mt, H as jt } from "./index-D84lfj--.js";
import { c as z, N as Bt, R as Wt } from "./dom-dataset-DR4-OJWP.js";
import { jsx as r, jsxs as w, Fragment as Ft } from "react/jsx-runtime";
import ue, { useState as ce, Fragment as Pt, useEffect as Pe, useMemo as Ue, createContext as Ut, useLayoutEffect as Ht, useContext as zt, useRef as Q, useCallback as Se, useDebugValue as Gt } from "react";
import { L as Kt, o as Xt, B as Qt, P as Jt, m as Yt, A as Zt, k as en, n as tn } from "./RichTextEditor-EaFDqzro.js";
import { u as nn } from "./index-6fSuOJHp.js";
const rn = "_verified_lvyh0_1", He = {
  verified: rn
}, on = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 24 24",
  "aria-label": "Verified account",
  role: "img",
  className: He.verified,
  children: /* @__PURE__ */ r("g", {
    children: /* @__PURE__ */ r("path", {
      d: "M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
    })
  })
}), an = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: He.verified,
  children: /* @__PURE__ */ w("g", {
    children: [
      /* @__PURE__ */ w("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: "0-a",
        x1: "4.411",
        x2: "18.083",
        y1: "2.495",
        y2: "21.508",
        children: [
          /* @__PURE__ */ r("stop", {
            offset: "0",
            stopColor: "#f4e72a"
          }),
          /* @__PURE__ */ r("stop", {
            offset: ".539",
            stopColor: "#cd8105"
          }),
          /* @__PURE__ */ r("stop", {
            offset: ".68",
            stopColor: "#cb7b00"
          }),
          /* @__PURE__ */ r("stop", {
            offset: "1",
            stopColor: "#f4ec26"
          }),
          /* @__PURE__ */ r("stop", {
            offset: "1",
            stopColor: "#f4e72a"
          })
        ]
      }),
      /* @__PURE__ */ w("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: "0-b",
        x1: "5.355",
        x2: "16.361",
        y1: "3.395",
        y2: "19.133",
        children: [
          /* @__PURE__ */ r("stop", {
            offset: "0",
            stopColor: "#f9e87f"
          }),
          /* @__PURE__ */ r("stop", {
            offset: ".406",
            stopColor: "#e2b719"
          }),
          /* @__PURE__ */ r("stop", {
            offset: ".989",
            stopColor: "#e2b719"
          })
        ]
      }),
      /* @__PURE__ */ w("g", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        children: [
          /* @__PURE__ */ r("path", {
            d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
            fill: "url(#0-a)"
          }),
          /* @__PURE__ */ r("path", {
            d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
            fill: "url(#0-b)"
          }),
          /* @__PURE__ */ r("path", {
            d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z",
            fill: "#d18800"
          })
        ]
      })
    ]
  })
}), sn = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: He.verified,
  children: /* @__PURE__ */ r("g", {
    children: /* @__PURE__ */ r("path", {
      clipRule: "evenodd",
      d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
      fillRule: "evenodd"
    })
  })
}), cn = "_root_98iqw_1", ln = "_article_98iqw_21", ot = {
  root: cn,
  article: ln
}, ze = ({ className: e, children: t }) => /* @__PURE__ */ r("div", {
  className: z("react-tweet-theme", ot.root, e),
  children: /* @__PURE__ */ r("article", {
    className: ot.article,
    children: t
  })
}), yt = (e) => /* @__PURE__ */ r("img", {
  ...e
}), un = "_header_nqq4j_1", dn = "_avatar_nqq4j_11", fn = "_avatarOverflow_nqq4j_16", _n = "_avatarSquare_nqq4j_23", hn = "_avatarShadow_nqq4j_26", mn = "_author_nqq4j_37", pn = "_authorLink_nqq4j_44", vn = "_authorVerified_nqq4j_53", gn = "_authorLinkText_nqq4j_56", wn = "_authorMeta_nqq4j_63", yn = "_authorFollow_nqq4j_66", Tn = "_username_nqq4j_69", Sn = "_follow_nqq4j_74", bn = "_separator_nqq4j_82", xn = "_brand_nqq4j_86", En = "_twitterIcon_nqq4j_90", N = {
  header: un,
  avatar: dn,
  avatarOverflow: fn,
  avatarSquare: _n,
  avatarShadow: hn,
  author: mn,
  authorLink: pn,
  authorVerified: vn,
  authorLinkText: gn,
  authorMeta: wn,
  authorFollow: yn,
  username: Tn,
  follow: Sn,
  separator: bn,
  brand: xn,
  twitterIcon: En
}, Nn = "_verifiedOld_lcna5_1", On = "_verifiedBlue_lcna5_4", Rn = "_verifiedGovernment_lcna5_7", be = {
  verifiedOld: Nn,
  verifiedBlue: On,
  verifiedGovernment: Rn
}, Tt = ({ user: e, className: t }) => {
  const n = e.verified || e.is_blue_verified || e.verified_type;
  let o = /* @__PURE__ */ r(on, {}), i = be.verifiedBlue;
  if (n)
    switch (e.is_blue_verified || (i = be.verifiedOld), e.verified_type) {
      case "Government":
        o = /* @__PURE__ */ r(sn, {}), i = be.verifiedGovernment;
        break;
      case "Business":
        o = /* @__PURE__ */ r(an, {}), i = null;
        break;
    }
  return n ? /* @__PURE__ */ r("div", {
    className: z(t, i),
    children: o
  }) : null;
}, In = ({ tweet: e, components: t }) => {
  var n;
  const o = (n = t == null ? void 0 : t.AvatarImg) != null ? n : yt, { user: i } = e;
  return /* @__PURE__ */ w("div", {
    className: N.header,
    children: [
      /* @__PURE__ */ w("a", {
        href: e.url,
        className: N.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ r("div", {
            className: z(N.avatarOverflow, i.profile_image_shape === "Square" && N.avatarSquare),
            children: /* @__PURE__ */ r(o, {
              src: i.profile_image_url_https,
              alt: i.name,
              width: 48,
              height: 48
            })
          }),
          /* @__PURE__ */ r("div", {
            className: N.avatarOverflow,
            children: /* @__PURE__ */ r("div", {
              className: N.avatarShadow
            })
          })
        ]
      }),
      /* @__PURE__ */ w("div", {
        className: N.author,
        children: [
          /* @__PURE__ */ w("a", {
            href: e.url,
            className: N.authorLink,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ r("div", {
                className: N.authorLinkText,
                children: /* @__PURE__ */ r("span", {
                  title: i.name,
                  children: i.name
                })
              }),
              /* @__PURE__ */ r(Tt, {
                user: i,
                className: N.authorVerified
              })
            ]
          }),
          /* @__PURE__ */ w("div", {
            className: N.authorMeta,
            children: [
              /* @__PURE__ */ r("a", {
                href: e.url,
                className: N.username,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ w("span", {
                  title: `@${i.screen_name}`,
                  children: [
                    "@",
                    i.screen_name
                  ]
                })
              }),
              /* @__PURE__ */ w("div", {
                className: N.authorFollow,
                children: [
                  /* @__PURE__ */ r("span", {
                    className: N.separator,
                    children: "·"
                  }),
                  /* @__PURE__ */ r("a", {
                    href: i.follow_url,
                    className: N.follow,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Follow"
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ r("a", {
        href: e.url,
        className: N.brand,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "View on Twitter",
        children: /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: N.twitterIcon,
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            })
          })
        })
      })
    ]
  });
}, Ln = "_root_1ec15_1", kn = {
  root: Ln
}, Cn = ({ tweet: e }) => /* @__PURE__ */ w("a", {
  href: e.in_reply_to_url,
  className: kn.root,
  target: "_blank",
  rel: "noopener noreferrer",
  children: [
    "Replying to @",
    e.in_reply_to_screen_name
  ]
}), Dn = "_root_eihfa_1", qn = {
  root: Dn
}, An = ({ href: e, children: t }) => /* @__PURE__ */ r("a", {
  href: e,
  className: qn.root,
  target: "_blank",
  rel: "noopener noreferrer nofollow",
  children: t
}), $n = "_root_1xq52_1", Vn = {
  root: $n
}, Mn = ({ tweet: e }) => /* @__PURE__ */ r("p", {
  className: Vn.root,
  lang: e.lang,
  dir: "auto",
  children: e.entities.map((t, n) => {
    switch (t.type) {
      case "hashtag":
      case "mention":
      case "url":
      case "symbol":
        return /* @__PURE__ */ r(An, {
          href: t.href,
          children: t.text
        }, n);
      case "media":
        return;
      default:
        return /* @__PURE__ */ r("span", {
          dangerouslySetInnerHTML: {
            __html: t.text
          }
        }, n);
    }
  })
}), it = (e) => `https://x.com/${e.user.screen_name}/status/${e.id_str}`, St = (e) => `https://x.com/${typeof e == "string" ? e : e.user.screen_name}`, jn = (e) => `https://x.com/intent/like?tweet_id=${e.id_str}`, Bn = (e) => `https://x.com/intent/tweet?in_reply_to=${e.id_str}`, Wn = (e) => `https://x.com/intent/follow?screen_name=${e.user.screen_name}`, Fn = (e) => `https://x.com/hashtag/${e.text}`, Pn = (e) => `https://x.com/search?q=%24${e.text}`, Un = (e) => `https://x.com/${e.in_reply_to_screen_name}/status/${e.in_reply_to_status_id_str}`, bt = (e, t) => {
  const n = new URL(e.media_url_https), o = n.pathname.split(".").pop();
  return o ? (n.pathname = n.pathname.replace(`.${o}`, ""), n.searchParams.set("format", o), n.searchParams.set("name", t), n.toString()) : e.media_url_https;
}, Hn = (e) => {
  const { variants: t } = e.video_info;
  return t.filter((o) => o.content_type === "video/mp4").sort((o, i) => {
    var s, a;
    return ((s = i.bitrate) != null ? s : 0) - ((a = o.bitrate) != null ? a : 0);
  });
}, zn = (e) => {
  const t = Hn(e);
  return t.length > 1 ? t[1] : t[0];
}, qe = (e) => e > 999999 ? `${(e / 1e6).toFixed(1)}M` : e > 999 ? `${(e / 1e3).toFixed(1)}K` : e.toString();
function at(e) {
  const t = Array.from(e.text), n = [
    {
      indices: e.display_text_range,
      type: "text"
    }
  ];
  return se(n, "hashtag", e.entities.hashtags), se(n, "mention", e.entities.user_mentions), se(n, "url", e.entities.urls), se(n, "symbol", e.entities.symbols), e.entities.media && se(n, "media", e.entities.media), Gn(e, n), n.map((o) => {
    const i = t.slice(o.indices[0], o.indices[1]).join("");
    switch (o.type) {
      case "hashtag":
        return Object.assign(o, {
          href: Fn(o),
          text: i
        });
      case "mention":
        return Object.assign(o, {
          href: St(o.screen_name),
          text: i
        });
      case "url":
      case "media":
        return Object.assign(o, {
          href: o.expanded_url,
          text: o.display_url
        });
      case "symbol":
        return Object.assign(o, {
          href: Pn(o),
          text: i
        });
      default:
        return Object.assign(o, {
          text: i
        });
    }
  });
}
function se(e, t, n) {
  for (const o of n)
    for (const [i, s] of e.entries()) {
      if (s.indices[0] > o.indices[0] || s.indices[1] < o.indices[1])
        continue;
      const a = [
        {
          ...o,
          type: t
        }
      ];
      s.indices[0] < o.indices[0] && a.unshift({
        indices: [
          s.indices[0],
          o.indices[0]
        ],
        type: "text"
      }), s.indices[1] > o.indices[1] && a.push({
        indices: [
          o.indices[1],
          s.indices[1]
        ],
        type: "text"
      }), e.splice(i, 1, ...a);
      break;
    }
}
function Gn(e, t) {
  e.entities.media && e.entities.media[0].indices[0] < e.display_text_range[1] && (e.display_text_range[1] = e.entities.media[0].indices[0]);
  const n = t.at(-1);
  n && n.indices[1] > e.display_text_range[1] && (n.indices[1] = e.display_text_range[1]);
}
const Kn = (e) => ({
  ...e,
  url: it(e),
  user: {
    ...e.user,
    url: St(e),
    follow_url: Wn(e)
  },
  like_url: jn(e),
  reply_url: Bn(e),
  in_reply_to_url: e.in_reply_to_screen_name ? Un(e) : void 0,
  entities: at(e),
  quoted_tweet: e.quoted_tweet ? {
    ...e.quoted_tweet,
    url: it(e.quoted_tweet),
    entities: at(e.quoted_tweet)
  } : void 0
}), Xn = "_root_g9tkv_1", Qn = "_rounded_g9tkv_6", Jn = "_mediaWrapper_g9tkv_10", Yn = "_grid2Columns_g9tkv_17", Zn = "_grid3_g9tkv_20", er = "_grid2x2_g9tkv_23", tr = "_mediaContainer_g9tkv_26", nr = "_mediaLink_g9tkv_34", rr = "_skeleton_g9tkv_38", or = "_image_g9tkv_43", D = {
  root: Xn,
  rounded: Qn,
  mediaWrapper: Jn,
  grid2Columns: Yn,
  grid3: Zn,
  grid2x2: er,
  mediaContainer: tr,
  mediaLink: nr,
  skeleton: rr,
  image: or
}, ir = "_anchor_fp31d_1", ar = "_videoButton_fp31d_17", sr = "_videoButtonIcon_fp31d_35", cr = "_watchOnTwitter_fp31d_44", lr = "_viewReplies_fp31d_60", re = {
  anchor: ir,
  videoButton: ar,
  videoButtonIcon: sr,
  watchOnTwitter: cr,
  viewReplies: lr
}, ur = ({ tweet: e, media: t }) => {
  const [n, o] = ce(!0), [i, s] = ce(!1), [a, u] = ce(!1), _ = zn(t);
  let h = 0;
  return /* @__PURE__ */ w(Ft, {
    children: [
      /* @__PURE__ */ r("video", {
        className: D.image,
        poster: bt(t, "small"),
        controls: !n,
        playsInline: !0,
        preload: "none",
        tabIndex: n ? -1 : 0,
        onPlay: () => {
          h && window.clearTimeout(h), i || s(!0), a && u(!1);
        },
        onPause: () => {
          h && window.clearTimeout(h), h = window.setTimeout(() => {
            i && s(!1), h = 0;
          }, 100);
        },
        onEnded: () => {
          u(!0);
        },
        children: /* @__PURE__ */ r("source", {
          src: _.url,
          type: _.content_type
        })
      }),
      n && /* @__PURE__ */ r("button", {
        type: "button",
        className: re.videoButton,
        "aria-label": "View video on X",
        onClick: (T) => {
          const d = T.currentTarget.previousSibling;
          T.preventDefault(), o(!1), d.load(), d.play().then(() => {
            s(!0), d.focus();
          }).catch((m) => {
            console.error("Error playing video:", m), o(!0), s(!1);
          });
        },
        children: /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: re.videoButtonIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M21 12L4 2v20l17-10z"
            })
          })
        })
      }),
      !i && !a && /* @__PURE__ */ r("div", {
        className: re.watchOnTwitter,
        children: /* @__PURE__ */ r("a", {
          href: e.url,
          className: re.anchor,
          target: "_blank",
          rel: "noopener noreferrer",
          children: n ? "Watch on X" : "Continue watching on X"
        })
      }),
      a && /* @__PURE__ */ r("a", {
        href: e.url,
        className: z(re.anchor, re.viewReplies),
        target: "_blank",
        rel: "noopener noreferrer",
        children: "View replies"
      })
    ]
  });
}, dr = (e) => /* @__PURE__ */ r("img", {
  ...e
}), st = (e, t) => {
  let n = 56.25;
  return t === 1 && (n = 100 / e.original_info.width * e.original_info.height), t === 2 && (n = n * 2), {
    width: e.type === "photo" ? void 0 : "unset",
    paddingBottom: `${n}%`
  };
}, xt = ({ tweet: e, components: t, quoted: n }) => {
  var o, i, s;
  const a = (s = (o = e.mediaDetails) == null ? void 0 : o.length) != null ? s : 0;
  var u;
  const _ = (u = t == null ? void 0 : t.MediaImg) != null ? u : dr;
  return /* @__PURE__ */ r("div", {
    className: z(D.root, !n && D.rounded),
    children: /* @__PURE__ */ r("div", {
      className: z(D.mediaWrapper, a > 1 && D.grid2Columns, a === 3 && D.grid3, a > 4 && D.grid2x2),
      children: (i = e.mediaDetails) == null ? void 0 : i.map((h) => /* @__PURE__ */ r(Pt, {
        children: h.type === "photo" ? /* @__PURE__ */ w("a", {
          href: e.url,
          className: z(D.mediaContainer, D.mediaLink),
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ r("div", {
              className: D.skeleton,
              style: st(h, a)
            }),
            /* @__PURE__ */ r(_, {
              src: bt(h, "small"),
              alt: h.ext_alt_text || "Image",
              className: D.image,
              draggable: !0
            })
          ]
        }, h.media_url_https) : /* @__PURE__ */ w("div", {
          className: D.mediaContainer,
          children: [
            /* @__PURE__ */ r("div", {
              className: D.skeleton,
              style: st(h, a)
            }),
            /* @__PURE__ */ r(ur, {
              tweet: e,
              media: h
            })
          ]
        }, h.media_url_https)
      }, h.media_url_https))
    })
  });
}, fr = {
  hour: "numeric",
  minute: "2-digit",
  hour12: !0,
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric"
}, _r = new Intl.DateTimeFormat("en-US", fr), hr = (e) => {
  const t = {};
  for (const n of e)
    t[n.type] = n.value;
  return t;
}, mr = (e) => {
  const t = hr(_r.formatToParts(e)), n = `${t.hour}:${t.minute} ${t.dayPeriod}`, o = `${t.month} ${t.day}, ${t.year}`;
  return `${n} · ${o}`;
}, pr = "_root_i24yn_1", vr = {
  root: pr
}, gr = ({ tweet: e }) => {
  const t = new Date(e.created_at), n = mr(t);
  return /* @__PURE__ */ r("a", {
    className: vr.root,
    href: e.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": n,
    children: /* @__PURE__ */ r("time", {
      dateTime: t.toISOString(),
      children: n
    })
  });
}, wr = "_info_19qcj_1", yr = "_infoLink_19qcj_10", Tr = "_infoIcon_19qcj_30", xe = {
  info: wr,
  infoLink: yr,
  infoIcon: Tr
}, Sr = ({ tweet: e }) => /* @__PURE__ */ w("div", {
  className: xe.info,
  children: [
    /* @__PURE__ */ r(gr, {
      tweet: e
    }),
    /* @__PURE__ */ r("a", {
      className: xe.infoLink,
      href: "https://help.x.com/en/x-for-websites-ads-info-and-privacy",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Twitter for Websites, Ads Information and Privacy",
      children: /* @__PURE__ */ r("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: xe.infoIcon,
        children: /* @__PURE__ */ r("g", {
          children: /* @__PURE__ */ r("path", {
            d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"
          })
        })
      })
    })
  ]
}), br = "_actions_n2anf_1", xr = "_like_n2anf_13", Er = "_reply_n2anf_14", Nr = "_copy_n2anf_15", Or = "_likeIconWrapper_n2anf_27", Rr = "_likeCount_n2anf_30", Ir = "_replyIconWrapper_n2anf_35", Lr = "_copyIconWrapper_n2anf_36", kr = "_likeIcon_n2anf_27", Cr = "_replyIcon_n2anf_35", Dr = "_copyIcon_n2anf_36", qr = "_replyText_n2anf_56", Ar = "_copyText_n2anf_57", k = {
  actions: br,
  like: xr,
  reply: Er,
  copy: Nr,
  likeIconWrapper: Or,
  likeCount: Rr,
  replyIconWrapper: Ir,
  copyIconWrapper: Lr,
  likeIcon: kr,
  replyIcon: Cr,
  copyIcon: Dr,
  replyText: qr,
  copyText: Ar
}, $r = ({ tweet: e }) => {
  const [t, n] = ce(!1), o = () => {
    navigator.clipboard.writeText(e.url), n(!0);
  };
  return Pe(() => {
    if (t) {
      const i = setTimeout(() => {
        n(!1);
      }, 6e3);
      return () => clearTimeout(i);
    }
  }, [
    t
  ]), /* @__PURE__ */ w("button", {
    type: "button",
    className: k.copy,
    "aria-label": "Copy link",
    onClick: o,
    children: [
      /* @__PURE__ */ r("div", {
        className: k.copyIconWrapper,
        children: t ? /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: k.copyIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
            })
          })
        }) : /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: k.copyIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
            })
          })
        })
      }),
      /* @__PURE__ */ r("span", {
        className: k.copyText,
        children: t ? "Copied!" : "Copy link"
      })
    ]
  });
}, Vr = ({ tweet: e }) => {
  const t = qe(e.favorite_count);
  return /* @__PURE__ */ w("div", {
    className: k.actions,
    children: [
      /* @__PURE__ */ w("a", {
        className: k.like,
        href: e.like_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Like. This Tweet has ${t} likes`,
        children: [
          /* @__PURE__ */ r("div", {
            className: k.likeIconWrapper,
            children: /* @__PURE__ */ r("svg", {
              viewBox: "0 0 24 24",
              className: k.likeIcon,
              "aria-hidden": "true",
              children: /* @__PURE__ */ r("g", {
                children: /* @__PURE__ */ r("path", {
                  d: "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                })
              })
            })
          }),
          /* @__PURE__ */ r("span", {
            className: k.likeCount,
            children: t
          })
        ]
      }),
      /* @__PURE__ */ w("a", {
        className: k.reply,
        href: e.reply_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Reply to this Tweet on Twitter",
        children: [
          /* @__PURE__ */ r("div", {
            className: k.replyIconWrapper,
            children: /* @__PURE__ */ r("svg", {
              viewBox: "0 0 24 24",
              className: k.replyIcon,
              "aria-hidden": "true",
              children: /* @__PURE__ */ r("g", {
                children: /* @__PURE__ */ r("path", {
                  d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
                })
              })
            })
          }),
          /* @__PURE__ */ r("span", {
            className: k.replyText,
            children: "Reply"
          })
        ]
      }),
      /* @__PURE__ */ r($r, {
        tweet: e
      })
    ]
  });
}, Mr = "_replies_1cutb_1", jr = "_link_1cutb_4", Br = "_text_1cutb_23", Ee = {
  replies: Mr,
  link: jr,
  text: Br
}, Wr = ({ tweet: e }) => /* @__PURE__ */ r("div", {
  className: Ee.replies,
  children: /* @__PURE__ */ r("a", {
    className: Ee.link,
    href: e.url,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ r("span", {
      className: Ee.text,
      children: e.conversation_count === 0 ? "Read more on X" : e.conversation_count === 1 ? `Read ${qe(e.conversation_count)} reply` : `Read ${qe(e.conversation_count)} replies`
    })
  })
}), Fr = "_root_q5799_1", Pr = "_article_q5799_16", ct = {
  root: Fr,
  article: Pr
}, Ur = ({ tweet: e, children: t }) => /* @__PURE__ */ r("div", {
  className: ct.root,
  onClick: (n) => {
    n.preventDefault(), window.open(e.url, "_blank");
  },
  children: /* @__PURE__ */ r("article", {
    className: ct.article,
    children: t
  })
}), Hr = "_header_r31i5_1", zr = "_avatar_r31i5_11", Gr = "_avatarSquare_r31i5_17", Kr = "_author_r31i5_21", Xr = "_authorText_r31i5_26", Qr = "_username_r31i5_33", J = {
  header: Hr,
  avatar: zr,
  avatarSquare: Gr,
  author: Kr,
  authorText: Xr,
  username: Qr
}, Jr = ({ tweet: e }) => {
  const { user: t } = e;
  return /* @__PURE__ */ w("div", {
    className: J.header,
    children: [
      /* @__PURE__ */ r("a", {
        href: e.url,
        className: J.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ r("div", {
          className: z(J.avatarOverflow, t.profile_image_shape === "Square" && J.avatarSquare),
          children: /* @__PURE__ */ r(yt, {
            src: t.profile_image_url_https,
            alt: t.name,
            width: 20,
            height: 20
          })
        })
      }),
      /* @__PURE__ */ w("div", {
        className: J.author,
        children: [
          /* @__PURE__ */ r("div", {
            className: J.authorText,
            children: /* @__PURE__ */ r("span", {
              title: t.name,
              children: t.name
            })
          }),
          /* @__PURE__ */ r(Tt, {
            user: t
          }),
          /* @__PURE__ */ r("div", {
            className: J.username,
            children: /* @__PURE__ */ w("span", {
              title: `@${t.screen_name}`,
              children: [
                "@",
                t.screen_name
              ]
            })
          })
        ]
      })
    ]
  });
}, Yr = "_root_175ot_1", Zr = {
  root: Yr
}, eo = ({ tweet: e }) => /* @__PURE__ */ r("p", {
  className: Zr.root,
  lang: e.lang,
  dir: "auto",
  children: e.entities.map((t, n) => /* @__PURE__ */ r("span", {
    dangerouslySetInnerHTML: {
      __html: t.text
    }
  }, n))
}), to = ({ tweet: e }) => {
  var t;
  return /* @__PURE__ */ w(Ur, {
    tweet: e,
    children: [
      /* @__PURE__ */ r(Jr, {
        tweet: e
      }),
      /* @__PURE__ */ r(eo, {
        tweet: e
      }),
      (t = e.mediaDetails) != null && t.length ? /* @__PURE__ */ r(xt, {
        quoted: !0,
        tweet: e
      }) : null
    ]
  });
}, no = ({ tweet: e, components: t }) => {
  var n;
  const o = Ue(() => Kn(e), [
    e
  ]);
  return /* @__PURE__ */ w(ze, {
    children: [
      /* @__PURE__ */ r(In, {
        tweet: o,
        components: t
      }),
      o.in_reply_to_status_id_str && /* @__PURE__ */ r(Cn, {
        tweet: o
      }),
      /* @__PURE__ */ r(Mn, {
        tweet: o
      }),
      (n = o.mediaDetails) != null && n.length ? /* @__PURE__ */ r(xt, {
        tweet: o,
        components: t
      }) : null,
      o.quoted_tweet && /* @__PURE__ */ r(to, {
        tweet: o.quoted_tweet
      }),
      /* @__PURE__ */ r(Sr, {
        tweet: o
      }),
      /* @__PURE__ */ r(Vr, {
        tweet: o
      }),
      /* @__PURE__ */ r(Wr, {
        tweet: o
      })
    ]
  });
}, ro = "_root_16yxa_1", oo = {
  root: ro
}, io = (e) => /* @__PURE__ */ r(ze, {
  children: /* @__PURE__ */ w("div", {
    className: oo.root,
    children: [
      /* @__PURE__ */ r("h3", {
        children: "Tweet not found"
      }),
      /* @__PURE__ */ r("p", {
        children: "The embedded tweet could not be found…"
      })
    ]
  })
}), ao = "_skeleton_oi7hr_1", so = {
  skeleton: ao
}, me = ({ style: e }) => /* @__PURE__ */ r("span", {
  className: so.skeleton,
  style: e
}), co = "_root_17qqv_1", lo = {
  root: co
}, uo = () => /* @__PURE__ */ w(ze, {
  className: lo.root,
  children: [
    /* @__PURE__ */ r(me, {
      style: {
        height: "3rem",
        marginBottom: "0.75rem"
      }
    }),
    /* @__PURE__ */ r(me, {
      style: {
        height: "6rem",
        margin: "0.5rem 0"
      }
    }),
    /* @__PURE__ */ r("div", {
      style: {
        borderTop: "var(--tweet-border)",
        margin: "0.5rem 0"
      }
    }),
    /* @__PURE__ */ r(me, {
      style: {
        height: "2rem"
      }
    }),
    /* @__PURE__ */ r(me, {
      style: {
        height: "2rem",
        borderRadius: "9999px",
        marginTop: "0.5rem"
      }
    })
  ]
});
var pe = { exports: {} }, Ne = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function fo() {
  if (lt) return Ne;
  lt = 1;
  var e = ue;
  function t(d, m) {
    return d === m && (d !== 0 || 1 / d === 1 / m) || d !== d && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, i = e.useEffect, s = e.useLayoutEffect, a = e.useDebugValue;
  function u(d, m) {
    var l = m(), v = o({ inst: { value: l, getSnapshot: m } }), f = v[0].inst, C = v[1];
    return s(
      function() {
        f.value = l, f.getSnapshot = m, _(f) && C({ inst: f });
      },
      [d, l, m]
    ), i(
      function() {
        return _(f) && C({ inst: f }), d(function() {
          _(f) && C({ inst: f });
        });
      },
      [d]
    ), a(l), l;
  }
  function _(d) {
    var m = d.getSnapshot;
    d = d.value;
    try {
      var l = m();
      return !n(d, l);
    } catch {
      return !0;
    }
  }
  function h(d, m) {
    return m();
  }
  var T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : u;
  return Ne.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : T, Ne;
}
var Oe = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function _o() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l, v) {
      return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
    }
    function t(l, v) {
      T || i.startTransition === void 0 || (T = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var f = v();
      if (!d) {
        var C = v();
        s(f, C) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      C = a({
        inst: { value: f, getSnapshot: v }
      });
      var c = C[0].inst, P = C[1];
      return _(
        function() {
          c.value = f, c.getSnapshot = v, n(c) && P({ inst: c });
        },
        [l, f, v]
      ), u(
        function() {
          return n(c) && P({ inst: c }), l(function() {
            n(c) && P({ inst: c });
          });
        },
        [l]
      ), h(f), f;
    }
    function n(l) {
      var v = l.getSnapshot;
      l = l.value;
      try {
        var f = v();
        return !s(l, f);
      } catch {
        return !0;
      }
    }
    function o(l, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = ue, s = typeof Object.is == "function" ? Object.is : e, a = i.useState, u = i.useEffect, _ = i.useLayoutEffect, h = i.useDebugValue, T = !1, d = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Oe.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Oe;
}
var dt;
function ho() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? pe.exports = fo() : pe.exports = _o()), pe.exports;
}
var mo = ho();
const Et = 0, Nt = 1, Ot = 2, ft = 3;
var _t = Object.prototype.hasOwnProperty;
function Ae(e, t) {
  var n, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((o = e.length) === t.length)
        for (; o-- && Ae(e[o], t[o]); ) ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (_t.call(e, n) && ++o && !_t.call(t, n) || !(n in t) || !Ae(e[n], t[n])) return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
const F = /* @__PURE__ */ new WeakMap(), H = () => {
}, R = (
  /*#__NOINLINE__*/
  H()
), $e = Object, p = (e) => e === R, M = (e) => typeof e == "function", G = (e, t) => ({
  ...e,
  ...t
}), Rt = (e) => M(e.then), Re = {}, ve = {}, Ge = "undefined", de = typeof window != Ge, Ve = typeof document != Ge, po = de && "Deno" in window, vo = () => de && typeof window.requestAnimationFrame != Ge, It = (e, t) => {
  const n = F.get(e);
  return [
    // Getter
    () => !p(t) && e.get(t) || Re,
    // Setter
    (o) => {
      if (!p(t)) {
        const i = e.get(t);
        t in ve || (ve[t] = i), n[5](t, G(i, o), i || Re);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !p(t) && t in ve ? ve[t] : !p(t) && e.get(t) || Re
  ];
};
let Me = !0;
const go = () => Me, [je, Be] = de && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  H,
  H
], wo = () => {
  const e = Ve && document.visibilityState;
  return p(e) || e !== "hidden";
}, yo = (e) => (Ve && document.addEventListener("visibilitychange", e), je("focus", e), () => {
  Ve && document.removeEventListener("visibilitychange", e), Be("focus", e);
}), To = (e) => {
  const t = () => {
    Me = !0, e();
  }, n = () => {
    Me = !1;
  };
  return je("online", t), je("offline", n), () => {
    Be("online", t), Be("offline", n);
  };
}, So = {
  isOnline: go,
  isVisible: wo
}, bo = {
  initFocus: yo,
  initReconnect: To
}, ht = !ue.useId, le = !de || po, xo = (e) => vo() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ie = le ? Pe : Ht, Le = typeof navigator < "u" && navigator.connection, mt = !le && Le && ([
  "slow-2g",
  "2g"
].includes(Le.effectiveType) || Le.saveData), ge = /* @__PURE__ */ new WeakMap(), Eo = (e) => $e.prototype.toString.call(e), ke = (e, t) => e === `[object ${t}]`;
let No = 0;
const We = (e) => {
  const t = typeof e, n = Eo(e), o = ke(n, "Date"), i = ke(n, "RegExp"), s = ke(n, "Object");
  let a, u;
  if ($e(e) === e && !o && !i) {
    if (a = ge.get(e), a) return a;
    if (a = ++No + "~", ge.set(e, a), Array.isArray(e)) {
      for (a = "@", u = 0; u < e.length; u++)
        a += We(e[u]) + ",";
      ge.set(e, a);
    }
    if (s) {
      a = "#";
      const _ = $e.keys(e).sort();
      for (; !p(u = _.pop()); )
        p(e[u]) || (a += u + ":" + We(e[u]) + ",");
      ge.set(e, a);
    }
  } else
    a = o ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return a;
}, Ke = (e) => {
  if (M(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? We(e) : "", [
    e,
    t
  ];
};
let Oo = 0;
const Fe = () => ++Oo;
async function Lt(...e) {
  const [t, n, o, i] = e, s = G({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let a = s.populateCache;
  const u = s.rollbackOnError;
  let _ = s.optimisticData;
  const h = (m) => typeof u == "function" ? u(m) : u !== !1, T = s.throwOnError;
  if (M(n)) {
    const m = n, l = [], v = t.keys();
    for (const f of v)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(f) && m(t.get(f)._k) && l.push(f);
    return Promise.all(l.map(d));
  }
  return d(n);
  async function d(m) {
    const [l] = Ke(m);
    if (!l) return;
    const [v, f] = It(t, l), [C, c, P, oe] = F.get(t), U = () => {
      const I = C[l];
      return (M(s.revalidate) ? s.revalidate(v().data, m) : s.revalidate !== !1) && (delete P[l], delete oe[l], I && I[0]) ? I[0](Ot).then(() => v().data) : v().data;
    };
    if (e.length < 3)
      return U();
    let O = o, j, $ = !1;
    const b = Fe();
    c[l] = [
      b,
      0
    ];
    const Y = !p(_), V = v(), Z = V.data, fe = V._c, K = p(fe) ? Z : fe;
    if (Y && (_ = M(_) ? _(K, Z) : _, f({
      data: _,
      _c: K
    })), M(O))
      try {
        O = O(K);
      } catch (I) {
        j = I, $ = !0;
      }
    if (O && Rt(O))
      if (O = await O.catch((I) => {
        j = I, $ = !0;
      }), b !== c[l][0]) {
        if ($) throw j;
        return O;
      } else $ && Y && h(j) && (a = !0, f({
        data: K,
        _c: R
      }));
    if (a && !$)
      if (M(a)) {
        const I = a(O, K);
        f({
          data: I,
          error: R,
          _c: R
        });
      } else
        f({
          data: O,
          error: R,
          _c: R
        });
    if (c[l][1] = Fe(), Promise.resolve(U()).then(() => {
      f({
        _c: R
      });
    }), $) {
      if (T) throw j;
      return;
    }
    return O;
  }
}
const pt = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, Ro = (e, t) => {
  if (!F.has(e)) {
    const n = G(bo, t), o = /* @__PURE__ */ Object.create(null), i = Lt.bind(R, e);
    let s = H;
    const a = /* @__PURE__ */ Object.create(null), u = (T, d) => {
      const m = a[T] || [];
      return a[T] = m, m.push(d), () => m.splice(m.indexOf(d), 1);
    }, _ = (T, d, m) => {
      e.set(T, d);
      const l = a[T];
      if (l)
        for (const v of l)
          v(d, m);
    }, h = () => {
      if (!F.has(e) && (F.set(e, [
        o,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        i,
        _,
        u
      ]), !le)) {
        const T = n.initFocus(setTimeout.bind(R, pt.bind(R, o, Et))), d = n.initReconnect(setTimeout.bind(R, pt.bind(R, o, Nt)));
        s = () => {
          T && T(), d && d(), F.delete(e);
        };
      }
    };
    return h(), [
      e,
      i,
      h,
      s
    ];
  }
  return [
    e,
    F.get(e)[4]
  ];
}, Io = (e, t, n, o, i) => {
  const s = n.errorRetryCount, a = i.retryCount, u = ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) * n.errorRetryInterval;
  !p(s) && a > s || setTimeout(o, u, i);
}, Lo = Ae, [kt, ko] = Ro(/* @__PURE__ */ new Map()), Co = G(
  {
    // events
    onLoadingSlow: H,
    onSuccess: H,
    onError: H,
    onErrorRetry: Io,
    onDiscarded: H,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: mt ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: mt ? 5e3 : 3e3,
    // providers
    compare: Lo,
    isPaused: () => !1,
    cache: kt,
    mutate: ko,
    fallback: {}
  },
  // use web preset by default
  So
), Do = (e, t) => {
  const n = G(e, t);
  if (t) {
    const { use: o, fallback: i } = e, { use: s, fallback: a } = t;
    o && s && (n.use = o.concat(s)), i && a && (n.fallback = G(i, a));
  }
  return n;
}, qo = Ut({}), Ao = "$inf$", Ct = de && window.__SWR_DEVTOOLS_USE__, $o = Ct ? window.__SWR_DEVTOOLS_USE__ : [], Vo = () => {
  Ct && (window.__SWR_DEVTOOLS_REACT__ = ue);
}, Mo = (e) => M(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], jo = () => {
  const e = zt(qo);
  return Ue(() => G(Co, e), [
    e
  ]);
}, Bo = (e) => (t, n, o) => e(t, n && ((...s) => {
  const [a] = Ke(t), [, , , u] = F.get(kt);
  if (a.startsWith(Ao))
    return n(...s);
  const _ = u[a];
  return p(_) ? n(...s) : (delete u[a], _);
}), o), Wo = $o.concat(Bo), Fo = (e) => function(...n) {
  const o = jo(), [i, s, a] = Mo(n), u = Do(o, a);
  let _ = e;
  const { use: h } = u, T = (h || []).concat(Wo);
  for (let d = T.length; d--; )
    _ = T[d](_);
  return _(i, s || u.fetcher || null, u);
}, Po = (e, t, n) => {
  const o = t[e] || (t[e] = []);
  return o.push(n), () => {
    const i = o.indexOf(n);
    i >= 0 && (o[i] = o[o.length - 1], o.pop());
  };
};
Vo();
const Ce = ue.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((e) => {
  switch (e.status) {
    case "pending":
      throw e;
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      throw e.status = "pending", e.then((t) => {
        e.status = "fulfilled", e.value = t;
      }, (t) => {
        e.status = "rejected", e.reason = t;
      }), e;
  }
}), De = {
  dedupe: !0
}, vt = Promise.resolve(R), Uo = (e, t, n) => {
  const { cache: o, compare: i, suspense: s, fallbackData: a, revalidateOnMount: u, revalidateIfStale: _, refreshInterval: h, refreshWhenHidden: T, refreshWhenOffline: d, keepPreviousData: m } = n, [l, v, f, C] = F.get(o), [c, P] = Ke(e), oe = Q(!1), U = Q(!1), O = Q(c), j = Q(t), $ = Q(n), b = () => $.current, Y = () => b().isVisible() && b().isOnline(), [V, Z, fe, K] = It(o, c), I = Q({}).current, ie = p(a) ? p(n.fallback) ? R : n.fallback[c] : a, Xe = (g, S) => {
    for (const x in I) {
      const y = x;
      if (y === "data") {
        if (!i(g[y], S[y]) && (!p(g[y]) || !i(he, S[y])))
          return !1;
      } else if (S[y] !== g[y])
        return !1;
    }
    return !0;
  }, Qe = Ue(() => {
    const g = !c || !t ? !1 : p(u) ? b().isPaused() || s ? !1 : _ !== !1 : u, S = (L) => {
      const B = G(L);
      return delete B._k, g ? {
        isValidating: !0,
        isLoading: !0,
        ...B
      } : B;
    }, x = V(), y = K(), A = S(x), ne = x === y ? A : S(y);
    let E = A;
    return [
      () => {
        const L = S(V());
        return Xe(L, E) ? (E.data = L.data, E.isLoading = L.isLoading, E.isValidating = L.isValidating, E.error = L.error, E) : (E = L, L);
      },
      () => ne
    ];
  }, [
    o,
    c
  ]), ee = mo.useSyncExternalStore(Se(
    (g) => fe(c, (S, x) => {
      Xe(x, S) || g();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      o,
      c
    ]
  ), Qe[0], Qe[1]), Je = !oe.current, Dt = l[c] && l[c].length > 0, te = ee.data, X = p(te) ? ie && Rt(ie) ? Ce(ie) : ie : te, _e = ee.error, we = Q(X), he = m ? p(te) ? p(we.current) ? X : we.current : te : X, Ye = Dt && !p(_e) ? !1 : Je && !p(u) ? u : b().isPaused() ? !1 : s ? p(X) ? !1 : _ : p(X) || _, Ze = !!(c && t && Je && Ye), qt = p(ee.isValidating) ? Ze : ee.isValidating, At = p(ee.isLoading) ? Ze : ee.isLoading, ae = Se(
    async (g) => {
      const S = j.current;
      if (!c || !S || U.current || b().isPaused())
        return !1;
      let x, y, A = !0;
      const ne = g || {}, E = !f[c] || !ne.dedupe, L = () => ht ? !U.current && c === O.current && oe.current : c === O.current, B = {
        isValidating: !1,
        isLoading: !1
      }, tt = () => {
        Z(B);
      }, nt = () => {
        const q = f[c];
        q && q[1] === y && delete f[c];
      }, rt = {
        isValidating: !0
      };
      p(V().data) && (rt.isLoading = !0);
      try {
        if (E && (Z(rt), n.loadingTimeout && p(V().data) && setTimeout(() => {
          A && L() && b().onLoadingSlow(c, n);
        }, n.loadingTimeout), f[c] = [
          S(P),
          Fe()
        ]), [x, y] = f[c], x = await x, E && setTimeout(nt, n.dedupingInterval), !f[c] || f[c][1] !== y)
          return E && L() && b().onDiscarded(c), !1;
        B.error = R;
        const q = v[c];
        if (!p(q) && // case 1
        (y <= q[0] || // case 2
        y <= q[1] || // case 3
        q[1] === 0))
          return tt(), E && L() && b().onDiscarded(c), !1;
        const W = V().data;
        B.data = i(W, x) ? W : x, E && L() && b().onSuccess(x, c, n);
      } catch (q) {
        nt();
        const W = b(), { shouldRetryOnError: ye } = W;
        W.isPaused() || (B.error = q, E && L() && (W.onError(q, c, W), (ye === !0 || M(ye) && ye(q)) && (!b().revalidateOnFocus || !b().revalidateOnReconnect || Y()) && W.onErrorRetry(q, c, W, ($t) => {
          const Te = l[c];
          Te && Te[0] && Te[0](ft, $t);
        }, {
          retryCount: (ne.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return A = !1, tt(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      c,
      o
    ]
  ), et = Se(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...g) => Lt(o, O.current, ...g),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ie(() => {
    j.current = t, $.current = n, p(te) || (we.current = te);
  }), Ie(() => {
    if (!c) return;
    const g = ae.bind(R, De);
    let S = 0;
    b().revalidateOnFocus && (S = Date.now() + b().focusThrottleInterval);
    const y = Po(c, l, (A, ne = {}) => {
      if (A == Et) {
        const E = Date.now();
        b().revalidateOnFocus && E > S && Y() && (S = E + b().focusThrottleInterval, g());
      } else if (A == Nt)
        b().revalidateOnReconnect && Y() && g();
      else {
        if (A == Ot)
          return ae();
        if (A == ft)
          return ae(ne);
      }
    });
    return U.current = !1, O.current = c, oe.current = !0, Z({
      _k: P
    }), Ye && (f[c] || (p(X) || le ? g() : xo(g))), () => {
      U.current = !0, y();
    };
  }, [
    c
  ]), Ie(() => {
    let g;
    function S() {
      const y = M(h) ? h(V().data) : h;
      y && g !== -1 && (g = setTimeout(x, y));
    }
    function x() {
      !V().error && (T || b().isVisible()) && (d || b().isOnline()) ? ae(De).then(S) : S();
    }
    return S(), () => {
      g && (clearTimeout(g), g = -1);
    };
  }, [
    h,
    T,
    d,
    c
  ]), Gt(he), s) {
    const g = c && p(X);
    if (!ht && le && g)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    g && (j.current = t, $.current = n, U.current = !1);
    const S = C[c], x = !p(S) && g ? et(S) : vt;
    if (Ce(x), !p(_e) && g)
      throw _e;
    const y = g ? ae(De) : vt;
    !p(he) && g && (y.status = "fulfilled", y.value = !0), Ce(y);
  }
  return {
    mutate: et,
    get data() {
      return I.data = !0, he;
    },
    get error() {
      return I.error = !0, _e;
    },
    get isValidating() {
      return I.isValidating = !0, qt;
    },
    get isLoading() {
      return I.isLoading = !0, At;
    }
  };
}, gt = Fo(Uo);
class Ho extends Error {
  constructor({ message: t, status: n, data: o }) {
    super(t), this.name = "TwitterApiError", this.status = n, this.data = o;
  }
}
const zo = gt.default || gt, Go = "https://react-tweet.vercel.app";
async function Ko([e, t]) {
  const n = await fetch(e, t), o = await n.json();
  if (n.ok) return o.data || null;
  throw new Ho({
    message: `Failed to fetch tweet at "${e}" with "${n.status}".`,
    data: o,
    status: n.status
  });
}
const Xo = (e, t, n) => {
  const { isLoading: o, data: i, error: s } = zo(() => t || e ? [
    t || e && `${Go}/api/tweet/${e}`,
    n
  ] : null, Ko, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  });
  return {
    // If data is `undefined` then it might be the first render where SWR hasn't started doing
    // any work, so we set `isLoading` to `true`.
    isLoading: !!(o || i === void 0 && !s),
    data: i,
    error: s
  };
}, Qo = ({ id: e, apiUrl: t, fallback: n = /* @__PURE__ */ r(uo, {}), components: o, fetchOptions: i, onError: s }) => {
  const { data: a, error: u, isLoading: _ } = Xo(e, t, i);
  if (_) return n;
  if (u || !a) {
    const h = (o == null ? void 0 : o.TweetNotFound) || io;
    return /* @__PURE__ */ r(h, {
      error: s ? s(u) : u
    });
  }
  return /* @__PURE__ */ r(no, {
    tweet: a,
    components: o
  });
};
function Jo({ node: e }) {
  var o;
  const t = ((o = e == null ? void 0 : e.attrs) == null ? void 0 : o.src) || "", n = t == null ? void 0 : t.split("/").pop();
  return n ? /* @__PURE__ */ r(Bt, { children: /* @__PURE__ */ r("div", { "data-twitter": "", children: /* @__PURE__ */ r(Qo, { id: n }) }) }) : null;
}
function Yo(e) {
  const { t } = nn(), [n, o] = ce("");
  Pe(() => {
    var s;
    if (e != null && e.editor) {
      const { src: a } = (s = e.editor) == null ? void 0 : s.getAttributes(ni.name);
      a && o(a);
    }
  }, [e == null ? void 0 : e.editor]);
  function i(s) {
    s.preventDefault(), s.stopPropagation(), e == null || e.onSetLink(n);
  }
  return /* @__PURE__ */ r("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ w(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: i,
      children: [
        /* @__PURE__ */ r(Kt, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
        /* @__PURE__ */ r("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ r(
          Xt,
          {
            className: "richtext-w-80",
            onChange: (s) => o(s.target.value),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: n
          }
        ) }) }),
        /* @__PURE__ */ r(
          Qt,
          {
            className: "richtext-mt-2 richtext-self-end",
            type: "submit",
            children: t("editor.link.dialog.button.apply")
          }
        )
      ]
    }
  ) });
}
function Zo(e) {
  function t(n) {
    e.action && e.action(n);
  }
  return /* @__PURE__ */ w(Jt, { modal: !0, children: [
    /* @__PURE__ */ r(Yt, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      Zt,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(en, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(tn, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(Yo, { editor: e.editor, onSetLink: t }) })
  ] });
}
const ei = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, ti = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function wt(e) {
  return e.match(ti);
}
const ni = /* @__PURE__ */ Vt.create({
  name: "twitter",
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      addPasteHandler: !0,
      HTMLAttributes: {},
      inline: !1,
      origin: "",
      button: ({ editor: e, t }) => ({
        component: Zo,
        componentProps: {
          action: (n) => {
            e.commands.setTweet({ src: n });
          },
          isActive: () => !1,
          disabled: !1,
          icon: "Twitter",
          tooltip: t("editor.twitter.tooltip"),
          editor: e
        }
      })
    };
  },
  addNodeView() {
    return Wt(Jo, { attrs: this.options.HTMLAttributes });
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  addAttributes() {
    return {
      src: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-twitter]"
      }
    ];
  },
  addCommands() {
    return {
      setTweet: (e) => ({ commands: t }) => wt(e.src) ? t.insertContent({
        type: this.name,
        attrs: e
      }) : !1,
      updateTweet: (e) => ({ commands: t }) => wt(e.src) ? t.updateAttributes(this.name, { src: e.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      jt({
        find: ei,
        type: this.type,
        getAttributes: (e) => ({ src: e.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", Mt({ "data-twitter": "" }, e)];
  }
});
export {
  Yo as F,
  ni as T
};

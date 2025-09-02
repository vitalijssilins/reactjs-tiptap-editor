import { N as $t, m as Vt, G as Mt } from "./index-BWx1Mchx.js";
import { c as H, N as jt, R as Bt } from "./dom-dataset-CHDbKz5J.js";
import { jsx as r, jsxs as g, Fragment as Wt } from "react/jsx-runtime";
import de, { useState as ce, Fragment as Ft, useEffect as Pe, useMemo as gt, createContext as Pt, useLayoutEffect as Ut, useContext as Ht, useRef as X, useCallback as Te, useDebugValue as zt } from "react";
import { L as Gt, o as Kt, B as Xt, P as Qt, m as Jt, A as Yt, k as Zt, n as en } from "./RichTextEditor-jy1O8VR5.js";
import { u as tn } from "./index-Tj3Ci7xM.js";
const nn = "_verified_lvyh0_1", Ue = {
  verified: nn
}, rn = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 24 24",
  "aria-label": "Verified account",
  role: "img",
  className: Ue.verified,
  children: /* @__PURE__ */ r("g", {
    children: /* @__PURE__ */ r("path", {
      d: "M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
    })
  })
}), on = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: Ue.verified,
  children: /* @__PURE__ */ g("g", {
    children: [
      /* @__PURE__ */ g("linearGradient", {
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
      /* @__PURE__ */ g("linearGradient", {
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
      /* @__PURE__ */ g("g", {
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
}), an = () => /* @__PURE__ */ r("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: Ue.verified,
  children: /* @__PURE__ */ r("g", {
    children: /* @__PURE__ */ r("path", {
      clipRule: "evenodd",
      d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
      fillRule: "evenodd"
    })
  })
}), sn = "_root_98iqw_1", cn = "_article_98iqw_21", rt = {
  root: sn,
  article: cn
}, He = ({ className: e, children: t }) => /* @__PURE__ */ r("div", {
  className: H("react-tweet-theme", rt.root, e),
  children: /* @__PURE__ */ r("article", {
    className: rt.article,
    children: t
  })
}), wt = (e) => /* @__PURE__ */ r("img", {
  ...e
}), ln = "_header_nqq4j_1", dn = "_avatar_nqq4j_11", un = "_avatarOverflow_nqq4j_16", fn = "_avatarSquare_nqq4j_23", _n = "_avatarShadow_nqq4j_26", hn = "_author_nqq4j_37", mn = "_authorLink_nqq4j_44", pn = "_authorVerified_nqq4j_53", vn = "_authorLinkText_nqq4j_56", gn = "_authorMeta_nqq4j_63", wn = "_authorFollow_nqq4j_66", yn = "_username_nqq4j_69", Sn = "_follow_nqq4j_74", Tn = "_separator_nqq4j_82", xn = "_brand_nqq4j_86", bn = "_twitterIcon_nqq4j_90", E = {
  header: ln,
  avatar: dn,
  avatarOverflow: un,
  avatarSquare: fn,
  avatarShadow: _n,
  author: hn,
  authorLink: mn,
  authorVerified: pn,
  authorLinkText: vn,
  authorMeta: gn,
  authorFollow: wn,
  username: yn,
  follow: Sn,
  separator: Tn,
  brand: xn,
  twitterIcon: bn
}, En = "_verifiedOld_lcna5_1", Nn = "_verifiedBlue_lcna5_4", Rn = "_verifiedGovernment_lcna5_7", xe = {
  verifiedOld: En,
  verifiedBlue: Nn,
  verifiedGovernment: Rn
}, yt = ({ user: e, className: t }) => {
  const n = e.verified || e.is_blue_verified || e.verified_type;
  let o = /* @__PURE__ */ r(rn, {}), i = xe.verifiedBlue;
  if (n)
    switch (e.is_blue_verified || (i = xe.verifiedOld), e.verified_type) {
      case "Government":
        o = /* @__PURE__ */ r(an, {}), i = xe.verifiedGovernment;
        break;
      case "Business":
        o = /* @__PURE__ */ r(on, {}), i = null;
        break;
    }
  return n ? /* @__PURE__ */ r("div", {
    className: H(t, i),
    children: o
  }) : null;
}, On = ({ tweet: e, components: t }) => {
  var n;
  const o = (n = t == null ? void 0 : t.AvatarImg) != null ? n : wt, { user: i } = e;
  return /* @__PURE__ */ g("div", {
    className: E.header,
    children: [
      /* @__PURE__ */ g("a", {
        href: e.url,
        className: E.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ r("div", {
            className: H(E.avatarOverflow, i.profile_image_shape === "Square" && E.avatarSquare),
            children: /* @__PURE__ */ r(o, {
              src: i.profile_image_url_https,
              alt: i.name,
              width: 48,
              height: 48
            })
          }),
          /* @__PURE__ */ r("div", {
            className: E.avatarOverflow,
            children: /* @__PURE__ */ r("div", {
              className: E.avatarShadow
            })
          })
        ]
      }),
      /* @__PURE__ */ g("div", {
        className: E.author,
        children: [
          /* @__PURE__ */ g("a", {
            href: e.url,
            className: E.authorLink,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ r("div", {
                className: E.authorLinkText,
                children: /* @__PURE__ */ r("span", {
                  title: i.name,
                  children: i.name
                })
              }),
              /* @__PURE__ */ r(yt, {
                user: i,
                className: E.authorVerified
              })
            ]
          }),
          /* @__PURE__ */ g("div", {
            className: E.authorMeta,
            children: [
              /* @__PURE__ */ r("a", {
                href: e.url,
                className: E.username,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ g("span", {
                  title: `@${i.screen_name}`,
                  children: [
                    "@",
                    i.screen_name
                  ]
                })
              }),
              /* @__PURE__ */ g("div", {
                className: E.authorFollow,
                children: [
                  /* @__PURE__ */ r("span", {
                    className: E.separator,
                    children: "·"
                  }),
                  /* @__PURE__ */ r("a", {
                    href: i.follow_url,
                    className: E.follow,
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
        className: E.brand,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "View on Twitter",
        children: /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: E.twitterIcon,
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            })
          })
        })
      })
    ]
  });
}, Ln = "_root_1ec15_1", In = {
  root: Ln
}, kn = ({ tweet: e }) => /* @__PURE__ */ g("a", {
  href: e.in_reply_to_url,
  className: In.root,
  target: "_blank",
  rel: "noopener noreferrer",
  children: [
    "Replying to @",
    e.in_reply_to_screen_name
  ]
}), Cn = "_root_eihfa_1", Dn = {
  root: Cn
}, qn = ({ href: e, children: t }) => /* @__PURE__ */ r("a", {
  href: e,
  className: Dn.root,
  target: "_blank",
  rel: "noopener noreferrer nofollow",
  children: t
}), An = "_root_1xq52_1", $n = {
  root: An
}, Vn = ({ tweet: e }) => /* @__PURE__ */ r("p", {
  className: $n.root,
  lang: e.lang,
  dir: "auto",
  children: e.entities.map((t, n) => {
    switch (t.type) {
      case "hashtag":
      case "mention":
      case "url":
      case "symbol":
        return /* @__PURE__ */ r(qn, {
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
}), ot = (e) => `https://x.com/${e.user.screen_name}/status/${e.id_str}`, St = (e) => `https://x.com/${typeof e == "string" ? e : e.user.screen_name}`, Mn = (e) => `https://x.com/intent/like?tweet_id=${e.id_str}`, jn = (e) => `https://x.com/intent/tweet?in_reply_to=${e.id_str}`, Bn = (e) => `https://x.com/intent/follow?screen_name=${e.user.screen_name}`, Wn = (e) => `https://x.com/hashtag/${e.text}`, Fn = (e) => `https://x.com/search?q=%24${e.text}`, Pn = (e) => `https://x.com/${e.in_reply_to_screen_name}/status/${e.in_reply_to_status_id_str}`, Tt = (e, t) => {
  const n = new URL(e.media_url_https), o = n.pathname.split(".").pop();
  return o ? (n.pathname = n.pathname.replace(`.${o}`, ""), n.searchParams.set("format", o), n.searchParams.set("name", t), n.toString()) : e.media_url_https;
}, Un = (e) => {
  const { variants: t } = e.video_info;
  return t.filter((o) => o.content_type === "video/mp4").sort((o, i) => {
    var a, s;
    return ((a = i.bitrate) != null ? a : 0) - ((s = o.bitrate) != null ? s : 0);
  });
}, Hn = (e) => {
  const t = Un(e);
  return t.length > 1 ? t[1] : t[0];
}, qe = (e) => e > 999999 ? `${(e / 1e6).toFixed(1)}M` : e > 999 ? `${(e / 1e3).toFixed(1)}K` : e.toString();
function it(e) {
  const t = Array.from(e.text), n = [
    {
      indices: e.display_text_range,
      type: "text"
    }
  ];
  return se(n, "hashtag", e.entities.hashtags), se(n, "mention", e.entities.user_mentions), se(n, "url", e.entities.urls), se(n, "symbol", e.entities.symbols), e.entities.media && se(n, "media", e.entities.media), zn(e, n), n.map((o) => {
    const i = t.slice(o.indices[0], o.indices[1]).join("");
    switch (o.type) {
      case "hashtag":
        return Object.assign(o, {
          href: Wn(o),
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
          href: Fn(o),
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
    for (const [i, a] of e.entries()) {
      if (a.indices[0] > o.indices[0] || a.indices[1] < o.indices[1])
        continue;
      const s = [
        {
          ...o,
          type: t
        }
      ];
      a.indices[0] < o.indices[0] && s.unshift({
        indices: [
          a.indices[0],
          o.indices[0]
        ],
        type: "text"
      }), a.indices[1] > o.indices[1] && s.push({
        indices: [
          o.indices[1],
          a.indices[1]
        ],
        type: "text"
      }), e.splice(i, 1, ...s);
      break;
    }
}
function zn(e, t) {
  e.entities.media && e.entities.media[0].indices[0] < e.display_text_range[1] && (e.display_text_range[1] = e.entities.media[0].indices[0]);
  const n = t.at(-1);
  n && n.indices[1] > e.display_text_range[1] && (n.indices[1] = e.display_text_range[1]);
}
const Gn = (e) => ({
  ...e,
  url: ot(e),
  user: {
    ...e.user,
    url: St(e),
    follow_url: Bn(e)
  },
  like_url: Mn(e),
  reply_url: jn(e),
  in_reply_to_url: e.in_reply_to_screen_name ? Pn(e) : void 0,
  entities: it(e),
  quoted_tweet: e.quoted_tweet ? {
    ...e.quoted_tweet,
    url: ot(e.quoted_tweet),
    entities: it(e.quoted_tweet)
  } : void 0
}), Kn = "_root_g9tkv_1", Xn = "_rounded_g9tkv_6", Qn = "_mediaWrapper_g9tkv_10", Jn = "_grid2Columns_g9tkv_17", Yn = "_grid3_g9tkv_20", Zn = "_grid2x2_g9tkv_23", er = "_mediaContainer_g9tkv_26", tr = "_mediaLink_g9tkv_34", nr = "_skeleton_g9tkv_38", rr = "_image_g9tkv_43", D = {
  root: Kn,
  rounded: Xn,
  mediaWrapper: Qn,
  grid2Columns: Jn,
  grid3: Yn,
  grid2x2: Zn,
  mediaContainer: er,
  mediaLink: tr,
  skeleton: nr,
  image: rr
}, or = "_anchor_fp31d_1", ir = "_videoButton_fp31d_17", ar = "_videoButtonIcon_fp31d_35", sr = "_watchOnTwitter_fp31d_44", cr = "_viewReplies_fp31d_60", oe = {
  anchor: or,
  videoButton: ir,
  videoButtonIcon: ar,
  watchOnTwitter: sr,
  viewReplies: cr
}, lr = ({ tweet: e, media: t }) => {
  const [n, o] = ce(!0), [i, a] = ce(!1), [s, u] = ce(!1), p = Hn(t);
  let _ = 0;
  return /* @__PURE__ */ g(Wt, {
    children: [
      /* @__PURE__ */ r("video", {
        className: D.image,
        poster: Tt(t, "small"),
        controls: !n,
        playsInline: !0,
        preload: "none",
        tabIndex: n ? -1 : 0,
        onPlay: () => {
          _ && window.clearTimeout(_), i || a(!0), s && u(!1);
        },
        onPause: () => {
          _ && window.clearTimeout(_), _ = window.setTimeout(() => {
            i && a(!1), _ = 0;
          }, 100);
        },
        onEnded: () => {
          u(!0);
        },
        children: /* @__PURE__ */ r("source", {
          src: p.url,
          type: p.content_type
        })
      }),
      n && /* @__PURE__ */ r("button", {
        type: "button",
        className: oe.videoButton,
        "aria-label": "View video on X",
        onClick: (S) => {
          const d = S.currentTarget.previousSibling;
          S.preventDefault(), o(!1), d.load(), d.play().then(() => {
            a(!0), d.focus();
          }).catch((h) => {
            console.error("Error playing video:", h), o(!0), a(!1);
          });
        },
        children: /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: oe.videoButtonIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M21 12L4 2v20l17-10z"
            })
          })
        })
      }),
      !i && !s && /* @__PURE__ */ r("div", {
        className: oe.watchOnTwitter,
        children: /* @__PURE__ */ r("a", {
          href: e.url,
          className: oe.anchor,
          target: "_blank",
          rel: "noopener noreferrer",
          children: n ? "Watch on X" : "Continue watching on X"
        })
      }),
      s && /* @__PURE__ */ r("a", {
        href: e.url,
        className: H(oe.anchor, oe.viewReplies),
        target: "_blank",
        rel: "noopener noreferrer",
        children: "View replies"
      })
    ]
  });
}, dr = (e) => /* @__PURE__ */ r("img", {
  ...e
}), at = (e, t) => {
  let n = 56.25;
  return t === 1 && (n = 100 / e.original_info.width * e.original_info.height), t === 2 && (n = n * 2), {
    width: e.type === "photo" ? void 0 : "unset",
    paddingBottom: `${n}%`
  };
}, xt = ({ tweet: e, components: t, quoted: n }) => {
  var o, i, a;
  const s = (a = (o = e.mediaDetails) == null ? void 0 : o.length) != null ? a : 0;
  var u;
  const p = (u = t == null ? void 0 : t.MediaImg) != null ? u : dr;
  return /* @__PURE__ */ r("div", {
    className: H(D.root, !n && D.rounded),
    children: /* @__PURE__ */ r("div", {
      className: H(D.mediaWrapper, s > 1 && D.grid2Columns, s === 3 && D.grid3, s > 4 && D.grid2x2),
      children: (i = e.mediaDetails) == null ? void 0 : i.map((_) => /* @__PURE__ */ r(Ft, {
        children: _.type === "photo" ? /* @__PURE__ */ g("a", {
          href: e.url,
          className: H(D.mediaContainer, D.mediaLink),
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ r("div", {
              className: D.skeleton,
              style: at(_, s)
            }),
            /* @__PURE__ */ r(p, {
              src: Tt(_, "small"),
              alt: _.ext_alt_text || "Image",
              className: D.image,
              draggable: !0
            })
          ]
        }, _.media_url_https) : /* @__PURE__ */ g("div", {
          className: D.mediaContainer,
          children: [
            /* @__PURE__ */ r("div", {
              className: D.skeleton,
              style: at(_, s)
            }),
            /* @__PURE__ */ r(lr, {
              tweet: e,
              media: _
            })
          ]
        }, _.media_url_https)
      }, _.media_url_https))
    })
  });
}, ur = {
  hour: "numeric",
  minute: "2-digit",
  hour12: !0,
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric"
}, fr = new Intl.DateTimeFormat("en-US", ur), _r = (e) => {
  const t = {};
  for (const n of e)
    t[n.type] = n.value;
  return t;
}, hr = (e) => {
  const t = _r(fr.formatToParts(e)), n = `${t.hour}:${t.minute} ${t.dayPeriod}`, o = `${t.month} ${t.day}, ${t.year}`;
  return `${n} · ${o}`;
}, mr = "_root_i24yn_1", pr = {
  root: mr
}, vr = ({ tweet: e }) => {
  const t = new Date(e.created_at), n = hr(t);
  return /* @__PURE__ */ r("a", {
    className: pr.root,
    href: e.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": n,
    children: /* @__PURE__ */ r("time", {
      dateTime: t.toISOString(),
      children: n
    })
  });
}, gr = "_info_19qcj_1", wr = "_infoLink_19qcj_10", yr = "_infoIcon_19qcj_30", be = {
  info: gr,
  infoLink: wr,
  infoIcon: yr
}, Sr = ({ tweet: e }) => /* @__PURE__ */ g("div", {
  className: be.info,
  children: [
    /* @__PURE__ */ r(vr, {
      tweet: e
    }),
    /* @__PURE__ */ r("a", {
      className: be.infoLink,
      href: "https://help.x.com/en/x-for-websites-ads-info-and-privacy",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Twitter for Websites, Ads Information and Privacy",
      children: /* @__PURE__ */ r("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: be.infoIcon,
        children: /* @__PURE__ */ r("g", {
          children: /* @__PURE__ */ r("path", {
            d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"
          })
        })
      })
    })
  ]
}), Tr = "_actions_n2anf_1", xr = "_like_n2anf_13", br = "_reply_n2anf_14", Er = "_copy_n2anf_15", Nr = "_likeIconWrapper_n2anf_27", Rr = "_likeCount_n2anf_30", Or = "_replyIconWrapper_n2anf_35", Lr = "_copyIconWrapper_n2anf_36", Ir = "_likeIcon_n2anf_27", kr = "_replyIcon_n2anf_35", Cr = "_copyIcon_n2anf_36", Dr = "_replyText_n2anf_56", qr = "_copyText_n2anf_57", I = {
  actions: Tr,
  like: xr,
  reply: br,
  copy: Er,
  likeIconWrapper: Nr,
  likeCount: Rr,
  replyIconWrapper: Or,
  copyIconWrapper: Lr,
  likeIcon: Ir,
  replyIcon: kr,
  copyIcon: Cr,
  replyText: Dr,
  copyText: qr
}, Ar = ({ tweet: e }) => {
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
  ]), /* @__PURE__ */ g("button", {
    type: "button",
    className: I.copy,
    "aria-label": "Copy link",
    onClick: o,
    children: [
      /* @__PURE__ */ r("div", {
        className: I.copyIconWrapper,
        children: t ? /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: I.copyIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
            })
          })
        }) : /* @__PURE__ */ r("svg", {
          viewBox: "0 0 24 24",
          className: I.copyIcon,
          "aria-hidden": "true",
          children: /* @__PURE__ */ r("g", {
            children: /* @__PURE__ */ r("path", {
              d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
            })
          })
        })
      }),
      /* @__PURE__ */ r("span", {
        className: I.copyText,
        children: t ? "Copied!" : "Copy link"
      })
    ]
  });
}, $r = ({ tweet: e }) => {
  const t = qe(e.favorite_count);
  return /* @__PURE__ */ g("div", {
    className: I.actions,
    children: [
      /* @__PURE__ */ g("a", {
        className: I.like,
        href: e.like_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Like. This Tweet has ${t} likes`,
        children: [
          /* @__PURE__ */ r("div", {
            className: I.likeIconWrapper,
            children: /* @__PURE__ */ r("svg", {
              viewBox: "0 0 24 24",
              className: I.likeIcon,
              "aria-hidden": "true",
              children: /* @__PURE__ */ r("g", {
                children: /* @__PURE__ */ r("path", {
                  d: "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                })
              })
            })
          }),
          /* @__PURE__ */ r("span", {
            className: I.likeCount,
            children: t
          })
        ]
      }),
      /* @__PURE__ */ g("a", {
        className: I.reply,
        href: e.reply_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Reply to this Tweet on Twitter",
        children: [
          /* @__PURE__ */ r("div", {
            className: I.replyIconWrapper,
            children: /* @__PURE__ */ r("svg", {
              viewBox: "0 0 24 24",
              className: I.replyIcon,
              "aria-hidden": "true",
              children: /* @__PURE__ */ r("g", {
                children: /* @__PURE__ */ r("path", {
                  d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
                })
              })
            })
          }),
          /* @__PURE__ */ r("span", {
            className: I.replyText,
            children: "Reply"
          })
        ]
      }),
      /* @__PURE__ */ r(Ar, {
        tweet: e
      })
    ]
  });
}, Vr = "_replies_1cutb_1", Mr = "_link_1cutb_4", jr = "_text_1cutb_23", Ee = {
  replies: Vr,
  link: Mr,
  text: jr
}, Br = ({ tweet: e }) => /* @__PURE__ */ r("div", {
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
}), Wr = "_root_q5799_1", Fr = "_article_q5799_16", st = {
  root: Wr,
  article: Fr
}, Pr = ({ tweet: e, children: t }) => /* @__PURE__ */ r("div", {
  className: st.root,
  onClick: (n) => {
    n.preventDefault(), window.open(e.url, "_blank");
  },
  children: /* @__PURE__ */ r("article", {
    className: st.article,
    children: t
  })
}), Ur = "_header_r31i5_1", Hr = "_avatar_r31i5_11", zr = "_avatarSquare_r31i5_17", Gr = "_author_r31i5_21", Kr = "_authorText_r31i5_26", Xr = "_username_r31i5_33", Q = {
  header: Ur,
  avatar: Hr,
  avatarSquare: zr,
  author: Gr,
  authorText: Kr,
  username: Xr
}, Qr = ({ tweet: e }) => {
  const { user: t } = e;
  return /* @__PURE__ */ g("div", {
    className: Q.header,
    children: [
      /* @__PURE__ */ r("a", {
        href: e.url,
        className: Q.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ r("div", {
          className: H(Q.avatarOverflow, t.profile_image_shape === "Square" && Q.avatarSquare),
          children: /* @__PURE__ */ r(wt, {
            src: t.profile_image_url_https,
            alt: t.name,
            width: 20,
            height: 20
          })
        })
      }),
      /* @__PURE__ */ g("div", {
        className: Q.author,
        children: [
          /* @__PURE__ */ r("div", {
            className: Q.authorText,
            children: /* @__PURE__ */ r("span", {
              title: t.name,
              children: t.name
            })
          }),
          /* @__PURE__ */ r(yt, {
            user: t
          }),
          /* @__PURE__ */ r("div", {
            className: Q.username,
            children: /* @__PURE__ */ g("span", {
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
}, Jr = "_root_175ot_1", Yr = {
  root: Jr
}, Zr = ({ tweet: e }) => /* @__PURE__ */ r("p", {
  className: Yr.root,
  lang: e.lang,
  dir: "auto",
  children: e.entities.map((t, n) => /* @__PURE__ */ r("span", {
    dangerouslySetInnerHTML: {
      __html: t.text
    }
  }, n))
}), eo = ({ tweet: e }) => {
  var t;
  return /* @__PURE__ */ g(Pr, {
    tweet: e,
    children: [
      /* @__PURE__ */ r(Qr, {
        tweet: e
      }),
      /* @__PURE__ */ r(Zr, {
        tweet: e
      }),
      (t = e.mediaDetails) != null && t.length ? /* @__PURE__ */ r(xt, {
        quoted: !0,
        tweet: e
      }) : null
    ]
  });
}, to = ({ tweet: e, components: t }) => {
  var n;
  const o = gt(() => Gn(e), [
    e
  ]);
  return /* @__PURE__ */ g(He, {
    children: [
      /* @__PURE__ */ r(On, {
        tweet: o,
        components: t
      }),
      o.in_reply_to_status_id_str && /* @__PURE__ */ r(kn, {
        tweet: o
      }),
      /* @__PURE__ */ r(Vn, {
        tweet: o
      }),
      (n = o.mediaDetails) != null && n.length ? /* @__PURE__ */ r(xt, {
        tweet: o,
        components: t
      }) : null,
      o.quoted_tweet && /* @__PURE__ */ r(eo, {
        tweet: o.quoted_tweet
      }),
      /* @__PURE__ */ r(Sr, {
        tweet: o
      }),
      /* @__PURE__ */ r($r, {
        tweet: o
      }),
      /* @__PURE__ */ r(Br, {
        tweet: o
      })
    ]
  });
}, no = "_root_16yxa_1", ro = {
  root: no
}, oo = (e) => /* @__PURE__ */ r(He, {
  children: /* @__PURE__ */ g("div", {
    className: ro.root,
    children: [
      /* @__PURE__ */ r("h3", {
        children: "Tweet not found"
      }),
      /* @__PURE__ */ r("p", {
        children: "The embedded tweet could not be found…"
      })
    ]
  })
}), io = "_skeleton_oi7hr_1", ao = {
  skeleton: io
}, me = ({ style: e }) => /* @__PURE__ */ r("span", {
  className: ao.skeleton,
  style: e
}), so = "_root_17qqv_1", co = {
  root: so
}, lo = () => /* @__PURE__ */ g(He, {
  className: co.root,
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
var ct;
function uo() {
  if (ct) return Ne;
  ct = 1;
  var e = de;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, i = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function u(d, h) {
    var l = h(), v = o({ inst: { value: l, getSnapshot: h } }), f = v[0].inst, k = v[1];
    return a(
      function() {
        f.value = l, f.getSnapshot = h, p(f) && k({ inst: f });
      },
      [d, l, h]
    ), i(
      function() {
        return p(f) && k({ inst: f }), d(function() {
          p(f) && k({ inst: f });
        });
      },
      [d]
    ), s(l), l;
  }
  function p(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var l = h();
      return !n(d, l);
    } catch {
      return !0;
    }
  }
  function _(d, h) {
    return h();
  }
  var S = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? _ : u;
  return Ne.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S, Ne;
}
var Re = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function fo() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, v) {
      return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
    }
    function t(l, v) {
      S || i.startTransition === void 0 || (S = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var f = v();
      if (!d) {
        var k = v();
        a(f, k) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      k = s({
        inst: { value: f, getSnapshot: v }
      });
      var c = k[0].inst, F = k[1];
      return p(
        function() {
          c.value = f, c.getSnapshot = v, n(c) && F({ inst: c });
        },
        [l, f, v]
      ), u(
        function() {
          return n(c) && F({ inst: c }), l(function() {
            n(c) && F({ inst: c });
          });
        },
        [l]
      ), _(f), f;
    }
    function n(l) {
      var v = l.getSnapshot;
      l = l.value;
      try {
        var f = v();
        return !a(l, f);
      } catch {
        return !0;
      }
    }
    function o(l, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = de, a = typeof Object.is == "function" ? Object.is : e, s = i.useState, u = i.useEffect, p = i.useLayoutEffect, _ = i.useDebugValue, S = !1, d = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Re.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Re;
}
var dt;
function _o() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? pe.exports = uo() : pe.exports = fo()), pe.exports;
}
var ho = _o();
const bt = 0, Et = 1, Nt = 2, ut = 3;
var ft = Object.prototype.hasOwnProperty;
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
        if (ft.call(e, n) && ++o && !ft.call(t, n) || !(n in t) || !Ae(e[n], t[n])) return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
const W = /* @__PURE__ */ new WeakMap(), U = () => {
}, L = (
  /*#__NOINLINE__*/
  U()
), $e = Object, m = (e) => e === L, M = (e) => typeof e == "function", z = (e, t) => ({
  ...e,
  ...t
}), Rt = (e) => M(e.then), Oe = {}, ve = {}, ze = "undefined", ue = typeof window != ze, Ve = typeof document != ze, mo = ue && "Deno" in window, po = () => ue && typeof window.requestAnimationFrame != ze, Ot = (e, t) => {
  const n = W.get(e);
  return [
    // Getter
    () => !m(t) && e.get(t) || Oe,
    // Setter
    (o) => {
      if (!m(t)) {
        const i = e.get(t);
        t in ve || (ve[t] = i), n[5](t, z(i, o), i || Oe);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !m(t) && t in ve ? ve[t] : !m(t) && e.get(t) || Oe
  ];
};
let Me = !0;
const vo = () => Me, [je, Be] = ue && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  U,
  U
], go = () => {
  const e = Ve && document.visibilityState;
  return m(e) || e !== "hidden";
}, wo = (e) => (Ve && document.addEventListener("visibilitychange", e), je("focus", e), () => {
  Ve && document.removeEventListener("visibilitychange", e), Be("focus", e);
}), yo = (e) => {
  const t = () => {
    Me = !0, e();
  }, n = () => {
    Me = !1;
  };
  return je("online", t), je("offline", n), () => {
    Be("online", t), Be("offline", n);
  };
}, So = {
  isOnline: vo,
  isVisible: go
}, To = {
  initFocus: wo,
  initReconnect: yo
}, _t = !de.useId, le = !ue || mo, xo = (e) => po() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Le = le ? Pe : Ut, Ie = typeof navigator < "u" && navigator.connection, ht = !le && Ie && ([
  "slow-2g",
  "2g"
].includes(Ie.effectiveType) || Ie.saveData), ge = /* @__PURE__ */ new WeakMap(), ke = (e, t) => $e.prototype.toString.call(e) === `[object ${t}]`;
let bo = 0;
const We = (e) => {
  const t = typeof e, n = ke(e, "Date"), o = ke(e, "RegExp"), i = ke(e, "Object");
  let a, s;
  if ($e(e) === e && !n && !o) {
    if (a = ge.get(e), a) return a;
    if (a = ++bo + "~", ge.set(e, a), Array.isArray(e)) {
      for (a = "@", s = 0; s < e.length; s++)
        a += We(e[s]) + ",";
      ge.set(e, a);
    }
    if (i) {
      a = "#";
      const u = $e.keys(e).sort();
      for (; !m(s = u.pop()); )
        m(e[s]) || (a += s + ":" + We(e[s]) + ",");
      ge.set(e, a);
    }
  } else
    a = n ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return a;
}, Ge = (e) => {
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
let Eo = 0;
const Fe = () => ++Eo;
async function Lt(...e) {
  const [t, n, o, i] = e, a = z({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let s = a.populateCache;
  const u = a.rollbackOnError;
  let p = a.optimisticData;
  const _ = (h) => typeof u == "function" ? u(h) : u !== !1, S = a.throwOnError;
  if (M(n)) {
    const h = n, l = [], v = t.keys();
    for (const f of v)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(f) && h(t.get(f)._k) && l.push(f);
    return Promise.all(l.map(d));
  }
  return d(n);
  async function d(h) {
    const [l] = Ge(h);
    if (!l) return;
    const [v, f] = Ot(t, l), [k, c, F, ie] = W.get(t), P = () => {
      const A = k[l];
      return (M(a.revalidate) ? a.revalidate(v().data, h) : a.revalidate !== !1) && (delete F[l], delete ie[l], A && A[0]) ? A[0](Nt).then(() => v().data) : v().data;
    };
    if (e.length < 3)
      return P();
    let N = o, C;
    const J = Fe();
    c[l] = [
      J,
      0
    ];
    const x = !m(p), Y = v(), $ = Y.data, Z = Y._c, G = m(Z) ? $ : Z;
    if (x && (p = M(p) ? p(G, $) : p, f({
      data: p,
      _c: G
    })), M(N))
      try {
        N = N(G);
      } catch (A) {
        C = A;
      }
    if (N && Rt(N))
      if (N = await N.catch((A) => {
        C = A;
      }), J !== c[l][0]) {
        if (C) throw C;
        return N;
      } else C && x && _(C) && (s = !0, f({
        data: G,
        _c: L
      }));
    if (s && !C)
      if (M(s)) {
        const A = s(N, G);
        f({
          data: A,
          error: L,
          _c: L
        });
      } else
        f({
          data: N,
          error: L,
          _c: L
        });
    if (c[l][1] = Fe(), Promise.resolve(P()).then(() => {
      f({
        _c: L
      });
    }), C) {
      if (S) throw C;
      return;
    }
    return N;
  }
}
const mt = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, No = (e, t) => {
  if (!W.has(e)) {
    const n = z(To, t), o = {}, i = Lt.bind(L, e);
    let a = U;
    const s = {}, u = (S, d) => {
      const h = s[S] || [];
      return s[S] = h, h.push(d), () => h.splice(h.indexOf(d), 1);
    }, p = (S, d, h) => {
      e.set(S, d);
      const l = s[S];
      if (l)
        for (const v of l)
          v(d, h);
    }, _ = () => {
      if (!W.has(e) && (W.set(e, [
        o,
        {},
        {},
        {},
        i,
        p,
        u
      ]), !le)) {
        const S = n.initFocus(setTimeout.bind(L, mt.bind(L, o, bt))), d = n.initReconnect(setTimeout.bind(L, mt.bind(L, o, Et)));
        a = () => {
          S && S(), d && d(), W.delete(e);
        };
      }
    };
    return _(), [
      e,
      i,
      _,
      a
    ];
  }
  return [
    e,
    W.get(e)[4]
  ];
}, Ro = (e, t, n, o, i) => {
  const a = n.errorRetryCount, s = i.retryCount, u = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
  !m(a) && s > a || setTimeout(o, u, i);
}, Oo = Ae, [It, Lo] = No(/* @__PURE__ */ new Map()), Io = z(
  {
    // events
    onLoadingSlow: U,
    onSuccess: U,
    onError: U,
    onErrorRetry: Ro,
    onDiscarded: U,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: ht ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: ht ? 5e3 : 3e3,
    // providers
    compare: Oo,
    isPaused: () => !1,
    cache: It,
    mutate: Lo,
    fallback: {}
  },
  // use web preset by default
  So
), ko = (e, t) => {
  const n = z(e, t);
  if (t) {
    const { use: o, fallback: i } = e, { use: a, fallback: s } = t;
    o && a && (n.use = o.concat(a)), i && s && (n.fallback = z(i, s));
  }
  return n;
}, Co = Pt({}), Do = "$inf$", kt = ue && window.__SWR_DEVTOOLS_USE__, qo = kt ? window.__SWR_DEVTOOLS_USE__ : [], Ao = () => {
  kt && (window.__SWR_DEVTOOLS_REACT__ = de);
}, $o = (e) => M(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Vo = () => z(Io, Ht(Co)), Mo = (e) => (t, n, o) => e(t, n && ((...a) => {
  const [s] = Ge(t), [, , , u] = W.get(It);
  if (s.startsWith(Do))
    return n(...a);
  const p = u[s];
  return m(p) ? n(...a) : (delete u[s], p);
}), o), jo = qo.concat(Mo), Bo = (e) => function(...n) {
  const o = Vo(), [i, a, s] = $o(n), u = ko(o, s);
  let p = e;
  const { use: _ } = u, S = (_ || []).concat(jo);
  for (let d = S.length; d--; )
    p = S[d](p);
  return p(i, a || u.fetcher || null, u);
}, Wo = (e, t, n) => {
  const o = t[e] || (t[e] = []);
  return o.push(n), () => {
    const i = o.indexOf(n);
    i >= 0 && (o[i] = o[o.length - 1], o.pop());
  };
};
Ao();
const Ce = de.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
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
}, Fo = (e, t, n) => {
  const { cache: o, compare: i, suspense: a, fallbackData: s, revalidateOnMount: u, revalidateIfStale: p, refreshInterval: _, refreshWhenHidden: S, refreshWhenOffline: d, keepPreviousData: h } = n, [l, v, f, k] = W.get(o), [c, F] = Ge(e), ie = X(!1), P = X(!1), N = X(c), C = X(t), J = X(n), x = () => J.current, Y = () => x().isVisible() && x().isOnline(), [$, Z, G, A] = Ot(o, c), ee = X({}).current, fe = m(s) ? m(n.fallback) ? L : n.fallback[c] : s, Ke = (w, y) => {
    for (const R in ee) {
      const T = R;
      if (T === "data") {
        if (!i(w[T], y[T]) && (!m(w[T]) || !i(he, y[T])))
          return !1;
      } else if (y[T] !== w[T])
        return !1;
    }
    return !0;
  }, Xe = gt(() => {
    const w = !c || !t ? !1 : m(u) ? x().isPaused() || a ? !1 : p !== !1 : u, y = (O) => {
      const j = z(O);
      return delete j._k, w ? {
        isValidating: !0,
        isLoading: !0,
        ...j
      } : j;
    }, R = $(), T = A(), V = y(R), re = R === T ? V : y(T);
    let b = V;
    return [
      () => {
        const O = y($());
        return Ke(O, b) ? (b.data = O.data, b.isLoading = O.isLoading, b.isValidating = O.isValidating, b.error = O.error, b) : (b = O, O);
      },
      () => re
    ];
  }, [
    o,
    c
  ]), te = ho.useSyncExternalStore(Te(
    (w) => G(c, (y, R) => {
      Ke(R, y) || w();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      o,
      c
    ]
  ), Xe[0], Xe[1]), Qe = !ie.current, Ct = l[c] && l[c].length > 0, ne = te.data, K = m(ne) ? fe && Rt(fe) ? Ce(fe) : fe : ne, _e = te.error, we = X(K), he = h ? m(ne) ? m(we.current) ? K : we.current : ne : K, Je = Ct && !m(_e) ? !1 : Qe && !m(u) ? u : x().isPaused() ? !1 : a ? m(K) ? !1 : p : m(K) || p, Ye = !!(c && t && Qe && Je), Dt = m(te.isValidating) ? Ye : te.isValidating, qt = m(te.isLoading) ? Ye : te.isLoading, ae = Te(
    async (w) => {
      const y = C.current;
      if (!c || !y || P.current || x().isPaused())
        return !1;
      let R, T, V = !0;
      const re = w || {}, b = !f[c] || !re.dedupe, O = () => _t ? !P.current && c === N.current && ie.current : c === N.current, j = {
        isValidating: !1,
        isLoading: !1
      }, et = () => {
        Z(j);
      }, tt = () => {
        const q = f[c];
        q && q[1] === T && delete f[c];
      }, nt = {
        isValidating: !0
      };
      m($().data) && (nt.isLoading = !0);
      try {
        if (b && (Z(nt), n.loadingTimeout && m($().data) && setTimeout(() => {
          V && O() && x().onLoadingSlow(c, n);
        }, n.loadingTimeout), f[c] = [
          y(F),
          Fe()
        ]), [R, T] = f[c], R = await R, b && setTimeout(tt, n.dedupingInterval), !f[c] || f[c][1] !== T)
          return b && O() && x().onDiscarded(c), !1;
        j.error = L;
        const q = v[c];
        if (!m(q) && // case 1
        (T <= q[0] || // case 2
        T <= q[1] || // case 3
        q[1] === 0))
          return et(), b && O() && x().onDiscarded(c), !1;
        const B = $().data;
        j.data = i(B, R) ? B : R, b && O() && x().onSuccess(R, c, n);
      } catch (q) {
        tt();
        const B = x(), { shouldRetryOnError: ye } = B;
        B.isPaused() || (j.error = q, b && O() && (B.onError(q, c, B), (ye === !0 || M(ye) && ye(q)) && (!x().revalidateOnFocus || !x().revalidateOnReconnect || Y()) && B.onErrorRetry(q, c, B, (At) => {
          const Se = l[c];
          Se && Se[0] && Se[0](ut, At);
        }, {
          retryCount: (re.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return V = !1, et(), !0;
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
  ), Ze = Te(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...w) => Lt(o, N.current, ...w),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Le(() => {
    C.current = t, J.current = n, m(ne) || (we.current = ne);
  }), Le(() => {
    if (!c) return;
    const w = ae.bind(L, De);
    let y = 0;
    const T = Wo(c, l, (V, re = {}) => {
      if (V == bt) {
        const b = Date.now();
        x().revalidateOnFocus && b > y && Y() && (y = b + x().focusThrottleInterval, w());
      } else if (V == Et)
        x().revalidateOnReconnect && Y() && w();
      else {
        if (V == Nt)
          return ae();
        if (V == ut)
          return ae(re);
      }
    });
    return P.current = !1, N.current = c, ie.current = !0, Z({
      _k: F
    }), Je && (m(K) || le ? w() : xo(w)), () => {
      P.current = !0, T();
    };
  }, [
    c
  ]), Le(() => {
    let w;
    function y() {
      const T = M(_) ? _($().data) : _;
      T && w !== -1 && (w = setTimeout(R, T));
    }
    function R() {
      !$().error && (S || x().isVisible()) && (d || x().isOnline()) ? ae(De).then(y) : y();
    }
    return y(), () => {
      w && (clearTimeout(w), w = -1);
    };
  }, [
    _,
    S,
    d,
    c
  ]), zt(he), a && m(K) && c) {
    if (!_t && le)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    C.current = t, J.current = n, P.current = !1;
    const w = k[c];
    if (!m(w)) {
      const y = Ze(w);
      Ce(y);
    }
    if (m(_e)) {
      const y = ae(De);
      m(he) || (y.status = "fulfilled", y.value = !0), Ce(y);
    } else
      throw _e;
  }
  return {
    mutate: Ze,
    get data() {
      return ee.data = !0, he;
    },
    get error() {
      return ee.error = !0, _e;
    },
    get isValidating() {
      return ee.isValidating = !0, Dt;
    },
    get isLoading() {
      return ee.isLoading = !0, qt;
    }
  };
}, pt = Bo(Fo);
class Po extends Error {
  constructor({ message: t, status: n, data: o }) {
    super(t), this.name = "TwitterApiError", this.status = n, this.data = o;
  }
}
const Uo = pt.default || pt, Ho = "https://react-tweet.vercel.app";
async function zo([e, t]) {
  const n = await fetch(e, t), o = await n.json();
  if (n.ok) return o.data || null;
  throw new Po({
    message: `Failed to fetch tweet at "${e}" with "${n.status}".`,
    data: o,
    status: n.status
  });
}
const Go = (e, t, n) => {
  const { isLoading: o, data: i, error: a } = Uo(() => t || e ? [
    t || e && `${Ho}/api/tweet/${e}`,
    n
  ] : null, zo, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  });
  return {
    // If data is `undefined` then it might be the first render where SWR hasn't started doing
    // any work, so we set `isLoading` to `true`.
    isLoading: !!(o || i === void 0 && !a),
    data: i,
    error: a
  };
}, Ko = ({ id: e, apiUrl: t, fallback: n = /* @__PURE__ */ r(lo, {}), components: o, fetchOptions: i, onError: a }) => {
  const { data: s, error: u, isLoading: p } = Go(e, t, i);
  if (p) return n;
  if (u || !s) {
    const _ = (o == null ? void 0 : o.TweetNotFound) || oo;
    return /* @__PURE__ */ r(_, {
      error: a ? a(u) : u
    });
  }
  return /* @__PURE__ */ r(to, {
    tweet: s,
    components: o
  });
};
function Xo({ node: e }) {
  var o;
  const t = ((o = e == null ? void 0 : e.attrs) == null ? void 0 : o.src) || "", n = t == null ? void 0 : t.split("/").pop();
  return n ? /* @__PURE__ */ r(jt, { children: /* @__PURE__ */ r("div", { "data-twitter": "", children: /* @__PURE__ */ r(Ko, { id: n }) }) }) : null;
}
function Qo(e) {
  const { t } = tn(), [n, o] = ce("");
  Pe(() => {
    var a;
    if (e != null && e.editor) {
      const { src: s } = (a = e.editor) == null ? void 0 : a.getAttributes(ei.name);
      s && o(s);
    }
  }, [e == null ? void 0 : e.editor]);
  function i(a) {
    a.preventDefault(), a.stopPropagation(), e == null || e.onSetLink(n);
  }
  return /* @__PURE__ */ r("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: i,
      children: [
        /* @__PURE__ */ r(Gt, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
        /* @__PURE__ */ r("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ r(
          Kt,
          {
            className: "richtext-w-80",
            onChange: (a) => o(a.target.value),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: n
          }
        ) }) }),
        /* @__PURE__ */ r(
          Xt,
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
function Jo(e) {
  function t(n) {
    e.action && e.action(n);
  }
  return /* @__PURE__ */ g(Qt, { modal: !0, children: [
    /* @__PURE__ */ r(Jt, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      Yt,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(Zt, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(en, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(Qo, { editor: e.editor, onSetLink: t }) })
  ] });
}
const Yo = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, Zo = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function vt(e) {
  return e.match(Zo);
}
const ei = /* @__PURE__ */ $t.create({
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
        component: Jo,
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
    return Bt(Xo, { attrs: this.options.HTMLAttributes });
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
      setTweet: (e) => ({ commands: t }) => vt(e.src) ? t.insertContent({
        type: this.name,
        attrs: e
      }) : !1,
      updateTweet: (e) => ({ commands: t }) => vt(e.src) ? t.updateAttributes(this.name, { src: e.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      Mt({
        find: Yo,
        type: this.type,
        getAttributes: (e) => ({ src: e.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", Vt({ "data-twitter": "" }, e)];
  }
});
export {
  Qo as F,
  ei as T
};

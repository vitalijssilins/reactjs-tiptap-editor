function o(t) {
  return t.replace(/^.*\/|\..+$/g, "");
}
function u(t) {
  return t.split(".").pop();
}
function c(t) {
  return t < 1024 ? `${t} Byte` : t < 1024 * 1024 ? `${(t / 1024).toFixed(2)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function d(t) {
  return t ? t === "application/pdf" ? "pdf" : t.startsWith("application/") && [".document", "word"].some((r) => t.includes(r)) ? "word" : t.startsWith("application/") && ["presentation"].some((r) => t.includes(r)) ? "excel" : t.startsWith("application/") && ["sheet"].some((r) => t.includes(r)) ? "ppt" : t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : t.startsWith("video") ? "video" : "file" : "file";
}
function l(t) {
  return new Promise((r) => {
    const n = new FileReader();
    n.addEventListener(
      "load",
      () => {
        r({
          alt: t.name,
          src: n.result
        });
      },
      !1
    ), n.readAsDataURL(t);
  });
}
function m(t, r) {
  const n = t.split(","), s = n[0].match(/:(.*?);/)[1], a = atob(n[n.length - 1]);
  let e = a.length;
  const i = new Uint8Array(e);
  for (; e--; )
    i[e] = a.charCodeAt(e);
  return new File([i], r, { type: s });
}
export {
  o as a,
  c as b,
  m as d,
  u as e,
  d as n,
  l as r
};

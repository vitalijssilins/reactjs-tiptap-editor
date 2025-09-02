function t(E, n) {
  return window.addEventListener(E, n), () => {
    window.removeEventListener(E, n);
  };
}
function e(E, n) {
  window.dispatchEvent(
    new CustomEvent(E, {
      detail: n
    })
  );
}
const A = {
  UPLOAD_IMAGE: (E) => `UPLOAD_IMAGE-${E}`,
  UPLOAD_VIDEO: (E) => `UPLOAD_VIDEO-${E}`,
  EDIT: (E) => `EDIT-${E}`,
  UPDATE_THEME: (E) => `UPDATE_THEME-${E}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
};
export {
  A as E,
  e as d,
  t as l
};

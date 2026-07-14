/* ═══════════════════════════════════════════════════
   i18n — LANGUAGE SYSTEM
   The page ships fully rendered in English; switching a
   language walks every [data-i18n]/[data-i18n-html] path
   into the translations object and swaps the text.
   ═══════════════════════════════════════════════════ */
function getPath(obj, path) {
  return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
}

function applyLang(lang) {
  var t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var v = getPath(t, el.getAttribute('data-i18n'));
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var v = getPath(t, el.getAttribute('data-i18n-html'));
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var v = getPath(t, el.getAttribute('data-i18n-alt'));
    if (typeof v === 'string') el.setAttribute('alt', v);
  });
  document.querySelectorAll('.lang-switcher button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-switcher button').forEach(function (b) {
  b.addEventListener('click', function () { applyLang(b.dataset.lang); });
});

document.addEventListener('DOMContentLoaded', function () {
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  applyLang(saved && Object.prototype.hasOwnProperty.call(translations, saved) ? saved : 'en');
});

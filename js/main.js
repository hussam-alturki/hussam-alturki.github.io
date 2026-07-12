/* ═══════════════════════════════════════════════════
   THEME
   (initial data-theme and the .js class are set by the
   inline script in <head> before first paint)
   ═══════════════════════════════════════════════════ */
var themeToggle = document.querySelector('.theme-toggle');
var html = document.documentElement;

function syncThemeToggle() {
  if (!themeToggle) return;
  var isDark = html.getAttribute('data-theme') === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeToggle();
  });
}

/* ═══════════════════════════════════════════════════
   MOBILE NAV
   ═══════════════════════════════════════════════════ */
var burger = document.querySelector('.nav-burger');
var menu = document.querySelector('.nav-menu');

if (burger && menu) {
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    }
  });
}

/* ═══════════════════════════════════════════════════
   ENTRANCE REVEAL — one fadeIn, once
   (CSS only hides .reveal under .js + motion allowed)
   ═══════════════════════════════════════════════════ */
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

/* ═══════════════════════════════════════════════════
   QR — screen card + print card
   The screen QR renders dark-on-white inside the white
   .qr-chip in both themes, so scanners always get full
   contrast. Falls back to the plain URL text if the CDN
   library is unavailable.
   ═══════════════════════════════════════════════════ */
function generateQR() {
  if (typeof QRCode === 'undefined') return;
  var qrEl = document.getElementById('qrcode');
  if (qrEl) {
    qrEl.innerHTML = '';
    new QRCode(qrEl, {
      text: window.location.href,
      width: 144, height: 144,
      colorDark: '#1A1917', colorLight: '#FFFFFF',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
  var printEl = document.getElementById('qr-print');
  if (printEl) {
    printEl.innerHTML = '';
    new QRCode(printEl, {
      text: window.location.href,
      width: 100, height: 100,
      colorDark: '#000000', colorLight: '#FFFFFF',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  syncThemeToggle();
  generateQR();
});

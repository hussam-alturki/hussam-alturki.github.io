/* ═══════════════════════════════════════════════════
   THEME
   (initial data-theme is set by the inline script in
   <head> before first paint; this only handles toggling)
   ═══════════════════════════════════════════════════ */
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

function syncThemeToggle() {
  if (!themeToggle) return;
  const isDark = html.getAttribute('data-theme') === 'dark';
  themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function toggleTheme() {
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncThemeToggle();
  generateQR();
}
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

/* ═══════════════════════════════════════════════════
   MOBILE NAV
   ═══════════════════════════════════════════════════ */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

/* ═══════════════════════════════════════════════════
   SCROLL ANIMATIONS
   (CSS only animates these inside
   prefers-reduced-motion: no-preference)
   ═══════════════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

/* ═══════════════════════════════════════════════════
   QR CODE
   Colors come from the active theme's CSS custom
   properties so palette changes can never desync.
   ═══════════════════════════════════════════════════ */
function generateQR() {
  const container = document.getElementById('qrcode');
  const printContainer = document.getElementById('qr-print');
  if (!container || typeof QRCode === 'undefined') return;
  const styles = getComputedStyle(html);
  const darkColor = styles.getPropertyValue('--qr-fg').trim() || '#201D1A';
  const lightColor = styles.getPropertyValue('--qr-bg').trim() || '#FFFFFF';
  container.innerHTML = '';
  if (printContainer) printContainer.innerHTML = '';
  new QRCode(container, {
    text: window.location.href,
    width: 160,
    height: 160,
    colorDark: darkColor,
    colorLight: lightColor,
    correctLevel: QRCode.CorrectLevel.M
  });
  if (printContainer) {
    new QRCode(printContainer, {
      text: window.location.href,
      width: 100,
      height: 100,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  syncThemeToggle();
  generateQR();
});

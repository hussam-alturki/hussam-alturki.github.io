// ===== THEME =====
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }
  syncThemeToggle();
}

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

themeToggle.addEventListener('click', toggleTheme);

// ===== MOBILE NAV =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

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

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// ===== QR CODE =====
function generateQR() {
  const container = document.getElementById('qrcode');
  const printContainer = document.getElementById('qr-print');
  if (!container) return;

  const isDark = html.getAttribute('data-theme') === 'dark';
  const darkColor = isDark ? '#F7F5F2' : '#1A1917';
  const lightColor = isDark ? '#1A1917' : '#F7F5F2';

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

// ===== SERVICES TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');

    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  generateQR();
});

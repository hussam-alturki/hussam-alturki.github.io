/* ═══════════════════════════════════════════════════
   THEME
   ═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   MOBILE NAV
   ═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   SCROLL ANIMATIONS
   ═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   QR CODE
   ═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  generateQR();
});


/* ═══════════════════════════════════════════════════
   i18n — LANGUAGE SYSTEM
   ═══════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, p) => o && o[p], obj);
}

function updateSimpleContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getNestedValue(translations[currentLang], key);
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const text = getNestedValue(translations[currentLang], key);
    if (text !== undefined) el.innerHTML = text;
  });
}

/* ─── BELIEFS ─────────────────────────────────────── */
function renderBeliefs() {
  const container = document.getElementById('beliefs-grid');
  if (!container) return;
  const items = translations[currentLang].beliefs.items || [];
  container.innerHTML = items.map(item => `
    <div class="belief-card">
      <p class="belief-statement">${item.statement}</p>
      <p class="belief-detail">${item.detail}</p>
    </div>
  `).join('');
}

/* ─── EXPERIENCE (with insight) ───────────────────── */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;
  const items = translations[currentLang].experience.items || [];
  container.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-company">${item.company}</div>
      <div class="timeline-points">${item.points}</div>
      ${item.insight ? `<span class="timeline-insight">${item.insight}</span>` : ''}
    </div>
  `).join('');
}

/* ─── SERVICES / SUPERPOWERS ──────────────────────── */
function renderServices() {
  const container = document.getElementById('superpowers-grid');
  if (!container) return;
  const powers = translations[currentLang].services.superpowers || [];
  container.innerHTML = powers.map((p, i) => `
    <div class="superpower-card">
      <div class="superpower-number">0${i + 1}</div>
      <h3 class="superpower-title">${p.title}</h3>
      <p class="superpower-desc">${p.description}</p>
      <p class="superpower-example">${p.example}</p>
    </div>
  `).join('');
}

/* ─── SKILLS ──────────────────────────────────────── */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  const cats = translations[currentLang].skills.categories;
  container.innerHTML = Object.entries(cats).map(([key, cat]) => `
    <div class="skill-category">
      <h4>${cat.label}</h4>
      <ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `).join('');
}

/* ─── PROJECTS (with image slots) ────────────────── */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  const t = translations[currentLang].projects;
  container.innerHTML = t.items.map(item => `
    <article class="project-card">
      <div class="project-thumb-wrap">
        <img
          src="${item.thumb}"
          alt="${item.thumbAlt}"
          loading="lazy"
          decoding="async"
          onerror="this.parentElement.style.background='var(--accent-soft)'; this.style.display='none';"
        >
      </div>
      <span class="project-label">${item.label}</span>
      <h3>${item.title}</h3>
      <h4>${t.problemLabel}</h4><p>${item.problem}</p>
      <h4>${t.actionLabel}</h4><p>${item.action}</p>
      <h4>${t.resultLabel}</h4><p>${item.result}</p>
      ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">${t.viewLive}</a>` : ''}
    </article>
  `).join('');
}

/* ─── TESTIMONIALS ────────────────────────────────── */
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  const items = translations[currentLang].testimonials.items || [];
  container.innerHTML = items.map(item => `
    <div class="testimonial-card">
      <p class="testimonial-quote">${item.quote}</p>
      <div class="testimonial-meta">
        <div class="testimonial-name">${item.name}</div>
        <div class="testimonial-role">${item.role}</div>
      </div>
    </div>
  `).join('');
}

/* ─── SET LANGUAGE ────────────────────────────────── */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  updateSimpleContent();
  renderBeliefs();
  renderExperience();
  renderServices();
  renderSkills();
  renderProjects();
  renderTestimonials();
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

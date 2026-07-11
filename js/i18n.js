/* ═══════════════════════════════════════════════════
   i18n — LANGUAGE SYSTEM (single source of truth)
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
  const el = document.getElementById('beliefs-grid');
  if (!el) return;
  const items = (translations[currentLang].beliefs && translations[currentLang].beliefs.items) || [];
  el.innerHTML = items.map(item => `
    <article class="belief-card">
      <p class="belief-statement">${item.statement}</p>
      <p class="belief-detail">${item.detail}</p>
    </article>
  `).join('');
}

/* ─── EXPERIENCE ──────────────────────────────────── */
function renderExperience() {
  const el = document.getElementById('experience-timeline');
  if (!el) return;
  const items = translations[currentLang].experience.items || [];
  el.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-company">${item.company}</div>
      <div class="timeline-points">${item.points}</div>
      ${item.insight ? `<div class="timeline-insight">${item.insight}</div>` : ''}
    </div>
  `).join('');
}

/* ─── SERVICES / SUPERPOWERS ──────────────────────── */
function renderServices() {
  const el = document.getElementById('superpowers-grid');
  if (!el) return;
  const powers = translations[currentLang].services.superpowers || [];
  el.innerHTML = powers.map((p, i) => `
    <article class="superpower-card">
      <span class="superpower-number" aria-hidden="true">0${i + 1}</span>
      <h3 class="superpower-title">${p.title}</h3>
      <p class="superpower-desc">${p.description}</p>
      ${p.example ? `<p class="superpower-example">${p.example}</p>` : ''}
    </article>
  `).join('');
}

/* ─── SKILLS ──────────────────────────────────────── */
function renderSkills() {
  const el = document.getElementById('skills-grid');
  if (!el) return;
  const cats = translations[currentLang].skills.categories;
  el.innerHTML = Object.entries(cats).map(([key, cat]) => `
    <div class="skill-category">
      <h3>${cat.label}</h3>
      <ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `).join('');
}

/* ─── PROJECTS ────────────────────────────────────── */
function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  const t = translations[currentLang].projects;
  el.innerHTML = t.items.map(item => `
    <article class="project-card">
      <div class="project-head">
        <span class="project-label">${item.label}</span>
        <h3>${item.title}</h3>
      </div>
      <div class="project-body">
        <h4>${t.problemLabel}</h4><p>${item.problem}</p>
        <h4>${t.actionLabel}</h4><p>${item.action}</p>
        <h4>${t.resultLabel}</h4><p>${item.result}</p>
        ${item.url ? `<a class="project-link" href="${item.url}" target="_blank" rel="noopener">${t.viewLive}</a>` : ''}
      </div>
    </article>
  `).join('');
}

/* ─── TESTIMONIALS ────────────────────────────────── */
function renderTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el) return;
  const items = (translations[currentLang].testimonials && translations[currentLang].testimonials.items) || [];
  el.innerHTML = items.map(item => `
    <figure class="testimonial-card">
      <blockquote class="testimonial-quote">${item.quote}</blockquote>
      <figcaption class="testimonial-meta">
        <span class="testimonial-name">${item.name}</span>
        ${item.role ? `<span class="testimonial-role">${item.role}</span>` : ''}
      </figcaption>
    </figure>
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
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));

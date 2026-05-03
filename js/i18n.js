
🔧 js/i18n.js — kompletten Inhalt ersetzen
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

function renderBeliefs() {
  const el = document.getElementById('beliefs-grid');
  if (!el) return;
  const items = (translations[currentLang].beliefs && translations[currentLang].beliefs.items) || [];
  el.innerHTML = items.map(i => `
    <article class="belief-card">
      <p class="belief-statement">${i.statement}</p>
      <p class="belief-detail">${i.detail}</p>
    </article>
  `).join('');
}

function renderExperience() {
  const el = document.getElementById('experience-timeline');
  if (!el) return;
  const items = translations[currentLang].experience.items || [];
  el.innerHTML = items.map(i => `
    <div class="timeline-item">
      <div class="timeline-period">${i.period}</div>
      <div class="timeline-role">${i.role}</div>
      <div class="timeline-company">${i.company}</div>
      <div class="timeline-points">${i.points}</div>
      ${i.insight ? `<div class="timeline-insight">${i.insight}</div>` : ''}
    </div>
  `).join('');
}

function renderSuperpowers() {
  const el = document.getElementById('superpowers-grid');
  if (!el) return;
  const t = translations[currentLang].services;
  const items = (t && t.superpowers) || [];
  const exLabel = (t && t.exampleLabel) || 'Example';
  el.innerHTML = items.map((s, idx) => `
    <article class="superpower-card">
      <span class="superpower-number">0${idx + 1}</span>
      <h3 class="superpower-title">${s.title}</h3>
      <p class="superpower-desc">${s.description}</p>
      ${s.example ? `<p class="superpower-example"><span class="superpower-example-label">${exLabel}</span> ${s.example}</p>` : ''}
    </article>
  `).join('');
}

function renderSkills() {
  const el = document.getElementById('skills-grid');
  if (!el) return;
  const cats = translations[currentLang].skills.categories;
  el.innerHTML = Object.entries(cats).map(([k, c]) => `
    <div class="skill-category">
      <h4>${c.label}</h4>
      <ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  const t = translations[currentLang].projects;
  el.innerHTML = t.items.map(i => `
    <article class="project-card${i.thumb ? ' has-thumb' : ''}">
      ${i.thumb ? `<div class="project-thumb"><img src="${i.thumb}" alt="${i.thumbAlt || i.title}" loading="lazy" decoding="async"></div>` : ''}
      <div class="project-body">
        <span class="project-label">${i.label}</span>
        <h3>${i.title}</h3>
        <h4>${t.problemLabel}</h4><p>${i.problem}</p>
        <h4>${t.actionLabel}</h4><p>${i.action}</p>
        <h4>${t.resultLabel}</h4><p>${i.result}</p>
        ${i.url ? `<a href="${i.url}" target="_blank" rel="noopener">${t.viewLive}</a>` : ''}
      </div>
    </article>
  `).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el) return;
  const items = (translations[currentLang].testimonials && translations[currentLang].testimonials.items) || [];
  el.innerHTML = items.map(i => `
    <figure class="testimonial-card">
      <blockquote class="testimonial-quote">${i.quote}</blockquote>
      <figcaption class="testimonial-meta">
        <span class="testimonial-name">${i.name}</span>
        ${i.role ? `<span class="testimonial-role">${i.role}</span>` : ''}
      </figcaption>
    </figure>
  `).join('');
}

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
  renderSuperpowers();
  renderSkills();
  renderProjects();
  renderTestimonials();
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));

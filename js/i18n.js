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
    </div>
  `).join('');
}

function renderServices() {
  const t = translations[currentLang].services;
  const communityPanel = document.getElementById('tab-community');
  const businessPanel = document.getElementById('tab-business');
  if (!communityPanel || !businessPanel) return;
  communityPanel.innerHTML = `<div class="services-grid">
    ${t.community.map(s => `<div class="service-card"><h4>${s.title}</h4><p>${s.content}</p></div>`).join('')}
  </div>`;
  businessPanel.innerHTML = `<div class="services-grid">
    ${t.business.map(s => `<div class="service-card"><h4>${s.title}</h4><p>${s.content}</p></div>`).join('')}
  </div>`;
}

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

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  const t = translations[currentLang].projects;
  container.innerHTML = t.items.map(item => `
    <article class="project-card">
      <span class="project-label">${item.label}</span>
      <h3>${item.title}</h3>
      <h4>${t.problemLabel}</h4><p>${item.problem}</p>
      <h4>${t.actionLabel}</h4><p>${item.action}</p>
      <h4>${t.resultLabel}</h4><p>${item.result}</p>
      ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">${t.viewLive}</a>` : ''}
    </article>
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
  renderExperience();
  renderServices();
  renderSkills();
  renderProjects();
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

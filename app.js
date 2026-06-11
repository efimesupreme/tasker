const demoProjects = [
  {
    title: 'Редизайн личного кабинета',
    description: 'Заготовка карточки для будущего списка проектных инициатив.',
    status: 'Активный',
    accent: 'blue',
    owner: 'Команда продукта',
    updated: 'Сегодня'
  },
  {
    title: 'Запуск базы знаний',
    description: 'Демо-проект без задач, зависимостей и сложной логики.',
    status: 'Планирование',
    accent: 'green',
    owner: 'Операции',
    updated: 'Вчера'
  },
  {
    title: 'Подготовка квартального отчёта',
    description: 'Пример будущего элемента панели проектов.',
    status: 'Черновик',
    accent: 'orange',
    owner: 'Аналитика',
    updated: 'На неделе'
  }
];

const statusColors = {
  blue: 'rgba(79, 140, 255, 0.14)',
  green: 'rgba(61, 220, 151, 0.14)',
  orange: 'rgba(255, 176, 82, 0.14)',
  red: 'rgba(255, 107, 107, 0.14)'
};

const statusTextColors = {
  blue: '#b9d0ff',
  green: '#b9f4d8',
  orange: '#ffd8a8',
  red: '#ffc0c0'
};

function renderProjectCards(projects) {
  const list = document.querySelector('#project-list');

  if (!list) {
    return;
  }

  list.innerHTML = projects.map((project) => {
    const background = statusColors[project.accent] || statusColors.blue;
    const color = statusTextColors[project.accent] || statusTextColors.blue;

    return `
      <article class="project-card">
        <span class="project-card__status" style="background: ${background}; color: ${color};">${project.status}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-card__meta">
          <span>${project.owner}</span>
          <span>${project.updated}</span>
        </div>
      </article>
    `;
  }).join('');
}

function fillDemoWidgets(projects) {
  const active = document.querySelector('[data-widget="active"]');
  const next = document.querySelector('[data-widget="next"]');
  const attention = document.querySelector('[data-widget="attention"]');
  const stalled = document.querySelector('[data-widget="stalled"]');

  if (active) active.textContent = projects.length;
  if (next) next.textContent = '—';
  if (attention) attention.textContent = '—';
  if (stalled) stalled.textContent = '—';
}

renderProjectCards(demoProjects);
fillDemoWidgets(demoProjects);

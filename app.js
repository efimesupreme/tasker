const demoProjects = [
  {
    id: 'career',
    title: 'Карьера',
    description: 'Долгосрочный рост роли, навыков, портфолио и профессиональных связей.',
    status: 'active',
    progress: 62,
    lastActivityDate: '2026-06-09',
    nextAction: 'Обновить карту компетенций и выбрать один навык для фокуса на июнь.',
    groups: [
      {
        id: 'career-growth',
        title: 'Рост и позиционирование',
        tasks: [
          { id: 'career-skills-map', title: 'Карта компетенций', status: 'active', blocked: false },
          { id: 'career-portfolio', title: 'Портфолио кейсов', status: 'planned', blocked: false }
        ]
      }
    ]
  },
  {
    id: 'renovation',
    title: 'Ремонт',
    description: 'Большой бытовой проект: планирование комнат, подрядчики, закупки и контроль сроков.',
    status: 'waiting',
    progress: 34,
    lastActivityDate: '2026-05-20',
    nextAction: 'Дождаться сметы от электрика и согласовать перечень материалов.',
    groups: [
      {
        id: 'renovation-contractors',
        title: 'Подрядчики',
        tasks: [
          { id: 'renovation-electrician-estimate', title: 'Смета электрика', status: 'waiting', blocked: true },
          { id: 'renovation-paint-samples', title: 'Выбрать образцы краски', status: 'planned', blocked: false }
        ]
      }
    ]
  },
  {
    id: 'galaxy-heroes',
    title: 'Герои Галактики',
    description: 'Творческий проект по миру, героям, сюжетным аркам и выпуску первой истории.',
    status: 'planned',
    progress: 18,
    lastActivityDate: '2026-06-01',
    nextAction: 'Собрать список главных героев и описать мотивацию антагониста.',
    groups: [
      {
        id: 'galaxy-worldbuilding',
        title: 'Мир и персонажи',
        tasks: [
          { id: 'galaxy-characters', title: 'Список героев', status: 'planned', blocked: false },
          { id: 'galaxy-antagonist', title: 'Антагонист', status: 'idea', blocked: false }
        ]
      }
    ]
  },
  {
    id: 'aurelia-18',
    title: 'Аурелия-18',
    description: 'Исследовательская инициатива с гипотезами, заметками и отдельным журналом решений.',
    status: 'frozen',
    progress: 9,
    lastActivityDate: '2026-04-28',
    nextAction: 'Решить, размораживать проект в этом квартале или перенести в архив ожидания.',
    groups: [
      {
        id: 'aurelia-research',
        title: 'Исследование',
        tasks: [
          { id: 'aurelia-hypotheses', title: 'Проверить гипотезы', status: 'frozen', blocked: true },
          { id: 'aurelia-log', title: 'Журнал решений', status: 'planned', blocked: false }
        ]
      }
    ]
  },
  {
    id: 'book-fin-accounting',
    title: 'БухФинУчёт',
    description: 'Система личного бухгалтерского, финансового и налогового учёта без лишней сложности.',
    status: 'active',
    progress: 47,
    lastActivityDate: '2026-06-10',
    nextAction: 'Разобрать входящие операции за неделю и отметить повторяющиеся платежи.',
    groups: [
      {
        id: 'book-fin-routines',
        title: 'Регулярный учёт',
        tasks: [
          { id: 'book-fin-inbox', title: 'Разбор операций', status: 'active', blocked: false },
          { id: 'book-fin-tax-folder', title: 'Папка налоговых документов', status: 'planned', blocked: false }
        ]
      }
    ]
  }
];

const projectStatuses = {
  idea: { label: 'Идея', accent: 'violet' },
  planned: { label: 'Запланировано', accent: 'blue' },
  active: { label: 'В работе', accent: 'green' },
  waiting: { label: 'Ждёт', accent: 'orange' },
  frozen: { label: 'Заморожено', accent: 'cyan' },
  done: { label: 'Завершено', accent: 'green' },
  cancelled: { label: 'Отменено', accent: 'red' }
};

const statusColors = {
  blue: 'rgba(79, 140, 255, 0.14)',
  green: 'rgba(61, 220, 151, 0.14)',
  orange: 'rgba(255, 176, 82, 0.14)',
  red: 'rgba(255, 107, 107, 0.14)',
  violet: 'rgba(178, 119, 255, 0.14)',
  cyan: 'rgba(108, 226, 255, 0.14)'
};

const statusTextColors = {
  blue: '#b9d0ff',
  green: '#b9f4d8',
  orange: '#ffd8a8',
  red: '#ffc0c0',
  violet: '#dbc4ff',
  cyan: '#c2f5ff'
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getStatusMeta(status) {
  return projectStatuses[status] || projectStatuses.idea;
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(dateValue));
}

function getDaysSince(dateValue) {
  const now = new Date();
  const lastActivity = new Date(dateValue);
  const millisecondsInDay = 24 * 60 * 60 * 1000;

  return Math.floor((now - lastActivity) / millisecondsInDay);
}

function getProjectTasks(project) {
  return project.groups.flatMap((group) => group.tasks || []);
}

function renderProjectCards(projects) {
  const list = document.querySelector('#project-list');

  if (!list) {
    return;
  }

  list.innerHTML = projects.map((project) => {
    const status = getStatusMeta(project.status);
    const background = statusColors[status.accent] || statusColors.blue;
    const color = statusTextColors[status.accent] || statusTextColors.blue;
    const progress = Math.min(Math.max(project.progress, 0), 100);

    return `
      <article class="project-card">
        <div class="project-card__header">
          <span class="project-card__status" style="background: ${background}; color: ${color};">${escapeHtml(status.label)}</span>
          <span class="project-card__progress-value">${progress}%</span>
        </div>
        <h4>${escapeHtml(project.title)}</h4>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-card__progress" aria-label="Прогресс проекта ${escapeHtml(project.title)}: ${progress}%">
          <span style="width: ${progress}%;"></span>
        </div>
        <dl class="project-card__details">
          <div>
            <dt>Последнее движение</dt>
            <dd>${formatDate(project.lastActivityDate)}</dd>
          </div>
          <div>
            <dt>Следующее действие</dt>
            <dd>${escapeHtml(project.nextAction)}</dd>
          </div>
        </dl>
      </article>
    `;
  }).join('');
}

function fillDemoWidgets(projects) {
  const active = document.querySelector('[data-widget="active"]');
  const next = document.querySelector('[data-widget="next"]');
  const blocked = document.querySelector('[data-widget="blocked"]');
  const stalled = document.querySelector('[data-widget="stalled"]');

  const activeProjects = projects.filter((project) => project.status === 'active').length;
  const availableActions = projects.filter((project) => project.nextAction && !['done', 'cancelled', 'frozen'].includes(project.status)).length;
  const blockedTasks = projects.reduce((total, project) => {
    return total + getProjectTasks(project).filter((task) => task.blocked).length;
  }, 0);
  const inactiveProjects = projects.filter((project) => getDaysSince(project.lastActivityDate) >= 14).length;

  if (active) active.textContent = activeProjects;
  if (next) next.textContent = availableActions;
  if (blocked) blocked.textContent = blockedTasks;
  if (stalled) stalled.textContent = inactiveProjects;
}

renderProjectCards(demoProjects);
fillDemoWidgets(demoProjects);

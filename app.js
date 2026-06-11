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
        status: 'active',
        weight: 4,
        progress: 50,
        tasks: [
          {
            id: 'career-skills-map',
            title: 'Карта компетенций',
            status: 'done',
            weight: 2,
            dependsOn: [],
            lastActivityDate: '2026-06-08',
            note: 'Базовая версия карты собрана.',
            blocked: false
          },
          {
            id: 'career-portfolio',
            title: 'Портфолио кейсов',
            status: 'planned',
            weight: 2,
            dependsOn: ['career-skills-map'],
            lastActivityDate: '2026-06-09',
            note: 'Выбрать 2–3 сильных кейса для первого прохода.',
            blocked: false
          }
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
        status: 'waiting',
        weight: 5,
        progress: 34,
        tasks: [
          {
            id: 'renovation-electrician-estimate',
            title: 'Смета электрика',
            status: 'waiting',
            weight: 3,
            dependsOn: [],
            lastActivityDate: '2026-05-20',
            note: 'Ожидается ответ подрядчика.',
            blocked: true
          },
          {
            id: 'renovation-paint-samples',
            title: 'Выбрать образцы краски',
            status: 'planned',
            weight: 2,
            dependsOn: ['renovation-electrician-estimate'],
            lastActivityDate: '2026-05-18',
            note: 'Можно сделать после уточнения бюджета.',
            blocked: false
          }
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
        status: 'planned',
        weight: 3,
        progress: 25,
        tasks: [
          {
            id: 'galaxy-characters',
            title: 'Список героев',
            status: 'planned',
            weight: 2,
            dependsOn: [],
            lastActivityDate: '2026-06-01',
            note: 'Собрать имена, роли и короткие арки.',
            blocked: false
          },
          {
            id: 'galaxy-antagonist',
            title: 'Антагонист',
            status: 'idea',
            weight: 1,
            dependsOn: ['galaxy-characters'],
            lastActivityDate: '2026-05-30',
            note: 'Черновик мотивации без финальной формулировки.',
            blocked: false
          }
        ]
      },
      {
        id: 'galaxy-granicon-application',
        title: 'Податься на Граникон',
        status: 'active',
        weight: 5,
        progress: 20,
        tasks: [
          {
            id: 'granicon-check-requirements',
            title: 'Проверить требования участия',
            status: 'done',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-02',
            note: 'Зафиксировать формат заявки, дедлайн и ограничения.',
            blocked: false
          },
          {
            id: 'granicon-make-enp',
            title: 'Сделать ENP',
            status: 'active',
            weight: 2,
            dependsOn: ['granicon-check-requirements'],
            lastActivityDate: '2026-06-03',
            note: 'Подготовить англоязычное описание проекта для заявки.',
            blocked: false
          },
          {
            id: 'granicon-rules-2',
            title: 'Обновить правила до версии 2.0',
            status: 'planned',
            weight: 3,
            dependsOn: ['granicon-check-requirements'],
            lastActivityDate: '2026-06-01',
            note: 'Не менять прогресс автоматически: статус задан вручную.',
            blocked: false
          },
          {
            id: 'granicon-short-pitch',
            title: 'Подготовить краткую презентацию игры',
            status: 'planned',
            weight: 2,
            dependsOn: ['granicon-make-enp', 'granicon-rules-2'],
            lastActivityDate: '2026-06-01',
            note: 'Сделать короткую структуру: суть, аудитория, уникальность.',
            blocked: false
          },
          {
            id: 'granicon-prototype-photo',
            title: 'Сделать фото прототипа',
            status: 'planned',
            weight: 1,
            dependsOn: ['granicon-rules-2'],
            lastActivityDate: '2026-06-01',
            note: 'Нужны 2–3 понятные фотографии для формы.',
            blocked: false
          },
          {
            id: 'granicon-fill-application',
            title: 'Заполнить заявку',
            status: 'planned',
            weight: 2,
            dependsOn: ['granicon-short-pitch', 'granicon-prototype-photo'],
            lastActivityDate: '2026-06-01',
            note: 'Перенести готовые материалы в форму.',
            blocked: false
          },
          {
            id: 'granicon-send-application',
            title: 'Отправить заявку',
            status: 'planned',
            weight: 1,
            dependsOn: ['granicon-fill-application'],
            lastActivityDate: '2026-06-01',
            note: 'Финальный шаг после ручной проверки всех полей.',
            blocked: false
          }
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
        status: 'frozen',
        weight: 4,
        progress: 9,
        tasks: [
          {
            id: 'aurelia-hypotheses',
            title: 'Проверить гипотезы',
            status: 'frozen',
            weight: 3,
            dependsOn: [],
            lastActivityDate: '2026-04-28',
            note: 'Работа остановлена до решения о разморозке.',
            blocked: true
          },
          {
            id: 'aurelia-log',
            title: 'Журнал решений',
            status: 'planned',
            weight: 1,
            dependsOn: ['aurelia-hypotheses'],
            lastActivityDate: '2026-04-25',
            note: 'Подготовить шаблон записей.',
            blocked: false
          }
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
        status: 'active',
        weight: 4,
        progress: 47,
        tasks: [
          {
            id: 'book-fin-inbox',
            title: 'Разбор операций',
            status: 'active',
            weight: 3,
            dependsOn: [],
            lastActivityDate: '2026-06-10',
            note: 'Разобрать новые операции за неделю.',
            blocked: false
          },
          {
            id: 'book-fin-tax-folder',
            title: 'Папка налоговых документов',
            status: 'planned',
            weight: 1,
            dependsOn: ['book-fin-inbox'],
            lastActivityDate: '2026-06-07',
            note: 'Собрать документы в отдельную структуру.',
            blocked: false
          }
        ]
      }
    ]
  }
];

let selectedProjectId = 'galaxy-heroes';

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

function clampProgress(progress) {
  return Math.min(Math.max(progress, 0), 100);
}

function getSelectedProject(projects) {
  return projects.find((project) => project.id === selectedProjectId) || projects[0];
}

function getStatusBadge(statusValue) {
  const status = getStatusMeta(statusValue);
  const background = statusColors[status.accent] || statusColors.blue;
  const color = statusTextColors[status.accent] || statusTextColors.blue;

  return `<span class="project-card__status" style="background: ${background}; color: ${color};">${escapeHtml(status.label)}</span>`;
}

function renderProjectCards(projects) {
  const list = document.querySelector('#project-list');

  if (!list) {
    return;
  }

  list.innerHTML = projects.map((project) => {
    const progress = clampProgress(project.progress);
    const isSelected = project.id === selectedProjectId;

    return `
      <article class="project-card ${isSelected ? 'project-card--selected' : ''}">
        <button class="project-card__select" type="button" data-project-id="${escapeHtml(project.id)}" aria-pressed="${isSelected}" aria-label="Выбрать проект ${escapeHtml(project.title)}">
          <span class="project-card__header">
            ${getStatusBadge(project.status)}
            <span class="project-card__progress-value">${progress}%</span>
          </span>
          <span class="project-card__title">${escapeHtml(project.title)}</span>
          <span class="project-card__description">${escapeHtml(project.description)}</span>
          <span class="project-card__progress" aria-label="Прогресс проекта ${escapeHtml(project.title)}: ${progress}%">
            <span style="width: ${progress}%;"></span>
          </span>
          <span class="project-card__details">
            <span>
              <span class="project-card__term">Последнее движение</span>
              <span class="project-card__definition">${formatDate(project.lastActivityDate)}</span>
            </span>
            <span>
              <span class="project-card__term">Следующее действие</span>
              <span class="project-card__definition">${escapeHtml(project.nextAction)}</span>
            </span>
          </span>
        </button>
      </article>
    `;
  }).join('');

  list.querySelectorAll('[data-project-id]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProjectId = button.dataset.projectId;
      renderProjectCards(projects);
      renderSelectedProject(projects);
    });
  });
}

function renderSelectedProject(projects) {
  const details = document.querySelector('#selected-project-details');

  if (!details) {
    return;
  }

  const project = getSelectedProject(projects);
  const progress = clampProgress(project.progress);
  const totalGroups = project.groups.length;
  const totalTasks = getProjectTasks(project).length;

  details.innerHTML = `
    <article class="project-map__hero">
      <div class="project-map__summary">
        <p class="eyebrow">Выбранный проект</p>
        <div class="project-map__title-row">
          <h3>${escapeHtml(project.title)}</h3>
          ${getStatusBadge(project.status)}
        </div>
        <p>${escapeHtml(project.description)}</p>
        <dl class="project-map__meta">
          <div>
            <dt>Группы задач</dt>
            <dd>${totalGroups}</dd>
          </div>
          <div>
            <dt>Подзадачи</dt>
            <dd>${totalTasks}</dd>
          </div>
          <div>
            <dt>Последнее движение</dt>
            <dd>${formatDate(project.lastActivityDate)}</dd>
          </div>
        </dl>
      </div>
      <div class="project-map__progress-card">
        <span>Общий прогресс</span>
        <strong>${progress}%</strong>
        <div class="project-map__progress" aria-label="Общий прогресс проекта ${escapeHtml(project.title)}: ${progress}%">
          <span style="width: ${progress}%;"></span>
        </div>
        <p>${escapeHtml(project.nextAction)}</p>
      </div>
    </article>

    <div class="task-groups" aria-label="Группы задач проекта ${escapeHtml(project.title)}">
      ${project.groups.map((group, index) => renderTaskGroup(group, index)).join('')}
    </div>
  `;
}

function renderTaskGroup(group, index) {
  const progress = clampProgress(group.progress);
  const tasks = group.tasks || [];

  return `
    <details class="task-group" ${index === 0 ? 'open' : ''}>
      <summary>
        <span class="task-group__heading">
          <span class="task-group__title">${escapeHtml(group.title)}</span>
          <span class="task-group__stats">Вес ${escapeHtml(group.weight)} · ${tasks.length} задач · ${progress}%</span>
        </span>
        ${getStatusBadge(group.status)}
      </summary>
      <div class="task-group__progress" aria-label="Прогресс группы ${escapeHtml(group.title)}: ${progress}%">
        <span style="width: ${progress}%;"></span>
      </div>
      <div class="task-list">
        ${tasks.map((task) => renderTask(task)).join('')}
      </div>
    </details>
  `;
}

function renderTask(task) {
  const isDone = task.status === 'done';
  const dependsOn = task.dependsOn?.length ? task.dependsOn.join(', ') : 'нет';

  return `
    <article class="task-item ${isDone ? 'task-item--done' : ''}">
      <label class="task-item__main">
        <input type="checkbox" ${isDone ? 'checked' : ''} disabled>
        <span>
          <strong>${escapeHtml(task.title)}</strong>
          <small>${getStatusMeta(task.status).label} · вес ${escapeHtml(task.weight)} · активность ${formatDate(task.lastActivityDate)}</small>
        </span>
      </label>
      <p>${escapeHtml(task.note)}</p>
      <span class="task-item__depends">Зависит от: ${escapeHtml(dependsOn)}</span>
    </article>
  `;
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
renderSelectedProject(demoProjects);
fillDemoWidgets(demoProjects);

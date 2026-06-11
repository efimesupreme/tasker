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
        lastActivityDate: '2026-06-09',
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
        lastActivityDate: '2026-05-20',
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
    status: 'active',
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
        lastActivityDate: '2026-06-01',
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
        lastActivityDate: '2026-06-03',
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
            dependsOn: ['granicon-check-requirements', 'granicon-make-enp', 'granicon-short-pitch', 'granicon-prototype-photo'],
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
        lastActivityDate: '2026-04-28',
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
        lastActivityDate: '2026-06-10',
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

const STORAGE_KEY = 'tasker.projects.v1';
const STALLED_DAYS_THRESHOLD = 14;
const NON_STALLED_STATUSES = ['done', 'cancelled', 'frozen'];

let projects = loadProjects();
let selectedProjectId = projects.some((project) => project.id === 'galaxy-heroes') ? 'galaxy-heroes' : projects[0]?.id || null;
let activeSectionId = 'dashboard';
let activeProjectFilter = 'all';

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


function cloneProjects(projectList) {
  return JSON.parse(JSON.stringify(projectList));
}

function getLatestDate(...dateValues) {
  return dateValues
    .filter(Boolean)
    .sort((first, second) => new Date(second) - new Date(first))[0] || getTodayIsoDate();
}

function normalizeProjects(projectList) {
  return projectList.map((project) => {
    project.groups = project.groups || [];
    project.lastActivityDate = project.lastActivityDate || getTodayIsoDate();

    project.groups.forEach((group) => {
      group.tasks = group.tasks || [];
      group.tasks.forEach((task) => {
        task.lastActivityDate = task.lastActivityDate || project.lastActivityDate;
      });
      group.lastActivityDate = group.lastActivityDate || getLatestDate(
        ...group.tasks.map((task) => task.lastActivityDate),
        project.lastActivityDate
      );
    });

    return project;
  });
}

function loadProjects() {
  try {
    const savedProjects = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');

    if (Array.isArray(savedProjects)) {
      return normalizeProjects(savedProjects);
    }
  } catch (error) {
    console.warn('Не удалось прочитать сохранённые проекты, используются демо-данные.', error);
  }

  return normalizeProjects(cloneProjects(demoProjects));
}

function persistProjects() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.warn('Не удалось сохранить проекты в браузере.', error);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function warnMissingElement(selector, context) {
  console.warn(`Не найден DOM-элемент ${selector}. ${context} пропущен.`);
}


function getTodayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function createEntityId(prefix, title) {
  const slug = String(title || 'item')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 34) || 'item';
  const suffix = Math.random().toString(36).slice(2, 8);

  return `${prefix}-${slug}-${suffix}`;
}

function getStatusOptions(selectedStatus) {
  return Object.entries(projectStatuses).map(([value, meta]) => {
    return `<option value="${escapeHtml(value)}" ${value === selectedStatus ? 'selected' : ''}>${escapeHtml(meta.label)}</option>`;
  }).join('');
}

function findProject(projectId) {
  return projects.find((project) => project.id === projectId);
}

function findGroup(project, groupId) {
  return project?.groups.find((group) => group.id === groupId);
}

function findTask(project, taskId) {
  return getProjectTasks(project).find((task) => task.id === taskId);
}

function getTaskGroup(project, taskId) {
  return project?.groups.find((group) => (group.tasks || []).some((task) => task.id === taskId));
}

function hasDependencyPath(project, fromTaskId, targetTaskId, visited = new Set()) {
  if (fromTaskId === targetTaskId) {
    return true;
  }

  if (visited.has(fromTaskId)) {
    return false;
  }

  visited.add(fromTaskId);
  const task = findTask(project, fromTaskId);

  if (!task) {
    return false;
  }

  return (task.dependsOn || []).some((dependencyId) => {
    return hasDependencyPath(project, dependencyId, targetTaskId, visited);
  });
}

function getDependencyOptions(project, currentTaskId, selectedDependencyIds = []) {
  const groups = project?.groups || [];
  const options = groups.map((group) => {
    const taskOptions = (group.tasks || [])
      .filter((task) => task.id !== currentTaskId)
      .map((task) => {
        const wouldCycle = currentTaskId && hasDependencyPath(project, task.id, currentTaskId);
        const isSelected = selectedDependencyIds.includes(task.id);
        const label = wouldCycle ? `${task.title} — создаст цикл` : task.title;

        return `<option value="${escapeHtml(task.id)}" ${isSelected ? 'selected' : ''} ${wouldCycle ? 'disabled' : ''}>${escapeHtml(label)}</option>`;
      }).join('');

    if (!taskOptions) {
      return '';
    }

    return `<optgroup label="${escapeHtml(group.title)}">${taskOptions}</optgroup>`;
  }).join('');

  return options || '<option disabled>В проекте пока нет других подзадач</option>';
}

function getSelectedValues(select) {
  return Array.from(select?.selectedOptions || []).map((option) => option.value);
}

function closeEntityModal() {
  const modal = document.querySelector('#entity-modal');

  if (modal) {
    modal.hidden = true;
  }
}

function openEntityModal(title, formHtml) {
  const modal = document.querySelector('#entity-modal');
  const content = document.querySelector('#entity-modal-content');

  if (!modal || !content) {
    warnMissingElement(!modal ? '#entity-modal' : '#entity-modal-content', 'Открытие модального окна');
    return;
  }

  content.innerHTML = `
    <p class="eyebrow">Редактирование данных</p>
    <h3 class="modal__title" id="entity-modal-title">${escapeHtml(title)}</h3>
    ${formHtml}
  `;
  modal.hidden = false;
  content.querySelector('input, textarea, select')?.focus();
}

function renderProjectForm(project = {}) {
  const deleteButton = project.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-project" data-project-id="${escapeHtml(project.id)}">Удалить проект</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="project" data-project-id="${escapeHtml(project.id || '')}">
      <label>Название<input name="title" required maxlength="80" value="${escapeHtml(project.title || '')}"></label>
      <label>Статус<select name="status">${getStatusOptions(project.status || 'planned')}</select></label>
      <label>Описание<textarea name="description" rows="3">${escapeHtml(project.description || '')}</textarea></label>
      <label>Следующее действие<textarea name="nextAction" rows="2">${escapeHtml(project.nextAction || '')}</textarea></label>
      <div class="entity-form__danger">
        ${deleteButton}
      </div>
      <div class="entity-form__actions">
        <button class="ghost-button" type="button" data-modal-close>Отмена</button>
        <button class="primary-button" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

function renderGroupForm(projectId, group = {}) {
  const deleteButton = group.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}">Удалить суммарную задачу</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id || '')}">
      <label>Название<input name="title" required maxlength="80" value="${escapeHtml(group.title || '')}"></label>
      <label>Статус<select name="status">${getStatusOptions(group.status || 'planned')}</select></label>
      <label>Вес<input name="weight" type="number" min="1" max="100" step="1" value="${escapeHtml(group.weight || 1)}"></label>
      <div class="entity-form__actions entity-form__actions--split">
        <div class="entity-form__danger">${deleteButton}</div>
        <div class="entity-form__save-actions">
          <button class="ghost-button" type="button" data-modal-close>Отмена</button>
          <button class="primary-button" type="submit">Сохранить</button>
        </div>
      </div>
    </form>
  `;
}

function renderTaskForm(projectId, groupId, task = {}) {
  const project = findProject(projectId);
  const dependsOn = task.dependsOn || [];
  const deleteButton = task.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}">Удалить подзадачу</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="task" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(groupId)}" data-task-id="${escapeHtml(task.id || '')}">
      <label>Название<input name="title" required maxlength="100" value="${escapeHtml(task.title || '')}"></label>
      <label>Статус<select name="status">${getStatusOptions(task.status || 'planned')}</select></label>
      <label>Вес<input name="weight" type="number" min="1" max="100" step="1" value="${escapeHtml(task.weight || 1)}"></label>
      <label>Заметка<textarea name="note" rows="3">${escapeHtml(task.note || '')}</textarea></label>
      <label>Предшественники
        <select name="dependsOn" multiple size="6">
          ${getDependencyOptions(project, task.id, dependsOn)}
        </select>
        <span class="entity-form__hint">Можно выбрать несколько задач этого проекта. Сама задача и очевидные циклы недоступны.</span>
      </label>
      <div class="entity-form__actions entity-form__actions--split">
        <div class="entity-form__danger">${deleteButton}</div>
        <div class="entity-form__save-actions">
          <button class="ghost-button" type="button" data-modal-close>Отмена</button>
          <button class="primary-button" type="submit">Сохранить</button>
        </div>
      </div>
    </form>
  `;
}

function openCreateProjectForm() {
  openEntityModal('Новый проект', renderProjectForm());
}

function openEditProjectForm(projectId) {
  const project = findProject(projectId);
  if (project) openEntityModal('Редактирование проекта', renderProjectForm(project));
}

function openCreateGroupForm(projectId) {
  openEntityModal('Новая суммарная задача', renderGroupForm(projectId));
}

function openEditGroupForm(projectId, groupId) {
  const group = findGroup(findProject(projectId), groupId);
  if (group) openEntityModal('Редактирование суммарной задачи', renderGroupForm(projectId, group));
}

function openCreateTaskForm(projectId, groupId) {
  openEntityModal('Новая подзадача', renderTaskForm(projectId, groupId));
}

function openEditTaskForm(projectId, taskId) {
  const project = findProject(projectId);
  const group = getTaskGroup(project, taskId);
  const task = findTask(project, taskId);

  if (group && task) {
    openEntityModal('Редактирование подзадачи', renderTaskForm(projectId, group.id, task));
  }
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

function hasNonStalledStatus(item) {
  return NON_STALLED_STATUSES.includes(item.status);
}

function isStalledItem(item) {
  return !hasNonStalledStatus(item)
    && getDaysSince(item.lastActivityDate) >= STALLED_DAYS_THRESHOLD;
}

function getStalledItems(projects) {
  return projects.flatMap((project) => {
    const items = [];

    if (isStalledItem(project)) {
      items.push({ type: 'project', item: project, project });
    }

    if (hasNonStalledStatus(project)) {
      return items;
    }

    (project.groups || []).forEach((group) => {
      if (isStalledItem(group)) {
        items.push({ type: 'group', item: group, project, group });
      }

      if (hasNonStalledStatus(group)) {
        return;
      }

      (group.tasks || []).forEach((task) => {
        if (isStalledItem(task)) {
          items.push({ type: 'task', item: task, project, group, task });
        }
      });
    });

    return items;
  }).sort((first, second) => getDaysSince(second.item.lastActivityDate) - getDaysSince(first.item.lastActivityDate));
}

function getProjectTasks(project) {
  return (project?.groups || []).flatMap((group) => group.tasks || []);
}

function getAllTasks(projects) {
  return projects.flatMap((project) => getProjectTasks(project));
}

function createTaskLookup(projects) {
  return new Map(getAllTasks(projects).map((task) => [task.id, task]));
}

function getBlockingDependencies(task, taskLookup) {
  return (task.dependsOn || [])
    .map((dependencyId) => taskLookup.get(dependencyId))
    .filter((dependency) => dependency && dependency.status !== 'done');
}

function isTaskBlocked(task, taskLookup) {
  return task.status !== 'done' && getBlockingDependencies(task, taskLookup).length > 0;
}

function isProjectActionSource(project) {
  return ['active', 'waiting'].includes(project.status);
}

function isTaskAvailable(task, project, taskLookup) {
  return task.status !== 'done'
    && !['frozen', 'cancelled'].includes(task.status)
    && !task.blocked
    && isProjectActionSource(project)
    && getBlockingDependencies(task, taskLookup).length === 0;
}

function getAvailableActions(projects) {
  const taskLookup = createTaskLookup(projects);

  return projects.flatMap((project) => {
    return project.groups.flatMap((group) => {
      return (group.tasks || [])
        .filter((task) => isTaskAvailable(task, project, taskLookup))
        .map((task) => ({ task, group, project }));
    });
  }).sort((first, second) => {
    return new Date(second.task.lastActivityDate) - new Date(first.task.lastActivityDate);
  });
}

function getDependencyTitles(task, taskLookup) {
  return (task.dependsOn || []).map((dependencyId) => {
    return taskLookup.get(dependencyId)?.title || dependencyId;
  });
}

function renderBlockedTaskMessage(task, taskLookup) {
  const blockingDependencies = getBlockingDependencies(task, taskLookup);
  const titles = blockingDependencies.map((dependency) => dependency.title).join(', ');

  return `Задача «${task.title}» заблокирована. Сначала завершите: ${titles}.`;
}

function updateBlockedTaskNotice(message) {
  const notice = document.querySelector('#task-blocked-notice');

  if (!notice) {
    return;
  }

  notice.textContent = message;
  notice.hidden = false;

  window.clearTimeout(updateBlockedTaskNotice.timeoutId);
  updateBlockedTaskNotice.timeoutId = window.setTimeout(() => {
    notice.hidden = true;
  }, 3600);
}

function clampProgress(progress) {
  const value = Number(progress);

  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(Math.max(value, 0), 100);
}

function toProgressPercent(value) {
  return Math.round(clampProgress(value));
}

function getProgressWeight(item) {
  const weight = Number(item?.weight);

  return Number.isFinite(weight) && weight > 0 ? weight : 0;
}

function getProgressWeights(items) {
  const weights = items.map((item) => getProgressWeight(item));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  if (totalWeight > 0) {
    return weights;
  }

  return items.map(() => 1);
}

function calculateWeightedProgress(items, getItemProgress) {
  if (!items.length) {
    return 0;
  }

  const weights = getProgressWeights(items);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  if (totalWeight === 0) {
    return 0;
  }

  const progress = items.reduce((sum, item, index) => {
    return sum + clampProgress(getItemProgress(item)) * weights[index];
  }, 0) / totalWeight;

  return toProgressPercent(progress);
}

function calculateTaskContribution(task) {
  return task.status === 'done' ? 100 : 0;
}

function calculateGroupProgress(group) {
  return calculateWeightedProgress(group.tasks || [], calculateTaskContribution);
}

function calculateProjectProgress(project) {
  return calculateWeightedProgress(project.groups || [], calculateGroupProgress);
}

function recalculateProjectProgress(project) {
  (project.groups || []).forEach((group) => {
    group.progress = calculateGroupProgress(group);
  });

  project.progress = calculateProjectProgress(project);
}

function recalculateAllProgress(projects) {
  projects.forEach(recalculateProjectProgress);
}

function ensureSelectedProject(projects) {
  if (!projects.length) {
    selectedProjectId = null;
    return null;
  }

  if (!projects.some((project) => project.id === selectedProjectId)) {
    selectedProjectId = projects[0].id;
  }

  return selectedProjectId;
}

function getSelectedProject(projects) {
  const selectedId = ensureSelectedProject(projects);
  return projects.find((project) => project.id === selectedId) || null;
}

function renderProjectTabs(projects) {
  const tabs = document.querySelector('#project-tabs');

  if (!tabs) {
    warnMissingElement('#project-tabs', 'Рендер верхнего меню проектов');
    return;
  }

  ensureSelectedProject(projects);

  const projectButtons = projects.map((project) => {
    const isSelected = project.id === selectedProjectId;

    return `
      <button class="menu__item project-tabs__item ${isSelected ? 'menu__item--active' : ''}" type="button" data-project-tab-id="${escapeHtml(project.id)}" aria-pressed="${isSelected}" title="${escapeHtml(project.title)}">
        <span class="project-tabs__title">${escapeHtml(project.title)}</span>
      </button>
    `;
  }).join('');

  tabs.innerHTML = `
    ${projectButtons}
    <button class="menu__item project-tabs__item project-tabs__item--create" type="button" data-action="create-project">+ Новый проект</button>
    <button class="menu__item project-tabs__settings" type="button" data-section-link="settings" aria-label="Настройки" title="Настройки">⚙</button>
  `;
}

function selectProject(projectId) {
  if (!findProject(projectId)) return;

  selectedProjectId = projectId;
  window.location.hash = 'dashboard';
  setActiveSection('dashboard');
  renderProjectTabs(projects);
  renderSelectedProject(projects);
}

function getStatusBadge(statusValue) {
  const status = getStatusMeta(statusValue);
  const background = statusColors[status.accent] || statusColors.blue;
  const color = statusTextColors[status.accent] || statusTextColors.blue;

  return `<span class="project-card__status" style="background: ${background}; color: ${color};">${escapeHtml(status.label)}</span>`;
}

function setActiveSection(sectionId) {
  const target = document.querySelector(`[data-section="${sectionId}"]`) ? sectionId : 'dashboard';
  activeSectionId = target;

  document.querySelectorAll('[data-section]').forEach((section) => {
    const isActive = section.dataset.section === target;
    section.hidden = !isActive;
    section.classList.toggle('app-section--active', isActive);
  });

  document.querySelectorAll('[data-section-link]').forEach((link) => {
    link.classList.toggle('menu__item--active', link.dataset.sectionLink === target && link.getAttribute('href') === `#${target}`);
  });
}

function setupSectionNavigation() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-section-link]');

    if (!link) return;

    event.preventDefault();
    const sectionId = link.dataset.sectionLink || 'dashboard';
    window.location.hash = sectionId;
    setActiveSection(sectionId);
  });

  const initialSection = window.location.hash.replace('#', '') || activeSectionId;
  setActiveSection(initialSection);
}

function completeTaskById(taskId, projects) {
  const taskLookup = createTaskLookup(projects);
  const task = taskLookup.get(taskId);

  if (!task || isTaskBlocked(task, taskLookup)) {
    return;
  }

  const today = getTodayIsoDate();
  const project = projects.find((item) => findTask(item, taskId));
  const group = getTaskGroup(project, taskId);

  task.status = 'done';
  task.lastActivityDate = today;
  if (group) group.lastActivityDate = today;
  if (project) project.lastActivityDate = today;
  persistProjects();
  renderAll(projects);
}


function saveProject(form) {
  const formData = new FormData(form);
  const projectId = form.dataset.projectId;
  const title = String(formData.get('title') || '').trim();

  if (!title) return;

  const project = projectId ? findProject(projectId) : null;
  const data = {
    title,
    status: formData.get('status') || 'planned',
    description: String(formData.get('description') || '').trim(),
    nextAction: String(formData.get('nextAction') || '').trim(),
    lastActivityDate: getTodayIsoDate()
  };

  if (project) {
    Object.assign(project, data);
  } else {
    const newProject = {
      id: createEntityId('project', title),
      progress: 0,
      groups: [],
      ...data
    };
    projects.unshift(newProject);
    selectedProjectId = newProject.id;
  }
}

function saveGroup(form) {
  const formData = new FormData(form);
  const project = findProject(form.dataset.projectId);
  const groupId = form.dataset.groupId;
  const title = String(formData.get('title') || '').trim();

  if (!project || !title) return;

  const group = groupId ? findGroup(project, groupId) : null;
  const data = {
    title,
    status: formData.get('status') || 'planned',
    weight: Number(formData.get('weight')) || 1,
    lastActivityDate: getTodayIsoDate()
  };

  if (group) {
    Object.assign(group, data);
  } else {
    project.groups.push({
      id: createEntityId('group', title),
      progress: 0,
      tasks: [],
      ...data
    });
  }

  project.lastActivityDate = getTodayIsoDate();
}

function saveTask(form) {
  const formData = new FormData(form);
  const project = findProject(form.dataset.projectId);
  const group = findGroup(project, form.dataset.groupId);
  const taskId = form.dataset.taskId;
  const title = String(formData.get('title') || '').trim();

  if (!project || !group || !title) return;

  const task = taskId ? findTask(project, taskId) : null;
  const safeDependsOn = getSelectedValues(form.elements.dependsOn).filter((dependencyId) => {
    return dependencyId !== taskId && (!taskId || !hasDependencyPath(project, dependencyId, taskId));
  });
  const data = {
    title,
    status: formData.get('status') || 'planned',
    weight: Number(formData.get('weight')) || 1,
    note: String(formData.get('note') || '').trim(),
    dependsOn: safeDependsOn,
    lastActivityDate: getTodayIsoDate(),
    blocked: false
  };

  if (task) {
    Object.assign(task, data);
  } else {
    group.tasks.push({
      id: createEntityId('task', title),
      ...data
    });
  }

  const today = getTodayIsoDate();
  group.lastActivityDate = today;
  project.lastActivityDate = today;
}

function handleEntityFormSubmit(event) {
  const form = event.target.closest('.entity-form');

  if (!form) return;

  event.preventDefault();

  if (form.dataset.formType === 'project') saveProject(form);
  if (form.dataset.formType === 'group') saveGroup(form);
  if (form.dataset.formType === 'task') saveTask(form);

  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteProject(projectId) {
  const project = findProject(projectId);
  if (!project || !window.confirm(`Удалить проект «${project.title}» со всеми суммарными задачами и подзадачами?`)) return;

  projects = projects.filter((item) => item.id !== projectId);
  selectedProjectId = projects[0]?.id || null;
  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteGroup(projectId, groupId) {
  const project = findProject(projectId);
  const group = findGroup(project, groupId);
  if (!project || !group || !window.confirm(`Удалить суммарную задачу «${group.title}» со всеми подзадачами?`)) return;

  const removedTaskIds = new Set((group.tasks || []).map((task) => task.id));
  project.groups = project.groups.filter((item) => item.id !== groupId);
  getProjectTasks(project).forEach((task) => {
    task.dependsOn = (task.dependsOn || []).filter((dependencyId) => !removedTaskIds.has(dependencyId));
  });
  project.lastActivityDate = getTodayIsoDate();
  recalculateProjectProgress(project);
  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteTask(projectId, taskId) {
  const project = findProject(projectId);
  const group = getTaskGroup(project, taskId);
  const task = findTask(project, taskId);
  if (!project || !group || !task || !window.confirm(`Удалить подзадачу «${task.title}»?`)) return;

  const today = getTodayIsoDate();
  group.tasks = (group.tasks || []).filter((item) => item.id !== taskId);
  getProjectTasks(project).forEach((item) => {
    item.dependsOn = (item.dependsOn || []).filter((dependencyId) => dependencyId !== taskId);
  });
  group.lastActivityDate = today;
  project.lastActivityDate = today;
  persistProjects();
  closeEntityModal();
  renderAll(projects);
}


function getStalledItemContext(type, projectId, itemId) {
  const project = findProject(projectId);

  if (!project) return null;
  if (type === 'project') return { type, project, item: project };

  if (type === 'group') {
    const group = findGroup(project, itemId);
    return group ? { type, project, group, item: group } : null;
  }

  if (type === 'task') {
    const task = findTask(project, itemId);
    const group = getTaskGroup(project, itemId);
    return task && group ? { type, project, group, task, item: task } : null;
  }

  return null;
}

function markStalledParentsActivity(context, today) {
  if (context.type !== 'project') {
    context.project.lastActivityDate = today;
  }

  if (context.type === 'task' && context.group) {
    context.group.lastActivityDate = today;
  }
}

function openStalledItem(projectId) {
  selectProject(projectId);
  document.querySelector('#selected-project-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyStalledItemUpdate(type, projectId, itemId, updates) {
  const context = getStalledItemContext(type, projectId, itemId);

  if (!context) return;

  const today = getTodayIsoDate();
  Object.assign(context.item, updates);
  context.item.lastActivityDate = today;
  markStalledParentsActivity(context, today);
  persistProjects();
  renderAll(projects);
}

function freezeStalledItem(type, projectId, itemId) {
  applyStalledItemUpdate(type, projectId, itemId, { status: 'frozen' });
}

function cancelStalledItem(type, projectId, itemId) {
  applyStalledItemUpdate(type, projectId, itemId, { status: 'cancelled' });
}

function markStalledItemMovement(type, projectId, itemId) {
  applyStalledItemUpdate(type, projectId, itemId, {});
}

function setupEntityControls() {
  document.addEventListener('click', (event) => {
    const closeButton = event.target.closest('[data-modal-close]');
    if (closeButton) {
      event.preventDefault();
      event.stopPropagation();
      closeEntityModal();
      return;
    }

    const projectTab = event.target.closest('[data-project-tab-id]');
    if (projectTab) {
      event.preventDefault();
      selectProject(projectTab.dataset.projectTabId);
      return;
    }

    const filterButton = event.target.closest('[data-project-filter]');
    if (filterButton) {
      event.preventDefault();
      activeProjectFilter = filterButton.dataset.projectFilter || 'all';
      renderSelectedProject(projects);
      return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (!actionButton) return;

    event.preventDefault();
    event.stopPropagation();

    const { action, projectId, groupId, taskId, itemType, itemId } = actionButton.dataset;

    switch (action) {
      case 'create-project':
        openCreateProjectForm();
        break;
      case 'edit-project':
        openEditProjectForm(projectId);
        break;
      case 'delete-project':
        deleteProject(projectId);
        break;
      case 'create-group':
        openCreateGroupForm(projectId);
        break;
      case 'edit-group':
        openEditGroupForm(projectId, groupId);
        break;
      case 'delete-group':
        deleteGroup(projectId, groupId);
        break;
      case 'create-task':
        openCreateTaskForm(projectId, groupId);
        break;
      case 'edit-task':
        openEditTaskForm(projectId, taskId);
        break;
      case 'delete-task':
        deleteTask(projectId, taskId);
        break;
      case 'open-stalled':
        openStalledItem(projectId);
        break;
      case 'freeze-stalled':
        freezeStalledItem(itemType, projectId, itemId);
        break;
      case 'cancel-stalled':
        cancelStalledItem(itemType, projectId, itemId);
        break;
      case 'touch-stalled':
        markStalledItemMovement(itemType, projectId, itemId);
        break;
      default:
        console.warn(`Неизвестное действие: ${action}`);
    }
  });

  document.addEventListener('submit', handleEntityFormSubmit);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeEntityModal();
  });
}



function getProjectFilterOptions() {
  return [
    { id: 'all', label: 'Все' },
    { id: 'next', label: 'Следующие' },
    { id: 'stalled', label: 'Зависшие' }
  ];
}

function isProjectFilter(value) {
  return getProjectFilterOptions().some((filter) => filter.id === value);
}

function getStalledProjectEntries(project) {
  return getStalledItems([project]).filter((entry) => entry.type !== 'project');
}

function getFilteredGroups(project, taskLookup, filter) {
  if (filter === 'next') {
    return (project.groups || []).map((group) => ({
      group,
      tasks: (group.tasks || []).filter((task) => isTaskAvailable(task, project, taskLookup)),
      isStalledGroup: false
    })).filter((entry) => entry.tasks.length);
  }

  if (filter === 'stalled') {
    const stalledEntries = getStalledProjectEntries(project);
    const stalledGroups = new Set(stalledEntries.filter((entry) => entry.type === 'group').map((entry) => entry.group.id));
    const stalledTasks = new Set(stalledEntries.filter((entry) => entry.type === 'task').map((entry) => entry.task.id));

    return (project.groups || []).map((group) => ({
      group,
      tasks: (group.tasks || []).filter((task) => stalledTasks.has(task.id)),
      isStalledGroup: stalledGroups.has(group.id)
    })).filter((entry) => entry.isStalledGroup || entry.tasks.length);
  }

  return (project.groups || []).map((group) => ({
    group,
    tasks: group.tasks || [],
    isStalledGroup: false
  }));
}

function renderProjectFilterBar(activeFilter) {
  return `
    <nav class="project-filters" aria-label="Фильтры задач проекта">
      ${getProjectFilterOptions().map((filter) => `
        <button class="project-filter ${filter.id === activeFilter ? 'project-filter--active' : ''}" type="button" data-project-filter="${escapeHtml(filter.id)}" aria-pressed="${filter.id === activeFilter}">${escapeHtml(filter.label)}</button>
      `).join('')}
    </nav>
  `;
}

function getProjectFilterEmptyText(filter) {
  if (filter === 'next') return 'Нет доступных подзадач';
  if (filter === 'stalled') return 'Нет зависших элементов';
  return 'В проекте пока нет суммарных задач. Добавьте первую суммарную задачу.';
}

function getTaskCompletionStats(tasks) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === 'done').length;

  return { done, total };
}

function renderCompletionText(stats) {
  return `${stats.done} из ${stats.total} подзадач`;
}

function renderSelectedProject(projects) {
  const details = document.querySelector('#selected-project-details');

  if (!details) {
    warnMissingElement('#selected-project-details', 'Рендер выбранного проекта');
    return;
  }

  const project = getSelectedProject(projects);

  if (!project) {
    details.innerHTML = '<div class="empty-section">Проектов пока нет. Нажмите «+ Новый проект» в верхней навигации, чтобы создать первый.</div>';
    return;
  }

  const progress = clampProgress(project.progress);
  const taskLookup = createTaskLookup(projects);
  const completion = getTaskCompletionStats(getProjectTasks(project));
  const activeFilter = isProjectFilter(activeProjectFilter) ? activeProjectFilter : 'all';
  const filteredGroups = getFilteredGroups(project, taskLookup, activeFilter);
  const groupsHtml = filteredGroups.length
    ? filteredGroups.map((entry) => renderTaskGroup(entry.group, taskLookup, project.id, entry.tasks, { filter: activeFilter, isStalledGroup: entry.isStalledGroup })).join('')
    : `<div class="empty-section empty-section--compact">${escapeHtml(getProjectFilterEmptyText(activeFilter))}</div>`;

  details.innerHTML = `
    <article class="project-workspace__hero">
      <div class="project-workspace__main">
        <div class="project-workspace__title-row">
          <div>
            <h2>${escapeHtml(project.title)}</h2>
          </div>
          ${getStatusBadge(project.status)}
        </div>
        <div class="project-workspace__progress-line">
          <span>Общий прогресс</span>
          <strong>${progress}%</strong>
        </div>
        <div class="project-map__progress" aria-label="Общий прогресс проекта ${escapeHtml(project.title)}: ${progress}%">
          <span style="width: ${progress}%;"></span>
        </div>
        <p class="project-workspace__completion">${escapeHtml(renderCompletionText(completion))}</p>
      </div>
      <div class="project-workspace__actions">
        <button class="mini-button" type="button" data-action="edit-project" data-project-id="${escapeHtml(project.id)}">Редактировать</button>
        <button class="primary-button" type="button" data-action="create-group" data-project-id="${escapeHtml(project.id)}">+ Суммарная задача</button>
      </div>
    </article>

    <div class="task-blocked-notice" id="task-blocked-notice" role="status" hidden></div>

    ${renderProjectFilterBar(activeFilter)}

    <section class="project-workspace__groups" aria-label="Список суммарных задач проекта">
      <div class="task-groups" aria-label="Суммарные задачи проекта ${escapeHtml(project.title)}">
        ${groupsHtml}
      </div>
    </section>
  `;

  details.querySelectorAll('input[type="checkbox"][data-task-id]').forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
      const task = taskLookup.get(checkbox.dataset.taskId);

      if (task && isTaskBlocked(task, taskLookup)) {
        event.preventDefault();
        updateBlockedTaskNotice(renderBlockedTaskMessage(task, taskLookup));
      }
    });

    checkbox.addEventListener('change', () => {
      const task = taskLookup.get(checkbox.dataset.taskId);

      if (!task) {
        return;
      }

      if (isTaskBlocked(task, taskLookup)) {
        checkbox.checked = false;
        updateBlockedTaskNotice(renderBlockedTaskMessage(task, taskLookup));
        return;
      }

      task.status = checkbox.checked ? 'done' : 'planned';
      if (checkbox.checked) {
        const today = getTodayIsoDate();
        task.lastActivityDate = today;
        const group = getTaskGroup(project, task.id);
        if (group) group.lastActivityDate = today;
        project.lastActivityDate = today;
      }
      persistProjects();
      renderAll(projects);
    });
  });
}

function renderTaskGroup(group, taskLookup, projectId, visibleTasks, options = {}) {
  const progress = clampProgress(group.progress);
  const tasks = visibleTasks || group.tasks || [];
  const allTasks = group.tasks || [];
  const completion = getTaskCompletionStats(allTasks);
  const emptyText = options.isStalledGroup ? 'Суммарная задача без движения 14+ дней' : 'В этой суммарной задаче пока нет подзадач.';

  return `
    <article class="task-group task-group--card">
      <div class="task-group__header">
        <div class="task-group__heading">
          <span class="task-group__title">${escapeHtml(group.title)}</span>
        </div>
        <button class="task-group__edit" type="button" data-action="edit-group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}" aria-label="Редактировать суммарную задачу">&#9998;</button>
      </div>
      <div class="task-group__meta-row">
        <span class="task-group__stats">${progress}% · ${escapeHtml(renderCompletionText(completion))}</span>
        <button class="add-task-button" type="button" data-action="create-task" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}">+ Подзадача</button>
      </div>
      <div class="task-group__progress" aria-label="Прогресс суммарной задачи ${escapeHtml(group.title)}: ${progress}%">
        <span style="width: ${progress}%;"></span>
      </div>
      <div class="task-list">
        ${tasks.length ? tasks.map((task) => renderTask(task, taskLookup, projectId)).join('') : `<div class="empty-section empty-section--compact">${escapeHtml(emptyText)}</div>`}
      </div>
    </article>
  `;
}

function renderTask(task, taskLookup, projectId) {
  const isDone = task.status === 'done';
  const isBlocked = isTaskBlocked(task, taskLookup);
  const dependencyTitles = getDependencyTitles(task, taskLookup);
  const dependencyText = dependencyTitles.join(', ');
  const taskClasses = [
    'task-item',
    isDone ? 'task-item--done' : '',
    isBlocked ? 'task-item--blocked' : ''
  ].filter(Boolean).join(' ');

  return `
    <article class="${taskClasses}" ${isBlocked ? 'aria-disabled="true"' : ''}>
      <div class="task-item__row">
        <label class="task-item__main">
          <input type="checkbox" data-task-id="${escapeHtml(task.id)}" ${isDone ? 'checked' : ''} ${isBlocked ? 'aria-describedby="task-depends-' + escapeHtml(task.id) + '"' : ''}>
          <span>
            <strong>${isBlocked ? '<span class="task-item__lock" aria-hidden="true">🔒</span>' : ''}${escapeHtml(task.title)}</strong>
          </span>
        </label>
        <button class="task-item__edit" type="button" data-action="edit-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}" aria-label="Редактировать подзадачу">&#9998;</button>
      </div>
      ${task.note ? `<p>${escapeHtml(task.note)}</p>` : ''}
      ${dependencyText ? `<span class="task-item__depends" id="task-depends-${escapeHtml(task.id)}">${isBlocked ? 'Зависит от: ' : 'Зависимости: '}${escapeHtml(dependencyText)}</span>` : ''}
    </article>
  `;
}

function renderActionCard(action, options = {}) {
  const { task, group, project } = action;
  const isCompact = options.compact;

  return `
    <article class="next-action-card ${isCompact ? 'next-action-card--compact' : ''}">
      <div class="next-action-card__main">
        <div>
          <p class="eyebrow">${escapeHtml(project.title)} · ${escapeHtml(group.title)}</p>
          <h3>${escapeHtml(task.title)}</h3>
        </div>
        ${getStatusBadge(task.status)}
      </div>
      <dl class="next-action-card__meta">
        <div>
          <dt>Проект</dt>
          <dd>${escapeHtml(project.title)}</dd>
        </div>
        <div>
          <dt>Суммарная задача</dt>
          <dd>${escapeHtml(group.title)}</dd>
        </div>
        <div>
          <dt>Статус</dt>
          <dd>${escapeHtml(getStatusMeta(task.status).label)}</dd>
        </div>
        <div>
          <dt>Последнее движение</dt>
          <dd>${formatDate(task.lastActivityDate)}</dd>
        </div>
      </dl>
      <button class="done-button" type="button" data-complete-task-id="${escapeHtml(task.id)}">Выполнено</button>
    </article>
  `;
}

function bindCompleteTaskButtons(projects) {
  document.querySelectorAll('[data-complete-task-id]').forEach((button) => {
    button.addEventListener('click', () => completeTaskById(button.dataset.completeTaskId, projects));
  });
}

function renderNextActions(projects) {
  const actions = getAvailableActions(projects);
  const list = document.querySelector('#next-actions-list');
  const preview = document.querySelector('#next-actions-preview');
  const counter = document.querySelector('[data-next-actions-count]');

  if (counter) {
    counter.textContent = actions.length;
  }

  if (list) {
    list.innerHTML = actions.length
      ? actions.map((action) => renderActionCard(action)).join('')
      : '<div class="empty-section">Сейчас нет доступных подзадач без незавершённых предшественников.</div>';
  } else {
    warnMissingElement('#next-actions-list', 'Рендер списка следующих действий');
  }

  if (preview) {
    const shortList = actions.slice(0, 4);
    preview.innerHTML = shortList.length
      ? shortList.map((action) => renderActionCard(action, { compact: true })).join('')
      : '<div class="empty-section empty-section--compact">Нет действий для правой колонки.</div>';
  }

  bindCompleteTaskButtons(projects);
}


function getStalledTypeLabel(type) {
  return {
    project: 'Проект',
    group: 'Суммарная задача',
    task: 'Подзадача'
  }[type] || 'Элемент';
}

function renderStalledCard(entry) {
  const { type, item, project, group } = entry;
  const itemId = type === 'project' ? project.id : item.id;
  const days = getDaysSince(item.lastActivityDate);
  const parentTitle = type === 'project' ? project.title : project.title;
  const location = type === 'task' ? `${project.title} · ${group.title}` : parentTitle;

  return `
    <article class="stalled-card">
      <div class="stalled-card__main">
        <div>
          <p class="eyebrow">${escapeHtml(getStalledTypeLabel(type))} · ${escapeHtml(location)}</p>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        ${getStatusBadge(item.status)}
      </div>
      <dl class="stalled-card__meta">
        <div>
          <dt>Родительский проект</dt>
          <dd>${escapeHtml(parentTitle)}</dd>
        </div>
        <div>
          <dt>Без движения</dt>
          <dd>${days} дн.</dd>
        </div>
        <div>
          <dt>Статус</dt>
          <dd>${escapeHtml(getStatusMeta(item.status).label)}</dd>
        </div>
        <div>
          <dt>Последнее движение</dt>
          <dd>${formatDate(item.lastActivityDate)}</dd>
        </div>
      </dl>
      <div class="stalled-card__actions">
        <button class="mini-button" type="button" data-action="open-stalled" data-project-id="${escapeHtml(project.id)}">Открыть</button>
        <button class="mini-button" type="button" data-action="freeze-stalled" data-item-type="${escapeHtml(type)}" data-project-id="${escapeHtml(project.id)}" data-item-id="${escapeHtml(itemId)}">Заморозить</button>
        <button class="mini-button mini-button--danger" type="button" data-action="cancel-stalled" data-item-type="${escapeHtml(type)}" data-project-id="${escapeHtml(project.id)}" data-item-id="${escapeHtml(itemId)}">Отменить</button>
        <button class="mini-button mini-button--success" type="button" data-action="touch-stalled" data-item-type="${escapeHtml(type)}" data-project-id="${escapeHtml(project.id)}" data-item-id="${escapeHtml(itemId)}">Отметить движение</button>
      </div>
    </article>
  `;
}

function renderStalledSection(projects) {
  const items = getStalledItems(projects);
  const counter = document.querySelector('[data-stalled-count]');
  const projectsList = document.querySelector('#stalled-projects-list');
  const groupsList = document.querySelector('#stalled-groups-list');
  const tasksList = document.querySelector('#stalled-tasks-list');

  if (counter) counter.textContent = items.length;

  const renderList = (list, type, emptyText, selector) => {
    if (!list) {
      warnMissingElement(selector, 'Рендер раздела «Зависшие»');
      return;
    }
    const filtered = items.filter((entry) => entry.type === type);
    list.innerHTML = filtered.length
      ? filtered.map(renderStalledCard).join('')
      : `<div class="empty-section empty-section--compact">${escapeHtml(emptyText)}</div>`;
  };

  renderList(projectsList, 'project', 'Нет зависших проектов: завершённые, замороженные и отменённые проекты не учитываются.', '#stalled-projects-list');
  renderList(groupsList, 'group', 'Нет зависших суммарных задач.', '#stalled-groups-list');
  renderList(tasksList, 'task', 'Нет зависших подзадач.', '#stalled-tasks-list');
}

function updateDashboardWidgets(projects) {
  const active = document.querySelector('[data-widget="active"]');
  const next = document.querySelector('[data-widget="next"]');
  const blocked = document.querySelector('[data-widget="blocked"]');
  const stalled = document.querySelector('[data-widget="stalled"]');

  const activeProjects = projects.filter((project) => project.status === 'active').length;
  const availableActions = getAvailableActions(projects).length;
  const taskLookup = createTaskLookup(projects);
  const blockedTasks = getAllTasks(projects).filter((task) => isTaskBlocked(task, taskLookup)).length;
  const stalledItems = getStalledItems(projects).length;

  if (active) active.textContent = activeProjects;
  if (next) next.textContent = availableActions;
  if (blocked) blocked.textContent = blockedTasks;
  if (stalled) stalled.textContent = stalledItems;
}

function renderAll(projects) {
  recalculateAllProgress(projects);
  renderProjectTabs(projects);
  renderSelectedProject(projects);
  updateDashboardWidgets(projects);
  renderNextActions(projects);
  renderStalledSection(projects);
  setActiveSection(activeSectionId);
}

setupSectionNavigation();
setupEntityControls();
renderAll(projects);

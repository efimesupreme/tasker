const demoProjects = [
  {
    id: 'sample-project',
    title: 'Пример проекта',
    description: 'Нейтральный пример, который показывает структуру проекта, суммарные задачи, подзадачи и зависимости.',
    status: 'active',
    progress: 0,
    lastActivityDate: '2026-06-11',
    nextAction: 'Выбрать одну доступную подзадачу или задачу и продвинуть её до следующего результата.',
    tasks: [
      {
        id: 'sample-quick-check',
        title: 'Быстро проверить список задач',
        status: 'planned',
        weight: 1,
        dependsOn: [],
        lastActivityDate: '2026-06-11',
        note: 'Обычная задача уровня проекта без вложенных подзадач.',
        blocked: false
      },
      {
        id: 'sample-small-single',
        title: 'Закрыть маленькую задачу без декомпозиции',
        status: 'active',
        weight: 1,
        dependsOn: [],
        lastActivityDate: '2026-06-11',
        note: 'Её можно отметить выполненной сразу из списка задач проекта.',
        blocked: false
      },
      {
        id: 'sample-day-result',
        title: 'Отметить результат дня',
        status: 'planned',
        weight: 1,
        dependsOn: ['sample-small-single'],
        lastActivityDate: '2026-06-11',
        note: 'Эта задача станет доступна после закрытия маленькой задачи.',
        blocked: false
      }
    ],
    groups: [
      {
        id: 'sample-structure',
        title: 'Собрать структуру проекта',
        status: 'active',
        weight: 1,
        progress: 0,
        lastActivityDate: '2026-06-11',
        tasks: [
          {
            id: 'sample-goal',
            title: 'Сформулировать цель проекта',
            status: 'done',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Коротко описать, зачем нужен проект и какой результат считается успешным.',
            blocked: false
          },
          {
            id: 'sample-breakdown',
            title: 'Разбить проект на суммарные задачи',
            status: 'done',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Выделить направления работы, чтобы видеть общую структуру.',
            blocked: false
          },
          {
            id: 'sample-first-tasks',
            title: 'Добавить первые подзадачи',
            status: 'active',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Записать конкретные шаги внутри каждой суммарной задачи.',
            blocked: false
          }
        ]
      },
      {
        id: 'sample-result',
        title: 'Подготовить первый результат',
        status: 'active',
        weight: 1,
        progress: 0,
        lastActivityDate: '2026-06-11',
        tasks: [
          {
            id: 'sample-materials',
            title: 'Собрать исходные материалы',
            status: 'done',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Собрать файлы, ссылки, заметки и всё, что нужно для первого результата.',
            blocked: false
          },
          {
            id: 'sample-draft',
            title: 'Сделать черновик результата',
            status: 'active',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Подготовить рабочую версию результата без финальной полировки.',
            blocked: false
          },
          {
            id: 'sample-review',
            title: 'Проверить и доработать результат',
            status: 'planned',
            weight: 1,
            dependsOn: ['sample-draft'],
            lastActivityDate: '2026-06-11',
            note: 'Эта подзадача станет доступна после завершения черновика.',
            blocked: false
          },
          {
            id: 'sample-next-step',
            title: 'Зафиксировать следующий шаг',
            status: 'planned',
            weight: 1,
            dependsOn: ['sample-review'],
            lastActivityDate: '2026-06-11',
            note: 'Определить, что делать после проверки и доработки результата.',
            blocked: false
          }
        ]
      },
      {
        id: 'sample-maintenance',
        title: 'Поддерживать движение',
        status: 'planned',
        weight: 1,
        progress: 0,
        lastActivityDate: '2026-06-11',
        tasks: [
          {
            id: 'sample-today-task',
            title: 'Выбрать одну задачу на сегодня',
            status: 'planned',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Сфокусироваться на одном понятном следующем действии.',
            blocked: false
          },
          {
            id: 'sample-mark-done',
            title: 'Отметить выполненное',
            status: 'planned',
            weight: 1,
            dependsOn: ['sample-today-task'],
            lastActivityDate: '2026-06-11',
            note: 'Эта подзадача показывает зависимость от выбора задачи на сегодня.',
            blocked: false
          },
          {
            id: 'sample-check-stalled',
            title: 'Проверить зависшие задачи',
            status: 'planned',
            weight: 1,
            dependsOn: [],
            lastActivityDate: '2026-06-11',
            note: 'Просмотреть элементы без движения и решить, что с ними делать.',
            blocked: false
          }
        ]
      }
    ]
  }
];

const STORAGE_KEY = 'tasker.projects.v2';
const THEME_STORAGE_KEY = 'tasker.theme';
const LANGUAGE_STORAGE_KEY = 'tasker.language';
const DEFAULT_LANGUAGE = 'ru';
const AVAILABLE_LANGUAGES = ['ru', 'en', 'es', 'zh'];
const DEFAULT_THEME = 'dark';
const AVAILABLE_THEMES = ['dark', 'light'];
const STALLED_DAYS_THRESHOLD = 14;
const NON_STALLED_STATUSES = ['done', 'cancelled', 'frozen'];

let projects = loadProjects();
let selectedProjectId = projects.some((project) => project.id === 'sample-project') ? 'sample-project' : projects[0]?.id || null;
let activeSectionId = 'dashboard';
let activeProjectFilter = 'all';
let selectedTheme = loadTheme();
let currentLanguage = loadLanguage();
const expandedGroupIds = new Set();



const translations = {
  ru: {
    appTitle: 'Проектный трекер', workspace: 'Рабочее пространство', settings: 'Настройки', settingsParams: 'Параметры', interface: 'Интерфейс', language: 'Язык интерфейса', theme: 'Оформление', darkTheme: 'Тёмная', lightTheme: 'Светлая', settingsNote: 'Выбор применяется сразу и сохраняется в браузере', themeChoice: 'Выбор темы оформления', languageChoice: 'Выбор языка интерфейса', saved: 'Сохранено', close: 'Закрыть', save: 'Сохранить', cancel: 'Отмена', delete: 'Удалить', edit: 'Редактировать', newProject: '+ Новый проект', taskAdd: '+ Задача', groupAdd: '+ Суммарная задача', editProject: 'Редактировать проект', deleteProject: 'Удалить проект', all: 'Все', started: 'Начаты', notStarted: 'Не начаты', doneFilter: 'Сделаны', task: 'Задача', projectTask: 'Задача проекта', groupTask: 'Суммарная задача', groupTasks: 'Суммарные задачи', subtask: 'Подзадача', subtasks: 'Подзадачи', subtaskAdd: '+ Подзадача', editTask: 'Редактировать задачу', editGroupTask: 'Редактировать суммарную задачу', editSubtask: 'Редактировать подзадачу', deleteTask: 'Удалить задачу', deleteGroupTask: 'Удалить суммарную задачу', deleteSubtask: 'Удалить подзадачу', title: 'Название', description: 'Описание', status: 'Статус', weight: 'Вес', note: 'Заметка', predecessors: 'Предшественники', createProject: 'Создать проект', createTask: 'Создать задачу', createGroupTask: 'Создать суммарную задачу', createSubtask: 'Создать подзадачу', newProjectTitle: 'Новый проект', newTaskTitle: 'Новая задача', newGroupTaskTitle: 'Новая суммарная задача', newSubtaskTitle: 'Новая подзадача', dataEditing: 'Редактирование данных', noStartedGroups: 'Нет начатых суммарных задач', noNotStartedTasks: 'Нет не начатых задач', noDoneTasks: 'Нет сделанных задач', noSubtasksInGroup: 'В этой суммарной задаче пока нет подзадач.', confirmDeleteProject: 'Удалить проект?', confirmDeleteTask: 'Удалить задачу?', confirmDeleteGroupTask: 'Удалить суммарную задачу?', confirmDeleteSubtask: 'Удалить подзадачу?', statusIdea: 'Идея', statusPlanned: 'Запланировано', statusActive: 'В работе', statusWaiting: 'Ждёт', statusFrozen: 'Заморожено', statusDone: 'Завершено', statusCancelled: 'Отменено', totalProgress: 'Общий прогресс', filtersAria: 'Фильтры задач проекта', projectTasksAria: 'Список задач проекта', groupTasksAria: 'Список суммарных задач проекта', collapse: 'Свернуть', expand: 'Развернуть', reorderTask: 'Изменить порядок задачи', reorderSubtask: 'Изменить порядок подзадачи', reorderGroupTask: 'Изменить порядок суммарной задачи', dependsOn: 'Зависит от: ', dependencies: 'Зависимости: ', completion: '{done} из {total} задач и подзадач', subtaskCompletion: '{done} из {total} подзадач', noProjects: 'Проектов пока нет. Нажмите «+ Новый проект» в верхней навигации, чтобы создать первый.', dependencyHint: 'Можно выбрать несколько задач этого проекта. Сама задача и очевидные циклы недоступны.', createsCycle: 'создаст цикл', projectTasksGroup: 'Задачи проекта', noOtherTasks: 'В проекте пока нет других задач', blockedMessage: 'Задача «{title}» заблокирована. Сначала завершите: {titles}.', modalCloseLabel: 'Закрыть форму'
  },
  en: {
    appTitle: 'Project tracker', workspace: 'Workspace', settings: 'Settings', settingsParams: 'Preferences', interface: 'Interface', language: 'Interface language', theme: 'Appearance', darkTheme: 'Dark', lightTheme: 'Light', settingsNote: 'The choice is applied immediately and saved in the browser', themeChoice: 'Theme selection', languageChoice: 'Interface language selection', saved: 'Saved', close: 'Close', save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit', newProject: '+ New project', taskAdd: '+ Task', groupAdd: '+ Summary task', editProject: 'Edit project', deleteProject: 'Delete project', all: 'All', started: 'Started', notStarted: 'Not started', doneFilter: 'Done', task: 'Task', projectTask: 'Project task', groupTask: 'Summary task', groupTasks: 'Summary tasks', subtask: 'Subtask', subtasks: 'Subtasks', subtaskAdd: '+ Subtask', editTask: 'Edit task', editGroupTask: 'Edit summary task', editSubtask: 'Edit subtask', deleteTask: 'Delete task', deleteGroupTask: 'Delete summary task', deleteSubtask: 'Delete subtask', title: 'Title', description: 'Description', status: 'Status', weight: 'Weight', note: 'Note', predecessors: 'Predecessors', createProject: 'Create project', createTask: 'Create task', createGroupTask: 'Create summary task', createSubtask: 'Create subtask', newProjectTitle: 'New project', newTaskTitle: 'New task', newGroupTaskTitle: 'New summary task', newSubtaskTitle: 'New subtask', dataEditing: 'Data editing', noStartedGroups: 'No started summary tasks', noNotStartedTasks: 'No not started tasks', noDoneTasks: 'No done tasks', noSubtasksInGroup: 'This summary task has no subtasks yet.', confirmDeleteProject: 'Delete project?', confirmDeleteTask: 'Delete task?', confirmDeleteGroupTask: 'Delete summary task?', confirmDeleteSubtask: 'Delete subtask?', statusIdea: 'Idea', statusPlanned: 'Planned', statusActive: 'Active', statusWaiting: 'Waiting', statusFrozen: 'Frozen', statusDone: 'Done', statusCancelled: 'Cancelled', totalProgress: 'Total progress', filtersAria: 'Project task filters', projectTasksAria: 'Project task list', groupTasksAria: 'Project summary task list', collapse: 'Collapse', expand: 'Expand', reorderTask: 'Change task order', reorderSubtask: 'Change subtask order', reorderGroupTask: 'Change summary task order', dependsOn: 'Depends on: ', dependencies: 'Dependencies: ', completion: '{done} of {total} tasks and subtasks', subtaskCompletion: '{done} of {total} subtasks', noProjects: 'There are no projects yet. Click “+ New project” in the top navigation to create the first one.', dependencyHint: 'You can select several tasks in this project. The task itself and obvious cycles are unavailable.', createsCycle: 'creates a cycle', projectTasksGroup: 'Project tasks', noOtherTasks: 'There are no other tasks in this project yet', blockedMessage: 'Task “{title}” is blocked. Complete first: {titles}.', modalCloseLabel: 'Close form'
  },
  es: {
    appTitle: 'Rastreador de proyectos', workspace: 'Espacio de trabajo', settings: 'Configuración', settingsParams: 'Parámetros', interface: 'Interfaz', language: 'Idioma de la interfaz', theme: 'Apariencia', darkTheme: 'Oscura', lightTheme: 'Clara', settingsNote: 'La selección se aplica al instante y se guarda en el navegador', themeChoice: 'Selección de tema', languageChoice: 'Selección de idioma de la interfaz', saved: 'Guardado', close: 'Cerrar', save: 'Guardar', cancel: 'Cancelar', delete: 'Eliminar', edit: 'Editar', newProject: '+ Nuevo proyecto', taskAdd: '+ Tarea', groupAdd: '+ Tarea resumen', editProject: 'Editar proyecto', deleteProject: 'Eliminar proyecto', all: 'Todas', started: 'Iniciadas', notStarted: 'No iniciadas', doneFilter: 'Hechas', task: 'Tarea', projectTask: 'Tarea del proyecto', groupTask: 'Tarea resumen', groupTasks: 'Tareas resumen', subtask: 'Subtarea', subtasks: 'Subtareas', subtaskAdd: '+ Subtarea', editTask: 'Editar tarea', editGroupTask: 'Editar tarea resumen', editSubtask: 'Editar subtarea', deleteTask: 'Eliminar tarea', deleteGroupTask: 'Eliminar tarea resumen', deleteSubtask: 'Eliminar subtarea', title: 'Título', description: 'Descripción', status: 'Estado', weight: 'Peso', note: 'Nota', predecessors: 'Predecesoras', createProject: 'Crear proyecto', createTask: 'Crear tarea', createGroupTask: 'Crear tarea resumen', createSubtask: 'Crear subtarea', newProjectTitle: 'Nuevo proyecto', newTaskTitle: 'Nueva tarea', newGroupTaskTitle: 'Nueva tarea resumen', newSubtaskTitle: 'Nueva subtarea', dataEditing: 'Edición de datos', noStartedGroups: 'No hay tareas resumen iniciadas', noNotStartedTasks: 'No hay tareas no iniciadas', noDoneTasks: 'No hay tareas hechas', noSubtasksInGroup: 'Esta tarea resumen aún no tiene subtareas.', confirmDeleteProject: '¿Eliminar proyecto?', confirmDeleteTask: '¿Eliminar tarea?', confirmDeleteGroupTask: '¿Eliminar tarea resumen?', confirmDeleteSubtask: '¿Eliminar subtarea?', statusIdea: 'Idea', statusPlanned: 'Planificado', statusActive: 'En curso', statusWaiting: 'En espera', statusFrozen: 'Congelado', statusDone: 'Completado', statusCancelled: 'Cancelado', totalProgress: 'Progreso total', filtersAria: 'Filtros de tareas del proyecto', projectTasksAria: 'Lista de tareas del proyecto', groupTasksAria: 'Lista de tareas resumen del proyecto', collapse: 'Contraer', expand: 'Expandir', reorderTask: 'Cambiar orden de la tarea', reorderSubtask: 'Cambiar orden de la subtarea', reorderGroupTask: 'Cambiar orden de la tarea resumen', dependsOn: 'Depende de: ', dependencies: 'Dependencias: ', completion: '{done} de {total} tareas y subtareas', subtaskCompletion: '{done} de {total} subtareas', noProjects: 'Todavía no hay proyectos. Haz clic en “+ Nuevo proyecto” en la navegación superior para crear el primero.', dependencyHint: 'Puedes seleccionar varias tareas de este proyecto. La propia tarea y los ciclos evidentes no están disponibles.', createsCycle: 'crea un ciclo', projectTasksGroup: 'Tareas del proyecto', noOtherTasks: 'Todavía no hay otras tareas en este proyecto', blockedMessage: 'La tarea “{title}” está bloqueada. Completa primero: {titles}.', modalCloseLabel: 'Cerrar formulario'
  },
  zh: {
    appTitle: '项目跟踪器', workspace: '工作区', settings: '设置', settingsParams: '参数', interface: '界面', language: '界面语言', theme: '外观', darkTheme: '深色', lightTheme: '浅色', settingsNote: '选择会立即应用并保存在浏览器中', themeChoice: '主题选择', languageChoice: '界面语言选择', saved: '已保存', close: '关闭', save: '保存', cancel: '取消', delete: '删除', edit: '编辑', newProject: '+ 新项目', taskAdd: '+ 任务', groupAdd: '+ 汇总任务', editProject: '编辑项目', deleteProject: '删除项目', all: '全部', started: '已开始', notStarted: '未开始', doneFilter: '已完成', task: '任务', projectTask: '项目任务', groupTask: '汇总任务', groupTasks: '汇总任务', subtask: '子任务', subtasks: '子任务', subtaskAdd: '+ 子任务', editTask: '编辑任务', editGroupTask: '编辑汇总任务', editSubtask: '编辑子任务', deleteTask: '删除任务', deleteGroupTask: '删除汇总任务', deleteSubtask: '删除子任务', title: '名称', description: '描述', status: '状态', weight: '权重', note: '备注', predecessors: '前置任务', createProject: '创建项目', createTask: '创建任务', createGroupTask: '创建汇总任务', createSubtask: '创建子任务', newProjectTitle: '新项目', newTaskTitle: '新任务', newGroupTaskTitle: '新汇总任务', newSubtaskTitle: '新子任务', dataEditing: '数据编辑', noStartedGroups: '没有已开始的汇总任务', noNotStartedTasks: '没有未开始的任务', noDoneTasks: '没有已完成的任务', noSubtasksInGroup: '这个汇总任务还没有子任务。', confirmDeleteProject: '删除项目？', confirmDeleteTask: '删除任务？', confirmDeleteGroupTask: '删除汇总任务？', confirmDeleteSubtask: '删除子任务？', statusIdea: '想法', statusPlanned: '已计划', statusActive: '进行中', statusWaiting: '等待中', statusFrozen: '已冻结', statusDone: '已完成', statusCancelled: '已取消', totalProgress: '总进度', filtersAria: '项目任务筛选器', projectTasksAria: '项目任务列表', groupTasksAria: '项目汇总任务列表', collapse: '折叠', expand: '展开', reorderTask: '更改任务顺序', reorderSubtask: '更改子任务顺序', reorderGroupTask: '更改汇总任务顺序', dependsOn: '依赖于：', dependencies: '依赖关系：', completion: '{done}/{total} 个任务和子任务', subtaskCompletion: '{done}/{total} 个子任务', noProjects: '还没有项目。点击顶部导航中的“+ 新项目”创建第一个项目。', dependencyHint: '可以选择此项目中的多个任务。任务本身和明显循环不可选。', createsCycle: '会形成循环', projectTasksGroup: '项目任务', noOtherTasks: '此项目还没有其他任务', blockedMessage: '任务“{title}”被阻塞。请先完成：{titles}。', modalCloseLabel: '关闭表单'
  }
};

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] || translations.ru[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

const projectStatuses = {
  idea: { labelKey: 'statusIdea', accent: 'violet' },
  planned: { labelKey: 'statusPlanned', accent: 'blue' },
  active: { labelKey: 'statusActive', accent: 'green' },
  waiting: { labelKey: 'statusWaiting', accent: 'orange' },
  frozen: { labelKey: 'statusFrozen', accent: 'cyan' },
  done: { labelKey: 'statusDone', accent: 'green' },
  cancelled: { labelKey: 'statusCancelled', accent: 'red' }
};

const statusColors = {
  blue: 'var(--status-blue-bg)',
  green: 'var(--status-green-bg)',
  orange: 'var(--status-orange-bg)',
  red: 'var(--status-red-bg)',
  violet: 'var(--status-violet-bg)',
  cyan: 'var(--status-cyan-bg)'
};

const statusTextColors = {
  blue: 'var(--status-blue-text)',
  green: 'var(--status-green-text)',
  orange: 'var(--status-orange-text)',
  red: 'var(--status-red-text)',
  violet: 'var(--status-violet-text)',
  cyan: 'var(--status-cyan-text)'
};



function normalizeLanguage(language) {
  return AVAILABLE_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

function loadLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch (error) {
    console.warn('Не удалось прочитать сохранённый язык, используется русский.', error);
    return DEFAULT_LANGUAGE;
  }
}

function persistLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn('Не удалось сохранить язык в браузере.', error);
  }
}

function applyLanguage(language) {
  currentLanguage = normalizeLanguage(language);
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage;
  document.title = t('appTitle');
}

function selectLanguage(language) {
  applyLanguage(language);
  persistLanguage(currentLanguage);
  renderAll(projects);
}

function normalizeTheme(theme) {
  return AVAILABLE_THEMES.includes(theme) ? theme : DEFAULT_THEME;
}

function loadTheme() {
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch (error) {
    console.warn('Не удалось прочитать сохранённую тему, используется тёмная.', error);
    return DEFAULT_THEME;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Не удалось сохранить тему в браузере.', error);
  }
}

function applyTheme(theme) {
  selectedTheme = normalizeTheme(theme);
  document.documentElement.dataset.theme = selectedTheme;
}

function selectTheme(theme) {
  applyTheme(theme);
  persistTheme(selectedTheme);
  renderSettings();
}

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
    project.tasks = project.tasks || [];
    project.lastActivityDate = project.lastActivityDate || getTodayIsoDate();

    project.tasks.forEach((task) => {
      task.dependsOn = task.dependsOn || [];
      task.lastActivityDate = task.lastActivityDate || project.lastActivityDate;
      task.weight = Number(task.weight) || 1;
    });

    project.groups.forEach((group) => {
      group.tasks = group.tasks || [];
      group.tasks.forEach((task) => {
        task.dependsOn = task.dependsOn || [];
        task.lastActivityDate = task.lastActivityDate || project.lastActivityDate;
        task.weight = Number(task.weight) || 1;
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
    return `<option value="${escapeHtml(value)}" ${value === selectedStatus ? 'selected' : ''}>${escapeHtml(t(meta.labelKey))}</option>`;
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

function findProjectTask(project, taskId) {
  return (project?.tasks || []).find((task) => task.id === taskId);
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
  const projectTaskOptions = (project?.tasks || [])
    .filter((task) => task.id !== currentTaskId)
    .map((task) => {
      const wouldCycle = currentTaskId && hasDependencyPath(project, task.id, currentTaskId);
      const isSelected = selectedDependencyIds.includes(task.id);
      const label = wouldCycle ? `${task.title} — ${t('createsCycle')}` : task.title;

      return `<option value="${escapeHtml(task.id)}" ${isSelected ? 'selected' : ''} ${wouldCycle ? 'disabled' : ''}>${escapeHtml(label)}</option>`;
    }).join('');

  const projectTaskGroup = projectTaskOptions
    ? `<optgroup label="${escapeHtml(t('projectTasksGroup'))}">${projectTaskOptions}</optgroup>`
    : '';

  const groupOptions = (project?.groups || []).map((group) => {
    const taskOptions = (group.tasks || [])
      .filter((task) => task.id !== currentTaskId)
      .map((task) => {
        const wouldCycle = currentTaskId && hasDependencyPath(project, task.id, currentTaskId);
        const isSelected = selectedDependencyIds.includes(task.id);
        const label = wouldCycle ? `${task.title} — ${t('createsCycle')}` : task.title;

        return `<option value="${escapeHtml(task.id)}" ${isSelected ? 'selected' : ''} ${wouldCycle ? 'disabled' : ''}>${escapeHtml(label)}</option>`;
      }).join('');

    if (!taskOptions) {
      return '';
    }

    return `<optgroup label="${escapeHtml(group.title)}">${taskOptions}</optgroup>`;
  }).join('');

  return projectTaskGroup + groupOptions || `<option disabled>${escapeHtml(t('noOtherTasks'))}</option>`;
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
    <p class="eyebrow">${escapeHtml(t('dataEditing'))}</p>
    <h3 class="modal__title" id="entity-modal-title">${escapeHtml(title)}</h3>
    ${formHtml}
  `;
  modal.hidden = false;
  content.querySelector('input, textarea, select')?.focus();
}

function renderProjectForm(project = {}) {
  const deleteButton = project.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-project" data-project-id="${escapeHtml(project.id)}">${escapeHtml(t('deleteProject'))}</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="project" data-project-id="${escapeHtml(project.id || '')}">
      <label>${escapeHtml(t('title'))}<input name="title" required maxlength="80" value="${escapeHtml(project.title || '')}"></label>
      <label>${escapeHtml(t('status'))}<select name="status">${getStatusOptions(project.status || 'planned')}</select></label>
      <label>${escapeHtml(t('description'))}<textarea name="description" rows="3">${escapeHtml(project.description || '')}</textarea></label>
      <div class="entity-form__danger">
        ${deleteButton}
      </div>
      <div class="entity-form__actions">
        <button class="ghost-button" type="button" data-modal-close>${escapeHtml(t('cancel'))}</button>
        <button class="primary-button" type="submit">${escapeHtml(t('save'))}</button>
      </div>
    </form>
  `;
}

function renderGroupForm(projectId, group = {}) {
  const deleteButton = group.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}">${escapeHtml(t('deleteGroupTask'))}</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id || '')}">
      <label>${escapeHtml(t('title'))}<input name="title" required maxlength="80" value="${escapeHtml(group.title || '')}"></label>
      <label>${escapeHtml(t('status'))}<select name="status">${getStatusOptions(group.status || 'planned')}</select></label>
      <label>${escapeHtml(t('weight'))}<input name="weight" type="number" min="1" max="100" step="1" value="${escapeHtml(group.weight || 1)}"></label>
      <div class="entity-form__actions entity-form__actions--split">
        <div class="entity-form__danger">${deleteButton}</div>
        <div class="entity-form__save-actions">
          <button class="ghost-button" type="button" data-modal-close>${escapeHtml(t('cancel'))}</button>
          <button class="primary-button" type="submit">${escapeHtml(t('save'))}</button>
        </div>
      </div>
    </form>
  `;
}

function renderTaskForm(projectId, groupId, task = {}) {
  const project = findProject(projectId);
  const dependsOn = task.dependsOn || [];
  const deleteButton = task.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}">${escapeHtml(t('deleteSubtask'))}</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="task" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(groupId)}" data-task-id="${escapeHtml(task.id || '')}">
      <label>${escapeHtml(t('title'))}<input name="title" required maxlength="100" value="${escapeHtml(task.title || '')}"></label>
      <label>${escapeHtml(t('status'))}<select name="status">${getStatusOptions(task.status || 'planned')}</select></label>
      <label>${escapeHtml(t('weight'))}<input name="weight" type="number" min="1" max="100" step="1" value="${escapeHtml(task.weight || 1)}"></label>
      <label>${escapeHtml(t('note'))}<textarea name="note" rows="3">${escapeHtml(task.note || '')}</textarea></label>
      <label>${escapeHtml(t('predecessors'))}
        <select name="dependsOn" multiple size="6">
          ${getDependencyOptions(project, task.id, dependsOn)}
        </select>
        <span class="entity-form__hint">${escapeHtml(t('dependencyHint'))}</span>
      </label>
      <div class="entity-form__actions entity-form__actions--split">
        <div class="entity-form__danger">${deleteButton}</div>
        <div class="entity-form__save-actions">
          <button class="ghost-button" type="button" data-modal-close>${escapeHtml(t('cancel'))}</button>
          <button class="primary-button" type="submit">${escapeHtml(t('save'))}</button>
        </div>
      </div>
    </form>
  `;
}

function renderProjectTaskForm(projectId, task = {}) {
  const project = findProject(projectId);
  const dependsOn = task.dependsOn || [];
  const deleteButton = task.id
    ? `<button class="mini-button mini-button--danger entity-form__delete" type="button" data-action="delete-project-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}">${escapeHtml(t('deleteTask'))}</button>`
    : '';

  return `
    <form class="entity-form" data-form-type="project-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id || '')}">
      <label>${escapeHtml(t('title'))}<input name="title" required maxlength="100" value="${escapeHtml(task.title || '')}"></label>
      <label>${escapeHtml(t('status'))}<select name="status">${getStatusOptions(task.status || 'planned')}</select></label>
      <label>${escapeHtml(t('weight'))}<input name="weight" type="number" min="1" max="100" step="1" value="${escapeHtml(task.weight || 1)}"></label>
      <label>${escapeHtml(t('note'))}<textarea name="note" rows="3">${escapeHtml(task.note || '')}</textarea></label>
      <label>${escapeHtml(t('predecessors'))}
        <select name="dependsOn" multiple size="6">
          ${getDependencyOptions(project, task.id, dependsOn)}
        </select>
        <span class="entity-form__hint">${escapeHtml(t('dependencyHint'))}</span>
      </label>
      <div class="entity-form__actions entity-form__actions--split">
        <div class="entity-form__danger">${deleteButton}</div>
        <div class="entity-form__save-actions">
          <button class="ghost-button" type="button" data-modal-close>${escapeHtml(t('cancel'))}</button>
          <button class="primary-button" type="submit">${escapeHtml(t('save'))}</button>
        </div>
      </div>
    </form>
  `;
}

function openCreateProjectForm() {
  openEntityModal(t('newProjectTitle'), renderProjectForm());
}

function openEditProjectForm(projectId) {
  const project = findProject(projectId);
  if (project) openEntityModal(t('editProject'), renderProjectForm(project));
}

function openCreateGroupForm(projectId) {
  openEntityModal(t('newGroupTaskTitle'), renderGroupForm(projectId));
}

function openCreateProjectTaskForm(projectId) {
  openEntityModal(t('newTaskTitle'), renderProjectTaskForm(projectId));
}

function openEditGroupForm(projectId, groupId) {
  const group = findGroup(findProject(projectId), groupId);
  if (group) openEntityModal(t('editGroupTask'), renderGroupForm(projectId, group));
}

function openCreateTaskForm(projectId, groupId) {
  openEntityModal(t('newSubtaskTitle'), renderTaskForm(projectId, groupId));
}

function openEditTaskForm(projectId, taskId) {
  const project = findProject(projectId);
  const group = getTaskGroup(project, taskId);
  const task = findTask(project, taskId);

  if (group && task) {
    openEntityModal(t('editSubtask'), renderTaskForm(projectId, group.id, task));
  }
}

function openEditProjectTaskForm(projectId, taskId) {
  const task = findProjectTask(findProject(projectId), taskId);

  if (task) {
    openEntityModal(t('editTask'), renderProjectTaskForm(projectId, task));
  }
}

function getStatusMeta(status) {
  return projectStatuses[status] || projectStatuses.idea;
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat(currentLanguage === 'zh' ? 'zh-CN' : currentLanguage, {
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

    (project.tasks || []).forEach((task) => {
      if (isStalledItem(task)) {
        items.push({ type: 'project-task', item: task, project, task });
      }
    });

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

function getProjectSubtasks(project) {
  return (project?.groups || []).flatMap((group) => group.tasks || []);
}

function getProjectTasks(project) {
  return [
    ...(project?.tasks || []),
    ...getProjectSubtasks(project)
  ];
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
    const projectTaskActions = (project.tasks || [])
      .filter((task) => isTaskAvailable(task, project, taskLookup))
      .map((task) => ({ task, group: null, project, type: 'project-task' }));
    const subtaskActions = (project.groups || []).flatMap((group) => {
      return (group.tasks || [])
        .filter((task) => isTaskAvailable(task, project, taskLookup))
        .map((task) => ({ task, group, project, type: 'task' }));
    });

    return [...projectTaskActions, ...subtaskActions];
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

  return t('blockedMessage', { title: task.title, titles });
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

function calculateProjectItemProgress(item) {
  return Array.isArray(item?.tasks) ? calculateGroupProgress(item) : calculateTaskContribution(item);
}

function calculateProjectProgress(project) {
  return calculateWeightedProgress([...(project.tasks || []), ...(project.groups || [])], calculateProjectItemProgress);
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


function getLanguageOptions() {
  return [
    { id: 'ru', label: 'Русский' },
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' },
    { id: 'zh', label: '中文' }
  ];
}

function updateStaticText() {
  document.title = t('appTitle');
  const brandTitle = document.querySelector('.topbar__brand h1');
  const brandEyebrow = document.querySelector('.topbar__brand .eyebrow');
  const settingsHeader = document.querySelector('#settings .page-header');
  const modalClose = document.querySelector('.modal__close');

  if (brandTitle) brandTitle.textContent = t('appTitle');
  if (brandEyebrow) brandEyebrow.textContent = t('workspace');
  if (settingsHeader) settingsHeader.innerHTML = `<div><p class="eyebrow">${escapeHtml(t('settingsParams'))}</p><h2>${escapeHtml(t('settings'))}</h2></div>`;
  if (modalClose) modalClose.setAttribute('aria-label', t('modalCloseLabel'));
}

function renderSettings() {
  updateStaticText();

  const panel = document.querySelector('.settings-panel');
  if (panel) {
    panel.innerHTML = `
      <div class="section-heading section-heading--settings">
        <div>
          <p class="eyebrow">${escapeHtml(t('interface'))}</p>
          <h3 id="appearance-settings-title">${escapeHtml(t('theme'))}</h3>
        </div>
        <span class="section-heading__note">${escapeHtml(t('settingsNote'))}</span>
      </div>
      <div class="theme-switcher" role="group" aria-label="${escapeHtml(t('themeChoice'))}">
        <button class="theme-option" type="button" data-theme-choice="dark" aria-pressed="false">
          <span class="theme-option__swatch theme-option__swatch--dark" aria-hidden="true"></span>
          <span>${escapeHtml(t('darkTheme'))}</span>
        </button>
        <button class="theme-option" type="button" data-theme-choice="light" aria-pressed="false">
          <span class="theme-option__swatch theme-option__swatch--light" aria-hidden="true"></span>
          <span>${escapeHtml(t('lightTheme'))}</span>
        </button>
      </div>
      <div class="section-heading section-heading--settings settings-language-heading">
        <div>
          <p class="eyebrow">${escapeHtml(t('saved'))}</p>
          <h3>${escapeHtml(t('language'))}</h3>
        </div>
      </div>
      <div class="language-switcher" role="group" aria-label="${escapeHtml(t('languageChoice'))}">
        ${getLanguageOptions().map((language) => `
          <button class="language-option" type="button" data-language-choice="${escapeHtml(language.id)}" aria-pressed="false">${escapeHtml(language.label)}</button>
        `).join('')}
      </div>
    `;
  }

  document.querySelectorAll('[data-theme-choice]').forEach((button) => {
    const isActive = button.dataset.themeChoice === selectedTheme;
    button.classList.toggle('theme-option--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-language-choice]').forEach((button) => {
    const isActive = button.dataset.languageChoice === currentLanguage;
    button.classList.toggle('language-option--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
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
    <button class="menu__item project-tabs__item project-tabs__item--create" type="button" data-action="create-project">${escapeHtml(t('newProject'))}</button>
    <button class="menu__item project-tabs__settings" type="button" data-section-link="settings" aria-label="${escapeHtml(t('settings'))}" title="${escapeHtml(t('settings'))}">⚙</button>
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

  return `<span class="project-card__status" style="background: ${background}; color: ${color};">${escapeHtml(t(status.labelKey))}</span>`;
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
    link.classList.toggle('menu__item--active', link.dataset.sectionLink === target);
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
    lastActivityDate: getTodayIsoDate()
  };

  if (project) {
    Object.assign(project, data);
  } else {
    const newProject = {
      id: createEntityId('project', title),
      progress: 0,
      nextAction: '',
      tasks: [],
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

function saveProjectTask(form) {
  const formData = new FormData(form);
  const project = findProject(form.dataset.projectId);
  const taskId = form.dataset.taskId;
  const title = String(formData.get('title') || '').trim();

  if (!project || !title) return;

  project.tasks = project.tasks || [];
  const task = taskId ? findProjectTask(project, taskId) : null;
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
    project.tasks.push({
      id: createEntityId('task', title),
      ...data
    });
  }

  project.lastActivityDate = getTodayIsoDate();
}

function handleEntityFormSubmit(event) {
  const form = event.target.closest('.entity-form');

  if (!form) return;

  event.preventDefault();

  if (form.dataset.formType === 'project') saveProject(form);
  if (form.dataset.formType === 'group') saveGroup(form);
  if (form.dataset.formType === 'task') saveTask(form);
  if (form.dataset.formType === 'project-task') saveProjectTask(form);

  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteProject(projectId) {
  const project = findProject(projectId);
  if (!project || !window.confirm(`${t('confirmDeleteProject')} ${project.title}`)) return;

  projects = projects.filter((item) => item.id !== projectId);
  selectedProjectId = projects[0]?.id || null;
  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteGroup(projectId, groupId) {
  const project = findProject(projectId);
  const group = findGroup(project, groupId);
  if (!project || !group || !window.confirm(`${t('confirmDeleteGroupTask')} ${group.title}`)) return;

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
  if (!project || !group || !task || !window.confirm(`${t('confirmDeleteSubtask')} ${task.title}`)) return;

  const today = getTodayIsoDate();
  group.tasks = (group.tasks || []).filter((item) => item.id !== taskId);
  getProjectTasks(project).forEach((item) => {
    item.dependsOn = (item.dependsOn || []).filter((dependencyId) => dependencyId !== taskId);
  });
  group.lastActivityDate = today;
  project.lastActivityDate = today;
  recalculateProjectProgress(project);
  persistProjects();
  closeEntityModal();
  renderAll(projects);
}

function deleteProjectTask(projectId, taskId) {
  const project = findProject(projectId);
  const task = findProjectTask(project, taskId);
  if (!project || !task || !window.confirm(`${t('confirmDeleteTask')} ${task.title}`)) return;

  project.tasks = (project.tasks || []).filter((item) => item.id !== taskId);
  getProjectTasks(project).forEach((item) => {
    item.dependsOn = (item.dependsOn || []).filter((dependencyId) => dependencyId !== taskId);
  });
  project.lastActivityDate = getTodayIsoDate();
  recalculateProjectProgress(project);
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

  if (type === 'project-task') {
    const task = findProjectTask(project, itemId);
    return task ? { type, project, task, item: task } : null;
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

    const themeButton = event.target.closest('[data-theme-choice]');
    if (themeButton) {
      event.preventDefault();
      selectTheme(themeButton.dataset.themeChoice);
      return;
    }

    const languageButton = event.target.closest('[data-language-choice]');
    if (languageButton) {
      event.preventDefault();
      selectLanguage(languageButton.dataset.languageChoice);
      return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
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
        case 'create-project-task':
          openCreateProjectTaskForm(projectId);
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
        case 'edit-project-task':
          openEditProjectTaskForm(projectId, taskId);
          break;
        case 'delete-task':
          deleteTask(projectId, taskId);
          break;
        case 'delete-project-task':
          deleteProjectTask(projectId, taskId);
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
      return;
    }

    const dragHandle = event.target.closest('[data-drag-handle]');
    if (dragHandle) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const groupToggle = event.target.closest('[data-toggle-group-id]');
    if (!groupToggle) return;

    event.preventDefault();
    toggleTaskGroup(groupToggle.dataset.toggleGroupId);
  });

  document.addEventListener('submit', handleEntityFormSubmit);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeEntityModal();

    if (event.target.closest('[data-action], [data-drag-handle]')) return;

    const groupToggle = event.target.closest('[data-toggle-group-id]');
    if (!groupToggle || !['Enter', ' '].includes(event.key)) return;

    event.preventDefault();
    toggleTaskGroup(groupToggle.dataset.toggleGroupId);
  });
}

function toggleTaskGroup(groupId) {
  if (!groupId) return;

  if (expandedGroupIds.has(groupId)) {
    expandedGroupIds.delete(groupId);
  } else {
    expandedGroupIds.add(groupId);
  }

  renderSelectedProject(projects);
}



function getProjectFilterOptions() {
  return [
    { id: 'all', label: t('all') },
    { id: 'started', label: t('started') },
    { id: 'not-started', label: t('notStarted') },
    { id: 'done', label: t('doneFilter') }
  ];
}

function isProjectFilter(value) {
  return getProjectFilterOptions().some((filter) => filter.id === value);
}

function getStalledProjectEntries(project) {
  return getStalledItems([project]).filter((entry) => entry.type !== 'project');
}

function isTaskDone(task) {
  return task?.status === 'done';
}

function isGroupProgressStarted(group) {
  const progress = clampProgress(group?.progress);
  return progress > 0 && progress < 100;
}

function isGroupProgressNotStarted(group) {
  return clampProgress(group?.progress) === 0;
}

function isGroupProgressDone(group) {
  return clampProgress(group?.progress) === 100;
}

function getFilteredProjectTasks(project, taskLookup, filter) {
  const tasks = project.tasks || [];

  if (filter === 'started') {
    return [];
  }

  if (filter === 'not-started') {
    return tasks.filter((task) => !isTaskDone(task));
  }

  if (filter === 'done') {
    return tasks.filter(isTaskDone);
  }

  return tasks;
}

function getFilteredGroups(project, taskLookup, filter) {
  if (filter === 'started') {
    return (project.groups || []).filter(isGroupProgressStarted).map((group) => ({
      group,
      tasks: group.tasks || []
    }));
  }

  if (filter === 'not-started') {
    return (project.groups || []).filter(isGroupProgressNotStarted).map((group) => ({
      group,
      tasks: (group.tasks || []).filter((task) => !isTaskDone(task))
    }));
  }

  if (filter === 'done') {
    return (project.groups || []).filter(isGroupProgressDone).map((group) => ({
      group,
      tasks: (group.tasks || []).filter(isTaskDone)
    }));
  }

  return (project.groups || []).map((group) => ({
    group,
    tasks: group.tasks || []
  }));
}

function getProjectFilterEmptyText(filter) {
  if (filter === 'started') return t('noStartedGroups');
  if (filter === 'not-started') return t('noNotStartedTasks');
  if (filter === 'done') return t('noDoneTasks');
  return '';
}

function renderProjectFilterBar(activeFilter) {
  return `
    <nav class="project-filters" aria-label="${escapeHtml(t('filtersAria'))}">
      ${getProjectFilterOptions().map((filter) => `
        <button class="project-filter ${filter.id === activeFilter ? 'project-filter--active' : ''}" type="button" data-project-filter="${escapeHtml(filter.id)}" aria-pressed="${filter.id === activeFilter}">${escapeHtml(filter.label)}</button>
      `).join('')}
    </nav>
  `;
}


function getTaskCompletionStats(tasks) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === 'done').length;

  return { done, total };
}

function renderCompletionText(stats) {
  return t('completion', { done: stats.done, total: stats.total });
}

function renderSubtaskCompletionText(stats) {
  return t('subtaskCompletion', { done: stats.done, total: stats.total });
}


function reorderItemsByVisibleOrder(items, orderedVisibleIds) {
  const visibleIds = orderedVisibleIds.filter(Boolean);
  if (!items?.length || visibleIds.length < 2) return false;

  const visibleIdSet = new Set(visibleIds);
  const visibleItemsById = new Map(items
    .filter((item) => visibleIdSet.has(item.id))
    .map((item) => [item.id, item]));
  const reorderedVisibleItems = visibleIds
    .map((id) => visibleItemsById.get(id))
    .filter(Boolean);

  if (reorderedVisibleItems.length < 2) return false;

  let visibleIndex = 0;
  const nextItems = items.map((item) => {
    if (!visibleIdSet.has(item.id)) return item;
    const nextItem = reorderedVisibleItems[visibleIndex];
    visibleIndex += 1;
    return nextItem || item;
  });

  const hasChanged = nextItems.some((item, index) => item.id !== items[index]?.id);
  if (!hasChanged) return false;

  items.splice(0, items.length, ...nextItems);
  return true;
}

function persistReorderedProjectItems(project, itemType, orderedVisibleIds) {
  if (!project) return;

  const targetItems = itemType === 'groups' ? project.groups : project.tasks;
  const didReorder = reorderItemsByVisibleOrder(targetItems || [], orderedVisibleIds);

  if (!didReorder) return;

  project.lastActivityDate = getTodayIsoDate();
  persistProjects();
  renderAll(projects);
}

function persistReorderedSubtasks(project, group, orderedVisibleIds) {
  if (!project || !group) return;

  const didReorder = reorderItemsByVisibleOrder(group.tasks || [], orderedVisibleIds);

  if (!didReorder) return;

  const today = getTodayIsoDate();
  group.lastActivityDate = today;
  project.lastActivityDate = today;
  persistProjects();
  renderAll(projects);
}

function initializeSortableList(listElement, onReorder, draggableSelector, handleSelector = '[data-drag-handle]') {
  if (!listElement || typeof Sortable === 'undefined') return;

  Sortable.create(listElement, {
    animation: 150,
    handle: handleSelector,
    draggable: draggableSelector,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    onEnd: () => onReorder(Array.from(listElement.children).map((item) => item.dataset.taskId || item.dataset.groupId))
  });
}

function initializeProjectSortables(root, project) {
  initializeSortableList(root.querySelector('[data-sortable-project-tasks]'), (orderedVisibleIds) => {
    persistReorderedProjectItems(project, 'tasks', orderedVisibleIds);
  }, '.project-task-item', '[data-project-task-drag-handle]');

  initializeSortableList(root.querySelector('[data-sortable-project-groups]'), (orderedVisibleIds) => {
    persistReorderedProjectItems(project, 'groups', orderedVisibleIds);
  }, '.task-group--card', '[data-group-drag-handle]');

  root.querySelectorAll('[data-sortable-subtasks]').forEach((listElement) => {
    const group = findGroup(project, listElement.dataset.sortableSubtasks);

    initializeSortableList(listElement, (orderedVisibleIds) => {
      persistReorderedSubtasks(project, group, orderedVisibleIds);
    }, '.subtask-item', '[data-subtask-drag-handle]');
  });
}

function renderSelectedProject(projects) {
  const details = document.querySelector('#selected-project-details');

  if (!details) {
    warnMissingElement('#selected-project-details', 'Рендер выбранного проекта');
    return;
  }

  const project = getSelectedProject(projects);

  if (!project) {
    details.innerHTML = `<div class="empty-section">${escapeHtml(t('noProjects'))}</div>`;
    return;
  }

  const progress = clampProgress(project.progress);
  const taskLookup = createTaskLookup(projects);
  const completion = getTaskCompletionStats(getProjectTasks(project));
  const activeFilter = isProjectFilter(activeProjectFilter) ? activeProjectFilter : 'all';
  const filteredProjectTasks = getFilteredProjectTasks(project, taskLookup, activeFilter);
  const filteredGroups = getFilteredGroups(project, taskLookup, activeFilter);
  const projectTasksHtml = filteredProjectTasks.length
    ? filteredProjectTasks.map((task) => renderProjectTask(task, taskLookup, project.id)).join('')
    : '';
  const groupsHtml = filteredGroups.length
    ? filteredGroups.map((entry) => renderTaskGroup(entry.group, taskLookup, project.id, entry.tasks, { filter: activeFilter, isStalledGroup: entry.isStalledGroup })).join('')
    : '';
  const hasProjectTasks = Boolean(projectTasksHtml);
  const hasGroups = Boolean(groupsHtml);
  const filterEmptyText = !hasProjectTasks && !hasGroups ? getProjectFilterEmptyText(activeFilter) : '';

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
          <span>${escapeHtml(t('totalProgress'))}</span>
          <strong>${progress}%</strong>
        </div>
        <div class="project-map__progress" aria-label="${escapeHtml(t('totalProgress'))} ${escapeHtml(project.title)}: ${progress}%">
          <span style="width: ${progress}%;"></span>
        </div>
        <p class="project-workspace__completion">${escapeHtml(renderCompletionText(completion))}</p>
      </div>
      <div class="project-workspace__actions">
        <button class="mini-button" type="button" data-action="edit-project" data-project-id="${escapeHtml(project.id)}">${escapeHtml(t('edit'))}</button>
        <button class="primary-button" type="button" data-action="create-project-task" data-project-id="${escapeHtml(project.id)}">${escapeHtml(t('taskAdd'))}</button>
        <button class="primary-button" type="button" data-action="create-group" data-project-id="${escapeHtml(project.id)}">${escapeHtml(t('groupAdd'))}</button>
      </div>
    </article>

    <div class="task-blocked-notice" id="task-blocked-notice" role="status" hidden></div>

    ${renderProjectFilterBar(activeFilter)}

    ${hasProjectTasks ? `
      <section class="project-workspace__project-tasks" aria-label="${escapeHtml(t('projectTasksAria'))}">
        <div class="project-task-list" data-sortable-project-tasks="${escapeHtml(project.id)}" aria-label="${escapeHtml(t('projectTasksAria'))} ${escapeHtml(project.title)}">
          ${projectTasksHtml}
        </div>
      </section>
    ` : ''}

    ${hasGroups ? `
      <section class="project-workspace__groups" aria-label="${escapeHtml(t('groupTasksAria'))}">
        <div class="task-groups" data-sortable-project-groups="${escapeHtml(project.id)}" aria-label="${escapeHtml(t('groupTasksAria'))} ${escapeHtml(project.title)}">
          ${groupsHtml}
        </div>
      </section>
    ` : ''}

    ${filterEmptyText ? `<div class="empty-section empty-section--compact">${escapeHtml(filterEmptyText)}</div>` : ''}
  `;

  initializeProjectSortables(details, project);

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
      recalculateProjectProgress(project);
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
  const emptyText = t('noSubtasksInGroup');
  const groupStateId = `${projectId}::${group.id}`;
  const isExpanded = expandedGroupIds.has(groupStateId);
  const taskListId = `task-group-tasks-${projectId}-${group.id}`;
  const groupClasses = [
    'task-group',
    'task-group--card',
    isExpanded ? 'task-group--expanded' : 'task-group--collapsed'
  ].join(' ');

  return `
    <article class="${groupClasses}" data-group-id="${escapeHtml(group.id)}">
      <div class="task-group__summary" data-toggle-group-id="${escapeHtml(groupStateId)}" role="button" tabindex="0" aria-expanded="${isExpanded}" aria-controls="${escapeHtml(taskListId)}" aria-label="${isExpanded ? escapeHtml(t('collapse')) : escapeHtml(t('expand'))} ${escapeHtml(t('groupTask'))} ${escapeHtml(group.title)}">
        <div class="task-group__header">
          <div class="task-group__heading">
            <span class="task-group__state" aria-hidden="true">${isExpanded ? '▾' : '▸'}</span>
            <span class="task-group__title">${escapeHtml(group.title)}</span>
          </div>
          <div class="task-group__header-controls">
            <button class="task-group__edit" type="button" data-action="edit-group" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}" aria-label="${escapeHtml(t('editGroupTask'))}">&#9998;</button>
            <button class="drag-handle task-group__drag-handle" type="button" data-drag-handle data-group-drag-handle aria-label="${escapeHtml(t('reorderGroupTask'))}">☰</button>
          </div>
        </div>
        <div class="task-group__meta-row">
          <span class="task-group__stats">${progress}% · ${escapeHtml(renderSubtaskCompletionText(completion))}</span>
          <button class="add-task-button" type="button" data-action="create-task" data-project-id="${escapeHtml(projectId)}" data-group-id="${escapeHtml(group.id)}">${escapeHtml(t('subtaskAdd'))}</button>
        </div>
        <div class="task-group__progress" aria-label="${escapeHtml(t('totalProgress'))} ${escapeHtml(t('groupTask'))} ${escapeHtml(group.title)}: ${progress}%">
          <span style="width: ${progress}%;"></span>
        </div>
      </div>
      ${isExpanded ? `
        <div class="task-list" id="${escapeHtml(taskListId)}" data-sortable-subtasks="${escapeHtml(group.id)}" aria-label="${escapeHtml(t('subtasks'))} ${escapeHtml(t('groupTask'))} ${escapeHtml(group.title)}">
          ${tasks.length ? tasks.map((task) => renderTask(task, taskLookup, projectId)).join('') : `<div class="empty-section empty-section--compact">${escapeHtml(emptyText)}</div>`}
        </div>
      ` : ''}
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
    'subtask-item',
    isDone ? 'task-item--done' : '',
    isBlocked ? 'task-item--blocked' : ''
  ].filter(Boolean).join(' ');

  return `
    <article class="${taskClasses}" data-task-id="${escapeHtml(task.id)}" ${isBlocked ? 'aria-disabled="true"' : ''}>
      <div class="task-item__row">
        <label class="task-item__main">
          <input type="checkbox" data-task-id="${escapeHtml(task.id)}" ${isDone ? 'checked' : ''} ${isBlocked ? 'aria-describedby="task-depends-' + escapeHtml(task.id) + '"' : ''}>
          <span>
            <strong>${isBlocked ? '<span class="task-item__lock" aria-hidden="true">🔒</span>' : ''}${escapeHtml(task.title)}</strong>
          </span>
        </label>
        <div class="task-item__controls">
          <button class="task-item__edit" type="button" data-action="edit-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}" aria-label="${escapeHtml(t('editSubtask'))}">&#9998;</button>
          <button class="drag-handle task-item__drag-handle" type="button" data-drag-handle data-subtask-drag-handle aria-label="${escapeHtml(t('reorderSubtask'))}">☰</button>
        </div>
      </div>
      ${task.note ? `<p>${escapeHtml(task.note)}</p>` : ''}
      ${dependencyText ? `<span class="task-item__depends" id="task-depends-${escapeHtml(task.id)}">${isBlocked ? t('dependsOn') : t('dependencies')}${escapeHtml(dependencyText)}</span>` : ''}
    </article>
  `;
}

function renderProjectTask(task, taskLookup, projectId) {
  const isDone = task.status === 'done';
  const isBlocked = isTaskBlocked(task, taskLookup);
  const dependencyTitles = getDependencyTitles(task, taskLookup);
  const dependencyText = dependencyTitles.join(', ');
  const taskClasses = [
    'task-item',
    'project-task-item',
    isDone ? 'task-item--done' : '',
    isBlocked ? 'task-item--blocked' : ''
  ].filter(Boolean).join(' ');

  return `
    <article class="${taskClasses}" data-task-id="${escapeHtml(task.id)}" ${isBlocked ? 'aria-disabled="true"' : ''}>
      <div class="task-item__row">
        <label class="task-item__main">
          <input type="checkbox" data-task-id="${escapeHtml(task.id)}" ${isDone ? 'checked' : ''} ${isBlocked ? 'aria-describedby="task-depends-' + escapeHtml(task.id) + '"' : ''}>
          <span>
            <strong>${isBlocked ? '<span class="task-item__lock" aria-hidden="true">🔒</span>' : ''}${escapeHtml(task.title)}</strong>
          </span>
        </label>
        <div class="task-item__controls">
          <button class="task-item__edit" type="button" data-action="edit-project-task" data-project-id="${escapeHtml(projectId)}" data-task-id="${escapeHtml(task.id)}" aria-label="${escapeHtml(t('editTask'))}">&#9998;</button>
          <button class="drag-handle task-item__drag-handle" type="button" data-drag-handle data-project-task-drag-handle aria-label="${escapeHtml(t('reorderTask'))}">☰</button>
        </div>
      </div>
      ${task.note ? `<p>${escapeHtml(task.note)}</p>` : ''}
      ${dependencyText ? `<span class="task-item__depends" id="task-depends-${escapeHtml(task.id)}">${isBlocked ? t('dependsOn') : t('dependencies')}${escapeHtml(dependencyText)}</span>` : ''}
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
          <p class="eyebrow">${escapeHtml(project.title)} · ${group ? escapeHtml(group.title) : escapeHtml(t('task'))}</p>
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
          <dt>Тип</dt>
          <dd>${group ? `${escapeHtml(t('groupTask'))}: ${escapeHtml(group.title)}` : escapeHtml(t('projectTask'))}</dd>
        </div>
        <div>
          <dt>${escapeHtml(t('status'))}</dt>
          <dd>${escapeHtml(t(getStatusMeta(task.status).labelKey))}</dd>
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
    'project-task': 'Задача',
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
          <dt>${escapeHtml(t('status'))}</dt>
          <dd>${escapeHtml(t(getStatusMeta(item.status).labelKey))}</dd>
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
  if (tasksList) {
    const stalledTasks = items.filter((entry) => ['project-task', 'task'].includes(entry.type));
    tasksList.innerHTML = stalledTasks.length
      ? stalledTasks.map(renderStalledCard).join('')
      : '<div class="empty-section empty-section--compact">Нет зависших задач и подзадач.</div>';
  } else {
    warnMissingElement('#stalled-tasks-list', 'Рендер раздела «Зависшие»');
  }
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
  renderSettings();
  setActiveSection(activeSectionId);
}

applyLanguage(currentLanguage);
applyTheme(selectedTheme);
setupSectionNavigation();
setupEntityControls();
renderAll(projects);

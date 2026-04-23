# 📚 Documentation Index

Welcome to COCO! Вот полный гайд по документации проекта.

## 🎯 Где начать?

**Вы новичок в проекте?**
→ Прочитайте [QUICK_START.md](./QUICK_START.md) (5 минут)

**Вы разработчик?**
→ Прочитайте [DEVELOPMENT.md](./DEVELOPMENT.md) (15 минут)

**Вы архитектор/lead?**
→ Прочитайте [ARCHITECTURE.md](./ARCHITECTURE.md) (30 минут)

---

## 📖 Все документы

### 🚀 Quick Access (Быстрый доступ)

| Документ | Время | Для кого | Ссылка |
|----------|-------|---------|--------|
| QUICK_START.md | 5 мин | Все | [Быстро начать работу](./QUICK_START.md) |
| README.md | 10 мин | Все | [Основной документ](./README.md) |

### 📋 For Developers (Для разработчиков)

| Документ | Время | Описание |
|----------|-------|---------|
| DEVELOPMENT.md | 15 мин | Гайд для разработки, Git workflow, debugging |
| frontend/README.md | 10 мин | Frontend специфика, компоненты, API |
| ARCHITECTURE.md | 30 мин | Полная архитектура, patterns, best practices |

### 👔 For Managers (Для менеджеров)

| Документ | Описание |
|----------|---------|
| PROJECT_SUMMARY.md | Общее резюме всех изменений |
| IMPROVEMENTS.md | Детальный список улучшений |
| README.md | Project overview |

### 🏗 For Architects (Для архитекторов)

| Документ | Описание |
|----------|---------|
| ARCHITECTURE.md | Полная архитектура системы |
| IMPROVEMENTS.md | Технические улучшения |
| PROJECT_SUMMARY.md | Структура и best practices |

---

## 🗂 Структура документации

```
COCO/
├── README.md               # Основной документ (10 мин)
├── QUICK_START.md          # Быстрый старт (5 мин)
├── DEVELOPMENT.md          # Разработчикам (15 мин)
├── ARCHITECTURE.md         # Архитектура (30 мин)
├── PROJECT_SUMMARY.md      # Резюме проекта (5 мин)
├── IMPROVEMENTS.md         # Список улучшений (10 мин)
├── .env.example            # Пример конфигурации
└── frontend/
    └── README.md           # Frontend документация (10 мин)
```

---

## 🎯 Частые сценарии

### 📋 "Хочу начать разработку"
1. Прочитай [QUICK_START.md](./QUICK_START.md)
2. Запусти `npm run dev` в frontend
3. Запусти `dotnet run` в backend
4. Открой http://localhost:5173

### 🐛 "Что-то не работает"
1. Проверь [QUICK_START.md](./QUICK_START.md) - "Частые проблемы"
2. Запусти `npm run lint` в frontend
3. Запусти `dotnet build` в backend
4. Смотри [DEVELOPMENT.md](./DEVELOPMENT.md) - "Debugging"

### 🏗 "Хочу понять архитектуру"
1. Прочитай [ARCHITECTURE.md](./ARCHITECTURE.md)
2. Посмотри папки: frontend/src/, bekand/Controllers/
3. Смотри примеры в компонентах

### 📦 "Хочу добавить новую фичу"
1. Прочитай [DEVELOPMENT.md](./DEVELOPMENT.md) - "Git Workflow"
2. Создай ветку: `git checkout -b feature/название`
3. Смотри [ARCHITECTURE.md](./ARCHITECTURE.md) - "Архитектура решений"
4. Добавляй код согласно структуре

### 📈 "Компилировать для production"
1. Frontend: `npm run build` → папка dist/
2. Backend: `dotnet publish -c Release`
3. Смотри [QUICK_START.md](./QUICK_START.md) - "Production Deploy"

---

## 📚 По темам

### 🔧 Backend (ASP.NET Core)
- **Быстрый старт:** [QUICK_START.md](./QUICK_START.md) - "Backend"
- **Архитектура:** [ARCHITECTURE.md](./ARCHITECTURE.md) - "Backend"
- **Разработка:** [DEVELOPMENT.md](./DEVELOPMENT.md) - "Backend Pattern"

### ⚛️ Frontend (React)
- **Быстрый старт:** [QUICK_START.md](./QUICK_START.md) - "Frontend"
- **Документация:** [frontend/README.md](./frontend/README.md)
- **Компоненты:** [ARCHITECTURE.md](./ARCHITECTURE.md) - "Frontend"
- **API:** [frontend/README.md](./frontend/README.md) - "Работа с API"

### 🎨 Code Quality
- **EditorConfig:** [QUICK_START.md](./QUICK_START.md) - "CSS переменные"
- **Prettier:** [DEVELOPMENT.md](./DEVELOPMENT.md) - "Перед коммитом"
- **ESLint:** [QUICK_START.md](./QUICK_START.md) - "Перед пушем"

### 📧 Конфигурация
- **Environment:** [.env.example](./.env.example)
- **CORS:** [ARCHITECTURE.md](./ARCHITECTURE.md) - "Конфигурация"
- **Ports:** [QUICK_START.md](./QUICK_START.md) - "Частые проблемы"

---

## 🆘 Нужна помощь?

### Найди ответ здесь:

1. **Не знаю с чего начать**
   → [QUICK_START.md](./QUICK_START.md)

2. **Не работает что-то**
   → [QUICK_START.md](./QUICK_START.md) - "Частые проблемы"

3. **Ошибка компиляции**
   → [DEVELOPMENT.md](./DEVELOPMENT.md) - "Debugging"

4. **Не знаю как добавить компонент/контроллер**
   → [ARCHITECTURE.md](./ARCHITECTURE.md) - "Архитектура решений"

5. **Как работает API?**
   → [frontend/README.md](./frontend/README.md) - "Работа с API"

6. **Хочу закоммитить код**
   → [DEVELOPMENT.md](./DEVELOPMENT.md) - "Git Workflow"

---

## 📞 Контакты

Если остались вопросы:
- Посмотри соответствующую документацию выше
- Проверь примеры кода в компонентах
- Используй Swagger UI: http://localhost:5000/swagger

---

## 📊 Время чтения по ролям

| Роль | Документы | Время |
|------|-----------|-------|
| 👨‍💻 Разработчик (новый) | QUICK_START, DEVELOPMENT | 20 мин |
| 👥 Разработчик (опытный) | ARCHITECTURE | 15 мин |
| 🏗 Архитектор | ARCHITECTURE, IMPROVEMENTS | 45 мин |
| 📊 Product Manager | PROJECT_SUMMARY, README | 15 мин |
| 👔 Lead/Manager | IMPROVEMENTS, PROJECT_SUMMARY | 15 мин |

---

## ✨ Совет

Сохрани этот индекс в закладки! Он поможет все быстро найти.

**Начни с [QUICK_START.md](./QUICK_START.md) →**

---

Last Updated: 2026-04-23
Version: 1.0.0


# COCO - Архитектура и структура проекта

## 📋 Обзор

Это полнофункциональное веб-приложение с разделением на backend (ASP.NET Core) и frontend (React + Vite).

## 🏗️ Структура проекта

```
COCO/
├── bekand/                    # Backend (ASP.NET Core API)
│   ├── Controllers/           # API контроллеры
│   │   └── HealthController.cs  # Пример контроллера
│   ├── Program.cs             # Основной файл приложения
│   ├── bekand.csproj          # Конфигурация проекта
│   ├── appsettings.json       # Конфигурация (Production)
│   └── appsettings.Development.json  # Конфигурация (Development)
│
├── frontend/                  # Frontend (React + Vite)
│   ├── public/                # Статические файлы
│   ├── src/
│   │   ├── components/        # React компоненты
│   │   │   └── HeroSection.jsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useApi.js      # Hook для API запросов
│   │   ├── utils/             # Вспомогательные функции
│   │   │   └── helpers.js
│   │   ├── assets/            # Изображения, SVG, шрифты
│   │   ├── App.jsx            # Главный компонент
│   │   ├── App.css            # Стили App
│   │   ├── index.css          # Глобальные стили
│   │   ├── api.js             # HTTP клиент
│   │   └── main.jsx           # Entry point
│   ├── index.html             # HTML шаблон
│   ├── vite.config.js         # Конфигурация Vite
│   ├── eslint.config.js       # ESLint конфигурация
│   ├── package.json           # Зависимости NPM
│   ├── .prettierrc             # Prettier конфигурация
│   └── .prettierignore         # Prettier ignore файлы
│
├── .editorconfig              # EditorConfig для консистентности кода
├── .gitignore                 # Git ignore файлы
├── README.md                  # Основная документация
├── ARCHITECTURE.md            # Этот файл
└── COCO.sln                   # Visual Studio решение
```

## 🔌 Backend - ASP.NET Core 10.0

### Особенности

- ✅ Настроен CORS для React фронтенда
- ✅ Swagger/OpenAPI документация
- ✅ Логирование черезConsoleLogger
- ✅ Типизация контроллеров
- ✅ Пример Health Check контроллера

### Запуск Backend

```bash
cd bekand
dotnet run
```

Backend работает на `http://localhost:5000`

### Доступные эндпоинты

- `GET /api/health/status` - проверка состояния
- `GET /api/health/info` - информация об API
- `GET /swagger/index.html` - Swagger документация

### Добавление нового контроллера

Создайте файл в `Controllers/` папке:

```csharp
[ApiController]
[Route("api/[controller]")]
public class MyController : ControllerBase
{
    [HttpGet]
    public IActionResult GetData()
    {
        return Ok(new { message = "Hello" });
    }
}
```

## ⚛️ Frontend - React 19.2 + Vite 8.0

### Структура компонентов

- **HeroSection** - главная секция приложения
- Добавляйте новые компоненты в `src/components/`

### Custom Hooks

- **useApi** - управление API запросами с loading/error состояниями

```javascript
const {data, loading, error, execute} = useApi(api.get);
await execute('/health/status');
```

### Утилиты

Вспомогательные функции в `src/utils/helpers.js`:

- `formatDate()` - форматирование дат
- `formatTime()` - форматирование времени
- `isEmpty()` - проверка на пусто
- `safeJsonParse()` - безопасный JSON парсинг
- `delay()` - задержка выполнения

### API клиент

Использование в компонентах:

```javascript
import {api} from './api';

// GET запрос
const data = await api.get('/health/status');

// POST запрос
const response = await api.post('/endpoint', {key: 'value'});

// PUT запрос
const updated = await api.put('/endpoint/1', {key: 'value'});

// DELETE запрос
await api.delete('/endpoint/1');
```

### Запуск Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend работает на `http://localhost:5173`

### Доступные скрипты

```bash
npm run dev         # Development сервер
npm run build       # Build для production
npm run preview     # Preview production сборки
npm run lint        # Проверка кода ESLint
npm run lint:fix    # Исправление ошибок ESLint
npm run format      # Форматирование кода Prettier
npm run format:check # Проверка форматирования
```

## 🎨 Стилизация

### CSS переменные

Определены в `index.css`:

- `--text` - цвет текста
- `--bg` - цвет фона
- `--accent` - основной цвет акцента
- `--border` - цвет границ

### Dark Mode

Автоматически адаптируется под системные настройки через `prefers-color-scheme`

## 📦 Зависимости

### Backend

- Microsoft.AspNetCore.OpenApi 10.0.7 - Swagger поддержка

### Frontend

- react 19.2.5
- react-dom 19.2.5
- vite 8.0.10
- eslint 10.2.1
- prettier 3.0.0

## 🔐 Конфигурация

### CORS

Backend разрешает запросы с:

- http://localhost:5173 (Vite dev server)
- http://localhost:3000 (альтернативный порт)

Изменить в `bekand/Program.cs`:

```csharp
policy.WithOrigins("http://localhost:5173", "http://localhost:3000")
```

### Порты

- Backend: 5000 (HTTP), 5001 (HTTPS)
- Frontend: 5173 (Vite dev server)

Изменить в `bekand/Properties/launchSettings.json`

## 🛠️ Разработка

### Code Style

- **C#**: используем `indent_size = 4`
- **JavaScript/JSX**: используем `indent_size = 2`
- **JSON**: используем `indent_size = 2`

Конфигурация в `.editorconfig` и `.prettierrc`

### Git Workflow

1. Создайте ветку для фичи: `git checkout -b feature/название`
2. Сделайте коммиты
3. Создайте Pull Request

## 🚀 Deployment

### Backend

```bash
cd bekand
dotnet publish -c Release
```

### Frontend

```bash
cd frontend
npm run build
# Результат в dist/ папке
```

## 📚 Полезные ссылки

- [ASP.NET Core документация](https://learn.microsoft.com/aspnet/core)
- [React документация](https://react.dev)
- [Vite документация](https://vite.dev)
- [Swagger/OpenAPI](https://swagger.io)

## 🤝 Контрибьютинг

1. Следуйте code style из `.editorconfig`
2. Запускайте `npm run lint:fix` перед commit
3. Пишите понятные commit сообщения
4. Добавляйте комментарии для сложного кода


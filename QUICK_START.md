# Quick Reference Guide 🚀

## ⚡ Быстрый старт

### 1️⃣ Первый запуск
```bash
# Терминал 1 - Backend
cd bekand
dotnet run
# Будет доступен на http://localhost:5000

# Терминал 2 - Frontend
cd frontend
npm install
npm run dev  
# Будет доступен на http://localhost:5173
```

### 2️⃣ Проверка что все работает
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/health/status
- Swagger UI: http://localhost:5000/swagger

## 📋 Перед пушем в Git
```bash
cd frontend
npm run lint:fix     # Исправить lint ошибки
npm run format       # Форматировать код
npm run build        # Проверить production сборку
```

## 🔗 Главные файлы для работы

### Backend
- `bekand/Program.cs` - Конфигурация приложения
- `bekand/Controllers/HealthController.cs` - Пример контроллера
- `bekand/appsettings.json` - Настройки

### Frontend
- `frontend/src/App.jsx` - Главный компонент
- `frontend/src/api.js` - HTTP клиент для API
- `frontend/src/hooks/useApi.js` - Custom hook для запросов
- `frontend/vite.config.js` - Конфигурация Vite

## 📁 Где добавлять новое

### Новые API endpoints
```
bekand/Controllers/MyController.cs
```

### Новые React компоненты
```
frontend/src/components/MyComponent.jsx
frontend/src/components/MyComponent.css  (если нужно)
```

### Вспомогательные функции
```
frontend/src/utils/helpers.js
```

### Custom Hooks
```
frontend/src/hooks/useMyHook.js
```

## 🧪 Полезные команды

### Frontend
```bash
npm run dev          # Development сервер (с HMR)
npm run build        # Собрать для production
npm run preview      # Просмотр production сборки
npm run lint         # Проверить ошибки кода
npm run lint:fix     # Исправить ошибки автоматически
npm run format       # Отформатировать код
npm run format:check # Проверить форматирование
```

### Backend
```bash
dotnet run                      # Запустить dev сервер
dotnet build                    # Собрать проект
dotnet build -c Release         # Release сборка
dotnet publish -c Release       # Для production
```

## 🐛 Отладка

### Frontend
- Откройте DevTools (F12)
- React tab → Components/Profiler
- Network tab → API requests
- Console → Ошибки

### Backend
- Swagger UI: http://localhost:5000/swagger
- Логи в Console (черного окна dotnet run)
- Breakpoints в Visual Studio/Rider

## 📚 Документация

| Файл | Содержание |
|------|-----------|
| README.md | Общее описание и быстрый старт |
| ARCHITECTURE.md | Архитектура и структура проекта |
| DEVELOPMENT.md | Гайд для разработчиков |
| IMPROVEMENTS.md | Список всех улучшений |
| frontend/README.md | Frontend специфика |

## 🔌 Работа с API

```javascript
// Импорт
import { api } from './api';

// GET
const data = await api.get('/health/status');

// POST
const result = await api.post('/users', { name: 'John' });

// PUT
const updated = await api.put('/users/1', { name: 'Jane' });

// DELETE
await api.delete('/users/1');
```

## 🎨 CSS переменные

```css
--text         /* основной цвет текста */
--text-h       /* заголовки */
--bg           /* фон */
--border       /* границы */
--code-bg      /* фон кода */
--accent       /* основной цвет */
--accent-bg    /* фон акцента */
--accent-border/* граница акцента */
```

Используются автоматически для dark mode через `prefers-color-scheme`

## 🚀 Production Deploy

### Frontend
```bash
npm run build
# Развернуть папку dist/ на хостинг
```

### Backend
```bash
dotnet publish -c Release
# Развернуть содержимое bin/Release/net10.0/publish/
```

## ❓ Частые проблемы

### "Cannot GET /" при открытии Frontend
- Убедитесь что `npm run dev` запущен в папке frontend

### "Failed to find module" ошибка
- Запустите `npm install` в папке frontend

### CORS ошибка в консоли
- Убедитесь что Backend на http://localhost:5000
- Проверьте Program.cs CORS конфигурацию

### Порт 5000/5173 уже занят
- Меняйте port в `launchSettings.json` (backend)
- Vite автоматически выберет свободный порт (frontend)

## 📞 Нужна помощь?

1. Проверьте README.md
2. Посмотрите ARCHITECTURE.md
3. Прочитайте DEVELOPMENT.md
4. Запустите linters: `npm run lint`
5. Проверьте Swagger: http://localhost:5000/swagger

---

**Это все что нужно для развития!** 💪

Happy Coding! 🎉


# COCO - Полнофункциональное приложение

Полнофункциональное веб-приложение с ASP.NET Core backend и React + Vite frontend.

## 🚀 Быстрый старт

### Требования

- .NET SDK 10.0+
- Node.js 16+
- npm или yarn

### Backend (ASP.NET Core)

```bash
cd bekand
dotnet run
```

API доступна на **http://localhost:5000**

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend доступен на **http://localhost:5173**

## 📁 Структура проекта

- **bekand/** - ASP.NET Core API сервер
- **frontend/** - React приложение с Vite
- **ARCHITECTURE.md** - детальная архитектура проекта

## 🛠 Технологический стек

**Backend:**
- ASP.NET Core 10.0
- Swagger/OpenAPI для документации
- CORS для безопасности
- Логирование и обработка ошибок

**Frontend:**
- React 19.2
- Vite 8.0 (молниеносная разработка)
- ESLint + Prettier для качества кода
- Custom React hooks для API работы

## 📝 Доступные команды

### Frontend

```bash
npm run dev          # Development сервер
npm run build        # Production сборка
npm run lint         # Проверка кода
npm run lint:fix     # Исправление ошибок
npm run format       # Форматирование кода
npm run preview      # Preview production
```

## 🔗 API Документация

Swagger доступен на: http://localhost:5000/swagger

Основные endpoints:
- `GET /api/health/status` - проверка состояния
- `GET /api/health/info` - информация об API

## 🐛 Решение проблем

### CORS ошибки
Убедитесь, что backend запущен на http://localhost:5000

### Порты уже заняты
- Backend: измените порт в `bekand/Properties/launchSettings.json`
- Frontend: Vite автоматически использует следующий доступный порт

### Зависимости не установлены
```bash
cd bekand && dotnet restore
cd frontend && npm install
```

## 📚 Документация

- [ARCHITECTURE.md](./ARCHITECTURE.md) - детальная архитектура и структура
- Backend имеет встроенное Swagger UI

## 🤝 Разработка

Проект организован для удобной разработки:
- Используйте JetBrains Rider для C# разработки
- Используйте WebShtorm для Frontend разработки
- Custom hooks для API запросов
- Автоматическое форматирование кода
- EditorConfig для консистентности

## 📦 Production Deploy

### Backend

```bash
cd bekand
dotnet publish -c Release
```

### Frontend

```bash
cd frontend
npm run build
# Результат в папке dist/
```

---




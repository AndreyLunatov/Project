# 🚀 Быстрый старт

## ✅ Статус проекта
- **Бэкенд**: ✅ Запущен на `http://localhost:5000`
- **Фронтенд**: ✅ Запущен на `http://localhost:5173`
- **API**: ✅ Работает (`/api/health/status`, `/api/health/info`)
- **OpenAPI**: ✅ Доступна (`/openapi/v1.json`)

## 🧪 Тестирование API

### Через Backend.http файл
1. Откройте `backend/Backend.http` в Rider
2. Установите курсор на запрос
3. Нажмите `Ctrl+Enter` (или кликните на зеленую стрелку)

### Через браузер
- Health check: http://localhost:5000/api/health/status
- API info: http://localhost:5000/api/health/info
- OpenAPI docs: http://localhost:5000/openapi/v1.json

### Через PowerShell
```powershell
# Health status
Invoke-WebRequest -Uri "http://localhost:5000/api/health/status" -UseBasicParsing

# API info
Invoke-WebRequest -Uri "http://localhost:5000/api/health/info" -UseBasicParsing
```

## 🎯 Что работает
- ✅ ASP.NET Core API с .NET 10.0
- ✅ React + Vite фронтенд
- ✅ CORS настроен для локальной разработки
- ✅ OpenAPI/Swagger документация
- ✅ Health check endpoints

## 🔧 Запуск проекта

### Бэкенд
```bash
cd backend
dotnet run
```

### Фронтенд
```bash
cd frontend
npm run dev
```

## 📝 Следующие шаги
1. Добавить новые API endpoints в `Controllers/`
2. Создать React компоненты в `frontend/src/components/`
3. Настроить API клиент для фронтенда
4. Добавить базу данных

**Все системы работают! 🎉**

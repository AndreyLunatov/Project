# Development Guide

Гайд для разработчиков по работе с COCO приложением.

## 🛠 Локальная разработка

### Установка

```bash
# Backend
cd bekand
dotnet restore

# Frontend
cd frontend
npm install
```

### Запуск в development режиме

**Terminal 1 - Backend:**
```bash
cd bekand
dotnet run
```

Сервер будет на http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Приложение будет на http://localhost:5173

## 📋 Перед коммитом

### Frontend

```bash
cd frontend
npm run lint:fix    # Исправить ошибки
npm run format      # Форматировать код
npm run build       # Проверить production сборку
```

### Backend

```bash
cd bekand
dotnet format       # Форматировать C# код (если установлено)
dotnet build        # Проверить сборку
```

## 🏗 Архитектура решений

### Backend - ASP.NET Core MVC Pattern

```
Controllers/          # API endpoints
├── HealthController  # Пример контроллера

Models/              # Data classes (при добавлении)

Services/            # Business logic (при добавлении)
```

Новый контроллер:
```csharp
[ApiController]
[Route("api/[controller]")]
public class MyController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { message = "Hello" });
}
```

### Frontend - React Component Pattern

```
components/          # Переиспользуемые компоненты
├── ComponentName.jsx
└── ComponentName.css

hooks/              # Custom React hooks
pages/              # Page components (при добавлении)
utils/              # Helper functions
```

Новый компонент:
```jsx
import PropTypes from 'prop-types';

export const MyComponent = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default MyComponent;
```

## 🔄 Git Workflow

```bash
# 1. Создать ветку фичи
git checkout -b feature/название-фичи

# 2. Сделать изменения
# ... edit files ...

# 3. Проверить линтер и формат
cd frontend && npm run lint:fix && npm run format

# 4. Коммит
git add .
git commit -m "feat: описание изменений"

# 5. Push
git push origin feature/название-фичи

# 6. Создать Pull Request
```

### Сообщения коммитов

- `feat:` - новая фича
- `fix:` - исправление ошибки
- `docs:` - документация
- `style:` - формат кода
- `refactor:` - рефакторинг
- `test:` - тесты
- `chore:` - технические изменения

## 📱 Debugging

### Frontend

1. **React DevTools** - в Chrome DevTools
2. **Network tab** - для отладки API запросов
3. `console.log()` - базовая отладка
4. VSCode Debugger

### Backend

1. **Swagger UI** - http://localhost:5000/swagger
2. Visual Studio Debugger в Rider
3. `Console.WriteLine()` или логирование

## 🧪 Testing (будущее)

```bash
# Frontend
npm run test

# Backend
dotnet test
```

## 📊 Performance
- Используйте React DevTools Profiler
- Проверяй Network tab для больших файлов
- Используй `dotnet publish -c Release` для production бенчмарков

## 🔐 Security Notes

- Никогда не коммитьте `.env` файлы с secrets
- Используйте `appsettings.json` для конфигурации
- Проверяйте CORS настройки перед деплоем
- Updatete зависимости регулярно

## 📞 Помощь

- Проверьте ARCHITECTURE.md для деталей архитектуры
- Смотрите README.md для быстрого старта
- Используйте встроенную документацию в коде

---

Happy Coding! 🚀


# Frontend Documentation - COCO

Полная документация React + Vite фронтенда для COCO приложения.

## 📁 Структура проекта

```
frontend/
├── public/                    # Статические файлы
│   ├── config.json           # Конфигурация приложения
│   ├── mockData.json         # Mock данные для тестирования
│   ├── favicon.svg           # Иконка сайта
│   └── icons.svg             # SVG иконки
│
├── src/                       # Исходный код
│   ├── components/           # React компоненты
│   │   ├── HeroSection.jsx
│   │   └── HeroSection.css
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── useApi.js         # Hook для API запросов
│   │
│   ├── utils/                # Утилиты и помощники
│   │   └── helpers.js        # Вспомогательные функции
│   │
│   ├── assets/               # Изображения и ресурсы
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── hero.png
│   │
│   ├── App.jsx               # Главный компонент
│   ├── App.css               # Стили App
│   ├── index.css             # Глобальные стили
│   ├── api.js                # HTTP клиент для API
│   └── main.jsx              # Entry point приложения
│
├── index.html                # HTML шаблон
├── vite.config.js            # Конфигурация Vite (dev server, proxy)
├── eslint.config.js          # ESLint конфигурация
├── package.json              # Dependencies и scripts
├── .prettierrc                # Prettier конфигурация (2 spaces)
└── .prettierignore            # Prettier ignore файлы

```

## 🚀 Быстрый старт

### Установка зависимостей
```bash
cd frontend
npm install
```

### Development сервер
```bash
npm run dev
```
Приложение откроется на **http://localhost:5173**

### Production сборка
```bash
npm run build
```
Результат в папке **dist/**

### Проверка кода
```bash
npm run lint          # Проверить ошибки
npm run lint:fix      # Исправить ошибки автоматически
npm run format        # Форматировать код Prettier
npm run format:check  # Проверить форматирование
npm run preview       # Просмотр production сборки
```

## 📝 Доступные скрипты

```json
{
  "dev": "vite",                                  // Dev сервер с HMR
  "build": "vite build",                         // Production сборка
  "lint": "eslint .",                            // Проверка кода
  "lint:fix": "eslint . --fix",                  // Исправление ошибок
  "format": "prettier --write \"src/**/*.{js,jsx,json,css}\"",
  "format:check": "prettier --check \"src/**/*.{js,jsx,json,css}\"",
  "preview": "vite preview"                      // Preview production
}
```

## 🔌 API Интеграция

### API Клиент
Находится в `src/api.js` - готовый HTTP клиент для работы с backend.

#### Использование
```javascript
import { api } from './api';

// GET запрос
const data = await api.get('/health/status');

// POST запрос
const response = await api.post('/users', {
  name: 'John',
  email: 'john@example.com'
});

// PUT запрос для обновления
const updated = await api.put('/users/1', {
  name: 'Jane'
});

// DELETE запрос
await api.delete('/users/1');
```

### Обработка ошибок
```javascript
try {
  const data = await api.get('/data');
} catch (error) {
  console.error('API Error:', error.message);
}
```

### useApi Hook
Custom hook для удобной работы с API запросами:

```javascript
import { useApi } from './hooks/useApi';
import { api } from './api';

function MyComponent() {
  const { data, loading, error, execute, reset } = useApi(api.get);

  const fetchData = async () => {
    try {
      await execute('/api/data');
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={fetchData}>Загрузить</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```

**Hook возвращает:**
- `data` - результат запроса
- `loading` - статус загрузки
- `error` - сообщение об ошибке
- `execute(...args)` - выполнить запрос
- `reset()` - очистить state

## 🎨 Стилизация

### CSS Переменные
Глобальные переменные в `src/index.css`:

```css
:root {
  /* Цвета текста */
  --text: #6b6375;        /* основной текст */
  --text-h: #08060d;      /* заголовки */
  
  /* Фон */
  --bg: #fff;             /* основной фон */
  
  /* Границы */
  --border: #e5e4e7;      /* цвет линий */
  
  /* Код */
  --code-bg: #f4f3ec;     /* фон кода */
  
  /* Акцент */
  --accent: #aa3bff;      /* основной цвет */
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
}
```

### Dark Mode
Автоматически включается в зависимости от системных настроек через `prefers-color-scheme: dark`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --bg: #16171d;
    /* ... остальные переменные ... */
  }
}
```

### Форматирование кода
Используется Prettier с конфигурацией в `.prettierrc`:
- 2 пробела отступ
- Одинарные кавычки
- Trailing comma для ES5
- Line width: 100 символов

## 🧩 Компоненты

### HeroSection
Главная секция приложения с логотипами.

**Расположение:** `src/components/HeroSection.jsx`

**Props:**
- `onCounterClick` - функция при клике на кнопку
- `count` - текущее значение счетчика

**Использование:**
```jsx
import HeroSection from './components/HeroSection';

<HeroSection 
  onCounterClick={() => setCount(count + 1)} 
  count={count} 
/>
```

### App
Главный компонент приложения.

**Расположение:** `src/App.jsx`

Рефакторен с использованием:
- Компонентов для лучшей организации
- PropTypes для валидации
- Правильной работе с состоянием

## 🎯 Лучшие практики

### PropTypes валидация
```javascript
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
```

### JSDoc документация
```javascript
/**
 * Загрузить данные с API
 * @param {string} endpoint - путь API
 * @returns {Promise} данные
 */
export const fetchData = (endpoint) => {
  // ...
};
```

### Безопасность
```jsx
{/* Всегда используйте rel="noopener noreferrer" для external ссылок */}
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link
</a>
```

### Асинхронные операции
```javascript
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleFetch = async () => {
  setLoading(true);
  try {
    const data = await api.get('/data');
    // обработать данные
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

## 🛠️ Инструменты

### ESLint
Проверка кода на ошибки и соответствие стайлгайду.

**Команды:**
```bash
npm run lint        # Проверить все файлы
npm run lint:fix    # Исправить автоматически
```

### Prettier
Автоматическое форматирование кода.

**Команды:**
```bash
npm run format       # Отформатировать все файлы
npm run format:check # Проверить форматирование
```

### Vite
Build tool для быстрой разработки.

**Особенности:**
- Lightning fast HMR (Hot Module Replacement)
- Оптимизированная production сборка
- Встроенная поддержка TypeScript
- Proxy для API запросов (см. vite.config.js)

**Proxy конфигурация:**
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '/api'),
  },
}
```

Это позволяет вызывать API как `fetch('/api/endpoint')` вместо полного URL.

## 📊 Mock данные

Для тестирования используются mock данные в `public/mockData.json`:

```javascript
// Загрузить mock данные
fetch('/mockData.json')
  .then(res => res.json())
  .then(data => console.log(data.mockData));
```

## 🌍 Конфигурация

### config.json
Файл с конфигурацией приложения `public/config.json`:

```json
{
  "name": "COCO",
  "version": "1.0.0",
  "apiVersion": "v1"
}
```

**Загрузка в коде:**
```javascript
const config = await fetch('/config.json').then(r => r.json());
console.log(config.name); // COCO
```

## 🐛 Debugging

### React DevTools
1. Установите расширение [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools) для Chrome
2. Откройте DevTools (F12)
3. Перейдите на вкладку "Components"

### Network tab
Для отладки API запросов используйте Network tab в DevTools:
1. F12 → Network
2. Выполните запрос
3. Посмотрите Request/Response details

### Console
```javascript
// Логирование
console.log('debug:', variable);
console.error('error:', error);
console.warn('warning:', message);

// Структурировано
console.table(arrayOfObjects);
```

### HMR (Hot Module Replacement)
Vite автоматически обновляет изменения без перезагрузки страницы - просто сохранитесь!

## 📦 Production Deploy

### Build
```bash
npm run build
```

Результат в папке `dist/` содержит:
- `index.html` - главная страница
- `assets/` - JS и CSS файлы
- `config.json` - конфигурация

### Развертывание
Папку `dist/` можно развернуть на:

**Vercel**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# Развернуть папку dist/
```

**Docker**
```dockerfile
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📚 Дополнительные ресурсы

- [React Документация](https://react.dev)
- [Vite Документация](https://vite.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## 🤝 Contributing

При добавлении новых компонентов:

1. Создайте папку в `src/components/ComponentName/`
2. Добавьте `ComponentName.jsx` и `ComponentName.css`
3. Экспортируйте компонент из `index.js`
4. Добавьте PropTypes валидацию
5. Запустите `npm run lint:fix && npm run format`
6. Создайте Pull Request

---

**Счастливой разработки!** 🚀

Используйте `QUICK_START.md` для быстрого старта или обратитесь к основному `README.md`.


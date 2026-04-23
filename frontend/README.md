# Фронтенд COCO — кратко по делу

## Запуск

```bash
cd frontend
npm install
npm run dev
```

Сайт: **http://localhost:5173**. Бэкенд должен быть запущен отдельно (`cd ../backend && dotnet run`), порт по умолчанию **5248**.

## Где что лежит

| Путь | Назначение |
|------|------------|
| `src/main.jsx` | Точка входа React |
| `src/App.jsx` | Корневой layout / страница |
| `src/App.css`, `src/index.css` | Глобальные и корневые стили |
| `src/components/` | UI-компоненты (рядом с компонентом — свой `.css`) |
| `src/hooks/useApi.js` | Хук: `loading` / `error` / `data` / `execute` для любого вызова API |
| `src/api.js` | Обёртка `fetch`: `api.get`, `api.post`, … |
| `src/utils/helpers.js` | Общие утилиты |
| `src/assets/` | Картинки, SVG, статика для импорта из кода |
| `public/` | Файлы как есть по URL (`/config.json`, `/mockData.json`, favicon и т.д.) |
| `vite.config.js` | Порт dev-сервера, **прокси** `/api` → `http://localhost:5248` |
| `index.html` | HTML-шаблон, подключение `main.jsx` |

## API с фронта

- В **разработке** запросы идут на **относительный** базовый путь `/api` (см. `src/api.js`) — Vite сам проксирует на ASP.NET.
- Пример бэкенда: `GET /api/Health/status`.
- В **продакшене** задайте базу через переменную окружения при сборке: `VITE_API_BASE` (например `https://api.example.com/api`). Если не задана, используется `/api` (один origin с API или свой reverse proxy).

## Скрипты

- `npm run dev` — dev-сервер  
- `npm run build` — прод-сборка в `dist/`  
- `npm run preview` — локальный просмотр `dist`  
- `npm run lint` — ESLint  

## Бэкенд и CORS

Ожидаются origin’ы **http://localhost:5173** и **http://localhost:3000** (настройка в `backend/Program.cs`). Менять порт фронта — синхронизировать с бэкендом.

## Полезное

- Конфиг для UI без сборки: `public/config.json` (читается по `/config.json`).
- Моки/примеры данных: `public/mockData.json`.

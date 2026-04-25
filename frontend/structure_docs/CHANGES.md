# ✅ Организация структуры Frontend проекта

## Что было сделано

### 1. **Создана модульная архитектура**
   - ✅ `/types` - TypeScript типы и интерфейсы
   - ✅ `/constants` - константы приложения и маршруты
   - ✅ `/utils` - вспомогательные функции
   - ✅ `/hooks` - пользовательские React хуки
   - ✅ `/services` - сервисы для работы с API
   - ✅ `/context` - React Context для глобального состояния
   - ✅ `/config` - конфигурация приложения
   - ✅ `/components/common` - переиспользуемые UI компоненты

### 2. **Типы (Types)**
   - `api.ts` - типы для API запросов/ответов
   - `entities.ts` - типы основных сущностей (User, Grade, Homework, ScheduleItem)

### 3. **Константы (Constants)**
   - `api.ts` - API endpoints (GRADES, SCHEDULE, HOMEWORK, PROFILE, AUTH)
   - `routes.ts` - маршруты приложения

### 4. **Утилиты (Utils)**
   - `helpers.ts` - вспомогательные функции (formatDate, delay)

### 5. **Хуки (Hooks)**
   - `useAuth.ts` - хук для работы с аутентификацией
   - `useFetch.ts` - хук для загрузки данных с сервера

### 6. **Сервисы (Services)**
   - `api.ts` - API клиент с методами GET, POST, PUT, DELETE
   - `grades.service.ts` - сервис для работы с оценками
   - `schedule.service.ts` - сервис для работы с расписанием
   - `homework.service.ts` - сервис для работы с домашним заданием
   - `profile.service.ts` - сервис для работы с профилем

### 7. **Контекст (Context)**
   - `AuthContext.tsx` - контекст для управления аутентификацией
   - `useAuth` хук для использования контекста

### 8. **Конфигурация (Config)**
   - `index.ts` - конфигурация API и приложения

### 9. **Общие компоненты (Components/Common)**
   - `Button.tsx` - компонент кнопки с вариантами (primary, secondary, danger)
   - `Card.tsx` - компонент карточки для группировки содержимого
   - `Loading.tsx` - компонент загрузки с спиннером

### 10. **Обновлены существующие компоненты**
   - ✅ `Layout.tsx` - теперь использует именованный экспорт
   - ✅ `Aside.tsx` - обновлены импорты для работы с новой структурой
   - ✅ `AsideNavigation.tsx` - обновлены импорты иконок
   - ✅ Все иконки - обновлены на именованные экспорты

### 11. **Index файлы для упрощения импортов**
   - ✅ Каждая папка имеет `index.ts` для экспорта
   - ✅ Упрощены импорты: `import { Button } from '@/components/common'`

### 12. **Обновлен App.tsx**
   - ✅ Использует компонент Loading вместо текста
   - ✅ Правильно импортирует Layout из index.ts

## Структура проекта

```
src/
├── App.tsx                          # Главный компонент с маршрутизацией
├── main.tsx                         # Точка входа
├── style.css                        # Глобальные стили
├── STRUCTURE.md                     # Документация структуры
│
├── types/                           # TypeScript типы
│   ├── index.ts                    # Экспорт всех типов
│   ├── api.ts                      # Типы API
│   └── entities.ts                 # Типы сущностей
│
├── constants/                       # Константы
│   ├── index.ts                    # Экспорт констант
│   ├── api.ts                      # API endpoints
│   └── routes.ts                   # Маршруты
│
├── utils/                          # Утилиты
│   ├── index.ts                    # Экспорт утилит
│   └── helpers.ts                  # Вспомогательные функции
│
├── hooks/                          # React хуки
│   ├── index.ts                    # Экспорт хуков
│   ├── useAuth.ts                  # Хук аутентификации
│   └── useFetch.ts                 # Хук загрузки данных
│
├── services/                       # Сервисы API
│   ├── index.ts                    # Экспорт сервисов
│   ├── api.ts                      # API клиент
│   ├── grades.service.ts           # Сервис оценок
│   ├── schedule.service.ts         # Сервис расписания
│   ├── homework.service.ts         # Сервис домашнего задания
│   └── profile.service.ts          # Сервис профиля
│
├── context/                        # React Context
│   ├── index.ts                    # Экспорт контекстов
│   └── AuthContext.tsx             # Контекст аутентификации
│
├── config/                         # Конфигурация
│   └── index.ts                    # Конфигурация приложения
│
├── components/                     # React компоненты
│   ├── common/                     # Общие компоненты
│   │   ├── index.ts               # Экспорт компонентов
│   │   ├── Button.tsx             # Кнопка
│   │   ├── Card.tsx               # Карточка
│   │   └── Loading.tsx            # Загрузка
│   ├── aside/                      # Боковая панель
│   │   ├── index.ts               # Экспорт компонентов
│   │   ├── AsideNavigation.tsx     # Навигация
│   │   └── icons/                  # SVG иконки
│   │       ├── index.ts           # Экспорт иконок
│   │       ├── SvgIcon.tsx        # Базовая иконка
│   │       ├── HomeIcon.tsx       # Иконка Главная
│   │       ├── ScheduleIcon.tsx   # Иконка Расписание
│   │       ├── GradeIcon.tsx      # Иконка Оценки
│   │       ├── HomeworkIcon.tsx   # Иконка Домашнее задание
│   │       ├── ProfileIcon.tsx    # Иконка Профиль
│   │       └── SettingsIcon.tsx   # Иконка Настройки
│   └── layout/                     # Макет
│       ├── index.ts               # Экспорт компонентов
│       ├── Layout.tsx             # Главный макет
│       └── Aside.tsx              # Боковая панель
│
└── pages/                          # Страницы (ленивая загрузка)
    ├── index.ts                    # Экспорт страниц
    ├── Home.tsx                    # Главная страница
    ├── Schedule.tsx                # Расписание
    ├── Grades.tsx                  # Оценки
    ├── Homework.tsx                # Домашнее задание
    └── Profile.tsx                 # Профиль
```

## Как использовать

### Импорт компонента
```typescript
import { Button, Card, Loading } from '@/components/common';
```

### Импорт сервиса
```typescript
import { gradesService } from '@/services';
const grades = await gradesService.getGrades();
```

### Использование хука
```typescript
import { useAuth } from '@/hooks';
const { user, isAuthenticated } = useAuth();
```

### Использование типов
```typescript
import { User, Grade } from '@/types';
import { ROUTES, API_ENDPOINTS } from '@/constants';
```

## Преимущества новой структуры

✅ **Модульность** - каждая папка отвечает за один аспект
✅ **Переиспользуемость** - компоненты и функции легко использовать
✅ **Масштабируемость** - легко добавлять новые функции
✅ **Типизация** - полная поддержка TypeScript
✅ **API интеграция** - четкая структура для работы с API
✅ **Глобальное состояние** - Context API для аутентификации
✅ **Простота импортов** - index.ts файлы упрощают импорты
✅ **Документация** - подробное описание структуры

## Следующие шаги

1. Развернуть содержимое страниц (Home, Schedule, Grades, Homework, Profile)
2. Подключить AuthProvider в main.tsx или App.tsx
3. Интегрировать сервисы с реальным API (обновить конфигурацию)
4. Добавить обработку ошибок и логирование
5. Написать unit-тесты для компонентов и сервисов

## Файл документации

Также создан файл `STRUCTURE.md` с подробным описанием организации и примерами использования.


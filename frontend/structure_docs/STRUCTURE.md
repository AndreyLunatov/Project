# Структура проекта Frontend

## Организация папок

```
src/
├── App.tsx                      # Главный компонент приложения с маршрутизацией
├── main.tsx                     # Точка входа приложения
├── style.css                    # Глобальные стили
│
├── types/                       # TypeScript типы и интерфейсы
│   ├── index.ts                # Главный экспорт всех типов
│   ├── api.ts                  # Типы для API запросов/ответов
│   └── entities.ts             # Типы основных сущностей приложения
│
├── constants/                   # Константы приложения
│   ├── index.ts                # Главный экспорт всех констант
│   ├── api.ts                  # API endpoints
│   └── routes.ts               # Маршруты приложения
│
├── utils/                       # Утилиты и вспомогательные функции
│   ├── index.ts                # Главный экспорт утилит
│   └── helpers.ts              # Вспомогательные функции
│
├── hooks/                       # Пользовательские React хуки
│   ├── index.ts                # Главный экспорт хуков
│   ├── useAuth.ts              # Хук для работы с аутентификацией
│   └── useFetch.ts             # Хук для загрузки данных
│
├── services/                    # Сервисы для API запросов
│   ├── index.ts                # Главный экспорт всех сервисов
│   ├── api.ts                  # API клиент
│   ├── grades.service.ts       # Сервис для работы с оценками
│   ├── schedule.service.ts     # Сервис для работы с расписанием
│   ├── homework.service.ts     # Сервис для работы с домашним заданием
│   └── profile.service.ts      # Сервис для работы с профилем
│
├── context/                     # React Context (глобальное состояние)
│   ├── index.ts                # Главный экспорт контекстов
│   └── AuthContext.tsx         # Контекст аутентификации
│
├── config/                      # Конфигурация приложения
│   └── index.ts                # Конфигурация API и приложения
│
└── components/                  # React компоненты
    ├── common/                  # Переиспользуемые компоненты
    │   ├── index.ts            # Экспорт общих компонентов
    │   ├── Button.tsx          # Компонент кнопки
    │   ├── Card.tsx            # Компонент карточки
    │   └── Loading.tsx         # Компонент загрузки
    │
    ├── aside/                   # Боковая панель навигации
    │   ├── index.ts            # Экспорт компонентов боковой панели
    │   ├── AsideNavigation.tsx  # Компонент навигации
    │   └── icons/               # SVG иконки
    │       ├── index.ts        # Экспорт всех иконок
    │       ├── SvgIcon.tsx     # Базовый компонент для иконок
    │       ├── HomeIcon.tsx    # Иконка главной страницы
    │       ├── ScheduleIcon.tsx # Иконка расписания
    │       ├── GradeIcon.tsx    # Иконка оценок
    │       ├── HomeworkIcon.tsx # Иконка домашнего задания
    │       ├── ProfileIcon.tsx  # Иконка профиля
    │       └── SettingsIcon.tsx # Иконка настроек
    │
    └── layout/                  # Компоненты разметки
        ├── index.ts            # Экспорт компонентов макета
        ├── Layout.tsx          # Главный компонент макета
        └── Aside.tsx           # Боковая панель
└── pages/                       # Страницы приложения (ленивая загрузка)
    ├── Home.tsx                # Главная страница
    ├── Schedule.tsx            # Страница расписания
    ├── Grades.tsx              # Страница оценок
    ├── Homework.tsx            # Страница домашнего задания
    └── Profile.tsx             # Страница профиля
```

## Принципы организации

### 1. **Index файлы для экспорта**

- Каждая папка имеет `index.ts`, который экспортирует все компоненты/функции
- Упрощает импорты: `import { Button } from '@/components/common'`
- Вместо: `import Button from '@/components/common/Button'`

### 2. **Разделение по типам**

- **components**: UI компоненты
- **services**: Логика работы с API
- **hooks**: Переиспользуемая логика React
- **types**: TypeScript типы
- **constants**: Константы приложения
- **utils**: Вспомогательные функции

### 3. **Структура компонентов**

- **common**: Базовые компоненты (Button, Card, Loading)
- **aside**: Компоненты боковой панели
- **layout**: Компоненты разметки

### 4. **API интеграция**

- **api.ts**: API клиент с методами GET, POST, PUT, DELETE
- **services**: Специализированные сервисы для каждого модуля
- **types/api.ts**: Типы для API запросов/ответов

### 5. **Состояние приложения**

- **context**: React Context для глобального состояния
- **hooks**: Пользовательские хуки для работы с состоянием и данными

## Примеры использования

### Импорт компонента

```typescript
import { Button, Card, Loading } from '@/components/common';
```

### Использование сервиса

```typescript
import { gradesService } from '@/services';

const grades = await gradesService.getGrades();
```

### Использование хука

```typescript
import { useAuth, useFetch } from '@/hooks';

const { user, isAuthenticated } = useAuth();
const { data, loading, error } = useFetch<Grade[]>('/api/grades');
```

### Использование константы

```typescript
import { ROUTES, API_ENDPOINTS } from '@/constants';

<Link to={ROUTES.GRADES}>Оценки</Link>
```

### Использование типа

```typescript
import { User, Grade, Homework } from '@/types';

const user: User = {
  id: '1',
  name: 'John',
  email: 'john@example.com',
};
```

## Рекомендации

1. **Всегда используйте index.ts** для экспорта из папок
2. **Группируйте связанные файлы** в одной папке
3. **Используйте именованные экспорты** вместо default export
4. **Создавайте типы** в папке types/
5. **Логику API** держите в services/
6. **Компоненты** должны быть "немыми" и получать данные через props


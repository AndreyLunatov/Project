# 🚀 БЫСТРОЕ РУКОВОДСТВО - Frontend структура

## Старт разработки

### 1. Установка и запуск

```bash
cd frontend
npm install
npm run dev
```

### 2. Собрать для production

```bash
npm run build
```

### 3. Проверить код

```bash
npm run lint
```

---

## 📚 Папки и их назначение

| Папка         | Назначение              | Примеры                  |
|---------------|-------------------------|--------------------------|
| `types/`      | TypeScript типы         | User, Grade, Homework    |
| `constants/`  | Константы приложения    | ROUTES, API_ENDPOINTS    |
| `utils/`      | Вспомогательные функции | formatDate, delay        |
| `hooks/`      | Custom React hooks      | useAuth, useFetch        |
| `services/`   | API интеграция          | gradesService, apiClient |
| `context/`    | Глобальное состояние    | AuthContext, useAuth     |
| `config/`     | Конфигурация            | API URL, настройки       |
| `components/` | React компоненты        | Button, Card, Layout     |
| `pages/`      | Страницы приложения     | Home, Grades, Profile    |

---

## 💡 Примеры использования

### Используй компонент

```typescript
import { Button, Card } from '@/components/common';

export function MyComponent() {
  return (
    <Card title="Заголовок">
      <Button variant="primary">Клик</Button>
    </Card>
  );
}
```

### Загрузи данные

```typescript
import { gradesService } from '@/services';
import { useAuth } from '@/hooks';

export function GradesPage() {
  const { user } = useAuth();
  const { data: grades, loading } = useAuth('/api/grades');
  
  if (loading) return <Loading />;
  
  return (
    <div>
      {grades?.map(grade => (
        <div key={grade.id}>{grade.subject}: {grade.score}</div>
      ))}
    </div>
  );
}
```

### Работай с типами

```typescript
import { User, Grade } from '@/types';
import { ROUTES } from '@/constants';

const user: User = {
  id: '1',
  name: 'John',
  email: 'john@example.com'
};

// Используй в маршруте
<Link to={ROUTES.GRADES}>Оценки</Link>
```

### Создай хук

```typescript
import { useState, useCallback } from 'react';
import { homeworkService } from '@/services';

export function useHomeworkData() {
  const [homework, setHomework] = useState([]);
  
  const loadHomework = useCallback(async () => {
    const data = await homeworkService.getHomework();
    setHomework(data);
  }, []);
  
  return { homework, loadHomework };
}
```

---

## 🔧 Интеграция API

### 1. Обновь конфигурацию

```typescript
// src/config/index.ts
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
```

### 2. Используй сервис

```typescript
import { gradesService } from '@/services';

// Получи данные
const grades = await gradesService.getGrades();

// Получи по ID
const grade = await gradesService.getGradeById('123');
```

### 3. Работай с ошибками

```typescript
try {
  const grades = await gradesService.getGrades();
} catch (error) {
  console.error('Ошибка:', error.message);
  // Покажи пользователю ошибку
}
```

---

## 📦 Создание новых компонентов

### 1. Создай файл

```typescript
// src/components/common/Badge.tsx
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: 'primary' | 'success' | 'danger';
}

export const Badge = ({ children, color = 'primary' }: BadgeProps) => {
  const colors = {
    primary: 'bg-blue-500',
    success: 'bg-green-500',
    danger: 'bg-red-500'
  };
  
  return (
    <span className={`px-2 py-1 rounded text-white ${colors[color]}`}>
      {children}
    </span>
  );
};
```

### 2. Добавь в index.ts

```typescript
// src/components/common/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Loading } from './Loading';
export { Badge } from './Badge';  // ← Добавь здесь
```

### 3. Используй компонент

```typescript
import { Badge } from '@/components/common';

<Badge color="success">Готово</Badge>
```

---

## 🎨 Создание новых сервисов

### 1. Создай файл сервиса

```typescript
// src/services/notification.service.ts
import { apiClient } from './api';
import { API_ENDPOINTS } from '@/constants';

interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export const notificationService = {
  getNotifications: () => 
    apiClient.get<Notification[]>('/notifications'),
    
  markAsRead: (id: string) => 
    apiClient.put(`/notifications/${id}`, { read: true }),
};
```

### 2. Добавь в index.ts

```typescript
// src/services/index.ts
export * from './notification.service';  // ← Добавь здесь
```

### 3. Используй сервис

```typescript
import { notificationService } from '@/services';

const notifications = await notificationService.getNotifications();
```

---

## 🔑 Переменные окружения

Создай файл `.env` в корне `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=COCO
VITE_DEBUG=false
```

Используй в коде:

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## 📝 Документация для чтения

1. **[STRUCTURE.md](STRUCTURE.md)** - Подробное описание каждой папки
2. **[CHANGES.md](CHANGES.md)** - Что было создано
3. **[STRUCTURE_CHECKLIST.md](STRUCTURE_CHECKLIST.md)** - Чек-лист организации
4. **[STRUCTURE_VISUAL.md](STRUCTURE_VISUAL.md)** - Визуальная структура

---

## 🚨 Решение проблем

### Проблема: Ошибка импорта типа

```
TS2305: Module has no exported member
```

**Решение:** Проверь, есть ли экспорт в `index.ts` папки

```typescript
// Неправильно:
import Button from '@/components/common/Button';

// Правильно:
import { Button } from '@/components/common';
```

### Проблема: Path alias не работает

**Решение:** Перезагрузи сервер dev:

```bash
npm run dev
```

### Проблема: Типы не работают

**Решение:** Проверь, что TypeScript файл имеет расширение `.ts` или `.tsx`

---

## 📞 Полезные команды

```bash
# Запуск dev сервера
npm run dev

# Сборка для production
npm run build

# Превью production версии
npm run preview

# Проверка кода
npm run lint

# Установка зависимостей
npm install

# Обновление зависимостей
npm update
```

---

## ✅ Чек-лист для новой разработки

- [ ] Создал новый компонент/сервис/хук?
- [ ] Добавил в соответствующий `index.ts`?
- [ ] Создал TypeScript типы?
- [ ] Написал примеры использования?
- [ ] Проверил на ошибки (`npm run lint`)?
- [ ] Обновил документацию?

---

## 🎯 Лучшие практики

✅ **Используй именованные экспорты**

```typescript
// Правильно
export const Button = () => {};

// Неправильно  
export default Button;
```

✅ **Группируй связанные файлы**

```
components/
  common/
    Button.tsx
    Card.tsx
    index.ts
```

✅ **Используй TypeScript типы везде**

```typescript
const handleClick: React.MouseEventHandler = (e) => {};
```

✅ **Разделяй логику и представление**

```typescript
// Логика в хуках
const { data } = useGrades();

// Представление в компонентах
<GradesList grades={data} />
```

✅ **Используй сервисы для API**

```typescript
// Вместо fetch в компонентах
import { gradesService } from '@/services';
const grades = await gradesService.getGrades();
```

---

**Хорошо, теперь ты готов к разработке! 🎉**


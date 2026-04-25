#!/bin/bash

# 🚀 Скрипт для запуска frontend разработки

echo "📦 Frontend проект - Быстрый старт"
echo "=================================="

# Переход в папку frontend
cd frontend

# Проверка наличия node_modules
if [ ! -d "node_modules" ]; then
    echo "📥 Установка зависимостей..."
    npm install
else
    echo "✅ Зависимости уже установлены"
fi

# Запуск dev сервера
echo "🚀 Запуск dev сервера..."
npm run dev

# Вывод справки
echo ""
echo "📝 Полезные команды:"
echo "  npm run dev      - Запуск dev сервера"
echo "  npm run build    - Сборка для production"
echo "  npm run preview  - Превью production сборки"
echo "  npm run lint     - Проверка кода ESLint"
echo ""
echo "📚 Документация:"
echo "  - src/STRUCTURE.md - Описание структуры"
echo "  - CHANGES.md - Список изменений"
echo "  - STRUCTURE_CHECKLIST.md - Чек-лист организации"
echo ""


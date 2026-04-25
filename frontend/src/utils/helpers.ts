/**
 * Вспомогательные функции и утилиты
 */

// Пример вспомогательной функции
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ru-RU').format(date);
};

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


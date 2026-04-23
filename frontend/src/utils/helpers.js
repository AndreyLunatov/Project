/**
 * Форматирование даты в читаемый формат
 * @param {Date|string} date - дата для форматирования
 * @param {string} locale - локаль (по умолчанию 'ru-RU')
 * @returns {string} отформатированная дата
 */
export const formatDate = (date, locale = 'ru-RU') => {
  try {
    return new Date(date).toLocaleDateString(locale);
  } catch (error) {
    console.error('Date formatting error:', error);
    return '';
  }
};

/**
 * Форматирование времени
 * @param {Date|string} date - дата для форматирования
 * @param {string} locale - локаль (по умолчанию 'ru-RU')
 * @returns {string} отформатированное время
 */
export const formatTime = (date, locale = 'ru-RU') => {
  try {
    return new Date(date).toLocaleTimeString(locale);
  } catch (error) {
    console.error('Time formatting error:', error);
    return '';
  }
};

/**
 * Проверка, является ли значение пустым
 * @param {any} value - проверяемое значение
 * @returns {boolean} true если пусто
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

/**
 * Попытка распарсить JSON безопасно
 * @param {string} json - JSON строка
 * @param {any} fallback - значение по умолчанию
 * @returns {any} распарсенный объект или fallback
 */
export const safeJsonParse = (json, fallback = null) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error('JSON parse error:', error);
    return fallback;
  }
};

/**
 * Задержка выполнения (для debounce/throttle)
 * @param {number} ms - миллисекунды
 * @returns {Promise} промис, resolve через ms
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


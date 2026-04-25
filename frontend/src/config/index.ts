// Конфигурация приложения

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const config = {
  api: {
    baseURL: API_BASE_URL,
    timeout: 30000,
  },
  app: {
    name: 'COCO',
    version: '1.0.0',
  },
};

export default config;


// import { apiClient } from './api';
// import { API_ENDPOINTS } from '../constants';
// import { Homework } from '../types';
//
// export const homeworkService = {
//   getHomework: () => apiClient.get<Homework[]>(API_ENDPOINTS.HOMEWORK),
//   getHomeworkById: (id: string) => apiClient.get<Homework>(`${API_ENDPOINTS.HOMEWORK}/${id}`),
//   createHomework: (data: Omit<Homework, 'id'>) =>
//     apiClient.post<Homework>(API_ENDPOINTS.HOMEWORK, data),
//   updateHomework: (id: string, data: Partial<Homework>) =>
//     apiClient.put<Homework>(`${API_ENDPOINTS.HOMEWORK}/${id}`, data),
//   deleteHomework: (id: string) => apiClient.delete(`${API_ENDPOINTS.HOMEWORK}/${id}`),
// };
//

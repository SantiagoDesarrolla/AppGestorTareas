import { api } from './api';

export const fetchTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (title: string) => {
  const response = await api.post('/tasks', { title });
  return response.data;
};

export const updateTask = async (id: string, updates: { completed?: boolean }) => {
  const response = await api.patch(`/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
import axiosClient from './axiosClient';

const todoApi = {
  addTodo: (data) => {
    const url = 'todo/create';
    return axiosClient.post(url, data);
  },
  getAllTodo: () => {
    const url = 'todo/get/all';
    return axiosClient.get(url);
  },
  deleteTodo: (data) => {
    const url = 'todo/delete';
    return axiosClient.delete(url, data);
  },
  editTodo: (data) => {
    const url = 'todo/update';
    return axiosClient.put(url, data);
  },
  getTodoById: (params) => {
    const url = 'todo/get';
    return axiosClient.get(url, { params });
  },
};

export default todoApi;

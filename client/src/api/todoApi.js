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
  deleteTodo: (params) => {
    const url = 'todo/delete';
    return axiosClient.delete(url, { params });
  },
  editTodo: (data) => {
    const url = 'todo/update';
    return axiosClient.put(url, data);
  },
  getTodoById: (params) => {
    const url = 'todo/get/id';
    return axiosClient.get(url, { params });
  },
};

export default todoApi;

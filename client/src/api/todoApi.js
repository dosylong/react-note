import axiosClient from './axiosClient';

const todoApi = {
  addTodo: (data) => {
    const url = 'todo/create';
    return axiosClient.post(url, data);
  },
};

export default todoApi;

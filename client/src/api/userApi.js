import axiosClient from './axiosClient';

const userApi = {
  addUser: (data) => {
    const url = 'user/create';
    return axiosClient.post(url, data);
  },
  getUser: (params) => {
    const url = 'user/get';
    return axiosClient.get(url, { params });
  },
};

export default userApi;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/',
});

export const CuisinesAPI = {
  getAll: function () {
    return axiosInstance.request({
      method: 'GET',
      url: '/1/cuisines',
    });
  },
};



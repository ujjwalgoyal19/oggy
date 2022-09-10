import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/',
});

export const RestaurantAPI = {
  getAll: function () {
    return axiosInstance.request({
      method: 'GET',
      url: '/1/cuisines',
    });
  },
};

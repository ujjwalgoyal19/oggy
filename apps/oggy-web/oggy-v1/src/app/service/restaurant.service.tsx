import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/restaurant',
});

export const RestaurantAPI = {
  getRestaurantOverview: async function (resId: number) {
    const response = await axiosInstance.request({
      method: 'GET',
      url: `/${resId}`,
    });
    const restaurant = response.data[0];
    return restaurant;
  },
  getRestaurantOffers: function (resId: number) {
    return axiosInstance.request({
      method: 'GET',
      url: `/${resId}/offer`,
    });
  },
  getRestaurantMenu: function (resId: number) {
    return axiosInstance.request({
      method: 'GET',
      url: `/${resId}/menu`,
    });
  },
};

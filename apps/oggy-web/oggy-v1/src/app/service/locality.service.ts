import config from 'app/config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/',
});

export const LocalityAPI = {
  getAll: async function (cityId: number) {
    const Localities = await axiosInstance.request({
      method: 'GET',
      url: `/${cityId}/localities`,
    });
    return Localities.data;
  },
};

import config from 'app/config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/',
});

export const FiltersAPI = {
  getAll: async function () {
    const Cuisines = await axiosInstance.request({
      method: 'GET',
      url: '/1/cuisines',
    });
    const filters = [];
    filters.push(config.content.SortOptions);
    filters.push(
      Cuisines.data.cuisines.map((cuisine: any) => {
        return {
          command: cuisine.cuisine_id.toString(),
          text: cuisine.cuisine_name,
        };
      })
    );
    filters.push(config.content.MoreFilterOptions);
    return filters;
  },
};

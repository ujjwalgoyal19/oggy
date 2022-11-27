import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.oggy.co.in/wapi/',
});

export interface LocationEntity {
  type: string;
  id: string | number | null;
  name: string | null;
}

export const SearchAPI = {
  getRestaurants: function (
    page: number,
    location: LocationEntity,
    filters: any[] | null,
    query: string | null
  ) {
    let moreFiltersQuery = '';
    let sortQuery = '';
    let cuisineQuery = '';
    filters?.forEach((filter) => {
      if (filter.type === 'Sort') {
        sortQuery = '&' + filter.command;
      } else if (filter.type === 'Cuisines') {
        if (cuisineQuery === '') {
          cuisineQuery = '&cuisines=';
          cuisineQuery += filter.command;
        } else {
          cuisineQuery += ',' + filter.command;
        }
      } else {
        moreFiltersQuery += '&' + filter.command;
      }
    });
    return axiosInstance.request({
      method: 'GET',
      url: `/restaurants/list?loc=${location.id}&type=${location.type}&q=${query}&page=${page}${sortQuery}${cuisineQuery}${moreFiltersQuery}`,
    });
  },
};

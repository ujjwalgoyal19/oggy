import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/mapi/',
});

export interface CityEntity {
  id: number;
  name: string;
}
export const SearchAPI = {
  getByCity: function (page: number, city: CityEntity, filters: any[] | null) {
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
      url: `/${city.id}/restaurants?page=${page}${sortQuery}${cuisineQuery}${moreFiltersQuery}`,
    });
  },
  getByLocality: function (
    page: number,
    locality: string,
    filters: any[] | null
  ) {
    let moreFiltersQuery = '';
    let sortQuery = '';
    let cuisineQuery = '';
    filters?.forEach((filter) => {
      if (filter.type === 'Sort') {
        sortQuery = '&SORT_BY=' + filter.command;
      } else if (filter.type === 'Cuisines') {
        if (cuisineQuery === '') cuisineQuery = '&cuisines=';
        cuisineQuery += filter.command;
      } else {
        moreFiltersQuery += '&' + filter.command;
      }
    });
    return axiosInstance.request({
      method: 'GET',
      url: `/restaurants/list?loc=${locality}&page=${page}${sortQuery}${cuisineQuery}${moreFiltersQuery}`,
    });
  },
};

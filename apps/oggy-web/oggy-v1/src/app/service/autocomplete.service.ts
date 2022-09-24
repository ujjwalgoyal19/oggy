import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oggyapi.herokuapp.com/wapi/',
});

export const AutocompleteAPI = {
  getLocations: async function (query: string) {
    const Locations = await axiosInstance.request({
      method: 'GET',
      url: `/location/search?loc=${query}`,
    });
    return Locations.data;
  },
  getRestaurants: async function (
    type: string,
    location: number | string,
    query: string
  ) {
    const Locations = await axiosInstance.request({
      method: 'GET',
      url: `/restaurants/search?loc=${location}&type=${type}&q=${query}`,
    });
    return Locations.data;
  },
};

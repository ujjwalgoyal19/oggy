import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SearchAPI } from 'app/service/search.service';

export const SEARCH_FEATURE_KEY = 'search';

/*
 * Update these interfaces according to your requirements.
 */
export interface SearchEntity {
  name: string | undefined;
  cft: string | undefined;
  cuisines: string | undefined;
  image: string | undefined;
  rating: any;
  id: number;
}

export interface LocationEntity {
  type: string;
  id: number | string;
  name: string;
}

export interface FilterEntity {
  type: string;
  command: string;
}

export interface RatingEntity {
  vendor: string;
  rating: number | null;
  reviewCount: number | null;
}

export interface RestaurantEntity {
  id: number;
  name: string;
  cuisines: string;
  cft: string;
  image: string;
  rating: {
    delivery: Array<RatingEntity>;
    dining: Array<RatingEntity>;
  };
}

export interface SearchState extends EntityState<SearchEntity> {
  type: 'city' | 'locality';
  restart: boolean;
  searchQuery: string;
  city: string | null;
  locality: string | null;
  location: LocationEntity;
  page: number;
  totalPage: number | null;
  filters: FilterEntity[] | null;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const searchAdapter = createEntityAdapter<SearchEntity>();

export const fetchSearch = createAsyncThunk(
  'search/fetchStatus',
  async (searchState: SearchState, thunkAPI) => {
    const Data = await SearchAPI.getRestaurants(
      searchState.page + 1,
      searchState.location,
      searchState.filters,
      searchState.searchQuery
    );

    const RestaurantList = new Array<any>();

    Data.data.data.forEach((restaurant: any) => {
      const cuisines = restaurant.cuisines
        ? restaurant.cuisines
            .map((cuisine: any) => cuisine.cuisine_name)
            .join(', ')
        : null;
      const delivery = restaurant.delivery_rating;
      const dining = restaurant.dining_rating;
      RestaurantList.push({
        id: restaurant.id,
        name: restaurant.name,
        cuisines: cuisines,
        cft: restaurant.cft ? restaurant.cft : '',
        image: restaurant.images.indexImage,
        rating: {
          delivery: [
            {
              type: 'zomato',
              rating: delivery.z_rating.rating,
              reviewCount: delivery.z_rating.reviewCount,
            },
            {
              type: 'swiggy',
              rating: delivery.s_rating.rating,
              reviewCount: delivery.s_rating.reviewCount,
            },
          ],
          dining: [
            {
              type: 'zomato',
              rating: dining.z_rating.rating,
              reviewCount: dining.z_rating.reviewCount,
            },
            {
              type: 'dineout',
              rating: dining.d_rating.rating,
              reviewCount: dining.d_rating.reviewCount,
            },
            {
              type: 'eazydiner',
              rating: dining.e_rating.rating,
              reviewCount: dining.e_rating.reviewCount,
            },
          ],
        },
      });
    });
    return {
      list: RestaurantList,
      currentPage: Data.data.currentPage,
      pages: Data.data.total,
    };
  }
);

export const initialSearchState: SearchState = searchAdapter.getInitialState({
  type: 'city',
  restart: false,
  location: {
    type: 'City',
    id: 1,
    name: 'Jaipur',
  },
  searchQuery: '',
  city: 'Jaipur',
  locality: null,
  page: 0,
  totalPage: null,
  filters: null,
  loadingStatus: 'not loaded',
  error: null,
});

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState,
  reducers: {
    addFilters: (state, action: PayloadAction<FilterEntity[]>) => {
      state.page = 0;
      state.restart = true;
      state.filters = action.payload;
    },
    changeQuery: (state, action: PayloadAction<string>) => {
      state.page = 0;
      state.restart = true;
      state.searchQuery = action.payload;
    },
    changeLocation: (state, action: PayloadAction<LocationEntity>) => {
      state.page = 0;
      state.restart = true;
      state.location = action.payload;
      if (state.location.type === 'city') {
        state.city = action.payload.name;
        state.locality = null;
      } else {
        state.locality = action.payload.name;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state: SearchState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchSearch.fulfilled,
        (state: SearchState, action: PayloadAction<any>) => {
          if (state.restart) {
            searchAdapter.setAll(state, action.payload.list);
            state.restart = false;
          } else {
            searchAdapter.addMany(state, action.payload.list);
          }
          state.page = action.payload.currentPage;
          state.totalPage = action.payload.pages;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchSearch.rejected, (state: SearchState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const searchReducer = searchSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(searchActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const searchActions = searchSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllSearch);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = searchAdapter.getSelectors();

export const getSearchState = (rootState: any): SearchState =>
  rootState[SEARCH_FEATURE_KEY];

export const selectAllSearch = createSelector(getSearchState, selectAll);

export const selectSearchEntities = createSelector(
  getSearchState,
  selectEntities
);
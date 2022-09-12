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
  id: number;
}

export interface CityEntity {
  id: number;
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
  city: CityEntity;
  locality: string;
  page: number;
  totalPage: number | null;
  filters: FilterEntity[] | null;
  list: Array<any>;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const searchAdapter = createEntityAdapter<SearchEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
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
 *   dispatch(fetchSearch())
 * }, [dispatch]);
 * ```
 */
export const fetchSearch = createAsyncThunk(
  'search/fetchStatus',
  async (searchState: SearchState, thunkAPI) => {
    let Data: any;
    if (searchState.type === 'city') {
      Data = await SearchAPI.getByCity(
        searchState.page,
        searchState.city!,
        searchState.filters
      );
    } else if (searchState.type === 'locality') {
      Data = await SearchAPI.getByLocality(
        searchState.page,
        searchState.locality!,
        searchState.filters
      );
    }
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
  city: {
    id: 1,
    name: 'Jaipur',
  },
  locality: 'malviya-nagar',
  page: 1,
  totalPage: null,
  filters: null,
  loadingStatus: 'not loaded',
  list: new Array<any>(),
  error: null,
});

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState,
  reducers: {
    addFilters: (state, action: PayloadAction<FilterEntity[]>) => {
      state.filters = action.payload;
      state.page = 1;
      state.restart = true;
    },
    changeCity: (state, action: PayloadAction<CityEntity>) => {
      state.restart = true;
      state.type = 'city';
      state.city = action.payload;
      state.page = 1;
    },
    changeLocality: (state, action: PayloadAction<string>) => {
      state.restart = true;
      state.type = 'locality';
      state.locality = action.payload;
      state.page = 1;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      state.page -= 1;
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
            state.list = action.payload.list;
          } else {
            state.list.push(...action.payload.list);
          }
          state.restart = false;
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

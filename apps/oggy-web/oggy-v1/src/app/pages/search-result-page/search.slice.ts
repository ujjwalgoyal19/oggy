import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const SEARCH_FEATURE_KEY = 'search';

/*
 * Update these interfaces according to your requirements.
 */
export interface SearchEntity {
  id: number;
}

export interface FilterEntity {
  command: string;
  text: string;
}

export interface CityEntity {
  id: number;
  name: string;
}

export interface SearchState extends EntityState<SearchEntity> {
  type: 'city' | 'locality';
  city: CityEntity | null;
  locality: string | null;
  filters: FilterEntity[];
  page: number;
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
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getSearchs()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialSearchState: SearchState = searchAdapter.getInitialState({
  type: 'city',
  city: null,
  locality: null,
  filters: [],
  page: 1,
  loadingStatus: 'not loaded',
  error: null,
});

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterEntity>) => {
      state.filters.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<FilterEntity>) => {
      state.filters.filter((value, index) => {
        return value.command !== action.payload.command;
      });
    },
    searchCity: (state, action: PayloadAction<CityEntity>) => {
      state.type = 'city';
      state.city = action.payload;
    },
    searchLocality: (state, action: PayloadAction<string>) => {
      state.type = 'locality';
      state.locality = action.payload;
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
        (state: SearchState, action: PayloadAction<SearchEntity[]>) => {
          searchAdapter.setAll(state, action.payload);
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

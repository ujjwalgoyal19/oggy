import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FiltersAPI } from 'app/service/filters.service';

export const FILTERS_FEATURE_KEY = 'filters';

/*
 * Update these interfaces according to your requirements.
 */
export interface FiltersEntity {
  id: number;
}

export interface FilterObject {
  command: string;
  text: string;
}

export interface FEntity {
  Order: string[];
  // Category: Map<string, FilterObject[]>;
  Category: Array<FilterObject[]>;
}

export interface FiltersState extends EntityState<FiltersEntity> {
  all: FEntity;
  active: Array<boolean[]>;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const filtersAdapter = createEntityAdapter<FiltersEntity>();

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
 *   dispatch(fetchFilters())
 * }, [dispatch]);
 * ```
 */
export const fetchFilters = createAsyncThunk(
  'filters/fetchStatus',
  async (_, thunkAPI) => {
    const Filters = await FiltersAPI.getAll();
    return Filters;
  }
);

export const initialFiltersState: FiltersState = filtersAdapter.getInitialState(
  {
    all: {
      Order: ['Sort', 'Cuisines', 'More filters'],
      // Category: new Map<string, FilterObject[]>(),
      Category: new Array<FilterObject[]>(),
    },
    // active: new Map<string, boolean[]>(),
    active: new Array<boolean[]>(),
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const filtersSlice = createSlice({
  name: FILTERS_FEATURE_KEY,
  initialState: initialFiltersState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Array<boolean[]>>) => {
      state.active = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state: FiltersState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchFilters.fulfilled,
        (state: FiltersState, action: PayloadAction<Array<FilterObject[]>>) => {
          const active = new Array<boolean[]>();
          const categories = new Array<FilterObject[]>();
          state.all.Order.forEach((category, index) => {
            active.push(new Array(action.payload[index].length).fill(false));
            categories.push(action.payload[index]);
          });
          state.active = active;
          state.all.Category = categories;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchFilters.rejected, (state: FiltersState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const filtersReducer = filtersSlice.reducer;

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
 *   dispatch(filtersActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const filtersActions = filtersSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllFilters);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = filtersAdapter.getSelectors();

export const getFiltersState = (rootState: any): FiltersState =>
  rootState[FILTERS_FEATURE_KEY];

export const selectAllFilters = createSelector(getFiltersState, selectAll);

export const selectFiltersEntities = createSelector(
  getFiltersState,
  selectEntities
);

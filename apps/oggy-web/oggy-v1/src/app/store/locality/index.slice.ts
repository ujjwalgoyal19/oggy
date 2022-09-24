import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { LocalityAPI } from 'app/service/locality.service';

export const LOCALITY_FEATURE_KEY = 'locality';

/*
 * Update these interfaces according to your requirements.
 */
export interface LocalityEntity {
  id: number;
}

export interface LocalityState extends EntityState<LocalityEntity> {
  total: number;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const localityAdapter = createEntityAdapter<LocalityEntity>({
  selectId: (e: any) => {
    return e.locality_id;
  },
});

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
 *   dispatch(fetchLocality())
 * }, [dispatch]);
 * ```
 */
export const fetchLocality = createAsyncThunk(
  'locality/fetchStatus',
  async (cityId: number, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getLocalitys()`;
     * Right now we just return an empty array.
     */
    return LocalityAPI.getAll(cityId);
  }
);

export const initialLocalityState: LocalityState =
  localityAdapter.getInitialState({
    total: 0,
    loadingStatus: 'not loaded',
    error: null,
  });

export const localitySlice = createSlice({
  name: LOCALITY_FEATURE_KEY,
  initialState: initialLocalityState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocality.pending, (state: LocalityState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchLocality.fulfilled,
        (state: LocalityState, action: PayloadAction<any>) => {
          console.log(action.payload);
          localityAdapter.setAll(state, action.payload.localities);
          state.total = action.payload.totalLocalities;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchLocality.rejected, (state: LocalityState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const localityReducer = localitySlice.reducer;

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
 *   dispatch(localityActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const localityActions = localitySlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllLocality);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = localityAdapter.getSelectors();

export const getLocalityState = (rootState: any): LocalityState =>
  rootState[LOCALITY_FEATURE_KEY];

export const selectAllLocality = createSelector(getLocalityState, selectAll);

export const selectLocalityEntities = createSelector(
  getLocalityState,
  selectEntities
);

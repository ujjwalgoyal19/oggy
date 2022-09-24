import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RestaurantAPI } from 'app/service/restaurant.service';

export const RESTAURANT_FEATURE_KEY = 'restaurant';

/*
 * Update these interfaces according to your requirements.
 */
export interface RestaurantEntity {
  id: number;
}

export interface RestaurantState extends EntityState<RestaurantEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const restaurantAdapter = createEntityAdapter<RestaurantEntity>({
  selectId: (e) => {
    return e.id;
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
 *   dispatch(fetchRestaurant())
 * }, [dispatch]);
 * ```
 */
export const fetchRestaurant = createAsyncThunk(
  'restaurant/fetchStatus',
  async (id: number, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getRestaurants()`;
     * Right now we just return an empty array.
     */
    const restaurant = await RestaurantAPI.getRestaurantOverview(id);
    return [restaurant];
  }
);

export const initialRestaurantState: RestaurantState =
  restaurantAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const restaurantSlice = createSlice({
  name: RESTAURANT_FEATURE_KEY,
  initialState: initialRestaurantState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurant.pending, (state: RestaurantState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchRestaurant.fulfilled,
        (state: RestaurantState, action: PayloadAction<RestaurantEntity[]>) => {
          restaurantAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchRestaurant.rejected, (state: RestaurantState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const restaurantReducer = restaurantSlice.reducer;

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
 *   dispatch(restaurantActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const restaurantActions = restaurantSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRestaurant);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = restaurantAdapter.getSelectors();

export const getRestaurantState = (rootState: any): RestaurantState =>
  rootState[RESTAURANT_FEATURE_KEY];

export const selectAllRestaurant = createSelector(
  getRestaurantState,
  selectAll
);

export const selectRestaurantEntities = createSelector(
  getRestaurantState,
  selectEntities
);

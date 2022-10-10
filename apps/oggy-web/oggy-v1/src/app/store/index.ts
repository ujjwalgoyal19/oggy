import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './search/index.slice';
import { filtersReducer } from './filter/index.slice';
import { restaurantReducer } from './restaurant/index.slice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filters: filtersReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

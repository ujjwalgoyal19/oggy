import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from 'app/pages/search-result-page/search.slice';
import { filtersReducer } from 'app/pages/search-result-page/filters.slice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

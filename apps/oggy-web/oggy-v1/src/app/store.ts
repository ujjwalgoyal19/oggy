import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from 'app/pages/search-result-page/search.slice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

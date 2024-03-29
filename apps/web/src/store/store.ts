import { configureStore } from '@reduxjs/toolkit';

import configReducer from './slices/configSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

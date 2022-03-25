import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface ConfigState {
  isDarkMode: boolean;
  isProduction: boolean;
}

const initialState: ConfigState = {
  isDarkMode: false,
  isProduction: process.env.GATSBY_APP_ENV === 'main',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = configSlice.actions;

export const selectIsDarkMode = (state: RootState) => {
  return state.config.isDarkMode;
};

export const selectIsProduction = (state: RootState) => {
  return state.config.isProduction;
};

export default configSlice.reducer;

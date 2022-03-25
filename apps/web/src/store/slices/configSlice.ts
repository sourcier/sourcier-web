import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface ConfigState {
  isDarkMode: boolean;
}

const initialState: ConfigState = {
  isDarkMode: false,
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

export default configSlice.reducer;

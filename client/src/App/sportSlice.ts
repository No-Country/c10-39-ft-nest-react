import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface sportNameState {
  sportNames: string[] | null;
}

const initialState: sportNameState = {
  sportNames: null,
};

const sportNamesSlice = createSlice({
  name: 'sportNames',
  initialState,
  reducers: {
    setSportNames: (state, { payload }: PayloadAction<string[] | null>) => {
      state.sportNames = payload;
    },
  },
});

export const { setSportNames } = sportNamesSlice.actions;

export default sportNamesSlice.reducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { searchType } from '../types/Search.type';

export interface searchDataType {
  search: searchType | null;
}

const initialState: searchDataType = {
  search: {
    rHour: 12,
    date: '4/23/2023',
    sport: 'basketball',
    lat: 180,
    lng: 180,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<searchType | null>) => {
      state.search = payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;

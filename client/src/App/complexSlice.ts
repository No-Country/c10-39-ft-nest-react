import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import ComplexType from '../types/Complex.type';

export interface complexDataType {
  complex: ComplexType | null;
}

const initialState: complexDataType = {
  complex: null,
};

const complexSlice = createSlice({
  name: 'complex',
  initialState,
  reducers: {
    setComplex: (state, { payload }: PayloadAction<ComplexType | null>) => {
      state.complex = payload;
    },
  },
});

export const { setComplex } = complexSlice.actions;

export default complexSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '@/store/store';

type ReturnData = { quote: string };

export type ExampleState = {
  data: ReturnData;
  pending: boolean;
  error: boolean;
};

const initialState: ExampleState = {
  data: { quote: '' },
  pending: false,
  error: false,
};

export const getExampleData = createAsyncThunk('exampleData', async () => {
  const response = await axios.get('https://api.kanye.rest/');

  return response.data;
});

export const example = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getExampleData.pending, state => {
        state.pending = true;
      })
      .addCase(getExampleData.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload as ReturnData;
      })
      .addCase(getExampleData.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectExample = (state: RootState) => state.exampleData;

export default example.reducer;

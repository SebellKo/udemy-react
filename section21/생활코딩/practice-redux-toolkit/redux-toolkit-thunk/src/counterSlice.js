import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  const resp = await fetch(
    'https//api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
  );
  const data = await resp.json();
  return data.value;
});

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
    status: 'Welcome',
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.status = 'complete';
      state.value = action.payload;
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

export default counterSlice;
export const { up, set } = counterSlice.actions;

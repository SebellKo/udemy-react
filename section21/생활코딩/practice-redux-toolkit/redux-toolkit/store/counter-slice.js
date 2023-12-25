import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;

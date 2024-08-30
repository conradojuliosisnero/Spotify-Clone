import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload;
    },
    decrement: (state, action) => {
      state.counter = action.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: {},
};

export const searchError = createSlice({
  name: "searchError",
  initialState,
  reducers: {
    setError: (state, action) => {
      if (action.payload && typeof action.payload === "object") {
        state.error = action.payload;
      } else {
        state.error = { message: action.payload };
      }
    },
  },
});

export const { setError } = searchError.actions;
export default searchError.reducer;
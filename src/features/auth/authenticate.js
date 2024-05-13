import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  auth: false,
};

export const authUser = createSlice({
  name: "autUserState",
  initialState,
  reducers: {
    validateAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { validateAuth } = authUser.actions;
export default authUser.reducer;

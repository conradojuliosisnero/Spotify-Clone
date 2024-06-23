import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {},
};

export const searchData = createSlice({
  name: "searcher",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { setSearch } = searchData.actions;
export default searchData.reducer;

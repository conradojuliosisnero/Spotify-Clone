import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

export const searchData = createSlice({
  name: "searcher",
  initialState,
  reducers: {
    setResults: (state, action) => {
      console.log(action)
      state.results = action.payload;
    },
  },
});
export const { setResults } = searchData.actions;
export default searchData.reducer;

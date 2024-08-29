import { configureStore } from "@reduxjs/toolkit";
import searchData from "./slices/searchSlice";
import searchError from "./slices/searchErrorSlice";

export const store = configureStore({
  reducer: {
    search: searchData,
    searchError: searchError,
  },
});

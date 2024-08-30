import { configureStore } from "@reduxjs/toolkit";
import searchData from "./slices/searchSlice";
import searchError from "./slices/searchErrorSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    search: searchData,
    searchError: searchError,
    counter: counterSlice,
  },
});

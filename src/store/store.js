import { configureStore } from "@reduxjs/toolkit";
import searchData from "./slices/searchSlice";
import searchError from "./slices/searchErrorSlice";
import counterSlice from "./slices/counterSlice";
import recentSearch from './slices/recentSearchSlice'

export const store = configureStore({
  reducer: {
    search: searchData,
    searchError: searchError,
    counter: counterSlice,
    searchBrowser: recentSearch
  },
});

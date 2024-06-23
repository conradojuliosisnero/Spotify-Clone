import { configureStore } from "@reduxjs/toolkit";
import searcher from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searcher,
  },
});

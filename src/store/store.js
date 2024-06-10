import { configureStore } from "@reduxjs/toolkit";
import searcher from "@/features/search/songSlice";

export const store = configureStore({
  reducer: {
    searcher,
  },
});

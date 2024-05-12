import { configureStore } from "@reduxjs/toolkit";
import searcher from "@/features/songSlice"; 

export const store = configureStore({
  reducer: {
    searcher,
  },
});
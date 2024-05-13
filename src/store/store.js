import { configureStore } from "@reduxjs/toolkit";
import searcher from "@/features/search/songSlice";
import autUserState from "@/features/auth/authenticate";

export const store = configureStore({
  reducer: {
    searcher,
    autUserState,
  },
});

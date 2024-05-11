import { configureStore } from "@reduxjs/toolkit";
import songTracks from "@/features/songSlice";

export const store = configureStore({
  reducer: {
    songTracks,
  },
});
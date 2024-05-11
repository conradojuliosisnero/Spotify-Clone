import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: {}
};


export const songSlice = createSlice({
  name: "songTracks",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { setSongs } = songSlice.actions;
export default songSlice.reducer;

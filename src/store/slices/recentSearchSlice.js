import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentSearch: [],
};

export const recentSearch = createSlice({
  name: "recentSearch",
  initialState,
  reducers: {
    setRecentSearch: (state, action) => {
      // Verifica si la búsqueda ya está en el array y si no, la agrega
      if (!state.recentSearch.includes(action.payload)) {
        // Limita el array a las 10 búsquedas más recientes
        state.recentSearch = [action.payload, ...state.recentSearch.slice(0, 9)];
      }
    },
  },
});

export const { setRecentSearch } = recentSearch.actions;
export default recentSearch.reducer;
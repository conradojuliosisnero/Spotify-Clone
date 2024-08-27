import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  results: [], 
  status: "idle",
  error: null,
};

// Acción asíncrona para obtener música
export const getMusic = createAsyncThunk("searcher/getMusic", async (q) => {
  const response = await fetch(`/api/search?q=${q}`);
  const data = await response.json();
  return data;
});

export const searchData = createSlice({
  name: "searcher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMusic.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload; // Aquí se actualiza el estado con los resultados
      })
      .addCase(getMusic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchData.reducer;

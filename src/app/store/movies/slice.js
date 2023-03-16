import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies: () => {},
};

const movies = createSlice({
  name: "movies",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.data = action.payload;
    },
    setMoviesError: (state, action) => {
      state.error = action.payload;
    },

    ...middlewareActions,
  },
});

export const { getMovies, setMovies, setMoviesError } = movies.actions;
export default movies.reducer;

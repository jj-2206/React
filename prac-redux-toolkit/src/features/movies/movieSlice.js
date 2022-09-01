import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  // extraReducers: {},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;

/*
setMoreArticles: (state, action) => {
  const clippedArticles = state.clippedArticles;
  let data = action.payload.data;
  data = data.map((each) =>
    !!clippedArticles.find((clip) => clip.id === each.id)
      ? { ...each, clipped: true }
      : each,
  );
  state.everyArticles.concat(data);
},
*/

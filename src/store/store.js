import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLastRated = {
  ratedList: [],
};

const lastRatedSlice = createSlice({
  name: "lastRated",
  initialState: initialLastRated,
  reducers: {
    addRatedMovie(state, action) {
      const { title, value } = action.payload;
      const existingMovieIndex = state.ratedList.findIndex(
        (movie) => movie.title === title
      );
      if (existingMovieIndex === -1) {
        state.ratedList.push(action.payload);
      } else {
        state.ratedList[existingMovieIndex].value = value;
      }
    },
  },
});

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: { movieList: [], query: "" },
  reducers: {
    addNewList(state, action) {
      const { movieList, query } = action.payload;
      state.movieList = movieList;
      state.query = query;
    },
  },
});

const store = configureStore({
  reducer: {
    lastRated: lastRatedSlice.reducer,
    searchResults: searchResultsSlice.reducer,
  },
});

export const lastRatedReducer = lastRatedSlice.reducer;
export const searchResultsReducer = searchResultsSlice.reducer;

export const lastRatedActions = lastRatedSlice.actions;
export const searchResultsActions = searchResultsSlice.actions;

export default store;

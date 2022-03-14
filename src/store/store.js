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
      if (existingMovieIndex===-1) {
        state.ratedList.push(action.payload);
      } else {
        state.ratedList[existingMovieIndex].value=value
      }
    },
  },
});

const store = configureStore({
  reducer: {
    lastRated: lastRatedSlice.reducer,
  },
});

export const lastRatedReducer = lastRatedSlice.reducer;

export const lastRatedActions = lastRatedSlice.actions;

export default store;

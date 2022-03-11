import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLastRated = {
  title: "",
  rating: 0,
};

const lastRatedSlice = createSlice({
  name: "lastRated",
  initialState: initialLastRated,
  reducers: {
    setLastRated(state, action) {
      state.title = action.payload.title;
      state.rating =action.payload.value
    },
  },
});

const store = configureStore({
  reducer: {
    lastRated: lastRatedSlice.reducer,
  },
});

export const lastRatedActions=lastRatedSlice.actions

export default store;
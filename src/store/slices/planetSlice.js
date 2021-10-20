import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planets: [],
  isLoading: false,
  notification: null,
};

export const planetSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    fetchPlanets(state, action) {
      state.planets = action.payload;
    },
    showNotificaion(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { fetchPlanets, showNotificaion, toggleLoading } =
  planetSlice.actions;

export default planetSlice.reducer;

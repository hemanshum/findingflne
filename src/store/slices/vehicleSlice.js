import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
  isLoading: false,
  notification: null,
};

export const vehicleSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    fetchVehicles(state, action) {
      state.vehicles = action.payload;
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

export const { fetchVehicles, showNotificaion, toggleLoading } =
  vehicleSlice.actions;

export default vehicleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
};

export const vehicleSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    fetchVehicles(state, action) {
      state.vehicles = action.payload;
    },
  },
});

export const { fetchVehicles } = vehicleSlice.actions;

export default vehicleSlice.reducer;

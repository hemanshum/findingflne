import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planet_names: [],
  vehicle_names: [],
  result: {},
  isLoading: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    selectPlanet(state, action) {
      state.planet_names[Number(action.payload.destinationNum) - 1] =
        action.payload.name;
    },
    selectVehicle(state, action) {
      state.vehicle_names[Number(action.payload.destinationNum) - 1] =
        action.payload.name;
    },
    findFalcone(state, action) {
      state.result = action.payload;
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
    resetResultData(state) {
      state.vehicle_names = initialState.vehicle_names;
      state.planet_names = initialState.planet_names;
      state.result = initialState.result;
      state.isLoading = initialState.isLoading;
    },
  },
});

export const {
  selectPlanet,
  selectVehicle,
  fetchToken,
  findFalcone,
  toggleLoading,
  showNotificaion,
  resetResultData,
} = resultSlice.actions;

export default resultSlice.reducer;

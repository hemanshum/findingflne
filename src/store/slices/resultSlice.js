import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  planet_names: [],
  vehicle_names: [],
  result: {},
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    selectPlanet(state, action) {
      state.planet_names[Number(action.payload.destinationNum) - 1] =
        action.payload.name;
      console.log("planets", state.planet_names);
    },
    selectVehicle(state, action) {
      state.vehicle_names = [...state.vehicle_names, action.payload];
    },
    fetchToken(state, action) {
      state.token = action.payload;
    },
    findFalcone(state, action) {
      state.result = action.payload;
    },
  },
});

export const { selectPlanet, selectVehicle, fetchToken, findFalcone } =
  resultSlice.actions;

export default resultSlice.reducer;

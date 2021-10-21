import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [
    {
      destination: "1",
      planet: {
        name: "",
      },
    },
    {
      destination: "2",
      planet: {
        name: "",
      },
    },
    {
      destination: "3",
      planet: {
        name: "",
      },
    },
    {
      destination: "4",
      planet: {
        name: "",
      },
    },
  ],
  timeTaken: 0,
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setDestinationPlanet(state, action) {
      let destnationIndex = state.destinations.findIndex(
        (destination) => destination.destination === action.payload.destination
      );

      state.destinations[destnationIndex].planet = action.payload.planet;
    },
    setDestinationVehicle(state, action) {
      state.destinations = state.destinations.map((destination) => {
        if (destination.destinationNum === action.payload.destinationNum) {
          return [
            ...state.destinations,
            { ...destination, vehicle: action.payload.vehicle },
          ];
        }
        return [...state.destinations, action.payload];
      });
    },
  },
});

export const { setDestinationPlanet, setDestinationVehicle } =
  destinationSlice.actions;

export default destinationSlice.reducer;

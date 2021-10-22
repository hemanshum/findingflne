import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [
    {
      destination: "1",
      planet: {
        name: "",
      },
      vehicle: {
        name: "",
      },
    },
    {
      destination: "2",
      planet: {
        name: "",
      },
      vehicle: {
        name: "",
      },
    },
    {
      destination: "3",
      planet: {
        name: "",
      },
      vehicle: {
        name: "",
      },
    },
    {
      destination: "4",
      planet: {
        name: "",
      },
      vehicle: {
        name: "",
      },
    },
  ],
  timeTaken: 0,
  showInfoBar: false,
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
      state.destinations[destnationIndex].vehicle = { name: "" };
    },
    setDestinationVehicle(state, action) {
      let destnationIndex = state.destinations.findIndex(
        (destination) => destination.destination === action.payload.destination
      );

      state.destinations[destnationIndex].vehicle = action.payload.vehicle;
    },
    setTimeTaken(state) {
      let totalTimeTake = 0;
      for (let destination of state.destinations) {
        if (destination.planet.name !== "" && destination.vehicle.name !== "") {
          totalTimeTake =
            totalTimeTake +
            destination.planet.distance / destination.vehicle.speed;
        }
      }
      state.timeTaken = totalTimeTake;
    },
    setInfobar(state) {
      state.showInfoBar = !state.showInfoBar;
    },
    resetDestination(state) {
      state.destinations = initialState.destinations;
      state.timeTaken = initialState.timeTaken;
    },
  },
});

export const {
  setDestinationPlanet,
  setDestinationVehicle,
  setTimeTaken,
  resetDestination,
  setInfobar,
} = destinationSlice.actions;

export default destinationSlice.reducer;

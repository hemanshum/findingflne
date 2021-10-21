import { configureStore } from "@reduxjs/toolkit";

import vehicleSlice from "./slices/vehicleSlice";
import planetSlice from "./slices/planetSlice";
import destinationSlice from "./slices/destinationSlice";
import resultSlice from "./slices/resultSlice";

const store = configureStore({
  reducer: {
    planet: planetSlice,
    vehicle: vehicleSlice,
    selectedDestination: destinationSlice,
    result: resultSlice,
  },
});

export default store;

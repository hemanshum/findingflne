import { configureStore } from "@reduxjs/toolkit";

// import vehicleSlice from "./slices/vehicleSlice";
import planetSlice from "./slices/planetSlice";

const store = configureStore({
  reducer: {
    planet: planetSlice,
    // vehicle: vehicleSlice,
  },
});

export default store;

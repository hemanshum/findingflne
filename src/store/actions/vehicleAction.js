import {
  fetchVehicles,
  showNotificaion,
  toggleLoading,
} from "../slices/vehicleSlice";

import findFalconeAPI from "../../apis/findfalconeApi";

export const fetchVehiclesData = () => async (dispatch) => {
  try {
    dispatch(toggleLoading());
    const response = await findFalconeAPI.get("/vehicles");
    dispatch(fetchVehicles(response.data));
    dispatch(toggleLoading());
  } catch (error) {
    dispatch(
      showNotificaion({
        status: "error",
        title: "Error",
        message: "Fetching Vehicle data failed",
      })
    );
    dispatch(toggleLoading());
  }
};

import {
  fetchPlanets,
  showNotificaion,
  toggleLoading,
} from "../slices/planetSlice";

import findFalconeAPI from "../../apis/findfalconeApi";

export const fetchPlanetsData = () => async (dispatch) => {
  try {
    dispatch(toggleLoading());
    const response = await findFalconeAPI.get("/planets");
    dispatch(fetchPlanets(response.data));
    dispatch(toggleLoading());
  } catch (error) {
    dispatch(
      showNotificaion({
        status: "error",
        title: "Error",
        message: "Fetching Planet data failed",
      })
    );
    dispatch(toggleLoading());
  }
};

import {
  fetchPlanets,
  showNotificaion,
  toggleLoading,
} from "../slices/planetSlice";

import findFalconeAPI from "../../apis/findfalconeApi";

export const fetchPlanetData = () => async (dispatch) => {
  try {
    dispatch(toggleLoading());
    const response = await findFalconeAPI.get("/planets");
    dispatch(fetchPlanets(response.data));
    dispatch(toggleLoading());
  } catch (error) {
    console.log({ error });
    dispatch(
      showNotificaion({
        status: "error",
        title: "Error",
        message: "Fetching cart data failed",
      })
    );
    dispatch(toggleLoading());
  }
};

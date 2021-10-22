import {
  findFalcone,
  toggleLoading,
  showNotificaion,
} from "../slices/resultSlice";

import findFalconeAPI from "../../apis/findfalconeApi";

export const startFindingfalcone = (allData) => async (dispatch) => {
  try {
    dispatch(toggleLoading());
    const response = await findFalconeAPI.post("/token");

    let data = {
      token: response.data.token,
      planet_names: allData.planets,
      vehicle_names: allData.vehicles,
    };
    const finalResult = await findFalconeAPI.post("/find", data);
    if (finalResult.data.error) {
      throw new error(finalResult.data.error);
    }

    dispatch(findFalcone(finalResult.data));
    dispatch(toggleLoading());
  } catch (error) {
    dispatch(
      showNotificaion({
        status: "error",
        title: "Error",
        message: error,
      })
    );
    dispatch(toggleLoading());
  }
};

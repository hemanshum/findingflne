import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "react-native-paper";

import { setInfobar } from "../store/slices/destinationSlice";

const Infobar = () => {
  const dispatch = useDispatch();
  const showInfoBar = useSelector(
    (state) => state.selectedDestination.showInfoBar
  );

  return (
    <Snackbar
      visible={showInfoBar}
      duration={3000}
      onDismiss={() => dispatch(setInfobar())}
    >
      Swipe left to select next destination. 👉🏻
    </Snackbar>
  );
};

export default Infobar;

import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, Dimensions, Keyboard } from "react-native";
import { Surface, Title, TextInput } from "react-native-paper";

import {
  setDestinationPlanet,
  setDestinationVehicle,
} from "../store/slices/destinationSlice";
import { selectPlanet } from "../store/slices/resultSlice";

import VehiclesRadioBtns from "./VehiclesRadioBtns";
import PlanetList from "./PlanetList";

const DestinationCard = (props) => {
  const dispatch = useDispatch();

  const [showDropDown, setShowDropDown] = React.useState(false);

  const dispatchPlanetHandler = (planet) => {
    dispatch(
      setDestinationPlanet({
        destination: props.destinationNum,
        planet,
      })
    );
    dispatch(
      selectPlanet({
        destinationNum: props.destinationNum,
        name: planet.name,
      })
    );
  };

  return (
    <Surface style={styles.destinationCards}>
      <Title>{props.destination}</Title>
      <TextInput
        style={styles.selectDestination}
        label="Select"
        placeholder="Select a Destination"
        mode="outlined"
        value={props.planet}
        right={
          <TextInput.Icon
            name="menu-down"
            onPress={() => {
              Keyboard.dismiss();
              setShowDropDown((toggle) => !toggle);
            }}
          />
        }
      />
      <View style={{ width: "100%" }}>
        <VehiclesRadioBtns />
      </View>
      {showDropDown && (
        <PlanetList
          hideDropDown={setShowDropDown}
          dispatchPlanetHandler={dispatchPlanetHandler}
        />
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  destinationCards: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    width: Dimensions.get("window").width / 1.1,
    alignItems: "center",
    elevation: 4,
    borderRadius: 6,
  },
  selectDestination: {
    width: "100%",
    marginVertical: 5,
  },
});

export default DestinationCard;

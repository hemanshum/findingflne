import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Surface, Title, TextInput } from "react-native-paper";

import {
  setDestinationPlanet,
  setDestinationVehicle,
  setTimeTaken,
  setInfobar,
} from "../store/slices/destinationSlice";
import { selectPlanet, selectVehicle } from "../store/slices/resultSlice";

import VehiclesRadioBtns from "./VehiclesRadioBtns";
import PlanetList from "./PlanetList";

const DestinationCard = (props) => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicle.vehicles);

  const [showDropDown, setShowDropDown] = React.useState(false);
  const [text, onChangeText] = React.useState("");
  const [selected, setSelected] = React.useState(false);

  const dispatchPlanetHandler = (planet) => {
    //Manage destinations of planet details
    dispatch(
      setDestinationPlanet({
        destination: props.destinationNum,
        planet,
      })
    );

    //Create an array of Planets for final find API request
    dispatch(
      selectPlanet({
        destinationNum: props.destinationNum,
        name: planet.name,
      })
    );

    //Remove selected vehicle from the array of vehicles
    dispatch(
      selectVehicle({
        destinationNum: props.destinationNum,
        name: undefined,
      })
    );

    //Calculate Time Taken
    dispatch(setTimeTaken());
  };

  const dispatchVehicleHandler = (vehicle) => {
    let vehicleDetails = vehicles.find((item) => item.name === vehicle);
    //Manage destinations by vehicle
    dispatch(
      setDestinationVehicle({
        destination: props.destinationNum,
        vehicle: vehicleDetails,
      })
    );

    // Create an array of Vehicle for final find API request
    dispatch(
      selectVehicle({
        destinationNum: props.destinationNum,
        name: vehicle,
      })
    );

    //Calculate Time Taken
    dispatch(setTimeTaken());

    //Show showInfoBar
    if (props.destinationNum !== "4") {
      dispatch(setInfobar());
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => setShowDropDown(false)}>
      <Surface style={styles.destinationCards}>
        <Title>{props.destination}</Title>
        <TextInput
          style={styles.selectDestination}
          label="Select"
          placeholder="Select a Destination"
          mode="outlined"
          value={selected ? text : props.planet.name}
          onFocus={() => {
            setSelected(true);
            setShowDropDown(true);
          }}
          onBlur={() => {
            setSelected(false);
          }}
          spellCheck={false}
          onChangeText={onChangeText}
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
          {props.planet.name ? (
            <VehiclesRadioBtns
              planetDist={props.planet.distance}
              vehicleName={props.vehicle.name}
              dispatchVehicleHandler={dispatchVehicleHandler}
            />
          ) : null}
        </View>
        {showDropDown && (
          <PlanetList
            enteredText={text}
            hideDropDown={setShowDropDown}
            dispatchPlanetHandler={dispatchPlanetHandler}
          />
        )}
      </Surface>
    </TouchableWithoutFeedback>
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
    minHeight: 400,
  },
  selectDestination: {
    width: "100%",
    marginVertical: 5,
  },
});

export default DestinationCard;

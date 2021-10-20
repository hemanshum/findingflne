import React from "react";
import { StyleSheet, View, Dimensions, Keyboard } from "react-native";
import { Surface, Title, TextInput, Portal } from "react-native-paper";

import VehiclesRadioBtns from "./VehiclesRadioBtns";
import PlanetList from "./PlanetList";

const DestinationCard = (props) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <Surface style={styles.destinationCards}>
      <Title>{props.destination}</Title>
      <TextInput
        style={styles.selectDestination}
        label="Select"
        placeholder="Select a Destination"
        mode="outlined"
        right={
          <TextInput.Icon
            name="menu-down"
            onPress={() => {
              setShowDropDown((toggle) => !toggle);
              Keyboard.dismiss();
            }}
          />
        }
      />
      <View style={{ width: "100%" }}>
        <VehiclesRadioBtns />
      </View>
      {showDropDown && <PlanetList />}
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

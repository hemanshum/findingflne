import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text, Caption } from "react-native-paper";

const VehiclesRadioBtns = (props) => {
  const [value, setValue] = React.useState("");
  const vehicles = useSelector((state) => state.vehicle.vehicles);

  return (
    <RadioButton.Group
      onValueChange={(newValue) => {
        setValue(newValue);
        props.setVehicle(value);
      }}
      value={value}
    >
      {vehicles.map((vehicle) => (
        <View key={vehicle.name} style={styles.radioBtn}>
          <RadioButton value={vehicle.name} />
          <Text>
            {vehicle.name} ({vehicle.total_no}) -{" "}
            <Caption>
              Max Distance: {vehicle.max_distance}, Speed: {vehicle.speed}
            </Caption>
          </Text>
        </View>
      ))}
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  radioBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8EFBA",
    width: "100%",
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 4,
  },
});

export default VehiclesRadioBtns;

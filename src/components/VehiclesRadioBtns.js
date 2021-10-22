import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text, Caption } from "react-native-paper";

let vehicleCount = (vehicleList, vehicleName) => {
  let count = 0;
  for (let vehicle of vehicleList) {
    if (vehicle === vehicleName) {
      count++;
    }
  }
  return count;
};

const VehiclesRadioBtns = (props) => {
  const vehicles = useSelector((state) => state.vehicle.vehicles);
  const selectedVehicles = useSelector((state) => state.result.vehicle_names);

  return (
    <RadioButton.Group
      onValueChange={(newValue) => {
        props.dispatchVehicleHandler(newValue);
      }}
      value={props.vehicleName}
    >
      {vehicles.map((vehicle) => (
        <View key={vehicle.name} style={styles.radioBtn}>
          <RadioButton
            value={vehicle.name}
            disabled={
              props.planetDist > vehicle.max_distance ||
              vehicle.total_no -
                vehicleCount(selectedVehicles, vehicle.name) ===
                0
            }
          />
          <Text>
            {vehicle.name} (
            {selectedVehicles.includes(vehicle.name)
              ? vehicle.total_no - vehicleCount(selectedVehicles, vehicle.name)
              : vehicle.total_no}
            ) -{" "}
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

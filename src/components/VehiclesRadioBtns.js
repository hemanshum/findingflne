import React from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const VehiclesRadioBtns = () => {
  const [value, setValue] = React.useState("first");
  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      <View style={styles.radioBtn}>
        <RadioButton value="first" />
        <Text>First</Text>
      </View>
      <View style={styles.radioBtn}>
        <RadioButton value="second" />
        <Text>Second</Text>
      </View>
      <View style={styles.radioBtn}>
        <RadioButton value="three" />
        <Text>Three</Text>
      </View>
      <View style={styles.radioBtn}>
        <RadioButton value="four" />
        <Text>Four</Text>
      </View>
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import {
  Caption,
  Subheading,
  ActivityIndicator,
  Colors,
  Headline,
  Button,
} from "react-native-paper";

import { resetDestination } from "../store/slices/destinationSlice";
import { resetResultData } from "../store/slices/resultSlice";

const ResultScreen = (props) => {
  const dispatch = useDispatch();
  const finalResult = useSelector((state) => state.result.result);
  const isLoading = useSelector((state) => state.result.isLoading);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={true}
          color={Colors.blue800}
        />
        <Caption>Getting Result, please wait...</Caption>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Headline>Status</Headline>
      {finalResult.status === "success" ? (
        <Subheading>
          Returned: {finalResult.status} - 🪐 Planet Found:{" "}
          {finalResult.planet_name}
        </Subheading>
      ) : (
        <Subheading style={{ color: Colors.red400 }}>
          Returned: {finalResult.status} - Planet not found, try again!! 😩
        </Subheading>
      )}
      <Caption>Time Taken: {props.route.params.timeTaken}</Caption>
      <Button
        mode="outlined"
        icon="restart"
        contentStyle={{ height: 58, width: "100%" }}
        style={{ marginVertical: 20 }}
        onPress={() => {
          dispatch(resetDestination());
          dispatch(resetResultData());
          setTimeout(() => props.navigation.goBack(), 500);
        }}
      >
        Reset Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultScreen;

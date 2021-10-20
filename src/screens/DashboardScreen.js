import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Caption, Title, Surface, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlanetData } from "../store/actions/planetAction";

import DestinationCard from "../components/DestinationCard";

const DashboardScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPlanetData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Caption>Select planets you want to search in:</Caption>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <DestinationCard destination="Destination - 1" />
        <DestinationCard destination="Destination - 2" />
        <DestinationCard destination="Destination - 3" />
        <DestinationCard destination="Destination - 4" />
      </ScrollView>
      <Surface style={styles.timeTaken}>
        <Title>Time Taken: 0</Title>
      </Surface>
      <View style={{ width: "100%" }}>
        <Button
          icon="account-search"
          mode="contained"
          onPress={() => console.log("Pressed")}
          contentStyle={{ height: 58, width: "100%" }}
          style={styles.findBtn}
        >
          Find Falcone
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  timeTaken: {
    margin: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 6,
  },
  destinationContainer: {
    backgroundColor: "#70a1ff",
  },

  findBtn: {
    marginTop: 10,
    marginHorizontal: 38,
  },
});

export default DashboardScreen;

import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Caption, Title, Surface, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlanetsData } from "../store/actions/planetAction";
import { fetchVehiclesData } from "../store/actions/vehicleAction";
import { startFindingfalcone } from "../store/actions/findFalconeAction";

import DestinationCard from "../components/DestinationCard";
import Infobar from "../components/Infobar";

const DashboardScreen = (props) => {
  const scrollRef = React.useRef();
  const dispatch = useDispatch();
  const destinations = useSelector(
    (state) => state.selectedDestination.destinations
  );
  const selectedVehicles = useSelector((state) => state.result.vehicle_names);
  const selectedPlanets = useSelector((state) => state.result.planet_names);
  const timeTaken = useSelector((state) => state.selectedDestination.timeTaken);
  const showInfoBar = useSelector(
    (state) => state.selectedDestination.showInfoBar
  );

  React.useEffect(() => {
    dispatch(fetchPlanetsData());
    dispatch(fetchVehiclesData());
  }, [dispatch]);

  const moveToFirstCard = () => {
    scrollRef.current?.scrollTo({
      x: 0,
      animated: true,
    });
  };

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      moveToFirstCard();
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Caption>Select planets you want to search in:</Caption>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        showsHorizontalScrollIndicator
        ref={scrollRef}
      >
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.destination}
            destination={`Destination - ${destination.destination}`}
            destinationNum={destination.destination}
            planet={destination.planet}
            vehicle={destination.vehicle}
          />
        ))}
      </ScrollView>
      <Surface style={styles.timeTaken}>
        <Title>Time Taken: {timeTaken}</Title>
      </Surface>
      <View style={{ width: "100%" }}>
        <Button
          icon="account-search"
          mode="contained"
          onPress={() => {
            dispatch(
              startFindingfalcone({
                planets: selectedVehicles,
                vehicles: selectedPlanets,
              })
            );
            props.navigation.navigate("Result");
          }}
          contentStyle={{ height: 58, width: "100%" }}
          style={styles.findBtn}
          disabled={
            (selectedVehicles.length !== 4 && selectedPlanets !== 4) ||
            selectedVehicles.includes(undefined) ||
            selectedPlanets.includes(undefined)
          }
        >
          Find Falcone
        </Button>
      </View>
      <Infobar />
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

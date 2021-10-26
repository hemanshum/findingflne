import React from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import {
  Caption,
  Title,
  Surface,
  Button,
  ProgressBar,
} from "react-native-paper";
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
  const [destinationNum, setDestinationNum] = React.useState(1);
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

  const handleScroll = (event) => {
    let destNum = Math.round(
      parseFloat(
        event.nativeEvent.contentOffset.x / Dimensions.get("window").width
      )
    );
    setDestinationNum(destNum + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <ProgressBar
          style={{ marginVertical: 20, width: 200 }}
          visible
          progress={1 / (destinations.length / destinationNum)}
          color="#3B3B98"
        />
      </View>
      <Caption>Select planets you want to search in:</Caption>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        ref={scrollRef}
        onScroll={handleScroll}
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
          color="#EAB543"
          contentStyle={{ height: 58, width: "100%" }}
          style={styles.findBtn}
          disabled={
            (selectedVehicles.length !== 4 && selectedPlanets !== 4) ||
            selectedVehicles.includes(undefined) ||
            selectedPlanets.includes(undefined)
          }
          onPress={() => {
            dispatch(
              startFindingfalcone({
                planets: selectedVehicles,
                vehicles: selectedPlanets,
              })
            );
            props.navigation.navigate("Result", { timeTaken });
          }}
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

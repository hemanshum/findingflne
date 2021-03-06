import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, ScrollView } from "react-native";
import { Portal, Surface, List } from "react-native-paper";

const PlanetList = (props) => {
  const planets = useSelector((state) => state.planet.planets);
  const selectedPlanetNames = useSelector((state) => state.result.planet_names);

  const [showNotFound, setShowNotFound] = React.useState(false);

  return (
    <Portal.Host>
      <Portal>
        <Surface style={styles.surface}>
          <ScrollView
            onContentSizeChange={(w, h) =>
              h < 50 ? setShowNotFound(true) : setShowNotFound(false)
            }
          >
            {planets.map((planet) => {
              if (!selectedPlanetNames.includes(planet.name)) {
                if (
                  planet.name
                    .toLowerCase()
                    .includes(props.enteredText.toLowerCase())
                ) {
                  return (
                    <List.Item
                      key={planet.name}
                      style={styles.listItem}
                      title={planet.name}
                      description={`Distance: ${planet.distance}`}
                      onPress={() => {
                        props.dispatchPlanetHandler(planet);
                        props.hideDropDown(false);
                        props.onChangeText("");
                      }}
                    />
                  );
                }
              }
            })}

            {showNotFound && (
              <List.Item
                key={props.enteredText}
                style={styles.listItem}
                title="Planet not found..."
              />
            )}
          </ScrollView>
        </Surface>
      </Portal>
    </Portal.Host>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    backgroundColor: "#f5f6fa",
    width: 330,
    maxHeight: 260,
    top: 122,
    left: 22,
    borderRadius: 8,
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#718093",
  },
});

export default PlanetList;

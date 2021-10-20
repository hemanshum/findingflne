import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, ScrollView } from "react-native";
import { Portal, Surface, List } from "react-native-paper";

const PlanetList = () => {
  const planets = useSelector((state) => state.planet.planets);
  return (
    <Portal.Host>
      <Portal>
        <Surface style={styles.surface}>
          <ScrollView>
            {planets.map((planet) => (
              <List.Item
                key={planet.name}
                style={styles.listItem}
                title={planet.name}
                description={`Distance: ${planet.distance}`}
              />
            ))}
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
    borderWidth: 0.5,
    borderColor: "#718093",
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#718093",
  },
});

export default PlanetList;

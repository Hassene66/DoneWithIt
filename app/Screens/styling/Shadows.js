import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Shadows = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadows} />
      <Text style={styles.text}>Hi ,My name is Hassene</Text>
    </View>
  );
};

export default Shadows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadows: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
    shadowColor: "grey",
    ...Platform.select({
      andoird: { elevation: 20 },
      ios: { shadowRadius: 12 },
    }),
  },
  text: {
    color: "tomato",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

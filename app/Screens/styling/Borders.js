import React from "react";
import { StyleSheet, View } from "react-native";

const Borders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borders} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  borders: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
    borderColor: "royalblue",
    borderWidth: 10,
    borderRadius: 50,
  },
});
export default Borders;

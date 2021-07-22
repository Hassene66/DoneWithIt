import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/color";
const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    width: "100%",
    marginVertical: 7,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

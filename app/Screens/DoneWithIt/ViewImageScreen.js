import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ViewImageScreen() {
  return (
    <View style={styles.background}>
      <MaterialCommunityIcons
        style={styles.closeBtn}
        name="close"
        size={35}
        color="white"
      />
      <MaterialCommunityIcons
        style={styles.deleteBtn}
        name="trash-can-outline"
        size={35}
        color="white"
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: color.black,
  },
  closeBtn: {
    position: "absolute",
    top: 40,
    left: 40,
  },
  deleteBtn: {
    position: "absolute",
    top: 40,
    right: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

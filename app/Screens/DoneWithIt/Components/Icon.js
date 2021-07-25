import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
  name,
  color = "#fff",
  backgroundColor = "#000",
  size = 40,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons color={color} name={name} size={size * 0.5} />
    </View>
  );
};

export default Icon;

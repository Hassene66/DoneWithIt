import React from "react";
import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.Text, style]}>{children}</Text>;
};

export default AppText;

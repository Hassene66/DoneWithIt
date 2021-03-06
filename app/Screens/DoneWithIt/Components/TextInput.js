import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
const AppTextInput = ({ icon, width = "100%", ...Rest }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.Text}
        {...Rest}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
});

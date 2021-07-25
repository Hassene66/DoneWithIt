import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
const AppTextInput = ({ icon, ...Rest }) => {
  return (
    <Screen>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={defaultStyles.Text} {...Rest} />
      </View>
    </Screen>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
});

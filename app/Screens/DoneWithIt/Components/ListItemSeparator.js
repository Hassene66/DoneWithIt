import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/color";
const ListItemSeparator = () => {
  return <View style={styles.sparator}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  sparator: { width: "100%", height: 1, backgroundColor: colors.light },
});

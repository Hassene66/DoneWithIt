import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import colors from "../../config/color";
const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.listing}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
  },
  listing: { color: colors.medium },
});

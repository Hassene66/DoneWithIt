import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/color";
import AppText from "./AppText";
const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.text}>
        <AppText style={{ marginBottom: 5 }}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    padding: 10,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

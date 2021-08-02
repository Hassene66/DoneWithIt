import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../config/color";
import AppText from "./AppText";
const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.text}>
          <AppText style={{ marginBottom: 5 }}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle + " TND"}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginVertical: 15,
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

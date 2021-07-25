import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "./AppText";
import colors from "../../config/color";
import Swipeable from "react-native-gesture-handler/Swipeable";
const ListItem = ({
  image,
  ImageComponent,
  title,
  subTitle,
  renderRightActions,
  onPress,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.listing}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
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
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

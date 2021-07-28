import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "./Components/AppText.js";
import colors from "../config/color";
import { ListItem } from "./Components/listes";
const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>100 Dt</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/mosh.jpg")}
            title="Hassene Ayoub"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 12,
  },
  title: {
    marginBottom: 4,
    fontWeight: "600",
  },
  price: {
    fontWeight: "600",
    color: colors.secondary,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

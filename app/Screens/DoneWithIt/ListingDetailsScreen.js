import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "./Components/AppText.js";
import colors from "../config/color";
import { ListItem } from "./Components/listes";
const ListingDetailsScreen = ({ route }) => {
  const listings = route.params;
  return (
    <View>
      <Image style={styles.image} source={listings.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listings.title}</AppText>
        <AppText style={styles.price}>{listings.price}</AppText>
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

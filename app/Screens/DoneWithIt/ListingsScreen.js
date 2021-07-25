import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/color";
import Card from "./Components/Card";
import Screen from "./Components/Screen";
const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch for sale in good condition",
    price: 900,
    image: require("../../assets/couch.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(el) => el.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + " dt"}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

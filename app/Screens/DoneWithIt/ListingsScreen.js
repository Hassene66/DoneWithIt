import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ActivityIndicator from "./Components/ActivityIndicator";
import ListingsApi from "../../api/listings";
import colors from "../config/color";
import AppButton from "./Components/AppButton";
import Card from "./Components/Card";
import Screen from "./Components/Screen";
import useApi from "../../hooks/useApi";
const ListingsScreen = ({ navigation }) => {
  const {
    loading,
    data: listings,
    errors,
    request: loadListings,
  } = useApi(ListingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);
  console.log(listings);
  return (
    <Screen style={styles.screen}>
      {errors && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingsDetails", item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

import React, { useState, useEffect } from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  View,
} from "react-native";
import ViewImageScreen from "./app/Screens/DoneWithIt/ViewImageScreen";
import MainScreen from "./app/Screens/DoneWithIt/MainScreen";
import TodoScreen from "./app/Screens/Todos/TodoScreen";
import Borders from "./app/Screens/styling/Borders";
import Shadows from "./app/Screens/styling/Shadows";
import Icons from "./app/Screens/styling/Icon";
import Card from "./app/Screens/DoneWithIt/Components/Card";
import ListingDetailsScreen from "./app/Screens/DoneWithIt/ListingDetailsScreen";
import MessagesScreen from "./app/Screens/DoneWithIt/MessagesScreen";
import Icon from "./app/Screens/DoneWithIt/Components/Icon";
import ListItem from "./app/Screens/DoneWithIt/Components/ListItem";
import Screen from "./app/Screens/DoneWithIt/Components/Screen";
import AccountScreen from "./app/Screens/DoneWithIt/AccountScreen";
export default function App() {
  const { landscape } = useDeviceOrientation();

  return <AccountScreen />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

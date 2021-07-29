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
  Button,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissons";
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
import ListItem from "./app/Screens/DoneWithIt/Components/listes/ListItem";
import Screen from "./app/Screens/DoneWithIt/Components/Screen";
import AccountScreen from "./app/Screens/DoneWithIt/AccountScreen";
import ListingsScreen from "./app/Screens/DoneWithIt/ListingsScreen";
import TextInputComponent from "./app/Screens/DoneWithIt/TextInputComponent";
import AppTextInput from "./app/Screens/DoneWithIt/Components/TextInput";
import AppPicker from "./app/Screens/DoneWithIt/Components/AppPicker";
import LoginScreen from "./app/Screens/DoneWithIt/LoginScreen";
import ListingEditScreen from "./app/Screens/DoneWithIt/ListingEditScreen";
import RegisterScreen from "./app/Screens/DoneWithIt/RegisterScreen";
import ImageInputList from "./app/Screens/DoneWithIt/Components/ImageInputList";

export default function App() {
  return <ListingEditScreen />;
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

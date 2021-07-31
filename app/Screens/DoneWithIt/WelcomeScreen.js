import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "./Components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.tagLine}>Sell what you want </Text>
      </View>
      <View style={styles.btn}>
        <AppButton
          title="Login"
          color="secondary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  btn: {
    width: "100%",
    padding: 20,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: { fontSize: 30, fontWeight: "bold" },
});

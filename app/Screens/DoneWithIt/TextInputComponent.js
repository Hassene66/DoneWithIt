import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Screen from "./Components/Screen";
const TextInputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const setFirstNameHandler = (text) => {
    setFirstName(text);
  };
  return (
    <Screen>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>{firstName}</Text>
        <TextInput
          onChangeText={(text) => setFirstNameHandler(text)}
          style={styles.text}
          placeholder="first name"
        />
      </View>
    </Screen>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  text: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "80%",
  },
});

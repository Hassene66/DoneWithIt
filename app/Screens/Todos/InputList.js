import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const InputList = (props) => {
  const [entredText, setentredText] = useState("");
  const TodoInputHandler = (input) => {
    setentredText(input);
  };

  return (
    <Modal visible={props.visible}>
      <View style={styles.form}>
        <TextInput
          placeholder="todo"
          style={styles.input}
          value={entredText}
          onChangeText={TodoInputHandler}
        />
        <Button
          title="ADD"
          style={styles.button}
          color="green"
          onPress={() => {
            props.addTodo(entredText), setentredText(""), props.addMode();
          }}
        />
        <Button
          title="CANCEL"
          color="orange"
          onPress={() => {
            setentredText(""), props.addMode();
          }}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "65%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
export default InputList;

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Button,
  View,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import InputList from "./InputList";
import TodosList from "./TodosList";

const TodoScreen = () => {
  const [Todos, setTodos] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const AddTodoHandler = (entredText) => {
    setTodos((currTodos) => [
      ...currTodos,
      { id: Math.floor(Math.random() * 100), value: entredText },
    ]);
  };
  const deleteTodoHandler = (id) => {
    setTodos((currTodos) => currTodos.filter((todo) => todo.id != id));
  };
  const addModeHandler = () => {
    setAddMode(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add todo" onPress={() => setAddMode(true)} />
      <InputList
        visible={addMode}
        addMode={addModeHandler}
        addTodo={AddTodoHandler}
      />
      <View>
        <TodosList Todos={Todos} deleteTodo={deleteTodoHandler} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  todos: {
    paddingVertical: 5,
  },
});
export default TodoScreen;

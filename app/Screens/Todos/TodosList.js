import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const TodosList = (props) => {
  return (
    <ScrollView>
      {props.Todos.map((todo) => (
        <TouchableOpacity onPress={() => props.deleteTodo(todo.id)}>
          <Text>{"●" + todo.value}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default TodosList;

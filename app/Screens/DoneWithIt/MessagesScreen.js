import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "./Components/listes";
import Screen from "./Components/Screen";

const MessagesScreen = () => {
  const initialMessages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../../assets/mosh.jpg"),
    },
  ];
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (id) => {
    setMessages(() => messages.filter((msg) => msg.id !== id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/mosh.jpg"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem, ListItemSeparator } from "./Components/listes";
import Screen from "./Components/Screen";
import colors from "../config/color";
import Icon from "./Components/Icon";
const AccountScreen = () => {
  const mutipleItems = [
    {
      id: 1,
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      id: 2,
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Hassene Ayoub"
          subTitle="hassene.ayoub@yahoo.fr"
          image={require("../../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={mutipleItems}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light },
  container: { marginBottom: 18 },
});

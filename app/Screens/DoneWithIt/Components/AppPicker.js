import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import AppText from "./AppText";
import AppButton from "./AppButton";
import PickerItem from "./PickerItem";
const AppPicker = ({ items, onSelectItem, selectItem, placeholder, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectItem ? selectItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                onPress={() => {
                  setIsVisible(false), onSelectItem(item);
                }}
                label={item.label}
              />
            )}
          />
          <Button title="close" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </Screen>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
  text: { flex: 1 },
});

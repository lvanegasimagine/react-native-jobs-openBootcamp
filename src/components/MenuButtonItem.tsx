import { StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const MenuButtonItem = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <AntDesign name={icon} size={24} color="black" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    padding: 15,
  },
  text: {
    fontWeight: 'bold',
    marginStart: 25,
    fontSize: 16
  },
});

export default MenuButtonItem;

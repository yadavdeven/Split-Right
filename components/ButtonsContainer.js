import React from "react";
import Button1 from "./Button1";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function ButtonsContainer(props) {
  return (
    <View style={styles.buttonsContainer}>
      <Button1 buttonTitle='Log-In' style={styles.buttonLeft} />
      <MaterialCommunityIcons
        name='drag-vertical-variant'
        size={38}
        color='black'
        style={{ marginTop: "10%", marginHorizontal: 4 }}
      />
      <Button1 buttonTitle='Sign-Up' />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-end",
    marginHorizontal: "6%",
    paddingHorizontal: "8%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: height * 0.1,
    height: "20%",
    backgroundColor: "white",
    // width: "90%",
    width: "88%",
  },
});

export default ButtonsContainer;

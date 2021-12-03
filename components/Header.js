import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.8;

function Header(props) {
  return (
    <View
      style={styles.appNameContainer}
      style={{
        height: height * 0.1,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.06,
        marginBottom: height * 0.05,
        width: width * 0.94,
        marginHorizontal: width * 0.03,
      }}>
      <Text style={styles.appName1}>SPLIT</Text>
      <FontAwesome name='check-square-o' size={46} color='black' style={{}} />
      <Text style={styles.appName2}>RIGHT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appNameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: width,
    backgroundColor: "white",
  },
  appName1: {
    fontFamily: "headerFont3",
    fontSize: 44,
    color: "black",
    paddingHorizontal: width * 0.04,
  },
  appName2: {
    fontFamily: "headerFont3",
    fontSize: 44,
    color: "black",
    paddingHorizontal: width * 0.04,
  },
});

export default Header;

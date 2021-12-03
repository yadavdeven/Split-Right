import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function Button1(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.buttonText}>{props.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: "46%",
    width: "24%",
    // marginLeft: "12%",
    // marginRight: "8%",
    borderRadius: 6,
    marginVertical: "8%",
    backgroundColor: "white",
    // alignItems: "center",
    borderWidth: 3,
    borderColor: "grey",
    backgroundColor: "#f5f4f2",
    elevation: 2,
    alignItems: "center",
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "grey",
    fontSize: height * 0.028,
    fontFamily: "headerFont1",
    paddingVertical: 2,
    textShadowColor: "black",
    textShadowRadius: 1,
  },
});

export default Button1;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as FONT from "expo-font";
import AppLoading from "expo-app-loading";
import HomeScreen from "./screens/HomeScreen";

const fetchFonts = () => {
  return FONT.loadAsync({
    headerFont1: require("./assets/fonts/header1.ttf"),
    headerFont2: require("./assets/fonts/PassionOne-Regular.ttf"),
    headerFont3: require("./assets/fonts/LuckiestGuy-Regular.ttf"),
    headerFont4: require("./assets/fonts/Viga-Regular.ttf"),
    // headerFont5: require("./assets/fonts/DancingScript-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <HomeScreen />;
}

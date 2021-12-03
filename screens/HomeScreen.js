import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "../components/Carousel";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Button1 from "../components/Button1";
import ButtonsContainer from "../components/ButtonsContainer";

const homeScreenBackGroundImage = require("../assets/images/backgroundimages/hb2.jpg");

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.8;

function HomeScreen(props) {
  return (
    <View style={styles.homeScreenContainer}>
      <ImageBackground
        source={homeScreenBackGroundImage}
        style={styles.backGroundImage}
        blurRadius={5}>
        <Header />
        <Carousel />
        <ButtonsContainer />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
  },
  backGroundImage: {
    flex: 1,
  },
});

export default HomeScreen;

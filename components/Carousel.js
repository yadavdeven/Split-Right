import * as React from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.93;
const ITEM_HEIGHT = ITEM_WIDTH * 0.8;

const images = [
  {
    id: 1,
    text: "Capture moments, let us capture calculations!",
    image: require("../assets/images/tripimages/trip1.jpg"),
  },
  {
    id: 2,
    text: "Drink on! without confusions!",
    image: require("../assets/images/tripimages/trip2.jpg"),
  },
  {
    id: 3,
    text: "Run away from confusions!",
    image: require("../assets/images/tripimages/trip3.jpg"),
  },
  {
    id: 4,
    text: "Split Right Always!",
    image: require("../assets/images/tripimages/trip4.jpg"),
  },
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image.image,
}));

function Carousel(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <StatusBar hidden />

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={true}
        scrollEnabled={true}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <View
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  overflow: "hidden",
                  alignItems: "center",
                  borderRadius: 18,
                  borderWidth: 12,
                  borderColor: "white",
                  elevation: 1,
                }}>
                <Animated.Image
                  source={item.photo}
                  style={{
                    width: ITEM_WIDTH * 1.2,
                    height: ITEM_HEIGHT,
                    resizeMode: "cover",
                    transform: [
                      {
                        translateX,
                      },
                    ],
                  }}
                />
              </View>
              <View style={styles.pagination}>
                {data.map((_, index) => {
                  return <View style={[styles.dot]} />;
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  pagination: {
    position: "absolute",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    color: "black",
  },
});

export default Carousel;

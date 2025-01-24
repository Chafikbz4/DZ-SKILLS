import { ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import MyButtom from "./MyButtom";

const { width, height } = Dimensions.get("window");

const CategoryScroll = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <MyButtom
        source={require("../assets/Frame 7.png")}
        style={{ width: 200, height: 200 }}
        buttonText="Technology & Engineering"
      />
      <MyButtom
        source={require("../assets/Frame 8.png")}
        style={{ width: 180, height: 180 }}
      />
      <MyButtom
        source={require("../assets/Frame 9.png")}
        style={{ width: 180, height: 180 }}
        buttonText="Technology & Engineering"
      />
      <MyButtom
        source={require("../assets/Frame 11.png")}
        style={{ width: 180, height: 180 }}
        buttonText="Technology & Engineering"
      />
      <MyButtom
        source={require("../assets/Frame 11(1).png")}
        style={{ width: 180, height: 180 }}
        buttonText="Technology & Engineering"
      />
      <MyButtom
        source={require("../assets/Frame 28.png")}
        style={{ width: 180, height: 180 }}
        buttonText="Technology & Engineering"
      />
    </ScrollView>
  );
};

export default CategoryScroll;

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
  },
});

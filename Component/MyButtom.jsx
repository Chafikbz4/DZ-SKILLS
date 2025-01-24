import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";

const MyButtom = ({ source, style, buttonText }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

export default MyButtom;

const styles = StyleSheet.create({
  button: {
    marginRight: 15, // Adjust space between buttons
    alignItems: "center", // Center align image and text
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensure image scales well
  },
  buttonText: {
    textAlign: "center",
    marginTop: 5, // Add space between image and text
    fontSize: 14, // Adjust font size
    color: "#333", // Color of the text
  },
});

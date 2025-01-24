import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ TextTiltle, style }) => {
  return (
    <View>
      <Text style={[style]}>{TextTiltle}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const ComentsScroll = () => {
  const [Comment, setComment] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10 }}
    >
      {Comment.map((Comment, index) => {
        return (
          <View
            key={index}
            style={{
              margin: 10,
              width: width * 0.6,
              borderWidth: 1,
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons name="account" color="gray" size={25} />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Faycel Azouaou
              </Text>
            </View>
            <Text style={{ padding: 5, fontSize: 16, color: "#9747FF" }}>
              The platform offers a user-friendly and highly interactive
              learning experience, ideal for both beginners and intermediate
              learners looking to enhance their web development skills. The
              Build Responsive Real-World Websites with HTML and CSS course is
              structured with clear, step-by-step tutorials that allow students
              to progressively build their knowledge.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons name="star" size={30} color="yellow" />
              <Text>4/5</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ComentsScroll;

const styles = StyleSheet.create({});

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
import { useNavigation } from "@react-navigation/native";

const CourseScroll = () => {
  const [courseList, setCourseList] = useState([1, 2, 3, 4, 5, 6]);
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10 }}
    >
      {courseList.map((courses, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              margin: 10,
              width: width * 0.6,
              borderRadius: 20,
              backgroundColor: "#fff",
              elevation: 5,
              shadowColor: "#000", // For iOS shadow color
              shadowOffset: { width: 0, height: 8 }, // Shadow position
              shadowOpacity: 0.15, // Shadow transparency
              shadowRadius: 15, // Shadow blur
            }}
            onPress={() => {
              navigation.navigate("CourseDetails", {
                courseImage: require("../assets/Frame 18.png"),
              });
            }}
          >
            <Image
              source={require("../assets/Frame 18.png")}
              style={{
                width: width * 0.6,
                height: 120,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 5 }}>
              Build Responsive Real-World Websites with HTML and CSS
            </Text>
            <Text style={{ marginHorizontal: 5 }}>Azouaou Faycel</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ marginHorizontal: 5 }}>250 students enrolled</Text>
              <Text style={{ marginHorizontal: 5 }}>25 hours</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <MaterialCommunityIcons name="star" size={30} color="yellow" />
                <Text>3.5/5</Text>
              </View>
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                13$
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CourseScroll;

const styles = StyleSheet.create({});

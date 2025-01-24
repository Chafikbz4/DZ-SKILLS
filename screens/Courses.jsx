import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Title from "../Component/Title";

const { width, height } = Dimensions.get("window");

const Courses = () => {
  const [selected, setSelected] = useState(null); // State to track the selected button

  const courseData = [
    {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      instructor: "Azouaou Faycel",
      duration: "25 Hours",
      students: "250 students enrolled",
      progress: 30, // Progress percentage
      image: require("../assets/Rectangle 24.png"),
    },
    {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      instructor: "Azouaou Faycel",
      duration: "25 Hours",
      students: "250 students enrolled",
      progress: 30, // Progress percentage
      image: require("../assets/Rectangle 24.png"),
    },
    {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      instructor: "Azouaou Faycel",
      duration: "25 Hours",
      students: "250 students enrolled",
      progress: 30, // Progress percentage
      image: require("../assets/Rectangle 24.png"),
    },
    {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      instructor: "Azouaou Faycel",
      duration: "25 Hours",
      students: "250 students enrolled",
      progress: 30, // Progress percentage
      image: require("../assets/Rectangle 24.png"),
    },
    {
      title: "Build Responsive Real-World Websites with HTML and CSS",
      instructor: "Azouaou Faycel",
      duration: "25 Hours",
      students: "250 students enrolled",
      progress: 30, // Progress percentage
      image: require("../assets/Rectangle 24.png"),
    },
  ];

  return (
    <SafeAreaView className="px-5 bg-white shadow-md">
      <Title
        TextTiltle="My Learning"
        style={{
          color: "#262626",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 40,
        }}
      />
      <View className="h-0.5 bg-black w-11/12 ml-2 mt-[-5px]" />
      <View className="flex-row justify-around items-center mt-5">
        {["Start", "In Progress", "Completed"].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelected(item)}
            className={`border-2 rounded-xl px-6 py-2 ${
              selected === item
                ? "bg-[#9747FF] border-[#9747FF]"
                : "border-[#9747FF]"
            }`}
          >
            <Text
              className={`font-bold ${
                selected === item ? "text-white" : "text-[#9747FF]"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        style={{ marginBottom: height * 0.1 }}
        showsVerticalScrollIndicator={false}
      >
        {courseData.map((course, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row rounded-lg"
            style={{
              width: width * 0.9,
              backgroundColor: "#fff",
              elevation: 5,
              shadowColor: "#000", // For iOS shadow color
              shadowOffset: { width: 0, height: 8 }, // Shadow position
              shadowOpacity: 0.15, // Shadow transparency
              marginTop: height * 0.05,
              alignSelf: "center", // Center the item horizontally
              marginBottom: index === courseData.length - 1 && height * 0.1,
            }}
          >
            <View className="flex-1 pr-4">
              <Text className="text-l font-bold text-[#262626]">
                {course.title}
              </Text>
              <View className="mt-2 flex-row items-center">
                <Text className="text-base text-[#7D7D7D] mr-2">
                  {course.instructor}
                </Text>
                <Text className="text-base text-[#7D7D7D]">
                  {course.duration}
                </Text>
              </View>

              <View className="mt-2">
                <Text className="text-base text-[#7D7D7D]">
                  {course.students}
                </Text>
                <Text className="text-base text-[#7D7D7D]">
                  {course.progress}% Completed
                </Text>
              </View>

              {/* Progress bar */}
              <View
                style={{
                  height: 4,
                  width: "100%",
                  backgroundColor: "#E0E0E0", // Gray background for the progress bar
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: `${course.progress}%`, // Dynamic width based on progress
                    backgroundColor: "#9747FF", // Progress color
                    borderRadius: 2,
                  }}
                />
              </View>
            </View>

            <Image source={course.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Courses;

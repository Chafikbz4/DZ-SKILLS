import { Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CourseDetails = ({ route }) => {
  const { courseImage } = route.params;

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="white" />

      {/* Image with Course Details */}
      <View className="relative">
        <Image source={courseImage} className="w-full h-80" />
        {/* Course Title */}
        <Text className="absolute top-5 left-3 text-white text-lg font-bold bg-opacity-60 px-4 py-2 rounded-md">
          Build Responsive Real-World Websites with HTML and CSS
        </Text>
        {/* Course Details */}
        <View className="absolute bottom-5 left-3 right-3  bg-opacity-70 p-4 rounded-md">
          <View>
            <Text className="text-lg font-bold text-white">
              Instructor: Faycel Azouaou
            </Text>
            <Text className="text-sm text-gray-300 mt-2">
              Students enrolled: 2500 students
            </Text>
            <Text className="text-sm text-gray-300 mt-2">
              Duration: 25 hours
            </Text>
          </View>
          <View className="absolute top-3 right-3">
            <Text className="text-2xl font-bold text-white">13$</Text>
          </View>
        </View>
      </View>

      {/* Description Section */}
      <View className="px-4 mt-5">
        <Text className="text-xl font-bold mb-2">Description:</Text>
        <Text className="text-sm leading-5 text-gray-800">
          This course is designed for anyone who wants to master the
          fundamentals of web development and create stunning, fully responsive
          websites. This hands-on course takes you from beginner to proficient,
          teaching you how to structure and style web pages using HTML5 and
          CSS3.
        </Text>
      </View>
      <View className="flex ">
        <Text>Course Content</Text>
        <Text>Totale Article:30</Text>
      </View>
    </View>
  );
};

export default CourseDetails;

import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CourseDetails = ({ route }) => {
  const navigation = useNavigation();
  const { courseImage } = route.params;
  const lessons = [
    {
      id: 1,
      title: "Text Formatting and Semantic Elements in HTML",
      duration: "5min",
      type: "video",
    },
    { id: 2, title: "CSS Flexbox and Grid", duration: "10min", type: "video" },
    { id: 3, title: "JavaScript Basics", duration: "8min", type: "article" },
    { id: 4, title: "JavaScript Basics Quiz", duration: "8min", type: "quiz" },
    { id: 5, title: "Advanced JavaScript", duration: "8min", type: "video" },
  ];

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
        <View className="absolute bottom-5 left-3 right-3 bg-opacity-70 p-4 rounded-md">
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
      <View className="flex flex-row m-2 justify-between px-3">
        <Text className="text-xl font-bold mb-2">Course Content</Text>
        <Text className="text-l mb-2">Total Lessons: 5</Text>
      </View>
      <ScrollView>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={lesson.id}
            className={`flex-row p-4 justify-between items-center ${
              index !== lessons.length - 1 ? "border-b border-white" : ""
            }`}
            onPress={() => {
              if (lesson.type === "video") {
                navigation.navigate("VideoPage");
              } else if (lesson.type === "article") {
                navigation.navigate("ArticlePage");
              } else if (lesson.type === "quiz") {
                navigation.navigate("QuizePage");
              }
            }}
          >
            <View className="bg-purple-500 rounded-full py-2 px-4">
              <Text className="font-bold text-purple-600 text-base">
                {`${index + 1}/5`}
              </Text>
            </View>
            <View className="flex-1 ml-4">
              <Text className="font-bold text-lg">{lesson.title}</Text>
              <View className="flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="youtube"
                  color="#6B21A8"
                  size={20}
                />
                <Text className="ml-2 text-purple-500">
                  {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}:{" "}
                  {lesson.duration}
                </Text>
              </View>
              <View className="absolute right-4 bottom-4">
                <MaterialCommunityIcons
                  name="check-circle"
                  color="#6B21A8"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CourseDetails;

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { Video } from "expo-av";
const VideoPage = () => {
  const [question, setQuestion] = useState("");

  return (
    <View className="flex-1 bg-white p-5">
      <StatusBar backgroundColor="white" />

      {/* Video Component */}
      <View className="w-full h-48 mb-6 rounded-xl overflow-hidden shadow-lg">
        <Video
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Example video URL
          className="w-full h-full"
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      </View>

      {/* Video Title & Next Button */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-lg font-bold text-purple-800" style={{ width: 250 }}>
          Build Responsive Real-World Websites with HTML and CSS
        </Text>
        <TouchableOpacity className="px-5 py-3 bg-purple-600 rounded-full shadow-md hover:bg-purple-700">
          <Text className="text-white font-semibold">Next</Text>
        </TouchableOpacity>
      </View>

      {/* Q&A Section */}
      <View className="rounded-lg ">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Q&A: Add a Question</Text>
        </View>

        <TextInput
          className="h-24 border border-gray-300 p-2 rounded-md"
          placeholder="Enter Question here..."
          multiline
          numberOfLines={4}
        />
        <View className="flex flex-row justify-end">
          <TouchableOpacity className="px-5">
            <Text className="text-lg">Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-lg">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-lg font-bold">Description:</Text>
        <Text className="text-l">
          This course is designed for anyone who wants to master the
          fundamentals of web development and create stunning, fully responsive
          websites. This hands-on course takes you from beginner to proficient,
          teaching you how to structure and style web pages using HTML5 and
          CSS3.
        </Text>
      </View>
    </View>
  );
};

export default VideoPage;

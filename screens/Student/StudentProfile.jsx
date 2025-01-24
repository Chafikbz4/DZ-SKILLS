import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StudentProfile = () => {
  // State to store the user's name, email, and password
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("password123");
  const [editing, setEditing] = useState(false); // State to toggle edit mode

  // Function to handle the edit button press
  const handleEdit = () => {
    setEditing(!editing); // Toggle the editing mode
  };

  // Function to handle save changes
  const handleSave = () => {
    // Here you would normally handle saving the changes to a backend
    Alert.alert("Profile Updated", "Your profile has been updated.");
    setEditing(false); // Exit edit mode
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-5">
      {/* Profile Picture */}
      <View className="flex items-center mb-6">
        <MaterialCommunityIcons name="account" color="gray" size={30} />
        <TouchableOpacity>
          <Text className="text-blue-500">Upload a new picture</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-red-500">Delete a Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View className="w-full space-y-5">
        {/* Name Field */}
        <View className="space-y-1">
          <Text className="font-bold">Name:</Text>
          {editing ? (
            <TextInput
              style={{ borderRadius: 8 }}
              className="border-2 p-2"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          ) : (
            <View className="border-2 border-gray-300 p-2 rounded-lg">
              <Text>{name}</Text>
            </View>
          )}
        </View>

        {/* Email Field */}
        <View className="space-y-1">
          <Text className="font-bold">Email:</Text>
          {editing ? (
            <TextInput
              style={{ borderRadius: 8 }}
              className="border-2 p-2"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          ) : (
            <View className="border-2 border-gray-300 p-2 rounded-lg">
              <Text>{email}</Text>
            </View>
          )}
        </View>

        {/* Password Field */}
        <View className="space-y-1">
          <Text className="font-bold">Password:</Text>
          {editing ? (
            <TextInput
              style={{ borderRadius: 8 }}
              className="border-2 p-2"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          ) : (
            <View className="border-2 border-gray-300 p-2 rounded-lg">
              <Text>{password}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Edit / Save Button */}
      <TouchableOpacity
        onPress={editing ? handleSave : handleEdit}
        className="mt-6 border-2 border-[#9747FF] px-6 py-2 rounded-xl"
      >
        <Text className="font-bold text-[#9747FF]">
          {editing ? "Save Changes" : "Edit Profile"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StudentProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_URL } from "@env";
const fetchStudentData = async (id, authToken) => {
  try {
    const response = await axios.post(
      `${API_URL}students/GetStudent/${id}`,
      {}, // Ensure this URL is correct
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);
  const [editableData, setEditableData] = useState({
    FullName: "",
    email: "",
  });
  const userData = useSelector((state) => state.userData);
  const authToken = userData?.token;
  const id = userData?.userID;
  const [loading, setLoading] = useState(true);
  const profilePicture = studentData?.profilePicture || null;

  useEffect(() => {
    const fetchData = async () => {
      if (!id || !authToken) {
        Alert.alert("Error", "User is not authenticated or ID is missing.");
        return;
      }

      try {
        const data = await fetchStudentData(id, authToken);
        setStudentData(data);
        setEditableData({
          FullName: data.FullName || "",
          email: data.email || "",
        });
      } catch (error) {
        Alert.alert(
          "Error",
          error.response?.data?.message ||
            "Failed to fetch student data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, authToken]);

  const handleInputChange = (name, value) => {
    setEditableData({
      ...editableData,
      [name]: value,
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-md items-center"
          style={{ height: "100%", width: "100%" }}
        >
          {/* Profile Picture */}
          <View className="items-center mb-6">
            {profilePicture ? (
              <Image
                source={{ uri: profilePicture }}
                className="w-24 h-24 rounded-full"
                resizeMode="cover"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-circle"
                size={96}
                color="#ccc"
              />
            )}
          </View>

          {/* Buttons for changing and deleting the picture */}
          <View className="flex-row justify-between mb-6 w-full">
            <TouchableOpacity className="flex items-center bg-blue-500 px-4 py-2 rounded-lg flex-1 mx-2">
              <MaterialCommunityIcons
                name="image-edit"
                size={24}
                color="#fff"
              />
              <Text className="text-white text-sm font-medium">
                Change Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex items-center bg-red-500 px-4 py-2 rounded-lg flex-1 mx-2">
              <MaterialCommunityIcons name="delete" size={24} color="#fff" />
              <Text className="text-white text-sm font-medium">
                Delete Picture
              </Text>
            </TouchableOpacity>
          </View>

          {/* Editable student data */}
          {studentData && (
            <View className="mb-6 w-full">
              <TextInput
                placeholder="Name"
                value={editableData.FullName}
                onChangeText={(text) => handleInputChange("FullName", text)}
                className="w-full bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <TextInput
                placeholder="Email"
                value={editableData.email}
                onChangeText={(text) => handleInputChange("email", text)}
                className="w-full bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </View>
          )}

          {/* TextInputs for old and new passwords */}
          <View className="space-y-4 w-full">
            <TextInput
              placeholder="Old Password"
              secureTextEntry
              className="w-full bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <TextInput
              placeholder="New Password"
              secureTextEntry
              className="w-full bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default StudentProfile;

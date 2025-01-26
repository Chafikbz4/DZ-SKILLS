import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "@env";

const CategoryScroll = () => {
  const userData = useSelector((state) => state.userData);
  const authToken = userData?.token;
  const [categoryArray, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}categories/all`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });
        setCategories(response.data);
      } catch (error) {
        alert("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [authToken]);

  const handleCategoryPress = (categoryId) => {
    navigation.navigate("CategoryCourses", { categoryId });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row items-center"
    >
      {categoryArray.map((category, index) => (
        <TouchableOpacity
          key={index}
          className="mr-4 items-center justify-center w-44 h-44 bg-white rounded-2xl shadow-lg"
          onPress={() => handleCategoryPress(category.ID)}
        >
          <Image
            source={require("../assets/Frame 7.png")} // Replace with your dynamic category images if needed
            className="w-full h-full rounded-2xl"
            resizeMode="cover"
          />
          <Text className="absolute bottom-2 text-center text-white text-lg font-bold">
            {category.Name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryScroll;

import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CategoryCourses = ({ route }) => {
  const userData = useSelector((state) => state.userData);
  const token = userData?.token;
  const { categoryId } = route.params;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://dzskiils-production.up.railway.app/Courses/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Filter courses based on the categoryId
        const filteredCourses = response.data.filter(
          (course) => course.category_id === categoryId
        );
        console.log(response.data);
        setCourses(filteredCourses);
      } catch (error) {
        alert("Error fetching courses:");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [categoryId, token]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-semibold">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ margin: 10 }}
    >
      {courses.map((course, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              margin: 10,
              width: width * 0.6,
              borderRadius: 20,
              backgroundColor: "#fff",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.15,
              shadowRadius: 15,
            }}
            onPress={() => {
              // Navigate to CourseDetails and send the course ID
              navigation.navigate("CourseDetails", {
                courseId: course.ID, // Send course ID to CourseDetails
              });
            }}
          >
            <Image
              source={{ uri: course.Image }}
              style={{
                width: width * 0.6,
                height: 120,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 5 }}>
              {course.Name || "Course Title"}
            </Text>
            <Text style={{ marginHorizontal: 5 }}>
              {course.Description || "Description not available"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ marginHorizontal: 5 }}>
                {course.Duration || "0 hours"}
              </Text>
              <Text style={{ marginHorizontal: 5 }}>
                {course.Language || "Language not specified"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {course.Pricing || "0 USD"}
              </Text>
            </View>

            {/* Display Course ID and Category */}
            <View
              style={{
                marginTop: 10,
                padding: 5,
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 14 }}>
                <Text style={{ fontWeight: "bold" }}>Course ID: </Text>
                {course.ID}
              </Text>
              <Text style={{ fontSize: 14 }}>
                <Text style={{ fontWeight: "bold" }}>Category: </Text>
                {course.Category.Name || "No Category"}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoryCourses;

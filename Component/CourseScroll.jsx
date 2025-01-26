import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "@env";
const { width, height } = Dimensions.get("window");

const CourseScroll = () => {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation(); // Accessing navigation
  const userData = useSelector((state) => state.userData);
  const token = userData.token;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}Courses/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const coursesWithCategory = await Promise.all(
          response.data.map(async (course) => {
            // Fetch the category name for each course
            id = course.category_id;
            try {
              const categoryResponse = await axios.post(
                `${API_URL}categories/get/${id}`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                }
              );

              // Add the category name to the course object
              course.Category.Name =
                categoryResponse.data.Name || "No Category"; // Assign category name
            } catch (categoryError) {
              alert(
                "An error occurred while fetching Categories. Please try again later."
              );
              course.Category.Name = "No Category"; // Set a default value if the category fetch fails
            }

            return course; // Return the updated course
          })
        );

        // Update state with courses that now include category names
        setCourseList(coursesWithCategory);
      } catch (error) {
        alert(
          "An error occurred while fetching courses. Please try again later."
        );
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10 }}
    >
      {courseList.map((course, index) => {
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
            
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CourseScroll;

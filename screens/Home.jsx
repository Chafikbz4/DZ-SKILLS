import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  DrawerLayoutAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import CategoryScroll from "../Component/CategoryScroll";
import Title from "../Component/Title";
import CourseScroll from "../Component/CourseScroll";
import ComentsScroll from "../Component/ComentsScroll";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { TouchableOpacityComponent } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for token storage
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const Home = () => {
  const navigation = useNavigation();
  const drawerRef = useRef(null);
  const userData = useSelector((state) => state.userData);
  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage

      // Redirect to Login page
      navigation.replace("Login");

      // Optional: Show a success message
    } catch (error) {
      Alert.alert("Logout Error:", error);
      Alert.alert("Error", "An error occurred while logging out.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            height: height * 0.4,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image source={require("../assets/Ellipse 92.png")} />
            <View>
              <Image
                source={require("../assets/Ellipse 93.png")}
                style={{
                  top: -height * 0.07,
                  left: -width * 0.01,
                  zIndex: -1,
                }}
              />
            </View>
          </View>

          <View
            style={{
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              height: height * 0.25,
              top: -height * 0.05,
            }}
          >
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                  Welcome Back {userData.username}
                </Text>
                <Text style={styles.subtitleText}>
                  Making Learning Easy, Anytime, Anywhere
                </Text>
                <Text style={styles.descriptionText}>
                  Empower your growth with engaging courses and resources—all
                  from the comfort of your own space.
                </Text>
              </View>

              <View style={styles.imageWrapper}>
                <Image
                  source={require("../assets/freepik-export-20241115164630DdDq 1.png")}
                  style={styles.smallImage}
                />
              </View>
            </View>
            <Image
              source={require("../assets/Ellipse 93.png")}
              style={{
                top: -height * 0.22,
                left: width * 0.6,
                zIndex: -1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            width: "100%",
            paddingHorizontal: 20,
            top: -height * 0.05,
            marginTop: height * 0.05,
            marginBottom: -height * 0.02,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9747FF" }}
            >
              500+
            </Text>
            <Text style={{ color: "#666666", fontSize: 18 }}>Courses</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9747FF" }}
            >
              60+
            </Text>
            <Text style={{ color: "#666666", fontSize: 18 }}>Instructors</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9747FF" }}
            >
              2500+
            </Text>
            <Text style={{ color: "#666666", fontSize: 18 }}>Students</Text>
          </View>
        </View>
        <Title
          TextTiltle="Categories"
          style={{
            textAlign: "center",
            color: "#9747FF",
            fontSize: 25,
            fontWeight: "bold",
          }}
        />
        <CategoryScroll />
        <Title
          TextTiltle="Popular Courses For You"
          style={{
            textAlign: "start",
            color: "#9747FF",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        />
        <CourseScroll />
        <Title
          TextTiltle="Courses Related to “AI”"
          style={{
            textAlign: "start",
            color: "#9747FF",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        />
        <CourseScroll />
        <ImageBackground source={require("../assets/Group 25(1).png")}>
          <Title
            TextTiltle="What users think about us"
            style={{
              textAlign: "start",
              color: "#9747FF",
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          />
          <ComentsScroll />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: height * 2,
  },

  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 100,
  },
  textContainer: {
    justifyContent: "center",
    width: width * 0.6,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "left",
    color: "#555", // A lighter color for description
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "flex-end", // Align the image to the right (corner)
    flex: 1, // This allows it to take up the remaining space
    marginLeft: width * 0.5,
  },
  smallImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

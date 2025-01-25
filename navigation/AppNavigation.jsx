import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Courses from "../screens/Courses";
import Home from "../screens/Home";
import Progresse from "../screens/Progresse";
import Search from "../screens/Search";
import StudentProfile from "../screens/Student/StudentProfile";
import TeacherProfile from "../screens/Teacher/TeacherProfile";
import Login from "../services/Auth/Login";
import Regester from "../services/Auth/Regester";
import CourseDetails from "../screens/CourseDetails";
import VideoPage from "../screens/VideoPage";
import QuizePage from "../screens/QuizePage";
import ArticlePage from "../screens/ArticlePage";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Regester"
          component={Regester}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Progresse"
          component={Progresse}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentProfile"
          component={StudentProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherProfile"
          component={TeacherProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="App"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoPage"
          component={VideoPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArticlePage"
          component={ArticlePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizePage"
          component={QuizePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "magnify" : "magnify";
          } else if (route.name === "Courses") {
            iconName = focused ? "youtube-tv" : "youtube-tv";
          } else if (route.name === "Progresse") {
            iconName = focused ? "chart-line" : "chart-line";
          } else if (route.name === "StudentProfile") {
            iconName = focused ? "account" : "account-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarLabel: ({ focused }) =>
          focused ? (
            <Text style={{ color: "white", fontSize: 12 }}>
              {route.name === "StudentProfile" ? "Profile" : route.name}
            </Text>
          ) : null,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#5316A2",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Progresse"
        component={Progresse}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});

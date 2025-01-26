import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import axios from "axios";
import { GetuserDataRegister } from "../../Store/Actions";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [role, setRole] = useState("student");

  const isFormValid = email && password; // Ensure all fields are filled

  const handleLogin = async () => {
    if (!isFormValid) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const loginData = {
      email,
      password,
      role,
    };

    try {
      const response = await axios.post(
        "https://dzskiils-production.up.railway.app/teachers/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token } = response.data; // Extract token and user data from the response
        console.log("Token:", token);
        console.log("User:", response.data);

        // Dispatch user data to Redux
        dispatch(GetuserDataRegister(response.data));

        Alert.alert("Success", "Logged in successfully!", [
          {
            text: "OK",
            onPress: () => navigation.replace("App"), // Redirect to App screen after login
          },
        ]);
      } else {
        Alert.alert("Error", "Failed to log in.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code
        const errorMessage =
          error.response.data.message || "Invalid email or password.";
        Alert.alert("Error", errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        Alert.alert("Error", "No response from the server. Please try again.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message); // Debugging log
        Alert.alert(
          "Error",
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Link to Register Page */}
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          navigation.navigate("Regester");
        }}
      >
        <Text style={{ color: "purple", marginBottom: 10 }}>
          Do not have an account?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginButton, !isFormValid && styles.disabledButton]}
        onPress={handleLogin}
        disabled={!isFormValid}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "#9747FF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

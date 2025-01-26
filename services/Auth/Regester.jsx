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
import axios from "axios"; // Import axios
import { API_URL } from "@env";
const Regester = () => {
  const navigation = useNavigation();
  const [FullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false); // State for agreement checkbox

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const isFormValid =
    FullName && username && isValidEmail(email) && Password && isAgreed; // Ensure all fields are filled, email is valid, and policy is agreed

  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert(
        "Error",
        "Please fill all fields correctly and agree to the policy."
      );
      return;
    }

    const studentData = {
      FullName,
      username,
      email,
      Password,
    };

    try {
      const response = await axios.post(
        `${API_URL}students/CreateStudent`,
        studentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert("Success", "Student registered successfully!", [
          {
            text: "OK",
            onPress: () => navigation.replace("Login"), // Redirect to Login page after clicking OK
          },
        ]);
        console.log(response.data);
      } else {
        Alert.alert("Error", "Failed to register student.");
      }
    } catch (error) {
      Alert.alert("Error:", error);
      if (error.response) {
        // Server responded with a status code outside 2xx
        Alert.alert(
          "Error",
          error.response.data.message || "Registration failed."
        );
      } else if (error.request) {
        // Request was made but no response was received
        Alert.alert("Error", "No response from the server.");
      } else {
        // Something else went wrong
        Alert.alert(
          "Error",
          "An error occurred while registering the student."
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FullName"
        value={FullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {email &&
        !isValidEmail(email) && ( // Show error message if email is invalid
          <Text style={styles.errorText}>
            Please enter a valid email address.
          </Text>
        )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Agreement Checkbox */}
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          marginBottom: 10,
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: isAgreed ? "#9747FF" : "gray", // Change color based on agreement state
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
          onPress={() => setIsAgreed(!isAgreed)} // Toggle agreement state
        ></TouchableOpacity>

        <Text>I agree to the app policy</Text>
      </View>

      {/* Already have an account */}
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ color: "purple", marginBottom: 10 }}>
          Already have an account
        </Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        style={[styles.RegesterButton, !isFormValid && styles.disabledButton]}
        onPress={handleRegister}
        disabled={!isFormValid}
      >
        <Text style={styles.RegesterButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Regester;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  dropdown: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  roleOption: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: "#9747FF",
  },
  roleText: {
    color: "black",
    fontWeight: "bold",
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
  RegesterButton: {
    backgroundColor: "#9747FF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  RegesterButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

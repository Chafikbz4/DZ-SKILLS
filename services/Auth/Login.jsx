import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [role, setRole] = useState(""); // "Student" or "Teacher"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = role && email && password; // Ensure all fields are filled

  return (
    <View style={styles.container}>
      {/* Role Selection */}
      <View style={styles.dropdown}>
        <TouchableOpacity
          style={[styles.roleOption, role === "Student" && styles.selectedRole]}
          onPress={() => setRole("Student")}
        >
          <Text style={styles.roleText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleOption, role === "Teacher" && styles.selectedRole]}
          onPress={() => setRole("Teacher")}
        >
          <Text style={styles.roleText}>Teacher</Text>
        </TouchableOpacity>
      </View>

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

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginButton, !isFormValid && styles.disabledButton]}
        onPress={() => {
          if (isFormValid) navigation.replace("App");
        }}
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
    marginBottom: 20,
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

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const question = "What is the capital of France?";
  const options = [
    { id: 1, text: "Paris", isCorrect: true },
    { id: 2, text: "Berlin", isCorrect: false },
    { id: 3, text: "Madrid", isCorrect: false },
    { id: 4, text: "Rome", isCorrect: false },
  ];

  const checkAnswer = () => {
    const correctAnswer = options.find((option) => option.isCorrect);
    if (selectedAnswer === correctAnswer.id) {
      Alert.alert("Correct!", "You selected the right answer.");
    } else {
      Alert.alert("Incorrect", "Please try again.");
    }
    setIsAnswerChecked(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionButton,
            {
              backgroundColor:
                selectedAnswer === option.id ? "#4CAF50" : "#f0f0f0",
            },
          ]}
          onPress={() => setSelectedAnswer(option.id)}
          disabled={isAnswerChecked}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.checkButton}
        onPress={checkAnswer}
        disabled={isAnswerChecked}
      >
        <Text style={styles.checkButtonText}>
          {isAnswerChecked ? "Try Again" : "Check Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  optionButton: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
  checkButton: {
    backgroundColor: "#6200ea",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

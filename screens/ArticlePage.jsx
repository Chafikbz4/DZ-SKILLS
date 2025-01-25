import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArticlePage = () => {
  const [pdfOpened, setPdfOpened] = useState(false); // To track if the PDF was opened
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pdfOpened) {
        openPDF();
      }
    }, 5000); // Wait for 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [pdfOpened]);

  const openPDF = () => {
    const pdfUrl =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    Linking.openURL(pdfUrl)
      .then(() => setPdfOpened(true)) // Mark PDF as opened
      .catch((err) => console.error("Failed to open PDF", err));
  };

  return (
    <View style={styles.container}>
      {pdfOpened ? (
        <View style={styles.optionsContainer}>
          <Text style={styles.text}>What would you like to do next?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Open PDF Again" onPress={openPDF} />
            <Button title="Next" />
          </View>
        </View>
      ) : (
        <Text style={styles.text}>Waiting to open the PDF...</Text>
      )}
    </View>
  );
};

export default ArticlePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  optionsContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
});

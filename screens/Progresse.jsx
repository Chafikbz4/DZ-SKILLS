import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Title from "../Component/Title";

const { width, height } = Dimensions.get("window");

const Progresse = () => {
  const [selected, setSelected] = useState(null); // State to track the selected button

  // Sample data for the bar chart
  const data = [
    { value: 5, label: "Week 1" },
    { value: 8, label: "Week 2" },
    { value: 10, label: "Week 3" },
    { value: 7, label: "Week 4" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Title TextTiltle="My Progress" style={styles.title} />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        {["Weekly", "Monthly", "Yearly"].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelected(item)}
            style={[styles.button, selected === item && styles.selectedButton]}
          >
            <Text
              style={[
                styles.buttonText,
                selected === item && styles.selectedButtonText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Title TextTiltle="Completed courses" style={styles.subTitle} />
      <BarChart
        data={data}
        width={width - 80} // Reduced the width of the chart
        height={height * 0.5} // Set the height to 50% of the screen height
        fromZero
        showValuesOnTopOfBars
        barWidth={40} // Increased bar width
        spacing={30} // Increased space between bars
        frontColor="#9747FF" // Set the color of the bars to #9747FF
        showTextOnPress
        renderBelowBarText={(item) => item.value}
        yAxisLabel="Courses"
        yAxisSuffix=" courses"
        style={styles.chart}
        verticalLabelRotation={0} // Keeping labels horizontal
        labelStyle={styles.labelStyle} // Applied styling to the labels
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    color: "#262626",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#ccc",
    width: "100%",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  button: {
    borderWidth: 2,
    borderColor: "#9747FF",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  selectedButton: {
    backgroundColor: "#9747FF",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#9747FF",
  },
  selectedButtonText: {
    color: "#fff",
  },
  subTitle: {
    color: "#262626",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  chart: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 5,
  },
  labelStyle: {
    fontSize: 18, // Increased the size of the labels
    color: "#9747FF", // Set label color to match the bars
    fontWeight: "bold", // Added some emphasis to the labels
  },
});

export default Progresse;

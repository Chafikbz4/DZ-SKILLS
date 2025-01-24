import {
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Title from "../Component/Title";
const { width, height } = Dimensions.get("window");

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [textInputRef, setTextInputRef] = useState(null);
  const [OpenCategory, setCategory] = useState(false);
  const [category, setcategory] = useState({
    "Technology & Engineering": [
      "Information and Computer Technology (ICT)",
      "Electronics and Communication Engineering",
      "Mechanical Systems and Automation",
      "Civil and Structural Engineering",
      "Artificial Intelligence and Data Engineering",
    ],
    "Languages & Communication": [
      "Information and Computer Technology (ICT)",
      "Electronics and Communication Engineering",
    ],
    "Health & Fitness": [
      "Information and Computer Technology (ICT)",
      "Electronics and Communication Engineering",
      "Mechanical Systems and Automation",
      "Civil and Structural Engineering",
    ],
    "Computer Science & Programming": [
      "Information and Computer Technology (ICT)",
      "Artificial Intelligence and Data Engineering",
    ],
    "Marketing & Business": ["Information and Computer Technology (ICT)"],
    "Design & Creativity": ["Artificial Intelligence and Data Engineering"],
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SafeAreaView className="bg-white" style={{ height: height * 2 }}>
      <TouchableWithoutFeedback onPress={() => textInputRef?.focus()}>
        <View
          className="flex-row items-center border border-customPurple rounded-2xl mt-10 ml-5 p-0"
          style={{
            width: width * 0.9,
            height: height * 0.07,
          }}
        >
          <MaterialCommunityIcons
            name="magnify"
            color="gray"
            size={35}
            style={{ paddingHorizontal: 10 }}
          />
          <TextInput
            ref={(input) => setTextInputRef(input)}
            placeholder="Search"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            style={{
              marginLeft: 8,
              fontSize: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <View className="items-center mt-4">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => {
            setCategory(!OpenCategory);
          }}
        >
          <Title
            TextTiltle="Categories"
            style={{
              color: "#9747FF",
              fontSize: 25,
              fontWeight: "bold",
              margin: 10,
            }}
          />
          {!OpenCategory ? (
            <MaterialCommunityIcons
              name="chevron-down"
              color="gray"
              size={20}
            />
          ) : (
            <MaterialCommunityIcons name="chevron-up" color="gray" size={20} />
          )}
        </TouchableOpacity>
        {OpenCategory && (
          <View
            className="flex-row h-50"
            style={{
              width: width * 0.9,
              backgroundColor: "#fff",
              elevation: 5,
              shadowColor: "#000", // For iOS shadow color
              shadowOffset: { width: 0, height: 8 }, // Shadow position
              shadowOpacity: 0.15,
              borderRadius: 20,
            }}
          >
            <FlatList
              data={Object.keys(category)}
              keyExtractor={(item) => item}
              className="border-r border-black-300"
              style={{ width: width * 0.5 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`p-2 ${
                    selectedCategory === item ? "text-purple-200" : ""
                  }`}
                  onPress={() => setSelectedCategory(item)}
                >
                  <Text
                    className={`text-base ${
                      selectedCategory === item
                        ? "font-bold text-purple-600"
                        : ""
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            {/* Right side: Values of the selected key */}
            <View className="flex-2 pl-4" style={{ width: width * 0.5 }}>
              {selectedCategory &&
                category[selectedCategory].map((value, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedValue(value)}
                    className={`p-2${
                      selectedValue === value ? "bg-purple-100" : ""
                    }`}
                  >
                    <Text
                      className={`text-base ${
                        selectedValue === value
                          ? "font-bold text-purple-600"
                          : ""
                      }`}
                    >
                      {value}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

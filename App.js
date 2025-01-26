import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./Store/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="white-content" />
        <AppNavigation />
      </Provider>
    </>
  );
}
<AppNavigation />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

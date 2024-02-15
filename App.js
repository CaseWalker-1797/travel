import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigations/Navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store/Store";
import StackNavigator from "./src/navigations/StackNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

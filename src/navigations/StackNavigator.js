import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AllGroupTrip from "../screens/appStack/GroupTripScreen";
import AllTopTrip from "../screens/appStack/TopTripScreen";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Top" component={AllTopTrip} />
        <Stack.Screen name="Group" component={AllGroupTrip} />
        <Stack.Screen name="BottomNav" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

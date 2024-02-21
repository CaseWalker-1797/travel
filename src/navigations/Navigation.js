import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { accentColor, bgColor, inactiveColor } from "../styles/Colors";
import { Icon } from "react-native-paper";
import Home from "../screens/appStack/HomeScreen";
import Favorite from "../screens/appStack/FavoriteScreen";

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: accentColor,
        tabBarInactiveTintColor: inactiveColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon source="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon source="heart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

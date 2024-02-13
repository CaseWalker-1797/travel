import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { accentColor, bgColor, inactiveColor } from "../styles/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../appStack/Home";
import Favorite from "../appStack/Favorite";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        activeColor={accentColor}
        inactiveColor={inactiveColor}
        barStyle={{
          backgroundColor: bgColor,
          borderColor: inactiveColor,
          borderTopWidth: 1,
        }}
        theme={{ colors: { secondaryContainer: "transparent" } }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="heart" color={color} size={32} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

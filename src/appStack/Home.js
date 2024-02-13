import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import {
  accentColor,
  bgColor,
  borderColor,
  inactiveColor,
} from "../styles/Colors";
import Categories from "../components/Categories";
import TopTrip from "../components/TopTrip";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Location Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 2,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "start",
            padding: 4,
          }}
        >
          <Text style={{ fontSize: 16, color: inactiveColor, margin: 10 }}>
            Location
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Icon source="map-marker" size={32} />
            <Text style={{ fontSize: 16 }}>New York, USA</Text>
            <Icon source="chevron-down" size={32} />
          </View>
        </View>
        <Icon source="bell" size={32} />
      </View>
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            backgroundColor: bgColor,
            borderRadius: 50 / 2,
            borderColor: borderColor,
            borderWidth: 1,
            flex: 1,
            elevation: 5,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
          }}
        >
          <Icon source="magnify" color={inactiveColor} size={28} />
          <TextInput
            placeholder="Search"
            style={{
              padding: 10,
              margin: 4,
              fontSize: 16,
              color: inactiveColor,
              flex: 1,
            }}
            keyboardType="default"
          />
        </View>
        {/* Filter Button */}
        <TouchableOpacity
          className="p-3 rounded-full"
          style={{
            backgroundColor: accentColor,
            padding: 8,
            borderRadius: 24 / 2,
            margin: 6,
          }}
          onPress={() => console.log("User Profile")}
        >
          <Icon source="tune" color={bgColor} size={28} />
        </TouchableOpacity>
      </View>
      <Categories />
      <TopTrip />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
const textStyles = StyleSheet.create({});

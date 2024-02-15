import {
  ScrollView,
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
} from "../../styles/Colors";
import Categories from "../../components/CategoryCard";
import TopTrip from "../../components/TopTripCard";
import GroupTrip from "../../components/GroupTripCard";

const Home = ({ info }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Location Bar */}
      <View style={styles.locationContainer}>
        <View style={styles.currentLocation}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter",
              color: inactiveColor,
              margin: 10,
            }}
          >
            Location
          </Text>
          <View style={styles.cityContainer}>
            <Icon source="map-marker" size={32} />
            <Text style={textStyles.cityText}>New York, USA</Text>
            <Icon source="chevron-down" color="gold" size={32} />
          </View>
        </View>
        <View style={{ margin: 6, alignSelf: "center" }}>
          <Icon
            source={require("../../assets/icons/bell_badge.png")}
            size={28}
          />
        </View>
      </View>
      {/* Search Bar */}
      <View style={styles.searchbarContainer}>
        <View style={styles.inputContainer}>
          <Icon source="magnify" color={inactiveColor} size={28} />
          <TextInput
            placeholder="Search"
            style={styles.textInputContainer}
            keyboardType="default"
          />
        </View>
        {/* Filter Button */}
        <TouchableOpacity
          style={styles.filterButtonContainer}
          onPress={() => console.log("User Profile")}
        >
          <Icon source="tune" color={bgColor} size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ margin: 2, padding: 1 }}
      >
        {/* Category Section */}
        <Categories />
        {/* Top Trip Section */}
        <TopTrip />
        {/* Group Trip Section */}
        <GroupTrip />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
  },
  currentLocation: {
    justifyContent: "center",
    alignItems: "start",
    padding: 4,
  },
  cityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  inputContainer: {
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
  },
  textInputContainer: {
    padding: 10,
    margin: 4,
    fontSize: 16,
    color: inactiveColor,
    flex: 1,
  },
  filterButtonContainer: {
    backgroundColor: accentColor,
    padding: 8,
    borderRadius: 24 / 2,
    margin: 6,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter",
    textAlign: "center",
  },
  cityText: { fontSize: 16, fontFamily: "Inter", color: "black" },
});

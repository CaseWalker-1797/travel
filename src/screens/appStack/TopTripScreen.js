import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import { accentColor, bgColor } from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";
import AllTopTripCard from "../../components/AllTopTripCard";

const AllTopTrip = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button & Header */}
      <View style={styles.actionBar}>
        {/* Back Button */}
        <IconButton
          icon="arrow-left"
          size={32}
          style={{ position: "absolute", left: 5 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={textStyles.headingText}>All Top Trips</Text>
      </View>
      <AllTopTripCard />
      <FlatList />
    </SafeAreaView>
  );
};

export default AllTopTrip;

const styles = StyleSheet.create({
  container: { flex: 1 },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 12,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: "black",
    textAlign: "center",
  },
});

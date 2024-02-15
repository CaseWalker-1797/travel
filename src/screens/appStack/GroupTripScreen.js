import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { accentColor, bgColor } from "../../styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import AllGroupTripCard from "../../components/AllGroupTripCard";
import { useNavigation } from "@react-navigation/native";

const AllGroupTrip = () => {
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
        <Text style={textStyles.headingText}>All Group Trips</Text>
      </View>
      <AllGroupTripCard />
      <FlatList />
    </SafeAreaView>
  );
};

export default AllGroupTrip;

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
    textAlign: "center",
  },
  titleText: { fontSize: 20, fontWeight: "bold", margin: 2 },
  commonText: { fontSize: 14, margin: 2 },
  rateText: { fontSize: 14, color: accentColor, margin: 2 },
  buttonText: { fontSize: 12, color: bgColor, margin: 2 },
});

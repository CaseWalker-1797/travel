import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AllTopTripCard from "../../components/AllTopTripCard";
import { API } from "../../API/API";
import { bgColor } from "../../styles/Colors";

const AllTopTrip = () => {
  const navigation = useNavigation();
  const renderData = ({ item }) => <AllTopTripCard item={item} />;

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
      <FlatList data={API()} renderItem={renderData} />
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
    fontWeight: "700",
    fontFamily: "Inter",
    color: "black",
    textAlign: "center",
  },
});

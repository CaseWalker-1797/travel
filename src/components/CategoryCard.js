import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { inactiveColor } from "../styles/Colors";

const Categories = () => {
  return (
    <>
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Categories</Text>
        <TouchableOpacity>
          <Text style={textStyles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Category Card */}
        <TouchableWithoutFeedback>
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={textStyles.titleText}>Lakes</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* Category Card 2 */}
        <TouchableWithoutFeedback>
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={textStyles.titleText}>Sea</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* Category Card 3 */}
        <TouchableWithoutFeedback>
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={textStyles.titleText}>Mountains</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 4,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 6,
    width: 140,
    height: "80%",
    alignItems: "center",
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: inactiveColor,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 90,
    alignSelf: "flex-start",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    flex: 1,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 13,
  },
  commonText: { fontSize: 14, margin: 2 },
  buttonText: { fontSize: 18, color: inactiveColor, margin: 2 },
});

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { inactiveColor } from "../styles/Colors";

const Categories = () => {
  return (
    <View style={styles.container}>
      {/* Category Ttile */}
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Categories</Text>
        <Text style={textStyles.buttonText}>See All</Text>
      </View>
      <ScrollView horizontal style={{}}>
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
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: { justifyContent: "center", margin: 2 },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 4,
  },
  cardContainer: {
    flexDirection: "row",
    margin: 6,
    width: 145,
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
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 14,
    margin: 10,
    textAlign: "center",
  },
  commonText: { fontSize: 14, margin: 2 },
  buttonText: { fontSize: 18, color: inactiveColor, margin: 2 },
});

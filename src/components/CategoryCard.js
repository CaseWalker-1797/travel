import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInputComponent,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  accentColor,
  bgColor,
  borderColor,
  inactiveColor,
} from "../styles/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { cat } from "../constants";

const Categories = () => {
  const [selectItem, setSelect] = useState(1);
  const [categories, setCategories] = useState([]);
  // const [click, setClick] = useState(false);
  useEffect(() => {
    setCategories(cat), [];
  });
  return (
    <>
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Categories</Text>
        <TouchableOpacity>
          <Text style={textStyles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories?.map((cat, id) => {
          let isActive = cat.id == selectItem;
          let border = isActive
            ? { borderColor: accentColor }
            : { borderColor: inactiveColor };
          let imgBack = isActive
            ? { backgroundColor: accentColor }
            : { backgroundColor: bgColor };
          let img = isActive
            ? { tintColor: bgColor }
            : { tintColor: accentColor };
          return (
            <TouchableWithoutFeedback onPress={() => setSelect(cat.id)}>
              <View style={[styles.cardContainer, border]}>
                <View style={[styles.imageContainer, imgBack]}>
                  <Image source={cat.image} style={[styles.image, img]} />
                </View>
                <View style={styles.titleContainer}>
                  <Text style={textStyles.titleText}>{cat.name}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
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
    width: "25%",
    height: "80%",
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: inactiveColor,
  },
  imageContainer: {
    borderRadius: 90,
  },
  image: {
    width: RFValue(32),
    height: RFValue(32),
    margin: 8,
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingRight: 12,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    textAlign: "center",
    color: "black",
  },
  titleText: {
    fontSize: 14,
    paddingRight: 8,
    fontFamily: "Inter",
    color: "black",
  },
  commonText: { fontSize: 14, fontFamily: "Inter", margin: 2 },
  buttonText: {
    fontSize: 18,
    fontFamily: "Inter",
    color: inactiveColor,
    margin: 2,
  },
});

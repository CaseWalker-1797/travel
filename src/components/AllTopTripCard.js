import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { accentColor, bgColor } from "../styles/Colors";
import { Icon, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItem,
  removeItem,
  selectedItems,
} from "../redux/slice/AddToLikeSlice";
import { horizontalScale, verticalScale } from "../styles/Dimensions";

const AllTopTripCard = ({ item }) => {
  const AddToLike = useSelector(selectedItems);
  const [heart, setHeart] = useState();
  const dispatch = useDispatch();
  console.log("AddToLike ==> ", JSON.stringify(AddToLike));
  // console.log("item ==> ", JSON.stringify(item));
  // console.log("state ==> ", AddToLike?.includes(item));

  return (
    <>
      {/* Trip Card */}
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.images[0] }} style={styles.image} />
        </View>
        <View style={styles.cardContentContainer}>
          {/* Title & Rating */}
          <View style={styles.titleContainer}>
            <Text style={textStyles.titleText}>{item.user.name} </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon source="star" size={20} />
              <Text style={textStyles.commonText}>4.5</Text>
            </View>
          </View>
          {/* Location */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 2,
            }}
          >
            <Text numberOfLines={2} style={{ fontSize: 14, margin: 2 }}>
              {item.comments}
            </Text>
          </View>
          {/* Rate */}
          <View style={styles.rateContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={textStyles.rateText}> {item.likes} </Text>
              <Text>/ Like</Text>
            </View>
            <IconButton
              icon={AddToLike?.includes({...item}) ? "heart" : "heart-outline"}
              iconColor={AddToLike?.includes({...item}) ? accentColor : "dimgray"}
              backgroundColor="white"
              size={24}
              onPress={() => {
                setHeart(!heart);
                if (AddToLike?.includes({ ...item }))
                  dispatch(removeItem({ id: item.id }));
                else dispatch(selectItem({ ...item }));
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default AllTopTripCard;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 12,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 6,
    padding: 8,
    alignItems: "center",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
    padding: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  imageContainer: {
    backgroundColor: bgColor,
    borderRadius: 48 / 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  image: {
    width: horizontalScale(180),
    height: "100%",
    borderRadius: 48 / 2,
  },
  cardContentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    borderRadius: 48 / 2,
    margin: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 2,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 2,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  titleText: { fontSize: 16, fontWeight: "700", margin: 2 },
  commonText: { fontSize: 14, margin: 2 },
  rateText: { fontSize: 14, color: accentColor, margin: 2 },
  buttonText: { fontSize: 12, color: bgColor, margin: 2 },
});

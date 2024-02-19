import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "react-native-axios";
import { inactiveColor, bgColor, accentColor } from "../styles/Colors";
import { Icon, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { showItem } from "../redux/slice/ShowContentSlice";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../redux/slice/AddToLikeSlice";

const TopTrip = () => {
  const AddToLike = useSelector((state) => state.addLike);
  const navigation = useNavigation();
  const [heart, setHeart] = useState();
  const dispatch = useDispatch();


  const renderData = ({ item }) => {
    return (
      <View item={item} style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item?.images[0] }} style={styles.image} />
        </View>
        <View style={styles.cardContentContainer}>
          {/* Title & Rating */}
          <View style={styles.titleContainer}>
            <Text style={textStyles.titleText}>{item.user.name}</Text>
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
          <View style={styles.locationContainer}>
            <Text numberOfLines={1} style={textStyles.commonText}>
              {item.descriptions}
            </Text>
          </View>
          {/* Rate */}
          <View style={styles.rateContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={textStyles.rateText}>{item.likes} </Text>
              <Text style={textStyles.commonText}> / Likes</Text>
            </View>
            <IconButton
              icon={AddToLike?.includes(item) ? "heart" : "heart-outline"}
              iconColor={accentColor}
              backgroundColor="white"
              size={24}
              onPress={() => {
                setHeart(!heart);
                if (AddToLike?.includes(item)) dispatch(removeItem(item));
                else dispatch(selectItem(item));
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Top Trips</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Top");
          }}
        >
          <Text style={textStyles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row" }}
        data={AddToLike}
        renderItem={renderData}
      />
    </>
  );
};

export default TopTrip;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 4,
  },
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 15,
    alignItems: "stretch",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
    padding: 12,
    shadowOffset: {
      width: 0,
      height: 2,
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
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  image: {
    width: 190,
    height: 150,
    borderRadius: 40 / 2,
  },
  cardContentContainer: {
    marginHorizontal: 6,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
  },
  locationContainer: {
    width: RFValue(120),
    alignItems: "flex-start",
    margin: 3,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 8,
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
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "black",
    margin: 3,
  },
  commonText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "black",
    margin: 3,
  },
  rateText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: accentColor,
    margin: 3,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Inter",
    color: inactiveColor,
    margin: 3,
  },
});

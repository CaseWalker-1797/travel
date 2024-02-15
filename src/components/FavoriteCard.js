import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { accentColor, bgColor } from "../styles/Colors";
import { Icon } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slice/AddToLikeSlice";

const FavoriteCard = ({ item }) => {
  const AddToLike = useSelector((state) => state.addLike);
  const dispatch = useDispatch();

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
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 2 }}>
              {item.user.name}{" "}
            </Text>
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
            <Icon source="map-marker" size={20} />
            <Text style={{ fontSize: 14, margin: 2 }}>Idaho</Text>
          </View>
          {/* Rate */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 2,
            }}
          >
            <Text style={textStyles.rateText}>$ {item.likes} </Text>
            <Text>/ Visit</Text>
          </View>
          {/* Booking Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={(AddToLike) => {
              if (AddToLike) dispatch(removeItem(item));
            }}
          >
            <Text style={textStyles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FavoriteCard;

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
    width: 180,
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
    margin: 2,
  },
  buttonContainer: {
    backgroundColor: accentColor,
    borderRadius: 12,
    margin: 2,
    padding: 2,
    width: 84,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
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

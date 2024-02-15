import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Axios from "react-native-axios";
import React, { useEffect, useState } from "react";
import { bgColor, accentColor, inactiveColor } from "../styles/Colors";
import { Icon } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ProgressBar from "react-native-progress/Bar";
import { useNavigation } from "@react-navigation/native";

const AllGroupTripCard = () => {
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    Axios.get("https://unikwork.com/instagram/api/get_data.php")
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderData = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.images[1] }} style={styles.image} />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={textStyles.titleText}>{item.user.name}</Text>
        <Text numberOfLines={1} style={[textStyles.commonText]}>
          {item.comments}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 2,
          }}
        >
          <Icon source="map-marker" size={20} />
          <Text style={textStyles.buttonText}>Idaho</Text>
        </View>
        <Image source={require("../assets/images/Group30.png")} />
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: accentColor,
              textAlign: "right",
            }}
          >
            80 %
          </Text>
          <ProgressBar
            style={{
              margin: 2,
              backgroundColor: inactiveColor,
              borderRadius: 12,
            }}
            borderWidth={0}
            color={accentColor}
            progress={0.8}
            width={RFValue(160)}
            height={8}
          />
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={info}
      renderItem={renderData}
    />
  );
};

export default AllGroupTripCard;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 4,
  },
  cardContainer: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 4,
    padding: 12,
    flexDirection: "row",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
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
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: 40 / 2,
  },
  cardContentContainer: {
    flex: 1,
    margin: 8,
    justifyContent: "space-evenly",
    alignItems: "stretch",
    borderRadius: 48 / 2,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter",
    textAlign: "center",
    color: "black",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter",
    color: "black",
    margin: 2,
  },
  commonText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "black",
    margin: 2,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Inter",
    color: inactiveColor,
    margin: 2,
  },
});

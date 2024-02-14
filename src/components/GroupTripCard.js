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
import ProgressBar from "react-native-progress/Bar";

const GroupTrip = () => {
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);

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
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 2 }}>
          {item.user.name}
        </Text>
        <Text style={[textStyles.commonText]}>{item.descriptions}</Text>
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
        <Image source={require("../asserts/images/Group30.png")} />
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
            width={225}
            height={8}
          />
        </View>
      </View>
    </View>
  );
  return (
    <>
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Group Trips</Text>
        <TouchableOpacity
          onPress={() => {
            setShow(true);
          }}
        >
          <Text style={textStyles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={show ? info : info.slice(0, 3)}
        renderItem={renderData}
      />
    </>
  );
};

export default GroupTrip;

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
    padding: 6,
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
    width: 150,
    height: 150,
    borderRadius: 40 / 2,
  },
  cardContentContainer: {
    flex: 1,
    margin: 6,
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
    textAlign: "center",
  },
  titleText: { fontSize: 20, fontWeight: "bold", margin: 2 },
  commonText: { fontSize: 14, color: inactiveColor, margin: 2 },
  buttonText: { fontSize: 18, color: inactiveColor, margin: 2 },
});

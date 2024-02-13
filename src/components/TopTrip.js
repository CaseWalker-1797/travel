import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { inactiveColor, bgColor, accentColor } from "../styles/Colors";
import { Icon, IconButton } from "react-native-paper";

const TopTrip = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={textStyles.headingText}>Top Trips</Text>
        <Text style={textStyles.buttonText}>See All</Text>
      </View>
      <ScrollView horizontal>
        {/* Trip Card */}
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              style={styles.image}
            />
          </View>
          <View style={styles.cardContentContainer}>
            {/* Title & Rating */}
            <View style={styles.titleContainer}>
              <Text style={textStyles.titleText}>Red Fish Lake</Text>
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
              <Icon source="map-marker" size={20} />
              <Text style={textStyles.commonText}>Idaho</Text>
            </View>
            {/* Rate */}
            <View style={styles.rateContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text style={textStyles.rateText}>$40 </Text>
                <Text style={textStyles.commonText}>/ Visit</Text>
              </View>
              <IconButton
                icon="heart"
                iconColor={accentColor}
                backgroundColor="white"
                size={24}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopTrip;

const styles = StyleSheet.create({
  container: { justifyContent: "center", margin: 2 },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 4,
  },
  cardContainer: {
    margin: 16,
    alignItems: "stretch",
    borderRadius: 48 / 2,
    backgroundColor: bgColor,
    padding: 8,
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
    width: 210,
    height: 180,
    borderRadius: 48 / 2,
  },
  cardContentContainer: {
    marginHorizontal: 6,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

const textStyles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: { fontSize: 16, fontWeight: "bold", margin: 3 },
  commonText: { fontSize: 14, margin: 3 },
  rateText: {
    fontSize: 14,
    color: accentColor,
    margin: 3,
  },
  buttonText: { fontSize: 18, color: inactiveColor, margin: 2 },
});

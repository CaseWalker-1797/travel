import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, IconButton } from "react-native-paper";
import { accentColor, bgColor } from "../styles/Colors";
import FavoriteCard from "../components/FavoriteCard";
import { useSelector } from "react-redux";

const Favorite = () => {
  const AddToLike = useSelector((state) => state.addLike);

  const renderData = ({ item }) => {
    return <FavoriteCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button & Header */}
      <View style={styles.actionBar}>
        {/* Back Button */}
        <IconButton
          icon="arrow-left"
          size={32}
          style={{ position: "absolute", left: 5 }}
          onPress={() => console.log("Pressed")}
        />
        <Text style={textStyles.headingText}>Saved Trips</Text>
      </View>
      {/* <ScrollView>
        <FavoriteCard />
      </ScrollView> */}
      <FlatList data={AddToLike} renderItem={renderData} />
    </SafeAreaView>
  );
};

export default Favorite;

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

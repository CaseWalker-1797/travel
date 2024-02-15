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
import { accentColor, bgColor } from "../../styles/Colors";
import FavoriteCard from "../../components/FavoriteCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Favorite = () => {
  const AddToLike = useSelector((state) => state.addLike);
  const navigation = useNavigation();

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
          onPress={() => navigation.goBack()}
        />
        <Text style={textStyles.headingText}>Saved Trips</Text>
      </View>
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

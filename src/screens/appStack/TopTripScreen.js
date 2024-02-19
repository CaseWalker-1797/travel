import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import { accentColor, bgColor } from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";
import AllTopTripCard from "../../components/AllTopTripCard";
import Axios from "react-native-axios";
import { useDispatch } from "react-redux";
import { showItem } from "../../redux/slice/ShowContentSlice";

const AllTopTrip = () => {
  const navigation = useNavigation();
  const [info, setInfo] = useState([]);
  const renderData = ({ item }) => <AllTopTripCard item={item} />;
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get("https://unikwork.com/instagram/api/get_data.php")
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(showItem(info));
  }, []);
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
        <Text style={textStyles.headingText}>All Top Trips</Text>
      </View>
      <FlatList data={info} renderItem={renderData} />
    </SafeAreaView>
  );
};

export default AllTopTrip;

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    fontWeight: "700",
    fontFamily: "Inter",
    color: "black",
    textAlign: "center",
  },
});

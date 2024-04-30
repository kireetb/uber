import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./Styles";

function PlaceRow({ data }) {
  // console.log(data.vicinity)
  conditionalRender = () => {
    if (data.description === "Home") {
      return <Entypo name="home" size={20} color={"black"} />;
    } else if (data.description === "Work") {
      return <Entypo name="briefcase" size={20} color={"black"} />;
    } else {
      return <Entypo name="location-pin" size={20} color={"black"} />;
    }
  };
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>{conditionalRender()}</View>
      <Text>{data.description || data.vicinity}</Text>
    </View>
  );
}

export default PlaceRow;

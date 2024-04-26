import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./Styles";

function PlaceRow({data}) {
  
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={20} color={"black"} />
      </View>
      <Text>{data.description}</Text>
    </View>
  );
}

export default PlaceRow;

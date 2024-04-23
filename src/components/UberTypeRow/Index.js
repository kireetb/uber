import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./Styles";
import Ionicons from "@expo/vector-icons/Ionicons";

function UberTypeRow(props) {
  const { type } = props;
  

  function getImage() {
    if (type.type === "UberX") {
      return require("../../assets/images/UberX.jpeg");
    }

    if (type.type === "Comfort") {
      return require("../../assets/images/Comfort.jpeg");
    }

    if (type.type === "UberXL") {
      return require("../../assets/images/UberXL.jpeg");
    }
    
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()}></Image>
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name="person" size={10}></Ionicons>3
        </Text>

        <Text style={styles.time}>8:30PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={14} color={"#7eef7e"}></Ionicons>
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
}

export default UberTypeRow;

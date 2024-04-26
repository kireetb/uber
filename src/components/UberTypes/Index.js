import React from "react";
import { View, Pressable, Text } from "react-native";
import UberTypeRow from "../UberTypeRow/Index";

import typesData from "../../assets/data/types";
import styles from "../UberTypes/Styles";
function UberTypes() {

  function confirm(){
    console.warn('Confirm');
  }

  return (
    <View style={styles.container}>
      {typesData.map((type) => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      {/* <UberTypeRow /> */}
      <Pressable onPress={confirm} style={styles.confirm}>
        <Text style={styles.text}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
}

export default UberTypes;

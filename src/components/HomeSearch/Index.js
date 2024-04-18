import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function HomeSearch() {
  return (
    <View>
      
      {/* input box */}
      <View style={styles.inputBox}>
      <Text>Where To?</Text>
        <Text style={styles.inputText} />
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      {/* previous destination/ last HomeSearch */}
      {/* home destination */}
    </View>
  );
}

export default HomeSearch;

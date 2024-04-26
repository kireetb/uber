import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome"

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
      <View style={styles.lastSearch}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={16} color={'#ffffff'}/>
        </View>
        <Text style={styles.searchName}>Spin Nightclub</Text>
      </View>

      {/* home destination */}
      <View style={styles.lastSearch}>
        <View style={[styles.iconContainer,{backgroundColor:'#2b80ff'}]}>
          <FontAwesome name="home" size={16} color={'#ffffff'}/>
        </View>
        <Text style={styles.searchName}>Home</Text>
      </View>
    </View>
  );
}

export default HomeSearch;

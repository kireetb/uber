import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./Styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  };

  return (
    <View>
      {/* input box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </Pressable>

      {/* previous destination/ last HomeSearch */}
      <View style={styles.lastSearch}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={16} color={"#ffffff"} />
        </View>
        <Text style={styles.searchName}>Spin Nightclub</Text>
      </View>

      {/* home destination */}
      <View style={styles.lastSearch}>
        <View style={[styles.iconContainer, { backgroundColor: "#2b80ff" }]}>
          <FontAwesome name="home" size={16} color={"#ffffff"} />
        </View>
        <Text style={styles.searchName}>Home</Text>
      </View>
    </View>
  );
}

export default HomeSearch;

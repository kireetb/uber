import React from "react";
import { View, Text, Dimensions } from "react-native";
import HomeMap from "../../components/HomeMap/Index";
import CovidMessage from "../../components/CovidMessage/Index";
import HomeSearch from "../../components/HomeSearch/Index";
import styles from "./Styles";

function HomeScreen() {
  return (
    <View>
      <HomeMap />

      <View style={styles.container}>
        {/* Covid component */}
        <CovidMessage />

        {/* Bottom component */}
        <HomeSearch />
      </View>
    </View>
  );
}

export default HomeScreen;

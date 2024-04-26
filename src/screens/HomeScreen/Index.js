import React from "react";
import { View, Text, Dimensions } from "react-native";
import HomeMap from "../../components/HomeMap/Index";
import CovidMessage from "../../components/CovidMessage/Index";
import HomeSearch from "../../components/HomeSearch/Index";

function HomeScreen() {
  return (
    <View>
      <HomeMap />

      
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        {/* Covid component */}
        <CovidMessage />

        {/* Bottom component */}
        <HomeSearch />
      </View>
    </View>
  );
}

export default HomeScreen;

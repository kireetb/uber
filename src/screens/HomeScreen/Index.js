import React from "react";
import { View, Text } from "react-native";
import HomeMap from "../../components/HomeMap/Index";
import CovidMessage from "../../components/CovidMessage/Index";
import HomeSearch from "../../components/HomeSearch/Index";

function HomeScreen() {
  return (
    <View>
      <HomeMap/>
    {/* Covid message */}
    <CovidMessage/>
    {/* Bottom component */}
    <HomeSearch/>
    </View>
  );
}

export default HomeScreen;

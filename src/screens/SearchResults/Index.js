import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeMap from "../../components/HomeMap/Index";
import UberTypes from "../../components/UberTypes/Index";

function SearchResults() {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
}

export default SearchResults;

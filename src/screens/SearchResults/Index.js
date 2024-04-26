import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import UberTypes from "../../components/UberTypes/Index";
import RouteMap from "../../components/RouteMap/Index";

function SearchResults() {
  return (
    <View>
      <RouteMap />
      <UberTypes />
    </View>
  );
}

export default SearchResults;

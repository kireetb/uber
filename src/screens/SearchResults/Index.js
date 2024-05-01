import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import UberTypes from "../../components/UberTypes/Index";
import RouteMap from "../../components/RouteMap/Index";

import { useRoute } from "@react-navigation/native";

function SearchResults(props) {
  const route = useRoute();
  const originPlace = route.params.sourceDetails.details.geometry.location
  const destinationPlace = route.params.destinationDetails.details.geometry.location

  return (
    <View>
      <RouteMap origin={originPlace} destination={destinationPlace}/>
      <UberTypes />
    </View>
  );
}

export default SearchResults;

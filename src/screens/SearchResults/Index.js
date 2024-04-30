import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import UberTypes from "../../components/UberTypes/Index";
import RouteMap from "../../components/RouteMap/Index";

import { useRoute } from "@react-navigation/native";

function SearchResults({ props }) {
  const route = useRoute();
  // console.log(route.params);
  return (
    <View>
      <RouteMap origin={route.params.sourceDetails.details.geometry.location} destination={route.params.destinationDetails.details.geometry.location}/>
      <UberTypes />
    </View>
  );
}

export default SearchResults;

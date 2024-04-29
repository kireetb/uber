import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen/Index";
import DestinationSearch from "./src/screens/DestinationSearch/Index";
import SearchResults from "./src/screens/SearchResults/Index";
import RouteMap from "./src/components/RouteMap/Index";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // This effect is triggered ONLY once when the app is started
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // text contains the json object as string which contains the location details
    text = JSON.stringify(location);
    console.log(text);
  }

  return (
    <View>
      <StatusBar style="auto" />

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      <HomeScreen/> 

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <DestinationSearch /> */}

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <SearchResults/>   */}
    </View>
  );
}

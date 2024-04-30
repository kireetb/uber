import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Router from "./src/navigation/root";
import * as Location from "expo-location";
import "react-native-gesture-handler";

export default function App() {
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // // This effect is triggered ONLY once when the app is started
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   // text contains the json object as string which contains the location details
  //   text = JSON.stringify(location);
  //   console.log(text);
  // }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <HomeScreen/>  */}

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <DestinationSearch /> */}

      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <SearchResults/>   */}

      <Router />
    </View>
  );
}

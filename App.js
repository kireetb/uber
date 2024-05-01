import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Router from "./src/navigation/root";
import * as Location from "expo-location";
import "react-native-gesture-handler";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import { withAuthenticator } from "@aws-amplify/ui-react-native";

function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // This effect is triggered ONLY once when the app is started
  // Ask permission, only if location not enabled otherwise continue app
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
    console.log(text);
  } else if (location) {
    // text contains the json object as string which contains the location details
    text = JSON.stringify(location);
    console.log("Current Geolocation: ", text);
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Router />
    </View>
  );
}

export default withAuthenticator(App);

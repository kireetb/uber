import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./Styles";

function DestinationSearch() {
  const [destinationDetails, setDestinationDetails] = useState();
  const [sourceDetails, setSourceDetails] = useState();

  useEffect(() => {
    console.warn("useEffect is called");
    if (sourceDetails && destinationDetails) {
      console.warn("Redirect to new navigation");
    }
  }, [sourceDetails, destinationDetails]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.textInput }}
          placeholder="From"
          onPress={(data, details = null) => {
            setSourceDetails({ data, details });
            console.log(details.geometry.location);
          }}
          fetchDetails
          query={{
            key: "AIzaSyDoNKeY4ZDwL7Z0W93wDMha9MwXyoBKsVg",
            language: "en",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.textInput }}
          placeholder="Where To?"
          onPress={(data, details = null) => {
            setDestinationDetails({ data, details });
            console.log(details.geometry.location);
          }}
          fetchDetails
          query={{
            key: "AIzaSyDoNKeY4ZDwL7Z0W93wDMha9MwXyoBKsVg",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;

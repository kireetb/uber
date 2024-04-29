import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./Styles";
import PlaceRow from "./PlaceRow";
import * as Location from "expo-location";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


function DestinationSearch() {
  const [destinationDetails, setDestinationDetails] = useState();
  const [sourceDetails, setSourceDetails] = useState();

  Location.installWebGeolocationPolyfill();

  useEffect(() => {
    console.warn("useEffect is called");
    if (sourceDetails && destinationDetails) {
      console.warn("Redirect to new navigation");
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.initContainer}>
        {/* ## This block takes in input for the source */}
        <GooglePlacesAutocomplete
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: { position: "absolute", top: 20, left: 10, right: 10 },
            listView: {
              position: "absolute",
              top: 115,
            },
          }}
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
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          enablePoweredByContainer={false}
          predefinedPlaces={[homePlace, workPlace]}
        />

        {/* ## This block takes in input for the destination */}
        <GooglePlacesAutocomplete
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: { position: "absolute", top: 75, left: 10, right: 10 },
          }}
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
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          enablePoweredByContainer={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;

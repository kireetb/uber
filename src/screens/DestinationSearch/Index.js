import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./Styles";
import PlaceRow from "./PlaceRow";

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
      <View style={styles.initContainer}>
        {/* ## This block takes in input for the source */}
        <GooglePlacesAutocomplete
          suppressDefaultStyles
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
          enablePoweredByContainer={false}
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
          enablePoweredByContainer={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;

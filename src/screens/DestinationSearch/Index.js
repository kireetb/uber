import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import styles from "./Styles";

function DestinationSearch() {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where"
        />
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;

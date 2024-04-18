import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";


function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        To print the name of the current working directory, use the command pwd
        . As this is the first command that you have executed in Bash in this
        session, the result of the pwd is the full path to your home directory.
        The home directory is the default directory that you will be in each
        time you start a new Bash session.
      </Text>
    </View>
  );
}

export default CovidMessage;

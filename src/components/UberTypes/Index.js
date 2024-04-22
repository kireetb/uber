import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import UberTypeRow from "../UberTypeRow/Index";

import typesData from "../../assets/data/types";
function UberTypes() {
  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} key={type.id}/>
      ))}
      {/* <UberTypeRow /> */}
    </View>
  );
}

export default UberTypes;

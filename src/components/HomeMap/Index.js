import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import cars from "../../assets/data/cars";

function HomeMap() {
  function getImage(type) {
    if (type === "UberX") {
      return require("../../assets/images/top-UberX.png");
    }

    if (type === "Comfort") {
      return require("../../assets/images/top-Comfort.png");
    }

    if (type === "UberXL") {
      return require("../../assets/images/top-UberXL.png");
    }
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{ height: "100%", width: "100%" }}
      region={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      {cars.map((car) => (
        <Marker
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
          key={car.id} // This is to avoid the warning 'each child in the list should have a unique key prop'
        >
          <Image
            style={{ height: 50, width: 50, resizeMode: "contain" }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}

    </MapView>
  );
}

export default HomeMap;

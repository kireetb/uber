import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

function RouteMap() {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyDoNKeY4ZDwL7Z0W93wDMha9MwXyoBKsVg";

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{ height: "100%", width: "100%" }}
      showsUserLocation={true}
      region={{
        latitude: 37.3318456,
        longitude: -122.0296002,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
    </MapView>
  );
}

export default RouteMap;

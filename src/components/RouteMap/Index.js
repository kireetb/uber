import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

function RouteMap(props) {
  
  const origin = { latitude: props.origin.lat, longitude: props.origin.lng };
  const destination = { latitude: props.destination.lat, longitude: props.destination.lng };
  const GOOGLE_MAPS_APIKEY = "AIzaSyDoNKeY4ZDwL7Z0W93wDMha9MwXyoBKsVg";

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{ height: "100%", width: "100%" }}
      showsUserLocation={true}
      region={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
    </MapView>
  );
}

export default RouteMap;

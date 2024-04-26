import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen/Index';
import DestinationSearch from './src/screens/DestinationSearch/Index';
import SearchResults from './src/screens/SearchResults/Index';
import RouteMap from './src/components/RouteMap/Index';


export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* ## This has been built, just commented to test other components, however, not tied with other components */}
      {/* <HomeScreen/>  */}
      {/* <DestinationSearch/> ## This has been built, just commented to test other components, however, not tied with other components*/}
      <SearchResults/>  
    </View>
  );
}


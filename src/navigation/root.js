import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/Index";
import DestinationSearch from "../screens/DestinationSearch/Index";
import SearchResults from "../screens/SearchResults/Index";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DestinationSearch" component={DestinationSearch}/>
        <Stack.Screen name="SearchResults" component={SearchResults}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default RootNavigator;

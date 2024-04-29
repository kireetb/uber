import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/Index';

function RootNavigator() {
  return (
    <NavigationContainer>
        <HomeScreen/>
    </NavigationContainer>
  );
}

export default RootNavigator;
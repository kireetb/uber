import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen/Index';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen/>
    </View>
  );
}


import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestResults from './pages/Sarah/TestResults';

const TestResultsScreen = () => (
  <View>
    <TestResults />
  </View>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TestResults" component={TestResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
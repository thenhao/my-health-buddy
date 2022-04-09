import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestResults from './pages/Sarah/TestResults';

const FruitScreen = () => (
  <View>
    <Text>Fruit</Text>
  </View>
);

const VegScreen = () => (
  <View>
    <Text>Veg</Text>
  </View>
);

const TestResults = () => (
  <View>
    <TestResults />
  </View>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fruit" component={FruitScreen} />
        <Stack.Screen name="Veg" component={VegScreen} />
        <Stack.Screen name="TestResults" component={TestResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
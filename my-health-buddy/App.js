import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/Tianhao/loginScreen";

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Fruit" component={FruitScreen} />
    //     <Stack.Screen name="Veg" component={VegScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <LoginScreen/>
  );
}
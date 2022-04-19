import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./pages/Tianhao/loginScreen";
import WelcomeScreen from "./pages/Tianhao/welcomeScreen";
import TestResults from './pages/Sarah/TestResults';
import ViewMC from "./pages/Regina/view-mc";
import HealthArticles from "./pages/Jeffery/HealthArticles"
import HealthArticleSolo from "./pages/Jeffery/HealthArticleSolo"


const TestResultsScreen = () => {
  return (
    <View>
      <TestResults />
    </View>
  );
}

const ViewMCScreen = () => {
  return (
    <View>
      <ViewMC />
    </View>
  );
}

const ViewLoginScreen = () => {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreenMain">
        <Stack.Screen name="LoginScreenMain" component={LoginScreen} />
        <Stack.Screen name="TestResultsTest" component={TestResults} />
        <Stack.Screen name="WelcomeScreenTest" component={WelcomeScreen} />
        <Stack.Screen name="HealthTips" component={HealthArticles} />
        <Stack.Screen name="HealthArticleSolo" component={HealthArticleSolo} />
        <Stack.Screen screenOptions={{ headerShown: false }} name="ViewMCTest" component={ViewMC} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
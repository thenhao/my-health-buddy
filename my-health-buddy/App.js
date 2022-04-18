import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./pages/Tianhao/loginScreen";
import WelcomeScreen from "./pages/Tianhao/welcomeScreen";
import TestResults from './pages/Sarah/TestResults';
import ViewMC from "./pages/Regina/view-mc";


const TestResultsScreen = () => {
  return(
    <View>
      <TestResults />
    </View>
  );
}

const ViewMCScreen = () => {
  return(
    <View>
      <ViewMC />
    </View>
  );
}

const ViewLoginScreen = () => {
  return(
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );  
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={ViewLoginScreen} />
        <Stack.Screen name="TestResultsTest" component={TestResults} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="ViewMCTest" component={ViewMC} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeScreen}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    // borderWidth:1
  }
});
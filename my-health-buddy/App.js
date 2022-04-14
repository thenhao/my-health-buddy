import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./pages/Tianhao/loginScreen";
import TestResults from './pages/Sarah/TestResults';
import ViewMC from "./pages/Regina/view-mc";

const TestResultsScreen = () => (

    <View>
      <TestResults />
    </View>
);


const ViewMCScreen = () => {
    <View>
      <ViewMC />
    </View>
}

// const TestResultsScreen = () => {
//   return(
//     <View>
//       <TestResults />
//     </View>
//   );
// }

// const ViewMCScreen = () => {
//   return(
//     <View>
//       <ViewMC />
//     </View>
//   );
// }

const ViewLoginScreen = () => {
  return(
    <View>
      <LoginScreen/>
    </View>
  );  
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreenMain">
        <Stack.Screen name="LoginScreenMain" component={LoginScreen} />
        <Stack.Screen name="TestResults" component={TestResultsScreen} />
        <Stack.Screen name="ViewMC" component={ViewMCScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
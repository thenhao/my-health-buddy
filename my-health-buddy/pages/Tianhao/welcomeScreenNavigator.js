// import React, { useEffect, useRef, useState } from "react";
// import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated, FlatList} from "react-native";
// import { TextInput ,Text, ActivityIndicator, BottomNavigation, Card} from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import LottieView from "lottie-react-native";
// import { useNavigation } from "@react-navigation/native";
// import WelcomeScreen from "./welcomeScreen";
// import TestResults from '../Sarah/TestResults';
// import ViewMC from "../Regina/view-mc";


// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const HomeStackScreen = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="WelcomeScreenTest">
//         {/* <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeScreenNavigator}/> */}
//         <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeScreen}/>
//         <Stack.Screen name="TestResultsTest" component={TestResults} />
//         <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="ViewMCTest" component={ViewMC} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );  
// }


// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }



// export default function WelcomeScreenNavigator() {
//   return (

//     <NavigationContainer initialRouteName="Home">
//         <Tab.Navigator>
//           <Tab.Screen options={{headerShown: false, gestureEnabled: false}} name="Home" component={HomeStackScreen} />
//           <Tab.Screen options={{headerShown: false, gestureEnabled: false}} name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'white',
//     width:'100%',
//     height:'100%',
//     // borderWidth:1
//   }
// });
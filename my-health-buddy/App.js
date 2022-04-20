import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from "./pages/Tianhao/loginScreen";
import WelcomeScreen from "./pages/Tianhao/welcomeScreen";
import TestResults from './pages/Sarah/TestResults';
import ViewMC from "./pages/Regina/view-mc";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute} from "@react-navigation/native";
import ProfileScreen from "./pages/Tianhao/profileScreen";
import CarouselCards from "./pages/Shaun/carouselCards";

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
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );  
}

// const Tab = createBottomTabNavigator();
// const HomeStackScreen = () => {
//   return(
//       <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'home'
//               : 'home-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'ios-person-circle-outline' : 'ios-person-circle';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#33C3B9',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//           <Tab.Screen options={{headerShown: false, gestureEnabled: false}} name="Home" component={WelcomeHomeStackScreen}/>
//           <Tab.Screen options={{headerShown: false, gestureEnabled: false}} name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>

//   );  
// }

const WelcomeHomeStack = createNativeStackNavigator();
const WelcomeHomeStackScreen = () => {
  
  return(
      <WelcomeHomeStack.Navigator initialRouteName="WelcomeScreenTest2">
        {/* <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeScreenNavigator}/> */}
        <WelcomeHomeStack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest2" component={WelcomeScreen} />
        <WelcomeHomeStack.Screen options={{headerShown: false, gestureEnabled: false}} name="TestResultsTest" component={TestResults} />
        <WelcomeHomeStack.Screen options={{headerShown: false, gestureEnabled: false}} name="ViewMCTest" component={ViewMC} />
        <WelcomeHomeStack.Screen options={{headerShown: false, gestureEnabled: false}} name="EatingHealthy" component={CarouselCards} />
        <WelcomeHomeStack.Screen options={{headerShown: false, gestureEnabled: false}} name="Profile" component={ProfileScreen} />
      </WelcomeHomeStack.Navigator>
  );  
}

// function ProfileStackScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
//need to do stack navigator within a tab navigator
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeHomeStackScreen}/>
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={ViewLoginScreen} />
        {/* <Stack.Screen name="TestResultsTest" component={TestResults} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="ViewMCTest" component={ViewMC} /> */}
        {/* <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="WelcomeScreenTest" component={WelcomeScreen}/> */}
        
        
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
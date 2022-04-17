import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import logoutImg from "./assets/loginIcon.jpeg"
import LogoutButton from "./logout";

export default function WelcomeScreen() {

    const navigation = useNavigation();

    function handleViewMc(){
        navigation.navigate("ViewMCTest");
    }

    function handleViewTestResults(){
        navigation.navigate("TestResultsTest");
    }

    function handleViewHealthTips(){
        //navigation.navigate("HealthTips");
    }

    function handleLogout(){
      navigation.navigate("LoginScreen");
  }
    

    return(
      <>
      {/* View to load the two layer of the screen*/}
        <View style={styles.upperContainer}></View>
        <View style={styles.lowerContainer}></View>

        <SafeAreaView style={styles.navigationContainer}>

            <Text style={styles.titleText}>Welcome to Good For Health</Text>

            {/* <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}> */}
            {/* button for logout */}
                {/* <Text style={styles.text}>View MC</Text> */}
                {/* <Ionicons name="ios-person-circle-outline" size={50} color="white"/>
            </TouchableOpacity> */}
            <LogoutButton/>

            <TouchableOpacity style={styles.loginBtn} onPress={handleViewMc}>
            {/* button to for View MC */}
                <Text style={styles.text}>View MC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleViewTestResults}>
            {/* button to for View Test Results */}
                <Text style={styles.text}>View Test Results</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleViewHealthTips}>
            {/* button to for View Health Tips */}
                <Text style={styles.text}>View Health Tips</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </>
      );
}




      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'#00ffff',
        },
        upperContainer: {
          backgroundColor:'#33C3B9',
          width:'100%',
          height: '40%'
        },
        lowerContainer: {
          backgroundColor:'white',
          width:'100%',
          height: '60%',
        },
        navigationContainer: {
          position: 'absolute',
          marginTop: '0%',
          width: '100%',
          borderWidth: 1
        },
        titleText: {
            fontSize: 40,
            fontWeight: 'bold',
            color:'white',
            width: '70%',
            padding:'5%',
            alignContent:'center',
            justifyContent: 'center',
            marginTop:'5%'
            // borderWidth:1
        },
        logoutBtn:{
          width:'18%',
          //borderRadius:25,
          //height:50,
          alignItems:"center",
          justifyContent:"center",
          marginTop:'11%',
          marginLeft:'80%',
          // borderWidth: 1,
          position: "absolute"
          // backgroundColor:"#33C3B9",
      },
        text: {
          fontSize: 18,
          fontWeight: 'bold',
          color:'white',
        },
        image: {
            height:'10%',
            width:'10%'
          },
        errorText: {
            width:'50%',
            marginTop:10,
            fontSize: 18,
            color:'red',
            alignItems:'center'
          },
          errorTextSummary: {
            width:'90%',
            marginTop:20,
            paddingLeft:15,
            fontSize: 18,
            color:'red',
            alignItems:'center'
          },
        input: {
            margin: 8,
            paddingBottom: 3,
            fontSize: 20
          },
          loginBtn:{
            width:"94%",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10,
            marginLeft:12,
            backgroundColor:"#33C3B9",
        },
        animation: {
          marginTop:'5%',
          marginBottom:'0%',
          width: '50%',
          height: '70%',
          marginLeft:'0.5%'
        },
        indicator: {
          width: '100%',
          height: '100%',
          padding: '0%',
          margin: '0%',
          paddingTop: '90%',
          position:"absolute",
        },
      });
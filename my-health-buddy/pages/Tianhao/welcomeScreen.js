import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

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
    

    return(
        <SafeAreaView>
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
      );
}




      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'white',
        },
        ModalContainer: {
          color:'white',
          backgroundColor:'white',
          width:'100%',
          height: '90%',
          justifyContent:"center"
        },
        userAndPasswordContainer: {
            flexDirection:"row",
            flexWrap:"wrap",
            alignItems:'center',
            paddingLeft:10,
            // paddingBottom:28,
            // borderWidth:1
        },
        userAndPasswordContainerEmpty: {
          width: '100%',
          height: '4.2%',
      },
        text: {
          fontSize: 18,
          fontWeight: 'bold',
          color:'white'
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
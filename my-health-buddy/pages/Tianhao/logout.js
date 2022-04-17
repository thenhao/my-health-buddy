import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import logoutImg from "./assets/loginIcon.jpeg"

export default function LogoutButton() {

    const navigation = useNavigation();

    function handleLogout(){
      navigation.navigate("LoginScreen");
  }
    

    return(
      <>
      {/* View to load the two layer of the screen*/}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        {/* button for logout */}
            {/* <Text style={styles.text}>View MC</Text> */}
            <Ionicons name="ios-person-circle-outline" size={50} color="white"/>
        </TouchableOpacity>
      </>
      );
}


const styles = StyleSheet.create({
    logoutBtn:{
      width:'18%',
      alignItems:"center",
      justifyContent:"center",
      marginTop:'11%',
      marginLeft:'80%',
      position: "absolute"
  },
  });
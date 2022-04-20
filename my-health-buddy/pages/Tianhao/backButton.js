import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import logoutImg from "./assets/loginIcon.jpeg"

export default function BackButton() {

    const navigation = useNavigation();

    function handleBack(){
      navigation.goBack();
    }
    

    return(
      <>
      {/* View to load the two layer of the screen*/}
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
        {/* button for goback */}
            <Ionicons name="caret-back-circle-sharp" size={50} color="white"/>
        </TouchableOpacity>
      </>
      );
}


const styles = StyleSheet.create({
    backBtn:{
      width:'18%',
      alignItems:"center",
      justifyContent:"center",
      marginTop:'9%',
      marginLeft:'0.5%',
      position: "absolute"
  },
  });
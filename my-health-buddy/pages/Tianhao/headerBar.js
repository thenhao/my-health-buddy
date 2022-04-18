import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, Animated, FlatList} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation, Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import logoutImg from "./assets/loginIcon.jpeg"
import mcBanner from "./assets/mcbanner.jpeg"
import mc from "./assets/mc.jpeg"
import templateMc from "./assets/templatemc.jpeg"
import testMc from "./assets/testmc.png"
import LogoutButton from "./logout";
import BackButton from "./backButton";



export default function HeaderBar() {  
    
    // const navigation = useNavigation();

    // function handleBack(){
    //   navigation.goBack();
    // }



    return(
      <>
      {/* View to load the two layer of the screen*/}
        <View style={styles.upperContainer}>
            {/* back button here */}
            <BackButton/>
            {/* logout button here */}
            <LogoutButton/>
        </View>
    </>
    );
}




      const styles = StyleSheet.create({
        container: {
          flex: 1,
          //borderWidth:1,
          position:'absolute',
          width:'95%',
          height:'90%',
          marginLeft:'3%',
          marginTop: '0%'
          //marginTop: StatusBar.currentHeight || 0,
        },
        upperContainer: {
          backgroundColor:'#33C3B9',
          width:'100%',
          height: '13%'
        },
        
      });
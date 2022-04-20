import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import logoutImg from "./assets/loginIcon.jpeg"
import HeaderBar from "./headerBar";

export default function ProfileScreen() {
    const [fromBack, setFromBack] = useState(false);
    const route = useRoute();
    console.log(route);
    useEffect(() => { 
        
        if(route.params === undefined){
            console.log('profile screen: route value not received');
            setFromBack(false);
        }else{
            console.log('profile screen:route has value and not undefined');
            setFromBack(route.params.pressed);
        };
        
    }, [route]);
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'OpenSans-Bold': require('../../src/assets/fonts/OpenSans-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    function handleLogout(){
        // navigation.navigate("Home", {screen:"LoginScreen" ,params:{user: defaultValue, pass: defaultValue, logout:true}});
        // navigation.navigate("LoginScreen", {screen:"LoginScreen",initial: false,});
        navigation.navigate("LoginScreen",{user: 'abc', pass: '123', logout:true});//defaultValue
        // navigation.push('LoginScreen');
    }
    

    return(
      <>
        {/* <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            <Ionicons name="caret-back-circle-sharp" size={50} color="white"/>
        </TouchableOpacity> */}
        <HeaderBar />
        <SafeAreaView style={styles.container}>
            
            <Image source={{uri:'https://i.ibb.co/31bnJJN/logo.jpg'}} style={{width:190, height: 120, justifyContent: 'center', alignSelf:'center'}}></Image>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
            {/* button to settings */}
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
            {/* button to help */}
                <Text style={styles.text}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
            {/* button to support */}
                <Text style={styles.text}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
            {/* button to logout */}
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>    
      </>
      );
}


const styles = StyleSheet.create({
   container: {
        flex: 1,
        position:'absolute',
        width:'100%',
        height:'90%',
        marginTop:'28%',
        // marginLeft:'3%',
        backgroundColor: '#fdfdfd'
  },
  headerG:{
    // marginBottom:'1%',
    marginTop:'1%',
    color:'#33C3B9'
},
  headerW:{
    //   marginBottom:'1%',
    marginTop:'1%',
      color:'white'
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color:'white'
  },
  // backBtn:{
  //     width:'18%',
  //     alignItems:"center",
  //     justifyContent:"center",
  //     marginTop:'9%',
  //     marginLeft:'0%',
  //     position: "absolute"
  // },
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
  });
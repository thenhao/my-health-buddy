import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated, FlatList} from "react-native";
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
const testMcImageUri = Image.resolveAssetSource(testMc).uri
// const testMc = require("./assets/testmc.png");

const IMAGES = [{mcImage: require('./assets/testmc.png')}]

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'View MC',
    link: require('./assets/mcIcon.jpg'),
    page: 'ViewMCTest'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'View Test Results',
    link:require('./assets/testresults.png'),
    page: 'TestResultsTest'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'View Health Tips',
    link: require('./assets/healthtips.jpg'),
    page: 'HealthTips'
  },
];

const Item = ({ title, link, onPress }) => (
  
  <TouchableOpacity 
  // style={styles.loginBtn} 
  onPress={onPress}>
    <View 
     style={styles.item}
    >
      {/* source={{uri:'https://i.ibb.co/31bnJJN/logo.jpg'}} */}
      <Image source={link} style={{width:300, height: 250, paddingLeft:'5%'}}></Image>
      <View style={styles.title}>
          <Text 
           style={styles.titleWording}
          >{title}</Text>
      </View>
    </View>
   </TouchableOpacity>
);

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export default function WelcomeScreen({route}) {
    const {user} = route.params;
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

  
  
  const renderItem = ({ item }) => (
      <Item
        item={item}
        title={item.title}
        link={item.link}
        onPress={() => navigation.navigate(item.page)}
      />
  );

    return(
      <>
      {/* View to load the two layer of the screen*/}
        <View style={styles.upperContainer}></View>
        <View style={styles.lowerContainer}></View>
        

                  {/* <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}> */}
                  {/* button for logout */}
                      {/* <Text style={styles.text}>View MC</Text> */}
                      {/* <Ionicons name="ios-person-circle-outline" size={50} color="white"/>
                  </TouchableOpacity> */}
                  
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleTextUser}>Welcome To G4Health</Text>
      <Text style={styles.titleText}>{user}</Text>
      <LogoutButton/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        
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
          marginLeft:'3%'
          // marginTop: '40%'
          //marginTop: StatusBar.currentHeight || 0,
        },
        item: {
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          //borderWidth:1
        },
        title: {
          width:'100%',
          borderWidth:1,
          borderColor:'#33C3B9',
          //fontSize: 32,
          //fontWeight: 'bold',
          //color:'#33C3B9',
          paddingTop:"2%",
          marginTop:'2%',
          alignSelf:'center',
          alignItems:'center',
          alignContent:"center",
          justifyContent:"center"
          
        },
        titleWording: {
          // borderWidth:1,
          fontSize: 32,
          fontWeight: 'bold',
          color:'#33C3B9',
        },
        // container: {
        //   flex: 1,
        //   backgroundColor:'#00ffff',
        // },
        scrollViewContainer: {
          height:'50%',
          borderWidth: 1,
        },
        upperContainer: {
          backgroundColor:'#33C3B9',
          width:'100%',
          height: '20%'
        },
        lowerContainer: {
          backgroundColor:'#f8f8ff',
          backgroundColor:'white',
          width:'100%',
          height: '80%',
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
            // padding:'5%',
            alignContent:'center',
            justifyContent: 'center',
            // marginTop:'5%',
            marginBottom:'5%'
            // borderWidth:1
        },
        titleTextUser:{
            fontSize: 38,
            fontWeight: 'bold',
            color:'white',
            width: '100%',
            // padding:'5%',
            alignContent:'center',
            justifyContent: 'center',
            marginTop:'5%',
            // marginBottom:'5%'
             //borderWidth:1
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
      cardDimension:{
        width:"94%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft:12,
        backgroundColor:"white",
    },
    cardText: {
      width:"78%",
      fontSize: 18,
      fontWeight: 'bold',
      color:'white',
      backgroundColor:"#33C3B9",
      borderWidth:1,
      height:50,
      paddingLeft:"28%",
      paddingTop:"3%",
      alignContent:"center",
      justifyContent:"center",
      // alignSelf:"center",
      // alignItems: "center"
      // marginTop:10,
      // marginLeft:12  
    },
    cardTextContainer: {
      width:"100%",
      height:'25%',
      borderRadius:25,
      // fontSize: 18,
      // fontWeight: 'bold',
      // color:'white',
      backgroundColor:"#33C3B9",
      borderWidth:1,
      // height:50,
      // paddingLeft:"20%",
      // alignContent:"center",
      // justifyContent:"center",
      // alignSelf:"center",
      // alignItems: "center"
      // marginTop:10,
      // marginLeft:12  
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
            marginBottom:'50%',
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
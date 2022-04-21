import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { Modal, Portal, Text, Provider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import logoutImg from "./assets/logout.png"
import HeaderBar from "./headerBar";

export default function ProfileScreen() {

    //for back button pressed state
    const [fromBack, setFromBack] = useState(false);
    //For modalshowing and hiding  
    const [visible, setVisible] = useState(false); 

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

    function handleLogout(){
      // navigation.navigate("Home", {screen:"LoginScreen" ,params:{user: defaultValue, pass: defaultValue, logout:true}});
      // navigation.navigate("LoginScreen", {screen:"LoginScreen",initial: false,});
      navigation.navigate("LoginScreen",{user: 'abc', pass: '123', logout:true});//defaultValue
      // navigation.push('LoginScreen');

      //set the modal visible to false
    }

    //font loading
    let [fontsLoaded] = useFonts({
        'OpenSans-Bold': require('../../src/assets/fonts/OpenSans-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    
    const containerStyle = {backgroundColor: 'white', padding: 20, width:'90%', marginLeft:'5%', borderRadius:25};
    
    function handleShowModal(){
      //set modal visible true
      setVisible(true);
    }

    function handleHideModal(){
      //set modal visible true
      setVisible(false);
    }
    

    return(
      <>
        {/* <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            <Ionicons name="caret-back-circle-sharp" size={50} color="white"/>
        </TouchableOpacity> */}
        <Provider>
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

              <TouchableOpacity style={styles.loginBtn} onPress={handleShowModal}>
              {/* button to logout */}
                  <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>

              <Portal>
                <Modal visible={visible} onDismiss={handleHideModal} contentContainerStyle={containerStyle}>
                  <View style={styles.logoutContainer}>
                    <Image source={logoutImg} style={{width:200, height: 200, marginTop: '10%', marginBottom: '20%', justifyContent: 'center', alignSelf:'center'}}></Image>
                    <Text style={styles.logoutTextHeader}>Are you sure ?</Text>
                      <TouchableOpacity style={styles.logoutBtnYes} onPress={handleLogout}>
                        {/* button to confirm logout */}
                        <Text style={styles.text}>Yes</Text>
                      </TouchableOpacity>

                    <TouchableOpacity style={styles.logoutBtnNo} onPress={handleHideModal}>
                      {/* button to cancel logout */}
                        <Text style={styles.logoutText}>No</Text>
                    </TouchableOpacity>
                  </View>
                  
                </Modal>
              </Portal>
          </SafeAreaView>
        </Provider>    
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
  logoutContainer: {
    // position:'absolute',
    // width:'80%',
    // height:'100%',
    // marginTop:'28%',
    // marginLeft:'3%',
    backgroundColor: '#fdfdfd',
    // borderWidth:1,
    alignItems:"center"
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
  logoutTextHeader:{
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color:'#33C3B9',
    marginBottom:"5%"
  },
  logoutText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color:'#33C3B9',
  },
   logoutBtnYes:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginLeft:'1%',
    backgroundColor:"#33C3B9",
  },
  logoutBtnNo:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginLeft:'1%',
    borderColor: "#33C3B9",
    borderWidth:1,
    backgroundColor:"#fdfdfd",
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
  });
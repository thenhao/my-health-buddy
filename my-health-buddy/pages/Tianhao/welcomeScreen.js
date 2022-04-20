<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated } from "react-native";
import { TextInput, Text, ActivityIndicator, BottomNavigation } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {

  const navigation = useNavigation();

  function handleViewMc() {
    navigation.navigate("ViewMCTest");
  }

  function handleViewTestResults() {
    navigation.navigate("TestResultsTest");
  }

  function handleViewHealthTips() {
    navigation.navigate("HealthTips");
  }


  return (
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
    backgroundColor: 'white',
  },
  ModalContainer: {
    color: 'white',
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    justifyContent: "center"
  },
  userAndPasswordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    paddingLeft: 10,
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
    color: 'white'
  },
  image: {
    height: '10%',
    width: '10%'
  },
  errorText: {
    width: '50%',
    marginTop: 10,
    fontSize: 18,
    color: 'red',
    alignItems: 'center'
  },
  errorTextSummary: {
    width: '90%',
    marginTop: 20,
    paddingLeft: 15,
    fontSize: 18,
    color: 'red',
    alignItems: 'center'
  },
  input: {
    margin: 8,
    paddingBottom: 3,
    fontSize: 20
  },
  loginBtn: {
    width: "94%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 12,
    backgroundColor: "#33C3B9",
  },
  animation: {
    marginTop: '5%',
    marginBottom: '0%',
    width: '50%',
    height: '70%',
    marginLeft: '0.5%'
  },
  indicator: {
    width: '100%',
    height: '100%',
    padding: '0%',
    margin: '0%',
    paddingTop: '90%',
    position: "absolute",
=======
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, FlatList} from "react-native";
import { Text } from 'react-native-paper';
import { useNavigation, useRoute} from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
//import ProfileScreenRedirect from "./profileScreenRedirect";


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

export default function WelcomeScreen() {
  const [name, setName] = useState('');
  //const {user} = route.params;
  const route = useRoute();
  console.log(route);
  useEffect(() => { 
    
    if(route.params === undefined){
      
      console.log('welcome screen: route value not received');
    }else{
      console.log('welcome screen:route has value and not undefined');
      setName(route.params.user);
    
    };
    
  }, [route]);
  

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
      <Item
        item={item}
        title={item.title}
        link={item.link}
        onPress={() => navigation.navigate(item.page)}
      />
  );

  let [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('../../src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return(
      <>
      {/* View to load the two layer of the screen*/}
        <View style={styles.upperContainer}></View>
        <View style={styles.lowerContainer}></View>
                  
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleTextUser}>Welcome To G4Health,</Text>
          {/* <Text style={styles.titleText}>{user}</Text> */}
          {name?<Text style={styles.titleText}>{name}!</Text>: <Text style={styles.titleText}> </Text>}
          {/* <LogoutButton/> */}
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
    position:'absolute',
    width:'95%',
    height:'100%',
    marginLeft:'3%'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    width:'100%',
    borderWidth:1,
    borderColor:'#33C3B9',
    paddingTop:"2%",
    marginTop:'2%',
    alignSelf:'center',
    alignItems:'center',
    alignContent:"center",
    justifyContent:"center"
    
  },
  titleWording: {
    fontSize: 25,
    fontFamily: 'OpenSans-Bold',
    color:'#33C3B9',
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
  titleText: {
      fontSize: 30,
      fontFamily: 'OpenSans-Bold',
      color:'white',
      width: '70%',
      alignContent:'center',
      justifyContent: 'center',
      marginBottom:'5%'
  },
  titleTextUser:{
      fontSize: 30,
      fontFamily: 'OpenSans-Bold',
      color:'white',
      width: '100%',
      alignContent:'center',
      justifyContent: 'center',
      marginTop:'5%'
>>>>>>> main
  },
});
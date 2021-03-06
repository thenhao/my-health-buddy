import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, FlatList, Platform } from "react-native";
import { Text } from 'react-native-paper';
import { useNavigation, useRoute } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ProfileScreenRedirect from "./profileScreenRedirect";
import BackPressHandler from "./backpresshandler"


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
    link: require('./assets/testresults.png'),
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
      <Image source={link} style={{ width: 200, height: 200, alignSelf: 'center' }}></Image>
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

    if (route.params === undefined) {

      console.log('welcome screen: route value not received');
    } else {
      console.log('welcome screen:route has value and not undefined');
      setName(route.params.user);

    };

  }, [route]);


  const navigation = useNavigation();

  //ref: https://infinitbility.com/how-to-disable-back-button-in-react-native
  useEffect(()=>{
    if(Platform.OS == 'android'){
      BackPressHandler();
    }
  }, []);

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

  return (
    <>
      {/* View to load the two layer of the screen*/}
      <View style={styles.upperContainer}></View>
      <View style={styles.lowerContainer}></View>

      <SafeAreaView style={styles.container}>
        <ProfileScreenRedirect />
        <Text style={styles.titleTextUser}>Welcome to G4Health,</Text>
        {/* <Text style={styles.titleText}>{user}</Text> */}
        {name ? <Text style={styles.titleText}>{name}!</Text> : <Text style={styles.titleText}> </Text>}

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
    position: 'absolute',
    width: '95%',
    height: '100%',
    marginLeft: '3%',
  },
  // item: {
  //   marginBottom:'1%'
  // },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    marginHorizontal: 16,
  },
  title: {
    width: '80%',
    backgroundColor: '#33C3B9',
    paddingVertical: "2%",
    marginTop: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  titleWording: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  upperContainer: {
    backgroundColor: '#33C3B9',
    width: '100%',
    height: '24%'
  },
  lowerContainer: {
    backgroundColor: '#f8f8ff',
    backgroundColor: 'white',
    width: '100%',
    height: '76%',
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    width: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '10%'
  },
  titleTextUser: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    width: '60%',
    paddingTop: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
});
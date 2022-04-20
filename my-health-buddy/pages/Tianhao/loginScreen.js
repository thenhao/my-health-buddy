import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Image, SafeAreaView, TouchableOpacity, Animated} from "react-native";
import { TextInput ,Text, ActivityIndicator, BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function LoginScreen() {
  //default values
  const defaultValue = '';
  //default user and password values
  const defaultUsers = [{user: 'abc', password:'123'}, {user: 'def', password:'456'}, {user: 'testuser', password:'testpassword'}];
  //password visible setting
  const [passwordVisible, setPasswordVisible] = useState(true);
  //username text setting
  const [username, setUsername] = useState('abc');//defaultValue
  const [password, setPassword] = useState('123');//defaultValue
  //error setting
  const [error, setError] = useState(false);
  //blank username check
  const [blankUser, setBlankUser] = useState(false);
  //blank password check
  const [blankPassword, setBlankPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  //modal visible/ not visible state
  const [firstTime, setfirstTime] = useState(true);
  //logoout
  const [isLogout, setIsLogout] = useState(true);


  

  function handleLogin(){

    setfirstTime(false);
    //check for blank username
    if(!username){
        setBlankUser(true);
        console.log('blank username detected');
        return;
    }
    //console.log('blank username detected');
    setBlankUser(false);

    //check for blank password
    if(!password){
        setBlankPassword(true);
        return;
    }

    setBlankPassword(false);

    setIsLoading(true);
    
    


    //handle the checking of the array of users
    const foundUser = defaultUsers.filter((userProfile)=>{
        return userProfile.user === username;
    });
    console.log(foundUser);
    if(foundUser.length > 0){
        // console.log('user is found');
        // console.log('password is', password)
        if(foundUser[0].password === password){
            console.log('password is found');
            //set found is true. // Pass it down from the app ??
            //navigate to the holding screen
            setError(false);
            setIsLogout(false);
        }else{
            console.log('password not found');
            setError(true);
        }

    }else{

        setError(true);
    }
}


  useEffect(() => {
    if(username.length > 0){
      setBlankUser(false);
    }
  },  [username]);

  useEffect(() => {
    if(password.length > 0){
      setBlankPassword(false);
    }
  },  [password]);

  useEffect(() => {
    if(isLoading===true){
      setTimeout(()=>{
        setIsLoading(false);
      },2500)
    }
  },  [isLoading]);

  //ref:https://reactnavigation.org/docs/use-navigation/
  const navigation = useNavigation();

  useEffect(() => {
    if(isLoading===false && error === false && isLogout === false){
      if(!firstTime){
        //ref:https://reactnavigation.org/docs/nesting-navigators/
        // navigation.navigate('WelcomeScreenTest', {
        //   screen: 'Home',
        //   params: {
        //     screen: 'WelcomeScreenTest2',
        //     params: {
        //       user: username,
        //     },
        //   },
        // });
        navigation.navigate('WelcomeScreenTest', {
              screen: 'WelcomeScreenTest2',
              params: {
                user: username,
              }, 
          });
      } 
    }
  },  [isLoading]);

  //ref:
  const lottieRef = useRef(null); 
  useEffect(() => { 
    if (lottieRef.current) { 
      lottieRef.current.play();
    }
    
  }, [isLoading]);

  //defining route to use it to take in params
  //this checks the routes whether it was sent or not
  //If other screen send params, route is not undefined and undefined means value not sent from other screen
  //ref:https://reactnavigation.org/docs/use-route/
  const route = useRoute();
  console.log(route);
  useEffect(() => { 
    if(route.params === undefined){
      console.log('login screen, no value passed here');
    }else{
      setIsLogout(true);
      console.log('route has value and not undefined');
      setUsername(route.params.user);
      setPassword(route.params.pass);     
    };
    
  }, [route]);

  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../../src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../../src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <>
    {
      isLoading ? (<View style = {styles.ModalContainer}>
       <LottieView source={require("./assets/loadingHealthIcon.json")}  style={styles.animation} loop renderMode={"SOFTWARE"} ref={lottieRef} /> 
       {/* <ActivityIndicator animating={true} size={120} color={'#33C3B9'} style={styles.indicator}/> */}
    </View> 
    ):(<SafeAreaView style={styles.container}>
        <Image source={{uri:'https://i.ibb.co/31bnJJN/logo.jpg'}} style={{width:190, height: 120, justifyContent: 'center', alignSelf:'center'}}></Image>
        
        {/* For username text input. Checking of blank username*/}
        <TextInput label={"Username"} mode={"outlined"} style={styles.input} placeholder={'Enter username here'} activeOutlineColor={'#33C3B9'} value={username} onChangeText={username=>setUsername(username)} error={blankUser||error}></TextInput>
        {blankUser ? <View style={styles.userAndPasswordContainer}>
            <Ionicons name="ios-information-circle" size={30} color="red"/>
            <Text style={styles.errorText}>Enter your username</Text>
        </View>
         : <View style={styles.userAndPasswordContainerEmpty}>
         
         </View> }

        {/* For password text input. Hiding of password, checking of blank password*/}
         <TextInput label={"Password"}  mode={"outlined"}  height={0} style={styles.input} placeholder={'Enter password here'} activeOutlineColor={'#33C3B9'}
        error={blankPassword||error}
        value={password} onChangeText={password=>setPassword(password)}
        secureTextEntry={passwordVisible}
        right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} ></TextInput>
        {blankPassword ? <View style={styles.userAndPasswordContainer}>   
            <Ionicons name="ios-information-circle" size={30} color="red"/>
            <Text style={styles.errorText}>Enter your password</Text>
        </View>
         : <View style={styles.userAndPasswordContainerEmpty}>
         
          </View> }

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          {/* button to login */}
            <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        {/* Error message when login is pressed */}
        {error ?
        <View style={styles.userAndPasswordContainer}>
            <Ionicons name="ios-information-circle" size={30} color="red"/>
            <Text style={styles.errorTextSummary}>Please check your username and password</Text>
        </View> : null }
    </SafeAreaView>)
    }
    </>
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
      fontFamily: 'OpenSans-Bold',
      color:'white'
    },
    image: {
        height:'10%',
        width:'10%'
      },
    errorText: {
        width:'50%',
        marginTop:10,
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        color:'red',
        alignItems:'center'
      },
      errorTextSummary: {
        width:'90%',
        marginTop:20,
        paddingLeft:15,
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        color:'red',
        alignItems:'center'
      },
    input: {
        margin: 8,
        paddingBottom: 3,
        fontSize: 20,
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
  
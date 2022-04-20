import React, { useState } from "react";
import { 
  FlatList, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Keyboard, 
  TouchableWithoutFeedback, 
  Platform,
  View
} from "react-native";
import { Searchbar, Button, Menu, Provider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons'; 

import ViewMCModal from "./view-mc-modal";
import HeaderBar from "../Tianhao/headerBar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    mc_id: '1343',
    clinic: "Long & Yun Medical Clinic",
    mc_duration: '2 days',
    formattedStartDate: '2021-12-03',
    mc_startDate: '3rd December 2021',
    mc_endDate: '4th December 2021'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    mc_id: '943',
    clinic: "Long & Yun Medical Clinic",
    mc_duration: '1 day',
    formattedStartDate: '2021-03-30',
    mc_startDate: '30th March 2021',
    mc_endDate: '30th March 2021'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    mc_id: '4509',
    clinic: "Khoo & Tan Medical Clinic",
    mc_duration: '3 days',
    formattedStartDate: '2020-05-26',
    mc_startDate: '26th May 2020',
    mc_endDate: '28th May 2020'
  },
  {
    id: "3358761d-c7d9-4b5f-8372-a218b7ffede8",
    mc_id: '3423',
    clinic: "Khoo & Tan Medical Clinic",
    mc_duration: '3 days',
    formattedStartDate: '2019-09-26',
    mc_startDate: '26th September 2019',
    mc_endDate: '28th September 2019'
  },
  {
    id: "5dfb5157-869e-4259-ba08-3a34cb4faf95",
    mc_id: '1290',
    clinic: "Oboey Medical Clinic",
    mc_duration: '2 days',
    formattedStartDate: '2019-06-14',
    mc_startDate: '14th June 2019',
    mc_endDate: '14th June 2019'
  },
  {
    id: "35c53d0b-fd2d-45d4-98be-94c31c0d85f1",
    mc_id: '8922',
    clinic: "S&S Medical Clinic",
    mc_duration: '1 day',
    formattedStartDate: '2019-01-12',
    mc_startDate: '12th January 2019',
    mc_endDate: '13th January 2019'
  },
  {
    id: "8716c05a-0698-4ac9-821c-d54ac7354a2d",
    mc_id: '7816',
    clinic: "S&S Medical Clinic",
    mc_duration: '5 days',
    formattedStartDate: '2018-07-12',
    mc_startDate: '12th July 2018',
    mc_endDate: '16th July 2018'
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor, modalVisible, setModalVisible, selectedId, setSelectedId }) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>ID: {item.mc_id}  {'\n'}{item.clinic} {'\n'}{item.mc_startDate}</Text>
    </TouchableOpacity>
    {item.id === selectedId && 
      <ViewMCModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        setSelectedId={setSelectedId}
        itemId={item.id} mcId={item.mc_id} 
        clinic={item.clinic} 
        mcDuration={item.mc_duration} 
        mcStart={item.mc_startDate} 
        mcEnd={item.mc_endDate}
      />
    }
  </>
);

const ViewMC = () => {
  const [selectedId, setSelectedId] = useState(null); // initialise state for selecting flatlist item
  const [modalVisible, setModalVisible] = useState(false); // initialise state for Modal visibility

  const [searchQuery, setSearchQuery] = useState(''); // initialise state for the search bar
  const [dataList, setDataList] = useState(DATA);     // initialise state for the filtered flatlist

  const onChangeSearch = (query) => { 
    setSearchQuery(query);                            //setting state for the search query
    
    if(query === '') {
      setDataList(DATA);                              // if query is blank, set state to show all items in flatlist
    }
    else {
      const result = DATA.filter(checkData);          // if query is not blank, filter the list and set state of filtered flatlist
      setDataList(result);
    }

    function checkData(item) {                        // return the filtered data
      return (
        item.mc_id.includes(query) ||
        item.clinic.includes(query) ||
        item.mc_startDate.includes(query) 
      );
    }
  }

  const [menuVisible, setMenuVisible] = useState(false); //initialise state for sorting menu

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const sortAZ = () => {
    DATA.sort(function(a, b) {
      const nameA = a.clinic.toUpperCase(); // ignore upper and lowercase
      const nameB = b.clinic.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    setDataList(DATA);
  }

  const sortZA = () => {
    DATA.sort(function(a, b) {
      const nameA = a.clinic.toUpperCase(); // ignore upper and lowercase
      const nameB = b.clinic.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });

    setDataList(DATA);
  }

  const sortFromOldest = () => {
    DATA.sort(function(a, b) {
      const dateA = new Date(a.formattedStartDate); 
      const dateB = new Date(b.formattedStartDate);

      if (dateA.getTime() < dateB.getTime()) {
        return -1;
      }
      if (dateA.getTime() > dateB.getTime()) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    setDataList(DATA);
  }

  const sortFromNewest = () => {
    DATA.sort(function(a, b) {
      const dateA = new Date(a.formattedStartDate); 
      const dateB = new Date(b.formattedStartDate);
      if (dateA.getTime() < dateB.getTime()) {
        return 1;
      }
      if (dateA.getTime() > dateB.getTime()) {
        return -1;
      }
      // names must be equal
      return 0;
    });

    setDataList(DATA);
  }


  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../../src/assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "aquamarine" : "#33C3B9";
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(true);
          console.log('Modal has been opened');
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    );
  };

  return (
    <Provider>
      <HeaderBar/>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <Image
              source={{
                        uri: 'https://i.ibb.co/31bnJJN/logo.jpg',
                      }}
              style={{ width: 150, height: 100, justifyContent: 'center', alignSelf: 'center' }}
            />

            <Searchbar
              inputStyle={styles.inputSearchbar}
              style={styles.searchbar}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />

            <View style={styles.menuContainer}>
              <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                style={styles.menu}
                anchor={
                  <Button 
                    style={styles.menuButton}
                    onPress={openMenu}
                  ><FontAwesome name="sort" size={24} color="white" /></Button>
                }>
                <Menu.Item titleStyle={{fontFamily: 'OpenSans-Regular'}} onPress={() => {sortAZ();}} title='A-Z' />
                <Menu.Item titleStyle={{fontFamily: 'OpenSans-Regular'}} onPress={() => {sortZA();}} title="Z-A" />
                <Menu.Item titleStyle={{fontFamily: 'OpenSans-Regular'}} onPress={() => {sortFromOldest();}} title="Oldest" />
                <Menu.Item titleStyle={{fontFamily: 'OpenSans-Regular'}} onPress={() => {sortFromNewest()}} title="Newest" />
              </Menu>
            </View>

            <FlatList
              data={dataList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular'
  },
  inputSearchbar: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15
  },
  searchbar: {
    width: '70%',
    marginTop: '2%',
    marginBottom: '5%',
    marginLeft: '5%'
  },
  menuContainer: {
    marginTop: '-17%',
    marginLeft: '78%',
    marginBottom: '3%'
  },
  menuButton: {
    position: 'relative',
    width: '10%',
    backgroundColor: '#33C3B9'

  },
  menu: {
    marginTop: '14%',
    fontFamily: 'OpenSans-Regular'
  }
});

export default ViewMC;
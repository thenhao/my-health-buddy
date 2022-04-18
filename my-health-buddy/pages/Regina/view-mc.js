import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import ViewMCModal from "./view-mc-modal";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    mc_id: '1323',
    clinic: "First Clinic",
    mc_duration: '2 days',
    mc_startDate: '3rd Dec 2021',
    mc_endDate: '4th Dec 2021'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    mc_id: '943',
    clinic: "Second Clinic",
    mc_duration: '1 day',
    mc_startDate: '30th Mar 2021',
    mc_endDate: '30th Mar 2021'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    mc_id: '820',
    clinic: "Third Clinic",
    mc_duration: '3 days',
    mc_startDate: '26th May 2020',
    mc_endDate: '28th May 2020'
  },
  {
    id: "3358761d-c7d9-4b5f-8372-a218b7ffede8",
    mc_id: '760',
    clinic: "Third Clinic",
    mc_duration: '3 days',
    mc_startDate: '26th Sep 2019',
    mc_endDate: '28th Sep 2019'
  },
  {
    id: "5dfb5157-869e-4259-ba08-3a34cb4faf95",
    mc_id: '699',
    clinic: "Second Clinic",
    mc_duration: '2 days',
    mc_startDate: '14th Jun 2019',
    mc_endDate: '14th Jun 2019'
  },
  {
    id: "35c53d0b-fd2d-45d4-98be-94c31c0d85f1",
    mc_id: '604',
    clinic: "First Clinic",
    mc_duration: '1 day',
    mc_startDate: '12th Jan 2019',
    mc_endDate: '13th Jan 2019'
  },
  {
    id: "8716c05a-0698-4ac9-821c-d54ac7354a2d",
    mc_id: '542',
    clinic: "First Clinic",
    mc_duration: '5 days',
    mc_startDate: '12th Jul 2018',
    mc_endDate: '16th Jul 2018'
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor, modalVisible, setModalVisible, selectedId }) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>MC ID: {item.mc_id} {'\n'}Date of MC: {item.mc_startDate}</Text>
    </TouchableOpacity>
    {item.id === selectedId && 
      <ViewMCModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
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
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
       <Image
        source={{
                  uri: 'https://i.ibb.co/31bnJJN/logo.jpg',
                }}
        style={{ width: 150, height: 100, justifyContent: 'center', alignSelf: 'center' }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular'
  },
});

export default ViewMC;
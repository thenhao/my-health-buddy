import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import ViewMCModal from "./view-mc-modal";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    mc_id: '1323',
    clinic: "First MC",
    mc_duration: '2 days',
    mc_startDate: '3rd Dec 2021',
    mc_endDate: '4th Dec 2021'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    mc_id: '943',
    clinic: "Second MC",
    mc_duration: '1 day',
    mc_startDate: '30th Mar 2021',
    mc_endDate: '30th Mar 2021'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    mc_id: '820',
    clinic: "Third MC",
    mc_duration: '3 days',
    mc_startDate: '26th May 2020',
    mc_endDate: '28th May 2020'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, modalVisible, setModalVisible }) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>MC ID: {item.mc_id} | Date: {item.mc_startDate}</Text>
    </TouchableOpacity>

    <ViewMCModal modalVisible={modalVisible} setModalVisible={setModalVisible} mcId={item.mc_id} clinic={item.clinic} mcDuration={item.mc_duration} mcStart={item.mc_startDate} mcEnd={item.mc_endDate}/>
  </>
);

const ViewMC = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "aquamarine" : "#33C3B9";
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(true);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ViewMC;
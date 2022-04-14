import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import ViewMCModal from "./view-mc-modal";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    mc_id: '1234',
    title: "First MC",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second MC",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third MC",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, modalVisible, setModalVisible }) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>

    <ViewMCModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "58594a0f-3da1-371f-bd06-145071e29d72",
    title: "SARS-CoV(COVID-19 agent) PCR: Negative",
    details: "This test is used for qualitative detection of SARS-CoV-2 RNA",
  },
  {
    id: "9834a0f-3da1-371f-bd06-145071e29d72",
    title: "COVID-19 PCR (Rapid Test): Negative",
    details: "Antigen tests look for pieces of proteins that make up the SARS-CoV-2 virus"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "SpO2: 97%",
    details: "SpO2 measured the blood oxygen saturation of the peripheral capillaries",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Heart Rate: 68 beats per minute",
    details: "Heart rate measures the rate at which the heart contracts and relaxes",
  },
  {
    id: "8h356a0f-3da1-471f-bd96-145571e29d72",
    title: "Blood Pressure: 127/60 mmHg",
    details: "Blood pressure measured the pressure of circulating blood against walls of blood vessels",
  },
  {
    id: "53695a0f-3da1-472f-bd96-149571e29d72",
    title: "Thyroid Stimulating Hormone: 7.88 mIU/L",
    details: "Thyroid Stimulating Hormone is a pituitary hormone that stimulates the thyroid gland to produce throxine",
  },
  {
    id: "58604a0f-2da1-871f-bd96-145671e29d82",
    title: "Thyroxine: 8.9 PMOL/L",
    details: "Thyroxine is the main hormone produced by the thyroid gland",
  },
  {
    id: "23594a0f-3da1-371f-bd06-145071e29d72",
    title: "Calcium: 2.13 MMOL/L",
    details: "Calcium is essential for healthy bones, muscle contraction and blood clotting",
  }
];

const Item = ({ item, onPress, backgroundColor, textColor, display, image }) => (
  <>
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
    <View>
      <Text style={[styles.details, display]}>{item.details}</Text>
    </View>
  </TouchableOpacity>
  </>
);

const TestResults = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "aquamarine" : "#33C3B9";
    const color = item.id === selectedId ? 'black' : 'white';
    const display = item.id === selectedId ? 'flex' : 'none';

    return (
      <>
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        display={{display}}
      />
      </>
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  details: {
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 5
  }
});

export default TestResults;
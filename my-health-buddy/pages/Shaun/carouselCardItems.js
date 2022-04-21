import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 30
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: '80%',
    marginTop: '10%',
    right: '4.5%',
    paddingVertical: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3, 
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
  image: {
    width: '90%',
    height: '50%',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 3,
    alignSelf: 'center'
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    paddingVertical: '5%',
    alignSelf: 'center',
  },
  body: {
    width: '80%',
    color: "#222",
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
    textAlign: 'justify'
  }
})

export default CarouselCardItem
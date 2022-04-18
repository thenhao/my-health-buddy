import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from "react-native"

// export const SliderWidth = Dimensions.get('window').width
// export const ItemWidth = Math.round(SliderWidth * 1)

export const SliderHeight = Dimensions.get('window').height
export const ItemHeight = Math.round(SliderHeight * 0.3)


//The CarouselCardItem implements the look of the cards in the carousel. It returns a component that will display the item passed as props.
//Ref: https://blog.logrocket.com/using-react-native-to-implement-a-carousel/

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>

            <ImageBackground
                source={{ uri: item.imgUrl }}
                style={styles.image}>
                <Text style={styles.header}>{item.title}</Text>
                {/* <Text style={styles.body}>{item.body}</Text> */}
            </ImageBackground>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        borderRadius: 8,
        //For horizontal carousel
        // width: ItemWidth,
        height: ItemHeight,
        width: 400,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        //For horizontal carousel
        // width: ItemWidth,
        // height: 300,

        //For vertical carousel
        width: '100%',
        height: ItemHeight

    },
    header: {
        //Font
        fontSize: 24,
        fontWeight: "bold",
        color: '#FFFFFF',
        lineHeight: 88,
        fontWeight: "bold",
        textAlign: "center",
        //Background Color
        backgroundColor: 'rgba(51, 195, 185, 0.85)',
        //Position
        paddingLeft: 2,
        paddingTop: 2,
        position: 'relative',
        top: 164,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }


})

export default CarouselCardItem
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import HeaderBar from "../Tianhao/headerBar";


const HealthArticleSolo = (props) => {
    const params = props.route.params;
    return (
        <>
            <HeaderBar />
            <SafeAreaView style={styles.container}>
                <Image
                    source={{
                        uri: 'https://i.ibb.co/31bnJJN/logo.jpg',
                    }}
                    style={{ width: 150, height: 100, justifyContent: 'center', alignSelf: 'center' }}
                />
                <View style={styles.container}>
                    <Image
                        source={{ uri: params.imgUrl }}
                        style={styles.image}>
                    </Image>
                    <Text style={styles.header}>{params.title}</Text>
                    <Text style={styles.body}>{params.body}</Text>
                </View>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        borderRadius: 8,
        //For horizontal carousel
        // width: ItemWidth,
        //height: ItemHeight,
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
        //height: ItemHeight

    },
    header: {
        //Font
        fontSize: 24,
        fontWeight: "bold",
        color: '#FFFFFF',
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "center",
        //Background Color
        backgroundColor: 'rgba(51, 195, 185, 0.85)',
        //Position
        paddingLeft: 2,
        paddingTop: 2,
        position: 'relative',
        top: 200,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        // position: 'absolute',
        top: 220,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }


})
export default HealthArticleSolo
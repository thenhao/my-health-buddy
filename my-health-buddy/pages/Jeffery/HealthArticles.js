import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import HealthArticleItem, { SliderWidth, ItemWidth, SliderHeight, ItemHeight } from './HealthArticleItem'
import data from './data';
import { useNavigation } from "@react-navigation/native";
import HeaderBar from "../Tianhao/headerBar";

//HealthArticles will be responsible for displaying the carousel. 
//Ref: https://blog.logrocket.com/using-react-native-to-implement-a-carousel/

const HealthArticles = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const navigation = useNavigation();

    //From Tianhao
    // const renderItem = ({ item }) => (
    //     <HealthArticleItem
    //         imgUrl={item.imgUrl}
    //         id={item.id}
    //         title={item.title}
    //         onPress={() => navigation.navigate('HealthArticleSolo')}
    //     />
    // );  

    //From Edison
    const [list, setList] = useState(data);
    useEffect(() => {
        const newList = list.map(l => {
            l.nav = () => {
                navigation.navigate(l.page, l);//for carousel example, use "EatingHealthy", for non-carousel example, use "HealthArticleSolo"
            }
            return l
        })
        setList(newList);
    }, [])
    //End of Edison code

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
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    // data={data} //Tianhao method
                    // renderItem={renderItem}
                    data={list} //Edison method
                    renderItem={HealthArticleItem}

                    // sliderWidth={SliderWidth}
                    // itemWidth={ItemWidth}
                    sliderHeight={SliderHeight}
                    itemHeight={ItemHeight}

                    onSnapToItem={index => setIndex(index)}
                    useScrollView={true}
                    vertical={true}
                />


                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: '#33C3B9',
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.8}
                    tappableDots={true}
                />

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
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
        width: '90%',
        marginTop: '2%',
        marginBottom: '3%',
        marginLeft: '5%'
    }
});


export default HealthArticles
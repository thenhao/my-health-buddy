import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import HealthArticleItem, { SliderWidth, ItemWidth, SliderHeight, ItemHeight } from './HealthArticleItem'
import { useNavigation } from "@react-navigation/native";
import data from './data'


//HealthArticles will be responsible for displaying the carousel. 
//Ref: https://blog.logrocket.com/using-react-native-to-implement-a-carousel/



const HealthArticles = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);    
    const navigation = useNavigation();
    const [list, setList] = useState(data);

    useEffect(()=>{
        const newList = list.map(l => {
            l.nav = () => {
                navigation.navigate("HealthArticleSolo", l);
            }
            return l
        })
        setList(newList);
    }, [])

    return (        
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={list}
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
                    width: 20,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'blue',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.8}
                tappableDots={true}
            />

        </View>
    )
}

export default HealthArticles
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import HealthArticleItem, { SliderWidth, ItemWidth, SliderHeight, ItemHeight } from './HealthArticleItem'
import data from './data';
import { useNavigation } from "@react-navigation/native";

//HealthArticles will be responsible for displaying the carousel. 
//Ref: https://blog.logrocket.com/using-react-native-to-implement-a-carousel/

const HealthArticles = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <HealthArticleItem
            imgUrl={item.imgUrl}
            id={item.id}
            title={item.title}
            onPress={() => navigation.navigate('HealthArticleSolo')}
        />
    );
    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
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
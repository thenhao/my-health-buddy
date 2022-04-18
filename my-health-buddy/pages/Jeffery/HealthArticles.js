import React, { useState, useRef } from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SliderWidth, ItemWidth, SliderHeight, ItemHeight } from './CrouselCardItem'
import data from './data'


//CarouselCards will be responsible for displaying the carousel. 
//Ref: https://blog.logrocket.com/using-react-native-to-implement-a-carousel/



const CarouselCards = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
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

export default CarouselCards
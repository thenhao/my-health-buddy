import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from "react-native-snap-carousel"
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carouselCardItems'
import eatingHealthy from './eatingHealthy'
import HeaderBar from '../Tianhao/headerBar'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (

    <>
    <HeaderBar/>
    <View>
      <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={eatingHealthy}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#33C3B9'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
    </>
  )
}



export default CarouselCards
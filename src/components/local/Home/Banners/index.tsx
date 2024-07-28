import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

const Banners = () => {
  const listUrls = [
    'https://static.vecteezy.com/system/resources/thumbnails/017/457/648/small/business-webinar-horizontal-banner-template-design-very-suitable-for-online-class-programs-marketing-etc-vector.jpg',
    'https://awsimages.detik.net.id/community/media/visual/2023/07/29/banner-17-agustus-2023-link-download-dan-filosofi-logo-hut-ke-78-ri_169.jpeg',
  ]

  const PAGE_WIDTH = Dimensions.get('window').width

  const animationStyle = React.useCallback((value: number) => {
    'worklet'

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30])
    const translateX = interpolate(
      value,
      [-2, 0, 1],
      [-PAGE_WIDTH, 0, PAGE_WIDTH],
    )

    return {
      transform: [{ translateX }],
      zIndex,
    }
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}
    >
      <Carousel
        loop={true}
        autoPlay={true}
        style={{
          borderRadius: 24,
          justifyContent: 'center',
          alignItems: 'center',
          height: 140,
        }}
        width={PAGE_WIDTH - 42}
        data={listUrls}
        renderItem={({ index, animationValue, item }) => {
          return (
            <FastImage
              source={{
                uri: item,
              }}
              style={{
                height: 140,
                width: '100%',
              }}
              resizeMode="cover"
            />
          )
        }}
        customAnimation={animationStyle}
        scrollAnimationDuration={1200}
        enabled={true}
        pagingEnabled
      />
    </View>
  )
}

export default Banners

import { Text, View } from 'react-native'
import Logo from '../../assets/icons/logo.png'
import FastImage from 'react-native-fast-image'
import Fonts from '../../contants/Fonts'
import { useEffect } from 'react'
import useNavigation from '../../navigation/useNavigation'
import { RouteName } from '../../navigation/RouteName'

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RouteName.LOGIN)
    }, 500)
  }, [])

  return (
    <View
      style={{
        backgroundColor: 'rgba(23, 59, 137, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 8,
      }}
    >
      <FastImage
        source={Logo}
        style={{
          width: 160,
          height: 160,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: 'white',
          fontFamily: Fonts.PoppinsBold,
          fontSize: 16,
        }}
      >
        AM Bersujud
      </Text>
    </View>
  )
}

export default Splash

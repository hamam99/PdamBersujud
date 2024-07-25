import { View } from 'react-native'
import Logo from '../../assets/icons/logo.png'
import FastImage from 'react-native-fast-image'

const Splash = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(23, 59, 137, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
    </View>
  )
}

export default Splash

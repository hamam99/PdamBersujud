import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../../contants/Colors'
import Spongebob from '../../../../assets/images/spongebob.png'
import FastImage from 'react-native-fast-image'
import Fonts from '../../../../contants/Fonts'
import { IconBell } from 'tabler-icons-react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <FastImage source={Spongebob} style={styles.photo} resizeMode="cover" />
        <View>
          <Text style={styles.welcome}>Selamat datang,</Text>
          <Text style={styles.name}>Hiban Ramdani</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notifWrapper}>
        <View style={styles.redDot} />
        <IconBell size={22} color={Colors.black} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.blue_1,
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: Colors.white,
  },
  welcome: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
  name: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 14,
    color: Colors.white,
  },
  notifWrapper: {
    width: 42,
    height: 42,
    backgroundColor: Colors.white,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redDot: {
    backgroundColor: Colors.red_1,
    borderWidth: 2,
    borderColor: Colors.red_2,
    width: 15,
    height: 15,
    borderRadius: 15,
    position: 'absolute',
    top: -1,
    right: -1,
  },
})

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Colors from '../../contants/Colors'
import { HeaderBar } from '../../components/global'
import PpobBanner from '../../assets/images/ppob-banner.png'
import Fonts from '../../contants/Fonts'
import {
  IconDeviceMobileMessage,
  IconHeartbeat,
  IconHomeBolt,
  IconRouter,
} from 'tabler-icons-react-native'
import { IMenuPpob } from './types'
import useNavigation from '../../navigation/useNavigation'
import { RouteName } from '../../navigation/RouteName'

const Ppob = () => {
  const menu: IMenuPpob[] = [
    {
      icon: <IconHomeBolt size={24} color={Colors.white} />,
      label: 'Token Listrik',
      type: 'electricity_token',
    },
    {
      icon: <IconDeviceMobileMessage size={24} color={Colors.white} />,
      label: 'Pulsa',
      type: 'pulsa',
    },
    {
      icon: <IconRouter size={24} color={Colors.white} />,
      label: 'Paket Data',
      type: 'data_packages',
    },
    {
      icon: <IconHeartbeat size={24} color={Colors.white} />,
      label: 'BPJS',
      type: 'bpjs',
    },
  ]

  const { navigate } = useNavigation()
  const renderItem = ({ item, index }: { item: IMenuPpob; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          gap: 4,
        }}
        onPress={() => {
          navigate(RouteName.PPOB_INPUT_VALUE, item)
        }}
      >
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 52,
            backgroundColor: Colors.blue_1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item?.icon}
        </View>
        <Text
          style={{
            fontFamily: Fonts.PoppinsRegular,
            fontSize: 10,
            textAlign: 'center',
            color: Colors.black,
          }}
        >
          {item?.label}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderBar title="PPOB" />
      <View style={styles.subContainer}>
        <View style={styles.bannerWrapper}>
          <Image source={PpobBanner} style={styles.bannerImage} />
          <Text style={styles.bannerText}>
            {`Topup dan Bayar Tagihan di PM Bersujud\nAman dan cepat`}
          </Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={menu}
            renderItem={renderItem}
            horizontal
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </View>
  )
}

export default Ppob

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer: {
    gap: 10,
  },
  listWrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -32,
    zIndex: 9999,
    backgroundColor: Colors.white,
  },
  list: {
    paddingTop: 24,
  },
  listContent: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  bannerWrapper: {
    backgroundColor: Colors.blue_1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45,
  },
  bannerText: {
    fontFamily: Fonts.PoppinsBold,
    fontWeight: '700',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    marginTop: -20,
  },
  bannerImage: { width: 350, height: 290 },
})

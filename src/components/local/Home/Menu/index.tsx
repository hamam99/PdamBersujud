import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import ppobIcon from '../../../../assets/icons/ppob.png'
import catatMeterIcon from '../../../../assets/icons/catat-meter.png'
import pengaduanIcon from '../../../../assets/icons/pengaduan.png'
import tagihanIcon from '../../../../assets/icons/tagihan.png'
import airTangkiIcon from '../../../../assets/icons/air-tangki.png'
import Colors from '../../../../contants/Colors'
import Fonts from '../../../../contants/Fonts'
import { RouteName } from '../../../../navigation/RouteName'
import useNavigation from '../../../../navigation/useNavigation'

type IMenu = {
  id: string
  label: string
  icon: any
  destination?: string
}

const LIST_MENU: IMenu[] = [
  {
    id: 'ppob',
    label: 'PPOB',
    icon: ppobIcon,
    destination: RouteName.PPOB,
  },
  {
    id: 'tagihan',
    label: 'Tagihan',
    icon: tagihanIcon,
  },
  {
    id: 'catatMeter',
    label: 'Catar Meter',
    icon: catatMeterIcon,
  },
  {
    id: 'airTangki',
    label: 'Air Tangki',
    icon: airTangkiIcon,
  },
  {
    id: 'pengaduan',
    label: 'Pengaduan',
    icon: pengaduanIcon,
  },
]

const Menu = () => {
  const navigate = useNavigation().navigate
  const ItemMenu = ({ item }: { item: IMenu }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(item?.destination || RouteName.HOME)
        }}
      >
        <View style={styles.itemSubContainer}>
          <Image source={item?.icon} style={styles.itemIcon} />
        </View>
        <Text style={styles.itemLabel}>{item?.label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={LIST_MENU}
        renderItem={({ item }) => <ItemMenu item={item} />}
        horizontal
        style={{}}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  )
}

export default Menu
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listContentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  itemSubContainer: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 52,
    borderWidth: 1,
    borderColor: Colors.gray_1,
  },
  itemIcon: {
    width: 32,
    height: 32,
  },
  itemLabel: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    color: Colors.black,
  },
})

import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import Colors from '../../contants/Colors'
import { Button, HeaderBar } from '../../components/global'
import {
  IconFilter,
  IconMapPin,
  IconPlus,
  IconPointerSearch,
  IconUserCircle,
} from 'tabler-icons-react-native'
import Fonts from '../../contants/Fonts'
import FastImage from 'react-native-fast-image'
import { RouteName } from '../../navigation/RouteName'
import useNavigation from '../../navigation/useNavigation'

type ITab = 'general' | 'personal'

const MockList = [
  {
    name: 'Hiban Ramdani',
    status: {
      name: 'Pending',
      value: 'pending',
    },
    title: 'Kecamatan Angsana',
    description:
      'perbaikan dirumah tangga kelas 3 untuk menangani meteran yang salah',
    image:
      'https://tirtabhagasasi.co.id/wp-content/uploads/2023/06/IMG_20230619_160450-1024x684.jpg',
  },
  {
    name: 'Rahmat',
    status: {
      name: 'Tindak Lanjuti',
      value: 'inprogress',
    },
    title: 'Kecamatan Angsana',
    description:
      'perbaikan dirumah tangga kelas 3 untuk menangani meteran yang salah',
    image:
      'https://tirtabhagasasi.co.id/wp-content/uploads/2023/06/IMG_20230619_160450-1024x684.jpg',
  },
  {
    name: 'Rahmadi',
    status: {
      name: 'Selesai',
      value: 'done',
    },
    title: 'Kecamatan Angsana',
    description:
      'perbaikan dirumah tangga kelas 3 untuk menangani meteran yang salah',
    image:
      'https://tirtabhagasasi.co.id/wp-content/uploads/2023/06/IMG_20230619_160450-1024x684.jpg',
  },
]
const RepairInformation = () => {
  const navigation = useNavigation()

  const [selectedTab, setSelectedTab] = useState<ITab>('general')

  const Item = ({ item, index }) => {
    const backgroundColor = {
      pending: Colors.orange_1,
      inprogress: Colors.blue_1,
      done: Colors.green_1,
    }
    return (
      <View
        style={{
          borderWidth: 2,
          borderRadius: 20,
          borderColor: Colors.gray_1,
          padding: 10,
          backgroundColor: Colors.white,
          gap: 16,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <IconUserCircle size={24} color={Colors.black} />
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                fontSize: 14,
              }}
            >
              {item?.name}
            </Text>
          </View>
          <Button
            label={item?.status?.name}
            mode="contain"
            containerStyle={{
              borderRadius: 20,
              width: 'auto',
              height: 27,
              paddingHorizontal: 12,
              backgroundColor: backgroundColor[item?.status?.value],
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: Colors.gray_1,
          }}
        />
        <FastImage
          source={{
            uri: item?.image,
          }}
          style={{
            width: '100%',
            height: 107,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <IconMapPin size={24} color={Colors.black} />
          <View>
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                fontSize: 14,
                color: Colors.black,
              }}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.PoppinsRegular,
                fontSize: 12,
                color: Colors.gray_2,
              }}
            >
              {item?.description}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderBar title="Info Perbaikan" mode="blue" />
      <View style={styles.subContainer}>
        <View style={styles.buttonContainer}>
          <Button
            label="Umum"
            containerStyle={[
              styles.button,
              {
                backgroundColor:
                  selectedTab === 'general' ? Colors.white : Colors.blue_1,
              },
            ]}
            labelStyle={{
              color: selectedTab === 'general' ? Colors.blue_1 : Colors.white,
            }}
            onPress={() => setSelectedTab('general')}
          />
          <Button
            label="Info Anda"
            containerStyle={[
              styles.button,
              {
                backgroundColor:
                  selectedTab === 'personal' ? Colors.white : Colors.blue_1,
              },
            ]}
            labelStyle={{
              color: selectedTab === 'personal' ? Colors.blue_1 : Colors.white,
            }}
            onPress={() => setSelectedTab('personal')}
          />
          <TouchableOpacity style={styles.buttonFilter}>
            <IconFilter color={Colors.blue_1} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={MockList}
          renderItem={Item}
          contentContainerStyle={styles.listContent}
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate(RouteName.REPAIR_REPORT)
        }}
      >
        <IconPlus size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  )
}

export default RepairInformation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue_1,
  },
  subContainer: {
    paddingHorizontal: 12,
  },
  button: {
    height: 44,
    width: 'auto',
    flex: 1,
  },
  buttonFilter: {
    width: 52,
    height: 52,
    borderRadius: 52,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  listContainer: {
    marginBottom: 124,
  },
  listContent: {
    gap: 14,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 52,
    backgroundColor: Colors.blue_1,
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    borderWidth: 1,
    borderColor: Colors.blue_4,
  },
})

import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../../contants/Colors'
import {
  IconMap,
  IconMap2,
  IconMapPin,
  IconPin,
  IconUserCircle,
} from 'tabler-icons-react-native'
import Fonts from '../../../../contants/Fonts'
import Button from '../../../global/Button'

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.containerAccount}>
          <IconUserCircle size={24} color={Colors.black} />
          <Text style={styles.name}>Hiban Ramdani</Text>
        </View>
        <Button
          label="Ubah"
          containerStyle={{
            width: 'auto',
            height: 27,
            borderWidth: 2,
            borderColor: Colors.blue_3,
            backgroundColor: Colors.blue_1,
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 20,
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
      <View>
        <View style={styles.containerAccount}>
          <IconMapPin size={24} color={Colors.black} />
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.name,
                {
                  color: Colors.black,
                },
              ]}
            >
              PDAM Tanah Bambu
            </Text>
            <Text style={[styles.name, {}]}>
              Jl. Cipatung Kp. Raya Selatan RT01/RW03 Kecamatan angsana
              Kabupaten Tanah Bumbu
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Account

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.gray_1,
    width: '100%',
    padding: 10,
    gap: 12,
  },
  subContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerAccount: {
    flexDirection: 'row',
    gap: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.gray_2,
  },
})

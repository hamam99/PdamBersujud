import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  Account,
  Banners,
  Header,
  Information,
  Menu,
} from '../../components/local/Home'
import Colors from '../../contants/Colors'
import Button from '../../components/global/Button'
import { IconAddressBook, IconPlus } from 'tabler-icons-react-native'

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.subContainer1}>
        <Header />
        <View style={styles.subContainer2}>
          <Account />
          <Menu />
          <Button
            label="Pasang baru"
            mode="outline"
            LeftIcon={<IconPlus size={20} color={Colors.blue_1} />}
            onPress={() => {}}
          />
          <Banners />
        </View>
        <View style={styles.subContainer3}>
          <Information />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer1: {
    paddingBottom: 12,
  },
  subContainer2: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    gap: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 99,
    marginTop: -16,
  },
  subContainer3: {
    paddingLeft: 16,
    paddingVertical: 9,
  },
})

import React from 'react'
import { Text, View } from 'react-native'
import { Account, Header, Menu } from '../../components/local/Home'
import Colors from '../../contants/Colors'
import Button from '../../components/global/Button'
import { IconAddressBook, IconPlus } from 'tabler-icons-react-native'

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <Header />
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 9,
          gap: 12,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          zIndex: 99,
          marginTop: -16,
          backgroundColor: Colors.white,
        }}
      >
        <Account />
        <Menu />
        <Button
          label="Pasang baru"
          mode="outline"
          LeftIcon={<IconPlus size={20} color={Colors.blue_1} />}
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default Home

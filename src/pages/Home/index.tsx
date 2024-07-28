import React from 'react'
import { Text, View } from 'react-native'
import { Account, Header, Menu } from '../../components/local/Home'
import Colors from '../../contants/Colors'

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
        }}
      >
        <Account />
        <Menu />
      </View>
    </View>
  )
}

export default Home

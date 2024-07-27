import React from 'react'
import { Text, View } from 'react-native'
import Account from '../../components/local/Home/Account'

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Account />
      <Text>HOME</Text>
    </View>
  )
}

export default Home

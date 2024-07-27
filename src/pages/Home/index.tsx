import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/local/Home/Header'

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <Text>HOME</Text>
    </View>
  )
}

export default Home

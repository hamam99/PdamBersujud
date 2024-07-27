// import {Image} from '@rneui/base';
import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../contants/Colors'

const IconTabBar = ({
  focused,
  text,
  Icon,
}: {
  focused: boolean
  text: string
  // iconName: string
  Icon: React.JSX.Element
}) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {/* <Icon
        name={iconName}
        size={24}
        color={focused ? Colors.blue_1 : Colors.gray_1}
      /> */}
      {Icon}
      <Text style={{ color: focused ? Colors.blue_1 : 'gray', fontSize: 13 }}>
        {text}
      </Text>
    </View>
  )
}

export default IconTabBar

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

import Home from '../pages/Home'
import {
  IconHistory,
  IconHome,
  IconNotes,
  IconUser,
} from 'tabler-icons-react-native'
import Colors from '../contants/Colors'
import RepairInformation from '../pages/RepairInformation'
import { RouteName } from './RouteName'
import History from '../pages/History'
import Account from '../pages/Account'
import Fonts from '../contants/Fonts'

const Tab = createBottomTabNavigator()

const DashboardBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: 'white',
          alignItems: 'space-between',
          justifyContent: 'space-between',
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabMenu
              focused={focused}
              label="Home"
              Icon={
                <IconHome
                  size={24}
                  color={focused ? Colors.blue_1 : Colors.black}
                />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.REPAIR_INFORMATION}
        component={RepairInformation}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabMenu
              focused={focused}
              label="Perbaikan"
              Icon={
                <IconNotes
                  size={24}
                  color={focused ? Colors.blue_1 : Colors.black}
                />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.HISTORY}
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabMenu
              focused={focused}
              label="Riwayat"
              Icon={
                <IconHistory
                  size={24}
                  color={focused ? Colors.blue_1 : Colors.black}
                />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.ACCOUNT}
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabMenu
              focused={focused}
              label="Akun"
              Icon={
                <IconUser
                  size={24}
                  color={focused ? Colors.blue_1 : Colors.black}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default DashboardBottomTab

const TabMenu = ({
  label,
  focused,
  Icon,
}: {
  label: string
  focused: boolean
  Icon: React.JSX.Element
}) => {
  return (
    <View style={styles.tabIcon}>
      {focused && (
        <View
          style={{
            width: '90%',
            height: 4,
            backgroundColor: Colors.blue_1,
            position: 'absolute',
            top: 0,
          }}
        />
      )}
      {Icon}
      <Text
        style={{
          marginTop: 2,
          textAlign: 'center',
          fontSize: 14,
          color: focused ? Colors.blue_1 : Colors.black,
          fontFamily: Fonts.PoppinsRegular,
        }}
      >
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tabIcon: {
    marginBottom: Platform.OS === 'ios' ? -30 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
})

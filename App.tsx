/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { navigationRef } from './src/navigation/NavigationHelper'
import RootNavigation from './src/navigation/RootNavigation'
import { PaperProvider } from 'react-native-paper'
import ToastConfig from './src/utils/ToastConfig'
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

type SectionProps = PropsWithChildren<{
  title: string
}>

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
          }}
          edges={['top', 'left', 'right', 'bottom']}
        >
          <PaperProvider>
            <NavigationContainer ref={navigationRef}>
              <RootNavigation />
              <Toast config={ToastConfig} />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigation

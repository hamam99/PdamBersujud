import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Splash from '../pages/Splash'
import { RouteName } from './RouteName'
import Login from '../pages/Login'
import DashboardBottomTab from './DashboardBottomTab'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouteName.DASHBOARD}>
      <Stack.Screen
        name={RouteName.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouteName.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouteName.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouteName.DASHBOARD}
        component={DashboardBottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigation

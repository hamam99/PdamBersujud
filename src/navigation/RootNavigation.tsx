import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Splash from '../pages/Splash'
import { RouteName } from './RouteName'
import Login from '../pages/Login'
import DashboardBottomTab from './DashboardBottomTab'
import RepairReport from '../pages/RepairReport'
import Ppob from '../pages/Ppob'
import PpobInputValue from '../pages/PpobInputValue'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.SPLASH} component={Splash} />
      <Stack.Screen name={RouteName.HOME} component={Home} />
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.DASHBOARD} component={DashboardBottomTab} />
      <Stack.Screen name={RouteName.REPAIR_REPORT} component={RepairReport} />
      <Stack.Screen name={RouteName.PPOB} component={Ppob} />
      <Stack.Screen
        name={RouteName.PPOB_INPUT_VALUE}
        component={PpobInputValue}
      />
    </Stack.Navigator>
  )
}

export default RootNavigation

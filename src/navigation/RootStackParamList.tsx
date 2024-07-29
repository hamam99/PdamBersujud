import { IMenuPpob } from '../pages/Ppob/types'
import { RouteName } from './RouteName'

export type RootStackParamList = {
  [RouteName.SPLASH]: undefined
  [RouteName.HOME]: undefined
  [RouteName.LOGIN]: undefined
  [RouteName.DASHBOARD]: undefined
  [RouteName.REPAIR_REPORT]: undefined
  [RouteName.PPOB]: undefined
  [RouteName.PPOB_INPUT_VALUE]: IMenuPpob
}

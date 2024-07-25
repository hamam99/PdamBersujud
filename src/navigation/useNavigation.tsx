import {
  NavigationProp,
  useNavigation as useNavigationRN,
} from '@react-navigation/native'
import { RootStackParamList } from './RootStackParamList'

const useNavigation = () => {
  const navigation = useNavigationRN<NavigationProp<RootStackParamList>>()
  return navigation
}

export default useNavigation

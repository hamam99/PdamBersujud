import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import Colors from '../../../contants/Colors'
import Fonts from '../../../contants/Fonts'

type ButtonProps = {
  label?: string
  onPress?: () => void
  containerStyle?: StyleProp<ViewStyle> | undefined
  labelStyle?: StyleProp<TextStyle> | undefined
}

const Button = (props: ButtonProps) => {
  const { label, onPress = () => null, containerStyle, labelStyle } = props
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_1,
    borderRadius: 10,
  },
  label: {
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.white,
    fontSize: 14,
    lineHeight: 21,
  },
})

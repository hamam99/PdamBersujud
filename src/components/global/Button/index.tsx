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

type IMode = 'outline' | 'contain'

type ButtonProps = {
  label?: string
  onPress?: () => void
  containerStyle?: StyleProp<ViewStyle> | undefined
  labelStyle?: StyleProp<TextStyle> | undefined
  mode?: IMode
  LeftIcon?: React.JSX.Element
}

const Button = (props: ButtonProps) => {
  const {
    label,
    onPress = () => null,
    containerStyle,
    labelStyle,
    mode = 'contain',
    LeftIcon,
  } = props

  const currentMode = ListMode[mode]

  return (
    <TouchableOpacity
      style={[styles.container, currentMode?.container, containerStyle]}
      onPress={onPress}
    >
      {LeftIcon && LeftIcon}
      <Text style={[styles.label, currentMode?.label, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const ListMode = {
  outline: {
    container: {
      backgroundColor: 'white',
      borderColor: Colors.blue_1,
      borderWidth: 1,
    },
    label: {
      color: Colors.blue_1,
    },
  },
  contain: {
    container: {
      backgroundColor: Colors.blue_1,
    },
    label: {
      color: Colors.white,
    },
  },
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_1,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 4,
  },
  label: {
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.white,
    fontSize: 14,
    lineHeight: 21,
  },
})

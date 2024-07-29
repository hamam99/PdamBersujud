import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import Colors from '../../../contants/Colors'
import { useEffect, useState } from 'react'
import { IconEye, IconEyeOff } from 'tabler-icons-react-native'
import Fonts from '../../../contants/Fonts'

type TextInputCustomProps = {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  keyboardType?: KeyboardTypeOptions | undefined
  inputStyle?: StyleProp<TextStyle> | undefined
  containerStyle?: StyleProp<ViewStyle> | undefined
  secureTextEntry?: boolean
  isPassword?: boolean
  error?: string
  title?: string
  disabled?: boolean
  numberOfLines?: number
  mode?: 'default' | 'underline'
  titleStyle?: StyleProp<TextStyle> | undefined
  bottomText?: string
}

const TextInputCustom = ({
  value,
  onChangeText = () => null,
  placeholder,
  keyboardType = 'default',
  inputStyle,
  containerStyle,
  secureTextEntry = false,
  isPassword = false,
  error,
  title,
  disabled = false,
  numberOfLines = 1,
  titleStyle,
  mode = 'default',
  bottomText,
}: TextInputCustomProps) => {
  const [hideText, setHideText] = useState(false)

  const toggleHideText = () => setHideText(!hideText)

  const currentMode = ListMode[mode]

  useEffect(() => {
    setHideText(secureTextEntry)
  }, [secureTextEntry])

  return (
    <View>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View
        style={[
          styles.container,
          currentMode.container,
          {
            backgroundColor: disabled ? Colors.gray_3 : Colors.white,
          },
          containerStyle,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={!disabled}
          style={[
            styles.input,
            {
              textAlignVertical: numberOfLines > 1 ? 'top' : 'center',
            },
            inputStyle,
          ]}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.gray_2}
          secureTextEntry={hideText}
          multiline={numberOfLines > 1 ? true : false}
          numberOfLines={numberOfLines}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleHideText}>
            {hideText ? <IconEye size={18} /> : <IconEyeOff size={18} />}
          </TouchableOpacity>
        )}
      </View>
      {bottomText && <Text style={styles.bottomText}>{bottomText}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const ListMode = {
  default: {
    container: {
      borderWidth: 2,
      borderColor: Colors.gray_1,
      borderRadius: 20,
      paddingHorizontal: 18,
    },
  },
  underline: {
    container: {
      borderBottomWidth: 1,
      borderColor: Colors.gray_1,
      borderRadius: 0,
      paddingHorizontal: 0,
      gap: 0,
    },
  },
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    color: Colors.black,
  },
  container: {
    // borderWidth: 2,
    // borderColor: Colors.gray_1,
    // borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 18,
    height: 44,
  },
  input: {
    fontSize: 14,
    flex: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    paddingHorizontal: 18,
    marginTop: 2,
  },
  bottomText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    color: Colors.gray_2,
    textAlign: 'right',
    marginTop: 4,
  },
})

export default TextInputCustom

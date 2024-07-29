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
}: TextInputCustomProps) => {
  const [hideText, setHideText] = useState(false)

  const toggleHideText = () => setHideText(!hideText)
  useEffect(() => {
    setHideText(secureTextEntry)
  }, [secureTextEntry])
  return (
    <View>
      {title && (
        <Text
          style={{
            fontFamily: Fonts.PoppinsRegular,
            fontSize: 14,
            color: Colors.black,
          }}
        >
          {title}
        </Text>
      )}
      <View
        style={[
          {
            borderWidth: 2,
            borderColor: Colors.gray_1,
            width: '100%',
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 18,
            height: 44,
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
            {
              fontSize: 14,
              flex: 1,
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
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            paddingHorizontal: 18,
            marginTop: 2,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default TextInputCustom

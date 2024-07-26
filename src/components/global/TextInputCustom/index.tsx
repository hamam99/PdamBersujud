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
}: TextInputCustomProps) => {
  const [hideText, setHideText] = useState(false)

  const toggleHideText = () => setHideText(!hideText)
  useEffect(() => {
    setHideText(secureTextEntry)
  }, [secureTextEntry])
  return (
    <View>
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
          },
          containerStyle,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            {
              fontSize: 14,
              flex: 1,
            },
            inputStyle,
          ]}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.gray_2}
          secureTextEntry={hideText}
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

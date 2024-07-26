import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../contants/Colors'
import FastImage from 'react-native-fast-image'
import Logo from '../../assets/icons/logo.png'
import Fonts from '../../contants/Fonts'
import { TextInput } from 'react-native-paper'
import { useState } from 'react'
import TextInputCustom from '../../components/global/TextInputCustom'
import {
  IconBrandGoogle,
  IconBrandGoogleFilled,
  IconUserEdit,
} from 'tabler-icons-react-native'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <FastImage
          source={Logo}
          style={{
            width: 160,
            height: 160,
          }}
          resizeMode="contain"
        />
        <Text style={styles.title}>AM Bersujud</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInputCustom
          value={email}
          onChangeText={setEmail}
          placeholder="Email atau no Hp"
        />
        <TextInputCustom
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          isPassword
        />
      </View>
      <Text style={styles.forgotPassword}>
        <Text>Anda Lupa Password ? </Text>
        <Text style={styles.reset}>Reset</Text>
      </Text>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Colors.blue_1,
            },
          ]}
        >
          <IconBrandGoogleFilled
            name="google"
            size={20}
            color="white"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Colors.orange_1,
            },
          ]}
        >
          <IconUserEdit size={20} color="white" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    gap: 21,
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    width: '100%',
    gap: 18,
  },
  title: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 16,
    color: Colors.blue_1,
  },
  forgotPassword: {
    flexDirection: 'row',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
  },
  reset: { color: Colors.blue_1 },
  containerButton: { width: '100%', gap: 18 },
  button: {
    borderRadius: 20,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    position: 'absolute',
    left: 6,
    bottom: 0,
    top: 11,
  },
  buttonText: {
    color: 'white',
    fontFamily: Fonts.PoppinsRegular,
  },
})

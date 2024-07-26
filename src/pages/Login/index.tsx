import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../contants/Colors'
import FastImage from 'react-native-fast-image'
import Logo from '../../assets/icons/logo.png'
import Fonts from '../../contants/Fonts'
import { TextInput } from 'react-native-paper'
import { useState } from 'react'
import TextInputCustom from '../../components/global/TextInputCustom'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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

      <View
        style={{
          width: '100%',
          gap: 18,
        }}
      >
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
      <Text
        style={{
          flexDirection: 'row',
          fontFamily: Fonts.PoppinsRegular,
          fontSize: 12,
        }}
      >
        <Text>Anda Lupa Password ? </Text>
        <Text style={{ color: Colors.blue_1 }}>Reset</Text>
      </Text>

      <View style={{ width: '100%', gap: 18 }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.blue_1,
            borderRadius: 20,
            width: '100%',
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <IconAntDesign
            name="google"
            size={20}
            color="white"
            style={{
              position: 'absolute',
              left: 6,
              bottom: 0,
              top: 11,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: Fonts.PoppinsRegular,
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.orange_1,
            borderRadius: 20,
            width: '100%',
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <IconAntDesign
            name="google"
            size={20}
            color="white"
            style={{
              position: 'absolute',
              left: 6,
              bottom: 0,
              top: 11,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: Fonts.PoppinsRegular,
            }}
          >
            Masuk
          </Text>
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
  title: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 16,
    color: Colors.blue_1,
  },
})

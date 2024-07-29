import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../contants/Colors'
import { Button, HeaderBar, TextInputCustom } from '../../components/global'
import { useRoute } from '@react-navigation/native'
import { IMenuPpob } from '../Ppob/types'
import { useState } from 'react'
import { HistoryTransaction } from '../../components/local/PpobInputValue'

const PpobInputValue = () => {
  const { icon, label, type = 'pulsa' } = useRoute()?.params as IMenuPpob
  console.log(`PpobInputValue`, {
    icon,
    label,
    type,
  })

  const [value, setValue] = useState('')

  const currentType = ListType[type]

  return (
    <View style={styles.container}>
      <HeaderBar title={label} />
      <View style={styles.subContainer}>
        <View
          style={[
            styles.container,
            {
              gap: 16,
            },
          ]}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: Colors.gray_1,
              paddingVertical: 20,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <TextInputCustom
              value={value}
              onChangeText={setValue}
              mode="underline"
              title={currentType.title_input}
              bottomText={`${value.length}/12`}
            />
          </View>
          {currentType?.button}
          {currentType?.historyWidget}
        </View>
        <Button label="Selanjutnya" />
      </View>
    </View>
  )
}

export default PpobInputValue
// 'electricity_token' | 'pulsa' | 'data_packages' | 'bpjs'
const ListType = {
  electricity_token: {
    title_input: 'Masukan Nomor Tagihan Listrik',
    button: <Button mode="outline" label="Pilih" />,
    historyWidget: <HistoryTransaction />,
  },
  pulsa: {
    title_input: 'Masukan No Hp Anda',
    button: <Button mode="outline" label="Pilih Nominal Pulsa" />,
    historyWidget: <HistoryTransaction />,
  },
  data_packages: {
    title_input: 'Masukan No Hp Anda',
    button: <Button mode="outline" label="Pilih Nominal Paket Data" />,
  },
  bpjs: {
    title_input: 'Masukan No BPJS Anda',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer: {
    gap: 10,
    padding: 16,
    flex: 1,
  },
})

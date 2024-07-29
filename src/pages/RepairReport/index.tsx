import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../../contants/Colors'
import {
  Button,
  HeaderBar,
  ShowToast,
  TextInputCustom,
} from '../../components/global'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import useNavigation from '../../navigation/useNavigation'

const FormScheme = Yup.object({
  name: Yup.string().required('Tidak boleh kosong'),
  address: Yup.string().required('Tidak boleh kosong'),
  phone: Yup.string(),
  id: Yup.string(),
  repairType: Yup.object().shape({
    label: Yup.string().required('Tidak boleh kosong'),
    value: Yup.string().required('Tidak boleh kosong'),
    id: Yup.string().required('Tidak boleh kosong'),
  }),
  reason: Yup.string().required('Tidak boleh kosong'),
})

const RepairReport = () => {
  const initialValues = {
    name: 'Hamam Nasrodin',
    address: 'Jalan cemara no1, Bantul, Yogyakarta',
    phone: '085123456789',
    id: '0768912738917231',
    repairType: {
      id: 1,
      label: 'Air keruh',
      value: 'air_keruh',
    },
    reason: null,
  }

  const goback = useNavigation().goBack
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormScheme,
    onSubmit: values => {
      console.log('form submit', { values })
      goback()

      ShowToast({
        message: 'Berhasil lapor perbaikan',
        type: 'success',
      })
    },
  })

  return (
    <View style={styles.container}>
      <HeaderBar title="Lapor Perbaikan" />
      <ScrollView>
        <View style={styles.subContainer}>
          {/* <CustomInputText
          label={'Rekomendasi'}
          placeholder="No.421.2/ 001-KP-212/DS/Disdikbud/ 2021"
          value={formik.values.recomendation}
          errorMessage={formik.errors.recomendation}
          onChangeText={formik.handleChange('recomendation')}
        /> */}
          <TextInputCustom
            title="Nama Pelanggan"
            value={formik.values.name}
            error={formik.errors.name}
            onChangeText={formik.handleChange('name')}
            containerStyle={styles.form}
          />
          <TextInputCustom
            title="Alamat Lengkap"
            value={formik.values.address}
            error={formik.errors.address}
            onChangeText={formik.handleChange('address')}
            containerStyle={[
              styles.form,
              {
                height: 100,
              },
            ]}
            numberOfLines={5}
          />
          <TextInputCustom
            title="No Telepon"
            value={formik.values.phone}
            error={formik.errors.phone}
            //   onChangeText={formik.handleChange('phone')}
            containerStyle={[styles.form]}
            disabled
          />
          <TextInputCustom
            title="Id Pelanggan"
            value={formik.values.id}
            error={formik.errors.id}
            //   onChangeText={formik.handleChange('phone')}
            containerStyle={styles.form}
            disabled
          />
          <TextInputCustom
            title="Jenis Perbaikan"
            value={formik.values.repairType.label}
            error={formik.errors.repairType?.value}
            //   onChangeText={formik.handleChange('phone')}
            containerStyle={styles.form}
          />
          <TextInputCustom
            title="Alasan Perbaikan/Pengaduan"
            value={formik.values.reason}
            error={formik.errors.reason}
            onChangeText={formik.handleChange('reason')}
            containerStyle={[
              styles.form,
              {
                height: 100,
              },
            ]}
            numberOfLines={3}
          />
          <Button label="Kirim" onPress={formik.handleSubmit} mode="contain" />
        </View>
      </ScrollView>
    </View>
  )
}

export default RepairReport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer: {
    padding: 12,
    gap: 10,
  },
  form: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.gray_1,
  },
})

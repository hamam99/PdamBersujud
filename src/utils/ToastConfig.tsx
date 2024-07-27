import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'
import { StyleSheet } from 'react-native'

const ToastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{ backgroundColor: 'green', borderLeftColor: 'white' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text2Style={{
        fontSize: 14,
        color: 'white',
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      style={{ backgroundColor: 'red', borderLeftColor: 'white' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text2Style={{
        fontSize: 14,
        color: 'white',
      }}
    />
  ),
}

export default ToastConfig

const styles = StyleSheet.create({})

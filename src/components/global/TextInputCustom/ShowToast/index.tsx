import Toast from 'react-native-toast-message'

type IShow = {
  message: string
  type?: 'success' | 'error' | 'info'
  position?: 'bottom' | 'top'
}

const ShowToast = ({ message, type = 'success', position = 'top' }: IShow) => {
  if (!message) {
    if (type == 'error') message = 'Maaf terjadi kesalahan'
    else if (type == 'success') message = 'Berhasil'
  }

  Toast.show({
    type: type,
    text1: undefined,
    text2: message,
    position: position,
  })
}

export default ShowToast

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Fonts from '../../../contants/Fonts'
import Colors from '../../../contants/Colors'
import { IconChecks, IconChevronLeft } from 'tabler-icons-react-native'
import useNavigation from '../../../navigation/useNavigation'

type HeaderBarProps = {
  LeftIcon?: React.JSX.Element
  title?: string
  showBackButton?: boolean
  mode?: 'blue' | 'white'
}
const HeaderBar = ({ LeftIcon, title, mode = 'blue' }: HeaderBarProps) => {
  const { goBack } = useNavigation()
  const defaultStyle = HeaderMode[mode]
  return (
    <View style={[styles.container, defaultStyle?.container]}>
      {
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 16,
            top: 60 / 2 - 24 / 2,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onPress={goBack}
        >
          {LeftIcon ? (
            LeftIcon
          ) : (
            <IconChevronLeft
              size={24}
              color={mode === 'blue' ? Colors.white : Colors.black}
            />
          )}
        </TouchableOpacity>
      }
      <Text style={[styles.title, defaultStyle?.title]}>{title}</Text>
    </View>
  )
}

export default HeaderBar

const HeaderMode = {
  blue: {
    container: {
      backgroundColor: Colors.blue_1,
    },
    title: {
      color: Colors.white,
    },
  },
  white: {
    container: {
      backgroundColor: Colors.white,
    },
    title: {
      color: Colors.black,
    },
  },
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_1,
  },
  title: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.white,
  },
})

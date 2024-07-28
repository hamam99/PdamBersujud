import { FlatList, StyleSheet, Text, View } from 'react-native'
import Fonts from '../../../../contants/Fonts'
import Colors from '../../../../contants/Colors'
import FastImage from 'react-native-fast-image'

type IInformation = {
  title: string
  banner: string
  id: number
}
const Information = () => {
  const list: IInformation[] = [
    {
      id: 1,
      title: 'PDAM Akan publikasi kan aplikasi ',
      banner:
        'https://tirtabhagasasi.co.id/wp-content/uploads/2023/06/IMG_20230619_160450-1024x684.jpg',
    },
    {
      id: 2,
      title: 'Bayar tagihan di manapun anda berada',
      banner: 'https://pdamkabwajo.co.id/upload/benner-web-1.png',
    },
  ]

  const _renderItem = ({
    item,
    index,
  }: {
    item: IInformation
    index: number
  }) => {
    return (
      <View style={styles.itemContainer}>
        <FastImage
          source={{
            uri: item?.banner,
          }}
          style={styles.itemImage}
          resizeMode={'cover'}
        />
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item?.title}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info PDAM</Text>
      <FlatList
        data={list}
        renderItem={_renderItem}
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 14,
    color: Colors.black,
  },
  listContainer: {
    gap: 13,
  },
  itemContainer: {
    width: 200,
    height: 155,
    borderWidth: 1,
    borderColor: Colors.gray_1,
    padding: 8,
    borderRadius: 10,
    gap: 5,
  },
  itemImage: {
    height: 115,
    width: 182,
    borderRadius: 11,
  },
  itemTitle: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    lineHeight: 18,
    color: Colors.black,
  },
})

import { FlatList, Text, View } from 'react-native'
import Colors from '../../../../contants/Colors'
import Fonts from '../../../../contants/Fonts'

type HistoryItem = {
  name: string
  price: string
  dateTime: string
}

type HistoryTransactionProps = {
  data?: HistoryItem[]
}

const MockData: HistoryItem[] = [
  {
    name: 'Pulsa 50.000',
    price: '52.000',
    dateTime: '28-07-2024, 11 : 52',
  },
  {
    name: 'Pulsa 100.000',
    price: '102.000',
    dateTime: '28-07-2024, 12:00',
  },
]

const HistoryTransaction = ({ data = MockData }: HistoryTransactionProps) => {
  const _renderItem = ({
    item,
    index,
  }: {
    item: HistoryItem
    index: number
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.PoppinsBold,
            fontSize: 12,
          }}
        >
          {item?.name}
        </Text>
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.PoppinsBold,
              fontSize: 12,
              color: Colors.blue_1,
            }}
          >
            {item?.price}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.PoppinsBold,
              fontSize: 10,
              color: Colors.gray_5,
            }}
          >
            Pembelian {item?.dateTime}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.gray_3,
        paddingHorizontal: 14,
        paddingVertical: 18,
        borderRadius: 20,
        gap: 12,
      }}
    >
      <Text
        style={{
          fontFamily: Fonts.PoppinsBold,
          fontSize: 12,
          color: Colors.black,
        }}
      >
        Riwayat Transaksi Terakhir
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: Colors.gray_4,
          height: 1,
        }}
      />
      <FlatList
        data={data}
        renderItem={_renderItem}
        style={{}}
        contentContainerStyle={{
          gap: 16,
        }}
      />
    </View>
  )
}

export default HistoryTransaction

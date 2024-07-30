import { Text, TouchableOpacity, View } from 'react-native'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet'
import {
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Colors from '../../../../contants/Colors'
import Fonts from '../../../../contants/Fonts'
import { Button } from '../../../global'

export interface DataPackageModalProps {}
export type DataPackageModalRef = {
  openModal: () => void
  closeModal: () => void
}

type IDataPackage = {
  size: string
  price: string
  value: string
  id: number
}
const ListPulsa: IDataPackage[] = [
  {
    size: '5GB',
    value: '50000',
    price: '50.000',
    id: 1,
  },
  {
    size: '100GB',
    value: '150000',
    price: '150.000',
    id: 2,
  },
  {
    size: '150GB',
    value: '200000',
    price: '200.000',
    id: 3,
  },
  {
    size: '120GB',
    value: '100000',
    price: '100.000',
    id: 4,
  },
  {
    size: '200GB',
    value: '250000',
    price: '250.000',
    id: 5,
  },
  {
    size: '250GB',
    value: '300000',
    price: '300.000',
    id: 6,
  },
]

const DataPackageModal = (
  props: DataPackageModalProps,
  ref: Ref<DataPackageModalRef>,
) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [selected, setSelected] = useState<IDataPackage | null>(ListPulsa[0])

  const openModal = () => {
    bottomSheetRef?.current?.expand()
    bottomSheetRef?.current?.snapToIndex(0)
  }
  const closeModal = () => {
    bottomSheetRef?.current?.close()
  }

  useImperativeHandle(ref, () => ({
    openModal: openModal,
    closeModal: closeModal,
  }))

  const renderItem = useCallback(
    ({ item }: { item: IDataPackage }) => (
      <TouchableOpacity
        onPress={() => setSelected(item)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          borderWidth: 2,
          borderColor:
            item?.value === selected?.value ? Colors.blue_1 : Colors.gray_1,
          width: 100,
          height: 60,
          marginHorizontal: 8,
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.PoppinsRegular,
            fontSize: 14,
            color: Colors.gray_2,
          }}
        >
          {item?.size}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.PoppinsRegular,
            fontSize: 14,
            color: Colors.gray_2,
          }}
        >
          {item?.price}
        </Text>
      </TouchableOpacity>
    ),
    [selected],
  )
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['50%']}
      index={-1}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1}
          enableTouchThrough
        />
      )}
      style={{
        padding: 12,
        flex: 1,
      }}
      enablePanDownToClose
    >
      <View
        style={{
          flex: 1,
          marginBottom: 32,
          paddingTop: 16,
        }}
      >
        <BottomSheetFlatList
          data={ListPulsa}
          keyExtractor={i => i.value}
          renderItem={renderItem}
          contentContainerStyle={{
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          style={{}}
          numColumns={3}
          ItemSeparatorComponent={() => (
            <View style={{ height: 0, width: 16 }} />
          )}
        />
        <Button
          label="Pilih"
          onPress={() => {
            closeModal()
          }}
        />
      </View>
    </BottomSheet>
  )
}

export default forwardRef(DataPackageModal)

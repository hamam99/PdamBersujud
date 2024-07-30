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

export interface PulsaModalProps {}
export type PulsaModalRef = {
  openModal: () => void
  closeModal: () => void
}

type IPulsa = {
  label: string
  value: string
}
const ListPulsa: IPulsa[] = [
  {
    label: '5.000',
    value: '5000',
  },
  {
    label: '10.000',
    value: '10000',
  },
  {
    label: '25.000',
    value: '25000',
  },
  {
    label: '50.000',
    value: '50000',
  },
  {
    label: '75.000',
    value: '75000',
  },
  {
    label: '100.000',
    value: '100000',
  },
]

const PulsaModal = (props: PulsaModalProps, ref: Ref<PulsaModalRef>) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [selected, setSelected] = useState<IPulsa | null>(ListPulsa[0])

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
    ({ item }: { item: IPulsa }) => (
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
          {item?.label}
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

export default forwardRef(PulsaModal)

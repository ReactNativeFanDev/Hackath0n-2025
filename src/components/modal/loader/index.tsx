import {ActivityIndicator, Modal, View} from 'react-native';
import {GlobalColors} from '../../../constants/Global';

export default function LoaderModal({visible}: {visible: boolean}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: `${GlobalColors.textDark}80`,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '50%',
            alignSelf: 'center',
            paddingVertical: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: GlobalColors.secondary,
            borderRadius: 10,
          }}>
          <ActivityIndicator color={GlobalColors.primary100} size={'large'} />
        </View>
      </View>
    </Modal>
  );
}

import {Dimensions, Pressable} from 'react-native';
import SettingsSvg from '../../../../assets/svg/navigation/settingsSvg';
import {GlobalColors} from '../../../../constants/Global';

export default function SettingsHeaderButton() {
  return (
    <Pressable
      hitSlop={12}
      style={({pressed}) => [
        pressed && {opacity: 0.7},
        {paddingRight: Dimensions.get('screen').width * 0.05},
      ]}>
      <SettingsSvg
        size={Dimensions.get('screen').width * 0.07}
        fill={GlobalColors.grey}
      />
    </Pressable>
  );
}

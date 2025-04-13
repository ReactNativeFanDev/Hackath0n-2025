import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: GlobalColors.primary,
    borderRadius: 10,
  },
  textInputStyle: {
    fontSize: size(11),
    width: '80%',
    paddingLeft: 12,
    paddingVertical: 17,
    color: GlobalColors.textInPrimary,
    maxHeight: Dimensions.get('screen').height * 0.2,
  },
});

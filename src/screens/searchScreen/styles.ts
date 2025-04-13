import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  scrollView: {
    backgroundColor: GlobalColors.background,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingBottom: 10,
    paddingTop: 10,
  },
  pickerContainer: {
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  pickerText: {
    color: '#FFF',
    fontSize: size(12),
  },
  itemSeparator: {
    height: 10,
  },
  pressableContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GlobalColors.primary,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: Dimensions.get('screen').width * 0.2,
    height: Dimensions.get('screen').width * 0.3,
    borderRadius: 15,
  },
  itemContent: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: GlobalColors.textInPrimary,
    fontSize: size(16),
  },
  onPress: {
    opacity: 0.7,
  },
});

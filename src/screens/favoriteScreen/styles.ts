import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  emptyContainer: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessageBox: {
    backgroundColor: GlobalColors.activeColor,
    width: '70%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  emptyMessageText: {
    color: GlobalColors.textInActiveColor,
    fontSize: size(16),
    textAlign: 'center',
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
  itemDetailsContainer: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'space-around',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLabel: {
    color: GlobalColors.textInPrimary,
    fontSize: size(16),
  },
  itemValue: {
    color: GlobalColors.textInPrimary,
    fontSize: size(16),
  },
  onPress: {
    opacity: 0.6,
  },
});

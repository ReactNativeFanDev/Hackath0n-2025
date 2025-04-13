import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
  },
  headerText: {
    color: GlobalColors.textInBackground,
    fontSize: size(14),
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  announcementContainer: {
    backgroundColor: GlobalColors.primary,
    paddingTop: 10,
    borderRadius: 10,
  },
  cabinetContainer: {
    backgroundColor: GlobalColors.primary,
    paddingVertical: 10,
    borderRadius: 10,
  },
  emptyListContainer: {
    height: Dimensions.get('screen').height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.85,
  },
  emptyListText: {
    color: GlobalColors.textInPrimary,
    fontSize: size(16),
    textAlign: 'center',
  },
  itemSeparator: {
    width: 10,
  },
  image: {
    width: Dimensions.get('screen').width * 0.3,
    height: Dimensions.get('screen').height * 0.2,
    borderRadius: 10,
    backgroundColor: GlobalColors.primaryLight,
    overflow: 'hidden',
  },
  itemText: {
    alignSelf: 'center',
    fontSize: size(14),
    color: GlobalColors.textInPrimary,
    paddingVertical: 5,
  },
  addButton: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 12,
  },
  addButtonText: {
    textAlign: 'center',
    color: GlobalColors.textInActiveColor,
    fontSize: size(14),
  },
  cabinetItem: {
    width: Dimensions.get('screen').width * 0.3,
    height: Dimensions.get('screen').height * 0.2,
    borderRadius: 10,
    backgroundColor: GlobalColors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabinetText: {
    color: GlobalColors.textInPrimary,
    fontSize: size(17),
  },
  onPress: {
    opacity: 0.7,
  },
});

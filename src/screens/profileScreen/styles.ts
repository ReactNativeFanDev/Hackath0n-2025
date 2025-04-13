import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },
  avatar: {
    height: Dimensions.get('screen').width * 0.27,
    width: Dimensions.get('screen').width * 0.27,
    borderRadius: 15,
    backgroundColor: GlobalColors.primaryLight,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  inputContainer: {
    gap: 10,
  },
  userName: {
    fontSize: size(14),
    letterSpacing: 2,
    color: GlobalColors.textInBackground,
    fontWeight: '500',
  },
  textInputContainer: {
    width: Dimensions.get('screen').width * 0.6,
  },
  textInput: {
    paddingVertical: 10,
    width: '100%',
  },
  donateInputContainer: {
    width: '100%',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    color: GlobalColors.textInActiveColor,
    fontSize: size(14),
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: `${GlobalColors.textInBackground}60`,
    marginTop: 20,
  },
  itemSeparator: {
    height: 15,
  },
  listHeaderFooter: {
    height: 20,
  },
  flatList: {
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  announcementContainer: {
    flexDirection: 'row',
    backgroundColor: GlobalColors.primary,
    alignItems: 'center',
    gap: 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: Dimensions.get('screen').width * 0.06,
    paddingRight: 20,
  },
  announcementImage: {
    width: Dimensions.get('screen').width * 0.25,
    height: Dimensions.get('screen').width * 0.25,
    backgroundColor: GlobalColors.primaryLight,
  },
  announcementDetails: {
    justifyContent: 'space-around',
    height: Dimensions.get('screen').width * 0.25,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 10,
  },
  detailLabel: {
    color: GlobalColors.textInPrimary,
    fontSize: size(12),
  },
  detailValue: {
    color: GlobalColors.textInPrimary,
    fontSize: size(12),
  },
  flexSpacer: {
    flex: 1,
  },
  bottomSeparator: {
    height: 1,
    backgroundColor: `${GlobalColors.lightContainer}60`,
    marginBottom: 10,
  },
  logOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  logOutText: {
    fontSize: size(14),
    color: GlobalColors.red,
  },
  onPress: {
    opacity: 0.5,
  },
});

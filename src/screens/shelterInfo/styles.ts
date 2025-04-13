import {StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
  text: {
    color: GlobalColors.textInBackground,
    fontSize: size(18),
  },
  divider: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: `${GlobalColors.lightContainer}60`,
    marginTop: 12,
  },
  marginTop: {
    marginTop: 12,
  },
  donateContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: '2.5%',
    marginTop: 20,
  },
  donateText: {
    color: GlobalColors.textInActiveColor,
    textAlign: 'center',
    fontSize: size(20),
    fontWeight: '700',
  },
  donateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  donateButton: {
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 10,
  },
  donateButtonText: {
    color: GlobalColors.textInPrimaryLight,
    fontSize: size(16),
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  contactText: {
    fontSize: size(16),
    color: GlobalColors.textInBackground,
    textTransform: 'uppercase',
  },
  contactButton: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 15,
  },
  contactButtonText: {
    color: GlobalColors.textInActiveColor,
    fontSize: size(14),
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  description: {
    color: GlobalColors.textInBackground,
    fontSize: size(20),
    marginHorizontal: '5%',
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 12,
  },
  infoButton: {
    backgroundColor: GlobalColors.primaryLight,
    flex: 0.5,
    paddingVertical: 14,
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  infoButtonText: {
    color: GlobalColors.textInPrimary,
    fontWeight: '500',
    fontSize: size(14),
    textAlign: 'center',
  },
  onPress: {
    opacity: 0.6,
  },
});

import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  userName: {
    color: GlobalColors.textInBackground,
    textAlign: 'center',
    fontSize: size(16),
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  avatar: {
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.3,
    backgroundColor: GlobalColors.primaryLight,
    alignSelf: 'center',
    borderRadius: 15,
  },
  infoContainer: {
    gap: 10,
    marginBottom: 20,
  },
  infoHeader: {
    backgroundColor: GlobalColors.primary,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 10,
  },
  infoHeaderText: {
    color: GlobalColors.textInBackground,
    textAlign: 'center',
    fontSize: size(16),
    textTransform: 'uppercase',
  },
  infoText: {
    color: GlobalColors.textInBackground,
    textAlign: 'center',
    fontSize: size(16),
    textTransform: 'uppercase',
    marginTop: 10,
  },
  donateContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: '2.5%',
  },
  donateTitle: {
    color: GlobalColors.textInActiveColor,
    textAlign: 'center',
    fontSize: size(20),
    fontWeight: '700',
  },
  donateActions: {
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
  footerSpacing: {
    height: 50,
  },
  onPress: {
    opacity: 0.6,
  },
});

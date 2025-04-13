import {Dimensions, StyleSheet} from 'react-native';
import {DeviceSize, GlobalColors, size} from '../../constants/Global';

export const logoSize = DeviceSize.width * 0.05;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.background,
    flex: 1,
    paddingHorizontal: '5%',
    gap: 10,
    paddingBottom: Dimensions.get('screen').height * 0.05,
  },
  flexHalf: {
    flex: 0.5,
  },
  flexOne: {
    flex: 1,
  },
  subtitle: {
    fontSize: size(9),
    color: GlobalColors.textInBackground,
    marginBottom: 20,
  },
  title: {
    color: GlobalColors.textInBackground,
    fontSize: size(24),
    fontWeight: '800',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 33,
  },
  forgotPasswordAnswerText: {
    marginRight: 12,
    fontSize: DeviceSize.width * 0.04,
  },
  forgotPasswordText: {
    color: GlobalColors.textInBackground,
    fontSize: size(10),
  },
  forgotPasswordFocusedText: {
    color: GlobalColors.activeColor,
    fontWeight: '500',
    fontSize: size(10),
  },
  loginButtonContainer: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
  },
  loginButtonText: {
    fontSize: size(11),
    fontWeight: '500',
    color: GlobalColors.textInActiveColor,
  },
  singUpButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: `${GlobalColors.textInBackground}60`,
  },
  googleButtonContainer: {
    backgroundColor: GlobalColors.lightContainer,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    marginBottom: 50,
    gap: 10,
  },
  loginGoogleButtonText: {
    fontSize: size(11),
    fontWeight: '500',
    color: GlobalColors.textInLightContainer,
  },
  elseText: {
    fontSize: size(10),
    color: GlobalColors.textInBackground,
  },
  onPress: {
    opacity: 0.5,
  },
});

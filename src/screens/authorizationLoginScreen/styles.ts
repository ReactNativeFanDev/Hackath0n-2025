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
  title: {
    color: GlobalColors.textInBackground,
    fontSize: size(24),
    fontWeight: '800',
  },
  subtitle: {
    fontSize: size(9),
    color: GlobalColors.textInBackground,
    marginBottom: 20,
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
  elseText: {
    fontSize: size(10),
    color: GlobalColors.textInBackground,
  },
  loginButtonContainer: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
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
  loginButtonText: {
    fontSize: size(11),
    fontWeight: '500',
    color: GlobalColors.textInActiveColor,
  },
  loginGoogleButtonText: {
    fontSize: size(11),
    color: GlobalColors.textInLightContainer,
  },
  singUpButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  onPress: {
    opacity: 0.5,
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
});

import {StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
    gap: 10,
  },
  title: {
    color: GlobalColors.textInBackground,
    fontSize: size(24),
    fontWeight: '800',
  },
  questionText: {
    color: GlobalColors.textInBackground,
    fontSize: size(18),
    textAlign: 'left',
  },
  flexOne: {
    flex: 1,
  },
  flexHalf: {
    flex: 0.5,
  },
  chosenText: {
    fontSize: size(14),
    textAlign: 'center',
    color: GlobalColors.textInActiveColor,
  },
  unChosenText: {
    fontSize: size(14),
    textAlign: 'center',
    color: GlobalColors.textInPrimaryLight,
  },
  chosenContainer: {
    flex: 1,
    backgroundColor: GlobalColors.activeColor,
    paddingVertical: 10,
    borderRadius: 10,
  },
  unChosenContainer: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: GlobalColors.primaryLight,
  },
  cancelButtonContainer: {
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    flex: 0.5,
  },
  errorText: {
    color: GlobalColors.red,
    fontSize: size(12),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    flex: 1,
  },
  loginButtonTextCancel: {
    fontSize: size(11),
    fontWeight: '500',
    color: GlobalColors.textInPrimary,
  },
  loginButtonText: {
    fontSize: size(11),
    fontWeight: '500',
    color: GlobalColors.textInActiveColor,
  },
  onPress: {
    opacity: 0.7,
  },
  textInputContainer: {
    backgroundColor: GlobalColors.primary,
  },
  textInput: {
    color: GlobalColors.textInPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: GlobalColors.textInBackground,
    fontSize: size(14),
  },
});

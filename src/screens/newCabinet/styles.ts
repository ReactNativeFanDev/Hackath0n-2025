import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
  },
  subHeaderText: {
    fontSize: size(12),
    marginVertical: 5,
    color: GlobalColors.textInBackground,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 10,
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
  },
  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ageInput: {
    width: Dimensions.get('screen').width * 0.4,
  },
  addPhotoButtonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: GlobalColors.primaryLight,
    height: Dimensions.get('screen').height * 0.3,
  },
  emptyPhotoContainer: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.85,
    alignItems: 'center',
  },
  photoSeparator: {
    width: 5,
  },
  photoList: {
    width: '99%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  photoItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  photoItem: {
    width: Dimensions.get('screen').width * 0.3,
    height: '98%',
    borderRadius: 10,
  },
  changeButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: GlobalColors.activeColor,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  changeButtonText: {
    fontSize: size(14),
    color: GlobalColors.textInActiveColor,
  },
  errorText: {
    color: GlobalColors.red,
    fontSize: size(12),
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 5,
  },
  nextButtonContainer: {
    backgroundColor: GlobalColors.activeColor,
    paddingVertical: 17,
    borderRadius: 10,
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: size(14),
    color: GlobalColors.textInActiveColor,
    textAlign: 'center',
  },
  onPress: {
    opacity: 0.7,
  },
});

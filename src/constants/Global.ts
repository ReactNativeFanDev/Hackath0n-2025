import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const DeviceSize = {
  width: Dimensions.get('window').width,
  hight: Dimensions.get('window').height,
};

export const GlobalColors = {
  background: '#131313',
  textInBackground: '#FFFFFF',

  primary: '#1f2022',
  textInPrimary: '#FFFFFF',

  primaryLight: '#2b2c2e',
  textInPrimaryLight: '#FFFFFF',

  activeColor: '#4ada66',
  // activeColor: '#CBA8FF',
  textInActiveColor: '#1f2022',

  lightContainer: '#FFFFFF',
  textInLightContainer: '#1f2022',

  red: '#d8243c',
};

export const size = (fontSize: number) => {
  return RFValue(fontSize, 637);
};

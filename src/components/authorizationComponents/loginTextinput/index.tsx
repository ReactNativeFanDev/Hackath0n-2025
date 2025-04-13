import React, {JSX} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import {DeviceSize, GlobalColors} from '../../../constants/Global';
import {useState} from 'react';

interface LoginTextInputProps {
  logo?: (fill: string, stroke: string) => JSX.Element;
  textInputPlaceholder: string;
  value: string;
  onChangeText: (text: any) => void;
  placeholderTextColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
}

export const LoginTextInput = ({
  logo,
  textInputPlaceholder,
  value,
  onChangeText,
  containerStyle,
  placeholderTextColor = `${GlobalColors.textInPrimary}60`,
  textInputStyle,
  multiline = false,
}: LoginTextInputProps): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View style={StyleSheet.compose(styles.container, containerStyle)}>
      {logo &&
        logo(focus ? '#EB5E28' : '#CCC5B9', focus ? '#EB5E28' : '#CCC5B9')}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.textInputStyle,
          Platform.OS === 'android' && {height: DeviceSize.width * 0.1},
          textInputStyle,
        ]}
        placeholder={textInputPlaceholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardAppearance="dark"
        multiline={multiline}
      />
    </View>
  );
};

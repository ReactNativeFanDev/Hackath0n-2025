import React, {useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {logoSize, styles} from './styles.ts';
import useDataHook from './hooks/index.ts';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput/index.tsx';
import GoogleLogo from '../../assets/svg/authorization/GoogleLogo.tsx';

export const AuthorizationRegisterScreen: React.FC = () => {
  const {loginButtonPressHandler, createAccount, onGoogleButtonPress} =
    useDataHook();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View onTouchStart={() => Keyboard.dismiss()} style={styles.container}>
      <View style={styles.flexHalf} />

      <Text style={styles.title}>РЕЄСТРАЦІЯ</Text>

      <Text style={styles.subtitle}>
        Enter your email and password to log in
      </Text>

      <LoginTextInput
        textInputPlaceholder="Write your email"
        value={email}
        onChangeText={setEmail}
      />

      <LoginTextInput
        textInputPlaceholder="Write your password"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        onPress={() => createAccount(email, password)}
        style={({pressed}) => [
          styles.loginButtonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.loginButtonText}>Зареєструватися</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.elseText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <Pressable
        onPress={onGoogleButtonPress}
        style={({pressed}) => [
          styles.googleButtonContainer,
          pressed && styles.onPress,
        ]}>
        <GoogleLogo width={logoSize} height={logoSize} />
        <Text style={styles.loginGoogleButtonText}>Continue with Google</Text>
      </Pressable>

      <View style={styles.flexOne} />

      <View style={styles.singUpButtonContainer}>
        <Text style={styles.forgotPasswordText}>Already has account ?</Text>

        <Pressable
          onPress={loginButtonPressHandler}
          style={({pressed}) => pressed && styles.onPress}>
          <Text style={styles.forgotPasswordFocusedText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

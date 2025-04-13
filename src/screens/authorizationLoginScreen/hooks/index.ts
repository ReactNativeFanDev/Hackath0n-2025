import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {emailSignIn, googleSignIn} from '../../../redux/auth/authThunks';
import {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthorizationParamList, Routes} from '../../../navigation/types';

interface UseTranslatedResult {
  loginButtonPressHandler: () => void;
  onGoogleButtonPress: () => void;
  emailAndPasswordSignIn: (email: string, password: string) => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
}

export default function useDataHook(): UseTranslatedResult {
  const profile = useAppSelector(state => state.profile);
  const navigation = useNavigation<NavigationProp<AuthorizationParamList>>();
  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  function loginButtonPressHandler() {
    navigation.navigate(Routes.AuthorizationRegisterScreen);
  }

  async function onGoogleButtonPress() {
    dispatch(googleSignIn());
  }

  function emailAndPasswordSignIn(email: string, password: string) {
    dispatch(emailSignIn({email, password}));
  }

  function moveUserToAdditionalRegistration() {
    navigation.navigate(Routes.AuthorizationTypeScreen);
  }

  useEffect(() => {
    if (profile.email) {
      if (!profile.type) {
        moveUserToAdditionalRegistration();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return {
    loginButtonPressHandler,
    onGoogleButtonPress,
    emailAndPasswordSignIn,
    email,
    setEmail,
    password,
    setPassword,
  };
}

import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  emailSignIn,
  googleSignIn,
  register,
} from '../../../redux/auth/authThunks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthorizationParamList, Routes} from '../../../navigation/types';
import {useEffect} from 'react';

interface UseTranslatedResult {
  loginButtonPressHandler: () => void;
  onGoogleButtonPress: () => void;
  emailAndPasswordSignIn: (email: string, password: string) => void;
  createAccount: (email: string, password: string) => void;
}

export default function useDataHook(): UseTranslatedResult {
  const profile = useAppSelector(state => state.profile);
  const navigation = useNavigation<NavigationProp<AuthorizationParamList>>();
  const dispatch = useAppDispatch();

  function loginButtonPressHandler() {
    navigation.goBack();
  }

  async function onGoogleButtonPress() {
    dispatch(googleSignIn());
  }

  function emailAndPasswordSignIn(email: string, password: string) {
    dispatch(emailSignIn({email, password}));
  }

  function createAccount(email: string, password: string) {
    dispatch(register({email, password}));
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
    createAccount,
  };
}

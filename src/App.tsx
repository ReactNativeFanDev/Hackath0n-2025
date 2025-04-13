import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {AuthorizationNavigation, Navigation} from './navigation';
import store, {useAppDispatch, useAppSelector} from './redux/store';
import {subscribeToUserProfile} from './redux/profile/profileThunks';
import {signInSuccess, signOut} from './redux/auth/authSlice';
import {auth} from './utils/firebase/firebaseConfig';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RenderNavigation = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth?.user);
  const profile = useAppSelector(state => state.profile.type);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          signInSuccess({
            userId: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          }),
        );
      } else {
        dispatch(signOut());
      }
      setInitializing(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (!user?.userId) {
      return;
    }
    const unsubscribe = dispatch(subscribeToUserProfile(user.userId));

    return () => {
      unsubscribe();
    };
  }, [user?.userId, dispatch]);

  if (initializing) {
    return <View style={{flex: 1, backgroundColor: '#FFF'}} />;
  }

  if (!user || !profile) {
    return <AuthorizationNavigation />;
  }

  return <Navigation />;
};

export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <RenderNavigation />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
